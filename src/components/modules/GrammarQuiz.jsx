import { useMemo, useState } from 'react'
import { GRAMMAR_QUESTIONS, GRAMMAR_POINTS } from '../../data/grammar'

// Module 2 · Quiz ngữ pháp trắc nghiệm (语法练习)
// - 3 dạng câu hỏi: fill (điền chỗ trống), choose (chọn từ), order (sắp xếp câu)
// - Chấm đúng/sai, hiện giải thích ngắn gọn tiếng Việt khi sai
// - Ghi nhận kết quả qua recordGrammar (lưu localStorage)
export default function GrammarQuiz({ recordGrammar }) {
  const [point, setPoint] = useState('all')
  const [index, setIndex] = useState(0)

  // Trạng thái trả lời cho câu hiện tại
  const [selected, setSelected] = useState(null) // fill/choose: index đáp án đã chọn
  const [ordered, setOrdered] = useState([]) // order: mảng index theo thứ tự người dùng xếp
  const [checked, setChecked] = useState(false)

  const questions = useMemo(() => {
    return point === 'all'
      ? GRAMMAR_QUESTIONS
      : GRAMMAR_QUESTIONS.filter((q) => q.point === point)
  }, [point])

  const total = questions.length
  const q = questions[index]

  function resetAnswer() {
    setSelected(null)
    setOrdered([])
    setChecked(false)
  }

  function changePoint(newPoint) {
    setPoint(newPoint)
    setIndex(0)
    resetAnswer()
  }

  function goTo(nextIndex) {
    if (total === 0) return
    setIndex((nextIndex + total) % total)
    resetAnswer()
  }

  // ——— Kiểm tra đáp án ———
  function isOrderCorrect() {
    if (ordered.length !== q.answer.length) return false
    return ordered.every((v, i) => v === q.answer[i])
  }

  const correct =
    q && q.type === 'order' ? isOrderCorrect() : selected === q?.answer

  function check() {
    if (!q) return
    if (q.type === 'order') {
      if (ordered.length !== q.options.length) return // chưa xếp đủ
    } else if (selected === null) {
      return // chưa chọn
    }
    setChecked(true)
    recordGrammar(q.type === 'order' ? isOrderCorrect() : selected === q.answer)
  }

  // ——— Thao tác cho dạng "order" ———
  function toggleFragment(optIndex) {
    if (checked) return
    setOrdered((prev) =>
      prev.includes(optIndex)
        ? prev.filter((i) => i !== optIndex)
        : [...prev, optIndex],
    )
  }

  if (total === 0) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-16 text-center text-slate-400">
        Chưa có câu hỏi cho điểm ngữ pháp này.
      </section>
    )
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-6">
      {/* Bộ lọc điểm ngữ pháp */}
      <div className="flex flex-wrap gap-2 justify-center mb-5">
        {GRAMMAR_POINTS.map((p) => (
          <button
            key={p.key}
            onClick={() => changePoint(p.key)}
            className={
              'px-3 py-1.5 rounded-full text-sm transition-colors ' +
              (point === p.key
                ? 'bg-brand-500 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-brand-50')
            }
            title={p.vi}
          >
            <span className="font-hanzi">{p.label}</span>
          </button>
        ))}
      </div>

      <div className="text-sm text-slate-500 mb-3 text-center">
        Câu {index + 1} / {total}
        <span className="mx-2 text-slate-300">·</span>
        <span className="font-hanzi text-brand-500">{q.point}</span>
      </div>

      <div className="card p-6">
        {/* Đề bài */}
        <p className="font-hanzi text-2xl leading-relaxed text-slate-800 text-center">
          {q.prompt}
        </p>
        {q.promptVi && (
          <p className="text-sm text-slate-400 text-center mt-2">{q.promptVi}</p>
        )}

        {/* ——— Khu vực trả lời ——— */}
        {q.type === 'order' ? (
          <OrderAnswer
            q={q}
            ordered={ordered}
            checked={checked}
            onToggle={toggleFragment}
          />
        ) : (
          <ChoiceAnswer
            q={q}
            selected={selected}
            checked={checked}
            onSelect={(i) => !checked && setSelected(i)}
          />
        )}

        {/* ——— Kết quả + giải thích ——— */}
        {checked && (
          <div
            className={
              'mt-5 rounded-xl p-4 text-sm ' +
              (correct
                ? 'bg-mint-50 text-mint-600'
                : 'bg-rose-50 text-rose-600')
            }
          >
            {correct ? (
              <p className="font-medium">✓ 正确！Chính xác.</p>
            ) : (
              <>
                <p className="font-medium">✗ 错了 · Chưa đúng.</p>
                <p className="mt-1 text-slate-600">
                  <span className="font-medium text-slate-700">Đáp án: </span>
                  <span className="font-hanzi">{correctAnswerText(q)}</span>
                </p>
                <p className="mt-2 text-slate-600 leading-relaxed">{q.explain}</p>
              </>
            )}
          </div>
        )}
      </div>

      {/* ——— Nút điều khiển ——— */}
      <div className="mt-5 flex items-center justify-between gap-3">
        <button className="btn-ghost" onClick={() => goTo(index - 1)}>
          ← Trước
        </button>
        {!checked ? (
          <button className="btn-primary flex-1" onClick={check}>
            检查 · Kiểm tra
          </button>
        ) : (
          <button className="btn-primary flex-1" onClick={() => goTo(index + 1)}>
            下一题 · Câu tiếp →
          </button>
        )}
        <button className="btn-ghost" onClick={() => goTo(index + 1)}>
          Sau →
        </button>
      </div>
    </section>
  )
}

