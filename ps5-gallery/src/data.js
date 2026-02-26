import tlou1Cover from '../../picture/page1-game-cover/The_Last_of_Us_Part_I_cover.jpg';
import tlou2Cover from '../../picture/page1-game-cover/TLOU_P2_Box_Art_2.png';
import gowCover from '../../picture/page1-game-cover/God_of_War_Ragnarok_cover.jpg';
import horizonCover from '../../picture/page1-game-cover/Horizon_Forbidden_West_cover_art.jpg';
import bloodborneCover from '../../picture/page1-game-cover/Bloodborne_Cover_Wallpaper.jpg';
import ghostOfTsushimaCover from '../../picture/page1-game-cover/Ghost_of_Tsushima.jpg';
import ff7RemakeCover from '../../picture/page1-game-cover/FFVIIRemake.png';
import uncharted4Cover from '../../picture/page1-game-cover/Uncharted_4_box_artwork.jpg';
import demonsSoulsCover from '../../picture/page1-game-cover/Demons_Souls_remake_cover_art.jpg';
import ratchetAndClankCover from '../../picture/page1-game-cover/Ratchet_&_Clank_-_Rift_Apart.png';
import deathStrandingCover from '../../picture/page1-game-cover/Death_Stranding.jpg';
import astroBotCover from '../../picture/page1-game-cover/Astro_Bot_cover_art.jpg';
import baldursGate3Cover from "../../picture/page1-game-cover/Baldur's_Gate_3_cover_art.jpg";
import spiderMan2Cover from '../../picture/page1-game-cover/SpiderMan2PS5BoxArt.jpeg';
import ff16Cover from '../../picture/page1-game-cover/Final_Fantasy_XVI_cover_art.png';
import daysGoneCover from '../../picture/page1-game-cover/Days_Gone_cover_art.jpg';
import gt7Cover from '../../picture/page1-game-cover/Gran_Turismo_7_cover_art.jpg';
import stellarBladeCover from '../../picture/page1-game-cover/Stellar_Blade_Pre_Order_Box.png';
import riseOfTheRoninCover from '../../picture/page1-game-cover/Rise_of_the_Ronin_Key_Art.jpg';
import helldivers2Cover from '../../picture/page1-game-cover/Helldivers2cover.png';
import returnalCover from '../../picture/page1-game-cover/Returnal_cover_art.jpg';

