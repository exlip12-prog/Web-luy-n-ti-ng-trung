// Thanh điều hướng chuyển đổi giữa 4 module.
// Danh sách module được truyền từ App qua props để dễ mở rộng.
export default function Navbar({ modules, active, onChange }) {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-2 sm:px-4">
        <ul className="flex gap-1 sm:gap-2 overflow-x-auto py-2 no-scrollbar">
          {modules.map((m) => {
            const isActive = m.key === active
            return (
              <li key={m.key} className="flex-shrink-0">
                <button
                  onClick={() => onChange(m.key)}
                  className={
                    'flex flex-col items-center px-3 sm:px-4 py-2 rounded-xl transition-colors ' +
                    (isActive
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-brand-50')
                  }
                >
                  <span className="font-hanzi text-base sm:text-lg leading-tight">
                    {m.label}
                  </span>
                  <span
                    className={
                      'text-[11px] sm:text-xs ' +
                      (isActive ? 'text-brand-100' : 'text-slate-400')
                    }
                  >
                    {m.vi}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
