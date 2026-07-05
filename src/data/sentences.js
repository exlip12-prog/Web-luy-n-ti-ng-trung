// Bài tập điền từ/cụm từ vào câu (完成句子).
// Cho một câu có chỗ trống (___), học sinh chọn phương án đúng.
//
// Mỗi câu gồm:
//   id       : mã định danh duy nhất
//   sentence : câu tiếng Trung, dùng ___ cho chỗ trống
//   pinyin   : phiên âm của cả câu (để tham khảo)
//   vi       : nghĩa tiếng Việt của câu (đáp án hoàn chỉnh)
//   options  : các phương án lựa chọn
//   answer   : index phương án đúng trong options
//   explain  : giải thích ngắn gọn tiếng Việt

export const SENTENCES = [
  {
    id: 's-01',
    sentence: '外面下雨了，你 ___ 带伞。',
    pinyin: 'Wàimiàn xià yǔ le, nǐ zuìhǎo dài sǎn.',
    vi: 'Bên ngoài mưa rồi, bạn tốt nhất nên mang ô.',
    options: ['最好', '一定', '从来', '刚才'],
    answer: 0,
    explain: '"最好" = tốt nhất là, dùng để đưa ra lời khuyên nhẹ nhàng.',
  },
  {
    id: 's-02',
    sentence: '他学习很努力，___ 考试成绩很好。',
    pinyin: 'Tā xuéxí hěn nǔlì, suǒyǐ kǎoshì chéngjì hěn hǎo.',
    vi: 'Anh ấy học rất chăm, cho nên kết quả thi rất tốt.',
    options: ['所以', '因为', '但是', '虽然'],
    answer: 0,
    explain: '"所以" nối vế chỉ kết quả (nguyên nhân → kết quả). Ở đây chăm học là nguyên nhân.',
  },
  {
    id: 's-03',
    sentence: '这道题太难了，我 ___ 也做不出来。',
    pinyin: 'Zhè dào tí tài nán le, wǒ zěnme yě zuò bù chūlái.',
    vi: 'Bài này khó quá, tôi làm thế nào cũng không ra.',
    options: ['怎么', '什么', '哪儿', '多少'],
    answer: 0,
    explain: '"怎么…也…" = làm thế nào cũng…, nhấn mạnh dù cố gắng thế nào kết quả vẫn vậy.',
  },
  {
    id: 's-04',
    sentence: '你 ___ 参加这次比赛，就要好好准备。',
    pinyin: 'Nǐ jìrán cānjiā zhè cì bǐsài, jiù yào hǎohǎo zhǔnbèi.',
    vi: 'Bạn đã tham gia cuộc thi lần này thì phải chuẩn bị cho tốt.',
    options: ['既然', '虽然', '如果', '不但'],
    answer: 0,
    explain: '"既然…就…" = đã…thì…, nêu tiền đề đã biết rồi đưa ra kết luận.',
  },
  {
    id: 's-05',
    sentence: '妹妹 ___ 唱歌 ___ 跳舞，非常开心。',
    pinyin: 'Mèimei yìbiān chànggē yìbiān tiàowǔ, fēicháng kāixīn.',
    vi: 'Em gái vừa hát vừa nhảy, rất vui.',
    options: ['一边……一边', '一……就', '越……越', '不是……而是'],
    answer: 0,
    explain: '"一边……一边……" = vừa…vừa…, diễn tả hai hành động xảy ra đồng thời.',
  },
  {
    id: 's-06',
    sentence: '天气 ___ 热，我 ___ 不想出门。',
    pinyin: 'Tiānqì yuè rè, wǒ yuè bù xiǎng chūmén.',
    vi: 'Trời càng nóng, tôi càng không muốn ra ngoài.',
    options: ['越……越', '又……又', '一……就', '虽然……但是'],
    answer: 0,
    explain: '"越……越……" = càng…càng…, chỉ mức độ tăng lên song song.',
  },
  {
    id: 's-07',
    sentence: '我们 ___ 走路 ___ 坐车，你决定吧。',
    pinyin: 'Wǒmen huòzhě zǒulù huòzhě zuòchē, nǐ juédìng ba.',
    vi: 'Chúng ta hoặc đi bộ hoặc đi xe, bạn quyết định đi.',
    options: ['或者……或者', '因为……所以', '不但……而且', '一……就'],
    answer: 0,
    explain: '"或者……或者……" dùng trong câu trần thuật để nêu các khả năng lựa chọn.',
  },
  {
    id: 's-08',
    sentence: '他 ___ 会说汉语，___ 会说英语。',
    pinyin: 'Tā bùdàn huì shuō Hànyǔ, érqiě huì shuō Yīngyǔ.',
    vi: 'Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Anh.',
    options: ['不但……而且', '虽然……但是', '如果……就', '只有……才'],
    answer: 0,
    explain: '"不但……而且……" = không những…mà còn…, dùng để tăng tiến, bổ sung ý.',
  },
  {
    id: 's-09',
    sentence: '___ 明天不下雨，我们就去公园。',
    pinyin: 'Rúguǒ míngtiān bù xià yǔ, wǒmen jiù qù gōngyuán.',
    vi: 'Nếu ngày mai không mưa, chúng ta sẽ đi công viên.',
    options: ['如果', '因为', '既然', '不管'],
    answer: 0,
    explain: '"如果……就……" = nếu…thì…, nêu điều kiện giả định.',
  },
  {
    id: 's-10',
    sentence: '这件事 ___ 你不说，我也知道。',
    pinyin: 'Zhè jiàn shì jíshǐ nǐ bù shuō, wǒ yě zhīdào.',
    vi: 'Chuyện này dù bạn không nói, tôi cũng biết.',
    options: ['即使', '因为', '只要', '为了'],
    answer: 0,
    explain: '"即使……也……" = dù cho…cũng…, nêu giả thiết nhượng bộ.',
  },
  {
    id: 's-11',
    sentence: '为了 ___ 好成绩，他每天都复习到很晚。',
    pinyin: 'Wèile qǔdé hǎo chéngjì, tā měitiān dōu fùxí dào hěn wǎn.',
    vi: 'Để đạt được thành tích tốt, anh ấy ngày nào cũng ôn bài đến rất khuya.',
    options: ['取得', '参加', '打开', '举行'],
    answer: 0,
    explain: '"取得成绩" = đạt được thành tích. 取得 thường đi với 成绩/成功/进步.',
  },
  {
    id: 's-12',
    sentence: '只有多练习，___ 能学好一门外语。',
    pinyin: 'Zhǐyǒu duō liànxí, cái néng xuéhǎo yì mén wàiyǔ.',
    vi: 'Chỉ có luyện tập nhiều mới có thể học giỏi một ngoại ngữ.',
    options: ['才', '就', '还', '也'],
    answer: 0,
    explain: '"只有……才……" = chỉ có…mới…, nhấn mạnh điều kiện duy nhất. Lưu ý dùng 才 chứ không dùng 就.',
  },
]