const baseGames = [
  {
    title: "最后生还者 1",
    author: "Naughty Dog",
    imgUrl: tlou1Cover,
    volume: "Pt.1",
    tag: "10",
    progress: null,
    category: "动作",
    description: "体验充满感染者与绝望幸存者的残酷末世，跟随乔尔与艾莉踏上一段穿越美国的感人至深、危机四伏的生存之旅。",
    slug: "the-last-of-us-part-1"
  },
  {
    title: "最后生还者 2",
    author: "Naughty Dog",
    imgUrl: tlou2Cover,
    volume: "PS5",
    tag: "10",
    progress: "复刻版",
    category: "动作",
    description: "经历杰克逊市的和平生活后，一场暴力冲突打破了宁静。艾莉踏上了一场残酷的报复之旅，追捕肇事者，并面对她行为带来的身体与情感后果。",
    slug: "the-last-of-us-part-2"
  },
  {
    title: "博德之门 3",
    author: "Larian Studios",
    imgUrl: baldursGate3Cover,
    volume: "PS5",
    tag: "9.6",
    progress: "年度最佳",
    category: "角色扮演",
    description: "召集你的队伍，回到被遗忘的国度，开启一段记载着友谊与背叛、牺牲与生存、以及至上力量诱惑的传奇故事。"
  },
  {
    title: "地平线：西之绝境",
    author: "Guerrilla Games",
    imgUrl: horizonCover,
    volume: "PS5",
    tag: "9.0",
    progress: null,
    category: "冒险",
    description: "在壮丽的遥远未来世界，机械巨兽在大地上徘徊。跟随埃洛伊探索危险的西部禁地，揭开世界濒临毁灭的惊天谜团。"
  },
  {
    title: "血源诅咒",
    author: "FromSoftware",
    imgUrl: bloodborneCover,
    volume: "PS4",
    tag: "9.8",
    progress: "老猎人 DLC",
    category: "角色扮演",
    description: "在饱受神秘瘟疫摧残的古都雅南，扮演猎人探索阴暗的街巷，面对恐怖的兽化病人和克苏鲁式宇宙神祇，在绝望中寻找鲜血与真相。"
  },
  {
    title: "对马岛之魂",
    author: "Sucker Punch",
    imgUrl: ghostOfTsushimaCover,
    volume: "PS5",
    tag: "9.3",
    progress: "导演剪辑版",
    category: "动作",
    description: "13世纪末，蒙古帝国入侵对马岛。武士境井仁必须舍弃荣誉，化身为“战鬼”，为了保卫家园和人民展开一场史诗般的复仇与抗争。"
  },
  {
    title: "最终幻想7 重制版",
    author: "Square Enix",
    imgUrl: ff7RemakeCover,
    volume: "PS5",
    tag: "9.0",
    progress: "INTERgrade",
    category: "角色扮演",
    description: "克劳德一行人反抗榨取星球生命的神罗公司，在赛博朋克都市米德加展开冒险。重制的经典带来极致视听盛宴与全新的战斗体验。"
  },
  {
    title: "神秘海域4：盗贼末路",
    author: "Naughty Dog",
    imgUrl: uncharted4Cover,
    volume: "PS5",
    tag: "9.5",
    progress: null,
    category: "冒险",
    description: "内森·德雷克被迫重操旧业，与失散多年的哥哥山姆踏上寻找传奇海盗宝藏的环球探险，这不仅是财富的追寻，更是对亲情与羁绊的终极考验。"
  },
  {
    title: "恶魔之魂 重制版",
    author: "Bluepoint Games",
    imgUrl: demonsSoulsCover,
    volume: "PS5",
    tag: "9.2",
    progress: null,
    category: "角色扮演",
    description: "回到浓雾笼罩的柏雷塔尼亚王国，面对无尽的死亡与压迫感。在这款魂系开山之作的次世代完全重制版中，体验惊人的画面与经典的受苦之旅。"
  },
  {
    title: "瑞奇与叮当",
    author: "Insomniac Games",
    imgUrl: ratchetAndClankCover,
    volume: "PS5",
    tag: "9.0",
    progress: "时空跳转",
    category: "家庭",
    description: "利用PS5超高速SSD实现瞬间无缝的维度穿梭，在这个充满奇思妙想的科幻卡通宇宙里，与新伙伴蕾薇特一起对抗邪恶的尼法利斯博士。"
  },
  {
    title: "死亡搁浅",
    author: "Kojima Productions",
    imgUrl: deathStrandingCover,
    volume: "PS5",
    tag: "9.4",
    progress: "导演剪辑版",
    category: "冒险",
    description: "在这个因“死亡搁浅”而支离破碎的世界里，扮演山姆·波特·布桥斯，背负着全人类的希望，一步步重新连接美国，跨越生与死的界限。"
  },
  {
    title: "宇宙机器人",
    author: "Team Asobi",
    imgUrl: astroBotCover,
    volume: "PS5",
    tag: "9.6",
    progress: null,
    category: "家庭",
    description: "一场完美展现DualSense手柄特性的奇妙冒险！跟随可爱的Astro Bot穿越各个星系，拯救失散的船员，充满对PlayStation三十年历史的致敬。"
  },
  {
    title: "漫威蜘蛛侠2",
    author: "Insomniac Games",
    imgUrl: spiderMan2Cover,
    volume: "PS5",
    tag: "9.3",
    progress: null,
    category: "动作",
    description: "彼得与迈尔斯双蛛合璧，面对狂暴的毒液与猎人克莱文。在面积翻倍的纽约市中，体验更加迅猛的摆荡与震撼的超级英雄战斗。"
  },
  {
    title: "最终幻想16",
    author: "Square Enix",
    imgUrl: ff16Cover,
    volume: "PS5",
    tag: "8.8",
    progress: "沧海恸哭",
    category: "角色扮演",
    description: "踏入瓦利斯泽亚的黑暗奇幻世界，跟随克莱夫展开复仇与寻找命运真相的壮丽旅程。召唤兽之间毁天灭地的史诗级碰撞将带给你极致震撼。"
  },
  {
    title: "往日不再",
    author: "Bend Studio",
    imgUrl: daysGoneCover,
    volume: "PS4",
    tag: "8.5",
    progress: null,
    category: "动作",
    description: "驾驶重型机车穿梭于危机四伏的俄勒冈州荒野，面对成百上千的异变者尸海。赏金猎人迪肯在这个无情的末世中努力寻找失散的妻子与活下去的理由。"
  },
  {
    title: "跑车浪漫旅 7",
    author: "Polyphony Digital",
    imgUrl: gt7Cover,
    volume: "PS5",
    tag: "9.0",
    progress: "V1.49",
    category: "竞速",
    description: "赛车游戏爱好者的终极殿堂。收集、改装并驾驶数百辆令人惊叹的授权赛车，感受极致真实的驾驶模拟与令人叹为观止的次世代光追画面。"
  },
  {
    title: "剑星",
    author: "Shift Up",
    imgUrl: stellarBladeCover,
    volume: "PS5",
    tag: "8.7",
    progress: "照相模式",
    category: "动作",
    description: "在夺回地球的末世废土中，扮演第七空降小队成员伊芙，以华丽高速的剑术对抗神秘生物“孽奇拔”。在这款动作RPG中寻找人类文明的真相。"
  },
  {
    title: "浪人崛起",
    author: "Team Ninja",
    imgUrl: riseOfTheRoninCover,
    volume: "PS5",
    tag: "8.5",
    progress: null,
    category: "动作",
    description: "回到19世纪的幕末时代，化身无主浪人，在西方列强与幕府交锋的动荡年代中左右历史进程。体验硬核的刀剑对决与开放世界的自由探索。"
  },
  {
    title: "绝地潜兵2",
    author: "Arrowhead",
    imgUrl: helldivers2Cover,
    volume: "PS5",
    tag: "9.1",
    progress: "新主要指令",
    category: "射击",
    description: "为了超级地球的民主与自由！在这个火爆的星系战争中，与好友组队空降虫族与机器人占领的星球，使用毁灭性武器体验最欢乐的合作射击。"
  },
  {
    title: "死亡回归",
    author: "Housemarque",
    imgUrl: returnalCover,
    volume: "PS5",
    tag: "8.8",
    progress: null,
    category: "射击",
    description: "迫降在不断变化的异星阿特罗波斯上，每一次死亡都会重置这个危机四伏的世界。结合了弹幕射击与Roguelike元素的硬核次世代科幻生存战。"
  }
];

