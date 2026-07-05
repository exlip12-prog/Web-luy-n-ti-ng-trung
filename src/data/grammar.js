// Bộ câu hỏi ngữ pháp trắc nghiệm (HSK 3-4).
// Tập trung vào các điểm ngữ pháp trung cấp thường gặp.
//
// Mỗi câu hỏi gồm:
//   id       : mã định danh duy nhất
//   point    : điểm ngữ pháp (key trùng GRAMMAR_POINTS)
//   type     : 'fill' (điền vào chỗ trống) | 'choose' (chọn từ đúng) | 'order' (sắp xếp câu)
//   prompt   : đề bài (tiếng Trung, dùng ___ cho chỗ trống)
//   promptVi : gợi ý/ghi chú tiếng Việt (không bắt buộc)
//   options  : mảng lựa chọn (với 'order' là các mảnh câu cần sắp xếp)
//   answer   : với fill/choose là index đáp án đúng trong options;
//              với order là mảng index thể hiện thứ tự đúng
//   explain  : giải thích ngắn gọn tiếng Việt (hiện khi trả lời sai)

export const GRAMMAR_POINTS = [
  { key: 'all', label: '全部', vi: 'Tất cả' },
  { key: '把字句', label: '把字句', vi: 'Câu chữ 把' },
  { key: '被字句', label: '被字句', vi: 'Câu chữ 被 (bị động)' },
  { key: '趋向补语', label: '趋向补语', vi: 'Bổ ngữ xu hướng' },
  { key: '结果补语', label: '结果补语', vi: 'Bổ ngữ kết quả' },
  { key: '可能补语', label: '可能补语', vi: 'Bổ ngữ khả năng' },
]

