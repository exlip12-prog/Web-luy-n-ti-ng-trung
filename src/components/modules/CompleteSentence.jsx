import { useState } from 'react'
import { SENTENCES } from '../../data/sentences'

// Module 3 · Bài tập điền từ vào câu (完成句子)
// - Câu có chỗ trống (___), học sinh chọn từ/cụm từ đúng
// - Sau khi kiểm tra: hiện câu hoàn chỉnh, pinyin, nghĩa tiếng Việt, giải thích
// - Ghi nhận kết quả qua recordSentence (lưu localStorage)
export default function CompleteSentence({ recordSentence }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [checked, setChecked] = useState(false)

  const total = SENTENCES.length
  const item = SENTENCES[index]
  const correct = selected === item.answer

  function resetAnswer() {
    setSelected(null)
    setChecked(false)
  }

  function goTo(nextIndex) {
    setIndex((nextIndex + total) % total)
    resetAnswer()
  }

  function check() {
    if (selected === null) return
    setChecked(true)
    recordSentence(selected === item.answer)
  }

  // Câu đã điền đáp án được chọn (thay ___ bằng phương án người dùng/đáp án đúng)
  function filledSentence(optIndex) {
    return item.sentence.replace('___', item.options[optIndex])
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-6">
      <div className="text-sm text-slate-500 mb-3 text-center">
        Câu {index + 1} / {total}
      </div>

      <div className="card p-6">
        {/* Câu có chỗ trống */}
        <p className="font-hanzi text-2xl leading-relaxed text-slate-800 text-center">
          {renderWithBlank(item.sentence, checked ? item.options[item.answer] : null)}
        </p>

        {/* Các phương án */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {item.options.map((opt, i) => {
            const isPicked = selected === i
            const isAnswer = item.answer === i
            let style = 'border-slate-200 bg-white hover:bg-brand-50 text-slate-700'
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
                onClick={() => !checked && setSelected(i)}
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

        {/* Kết quả + câu hoàn chỉnh + giải thích */}
        {checked && (
          <div
            className={
              'mt-5 rounded-xl p-4 text-sm ' +
              (correct ? 'bg-mint-50' : 'bg-rose-50')
            }
          >
            <p className={'font-medium ' + (correct ? 'text-mint-600' : 'text-rose-600')}>
              {correct ? '✓ 正确！Chính xác.' : '✗ 错了 · Chưa đúng.'}
            </p>

            <div className="mt-3 pt-3 border-t border-white/60">
              <p className="font-hanzi text-lg text-slate-800">
                {filledSentence(item.answer)}
              </p>
              <p className="text-sm text-brand-500">{item.pinyin}</p>
              <p className="text-sm text-slate-500 mt-1">{item.vi}</p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {item.explain}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Nút điều khiển */}
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

// Hiển thị câu, thay ___ bằng ô trống có gạch chân, hoặc bằng đáp án khi đã kiểm tra
function renderWithBlank(sentence, fillText) {
  const parts = sentence.split('___')
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 &&
        (fillText ? (
          <span className="text-mint-600 font-semibold underline decoration-mint-400 decoration-2 underline-offset-4">
            {fillText}
          </span>
        ) : (
          <span className="inline-block align-middle mx-1 w-16 border-b-2 border-brand-400" />
        ))}
    </span>
  ))
}
