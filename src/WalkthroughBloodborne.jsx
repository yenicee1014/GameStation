import { useParams, Link } from 'react-router-dom';
import { booksData, categoryOptions } from './data';
import { useState, useEffect, useMemo } from 'react';
import { Search, Heart, Share2, Bookmark, ChevronDown, ChevronRight, BookOpen, ShoppingCart, Crosshair, Swords, Shield, Coins, Move, Hand, Target, Map, X } from 'lucide-react';
import Footer from './components/Footer';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import logo from '../picture/logo.svg';
import bloodborneCover from '../picture/page1-game-cover/Bloodborne_Cover_Wallpaper.jpg';
import bloodborneScreenshot from '../picture/page1-game-walkthrough/bloodborne/BB02.jpg';
import lJoystick from '../picture/page1-game-walkthrough/bloodborne/l.png';
import rJoystick from '../picture/page1-game-walkthrough/bloodborne/r.png';
import dpad from '../picture/page1-game-walkthrough/bloodborne/方块.png';
import xButton from '../picture/page1-game-walkthrough/bloodborne/x.png';
import circleButton from '../picture/page1-game-walkthrough/bloodborne/圆形.png';
import squareButton from '../picture/page1-game-walkthrough/bloodborne/正方形.png';
import triangleButton from '../picture/page1-game-walkthrough/bloodborne/三角.png';
import l1Button from '../picture/page1-game-walkthrough/bloodborne/l1.png';
import r1Button from '../picture/page1-game-walkthrough/bloodborne/r1.png';
import l2Button from '../picture/page1-game-walkthrough/bloodborne/l2.png';
import r2Button from '../picture/page1-game-walkthrough/bloodborne/r2.png';
import r3Button from '../picture/page1-game-walkthrough/bloodborne/r3.png';
import sickroomMap from '../picture/page1-game-walkthrough/bloodborne/1st Floor Sickroom.png';
import centralYharnamMap1 from '../picture/page1-game-walkthrough/bloodborne/Central Yharnam-1.png';
import centralYharnamMap2 from '../picture/page1-game-walkthrough/bloodborne/Central Yharnam-2.png';
import centralYharnamMap3 from '../picture/page1-game-walkthrough/bloodborne/Central Yharnam-3.png';
import centralYharnamMap4 from '../picture/page1-game-walkthrough/bloodborne/Central Yharnam-4.png';
import centralYharnamMap5 from '../picture/page1-game-walkthrough/bloodborne/Central Yharnam-5.png';
import centralYharnamMap6 from '../picture/page1-game-walkthrough/bloodborne/Central Yharnam-6.png';
import centralYharnamMap7 from '../picture/page1-game-walkthrough/bloodborne/Central Yharnam-7.png';
import centralYharnamMap8 from '../picture/page1-game-walkthrough/bloodborne/Central Yharnam-8.png';
import './App.css';

const tocItems = [
  { id: 'section-donation', title: '前言与导读', level: 1 },
  { id: 'section-gameplay', title: '游戏玩法与控制', level: 1 },
  { id: 'section-controls', title: '控制说明', level: 2 },
  { id: 'section-basics', title: '基础知识', level: 2 },
  { id: 'section-health-death', title: '生命与死亡', level: 2 },
  { id: 'section-blood-echoes', title: '血之回响与升级', level: 2 },
  { id: 'section-insight', title: '灵视', level: 2 },
  { id: 'section-saving-loading', title: '保存与读取', level: 2 },
  { id: 'section-weapons-equipment', title: '武器与装备', level: 2 },
  { id: 'section-attire-sets', title: '服饰套装', level: 2 },
  { id: 'section-items', title: '物品', level: 2 },
  { id: 'section-character-creation', title: '角色创建', level: 1 },
  { id: 'section-origin', title: '出身', level: 2 },
  { id: 'section-stats', title: '属性', level: 2 },
  { id: 'section-basic-combat', title: '基础战斗', level: 1 },
  { id: 'section-stamina', title: '精力', level: 2 },
  { id: 'section-lock-on', title: '锁定', level: 2 },
  { id: 'section-attacks', title: '攻击与内脏暴击', level: 2 },
  { id: 'section-advanced-combat', title: '进阶战斗', level: 1 },
  { id: 'section-weapon-transformation', title: '武器变形', level: 2 },
  { id: 'section-beasthood', title: '兽性', level: 2 },
  { id: 'section-status-ailments', title: '异常状态', level: 2 },
  { id: 'section-walkthrough', title: '流程攻略', level: 1 },
  { id: 'section-iosefkas-clinic', title: '约瑟夫卡的诊所', level: 2 },
  { id: 'section-hunters-dream', title: '猎人梦境', level: 2 },
  { id: 'section-1st-floor-sickroom', title: '1楼病房', level: 2 },
  { id: 'section-central-yharnam', title: '亚南中心 (Central Yharnam)', level: 2 },
  { id: 'section-central-yharnam-sewers', title: '亚南中心 - 下水道', level: 2 },
  { id: 'section-hunters-dream-return', title: '猎人梦境 (返回)', level: 2 },
  { id: 'section-central-yharnam-cont', title: '雅南中心 (继续)', level: 2 },
  { id: 'section-giant-bridge', title: '大桥', level: 2 },
  { id: 'section-central-yharnam-cont-2', title: '雅南中心 (再继续)', level: 2 },
  { id: 'section-tomb-of-oedon', title: '欧顿之墓 (Tomb of Oedon)', level: 2 },
  { id: 'section-npc-quests-1', title: 'NPC任务，第一部分 (NPC Quests, Part 1)', level: 2 },
  { id: 'section-cathedral-ward', title: '大教堂区 (Cathedral Ward)', level: 2 },
  { id: 'section-cathedral-ward-cont', title: '大教堂区 (继续)', level: 2 },
  { id: 'section-npc-quests-2', title: 'NPC任务，第二部分 (NPC Quests, Part 2)', level: 2 },
  { id: 'section-tomb-of-oedon-cont', title: '欧顿之墓 (继续)', level: 2 },
  { id: 'section-cathedral-ward-cont-2', title: '大教堂区 (再继续)', level: 2 },
  { id: 'section-grand-cathedral', title: '大教堂 (Grand Cathedral)', level: 2 },
  { id: 'section-npc-quests-3', title: 'NPC任务，第三部分 (NPC Quests, Part 3)', level: 2 },
  { id: 'section-old-yharnam', title: '旧雅南 (Old Yharnam)', level: 2 },
  { id: 'section-church-of-the-good-chalice', title: '良杯教会 (Church of the Good Chalice)', level: 2 },
  { id: 'section-hemwick-charnel-lane', title: '汉威克阴森小巷 (Hemwick Charnel Lane)', level: 2 },
  { id: 'section-witchs-abode', title: '女巫住所 (Witch\'s Abode)', level: 2 },
  { id: 'section-hypogean-gaol', title: '未见之村的监狱 (Hypogean Gaol)', level: 2 },
  { id: 'section-graveyard-of-the-darkbeast', title: '黑兽墓地 (Graveyard of the Darkbeast)', level: 2 },
  { id: 'section-npc-quests-part-4', title: 'NPC任务，第四部分 (NPC Quests, Part 4)', level: 2 },
  { id: 'section-healing-church-workshop', title: '治愈教会工厂 (Healing Church Workshop)', level: 2 },
  { id: 'section-forbidden-woods', title: '禁忌森林 (Forbidden Woods)', level: 2 },
  { id: 'section-forbidden-grave', title: '禁忌之墓 (Forbidden Grave)', level: 2 },
  { id: 'section-byrgenwerth', title: '拜尔金沃斯 (Byrgenwerth)', level: 2 },
  { id: 'section-moonside-lake', title: '月畔湖 (Moonside Lake)', level: 2 },
  { id: 'section-npc-quests-5', title: 'NPC任务，第五部分 (NPC Quests, Part 5)', level: 2 },
  { id: 'section-forsaken-cainhurst-castle', title: '废弃的该隐赫斯特城堡 (Forsaken Cainhurst Castle)', level: 2 },
  { id: 'section-martyr-logarius', title: 'Boss：烈士洛格力斯 (Martyr Logarius)', level: 2 },
  { id: 'section-yahargul-unseen-village', title: '未见之村亚哈古尔 (Yahar\'gul, Unseen Village)', level: 2 },
  { id: 'section-yahargul-chapel', title: '亚哈古尔小教堂 (Yahar\'gul Chapel)', level: 2 },
  { id: 'section-advent-plaza', title: '降临广场 (Advent Plaza)', level: 2 },
  { id: 'section-npc-quests-6', title: 'NPC任务，第六部分 (NPC Quests, Part 6)', level: 2 },
  { id: 'section-vileblood-queens-chambers', title: '血族女王的房间 (Vileblood Queen\'s Chambers)', level: 2 },
  { id: 'section-cathedral-ward-3', title: '大教堂区 (Cathedral Ward)', level: 2 },
  { id: 'section-lecture-building-1f', title: '教学大楼1楼 (Lecture Building 1F)', level: 2 },
  { id: 'section-nightmare-frontier', title: '噩梦边境 (Nightmare Frontier)', level: 2 },
  { id: 'section-amygdalas-chamber', title: '亚米达拉的巢穴 (Amygdala\'s Chamber)', level: 2 },
  { id: 'section-lecture-building-2f', title: '教学大楼2楼 (Lecture Building 2F)', level: 2 },
  { id: 'section-upper-cathedral-ward', title: '大教堂区上层 (Upper Cathedral Ward)', level: 2 },
  { id: 'section-lumenflower-gardens', title: '明花花园 (Lumenflower Gardens)', level: 2 },
  { id: 'section-altar-of-despair', title: '绝望祭坛 (Altar of Despair)', level: 2 },
  { id: 'section-npc-quests-7', title: 'NPC任务，第七部分 (NPC Quests, Part 7)', level: 2 },
  { id: 'section-nightmare-of-mensis-1', title: '曼西斯梦魇，第一部分 (Nightmare of Mensis, Part 1)', level: 2 },
  { id: 'section-boss-guides', title: '💀 Boss 攻略集', level: 1, children: [
      { id: 'boss-cleric-beast', title: '神职人员野兽', level: 2 },
      { id: 'boss-father-gascoigne', title: '神父加斯科因', level: 2 },
      { id: 'boss-vicar-amelia', title: '代理人阿梅利亚', level: 2 },
      { id: 'boss-blood-starved-beast', title: '渴血神兽', level: 2 },
      { id: 'boss-shadow-of-yharnam', title: '雅南暗影', level: 2 },
      { id: 'boss-rom-the-vacuous-spider', title: '愚钝蜘蛛罗姆', level: 2 },
      { id: 'boss-the-witch-of-hemwick', title: '汉威克女巫', level: 2 },
      { id: 'boss-darkbeast-paarl', title: '黑兽帕尔', level: 2 },
      { id: 'boss-martyr-logarius', title: '烈士洛格力斯', level: 2 },
      { id: 'boss-the-one-reborn', title: '重生古神祇', level: 2 },
      { id: 'boss-amygdala', title: '亚米达拉', level: 2 },
      { id: 'boss-celestial-emissary', title: '神圣使者', level: 2 },
      { id: 'boss-ebrietas-daughter-of-the-cosmos', title: '宇宙之女伊碧塔丝', level: 2 },
      { id: 'boss-micolash-host-of-nightmares', title: '噩梦之主密寇拉什', level: 2 },
      { id: 'boss-mergos-wet-nurse', title: '梅高的奶妈', level: 2 },
      { id: 'boss-gehrman-the-first-hunter', title: '第一猎人杰尔曼', level: 2 },
      { id: 'boss-moon-presence', title: '月之妖气 / 月神', level: 2 },
      { id: 'boss-ludwig-the-accursed-ludwig-the-holy-blade', title: '丑陋的野兽路德维希 / 圣剑路德维希', level: 2 },
      { id: 'boss-living-failures', title: '失败者', level: 2 },
      { id: 'boss-lady-maria-of-the-astral-clocktower', title: '星辰钟塔的玛丽亚女士', level: 2 },
      { id: 'boss-orphan-of-kos', title: '科斯的高儿', level: 2 },
      { id: 'boss-laurence-the-first-vicar', title: '第一任主教劳伦斯', level: 2 },
    ] },
  { id: 'section-endings', title: '结局与最终 Boss (Endings & Final Boss)', level: 1 },
  { id: 'section-old-hunters-walkthrough', title: '流程攻略：老猎人 (The Old Hunters)', level: 1 },
  { id: 'section-hunters-nightmare', title: '猎人的梦魇 (Hunter\'s Nightmare)', level: 2 },
  { id: 'section-underground-corpse-pile', title: '地下尸堆 (Underground Corpse Pile)', level: 2 },
  { id: 'section-research-hall', title: '研究大厅 (Research Hall)', level: 2 },
  { id: 'section-astral-clocktower', title: '星辰钟塔 (Astral Clocktower)', level: 2 },
  { id: 'section-fishing-hamlet', title: '小渔村 (Fishing Hamlet)', level: 2 },
  { id: 'section-laurence', title: '大教堂 (重返) - 隐藏Boss', level: 2 },
  { id: 'section-npc-quests-iosefka', title: 'NPC任务：约瑟夫卡 (NPC Quests: Iosefka)', level: 2 },
  { id: 'section-npc-quests-gilbert', title: 'NPC任务：吉尔伯特 (NPC Quests: Gilbert)', level: 2 },
  { id: 'section-npc-quests-lonely-old-dear', title: 'NPC任务：孤独的老妇人 (NPC Quests: Lonely Old Dear)', level: 2 },
  { id: 'section-npc-quests-eileen', title: 'NPC任务：乌鸦艾琳 (NPC Quests: Eileen the Crow)', level: 2 },
  { id: 'section-npc-quests-viola', title: 'NPC任务：维奥拉的女儿 (NPC Quests: Viola\'s Daughter)', level: 2 },
  { id: 'section-npc-quests-oedon-dweller', title: 'NPC任务：欧顿小教堂的居民 (NPC Quests: Oedon Chapel Dweller)', level: 2 },
  { id: 'section-npc-quests-alfred', title: 'NPC任务：血族猎人阿尔弗雷德 (NPC Quests: Vileblood Hunter Alfred)', level: 2 },
  { id: 'section-npc-quests-arianna', title: 'NPC任务：妓女阿丽安娜 (NPC Quests: Arianna, Woman of Pleasure)', level: 2 },
  { id: 'section-npc-quests-narrow-minded-man', title: 'NPC任务：心胸狭窄的男人 (NPC Quests: Narrow Minded Man)', level: 2 },
  { id: 'section-npc-quests-djura', title: 'NPC任务：退休猎人机枪哥 (NPC Quests: Retired Hunter Djura)', level: 2 },
  { id: 'section-npc-quests-adella', title: 'NPC任务：修女阿德拉 (NPC Quests: Sister Adella)', level: 2 },
  { id: 'section-npc-quests-transformed-man', title: 'NPC任务：变异的男人 / 乞丐 (NPC Quests: Transformed Man)', level: 2 },
  { id: 'section-npc-quests-provost-willem', title: 'NPC任务：威廉大师 (NPC Quests: Provost Willem)', level: 2 },
  { id: 'section-npc-quests-annalise', title: 'NPC任务：血族女王安娜丽丝 (NPC Quests: Annalise, Queen of the Vilebloods)', level: 2 },
  { id: 'section-npc-quests-patches', title: 'NPC任务：蜘蛛帕奇 (NPC Quests: Patches the Spider)', level: 2 },
  { id: 'section-npc-quests-valtr', title: 'NPC任务：联盟大师沃尔特 (NPC Quests: Valtr, Master of the League)', level: 2 },
  { id: 'section-npc-quests-simon', title: 'NPC任务：寻找秘密的西蒙 (NPC Quests: Simon, Seeker of Secrets)', level: 2 },
  { id: 'section-npc-quests-ludwig-head', title: 'NPC任务：圣剑路德维希的头颅 (NPC Quests: Ludwig, the Holy Blade)', level: 2 },
  { id: 'section-npc-quests-brador', title: 'NPC任务：教会刺客布拉多 (NPC Quests: Brador, Church Assassin)', level: 2 },
  { id: 'section-npc-quests-adeline', title: 'NPC任务：爱德琳 (NPC Quests: Adeline)', level: 2 },
  { id: 'section-npc-quests-yamamura', title: 'NPC任务：流浪者山村 (NPC Quests: Yamamura the Wanderer)', level: 2 },
  { id: 'section-npc-quests-fishing-priest', title: 'NPC任务：小渔村祭司 (NPC Quests: Fishing Hamlet Priest)', level: 2 },
  { id: 'section-chalice-dungeons', title: '圣杯地牢 (Chalice Dungeons)', level: 1 },
  { id: 'section-pthumerian-labyrinth', title: '苏美鲁迷宫 (Pthumerian Labyrinth)', level: 2 },
  { id: 'section-central-pthumerian-labyrinth', title: '中央苏美鲁迷宫 (Central Pthumerian Labyrinth)', level: 2 },
  { id: 'section-lower-pthumerian-labyrinth', title: '下层苏美鲁迷宫 (Lower Pthumerian Labyrinth)', level: 2 },
  { id: 'section-cursed-pthumerian-defilement', title: '受诅咒的苏美鲁污秽 (Cursed Pthumerian Defilement)', level: 2 },
  { id: 'section-pthumeru-ihyll', title: '苏美鲁伊忽尔 (Pthumeru Ihyll)', level: 2 },
  { id: 'section-hintertomb', title: '内墓穴 (Hintertomb)', level: 2 },
  { id: 'section-lower-hintertomb', title: '下层内墓穴 (Lower Hintertomb)', level: 2 },
  { id: 'section-ailing-loran', title: '衰弱的罗伦城 (Ailing Loran)', level: 2 },
  { id: 'section-lower-ailing-loran', title: '下层衰弱的罗伦城 (Lower Ailing Loran)', level: 2 },
  { id: 'section-isz-gravestone', title: '伊兹墓碑 (Isz Gravestone)', level: 2 },
  { id: 'section-items-equipment', title: '物品与装备 (Items & Equipment)', level: 1 },
  { id: 'section-consumables', title: '消耗品 (Consumables)', level: 2 },
  { id: 'section-hunter-tools', title: '猎人工具 (Hunter Tools)', level: 2 },
  { id: 'section-multiplayer-covenant', title: '多人游戏与契约物品 (Multiplayer & Covenant Items)', level: 2 },
  { id: 'section-materials', title: '升级与仪式材料 (Materials)', level: 2 },
  { id: 'section-key-items', title: '关键物品 (Key Items)', level: 2 },
  { id: 'section-badges', title: '徽章 (Badges)', level: 2 },
  { id: 'section-messenger-items', title: '信使物品与装扮 (Messenger Items)', level: 2 },
  { id: 'section-weapons', title: '武器 (Weapons)', level: 1 },
  { id: 'weapon-saw-cleaver', title: '锯肉刀 (Saw Cleaver)', level: 2 },
  { id: 'weapon-saw-spear', title: '锯矛 (Saw Spear)', level: 2 },
  { id: 'weapon-hunter-axe', title: '猎人斧 (Hunter Axe)', level: 2 },
  { id: 'weapon-beasthunter-saif', title: '怪兽猎人弯刀 (Beasthunter Saif)', level: 2 },
  { id: 'weapon-threaded-cane', title: '螺纹手杖 (Threaded Cane)', level: 2 },
  { id: 'weapon-beast-cutter', title: '野兽切割刀 (Beast Cutter)', level: 2 },
  { id: 'weapon-burial-blade', title: '送葬之刃 (Burial Blade)', level: 2 },
  { id: 'weapon-blade-of-mercy', title: '慈悲之刃 (Blade of Mercy)', level: 2 },
  { id: 'weapon-rifle-spear', title: '步枪矛 (Rifle Spear)', level: 2 },
  { id: 'weapon-stake-driver', title: '打桩机 (Stake Driver)', level: 2 },
  { id: 'section-trophy-list', title: '查看全奖杯列表', level: 1 }
];

export default function WalkthroughBloodborne() {
  const { slug: paramSlug } = useParams();
  const slug = paramSlug || 'bloodborne';
  const [game, setGame] = useState(null);
  const [activeSection, setActiveSection] = useState('section-donation');
  const [readingProgress, setReadingProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [expandedSections, setExpandedSections] = useState({});
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  
  useEffect(() => {
    const savedLikes = localStorage.getItem(`bb-likes-${slug}`);
    const hasLiked = localStorage.getItem(`bb-has-liked-${slug}`);
    
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    } else {
      setLikes(22);
    }
    
    if (hasLiked === 'true') {
      setIsLiked(true);
    }
  }, [slug]);

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);
    
    localStorage.setItem(`bb-likes-${slug}`, newLikes.toString());
    localStorage.setItem(`bb-has-liked-${slug}`, (!isLiked).toString());
  };

  
  const getShareUrl = () => {
    const baseUrl = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
      ? 'https://gamestation.cc' 
      : window.location.origin;
    return `${baseUrl}/${slug}`;
  };

  const handleCopyLink = () => {
    const url = getShareUrl();
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleWechatShare = () => {
    window.location.href = 'weixin://';
    setIsShareOpen(false);
  };

  const handleWeiboShare = () => {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(`${game?.title || '血源诅咒'} 终极攻略指南 ${url}`);
    window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${title}`, '_blank');
    setIsShareOpen(false);
  };

  const handleSystemShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${game?.title || '血源诅咒'} 终极攻略指南`,
          text: `来看看这篇超详细的《${game?.title || '血源诅咒'}》攻略指南！`,
          url: getShareUrl(),
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      handleCopyLink();
      alert('您的浏览器不支持系统分享，已为您复制链接。');
    }
    setIsShareOpen(false);
  };

  const handleSaveImage = () => {
    alert('请使用系统截屏功能保存当前页面。');
    setIsShareOpen(false);
  };

  // 构建树形结构 TOC
  const tocTree = useMemo(() => {
    const tree = [];
    let currentParent = null;

    tocItems.forEach(item => {
      if (item.level === 1) {
        currentParent = { ...item, children: [] };
        tree.push(currentParent);
      } else if (item.level === 2 && currentParent) {
        currentParent.children.push(item);
      }
    });

    return tree;
  }, []);

  const toggleSection = (e, id, forceState) => {
    e.stopPropagation();
    e.preventDefault();
    setExpandedSections(prev => ({
      ...prev,
      [id]: forceState !== undefined ? forceState : !prev[id]
    }));
  };

  useEffect(() => {
    const parent = tocTree.find(p => 
      p.id === activeSection || p.children.some(c => c.id === activeSection)
    );
    
    if (parent) {
       setExpandedSections(prev => ({
         ...prev,
         [parent.id]: true
       }));
    }
  }, [activeSection, tocTree]);

  useEffect(() => {
    const foundGame = booksData.find(g => {
        const gameSlug = g.slug || g.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-\u4e00-\u9fa5]+/g, '').replace(/\-\-+/g, '-');
        return slug === gameSlug || slug === `${gameSlug}-walkthrough`;
    });
    setGame(foundGame || {
      title: '血源诅咒',
      author: 'FromSoftware',
      imgUrl: bloodborneCover,
      date: '2015年03月24日',
      description: '在饱受神秘瘟疫摧残的古都雅南，扮演猎人探索阴暗的街巷...'
    });
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100))) : 0;
      setReadingProgress(progress);

      let currentSection = activeSection;
      const sectionOffsets = tocItems.map(item => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, offset: -Infinity };
        return { id: item.id, offset: element.getBoundingClientRect().top - 120 };
      });

      if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.documentElement.scrollHeight - 10) {
         for (let i = tocItems.length - 1; i >= 0; i--) {
            if (document.getElementById(tocItems[i].id)) {
               currentSection = tocItems[i].id;
               break;
            }
         }
      } else {
          const passedSections = sectionOffsets.filter(s => s.offset <= 0);
          if (passedSections.length > 0) {
            currentSection = passedSections[passedSections.length - 1].id;
          } else if (sectionOffsets.length > 0) {
            currentSection = sectionOffsets[0].id;
          }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (id === 'section-donation') {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  if (!game) return null;

  return (
    <div
      className="min-h-screen bg-[#070707] bb-gothic-bg bb-font-body font-sans text-gray-200 selection:bg-black selection:text-[#fdfbf7]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
       <header className="site-nav">
        <div className="site-nav__inner">
          <div className="site-nav__left">
            <Link to="/" className="site-nav__brand">
              <img src={logo} alt="Gamestation" />
            </Link>
            <nav className="site-nav__links">
              <div className="nav-item" tabIndex={0}>
                <button
                  type="button"
                  className="nav-link"
                  aria-expanded={isCategoryOpen}
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                >
                  游戏分类
                  <ChevronDown 
                    size={14} 
                    strokeWidth={2.2} 
                    className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`nav-panel ${isCategoryOpen ? 'is-open' : ''}`}
                  style={isCategoryOpen ? { opacity: 1, transform: 'translateY(0)', pointerEvents: 'auto' } : undefined}
                >
                  <div className="nav-panel__col">
                    {categoryOptions && categoryOptions.map((category) => (
                      <Link
                        key={category}
                        to="/"
                        className={`nav-panel__link ${activeCategory === category ? 'is-active' : ''}`}
                        onClick={() => {
                          setActiveCategory(category);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link className="nav-link nav-link--with-icon" to="/changelog">
                <BookOpen size={14} strokeWidth={2.2} />
                更新日志
                <span className="nav-badge">更新</span>
              </Link>
              <Link className="nav-link nav-link--with-icon" to="/sponsors">
                <Heart size={14} strokeWidth={2.2} />
                赞助者名单
              </Link>
            </nav>
          </div>
          <div className="site-nav__right">
            <div className="site-nav__search">
              <Search size={16} strokeWidth={2.2} />
              <input 
                className="site-nav__input" 
                placeholder="搜索页面内容..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.find(searchQuery);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="fixed top-[60px] left-0 w-full h-1 bg-[#1a1a1a] z-50">
        <div 
          className="h-full bg-[#8a0303] transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="pt-[100px] pb-20 max-w-[1400px] mx-auto px-4 md:px-6 flex gap-10 lg:gap-14">
          
          {/* Main Content */}
          <article className="flex-1 min-w-0 bg-[#0a0a0a] rounded-sm border border-[#8a0303]/30 shadow-[0_0_40px_rgba(138,3,3,0.15)] p-8 md:p-12 md:pb-16 transition-shadow text-[#d4d4d4] relative z-10"> <div className="bb-fog-overlay"></div>
             {/* Banner */}
             <div className="w-full aspect-[2/1] rounded-sm overflow-hidden mb-8 shadow-inner bg-[#1a1a1a] relative group border border-[#8a0303]/50 bb-blood-glow">
               <div className="bb-blood-splatter"></div>
               <img 
                 src={bloodborneCover} 
                 alt={game.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
             </div>
             
             {/* Title */}
             <h1 className="text-4xl md:text-[50px] font-bold mb-6 leading-[1.2] text-[#e0e0e0] tracking-widest bb-font-title drop-shadow-[0_0_10px_rgba(138,3,3,0.3)]">
               Bloodborne 完整图文攻略
               <span className="block text-xl md:text-2xl text-[#8a0303] mt-3 font-normal bb-font-title tracking-widest opacity-90 uppercase">SEEK THE PALEBLOOD</span>
             </h1>
             
             {/* Meta */}
             <div className="flex items-center justify-between mb-10 pb-8 border-b border-[#262626]">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-[#262626] shadow-sm cursor-pointer hover:ring-2 hover:ring-[#8a0303]/20 transition-all bg-black flex items-center justify-center">
                   <span className="text-white font-bold text-xs">FS</span>
                 </div>
                 <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-[15px] text-[#d4d4d4] hover:text-[#8a0303] cursor-pointer transition-colors">From Software</span>
                     <span className="px-1.5 py-[1px] bg-[#1a1a1a] text-gray-500 text-[10px] font-bold rounded uppercase tracking-wider">作者</span>
                   </div>
                   <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-3 font-medium">
                    <span>最后更新: 2026年03月</span>
                     <span>阅读 20分钟</span>
                   </div>
                 </div>
               </div>
               <div className="flex items-center gap-2 xl:hidden">
                 <button className="p-2 text-gray-400 hover:text-[#8a0303] hover:bg-[#8a0303]/20 rounded-full transition-all">
                    <Heart size={20} />
                 </button>
                 <button className="p-2 text-gray-400 hover:text-[#8a0303] hover:bg-[#120a0a] rounded-full transition-all">
                    <Bookmark size={20} />
                 </button>
                 <button className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-full transition-all">
                    <Share2 size={20} />
                 </button>
               </div>
             </div>

             <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#d4d4d4] prose-headings:tracking-tight prose-p:text-[#d4d4d4] prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-[#8a0303] prose-a:no-underline prose-a:border-b prose-a:border-[#8a0303]/30 hover:prose-a:border-[#8a0303] hover:prose-a:bg-[#8a0303]/10 prose-a:transition-all prose-img:rounded-lg prose-img:shadow-sm prose-blockquote:border-l-4 prose-blockquote:border-[#8a0303] prose-blockquote:bg-[#141414] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-[#d4d4d4] prose-li:text-[#d4d4d4] prose-strong:text-[#d4d4d4] prose-strong:font-bold">
               
               <div className="mb-12">
                 <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                   {/* Cover Image & Purchase */}
                   <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                     
                     {/* Purchase Card */}
                     <div className="bg-[#0d0d0d] rounded-xl shadow-sm border border-[#333333] p-5">
                       <h3 className="font-bold text-[#e0e0e0] mb-4 text-sm flex items-center gap-2">
                         <span>🛍️</span> 购买游戏
                       </h3>
                       
                       <div className="flex flex-col gap-4">
                         <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#262626] bg-[#0d0d0d] mb-2">
                           <img src={bloodborneCover} alt="PS4 Official Disc Cover" className="absolute inset-0 w-full h-full object-cover p-1" />
                         </div>

                         <div className="flex items-center justify-between">
                           <div className="flex flex-col">
                             <span className="text-xs text-gray-400 line-through">HK$ 148.00</span>
                             <span className="text-2xl font-bold text-[#8a0303]">HK$ 74.00</span>
                           </div>
                           <span className="px-2.5 py-1 bg-[#8a0303]/20 text-[#8a0303] text-xs font-bold rounded">-50%</span>
                         </div>

                         <a 
                           href="https://store.playstation.com/zh-hans-hk/product/HP9000-CUSA01363_00-0000000000000002"  
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-full py-3 bg-[#5c0000] text-white font-bold rounded-full text-sm hover:bg-[#3d0000] transition-all flex items-center justify-center gap-2 shadow-sm group"
                         >
                           <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                           <span>前往 PS Store 购买</span>
                         </a>
                         
                         <p className="text-[10px] text-gray-300 text-center">
                           *价格仅供参考，请以商店实际价格为准
          
                         </p>
                       </div>
                     </div>
                   </div>
                    
                   {/* Basic Info Table */}
                   <div className="flex-1 flex flex-col">
                     <div className="bg-[#0d0d0d] rounded-xl shadow-sm border border-[#333333] p-6 flex flex-col h-full">
                       <div className="flex items-center justify-between border-b border-[#262626] pb-4 mb-4">
                         <h3 className="text-xl font-bold text-[#e0e0e0] flex items-center gap-2">
                          <span className="text-2xl">📋</span> 游戏档案
                        </h3>
                       </div>
                       
                       <div className="flex-1 grid grid-cols-1 content-center gap-1">
                         <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#262626]/50 last:border-0">
                           <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                             <span className="w-5 text-center">🏢</span> 开发商
                           </span>
                           <span className="font-semibold text-[#e0e0e0]">FromSoftware</span>
                         </div>
                         <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#262626]/50 last:border-0">
                           <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                             <span className="w-5 text-center">📦</span> 发行商
                           </span>
                           <span className="font-semibold text-[#e0e0e0]">索尼互动娱乐 (SIE)</span>
                         </div>
                         <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#262626]/50 last:border-0">
                           <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                             <span className="w-5 text-center">📅</span> 发售日期
                           </span>
                           <span className="font-semibold text-[#e0e0e0]">2015-03-24</span>
                         </div>
                         <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#262626]/50 last:border-0">
                           <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                             <span className="w-5 text-center">🎯</span> 游戏类型
                           </span>
                           <span className="font-semibold text-[#e0e0e0]">动作角色扮演 (ARPG)</span>
                         </div>
                         <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#262626]/50 last:border-0">
                           <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                             <span className="w-5 text-center">🕹️</span> 对应平台
                           </span>
                           <span className="font-semibold text-[#e0e0e0]">PS4</span>
                         </div>
                         <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#262626]/50 last:border-0">
                           <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                             <span className="w-5 text-center">👥</span> 游玩人数
                           </span>
                           <span className="font-semibold text-[#e0e0e0]">1人 (支持在线联机)</span>
                         </div>
                         <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#262626]/50 last:border-0">
                           <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                             <span className="w-5 text-center">💰</span> 参考价格
                           </span>
                           <span className="font-bold text-[#8a0303] text-base">HK$ 148.00</span>
                         </div>
                         <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#262626]/50 last:border-0">
                           <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                             <span className="w-5 text-center">🌐</span> 语言支持
                           </span>
                           <span className="font-semibold text-[#e0e0e0] text-right max-w-[50%] leading-tight">繁体中字 / 英文语音</span>
                         </div>
                         <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors last:border-0">
                           <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                             <span className="w-5 text-center">⭐</span> 年龄分级
                           </span>
                           <div className="flex items-center gap-2">
                             <span className="px-1.5 py-0.5 border border-[#404040] rounded text-[10px] font-bold text-gray-500">ESRB M</span>
                             <span className="font-semibold text-[#e0e0e0]">17+ / 18+</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Game Introduction */}
               <h2 className="text-3xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#8a0303] bb-font-title border-b border-[#8a0303]/30 pb-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  📖 游戏简介
               </h2>
               <p className="lead text-[17px] text-[#c2c2c2] leading-relaxed mb-8">
                 《血源诅咒》（Bloodborne）是由FromSoftware开发，索尼电脑娱乐发行的动作角色扮演游戏。故事发生在饱受神秘瘟疫摧残的古都雅南（Yharnam），玩家将扮演一名外乡人猎人，在这个充满哥特式恐怖与克苏鲁神话色彩的世界中探索阴暗的街巷。面对恐怖的兽化病人和宇宙神祇，在绝望中寻找鲜血与真相。


               {/* Core Features */}
               </p>
               <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8a0303] bb-font-title border-b border-[#8a0303]/30 pb-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  🎯 核心特色
               </h2>
               <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-[#0f0f0f] p-5 rounded-sm border-l-4 border-l-[#8a0303] border-y border-r border-[#1a1a1a] shadow-inner">
                    <h4 className="font-bold text-lg mb-2 text-[#8a0303]">哥特式恐怖设定</h4>
                    <p className="text-sm text-[#8a8a8a] m-0">
                      探索充满维多利亚时代风格与克苏鲁神话元素的古都雅南，体验令人毛骨悚然的氛围与精妙的关卡设计。
     
                    </p>
                  </div>
                  <div className="bg-[#0f0f0f] p-5 rounded-sm border-l-4 border-l-[#8a0303] border-y border-r border-[#1a1a1a] shadow-inner">
                    <h4 className="font-bold text-lg mb-2 text-[#8a0303]">激进的战斗系统</h4>
                    <p className="text-sm text-[#8a8a8a] m-0">
                      鼓励主动进攻的战斗机制。取消了盾牌防御，取而代之的是灵活的闪避与独特的“虚血回复”系统。
     
                    </p>
                  </div>
                  <div className="bg-[#0f0f0f] p-5 rounded-sm border-l-4 border-l-[#8a0303] border-y border-r border-[#1a1a1a] shadow-inner">
                    <h4 className="font-bold text-lg mb-2 text-[#8a0303]">独特的诡兵器</h4>
                    <p className="text-sm text-[#8a8a8a] m-0">
                      每把武器都具有两种截然不同的形态与攻击模组。在连招中自由切换形态，展现华丽且致命的战斗技巧。
     
                    </p>
                  </div>
               </div>

               {/* Media Ratings */}
               <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8a0303] bb-font-title border-b border-[#8a0303]/30 pb-2 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  <span className="text-2xl">🏆</span> 媒体评分
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-[#bf1313] text-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                    <span className="font-bold text-lg mb-2 opacity-90">IGN</span>
                    <span className="text-5xl font-black mb-4">9.1<span className="text-2xl opacity-70">/10</span></span>
                    <p className="text-xs leading-relaxed opacity-90">"一场令人精疲力竭却又无比满足的受苦之旅。"</p>
                  </div>
                  <div className="bg-[#ffcc00] text-[#d4d4d4] p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                    <span className="font-bold text-lg mb-2 opacity-70">GameSpot</span>
                    <span className="text-5xl font-black mb-4">9<span className="text-2xl opacity-50">/10</span></span>
                    <p className="text-xs leading-relaxed opacity-80">"雅南的恐怖令人着迷，令人惊叹的 Boss 战和引人入胜的探索。"</p>
                  </div>
                  <div className="bg-[#333333] text-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                    <span className="font-bold text-lg mb-2 opacity-90">Metacritic</span>
                    <span className="text-5xl font-black mb-4 bg-green-600 px-3 py-1 rounded">92</span>
                    <p className="text-xs leading-relaxed opacity-90">"FromSoftware 的巅峰之作，将动作 RPG 推向了新的高度。"</p>
                  </div>
               </div>

               {/* Official Screenshots */}
               <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8a0303] bb-font-title border-b border-[#8a0303]/30 pb-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  📸 游戏截图
               </h2>
               <div className="mb-12">
                 <div className="rounded-lg overflow-hidden border border-[#333333] shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-shadow group aspect-video">
                   <img src={bloodborneScreenshot} alt="Bloodborne Screenshot" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = bloodborneCover }} />
                 </div>
               </div>

               {/* Gameplay */}
               <h2 id="section-gameplay" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  游戏玩法
               </h2>

               {/* Controls */}
               <h3 id="section-controls" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <Crosshair className="text-[#8a0303]" /> 控制说明
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 《血源诅咒》的控制方式与《魂》系列游戏（From Software 之前开发的游戏，也是《血源诅咒》最常被拿来比较的对象）略有不同。话虽如此，如果您玩过《魂》系列，只需要稍微调整一下就能掌握新的控制方案。


               </p>
               <div className="overflow-x-auto mb-10">
                 <table className="w-full text-left border-collapse min-w-[600px] bg-[#0a0a0a] rounded-sm overflow-hidden border border-[#8a0303]/30 shadow-sm border border-[#333333]">
                   <thead className="bg-[#141414] text-[#a3a3a3] text-sm uppercase tracking-wider">
                     <tr>
                       <th className="px-6 py-3 border-b border-[#333333] font-bold w-1/3">控制按键</th>
                       <th className="px-6 py-3 border-b border-[#333333] font-bold">描述</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 text-[15px] text-[#a3a3a3]">
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={lJoystick} alt="L Joystick" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">角色移动</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={rJoystick} alt="R Joystick" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">视角移动</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={dpad} alt="D-pad" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">
                         <div className="space-y-1">
                           <div><span className="font-medium">上：</span>将生命值转化为水银子弹</div>
                           <div><span className="font-medium">下：</span>切换消耗品</div>
                           <div><span className="font-medium">左/右：</span>切换武器</div>
                         </div>
                       </td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={xButton} alt="X Button" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">互动</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={circleButton} alt="Circle Button" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">
                         <div className="space-y-1">
                           <div className="text-sm"><span className="text-[#8a0303] font-medium">锁定敌人时：</span>侧步或后撤步</div>
                           <div className="text-sm"><span className="text-gray-500 font-medium">附近没有敌人时：</span>翻滚或冲刺（长按）</div>
                         </div>
                       </td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={squareButton} alt="Square Button" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">使用装备的消耗品</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2 text-[#8a0303]"><img src={triangleButton} alt="Triangle Button" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">使用采血瓶</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={l1Button} alt="L1 Button" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">
                         变形右手诡兵器<br/>
                         <span className="text-sm text-gray-500">在攻击时按下 L1 将执行特殊的变形攻击</span>
                       </td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={r1Button} alt="R1 Button" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">使用装备的右手武器攻击</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={l2Button} alt="L2 Button" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">
                         使用装备的左手武器攻击<br/>
                         <span className="text-sm text-gray-500">双手握持右手武器时，执行特殊攻击</span>
                       </td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={r2Button} alt="R2 Button" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">
                         使用右手武器进行重攻击<br/>
                         <span className="text-sm text-gray-500">长按执行蓄力攻击</span>
                       </td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-6 py-4 font-semibold flex items-center justify-center gap-2"><img src={r3Button} alt="R3 Button" className="w-6 h-6 object-contain" /></td>
                       <td className="px-6 py-4">
                         <div className="space-y-1">
                           <div className="text-sm"><span className="text-[#8a0303] font-medium">附近有敌人时：</span>锁定</div>
                           <div className="text-sm"><span className="text-gray-500 font-medium">附近没有敌人时：</span>重置视角</div>
                         </div>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>

               {/* Basics */}
               <h3 id="section-basics" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <BookOpen className="text-[#8a0303]" /> 基础知识
               </h3>
               <div className="bg-[#141414] p-6 rounded-xl border border-[#262626] mb-8">
                 <p className="text-[#a3a3a3] m-0 leading-relaxed">
                   因为《血源诅咒》几乎没有提供任何教程就把您扔进了游戏，所以基础的玩法只能通过<strong>猎人梦境中的信使</strong>来学习。为了解决这个问题，我将涵盖您在游戏初期需要了解的一般信息。
  
                 </p>
               </div>

               {/* Health & Death */}
               <h3 id="section-health-death" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <Heart className="text-[#8a0303]" /> 生命与死亡
               </h3>
               <p className="text-[#a3a3a3] mb-4">
                 角色的生命值由您的<strong>活力（Vitality）</strong>决定，屏幕左上角的红色量表代表您的总生命值。当生命值降为 0 时，您的猎人将会死亡，并返回到您最后激活的提灯处，同时将您的<strong>血之回响（Blood Echoes）</strong>掉落在地上。

               </p>
               <p className="text-[#a3a3a3] mb-4">有两种方法可以恢复生命值：<strong>采血瓶（Blood Vials）</strong>和<strong>虚血回复（Regain）</strong>。</p>
               <ul className="list-disc pl-6 space-y-2 text-[#a3a3a3] mb-8">
                 <li><strong>采血瓶</strong>：按下 🔺 键使用，可恢复 40% 的生命值。可以在猎人梦境中购买，或从击杀的敌人身上掉落。您身上最多只能携带 20 个采血瓶，超出的部分会自动存入猎人梦境的储藏箱中。</li>
                 <li><strong>虚血回复（Regain）</strong>：当您受到攻击后的一小段时间内，可以通过攻击敌人来恢复生命值。受到攻击时，生命值量表上会出现一条白色的垂直线指示您当前的生命值，而白线后面的暗红色部分，就是您可以通过攻击敌人来恢复的生命值。</li>
               </ul>

               {/* Blood Echoes & Leveling Up */}
               <h3 id="section-blood-echoes" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <Coins className="text-[#8a0303]" /> 血之回响与升级
               </h3>
               <p className="text-[#a3a3a3] mb-4">
                 血之回响是《血源诅咒》中的货币形式，用于购买从信使商店里的物品到升级您的角色等所有东西。它们通过击杀敌人获得，并且会一直存放在您身上，直到您使用它们或者死亡。如果您死亡，您的血之回响要么掉落在地上，要么被掉落地点附近的某个敌人吸收，所以请确保在第二次死亡前捡起它们，否则您将永远失去它们。

               </p>
               <p className="text-[#a3a3a3] mb-8">
                 为了升级，您进入猎人梦境时至少需要 1 点<strong>灵视（Insight）</strong>才能唤醒人偶（Doll）NPC。她允许您用一定数量的血之回响来换取任意属性的 1 点提升。每次您用血之回响兑换属性点后，下一次升级所需的血之回响就会增加，无论您升级的是哪个属性，因为这是基于您的整体等级而不是单个属性。


               {/* Insight */}
               </p>
               <h3 id="section-insight" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <Search className="text-[#8a0303]" /> 灵视
               </h3>
               <p className="text-[#a3a3a3] mb-8">
                 通过发现和击杀 Boss，以及使用特定物品可以获得<strong>灵视</strong>。灵视是另一种形式的货币，用于召唤其他猎人来到您的世界，或者在灵视信使商店购买物品。请注意，高灵视会降低您的兽性（Beasthood）和狂暴（Frenzy）抗性，并且会使某些敌人变得更强。因此，保留太多灵视可能既是祝福也是诅咒。


               {/* Saving & Loading */}
               </p>
               <h3 id="section-saving-loading" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <Bookmark className="text-[#8a0303]" /> 保存与读取
               </h3>
               <p className="text-[#a3a3a3] mb-8">
                 《血源诅咒》使用 PlayStation 4 的自动保存功能，在游戏中的随机时间点定期保存。这意味着如果您死亡，您不能简单地重新加载游戏再试一次，因为死亡后游戏会自动保存，您需要再次打通该区域。唯一的例外是将存档文件备份到外部设备（例如 USB 闪存盘）。这将允许您击败最终 Boss 获得结局奖杯，然后用旧存档覆盖当前存档来完成另一个结局，而无需重新游玩整个游戏。


               {/* Weapons & Equipment */}
               </p>
               <h3 id="section-weapons-equipment" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <Swords className="text-[#8a0303]" /> 武器与装备
               </h3>
               <p className="text-[#a3a3a3] mb-4">您可以给猎人装备两种类型的武器：右手武器和左手武器。</p>
               <ul className="list-disc pl-6 space-y-2 text-[#a3a3a3] mb-6">
                 <li><strong>右手武器</strong>是您的主武器。虽然您可以装备两把，但一次只能通过按下十字键右来使用其中一把。这些武器被称为<strong>诡兵器（Trick Weapons）</strong>，具有两种攻击形态，可以通过按下 L1 键进行切换。</li>
                 <li>您也可以装备两把<strong>左手武器</strong>，通过按下十字键左来切换，可以是火器、火把或盾牌。虽然火把非常适合探索黑暗区域，但火器将是您的主要副武器，非常适合远程攻击和使敌人踉跄（枪反）。</li>
               </ul>
               <p className="text-[#a3a3a3] mb-6">
                 武器具有基础属性，可以通过使用强化材料强化武器或添加血宝石来提升。要强化武器，您需要前往猎人梦境，靠近杰尔曼（Gehrman）旁边的工坊工作台，选择“强化武器”。每次升级都需要特定类型和数量的强化材料，以及一定数量的血之回响。


               </p>
               <div className="overflow-x-auto mb-6">
                 <table className="w-full text-left border-collapse min-w-[400px] bg-[#0a0a0a] rounded-sm overflow-hidden border border-[#8a0303]/30 shadow-sm border border-[#333333]">
                   <thead className="bg-[#141414] text-[#a3a3a3] text-sm tracking-wider">
                     <tr>
                       <th className="px-6 py-3 border-b border-[#333333] font-bold w-24">等级</th>
                       <th className="px-6 py-3 border-b border-[#333333] font-bold">所需材料</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 text-[15px] text-[#a3a3a3]">
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+1</td><td className="px-6 py-3">3个 血石碎片</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+2</td><td className="px-6 py-3">5个 血石碎片</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+3</td><td className="px-6 py-3">8个 血石碎片</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+4</td><td className="px-6 py-3">3个 双子血石碎片</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+5</td><td className="px-6 py-3">5个 双子血石碎片</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+6</td><td className="px-6 py-3">8个 双子血石碎片</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+7</td><td className="px-6 py-3">3个 血石块</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+8</td><td className="px-6 py-3">5个 血石块</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+9</td><td className="px-6 py-3">8个 血石块</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-6 py-3 font-semibold">+10</td><td className="px-6 py-3">1个 血岩</td></tr>
                   </tbody>
                 </table>
               </div>
               <p className="text-[#a3a3a3] mb-8">
                 除了强化武器外，一旦您获得了血宝石工坊工具，还可以通过靠近杰尔曼旁边的工坊工作台选择“血宝石强化”来装备血宝石。每把武器需要不同类型的血宝石，宝石插槽数量取决于武器，并且可以附加从物理攻击力到毒属性攻击等各种效果。


               {/* Attire Sets */}
               </p>
               <h3 id="section-attire-sets" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <Shield className="text-[#8a0303]" /> 服饰套装
               </h3>
               <p className="text-[#a3a3a3] mb-8">
                 服饰是您穿在服装槽位（头部、胸部、手部和腿部）的防具。每件装备都会对您的整体防御力产生正面或负面的影响，但有些也会影响您对毒素和狂暴等状态异常的抗性。虽然在《魂》系列中护甲非常重要，但在《血源诅咒》中，服饰对属性的影响微乎其微，除了抗性之外，更多是为了外观考量。


               {/* Items */}
               </p>
               <h3 id="section-items" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <ShoppingCart className="text-[#8a0303]" /> 物品
               </h3>
               <p className="text-[#a3a3a3] mb-12">
                 物品分为三种类型：消耗品、秘法道具和关键物品。关键物品是您无法主动使用的物品，主要是与任务相关的物品，例如钥匙或信使外观。消耗品和秘法道具是您可以使用的物品，无论是从主菜单使用还是装备到快捷栏。它们通常用于进攻（例如向敌人投掷燃烧瓶），或作为辅助物品来治疗状态异常（例如使用解毒药来治疗慢毒和急毒）。


               {/* Character Creation */}
               </p>
               <h2 id="section-character-creation" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  角色创建
               </h2>
               <p className="text-[#a3a3a3] mb-8">
                 本节介绍了构成角色的不同元素，包括在游戏开始时的初始创建，以及最终决定其游玩方式的属性。


               {/* Origin */}
               </p>
               <h3 id="section-origin" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <Hand className="text-[#8a0303]" /> 出身
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 角色的<strong>出身（Origin）</strong>决定了他们的初始属性，但在游戏中随着升级，您将很快根据自己的喜好定制这些属性。最终，您选择的初始出身意义不大，但您可能想阅读每个出身的背景故事，以便进行主题选择。


               </p>
               <div className="overflow-x-auto mb-10">
                 <table className="w-full text-left border-collapse min-w-[600px] bg-[#0a0a0a] rounded-sm overflow-hidden border border-[#8a0303]/30 shadow-sm border border-[#333333]">
                   <thead className="bg-[#141414] text-[#a3a3a3] text-sm tracking-wider">
                     <tr>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">出身</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">回响</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">活力</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">持久力</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">力量</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">技巧</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">血质</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">秘法</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 text-[15px] text-[#a3a3a3] text-center">
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-4 py-3 text-left font-medium">平庸 (Milquetoast)</td><td>300</td><td>11</td><td>10</td><td>12</td><td>10</td><td>9</td><td>8</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-4 py-3 text-left font-medium">唯一生还者 (Lone Survivor)</td><td>420</td><td>14</td><td>11</td><td>11</td><td>10</td><td>7</td><td>7</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-4 py-3 text-left font-medium">悲惨童年 (Troubled Childhood)</td><td>360</td><td>9</td><td>14</td><td>9</td><td>13</td><td>6</td><td>9</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-4 py-3 text-left font-medium">暴力过去 (Violent Past)</td><td>180</td><td>12</td><td>11</td><td>15</td><td>9</td><td>6</td><td>7</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-4 py-3 text-left font-medium">专家 (Professional)</td><td>240</td><td>9</td><td>12</td><td>9</td><td>15</td><td>7</td><td>8</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-4 py-3 text-left font-medium">退役军人 (Military Veteran)</td><td>320</td><td>10</td><td>10</td><td>14</td><td>13</td><td>7</td><td>6</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-4 py-3 text-left font-medium">贵族后裔 (Noble Scion)</td><td>540</td><td>7</td><td>8</td><td>9</td><td>13</td><td>14</td><td>9</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-4 py-3 text-left font-medium">残酷命运 (Cruel Fate)</td><td>500</td><td>10</td><td>12</td><td>10</td><td>9</td><td>5</td><td>14</td></tr>
                     <tr className="hover:bg-[#141414] transition-colors"><td className="px-4 py-3 text-left font-medium">无用之人 (Waste of Skin)</td><td>10</td><td>10</td><td>9</td><td>10</td><td>9</td><td>7</td><td>9</td></tr>
                   </tbody>
                 </table>
               </div>

               {/* Stats */}
               <h3 id="section-stats" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 <Target className="text-[#8a0303]" /> 属性
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 角色的属性决定了从他们拥有多少生命值和精力，到他们的攻击能造成多少伤害的一切。通过收集敌人的血之回响、使用物品或将东西卖给信使，然后在猎人梦境中与人偶对话，可以将这些属性提升 1 点。

               </p>
               <ul className="list-disc pl-6 space-y-4 text-[#a3a3a3] mb-12">
                 <li><strong>活力 (VIT)</strong>：活力决定了角色的最大生命值 (HP)。在活力达到 30 点后，HP 的增加量会减少，在 50 点时增加量受到严重限制。</li>
                 <li><strong>持久力 (END)</strong>：持久力决定了角色的最大精力，以及对状态异常的抗性。在持久力达到 40 点后，精力的增加量受到严重限制，尽管您的抗性将继续增加。</li>
                 <li><strong>力量 (STR)</strong>：力量决定了您右手武器的伤害输出。在 25 点后，伤害的增加量会减少，在 50 点时增加量受到严重限制。</li>
                 <li><strong>技巧 (SKL)</strong>：技巧也决定了您右手武器的伤害输出，同时它还增加了您的内脏暴击伤害。在 25 点后，伤害的增加量会减少，在 50 点时增加量受到严重限制。</li>
                 <li><strong>血质 (BTG)</strong>：血质决定了您左手武器的伤害输出，特别是那些使用水银子弹的武器。在 25 点后，伤害的增加量会减少，在 50 点时增加量受到严重限制。</li>
                 <li><strong>秘法 (ACN)</strong>：秘法决定了秘法魔法的伤害输出，以及您的发现力（掉宝率）。在 25 点后，伤害的增加量会减少，在 50 点时增加量受到严重限制。</li>
               </ul>

               {/* Basic Combat */}
               <h2 id="section-basic-combat" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  基础战斗
               </h2>
               <p className="text-[#a3a3a3] mb-8">
                 战斗是《血源诅咒》中最重要的一部分，其错综复杂的特性决定了一个区域是简单还是困难。掌握战斗将是您是否喜欢这款游戏的决定性因素。


               </p>
               <h3 id="section-stamina" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 精力 (Stamina)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 精力用于从攻击和翻滚到冲刺和后撤步的所有动作，因此您需要确保合理使用它，以防止因无法避开攻击而死亡。幸运的是，如果您不执行任何消耗精力的动作，精力会自然恢复，因此请确保在敌人之间给自己时间恢复。


               </p>
               <h3 id="section-lock-on" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 锁定 (Lock-On)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 当靠近目标时，您可以按下锁定键，这样您就可以轻松地在他们周围后撤步和侧步。如果有多个目标，您可以切换目标，或者再次按下以取消锁定。虽然这对于瞄准攻击非常有用，但在某些情况下，您可能希望不锁定。什么时候？！嗯，大多数敌人的锁定部位是他们的头部，这意味着在与手臂或腿部有弱点的大型敌人战斗时，您可能希望不锁定，以专注于他们的弱点。


               </p>
               <h3 id="section-attacks" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 攻击与内脏暴击 (Attacks & Visceral Attacks)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 按下基本攻击键将执行较弱的攻击，比大多数攻击消耗的精力更少。这些攻击可以连在一起，使您可以相当容易地打断敌人的攻击，但它们仍然有缺点。另一方面，长按攻击键是一种慢得多的蓄力攻击，造成的伤害要大得多。这些攻击不能很好地与基本攻击连在一起，但它们确实具有使敌人蹒跚的能力。除了所有武器的常规控制之外，双手武器还有特殊属性。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 当敌人蹒跚时，他们将暴露于内脏暴击之下，当直接在敌人面前或身后按下基本攻击键时触发。这些攻击非常强大，其伤害计算完全独立于您的武器，无论您使用哪种武器，都可以造成巨大伤害。此外，内脏暴击使您对其他敌人的攻击无敌，并将击退周围的任何敌人。


               {/* Advanced Combat */}
               </p>
               <h2 id="section-advanced-combat" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  进阶战斗
               </h2>
               <p className="text-[#a3a3a3] mb-8">
                 除了基础战斗功能外，还有一些额外的进阶战斗功能。


               </p>
               <h3 id="section-weapon-transformation" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 武器变形 (Weapon Transformation)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 《血源诅咒》中所有右手武器都是诡兵器，可以有两种攻击模式。大多数武器有非常不同的攻击形式，因此装备并测试每把武器对于找到最适合您的武器至关重要。


               </p>
               <h3 id="section-beasthood" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 兽性 (Beasthood)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 当您使用兽化药丸时，您将进入野兽模式，这实际上会导致增加一个野兽槽，当其升高时会增加您的攻击力，而不是真正将您变成野兽。兽性不能像其他属性那样通过升级来提升，必须通过服饰来增加。


               </p>
               <h3 id="section-status-ailments" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 异常状态 (Status Ailments)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 当您遇到异常状态时，屏幕顶部会出现一个状态条，随着时间的推移慢慢填满，直到完全填满并且异常状态生效。除非被治愈，否则这些异常状态可能是致命的，因为许多异常状态会造成重大伤害，因此将治疗物品放在快捷栏上是一个非常好的主意。

               
               </p>
               <div className="overflow-x-auto mb-10">
                 <table className="w-full text-left border-collapse min-w-[600px] bg-[#0a0a0a] rounded-sm overflow-hidden border border-[#8a0303]/30 shadow-sm border border-[#333333]">
                   <thead className="bg-[#141414] text-[#a3a3a3] text-sm tracking-wider">
                     <tr>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">异常状态</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">效果</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">治疗方法</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 text-[15px] text-[#a3a3a3]">
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-4 py-3 font-medium text-purple-600">慢毒 (Slow Poison)</td>
                       <td className="px-4 py-3">持续损失生命值</td>
                       <td className="px-4 py-3">解毒药</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-4 py-3 font-medium text-red-600">急毒 (Rapid Poison)</td>
                       <td className="px-4 py-3">瞬间损失大量生命值</td>
                       <td className="px-4 py-3">解毒药</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-4 py-3 font-medium text-orange-600">狂暴 (Frenzy)</td>
                       <td className="px-4 py-3">瞬间损失70%生命值</td>
                       <td className="px-4 py-3">镇静剂</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <p className="text-[#a3a3a3] mb-8">
                 请注意，虽然您可以在慢毒生效后治愈它，但急毒和狂暴是瞬间发作的异常状态，必须在积累期间治愈。


               {/* Walkthrough */}
               </p>
               <h2 id="section-walkthrough" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  流程攻略 (Walkthrough)
               </h2>
               <p className="text-[#a3a3a3] mb-8">
                 在游戏开始时，您需要创建角色，选择性别和外观。最重要的一点是您的角色出身，这决定了角色的初始属性。在选择出身之前，您应该查看本指南的属性部分。请确保您对选择完全满意，因为一旦创建角色就没有回头路。


               </p>
               <h3 id="section-iosefkas-clinic" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 约瑟夫卡的诊所 (Iosefka's Clinic)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 在令人不安的过场动画之后，从附近的门出去，下楼梯，会发现一只正在啃食尸体的狼人（天灾兽）。虽然你可以通过徒手打死它或完全避开它，但游戏的设计意图是让你死在它手下，以便你能进入游戏的中心枢纽。话虽如此，在向怪物屈服之前，这也是测试你的战斗技巧和闪避策略的好时机。

               </p>
               <p className="text-[#a3a3a3] mb-8 font-medium">
                 请务必查阅本指南的基础战斗部分以获取更多信息。


               </p>
               <h3 id="section-hunters-dream" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 猎人梦境 (Hunter's Dream)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 径直走向台阶，查看信使，他们会为您提供游戏的基础武器。您可以选择三种不同的诡兵器和两把枪支：


               </p>
               <div className="overflow-x-auto mb-8">
                 <table className="w-full text-left border-collapse min-w-[600px] bg-[#0a0a0a] rounded-sm overflow-hidden border border-[#8a0303]/30 shadow-sm border border-[#333333]">
                   <thead className="bg-[#141414] text-[#a3a3a3] text-sm tracking-wider">
                     <tr>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">名称</th>
                       <th className="px-4 py-3 border-b border-[#333333] font-bold">说明</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 text-[15px] text-[#a3a3a3]">
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-4 py-3 font-medium text-[#e0e0e0]">锯肉刀 (Saw Cleaver)</td>
                       <td className="px-4 py-3">一把短锯，翻开后射程更远，同时保持单手操作</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-4 py-3 font-medium text-[#e0e0e0]">猎人斧 (Hunter Axe)</td>
                       <td className="px-4 py-3">一把短斧，伸长手柄可增加攻击距离，但需要双手操作</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-4 py-3 font-medium text-[#e0e0e0]">螺纹手杖 (Threaded Cane)</td>
                       <td className="px-4 py-3">一把可以变成鞭子的手杖，在保持单手操作的同时允许进行大范围攻击</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-4 py-3 font-medium text-[#e0e0e0]">猎人手枪 (Hunter Pistol)</td>
                       <td className="px-4 py-3">一把快速准确的手枪，非常适合反击（枪反）敌人</td>
                     </tr>
                     <tr className="hover:bg-[#141414] transition-colors">
                       <td className="px-4 py-3 font-medium text-[#e0e0e0]">猎人喇叭枪 (Hunter Blunderbuss)</td>
                       <td className="px-4 py-3">射击速度慢、范围广，在远距离伤害不高，但允许您应对人群</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <p className="text-[#a3a3a3] mb-8">
                 在继续走上台阶以接收笔记本之前，请务必装备这些物品。现在您可以查看猎人梦境中剩余的所有信使，以了解基础战斗知识，然后使用主楼梯底部的墓碑返回1楼病房。


               </p>
               <h3 id="section-1st-floor-sickroom" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 1楼病房 (1st Floor Sickroom)
               </h3>
               <div className="mb-6 rounded-lg overflow-hidden border border-[#333333] shadow-sm">
                 <img src={sickroomMap} alt="1st Floor Sickroom Map" className="w-full h-auto object-cover" />
               </div>
               <div className="bg-[#120a0a] p-5 rounded-lg border border-[#331111] mb-8">
                 <h4 className="font-bold text-[#d4d4d4] mb-2">如何使用地图：</h4>
                 <p className="text-blue-700 text-sm m-0">
                   我将在文本部分上方添加地图，以防单靠文本不足以指导您完成每个部分。宝物将在地图上编号，物品名称出现在下面的文本部分，后跟数字，例如 <strong>采血瓶 x4</strong>。
  
                 </p>
               </div>
               <p className="text-[#a3a3a3] mb-6">
                 不要进入下一个房间，而是转身走上楼梯，走向您开始时的房间，会发现门关着。那个女人，约瑟夫卡，不愿意让您进去，但她会提供一个<strong>约瑟夫卡的采血瓶</strong>作为代替。只要您目前还没有，她就会继续给您一个。现在您可以返回楼下诊所再次遇到狼人，击败他继续前进。

               
               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2">狼人/天灾兽 (Scourge Beast)</h4>
                 <p className="text-red-700 text-sm m-0">
                   在满血时通常很难对抗，但它们<strong>弱火</strong>。燃烧瓶对它们有奇效，但如果您想节省消耗品，那么您应该等待它们使用猛扑攻击，然后从侧面或背面攻击它们。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落：采血瓶 x3，基于位置的升级材料，兽化药丸
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-8">
                 下一个房间左侧角落的尸体上有 <strong>采血瓶 x2</strong>，在出大门之前一定要在院子里拿到 <strong>水银子弹 x10</strong>。


               {/* Central Yharnam */}
               </p>
               <h3 id="section-central-yharnam" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 亚南中心 (Central Yharnam)
               </h3>
               
               <div className="mb-6 rounded-lg overflow-hidden border border-[#333333] shadow-sm">
                 <img src={centralYharnamMap1} alt="Central Yharnam Map 1" className="w-full h-auto object-cover" />
               </div>
               
               <p className="text-[#a3a3a3] mb-6">
                 走正前方的楼梯，在一具尸体上拿到 <strong>采血瓶 x4</strong>，然后原路返回并左转，在第二辆马车后面遇到您的第一个<strong>雅南暴徒 (Huntsman)</strong>。技巧是引诱敌人攻击，然后全力以赴一次性将其击倒。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2">雅南暴徒 (Huntsman)</h4>
                 <p className="text-red-700 text-sm m-0">
                   在整个亚南中心有多种变体的暴徒，大多数只需要在您攻击之前引诱他们攻击即可。有几个需要注意的特殊变体：拿火把和斧头的变体通常在血量低时会用火把挥击；拿盾牌的变体需要您先击打他们以引诱他们反击；还有步枪手可以从远处射击您。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶 x1 (21%) | 水银子弹 x2 (10%) | 燃烧瓶 x1 (5%)
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 在第一个敌人附近有一个控制杆，您可以拉动它来放下附近的梯子，但先别爬上去，而是拿走旁边尸体上的 <strong>采血瓶 x2</strong>。杀死在路尽头装死的两个暴徒，然后打破角落里的箱子拿到 <strong>燃烧瓶 x6</strong>，接着爬上梯子到达<strong>亚南中心</strong>提灯。如果您与提灯旁边建筑的窗户交谈，一个名叫吉尔伯特 (Gilbert) 的人会自我介绍，不过他目前不会说太多。


               </p>
               <div className="bg-[#120a0a] border-l-4 border-[#8a0303] p-4 rounded-r-lg mb-6 shadow-sm">
                 <p className="text-sm text-[#a3a3a3] m-0">
                   💡 整个雅南有许多您可以交谈的 NPC，通常由一盏燃烧的红灯笼指示。有些人会打发您走，而另一些人可能会为您提供物品或有相关的迷你任务线。当您可以与他们交谈以推进他们的任务线时，我通常会提及，因此没有必要担心或经常回来检查。
  
                 </p>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 走唯一的楼梯，在一具尸体上拿到 <strong>鹅卵石 x8</strong>，然后继续前进，小心右侧一些箱子后面的暴徒。有两条路可供选择：通向主干道的楼梯和通向有另一个暴徒的篝火处的下落点。直接跳下去，解决掉敌人，然后在井后拿到 <strong>燃烧瓶 x4</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 当您走下楼梯时，您可能会想用 L1 变形您的武器，让您有更大的攻击范围和击中多个敌人的机会，然后杀死下面的两个暴徒。如果您向左走，您会遇到另一群暴徒，如果您现在不处理他们，他们会从后面偷袭您，那里还有一个楼梯可以直接通回您跳下来的地方。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 走到街道尽头拉动控制杆，打开返回亚南中心入口的捷径，然后检查附近的小巷。这条小巷里的<strong>刽子手 (Executioner)</strong> 在您目前的等级可以一击秒杀您，所以我建议避开他。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2">刽子手 (Executioner)</h4>
                 <p className="text-red-700 text-sm m-0">
                   很难对付，因为他对攻击很谨慎而且速度很快。最容易用枪反击的攻击是他向您冲锋的攻击，以及他跳向您的攻击。他也有几率掉落可以用来强化武器的<strong>血宝石</strong>，增加诸如“物理攻击力+%”的额外属性，但目前这是不必要的，因为在击败该区域的第二个 Boss 之前，您还没有能力镶嵌这些宝石。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶 x2、血宝石、刺鼻的血丸
                 </div>
               </div>
               <div className="mb-6 rounded-lg overflow-hidden border border-[#333333] shadow-sm">
                 <img src={centralYharnamMap2} alt="Central Yharnam Map 2" className="w-full h-auto object-cover" />
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 沿着街道往回走，找到隐藏在马车后面的新楼梯，确保杀死那个瘫倒的步枪手，这样他稍后就不会从后面袭击您。然后走下一段楼梯，杀死跳出来伏击您的暴徒，然后捡起 <strong>血石碎片</strong>。退下台阶，右转处理建筑台阶栏杆后面的另一次突袭，然后继续。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 当您接近下一个区域时，您会注意到与您在同一层的一个暴徒，以及街道中心火堆周围的许多暴徒。虽然看起来您可以轻松地干掉同一层的敌人，但走过台阶会激怒庭院里的一些暴徒。只要您知道会发生什么，这也没关系，所以向前跑一点以吸引他们的注意力，然后在楼梯处对付他们，他们被迫挤在一起。其余的敌人将开始沿着街道往回走，您可以跑回去走楼梯来切断他们的退路。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 返回上层并继续向路的尽头走，从尸体上拿到 <strong>水银子弹 x5</strong> 并杀死在门边闲逛的附近暴徒。这个区域有两个步枪手：一个在街道对面马车顶部，一个站在火堆旁。如果您从壁架上跳下，您可以左转迅速杀死第一个步枪手，然后后退或跑到左侧的楼梯，以避开另一个步枪手的射击。在清理了大部分敌人之后，您现在可以冲过街道，跑上街道对面的楼梯，并干掉另一个步枪手。在您继续前进之前，可能还有一些落单的敌人需要处理，以及一只<strong>狂犬 (Rabid Dog)</strong>。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2">狂犬 (Rabid Dog)</h4>
                 <p className="text-red-700 text-sm m-0">
                   速度快，倾向于跳进来攻击，然后跳回以避免任何形式的报复。对付它最简单的方法是快速侧步躲开它的攻击，然后进行反击。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：无
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 随着区域最终被清理干净，您现在可以拿到大双开门前面的 <strong>采血瓶 x2</strong>，然后上楼检查后角落里的 <strong>冷血露 (1)</strong>。穿过打开的门，在角落里的一些木桶后面拿到 <strong>血石碎片</strong>，然后在台阶旁显眼的位置拿到 <strong>采血瓶 x2</strong>。不要顺着台阶下到喷泉广场，而是击打楼梯正对面的棺材堆来揭示一条捷径。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这里有一些被关在笼子里的狂犬，可以白嫖击杀。右边的台阶下是另一只狂犬，以及更多被关在笼子里的狂犬。向桥的方向走，左转进入有一只狂犬的过道，然后拿到 <strong>冷血露 (3)</strong>。您现在可以过桥并杀死在一个孤单老妇人门前狂吠的狂犬，她正在寻找一个安全的地方。这里的楼梯通向下水道，但在进入这个危险区域之前，您需要先解锁一个捷径。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 原路返回过桥，走楼梯，然后右转上另一组楼梯，接着走左边的楼梯到一个死胡同，拿到 <strong>冷血露 (1)</strong>。退下楼梯并掉头，忽略右边我们稍后会用到的楼梯，进入一个黑暗的房子。确保杀死躲在暗处的暴徒，然后小心地向前移动并攻击那盏小灯，原来是一个<strong>轮椅暴徒 (Wheelchair Huntsman)</strong>。


               </p>
               <div className="mb-6 rounded-lg overflow-hidden border border-[#333333] shadow-sm">
                 <img src={centralYharnamMap3} alt="Central Yharnam Map 3" className="w-full h-auto object-cover" />
               </div>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2">轮椅暴徒 (Wheelchair Huntsman)</h4>
                 <p className="text-red-700 text-sm m-0">
                   这个敌人有几种变体，主要在他们的武器选择上。您遇到的第一个拿着手枪，但稍后您会遇到拿着加特林机枪和火焰喷射器的变体。最好的办法是绕到他们身后进行蓄力攻击，通常可以一击必杀。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：水银子弹 x4
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 清理完房间后，您现在可以拿到 <strong>刺鼻的血丸 x2</strong>，阅读角落里的便条，然后从建筑的另一侧出去。直走上楼梯遇到另一个暴徒，然后拿到 <strong>血石碎片</strong>，接着继续上台阶打开通回亚南中心提灯的门。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 穿过门并下楼梯，但这次走房子左边的楼梯井到达一个大庭院。这个区域有两个<strong>砖怪/巨汉 (Huntsman's Minion)</strong>，所以一次引诱一个过来会让您的生活轻松很多。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2">砖怪/巨汉 (Huntsman's Minion)</h4>
                 <p className="text-red-700 text-sm m-0">
                   要么引诱他们使用猛击攻击，让您通过按住 R2 进行蓄力攻击；要么在他们开始向您冲锋时向他们开枪打出硬直，然后进行内脏暴击 (枪反)。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶 x2-4、闪亮的硬币 x2-3
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 一旦庭院被清理干净，您可以径直走向一部电梯，虽然您现在无法使用它，但应该记住它的位置以备后用。您现在可以走附近的楼梯返回有笼中狂犬的区域，穿过桥，并进入建筑物。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 打破右墙上的木桶以揭示通往椽子 (rafters) 的隐藏路径，在那里您应该小心地砍下悬挂的尸体，然后拿到 <strong>冷血露 (1)</strong>。如果您检查其中一条过道正对面的墙壁，您应该能发现一些木桶后面有一个开放的拱门，在那里您会找到<strong>乌鸦艾琳 (Eileen the Crow)</strong>，通过与她多次交谈，可以获得 <strong>勇敢猎人的印记 x4</strong> 和“抖落披风”动作。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 您需要从楼梯旁角落的椽子上跳下来，确保攻击在通向上层的楼梯上走来走去的<strong>大型暴徒 (Large Huntsman)</strong>，然后当您继续走到大约一半时，贴着房间的这一侧检查柱子后面，寻找另一个大型暴徒。您现在可以杀死附近的步枪手并穿过到另一侧，在那里您将不得不与另一个拿着长矛的大型暴徒战斗。


               </p>
               <div className="mb-6 rounded-lg overflow-hidden border border-[#333333] shadow-sm">
                 <img src={centralYharnamMap4} alt="Central Yharnam Map 4" className="w-full h-auto object-cover" />
               </div>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2">大型暴徒 (Large Huntsman)</h4>
                 <p className="text-red-700 text-sm m-0">
                   有两种类型的大型暴徒：穿着斗篷的变体移动相当缓慢，以及拿着长矛的变体速度快且具有攻击性。<br/><br/>
                   穿着斗篷的变体可以通过在他们向您走来时站在攻击范围之外，并使用蓄力攻击击中他们来应对，这很可能会打断他们的攻击。然后您可以以一连串的攻击来快速杀死他们。长矛变体速度极快，可以执行长连击，相当容易杀死您。最好在它攻击时使用您的枪使其硬直，然后进行内脏暴击。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶 x2、血石碎片、双子血石碎片、油瓮
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 在柱子后面拾取附近的 <strong>冷血露(1)</strong>，然后从火枪手位置附近的拱门离开。向左转，小心地穿过桥梁解决两个火枪手（如果你不先解决他们，他们会从背后攻击你），然后对付冲过来的大型猎人。现在你可以拾取区域尽头的 <strong>冷血露(1)</strong>，然后继续过桥击败食腐乌鸦，穿过另一座桥，沿着另一侧前进，会遇到更多食腐乌鸦守卫着 <strong>油壶 x2</strong>。
               </p>

               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 食腐乌鸦 (Carrion Crow)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   很容易击败，只需快速攻击一两次然后后退即可。因为一旦你被它们的攻击击中，你将失去大量生命值，并且无法通过攻击（虚血回复）恢复。
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：鹅卵石 x1-2、兽化药丸、解毒药
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 往下看下方的横梁，发现一个带有 <strong>血石碎片</strong> 的横梁，然后跳下去，沿着下水道往回走，来到你之前推下尸体的房间的开口。经过所有的船到达房间的尽头，击败两只迷宫老鼠，然后从尸体上拾取 <strong>狂人的知识</strong>。现在你可以返回到之前的区域，并爬上右侧的梯子到达上一层。
               </p>

               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 迷宫老鼠 (Labyrinth Rat)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   就像《黑暗之魂》中的老鼠一样，这些敌人除非成群结队出现，否则几乎没有威胁。注意它们后退的时候，因为这通常表明它们要向你扑来；以及它们用后腿直立起来准备猛击的时候。
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：飞刀 x1-2
                 </div>
               </div>

               <div className="mb-6 rounded-lg overflow-hidden border border-[#333333] shadow-sm">
                 <img src={centralYharnamMap5} alt="Central Yharnam Map 5" className="w-full h-auto object-cover" />
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 既然你现在位于之前推下尸体的区域上方，你现在可以从任意一侧跳下，从尸体上获取物品（<strong>血石碎片</strong> + <strong>锯矛</strong>）。最后你可以返回下水道，继续前往一个有几具腐烂尸体蜷缩在物品周围的大房间，但暂时你需要走长梯子离开下水道。
               </p>

               <p className="text-[#a3a3a3] mb-6">
                 向右转，杀死守卫着附近尸体上 <strong>狂人的知识</strong> 的四只食腐乌鸦，然后过桥对付另一个砖怪/巨汉。这里的梯子通向一扇锁着的门，你可以用附近的杠杆打开它，从而创建一条通往喷泉广场的捷径，然后对着窗户说话，你会遇到一个小女孩。这个只被称为“维奥拉的女儿”的女孩，请求你找到她的母亲，并把 <strong>小音乐盒</strong> 交给了你。
               </p>

               <p className="text-[#a3a3a3] mb-6">
                 走右侧的楼梯，找到之前在火堆旁敲打大双开门的砖怪/巨汉，然后拾取你应该装备上的 <strong>火把</strong>，以及 <strong>燃烧瓶 x4</strong>。在广场的另一侧，杀死守卫 <strong>油壶 x2</strong> 的三只食腐乌鸦，然后回到楼梯上并向右转，在关着的门旁找到一个 <strong>冷血露(1)</strong>。
               </p>

               <p className="text-[#a3a3a3] mb-6">
                 下一个庭院里有三只狂犬和一些猎人，包括一个火枪手，如果你直接冲进去会很难对付。我建议走到台阶顶部，用开枪引过来一只狂犬，然后后退到一个安全的地方击败它，然后对其他敌人重复这个过程。清理完区域后，你可以拾取 <strong>采血瓶 x6</strong>，然后走楼梯到一座桥上，向左转检查一些雕像后面获取 <strong>血石碎片</strong>。
               </p>

               <p className="text-[#a3a3a3] mb-6">
                 向桥上的狼人（天灾兽）走去，但不要与它们交战，而是走左侧的楼梯进入一个可以俯瞰火堆的区域。在悬在边缘的尸体上拾取 <strong>鹅卵石 x10</strong>，在附近沙袋后面获取一个 <strong>血石碎片</strong>，以及从一些箱子后面的小巷里获取另一个 <strong>血石碎片</strong>，然后继续打破箱子跳入下水道。
               </p>

               <p className="text-[#a3a3a3] mb-6">
                 跳下壁架到达下水道，然后确保你降落在左侧，在那里你会遇到一个向你走来的大型猎人。解决他后，穿过桥对付另一个，然后穿过最后一座桥对付最后一个。当上层的三个敌人都死后，你现在可以往下看横梁，发现一个 <strong>浓稠冷血露(5)</strong>，然后小心地跳到下方的迷宫老鼠身上。
               </p>

               <div className="mb-6 rounded-lg overflow-hidden border border-[#333333] shadow-sm">
                 <img src={centralYharnamMap6} alt="Central Yharnam Map 6" className="w-full h-auto object-cover" />
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 你需要先解决掉身后的迷宫老鼠，因为你不想被它们偷袭，然后前往下水道的出口，向左看会发现一个大型猎人守卫着 <strong>猎人套装</strong>。
               </p>

               <p className="text-[#a3a3a3] mb-6">
                 装备上新的护甲套装，从下水道原路返回到主桥，快速跑过狼人，走左侧的楼梯进入黑暗房子的二楼。确保在拾取 <strong>冷血露(1)</strong> 之前杀死房子里的两个猎人，然后转过身，你会发现狼人卡在门里，这让你很容易用蓄力攻击杀死它们。现在你可以回到俯瞰火堆的区域跳下，沿着通往喷泉广场的路走，然后顺着维奥拉女儿附近的梯子下去，再次到达下水道。
               </p>

               <p className="text-[#a3a3a3] mb-6">
                 跳下来并小心地杀死身后的食腐乌鸦，然后解决掉所有像守卫某种宝藏一样守卫着 <strong>水银子弹 x10</strong> 的腐烂尸体，接着沿着下水道继续前进，遇到另外三具腐烂尸体。一定要检查有另一具腐烂尸体的小壁龛，以及一个 <strong>血石碎片</strong>，然后走隧道右侧的梯子到达另一座桥。
               </p>

               <div className="mb-6 rounded-lg overflow-hidden border border-[#333333] shadow-sm">
                 <img src={centralYharnamMap7} alt="Central Yharnam Map 7" className="w-full h-auto object-cover" />
               </div>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 腐烂尸体 (Rotted Corpse)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   虽然这些敌人经常看起来像是死了一样，但实际上它们只是在埋伏等你靠近。虽然移动缓慢，但它们仍然可以扑向你或向你呕吐，所以要小心。你还需要一把能向下挥砍的武器，因为像螺纹手杖的蓄力攻击会直接从它们头顶掠过。
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶、勇敢猎人的印记、镇静剂
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 忽略桥梁，进入附近的建筑启动电梯，这会通往黑暗房子附近的砖怪/巨汉和另一条通往提灯的捷径，然后顺着梯子返回。你旁边的隧道尽头有一只食人猪，但如果你在它咆哮时冲过去，你可以绕到它身后进行蓄力攻击使其硬直，然后接上一个内脏暴击。现在你可以拾取 <strong>锯肉刀猎人徽章</strong> 和 <strong>冷血露(2)</strong>，然后从另一端离开隧道，爬上另一个梯子。
               </p>

               <div className="mb-6 rounded-lg overflow-hidden border border-[#333333] shadow-sm">
                 <img src={centralYharnamMap8} alt="Central Yharnam Map 8" className="w-full h-auto object-cover" />
               </div>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 食人猪 (Maneater Boar)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   虽然它们可能看起来很可怕，但它们的臀部有一个非常大的弱点。最好的方法是从背后用完全蓄力的攻击使其硬直，然后掏它的后部（内脏暴击），这景象相当重口。你必须待在它们身后，因为它们的冲锋攻击很可能会秒杀你。
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶 x2-4
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 这通向你刚才启动电梯时所在的大桥的另一侧，你可以轻松解决掉持盾猎人和砖怪/巨汉。现在你可以走附近的楼梯，用枪击小心地引过来一个大型猎人以降低难度，然后拾取附近的 <strong>勇敢猎人的印记 x2</strong>。
               </p>

               <p className="text-[#a3a3a3] mb-6">
                 如果你继续上楼梯，你将到达第二个 Boss 的区域，但 <strong>不要进去</strong>。相反，使用一个 <strong>狂人的知识</strong>，然后穿过桥前往电梯并使用提灯。
               </p>

               <h3 id="section-tomb-of-oedon" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 欧顿之墓 (Tomb of Oedon)
               </h3>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：神父加斯科因</span>
                 <a href="#boss-father-gascoigne" onClick={(e) => scrollToSection(e, 'boss-father-gascoigne')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-npc-quests-1" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务，第一部分 (NPC Quests, Part 1)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 在从欧顿之墓的屋顶拿取<strong>红宝石胸针</strong>之前，您应该决定要如何处理维奥拉的女儿。现在您可以打开台阶顶部的门，沿着小路前往一个有便条和<strong>血宝石工坊工具</strong>的图书馆，然后继续前往大教堂区的礼拜堂。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 与欧顿礼拜堂的居民交谈，得知您可以将人们送到这个位置以求安全，然后点亮提灯返回1楼病房。


               </p>
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 1楼病房 (1st Floor Sickroom)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 上楼与约瑟夫卡交谈，得知您也可以将人们送到她那里，然后步行或通过猎人梦境前往亚南中心。


               </p>
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 亚南中心 (Central Yharnam)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 首先与提灯旁边建筑窗户里的吉尔伯特交谈以获得<strong>火焰喷射器</strong>，然后穿过捷径，穿过黑暗的房子到达有笼中狂犬的地方，并与桥对面房子里的孤单老妇人交谈。现在您可以选择将她送到约瑟夫卡的诊所或欧顿礼拜堂。如果您把她送到欧顿礼拜堂，您稍后可以去拜访她获取物品；如果您把她送到约瑟夫卡的诊所，她稍后将无法互动，但如果您返回1楼病房的门前，约瑟夫卡会给您奖励。


               </p>
               <div className="bg-[#120a0a] border-l-4 border-[#8a0303] p-4 rounded-r-lg mb-6 shadow-sm">
                 <p className="text-sm text-[#a3a3a3] m-0">
                   💡 在选择将 NPC 送到哪里时，您可以查看 NPC 任务部分或点击 NPC 的名字以获取有关他们任务线的更多信息。
  
                 </p>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 返回提灯并传送到欧顿之墓，然后重新进入亚南中心。从欧顿之墓走下楼梯，从推巨石的砖怪旁边的梯子下去，进入隧道，击败食人猪。现在跑过下水道，朝着腐烂尸体池走去，爬上两把梯子，最终到达维奥拉女儿所在的房子。您必须选择是否将属于她母亲的红宝石胸针交给她，因为这将影响这个女孩的命运。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 如果您选择将胸针给她，您应该立即刷新区域，然后走上面提到的路线去杀食人猪以获得<strong>红色信使缎带</strong>。如果您选择保留胸针，或者从未捡起它，您可以选择将她送到欧顿礼拜堂或约瑟夫卡的诊所。如果您选择欧顿礼拜堂，您也可以杀死食人猪获得红色信使缎带。如果您把她送到约瑟夫卡的诊所，您可以回到约瑟夫卡那里获得奖励，而且当您稍后进入约瑟夫卡的诊所时，一个敌人会掉落<strong>无形欧顿符文</strong>，但您之后将不会遇到她的姐姐。


               </p>
               <h3 id="section-cathedral-ward" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 大教堂区 (Cathedral Ward)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 返回大教堂区，如果您将孤单老妇人送到了欧顿礼拜堂，与欧顿礼拜堂的居民交谈可以获得“胜利”动作，然后从礼拜堂的后端出去。绕过马车时要小心，因为另一边有一个教会仆从非常喜欢从背后偷袭您。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 教会仆从 (Church Servant)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   攻击力强，这些敌人把他们的手杖当作刀刃来用，并且可以携带额外的武器。绕到他们身后，使用完全蓄力攻击使其硬直，或者如果您不介意消耗子弹，也可以用枪反击他们。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：请参阅图鉴
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 杀死台阶左侧的食腐乌鸦以及院子角落里的三只食腐乌鸦，拿到<strong>狂人的知识</strong>，然后走上大楼梯，遇到另一个正在走下来的教会仆从。到达楼梯顶部时向左转，锁定躲藏的教会仆从以防被他偷袭，然后在锁着的门旁拿到<strong>木盾</strong>。然后您可以返回礼拜堂，并从右侧的另一个拱门出去。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这个区域有两个教会仆从：一个正走出庭院，另一个从右边进来。跟着离开的那个悄悄杀死他，然后转身杀死进入下一个区域的另一个教会仆从。在教会仆从离开该区域的地方拿到<strong>采血瓶 x6</strong>，然后检查墓地的另一边，在树旁拿到<strong>猎人套装</strong>，但动作要快，以免被吸入一个会造成巨大伤害的虚空中。现在您可以走唯一的台阶上去拿到<strong>血石碎片 x2</strong>，就在有教会巨人的大门前。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 教会巨人 (Church Giant)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   这个敌人有三个版本：一个拿斧头，一个拿流星锤，还有一个带着火焰拳。拿斧头的版本倾向于使用重攻击，会有咕噜声提示，让您可以冲进去攻击。流星锤和火焰拳版本不会使用那么多重攻击，所以要保持近距离并绕着他们转，等待攻击的时机。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶 x3、血石碎片、双子血石碎片、蓝色灵药
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 楼梯顶部的大门目前是锁着的，所以走下台阶继续前往下一个区域。您需要小心地吸引走过来的砖怪（猎人的仆从）的注意力，以便在对付另一个砖怪之前先单独干掉他，偷偷溜上去并将其打出硬直进行内脏暴击非常有效，然后解决掉包围他的食腐乌鸦。在区域相对安全后，您现在可以拿到阳台马车后面的<strong>单筒望远镜</strong>，并继续沿着小巷前进。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 边走边检查道路的右侧以杀死一只食腐乌鸦，拿到<strong>血石碎片 x3</strong>，然后走向教会巨人，并尝试锁定他身后的<strong>游荡梦魇</strong>，这应该是您的首要目标。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 游荡梦魇 (Wandering Nightmare)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   类似于《黑暗之魂》系列中的结晶蜥蜴，这些敌人总是会掉落升级材料，但您必须快速杀死它们，因为如果您让它们跑掉，它们就会消失。不过不用担心，当您刷新区域时它们会回来。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：升级材料
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 一旦您从游荡梦魇那里获得了升级材料，您就可以击败保护着<strong>血石碎片 x5</strong>的教会巨人。如果您走附近的楼梯，您会发现一个装满花瓶的房间，里面什么都没有，但房间的另一边确实有一个壁龛，箱子里有一个<strong>锻炼血宝石 (1)</strong>。现在回到欧顿礼拜堂外面的庭院，走下台阶。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 有三个雅南暴徒和一只狂犬在区域内走动，您需要对付它们，把它们引开很容易就能解决，然后在教堂墓地右侧拿到<strong>冷血露 (2)</strong>和<strong>燃烧瓶 x4</strong>。暂时忽略教堂内部，走区域另一侧的楼梯上去，小心步枪手和两只猛冲下楼梯的狂犬，然后开门进入教堂。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入教堂的主厅，拉动控制杆移动一楼的坟墓，然后拿到悬挂在壁架上的尸体处的<strong>狂人的知识</strong>。原路返回并从教堂的另一侧出去，顺着台阶走，找到血族猎人阿尔弗雷德 (Vileblood Hunter Alfred)，他会向您提供服务，如果您同意，他会给您<strong>火符 x3</strong>和“祈祷”动作。您现在可以跳进教堂的主厅，杀死拿镰刀的暴徒，拿到<strong>狂人的知识</strong>，进入坟墓。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 在雕像旁拿到<strong>锻炼血宝石 (1)</strong>，然后进入一个黑暗的房间遇到一只天灾兽，不用担心角落里潜伏着其他东西，然后继续走下楼梯井。当您跳下去时，确保走上楼梯井拿到<strong>解毒药 x4</strong>，然后继续往下走点亮<strong>旧雅南</strong>提灯，在拱墙另一侧的一些花瓶后面拿到<strong>刺鼻的血丸 x3</strong>，并传送到猎人梦境。


               </p>
               <h4 className="text-xl mt-8 mb-4 font-bold text-[#c2c2c2]">
                 猎人梦境 (Hunter's Dream)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 您现在应该有至少 10,000 血之回响，或者接近这个数字，并且可以轻松刷出剩余的数量。前往人偶左侧的浴池信使处购买<strong>猎人首席徽章 (Hunter Chief Emblem)</strong>，然后返回大教堂区提灯。


               </p>
               <h3 id="section-cathedral-ward-cont" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 大教堂区 继续 (Cathedral Ward Cont.)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 还记得教会巨人旁边楼梯顶部那扇锁着的门吗？好吧，您现在可以回到那个位置并解锁大门，以到达大教堂区的其余部分。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 向左转，发现另一个教会仆从，这个带着火焰喷射器，快速从他右侧跑过去绕到他身后。在一棵树和一只食腐乌鸦后面的角落里有一个<strong>浓稠冷血 (4)</strong>，如果您往回走，您可以跑到走道的尽头拿到一个<strong>浓稠冷血 (5)</strong>。您现在可以继续沿着小巷走，在一具带有<strong>毒刀 x12</strong>的尸体附近找到另一个教会仆从，然后往下进入下一条小巷。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这里有两个 NPC，您需要记住以便稍后拜访，所以记住这个区域。当您沿着小巷往回走时，一个拿镰刀的暴徒会从右边跳出来，所以要小心，然后紧贴左墙找到一个壁龛，里面有另一个镰刀暴徒。此时一个步枪手和一个大型暴徒会朝您走来，所以利用棺材作为掩护来消灭他们，然后再次检查壁龛获得<strong>黑色教会套装</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 如果您再往前走，一个步枪手会开始向您射击，除了躲藏您无能为力，但在楼梯前的左侧有另一个<strong>毒刀 x18</strong>。为了到达步枪手那里，您需要冲进庭院并向左转到达楼梯，利用柱子挡住步枪手的射击，但要小心，因为有三个暴徒和一个大型暴徒正朝您走来。您现在可以冲进去杀死步枪手，然后在进入建筑之前捡起空地上的<strong>采血瓶 x2</strong>和一些棺材后面的<strong>浓稠冷血 (4)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 爬上梯子到达一个俯瞰主广场的塔楼，广场上有两个教会巨人，然后从塔楼跳到屋顶上拿到<strong>水银子弹 x10</strong>。您可以跳下去对一只狂犬造成一些轻松的伤害，然后在角落里拿到<strong>浓稠冷血 (5)</strong>。确保拉动大门左侧的控制杆，打开通往有教会巨人区域的捷径，然后检查台阶的另一侧以获得另一个<strong>浓稠冷血 (5)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 忽略主楼梯，走相反的路径遇到另外两个教会仆从，然后打开另一扇门，这扇门通向欧顿礼拜堂。虽然您可以看到一个物品放在该区域上方的阳台上，但您要到稍后才能拿到它，所以不要费心去想办法，而是走梯子。拿到<strong>麻痹雾 x6</strong>，然后跳到下面的屋顶并转身拿到<strong>黑色信使礼帽</strong>。您现在可以返回欧顿礼拜堂，并通过前往猎人梦境再返回来刷新该区域。


               </p>
               <h3 id="section-npc-quests-2" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务，第二部分 (NPC Quests, Part 2)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 从欧顿礼拜堂的后门出去，立即左转找到乌鸦艾琳 (Eileen the Crow)，她警告您不要去欧顿之墓，并给您“嘘！”动作。当然，这与您想做的完全相反。回到欧顿礼拜堂，步行（因为提灯目前无法使用）返回您在欧顿之墓与神父加斯科因战斗的地方。


               </p>
               <h4 id="section-tomb-of-oedon-cont" className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 欧顿之墓 (Tomb of Oedon)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 当您到达时，您会发现乌鸦艾琳正在与亨利克 (Henryk) 战斗，您可以选择帮助她或让她死。如果您让她死，您将获得她的乌鸦猎人徽章，她的任务线将结束，阻止您从猎人联盟获得猎人誓约；但如果您救了她，您将从她那里获得“赞赏”动作，并从亨利克的尸体上获得<strong>继承人符文</strong>。


               </p>
               <div className="bg-[#8a0303]/20 border-l-4 border-red-500 p-4 rounded-r-lg mb-6 shadow-sm">
                 <p className="text-sm text-red-700 m-0">
                   ⚠️ 有时这部分会出现 bug（可能是故意的），艾琳不会出现。如果她没有出现，您可以死一次来刷新区域，然后返回希望她能出现......强烈建议这样做，因为在没有她在场的情况下击败亨利克可能会导致她的任务线中断。
  
                 </p>
               </div>

               <h4 id="section-cathedral-ward-cont-2" className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 大教堂区 继续 (Cathedral Ward Cont.)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 从礼拜堂的后门出去，回到大门，这次走上台阶拿取<strong>浓稠冷血 (5)</strong>。当您走上台阶时，可能会有一个拿镰刀的教会仆从正在走远，或者两个教会仆从朝您走来，处理掉他们，然后进入楼梯区域拿取<strong>采血瓶 x6</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 另一个教会仆从会站在楼梯一侧，向下看楼梯，您可以慢慢走上去打断他使其硬直进行内脏暴击。下面的教会巨人刚好超出下落攻击的范围，所以跳到楼梯上，以正常方式对付他，然后走下楼梯，穿过大门，进入有两个教会巨人和<strong>狂人的知识 x5</strong>的广场。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 从区域右侧的拱门出去，杀死食腐乌鸦和吸脑怪 (Brainsucker)，然后检查角落获得<strong>双子血石碎片 x2</strong>。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 吸脑怪 (Brainsucker)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   虽然它们看起来可能没什么威胁，但它们的攻击实际上会造成很大的伤害，并且它可以抓住你并显露出它作为吸脑怪的真实本性，带走你一大管血和灵视。保持侵略性或潜行到他身后进行内脏暴击，您甚至不会看到他攻击。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：水银子弹 x3/x4，萨满骨刃
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 忽略那个带您去一个您已经去过区域的下落点，进入建筑获得<strong>闪亮的硬币 x12</strong>。您现在可以从后门出去拿取<strong>锻炼血宝石 (2)</strong>和<strong>解毒药</strong>，然后走下台阶到达一扇需要密码的锁着的门。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 原路返回大楼梯，上去遇到更多的教会仆从，这些带着十字架的相当危险，最好绕到他们身后。在大双开门的左边找到一具带有<strong>充血眼球</strong>的尸体，并在台阶下找到一些<strong>勇敢猎人的印记 x3</strong>，然后继续穿过隧道到达一个大空地。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这个区域有很多步枪手，他们的子弹伤害很高，所以您在四处走动时要小心。从紧贴左墙到第一个步枪手开始，迅速解决他，然后后退对付直接在他身后的猎犬 (Hunting Dog)。另一个步枪手会从远处向您射击，所以利用树木和岩石作为掩护，同时对付另一只猎犬，然后冲进去杀死步枪手和他旁边的另一只猎犬。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 猎犬 (Hunting Dog)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   与狂犬类似，这些敌人速度很快，但AI更具攻击性，它们不会像狂犬那样经常跳出您的攻击范围，这使它们成为容易攻击的目标。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血石碎片，双子血石碎片
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 继续走到空地的后面，来到一条小巷，找到另外两只猎犬和一个正在走远的步枪手，将猎犬引诱到更远的空地以避开步枪手的射击。一旦猎犬死了，您就可以冲下小路杀死步枪手并打开汉威克阴森小巷 (Hemwick Charnel Lane) 的大门，但现在不要进入这个区域。您现在可以回到空地，紧贴左墙找到一个<strong>双子血石碎片</strong>，然后在一些可以用来躲避其他步枪手的树旁杀死一个步枪手。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 您的下一个目标应该是街道中间的步枪手，但有两个步枪手正对着他，您需要冲过去杀死他，然后迅速回到树后掩护。附近面向小路的那两个步枪手在声音引起他们注意时，经常会转向您的方向，所以悄悄地从您当前的树移动到他们旁边的树，然后冲进去杀死他们。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 该区域现在基本安全了，所以从路上捡起<strong>鹅卵石 x4</strong>，然后走到区域角落的四个步枪手后面。您需要潜行并在最近的步枪手身上使用完全蓄力攻击来解决他，只剩下三个，然后移进去打几下，接着翻滚以避开射击。千万不要站着不动太久，否则您会被多发子弹击中而死，但一旦所有敌人死了，您终于可以拿到<strong>骨髓灰 x9</strong>和<strong>浓稠冷血 (4) x2</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到主楼梯顶部的大双开门，这次向右走，到一个通向水井的楼梯。确保您先走楼梯，因为从壁架上跳下来会让您陷入大麻烦，在楼梯底部您会发现一个挥舞着雷霆 (Tonitrus) 武器和木盾的猎人 NPC。幸运的是，这个敌人移动缓慢，如果您站在台阶上，当他开始走到射程内时使用完全蓄力攻击，他很容易就会死。您现在可以回到该区域的顶部，向下看下面的建筑，发现一个您可以跳下去拿的<strong>狂暴冷血 (7)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这里还有另一个猎人 NPC，这个拿着步枪矛和路德维希步枪，可以从屋顶跳下来从背后接近以进行内脏暴击。这是开始战斗的完美方式，因为这个猎人是一个喜欢疯狂开火的混蛋，正面交锋很难对付。对付这家伙的技巧是利用树木作为躲避他枪火的掩护，并迫使他靠近，然后您可以在那里攻击他。如果您运气好，他甚至可能会失去您的踪迹并重置，让您获得另一次内脏暴击的机会。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 走楼梯去找游荡梦魇，然后原路返回水井区域，前往悬崖，在那里您可以跳下去获得一个<strong>双子血石碎片</strong>，然后继续往下走杀死两个俯瞰刽子手区域的步枪手。跳到地面，对付第一个刽子手，然后小心地接近第二个，用枪声引诱它，这样他身后的两个游荡梦魇就不会察觉。第二个刽子手死后，您现在可以冲向游荡梦魇并杀死它们两个，但如果您只杀了一个也不要太担心。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 您现在可以进入附近的建筑，从尸体上拿到<strong>铅之灵药 x3</strong>，但千万不要进入主房间，否则您会死。大教堂区已经没有什么可做的了，所以是时候对付 Boss 了。回到楼梯顶部的双开门并打开它们，到达大教堂 (Grand Cathedral)。


               </p>
               <h3 id="section-grand-cathedral" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 大教堂 (Grand Cathedral)
               </h3>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：代理人阿梅利亚</span>
                 <a href="#boss-vicar-amelia" onClick={(e) => scrollToSection(e, 'boss-vicar-amelia')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-npc-quests-3" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务，第三部分 (NPC Quests, Part 3)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 击败三个 Boss 后，您现在可以返回大教堂区之前锁着的区域，进入小巷，在您获得黑色教会套装的地方，与街道尽头的门交谈，遇到交际花阿丽安娜 (Arianna, Woman of Pleasure)。您现在可以与马路对面的窗户交谈，找到一个心胸狭隘的男人 (Narrow Minded Man)，他会去您告诉他地点的相反方向，这意味着如果您想送他去欧顿礼拜堂，您应该选择约瑟夫卡的诊所。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 如果您将阿丽安娜送到欧顿礼拜堂，重新加载区域并返回欧顿礼拜堂与阿丽安娜交谈，获得“屈膝礼”动作和阿丽安娜的血。如果您将上述任何一个 NPC 送到约瑟夫卡那里，返回她那里获取您的奖励。


               </p>
               <h3 id="section-old-yharnam" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 旧雅南 (Old Yharnam)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 前往旧雅南提灯，与双开门互动两次打开它们，进入旧雅南，会收到一位猎人让您离开的留言。向右转走楼梯，锁定并杀死一个游荡梦魇，然后跳到一个木制平台上（如果您还没有的话）。如果您追着游荡梦魇跑过了平台，不要担心，因为您可以回来拿<strong>血石碎片</strong>。您现在可以从屋顶跳到较低的屋顶部分，进入一个有两只兽化病人（女）的庭院，并在小壁龛里找到<strong>猎人火把</strong>。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 兽化病人（女）(Beast Patient - Female)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   虽然这些敌人的攻击并不是特别危险，但每次挥砍都会根据您的抗性造成毒素累积。如果条满了，您就会感染慢毒，如果您不使用解毒药，它会吞噬您的血条或采血瓶。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶 x1-2，血宝石，解毒药 x2
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 回到您跳入该区域的地方，跳下破碎的栏杆到达下面的壁架，然后走到一条有锁着门的走道上。沿着走道走到通向钟楼的梯子，获得一个<strong>冷血露 (2)</strong>，然后跳下返回旧雅南入口。您现在可以在过桥对付兽化病人（男）之前检查庭院角落的<strong>采血瓶 x6</strong>。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 兽化病人（男）(Beast Patient - Male)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   体型小且速度快，这些敌人会冲向您或直接跳向您。虽然它们很可能会击中您，但它们个体相当弱，您可以通过在它们攻击时反击来轻松恢复您的生命值，但要注意成群出现的。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶，血宝石
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 继续过桥，处理掉从蒸汽后面跳出来的两只兽化病人（男），然后前往正前方的建筑，杀死另一个蜷缩在墙边的敌人。左转沿着建筑的墙壁走到另一端，对付一只兽化病人（女）和拿取<strong>冷血露 (2)</strong>，然后回到楼梯，检查它们左边的死胡同获得<strong>血石碎片 x2</strong>。回到楼梯，杀死来找您的兽化病人（男），然后走下台阶处理另外两只兽化病人（男）和两只兽化病人（女）。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 在台阶底部向右转，跳下到一个有<strong>血石碎片</strong>的壁架上，进入建筑，杀死一只正在走远的兽化病人（女），然后拿到<strong>解毒药 x3</strong>。下一个房间暴露在拿加特林机枪的猎人 NPC 的火力之下，所以冲进去吸引两只兽化病人（男）的注意力，并在前一个房间的安全地带对付它们。您现在可以返回空旷的房间拿到<strong>解毒药 x3</strong>，然后再穿过木制平台。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 向左走，杀死守卫着<strong>血石碎片 x2</strong>的一群四只食腐乌鸦，然后务必检查进入下一个建筑的入口右侧，寻找一具藏着<strong>火符 x2</strong>的尸体。您现在可以进入建筑，立即左转处理藏在壁龛里的两只兽化病人（男），然后向前移动，引出从右边门冲进来的兽化病人（女）。在继续前进之前，务必检查新打开的房间拿取<strong>血质宝石 (1)</strong>和主房间的解毒药。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入下一个区域时，您需要靠左走，以避开上方猎人 NPC 的射击。烟雾后面有许多兽化病人（男）和（女），所以您可能想跑进去，然后退回来将它们引诱到建筑内以求安全。在您冲过去拿物品之前，还有几个敌人需要杀死，所以处理正前方建筑楼梯左侧的兽化病人（男）和楼梯右侧的那个，然后冲过有物品的雕像，唤醒另一只兽化病人（男）和兽化病人（女）。所有敌人终于死了，您现在可以将猎人 NPC 的注意力吸引到一个位置，然后冲过去捡起<strong>冷血露 (3)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 您现在有几个选择：走楼梯杀死拿加特林机枪的猎人 NPC，进入猎人 NPC 后面的教堂，或者杀死桥右侧开阔区域的另一个猎人 NPC。虽然杀死拿加特林机枪的猎人 NPC 以减轻您通过该区域其余部分的旅程可能很诱人，但他实际上是一个重要的 NPC，您稍后可以与他成为朋友，所以在您决定是否要杀死他之前，请参阅关于退役猎人机枪哥 (Retired Hunter Djura) 的部分。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 我建议您先穿过教堂，因为这会引向一条捷径，如果您死了可以使用，所以走下木桥并向左转。这里的梯子通向机枪哥和一些物品，但在您考虑上去之前，您需要先清理教堂。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 走附近的斜坡进入建筑，抬头看一只兽化病人（女），她会掉下来试图伏击您，然后直接跑到大厅尽头的两只兽化病人（女）那里杀死它们，然后再转身对付掉下来的那只。附近的门通向一个俯瞰教堂的木制平台，但在去那里之前，您需要走正前方的楼梯下去，拿到<strong>解毒药 x3</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 走下楼梯向右转到一个阳台上，那里还有一只兽化病人（女）需要杀死，但在拿到另一端的物品之前，您需要回到楼梯井。准备好迎接由于前一个敌人的尖叫而冲上来的一阵兽化病人（男）和（女），当流量减慢，或者您认为您已经干掉了它们所有时，返回阳台捡起<strong>血石碎片 x2</strong>。您现在可以走下楼梯消灭任何残兵败将，然后捡起附近壁龛里的<strong>狂人的知识</strong>和另一端祭坛上的<strong>血族之血 (1) x2</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 从教堂正门出去向左转，杀死一群六只食腐乌鸦，从尸体上拿到<strong>血石碎片 x2</strong>，穿过到教堂入口的另一侧。一定要忽略通向更深区域的拱门，而是径直跑去拿<strong>采血瓶 x6</strong>，并使用附近的梯子打开通回机枪哥塔楼的捷径。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 现在来探索您为了清理教堂而忽略的两个区域。首先走通向正前方机枪哥的梯子，但不要爬第二把梯子，而是向右跳下进入教堂的椽子。在跳到下面的木制平台拿到<strong>燃烧瓶 x4</strong>之前，小心地穿过横梁拿到狂人的知识。您现在可以向右看，发现另一个木制平台上的物品，然后后退以对齐跳跃，获得<strong>染血信使头带</strong>。


               </p>
               <div className="bg-[#120a0a] border-l-4 border-[#8a0303] p-4 rounded-r-lg mb-6 shadow-sm">
                 <p className="text-sm text-[#a3a3a3] m-0">
                   💡 不要担心如果您跳空了，开发者在这个平台正下方放置了一个平台来接住您，您只需绕回去再试一次即可。
  
                 </p>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 您现在可以跳到教堂地板上，通过捷径绕回上去，然后走右边的路进入教堂。这次您可以穿过右边的门，跳下木制平台找到一个<strong>冷血露 (2)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 最后一次通过捷径绕回，这次爬上去左转接近机枪哥塔楼下方拿着锯矛和猎人手枪的猎人 NPC。走通向开阔区域的台阶，停在楼梯顶部，那里安全不受机枪哥射击，并且会引起猎人的注意。等他跑向您，并在他进入射程时释放完全蓄力攻击，他经常会在没有打中您的情况下后退。当他生命值低于 50% 时，他有时会后退并使用采血瓶，所以用您的枪让他忙碌，这样他就无法恢复，他很快就会死。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 前往左后角对付三只食腐乌鸦，同时利用雕像躲避机枪哥的射击，然后翻滚到后角的壁架上，您可以小心地跳到下面的壁架和带小阳台的黑暗建筑中。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 拿出火把照亮区域，然后前往左后角，当您接近兽化病人（女）时要小心，因为该区域会唤醒更多的怪物，并且一些普通的兽化病人（男）会跑下来伏击您。退回到阳台以获得良好的房间视野并杀死接近的敌人，当安全时进入从尸体上拿取<strong>采血瓶 x6</strong>，从箱子里拿取<strong>锻炼血宝石 (1)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 您现在可以走楼梯上到下一层，然后击打两个书架旁边的棺材找到<strong>步枪矛</strong>，然后继续到顶层获取<strong>焦黑猎人套装</strong>。跳出窗户拿取<strong>冷血露 (2)</strong>，然后确保在杀死兽化病人（男）之前冲到台阶上以躲避机枪哥。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 走下捷径，这次走拱形隧道进入一个有很多烟雾的区域。这里隐藏着一群兽化病人（男），后角还有一个游荡梦魇，您需要要么冲到后面冒着死亡的风险去拿游荡梦魇，要么谨慎行事，稍后再回来杀它。清理完该区域后，前往该区域后面的楼梯，向左拐在长草丛中找到一些<strong>刺鼻的血丸 x2</strong>。有两只天灾兽需要您解决，如果可能的话单独解决，然后进入右边的小巷，在尽头的大双开门处获得<strong>血石碎片 x2</strong>。


               </p>
               <h3 id="section-church-of-the-good-chalice" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 良杯教会 (Church of the Good Chalice)
               </h3>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：渴血神兽</span>
                 <a href="#boss-blood-starved-beast" onClick={(e) => scrollToSection(e, 'boss-blood-starved-beast')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-hemwick-charnel-lane" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 汉威克阴森小巷 (Hemwick Charnel Lane)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 穿过遍布步枪手的田野，从大教堂区前往汉威克阴森小巷，现在这里还有三个狂人伴随着粉色光环从地下升起。点亮汉威克阴森小巷提灯，然后走下楼梯进入城镇，遇到一些汉威克墓地女巫。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 狂人 (Mad One)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   他们单手装备镰刀，攻击猛烈且狂野，但在连击后会露出破绽。当敌人将双手举过头顶时，向侧后方闪避，或者开枪反击，但不要试图与他们正面交锋。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血宝石
                 </div>
               </div>

               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 汉威克墓地女巫 (Hemwick Grave Woman)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   就像亚南中心的猎人暴徒一样，她们有多个版本，大多数只需要在攻击前引诱她们出招即可。有几个显著的区别需要注意：手持铁杆和木槌的版本通常会向您猛扑或推您，通常是在您靠近边缘时希望能把您推下去，而投掷燃烧瓶的版本会从远处瞄准您。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：请参阅图鉴
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 在断头台下尸体上拾取<strong>充血的眼球</strong>，在区域中心墓碑神龛的背面拾取<strong>双子血石碎片 x2</strong>，然后走区域后方的楼梯，在稍后会解锁的捷径附近拾取<strong>狂人的知识</strong>。现在您可以原路返回广场，走另一侧的楼梯，在到达开阔的田野之前遇到另一个汉威克墓地女巫。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 另一个狂人会在开阔田野中心的树底生成，但不要进入田野，因为那里还有更多敌人等着伏击您，退回到楼梯处单独对付它。一只狂犬通常会跑向您，所以击败它，然后小心地重新进入田野，解决从左侧楼梯下来的铁杆汉威克墓地女巫，接着是楼梯顶部拿木槌的女巫，以及向您投掷炸弹的燃烧瓶女巫。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 确保拿到田野里树旁的<strong>浓稠冷血 (4)</strong>，然后继续上楼梯，找到一个猎人的仆从（砖哥），您应该能轻松对付他，然后转身走到楼梯左侧找到<strong>双子血石碎片 x2</strong>。您现在可以跑向从这边打不开的大门，然后转身杀死投掷燃烧瓶的汉威克墓地女巫。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 走楼梯并立即左转，杀死躲在壁龛里拿镰刀的汉威克墓地女巫，然后进入下方的墓地。这个区域有一些食腐乌鸦和另一个狂人需要杀死，然后确保拿到<strong>鹅卵石 x4</strong>，接着激活附近的电梯，该电梯通回关卡开头的城镇广场。您现在可以继续向右走，冲过拐角以避开试图将您推下悬崖的汉威克墓地女巫，并在墓碑后面捡起一些<strong>骨髓灰 x8</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 穿过木桥快速对付猎人的仆从，然后应对扔向您脸上的燃烧瓶。进入谷仓，检查第二个隔间，杀死一个装死的汉威克墓地女巫，然后小心从黑暗中跳出来的狂犬。您现在可以继续走到梯子并爬上去，在梯子顶部立即转身下楼梯，穿过下方干草上方的一些横梁。当您进入下一个房间时，确保冲向右侧杀死一个轮椅猎人，然后检查房间左侧获得<strong>精通血宝石 (1)</strong>，并在阳台上获得<strong>狂人的知识</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 原路返回梯子并继续前进，对付另一个狂人，然后在退出到谷仓屋顶之前捡起<strong>充血的眼球</strong>。向左转，小心试图将您推下屋顶的木槌汉威克墓地女巫，然后沿着屋顶继续走到俯瞰破损道路的小路，杀死<strong>冷血露 (3)</strong>旁边的另一个汉威克墓地女巫。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 沿着上层区域前进，杀死猎人的仆从、狂犬和铁杆汉威克墓地女巫，同时避开从道路更远处扔来的燃烧瓶。在进入建筑物之前，确保转身从汉威克墓地女巫躲藏的角落拿到<strong>双子血石碎片 x2</strong>，然后继续前进，在下楼梯之前解决右侧突然出现的敌人。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这个区域有两个刽子手和多只狂犬，所以您必须缓慢推进。首先对付最近的刽子手，您实际上可以将他引到塔门处，然后向左转获得<strong>浓稠冷血 (4)</strong>。打开附近的大门创建另一条捷径，这条捷径通向电梯前的区域，然后紧贴左墙在安全位置与第二个刽子手交战。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 两个刽子手都解决后，您可以继续沿着道路前进，发现四只狂犬，两只在踱步，两只静止不动。瞄准那两只静止不动的狂犬以快速将数量减半，然后杀死另外两只，这通常会引来第五只猎犬。拿到狂犬保护的<strong>骨髓灰 x8</strong>，继续沿着道路前进，遇到另一只狂犬和燃烧瓶汉威克墓地女巫。您现在可以检查道路左侧的墓碑获得<strong>浓稠冷血 (4)</strong>，并在俯瞰水面的破损道路尽头拿到<strong>湖泊符文</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 原路返回分岔口，这次沿着道路向上走，直到您发现三个汉威克墓地女巫朝您的方向走来，让她们在道路上走得更远一些再与她们交战。您需要快速消灭这些敌人，因为躲在附近建筑物后面的刽子手会跑来帮忙，如果敌人还活着，这会造成很多麻烦。清理完毕后，检查道路弯曲处的破损栅栏，找到一个装有<strong>锻炼血宝石 (1)</strong>的箱子。您现在可以进入建筑物，打破木桶拿到<strong>狂人的知识</strong>，并杀死掉落的游荡梦魇。


               </p>
               <h3 id="section-forbidden-woods" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 禁忌森林 (Forbidden Woods)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 随着代理人阿梅利亚（Vicar Amelia）的死亡，您现在可以返回大教堂区（Cathedral Ward）那扇锁着的门，位于有两个教堂巨人（Church Giants）的墓地区域左侧。经过血族猎人阿尔弗雷德（Vileblood Hunter Alfred）来到您现在已经知道密码的门前。与门内刚进门处的尸体交谈，获得<strong>狂人的知识 (Madman's Knowledge)</strong>，然后顺着螺旋楼梯往下走，即可到达禁忌森林。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 走下楼梯，向右转在树旁拿到一个<strong>浓稠冷血 (6) (Thick Coldblood)</strong>，然后沿着小路走到一个分叉口，径直穿过去，在高草丛中拿到<strong>双子血石碎片 (Twin Blood Stone Shards)</strong>。返回分叉口对付大型狂犬病村民（Large Huntsman）和扔油罐的村民（Huntsman），捡起<strong>鹅卵石 x2 (Pebble)</strong>，然后走上面的路。这条路是个死胡同，但通向一个守卫着<strong>熟练血宝石 (2) (Adept Blood Gemstone)</strong>和<strong>狂人的知识</strong>的刽子手（Executioner），然后返回之前的分叉口。通向提灯（lamp）的下坡路没什么特别的，点亮提灯，然后杀死附近的两个食腐乌鸦（Carrion Crows），在房子侧面检查拿到<strong>解毒药 x3 (Antidote)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 小心地过桥并杀死两个村民，但要注意地上的陷阱触发器，它会让一根带刺的圆木荡到您脸上。然后检查左侧的壁架，拿到另一个<strong>双子血石碎片</strong>。原路返回并继续沿着小路前进，杀死右侧的大型村民，然后前往俯瞰下方村民和狂犬（Rabid Dogs）的壁架。最好用鹅卵石或枪声将狂犬引上来，在没有其他敌人的情况下解决它们。现在您可以跳下壁架解决远程敌人，或者走下去对付近战敌人。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 一旦该区域清理干净，务必检查小路以获得<strong>浓稠冷血 (6)</strong>、<strong>采血瓶 x2 (Blood Vial)</strong>、<strong>双子血石碎片</strong>和<strong>水银子弹 x10 (Quicksilver Bullets)</strong>。然后紧贴右侧小路，找到一个游荡梦魇（Wandering Nightmare）和三只食腐乌鸦。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到分叉口向右转，经过一匹燃烧的马跳入村庄。避开村庄中间的木坑，因为这会让您掉进陷阱，然后杀死三个村民和一个大型村民。转过身去杀死房子里的另外两个村民，其中一个是步枪手（Rifleman），然后拿到<strong>刺鼻的血鸡尾酒 x4 (Pungent Blood Cocktail)</strong>，接着跳入村庄中间的坑中。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这里有三只食腐乌鸦的伏击，保护着一具带有<strong>解毒药 x4</strong>的尸体。保持移动以避免死亡，然后爬上梯子。现在您可以向左转，进入远角的一栋建筑，在未来的捷径附近拿到<strong>刺鼻的血鸡尾酒 x3</strong>。然后穿过该区域，来到燃烧的马附近的一条小巷，杀死一个步枪手并在第二栋房子里拿到<strong>兽血丸 x6 (Beast Blood Pellet)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 离开城镇时朝大门方向走，而不是穿过水域，在两个村民附近拿到<strong>采血瓶 x5</strong>。然后穿过大门，注意地上的陷阱。径直上山，在一些墓碑旁拿到一个<strong>浓稠冷血 (6)</strong>，然后走您身后的小路，在一个小屋附近遇到一个大型村民，那里还有额外的<strong>兽血丸 x3</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 原路返回村庄大门并向左转，走上一条新路，在壁架上捡起<strong>水银子弹 x6</strong>。然后与附近建筑的门交谈，从蜘蛛帕奇（Patches the Spider）那里获得<strong>扁桃体石 (Tonsil Stone)</strong>。如果您朝正前方的大门走，村民会关上门并释放附近笼子里的狂犬。因此，忽略大门并向左转，在狂犬还在笼子里时杀死它们。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 从笼子处向右转到达建筑后方，杀死食腐乌鸦。然后爬梯子到屋顶，对付另外三只食腐乌鸦并拿到<strong>白色教会套装 (White Church Set)</strong>。您应该装备这个以获得毒抗性（Poison Resistance），然后爬下梯子，走到您刚才经过的空笼子后面，找到一条隐藏的小路。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入洞穴时，从左侧的壁架跳下并在下面寻找<strong>解毒药 x2</strong>，然后继续穿过到达一个大洞穴。这里的水有毒，并且有三个教堂巨人和许多寄生幼虫（Parasite Larva），所以要小心行走并确保装备好您的解毒药。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 寄生幼虫 (Parasite Larva)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   通常成群出现且很难被击中。因为它们离地面太近，您的选择是在它们跳起来攻击您时进行打击（通常会受到伤害），或者使用攻击位置较低的武器，如杖鞭（Threaded Cane）。战斗时确保不要靠得太近，如果它们在您正下方，锁定功能会变得不稳定。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落：无
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 将第一个教堂巨人引到洞口（他无法进入），击败他，然后向右转在角落里拿取<strong>狂暴冷血 (7) (Frenzied Coldblood)</strong>。进入水中紧贴右墙，处理掉三只寄生幼虫，到达下一个岩层拿到另一个<strong>狂暴冷血 (7)</strong>，然后干掉附近的其他教堂巨人。现在您可以进入附近的隧道，在那里您会注意到一个向上的梯子。这通向约瑟夫卡的诊所（Iosefka's Clinic）后方，我将在稍后介绍。但如果您想现在探索该区域，您可以解锁一条返回亚南中心（Central Yharnam）提灯的捷径。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 从隧道的另一侧出去，杀死正前方的两只寄生幼虫，然后检查两个岩层以获取<strong>滋养血宝石 (2) (Nourishing Blood Gemstone)</strong>和<strong>肮脏血宝石 (3) (Dirty Blood Gemstone)</strong>。但要注意，在教堂巨人面前攻击任何东西都会使他变得具有攻击性。您现在可以检查教堂巨人面对的充满敌人的隧道，拿到<strong>秘法血宝石 (2) (Arcane Blood Gemstone)</strong>，然后原路返回一直到笼子那里。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 返回建筑后方您捡起白色教会套装的区域，继续向前，两只狂犬会从下一个区域跳出来。如果您想轻松解决它们，可以爬回梯子，然后跳到狂犬身上造成可观的伤害。继续走到下一栋建筑后面，与守卫着<strong>采血瓶 x6</strong>的绑架者（Kidnapper / 布袋哥）战斗，然后进入建筑拿到<strong>野兽咆哮 (Beast Roar)</strong>。现在您可以前往大门杀死守门人，进入建筑拿取<strong>蓝色灵药 x4 (Blue Elixir)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 稍微原路返回到之前的区域，走到村庄和水域之间的屋顶上，沿途杀死多个村民。在最后的屋顶跳下到下方的阳台，拿到<strong>燃烧瓶 x11 (Molotov Cocktail)</strong>。现在您可以跳入在主村庄后面看到的水中，继续前进并杀死腐烂尸体（Rotted Corpses），在拿取<strong>双子血石碎片 x2</strong>之前，杀死壁龛里的大型村民。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 转身进入您身后的隧道拿到<strong>双子血石碎片 x2</strong>，然后继续前进以解锁村庄中的捷径。您现在可以穿过隧道原路返回，然后右转上一座山，那里还有两个村民，确保去建筑顶部杀死步枪手。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 当您进入下一个村庄时，避开区域尽头的加农炮（Cannon），进入右侧的第一栋建筑。拿到<strong>采血瓶 x6</strong>，然后滚过木桶进入下一栋房子。穿过街道到另一栋有两名村民的建筑，然后冲向左侧的最后一栋建筑，对付守卫着<strong>兽血丸 x4</strong>的大型村民。您现在可以杀死加农炮上的敌人，并检查风车右侧拿到<strong>双子血石碎片</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入风车，留在同一层，从对面的门出去跳到外面。沿着风车外侧的小路走向一个大型村民，然后爬上梯子穿过齿轮，拿到<strong>毒刀 x8 (Poison Knife)</strong>。现在您可以走上附近的台阶，拿到挂在风车壁架上的另外<strong>毒刀 x3</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 附近在尸体堆里休息的变形男（Transformed Man / 乞丐），实际上是一个危险的 NPC。如果您将他送到亚丹小教堂（Oedon Chapel），他会杀死那里的任何 NPC。好消息是您可以选择将他送到某个位置以获得<strong>刺鼻的血鸡尾酒 x2</strong>，然后攻击他以阻止他离开。坏消息是，这个人实际上是一只伪装的可憎野兽（Abhorrent Beast），受到足够攻击后会变身，变得极其危险。幸运的是，他无法进入风车，会被卡在门口。您可以在那里轻松地扔那些毒刀，然后等待他死亡。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 返回里面并从齿轮上跳下拿到<strong>加农炮 (Cannon)</strong>，然后小心地跳到风车的主体部分。前往底层，偷偷走到站在物品旁的敌人身后，使用蓄力/内脏暴击，不给他时间暴露出他作为蛇寄生者（Snake Parasite / 蛇头人）的真实面目。您现在可以拿到他身后的<strong>狂人的知识</strong>，并通过唯一可用的路径离开，因为另一条路径是您稍后会解锁的电梯捷径。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 蛇寄生者 (Snake Parasite)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   通常伪装成普通的村民，这些敌人一旦受到任何伤害，头上就会爆出一堆蛇。绕到这些敌人身后很容易，但同样容易的是用您的枪械反击它们，以进行快速简单的内脏暴击。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落：采血瓶 x2-3，血宝石
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 过桥，对付另一个蛇寄生者，然后在乘电梯之前向右上山拿取<strong>双子血石碎片</strong>。电梯通向<strong>解毒药 x4</strong>和一扇就在该区域起点提灯旁边的大门。


               </p>
               <div className="bg-[#120a0a] border-l-4 border-[#8a0303] p-4 rounded-r-lg mb-6 shadow-sm">
                 <p className="text-sm text-[#a3a3a3] m-0">
                   💡 最新补丁在禁忌森林中添加了一个新 NPC。请参阅“联盟长大师沃尔特 (Valtr, Master of the League)”获取更多信息。
  
                 </p>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 乘电梯原路返回并沿着小路走，从左侧道路跳下，在一些墓碑旁找到一个<strong>狂暴冷血 (7)</strong>。然后向右稍微往回走，跳到一个较低的壁架上。跳跃或翻滚穿过缝隙，到达一个有刽子手和<strong>双子血石碎片 x2</strong>的新区域，然后返回缝隙跳入森林。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 森林很大，很容易迷路。但如果您注意到主路穿过中心，您可以把它作为一个导航点。杀死两个蛇球（Snake Balls），在附近拿到<strong>闪亮硬币 x6 (Shining Coins)</strong>。然后绕过大墓碑向左转，沿着左侧壁架杀死一个<strong>双子血石碎片</strong>附近的两组蛇球。紧贴悬崖边缘继续向左绕过另一个大墓碑，杀死另一个<strong>双子血石碎片</strong>附近的蛇球。然后继续沿着悬崖走，在墓碑背面拿到<strong>狂人的知识</strong>。您现在可以原路返回到道路的起点。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这次沿着主路走，往右看，有一堆火，旁边站着一个蛇寄生者，悄悄接近进行内脏暴击。干掉火堆周围的四个蛇球，然后在空地上拿到<strong>双子血石碎片</strong>，在大树后面拿到<strong>双子血石碎片 x2</strong>。转身沿着左墙走，杀死一些额外的蛇球并获得另一个<strong>狂人的知识</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 返回火堆，走到火堆后面杀死两个蛇球。然后穿过大墓碑和树之间，在那里您可以偷偷走到右侧山丘上另一个蛇寄生者身后。在拿到<strong>双子血石碎片 x2</strong>之前，确保杀死两个蛇球。然后紧贴右墙经过另一座有大蛇球（Large Snake Ball）的山丘。接着您可以在大树后面拿到一个<strong>浓稠冷血 (6)</strong>，在大墓碑后面拿到<strong>清澈的深海符文 (Clear Deep Sea Rune)</strong>。走上对面有两只蛇球的山丘，拿到挂在边缘的<strong>双子血石碎片</strong>。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 大蛇球 (Large Snake Ball)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   这些大堆的蛇有远程毒攻击，会咬正前方的任何东西，但它的背面完全没有防备。您要尽快绕到它们身后以避免攻击，但只需确保您不会被困在它们和墙壁之间。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落：血石碎片 x2，双子血石碎片，血宝石
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 走下山丘，不要跳下去，紧贴右侧慢慢走，以避免吸引右侧小洞穴中三个蛇寄生者的仇恨。您需要将它们一次引出一个直到全部死亡，然后您可以拿走它们守卫的<strong>血石块 (Blood Stone Chunk)</strong>，以及两个大蛇球所在峡谷上方的<strong>闪亮硬币 x5</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 忽略那两个大蛇球向左转，发现另一个大蛇球。您可以偷偷靠近他并集中火力攻击，然后再对付较小的蛇球。现在您可以返回峡谷，扔一些油罐/燃烧瓶，或者对后面的大蛇球进行下落攻击以快速解决他，从而为您留出绕过另一个大蛇球的空间。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 捡起<strong>深海符文 (Deep Sea Rune)</strong>、<strong>双子血石碎片</strong>和<strong>双子血石碎片 x3</strong>。然后向右退出，沿着右侧壁架绕过一棵大树，找到另一个带有许多较小蛇球的大蛇球。首先集中精力干掉小蛇球，同时避开远程毒攻击，然后杀死大蛇球，在树后面获得一个<strong>狂暴冷血 (8)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 再次沿着右侧壁架走，忽略您稍后会探索的下落点，上山到一个有<strong>狂暴冷血 (7)</strong>的死胡同。步行下山并向右转再次找到道路。该道路在中心一座山丘处分为左右两边，但您不应该沿着路走，而应该穿过道路向左绕过山丘。根据时间的不同，您可能会遇到另一个蛇寄生者（如果有机会他会召唤一些蛇球），然后慢慢走上山丘，偷偷绕到食人猪（Maneater Boar）身后。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 向左转到一棵倒下的树，在那里您可以看到一个够不着的壁架上的物品，然后在左边拿到<strong>守墓人套装 (Graveguard Set)</strong>。在护甲套装处跳下返回道路并向左转，沿着它走到燃烧的马那里。如果您在这里向右转，您会注意到栅栏上有一个缺口，对面的壁架看起来很近。所以助跑并跳过去，找到您刚才穿过倒下的树时看到的<strong>守墓人面具 (Graveguard Mask)</strong>。现在您可以回到缺口往回跳（您总是会跳空），降落在两个小型天人使者（Small Celestial Emissary / 外星人）正上方的壁架上。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 小型天人使者 (Small Celestial Emissary)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   这些敌人的标准版本只会冲向您并尝试进行近战攻击，而覆盖着卷须的版本极其危险，会施放致命的魔法。最好从背后攻击魔法使用者，或者使用燃烧瓶一击杀死它们。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落：蓝色灵药，血宝石
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 杀死这两个敌人，在死胡同检查拿到<strong>狂人的知识</strong>，然后继续沿着小路走拿到另一个<strong>狂人的知识</strong>，顺便对付另一个小型天人使者。当您走向壁龛里的两个卷须敌人时，另一个小型天人使者会跑过来，杀死它，然后冲到施法者身后迅速干掉它们。现在您可以拿到<strong>逆时针变形符文 (Anti-Clockwise Metamorphosis Rune)</strong>。沿着小路走到最后一个小型天人使者处，并在树后检查获得另一个<strong>狂人的知识</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 沿着小路走到一个有萤火虫和三条路的小水池，右边两条，正前方一条。走第一条右边的路上去拿到<strong>双子血石碎片</strong>，然后继续走到另一个分叉口。这实际上是之前有食人猪的山丘。既然您已经探索过右边的路，那就走左边的路，寻找栅栏上的缺口，找到保护着<strong>狂暴冷血 (7)</strong>的两个蛇球。这里没有其他东西了，所以原路返回道路，沿着小路走向另一个通向左边或右边的水池。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 右边的路通向 Boss，所以向左走返回萤火虫池，走之前是直行的右边那条路。这条路通向一个躲在树后的蛇寄生者，以及返回风车的捷径，这意味着您可以穿过风车上山，乘坐另一部电梯返回关卡开头的提灯。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 再次原路返回到萤火虫池并向左走。慢慢跟在食人猪后面直到它停下，然后进行内脏暴击。转身走向水中的树根下，杀死四具腐烂尸体，捡起<strong>消散之湖符文 (Dissipating Lake Rune)</strong>。现在您可以继续前往下一个区域，杀死另外两具腐烂尸体，等待另一只食人猪走过去并停下，然后偷偷绕到它身后。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 杀死您身后最后一具腐烂尸体（它在您偷偷跟在食人猪后面时试图偷袭您），然后拿到<strong>锐利血宝石 (3) (Sharp Blood Gemstone)</strong>。现在您可以经过火堆，沿着小路走到另一个分叉口。走右边的路到达一扇门，它通向我之前告诉您不要跳下的区域。在里面，杀死蛇寄生者拿到<strong>顺时针变形符文 (Clockwise Metamorphosis Rune)</strong>，然后原路返回分叉口，继续往下走前往 Boss。


               </p>
               <h3 id="section-forbidden-grave" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 禁忌之墓 (Forbidden Grave)
               </h3>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：雅南暗影</span>
                 <a href="#boss-shadow-of-yharnam" onClick={(e) => scrollToSection(e, 'boss-shadow-of-yharnam')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-byrgenwerth" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 拜尔金沃斯 (Byrgenwerth)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 离开禁忌之墓进入拜尔金沃斯，沿着小路走，会遭到从右侧突然跳出的长眼异形 (Garden of Eyes) 的突袭。你现在可以继续前进，检查小路左侧的一尊雕像后面，找到一个<strong>狂人的知识</strong> (Madman's Knowledge)，然后点亮提灯。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 长眼异形 (Garden of Eyes)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   会向你冲来并跳到你头上，增加大量的狂暴 (Frenzy) 累积值，只要敌人还活着，这个值就会不断上升。一定要通过侧步躲避它们的攻击并挥砍它们来迅速将其杀死。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：水银子弹 x3-4，镇静剂 (Sedative)
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 沿着小路往下走，到达一扇门，有一个长眼异形正朝你走来，然后向左转，在这个区域后面的树后找到另一个躲藏的长眼异形。走楼梯去杀另一个长眼异形，然后走左边的楼梯绕到树的右侧，对一个吸脑怪 (Brainsucker) 进行内脏暴击，然后捡起<strong>秘法湖符文</strong> (Arcane Lake Rune)。你现在可以下到河边，向右转，在空地上捡起<strong>狂人的知识</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 继续前进时，两个长眼异形会从上面掉下来，所以后退来对付它们，然后继续向前走，在阳台区域的伟大者的智慧 (Great One's Wisdom) 附近遇到一朵荧光花 (Fluorescent Flower)。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 荧光花 (Fluorescent Flower)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   当你站在远处时，这些大型敌人会向你施放魔法火球，而它们像捕蝇草一样的嘴会向你呕吐。从侧面接近它们以避免呕吐物，而且随着它们的移动，你通常会被它们推着走，这能让你相对安全。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：无
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 检查大楼梯的另一侧，找到一个保护着<strong>镇静剂 x5</strong>的长眼异形，然后打开建筑物附近的捷径门。进入大楼，打开房间左侧的箱子获得一个<strong>珍珠蛞蝓</strong> (Pearl Slug)，然后穿过房间解锁大楼另一侧的门。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 当你上楼梯时，一个猎人 (Hunter) 会从右侧进入，但不要与他们交战，你应该冲上楼梯，绕过阳台来到一个梯子前，爬上一半。猎人会追着你，但只要你爬上梯子，他们就会失去兴趣，走到大楼另一侧的一个箱子前盯着它看。通过这样做，你可以轻松走到猎人身后进行蓄力攻击/内脏暴击连招，然后冲回梯子再次摆脱他们。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 打开箱子获得<strong>学生套装</strong> (Student Set)，然后回到梯子上，在桌子上拿到<strong>月之观象台钥匙</strong> (Lunarium Key)。如果你继续上楼梯，一个长眼异形会试图在顶层伏击你，在那里你还可以拿到<strong>中空的幻象外壳</strong> (Empty Phantasm Shell)。你现在可以回到猎人所在的楼层，打开双开门，来到一个有威廉大师 (Provost Willem) 的阳台。一定要与这个NPC交谈以获得一些灵视，然后杀死他以获得<strong>眼睛符文</strong> (Eye Rune)。


               </p>
               <h3 id="section-moonside-lake" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 月畔湖 (Moonside Lake)
               </h3>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：愚钝蜘蛛罗姆</span>
                 <a href="#boss-rom-the-vacuous-spider" onClick={(e) => scrollToSection(e, 'boss-rom-the-vacuous-spider')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-npc-quests-5" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务，第五部分 (NPC Quests, Part 5)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 随着罗姆的死亡和血月在天空中升起，有相当多的NPC任务你可以继续或完成。


               </p>
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 亚南中心 (Central Yharnam)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 首先前往亚南中心提灯，击败在它周围徘徊的兽化病人（男），获得<strong>爪印符文</strong> (Clawmark Rune)。这个兽化病人（男）实际上就是交给你火焰喷射器的吉尔伯特，如果你观察附近房子的窗户，你会发现他在变异后不久就破窗而出了。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 你现在可以前往维奥拉女儿所在的房子与她的姐姐交谈，如果你之前选择了导致她死亡的路线。如果你选择交出红色信使缎带，你可以重新加载该区域，然后爬梯子找到死去的她并获得<strong>白色信使缎带</strong>。


               </p>
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 大教堂区 (Cathedral Ward)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 前往大教堂区的大教堂，找到濒死的乌鸦艾琳并与她交谈以获得“等待”动作。然后你可以进入大教堂内部，遇到把她打得头破血流的NPC并击败他。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这个NPC特别快而且很难对付，单发子弹就能带走你大部分生命值。虽然他可以用你的火器打出硬直，但除非他在攻击中途，否则实际上很难击中他，所以你要确保他准备攻击之前再浪费一堆子弹。有时他会停下来用迅捷法术强化自己，允许他短距离传送以躲避攻击或执行他自己的攻击，其他时候他会拔出一把喷血的刀，造成持续伤害。稳扎稳打才能赢得这场战斗，因为这个NPC也至少会治疗一次，所以你必须将他打倒两次才能真正击败他。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 一旦被击败，你可以回到艾琳那里获得<strong>乌鸦猎人徽章</strong>和<strong>猎人誓约</strong>以完成艾琳的任务线。


               </p>
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 返回约瑟夫卡的诊所 (Returning to Iosefka's Clinic)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 还记得禁忌森林 (Forbidden Woods) 下方洞穴里的那个梯子吗？如果你回到这个区域并爬上梯子，你会发现自己处于游戏开始时打开的亚南中心大门对面的门后。在门附近捡起<strong>冷血露(1)</strong>，你可以用附近的装置打开这扇门，然后穿过对面的门继续前进。下楼梯进入广场杀死一个吸脑怪，然后在井边捡起<strong>狂人的知识</strong>，接着爬上梯子。你现在可以穿过屋顶，处理许多食腐乌鸦，从后门进入约瑟夫卡的诊所。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 当你在约瑟夫卡的诊所探索时，你可能会遇到一些神圣使者 (Celestial) 敌人，数量等于你送到约瑟夫卡诊所的NPC数量，所以小心地向右走进入诊所房间。捡起<strong>该隐赫斯特的召唤</strong> (Cainhurst Summons)，然后打开通往1楼病房提灯的诊所门，接着前往诊所的另一端。进入房间从箱子里拿取<strong>圣餐符文</strong> (Communion Rune)，然后回到楼上找到约瑟夫卡，她被血月削弱了，可以轻易被杀死以获得<strong>三分之一脐带</strong> (One Third of Umbilical Cord)。


               </p>
               <h3 id="section-witchs-abode" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 女巫住所 (Witch's Abode)
               </h3>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：汉威克女巫</span>
                 <a href="#boss-the-witch-of-hemwick" onClick={(e) => scrollToSection(e, 'boss-the-witch-of-hemwick')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 在离开之前，请务必走下对面的楼梯，找到一个有尸体的房间，尸体上拿着<strong>符文车间工具 (Rune Workshop Tool)</strong>，有了它，您就可以通过在猎人梦境中与格曼 (Gehrman) 附近的祭坛互动来装备符文。


               </p>
               <h3 id="section-hypogean-gaol" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 未见之村的监狱 (Hypogean Gaol)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 要到达未见之村的监狱（亚哈古尔未见之村的一个小区域，您可以提前进入），您需要被劫持者 (Kidnapper) 杀死。最容易找到的一个是在大教堂区欧顿礼拜堂后门出口处，检查院子的角落。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 劫持者 (Kidnapper)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   看起来移动缓慢，但攻击力极高，除非它们向您跳跃或踢您，否则通常很难使它们硬直。触发硬直最简单的方法是攻击它们，导致它们触发狂暴强化 (Madness Boost)，然后后退反击它们必然会使用的跳跃攻击，以获得一次内脏暴击的机会。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血石碎片 x2、双子血石碎片、闪电纸
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 过场动画结束后，您将在亚哈古尔未见之村监狱的一个未锁牢房中醒来。装备火把，打开门离开牢房，然后向右拐在下一个牢房中拿到<strong>浓稠冷血 (6)</strong>。下楼梯到地窖拿到<strong>狂暴冷血 (7)</strong>，然后尝试与 NPC 修女阿黛拉 (Sister Adella) 交谈，但如果没有装备教会套装，您只能晚点再来。现在您可以回到楼上，穿过房间走到一段楼梯，上一层楼到另一段往下的楼梯，那里有两个采眼者 (Eye Collector) 在等着您。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 采眼者 (Eye Collector)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   与汉威克女巫相同，但没有束缚魔法，如果您靠得太近或被打了个措手不及，她们会抓住您的头挖出您的眼睛。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：鹅卵石 x3-6、充血眼球
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 这个区域由两个带有假装死亡的普通敌人的牢房和一个被两个劫持者占据的后室组成，您现在应该忽略后室。清理两个牢房，同时拿到<strong>采血瓶 x6</strong>和<strong>水银子弹 x10</strong>，然后返回楼梯，一直走到顶端点亮未见之村监狱的提灯，但要小心从这个位置走下来的劫持者。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 现在您有了一个重生点，解决主厅的两个劫持者，拿起地上的<strong>月亮符文 (Moon Rune)</strong>。向出口走去，确保右侧柱子后面的采眼者没有偷袭您，然后走到外面向右转。沿着教堂一侧的柱子将两只狂犬从一个劫持者身边引开，然后杀死劫持者。现在您可以走下楼梯，检查看似死胡同的地方获得<strong>双子血石碎片</strong>和<strong>狂暴冷血 (7)</strong>，然后打开通往有两个采眼者区域的门。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到外面，杀死您之前看到的食人猪 (Maneater Boar)，然后沿着教堂左侧边缘前进，杀死一个游荡梦魇，打开另一条直接通往提灯的捷径。原路返回广场，走那一小段楼梯，向左转在一个壁龛里找到隐藏的<strong>狂暴冷血 (8)</strong>。现在您可以回到楼梯，继续走上另一段楼梯，左边的房间只通向一个您此时无法激活的电梯，然后跳到地面。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 有四只狂犬需要您小心应对，但一旦它们死了，您可以冲到悬空楼梯下方的小壁龛里，迅速绕到另一只食人猪身后，解决它以获得它守卫的<strong>闪电纸 x5</strong>。现在您可以一路走到街道尽头，杀死右边的两只狂犬，然后潜行靠近劫持者进行蓄力攻击和内脏暴击，最后解决剩下的两只狂犬，拿到<strong>雷霆 (Tonitrus)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 原路返回到食人猪上楼梯的地方，这次走下去杀死守卫<strong>狂人的知识 x3</strong>的两只狂犬，但确保也走上附近的楼梯拿到<strong>狂暴冷血 (8)</strong>，并从马车司机那里拿到<strong>亚哈古尔黑色套装 (Yahar'gul Black Set)</strong>，然后再回到您开始时的主教堂内部。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 还记得地下室里有两个采眼者和两个劫持者坐在桌旁的那个房间吗？好的，继续走下楼梯，然后击败或跑过两个劫持者，进入通往 Boss 区域的隧道。


               </p>
               <h3 id="section-graveyard-of-the-darkbeast" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 黑兽墓地 (Graveyard of the Darkbeast)
               </h3>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：黑兽帕尔</span>
                 <a href="#boss-darkbeast-paarl" onClick={(e) => scrollToSection(e, 'boss-darkbeast-paarl')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-npc-quests-part-4" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务，第四部分 (NPC Quests, Part 4)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 击败黑兽帕尔后，您可以打开通往旧亚南 (Old Yharnam) 的大双开门，并返回退役猎人机枪哥 (Retired Hunter Djura) 处，前提是您之前让他活着。如果您选择放过野兽，他会交出<strong>火药桶帮猎人徽章 (Powder Keg Hunter Badge)</strong>和<strong>“拍掉灰尘”动作</strong>。如果您希望他的盔甲套装出现在猎人梦境的商人处，现在您可以击败他。


               </p>
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 未见之村的监狱 (Hypogean Gaol)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 您也可以穿着其中一套教会套装，返回未见之村监狱的地窖，与修女阿黛拉交谈，将她送到欧顿礼拜堂或约瑟夫卡的诊所。


               </p>
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 大教堂区 (Cathedral Ward)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 如果您将阿黛拉送到了欧顿礼拜堂，您可以在礼拜堂的后方与她交谈，获得<strong>教会鞠躬（女性）动作</strong>和<strong>阿黛拉的血</strong>。另一方面，如果您将阿黛拉送到了约瑟夫卡的诊所，您可以回到约瑟夫卡那里领取您的奖励。

               
               </p>
               <div className="bg-[#120a0a] border-l-4 border-[#8a0303] p-4 rounded-r-lg mb-6 shadow-sm">
                 <p className="text-sm text-[#a3a3a3] m-0">
                   💡 如果您目前有阿丽安娜的血 (Arianna's Blood)，您需要丢弃它才能获得阿黛拉的血，如果您想防止阿黛拉杀死阿丽安娜，您可能需要这样做。
  
                 </p>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 现在您可以从欧顿礼拜堂里孤单老妇人对面的门口出去，到达电梯并乘坐电梯上去，转身并贴着墙跑，找到一条隐藏的路径，通往欧顿礼拜堂上方，获得<strong>无形欧顿符文 (Formless Oedon Rune)</strong>和<strong>信使的壶会 (Messenger Urn Festival)</strong>。


               </p>
               <h3 id="section-healing-church-workshop" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 治愈教会工厂 (Healing Church Workshop)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 乘电梯返回欧顿礼拜堂里孤单老妇人对面，冲进房间以避开拿着加特林机枪的轮椅猎人的火力，然后打开宝箱获得<strong>圣餐符文 (Communion Rune)</strong>。现在您可以跑过桥，避开步枪手和猎人直到到达塔楼，然后向左绕着塔楼走，杀死一个游荡梦魇并跳到下一层。

               
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入塔楼时，您会发现一堆破损的平台，但为了到达废弃旧工厂 (Abandoned Old Workshop)，您需要瞄准主平台和走到走道前伸出的一根断裂的横梁之间跳下去。这应该能让您落在一个平台上，该平台正下方就是通往废弃旧工厂的平台。


               </p>
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 废弃旧工厂 (Abandoned Old Workshop)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 这个区域与猎人梦境完全相同，包含信使浴池所在的宝箱里的<strong>人偶套装 (Doll Set)</strong>、宝箱上方灌木丛里的<strong>老猎人骨头 (Old Hunter Bone)</strong>、房子里祭坛上的<strong>三分之一脐带 (One Third of Umbilical Cord)</strong>，以及柜子里的<strong>小发饰 (Small Hair Ornament)</strong>。然后您可以返回猎人梦境，将小发饰给人偶以获得<strong>泪石 (Tear Stone)</strong>。


               </p>
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 治愈教会工厂 继续 (Healing Church Workshop Cont.)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 返回治愈教会工厂塔楼，这次进入塔楼杀死猎人，并打开宝箱获得<strong>血质宝石 (2)</strong>。楼梯通向更多敌人，其中一个是拿着加特林机枪的轮椅猎人，然后等待猎人的仆从进入塔楼，从掩体后杀死它。清理完毕后，离开塔楼杀死两名步枪敌人，然后拿起<strong>浓稠冷血 (6)</strong>。现在您可以爬上这一层的梯子，向左转在死胡同拿到<strong>浓稠冷血 (6)</strong>，然后进入塔楼，在打开装有<strong>闪耀剑猎人徽章 (Radiant Sword Hunter Badge)</strong>的宝箱之前，再杀死两名拿着火焰喷射器的轮椅猎人。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 返回您之前跳下到废弃旧工厂的破损平台处，这次穿过走道跳到下面的平台上。向左跳下，然后小心地穿过宽大的横梁到达另一根横梁，您可以跳到那里拿到<strong>信使高礼帽 (Messenger Top Hat)</strong>，然后再次跳下。如果您从这个平台的边缘往下看，您应该会发现下方一个小平台上有一个<strong>狂人的知识</strong>，您可以小心地跳下去，然后使用火把发现下方还有一条走道。要跳到这条走道上，从尸体右侧跳下以安全着陆，然后翻滚到下方另一个平台，最后跳到地面。挡住门的被兽性附身的人类 (Beast-possessed Soul) 很容易被潜行靠近进行蓄力攻击，随后进行内脏暴击，会掉落<strong>野兽符文 (Beast Rune)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 沿着小巷往下走杀死两只食腐乌鸦，然后捡起<strong>满是褶皱的亚南套装 (Rumpled Yharnam Set)</strong>。继续前进，杀死狂犬，然后向右转潜行靠近劫持者，接着在院子另一侧的一棵树后找到<strong>狂人的知识</strong>。向右走进入另一条有两名猎人的小巷，然后向右转走下楼梯，杀死守卫着<strong>火焰血宝石 (3)</strong>的吸脑怪 (Brainsucker)。现在您可以返回楼梯上，一直走到电梯，乘坐它去拿大教堂区里的<strong>浓稠冷血 (6)</strong>。


               </p>
               <h3 id="section-forsaken-cainhurst-castle" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 废弃的该隐赫斯特城堡 (Forsaken Cainhurst Castle)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 传送到“女巫的居所”，原路返回汉威克阴森小巷中两个刽子手所在的十字路口。当你靠近主路旁的大墓碑时，会触发一段过场动画，一辆前往该隐赫斯特的马车出现了。你现在可以乘坐马车前往该隐赫斯特，爬上台阶，等待大门打开，然后点亮提灯。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 从提灯处有多条路可以走：一条通向喷泉，一条下山进入峡谷，还有一条通向一座带有未启动电梯的独立建筑。先绕到那座建筑后面拾取<strong>狂暴冷血 (9)</strong>，然后进入充满寄生幼虫的峡谷，在尽头拾取<strong>锻炼血宝石 (3)</strong>。峡谷对面没有任何物品，如果你愿意可以杀掉那两只嗜血兽，然后返回提灯处并前往喷泉。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 嗜血兽 (Bloodlicker)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   速度快、力量强，且不受内脏暴击影响，这些敌人可能很难对付。绕到它们身后以避开它们的跳跃攻击和挥击，并确保使用你最快或最强的武器形态。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血宝石
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 杀掉喷泉周围的两只嗜血兽，拾取<strong>麻痹雾 x2</strong>，然后沿着峡谷右侧边缘走到一个角落，那里有另一只嗜血兽和<strong>麻痹雾 x4</strong>。现在你可以穿过对面的角落，来到城堡入口左侧，再杀掉三只嗜血兽，收集<strong>麻痹雾 x4</strong>、<strong>狂暴冷血 (9)</strong>和<strong>狂暴冷血 (8)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入城堡的双扇大门，清理两层的该隐赫斯特仆从，这样在拾取第一个物品后出现废弃城堡怨灵时，你的处境会轻松一些。你现在可以收集以下物品：<strong>血石块</strong>、<strong>骑士剑 (Reiterpallasch)</strong>和<strong>狂人的知识 x2</strong>。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 该隐赫斯特仆从 (Cain's Servant)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   通常在擦洗该隐赫斯特的地板，有多种版本，其中有两种需要注意。持烛台的版本极其脆弱，但他们频繁的吹箭攻击往往会让你硬直，而且他们的飞镖会像信标一样，让任何废弃城堡怨灵变得极度具有攻击性。持刺剑的版本则更致命、更具攻击性，所以你需要集中精力迅速解决他们。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶 x1-2，水银子弹 x2，麻痹雾 x1
                 </div>
               </div>

               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 废弃城堡怨灵 (Forsaken Castle Spirit)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   这些敌人有两种版本：一种拿着刀，一种提着自己的头。只要你保持不动，且没有被该隐赫斯特仆从的吹箭标记，这两种版本对你的位置都是完全无视的。唯一的区别是，提着头的版本会尖叫来束缚你，让你在拿匕首的怨灵面前变得脆弱。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：无
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 在下一个房间里还有一些废弃城堡怨灵，拿走<strong>水银子弹 x4</strong>，并记得检查房间侧面的箱子，里面有<strong>贵族装 (Noble Dress)</strong>。现在你可以退出到阳台，走楼梯，正前方会发现一个古代的迷失之子（石像鬼），要小心，因为他伪装在雕像之中。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 古代的迷失之子 (Lost Child of Antiquity)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   经常与环境融为一体以打你个措手不及，他们对物理攻击相当脆弱，可以在近距离轻松解决。小心他们的猛扑攻击（会吸你的血），由于他们有冲击波尖叫，不要后退得太远。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：双子血石碎片，血石块
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 走区域后面的楼梯，在一个雕像后面左转，到达塔顶，获得一个<strong>血石块</strong>。回到楼下，杀掉站在空地上的迷失之子，然后继续前进，在左侧门道前杀掉迷失之子，以及从后面俯冲过来加入他的同伴。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 在塔内，你会遇到第一个持刺剑的仆从，所以迅速攻击他以避开他的连招，然后退出塔楼向右转，在两个迷失之子之间发现<strong>刽子手套装 (Executioner Set)</strong>，你可以轻松地把他们射下边缘。进入下一栋建筑，打开附近的箱子获得<strong>血族名册 (Vileblood Register)</strong>，然后启动电梯回到关卡的起点。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 当你返回图书馆楼层时，你需要冲到区域后面，在移动楼梯上杀掉拿吹箭的仆从，这将防止众多废弃城堡怨灵变得极度具有攻击性。现在你可以清理怨灵，跑上移动楼梯并跳到桌子上，拿走装有<strong>伊芙琳 (Evelyn)</strong>的箱子，然后上楼。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这一层有多个仆从，你需要迅速解决他们，在退出窗户之前，确保沿着左墙找到一个<strong>血石块</strong>。在外面，小心地从边缘和石像鬼雕像之间跳下，获得<strong>水银子弹 x6</strong>，然后来到地面杀掉两个迷失之子。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入建筑，杀掉废弃城堡怨灵，当无头怨灵抬起头时后退以避免被束缚，然后打开箱子获得<strong>刽子手手套 (Executioner's Gloves)</strong>和<strong>骑士套装 (Knight's Set)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到外面，沿着边缘穿过远处的屋顶，在一个迷失之子下方获得<strong>眷属冷血 (10)</strong>，然后跳回图书馆。拉动装置激活通回电梯的捷径，这也会显露一个梯子，爬到上层在角落找到一个装有<strong>温暖血宝石 (3)</strong>的箱子。如果你绕着阳台外侧跑，你会发现一个游荡梦魇，然后你可以进入梯子附近的螺旋楼梯继续前往屋顶。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 杀掉屋顶上的迷失之子，以及你捡起<strong>骑士假发 (Knight's Wig)</strong>时飞来的两个，然后跳到下层屋顶。紧贴圆形屋顶跳到有围栏的屋顶，再跳到另一个圆形屋顶，最后再跳一次。拾取<strong>眷属冷血 (10)</strong>，爬上梯子，然后直走拾取<strong>勇敢猎人的印记 x2</strong>，接着去迎战 Boss。


               </p>
               <h3 id="section-martyr-logarius" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 洛格力斯的座位 (Logarius' Seat)
               </h3>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：烈士洛格力斯</span>
                 <a href="#boss-martyr-logarius" onClick={(e) => scrollToSection(e, 'boss-martyr-logarius')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-yahargul-unseen-village" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 未见之村亚哈古尔 (Yahar'gul, Unseen Village)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 要到达未见之村亚哈古尔，你需要从大教堂区的大教堂向左下楼梯，那里是你之前击败两名猎人的地方，然后进入你在击败愚钝蜘蛛罗姆 (Rom, the Vacuous Spider) 后到达的教堂。快速穿过悬挂在门上方的次级阿米戈达拉 (Lesser Amygdala)，以避免被抓住，进入未见之村亚哈古尔。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这个区域的敌人可能看起来像标准的暴徒，但他们是强化版本，只要摇铃女 (Bell Ringer) 还活着，他们就会不断重生。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 摇铃女 (Bell Ringer)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   她们本身并没有什么威胁，但她们复活和强化敌人的能力意味着她们应该是你在任何情况下的首要目标。越过重生的敌人，通常在死胡同或角落里寻找，并在清理区域之前务必先解决这些女士。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：水银子弹 x2-3
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 走下楼梯，对付两个暴徒，然后继续走下一组楼梯，遇到另一个暴徒，然后转身在楼梯旁拿到<strong>狂暴冷血 (8)</strong>。继续前往下一个区域点亮未见之村亚哈古尔提灯，然后等所有敌人经过下一组楼梯后再向右转。在雕像后面检查拿取<strong>血石块</strong>，继续走附近的楼梯杀死轮椅暴徒和暴徒，然后拿到<strong>亚哈古尔铁盔</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到楼梯，来到通向下方长楼梯的地方，那里有多个会重生的敌人，冲下去进入他们后面的建筑，在房间的第二层找到摇铃女。一旦你击败了摇铃女，敌人将停止重生，并且他们会在失去强化效果时眩晕几秒钟，所以你现在可以杀死他们了。务必检查摇铃女位置后面的牢房拿取<strong>闪电暗血宝石 (4)</strong>，然后从侧门出去。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这部分的摇铃女在牢房的另一侧，所以最好忽略大厅里的敌人，冲过牢房门接近摇铃女。一旦她死了，你就可以对付你经过的敌人，然后在牢房外面拿取<strong>继承人符文</strong>。确保打开摇铃女位置附近的门作为快速捷径，然后在附近的牢房内拿到<strong>狂暴冷血 (8)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 下一个区域有大量的汉威克墓地女巫，隐藏的摇铃女可能很难找到。首先走楼梯，然后紧贴右墙找到栏杆上的一个缺口，你可以从那里跳下去，进入一个房间找到摇铃女和一个猎人的仆从（砖怪）。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 在你做任何其他事情之前，你应该走回外面，从尸体上拿取<strong>狂暴冷血 (8)</strong>，然后回到里面，跳进笼子房间的中心拿取<strong>大教堂上层钥匙</strong>。出去杀死猎人的仆从和轮椅暴徒，然后打开装有<strong>小型雷霆</strong>秘法道具的箱子，接着回到你跳下来的区域。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 杀死汉威克墓地女巫，但要小心向整个区域发射激光束的次级阿米戈达拉，然后检查两个楼梯之间拿取<strong>血石块</strong>。你现在需要穿过次级阿米戈达拉，但走错一步你就必须重新开始整个区域。我发现穿过这个区域最简单的方法是，从左侧楼梯冲到主楼梯顶部圆形区域的左侧，停下来杀死一个投掷燃烧瓶的汉威克墓地女巫，然后沿着楼梯右侧冲刺到达亚哈古尔小教堂。


               </p>
               <h3 id="section-yahargul-chapel" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 亚哈古尔小教堂 (Yahar'gul Chapel)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 亚哈古尔小教堂实际上与你之前去过的地下监狱 (Hypogean Gaol) 是同一个地方，但在血月之下，你将面对一批新的敌人和新开放的区域。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 从门出去杀死一个游荡梦魇，然后走上右边的小台阶，跳到一个步枪手身上拿取<strong>狂暴冷血 (8)</strong>。下面的两只狂犬可能是致命的，所以试着跳到它们身上造成一些伤害，然后迅速解决它们，不要走下附近的楼梯。摇铃女实际上就在台阶下左侧，让你可以在不引起附近暴徒和猎人仆从注意的情况下解决她。继续走下一组楼梯，解决左侧的暴徒，然后拿到<strong>采血瓶 x8</strong>，接着进入小教堂。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 除了居住在这个区域的新敌人之外，这个区域对你来说应该相当熟悉。小教堂里有三个猎人，每个人都有自己的武器和攻击方式，他们聚在一起相当致命。首先偷偷接近双爪猎人进行内脏暴击，这会引起其他猎人的注意，然后试着跑开将猎人们拉开，直到只看到其中一个。如果你能设法单独对付每个人，你应该可以毫无问题地使用你的枪让他们硬直并杀死他们。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 走下小教堂楼梯到底层监狱，在那里你会遇到升级版的天灾兽，然后走到你发现修女阿黛拉的地方，从死去的劫持者身上拿取<strong>血石块 x2</strong>。上一层楼来到通向黑兽帕尔的牢房，杀死另一只天灾兽，然后检查区域后方拿取另外的<strong>血石块 x2</strong>。你现在可以原路返回楼上，离开小教堂攻击正在下楼梯的血盒怪。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 血盒怪 (Cramped Casket)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   无法被打出硬直或被内脏暴击，当它们击中你时会造成巨大伤害。使用一次攻击然后后撤步，让它们攻击，然后再进去打一下。这是一种缓慢的战术，但非常安全，因为它们总是会试图再次攻击你。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血宝石
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 忽略向下的楼梯，走小教堂旁边建筑上的楼梯，忽略左侧有两个暴徒的死胡同，杀死正前方的步枪手。你现在可以走上悬挂在缺口上方并有一只血盒怪的楼梯，杀死摇铃女，然后原路返回广场。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 走到楼梯下面杀死另一只血盒怪，它守卫着更多的<strong>血石块 x2</strong>，然后走向路中间劫持者的尸体，导致另一只血盒怪从附近的马车里掉出来。捡起<strong>血石块 x2</strong>，然后小心地走向路中间的三只血盒怪，这会自动引过来一只。剩下的两只血盒怪不喜欢分开，你可能需要一起杀死它们，只要小心一点，或者用鹅卵石引诱一只。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 除非你以前从未去过这个区域（如果你一直遵循本指南，你应该去过），你现在可以原路返回到你杀死摇铃女的地方，进入楼梯左侧的房间，对付暴徒。电梯返回到未见之村亚哈古尔提灯附近的区域，但你要做的是进入电梯，转过身来发现一半高度的地方有一个缺口。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这将通向一个有两只狂犬的新区域，你不应该进入建筑物，而是走下楼梯，杀死游荡梦魇，来到一只背对你的天灾兽身后。你现在可以捡起<strong>血石块</strong>并进入楼上的建筑，使用浴池传送到一个新区域。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 穿过正前方的拱门杀死摇铃女和她的保护者，然后回到浴池从另一个门口出去。杀死天灾兽后拿取<strong>采血瓶 x6</strong>，然后进入附近的门口。杀死楼梯上的步枪手和底部的天灾兽，然后在壁龛里拿取<strong>锻炼暗血宝石 (5)</strong>，最后从骨头门出去。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这会带你到外面面对三只血盒怪，其中两只是静止的并从远处向你投掷长矛。首先将攻击集中在远程的血盒怪上，同时风筝普通的血盒怪以避免伤害，一旦远程的死了，你就可以杀死近战的血盒怪。原路返回悬挂在区域上方的桥，检查道路右侧木乃伊附近拿取<strong>秘法湖泊符文</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 继续走到大楼梯，那里有另一只血盒怪在等着，走右边的楼梯拿到<strong>狂暴冷血 (8)</strong>。你可以忽略右侧通回亚哈古尔小教堂区域的桥和其余街道，然后沿着路往下走。一定要检查通向 Boss 的道路左右两侧区域，在两端各找到<strong>狂人的知识 x2</strong>。


               </p>
               <h3 id="section-advent-plaza" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 降临广场 (Advent Plaza)
               </h3>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：重生古神祇</span>
                 <a href="#boss-the-one-reborn" onClick={(e) => scrollToSection(e, 'boss-the-one-reborn')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <p className="text-[#a3a3a3] mb-8">
                 离开前，请务必返回楼梯上方并检查阳台后角，拿取<strong>水银子弹 x10</strong>。


               </p>
               <h3 id="section-npc-quests-6" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务，第六部分 (NPC Quests, Part 6)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 确保拿取幻象皇冠 (Crown of Illusions) 并点亮提灯，然后装备皇冠走向洛格力斯 (Logarius) 曾坐的王座，以进入血族女王的房间 (Vileblood Queen's Chambers)。


               </p>
               <h4 id="section-vileblood-queens-chambers" className="text-xl mt-8 mb-4 font-bold text-[#c2c2c2]">
                 血族女王的房间 (Vileblood Queen's Chambers)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 靠近血族女王安娜丽丝 (Annalise, Queen of the Vilebloods)，在蜡烛圈内“跪下”加入该隐赫斯特血族 (Cainhurst Vilebloods) 誓约，并获得腐化誓言 (Corruption Oath)、该隐赫斯特徽章 (Cainhurst Badge) 和“尊重”动作。您现在可以拿取她王座右侧桌子上的未开封的召唤状 (Unopened Summons)，并点亮提灯离开。


               </p>
               <h4 id="section-cathedral-ward-3" className="text-xl mt-8 mb-4 font-bold text-[#c2c2c2]">
                 大教堂区 (Cathedral Ward)
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 与禁忌森林入口上方的血族猎人阿尔弗雷德 (Vileblood Hunter Alfred) 交谈，选择“交出未开封的召唤状”，获得车轮猎人徽章 (Wheel Hunter Badge) 和教会鞠躬（男性）。如果返回血族女王的房间，您会发现阿尔弗雷德在安娜丽丝血肉模糊的尸体上赞美太阳，与他交谈可获得“咆哮”动作。您现在可以检查王座获得女王的血肉 (Queenly Flesh)，这可以在稍后用于复活安娜丽丝。然后返回大教堂区，在旧雅南上方的教堂里找到阿尔弗雷德，获得处刑者 (Executioners) 誓约的“光辉誓言 (Radiance Oath)”。


               </p>
               <h3 id="section-lecture-building-1f" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 教学大楼1楼 (Lecture Building 1F)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 从大教堂 (Grand Cathedral) 向左走，穿过您与两名猎人和两名刽子手战斗过的区域，进入通往亚哈古尔未见之村的教堂。当您走向门口时，次级亚米达拉 (Lesser Amygdala) 会抓住您，但不要躲避，您需要被吸进去才能到达教学大楼1楼。

               
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 点亮提灯穿过大厅，通过门口与蜘蛛帕奇 (Patches the Spider) 交谈，不过他现在无话可说。留在大厅这一侧，进入第一道门，接着进入另一道门，进入第一个阶梯教室，上面会掉下一个学者 (Scholar)。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 学者 (Scholar)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   虚弱且缓慢，他们经常成群出现，可以用液体般的手臂伸展到很远的距离，或者把内脏吐进罐子里溅你一身。最好的策略总是冲向这些敌人，在他们有机会攻击之前迅速将其击杀，但要小心那些从上面掉下来的。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：水银子弹 x3、镇静剂 (Sedative)
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 拿取房间里的教学大楼钥匙 (Lecture Theatre Key) 和学生套装 (Student Set)，然后从另一侧出去进入隔壁的圆形房间。在这里您可以找到狂人的知识 x2，但要小心从上面掉下来的学者。您现在可以穿过大厅，忽略发光的门，进入第一个房间，打开宝箱获得血色果冻 (Red Jelly) x2。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 沿着大厅的这一侧，使用教学大楼钥匙进入一个挤满学者的房间。先后退让他们聚集在一起，然后冲进去打几下再撤退。一旦所有敌人都死了，从对面的门出去，捡起伊碧塔丝的预兆 (Augur of Ebrietas)，然后回到发光的门进入噩梦边境 (Nightmare Frontier)。


               </p>
               <h3 id="section-nightmare-frontier" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 噩梦边境 (Nightmare Frontier)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 噩梦边境可能是您遇到的最困难的地方之一，因为它充满了强敌和毒沼泽。离开洞穴，在壁架旁杀死游荡梦魇，然后走上小山丘，在左边一些墓碑附近拿到狂人的知识。悄悄接近俯瞰壁架的罗伦城银兽 (Loran Silverbeast)，进行内脏暴击，然后沿着壁架向右走，跳下去捡起铅之灵药 (Lead Elixir) x2。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 罗伦城银兽 (Loran Silverbeast)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   在边境和曼西斯都能找到，它们是雅南天灾兽的强化版，在生命值低时会四脚着地。它们携带的火把是一个巨大的威胁，被击中不仅会受到伤害，而且它们还能用火把喷火。此外，曼西斯里的版本在被杀时会掉落寄生虫幼虫，除非您用内脏暴击杀死它们。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血宝石 (Blood Gemstones)
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 继续上山并顺着道路走，找到一个大型游荡梦魇和另一只银兽，然后走远一点找到另一个游荡梦魇和银兽。向着指示重要路径的绿色灯笼方向跨过缺口，当您沿着路径往下走时，您可能会在路上看到另一个游荡梦魇。不幸的是，由于出现的 NPC 猎人，您通常无法杀死它，因此请集中精力杀死拿猎人斧的猎人，接着是拿螺纹手杖的猎人。利用环境和墓碑来阻挡他们的攻击，并迫使他们绕着物体移动，在您有优势的地方与他们战斗，这相对容易做到。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到绿色灯笼处重新定位，沿着左墙走下山，找到另一座通向缺口的山丘。翻滚穿过缺口拿到消退湖泊符文 (Fading Lake Rune)，然后原路返回缺口跳下去，在下面找到一个狂人的知识。如果您转身，您会发现悬崖上有一个摇铃女 (Bell Ringer)，但为了解决她，您需要走到沼泽并进入右侧的洞穴，绕到她身后。您现在可以跳下去，杀死银兽并捡起采血瓶 x2，然后穿过洞穴。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 在隧道对面杀死游荡梦魇，然后上到第二个壁架，巨型迷失之子 (Giant Lost Child) 就在那里。在把注意力集中在巨人身上之前，先杀死另一个游荡梦魇。您现在可以转身紧贴左墙向右走，找到一个带有冷血花蕾 (Coldblood Flowerbud) 的隐藏壁架，然后跳下去紧贴右墙向左走，找到另一个巨型迷失之子。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 巨型迷失之子 (Giant Lost Child)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   远程敌人，很容易对其进行蓄力/内脏暴击，但接近它们通常是最重要的一环。小心它们投掷的巨石，因为巨石碎裂产生的碎片造成的伤害和被巨石直接命中一样高。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血石碎片 x1-3、双子血石碎片 x1-3、铅之灵药
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 确保拿到大墓碑后面的闪电纸 (Bolt Paper) x2，然后往下跳一层向右转，遇到另一只银兽。穿过沼泽上的桥，向左转拿到铅之灵药 x2，然后走上山杀死最后一个巨型迷失之子。您现在可以继续沿着小路穿过隧道，右转上山找到另一个大型游荡梦魇。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 下山时靠右走，踩在一块半翻倒的墓碑上，创造一条通回起点的捷径。杀死可能存在的游荡梦魇，然后走回墓碑向右转，穿过另一座桥。径直进入洞穴杀死一个巨型迷失之子，然后原路返回进入左侧的田野，走向宝物以触发过场动画。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这会把您扔进毒沼泽，那里有一个游荡梦魇和两件宝物，分别是解毒药 x3 和铅之灵药 x2。如果您走向洞穴附近的两个爬行者 (Crawler)，您将离开这个区域，所以请朝相反的方向走。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 爬行者 (Crawler)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   爬行者有两种体型，两种版本都喜欢使用触手连击攻击并向您吐出令人作呕的酸液。由于沼泽会降低您的步行和奔跑速度，因此最好向它们翻滚或向前跨步，然后侧步绕到它们侧面轻松进行攻击。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：浓稠冷血 (4)/(5)/(6)
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 穿过沼泽前往一个有两只小游荡梦魇和一只大型游荡梦魇的大区域（您可能需要回来多次才能杀死它们），然后击败爬行者。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 如果您还没有把镇静剂放在快捷栏上，现在应该放上去并准备好使用，因为下一个敌人会造成大量狂暴，如果它的攻击没有杀死您，它造成的狂暴也会。进入洞穴时紧贴左墙，尝试在不被发现的情况下看到另一边的狂暴大脑 (Winter Lantern)。如果运气好，您应该能够慢慢走到它身后，冲进去快速攻击轻松杀死它，然后尽快按下方形键治愈狂暴槽。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 狂暴大脑/冬之灯 (Winter Lantern)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   这些敌人非常令人毛骨悚然，仅仅看到它们就会导致狂暴积累。如果它们抓住您，将造成巨大伤害，并给狂暴足够的时间杀死您。幸运的是，这些敌人生命值很低且弱近战攻击，它们通常位于您可以潜行接近或绕过的地方。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：水银子弹 x3、鹅卵石 x10、血宝石
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 狂暴大脑后面是信使的礼物 (Messenger's Gift)，这在 PVP 中非常有用，拿走它，然后跑回您掉进沼泽的地方穿过隧道。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 退出时向左转，到达一个有游荡梦魇和解毒药 x4 的岛屿，同时避开巨型迷失之子投掷的巨石。然后从左侧跳下，顺时针绕沼泽继续前进。您可能会看到另一个可以杀死的游荡梦魇，然后进入附近发着橙色光芒的壁龛，获得狂暴冷血 (8)。一边处理更多的爬行者，一边紧贴墙壁，向左转找到一座小山，上面有另一个游荡梦魇。您现在可以捡起清澈深海符文 (Clear Deep Sea Rune)，然后潜行靠近巨型迷失之子进行内脏暴击。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 继续沿着左墙走，杀死绿色灯笼附近的另一个巨型迷失之子，从而彻底清除沼泽中的巨石威胁。然后看向沼泽，发现正前方的一个小岛上有一些爬行者，那里有冷血花蕾。您现在可以继续顺时针绕着沼泽边缘走，在狂人的知识之前找到另一个游荡梦魇。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 现在您需要先清理顶部区域，也就是帕奇把您推下去的地方，然后再继续穿越关卡。原路返回沼泽另一侧，穿过摇铃女所在的隧道，一直回到帕奇推下您的地方，终于拿到那个诱使您坠落的冷血花蕾。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入巨型迷失之子俯瞰沼泽的隧道，这次深入隧道，拿取顺时针变形符文 (Clockwise Metamorphosis Rune)，但不要跳下去。原路返回外面并右转继续上山，拿取采血瓶 x2 和一个游荡梦魇，然后小心地通过翻滚从右侧壁架跳下，这似乎有助于绕过那个把您推离悬崖的麻烦岩石。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 沿着小路走到狂人的知识处，俯瞰有爬行者的区域，然后跳下去杀死它们获得狂暴冷血 (9)。务必走该区域另一侧的隧道，那里通向令人惊艳的深海符文 (Stunning Deep Sea) 以及巨型迷失之子附近的另一个下落点。您现在可以回到沼泽，前往当前位置正对面的绿色灯笼继续前进。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 当您从隧道另一侧出来时，从掩体后向右看，发现另一个狂暴大脑。由于距离较远，杀死这个敌人可能很困难，但如果您等待，它会向您走来，然后转身向另一个方向走去。您可以慢慢跟着它，在最后一秒冲进去杀死它......只需记住在击倒它后吃一颗镇静剂。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 继续往下走到下一个区域，转身沿着一个小壁架走，找到一个大型游荡梦魇和狂暴冷血 (8)。原路返回在洞口附近找到狂人的知识，但不要跳下去。然后转身跳下走道，进入一个空旷的区域，那里有另一个游荡梦魇。您现在可以走左边的小壁架拿到铅之灵药 x3，然后继续前往另一个沼泽区域，杀死左侧墓碑上的另一个游荡梦魇。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这个毒沼泽中心有一个岛屿，但为了到达那里并获得狂暴冷血 (9)，您需要从顶部壁架跳到岛上。您现在可以跳进沼泽，检查您跳跃处下方附近的一个壁龛，拿到勇敢猎人的印记 x3，然后继续绕行，找到更多守卫着大型游荡梦魇的爬行者。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 您不要返回陆地，而是探索这个区域后方的沼泽隧道，所以沿着左墙走拿到狂人的知识，然后穿过到另一边。这里有一个小壁龛，里面有一个狂暴大脑，它没有守卫任何东西，但您最好现在就把它解决掉，免得它从背后偷袭您。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 狂暴大脑壁龛正对面是一个狂暴冷血 (9)，沼泽更深处还有另一个分岔口：左边通向伟大深海符文 (Great Deep Sea Rune)，右边通向眷属冷血 (10)。您现在可以原路返回沼泽的主要部分，利用墓碑返回陆地，在那里您会找到一个狂人的知识。


               </p>
               <p className="text-[#a3a3a3] mb-8">
                 忽略通向Boss拱门的路径，而是穿过附近翻倒的墓碑拿取采血瓶 x3。您现在可以爬上山，杀死罗伦城银兽，小心地激活通往关卡开头的电梯。


               </p>
               <h3 id="section-amygdalas-chamber" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 亚米达拉的巢穴 (Amygdala's Chamber)
               </h3>
               
               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：亚米达拉</span>
                 <a href="#boss-amygdala" onClick={(e) => scrollToSection(e, 'boss-amygdala')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-lecture-building-2f" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 教学大楼2楼 (Lecture Building 2F)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 要到达教学大楼2楼，您需要前往降临广场（您击败重生古神祇的地方），并检查附近建筑上的木乃伊以传送到教学大楼。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入提灯对面的圆形房间拿取镇静剂 x6，然后穿回建筑的提灯一侧，沿着大厅走，解决多个学者。您左边的大房间可以俯瞰演讲厅（所有学者都坐在那里），但这一侧的房间里只有一条传说笔记。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 继续走到建筑的另一侧，您会遇到一个长着火焰拳头的教会巨人，然后爬下梯子进入带有蜘蛛帕奇 (Patches the Spider) 的房间获得 2 点灵视。如果您之前在噩梦边境让帕奇把您推下壁架，您可以多次与帕奇交谈以获得“求饶”动作和逆时针变形符文（前提是您选择“完全没有”），并且他现在将在圣杯地牢中作为商人出现。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 沿着阳台回到楼上，杀死学者们，在尽头拿到血石块，然后往回朝梯子走。打开附近演讲厅的门，穿过阳台到另一边，您可以打开一个装有圣餐符文 (Communion Rune) 的宝箱。现在您可以通过建筑这一侧发光的门离开2楼，进入曼西斯梦魇 (Nightmare of Mensis)。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 曼西斯梦魇的提灯实际上在洞穴外，在一个有罗伦城银兽和游荡梦魇的山丘上，经过一个狂暴冷血 (9) 后，从窗户透出的光线会导致狂暴缓慢积聚。


               </p>
               <h3 id="section-upper-cathedral-ward" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 大教堂区上层 (Upper Cathedral Ward)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 要到达大教堂区上层，您需要通过欧顿礼拜堂前往治愈教会工厂的顶部。使用从未见之村亚哈古尔获得的钥匙打开双开门，并杀死楼梯上的神圣使者幼体 (Celestial Child)。

               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 神圣使者幼体 (Celestial Child)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   非常虚弱并且通常背对着您，一次完全蓄力的攻击应该能迅速耗尽它们的生命值。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：狂人的知识
                 </div>
               </div>
               <p className="text-[#a3a3a3] mb-6">
                 走上附近的台阶到一个关闭的门前拿取蓝色灵药 (Blue Elixir)，然后转身穿过有两名教会仆从和更多神圣使者幼体的桥，但要小心，因为这些教会仆从比您在大教堂区遇到的要强一些。您现在可以点亮提灯，继续上台阶，然后向右转杀死更多在您和伟大湖泊符文 (Great Lake Rune) 之间的神圣使者幼体。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这次走相反的路，杀死更多的幼体，然后忽略楼梯，找到一些守卫着狂暴冷血 (9) 的食腐乌鸦。您现在可以走上台阶杀死另一个拿着镰刀的教会仆从并进入教堂。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 小心走到悬停在合唱团套装 (Choir Set) 上的吸脑怪身后，然后在门口向右转拿取狂人的知识，但在您走开时要小心，因为一只天灾兽会破窗而入。这些高级天灾兽攻击力很强，但似乎总是生成在可以用来阻挡它们并让您安全攻击的门口附近。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 从门口向左走到另一扇门，然后走下大楼梯触发吊灯掉落，这会释放另外三只天灾兽，您可以在最近打开的门口旁与它们战斗。清理完毕后，再次走下楼梯，右转进入一个带有吸脑怪的小走廊。您要等到吸脑怪背对着您走开时再攻击他，因为它们现在可以施放魔法束缚您，然后在走廊中途的一具尸体上拿取宇宙之眼守护者徽章 (Cosmic Eye Watcher Badge)。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 从走廊的另一边出去，紧贴右墙走到一个目前还无法打开的门口，拿取仪式之血 (5) x3，然后沿着教堂的另一侧走，那里有另一只天灾兽。您现在可以进入房间这一侧的小走廊，继续沿着大厅走杀死一个游荡梦魇，但要小心走廊尽头带有梯子的小房间里的吸脑怪。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 爬上二楼并转身，从长长的大厅引诱另一个吸脑怪到您的门口，以避开他的束缚法术。在解锁大厅尽头的门之前，一定要拿取蓝色灵药、蒙眼帽 (Blindfold Cap)、狂人的知识 x2 和珍珠鼻涕虫 (Pearl Slug) x2，然后原路返回带有梯子的房间。您现在可以从房间的另一侧出去，小心地将两个吸脑怪引诱到安全的地方（如门口）杀死它们并获得孤儿院钥匙 (Orphanage Key)。

               </p>
               <p className="text-[#a3a3a3] mb-8">
                 务必解锁对面的门（就是天灾兽破窗而入的地方），并检查双开门内的雕像以获得“取得联系”动作。您现在可以回到楼下解锁另一组双开门，通向一个狂暴冷血 (9) 和提灯附近的门，您可以使用设备打开它。


               </p>
               <h3 id="section-lumenflower-gardens" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 明花花园 (Lumenflower Gardens)
               </h3>
               
               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：神圣使者</span>
                 <a href="#boss-celestial-emissary" onClick={(e) => scrollToSection(e, 'boss-celestial-emissary')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-altar-of-despair" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 绝望祭坛 (Altar of Despair)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 要到达绝望祭坛，您需要打破明花花园提灯后面的玻璃窗，跳到大教堂的上层。从这里您需要击败一个神圣使者幼体，收集“远方的召唤” (A Call Beyond) 物品，并再杀死两个小型神圣使者以到达电梯。

               </p>
               <p className="text-[#a3a3a3] mb-8">
                 有传言说有一个 Bug 会导致通往这个 Boss 的电梯卡在下方，所以我建议您总是把它送回顶部，直到您解锁了绝望祭坛的提灯。

               
               </p>
               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：宇宙之女伊碧塔丝</span>
                 <a href="#boss-ebrietas-daughter-of-the-cosmos" onClick={(e) => scrollToSection(e, 'boss-ebrietas-daughter-of-the-cosmos')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-npc-quests-7" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务，第七部分 (NPC Quests, Part 7)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 现在您已进入绝望祭坛，如果您之前没有拿取<strong>女王的血肉 (Queenly Flesh)</strong>，您可以返回血族女王的房间 (Vileblood Queen's Chambers) 拾取。把它带到绝望祭坛并与其互动，即可复活血族女王安娜丽丝 (Annalise, Queen of the Vilebloods)。


               </p>
               <h3 id="section-nightmare-of-mensis-1" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 曼西斯梦魇，第一部分 (Nightmare of Mensis, Part 1)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 如果您在联网游玩，在这个区域中，在杀死摇铃女 (Bell Ringer) 之前，您随时可能被入侵。如果您离线游玩，摇铃女就不会生成，您也完全不必处理这个机制。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 正如您在第一次来时可能注意到的那样，只要您在中央塔楼的视线范围内，就会有“某种东西”造成伤害并导致狂暴 (Frenzy) 积聚。为了避免这种情况，您需要利用岩层来阻挡视线，让狂暴条消退足够多后再继续前进，幸运的是您很快就会离开塔楼的注视范围。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 首先移动到下一个岩层，等待罗伦城银兽 (Loran Silverbeast) 跑过来并小心地将其解决，如果您没有用内脏暴击击败它，还要处理留下的寄生虫幼体 (Parasite Larva)。移动到下一道岩墙，就在地上物品的右侧，引出另一只银兽，在它死后迅速拾取<strong>采血瓶 x8</strong>。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 有两条路可走：右边是死胡同，有一些物品和一个提灯；左边则是继续深入城堡。先向右走，迅速冲过缝隙尽量避免狂暴，然后对守卫<strong>眼睛 (Eye)</strong>符文的巨型迷失之子 (Giant Lost Children) 进行内脏暴击。现在您可以杀死那个落单的巨型迷失之子，并激活该区域的第二个提灯，一旦您开启了捷径，这个提灯会非常有用。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 原路返回走另一条路，穿过桥，杀死另一只银兽，终于脱离了狂暴条的视线。务必从附近的尸体上捡起<strong>狂暴冷血 (9)</strong>，然后继续上山。这个区域有许多巨型迷失之子，所以要小心巨石，并在第二个巨人身后找到一个<strong>血石块 (Blood Stone Chunk)</strong>。现在您可以解决最后两个巨人，在建筑入口的最左侧检查以获取另一个<strong>血石块</strong>，然后进入双开门。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 进入建筑后，您需要向右走上一小段楼梯，在阳台上杀死摇铃女 (Bell Ringer) 并获得<strong>眷属冷血 (10)</strong>，在拿到<strong>狂人的知识</strong>之前，一定要攻击挂在天花板上的梦魇使徒 (Nightmare Apostle)。
               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 梦魇使徒 (Nightmare Apostle)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   类似于您在罗姆 (Rom) Boss 战中打过的蜘蛛，虽然它们不会跳跃也没有坚硬的头部，但这些敌人通常成群结队出现，能很快将您杀死。后退将它们聚在一起，用大范围武器砍一两下，然后在每攻击几下后向后跳跃，以防被包围。
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：水银子弹 x2
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 右边的走道上没有任何东西，但会有两只梦魇使徒掉下来，您可以先在这里解决它们，以限制您马上要对付的数量。一旦您接近房间的主要部分，大量梦魇使徒会从天花板上掉下来，包括一个大型版本。后退到建筑的入口处，让它们通过门口排队过来，同时把大型的那只卡在里面，然后逐一消灭。一旦只剩下大型梦魇使徒，您应该就能毫不费力地清理房间并在祭坛附近拿到<strong>萨满骨刃 x6</strong>。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 从右边的拱门出去，遇到另一个猎人 NPC，他带着路德维希圣剑 (Ludwig's Blade) 和迷迭香 (Rosmarinus)。虽然他速度极快，且迷迭香造成的伤害很高，但他使用路德维希圣剑的攻击极慢，很容易用您的火器进行枪反。当他使用迷迭香时后退躲避，等他拔出圣剑后再上前战斗。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 在下一栋建筑里，检查左侧阳台获取<strong>黄色脊骨 (Yellow Backbone) x2</strong>，然后下楼杀死梅高的侍从 (Mergo's Attendants) 并在捷径附近收集<strong>狂暴冷血 (9)</strong>。
               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 梅高的侍从 (Mergo's Attendant)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   这些敌人有三个版本：没有攻击性的徒手版本、弩版本和手持连枷的版本。徒手版本很容易对付，但弩版本射出的弩箭具有惊人的追踪能力，并且可以击晕您，应该优先解决。
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血宝石 (Blood Gemstones)
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 进入下一个房间，检查右侧屏风后面获取<strong>兽化药丸 (Beast Blood Pellet)</strong>。这次走向房间的另一侧，忽略楼梯，拿取<strong>蓝色灵药 x2</strong>，然后下楼。小心梅高的首席侍从 (Mergo's Chief Attendant)，他会造成急毒积聚且非常强大，然后在附近拿取<strong>狂人的知识</strong>。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 继续绕过地板上的缺口到对面，有三个弓箭手梅高侍从和一个梅高首席侍从。通过从最右角的盲区靠近来集中精力消灭弓箭手，然后在解决首席侍从之后，到电梯左侧柱子后面拾取<strong>铅之灵药 x2</strong>，并乘坐电梯上去。
               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 梅高的首席侍从 (Mergo's Chief Attendant)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   这些家伙的攻击会导致急毒 (Rapid Poison) 积聚，这意味着被击中可能是致命的，而不仅仅是因为纯粹的伤害。如果您能在他们缓慢的攻击之后绕到他们背后使用蓄力攻击，您可以轻松地对他们进行内脏暴击来结束战斗。
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血宝石 (Blood Gemstones)
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 继续走到外面，找到一些新敌人：长着狂犬头的食腐乌鸦和长着食腐乌鸦头的狂犬，但它们与正常版本没有任何不同。走上楼梯并转身，发现一个<strong>锻炼受潮血宝石 (5)</strong>和一只挂在笼子里的食腐乌鸦，您可以翻滚进去，然后落到楼梯上。现在您可以走另一边的楼梯下去杀死两只狂犬，并捡起<strong>眷属冷血 (10)</strong>和<strong>血石块</strong>。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到楼梯上向左转激活另一个捷径，通向之前电梯旁边的地方，然后返回并走楼梯。现在您可以穿过大型金属桥，经过骷髅木偶 (Skeletal Puppets) 去找密寇拉什 (Micolash)。
               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 骷髅木偶 (Skeletal Puppet)
                 </h4>
                 <p className="text-red-700 text-sm m-0">
                   像牵线木偶一样，这些敌人从一边滑行到另一边，对您造成相当大的伤害，它们难以捉摸的行为让人很难判断它们要去哪里。
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：无
                 </div>
               </div>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：噩梦之主密寇拉什</span>
                 <a href="#boss-micolash-host-of-nightmares" onClick={(e) => scrollToSection(e, 'boss-micolash-host-of-nightmares')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               {/* Boss 攻略集 */}
               <h2 id="section-boss-guides" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  💀 Boss 攻略集 (Boss Guides)
               </h2>
               <p className="text-[#a3a3a3] mb-8">这是《血源诅咒》本体及 DLC 中所有 Boss 的详细攻略汇总。您可以直接在流程中点击跳转，或在此处集中查阅。</p>
               <div className="space-y-12">
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-cleric-beast" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 神职人员野兽 (Cleric Beast)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第一阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       神职人员野兽并不是很难，但如果你锁定他，他庞大的体型和高度会让你很难绕过他。攻击Boss的左臂，同时尽量保持在Boss身后，不过这有点困难，因为他喜欢向后退到桥边。根据需要进退，你最终可以造成足够的伤害，使Boss倒地，从而允许你进行内脏暴击（visceral attack）。如果你专注于攻击他的某个肢体并对其造成伤害，你可以再次攻击它以获得额外伤害，但要注意他修复肢体时身上散发的红色光环。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第二阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当神职人员野兽的生命值低于70%时，他会咆哮进入第二阶段，变得更具攻击性且速度更快。他的攻击会变得更强，并执行更长的连击，但在其他方面，你可以使用与之前相同的策略。
                     </p>
</div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">神职人员野兽的攻击列表：</strong>
                     <div className="overflow-x-auto">
                       <table className="w-full text-left border-collapse bg-[#0d0d0d]/50 rounded-lg overflow-hidden">
                         <thead className="bg-[#8a0303]/30 text-[#d4d4d4] text-sm">
                           <tr>
                             <th className="px-4 py-2 font-bold">攻击招式</th>
                             <th className="px-4 py-2 font-bold w-20">距离</th>
                             <th className="px-4 py-2 font-bold">描述</th>
                           </tr>
                         </thead>
                         <tbody className="divide-y divide-red-100 text-sm">
                           <tr><td colSpan="3" className="px-4 py-2 font-bold bg-[#8a0303]/10 text-[#d4d4d4]">第一阶段</td></tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">手臂横扫 (Arm Swipes)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">水平横扫，造成的伤害极小</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">一二重击 (One-Two Slam)</td>
                             <td className="px-4 py-2">中</td>
                             <td className="px-4 py-2">先后用两只拳头砸向地面，造成中等伤害</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">单臂抓取 (One-Armed Grab)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">很少使用，前摇较慢，造成大量伤害</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">过顶重击连招 (Overhead Slam Combo)</td>
                             <td className="px-4 py-2">中</td>
                             <td className="px-4 py-2">三连击，每次击中造成中等伤害</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">突进横扫 (Lunging Swipe)</td>
                             <td className="px-4 py-2">长</td>
                             <td className="px-4 py-2">向前突进，随后进行强力的水平横扫攻击</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">恢复 (Recovery)</td>
                             <td className="px-4 py-2">-</td>
                             <td className="px-4 py-2">将自己包裹在红色光环中，恢复受损的肢体</td>
                           </tr>
                           <tr><td colSpan="3" className="px-4 py-2 font-bold bg-[#8a0303]/10 text-[#d4d4d4]">第二阶段</td></tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">双臂抓取 (Two-Armed Grab)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">单臂抓取的强化版</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">双重重击连招 (Double Slam Combo)</td>
                             <td className="px-4 py-2">中</td>
                             <td className="px-4 py-2">过顶重击连招的强化版</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">缓慢过顶砸击 (Slow Overhead Smash)</td>
                             <td className="px-4 py-2">中</td>
                             <td className="px-4 py-2">造成大量伤害的地面砸击，有延迟以打乱你的闪避时机</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">跳跃攻击 (Jump Attack)</td>
                             <td className="px-4 py-2">长</td>
                             <td className="px-4 py-2">跳到空中进行造成大量伤害的砸击攻击</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：4,000 血之回响 和 剑之猎人徽章 (Sword Hunter Badge)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-father-gascoigne" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 神父加斯科因 (Father Gascoigne)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第1和第2阶段 (Phase 1 & 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       还记得你从寻找母亲的小女孩那里得到的小音乐盒吗？现在是把它装备到快捷物品栏的好时机，因为每次你使用它时，神父加斯科因都会抱住头，为你提供一个完全蓄力攻击的机会。在音乐盒的负面效果生效期间，你需要保持距离以躲避他的猎人斧和火枪。用小音乐盒将他击晕三次后，无论你造成了多少伤害，神父加斯科因都会变成一只可怕的野兽。虽然小音乐盒在他变成野兽形态后第一次使用时仍然有效，但之后就会变得毫无用处，所以一定要抓住最后一次完全蓄力攻击的机会。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第3阶段 (Phase 3)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       有几种策略可以应对野兽形态的神父加斯科因：第一种策略是利用墓碑来躲避他的攻击，投掷油瓮然后扔燃烧瓶造成巨大伤害。另一种策略是利用他激进的攻击风格，用你的枪打断他使其硬直，然后进行内脏暴击。因为投掷物品很容易被他快速的移动躲开，而且你可能会发现自己扔完了也没打中，所以我将重点介绍打断硬直策略。
      
                     </p>
                     <p className="mt-2 text-sm leading-relaxed">
                       你要做的第一件事是跑上楼梯并稍微后退一点，这样在神父加斯科因攻击时你就能有一个清晰的射击角度。等他攻击，最容易反击的是他的猛扑攻击，然后开枪打断他使其硬直，紧接着进行内脏暴击。如果你发现自己处于危险之中或空间不足，跑向区域后方并跳到房子上治疗，然后再跑回楼梯（只要确保在他跳下来之前你不要背对着跳落点）。重复这个模式，你很快就能击败神父加斯科因。
                     </p>
</div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">神父加斯科因野兽形态攻击列表：</strong>
                     <div className="overflow-x-auto">
                       <table className="w-full text-left border-collapse bg-[#0d0d0d]/50 rounded-lg overflow-hidden">
                         <thead className="bg-[#8a0303]/30 text-[#d4d4d4] text-sm">
                           <tr>
                             <th className="px-4 py-2 font-bold">攻击招式</th>
                             <th className="px-4 py-2 font-bold w-20">距离</th>
                             <th className="px-4 py-2 font-bold">描述</th>
                           </tr>
                         </thead>
                         <tbody className="divide-y divide-red-100 text-sm">
                           <tr><td colSpan="3" className="px-4 py-2 font-bold bg-[#8a0303]/10 text-[#d4d4d4]">第3阶段</td></tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">爪击连段 (Claw Combo)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">快速连续攻击，很难反击，因为他的头会转开</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">向下猛砸 (Downward Slam)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">双手向下猛砸，这个攻击很容易反击</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">跳跃攻击 (Jump Attack)</td>
                             <td className="px-4 py-2">中</td>
                             <td className="px-4 py-2">向前猛扑并挥砍，这个攻击是最容易反击的</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">空中俯冲 (Aerial Dive)</td>
                             <td className="px-4 py-2">长</td>
                             <td className="px-4 py-2">跳入空中 - 向着他翻滚以躲避</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-vicar-amelia" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 代理人阿梅利亚 (Vicar Amelia)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     代理人阿梅利亚是一个体型庞大但速度缓慢的 Boss，一旦您知道她在做什么，她那前摇很长的动作很容易躲避。事实上，这个 Boss 总体来说相当简单，您的目标只是躲避她的攻击，并瞄准她的后腿或头部（只要她把头降得足够低让您可以锁定）。
    
                   </p>
                   <div>
                     <strong className="text-[#d4d4d4]">第1阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       战斗开始时，躲避她的攻击，在她完成连击时爆头，或者引诱她使用跳跃猛砸，这让您在躲避攻击后可以自由攻击她的右后腿。当她祈祷时要小心她的斧柄猛砸，并继续攻击她的腿和头部，最终使她硬直，让您能够进行内脏暴击。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第2阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当阿梅利亚的生命值降至 50% 时，她将开始使用更强版本的攻击，并增加两样东西。第一种是她疯狂的发脾气攻击，如果您被卷入其中会造成巨大伤害；另一种是她的恢复祈祷。当她准备恢复时，她经常会跳开您并用后腿站立，所以要么冲进去用麻痹雾抵消恢复，要么如果您有一把快速的武器，就直接砍她，造成的伤害几乎和她恢复的一样多。
                     </p>
</div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">代理人阿梅利亚攻击列表：</strong>
                     <div className="overflow-x-auto">
                       <table className="w-full text-left border-collapse bg-[#0d0d0d]/50 rounded-lg overflow-hidden">
                         <thead className="bg-[#8a0303]/30 text-[#d4d4d4] text-sm">
                           <tr>
                             <th className="px-4 py-2 font-bold">攻击招式</th>
                             <th className="px-4 py-2 font-bold w-20">距离</th>
                             <th className="px-4 py-2 font-bold">描述</th>
                           </tr>
                         </thead>
                         <tbody className="divide-y divide-red-100 text-sm">
                           <tr><td colSpan="3" className="px-4 py-2 font-bold bg-[#8a0303]/10 text-[#d4d4d4]">第1阶段</td></tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">手臂横扫 (Arm Swipes)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">任一手臂的水平攻击，造成的伤害极小</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">爪击 (Claw Slash)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">从前向后的垂直地面爪击，造成的伤害极小</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">跳跃猛砸 (Jumping Slam)</td>
                             <td className="px-4 py-2">长</td>
                             <td className="px-4 py-2">向前跳跃并用右臂猛砸，向右侧步很容易躲避</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">斧柄猛砸 (Axe-Handle Smash)</td>
                             <td className="px-4 py-2">长</td>
                             <td className="px-4 py-2">用后腿站立祈祷并向前倒下，造成向前飞出的巨大锥形范围伤害</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">交叉横扫 (Cross Sweep)</td>
                             <td className="px-4 py-2">中</td>
                             <td className="px-4 py-2">双臂向两侧张开，并在身前进行 180 度的钳击</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">啃咬抓取 (Gnashing Grab)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">用右手抓住您，造成大量伤害</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">上勾横扫 (Uppercut Sweep)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">120 度弧形的水平攻击，将您击飞到空中，造成中等伤害</td>
                           </tr>
                           <tr><td colSpan="3" className="px-4 py-2 font-bold bg-[#8a0303]/10 text-[#d4d4d4]">第2阶段</td></tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">发脾气连击 (Tantrum Combo)</td>
                             <td className="px-4 py-2">中</td>
                             <td className="px-4 py-2">处于疯狂愤怒状态，在身前连续猛砸和挥砍</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">恢复 (Recovery)</td>
                             <td className="px-4 py-2">-</td>
                             <td className="px-4 py-2">双手合十祈祷以治愈自己，可以用麻痹雾打断</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：15,000 血之回响 和 金色吊坠 (Gold Pendant)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-blood-starved-beast" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 渴血神兽 (Blood-starved Beast)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <div>
                     <p className="mt-1 text-sm leading-relaxed">
                       在这场战斗之前，你应该将解毒药装备到快捷栏中，因为这个Boss在后期会使用导致中毒积累的攻击。就像《血源诅咒》中的许多Boss一样，渴血神兽弱火，所以如果你有升级过的火焰喷射器，配合油壶和骨髓灰，你可以对它造成巨大伤害。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第1阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       在第1阶段，渴血神兽的攻击有明显的前摇，这使得用枪反击并进行内脏暴击变得容易。与Boss保持中等距离，等待它发起慢速连击（通过举起右臂来指示），然后用枪反击进行内脏暴击。如果你发现自己生命值较低，可以利用环境中的柱子来阻挡它并快速恢复生命。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第2和第3阶段 (Phase 2 & 3)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当渴血神兽生命值降至50%时，它将进入第2阶段，速度和敏捷性大增，变得更加致命。虽然它的攻击现在也能导致中毒积累，但它仍然使用相同的主要攻击方式，这意味着你可以更加谨慎地使用相同的策略，并准备在反击失败时闪避。很快你就会将Boss的生命值降至25%以内并进入第3阶段，此时它会变得狂暴。在这一点上，至关重要的是利用环境来治疗或解毒并躲避它的攻击，当它攻击落空并背对你时，抓住机会砍击它。
                     </p>
</div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">渴血神兽攻击列表：</strong>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                       <div className="bg-[#0d0d0d]/50 p-3 rounded">
                         <strong className="block text-[#d4d4d4] mb-1">第1阶段</strong>
                         <ul className="list-disc list-inside space-y-1">
                           <li><span className="font-semibold">慢速连击 (Medium):</span> 缓慢地将右臂举过头顶，这是反击它的最佳攻击</li>
                           <li><span className="font-semibold">快速连击 (Medium):</span> 快速开始的连续三次击打，造成严重伤害</li>
                           <li><span className="font-semibold">猛扑斩击 (Long):</span> 将右臂向一侧挥出，然后向前冲刺斩击</li>
                         </ul>
                       </div>
                       <div className="bg-[#0d0d0d]/50 p-3 rounded">
                         <strong className="block text-[#d4d4d4] mb-1">第2阶段</strong>
                         <ul className="list-disc list-inside space-y-1">
                           <li><span className="font-semibold">毒性抓取 (Medium):</span> 用后腿直立起来并向你猛扑进行有毒的撕咬</li>
                           <li><span className="font-semibold">狂暴连击 (Medium):</span> 连续五次击打，造成严重伤害</li>
                         </ul>
                       </div>
                       <div className="bg-[#0d0d0d]/50 p-3 rounded md:col-span-2">
                         <strong className="block text-[#d4d4d4] mb-1">第3阶段</strong>
                         <ul className="list-disc list-inside space-y-1">
                           <li><span className="font-semibold">毒气爆发 (Medium):</span> 产生一团毒云，造成伤害并积累中毒值</li>
                           <li><span className="font-semibold">跳跃连击 (Medium):</span> 向前跳跃进行两次快速斩击，造成中等伤害</li>
                         </ul>
                       </div>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 text-sm font-medium">
                     掉落：6,600 血之回响和苏美鲁圣杯 (Pthumeru Chalice)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-shadow-of-yharnam" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 雅南暗影 (Shadow of Yharnam)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <div>
                     <p className="mt-1 text-sm leading-relaxed">
                       雅南暗影Boss战实际上是由三个敌人组成，每个敌人都有自己的武器和攻击方式：
      
                     </p>
                     <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                       <li>一个手持武士刀的版本，会不断向你冲来，攻击速度快</li>
                       <li>一个手持弯刀的版本，手里还拿着一根蜡烛，他会像火焰喷射器一样使用它</li>
                       <li>一个手持权杖的施法者，会四处走动并施放具有追踪效果的火球</li>
                     </ul>
                     <p className="mt-2 text-sm leading-relaxed">
                       这场战斗的诀窍是尽量平均地对这三个敌人造成伤害，同时还要努力不被从三个不同方向袭来的伤害杀死。为什么呢？尽管他们每个人都有独立的血条，但他们实际上共享一种蜂巢思维。这意味着当其中一个的血量降至30%以下，或者所有的血量都降至50%以下时，他们都会变身并获得额外的攻击方式。同样地，当只剩下一个敌人，或者他们的血量都降至25%以下时，他们会开始召唤能轻易将你杀死的巨大毒蛇。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第1阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       在第一阶段，最好的策略是不断保持移动，将两个会跑动的暗影从施放火球的施法者身边引开，这样你就可以冲过他们，对施法者进行几次攻击。当你感觉他们的血量降到了50%左右时，开始利用区域中间的巨大墓碑作为掩体来躲避火球，同时使用枪械对拿武士刀的暗影进行枪反/内脏暴击。保持这个节奏，直到将他的血量降至30%，导致其他暗影停下来准备变身，此时你要全力输出他，试图将他终结以避免他进入第二阶段。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第2和第3阶段 (Phase 2 & 3)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       只剩下两个暗影后，你需要集中精力降低拿弯刀的暗影的生命值，特别是如果你在第一阶段根本没有打到他的话。将他和他的同伴的血量降到30%左右，然后祈祷好运，因为接下来就会变得非常危险。一旦你将其中一个的血量降到25%以下，你需要迅速杀掉他，以避免面对两个能够召唤巨大毒蛇的暗影。我建议先杀死施法者，因为他似乎比拿弯刀的那个召唤得更频繁，然后冲向另一个暗影，希望能完全避开第三阶段的巨大毒蛇。
      
                     </p>
                     <p className="mt-2 text-sm leading-relaxed">
                       如果他们确实开始召唤（表现为他们跪下时发出粉红色的光芒），请迅速逃离你当前所在的位置，因为毒蛇似乎只会在你大致所在的区域生成，而不是在整个竞技场。
                     </p>
</div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 text-sm font-medium">
                     掉落：18,600 血之回响 和 血液沉醉符文 (Blood Rapture Rune)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-rom-the-vacuous-spider" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 愚钝蜘蛛罗姆 (Rom, the Vacuous Spider)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <div>
                     <p className="mt-1 text-sm leading-relaxed">
                       罗姆本身是一个非常没有威胁的敌人，但在战斗的大部分时间里，你将应对她那些危险且成群结队出现的孩子们。我建议你升级并装备在未见之村亚哈古尔 (Hypogean Gaol) 找到的雷霆 (Tonitrus) 武器，因为罗姆对雷电伤害很弱，并瞄准她的侧面而不是她坚硬的头部。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第1阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       战斗开始时，罗姆会处于被动状态，只会坐在那里直到你攻击，但一旦你攻击，她就会召唤一群小蜘蛛。由于罗姆在第一阶段非常被动，你可以先专注于消灭小蜘蛛，从侧面或后面攻击它们，但要小心它们的跳跃攻击，如果你不是满血，这很容易杀死你。一旦她所有的孩子都死了，你可以用 L1 点亮雷霆，并在她的侧面猛攻，直到她完全消失，因为她甚至在传送期间也会受到伤害，你甚至可以打断它。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第2和第3阶段 (Phase 2 & 3)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当罗姆传送时，她将进入第二阶段，周围有一群新的小蜘蛛，并且AI更具攻击性，会向你施放魔法。因为专注于小蜘蛛通常会导致被罗姆伤害，这意味着战斗持续的时间越长，你死亡的可能性就越大，所以最好把罗姆的孩子从她的身体周围引开，然后冲进去攻击罗姆的侧面，直到她再次传送（进入第三阶段）或死亡。
                     </p>
</div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">罗姆的攻击列表：</strong>
                     <div className="overflow-x-auto">
                       <table className="w-full text-left border-collapse bg-[#0d0d0d]/50 rounded-lg overflow-hidden">
                         <thead className="bg-[#8a0303]/30 text-[#d4d4d4] text-sm">
                           <tr>
                             <th className="px-4 py-2 font-bold">攻击招式</th>
                             <th className="px-4 py-2 font-bold w-20">距离</th>
                             <th className="px-4 py-2 font-bold">描述</th>
                           </tr>
                         </thead>
                         <tbody className="divide-y divide-red-100 text-sm">
                           <tr><td colSpan="3" className="px-4 py-2 font-bold bg-[#8a0303]/10 text-[#d4d4d4]">第2阶段</td></tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">魔法风暴 (Magic Blast)</td>
                             <td className="px-4 py-2">中等</td>
                             <td className="px-4 py-2">抬起尾巴并在自身周围释放造成重度伤害的冰风风暴</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">翻滚连击 (Thrash Combo)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">挥动头部和身体对周围造成中等伤害</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">陨石弹幕 (Meteor Barrage)</td>
                             <td className="px-4 py-2">长</td>
                             <td className="px-4 py-2">抬起头并召唤造成重度伤害的冰柱从天而降</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">上升陨石 (Rising Meteors)</td>
                             <td className="px-4 py-2">长</td>
                             <td className="px-4 py-2">翻滚到背部蜷缩成一团，从水中召唤造成重度伤害的冰柱</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 text-sm font-medium">
                     掉落：22,600 血之回响 和 眷族冷血 (12) (Kin Coldblood (12))
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-the-witch-of-hemwick" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 汉威克女巫 (The Witch of Hemwick)
                 </h4>
                 <p className="text-red-800 text-sm mb-4 leading-relaxed">
                   当您进入汉威克女巫的 Boss 区域时，您可能会被误导以为狂人（Mad One）就是 Boss，但事实并非如此。Boss 会一直保持隐身，直到您杀死狂人或在区域内跑动时发现她。好消息是，狂人的移动速度相对较慢，只要您在区域内跑动并保持足够距离，就可以完全避开它，因此这是更好的策略。
  
                 </p>
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       首先在区域内跑动寻找汉威克女巫，一旦她出现，请务必迅速攻击她，因为她会在消失前在周围释放出巨大的粉色能量球来进行防御。继续这样做直到她死亡，此时会发现这只是真正汉威克女巫的分身，随后真正的血条才会出现。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       真正的女巫开始朝您的方向发射白色光球，这会束缚您，使您容易受到狂人的攻击，或者让她抓住您并挖出您的眼睛，以此来恢复生命值或复活分身。应对这个最简单的方法是找出白色光球的发射位置，并尝试从背后接近她，这样您就可以在她没看到您的情况下进行攻击。
                     </p>
</div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">汉威克女巫攻击列表：</strong>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto">
                       <table className="w-full text-sm text-left">
                         <thead>
                           <tr className="border-b border-red-200">
                             <th className="py-2 px-3">攻击名称</th>
                             <th className="py-2 px-3">距离</th>
                             <th className="py-2 px-3">描述</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">分身女巫 (Doppelganger Witch)</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-semibold text-red-800">黑暗波 (Dark Wave)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">在自身周围释放一个球形光环，造成高额伤害</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-semibold text-red-800">召唤 (Summon)</td>
                             <td className="py-2 px-3">-</td>
                             <td className="py-2 px-3">根据剩余生命值，在竞技场内召唤狂人</td>
                           </tr>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">汉威克女巫 (Witch of Hemwick)</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-semibold text-red-800">麻痹冲击波 (Paralysis Blast)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">发射白色光球，束缚您并使您容易受到其他攻击</td>
                           </tr>
                           <tr>
                             <td className="py-2 px-3 font-semibold text-red-800">挖眼 (Eye Gouge)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">仅在目标被麻痹时使用，造成高额伤害</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：11,800 血之回响 和 充血眼球 x4
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-darkbeast-paarl" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 黑兽帕尔 (Darkbeast Paarl)
                 </h4>
                 <p className="text-red-800 text-sm mb-4 leading-relaxed">
                   黑兽帕尔是一个基于闪电的 Boss，这意味着任何能够抵抗闪电伤害的装备，例如亨利克 (Henryk) 的盔甲套装，在这场战斗中都会很有帮助。帕尔的头部也非常脆弱，在战斗的大部分时间里，它会把头压得很低，并且比身体更突出，这意味着您应该将攻击集中在它的头部。
  
                 </p>
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       应对帕尔有两种方法：要么在它使用爆发连击后，趁它恢复时攻击它的头部；要么呆在它的身体下方，从下方攻击它的头部。只要您注意它的静电释放，并保持在安全距离或直接在它正下方，帕尔就会倒下，露出破绽让您进行内脏暴击，此时它的电流也会失效。请注意，一旦电流失效，帕尔会进行一些激进的挥击，然后后退重新为自己充电。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当帕尔的生命值降至 50% 时，它的攻击将获得前方静电释放效果，在它的攻击中会释放出一波闪电。此时，您必须呆在帕尔下方以避免受到攻击的额外伤害，但您仍然可以使用与之前相同的策略。
                     </p>
</div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">黑兽帕尔攻击列表：</strong>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto">
                       <table className="w-full text-sm text-left">
                         <thead>
                           <tr className="border-b border-red-200">
                             <th className="py-2 px-3">攻击名称</th>
                             <th className="py-2 px-3">距离</th>
                             <th className="py-2 px-3">描述</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 1 阶段</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">爆发连击 (Burst Combo)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">用爪子连续进行 2 到 4 次挥击，造成中等伤害</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">蓄力重拳 (Charge Punch)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">蓄力向下挥拳，释放出锥形电能，造成中等伤害</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">高空扑击 (Soaring Pounce)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">从远处向您跳跃并进行大范围横扫，可以通过向前翻滚来躲避</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">跳跃爆发斩 (Leaping Burst Slash)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">向下劈砍，制造出向前的电能冲击波</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">雷霆猛击 (Thunder Slam)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">重击地面造成中等伤害，随后释放电能</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">静电释放 (Static Discharge)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">蜷缩成一团并为全身充电，释放出造成巨大伤害的范围攻击</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">突进撕咬 (Lunging Bite)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">咬向正前方和右侧区域，造成中等伤害</td>
                           </tr>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 2 阶段</td>
                           </tr>
                           <tr>
                             <td className="py-2 px-3 font-medium">前方静电释放 (Forward Static Discharge)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">在每次连击结束时释放电能球</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：21,000 血之回响 和 火花猎人徽章 (Spark Hunter Badge)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-martyr-logarius" className="text-xl font-bold text-[#d4d4d4] mb-4 border-b border-red-200 pb-2">
                   💀 Boss: 烈士洛格力斯 (Martyr Logarius)
                 </h4>
                 <p className="text-[#a3a3a3] mb-4">
                   尽管洛格力斯拥有大量的近战和魔法攻击，你可能会认为这场战斗极其困难，但其实不然。事实是，洛格力斯的魔法攻击最危险，只要贴近他，迫使他使用近战攻击，就可以完全无视这些魔法。
  
                 </p>
                 <p className="text-[#a3a3a3] mb-4">
                   <strong>第一阶段</strong><br/>
                   战斗开始时冲向洛格力斯，通过翻滚或利用环境来避开他的追踪骷髅或骷髅球攻击，然后避开任何其他非近战攻击，直到他开始使用近战攻击。贴近他，使用枪械打断洛格力斯，可以在他长镰刀挥砍连招的高点，或者在他刺剑连招的任何时候，然后进行内脏暴击。
  
                 </p>
                 <p className="text-[#a3a3a3] mb-4">
                   在某些情况下，洛格力斯会在他左侧召唤一个骷髅，你可以向左侧步躲避；当他生命值较低时，他会开始使用空中俯冲。在这两种情况下，确保冲向洛格力斯以保持近距离，并阻止他使用其他第二阶段攻击。
  
                 
                 </p>
                 <div className="mb-6">
                   <strong className="text-[#d4d4d4] block mb-3">烈士洛格力斯的攻击列表：</strong>
                   <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse bg-[#0d0d0d]/50 rounded-lg overflow-hidden">
                       <thead className="bg-[#8a0303]/30 text-[#d4d4d4] text-sm">
                         <tr>
                           <th className="px-4 py-2 font-bold">攻击招式</th>
                           <th className="px-4 py-2 font-bold w-20">距离</th>
                           <th className="px-4 py-2 font-bold">描述</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-red-100 text-sm">
                         <tr><td colSpan="3" className="px-4 py-2 font-bold bg-[#8a0303]/10 text-[#d4d4d4]">第 1 阶段</td></tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">镰刀挥砍连招 (Scythe Slash Combo)</td>
                           <td className="px-4 py-2">中</td>
                           <td className="px-4 py-2">连续攻击，可以轻松用枪械打断</td>
                         </tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">刺剑挥砍连招 (Rapier Slash Combo)</td>
                           <td className="px-4 py-2">短</td>
                           <td className="px-4 py-2">连续攻击，可以轻松用枪械打断</td>
                         </tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">追踪骷髅 (Homing Skulls)</td>
                           <td className="px-4 py-2">长</td>
                           <td className="px-4 py-2">发射一排水平的追踪骷髅并爆炸</td>
                         </tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">骷髅球 (Skull Sphere)</td>
                           <td className="px-4 py-2">中</td>
                           <td className="px-4 py-2">蓄力一个旋转的骷髅球，然后慢慢追踪你</td>
                         </tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">爆炸骷髅球 (Exploding Skull Sphere)</td>
                           <td className="px-4 py-2">长</td>
                           <td className="px-4 py-2">与上面相同，但射程更远，接触时爆炸</td>
                         </tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">骷髅冲击 (Skull Blast)</td>
                           <td className="px-4 py-2">短</td>
                           <td className="px-4 py-2">向后跳，在他左侧召唤一个骷髅，几乎瞬间爆炸</td>
                         </tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">延迟骷髅冲击 (Delayed Skull Blast)</td>
                           <td className="px-4 py-2">短</td>
                           <td className="px-4 py-2">与上面相同，但会停留一秒钟</td>
                         </tr>
                         <tr><td colSpan="3" className="px-4 py-2 font-bold bg-[#8a0303]/10 text-[#d4d4d4]">第 2 阶段</td></tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">空中俯冲 (Aerial Dive)</td>
                           <td className="px-4 py-2">长</td>
                           <td className="px-4 py-2">在空中悬停然后猛砸向地面，确保朝他翻滚</td>
                         </tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">幻影剑 (Phantom Swords)</td>
                           <td className="px-4 py-2">中</td>
                           <td className="px-4 py-2">用剑刺穿地面，引起小规模爆炸，该区域会下剑雨</td>
                         </tr>
                         <tr>
                           <td className="px-4 py-2 font-medium">灵魂波 (Spirit Wave)</td>
                           <td className="px-4 py-2">中</td>
                           <td className="px-4 py-2">蓄力一个无法打断的巨大 AOE 攻击</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
                 
                 <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                   🎁 掉落：25,600 血之回响 和 幻影皇冠 (Crown of Illusion)
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-the-one-reborn" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2 border-b border-red-200 pb-2">
                   💀 Boss: 重生古神祇 (The One Reborn)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     重生古神祇可能是一个神，但它相当令人作呕，而且如果没有摇铃女的强化，它也非常虚弱。你需要开始战斗，跑到区域后方，走左边或右边的楼梯去杀死摇铃女 (x6)，然后你就可以把注意力集中在重生古神祇身上了。
                   </p>
                   <p className="mt-1 text-sm leading-relaxed">
                     你会注意到你可以瞄准这个 Boss 的三个位置：两端各一个，中间一个。这场战斗的诀窍是攻击任何靠近地面的那一端，或者在你等待某一端降下时，将你的刀刃砍向你能碰到的任何肢体。为了避免伤害，你需要打中几下然后后退，以躲避重生古神祇的大部分攻击，如果你保持移动，这些攻击大多很容易应对。小心酸液池 (Acid Pool)，它会覆盖整个竞技场地板，可以通过走上小台阶来躲避；还有它的邪恶爆炸 (Evil Explosion)，可以通过后退或跑到它身后躲避。
                   </p>
                   <p className="mt-1 text-sm leading-relaxed">
                     如果你在前后之间不断移动，根据需要攻击它的大腿，重生古神祇应该会蹒跚并倒在地上。这时你就可以攻击它的主要弱点：Boss 前方的骷髅身体。
                   </p>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">重生古神祇攻击列表：</strong>
                     <div className="overflow-x-auto">
                       <table className="w-full text-left border-collapse bg-[#0d0d0d]/50 rounded-lg overflow-hidden">
                         <thead className="bg-[#8a0303]/30 text-[#d4d4d4] text-sm">
                           <tr>
                             <th className="px-4 py-2 font-bold">攻击招式</th>
                             <th className="px-4 py-2 font-bold w-20">距离</th>
                             <th className="px-4 py-2 font-bold">描述</th>
                           </tr>
                         </thead>
                         <tbody className="divide-y divide-red-100 text-sm">
                           <tr><td colSpan="3" className="px-4 py-2 font-bold bg-[#8a0303]/10 text-[#d4d4d4]">第 1 阶段</td></tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">狂舞尸体 (Flailing Corpses)</td>
                             <td className="px-4 py-2">短</td>
                             <td className="px-4 py-2">挥舞身体的各个部分，如果你站在附近会造成伤害</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">尸体冲击波 (Corpse Blast)</td>
                             <td className="px-4 py-2">长</td>
                             <td className="px-4 py-2">发射一个造成中等伤害的抛射物，包括撞击时的溅射伤害</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">血肉之雨 (Raining Gore)</td>
                             <td className="px-4 py-2">中</td>
                             <td className="px-4 py-2">召唤一堆尸体从天而降，砸向你当前的位置</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">邪恶爆炸 (Evil Explosion)</td>
                             <td className="px-4 py-2">中</td>
                             <td className="px-4 py-2">蓄力一个造成大量伤害的大范围 AOE，骷髅身体周围发光作为提示</td>
                           </tr>
                           <tr>
                             <td className="px-4 py-2 font-medium">酸液池 (Acid Pool)</td>
                             <td className="px-4 py-2">长</td>
                             <td className="px-4 py-2">从后部吐出一池酸液，覆盖竞技场地板，造成大量伤害</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：33,000 血之回响 和 黄色脊骨 x3
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-amygdala" className="text-xl font-bold text-[#d4d4d4] mb-4 border-b border-red-200 pb-2">
                   💀 Boss: 亚米达拉 (Amygdala)
                 </h4>
                 <p className="text-red-800 text-sm mb-4 leading-relaxed">
                   作为一个 Boss，亚米达拉的生命值相对较低，但他的弥补之处在于只有头部和手臂是弱点。
  
                 </p>
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       这意味着您需要引诱亚米达拉使用挥击连招或酸液池，这两种攻击之后他都会将头部暴露在靠近地面的位置。您最好避免锁定他（除了快速定位之外），而是专注于绕着他转圈攻击他的手臂，或者站在他的大腿下方（但要避开他的脚）。很快您就会获得进行内脏暴击的机会，千万不要错过。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当亚米达拉的生命值降至 70% 时，他将进入第 2 阶段，变得更具攻击性，并使用威力大得多的过顶猛击。现在他的攻击会在周围释放能量爆炸，所以要小心他的拳击。
                     </p>
</div>

                   <div>
                     <strong className="text-[#d4d4d4]">第 3 阶段 (Phase 3)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当亚米达拉的生命值降至 30% 时，他将进入第 3 阶段，扯下一对额外的手臂作为武器。此时，您要尽量呆在他的身体下方，并在他跳跃时跟着他移动，以避开他拳击的范围。等待他释放另一套长连击，这会让他再次把头低向地面，趁机进行劈砍。只要您在他跳开时不断移动到他下方并保持健康的血量，您应该能相对轻松地结束这场战斗。
                     </p>
</div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">亚米达拉攻击列表：</strong>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto">
                       <table className="w-full text-sm text-left">
                         <thead>
                           <tr className="border-b border-red-200">
                             <th className="py-2 px-3">攻击名称</th>
                             <th className="py-2 px-3">距离</th>
                             <th className="py-2 px-3">描述</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 1 阶段</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">踩踏 (Stomp)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">踩踏您造成极小伤害，通常只有在您位于他脚下时才会发生</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">巨型跳跃 (Giant Leap)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">跳入空中以调整方向朝向您</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">酸液池 (Acid Pool)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">向您吐出酸液，在短时间内暴露头部让您攻击</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">精准激光 (Pinpoint Laser)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">在前方呈锥形方向发射多次爆发</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">直线激光 (Straight Laser)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">直线向前和向后发射激光，随后产生一系列爆炸</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">振荡激光 (Oscillating Laser)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">以之字形发射激光，随后产生一系列爆炸</td>
                           </tr>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 2 阶段</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">大型酸液池 (Large Acid Pool)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">向您吐出一大滩造成更多伤害的酸液</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">能量重拳 (Energy Punch)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">在手中凝聚能量球并将其猛砸向地面</td>
                           </tr>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 3 阶段</td>
                           </tr>
                           <tr>
                             <td className="py-2 px-3 font-medium">手臂大棒 (Arm Club)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">扯下自己的两只手臂并作为大棒使用，进行极长距离的攻击</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：21,000 血之回响 和 衰弱罗伦城圣杯 (Ailing Loran Chalice)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-celestial-emissary" className="text-xl font-bold text-[#d4d4d4] mb-4 border-b border-red-200 pb-2">
                   💀 Boss: 神圣使者 (Celestial Emissary)
                 </h4>
                 <p className="text-red-800 text-sm mb-4 leading-relaxed">
                   当您接近明花花园时，一群小型神圣使者会在区域中心生成。别担心，您不会遇到任何使用魔法的版本，如果您愿意，可以完全忽略这些小兵。
  
                 </p>
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       在战斗的第 1 阶段，神圣使者会试图混入他的盟友中，但他很容易区分，因为他从不奔跑。首先，跑开一段距离将大部队从使者身边引开，然后冲过他们集中攻击 Boss。您可以保持这种模式，如果普通敌人干扰了您的瞄准，就根据需要解决他们，在生命值降至大约 60% 时，使者会变成一个更大的版本。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       在第 2 阶段，使者相当具有攻击性，会使用一些基本的近战攻击，但由于他的速度很慢，仍然可以轻松躲避。通过将小兵引诱成一团并使用大范围攻击来迅速减少他们的数量，然后再集中精力对付 Boss。最安全的战斗位置是在 Boss 身后，可以轻松避开他的拍打和踩踏，但不要站着不动太久，否则会被他的小兵逼入死角。不用着急，等待攻击的机会，而不是被群殴。
                     </p>
</div>

                   <div>
                     <strong className="text-[#d4d4d4]">第 3 阶段 (Phase 3)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当使者的生命值降至 30% 以下时，他会长出触手并开始使用魔法。此时，只要他不是离得很远，您就要冲向他打出最后几下击杀他。如果需要的话，可以使用花园下半部分的柱子作为视线障碍来杀死较小的敌人，然后再冲向 Boss。
                     </p>
</div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：22,400 血之回响 和 圣餐符文 (Communion Rune)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-ebrietas-daughter-of-the-cosmos" className="text-xl font-bold text-[#d4d4d4] mb-4 border-b border-red-200 pb-2">
                   💀 Boss: 宇宙之女伊碧塔丝 (Ebrietas, Daughter of the Cosmos)
                 </h4>
                 <p className="text-red-800 text-sm mb-4 leading-relaxed">
                   这是《血源诅咒》中迄今为止最难对付的 Boss 之一，因为她的转向半径很小，而且她的攻击覆盖了前方大约 180 度的范围。她的弱点是她头部柔软红色的内部，由重叠的两半保护着，在某些攻击期间会暴露出来。
                 </p>
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       在第一阶段，您需要具有攻击性，在生命值满时持续输出伤害，然后根据需要后退治疗。您实际上可以进入伊碧塔丝分开的尾巴之间，但很多时候您会被推过她的身体，或者她会从您身边跳开。如果您冲向她的躯干并紧贴着她的两侧，您可以砍击她的身体，同时避开她的大部分攻击，通常能引诱她使用头部猛击，让您可以攻击她头部的弱点。如果她真的从您身边跳开，务必冲向她的两侧，因为离得太久会导致她使用向前冲锋攻击。
                     </p>
                   </div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当伊碧塔丝的生命值降至 50% 时，她会低下头开始使用宇宙辐射能力。这个时候要直接冲进去，倾尽全力攻击她的头部，希望能让她蹒跚，从而让您进行内脏暴击，并阻止她完全进入第 2 阶段。在执行内脏暴击后继续攻击，直到她死亡或启动第 2 阶段（如果这样的话您将会有大麻烦）。
                     </p>
                     <p className="mt-1 text-sm leading-relaxed">
                       如果您最终不得不面对伊碧塔丝的第 2 阶段，您将面临比之前更具攻击性的战斗。虽然您基本上可以使用上述相同的策略，但她的冲锋攻击几乎肯定会一击秒杀您，而她的星雨会造成很多麻烦。不断绕着她移动，试图引诱她使用头部猛击，这样您就可以攻击她的头部并终结她。
                     </p>
                   </div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">伊碧塔丝攻击列表：</strong>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto">
                       <table className="w-full text-sm text-left">
                         <thead>
                           <tr className="border-b border-red-200">
                             <th className="py-2 px-3">攻击名称</th>
                             <th className="py-2 px-3">距离</th>
                             <th className="py-2 px-3">描述</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 1 阶段</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">头部猛击 (Head Smash)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">将头部猛砸向地面造成巨大伤害，并将头部暴露在攻击之下</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">向前冲锋 (Forward Charge)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">冲越竞技场，覆盖极远的距离和宽度，造成严重伤害</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">触手猛击 (Tentacle Slam)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">将触手重重砸向前方造成严重伤害</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">向前喷血 (Forward Blood Spit)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">向您喷出两股导致狂暴积聚的鲜血</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">横扫喷血 (Sweeping Blood Spit)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">以 150 度大范围横扫向您喷出导致狂暴积聚的鲜血</td>
                           </tr>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 2 阶段</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">宇宙辐射 (Cosmic Radiation)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">周身环绕着破坏性的光环，可以通过砍击她来恢复</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">两段式冲锋 (Two-Stage Charge)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">飞向空中进行冲锋攻击，随后进行头部猛击</td>
                           </tr>
                           <tr>
                             <td className="py-2 px-3 font-medium">星雨 (Star Shower)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">在您的位置召唤三波秘法飞弹，必须侧步躲避</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：28,800 血之回响 和 伊兹大圣杯 (Great Isz Chalice)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-micolash-host-of-nightmares" className="text-xl font-bold text-[#d4d4d4] mb-4 border-b border-red-200 pb-2">
                   💀 Boss: 噩梦之主密寇拉什 (Micolash, Host of Nightmares)
                 </h4>
                 <p className="text-red-800 text-sm mb-4 leading-relaxed">
                   密寇拉什是《血源诅咒》中最胆小的 Boss，他会一直躲着你，直到被逼到迷宫般的图书馆死角。这场战斗分为两个阶段：第一阶段是他在一楼被逼到死角时发生的战斗，当他的生命值降至 50% 以下时结束；第二阶段是在你追着他穿过图书馆上层之后。一旦你找到他，重点是要保持他在视线内，而不是试图攻击他。
                 </p>
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       过场动画结束后，你需要在这个较小的图书馆下层区域找到密寇拉什，这并不难。跟着他走，直到他进入一个有多个拱门的走廊，然后开始攻击。首先集中精力解决两个骷髅木偶，然后再把注意力转向密寇拉什。只要你不直接向他冲过去从而被他的伊碧塔丝的预兆击中，这场战斗应该相对容易。当他的生命值降至 50% 以下时，他会假死并传送到图书馆上层。
                     </p>
                     <p className="mt-1 text-sm leading-relaxed">
                       从你与密寇拉什战斗的房间出发，向右走上楼梯，穿过现在打开的拱门进入主楼梯。楼梯上有两个梅高的侍从：一个拿着连枷，另一个拿着弩，你需要在进入上层图书馆之前将他们解决掉。
                     </p>
                   </div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       走上楼梯遇到密寇拉什，他会跳进镜子里，然后原路返回并向右走，从阳台跳下进入他离开的房间。此时，他可能会穿过另一个有镜子的房间，或者跑进一个房间并在身后锁上门，将你挡在外面。无论如何，一旦他被锁在门后，你就需要追踪他。
                     </p>
                     <p className="mt-1 text-sm leading-relaxed">
                       走门左侧的楼梯，连续两次左转，沿着楼梯向上走，到达一个俯瞰下方大桥的房间。从这里，在右侧栏杆寻找一个缺口，找到一条隐藏的路径，它会让你掉进密寇拉什所在的房间。
                     </p>
                     <p className="mt-1 text-sm leading-relaxed">
                       在与密寇拉什的第二场战斗中，如果你给他太多喘息空间，他会极具攻击性并使用“远方的召唤”法术。建议你贴近他并绕圈移动，引诱他使用伊碧塔丝的预兆攻击，然后绕到他身后使用快速武器进行满蓄力攻击，接着进行内脏暴击。你这场战斗的主要目标应该是阻止他施放“远方的召唤”，因为这招通常会秒杀你，而他其余的攻击造成的伤害微乎其微。
                     </p>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：48,400 血之回响 和 曼西斯牢笼 (Mensis Cage)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-gehrman-the-first-hunter" className="text-xl font-bold text-[#d4d4d4] mb-4 border-b border-red-200 pb-2">
                   💀 Boss: 第一猎人杰尔曼 (Gehrman, the First Hunter)
                 </h4>
                 <p className="text-red-800 text-sm mb-4 leading-relaxed">
                   与杰尔曼的战斗是一场考验时机和耐心的较量，因为贸然冲向他只会让你死在他致命的连击之下。你需要用火器对他进行枪反，以执行内脏暴击，这样才有机会真正造成伤害。因为他速度极快，会躲避你的大部分攻击，或者干脆顶着你的攻击强行出招对你造成巨大伤害，所以你需要将注意力集中在躲避他的攻击上。
                 </p>
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       在这个阶段，杰尔曼不会过多地躲避你的攻击，但他速度极快，可以轻易地用他的镰刀连击杀死你，或者用镰刀将你拉近，然后接上一个跳跃劈砍。任何你不打算用火器枪反的攻击，你都需要向后退避，因为他的攻击范围极长，而且每次挥舞镰刀都能跨越地图四分之一的距离。
                     </p>
                     <p className="mt-1 text-sm leading-relaxed">
                       最好的方法是直接后退两步，因为你永远不知道只退一步是否安全，然后等待他使用镰刀蓄力攻击。这个攻击有极长的延迟，你必须等到他把镰刀完全拉回、几乎触及地面时再向他射击，否则你只会打断他而无法触发枪反。
                     </p>
                   </div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当杰尔曼的生命值低于 75% 时，他会将他的残暴之刃（Brutal Blade）切换为长剑模式，获得一套全新的攻击方式。与他的镰刀攻击不同，他的长剑攻击追踪性差且攻击距离较短。虽然他在这个阶段更容易被躲避，但这并不意味着你应该贸然冲进去攻击，因为他仍然可以顶着你的攻击强行出招并造成巨大伤害。相反，你需要等待杰尔曼使用标准翻滚，他会在翻滚后接上近战攻击或火器射击。无论他在翻滚后使用哪种攻击，你都可以在他结束翻滚时射击他，轻松将他打出硬直，然后接上内脏暴击。
                     </p>
                   </div>

                   <div>
                     <strong className="text-[#d4d4d4]">第 3 阶段 (Phase 3)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当杰尔曼的生命值低于 50% 时，他会进入第 3 阶段，并使用他的高级加速法术（Advanced Quickening spell），使他在快速滑步时隐身。在这个阶段，他可以在两种武器形态之间切换，你可以使用相同的策略，但需要小心他的新技能。
                     </p>
                   </div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">第 3 阶段新技能：</strong>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto">
                       <table className="w-full text-sm text-left">
                         <thead>
                           <tr className="border-b border-red-200">
                             <th className="py-2 px-3">技能名称</th>
                             <th className="py-2 px-3">描述</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium whitespace-nowrap">空气刃 (Air Blade)</td>
                             <td className="py-2 px-3">杰尔曼会拿着镰刀跳到空中并悬停一秒，然后挥出一道空气波。这个攻击总是从右侧袭来并水平横扫，这意味着你躲避这个攻击的最佳机会是向后和向左多次快速滑步。</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium whitespace-nowrap">月光波 (Moonlight Wave)</td>
                             <td className="py-2 px-3">杰尔曼会面向月亮，并开始蓄力一个环绕他周围的巨大范围 (AOE) 攻击。虽然这会让他暴露出破绽，但如果你在 5 秒后爆炸时处于范围之内，它也会将你秒杀，所以不要贪刀。如果你等到他释放完攻击，站在刚好超出范围的地方，你可以在他从蓄力中恢复时趁机打上几下。</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium whitespace-nowrap">硬直射击 (Stagger Shot)</td>
                             <td className="py-2 px-3">杰尔曼会将他的左手武器变成一个更光滑的版本，并发出类似激光的子弹（而不是散射），这会让你立刻硬直并暴露在内脏暴击的危险中。因此，建议你保持距离，以便在他冲过来对你进行内脏暴击之前能够恢复。</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：128,000 血之回响 和 老猎人徽章 (Old Hunter Badge)
                   </div>
                   <div className="mt-4 pt-3 border-t border-red-200 text-red-800 text-sm">
                     <strong>提示：</strong>在击败杰尔曼并观看过场动画后，你可以使用【勇敢猎人的印记】(Bold Hunter's Mark) 重新补给采血瓶和水银子弹，以应对接下来的战斗，然后进入雾门继续下一场战斗。
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-moon-presence" className="text-xl font-bold text-[#d4d4d4] mb-4 border-b border-red-200 pb-2">
                   💀 Boss: 月之妖气 / 月神 (Moon Presence)
                 </h4>
                 <p className="text-red-800 text-sm mb-4 leading-relaxed">
                   与杰尔曼相比，这场战斗会显得相当容易。尽管它很有攻击性，但由于它的生命值较少，且攻击方式更容易预测。
                 </p>
                 <div className="space-y-4 text-red-800">
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       月神的大部分攻击都可以通过向前快速滑步来躲避，这通常会导致敌人冲过你身边，让你能够从背后攻击它。保持在它的侧面或身后，攻击它的触手，同时等待它抬起头使用像“过头顶鞭打”(Overhead Whip) 这样的招式暴露弱点，并确保保留精力以便在需要时后退和治疗。
                     </p>
                   </div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当月神的生命值降至 70% 以下时，它会变得更具攻击性，并获得一些致命的招式，如“末日凝视”(Doom Gaze)。虽然“末日凝视”会使你的生命值降至 1 点，但它也为你提供了在它漫长的恢复期内攻击月神头部的最佳机会，通过虚血回复（Regain）恢复它夺走的大部分生命值。你的策略应基本保持与之前相同，但要注意它使用的“麻木阵雨”(Numbing Shower) 或“麻木倾盆大雨”(Numbing Cloudburst)，这些技能会阻止你使用采血瓶并可能导致死亡。如果你发现自己无法治疗，应该后退并等待可以治疗时再重新加入战斗。
                     </p>
                   </div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">月神的攻击方式：</strong>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto">
                       <table className="w-full text-sm text-left">
                         <thead>
                           <tr className="border-b border-red-200">
                             <th className="py-2 px-3 w-1/4">攻击名称</th>
                             <th className="py-2 px-3 w-1/6">范围</th>
                             <th className="py-2 px-3">描述</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 1 阶段</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">旋转鞭打 (Spinning Whip)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">当你在它身后时执行 360 度旋转，以重新定位面向你</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">过头顶鞭打 (Overhead Whip)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">向前挥出鞭打攻击，造成中等伤害</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">跳跃猛击 (Jumping Slam)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">跃过场地，猛击地面造成中等伤害</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">再生 (Regeneration)</td>
                             <td className="py-2 px-3">-</td>
                             <td className="py-2 px-3">抱住头部，再生其四肢和头部的损伤</td>
                           </tr>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 2 阶段</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">末日凝视 (Doom Gaze)</td>
                             <td className="py-2 px-3">-</td>
                             <td className="py-2 px-3">抱住头部一秒钟并发出明亮的光芒，将你的生命值降至 1 点</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">麻木阵雨 (Numbing Shower)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">对天咆哮，制造多个从地面升起的粉红色球体，并在血堆中爆炸，阻止你使用采血瓶</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">麻木倾盆大雨 (Numbing Cloudburst)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">猛击地面，制造一个巨大的粉红色球体从地面升起并在血堆中爆炸，阻止你使用采血瓶</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：230,000 血之回响 和 老猎人徽章 (Old Hunter Badge)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-ludwig-the-accursed-ludwig-the-holy-blade" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 丑陋的野兽路德维希 / 圣剑路德维希 (Ludwig the Accursed / Ludwig, the Holy Blade)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     路德维希实际上是两个截然不同的Boss合二为一：第一阶段是丑陋的野兽路德维希，第二阶段是圣剑路德维希。
    
                   </p>
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       这个阶段比第二阶段更加疯狂，他会积极冲向你，几乎不给你喘息的空间。这场战斗的关键是积极攻击他的侧面（而不是背面，因为他会向后踢），并在打完后迅速撤离。你可以躲在路德维希身下攻击他的后腿，大多数攻击都会打空，但不要在这个位置停留太久。他几乎总是以高空跳跃攻击开局拉近距离，你可以向后滑步躲避。由于路德维希的两侧只需很小的伤害就会受伤并导致该部位受到额外伤害，你需要尽快将他的一侧或两侧打伤。用大炮和骨髓灰很容易将路德维希打出硬直，从而进行内脏暴击，而且在他冲锋攻击后攻击他的头部也能很快将他打出硬直。
                       <br/><br/>
                       这个阶段他武器库中最危险的攻击是“冲锋擒抱”（Charging Tackle），他会直接向你冲撞造成巨大伤害；以及“高空伏击”（Drop Ambush），他会跳到天花板上悬挂片刻然后再猛砸下来。“冲锋擒抱”可以通过远离他的正面或连续侧步两次来躲避（该攻击几乎没有前摇），而“高空伏击”可以在他跳到空中后向任意方向直线奔跑来躲避。
                     </p>
</div>
                   
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       在这个阶段，路德维希会放弃所有第一阶段的攻击，拔出大剑并用后腿站立。虽然他的移动和攻击变得更加有限和缓慢，但他获得了更大的攻击范围，且攻击附带额外的奥术伤害。作为一般经验法则，你需要保持在中近距离，并始终向前滑步以躲避他的攻击，因为他的所有攻击都附带了额外的奥术能量波，即使剑身没有击中你，能量波也会打中你。此外，路德维希的侧面不再会受伤，并且由于你只能攻击他的腿，他变得更难被打出硬直。
                       <br/><br/>
                       除了标准挥砍外，你还需要应对四种主要攻击。第一种是“双重月光波”（Double Moonlight Wave），他会缓慢地交叉挥砍两次，随后释放出两道奥术能量波；第二种是“月光圆环”（Moonlight Ring），他将剑指向地面蓄力然后插入地下，在周围制造一圈奥术爆炸；第三种是“月光猛攻”（Moonlight Onslaught），他将剑举向空中制造一个巨大的锥形奥术波，如果被卷入其中很可能会被秒杀。
                       <br/><br/>
                       注意躲避这些主要攻击，特别是“月光圆环”和“月光猛攻”，紧贴他的侧面，你应该就能过关。
                     </p>
</div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-[#d4d4d4] block mb-3">路德维希的攻击方式：</strong>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto">
                       <table className="w-full text-sm text-left">
                         <thead>
                           <tr className="border-b border-red-200">
                             <th className="py-2 px-3 w-1/4">攻击名称</th>
                             <th className="py-2 px-3 w-1/6">范围</th>
                             <th className="py-2 px-3">描述</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 1 阶段</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">高空跳跃 (High Jump)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">向前飞跃的突刺攻击，靠近时可向前滑步或向后滑步躲避</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">高空伏击 (Drop Ambush)</td>
                             <td className="py-2 px-3">-</td>
                             <td className="py-2 px-3">跳到空中然后猛砸下来造成巨大伤害，看到血液滴落时向任意方向跑</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">头槌 (Headbutt)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">难以预测的微弱攻击，主要用于破坏平衡而非造成伤害</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">后踢 (Rear Kick)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">向后踢，试图把你从他背上弄下来</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">爪击 (Claw Swipes)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">任何一只手臂的标准挥击，可通过侧步或向后滑步躲避</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">旋转挥击 (Spin Swipe)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">用右爪从左向右进行旋转刮擦，无法翻滚躲避，必须向后滑步</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">撕咬连击 (Bite Combo)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">连续多次撕咬攻击，可通过向后滑步躲避</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">践踏 (Trampling Stomp)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">双重跳跃践踏，必须向前或向后滑步躲避</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">撤退斩 (Retreating Slash)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">挥砍两次然后向后跳跃，很容易通过向后滑步躲避</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">跳跃猛击 (Leaping Slam)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">快速向前突刺，通常接在其他攻击之后（如撕咬连击）</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">冲锋擒抱 (Charging Tackle)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">喷出黄色气体，然后直线冲锋造成巨大伤害</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">前方喷泉 (Forward Geyser)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3" rowSpan="2">这两种都是长距离攻击，可以通过紧贴他来躲避</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">横扫喷泉 (Sweeping Geyser)</td>
                             <td className="py-2 px-3">长</td>
                           </tr>
                           <tr className="bg-[#8a0303]/10">
                             <td colSpan="3" className="py-2 px-3 font-bold text-[#d4d4d4] border-b border-[#8a0303]/20">第 2 阶段</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">快速连击 (Fast Combo)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">向相反方向快速挥砍两次，然后进行一次缓慢的向下挥砍</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">重击连击 (Heavy Combo)</td>
                             <td className="py-2 px-3">中</td>
                             <td className="py-2 px-3">一次缓慢的水平弧形挥砍，然后接一次对角线挥砍或三次劈砍</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">月光圆环 (Moonlight Ring)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">将剑指向地面蓄力，然后向下插入，释放出一圈奥术魔法</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">月光波 (Moonlight Wave)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">单次水平挥砍释放的奥术魔法</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">双重月光波 (Double Moonlight Wave)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">两道交叉的对角线奥术魔法挥砍</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">月光突刺 (Moonlight Stab)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">向前突刺的奥术魔法</td>
                           </tr>
                           <tr className="border-b border-[#8a0303]/20">
                             <td className="py-2 px-3 font-medium">月光猛攻 (Moonlight Onslaught)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">将剑向上举起，释放出巨大的锥形奥术魔法波</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：34,500 血之回响 和 引导 (1) 符文 (Guidance (1) Rune)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-living-failures" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 失败者 (Living Failures)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     失败者是一场群体Boss战，类似于原版的“神圣使者”。场地中会不断生成高大的蓝色外星生物。
    
                   </p>
                   <div>
                     <strong className="text-[#d4d4d4]">战斗策略</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       这些怪物移动缓慢，但它们的近战攻击伤害惊人，并且会发射奥术魔法球。利用场地的中央向日葵（星辰钟塔）作为掩体，躲避它们的奥术飞弹。将它们分散开来，逐个击破。它们共享一个总生命值条。
                       <br/><br/>
                       <strong>陨石召唤：</strong>当Boss们的血量下降到一半时，它们会集体举起双手，将天空变暗，并从右上方召唤巨大的陨石雨。此时立即躲到星辰钟塔门后的左侧死角，陨石无法砸到那里，你可以安全地度过这个致命阶段。
                     </p>
</div>
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：星辰钟塔钥匙 (Astral Clocktower Key)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-lady-maria-of-the-astral-clocktower" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 星辰钟塔的玛丽亚女士 (Lady Maria of the Astral Clocktower)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     玛丽亚是杰尔曼的首席学徒，她的战斗是一场极其优雅且致命的猎人对决。她的武器“落叶”（Rakuyo）可以在双刀和双刃剑之间切换。
    
                   </p>
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段：物理攻击</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       玛丽亚的攻击速度极快，但非常容易被枪反。她会频繁使用冲刺斩和双刀连击。保持中距离，在她抬手准备挥砍时开枪打断，然后进行内脏暴击。如果枪反不熟练，向左前（她的右侧）滑步躲避是比较安全的策略。
                     </p>
</div>
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段：鲜血附魔</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当血量降至约60%时，玛丽亚会将双刀刺入胸膛，为武器附魔鲜血。她的所有攻击现在都有了更长的攻击距离和延迟的血液伤害判定。你不能再仅仅躲避刀刃，还要躲避挥砍产生的血刃。
                     </p>
</div>
                   <div>
                     <strong className="text-[#d4d4d4]">第 3 阶段：火焰鲜血</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       血量降至30%左右时，玛丽亚会悬浮在空中吸收血液，落地后她的攻击不仅有鲜血效果，还会附带火焰爆炸。这一阶段她的攻击范围极为恐怖，一旦被连击很容易被秒杀。尽量贴身缠斗，避免她释放超远距离的蓄力血火光炮。
                     </p>
</div>
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：天体表盘 (Celestial Dial)
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-orphan-of-kos" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 科斯的高儿 (Orphan of Kos)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     科斯的高儿被公认为《血源诅咒》中最难的 Boss，甚至可能是整个魂系游戏中最具挑战性的存在。他刚出生就拥有惊人的攻击性，使用胎盘作为武器。
    
                   </p>
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       他的攻击范围大且极其不规则。他最致命的一招是高高跳起后的猛砸，但在他跳跃落地时，只要你一直向他原本站立的位置冲刺，就可以走到他背后，蓄力攻击打出硬直并内脏暴击。另一个好机会是他拉长胎盘在头顶旋转两次的招式，此时你可以冲进去枪反。
                     </p>
</div>
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当生命值降至一半时，他会长出肉翼并变得极其狂暴，不断在空中飞跃。此时极难进行枪反。建议在水面上战斗（水面非常平坦，没有障碍物）。当他停下来发出尖叫时，海滩上的科斯尸体将释放闪电波并向外扩散。此时如果你在水面上，只需站在闪电波的空隙中即可轻松躲避。保持耐心，在他疯狂连击后的短暂僵直中反击。
                     </p>
</div>
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：科斯寄生虫 (Kos Parasite) 武器
                   </div>
                 </div>
               </div>
               <div className="bg-[#8a0303]/20 p-6 rounded-xl border border-[#8a0303]/20 mb-8">
                 <h4 id="boss-laurence-the-first-vicar" className="font-bold text-[#d4d4d4] text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 第一任主教劳伦斯 (Laurence, the First Vicar)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     劳伦斯是DLC的隐藏Boss。他看起来像燃烧的圣职者野兽，但攻击方式不同，且伤害极高。
    
                   </p>
                   <div>
                     <strong className="text-[#d4d4d4]">第 1 阶段</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       他的攻击范围很大，挥击会在地上留下爆炸的火焰。不要连续向后退，因为他会连续向前拍击并用火焰封死你的退路。尽量锁定并向他的较小的一只手臂（左臂）滑步。
                     </p>
</div>
                   <div>
                     <strong className="text-[#d4d4d4]">第 2 阶段</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当血量降至40%左右时，劳伦斯的下半身会断裂。他将用双臂在地上爬行，并不断从身后喷出熔岩。在这个阶段千万不要待在他的正面或背面！你必须贴在他的左侧或右侧攻击。如果他开始顺时针爬行喷火，跟着他转圈并保持在侧面攻击即可。
                     </p>
</div>
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-[#d4d4d4]">
                     🎁 掉落：野兽的拥抱 (Beast's Embrace) 符文
                   </div>
                 </div>
               </div>
               </div>

               <h2 id="section-endings" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  结局与最终 Boss (Endings & Final Boss)
               </h2>
               
               <div className="grid md:grid-cols-3 gap-6 mb-8">
                 <div className="bg-[#0f0f0f] p-5 rounded-sm border-l-4 border-l-[#8a0303] border-y border-r border-[#1a1a1a] shadow-inner">
                   <h4 className="font-bold text-lg mb-2 text-[#e0e0e0]">结局 1 (Ending 1)</h4>
                   <p className="text-sm text-[#8a8a8a] m-0">
                     <strong>条件：</strong>不食用任何【三分之一脐带】（One Third of Umbilical Cords） - 在猎人梦境中与杰尔曼（Gehrman）交谈并选择“奉献你的生命”（Submit Your Life）。
    
                   </p>
                 </div>
                 <div className="bg-[#0f0f0f] p-5 rounded-sm border-l-4 border-l-[#8a0303] border-y border-r border-[#1a1a1a] shadow-inner">
                   <h4 className="font-bold text-lg mb-2 text-[#e0e0e0]">结局 2 (Ending 2)</h4>
                   <p className="text-sm text-[#8a8a8a] m-0">
                     <strong>条件：</strong>不食用任何【三分之一脐带】（One Third of Umbilical Cords） - 在猎人梦境中与杰尔曼（Gehrman）交谈并选择“拒绝”（Refuse）。
    
                   </p>
                 </div>
                 <div className="bg-[#0f0f0f] p-5 rounded-sm border-l-4 border-l-[#8a0303] border-y border-r border-[#1a1a1a] shadow-inner">
                   <h4 className="font-bold text-lg mb-2 text-[#e0e0e0]">结局 3 (Ending 3)</h4>
                   <p className="text-sm text-[#8a8a8a] m-0">
                     <strong>条件：</strong>食用 3 个【三分之一脐带】（One Third of Umbilical Cords） - 在猎人梦境中与杰尔曼（Gehrman）交谈并选择“拒绝”（Refuse）。
    
                   </p>
                 </div>
               </div>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：第一猎人杰尔曼</span>
                 <a href="#boss-gehrman-the-first-hunter" onClick={(e) => scrollToSection(e, 'boss-gehrman-the-first-hunter')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：月之妖气 / 月神</span>
                 <a href="#boss-moon-presence" onClick={(e) => scrollToSection(e, 'boss-moon-presence')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               {/* The Old Hunters Walkthrough */}
               <h2 id="section-old-hunters-walkthrough" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                 <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                 流程攻略：老猎人 (The Old Hunters)
               </h2>

               <p className="text-[#a3a3a3] mb-6">
                 为了访问《老猎人》(The Old Hunters) DLC，您必须在游戏中推进到大教堂区 (Cathedral Ward) 并击败代理人阿梅利亚 (Vicar Amelia)，将时间推进到夜晚。返回猎人梦境 (Hunter's Dream) 后，新的信使会出现在台阶上，并为您提供<strong>嗜血猎人之眼 (Eye of a Blood-drunk Hunter)</strong>和<strong>老猎人钟 (Old Hunter Bell)</strong>。现在您可以前往大教堂区的欧顿小教堂 (Oedon Temple)，向井的方向出去，然后被俯瞰该区域的次级亚米达拉 (Lesser Amygdala) 抓走。


               </p>
               <div className="bg-[#120a0a] p-4 rounded-lg border border-[#331111] mb-6">
                 <p className="text-[#d4d4d4] text-sm m-0">
                   <strong>注意：</strong>如果您是在通关本体游戏后（补丁前）游玩 DLC，请务必查看本指南的 NPC 任务部分，完成联盟大师瓦尔特 (Valtr, Master of the League) 的任务线。这个 NPC 是在补丁中添加的，以下部分将不再赘述。
  
                 </p>
               </div>

               <h3 id="section-hunters-nightmare" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 猎人的梦魇 (Hunter's Nightmare)
               </h3>

               <p className="text-[#a3a3a3] mb-6">
                 一段过场动画后，你会在欧顿小教堂（Oedon Temple）醒来，但尽管外观相同，你会注意到提灯目前没有点亮，并且你在小教堂的任何 NPC 现在都不见了。离开建筑，在入口左侧检查拿到<strong>狂暴冷血 (8)</strong>，在右侧拿到<strong>双子血石碎片</strong>，然后走上楼梯遇到第一种新敌人。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 老猎人 (Old Hunter)
                 </h4>
                 <p className="text-red-700 text-sm m-0 mb-2">
                   老猎人有四种不同的变体，基于他们携带的独特诡兵器，并且所有变体都会对周围的野兽产生攻击性。
  
                 </p>
                 <p className="text-red-700 text-sm m-0">
                   遇到的第一个变体携带的是<strong>野兽切割刀 (Beast Cutter)</strong>，可以像螺纹手杖一样伸展成鞭子，以及一把<strong>猎人喇叭枪 (Hunter Blunderbuss)</strong>。你想通过站在中距离引诱他们使用缓慢的鞭打攻击，然后打断他们以执行内脏暴击。第二和第三个变体都携带<strong>怪兽猎人弯刀 (Beasthunter Saif)</strong>，其中一个还会携带<strong>穿透步枪 (Piercing Rifle)</strong>。没有步枪的那个非常具有攻击性，所以引诱他们攻击以打断他们，或者侧步躲避他们的攻击然后从背后攻击。最后一个变体最危险，携带<strong>爆炸锤 (Boom Hammer)</strong>，可以造成巨大伤害并有很好的追踪性。专注于打断他们缓慢、延迟的攻击，并在保持在他们的攻击范围之外的同时使用内脏暴击。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血宝石、采血瓶 x2
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 确保在关闭的大门旁拿到<strong>老猎人帽</strong>，然后原路返回欧顿小教堂，并走向建筑左侧的山坡。你会注意到一群两只兽化病人正在上山，但忽略它们并向左跳下找到<strong>老猎人手套</strong>。拿着野兽切割刀的老猎人会击败这两只兽化病人，给你一些免费的回响，但你需要回到山坡上自己解决他。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 继续沿着小路直走收集<strong>采血瓶 x3</strong>，然后转身穿过马路到另一侧，稍微靠左，找到一个<strong>狂暴冷血 (9)</strong>。转身直走俯瞰下面的广场，找到有<strong>双子血石碎片 x3</strong>的壁架，然后跳下进入广场。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 右边有三只兽化病人和另一个拿着野兽切割刀的老猎人，在通往大教堂的楼梯附近。在引起老猎人注意之前击败兽化病人，然后解决他，但暂时忽略楼梯。绕着广场外围走，找到拿着火把和爆炸锤的老猎人，引起他的注意，然后迅速后退，让他与众多的兽化病人战斗。当他被其他敌人分散注意力时，你可以随意攻击他，然后收集该区域的<strong>狂人的知识 x2</strong>，然后再前往另一侧遇到一些靠近<strong>采血瓶 x6</strong>的额外兽化病人。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到山坡上，使用广场上的斜坡，回到你跳下的地方，然后继续向前，直到两只老猎人的狂犬转过拐角。这些类似于以前遇到的狂犬，所以后退或侧步躲避它们的攻击，然后轻松击杀它们。转身在地上发现一些<strong>双子血石碎片 x3</strong>，然后继续向前，看向右边发现一个拿着怪兽猎人弯刀的老猎人。通过躲避或打断他的攻击来小心击败这个敏捷的敌人，然后走到角落的边缘往下看，发现<strong>老猎人长裤</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 跳下去杀死三只食腐乌鸦并拉动控制杆，打开欧顿小教堂附近楼梯顶部的门，然后转身走楼梯。有三只兽化病人你需要在走第二段楼梯之前杀死，然后继续上第二段楼梯。正前方有另一个拿着穿透步枪和怪兽猎人弯刀的老猎人，所以利用柱子作为掩护躲避枪火，然后再攻击，在解决他之后收集<strong>采血瓶 x3</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 看向你位置的下方，发现另一只老猎人的狂犬，你可以跳下去攻击它，然后向右走找到一些兽化病人。几英尺外有一个非常危险的红眼老猎人拿着爆炸锤，他会先攻击剩下的兽化病人，然后再转向你。虽然老猎人的攻击很慢，但它们有很好的追踪性和很广的范围，在侧步时可能会让你措手不及。最好的行动方案是用枪火打断他的攻击，然后执行内脏暴击来杀死他，而无需靠得太近。确保捡起他掉落的<strong>害虫 (Vermin)</strong>，这可能需要你捡起物品两次，然后收集附近的<strong>野兽切割刀</strong>和<strong>水银子弹 x4</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 走上大教堂的楼梯，直到你遇到许多兽化病人，然后移到楼梯一侧以避开从上面滚下来的燃烧巨石。解决剩下的兽化病人并收集附近的<strong>老猎人服装</strong>，然后继续上到大教堂。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 当前面的两个老猎人进入大教堂时，一个梦魇刽子手（Nightmare Executioner）会从门里出来。就像他们在原版游戏中的对应物一样，这些敌人非常致命，并拥有强大的横扫斧头攻击。此外，梦魇变体有一个宇宙爆炸（Cosmic Explosion）能力，会造成巨大的范围伤害，同时也会强化这个本已危险的敌人。在这种特殊情况下，你可以通过跑过它进入大教堂来避免与梦魇刽子手发生严重战斗，等它失去兴趣后原路返回，执行蓄力攻击/内脏暴击连击。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 梦魇刽子手 (Nightmare Executioner)
                 </h4>
                 <p className="text-red-700 text-sm m-0 mb-2">
                   这个危险的敌人有两种变体；挥舞斧头的和携带教会加农炮的。挥舞斧头的变体是你将在猎人的梦魇中多次遇到的，比他的兄弟致命得多。保持在中距离，同时尝试引诱刽子手攻击，然后攻击他的侧面或背面。如果你能绕到他身后并执行蓄力攻击，他会产生硬直，让你能够对他进行内脏暴击以造成巨大伤害。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：采血瓶 x6、水银子弹 x10
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 回到大教堂内并检查祭坛以获得<strong>眼球坠饰 (Eye Pendant)</strong>，然后离开大教堂，检查楼梯两侧以获得<strong>燃烧瓶 x3</strong>和<strong>采血瓶 x6</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 穿过大教堂旁边的隧道，来到一座有墓碑的桥，前进时紧贴左侧，以躲避桥另一侧一些武器的火力。冲向站在中间的雅南暴徒（Huntsman），因为他站在激活武器的压力板上，然后摧毁枪支再杀死另一个雅南暴徒。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 沿着右边的小路往下走，遇到另外两个雅南暴徒，他们会投掷延迟燃烧瓶（Delayed Molotovs），这些燃烧瓶在投出几秒后激活而不是接触时，当拿着爆炸锤的老猎人冲过来时迅速后退。这个比前一个弱得多，因为它不是红眼的，所以你应该不会像以前那样遇到麻烦。走下一小段楼梯，在角落里杀死一个雅南暴徒，然后收集<strong>双子血石碎片</strong>，接着进入附近黑暗的建筑。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 两个雅南暴徒会上楼梯，所以确保在你在楼上收集<strong>延迟燃烧瓶 x5</strong>之前击败他们。从楼上的另一扇门出去，跳到一个有<strong>老猎人高帽</strong>的壁架上，然后向左跳下。你在黑暗建筑里的事情还没完，所以忽略血河中的敌人，绕过左边的马车回到黑暗建筑。在你接近死去的轮椅暴徒之前杀死另一个雅南暴徒，然后迅速捡起<strong>爆炸锤</strong>并后退，以免被陷阱椅子爆炸波及。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 通过血河对面的门离开黑暗建筑，走上楼梯，捡起<strong>兽化血丸 x2</strong>，然后继续向上走向吉尔伯特的房子（雅南中心提灯曾经所在的地方）。前面的爪子 NPC 猎人很敏捷，能避开大多数枪火，但某些攻击（比如他抓地时）很容易用枪火打断以进行内脏暴击。确保在需要时退下楼梯以获得更多空间躲避他的攻击，并保持与他类似的移动方式以避开攻击。只要你不被他的主要攻击击中，或者被野兽咆哮（Beast Roar）弄得失去平衡，你应该能够击败他以获得<strong>击铁猎人徽章 (Firing Hammer Badge)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到血河，紧贴左侧以避开舔血者（Bloodlickers），在楼梯附近收集<strong>采血瓶 x3</strong>，然后走上楼梯。在有<strong>水银子弹 x6</strong>的尸体旁击败两个拿着穿透步枪和怪兽猎人弯刀的老猎人，然后穿过桥，同时杀死另一个拿着穿透步枪和怪兽猎人弯刀的老猎人，以及两个雅南暴徒。忽略向下的楼梯，走左边的小路找到一个有<strong>治安官手套 (Constable's Gloves)</strong>的死胡同，然后往桥的方向返回并进入左边的拱门。这将带你找到寻秘者西蒙（Simon, Seeker of Secrets），他会问你是否对噩梦感兴趣（说“是”以推进他的任务），这里还有一条通往欧顿小教堂的捷径。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 再次回到血河，清理桥梁，然后走桥下的楼梯。靠近桥的地方有三只舔血者，当你引起注意时它们会互相支援。单只舔血者并不是很危险，因为它们的攻击缓慢且容易躲避，但当它们成群结队时就会成为严重的威胁。对最近的舔血者砍几下，然后退回楼梯，同时躲避它们的喷血远程攻击，重复这个过程直到击败它们。


               </p>
               <div className="bg-[#8a0303]/20 p-5 rounded-lg border border-[#8a0303]/20 mb-6">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Swords size={20} /> 舔血者 (Bloodlicker)
                 </h4>
                 <p className="text-red-700 text-sm m-0 mb-2">
                   猎人梦魇中的舔血者是你在该隐赫斯特遇到的放大版，但它们有一些额外的攻击方式。在远距离，舔血者会吐出导致慢毒积聚的血液，可以侧步躲避；在近距离，它们可以用四肢或长舌头攻击。攻击这些敌人最安全的地方是它们的侧面，因为它们可以用后腿踢，所以冲向它们的侧面释放长连击。
  
                 </p>
                 <div className="mt-3 pt-3 border-t border-red-200 text-sm font-medium text-red-800">
                   掉落物：血宝石
                 </div>
               </div>

               <p className="text-[#a3a3a3] mb-6">
                 从桥下穿过，向你已经探索过的区域走回，杀死左侧马车后面的舔血者，然后收集附近的<strong>狂暴冷血 (8)</strong>。继续穿过血河，通过将它们分开引诱来击败额外的四只舔血者，然后挤进大马车后面找到一条隐藏的路径。冲向游荡梦魇获得<strong>血石块 x2</strong>，但要小心你跟着它深入隧道的程度。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 当隧道变成一个黑暗的洞穴时，一个拿着加特林机枪的 NPC 猎人会对你展开无情的射击，所以如果你还没准备好应对，请后退。这个区域非常黑，只要你试图拉开任何距离，子弹的喷射就会在与这个敌人战斗时造成很多麻烦。装备火把或猎人火把以便看清他在做什么，并在你需要后退和治疗时，使用入口右侧的巨石作为掩护躲避他的火力。这很慢，但如果你只是等他走到巨石拐角处并开启一套连击，然后返回掩体，你应该能够杀死他并获得<strong>加特林机枪 (Gatling Gun)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 保持火把点亮，将火纸（Fire Paper）添加到你的快捷物品中（如果你还没有的话），然后在开口附近收集<strong>血石块</strong>。当你跳下进入下一个区域时，你会遇到一只半虚弱状态的渴血怪兽（Blood-starved Beast）。使用火纸，在它初始攻击后对其猛烈攻击，然后打几下后退开以避开它的反击。好消息是渴血怪兽更喜欢它向前冲锋的爪子挥击，这是可以预测的，并且很容易躲避并用枪火打断。击败这个老 Boss 后，清理兽化病人，然后收集<strong>亚米达拉之臂 (Amygdalan Arm)</strong>武器和<strong>双子血石碎片 x4</strong>。你现在可以一边走出隧道，一边收集<strong>血石块</strong>和<strong>双子血石碎片</strong>，同时也击败一些额外的兽化病人。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到桥上并从桥下穿过，然后小心地接近那四只舔血者。攻击最近的舔血者并后退，直到其余的失去兴趣，杀死它，然后对保护着<strong>治安官长裤 (Constable's Trousers)</strong>的剩余舔血者重复此操作。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 穿过隧道，顺着血迹走到另一边，然后击败两只老猎人的狂犬。左边的一个死胡同里有一个<strong>狂暴冷血 (9)</strong>，如果你转身沿着建筑周围的左墙走，你会发现另一个有另一只老猎人狂犬和雅南暴徒的死胡同。当你离开这个死胡同时，你会发现左边有一些食腐乌鸦和一个拿着野兽切割刀的老猎人，但不要冲向他们中的任何一个。相反，向后退，让老猎人过来找你，这样你就可以在不担心食腐乌鸦的情况下杀死他，然后再解决乌鸦。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 爬上梯子并转身，在横梁的另一侧发现<strong>治安官服装 (Constable's Garb)</strong>，你可以通过从附近栏杆的缺口跳下来穿过横梁，然后返回爬上梯子，从栏杆的另一个缺口跳下。一个拿着怪兽猎人弯刀的红眼老猎人守卫着这个区域，所以向前滑步躲过他的横扫攻击，攻击他的背面或打断他的攻击来击败他。确保收集老猎人掉落的<strong>害虫</strong>和壁架上尸体处的<strong>怪兽猎人弯刀</strong>，然后你可以回到梯子再爬上去一次。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 穿过山丘到另一侧并跳到地面，然后前进时紧贴右侧，躲避拿着教会加农炮的梦魇刽子手的火力。收集<strong>狂人的知识</strong>，然后原路返回到你跳下附近的梯子，因为挥舞斧头的梦魇刽子手现在应该正在从他位于该区域侧面的藏身处移出。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 这次你必须真正地与梦魇刽子手战斗，所以保持侧步躲避他的攻击，或者在攻击前保持一定距离来引诱他的攻击。当他用双手将斧头举向空中时，径直冲向他的背面，使用蓄力攻击使他产生硬直，然后内脏暴击他以结束战斗。你现在可以紧贴该区域的侧面来接近教会加农炮梦魇刽子手，这要容易得多，因为任何距离都会导致他瞄准他的加农炮并开火。一旦该区域清理干净，检查挥舞斧头的梦魇刽子手隐藏的死胡同，在一个 NPC 召唤点附近找到<strong>屠夫套装 (Butcher Attire Set)</strong>，然后穿过草地到达梦魇教会（Nightmare Church）。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 在下楼梯之前点亮提灯，然后冲向游荡梦魇获得<strong>血石块 x2</strong>。当你穿过木桥时，一个拿着野兽切割刀的红眼老猎人会从你身后跳下来，所以迅速转身并用枪火打断他的鞭打攻击。击败老猎人后，收集他掉落的<strong>害虫</strong>和尸体上的<strong>双子血石碎片 x2</strong>，然后向下攻击之前的食腐乌鸦。你现在可以收集乌鸦附近的<strong>采血瓶 x2</strong>、沿途的<strong>油瓮 x3</strong>和道路尽头的<strong>旋转锯刀 (Whirligig Saw)</strong>。


               </p>
               <p className="text-[#a3a3a3] mb-6">
                 回到梦魇教会或使用勇敢猎人的印记，向血河方向退出。径直穿过血迹收集<strong>采血瓶 x6</strong>，然后攻击你右侧建筑角落附近的捡眼球者（Eye Collector）。跳下壁架，攻击敲打大门的血腥骷髅以获得一些额外的采血瓶，这在你死于 Boss 时非常适合用来补充库存，然后杀死附近的食腐乌鸦。你现在可以沿着小路走，在到达 Boss 竞技场之前捡到一个<strong>鹅卵石</strong>。


               </p>
               <h3 id="section-underground-corpse-pile" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 地下尸堆 (Underground Corpse Pile)
               </h3>
               
               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：丑陋的野兽路德维希 / 圣剑路德维希</span>
                 <a href="#boss-ludwig-the-accursed-ludwig-the-holy-blade" onClick={(e) => scrollToSection(e, 'boss-ludwig-the-accursed-ludwig-the-holy-blade')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-research-hall" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 研究大厅 (Research Hall)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">
                 - 未完待续 (To Be Continued)
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 击败路德维希后，点亮提灯并与地上的劳伦斯头骨互动，或者与西蒙对话。继续前进，穿过地下牢房，这里有许多被锁住的门（需要地下牢房钥匙）。继续往上走，你会进入研究大厅，这里是一个巨大的螺旋楼梯迷宫，布满了大脑变异的病人（大头娃娃）。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 研究大厅的目标是到达顶层，操作一个巨大的机关，这会使整个房间的楼梯旋转，从而解锁之前无法到达的区域。在这里你需要收集<strong>脑浆 (Brain Fluid)</strong>来完成NPC爱德琳（Adeline）的任务。当你将楼梯旋转后，你可以进入 Boss 区域。


               </p>
               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：失败者</span>
                 <a href="#boss-living-failures" onClick={(e) => scrollToSection(e, 'boss-living-failures')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-astral-clocktower" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 星辰钟塔 (Astral Clocktower)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 击败失败者后点亮提灯，用刚刚获得的钥匙打开巨大的双开门。里面坐着一位沉睡的女士，这就是DLC最经典的Boss之一。


               </p>
               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：星辰钟塔的玛丽亚女士</span>
                 <a href="#boss-lady-maria-of-the-astral-clocktower" onClick={(e) => scrollToSection(e, 'boss-lady-maria-of-the-astral-clocktower')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-fishing-hamlet" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 小渔村 (Fishing Hamlet)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 拿起天体表盘，走向巨大的钟面，它会打开通往小渔村的道路。这里是DLC的最后一个区域，充满了恐怖的鱼人怪物和巨大的鲨鱼巨人。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 在村庄的中央水井里，有两只可怕的鲨鱼巨人（其中一只是无武装的，另一只拿着巨型船锚）。击败它们可以获得玛丽亚的武器<strong>落叶（Rakuyo）</strong>。建议使用萨满骨刃（Shaman Bone Blade）让它们自相残杀，否则这将是全游戏最难的非Boss战之一。

               </p>
               <p className="text-[#a3a3a3] mb-6">
                 穿过村庄，穿过充满蜗牛女的洞穴，最终你会到达海滩。海滩上躺着死去的古神“科斯”（Kos），从它的尸体中诞生了最终Boss。


               </p>
               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：科斯的高儿</span>
                 <a href="#boss-orphan-of-kos" onClick={(e) => scrollToSection(e, 'boss-orphan-of-kos')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-laurence" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 大教堂 (重返) - 隐藏Boss
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 在研究大厅乘电梯下去（插入劳伦斯的头骨所在的祭坛前），你可以获得<strong>劳伦斯的头骨（Laurence's Skull）</strong>。带着头骨回到猎人梦魇的大教堂（你第一次遇到梦魇刽子手的地方），大厅里燃烧的圣职者野兽将会苏醒。


               </p>
               <div className="bg-[#8a0303]/10 p-5 rounded-lg border border-[#8a0303]/20 mb-8 flex items-center justify-between">
                 <span className="font-bold text-[#d4d4d4] flex items-center gap-2"><span className="text-xl">💀</span> 即将遭遇 Boss：第一任主教劳伦斯</span>
                 <a href="#boss-laurence-the-first-vicar" onClick={(e) => scrollToSection(e, 'boss-laurence-the-first-vicar')} className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full transition-colors border border-red-200">查看详细攻略 <ChevronRight size={16} /></a>
               </div>

               <h3 id="section-npc-quests-iosefka" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务：约瑟夫卡 (NPC Quests: Iosefka)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 在访问猎人梦境后，约瑟夫卡会接管你一开始所在的房间并锁上门。如果你对着门说话，她会给你一个<strong>约瑟夫卡的采血瓶 (Iosefka's Blood Vial)</strong>（前提是你还没有），直到你击败神父加斯科因 (Father Gascoigne)。
               </p>
               
               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 到达大教堂区后 (After reaching Cathedral Ward):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 一旦你点亮了大教堂区的提灯，你可以回到约瑟夫卡那里，她会提议收容避难者。
               </p>

               <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                 <table className="w-full text-sm text-left">
                   <thead>
                     <tr className="border-b border-[#333333] bg-[#141414]">
                       <th className="py-2 px-3">NPC</th>
                       <th className="py-2 px-3">奖励 (Reward)</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-b border-[#262626]">
                       <td className="py-2 px-3 font-medium">维奥拉的女儿 (Viola's Daughter)</td>
                       <td className="py-2 px-3">铅之灵药 x2 (Lead Elixir x2)</td>
                     </tr>
                     <tr className="border-b border-[#262626]">
                       <td className="py-2 px-3 font-medium">孤独的老妇人 (Lonely Old Dear)</td>
                       <td className="py-2 px-3">麻痹迷雾 x2 (Numbing Mist x2)</td>
                     </tr>
                     <tr className="border-b border-[#262626]">
                       <td className="py-2 px-3 font-medium">妓女阿丽安娜 (Arianna, Woman of Pleasure)</td>
                       <td className="py-2 px-3">麻痹迷雾 x2 (Numbing Mist x2)</td>
                     </tr>
                     <tr className="border-b border-[#262626]">
                       <td className="py-2 px-3 font-medium">心胸狭窄的男人 (Narrow Minded Man)</td>
                       <td className="py-2 px-3">麻痹迷雾 x2 (Numbing Mist x2)</td>
                     </tr>
                     <tr className="border-b border-[#262626]">
                       <td className="py-2 px-3 font-medium">修女阿德拉 (Sister Adella)</td>
                       <td className="py-2 px-3">麻痹迷雾 x2 (Numbing Mist x2)</td>
                     </tr>
                     <tr className="border-b border-[#262626]">
                       <td className="py-2 px-3 font-medium">变异的男人 (Transformed Man)</td>
                       <td className="py-2 px-3">怪兽血丸 x2 (Beast Blood Pellet x2)</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               
               <p className="text-[#a3a3a3] mb-6">
                 约瑟夫卡会对任何送到她那里的NPC进行实验，最终导致他们变异成敌人。虽然这并不妨碍你获得他们的掉落物，但这会中断任何附带有任务线的角色的剧情。
               </p>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 在击败愚钝蜘蛛罗姆之前 (Before defeating Rom, the Vacuous Spider):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 一旦你到达禁忌森林 (Forbidden Woods)，你就可以进入约瑟夫卡的诊所（参见“返回约瑟夫卡的诊所”），可以在楼上的房间里找到她。她会要求你离开，如果你继续前进，她会变得具有敌意；但如果你离开，并在得知她的真实意图后继续送受害者给她，她会为每个受害者奖励你<strong>蓝色灵药 x3 (Blue Elixirs x3)</strong>。
               </p>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 在击败愚钝蜘蛛罗姆之后 (After defeating Rom, the Vacuous Spider):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 如果你离开（或从未拜访过），并在击败愚钝蜘蛛罗姆之后返回，你可以安全地上楼，在手术台上轻松地杀死她。
               </p>

               <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                 <p className="mb-2">🎁 掉落 (Drops):</p>
                 <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                   <li>3,200 血之回响 (Blood Echoes)</li>
                   <li>欧顿蠕动符文 (Oedon Writhe Rune) - 在击败愚钝蜘蛛罗姆之前</li>
                   <li>三分之一脐带 (One Third of Umbilical Cord) - 在击败愚钝蜘蛛罗姆之后</li>
                 </ul>
               </div>

               <h3 id="section-npc-quests-gilbert" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务：吉尔伯特 (NPC Quests: Gilbert)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 可以在亚南中心 (Central Yharnam) 提灯旁边的房子窗户处找到吉尔伯特。如果在进入大教堂区 (Cathedral Ward) 后返回并与他交谈，他会交出火焰喷射器 (Flamesprayer)。在击败愚钝蜘蛛罗姆 (Rom, the Vacuous Spider) 后再次返回，吉尔伯特将变成一只兽化病人（男），击败他可获得掉落物。
               </p>
               
               <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                 <p className="mb-2">🎁 掉落 (Drops):</p>
                 <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                   <li>222 血之回响 (Blood Echoes)</li>
                   <li>爪印符文 (Clawmark Rune)</li>
                 </ul>
               </div>

               <h3 id="section-npc-quests-lonely-old-dear" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务：孤独的老妇人 (NPC Quests: Lonely Old Dear)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 在亚南中心下水道椽子上方的一所房子里可以找到孤独的老妇人，靠近关在笼子里的狂犬。如果你杀死了她门外的狂犬，她会问是否有安全的地方可去，但在击败神父加斯科因并与欧顿小教堂的居民或约瑟夫卡交谈之前，你无法为她提供避难所。
               </p>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 选择欧顿小教堂 (Select Oedon Chapel):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 如果你把她送到欧顿小教堂，在到达禁忌森林的后半段返回，并多次选择“我也有我的烦恼 (I have my share of woes)”，可以获得<strong>镇静剂 x6 (Sedatives x6)</strong>。如果你继续和她说话，她会出去寻找更多的镇静剂，留下一张纸条，然后晚些时候回来。你可以再次与她交谈获得一个镇静剂，并再次选择“我也有我的烦恼”，但当她再次出去寻找更多镇静剂时，她会死在欧顿小教堂外，在那里你可以找到她的尸体和额外的镇静剂。
               </p>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 选择约瑟夫卡的诊所 (Select Iosefka's Clinic):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 如果你把她送到约瑟夫卡的诊所，你可以回到约瑟夫卡那里获得<strong>麻痹迷雾 x2 (Numbing Mist x2)</strong>，但她最终会因为约瑟夫卡的实验变成一个敌人。
               </p>

               <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                 <p className="mb-2">🎁 掉落 (Drops):</p>
                 <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                   <li>118 血之回响 (Blood Echoes)</li>
                   <li>镇静剂 (Sedative)</li>
                 </ul>
               </div>

               <h3 id="section-npc-quests-eileen" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务：乌鸦艾琳 (NPC Quests: Eileen the Crow)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 在击败神父加斯科因之前，前往亚南中心的椽子处（走过关在笼子里的狂犬）与她见面，并获得<strong>勇敢猎人的印记 x2 (Bold Hunter's Mark x2)</strong> 和<strong>“抖落披风 (Shake off Cape)”动作</strong>。
               </p>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 解锁大教堂区大门后 (After unlocking the Cathedral Ward gate):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 在解锁大教堂区正门（需要猎人首席徽章）之后，但在击败代理人阿梅利亚 (Vicar Amelia) 之前，返回欧顿小教堂，从后面出去左转，在栅栏附近找到艾琳，获得<strong>“嘘！(Shhh!)”动作</strong>。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 现在你可以前往欧顿之墓 (Tomb of Oedon)，她正在那里与亨利克 (Henryk) 战斗。如果你决定帮助她，你将获得<strong>“赞赏 (Approval)”动作</strong>，并从亨利克的尸体上获得<strong>继承人符文 (Heir Rune)</strong>。如果你不帮助她，她就会死，她的任务线也会结束，这意味着你将无法获得猎人猎杀者契约 (Hunter of Hunters covenant) 的猎人誓约 (Hunter Oath)，尽管你可以从她的尸体上拾取乌鸦猎人徽章 (Crow Hunter Badge)。
               </p>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 在击败愚钝蜘蛛罗姆之后 (After defeating Rom, the Vacuous Spider):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 返回大教堂 (Grand Cathedral) 在外面找到艾琳，获得<strong>“等待 (Wait)”动作</strong>。如果你进入大教堂内部，你将进行另一场战斗，击败敌人后，你可以回到艾琳那里获得<strong>乌鸦猎人徽章</strong>和猎人猎杀者契约的<strong>猎人誓约</strong>。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 如果在任何时候你错过了她的某个事件，她就会消失，并在你击败罗姆后在大教堂作为敌对NPC回归。
               </p>

               <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                 <p className="mb-2">🎁 掉落 (Drops):</p>
                 <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                   <li>2,318 血之回响 (Blood Echoes)</li>
                   <li>乌鸦猎人徽章 (Crow Hunter Badge)</li>
                 </ul>
               </div>

               <h3 id="section-npc-quests-viola" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务：维奥拉的女儿 (NPC Quests: Viola's Daughter)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 在亚南中心喷泉广场大门后面的建筑窗户处可以找到维奥拉的女儿（通过下水道中俯瞰下方不死敌人的长梯子到达）。她会要求你找到她的母亲，并给你<strong>小音乐盒 (Tiny Music Box)</strong>，这个道具可以在与神父加斯科因的Boss战中用来对付她的父亲。
               </p>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 在击败神父加斯科因之后 (After defeating Father Gascoigne):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 捡起建筑物顶部的<strong>红宝石胸针 (Red Jeweled Brooch)</strong>，然后回到维奥拉的女儿那里，有两个选择：归还胸针或隐瞒不给。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 如果你归还胸针，小女孩就会消失，下次重新加载该区域时，你可以在下水道击败食人猪 (Maneater Boar) 获得<strong>红色信使缎带 (Red Messenger Ribbon)</strong>。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                 如果你隐瞒胸针，你可以选择送她去一个避难所：
               </p>
               <ul className="list-disc list-inside ml-4 text-[#a3a3a3] mb-6">
                 <li>如果你送她去欧顿小教堂，她会在途中死去，你可以从食人猪那里获得<strong>红色信使缎带</strong>。</li>
                 <li>如果你送她去约瑟夫卡的诊所，你可以回到约瑟夫卡那里获得<strong>铅之灵药 x2</strong>，但她最终会因为约瑟夫卡的实验变成一只野兽（击败后掉落<strong>无形欧顿符文 Formless Oedon Rune</strong>），你将无法继续她的任务线。</li>
               </ul>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 在击败愚钝蜘蛛罗姆之后 (After defeating Rom, the Vacuous Spider):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 只要你选择了能获得红色信使缎带的选项，你就可以回到亚南中心的窗户找到她的姐姐。交出红色信使缎带，然后重新加载该区域，从她们家往下爬梯子，可以在她的尸体上找到<strong>白色信使缎带 (White Messenger Ribbon)</strong>。
               </p>

               <h3 id="section-npc-quests-oedon-dweller" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务：欧顿小教堂的居民 (NPC Quests: Oedon Chapel Dweller)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 与欧顿小教堂的居民交谈（位于大教堂区提灯旁边），即可允许你将人们送到那里。在送去至少一个NPC后，你可以再次与欧顿小教堂的居民交谈以获得<strong>“胜利 (Triumph)”动作</strong>。
               </p>

               <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                 <p className="mb-2">🎁 掉落 (Drops):</p>
                 <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                   <li>202 血之回响 (Blood Echoes)</li>
                   <li>无形欧顿符文 (Formless Oedon Rune)</li>
                 </ul>
               </div>

               <h3 id="section-npc-quests-alfred" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务：血族猎人阿尔弗雷德 (NPC Quests: Vileblood Hunter Alfred)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 阿尔弗雷德可以在大教堂区找到（在通往旧雅南的教堂的另一侧）。如果你同意与他“合作 (Cooperate)”，他会给你<strong>火纸 x2 (Fire Paper x2)</strong> 和<strong>“祈祷 (Prayer)”动作</strong>。然后他可以被召唤去参加圣职者野兽 (Cleric Beast) 的战斗（在亚南中心提灯的捷径附近），或者去参加渴血野兽 (Blood-starved Beast) 的战斗（在向下的楼梯附近，前提是你还没有击败代理人阿梅利亚）。
               </p>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 在获得未开封的召唤状之后 (After gaining the Unopened Summons):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 如果你把在血族女王的房间里找到的<strong>未开封的召唤状 (Unopened Summons)</strong>交给阿尔弗雷德，他会交出<strong>车轮猎人徽章 (Wheel Hunter Badge)</strong>和<strong>“教会鞠躬（男） (Church Bow (Male))”动作</strong>。他会立即前往王座室杀死血族女王安娜丽丝 (Annalise, Queen of the Vilebloods)，在那里你可以与他交谈获得<strong>“咆哮 (Roar)”动作</strong>。你现在可以回到大教堂区的教堂，发现他已经死了，并获得行刑者契约 (Executioners covenant) 的<strong>光辉誓约 (Radiance Oath)</strong>。
               </p>

               <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                 <p className="mb-2">🎁 掉落 (Drops):</p>
                 <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                   <li>1,605 血之回响 (Blood Echoes)</li>
                   <li>火纸 x3 (Fire Paper x3)</li>
                 </ul>
               </div>

               <h3 id="section-npc-quests-arianna" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 NPC任务：妓女阿丽安娜 (NPC Quests: Arianna, Woman of Pleasure)
               </h3>
               
               <p className="text-[#a3a3a3] mb-6">
                 阿丽安娜可以在大教堂区锁定部分的小巷中找到，需要猎人首席徽章 (Hunter Chief Badge)。在击败三个Boss后，阿丽安娜会请求一个安全的地方，你可以选择送她去哪里。
               </p>

               <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                 选择欧顿小教堂 (Select Oedon Chapel):
               </h4>
               <p className="text-[#a3a3a3] mb-6">
                 如果你把她送到欧顿小教堂，你可以回到小教堂与她交谈，获得<strong>“屈膝礼 (Curtsy)”动作</strong>和<strong>阿丽安娜的血液 (Blood of Arianna)</strong>。
               </p>
               <p className="text-[#a3a3a3] mb-6">
                   如果你把阿丽安娜和修女阿德拉 (Sister Adella) 都送到欧顿小教堂，并且使用了 3 瓶阿丽安娜的血液，那么阿德拉会出于嫉妒杀死阿丽安娜。为了防止这种情况，请确保你<strong>不要使用</strong>阿丽安娜的血液，丢弃阿丽安娜的血液，并在阿德拉到达欧顿小教堂时接受阿德拉的血液。
                 </p>
                 <p className="text-[#a3a3a3] mb-6">
                   在击败噩梦之主米克拉什 (Micolash, Host of the Nightmare) 后，你可以回到欧顿之墓，发现阿丽安娜生下了一个婴儿，并获得 <strong>3 点灵视 (Insight)</strong>。如果你选择杀死这个孩子，你将获得<strong>三分之一脐带 (One Third of Umbilical Cord)</strong>，但代价是阿丽安娜的生命。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   选择约瑟夫卡的诊所 (Select Iosefka's Clinic):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   如果你把她送到约瑟夫卡的诊所，你可以回到约瑟夫卡那里获得<strong>麻痹迷雾 x2 (Numbing Mist x2)</strong>，但她最终会因为约瑟夫卡的实验变成一个敌人，你将无法继续她的任务线。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>103 血之回响 (Blood Echoes)</li>
                     <li>阿丽安娜的鞋子 (Arianna's Shoes)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-narrow-minded-man" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：心胸狭窄的男人 (NPC Quests: Narrow Minded Man)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   心胸狭窄的男人出现在妓女阿丽安娜对面的窗户里，在你把阿丽安娜送到安全的地方后，他会听你要说什么。如果你多次与他交谈，他会问哪里安全，并前往你告诉他的<strong>相反</strong>的地方。这意味着如果你把他送到约瑟夫卡的诊所，他实际上会到达欧顿小教堂。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>118 血之回响 (Blood Echoes)</li>
                     <li>刺鼻的血丸 x3 (Pungent Blood Cocktail x3)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-djura" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：退休猎人机枪哥 (NPC Quests: Retired Hunter Djura)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   机枪哥 (Djura) 出现在旧雅南 (Old Yharnam) 的一座高塔上，当玩家在该关卡中前进时，他会使用加特林机枪疯狂地向玩家射击。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   杀死机枪哥 (Kill Djura):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   穿过关卡并爬上高塔与机枪哥交战并击败他。最简单的方法是爬上梯子后立即用你的火器射击他，将他击落高塔，然后重新加载该区域，拾取出现在高塔顶部的<strong>火药桶帮猎人徽章 (Powder Keg Hunter Badge)</strong>。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   避开机枪哥 (Avoid Hunter Djura):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   在击败黑兽帕尔 (Darkbeast Paarl) 后，通过黑兽墓地从后面接近他，不要被他发现，然后与他交谈。如果你选择这种方式接近他，你可以选择放过他所保护的野兽，从而获得<strong>火药桶帮猎人徽章</strong>和<strong>“拍掉灰尘 (Brush off Dust)”动作</strong>。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>875 血之回响 (Blood Echoes)</li>
                     <li>火药桶帮猎人徽章 (Powder Keg Hunter Badge)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-adella" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：修女阿德拉 (NPC Quests: Sister Adella)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   阿德拉可以在未见之村亚哈古尔的子区域——未见之村的监狱 (Hypogean Gaol) 的地窖里找到，她在角落里哭泣。在你装备教会套装（由装备标签指示）之前，她不愿意和你说话，但如果你多次和她说话，她会请求一个安全的地方停留。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   选择欧顿小教堂 (Select Oedon Chapel):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   如果你把她送到欧顿小教堂，你可以回到小教堂与她交谈，获得<strong>“教会鞠躬（女） (Church Bow (Female))”动作</strong>和<strong>阿德拉的血液 (Blood of Adella)</strong>。
                 </p>
                 <p className="text-[#a3a3a3] mb-6">
                   如果你把阿德拉和妓女阿丽安娜都送到欧顿小教堂，并且使用了 3 瓶阿丽安娜的血液，那么阿德拉会出于嫉妒杀死阿丽安娜。为了防止这种情况，请确保你不要使用阿丽安娜的血液，丢弃阿丽安娜的血液，并在阿德拉到达欧顿小教堂时接受阿德拉的血液。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   选择约瑟夫卡的诊所 (Select Iosefka's Clinic):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   如果你把她送到约瑟夫卡的诊所，你可以回到约瑟夫卡那里获得<strong>麻痹迷雾 x2 (Numbing Mist x2)</strong>，但她最终会因为约瑟夫卡的实验变成一个敌人，你将无法继续她的任务线。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>256 血之回响 (Blood Echoes)</li>
                     <li>欧顿蠕动符文 (Oedon Writhe Rune)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-transformed-man" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：变异的男人 / 乞丐 (NPC Quests: Transformed Man)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   变异的男人可以在禁忌森林 (Forbidden Woods) 风车的阳台上找到，通过跳到外面爬上梯子到达齿轮处，然后从附近的门出去即可到达。如果你多次与他交谈，他会请求一个安全的地方停留，并交出<strong>刺鼻的血丸 x2 (Pungent Blood Cocktail x2)</strong>，尽管这不建议这样做，除非你打算在那之后直接杀了他。
                 </p>
                 <p className="text-[#a3a3a3] mb-6">
                   你可以选择把他送到某个地方以获得刺鼻的血丸 x2，然后攻击他，迫使他变回真实形态（可怕的野兽）。如果你想这样做，可以利用风车的门口作为安全区，投掷毒刀直到他死亡。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   选择欧顿小教堂 (Select Oedon Chapel):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   如果你把他送到欧顿小教堂，他会安全抵达，但会开始杀害那里的NPC，以换取怪兽血丸（每个Boss后杀害 1 个NPC）。
                 </p>
                 <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                   <table className="w-full text-sm text-left">
                     <thead>
                       <tr className="border-b border-[#333333] bg-[#141414]">
                         <th className="py-2 px-3">NPC</th>
                         <th className="py-2 px-3">奖励 (Reward)</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr className="border-b border-[#262626]">
                         <td className="py-2 px-3 font-medium">心胸狭窄的男人 (Narrow Minded Man)</td>
                         <td className="py-2 px-3">怪兽血丸 x3 (Beast Blood Pellet x3)</td>
                       </tr>
                       <tr className="border-b border-[#262626]">
                         <td className="py-2 px-3 font-medium">孤独的老妇人 (Lonely Old Dear)</td>
                         <td className="py-2 px-3">怪兽血丸 x2 (Beast Blood Pellet x2)</td>
                       </tr>
                       <tr className="border-b border-[#262626]">
                         <td className="py-2 px-3 font-medium">修女阿德拉 (Sister Adella)</td>
                         <td className="py-2 px-3">怪兽血丸 x2 (Beast Blood Pellet x2)</td>
                       </tr>
                       <tr className="border-b border-[#262626]">
                         <td className="py-2 px-3 font-medium">欧顿小教堂的居民 (Oedon Chapel Dweller)</td>
                         <td className="py-2 px-3">怪兽血丸 x3 (Beast Blood Pellet x3)</td>
                       </tr>
                       <tr className="border-b border-[#262626]">
                         <td className="py-2 px-3 font-medium">妓女阿丽安娜 (Arianna, Woman of Pleasure)</td>
                         <td className="py-2 px-3">怪兽血丸 x2 (Beast Blood Pellet x2)</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   选择约瑟夫卡的诊所 (Select Iosefka's Clinic):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   如果你把他送到约瑟夫卡的诊所，你可以回到约瑟夫卡那里获得<strong>怪兽血丸 x2 (Beast Blood Pellet x2)</strong>，但他最终会因为约瑟夫卡的实验变成一个敌人。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>7,492 血之回响 (Blood Echoes)</li>
                     <li>野兽符文 (Beast Rune)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-provost-willem" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：威廉大师 (NPC Quests: Provost Willem)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   威廉大师坐在摇椅上，就在拜尔金沃斯 (Brygenwerth) 需要月之观景台钥匙 (Lunarium Key) 的双开门后面。虽然这被认为是Boss竞技场的一部分，但威廉不是Boss，与他交谈会赋予你 <strong>2 点灵视 (Insight)</strong>。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>2,545 血之回响 (Blood Echoes)</li>
                     <li>眼睛符文 (Eye Rune)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-annalise" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：血族女王安娜丽丝 (NPC Quests: Annalise, Queen of the Vilebloods)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   安娜丽丝位于洛格力斯王座 (Logarius' Seat) 中烈士洛格力斯王座后面的隐藏王座室中，通过装备击败烈士洛格力斯后找到的<strong>幻境皇冠 (Crown of Illusions)</strong>即可进入。如果你在蜡烛圈中在安娜丽丝面前“跪下 (Kneel)”，你可以加入她的契约，获得该隐赫斯特血族契约 (Cainhurst Vilebloods covenant) 的<strong>腐败誓约 (Corruption Oath)</strong>、<strong>该隐赫斯特徽章 (Cainhurst Badge)</strong>和<strong>“致敬 (Respect)”动作</strong>。
                 </p>
                 <p className="text-[#a3a3a3] mb-6">
                   然后，你可以上交在装备誓约时通过杀死猎人或NPC猎人获得的血污 (Blood Dregs)，以获得<strong>“深深致敬 (Deep Respect)”动作</strong>。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   将未开封的召唤状交给阿尔弗雷德 (Give the Unopened Summons to Alfred):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   如果你将在血族女王房间桌子上找到的<strong>未开封的召唤状</strong>交给血族猎人阿尔弗雷德，他会杀死安娜丽丝。然后你可以检查王座椅子获得<strong>女王的血肉 (Queenly Flesh)</strong>，在击败宇宙之女伊碧塔斯 (Ebrietas, Daughter of the Cosmos) 后，可以将其带到大教堂区上层 (Upper Cathedral Ward) 的绝望祭坛 (Altar of Despair) 使她复活。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>4,200 血之回响 (Blood Echoes)</li>
                     <li>女王的血肉 (Queenly Flesh)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-patches" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：蜘蛛帕奇 (NPC Quests: Patches the Spider)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   进入禁忌森林后，帕奇会取代边境或雅南地区任何带有红灯的房屋/窗户里的NPC。与他交谈将获得<strong>扁桃体石头 (Tonsil Stone)</strong>，这会揭示次级亚米达拉 (Lesser Amygdala)，并允许你被位于大教堂区（靠近未见之村亚哈古尔入口）的次级亚米达拉传送到教学大楼1楼 (Lecture Building 1F)。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   到达教学大楼1楼后 (After reaching the Lecture Building 1F):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   帕奇会住在教学大楼1楼提灯对面的房间里，你可以隔着门和他说话，但他不会说太多。如果你继续前往噩梦边境 (Nightmare Frontier)，并前往俯瞰沼泽小巷的宝藏处（经过巨大的迷失之子 Giant Lost Childs），会触发一段过场动画，帕奇会将你推入下面的坑中。
                 </p>
                 <p className="text-[#a3a3a3] mb-6">
                   这可以通过在物品上方的墙上发现他并用鹅卵石 (Pebble) 击中他来避免，这会导致他坠落身亡，但会阻止你完成他的任务线。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   在噩梦边境被推倒后 (After being knocked down in the Nightmare Frontier):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   前往教学大楼2楼（通过击败重生古神 The One Reborn 后检查木乃伊进入），并爬上教会巨人附近的梯子，与帕奇面对面交谈，获得<strong>“乞求饶命 (Beg for Life)”动作</strong>。如果你选择“完全没有 (Not at All)”，帕奇会交出<strong>逆时针变形符文 (Anti-Clockwise Metamorphosis Rune)</strong>，并作为商人出现在圣杯地牢 (Chalice Dungeons) 中。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>5,453 血之回响 (Blood Echoes)</li>
                     <li>古神的智慧 (Great One's Wisdom)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-valtr" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：联盟大师沃尔特 (NPC Quests: Valtr, Master of the League)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   沃尔特位于禁忌森林第一个提灯旁边的上锁建筑内。为了到达他那里，你需要穿过禁忌森林到达风车，离开建筑物来到一座有蛇寄生虫 (Snake Parasite) 的桥，然后向右走上山找到电梯捷径。与沃尔特交谈以加入他的契约，获得联盟契约 (League covenant) 的<strong>不洁誓约 (Impurity Oath)</strong>。
                 </p>
                 <p className="text-[#a3a3a3] mb-6">
                   然后，你可以捏碎在装备誓约时作为合作幻影击败Boss而获得的害虫 (Vermin)。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   捏碎 1 只害虫后 (After crushing 1 Vermin):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   与他交谈以获得<strong>联盟誓约动作 (League Oath gesture)</strong>。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   捏碎 5 只害虫后 (After crushing 5 Vermin):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   与他交谈以获得额外的对话，以及对联盟誓约动作的小幅升级，然后离开该区域并返回以找到<strong>大师的独眼铁盔 (Master's One-Eyed Helm)</strong>。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>7,772 血之回响 (Blood Echoes)</li>
                     <li>独眼铁盔 (One-Eyed Iron Helm)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-simon" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：寻找秘密的西蒙 (NPC Quests: Simon, Seeker of Secrets)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   在猎人的梦魇 (Hunter's Nightmare) 到达血河后，过桥进入欧顿神庙 (Oedon Temple) 的背面，可以找到站在角落里的西蒙。当与他交谈时，你需要声明你对噩梦感兴趣，以继续他的任务线。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   在击败丑陋的野兽路德维希后 (After defeating Ludwig the Accursed):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   在Boss竞技场中，你会找到圣剑路德维希（丑陋的野兽路德维希的最终形态）的头部，你可以穿着任何教会套装与它交谈。如果在被问到时你回答“是 (Yes)”，西蒙就不会出现在这个位置或后来的研究大厅中，而是会出现在小渔村 (Fishing Hamlet)。如果在被问到时你回答“否 (No)”，重新加载该区域会发现西蒙站在路德维希的头部附近，与他交谈可以获得一些额外的对话和<strong>神圣月光之剑 (Holy Moonlight Sword)</strong>。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   在研究大厅通过拉杆升起楼梯后 (After raising the stairs via the lever in the Research Hall):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   西蒙将出现在提灯旁边，并提供额外的对话，但没有奖励。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   在到达小渔村的灯塔小屋后 (After reaching the Lighthouse Hut in the Fishing Hamlet):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   在灯塔小屋提灯的门旁，与濒死的西蒙多次交谈，可以获得<strong>西蒙的弓刃 (Simon's Bowblade)</strong>和<strong>地下牢房内室钥匙 (Underground Cell Inner Chamber Key)</strong>。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>9,401 血之回响 (Blood Echoes)</li>
                     <li>西蒙的弓刃 (Simon's Bowblade)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-ludwig-head" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：圣剑路德维希的头颅 (NPC Quests: Ludwig, the Holy Blade)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   在击败丑陋的野兽路德维希后，路德维希的头部将出现在通往地下牢房楼梯的左侧。如果你在没有穿着任何教会服装的情况下与他交谈，他会说几句话然后陷入沉默。如果你穿着任何教会服装与他交谈，他会问你教会的猎人们是否遵循他的信条：
                 </p>
                 <ul className="list-disc list-inside ml-4 text-[#a3a3a3] mb-6">
                   <li>如果你回答<strong>是 (Yes)</strong>，他会很高兴并给你<strong>神圣月光之剑 (Holy Moonlight Sword)</strong>，尽管寻找秘密的西蒙将不会出现在接下来的 2 个位置。</li>
                   <li>如果你回答<strong>否 (No)</strong>，他会变得沮丧并死去。</li>
                 </ul>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>神圣月光之剑 (Holy Moonlight Blade)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-brador" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：教会刺客布拉多 (NPC Quests: Brador, Church Assassin)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   在击败丑陋的野兽路德维希后，走下地下牢房的楼梯，隔着锁着的牢房门与布拉多交谈。无论选择哪个选项回答他的问题，都不会影响他的对话，只是会得到不同的回答。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   在到达小渔村的灯塔小屋后 (After reaching the Lighthouse Hut in the Fishing Hamlet):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   布拉多将作为幻影在三个地点入侵，每次掉落他的一件不同的盔甲：
                 </p>
                 <ul className="list-disc list-inside ml-4 text-[#a3a3a3] mb-6">
                   <li>在村庄上方的第一座桥上，刚过灯塔小屋（掉落：<strong>染血臂套 Bloodied Arm Bands</strong>）</li>
                   <li>在同一个村庄下方的水中，通过支撑上层的一些横梁旁的楼梯进入建筑物后（掉落：<strong>野兽皮衣 Beast Hide Garb</strong>）</li>
                   <li>在隧道的下层，一个有铅之灵药的死胡同处，在跳下到有电梯的区域之前（掉落：<strong>染血长裤 Bloodied Trousers</strong>）</li>
                 </ul>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   在获得地下牢房内室钥匙后 (After obtaining the Underground Cell Inner Chamber Key):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   返回地下尸堆，在他的牢房楼梯附近最后一次击败布拉多的幻影，获得<strong>布拉多的证物 (Brador's Testimony)</strong>（头部防具）。你现在可以进入他的牢房并杀死他，获得武器<strong>放血者 (Bloodletter)</strong>以完成他的任务。
                 </p>
                 <p className="text-[#a3a3a3] mb-6">
                   你也可以直接在他牢房外击败幻影然后杀死他，而不必去遭遇他的其他幻影，你仍然可以获得他的物品，因为它们会出现在他幻影原本会生成的地点。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>放血者 (Bloodletter) 武器</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-adeline" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：爱德琳 (NPC Quests: Adeline)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   爱德琳位于研究大厅 1 楼锁着的门后面。要到达她那里，你需要前往有三个轮椅猎人的 3 楼房间，拉动其中一个拉杆升起电梯，然后乘电梯下到 1 楼。如果你和她说话，她会索要<strong>脑浆 (Brain Fluid)</strong>，脑浆可以在两个地方找到：
                 </p>
                 <ul className="list-disc list-inside ml-4 text-[#a3a3a3] mb-6">
                   <li>第一个脑浆位于研究大厅的椽子上。</li>
                   <li>第二个脑浆位于研究大厅 3 楼和 4 楼之间的楼梯平台上，通过拉动椽子上的拉杆可以到达。</li>
                 </ul>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   在提供 1 个脑浆后 (After offering 1 Brain Fluid):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   与爱德琳交谈可获得<strong>爱德琳的血液 (Blood of Adeline)</strong>；此时身上不能带有阿丽安娜的血液或阿德拉的血液。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   在重新加载区域 3 次后 (After reloading the area 3 times):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   由于第一个脑浆的效果减弱，爱德琳会要求第二个脑浆。交出在研究大厅找到的第二个脑浆，获得<strong>阳台钥匙 (Balcony Key)</strong>。
                 </p>
  
                 <h4 className="text-xl mt-6 mb-4 font-bold text-[#c2c2c2]">
                   再次重新加载区域 3 次后 (After reloading the area 3 times again):
                 </h4>
                 <p className="text-[#a3a3a3] mb-6">
                   爱德琳将变成一个大头娃娃出现在同一个房间的角落里。与她交谈耗尽她的对话，然后<strong>攻击她</strong>以获得最终的脑浆，然后将脑浆交给她，获得<strong>乳草誓约 (Milkweed Oath)</strong>。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>723 血之回响 (Blood Echoes)</li>
                     <li>阳台钥匙 (Balcony Key)</li>
                     <li>乳草誓约 (Milkweed Oath)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-yamamura" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：流浪者山村 (NPC Quests: Yamamura the Wanderer)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   在击败丑陋的野兽路德维希后进入地下牢房时，你可以听到山村的声音，但你无法进入他的牢房。为了进入他的牢房，你需要推进到研究大厅，使用椽子上的拉杆升起楼梯，然后下到 3 楼西侧找到<strong>地下牢房钥匙 (Underground Cell Key)</strong>。你现在可以进入他的牢房并杀了他以结束他的折磨，从而获得<strong>山村套装 (Yamamura Attire Set)</strong>。
                 </p>
  
                 <div className="mt-4 pt-3 border-t border-[#333333] font-bold text-[#e0e0e0] mb-8">
                   <p className="mb-2">🎁 掉落 (Drops):</p>
                   <ul className="list-disc list-inside ml-4 font-normal text-[#a3a3a3]">
                     <li>??? 血之回响 (Blood Echoes)</li>
                     <li>山村套装 (Yamamura Attire Set)</li>
                   </ul>
                 </div>
  
                 <h3 id="section-npc-quests-fishing-priest" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                   NPC任务：小渔村祭司 (NPC Quests: Fishing Hamlet Priest)
                 </h3>
                 
                 <p className="text-[#a3a3a3] mb-6">
                   小渔村祭司在星辰钟塔的玛丽亚女士的Boss竞技场到小渔村第一个提灯之间的道路上巡逻。虽然他通常只是语无伦次地咆哮一些关于背景故事的碎片，但如果你装备了<strong>乳草誓约 (Milkweed Oath)</strong>与他交谈，他会交出猎人工具<strong>被诅咒的混合物 (Accursed Brew)</strong>。
                 </p>
                 
               </div>
  
               {/* Chalice Dungeons Section */}
               <h2 id="section-chalice-dungeons" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                 <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                 圣杯地牢 (Chalice Dungeons)
               </h2>
  
               <h3 id="section-pthumerian-labyrinth" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 苏美鲁迷宫 (Pthumerian Labyrinth)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               <h3 id="section-central-pthumerian-labyrinth" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 中央苏美鲁迷宫 (Central Pthumerian Labyrinth)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               <h3 id="section-lower-pthumerian-labyrinth" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 下层苏美鲁迷宫 (Lower Pthumerian Labyrinth)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               <h3 id="section-cursed-pthumerian-defilement" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 受诅咒的苏美鲁污秽 (Cursed Pthumerian Defilement)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               <h3 id="section-pthumeru-ihyll" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 苏美鲁伊忽尔 (Pthumeru Ihyll)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               <h3 id="section-hintertomb" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 内墓穴 (Hintertomb)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               <h3 id="section-lower-hintertomb" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 下层内墓穴 (Lower Hintertomb)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               <h3 id="section-ailing-loran" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 衰弱的罗伦城 (Ailing Loran)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               <h3 id="section-lower-ailing-loran" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 下层衰弱的罗伦城 (Lower Ailing Loran)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               <h3 id="section-isz-gravestone" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 伊兹墓碑 (Isz Gravestone)
               </h3>
               <p className="text-[#a3a3a3] mb-6 italic">- 待补充 (To Be Continued)</p>
  
               {/* Items & Equipment Section */}
               <h2 id="section-items-equipment" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                 <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                 物品与装备 (Items & Equipment)
               </h2>
               
               <p className="text-[#a3a3a3] mb-6">
                 以下是在游戏中获得的所有物品和装备的列表，以及在哪里可以找到它们的快速指南。请注意，列表是按照它们在游戏中出现的顺序组织的，并且获取它们的位置将仅涵盖最常见的位置。
               </p>

               <h3 id="section-consumables" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 消耗品 (Consumables)
               </h3>

               <div className="space-y-6">
                 {/* Blood Vial */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">采血瓶 (Blood Vial)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>恢复 40% 的生命值</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买 (180-900 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Quicksilver Bullets */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#e0e0e0] text-lg mb-2">水银子弹 (Quicksilver Bullets)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>用于发射左手武器</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买 (160-500 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Iosefka's Blood Vial */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">约瑟夫卡的采血瓶 (Iosefka's Blood Vial)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>恢复 70% 的生命值</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由约瑟夫卡给予</li>
                       <li>在约瑟夫卡的诊所击败小型神圣使者掉落</li>
                       <li>在曼西斯梦魇中找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blood of Arianna */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">阿丽安娜的血液 (Blood of Arianna)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>恢复 25% 的生命值并提高精力恢复速度</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由妓女阿丽安娜给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blood of Adella */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">阿德拉的血液 (Blood of Adella)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>恢复 25% 的生命值，并在几秒钟内持续恢复生命</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由修女阿德拉给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blood of Adeline */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">爱德琳的血液 (Blood of Adeline)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>恢复 50% 的生命值，并在几秒钟内持续恢复生命</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由爱德琳给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Antidote */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-purple-900 text-lg mb-2">解毒药 (Antidote)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>清除毒素积累并治愈慢毒</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由食腐乌鸦、兽化病人（女）掉落</li>
                       <li>在猎人梦境的信使处购买，需要剑之猎人徽章 (300-2800 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Beast Blood Pellet */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-900 text-lg mb-2">怪兽血丸 (Beast Blood Pellet)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>增加你的伤害 60 秒，基于你的兽性和野兽量表</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由天灾兽、被野兽附身的灵魂掉落</li>
                       <li>在猎人梦境的灵视信使处购买，需要宇宙之眼守望者徽章 (2 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Sedative */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#e0e0e0] text-lg mb-2">镇静剂 (Sedative)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>清除狂暴积累</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由孤独的老妇人给予</li>
                       <li>由眼之花园、学者掉落</li>
                       <li>在猎人梦境的信使处购买，需要宇宙之眼守望者徽章 (600-5600 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blue Elixir */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-blue-600 text-lg mb-2">蓝色灵药 (Blue Elixir)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使你部分透明 30 秒</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由教会仆从、教会巨人、小型神圣使者掉落</li>
                       <li>在猎人梦境的灵视信使处购买，需要宇宙之眼守望者徽章 (2 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Lead Elixir */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#a3a3a3] text-lg mb-2">铅之灵药 (Lead Elixir)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>减慢你的步行和跑步速度，以避免在 30 秒内受到攻击而硬直</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由巨大的迷失之子掉落</li>
                       <li>在血月之后，在猎人梦境的灵视信使处购买 (2 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Molotov Cocktail */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-orange-600 text-lg mb-2">燃烧瓶 (Molotov Cocktail)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>根据你的奥术属性造成火焰伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买 (180-2000 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Rope Molotov Cocktail */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-orange-600 text-lg mb-2">绳索燃烧瓶 (Rope Molotov Cocktail)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>根据你的奥术属性造成火焰伤害，同时将燃烧瓶扔在你身后</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买，需要火药桶帮猎人徽章 (190-2100 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Delayed Molotov */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-orange-600 text-lg mb-2">延迟燃烧瓶 (Delayed Molotov)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>根据你的奥术属性造成火焰伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买，需要击锤猎人徽章 (270-3000 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Delayed Rope Molotov */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-orange-600 text-lg mb-2">延迟绳索燃烧瓶 (Delayed Rope Molotov)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>根据你的奥术属性造成火焰伤害，同时将燃烧瓶扔在你身后</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买，需要击锤猎人徽章 (290-3200 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Oil Urn */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">油瓮 (Oil Urn)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使敌人对下一次受到的火焰伤害变得脆弱</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买，需要火药桶帮猎人徽章 (360-3000 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Pungent Blood Cocktail */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">刺鼻的血丸 (Pungent Blood Cocktail)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>用它的气味吸引敌人，让它们完全忽略你</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由行刑者掉落</li>
                       <li>在猎人梦境的信使处购买，需要锯肉刀猎人徽章 (1000-15000 血之回响)</li>
                       <li>在猎人梦境的灵视信使处购买 (1 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Numbing Mist */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-indigo-900 text-lg mb-2">麻痹迷雾 (Numbing Mist)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>在 1 分钟内使治疗效果无效</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在废弃的该隐赫斯特城堡中找到</li>
                       <li>由该隐仆从（刺剑）掉落</li>
                       <li>在猎人梦境的灵视信使处购买，需要该隐赫斯特徽章 (2 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Throwing Knife */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">飞刀 (Throwing Knife)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>根据你的力量造成物理伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由迷宫老鼠掉落</li>
                       <li>在猎人梦境的信使处购买，需要锯肉刀猎人徽章 (100-1000 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Poison Knife */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-purple-900 text-lg mb-2">毒刀 (Poison Knife)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>根据敌人的抗性造成慢毒积累</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买，需要宇宙之眼守望者徽章 (300-2800 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Pebble */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#8a8a8a] text-lg mb-2">鹅卵石 (Pebble)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>吸引一个敌人的注意</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由食腐乌鸦、眼球收集者、冬之灯掉落</li>
                       <li>在猎人梦境的信使处购买 (10 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Fire Paper */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-orange-600 text-lg mb-2">火纸 (Fire Paper)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>为每次攻击增加 80 点固定火焰伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买，需要闪耀剑之猎人徽章 (720-12600 血之回响)</li>
                       <li>在猎人梦境的灵视信使处购买，需要闪耀剑之猎人徽章 (1 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Bolt Paper */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-blue-600 text-lg mb-2">闪电纸 (Bolt Paper)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>为每次攻击增加 80 点固定闪电伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由劫持者掉落</li>
                       <li>在猎人梦境的信使处购买，需要火花猎人徽章 (900-14000 血之回响)</li>
                       <li>在猎人梦境的灵视信使处购买，需要火花猎人徽章 (1 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Bone Marrow Ash */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#a3a3a3] text-lg mb-2">骨髓灰 (Bone Marrow Ash)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>增加你下一发水银子弹的伤害，仅限左手武器</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由雅南暴徒（步枪）、雅南暴徒（步枪与弯刀）掉落</li>
                       <li>在猎人梦境的信使处购买，需要闪耀剑之猎人徽章 (320-5600 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Shaman Bone Blade */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-green-700 text-lg mb-2">萨满骨刃 (Shaman Bone Blade)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>刺伤敌人以使其困惑几秒钟</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由吸脑怪掉落</li>
                       <li>在获得下层苏美鲁圣杯后，在猎人梦境的灵视信使处购买 (1 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Bold Hunter's Mark */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">勇敢猎人的印记 (Bold Hunter's Mark)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>返回提灯且不丢失血之回响</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由腐烂的尸体掉落</li>
                       <li>在猎人梦境的信使处购买，需要剑之猎人徽章 (400-1200 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Shining Coins */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-500 text-lg mb-2">发光的硬币 (Shining Coins)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>丢下一枚硬币以创建可见的路径</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由猎人的仆从掉落</li>
                       <li>在猎人梦境的信使处购买，需要闪耀剑之猎人徽章 (20 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Hand Lantern */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-600 text-lg mb-2">手提灯 (Hand Lantern)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>发出明亮的光，但会稍微影响精力恢复</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买，需要剑之猎人徽章 (2000 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Monocular */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">单筒望远镜 (Monocular)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>观察远处的物体，可用于瞄准远程武器和消耗品</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在大教堂区找到，在需要猎人首席徽章才能打开的锁着的门对面的楼梯下</li>
                     </ul>
                   </div>
                 </div>

                 {/* Tiny Music Box */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-pink-700 text-lg mb-2">小音乐盒 (Tiny Music Box)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>在短时间内分散神父加斯科因的注意力</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由维奥拉的女儿给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Coldblood Dew (1-3) */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-700 text-lg mb-2">冷血露 (1-3) (Coldblood Dew)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使用后获得 350 / 500 / 1000 血之回响</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由寄生幼虫掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Thick Coldblood (4-6) */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-800 text-lg mb-2">浓稠冷血 (4-6) (Thick Coldblood)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使用后获得 1200 / 1500 / 1800 血之回响</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由爬行者掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Frenzied Coldblood (7-9) */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">狂暴冷血 (7-9) (Frenzied Coldblood)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使用后获得 2000 / 3000 / 5000 血之回响</p>
                 </div>

                 {/* Kin Coldblood (10-12) */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-purple-800 text-lg mb-2">眷属冷血 (10-12) (Kin Coldblood)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使用后获得 8000 / 10000 / 20000 血之回响</p>
                 </div>

                 {/* Great One Coldblood */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-800 text-lg mb-2">古神冷血 (Great One Coldblood)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使用后获得 40000 血之回响</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在深度 5 的圣杯地牢中找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Old Great One Coldblood */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-900 text-lg mb-2">古老神祇冷血 (Old Great One Coldblood)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使用后获得 50000 血之回响</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在深度 5 的圣杯地牢中找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Madman's Knowledge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-indigo-700 text-lg mb-2">狂人的知识 (Madman's Knowledge)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>获得 1 灵视 (Insight)</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在整个血源诅咒中都能找到</li>
                       <li>由神圣幼体掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Great One's Wisdom */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-indigo-900 text-lg mb-2">古神的智慧 (Great One's Wisdom)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>获得 2 灵视 (Insight)</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在拜尔金沃斯中找到</li>
                       <li>在曼西斯梦魇中找到</li>
                       <li>由蜘蛛帕奇掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* One Third of Umbilical Cord */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">三分之一脐带 (One Third of Umbilical Cord)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>获得 3 灵视 (Insight)（集齐3个并在最终Boss前使用可触发真结局）</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在废弃旧工厂中找到</li>
                       <li>在击败愚钝蜘蛛罗姆后，由约瑟夫卡掉落</li>
                       <li>在击败噩梦之主米克拉什后，由妓女阿丽安娜掉落</li>
                       <li>由梅高的奶妈掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blood Dreg */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-800 text-lg mb-2">血污 (Blood Dreg)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>获得 1 灵视 (Insight)（可用于向血族女王献上）</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>装备腐败符文时，由猎人NPC或入侵者掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Red Jeweled Brooch */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-600 text-lg mb-2">红宝石胸针 (Red Jeweled Brooch)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使用后获得红宝石血宝石（或交还给小女孩）</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在欧顿之墓的建筑物屋顶上找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Gold Pendant */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-600 text-lg mb-2">金色吊坠 (Gold Pendant)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使用以获得金色血宝石</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由代理人阿梅利亚掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Tear Stone */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-blue-300 text-lg mb-2">泪石 (Tear Stone)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>使用以获得泪水血宝石</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由人偶在交换小发饰后给予</li>
                     </ul>
                   </div>
                 </div>
               </div>

               <h3 id="section-hunter-tools" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 猎人工具 (Hunter Tools)
               </h3>

               <div className="space-y-6">
                 {/* Old Hunter Bone */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">老猎人骨头 (Old Hunter Bone)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 15 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>增加你的翻滚和滑步速度</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在废弃旧工厂中找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Tiny Tonitrus */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-blue-600 text-lg mb-2">小型雷霆 (Tiny Tonitrus)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 25 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>造成受你奥术属性加成的闪电伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在未见之村亚哈古尔找到（通过大教堂区进入）</li>
                     </ul>
                   </div>
                 </div>

                 {/* Empty Phantasm Shell */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-indigo-500 text-lg mb-2">中空的幻象外壳 (Empty Phantasm Shell)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 15 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>为每次攻击增加 80 点固定的奥术伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在拜尔金沃斯豪宅的顶层找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blacksky Eye */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-purple-800 text-lg mb-2">黑天之眼 (Blacksky Eye)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 16 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>造成受你奥术属性加成的奥术伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在研究大厅的阳台上找到，需要阳台钥匙 (Balcony Key)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Augur of Ebrietas */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-teal-800 text-lg mb-2">伊碧塔斯的预兆 (Augur of Ebrietas)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 18 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>造成受你奥术属性加成的奥术伤害（可用于枪反或打出背刺硬直）</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在教学大楼 1 楼 (Lecture Building 1F) 的阶梯教室里找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* A Call Beyond */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">远方的呼唤 (A Call Beyond)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 40 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>造成受你奥术属性加成的巨大奥术伤害（群星爆炸）</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在大教堂上方的阳台上找到，通过打破明花花园 (Lumenflower Gardens) 的大窗户进入</li>
                     </ul>
                   </div>
                 </div>

                 {/* Choir Bell */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-600 text-lg mb-2">合唱团钟 (Choir Bell)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 20 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>治疗自己和周围的盟友，治疗量受你的奥术属性加成，并治愈异常状态</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在曼西斯梦魇 - 中层 (Mergo's Loft - Middle) 的椽子上找到，需要击败噩梦之主米克拉什并获得铁门钥匙 (Iron Door Key) 后进入</li>
                     </ul>
                   </div>
                 </div>

                 {/* Beast Roar */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-800 text-lg mb-2">野兽咆哮 (Beast Roar)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 15 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>击倒周围的敌人，并弹开飞行道具</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在禁忌森林中，关着狂犬的笼子后面的房子里找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Madaras Whistle */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">马达拉斯的哨子 (Madaras Whistle)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 18 血质 (Bloodtinge)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>召唤巨蛇，造成受你血质属性加成的伤害（注意巨蛇也会伤害到你）</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在完成联盟大师沃尔特的任务线后，在禁忌森林击败马达拉斯双胞胎弟弟获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Executioner's Gloves */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-purple-900 text-lg mb-2">行刑者的手套 (Executioner's Gloves)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 20 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>发射追踪怨灵，造成受你奥术属性加成的奥术伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在废弃的该隐赫斯特城堡中，从狭窄的窗台跳下后在一个图书馆里找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Accursed Brew */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-green-900 text-lg mb-2">被诅咒的混合物 (Accursed Brew)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 30 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>投掷诅咒头骨，造成受你奥术属性加成的奥术伤害</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>装备乳草誓约后，由小渔村祭司给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Messenger's Gift */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#a3a3a3] text-lg mb-2">信使的礼物 (Messenger's Gift)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-2"><strong>需求：</strong> 10 奥术 (Arcane)</p>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>将你变成一个信使（用于伪装）</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在噩梦边境的毒沼泽中，在一个冬之灯（大脑怪）后面找到</li>
                     </ul>
                   </div>
                 </div>
               </div>

               <h3 id="section-multiplayer-covenant" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 多人游戏与契约物品 (Multiplayer & Covenant Items)
               </h3>

               <div className="space-y-6">
                 {/* Vermin */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">害虫 (Vermin)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>捏碎以提高你在联盟契约中的排名</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人的梦魇中由红眼老猎人掉落</li>
                       <li>装备联盟誓约时，作为幻影帮助其他玩家击败Boss后获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Vileblood Register */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-800 text-lg mb-2">血族名册 (Vileblood Register)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>查看该隐赫斯特血族契约的排行榜</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在废弃的该隐赫斯特城堡中，位于捷径电梯旁边</li>
                     </ul>
                   </div>
                 </div>

                 {/* League Staff */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-800 text-lg mb-2">联盟手杖 (League Staff)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>查看联盟契约的排行榜</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>加入契约后，由联盟大师沃尔特给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Beckoning Bell */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">召唤钟 (Beckoning Bell)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>消耗 1 灵视来召唤盟友，但每增加一个盟友，Boss的生命值也会相应增加</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>获得 1 灵视后，由猎人梦境的信使给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Small Resonant Bell */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-blue-600 text-lg mb-2">小共鸣钟 (Small Resonant Bell)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>摇响以作为盟友被其他玩家召唤</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的灵视信使处购买 (1 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Sinister Resonant Bell */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-600 text-lg mb-2">险恶共鸣钟 (Sinister Resonant Bell)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>摇响以作为敌对入侵者被召唤到其他玩家的世界</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的灵视信使处购买 (1 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Silencing Blank */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#8a8a8a] text-lg mb-2">静默空白 (Silencing Blank)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>中断共鸣，或将召唤的盟友送回他们的世界，或结束自己的入侵返回原世界</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>获得 1 灵视后，由猎人梦境的信使给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Hunter's Mark */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#e0e0e0] text-lg mb-2">猎人的印记 (Hunter's Mark)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>返回提灯，但代价是失去你所有的血之回响</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>默认自带</li>
                     </ul>
                   </div>
                 </div>

                 {/* Notebook */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">笔记本 (Notebook)</h4>
                   <p className="text-[#a3a3a3] text-sm mb-3"><strong>效果：</strong>阅读和评价他人的留言，或留下自己的信息</p>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由猎人梦境的信使给予</li>
                     </ul>
                   </div>
                 </div>
               </div>

               <h3 id="section-materials" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 升级与仪式材料 (Materials)
               </h3>

               <div className="space-y-6">
                 {/* Blood Stone Shard */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#a3a3a3] text-lg mb-2">血石碎片 (Blood Stone Shard)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买，需要闪耀剑之猎人徽章 (2000 血之回响)</li>
                       <li>在夜晚降临后，在猎人梦境的灵视信使处购买 (1 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Twin Blood Stone Shards */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">双子血石碎片 (Twin Blood Stone Shards)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人梦境的信使处购买，需要宇宙之眼守望者徽章 (10000 血之回响)</li>
                       <li>在血月之后，在猎人梦境的灵视信使处购买 (2 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blood Stone Chunk */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#e0e0e0] text-lg mb-2">血石块 (Blood Stone Chunk)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由天灾兽（亚哈古尔 + 大教堂区上层）、教会巨人（教学大楼2楼）、古代的迷失之子掉落</li>
                       <li>在深度 4 或更高的圣杯地牢中找到</li>
                       <li>在击败重生古神后，在猎人梦境的灵视信使处购买 (20 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blood Rock */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">血岩 (Blood Rock)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在曼西斯梦魇中，将曼西斯的大脑掉落后，在其所在的塔底找到</li>
                       <li>在深度 5 的圣杯地牢中找到</li>
                       <li>在猎人梦境的灵视信使处购买 (60 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Ritual Blood (1-5) */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-800 text-lg mb-2">仪式之血 (1-5) (Ritual Blood)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li><strong>(1):</strong> 获得苏美鲁圣杯后，在信使处购买 (2500 血之回响)</li>
                       <li><strong>(2):</strong> 获得受污的圣杯后，在信使处购买 (6000 血之回响)</li>
                       <li><strong>(3):</strong> 获得伟大的苏美鲁伊忽尔圣杯后，在信使处购买 (12000 血之回响)</li>
                       <li><strong>(4):</strong> 击败苏美鲁女王雅南后，在信使处购买 (24000 血之回响)</li>
                       <li><strong>(5):</strong> 在大教堂区上层的门旁找到；在深度 4 或更高的圣杯地牢中找到；在多周目 (NG+) 的信使处购买 (48000 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Tomb Mold (1-5) */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-900 text-lg mb-2">坟墓霉菌 (1-5) (Tomb Mold)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li><strong>(1):</strong> 获得险恶的内墓穴始源圣杯后，在信使处购买 (2000 血之回响)</li>
                       <li><strong>(2):</strong> 获得受污的圣杯后，在信使处购买 (5000 血之回响)</li>
                       <li><strong>(3):</strong> 获得伟大的苏美鲁伊忽尔圣杯后，在信使处购买 (10000 血之回响)</li>
                       <li><strong>(4):</strong> 击败苏美鲁女王雅南后，在信使处购买 (20000 血之回响)</li>
                       <li><strong>(5):</strong> 在深度 5 的圣杯地牢中找到；在多周目 (NG+) 的信使处购买 (40000 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Coldblood Flowerbud */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-pink-700 text-lg mb-2">冷血花蕾 (Coldblood Flowerbud)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在噩梦边境中找到</li>
                       <li>获得衰弱的罗伦城圣杯后，在灵视信使处购买 (2 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Coldblood Flower Bulb */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-pink-800 text-lg mb-2">冷血花球 (Coldblood Flower Bulb)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在衰弱的罗伦城或下层衰弱的罗伦城圣杯地牢中找到</li>
                       <li>在多周目 (NG+) 的灵视信使处购买 (4 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blooming Coldblood Flower */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-pink-900 text-lg mb-2">盛开的冷血花 (Blooming Coldblood Flower)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由罗伦城神职人员掉落</li>
                       <li>在下层衰弱的罗伦城圣杯地牢中找到</li>
                       <li>在多周目 (NG+) 的灵视信使处购买 (8 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Arcane Haze */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#8a0303] text-lg mb-2">奥术暗霾 (Arcane Haze)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>使用车间暗霾抽取器 (Workshop Haze Extractor) 从其他圣杯地牢材料中提取</li>
                     </ul>
                   </div>
                 </div>

                 {/* Bloodshot Eyeball */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-800 text-lg mb-2">充血眼球 (Bloodshot Eyeball)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在击败汉威克女巫后，在猎人梦境的灵视信使处购买 (2 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Living String */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-pink-600 text-lg mb-2">活体线 (Living String)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在击败曼西斯的大脑后，在猎人梦境的灵视信使处购买 (10 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Red Jelly */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-700 text-lg mb-2">红色果冻 (Red Jelly)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在教学大楼 1 楼中找到</li>
                       <li>在完成苏美鲁伊忽尔圣杯地牢后，在灵视信使处购买 (5 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Pearl Slug */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-gray-400 text-lg mb-2">珍珠鼻涕虫 (Pearl Slug)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在获得伟大的伊兹圣杯后，在猎人梦境的灵视信使处购买 (3 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Sage's Wrist */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-800 text-lg mb-2">圣者的手腕 (Sage's Wrist)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在深度 2 或 3 的圣杯地牢中找到</li>
                       <li>在多周目 (NG+) 的灵视信使处购买 (1 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Sage's Hair */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#8a8a8a] text-lg mb-2">圣者的头发 (Sage's Hair)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在深度 4 或 5 的圣杯地牢中找到</li>
                       <li>在多周目 (NG+) 的灵视信使处购买 (2 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Inflicted Organ */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">受感染的器官 (Inflicted Organ)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在曼西斯梦魇中，在击败噩梦之主米克拉什后，可以通过从破碎的笼子里翻滚进入的窗户找到</li>
                       <li>在深度 3 或 4 的圣杯地牢中找到</li>
                       <li>在多周目 (NG+) 的灵视信使处购买 (2 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Yellow Backbone */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-600 text-lg mb-2">黄色脊骨 (Yellow Backbone)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由重生古神掉落</li>
                       <li>在深度 5 的圣杯地牢中找到</li>
                       <li>在多周目 (NG+) 的灵视信使处购买 (3 灵视)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Bastard of Loran */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-orange-900 text-lg mb-2">罗伦城的私生子 (Bastard of Loran)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在衰弱的罗伦城或下层衰弱的罗伦城圣杯地牢中找到</li>
                       <li>在多周目 (NG+) 的灵视信使处购买 (7 灵视)</li>
                     </ul>
                   </div>
                 </div>
               </div>

               <h3 id="section-key-items" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 关键物品 (Key Items)
               </h3>

               <div className="space-y-6">
                 {/* Oedon Tomb Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">欧顿之墓钥匙 (Oedon Tomb Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由神父加斯科因掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Lunarium Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">月之观景台钥匙 (Lunarium Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在拜尔金沃斯的豪宅中爬上梯子找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Lecture Theatre Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">阶梯教室钥匙 (Lecture Theatre Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在教学大楼 1 楼找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Upper Cathedral Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">大教堂区上层钥匙 (Upper Cathedral Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在未见之村亚哈古尔找到，通过大教堂区进入</li>
                     </ul>
                   </div>
                 </div>

                 {/* Orphanage Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">孤儿院钥匙 (Orphanage Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在大教堂区上层小教堂顶层的阳台上由吸脑怪掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Iron Door Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#a3a3a3] text-lg mb-2">铁门钥匙 (Iron Door Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在噩梦之主米克拉什Boss战区域的主楼梯上找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Underground Cell Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">地下牢房钥匙 (Underground Cell Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在研究大厅的 3 楼找到，需要使用椽子上的拉杆后才能到达</li>
                     </ul>
                   </div>
                 </div>

                 {/* Balcony Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">阳台钥匙 (Balcony Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在交给爱德琳两个脑浆后由她给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Astral Clocktower Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">星辰钟塔钥匙 (Astral Clocktower Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>击败失败者获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Underground Cell Inner Chamber Key */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">地下牢房内室钥匙 (Underground Cell Inner Chamber Key)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>完成寻找秘密的西蒙的任务线获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Hunter Chief Emblem */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">猎人首席徽章 (Hunter Chief Emblem)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在击败圣职者野兽后，在猎人梦境的信使处购买 (10000 血之回响)</li>
                     </ul>
                   </div>
                 </div>

                 {/* Cainhurst Summons */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">该隐赫斯特的召唤状 (Cainhurst Summons)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在约瑟夫卡的诊所找到，通过禁忌森林进入</li>
                     </ul>
                   </div>
                 </div>

                 {/* Laurence's Skull */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-gray-400 text-lg mb-2">劳伦斯的头骨 (Laurence's Skull)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在通往研究大厅的电梯下方找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Eye Pendant */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-indigo-900 text-lg mb-2">眼球坠饰 (Eye Pendant)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人的梦魇中大教堂的祭坛上找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Celestial Dial */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#e0e0e0] text-lg mb-2">天体表盘 (Celestial Dial)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>击败星辰钟塔的玛丽亚女士获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Unopened Summons */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">未开封的召唤状 (Unopened Summons)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在血族女王的房间里找到，详见“血族女王安娜丽丝”</li>
                     </ul>
                   </div>
                 </div>

                 {/* Small Hair Ornament */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-pink-700 text-lg mb-2">小发饰 (Small Hair Ornament)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在废弃旧工厂中找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Ring of Betrothal */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-600 text-lg mb-2">订婚戒指 (Ring of Betrothal)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在苏美鲁伊忽尔始源圣杯地牢的第 3 层找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Queenly Flesh */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">女王的血肉 (Queenly Flesh)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由血族女王安娜丽丝掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Tonsil Stone */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#8a8a8a] text-lg mb-2">扁桃体石头 (Tonsil Stone)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由蜘蛛帕奇给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Eye of a Blood-drunk Hunter */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-800 text-lg mb-2">嗜血猎人之眼 (Eye of a Blood-drunk Hunter)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在击败代理人阿梅利亚后，由猎人梦境的信使给予（DLC入口道具）</li>
                     </ul>
                   </div>
                 </div>

                 {/* Yharnam Stone */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">雅南之石 (Yharnam Stone)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由苏美鲁女王雅南掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Short Ritual Root Chalice */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-800 text-lg mb-2">简易生存者仪式圣杯 (Short Ritual Root Chalice)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由苏美鲁长者掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Blood Gem Workshop Tool */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-700 text-lg mb-2">血宝石工坊工具 (Blood Gem Workshop Tool)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在打开通往大教堂区的门后，在欧顿之墓中找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Rune Workshop Tool */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-indigo-700 text-lg mb-2">符文工坊工具 (Rune Workshop Tool)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在击败汉威克女巫后，在女巫住所的小房间里找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Workshop Haze Extractor */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#d4d4d4] text-lg mb-2">车间暗霾抽取器 (Workshop Haze Extractor)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在下层苏美鲁迷宫圣杯地牢的第 3 层找到</li>
                     </ul>
                   </div>
                 </div>
               </div>

               <h3 id="section-badges" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 徽章 (Badges)
               </h3>

               <div className="space-y-6">
                 {/* Saw Hunter Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">锯肉刀猎人徽章 (Saw Hunter Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在亚南中心下水道的食人猪旁边找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Powder Keg Hunter Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">火药桶帮猎人徽章 (Powder Keg Hunter Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由退休猎人机枪哥掉落</li>
                       <li>完成退休猎人机枪哥的任务线获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Old Hunter Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">老猎人徽章 (Old Hunter Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由第一猎人杰尔曼掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Crow Hunter Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">乌鸦猎人徽章 (Crow Hunter Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由乌鸦艾琳掉落</li>
                       <li>完成乌鸦艾琳的任务线获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Spark Hunter Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">火花猎人徽章 (Spark Hunter Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由黑兽帕尔掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Sword Hunter Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">剑之猎人徽章 (Sword Hunter Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由圣职者野兽掉落</li>
                     </ul>
                   </div>
                 </div>

                 {/* Radiant Sword Hunter Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">闪耀剑之猎人徽章 (Radiant Sword Hunter Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在治愈教会工厂找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Wheel Hunter Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">车轮猎人徽章 (Wheel Hunter Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>由血族猎人阿尔弗雷德掉落</li>
                       <li>将未开封的召唤状交给血族猎人阿尔弗雷德获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Cosmic Eye Watcher Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">宇宙之眼守望者徽章 (Cosmic Eye Watcher Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在大教堂区上层小教堂底层的一条小走道上找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Firing Hammer Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">击铁猎人徽章 (Firing Hammer Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在猎人的梦魇中击败使用兽爪的猎人获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Cainhurst Badge */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">该隐赫斯特徽章 (Cainhurst Badge)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>加入该隐赫斯特血族契约获得</li>
                     </ul>
                   </div>
                 </div>
               </div>

               <h3 id="section-messenger-items" className="text-2xl mt-12 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                 信使物品与装扮 (Messenger Items)
               </h3>

               <div className="space-y-6">
                 {/* Brain Fluid */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">脑浆 (Brain Fluid)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在研究大厅 3 楼和 4 楼之间的楼梯平台上击杀大头娃娃获得</li>
                       <li>在研究大厅上层椽子上击杀大头娃娃获得</li>
                       <li>将前两个脑浆交给爱德琳，等她变成大头娃娃后击杀她获得</li>
                     </ul>
                   </div>
                 </div>

                 {/* Old Hunter Bell */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-800 text-lg mb-2">老猎人钟 (Old Hunter Bell)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在击败代理人阿梅利亚后，由猎人梦境的信使给予</li>
                     </ul>
                   </div>
                 </div>

                 {/* Messenger Top Hat */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">信使高礼帽 (Messenger Top Hat)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在治愈教会工厂找到</li>
                     </ul>
                   </div>
                 </div>

                 {/* Worn Messenger Top Hat */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">破旧的信使高礼帽 (Worn Messenger Top Hat)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>DLC 物品</li>
                     </ul>
                   </div>
                 </div>

                 {/* Black Messenger Hat */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">黑色信使礼帽 (Black Messenger Hat)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在大教堂区的屋顶上找到，从欧顿小教堂附近大门后的梯子上去</li>
                     </ul>
                   </div>
                 </div>

                 {/* Yharnam Messenger Hat */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">雅南信使礼帽 (Yharnam Messenger Hat)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>DLC 物品</li>
                     </ul>
                   </div>
                 </div>

                 {/* Messenger Head Bandage */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-[#c2c2c2] text-lg mb-2">信使头部绷带 (Messenger Head Bandage)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>DLC 物品</li>
                     </ul>
                   </div>
                 </div>

                 {/* Bloody Messenger Head Bandage */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-800 text-lg mb-2">血污的信使头部绷带 (Bloody Messenger Head Bandage)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在旧雅南的教堂中找到，通过机枪哥塔楼附近的下落点到达</li>
                     </ul>
                   </div>
                 </div>

                 {/* White Messenger Ribbon */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-gray-500 text-lg mb-2">白色信使缎带 (White Messenger Ribbon)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>详见“维奥拉的女儿”任务线</li>
                     </ul>
                   </div>
                 </div>

                 {/* Red Messenger Ribbon */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-red-600 text-lg mb-2">红色信使缎带 (Red Messenger Ribbon)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>详见“维奥拉的女儿”任务线</li>
                     </ul>
                   </div>
                 </div>

                 {/* Messenger Urn Festival */}
                 <div className="bg-[#141414] p-5 rounded-lg border border-[#333333]">
                   <h4 className="font-bold text-yellow-700 text-lg mb-2">信使的壶祭 (Messenger Urn Festival)</h4>
                   <div>
                     <strong className="text-[#c2c2c2] text-sm">位置：</strong>
                     <ul className="list-disc list-inside ml-4 text-sm text-[#8a8a8a] mt-1">
                       <li>在击败渴血野兽后，从治愈教会工厂的电梯跳下，在欧顿小教堂上方找到</li>
                     </ul>
                   </div>
                 </div>
               </div>

               {/* Weapons Section */}
               <h2 id="section-weapons" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                 <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                 武器 (Weapons)
               </h2>
               
               <p className="text-[#a3a3a3] mb-6">
                 本节涵盖了游戏中的所有武器，并提供有关以下方面的详细信息：
               </p>

               <h3 className="text-xl mt-8 mb-4 font-bold text-[#c2c2c2]">
                 属性需求 (Attribute Requirement)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 游戏中的每把武器都有使用某些属性的要求，通常与武器产生的伤害类型有关。例如，用于发射子弹的武器通常需要血质（Bloodtinge）要求，而标准近战武器通常只需要力量（Strength）和技巧（Skill）。每个图标下方指示的数字是您挥舞武器所需属性的最低等级。
               </p>

               <h3 className="text-xl mt-8 mb-4 font-bold text-[#c2c2c2]">
                 升级带来的伤害提升 (Damage Increase from Upgrades)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 升级武器时，基础攻击值会增加，属性加成也会增加。属性加成从 E（最差）到 S（最好）表示，显示了您的武器与您的伤害缩放的程度。
               </p>

               <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                 <table className="w-full text-sm text-center">
                   <thead>
                     <tr className="border-b border-[#333333] bg-[#141414]">
                       <th className="py-2 px-3" colSpan="5">攻击属性 (Offensive Stats)</th>
                       <th className="py-2 px-3" colSpan="4">主要属性 (Primary Stats)</th>
                     </tr>
                     <tr className="border-b border-[#333333] bg-[#141414]">
                       <th className="py-2 px-3">物理 (Physical)</th>
                       <th className="py-2 px-3">血质 (Blood)</th>
                       <th className="py-2 px-3">奥术 (Arcane)</th>
                       <th className="py-2 px-3">火焰 (Fire)</th>
                       <th className="py-2 px-3">闪电 (Bolt)</th>
                       <th className="py-2 px-3 text-red-600">力量 (Strength)</th>
                       <th className="py-2 px-3 text-blue-600">技巧 (Skill)</th>
                       <th className="py-2 px-3 text-[#d4d4d4]">血质 (Bloodtinge)</th>
                       <th className="py-2 px-3 text-purple-600">奥术 (Arcane)</th>
                     </tr>
                   </thead>
                 </table>
               </div>

               <h3 className="text-xl mt-8 mb-4 font-bold text-[#c2c2c2]">
                 宝石插槽 (Gem Slots)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 根据武器的类型（普通、怪异或失落），您将能够装备不同类型的宝石，插槽在升级等级 1、3 和 6 时获得。
               </p>
               <ul className="list-disc list-inside ml-4 text-[#a3a3a3] mb-6">
                 <li>放射形 (Radial)</li>
                 <li>衰弱形 (Waning)</li>
                 <li>三角形 (Triangular)</li>
                 <li>圆形 (Circular)</li>
               </ul>

               <h3 className="text-xl mt-8 mb-4 font-bold text-[#c2c2c2]">
                 平均攻击力提升 (Average Attack Increase)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 随着力量或技巧的增加，您的物理攻击力也会增加，但增加的数量取决于您在该属性上已经有多少点数。例如：如果您有 8 点力量并增加 1 点力量，您将获得大约 2.94 的物理攻击伤害；但如果您已经有 50 点力量并增加 1 点力量，您只会获得 0.33 的物理攻击伤害。这意味着如果您的力量从 9 增加到 25，您总共将获得大约 50 的物理攻击伤害，而从 50 到 99 只能获得 16 的伤害。
               </p>

               <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-8 border border-[#333333]">
                 <h4 className="font-bold text-[#c2c2c2] mb-2 text-center">平均物理攻击力提升 (基于力量) (Average Physical Attack Increase - Strength)</h4>
                 <table className="w-full text-sm text-center">
                   <thead>
                     <tr className="border-b border-[#333333] bg-[#141414]">
                       <th className="py-2 px-3">属性范围 (Stat Range)</th>
                       <th className="py-2 px-3">每点伤害增益 (Dmg Gain per Pt)</th>
                       <th className="py-2 px-3">预估总计 (Estimated Total)</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-b border-[#262626]">
                       <td className="py-2 px-3 font-medium">9 - 25</td>
                       <td className="py-2 px-3">2.94</td>
                       <td className="py-2 px-3">50</td>
                     </tr>
                     <tr className="border-b border-[#262626]">
                       <td className="py-2 px-3 font-medium">26 - 50</td>
                       <td className="py-2 px-3">1.52</td>
                       <td className="py-2 px-3">38</td>
                     </tr>
                     <tr className="border-b border-[#262626]">
                       <td className="py-2 px-3 font-medium">50 - 99</td>
                       <td className="py-2 px-3">0.33</td>
                       <td className="py-2 px-3">16</td>
                     </tr>
                   </tbody>
                 </table>
               </div>

               <h3 className="text-xl mt-8 mb-4 font-bold text-[#c2c2c2]">
                 特殊攻击 (Special Attacks)
               </h3>
               <p className="text-[#a3a3a3] mb-6">
                 这些数字表示您的武器在百分比方面造成的任何特殊异常状态或种族伤害。例如，默认情况下，所有武器造成的慢毒/急毒伤害为 0（除了千荫），所有武器对野兽和眷属造成的伤害均为 100%。这可以通过装备血宝石来修改，从而正向或负向改变这些数值。
               </p>
               <ul className="list-disc list-inside ml-4 text-[#a3a3a3] mb-6">
                 <li><span className="text-purple-600 font-medium">慢毒和急毒 (Slow and Rapid Poison)</span></li>
                 <li><span className="text-red-800 font-medium">对眷属和野兽的伤害 (Damage vs. Kin and Beast)</span></li>
               </ul>

               <div className="space-y-12">
                 {/* Saw Cleaver */}
                 <div>
                   <h3 id="weapon-saw-cleaver" className="text-2xl mt-8 mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     锯肉刀 (Saw Cleaver)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">由信使作为初始武器给予<br/>信使商店 - 1,000 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">苏美鲁迷宫始源 (Pthumerian Labyrinth Root)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">险恶/下层苏美鲁迷宫始源 (Sinister/Lower Pthumerian Labyrinth Root)</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 8</div>
                     <div><strong className="text-blue-600">技巧:</strong> 7</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> -</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>90</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>99</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>108</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>117</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>126</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>135</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>144</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>153</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>162</td><td>C</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>171</td><td>C</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>180</td><td>C</td><td>D</td><td>-</td><td>C</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (基于技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>8 - 25</td><td>1.89</td><td>34</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.00</td><td>25</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.22</td><td>11</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>

                 {/* Saw Spear */}
                 <div className="pt-8 border-t border-[#333333]">
                   <h3 id="weapon-saw-spear" className="text-2xl mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     锯矛 (Saw Spear)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">在亚南中心一具掉落的尸体上找到<br/>信使商店 - 1,000 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">中央苏美鲁迷宫始源 (Central Pthumerian Labyrinth Root)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">险恶/下层苏美鲁迷宫始源 (Sinister/Lower Pthumerian Labyrinth Root)</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 7</div>
                     <div><strong className="text-blue-600">技巧:</strong> 8</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> -</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>85</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>93</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>101</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>109</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>117</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>125</td><td>D</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>133</td><td>D</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>141</td><td>D</td><td>C</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>149</td><td>D</td><td>C</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>157</td><td>D</td><td>C</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>170</td><td>D</td><td>C</td><td>-</td><td>C</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (基于力量)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>8 - 25</td><td>2.17</td><td>39</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.20</td><td>30</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.27</td><td>13</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (基于技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>9 - 25</td><td>2.94</td><td>50</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.52</td><td>38</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.33</td><td>16</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>

                 {/* Hunter Axe */}
                 <div className="pt-8 border-t border-[#333333]">
                   <h3 id="weapon-hunter-axe" className="text-2xl mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     猎人斧 (Hunter Axe)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">由信使作为初始武器给予<br/>信使商店 - 1,100 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">内墓穴始源 (Hintertomb Root)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">衰弱的罗伦城始源 (Ailing Loran Root)</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 9</div>
                     <div><strong className="text-blue-600">技巧:</strong> 8</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> -</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>98</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>107</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>116</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>125</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>134</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>143</td><td>C</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>152</td><td>C</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>161</td><td>C</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>170</td><td>C</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>179</td><td>C</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>196</td><td>B</td><td>D</td><td>-</td><td>C</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (基于力量)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>10 - 25</td><td>3.63</td><td>58</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.76</td><td>44</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.41</td><td>20</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (基于技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>8 - 25</td><td>1.82</td><td>31</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>0.96</td><td>24</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.22</td><td>11</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>

                 {/* 怪兽猎人弯刀 */}
                 <div className="pt-8 border-t border-[#333333]">
                   <h3 id="weapon-beasthunter-saif" className="text-2xl mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     怪兽猎人弯刀 (Beasthunter Saif)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">猎人梦魇血河尽头 (Found by the river of blood end in Hunter's Nightmare)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">圣杯地牢信使商店 - 16,000 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">圣杯地牢信使商店 - 16,000 血之回响</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 9</div>
                     <div><strong className="text-blue-600">技巧:</strong> 11</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> -</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>90</td><td>E</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>99</td><td>E</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>108</td><td>E</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>117</td><td>E</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>126</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>135</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>144</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>153</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>162</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>171</td><td>D</td><td>B</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>180</td><td>D</td><td>B</td><td>-</td><td>C</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (力量)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>9 - 25</td><td>1.56</td><td>25</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>0.72</td><td>18</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.18</td><td>9</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>11 - 25</td><td>3.79</td><td>53</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.76</td><td>44</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.39</td><td>19</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>
                 {/* 螺纹手杖 */}
                 <div className="pt-8 border-t border-[#333333]">
                   <h3 id="weapon-threaded-cane" className="text-2xl mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     螺纹手杖 (Threaded Cane)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">由信使作为初始武器给予 / 信使商店 - 1,200 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">苏美鲁迷宫始源 (Central Pthumerian Labyrinth Root)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">险恶/伊兹墓碑始源 (Sinister/Isz Gravestone Root)</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 7</div>
                     <div><strong className="text-blue-600">技巧:</strong> 9</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> -</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>78</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>85</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>92</td><td>E</td><td>B</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>99</td><td>E</td><td>B</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>106</td><td>E</td><td>B</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>113</td><td>E</td><td>B</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>120</td><td>E</td><td>B</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>127</td><td>E</td><td>B</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>134</td><td>E</td><td>B</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>141</td><td>E</td><td>A</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>156</td><td>E</td><td>A</td><td>-</td><td>B</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (力量)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>8 - 25</td><td>1.17</td><td>21</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>0.64</td><td>16</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.14</td><td>7</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>10 - 25</td><td>4.00</td><td>64</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.96</td><td>49</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.43</td><td>21</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>
                 {/* 野兽切割刀 */}
                 <div className="pt-8 border-t border-[#333333]">
                   <h3 id="weapon-beast-cutter" className="text-2xl mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     野兽切割刀 (Beast Cutter)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">猎人梦魇大教堂主楼梯上 (Found on the main Grand Cathedral stairs in Hunter's Nightmare)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">圣杯地牢信使商店 - 20,000 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">圣杯地牢信使商店 - 20,000 血之回响</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 11</div>
                     <div><strong className="text-blue-600">技巧:</strong> 9</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> -</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>92</td><td>D</td><td>E</td><td>-</td><td>E</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>101</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>110</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>119</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>128</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>137</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>146</td><td>D</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>155</td><td>C</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>164</td><td>C</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>173</td><td>C</td><td>E</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>184</td><td>C</td><td>D</td><td>-</td><td>D</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (力量)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>11 - 25</td><td>3.21</td><td>45</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.56</td><td>39</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.33</td><td>16</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>9 - 25</td><td>1.71</td><td>24</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>0.76</td><td>19</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.18</td><td>9</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>
                 {/* 送葬之刃 */}
                 <div className="pt-8 border-t border-[#333333]">
                   <h3 id="weapon-burial-blade" className="text-2xl mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     送葬之刃 (Burial Blade)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">信使商店 - 60,000 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">险恶/下层衰弱的罗伦城始源 (Sinister/Lower Ailing Loran Root)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">险恶/苏美鲁伊忽尔始源 (Sinister/Pthumeru Ihyll Root)</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 10</div>
                     <div><strong className="text-blue-600">技巧:</strong> 12</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> -</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-purple-600">奥术基础 (Arcane)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>80</td><td>30</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>88</td><td>33</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>96</td><td>36</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>104</td><td>39</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>112</td><td>42</td><td>E</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>120</td><td>45</td><td>E</td><td>B</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>128</td><td>48</td><td>E</td><td>B</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>136</td><td>51</td><td>E</td><td>B</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>144</td><td>54</td><td>E</td><td>B</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>152</td><td>57</td><td>E</td><td>B</td><td>-</td><td>B</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>160</td><td>60</td><td>D</td><td>B</td><td>-</td><td>B</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-3 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (力量)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>11 - 25</td><td>1.53</td><td>23</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>0.68</td><td>17</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.14</td><td>7</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>13 - 25</td><td>3.69</td><td>48</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.68</td><td>42</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.37</td><td>18</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (奥术)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>8 - 25</td><td>1.11</td><td>20</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>0.60</td><td>15</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.12</td><td>6</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>
                 {/* 慈悲之刃 */}
                 <div className="pt-8 border-t border-[#333333]">
                   <h3 id="weapon-blade-of-mercy" className="text-2xl mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     慈悲之刃 (Blade of Mercy)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">信使商店 - 1,200 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">险恶/下层衰弱的罗伦城始源 (Sinister/Lower Ailing Loran Root)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">险恶/苏美鲁伊忽尔始源 (Sinister/Pthumeru Ihyll Root)</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 7</div>
                     <div><strong className="text-blue-600">技巧:</strong> 11</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> -</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-purple-600">奥术基础 (Arcane)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>60</td><td>30</td><td>-</td><td>C</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>66</td><td>33</td><td>-</td><td>B</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>72</td><td>36</td><td>-</td><td>B</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>78</td><td>39</td><td>-</td><td>B</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>84</td><td>42</td><td>-</td><td>B</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>90</td><td>45</td><td>-</td><td>A</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>96</td><td>48</td><td>-</td><td>A</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>102</td><td>51</td><td>-</td><td>A</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>108</td><td>54</td><td>-</td><td>A</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>114</td><td>57</td><td>-</td><td>A</td><td>-</td><td>B</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>120</td><td>60</td><td>-</td><td>S</td><td>-</td><td>B</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (力量)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>12 - 25</td><td>4.00</td><td>56</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.84</td><td>46</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.41</td><td>20</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>8 - 25</td><td>1.00</td><td>18</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>0.60</td><td>15</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.12</td><td>6</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>
                 {/* 步枪矛 */}
                 <div className="pt-8 border-t border-[#333333]">
                   <h3 id="weapon-rifle-spear" className="text-2xl mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     步枪矛 (Rifle Spear)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">旧雅南广场隐藏建筑内 (Found in the hidden building of Old Yharnam plaza) / 信使商店 - 4,000 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">险恶/下层苏美鲁迷宫始源 (Sinister/Lower Pthumerian Labyrinth Root)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">衰弱的罗伦城始源 (Ailing Loran Root)</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 10</div>
                     <div><strong className="text-blue-600">技巧:</strong> 11</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> 9</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质基础 (Blood)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>85</td><td>85</td><td>E</td><td>D</td><td>D</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>93</td><td>93</td><td>E</td><td>D</td><td>D</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>101</td><td>101</td><td>E</td><td>D</td><td>D</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>109</td><td>109</td><td>E</td><td>C</td><td>D</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>117</td><td>117</td><td>E</td><td>C</td><td>D</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>125</td><td>125</td><td>E</td><td>C</td><td>D</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>133</td><td>133</td><td>E</td><td>C</td><td>D</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>141</td><td>141</td><td>E</td><td>C</td><td>C</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>149</td><td>149</td><td>E</td><td>B</td><td>C</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>157</td><td>157</td><td>E</td><td>B</td><td>C</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>170</td><td>170</td><td>D</td><td>B</td><td>B</td><td>C</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-3 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (力量)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>11 - 25</td><td>1.53</td><td>23</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>0.68</td><td>17</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.16</td><td>8</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>12 - 25</td><td>3.57</td><td>50</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.64</td><td>41</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.37</td><td>18</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (奥术)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>10 - 25</td><td>3.19</td><td>51</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.52</td><td>38</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.35</td><td>17</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>
                 {/* 打桩机 */}
                 <div className="pt-8 border-t border-[#333333]">
                   <h3 id="weapon-stake-driver" className="text-2xl mb-6 font-bold text-[#c2c2c2] flex items-center gap-2">
                     打桩机 (Stake Driver)
                   </h3>

                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">普通 (Normal)</td>
                           <td className="py-2 px-3">信使商店 - 8,000 血之回响</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">怪异 (Uncanny)</td>
                           <td className="py-2 px-3">险恶/下层内墓穴始源 (Sinister/Lower Hintertomb Root)</td>
                         </tr>
                         <tr className="border-b border-[#262626]">
                           <td className="py-2 px-3 font-medium text-[#c2c2c2]">失落 (Lost)</td>
                           <td className="py-2 px-3">险恶/下层衰弱的罗伦城始源 (Sinister/Lower Ailing Loran Root)</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] mb-6 flex gap-6 text-sm">
                     <div><strong className="text-red-600">力量:</strong> 18</div>
                     <div><strong className="text-blue-600">技巧:</strong> 9</div>
                     <div><strong className="text-[#d4d4d4]">血质:</strong> -</div>
                     <div><strong className="text-purple-600">奥术:</strong> -</div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-[#0d0d0d]/60 rounded-lg p-3 overflow-x-auto mb-6 border border-[#333333]">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-[#333333] bg-[#141414]">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-[#d4d4d4]">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="border-b border-[#262626]"><td>0</td><td>85</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>1</td><td>93</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>2</td><td>101</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>3</td><td>109</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>4</td><td>117</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>5</td><td>125</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>6</td><td>133</td><td>D</td><td>D</td><td>-</td><td>D</td></tr>
                         <tr className="border-b border-[#262626]"><td>7</td><td>141</td><td>D</td><td>D</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>8</td><td>149</td><td>C</td><td>D</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>9</td><td>157</td><td>C</td><td>D</td><td>-</td><td>C</td></tr>
                         <tr className="border-b border-[#262626]"><td>10</td><td>170</td><td>C</td><td>C</td><td>-</td><td>C</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-[#a3a3a3] mb-6">
                     <li><strong>普通 (Normal):</strong> 放射 (Radial), 放射 (Radial), 衰弱 (Waning)</li>
                     <li><strong>怪异 (Uncanny):</strong> 放射 (Radial), 放射 (Radial), 三角 (Triangular)</li>
                     <li><strong>失落 (Lost):</strong> 放射 (Radial), 三角 (Triangular), 衰弱 (Waning)</li>
                   </ul>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (力量)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>19 - 25</td><td>3.14</td><td>22</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.40</td><td>35</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.33</td><td>16</td></tr>
                         </tbody>
                       </table>
                     </div>
                     <div className="bg-[#0d0d0d]/60 rounded-lg p-3 border border-[#333333]">
                       <h4 className="font-bold text-[#c2c2c2] mb-2 text-center text-sm">平均物理攻击力提升 (技巧)</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-[#333333] bg-[#141414]">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-[#262626]"><td>10 - 25</td><td>2.69</td><td>43</td></tr>
                           <tr className="border-b border-[#262626]"><td>26 - 50</td><td>1.32</td><td>33</td></tr>
                           <tr className="border-b border-[#262626]"><td>51 - 99</td><td>0.29</td><td>14</td></tr>
                         </tbody>
                       </table>
                     </div>
                   </div>

                   <h4 className="font-bold text-[#c2c2c2] mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-[#141414] p-3 rounded-lg border border-[#333333] flex gap-6 text-sm">
                     <div><strong>慢毒:</strong> 0</div>
                     <div><strong>急毒:</strong> 0</div>
                     <div><strong>对野兽伤害:</strong> 100%</div>
                     <div><strong>对眷属伤害:</strong> 100%</div>
                   </div>
                 </div>
               </div>

               <h2 id="section-trophy-list" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  🏆 查看全奖杯列表 (Trophy List)
               </h2>
               <div className="my-8 text-[#d4d4d4] bg-[#0d0d0d] p-8 rounded-xl shadow-sm border border-[#333333] text-center">
                 <h4 className="text-xl font-bold text-[#e0e0e0] mb-4">想要获取白金奖杯吗？</h4>
                 <p className="mb-8 text-[#8a8a8a] font-medium max-w-2xl mx-auto">
                   本作包含 34 个本体奖杯和 6 个 DLC 奖杯。为了保证流程攻略的纯粹性与阅读体验，我们将所有的奖杯获取条件、收集指南以及最优白金路线图整理在了专门的奖杯页面。
                 </p>
                 <Link 
                   to="/bloodborne/trophies"
                   className="block w-full text-center py-4 bg-[#0a0a0a] border border-[#8a0303] text-[#8a0303] font-bold uppercase tracking-widest text-sm hover:bg-[#8a0303] hover:text-[#d4d4d4] transition-all rounded-sm shadow-[0_0_15px_rgba(138,3,3,0.2)] bb-font-title text-2xl tracking-[4px]"
                 >
                   <span>前往《血源诅咒》全奖杯攻略</span>
                   <ChevronRight size={20} />
                 </Link>
               </div>

               <h2 className="text-2xl mt-12 mb-6 group cursor-pointer text-[#d4d4d4] border-b pb-4 flex items-center gap-2">
                  <span className="text-[#8a0303] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  更多精彩内容
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 {booksData.filter(b => ['the-last-of-us-part-1', 'the-last-of-us-part-2', 'resident-evil-9'].includes(b.slug)).map((item) => {
                   const linkMap = {
                     'the-last-of-us-part-1': '/the-last-of-us-part-1-walkthrough',
                     'the-last-of-us-part-2': '/the-last-of-us-part-2',
                     'resident-evil-9': '/resident-evil-9-walkthrough'
                   };
                   return (
                   <Link 
                     to={linkMap[item.slug]} 
                     key={item.id}
                     className="block group bg-[#0d0d0d] rounded-xl overflow-hidden shadow-sm border border-[#262626] hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300"
                   >
                     <div className="aspect-[4/3] overflow-hidden relative bg-[#1a1a1a]">
                       <img 
                         src={item.imgUrl} 
                         alt={item.title} 
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                       />
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                     </div>
                     <div className="p-4">
                       <h3 className="font-bold text-[#e0e0e0] group-hover:text-[#8a0303] transition-colors truncate">
                         《{item.title}》图文攻略
                       </h3>
                       <p className="text-xs text-gray-500 mt-1">{item.author}</p>
                     </div>
                   </Link>
                 )})}
               </div>
  
            </article>

          {/* Right Sidebar (TOC) */}
          <aside className="w-[280px] hidden xl:block flex-shrink-0 space-y-6">
            <div className="bg-[#0d0d0d] rounded-lg p-6 shadow-[0_0_40px_rgba(138,3,3,0.15)] border border-[#262626] hover:shadow-[0_0_40px_rgba(138,3,3,0.15)]-hover transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#262626] group-hover:ring-2 group-hover:ring-[#8a0303]/20 transition-all">
                  <img src="/picture/page1-game-cover/Bloodborne_cover_art.jpg" alt="From Software" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-[#e0e0e0] truncate">From Software</h3>
                  <p className="text-xs text-gray-400 font-medium truncate">知名游戏开发商</p>
                </div>
              </div>
              <a href="https://www.fromsoftware.jp/" target="_blank" rel="noopener noreferrer" className="w-full py-2 bg-[#0d0d0d] border border-[#8a0303] text-[#8a0303] font-bold rounded-full text-sm hover:bg-[#8a0303] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm">
                <span>打开官网</span>
              </a>
            </div>

            <div className="sticky top-[100px] bg-[#0d0d0d] rounded-lg p-6 shadow-[0_0_40px_rgba(138,3,3,0.15)] border border-[#262626] max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
              <h3 className="font-bold text-lg mb-4 text-[#e0e0e0] flex items-center gap-2 border-b border-[#262626] pb-3">
                <BookOpen size={18} className="text-[#8a0303]" />
                目录
              </h3>
              <nav className="space-y-1 pr-2">
                {tocTree.map((item) => (
                  <div key={item.id} className="toc-item-group">
                    <div className="flex items-center justify-between group">
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`flex-1 text-[14px] py-2 px-3 rounded-md transition-colors truncate
                          ${activeSection === item.id 
                            ? 'text-[#8a0303] font-bold bg-[#8a0303]/20' 
                            : 'text-[#8a8a8a] hover:text-[#e0e0e0] hover:bg-[#141414] font-medium'
                          }`}
                        title={item.title}
                      >
                        {item.title}
                      </a>
                      {item.children && item.children.length > 0 && (
                        <button 
                          onClick={(e) => toggleSection(e, item.id)}
                          className="p-1 text-gray-400 hover:text-[#8a8a8a] rounded"
                        >
                          {expandedSections[item.id] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </button>
                      )}
                    </div>
                    
                    {item.children && item.children.length > 0 && expandedSections[item.id] && (
                      <div className="ml-4 mt-1 pl-3 border-l-2 border-[#262626] space-y-1">
                        {item.children.map(child => (
                          <div key={child.id}>
                            <div className="flex items-center justify-between group">
                              <a
                                href={`#${child.id}`}
                                onClick={(e) => scrollToSection(e, child.id)}
                                className={`flex-1 text-[13px] py-1.5 px-3 rounded-md transition-colors truncate
                                  ${activeSection === child.id 
                                    ? 'text-[#8a0303] font-bold bg-[#8a0303]/20' 
                                    : 'text-gray-500 hover:text-[#e0e0e0] hover:bg-[#141414]'
                                  }`}
                                title={child.title}
                              >
                                {child.title}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>
      </main>

      {/* Mobile TOC Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-[#0a0a0a]/95 backdrop-blur-md border border-[#8a0303]/30 shadow-[0_8px_30px_rgba(138,3,3,0.3)] rounded-full z-40 lg:hidden px-6 py-3 flex items-center justify-between bb-blood-glow">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsShareOpen(true)}
            className="flex flex-col items-center justify-center text-[#a3a3a3] hover:text-[#e0e0e0] transition-colors"
          >
            <Share2 size={22} />
          </button>
          <button 
            onClick={handleLike}
            className="flex flex-col items-center justify-center transition-colors relative"
          >
            <div className="relative">
              <Heart 
                size={22} 
                className={`transition-colors duration-300 ${isLiked ? 'fill-[#8a0303] text-[#8a0303]' : 'text-[#a3a3a3] hover:text-[#e0e0e0]'}`}
              />
              <span className="absolute -top-2 -right-3 text-[10px] font-bold text-[#d4d4d4] leading-none">
                {likes > 99 ? '99+' : likes}
              </span>
            </div>
          </button>
        </div>
        <button 
          onClick={() => setIsTocOpen(true)}
          className="flex items-center justify-center text-[#a3a3a3] hover:text-[#e0e0e0] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        </button>
      </div>

      {/* Mobile TOC Bottom Sheet */}
      {isTocOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bb-font-body">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#070707]/80 transition-opacity"
            onClick={() => setIsTocOpen(false)}
          />
          
          {/* Sheet */}
          <div className="relative bg-[#0a0a0a] border-t border-[#8a0303]/50 w-full max-h-[80vh] rounded-t-2xl shadow-[0_-10px_40px_rgba(138,3,3,0.2)] flex flex-col animate-slide-up bb-blood-glow">
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2 cursor-pointer" onClick={() => setIsTocOpen(false)}>
              <div className="w-12 h-1.5 bg-[#333333] rounded-full"></div>
            </div>
            
            {/* Header */}
            <div className="px-6 pb-4 border-b border-[#333333] flex items-center justify-between">
              <h3 className="font-bold text-[#e0e0e0] text-lg flex items-center gap-2 bb-font-title">
                <BookOpen size={18} className="text-[#8a0303]" />
                猎人手记目录
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#d4d4d4] bg-[#8a0303] px-2 py-0.5 rounded-sm shadow-sm">{readingProgress}%</span>
                <button onClick={() => setIsTocOpen(false)} className="text-[#a3a3a3] hover:text-[#e0e0e0]">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* TOC Content */}
            <div className="overflow-y-auto p-4 pb-12 custom-scrollbar">
              <nav className="space-y-1 relative pr-2 flex-1">
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#333333]"></div>
                
                {tocTree.map((parent) => {
                  const isParentActive = activeSection === parent.id;
                  const hasChildren = parent.children && parent.children.length > 0;
                  const isChildActive = parent.children ? parent.children.some(child => child.id === activeSection) : false;
                  
                  const isExpanded = expandedSections[parent.id] !== undefined 
                    ? expandedSections[parent.id] 
                    : (isParentActive || isChildActive);
                  
                  return (
                    <div key={parent.id} className="relative">
                      <div className="flex items-center group relative">
                        <a 
                          href={"#" + parent.id}
                          onClick={(e) => {
                            scrollToSection(e, parent.id);
                            setIsTocOpen(false);
                          }}
                          className={`
                            flex-1 block py-3 pr-10 transition-all relative z-10 rounded-r border-l-[3px] pl-6 text-[15px] flex items-center justify-between
                            ${(isParentActive || isChildActive)
                              ? 'text-[#8a0303] font-bold bg-[#8a0303]/10 border-[#8a0303] shadow-sm bb-font-title' 
                              : 'text-[#a3a3a3] hover:text-[#8a0303] hover:bg-[#141414] border-transparent hover:border-[#333333] font-medium'}
                          `}
                        >
                          <span className="truncate">{parent.title}</span>
                        </a>

                        {hasChildren && (
                          <button
                            onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md transition-colors z-20 
                              ${(isParentActive || isChildActive) 
                                ? 'text-[#8a0303] hover:bg-[#8a0303]/20' 
                                : 'text-[#8a8a8a] hover:text-[#e0e0e0] hover:bg-[#8B4513]/10'}`}
                          >
                            {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                          </button>
                        )}
                      </div>

                      {hasChildren && isExpanded && (
                        <div className="space-y-1 mt-1 transition-all duration-300 ease-in-out">
                          {parent.children.map(child => {
                            const isCurrentChildActive = activeSection === child.id;
                            const isGrandChildActive = child.children && child.children.some(gc => gc.id === activeSection);
                            
                            return (
                              <div key={child.id}>
                                  <div className="flex items-center group relative">
                                      <a 
                                        href={"#" + child.id}
                                        onClick={(e) => {
                                          scrollToSection(e, child.id);
                                          setIsTocOpen(false);
                                        }}
                                        className={`
                                          flex-1 block py-2 pr-8 transition-all relative z-10 rounded-r border-l-[3px] pl-9 text-[14px]
                                          ${(isCurrentChildActive || isGrandChildActive)
                                            ? 'text-[#8a0303] font-bold bg-[#8a0303]/5 border-[#8a0303]' 
                                            : 'text-[#8a8a8a] hover:text-[#8a0303] hover:bg-[#141414] border-transparent hover:border-[#333333]'}
                                        `}
                                      >
                                        {child.title}
                                      </a>
                                  </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Share Bottom Sheet */}
      {isShareOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bb-font-body">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#070707]/80 transition-opacity"
            onClick={() => setIsShareOpen(false)}
          />
          
          {/* Sheet */}
          <div className="relative bg-[#0a0a0a] border-t border-[#8a0303]/50 w-full rounded-t-2xl shadow-[0_-10px_40px_rgba(138,3,3,0.2)] flex flex-col animate-slide-up pb-safe bb-blood-glow">
            {/* Header Card */}
            <div className="bg-[#141414] rounded-t-2xl p-4 shadow-sm relative border-b border-[#333333]">
              <button 
                onClick={() => setIsShareOpen(false)} 
                className="absolute top-4 right-4 text-[#a3a3a3] hover:text-[#e0e0e0]"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-3 pr-10">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#8a0303]/50 shadow-[0_0_10px_rgba(138,3,3,0.3)] shrink-0">
                  <img src={game?.imgUrl || bloodborneCover} alt="Game Cover" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#e0e0e0] text-[15px] truncate bb-font-title">
                    {game?.title || '血源诅咒'} 猎人手记
                  </h3>
                  <p className="text-[#a3a3a3] text-xs truncate mt-0.5">
                    {getShareUrl()}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Share Options Grid */}
            <div className="p-6">
              <div className="grid grid-cols-4 gap-y-6 gap-x-4 mb-6">
                <button 
                  onClick={handleWechatShare}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-[#333333] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#07C160]" fill="currentColor">
                      <path d="M8.2,16.5C3.7,16.5,0,13.2,0,9.1C0,5.1,4.1,1.8,8.8,1.8c4.6,0,8.4,3.3,8.4,7.4C17.2,13.2,13.2,16.5,8.2,16.5z M5.4,6.1 c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1C6.4,6.5,5.9,6.1,5.4,6.1z M11.5,6.1c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1 c0.6,0,1-0.5,1-1C12.6,6.5,12.1,6.1,11.5,6.1z"/>
                      <path d="M24,13.6c0-3.3-3.2-5.9-7.1-5.9c-0.3,0-0.6,0-0.9,0.1c0.8,0.8,1.2,1.8,1.2,2.8c0,3.7-3.4,6.6-7.5,6.6 c-0.5,0-0.9-0.1-1.4-0.2c1.1,2.5,4.3,4.2,7.7,4.2C20.4,21.1,24,17.7,24,13.6z M15.1,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C15.9,11.7,15.6,11.3,15.1,11.3z M19.9,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C20.7,11.7,20.3,11.3,19.9,11.3z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] text-[#a3a3a3]">微信</span>
                </button>
                <button 
                  onClick={handleWeiboShare}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-[#333333] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#E6162D]" fill="currentColor">
                      <path d="M10.3,17.4c-2.8,0-5.1-1.3-5.1-2.9c0-1.6,2.3-2.9,5.1-2.9c2.8,0,5.1,1.3,5.1,2.9C15.4,16.1,13.1,17.4,10.3,17.4z M10.3,12.5 c-1.8,0-3.3,0.9-3.3,2c0,1.1,1.5,2,3.3,2c1.8,0,3.3-0.9,3.3-2C13.6,13.4,12.1,12.5,10.3,12.5z"/>
                      <path d="M21.2,6.5c-0.6-0.5-1.5-0.7-2.6-0.6c0.5-0.5,0.8-1,0.8-1.5c0-1-1.2-1.7-2.9-1.5c-0.6,0.1-1.1,0.2-1.5,0.4 c1-1.3,0.4-2.6-1.5-2.9C12,0.1,10.4,0.7,9.6,1.6C9,2.2,8.9,2.9,9.2,3.5C8.8,3.3,8.3,3.1,7.8,3.1C5,2.6,2,4.4,1.1,7 c-0.6,1.7,0.1,3.4,1.5,4.3C1.6,12.4,1,13.8,1.4,15c0.6,1.8,2.7,2.8,5.1,2.8c4.6,0.6,9.1-1.6,11-5C18.5,10.9,18,9,16.5,8 c1-0.2,1.8-0.6,2.4-1.2C20.6,5.3,21.6,4.5,21.2,6.5z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] text-[#a3a3a3]">微博</span>
                </button>
                <button 
                  onClick={handleSaveImage}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-[#333333] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#d4d4d4]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </div>
                  <span className="text-[11px] text-[#a3a3a3]">保存长图</span>
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-[#333333] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#d4d4d4] relative">
                    {copySuccess ? (
                      <span className="text-[#8a0303] font-bold text-sm">已复制</span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    )}
                  </div>
                  <span className="text-[11px] text-[#a3a3a3]">复制链接</span>
                </button>
                <button 
                  onClick={handleSystemShare}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-[#333333] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#d4d4d4]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  </div>
                  <span className="text-[11px] text-[#a3a3a3]">系统分享</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}



      <Footer />
    </div>
  );
}