export const GRAMMAR_QUESTIONS = [
  // ————————————————— 把字句 —————————————————
  {
    id: 'g-ba-01',
    point: '把字句',
    type: 'choose',
    prompt: '请你 ___ 门关上。',
    promptVi: 'Chọn từ đúng để hoàn thành câu.',
    options: ['把', '被', '在', '给'],
    answer: 0,
    explain:
      'Câu chữ 把 dùng để nhấn mạnh sự xử lý đối với tân ngữ: 把 + tân ngữ + động từ + thành phần khác. Ở đây "把门关上" = "đóng cửa lại".',
  },
  {
    id: 'g-ba-02',
    point: '把字句',
    type: 'fill',
    prompt: '妈妈 ___ 蛋糕切成了六块。',
    promptVi: 'Điền từ thích hợp vào chỗ trống.',
    options: ['把', '被', '让', '对'],
    answer: 0,
    explain:
      'Động từ có kết quả cụ thể ("切成六块" = cắt thành 6 miếng) thường dùng câu chữ 把 để nêu cách xử lý tân ngữ.',
  },
  {
    id: 'g-ba-03',
    point: '把字句',
    type: 'order',
    prompt: 'Sắp xếp thành câu đúng:',
    promptVi: 'Câu chữ 把: 把 + tân ngữ + động từ + bổ ngữ.',
    options: ['我', '把', '作业', '做完了'],
    answer: [0, 1, 2, 3],
    explain:
      'Trật tự câu chữ 把: Chủ ngữ + 把 + tân ngữ + động từ + thành phần bổ sung → 我把作业做完了 (Tôi đã làm xong bài tập).',
  },

  // ————————————————— 被字句 —————————————————
  {
    id: 'g-bei-01',
    point: '被字句',
    type: 'choose',
    prompt: '我的自行车 ___ 弟弟骑走了。',
    promptVi: 'Chọn từ đúng.',
    options: ['被', '把', '给', '让'],
    answer: 0,
    explain:
      'Câu bị động chữ 被: tân ngữ + 被 + chủ thể + động từ. "被弟弟骑走了" = "bị em trai lấy đi mất".',
  },
  {
    id: 'g-bei-02',
    point: '被字句',
    type: 'fill',
    prompt: '杯子 ___ 小猫打破了。',
    promptVi: 'Điền từ thích hợp.',
    options: ['被', '把', '在', '对'],
    answer: 0,
    explain:
      'Chủ thể chịu tác động đứng đầu câu, dùng 被 để chỉ bị động: "杯子被小猫打破了" = "cái cốc bị con mèo làm vỡ".',
  },
  {
    id: 'g-bei-03',
    point: '被字句',
    type: 'choose',
    prompt: '钱包里的钱都 ___ 花完了。',
    promptVi: 'Chọn từ đúng.',
    options: ['被', '把', '让', '向'],
    answer: 0,
    explain:
      'Trong câu bị động có thể lược bỏ chủ thể gây ra hành động, chỉ còn "被 + động từ": "钱都被花完了" = "tiền đều bị tiêu hết".',
  },

  // ————————————————— 趋向补语 —————————————————
  {
    id: 'g-qx-01',
    point: '趋向补语',
    type: 'choose',
    prompt: '老师走 ___ 教室了。',
    promptVi: 'Chọn bổ ngữ xu hướng đúng (thầy đi VÀO lớp học).',
    options: ['进来', '出去', '起来', '下去'],
    answer: 0,
    explain:
      'Bổ ngữ xu hướng chỉ hướng di chuyển. "走进来" = đi vào (hướng về phía người nói). 进 = vào, 来 = hướng lại gần.',
  },
  {
    id: 'g-qx-02',
    point: '趋向补语',
    type: 'choose',
    prompt: '天气冷了，快把外套穿 ___ 吧。',
    promptVi: 'Chọn bổ ngữ xu hướng đúng.',
    options: ['上', '下', '过', '开'],
    answer: 0,
    explain:
      '"穿上" dùng 上 làm bổ ngữ xu hướng phái sinh, chỉ động tác mặc vào/khoác lên người. Đây là nghĩa mở rộng của 趋向补语.',
  },
  {
    id: 'g-qx-03',
    point: '趋向补语',
    type: 'fill',
    prompt: '他从楼上跑 ___ 了。（chạy XUỐNG dưới, lại gần người nói）',
    promptVi: 'Điền bổ ngữ xu hướng kép.',
    options: ['下来', '上去', '进去', '出来'],
    answer: 0,
    explain:
      'Bổ ngữ xu hướng kép: 下 (xuống) + 来 (lại gần) → "跑下来" = chạy xuống (về phía người nói).',
  },

  // ————————————————— 结果补语 —————————————————
  {
    id: 'g-jg-01',
    point: '结果补语',
    type: 'choose',
    prompt: '这本书我已经看 ___ 了。',
    promptVi: 'Chọn bổ ngữ kết quả (đã đọc XONG).',
    options: ['完', '到', '见', '错'],
    answer: 0,
    explain:
      'Bổ ngữ kết quả nêu kết quả của động tác. "看完" = đọc/xem xong (完 = kết thúc, hoàn tất).',
  },
  {
    id: 'g-jg-02',
    point: '结果补语',
    type: 'choose',
    prompt: '你说的话我听 ___ 了，别担心。',
    promptVi: 'Chọn bổ ngữ kết quả (nghe HIỂU/RÕ).',
    options: ['懂', '完', '见', '错'],
    answer: 0,
    explain:
      '"听懂" = nghe hiểu. 懂 làm bổ ngữ kết quả chỉ việc hiểu được nội dung, khác với 听见 (nghe thấy âm thanh).',
  },
  {
    id: 'g-jg-03',
    point: '结果补语',
    type: 'fill',
    prompt: '对不起，我写 ___ 你的名字了。（viết SAI）',
    promptVi: 'Điền bổ ngữ kết quả.',
    options: ['错', '完', '好', '到'],
    answer: 0,
    explain:
      '"写错" = viết sai. 错 làm bổ ngữ kết quả chỉ động tác thực hiện có sai sót.',
  },

  // ————————————————— 可能补语 —————————————————
  {
    id: 'g-kn-01',
    point: '可能补语',
    type: 'choose',
    prompt: '声音太小了，我听 ___ 。',
    promptVi: 'Chọn bổ ngữ khả năng (KHÔNG nghe rõ được).',
    options: ['不清楚', '清楚了', '得清楚', '清楚过'],
    answer: 0,
    explain:
      'Bổ ngữ khả năng phủ định: động từ + 不 + bổ ngữ. "听不清楚" = không thể nghe rõ. Dạng khẳng định là "听得清楚".',
  },
  {
    id: 'g-kn-02',
    point: '可能补语',
    type: 'choose',
    prompt: '这么多菜，我一个人吃 ___ 。',
    promptVi: 'Chọn bổ ngữ khả năng (KHÔNG ăn hết nổi).',
    options: ['不完', '完了', '得完', '不了饭'],
    answer: 0,
    explain:
      '"吃不完" = không thể ăn hết. Cấu trúc: động từ + 不 + kết quả, diễn tả khả năng không thực hiện được.',
  },
  {
    id: 'g-kn-03',
    point: '可能补语',
    type: 'fill',
    prompt: '字太小，我看 ___ 。（KHÔNG nhìn thấy được）',
    promptVi: 'Điền bổ ngữ khả năng phủ định.',
    options: ['不见', '得见', '见了', '完了'],
    answer: 0,
    explain:
      '"看不见" = không nhìn thấy được. Đây là dạng phủ định của bổ ngữ khả năng "看得见".',
  },
]