// Hiển thị các phương án cho dạng fill/choose
function ChoiceAnswer({ q, selected, checked, onSelect }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      {q.options.map((opt, i) => {
        const isPicked = selected === i
        const isAnswer = q.answer === i
        let style =
          'border-slate-200 bg-white hover:bg-brand-50 text-slate-700'
        if (checked) {
          if (isAnswer) style = 'border-mint-500 bg-mint-50 text-mint-600'
          else if (isPicked) style = 'border-rose-400 bg-rose-50 text-rose-600'
          else style = 'border-slate-200 bg-white text-slate-400'
        } else if (isPicked) {
          style = 'border-brand-500 bg-brand-50 text-brand-700'
        }
        return (
          <button
            key={i}
            onClick={() => onSelect(i)}
            disabled={checked}
            className={
              'font-hanzi text-lg rounded-xl border-2 px-4 py-3 transition-colors ' +
              style
            }
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

// Hiển thị các mảnh câu cho dạng order
function OrderAnswer({ q, ordered, checked, onToggle }) {
  return (
    <div className="mt-6">
      {/* Khu vực câu đang xếp */}
      <div className="min-h-[52px] rounded-xl border-2 border-dashed border-brand-200 bg-brand-50/40 p-2 flex flex-wrap gap-2 items-center">
        {ordered.length === 0 ? (
          <span className="text-sm text-slate-400 px-2">
            Nhấn các mảnh bên dưới để xếp thành câu…
          </span>
        ) : (
          ordered.map((optIndex, pos) => (
            <span
              key={pos}
              onClick={() => onToggle(optIndex)}
              className="font-hanzi text-lg bg-brand-500 text-white rounded-lg px-3 py-1.5 cursor-pointer"
            >
              {q.options[optIndex]}
            </span>
          ))
        )}
      </div>

      {/* Kho các mảnh chưa dùng */}
      <div className="mt-3 flex flex-wrap gap-2">
        {q.options.map((opt, i) =>
          ordered.includes(i) ? null : (
            <button
              key={i}
              onClick={() => onToggle(i)}
              disabled={checked}
              className="font-hanzi text-lg rounded-lg border-2 border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-brand-50"
            >
              {opt}
            </button>
          ),
        )}
      </div>
    </div>
  )
}

// Ghép chuỗi đáp án đúng để hiển thị khi trả lời sai
function correctAnswerText(q) {
  if (q.type === 'order') {
    return q.answer.map((i) => q.options[i]).join(' ')
  }
  return q.options[q.answer]
}
