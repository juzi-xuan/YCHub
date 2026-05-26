/**
 * YCHub 青途校园 - 公共数据文件
 * 集中管理所有活动数据，供各页面共享使用
 */

// 活动数据 - 统一的完整数据集
const activitiesData = [
  { id: 1, title: '第18届程序设计大赛', tag: '学科竞赛', tagClass: 'tag-competition', image: 'programming-contest.jpg', date: '2026-06-15 09:00', deadline: '2026-06-26 23:59', location: '实验楼 301 机房', participants: 128, description: '展示编程才华，与全校高手同台竞技' },
  { id: 2, title: '校园环保志愿行动', tag: '志愿公益', tagClass: 'tag-volunteer', image: 'environmental-action.jpg', date: '2026-06-20 14:00', deadline: '2026-06-25 23:59', location: '校园广场', participants: 156, description: '用行动守护绿色校园，共建美好环境' },
  { id: 3, title: 'AI技术前沿讲座', tag: '学术讲座', tagClass: 'tag-lecture', image: 'ai-lecture.jpg', date: '2026-06-18 19:00', deadline: '2026-07-16 23:59', location: '图书馆报告厅', participants: 234, description: '探索人工智能的未来发展趋势' },
  { id: 4, title: '校园篮球联赛', tag: '社团文体', tagClass: 'tag-sports', image: 'basketball-league.jpg', date: '2026-06-22 16:00', deadline: '2026-07-06 23:59', location: '体育馆', participants: 89, description: '热血青春，挥洒汗水，为荣誉而战' },
  { id: 5, title: '创新创业大赛', tag: '学科竞赛', tagClass: 'tag-competition', image: 'innovation-contest.jpg', date: '2026-06-10 09:00', deadline: '2026-06-15 23:59', location: '大学生活动中心', participants: 156, description: '点燃创业梦想，实现创新价值' },
  { id: 6, title: '公益支教志愿者招募', tag: '志愿公益', tagClass: 'tag-volunteer', image: 'volunteer-recruitment.jpg', date: '2026-06-28 08:00', deadline: '2026-07-03 23:59', location: '希望小学', participants: 45, description: '用知识点亮希望，用爱心温暖童心' },
  { id: 7, title: '网络安全技能大赛', tag: '学科竞赛', tagClass: 'tag-competition', image: 'cybersecurity-contest.jpg', date: '2026-06-25 13:00', deadline: '2026-07-06 23:59', location: '信工楼 401', participants: 89, description: '守护网络安全，锤炼技术实力' },
  { id: 8, title: '电子设计竞赛', tag: '学科竞赛', tagClass: 'tag-competition', image: 'electronic-design.jpg', date: '2026-06-12 08:00', deadline: '2026-06-23 23:59', location: '电子实验楼', participants: 95, description: '创新电子设计，展现工程魅力' },
  { id: 9, title: '工程训练综合能力竞赛', tag: '学科竞赛', tagClass: 'tag-competition', image: 'engineering-training.jpg', date: '2026-06-22 10:00', deadline: '2026-07-03 23:59', location: '工程训练中心', participants: 64, description: '综合实践能力的大比拼' },
  { id: 10, title: '工业设计大赛', tag: '学科竞赛', tagClass: 'tag-competition', image: 'industrial-design.jpg', date: '2026-06-28 09:00', deadline: '2026-07-03 23:59', location: '艺术学院展厅', participants: 53, description: '创意与美的完美结合' },
  { id: 11, title: '移动应用创新赛', tag: '学科竞赛', tagClass: 'tag-competition', image: 'mobile-app-contest.jpg', date: '2026-07-01 14:00', deadline: '2026-07-06 23:59', location: '软件学院报告厅', participants: 78, description: '移动时代，创意无限' },
  { id: 12, title: '大学生物理竞赛', tag: '学科竞赛', tagClass: 'tag-competition', image: 'physics-contest.jpg', date: '2026-06-18 14:00', deadline: '2026-06-23 23:59', location: '物理实验楼', participants: 72, description: '探索物理奥秘，激发科学兴趣' },
  { id: 13, title: '社区关爱老人活动', tag: '志愿公益', tagClass: 'tag-volunteer', image: 'elderly-care.jpg', date: '2026-06-22 09:00', deadline: '2026-07-03 23:59', location: '阳光社区', participants: 89, description: '关爱老人，传递温暖' },
  { id: 14, title: '图书馆整理志愿者', tag: '志愿公益', tagClass: 'tag-volunteer', image: 'library-volunteer.jpg', date: '2026-06-25 14:00', deadline: '2026-07-16 23:59', location: '校图书馆', participants: 67, description: '整理图书，服务师生' },
  { id: 15, title: '义务支教活动', tag: '志愿公益', tagClass: 'tag-volunteer', image: 'teaching-volunteer.jpg', date: '2026-06-28 08:00', deadline: '2026-07-03 23:59', location: '希望小学', participants: 45, description: '用知识点亮希望' },
  { id: 16, title: '爱心献血活动', tag: '志愿公益', tagClass: 'tag-volunteer', image: 'blood-donation.jpg', date: '2026-07-01 09:00', deadline: '2026-07-06 23:59', location: '校医院', participants: 234, description: '无偿献血，传递爱心' },
  { id: 17, title: '校园导览志愿者', tag: '志愿公益', tagClass: 'tag-volunteer', image: 'campus-guide.jpg', date: '2026-07-05 08:00', deadline: '2026-07-16 23:59', location: '校门口', participants: 56, description: '引导新生，展示校园' },
  { id: 18, title: '动物保护宣传', tag: '志愿公益', tagClass: 'tag-volunteer', image: 'animal-protection.jpg', date: '2026-07-08 14:00', deadline: '2026-07-13 23:59', location: '生态园', participants: 78, description: '保护动物，人人有责' },
  { id: 19, title: '垃圾分类宣传', tag: '志愿公益', tagClass: 'tag-volunteer', image: 'recycling.jpg', date: '2026-07-10 10:00', deadline: '2026-07-15 23:59', location: '各宿舍楼', participants: 123, description: '垃圾分类，从我做起' },
  { id: 20, title: '量子计算入门讲座', tag: '学术讲座', tagClass: 'tag-lecture', image: 'quantum-lecture.jpg', date: '2026-06-20 14:00', deadline: '2026-06-25 23:59', location: '理学院报告厅', participants: 189, description: '探索量子计算的奥秘' },
  { id: 21, title: '区块链技术应用', tag: '学术讲座', tagClass: 'tag-lecture', image: 'blockchain-lecture.jpg', date: '2026-06-22 19:00', deadline: '2026-07-16 23:59', location: '计算机学院', participants: 156, description: '了解区块链技术的应用前景' },
  { id: 22, title: '新能源技术发展', tag: '学术讲座', tagClass: 'tag-lecture', image: 'energy-lecture.jpg', date: '2026-06-25 14:00', deadline: '2026-07-16 23:59', location: '能源学院', participants: 134, description: '新能源技术的发展趋势' },
  { id: 23, title: '心理学与生活', tag: '学术讲座', tagClass: 'tag-lecture', image: 'psychology-lecture.jpg', date: '2026-06-28 19:00', deadline: '2026-07-16 23:59', location: '心理学院', participants: 267, description: '心理学在日常生活中的应用' },
  { id: 24, title: '金融投资基础', tag: '学术讲座', tagClass: 'tag-lecture', image: 'finance-lecture.jpg', date: '2026-07-01 14:00', deadline: '2026-07-06 23:59', location: '经管学院', participants: 198, description: '学习金融投资的基础知识' },
  { id: 25, title: '创新创业分享会', tag: '学术讲座', tagClass: 'tag-lecture', image: 'startup-lecture.jpg', date: '2026-07-05 19:00', deadline: '2026-07-17 23:59', location: '创业中心', participants: 145, description: '创业经验分享与交流' },
  { id: 26, title: '大数据时代机遇', tag: '学术讲座', tagClass: 'tag-lecture', image: 'bigdata-lecture.jpg', date: '2026-07-08 14:00', deadline: '2026-07-13 23:59', location: '数据学院', participants: 176, description: '大数据时代的机遇与挑战' },
  { id: 27, title: '校园歌手大赛', tag: '社团文体', tagClass: 'tag-sports', image: 'singer-contest.jpg', date: '2026-06-22 18:30', deadline: '2026-06-26 23:59', location: '大礼堂', participants: 89, description: '唱响青春，展示才华' },
  { id: 28, title: '篮球友谊赛', tag: '社团文体', tagClass: 'tag-sports', image: 'basketball.jpg', date: '2026-06-25 16:00', deadline: '2026-07-06 23:59', location: '体育馆', participants: 156, description: '以球会友，增进友谊' },
  { id: 29, title: '舞蹈社团展演', tag: '社团文体', tagClass: 'tag-sports', image: 'dance-show.jpg', date: '2026-06-28 19:00', deadline: '2026-07-16 23:59', location: '学生活动中心', participants: 234, description: '舞动青春，绽放光彩' },
  { id: 30, title: '摄影作品展', tag: '社团文体', tagClass: 'tag-sports', image: 'photo-exhibition.jpg', date: '2026-07-01 09:00', deadline: '2026-07-06 23:59', location: '艺术展厅', participants: 78, description: '用镜头记录美好瞬间' },
  { id: 31, title: '话剧社年度大戏', tag: '社团文体', tagClass: 'tag-sports', image: 'drama-show.jpg', date: '2026-07-05 19:00', deadline: '2026-07-17 23:59', location: '剧场', participants: 189, description: '戏剧人生，精彩演绎' },
  { id: 32, title: '羽毛球比赛', tag: '社团文体', tagClass: 'tag-sports', image: 'badminton.jpg', date: '2026-07-08 14:00', deadline: '2026-07-13 23:59', location: '羽毛球馆', participants: 134, description: '轻羽飞扬，激情对决' },
  { id: 33, title: '书法社团展览', tag: '社团文体', tagClass: 'tag-sports', image: 'calligraphy.jpg', date: '2026-07-10 09:00', deadline: '2026-07-15 23:59', location: '图书馆大厅', participants: 67, description: '翰墨飘香，传承文化' },
  { id: 34, title: '音乐节', tag: '社团文体', tagClass: 'tag-sports', image: 'music-festival.jpg', date: '2026-07-12 18:00', deadline: '2026-07-17 23:59', location: '操场', participants: 456, description: '音乐狂欢，青春飞扬' },
  { id: 35, title: '腾讯校园招聘宣讲会', tag: '招聘宣讲', tagClass: 'tag-recruitment', image: 'tencent-recruit.jpg', date: '2026-06-25 14:00', deadline: '2026-07-16 23:59', location: '就业中心', participants: 312, description: '腾讯校园招聘宣讲' },
  { id: 36, title: '阿里巴巴校招宣讲', tag: '招聘宣讲', tagClass: 'tag-recruitment', image: 'alibaba-recruit.jpg', date: '2026-06-28 14:00', deadline: '2026-07-16 23:59', location: '报告厅', participants: 289, description: '阿里巴巴校园招聘' },
  { id: 37, title: '字节跳动招聘专场', tag: '招聘宣讲', tagClass: 'tag-recruitment', image: 'bytedance-recruit.jpg', date: '2026-07-01 14:00', deadline: '2026-07-06 23:59', location: '计算机学院', participants: 267, description: '字节跳动校园招聘' },
  { id: 38, title: '华为校园招聘', tag: '招聘宣讲', tagClass: 'tag-recruitment', image: 'huawei-recruit.jpg', date: '2026-07-05 14:00', deadline: '2026-07-17 23:59', location: '就业中心', participants: 345, description: '华为校园招聘宣讲' },
  { id: 39, title: '小米集团宣讲会', tag: '招聘宣讲', tagClass: 'tag-recruitment', image: 'xiaomi-recruit.jpg', date: '2026-07-08 14:00', deadline: '2026-07-13 23:59', location: '报告厅', participants: 198, description: '小米集团校园招聘' },
  { id: 40, title: '美团校招专场', tag: '招聘宣讲', tagClass: 'tag-recruitment', image: 'meituan-recruit.jpg', date: '2026-07-10 14:00', deadline: '2026-07-16 23:59', location: '经管学院', participants: 234, description: '美团校园招聘宣讲' }
];

