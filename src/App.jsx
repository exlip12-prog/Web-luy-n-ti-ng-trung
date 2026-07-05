import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Flashcards from './components/modules/Flashcards'
import GrammarQuiz from './components/modules/GrammarQuiz'
import CompleteSentence from './components/modules/CompleteSentence'
import Progress from './components/modules/Progress'
import { useProgress } from './hooks/useProgress'

// Danh sách 4 module — dùng chung cho Navbar và bộ định tuyến đơn giản
const MODULES = [
  { key: 'flashcards', label: '词汇卡', vi: 'Flashcard' },
  { key: 'grammar', label: '语法练习', vi: 'Ngữ pháp' },
  { key: 'sentence', label: '完成句子', vi: 'Điền từ' },
  { key: 'progress', label: '学习进度', vi: 'Tiến độ' },
]

export default function App() {
  const [active, setActive] = useState('flashcards')
  const progressApi = useProgress()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar modules={MODULES} active={active} onChange={setActive} />

      <main className="flex-1">
        {active === 'flashcards' && (
          <Flashcards
            progress={progressApi.progress}
            setWordKnown={progressApi.setWordKnown}
          />
        )}
        {active === 'grammar' && (
          <GrammarQuiz
            recordGrammar={progressApi.recordGrammar}
          />
        )}
        {active === 'sentence' && (
          <CompleteSentence
            recordSentence={progressApi.recordSentence}
          />
        )}
        {active === 'progress' && (
          <Progress
            progress={progressApi.progress}
            resetProgress={progressApi.resetProgress}
          />
        )}
      </main>

      <footer className="text-center text-xs text-slate-400 py-6">
        汉语中级练习 · Luyện tập tiếng Trung trung cấp — HSK 3–4
      </footer>
    </div>
  )
}