const coverImages = baseGames.map((game) => game.imgUrl);
const franchiseSeeds = [
  "艾尔登法环",
  "赛博朋克 2077",
  "霍格沃茨之遗",
  "星球大战 绝地：幸存者",
  "怪物猎人 世界",
  "怪物猎人 崛起",
  "最终幻想 14",
  "最终幻想 15",
  "最终幻想 7",
  "生化危机 4",
  "生化危机 8",
  "生化危机 2",
  "刺客信条 英灵殿",
  "刺客信条 幻景",
  "看门狗 军团",
  "孤岛惊魂 6",
  "战地 2042",
  "使命召唤 现代战争",
  "使命召唤 黑色行动",
  "NBA 2K24",
  "EA SPORTS FC 24",
  "F1 24",
  "街头霸王 6",
  "铁拳 8",
  "暗黑破坏神 4",
  "巫师 3",
  "上古卷轴 5",
  "辐射 4",
  "地铁 离去",
  "控制",
  "心灵杀手 2",
  "死亡空间",
  "质量效应",
  "尼尔 机械纪元",
  "如龙 8",
  "黑神话 悟空",
  "战神 诸神黄昏",
  "剑星",
  "绝地潜兵 2",
  "浪人崛起"
];
const variantSeeds = ["重制版", "终极版", "豪华版", "黄金版", "年度版"];
const studioSeeds = [
  "Naughty Dog",
  "Santa Monica",
  "Insomniac Games",
  "Square Enix",
  "Capcom",
  "FromSoftware",
  "Bandai Namco",
  "Ubisoft",
  "EA",
  "Sony Interactive"
];

export const categoryOptions = [
  "全部",
  "动作",
  "冒险",
  "角色扮演",
  "射击",
  "竞速",
  "格斗",
  "恐怖",
  "体育",
  "家庭",
  "独立"
];

const categoryRules = [
  { category: "体育", keywords: ["NBA", "EA SPORTS FC", "FC 24"] },
  { category: "竞速", keywords: ["F1", "跑车浪漫旅", "竞速"] },
  { category: "格斗", keywords: ["街头霸王", "铁拳"] },
  { category: "恐怖", keywords: ["生化危机", "死亡空间", "心灵杀手"] },
  { category: "射击", keywords: ["使命召唤", "战地", "绝地潜兵", "地铁", "控制", "看门狗", "孤岛惊魂"] },
  { category: "角色扮演", keywords: ["最终幻想", "博德之门", "暗黑破坏神", "巫师", "上古卷轴", "质量效应", "尼尔", "霍格沃茨", "赛博朋克"] },
  { category: "冒险", keywords: ["星球大战 绝地", "如龙"] },
  { category: "动作", keywords: ["艾尔登法环", "怪物猎人", "刺客信条", "黑神话", "剑星", "浪人崛起"] }
];

const getCategoryFromTitle = (title) => {
  const rule = categoryRules.find(({ keywords }) => keywords.some((keyword) => title.includes(keyword)));
  return rule?.category ?? "动作";
};

const extraGames = franchiseSeeds.flatMap((franchise, franchiseIndex) =>
  variantSeeds.map((variant, variantIndex) => {
    const index = franchiseIndex * variantSeeds.length + variantIndex;
    const score = (8 + (index % 20) * 0.1).toFixed(1);
    return {
      title: `${franchise} ${variant}`,
      author: studioSeeds[index % studioSeeds.length],
      volume: "PS5",
      tag: score,
      progress: index % 9 === 0 ? "更新中" : null,
      category: getCategoryFromTitle(franchise)
    };
  })
);

export const booksData = [...baseGames, ...extraGames].map((game, index) => ({
  id: index + 1,
  title: game.title,
  author: game.author,
  imgUrl: game.imgUrl ?? coverImages[index % coverImages.length],
  volume: game.volume ?? "PS5",
  tag: game.tag ?? null,
  progress: game.progress ?? null,
  category: game.category ?? getCategoryFromTitle(game.title),
  description: game.description ?? `在《${game.title}》中体验次世代冒险，与 ${game.author} 打造的世界一同展开探索、战斗与成长。`,
  slug: game.slug ?? null
}));
