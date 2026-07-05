import { useCallback, useEffect, useState } from 'react'

// Hook quản lý tiến độ học, lưu vào localStorage (không cần đăng nhập).
//
// Cấu trúc dữ liệu tiến độ:
// {
//   knownWords:   { [vocabId]: true }   // các từ đã đánh dấu "đã thuộc"
//   grammar:      { correct: number, wrong: number }
//   sentences:    { correct: number, wrong: number }
//   updatedAt:    số (timestamp)
// }

const STORAGE_KEY = 'hsk-practice-progress'

const DEFAULT_PROGRESS = {
  knownWords: {},
  grammar: { correct: 0, wrong: 0 },
  sentences: { correct: 0, wrong: 0 },
  updatedAt: null,
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_PROGRESS }
    const parsed = JSON.parse(raw)
    // Hợp nhất với mặc định để tránh lỗi khi cấu trúc thay đổi
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      knownWords: { ...parsed.knownWords },
      grammar: { ...DEFAULT_PROGRESS.grammar, ...parsed.grammar },
      sentences: { ...DEFAULT_PROGRESS.sentences, ...parsed.sentences },
    }
  } catch {
    return { ...DEFAULT_PROGRESS }
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  // Ghi vào localStorage mỗi khi tiến độ thay đổi
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // Bỏ qua nếu localStorage không khả dụng (chế độ riêng tư...)
    }
  }, [progress])

  // Đánh dấu một từ là đã thuộc / chưa thuộc
  const setWordKnown = useCallback((wordId, known) => {
    setProgress((prev) => {
      const knownWords = { ...prev.knownWords }
      if (known) knownWords[wordId] = true
      else delete knownWords[wordId]
      return { ...prev, knownWords, updatedAt: Date.now() }
    })
  }, [])

  // Ghi nhận một lần trả lời quiz ngữ pháp
  const recordGrammar = useCallback((isCorrect) => {
    setProgress((prev) => ({
      ...prev,
      grammar: {
        correct: prev.grammar.correct + (isCorrect ? 1 : 0),
        wrong: prev.grammar.wrong + (isCorrect ? 0 : 1),
      },
      updatedAt: Date.now(),
    }))
  }, [])

  // Ghi nhận một lần trả lời bài điền từ
  const recordSentence = useCallback((isCorrect) => {
    setProgress((prev) => ({
      ...prev,
      sentences: {
        correct: prev.sentences.correct + (isCorrect ? 1 : 0),
        wrong: prev.sentences.wrong + (isCorrect ? 0 : 1),
      },
      updatedAt: Date.now(),
    }))
  }, [])

  // Xoá toàn bộ tiến độ
  const resetProgress = useCallback(() => {
    setProgress({ ...DEFAULT_PROGRESS, updatedAt: Date.now() })
  }, [])

  return {
    progress,
    setWordKnown,
    recordGrammar,
    recordSentence,
    resetProgress,
  }
}