// 分类配置
const categoryConfig = {
  '全部活动': { icon: '🏆', count: 40 },
  '学科竞赛': { icon: '💻', count: 12 },
  '志愿公益': { icon: '❤️', count: 8 },
  '学术讲座': { icon: '📚', count: 7 },
  '社团文体': { icon: '🎭', count: 8 },
  '招聘宣讲': { icon: '💼', count: 6 }
};

// 分类标签映射
const tagClassMap = {
  '学科竞赛': 'tag-competition',
  '志愿公益': 'tag-volunteer',
  '学术讲座': 'tag-lecture',
  '社团文体': 'tag-sports',
  '招聘宣讲': 'tag-recruitment'
};

// 数据工具函数
const DataUtils = {
  // 获取所有活动
  getAllActivities() {
    return activitiesData;
  },

  // 根据ID获取活动
  getActivityById(id) {
    return activitiesData.find(activity => activity.id === parseInt(id));
  },

  // 根据分类获取活动
  getActivitiesByCategory(category) {
    if (category === '全部活动') {
      return activitiesData;
    }
    return activitiesData.filter(activity => activity.tag === category);
  },

  // 搜索活动
  searchActivities(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return activitiesData.filter(activity => {
      return activity.title.toLowerCase().includes(lowerKeyword) ||
             activity.tag.toLowerCase().includes(lowerKeyword) ||
             activity.location.toLowerCase().includes(lowerKeyword) ||
             activity.description.toLowerCase().includes(lowerKeyword);
    });
  },

  // 获取轮播图活动（前12个）
  getCarouselActivities() {
    return activitiesData.slice(0, 12);
  },

  // 获取分类数量
  getCategoryCount(category) {
    if (category === '全部活动') {
      return activitiesData.length;
    }
    return activitiesData.filter(activity => activity.tag === category).length;
  }
};

// 导出数据（兼容不同引入方式）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { activitiesData, categoryConfig, tagClassMap, DataUtils };
}
