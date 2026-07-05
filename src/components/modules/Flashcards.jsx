import { useMemo, useState } from 'react'
import { VOCABULARY, TOPICS } from '../../data/vocabulary'

// Module 1 · Flashcard từ vựng (词汇卡)
// - Lật thẻ: Hán tự → pinyin → nghĩa tiếng Việt → câu ví dụ
// - Đánh dấu "đã thuộc" / "chưa thuộc" (lưu qua useProgress)
// - Lọc theo chủ đề
export default function Flashcards({ progress, setWordKnown }) {
  const [topic, setTopic] = useState('all')
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  // Danh sách từ theo chủ đề đang chọn
  const cards = useMemo(() => {
    const list =
      topic === 'all'
        ? VOCABULARY
        : VOCABULARY.filter((w) => w.topic === topic)
    return list
  }, [topic])

  const total = cards.length
  const card = cards[index]

  const knownCount = cards.filter((w) => progress.knownWords[w.id]).length

  function goTo(nextIndex) {
    setFlipped(false)
    setIndex((prev) => {
      if (total === 0) return 0
      return (nextIndex + total) % total
    })
  }

  function changeTopic(newTopic) {
    setTopic(newTopic)
    setIndex(0)
    setFlipped(false)
  }

  function markKnown(known) {
    if (!card) return
    setWordKnown(card.id, known)
    // Tự động chuyển sang thẻ tiếp theo cho mượt
    goTo(index + 1)
  }

  const isKnown = card ? !!progress.knownWords[card.id] : false

  return (
    <section className="max-w-2xl mx-auto px-4 py-6">
      {/* Bộ lọc chủ đề */}
      <div className="flex flex-wrap gap-2 justify-center mb-5">
        {TOPICS.map((t) => (
          <button
            key={t.key}
            onClick={() => changeTopic(t.key)}
            className={
              'px-3 py-1.5 rounded-full text-sm transition-colors ' +
              (topic === t.key
                ? 'bg-brand-500 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-brand-50')
            }
          >
            <span className="font-hanzi">{t.label}</span>
            <span className="text-xs opacity-80"> · {t.vi}</span>
          </button>
        ))}
      </div>

      {/* Thanh trạng thái */}
      <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
        <span>
          Thẻ {total === 0 ? 0 : index + 1} / {total}
        </span>
        <span className="text-mint-600 font-medium">
          Đã thuộc: {knownCount} / {total}
        </span>
      </div>

      {total === 0 ? (
        <div className="card p-10 text-center text-slate-400">
          Chưa có từ nào trong chủ đề này.
        </div>
      ) : (
        <>
          {/* Thẻ từ vựng */}
          <div
            onClick={() => setFlipped((f) => !f)}
            className="card relative cursor-pointer select-none p-8 min-h-[280px]
                       flex flex-col items-center justify-center text-center
                       hover:shadow-md transition-shadow"
          >
            {/* Nhãn "đã thuộc" */}
            {isKnown && (
              <span className="absolute top-3 right-3 text-xs bg-mint-100 text-mint-600 px-2 py-0.5 rounded-full">
                ✓ 已掌握
              </span>
            )}

            {!flipped ? (
              // Mặt trước: Hán tự + pinyin
              <div>
                <p className="font-hanzi text-6xl sm:text-7xl font-bold text-slate-800">
                  {card.hanzi}
                </p>
                <p className="mt-4 text-xl text-brand-600">{card.pinyin}</p>
                <p className="mt-6 text-xs text-slate-400">
                  Nhấn vào thẻ để xem nghĩa
                </p>
              </div>
            ) : (
              // Mặt sau: nghĩa tiếng Việt + câu ví dụ
              <div className="w-full">
                <p className="font-hanzi text-3xl font-semibold text-slate-800">
                  {card.hanzi}
                  <span className="ml-2 text-base text-brand-500">
                    {card.pinyin}
                  </span>
                </p>
                <p className="mt-2 text-lg text-rose-600 font-medium">
                  {card.meaning}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100 text-left">
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
                    例句 · Ví dụ
                  </p>
                  <p className="font-hanzi text-lg text-slate-800">
                    {card.example.hanzi}
                  </p>
                  <p className="text-sm text-brand-500">
                    {card.example.pinyin}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    {card.example.vi}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Nút điều khiển */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="btn-danger" onClick={() => markKnown(false)}>
              还没记住 · Chưa thuộc
            </button>
            <button className="btn-success" onClick={() => markKnown(true)}>
              已掌握 · Đã thuộc
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <button className="btn-ghost" onClick={() => goTo(index - 1)}>
              ← Trước
            </button>
            <button
              className="btn-ghost"
              onClick={() => setFlipped((f) => !f)}
            >
              🔄 Lật thẻ
            </button>
            <button className="btn-ghost" onClick={() => goTo(index + 1)}>
              Sau →
            </button>
          </div>
        </>
      )}
    </section>
  )
}
