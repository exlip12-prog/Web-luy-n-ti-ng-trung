import { VOCABULARY, TOPICS } from '../../data/vocabulary'
import { GRAMMAR_QUESTIONS } from '../../data/grammar'
import { SENTENCES } from '../../data/sentences'

// Module 4 · Theo dõi tiến độ (学习进度)
// - Số từ đã thuộc, số câu đúng/sai (ngữ pháp + điền từ)
// - Biểu đồ tiến độ đơn giản (thanh ngang thuần CSS)
// - Nút xoá tiến độ
export default function Progress({ progress, resetProgress }) {
  const totalWords = VOCABULARY.length
  const knownCount = Object.keys(progress.knownWords).length

  const g = progress.grammar
  const s = progress.sentences
  const gTotal = g.correct + g.wrong
  const sTotal = s.correct + s.wrong
  const totalAnswered = gTotal + sTotal
  const totalCorrect = g.correct + s.correct

  const overallAccuracy =
    totalAnswered === 0 ? 0 : Math.round((totalCorrect / totalAnswered) * 100)

  function handleReset() {
    if (
      window.confirm(
        'Xoá toàn bộ tiến độ học? Hành động này không thể hoàn tác.',
      )
    ) {
      resetProgress()
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-6">
      {/* Thẻ tổng quan */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <StatCard
          value={`${knownCount}/${totalWords}`}
          label="Từ đã thuộc"
          hanzi="已掌握"
          color="text-brand-600"
        />
        <StatCard
          value={totalCorrect}
          label="Câu trả lời đúng"
          hanzi="答对"
          color="text-mint-600"
        />
        <StatCard
          value={`${overallAccuracy}%`}
          label="Tỉ lệ đúng"
          hanzi="正确率"
          color="text-rose-600"
        />
      </div>

      {/* Tiến độ từ vựng */}
      <div className="card p-5 mb-4">
        <h3 className="font-hanzi text-lg text-slate-800 mb-1">
          词汇 · Từ vựng
        </h3>
        <p className="text-sm text-slate-400 mb-3">
          Đã thuộc {knownCount} / {totalWords} từ
        </p>
        <ProgressBar
          value={knownCount}
          max={totalWords}
          color="bg-brand-500"
        />

        {/* Chi tiết theo chủ đề */}
        <div className="mt-4 space-y-2">
          {TOPICS.filter((t) => t.key !== 'all').map((t) => {
            const wordsInTopic = VOCABULARY.filter((w) => w.topic === t.key)
            const known = wordsInTopic.filter(
              (w) => progress.knownWords[w.id],
            ).length
            return (
              <div key={t.key} className="flex items-center gap-3 text-sm">
                <span className="w-24 flex-shrink-0 text-slate-600">
                  <span className="font-hanzi">{t.label}</span>
                  <span className="text-xs text-slate-400"> {t.vi}</span>
                </span>
                <div className="flex-1">
                  <ProgressBar
                    value={known}
                    max={wordsInTopic.length}
                    color="bg-brand-400"
                    thin
                  />
                </div>
                <span className="w-12 text-right text-slate-400 tabular-nums">
                  {known}/{wordsInTopic.length}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Kết quả luyện tập */}
      <div className="card p-5 mb-4">
        <h3 className="font-hanzi text-lg text-slate-800 mb-3">
          练习结果 · Kết quả luyện tập
        </h3>
        <ResultRow
          label="语法练习"
          vi="Ngữ pháp"
          correct={g.correct}
          wrong={g.wrong}
          bank={GRAMMAR_QUESTIONS.length}
        />
        <div className="h-3" />
        <ResultRow
          label="完成句子"
          vi="Điền từ"
          correct={s.correct}
          wrong={s.wrong}
          bank={SENTENCES.length}
        />
      </div>

      {/* Nút xoá tiến độ */}
      <div className="text-center">
        <button className="btn-ghost text-rose-500" onClick={handleReset}>
          🗑 Xoá toàn bộ tiến độ
        </button>
        {progress.updatedAt && (
          <p className="mt-2 text-xs text-slate-400">
            Cập nhật lần cuối:{' '}
            {new Date(progress.updatedAt).toLocaleString('vi-VN')}
          </p>
        )}
      </div>
    </section>
  )
}

function StatCard({ value, label, hanzi, color }) {
  return (
    <div className="card p-4 text-center">
      <p className="font-hanzi text-xs text-slate-400">{hanzi}</p>
      <p className={'text-2xl font-bold mt-1 ' + color}>{value}</p>
      <p className="text-xs text-slate-500 mt-1 leading-tight">{label}</p>
    </div>
  )
}

function ProgressBar({ value, max, color, thin }) {
  const pct = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100))
  return (
    <div
      className={
        'w-full bg-slate-100 rounded-full overflow-hidden ' +
        (thin ? 'h-2' : 'h-3')
      }
    >
      <div
        className={'h-full rounded-full transition-all duration-500 ' + color}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

// Một hàng kết quả: thanh xếp chồng đúng (xanh) / sai (đỏ)
function ResultRow({ label, vi, correct, wrong, bank }) {
  const total = correct + wrong
  const accuracy = total === 0 ? 0 : Math.round((correct / total) * 100)
  const correctPct = total === 0 ? 0 : (correct / total) * 100
  const wrongPct = total === 0 ? 0 : (wrong / total) * 100

  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-1.5">
        <span className="text-slate-600">
          <span className="font-hanzi">{label}</span>
          <span className="text-xs text-slate-400"> · {vi}</span>
        </span>
        <span className="text-slate-400 text-xs tabular-nums">
          {total > 0 ? (
            <>
              đúng {correct} · sai {wrong} ·{' '}
              <span className="text-mint-600 font-medium">{accuracy}%</span>
            </>
          ) : (
            <span className="italic">chưa làm câu nào (ngân hàng: {bank})</span>
          )}
        </span>
      </div>
      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
        <div
          className="h-full bg-mint-500 transition-all duration-500"
          style={{ width: `${correctPct}%` }}
        />
        <div
          className="h-full bg-rose-400 transition-all duration-500"
          style={{ width: `${wrongPct}%` }}
        />
      </div>
    </div>
  )
}
