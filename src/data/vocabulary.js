// Bộ dữ liệu từ vựng mẫu (HSK 3-4), phân loại theo chủ đề.
// Giáo viên có thể tự bổ sung thêm từ theo cấu trúc dưới đây.
//
// Mỗi từ gồm:
//   id      : mã định danh duy nhất (dùng để lưu tiến độ)
//   hanzi   : chữ Hán
//   pinyin  : phiên âm
//   meaning : nghĩa tiếng Việt
//   example : { hanzi, pinyin, vi } — câu ví dụ song ngữ

// Danh sách chủ đề — key trùng với thuộc tính "topic" của từ vựng
export const TOPICS = [
  { key: 'all', label: '全部', vi: 'Tất cả' },
  { key: '购物', label: '购物', vi: 'Mua sắm' },
  { key: '旅游', label: '旅游', vi: 'Du lịch' },
  { key: '家庭', label: '家庭', vi: 'Gia đình' },
  { key: '饮食', label: '饮食', vi: 'Ăn uống' },
]

export const VOCABULARY = [
  // ————————————————————— 购物 · Mua sắm —————————————————————
  {
    id: 'v-gw-01',
    topic: '购物',
    hanzi: '打折',
    pinyin: 'dǎzhé',
    meaning: 'giảm giá',
    example: {
      hanzi: '这件衣服打八折。',
      pinyin: 'Zhè jiàn yīfú dǎ bā zhé.',
      vi: 'Chiếc áo này giảm giá còn 80%.',
    },
  },
  {
    id: 'v-gw-02',
    topic: '购物',
    hanzi: '便宜',
    pinyin: 'piányi',
    meaning: 'rẻ',
    example: {
      hanzi: '这家店的水果很便宜。',
      pinyin: 'Zhè jiā diàn de shuǐguǒ hěn piányi.',
      vi: 'Trái cây ở cửa hàng này rất rẻ.',
    },
  },
  {
    id: 'v-gw-03',
    topic: '购物',
    hanzi: '质量',
    pinyin: 'zhìliàng',
    meaning: 'chất lượng',
    example: {
      hanzi: '这个牌子的质量很好。',
      pinyin: 'Zhège páizi de zhìliàng hěn hǎo.',
      vi: 'Chất lượng của thương hiệu này rất tốt.',
    },
  },
  {
    id: 'v-gw-04',
    topic: '购物',
    hanzi: '付钱',
    pinyin: 'fùqián',
    meaning: 'trả tiền',
    example: {
      hanzi: '你可以用手机付钱。',
      pinyin: 'Nǐ kěyǐ yòng shǒujī fùqián.',
      vi: 'Bạn có thể trả tiền bằng điện thoại.',
    },
  },
  {
    id: 'v-gw-05',
    topic: '购物',
    hanzi: '售货员',
    pinyin: 'shòuhuòyuán',
    meaning: 'nhân viên bán hàng',
    example: {
      hanzi: '售货员很热情地帮我介绍。',
      pinyin: 'Shòuhuòyuán hěn rèqíng de bāng wǒ jièshào.',
      vi: 'Nhân viên bán hàng nhiệt tình giới thiệu giúp tôi.',
    },
  },
  {
    id: 'v-gw-06',
    topic: '购物',
    hanzi: '合适',
    pinyin: 'héshì',
    meaning: 'phù hợp, vừa vặn',
    example: {
      hanzi: '这双鞋大小很合适。',
      pinyin: 'Zhè shuāng xié dàxiǎo hěn héshì.',
      vi: 'Đôi giày này cỡ rất vừa vặn.',
    },
  },

  // ————————————————————— 旅游 · Du lịch —————————————————————
  {
    id: 'v-ly-01',
    topic: '旅游',
    hanzi: '风景',
    pinyin: 'fēngjǐng',
    meaning: 'phong cảnh',
    example: {
      hanzi: '这里的风景太美了。',
      pinyin: 'Zhèlǐ de fēngjǐng tài měi le.',
      vi: 'Phong cảnh ở đây đẹp quá.',
    },
  },
  {
    id: 'v-ly-02',
    topic: '旅游',
    hanzi: '护照',
    pinyin: 'hùzhào',
    meaning: 'hộ chiếu',
    example: {
      hanzi: '出国旅游要带护照。',
      pinyin: 'Chūguó lǚyóu yào dài hùzhào.',
      vi: 'Đi du lịch nước ngoài phải mang hộ chiếu.',
    },
  },
  {
    id: 'v-ly-03',
    topic: '旅游',
    hanzi: '导游',
    pinyin: 'dǎoyóu',
    meaning: 'hướng dẫn viên',
    example: {
      hanzi: '导游给我们介绍了这座城市的历史。',
      pinyin: 'Dǎoyóu gěi wǒmen jièshàole zhè zuò chéngshì de lìshǐ.',
      vi: 'Hướng dẫn viên giới thiệu cho chúng tôi lịch sử của thành phố này.',
    },
  },
  {
    id: 'v-ly-04',
    topic: '旅游',
    hanzi: '预订',
    pinyin: 'yùdìng',
    meaning: 'đặt trước (phòng, vé)',
    example: {
      hanzi: '我已经预订了一间酒店。',
      pinyin: 'Wǒ yǐjīng yùdìngle yì jiān jiǔdiàn.',
      vi: 'Tôi đã đặt trước một phòng khách sạn.',
    },
  },
  {
    id: 'v-ly-05',
    topic: '旅游',
    hanzi: '行李',
    pinyin: 'xíngli',
    meaning: 'hành lý',
    example: {
      hanzi: '别忘了把行李收拾好。',
      pinyin: 'Bié wàngle bǎ xíngli shōushí hǎo.',
      vi: 'Đừng quên sắp xếp hành lý cho gọn.',
    },
  },
  {
    id: 'v-ly-06',
    topic: '旅游',
    hanzi: '出发',
    pinyin: 'chūfā',
    meaning: 'xuất phát, khởi hành',
    example: {
      hanzi: '我们明天早上八点出发。',
      pinyin: 'Wǒmen míngtiān zǎoshang bā diǎn chūfā.',
      vi: 'Chúng ta xuất phát lúc 8 giờ sáng mai.',
    },
  },

  // ————————————————————— 家庭 · Gia đình —————————————————————
  {
    id: 'v-jt-01',
    topic: '家庭',
    hanzi: '父母',
    pinyin: 'fùmǔ',
    meaning: 'bố mẹ',
    example: {
      hanzi: '我的父母都是老师。',
      pinyin: 'Wǒ de fùmǔ dōu shì lǎoshī.',
      vi: 'Bố mẹ tôi đều là giáo viên.',
    },
  },
  {
    id: 'v-jt-02',
    topic: '家庭',
    hanzi: '亲戚',
    pinyin: 'qīnqi',
    meaning: 'họ hàng',
    example: {
      hanzi: '过年的时候亲戚都来我家。',
      pinyin: 'Guònián de shíhou qīnqi dōu lái wǒ jiā.',
      vi: 'Dịp Tết họ hàng đều đến nhà tôi.',
    },
  },
  {
    id: 'v-jt-03',
    topic: '家庭',
    hanzi: '照顾',
    pinyin: 'zhàogù',
    meaning: 'chăm sóc',
    example: {
      hanzi: '妈妈在家照顾生病的奶奶。',
      pinyin: 'Māma zài jiā zhàogù shēngbìng de nǎinai.',
      vi: 'Mẹ ở nhà chăm sóc bà đang ốm.',
    },
  },
  {
    id: 'v-jt-04',
    topic: '家庭',
    hanzi: '结婚',
    pinyin: 'jiéhūn',
    meaning: 'kết hôn',
    example: {
      hanzi: '我哥哥下个月要结婚了。',
      pinyin: 'Wǒ gēge xià ge yuè yào jiéhūn le.',
      vi: 'Anh trai tôi tháng sau sẽ kết hôn.',
    },
  },
  {
    id: 'v-jt-05',
    topic: '家庭',
    hanzi: '感情',
    pinyin: 'gǎnqíng',
    meaning: 'tình cảm',
    example: {
      hanzi: '他们一家人感情很好。',
      pinyin: 'Tāmen yìjiā rén gǎnqíng hěn hǎo.',
      vi: 'Cả gia đình họ tình cảm rất tốt.',
    },
  },
  {
    id: 'v-jt-06',
    topic: '家庭',
    hanzi: '习惯',
    pinyin: 'xíguàn',
    meaning: 'thói quen; quen với',
    example: {
      hanzi: '我已经习惯了这里的生活。',
      pinyin: 'Wǒ yǐjīng xíguànle zhèlǐ de shēnghuó.',
      vi: 'Tôi đã quen với cuộc sống ở đây.',
    },
  },

  // ————————————————————— 饮食 · Ăn uống —————————————————————
  {
    id: 'v-ys-01',
    topic: '饮食',
    hanzi: '味道',
    pinyin: 'wèidào',
    meaning: 'mùi vị, hương vị',
    example: {
      hanzi: '这道菜的味道很不错。',
      pinyin: 'Zhè dào cài de wèidào hěn búcuò.',
      vi: 'Hương vị của món này rất ngon.',
    },
  },
  {
    id: 'v-ys-02',
    topic: '饮食',
    hanzi: '点菜',
    pinyin: 'diǎn cài',
    meaning: 'gọi món',
    example: {
      hanzi: '我们先点菜，好吗？',
      pinyin: 'Wǒmen xiān diǎn cài, hǎo ma?',
      vi: 'Chúng ta gọi món trước nhé?',
    },
  },
  {
    id: 'v-ys-03',
    topic: '饮食',
    hanzi: '新鲜',
    pinyin: 'xīnxiān',
    meaning: 'tươi, tươi mới',
    example: {
      hanzi: '市场上的蔬菜很新鲜。',
      pinyin: 'Shìchǎng shàng de shūcài hěn xīnxiān.',
      vi: 'Rau ở chợ rất tươi.',
    },
  },
  {
    id: 'v-ys-04',
    topic: '饮食',
    hanzi: '饱',
    pinyin: 'bǎo',
    meaning: 'no',
    example: {
      hanzi: '我吃得很饱，不能再吃了。',
      pinyin: 'Wǒ chī de hěn bǎo, bùnéng zài chī le.',
      vi: 'Tôi ăn no lắm rồi, không ăn thêm được nữa.',
    },
  },
  {
    id: 'v-ys-05',
    topic: '饮食',
    hanzi: '口味',
    pinyin: 'kǒuwèi',
    meaning: 'khẩu vị',
    example: {
      hanzi: '这个菜太辣，不合我的口味。',
      pinyin: 'Zhège cài tài là, bù hé wǒ de kǒuwèi.',
      vi: 'Món này cay quá, không hợp khẩu vị của tôi.',
    },
  },
  {
    id: 'v-ys-06',
    topic: '饮食',
    hanzi: '请客',
    pinyin: 'qǐngkè',
    meaning: 'mời khách, đãi khách',
    example: {
      hanzi: '今天我请客，你们随便点。',
      pinyin: 'Jīntiān wǒ qǐngkè, nǐmen suíbiàn diǎn.',
      vi: 'Hôm nay tôi mời, các bạn cứ gọi thoải mái.',
    },
  },
]
