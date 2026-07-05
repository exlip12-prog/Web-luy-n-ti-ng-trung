// Header: tên tiếng Trung + phụ đề tiếng Việt
export default function Header() {
  return (
    <header className="text-center pt-8 pb-4 px-4">
      <h1 className="font-hanzi text-4xl sm:text-5xl font-bold text-brand-700 tracking-wide">
        汉语中级练习
      </h1>
      <p className="mt-2 text-slate-500 text-sm sm:text-base">
        Luyện tập tiếng Trung trung cấp · HSK 3–4
      </p>
    </header>
  )
}
