# 汉语中级练习 · Luyện tập tiếng Trung trung cấp (HSK 3–4)

Website luyện tập tiếng Trung trình độ trung cấp, dành cho học sinh Việt Nam.
Giải thích song ngữ Việt–Trung, chạy độc lập bằng React + Vite, lưu tiến độ
bằng `localStorage` (không cần đăng nhập, không cần database).

## Các module

1. **词汇卡 · Flashcard từ vựng** — lật thẻ Hán tự → pinyin → nghĩa tiếng Việt →
   câu ví dụ; đánh dấu "đã thuộc / chưa thuộc"; lọc theo chủ đề (购物, 旅游, 家庭, 饮食).
2. **语法练习 · Quiz ngữ pháp** — trắc nghiệm điền từ / chọn từ / sắp xếp câu, tập
   trung các điểm trung cấp: 把字句, 被字句, 趋向补语, 结果补语, 可能补语; hiện đáp án +
   giải thích tiếng Việt khi trả lời sai.
3. **完成句子 · Điền từ vào câu** — chọn từ/cụm từ đúng cho câu có chỗ trống; hiện câu
   hoàn chỉnh + pinyin + nghĩa tiếng Việt + giải thích.
4. **学习进度 · Theo dõi tiến độ** — số từ đã thuộc (theo chủ đề), số câu đúng/sai,
   tỉ lệ đúng, biểu đồ thanh đơn giản; nút xoá tiến độ.

## Yêu cầu

- [Node.js](https://nodejs.org/) phiên bản 18 trở lên (khuyến nghị 20+)
- npm (đi kèm Node.js)

## Cách chạy

```bash
# 1. Cài đặt các thư viện
npm install

# 2. Chạy môi trường phát triển (mở http://localhost:5173)
npm run dev

# 3. Đóng gói bản production (tạo thư mục dist/)
npm run build

# 4. Xem thử bản đã đóng gói
npm run preview
```

## Cấu trúc thư mục

```
.
├── index.html                # điểm vào HTML
├── package.json
├── vite.config.js
├── tailwind.config.js        # cấu hình màu pastel + font chữ Hán
├── postcss.config.js
└── src/
    ├── main.jsx              # điểm vào React
    ├── App.jsx               # bố cục + điều hướng giữa 4 module
    ├── index.css             # Tailwind + lớp tiện ích dùng chung (.btn, .card)
    ├── data/                 # BỘ DỮ LIỆU MẪU — giáo viên tự bổ sung tại đây
    │   ├── vocabulary.js     #   từ vựng theo chủ đề
    │   ├── grammar.js        #   câu hỏi ngữ pháp trắc nghiệm
    │   └── sentences.js      #   bài tập điền từ vào câu
    ├── hooks/
    │   └── useProgress.js    # lưu/đọc tiến độ qua localStorage
    └── components/
        ├── Header.jsx
        ├── Navbar.jsx
        └── modules/
            ├── Flashcards.jsx
            ├── GrammarQuiz.jsx
            ├── CompleteSentence.jsx
            └── Progress.jsx
```

## Tự bổ sung dữ liệu

Toàn bộ nội dung học nằm trong thư mục `src/data/`. Mỗi file có phần chú thích
mô tả cấu trúc dữ liệu ngay ở đầu file — chỉ cần thêm phần tử mới theo đúng mẫu
là nội dung sẽ tự xuất hiện trên web (không cần sửa code giao diện).

- `vocabulary.js` — thêm từ mới (nhớ đặt `id` duy nhất và `topic` khớp với danh sách `TOPICS`).
- `grammar.js` — thêm câu hỏi ngữ pháp.
- `sentences.js` — thêm bài tập điền từ.

## Ghi chú

- Tiến độ học được lưu ngay trên trình duyệt (`localStorage`). Xoá dữ liệu duyệt
  web hoặc dùng trình duyệt khác sẽ không thấy tiến độ cũ.
- Font chữ Hán ưu tiên dùng các font hệ thống (Noto Sans SC, PingFang SC,
  Microsoft YaHei…) để hiển thị rõ ràng.
