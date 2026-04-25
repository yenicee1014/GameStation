import { useParams, Link } from 'react-router-dom';
import { booksData, categoryOptions } from './data';
import { re9GuideData } from './data/re9-guide';
import { useState, useEffect, useMemo } from 'react';
import { Search, Heart, Share2, Bookmark, ChevronDown, ChevronRight, BookOpen, ShoppingCart, ScrollText, Disc, Lock, ShieldAlert, FileText, Smile, Key, Coins, ArrowUpCircle, Trophy, Map, List, X } from 'lucide-react';
import Footer from './components/Footer';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
// Using the new RE9 images
const re9Banner = '/images/re9/banner.webp';
const re9Cover = '/images/re9/cover.jpg';
// Reusing some assets for layout structure (logos/placeholders)
import capcomLogo from '../picture/page1-game-walkthrough/resident-evil-9/capcom-logo.png';
import logo from '../picture/logo.svg';
import re9GameplayShot from '../picture/page1-game-walkthrough/resident-evil-9/Resident-Evil-Requiem-screenshot-09-11jun25.webp';
import raccoonHeader from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_header.jpg';
import raccoon1 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_1.jpg';
import raccoon2 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_2.jpg';
import raccoon3 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_3.jpg';
import raccoon4 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_4.jpg';
import raccoon5 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_5.jpg';
import raccoon6 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_6.jpg';
import raccoon7 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_7.jpg';
import raccoon8 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_8.jpg';
import raccoon9 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_9.jpg';
import raccoon10 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_10.jpg';
import raccoon11 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_11.jpg';
import raccoon12 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_12.jpg';
import raccoon13 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_13.jpg';
import raccoon14 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_14.jpg';
import raccoon15 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_15.jpg';
import raccoon16 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_16.jpg';
import raccoon17 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_17.jpg';
import raccoon18 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_18.jpg';
import raccoon19 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_19.jpg';
import raccoon20 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_20.jpg';
import raccoon21 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_21.jpg';
import raccoon22 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_22.jpg';
import raccoon23 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_23.jpg';
import raccoon24 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_24.jpg';
import raccoon25 from '../picture/page1-game-walkthrough/resident-evil-9/rerequiem_guide_raccoon_25.jpg';
import './App.css';

const imageMap = {
  'raccoon1': raccoon1,
  'raccoon2': raccoon2,
  'raccoon3': raccoon3,
  'raccoon4': raccoon4,
  'raccoon5': raccoon5,
  'raccoon6': raccoon6,
  'raccoon7': raccoon7,
  'raccoon8': raccoon8,
  'raccoon9': raccoon9,
  'raccoon10': raccoon10,
  'raccoon11': raccoon11,
  'raccoon12': raccoon12,
  'raccoon13': raccoon13,
  'raccoon14': raccoon14,
  'raccoon15': raccoon15,
  'raccoon16': raccoon16,
  'raccoon17': raccoon17,
  'raccoon18': raccoon18,
  'raccoon19': raccoon19,
  'raccoon20': raccoon20,
  'raccoon21': raccoon21,
  'raccoon22': raccoon22,
  'raccoon23': raccoon23,
  'raccoon24': raccoon24,
  'raccoon25': raccoon25
};

// Helper function to format text with bold markers (**text**)
const formatText = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-gray-100">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// TOC Data structure for RE9
const tocItems = [
  { id: 'section-intro', title: '前言与导读', level: 1 },
  { id: 'section-1', title: '1. 基础操作与生存技巧', level: 1 },
  { id: 'section-1-1', title: '1.1 战斗技巧', level: 2 },
  { id: 'section-1-2', title: '1.2 探索技巧', level: 2 },
  { id: 'section-2', title: '2. 全章节流程攻略', level: 1 },
  { id: 'chapter-1', title: '2.1 第一章：鹪木市爆发', level: 2 },
  { id: 'chapter-2', title: '2.2 第二章：罗兹山护理中心', level: 2 },
  { id: 'chapter-3', title: '2.3 第三章：护理中心地下室', level: 2 },
  { id: 'chapter-4', title: '2.4 第四章：护理中心庭院', level: 2 },
  { id: 'chapter-5', title: '2.5 第五章：水处理厂', level: 2 },
  { id: 'chapter-6', title: '2.6 第六章：东浣熊市', level: 2 },
  { id: 'chapter-7', title: '2.7 第七章：浣熊市中心', level: 2 },
  { id: 'chapter-8', title: '2.8 第八章：孤儿院', level: 2 },
  { id: 'chapter-9', title: '2.9 第九章：浣熊市侧街', level: 2 },
  { id: 'chapter-10', title: '2.10 第十章：方舟', level: 2 },
  { id: 'section-3', title: '3. 交互式地图', level: 1 },
  { id: 'section-raccoons', title: '4. 全浣熊先生收集指南', level: 1 },
  { id: 'section-trophy-list', title: '5. 查看全奖杯列表', level: 1 },
];

export default function WalkthroughRe9() {
  const { slug: paramSlug } = useParams();
  const slug = paramSlug || 'resident-evil-9';
  const [game, setGame] = useState(null);
  const [activeSection, setActiveSection] = useState('section-1');
  const [readingProgress, setReadingProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0]);
  const [expandedSections, setExpandedSections] = useState({});
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Initialize likes from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem(`re9-likes-${slug}`);
    const hasLiked = localStorage.getItem(`re9-has-liked-${slug}`);
    
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    } else {
      // Default starting likes
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
    
    localStorage.setItem(`re9-likes-${slug}`, newLikes.toString());
    localStorage.setItem(`re9-has-liked-${slug}`, (!isLiked).toString());
  };

  // 生成正式上线后的链接，而不是本地 localhost 链接
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
    // Web 环境下微信分享通常需要 JSSDK，这里我们使用通用 scheme 尝试拉起微信，或者提示用户
    window.location.href = 'weixin://';
    setIsShareOpen(false);
  };

  const handleWeiboShare = () => {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(`生化危机9 终极攻略指南 ${url}`);
    window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${title}`, '_blank');
    setIsShareOpen(false);
  };

  const handleSystemShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '生化危机9 终极攻略指南',
          text: '来看看这篇超详细的《生化危机9》攻略指南！',
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
    // 实际项目中通常需要引入 html2canvas 库来截图，这里作为演示提示用户
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

  // 切换章节展开状态
  const toggleSection = (e, id, forceState) => {
    e.stopPropagation();
    e.preventDefault();
    setExpandedSections(prev => ({
      ...prev,
      [id]: forceState !== undefined ? forceState : !prev[id]
    }));
  };

  // 监听 activeSection 变化，自动展开父级
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

  // 获取推荐游戏
  const recommendedGames = useMemo(() => {
    if (!game) return [];
    const otherGames = booksData
      .filter(b => b.title !== game.title)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    return otherGames;
  }, [game]);

  useEffect(() => {
    // Decode URL and find game
    const foundGame = booksData.find(g => {
        const gameSlug = g.slug || g.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-\u4e00-\u9fa5]+/g, '').replace(/\-\-+/g, '-');
        return slug === gameSlug || slug === `${gameSlug}-walkthrough`;
    });
    
    setGame(foundGame);
  }, [slug]);

  // Scroll spy and progress logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100))) : 0;
      setReadingProgress(progress);

      let currentSection = activeSection;
      const sectionOffsets = tocItems.map(item => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, offset: Infinity };
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
    if (id === 'section-intro') {
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

  const renderStats = (stats) => {
    if (!stats) return null;
    return (
      <div className="flex flex-wrap gap-3 mt-2 mb-4 text-xs text-gray-500 font-medium">
        {stats.files > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><FileText size={12} /> 文件: {stats.files}</span>}
        {stats.raccoons > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><Smile size={12} /> 浣熊先生: {stats.raccoons}</span>}
        {stats.safes > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><Lock size={12} /> 保险箱: {stats.safes}</span>}
        {stats.weapons > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><ShieldAlert size={12} /> 武器: {stats.weapons}</span>}
        {stats.keyItems > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><Key size={12} /> 关键道具: {stats.keyItems}</span>}
        {stats.coins > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><Coins size={12} /> 古董硬币: {stats.coins}</span>}
        {stats.upgrades > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><ArrowUpCircle size={12} /> 升级: {stats.upgrades}</span>}
        {stats.trophies > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><Trophy size={12} /> 奖杯: {stats.trophies}</span>}
        {stats.recipes > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><ScrollText size={12} /> 配方: {stats.recipes}</span>}
        {stats.maps > 0 && <span className="flex items-center gap-1 bg-[#1f1f1f] px-2 py-1 rounded"><Map size={12} /> 地图: {stats.maps}</span>}
      </div>
    );
  };

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p>未找到该游戏的攻略信息</p>
          <Link to="/" className="mt-4 inline-block text-red-600 hover:underline font-medium">返回首页</Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#050000] re-noise-bg font-sans text-gray-200 selection:bg-black selection:text-[#fdfbf7]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
       {/* Header */}
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
                    {categoryOptions.map((category) => (
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
                <span className="flex items-center gap-2">
                  <BookOpen size={14} strokeWidth={2.2} />
                  <span>更新日志</span>
                </span>
                <span className="nav-badge">更新</span>
              </Link>
              <Link className="nav-link nav-link--with-icon" to="/sponsors">
                <span className="flex items-center gap-2">
                  <Heart size={14} strokeWidth={2.2} />
                  <span>赞助者名单</span>
                </span>
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

       {/* Main Content */}
       <main className="pt-[100px] pb-20 max-w-[1400px] mx-auto px-4 md:px-6 flex gap-10 lg:gap-14">
          
          {/* Article Column */}
          <article className="flex-1 min-w-0 bg-[#0a0a0a] rounded-sm border border-red-900/30 shadow-[0_0_30px_rgba(150,0,0,0.15)] p-8 md:p-12 md:pb-16 transition-shadow text-gray-200">
             {/* Banner */}
             <div className="w-full aspect-[2/1] rounded-sm overflow-hidden mb-8 shadow-inner bg-[#1f1f1f] relative group border border-red-900/30">
               <div className="re-scanline"></div>
               <img 
                 src={re9Banner} 
                 alt={game.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               {/* <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">Banner Placeholder</div> */}
             </div>
             
             {/* Title */}
             <h1 className="text-4xl md:text-[45px] font-bold mb-6 leading-[1.2] text-red-700 tracking-tight re-font-title drop-shadow-md">
               {game.title} 完整图文攻略
               <span className="block text-xl md:text-2xl text-gray-400 mt-2 font-normal re-font-horror text-red-900">THE ULTIMATE SURVIVAL HORROR EXPERIENCE</span>
             </h1>
             
             {/* Meta */}
             <div className="flex items-center justify-between mb-10 pb-8 border-b border-[#2a2a2a]">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-[#2a2a2a] shadow-sm cursor-pointer hover:ring-2 hover:ring-red-600/20 transition-all">
                   <img src={capcomLogo} alt="Capcom Logo" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-[15px] text-gray-200 hover:text-red-600 cursor-pointer transition-colors">{game.author}</span>
                     <span className="px-1.5 py-[1px] bg-[#222] text-gray-500 text-[10px] font-bold rounded uppercase tracking-wider">官方</span>
                   </div>
                   <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-3 font-medium">
                    <span>{game.date || '2026年02月26日'}</span>
                    <span>阅读 20分钟</span>
                  </div>
                 </div>
               </div>
               
             </div>
             
             {/* Content Body */}
             <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-200 prose-headings:tracking-tight prose-p:text-gray-200 prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-red-600 prose-a:no-underline prose-a:border-b prose-a:border-red-700/30 hover:prose-a:border-red-700 hover:prose-a:bg-red-900/30 prose-a:transition-all prose-img:rounded-lg prose-img:shadow-sm prose-blockquote:border-l-4 prose-blockquote:border-red-700 prose-blockquote:bg-[#141414] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-gray-200 prose-li:text-gray-200 prose-strong:text-gray-200 prose-strong:font-bold">
               
                 <>
                    <div className="mb-12">
                      <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                         {/* Cover Image & Purchase */}
                        <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                          
                          {/* Purchase Card */}
                          <div className="bg-[#0a0a0a] rounded-xl shadow-sm border border-[#333] p-5">
                            <h3 className="font-bold text-gray-100 mb-4 text-sm flex items-center gap-2">
                              <span>🛍️</span> 购买游戏
                            </h3>
                            
                            <div className="flex flex-col gap-4">
                              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#2a2a2a] bg-[#0a0a0a] mb-2">
                                <img src={re9Cover} alt="PS5 Official Disc Cover" className="absolute inset-0 w-full h-full object-cover p-1" />
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                  <span className="text-xs text-gray-400 line-through">HK$ 568.00</span>
                                  <span className="text-2xl font-bold text-red-600">HK$ 518.00</span>
                                </div>
                                <span className="px-2.5 py-1 bg-red-50 text-red-600 text-xs font-bold rounded">NEW</span>
                              </div>

                              <a 
                                href="https://www.playstation.com/zh-hant-hk/games/resident-evil-requiem/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-red-700 text-white font-bold rounded-sm text-sm hover:bg-red-800 transition-all flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(255,0,0,0.4)] group uppercase tracking-widest"
                              >
                                <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                                <span>前往 PS Store 购买</span>
                              </a>
                            </div>
                          </div>
                        </div>
                         
                         {/* Basic Info Table */}
                         <div className="flex-1 flex flex-col">
                           <div className="bg-[#0a0a0a] rounded-xl shadow-sm border border-[#333] p-6 flex flex-col h-full">
                             <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-4 mb-4">
                               <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2">
                                <span className="text-2xl">📋</span> 游戏档案
                              </h3>
                             </div>
                             
                             <div className="flex-1 grid grid-cols-1 content-center gap-1">
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#1f1f1f]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🏢</span> 开发商
                                 </span>
                                 <span className="font-semibold text-gray-100">Capcom</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#1f1f1f]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📦</span> 发行商
                                 </span>
                                 <span className="font-semibold text-gray-100">Capcom</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#1f1f1f]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📅</span> 发售日期
                                 </span>
                                 <span className="font-semibold text-gray-100">2026年02月27日</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#1f1f1f]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🎯</span> 游戏类型
                                 </span>
                                 <span className="font-semibold text-gray-100">生存恐怖 / 动作</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#1f1f1f]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🕹️</span> 对应平台
                                 </span>
                                 <span className="font-semibold text-gray-100">PS5 / PC / Xbox</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#1f1f1f]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">👥</span> 游玩人数
                                 </span>
                                 <span className="font-semibold text-gray-100">1人</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#1f1f1f]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">💰</span> 参考价格
                                 </span>
                                 <span className="font-bold text-red-600 text-base">HK$ 518.00</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors border-b border-[#1f1f1f]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🌐</span> 语言支持
                                 </span>
                                 <span className="font-semibold text-gray-100 text-right max-w-[50%] leading-tight">简繁中字 / 中文语音</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#141414] transition-colors last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">⭐</span> 年龄分级
                                 </span>
                                 <div className="flex items-center gap-2">
                                   <span className="px-1.5 py-0.5 border border-[#444] rounded text-[10px] font-bold text-gray-500">ESRB M</span>
                                   <span className="font-semibold text-gray-100">18+</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                      </div>

                     <h2 className="text-3xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-red-600 re-font-title border-b border-red-900/50 pb-2">
                        <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                        📖 游戏简介
                     </h2>
                     <p className="lead text-[17px] text-gray-300 leading-relaxed mb-8">
                       《生化危机：安魂曲》是《生化危机》系列第九部正传作品，于系列30周年之际推出。本作采用双主角设计，玩家将在游戏中交替操控两位截然不同的角色——
                       <br/><br/>
                       <strong>Grace Ashcroft（葛蕾丝·艾许考福特）：</strong>FBI 情报分析员，也是前《生化危机：爆发》系列角色 Alyssa Ashcroft 的女儿。她被派去调查浣熊市事件幸存者接连离奇死亡的案件，线索指向了一座废弃的旅馆和一所名为"罗斯山丘疗养院"的神秘设施。Grace 的章节以第一人称视角为主，强调潜行、资源管理和令人窒息的生存恐怖体验。
                       <br/><br/>
                       <strong>Leon S. Kennedy（里昂·S·甘乃迪）：</strong>系列经典主角，49岁的 DSO 特工。他因私人原因正在追查同一案件，以强力火器和爽快的近战动作为特色，章节以第三人称视角呈现，充满了《生化4》风格的枪战快感。
                       <br/><br/>
                       两人的旅途交织在一起，揭开了保护伞公司创始人斯宾塞的最终遗产——"厄尔庇斯（Elpis）"的秘密，并直面前保护伞研究员、疗养院院长 Victor Gideon 的阴谋。故事将玩家带回经典的浣熊市，重返 R.P.D. 警察局等标志性地点，同时也包含大量全新场景。
                     </p>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-red-600 re-font-title border-b border-red-900/50 pb-2">
                        <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎯 核心特色
                     </h2>
                     <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#111] p-5 rounded-sm border-l-4 border-l-red-800 border-y border-r border-[#222] shadow-inner">
                          <h4 className="font-bold text-lg mb-2 text-red-600">🎭 双主角、双风格</h4>
                          <p className="text-sm text-gray-400 m-0">
                            Grace 主打第一人称潜行生存恐怖（类似 RE7/RE8），Leon 主打第三人称动作射击（类似 RE4），两种风格在一款游戏中完美结合。
                          </p>
                        </div>
                        <div className="bg-[#111] p-5 rounded-sm border-l-4 border-l-red-800 border-y border-r border-[#222] shadow-inner">
                          <h4 className="font-bold text-lg mb-2 text-red-600">🧟 全新丧尸 AI</h4>
                          <p className="text-sm text-gray-400 m-0">
                            丧尸保留了人类痕迹——会拨弄灯光、自言自语、甚至唱歌，比以往更加诡异恐怖。
                          </p>
                        </div>
                        <div className="bg-[#111] p-5 rounded-sm border-l-4 border-l-red-800 border-y border-r border-[#222] shadow-inner">
                          <h4 className="font-bold text-lg mb-2 text-red-600">🎬 多结局</h4>
                          <p className="text-sm text-gray-400 m-0">
                            游戏结尾存在关键抉择（释放或摧毁厄尔庇斯），影响结局走向。
                          </p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-red-600 re-font-title border-b border-red-900/50 pb-2">
                        <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        参考信息
                     </h2>
                     <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a] mb-12">
                       <p className="text-gray-400 mb-3">
                         本攻略参考的内容
                       </p>
                       <a 
                         href="https://www.powerpyx.com/" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-red-600 hover:text-red-800 underline break-all block mb-2"
                       >
                         Resident Evil 9: Requiem Trophy Guide & Roadmap (Coming Soon)
                       </a>
                       <a 
                         href="https://www.polygon.com/resident-evil-requiem-re9-mr-raccoon-statue-locations-all/" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-red-600 hover:text-red-800 underline break-all block"
                       >
                         All Mr. Raccoon statue locations in Resident Evil Requiem
                       </a>
                     </div>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-red-600 re-font-title border-b border-red-900/50 pb-2 flex items-center gap-2">
                        <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        <span className="text-2xl">🏆</span> 媒体评分
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#bf1313] text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-90">IGN</span>
                          <span className="text-5xl font-black mb-4">9<span className="text-2xl opacity-70">/10</span></span>
                          <p className="text-xs leading-relaxed opacity-90">"紧张刺激的氛围与优秀的关卡设计相得益彰。"</p>
                        </div>
                        <div className="bg-[#ffcc00] text-gray-200 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-70">GameSpot</span>
                          <span className="text-5xl font-black mb-4">9<span className="text-2xl opacity-50">/10</span></span>
                          <p className="text-xs leading-relaxed opacity-80">"RE引擎的画面表现力令人叹为观止。"</p>
                        </div>
                        <div className="bg-[#333333] text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-90">Metacritic</span>
                          <span className="text-5xl font-black mb-4 bg-green-600 px-3 py-1 rounded">88</span>
                          <p className="text-xs leading-relaxed opacity-90">"卡普空再次定义了生存恐怖的高度。"</p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-red-600 re-font-title border-b border-red-900/50 pb-2">
                        <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎬 官方游戏截图
                     </h2>
                     <div className="space-y-8 mb-10">
                         <figure>
                           <img src={re9GameplayShot} alt="Resident Evil 9 Gameplay" className="w-full rounded-lg shadow-md" />
                           <figcaption className="text-center text-sm text-gray-400 mt-2">恐怖氛围回归 | Capcom 官方</figcaption>
                         </figure>
                      </div>
                     
                     <div className="text-xs text-gray-400 border-t border-[#2a2a2a] pt-4">
                       📌 数据更新于：2026-02-27 | 以上信息汇总自 PlayStation 官网及多家权威媒体，请以官方最新公告为准。
                     </div>
                   </div>

                   <div className="bg-[#1a0505] border border-[#3a0a0a] rounded-lg p-6 my-10 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-red-700"></div>
                     <h4 className="font-bold mb-3 text-red-600 flex items-center gap-2 text-base">
                        <span>💡</span> 通用技巧
                     </h4>
                     <div className="text-[15px] text-gray-200 m-0 leading-relaxed space-y-4">
                       <p className="font-medium text-gray-100 mb-4">
                         本作包含 <strong>50</strong> 个奖杯，白金难度适中。
                       </p>

                       <div className="bg-[#0a0a0a] p-4 rounded border border-[#333] shadow-sm hover:border-[#444] transition-colors">
                         <strong className="block mb-1 text-gray-100">⚠️ 资源管理</strong>
                         <p className="m-0 text-gray-400 text-sm">弹药和药草非常有限。学会“合成”是生存的关键。尽量避免不必要的战斗，或者利用环境击杀敌人。</p>
                       </div>

                       <div className="bg-[#0a0a0a] p-4 rounded border border-[#333] shadow-sm hover:border-[#444] transition-colors">
                         <strong className="block mb-1 text-gray-100">✔ 地图变蓝</strong>
                         <p className="m-0 text-gray-400 text-sm">未探索完全的区域在地图上显示为红色，探索完全（拿走所有道具）后变为蓝色。养成把地图“变蓝”的习惯，可以确保不错过任何关键道具。</p>
                       </div>
                     </div>
                   </div>
                   
                  <h2 id="section-1" className="text-2xl mt-12 mb-6 group cursor-pointer text-gray-200">
                     一、基础操作与生存技巧
                  </h2>
                  <p>
                    本作的操作方式继承了《生化危机 4 重制版》的肩后视角，但在动作性上有所增强，同时保留了系列经典的资源管理压力。
                  </p>
                  
                  <h3 id="section-1-1" className="text-xl mt-8 mb-4 font-bold text-gray-300">1.1 战斗技巧</h3>
                  <div className="space-y-12 my-8">
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-gray-100">弱点攻击与体术 (Melee)</h4>
                       <p className="text-gray-400 leading-relaxed">
                         射击敌人的头部或腿部可以造成硬直。当敌人出现白色箭头提示时，迅速靠近按下近战键（X/A）可以发动强力的体术攻击。Leon 的标志性武器是<strong>手斧 (Hatchet)</strong>，可用于处决硬直敌人。体术不仅伤害高，而且在发动期间是<strong>无敌</strong>的，还能击飞周围的敌人，是节省弹药的最佳手段。
                       </p>
                       <figure className="my-4 max-w-[60%] mx-auto">
                         <img src="https://img.game8.co/4425904/051cf35d40f81fc781ee739c27da6d7f.png/show" alt="Leon 的手斧" className="w-full rounded-lg shadow-sm" />
                         <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                           Leon 的手斧 (Hatchet) - 核心近战武器
                         </figcaption>
                       </figure>
                    </div>
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-gray-100">格挡与弹反 (Parry)</h4>
                       <p className="text-gray-400 leading-relaxed">
                         弹反是 Leon 的<strong>专属防御机制</strong>（Grace 无法使用）。在敌人攻击即将命中的瞬间按下格挡键（L1/LB），可以触发完美格挡（弹反）。成功弹反会产生火花并弹开敌人，制造巨大的攻击窗口。注意：手斧变钝（右下角显示红色）时弹反会失败，需要按住 E 键磨刀。
                       </p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                         <figure>
                           <img src="https://img.game8.co/4426006/55171d0a2367f58610cbb2a79f74b30c.png/show" alt="成功弹反" className="w-full rounded-lg shadow-sm" />
                           <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">成功弹反创造攻击窗口</figcaption>
                         </figure>
                         <figure>
                           <img src="https://img.game8.co/4426007/0818b35d783ce9d34db2d4452b09b4a1.png/show" alt="磨刀" className="w-full rounded-lg shadow-sm" />
                           <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">手斧变钝需及时磨刀</figcaption>
                         </figure>
                       </div>
                    </div>
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-gray-100">精准射击</h4>
                       <p className="text-gray-400 leading-relaxed">
                         站立不动瞄准时，准星会逐渐收缩。此时射击不仅精度更高，暴击率（爆头）也会大幅提升。在未被发现或敌人移动缓慢时，尽量使用精准射击。
                       </p>
                    </div>
                  </div>

                  <h3 id="section-1-2" className="text-xl mt-8 mb-4 font-bold text-gray-300">1.2 探索技巧</h3>
                   <div className="space-y-12 my-8">
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-100">地图变色机制</h4>
                        <p className="text-gray-400 leading-relaxed">
                          打开地图（Touchpad/View），区域颜色是探索的关键指示。<strong>红色</strong>表示该区域内仍有未拾取的物品（可能是弹药、文件或关键道具）。<strong>蓝色</strong>表示该区域已完全探索。养成把地图“变蓝”的习惯，可以确保你不会错过任何重要资源。
                        </p>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-100">听声辨位 (浣熊先生)</h4>
                        <p className="text-gray-400 leading-relaxed">
                          游戏中共有 <strong>25 个浣熊先生玩偶</strong>散布在各区域。它们会发出独特的机械噪音，当你听到这种声音时，请仔细寻找周围的隐蔽角落或高处。用刀或枪击毁即可收集，收集进度跨存档继承。
                        </p>
                        <figure className="my-4">
                          <img src={raccoonHeader} alt="浣熊先生收集" className="w-full rounded-lg shadow-sm" />
                          <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                            浣熊先生收集指南
                          </figcaption>
                        </figure>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-100">黄色油漆指引</h4>
                        <p className="text-gray-400 leading-relaxed">
                          在黑暗或复杂的场景中，留意带有<strong>黄色油漆</strong>标记的梯子、箱子或布条。这些通常是开发者留下的路径指引或可破坏物品的提示。
                        </p>
                     </div>
                   </div>

                  <h2 id="section-2" className="text-2xl mt-12 mb-6 group cursor-pointer text-gray-200">
                     <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     二、全章节流程攻略
                  </h2>
                  
                  {tocItems.filter(item => item.id.startsWith('chapter-')).map(chapter => (
                    <div key={chapter.id}>
                      <h3 id={chapter.id} className="text-xl mt-8 mb-4 font-bold text-gray-300">{chapter.title}</h3>
                      <div className="space-y-6 mt-8 mb-12">
                        {re9GuideData.find(c => c.id === chapter.id)?.sections?.map((section, idx) => (
                          <div key={idx} className="bg-[#141414] p-5 rounded-lg border border-[#2a2a2a]">
                            <h4 className="text-lg font-bold text-gray-100 mb-3 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-700"></span>
                              {section.title}
                            </h4>
                            {renderStats(section.stats)}
                            
                            <div className="space-y-3">
                              {section.content.map((item, itemIdx) => (
                                <div key={itemIdx} className="bg-[#0a0a0a] p-4 rounded border border-[#333] shadow-sm hover:border-[#444] transition-colors">
                            {item.type === 'collectible' ? (
                              <div className="flex gap-3">
                                <div className="mt-1 min-w-[16px] flex justify-center">
                                  <div className="w-2 h-2 rounded-full bg-red-700 mt-1.5 ring-2 ring-red-900/50"></div>
                                </div>
                                <div className="flex-1">
                                  {item.name && <h5 className="text-gray-100 font-bold text-sm mb-1">{item.name}</h5>}
                                  <p className="text-gray-400 text-sm leading-relaxed m-0">{formatText(item.description)}</p>
                                  {item.image && (
                                    <div className="mt-3 rounded-lg overflow-hidden border border-[#2a2a2a] max-w-[80%]">
                                      <img src={imageMap[item.image] || item.image} alt={item.name} className="w-full h-auto object-cover" />
                                    </div>
                                  )}
                                  {item.summary && (
                                    <span 
                                      className="block text-[12px] font-medium leading-[1.4] text-[#4b5563] mt-2"
                                      data-summary={item.summary}
                                    >
                                      {item.summary}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ) : (
                               <>
                                 <p className="text-gray-400 text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#333] ml-1 py-1">{formatText(item.text)}</p>
                                 {item.summary && (
                                    <span 
                                      className="block text-[12px] font-medium leading-[1.4] text-[#4b5563] mt-2 pl-2 border-l-2 border-transparent ml-1"
                                      data-summary={item.summary}
                                    >
                                      {item.summary}
                                    </span>
                                  )}
                               </>
                            )}
                          </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <h2 id="section-3" className="text-3xl mt-12 mb-6 group cursor-pointer text-red-600 re-font-title border-b border-red-900/50 pb-2">
                     <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     三、交互式地图
                  </h2>

                  {/* RE9 交互地图嵌入 */}
                  <div style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '20px auto',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #333',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}>
                    {/* 标题栏 */}
                    <div style={{
                      background: 'linear-gradient(135deg, #1a1a28, #222236)',
                      padding: '14px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '2px solid #c0392b'
                    }}>
                      <span style={{color:'#e8e6e3', fontWeight:700, fontSize:'16px'}}>
                        🗺️ 生化危机：安魂曲 交互地图
                      </span>
                      <a href="https://mapmaster.io/games/resident-evil-requiem/maps/care-center"
                         target="_blank"
                         rel="noopener noreferrer"
                         style={{color:'#e74c3c', fontSize:'13px', textDecoration:'none'}}>
                        ↗ 在新窗口打开
                      </a>
                    </div>
                    {/* 地图 iframe */}
                    <iframe
                      src="https://mapmaster.io/games/resident-evil-requiem/maps/care-center"
                      width="100%"
                      height="700"
                      frameBorder="0"
                      loading="lazy"
                      allowFullScreen
                      style={{display:'block', background:'#0a0a0f'}}
                    ></iframe>
                  </div>



                  <h2 id="section-raccoons" className="text-3xl mt-12 mb-6 group cursor-pointer text-red-600 re-font-title border-b border-red-900/50 pb-2">
                     <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     四、全浣熊先生收集指南
                  </h2>
                  <div className="space-y-6 mt-8 mb-12">
                    {re9GuideData.find(c => c.id === 'mr-raccoons')?.sections?.map((section, idx) => (
                      <div key={idx} className="bg-[#141414] p-5 rounded-lg border border-[#2a2a2a]">
                        <h4 className="text-lg font-bold text-gray-100 mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-700"></span>
                          {section.title}
                        </h4>
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#0a0a0a] p-4 rounded border border-[#333] shadow-sm hover:border-[#444] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-red-700 mt-1.5 ring-2 ring-red-900/50"></div>
                                  </div>
                                  <div className="flex-1">
                                    {item.name && <h5 className="text-gray-100 font-bold text-sm mb-1">{item.name}</h5>}
                                  <p className="text-gray-400 text-sm leading-relaxed m-0">{formatText(item.description)}</p>
                                  {item.image && (
                                    <div className="mt-3 rounded-lg overflow-hidden border border-[#2a2a2a] max-w-[80%]">
                                      <img src={imageMap[item.image] || item.image} alt={item.name} className="w-full h-auto object-cover" />
                                    </div>
                                  )}
                                  {item.summary && (
                                    <span 
                                      className="block text-[12px] font-medium leading-[1.4] text-[#4b5563] mt-2"
                                      data-summary={item.summary}
                                    >
                                      {item.summary}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ) : (
                               <>
                                 <p className="text-gray-400 text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#333] ml-1 py-1">{formatText(item.text)}</p>
                                 {item.summary && (
                                    <span 
                                      className="block text-[12px] font-medium leading-[1.4] text-[#4b5563] mt-2 pl-2 border-l-2 border-transparent ml-1"
                                      data-summary={item.summary}
                                    >
                                      {item.summary}
                                    </span>
                                  )}
                               </>
                            )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 id="section-trophy-list" className="text-3xl mt-12 mb-6 group cursor-pointer text-red-600 re-font-title border-b border-red-900/50 pb-2">
                     <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     五、查看全奖杯列表
                  </h2>
                  <div className="my-8 text-gray-200">
                    <p className="mb-6 text-gray-200 font-medium">
                      需要逐章节图文路线或奖杯筛选列表，请前往专属奖杯页面查看。
                    </p>
                    <Link 
                     to="/resident-evil-9/trophies"
                     className="block w-full text-center py-4 bg-[#0a0a0a] border-2 border-gray-900 text-gray-100 font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all rounded-sm shadow-sm hover:shadow-md"
                   >
                     查看全奖杯列表
                  </Link>
                 </div>

                 <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-red-600 re-font-title border-b border-red-900/50 pb-2">
                    <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                    更多精彩内容
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                   {recommendedGames.map((item, index) => (
                     <Link 
                       key={index} 
                       to={`/${item.slug || item.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-\u4e00-\u9fa5]+/g, '').replace(/\-\-+/g, '-')}`}
                       className="group block bg-[#0a0a0a] rounded-sm overflow-hidden border border-red-900/30 shadow-sm hover:shadow-md transition-all border border-[#2a2a2a]"
                     >
                       <div className="aspect-video w-full overflow-hidden relative">
                         <img 
                           src={item.imgUrl} 
                           alt={item.title} 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                         />
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                       </div>
                       <div className="p-4">
                         <h3 className="font-bold text-gray-100 group-hover:text-red-600 transition-colors truncate">
                           {item.title}
                         </h3>
                         <p className="text-xs text-gray-500 mt-1">{item.author}</p>
                       </div>
                     </Link>
                   ))}
                 </div>
                  
                  <hr className="my-12 border-[#2a2a2a]" />
                 </>
             </div>
          </article>
          
          {/* Sidebar */}
          <aside className="w-[300px] hidden lg:block shrink-0 space-y-6 sticky top-[100px] h-fit self-start re-font-title">
             {/* Author Card */}
             <div className="bg-[#0a0a0a] rounded-sm p-6 shadow-[0_0_15px_rgba(200,0,0,0.2)] border border-red-900/40 hover:shadow-xl transition-all group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-[#2a2a2a] group-hover:ring-2 group-hover:ring-red-600/20 transition-all">
                   <img src={capcomLogo} alt="Capcom Logo" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-base text-gray-100 truncate">{game.author}</h3>
                   <p className="text-xs text-gray-400 font-medium truncate">知名游戏开发商</p>
                 </div>
               </div>
               <a 
                 href="https://www.capcom.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-2 bg-[#0a0a0a] border border-red-700 text-red-600 font-bold rounded-full text-sm hover:bg-red-700 hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
               >
                  <span>打开官网</span>
               </a>
             </div>

             {/* TOC */}
              <div className="bg-[#0a0a0a] rounded-sm p-6 shadow-[0_0_15px_rgba(200,0,0,0.2)] border border-red-900/40 sticky top-4 flex flex-col">
                <h3 className="font-bold text-gray-100 mb-4 pl-1 text-[15px] flex items-center justify-between shrink-0">
                  目录
                  <span className="text-xs font-bold text-white bg-red-700 px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                </h3>
                
                <nav className="space-y-1 relative pr-2 flex-1">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#1f1f1f]"></div>
                 
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
                           href={`#${parent.id}`}
                           onClick={(e) => scrollToSection(e, parent.id)}
                           className={`
                             flex-1 block py-2 pr-10 transition-all relative z-10 rounded-r border-l-[3px] pl-6 text-[14px] flex items-center justify-between
                             ${(isParentActive || isChildActive)
                               ? 'text-red-600 font-bold bg-red-900/50/80 border-red-700 shadow-sm' 
                               : 'text-gray-500 hover:text-red-600 hover:bg-[#141414] border-transparent hover:border-[#333] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors z-20 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-red-600 hover:bg-red-900/30' 
                                 : 'text-gray-400 hover:text-gray-400 hover:bg-[#1f1f1f]'}`}
                           >
                             {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                           </button>
                         )}
                       </div>

                       {hasChildren && isExpanded && (
                         <div className="space-y-1 mt-1 transition-all duration-300 ease-in-out">
                           {parent.children.map(child => {
                             const isCurrentChildActive = activeSection === child.id;
                             return (
                               <a 
                                 key={child.id}
                                 href={`#${child.id}`}
                                 onClick={(e) => scrollToSection(e, child.id)}
                                 className={`
                                   block py-1.5 pr-3 transition-all relative z-10 rounded-r border-l-[3px] pl-9 text-[13px]
                                   ${isCurrentChildActive 
                                     ? 'text-red-600 font-bold bg-red-900/30 border-red-700' 
                                     : 'text-gray-500 hover:text-red-600 hover:bg-[#141414] border-transparent hover:border-[#333]'}
                                 `}
                               >
                                 {child.title}
                               </a>
                             );
                           })}
                         </div>
                       )}
                     </div>
                   );
                 })}
               </nav>
             </div>

          </aside>
       </main>
       
       {/* Mobile Bottom Floating Bar */}
       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-[#0a0a0a]/95 backdrop-blur-md border border-[#333] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full z-40 lg:hidden px-6 py-3 flex items-center justify-between">
         <div className="flex items-center gap-8">
           <button 
             onClick={() => setIsShareOpen(true)}
             className="flex flex-col items-center justify-center text-gray-400 hover:text-gray-200 transition-colors"
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
                 className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-gray-200'}`}
               />
               <span className="absolute -top-2 -right-3 text-[10px] font-bold text-yellow-500 leading-none">
                 {likes > 99 ? '99+' : likes}
               </span>
             </div>
           </button>
         </div>
         <button 
           onClick={() => setIsTocOpen(true)}
           className="flex items-center justify-center text-gray-400 hover:text-gray-200 transition-colors"
         >
           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
         </button>
       </div>

       {/* Mobile TOC Bottom Sheet */}
       {isTocOpen && (
         <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/50 transition-opacity"
             onClick={() => setIsTocOpen(false)}
           />
           
           {/* Sheet */}
           <div className="relative bg-[#0a0a0a] w-full max-h-[80vh] rounded-t-2xl shadow-xl flex flex-col animate-slide-up">
             {/* Handle */}
             <div className="flex justify-center pt-3 pb-2 cursor-pointer" onClick={() => setIsTocOpen(false)}>
               <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
             </div>
             
             {/* Header */}
             <div className="px-6 pb-4 border-b border-[#2a2a2a] flex items-center justify-between">
               <h3 className="font-bold text-gray-100 text-lg flex items-center gap-2">
                 <BookOpen size={18} className="text-red-600" />
                 目录
               </h3>
               <div className="flex items-center gap-3">
                 <span className="text-xs font-bold text-white bg-red-700 px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                 <button onClick={() => setIsTocOpen(false)} className="text-gray-400 hover:text-gray-400">
                   <X size={20} />
                 </button>
               </div>
             </div>
             
             {/* TOC Content */}
             <div className="overflow-y-auto p-4 pb-12 custom-scrollbar">
               <nav className="space-y-1 relative pr-2 flex-1">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#1f1f1f]"></div>
                 
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
                           href={`#${parent.id}`}
                           onClick={(e) => {
                             scrollToSection(e, parent.id);
                             setIsTocOpen(false);
                           }}
                           className={`
                             flex-1 block py-3 pr-10 transition-all relative z-10 rounded-r border-l-[3px] pl-6 text-[15px] flex items-center justify-between
                             ${(isParentActive || isChildActive)
                               ? 'text-red-600 font-bold bg-red-900/50/80 border-red-700 shadow-sm' 
                               : 'text-gray-500 hover:text-red-600 hover:bg-[#141414] border-transparent hover:border-[#333] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md transition-colors z-20 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-red-600 hover:bg-red-900/30' 
                                 : 'text-gray-400 hover:text-gray-400 hover:bg-[#1f1f1f]'}`}
                           >
                             {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                           </button>
                         )}
                       </div>

                       {hasChildren && isExpanded && (
                         <div className="space-y-1 mt-1 transition-all duration-300 ease-in-out">
                           {parent.children.map(child => {
                             const isCurrentChildActive = activeSection === child.id;
                             return (
                               <a 
                                 key={child.id}
                                 href={`#${child.id}`}
                                 onClick={(e) => {
                                   scrollToSection(e, child.id);
                                   setIsTocOpen(false);
                                 }}
                                 className={`
                                   block py-2 pr-3 transition-all relative z-10 rounded-r border-l-[3px] pl-9 text-[14px]
                                   ${isCurrentChildActive 
                                     ? 'text-red-600 font-bold bg-red-900/30 border-red-700' 
                                     : 'text-gray-500 hover:text-red-600 hover:bg-[#141414] border-transparent hover:border-[#333]'}
                                 `}
                               >
                                 {child.title}
                               </a>
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

       {/* Mobile Share Bottom Sheet */}
       {isShareOpen && (
         <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/50 transition-opacity"
             onClick={() => setIsShareOpen(false)}
           />
           
           {/* Sheet */}
           <div className="relative bg-[#141414] w-full rounded-t-2xl shadow-xl flex flex-col animate-slide-up pb-safe">
             {/* Header Card */}
             <div className="bg-[#0a0a0a] rounded-t-2xl p-4 shadow-sm relative">
               <button 
                 onClick={() => setIsShareOpen(false)} 
                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-400"
               >
                 <X size={24} />
               </button>
               
               <div className="flex items-center gap-3 pr-10">
                 <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#2a2a2a] shadow-sm shrink-0">
                   <img src={re9Cover} alt="Resident Evil 9 Cover" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-gray-100 text-[15px] truncate">
                     生化危机9 终极攻略指南
                   </h3>
                   <p className="text-gray-500 text-xs truncate mt-0.5">
                     {getShareUrl()}
                   </p>
                 </div>
               </div>
             </div>
             
             {/* Share Options Grid */}
             <div className="p-6">
               <div className="grid grid-cols-4 gap-y-6 gap-x-4 mb-6">
                 {/* Row 1 */}
                 <button 
                   onClick={handleWechatShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#07C160]" fill="currentColor">
                       <path d="M8.2,16.5C3.7,16.5,0,13.2,0,9.1C0,5.1,4.1,1.8,8.8,1.8c4.6,0,8.4,3.3,8.4,7.4C17.2,13.2,13.2,16.5,8.2,16.5z M5.4,6.1 c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1C6.4,6.5,5.9,6.1,5.4,6.1z M11.5,6.1c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1 c0.6,0,1-0.5,1-1C12.6,6.5,12.1,6.1,11.5,6.1z"/>
                       <path d="M24,13.6c0-3.3-3.2-5.9-7.1-5.9c-0.3,0-0.6,0-0.9,0.1c0.8,0.8,1.2,1.8,1.2,2.8c0,3.7-3.4,6.6-7.5,6.6 c-0.5,0-0.9-0.1-1.4-0.2c1.1,2.5,4.3,4.2,7.7,4.2C20.4,21.1,24,17.7,24,13.6z M15.1,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C15.9,11.7,15.6,11.3,15.1,11.3z M19.9,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C20.7,11.7,20.3,11.3,19.9,11.3z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-gray-400">微信</span>
                 </button>
                 <button 
                   onClick={handleWechatShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <div className="relative w-8 h-8 rounded-full border-[3px] border-[#07C160] border-t-[#FCBE22] border-r-[#FCBE22] rotate-45 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#FA5151]"></div>
                     </div>
                   </div>
                   <span className="text-[11px] text-gray-400">朋友圈</span>
                 </button>
                 <button 
                   onClick={handleWeiboShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#E6162D]" fill="currentColor">
                       <path d="M21.2,10.6c-0.7-1.4-2.1-2.4-3.6-2.6c-0.3-0.1-0.6-0.1-1-0.1c0.2-0.5,0.3-1,0.3-1.6c0-1.8-1.5-3.3-3.3-3.3 c-1.2,0-2.3,0.7-2.9,1.7c-0.3-0.3-0.8-0.5-1.2-0.5c-1,0-1.9,0.8-1.9,1.9c0,0.3,0.1,0.6,0.2,0.9C7.4,6.7,7,6.6,6.5,6.6 c-2.4,0-4.3,2-4.3,4.4c0,1,0.3,1.9,0.9,2.6c-0.5,0.7-0.7,1.5-0.7,2.4c0,2.4,2,4.4,4.4,4.4c1.1,0,2.1-0.4,2.9-1 c0.8,0.7,1.9,1.2,3.1,1.2c2.7,0,4.9-2.2,4.9-4.9c0-0.4-0.1-0.8-0.2-1.2C20.1,14,21.8,12.5,21.2,10.6z M17.6,15.7 c-0.6,1.4-1.9,2.4-3.4,2.7c-1.3,0.3-2.6,0-3.6-0.6c-0.4-0.2-0.8-0.5-1.1-0.8c-0.4,0.4-1,0.6-1.6,0.6c-1.4,0-2.6-1.1-2.6-2.6 c0-0.7,0.3-1.4,0.8-1.8c0.2-0.2,0.5-0.4,0.8-0.5C5.8,11.9,5,10.5,5,8.9c0-1.8,1.5-3.3,3.3-3.3c1,0,1.8,0.4,2.5,1.1 c0.3-0.5,0.8-0.8,1.4-0.8c0.9,0,1.6,0.7,1.6,1.6c0,0.2-0.1,0.4-0.2,0.6C14.7,7.8,15.6,8.8,15.6,10c0,0.5-0.1,0.9-0.3,1.3 c1.5-0.1,2.8,0.8,3.3,2.1C19.1,14.3,18.5,15.2,17.6,15.7z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-gray-400">微博</span>
                 </button>
                 <div className="hidden sm:block"></div> {/* Spacer for alignment if needed, or 4th item */}
                 
                 {/* Row 2 */}
                 <button 
                   onClick={handleSaveImage}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-gray-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                   </div>
                   <span className="text-[11px] text-gray-400">保存图片</span>
                 </button>
                 <button 
                   onClick={handleCopyLink}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-gray-300 relative">
                     {copySuccess ? (
                       <span className="text-green-500 font-bold text-sm">已复制</span>
                     ) : (
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                     )}
                   </div>
                   <span className="text-[11px] text-gray-400">复制链接</span>
                 </button>
                 <button 
                   onClick={handleSystemShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-gray-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                   </div>
                   <span className="text-[11px] text-gray-400">系统分享</span>
                 </button>
               </div>
             </div>
           </div>
         </div>
       )}

       {/* Footer */}
       <Footer />
    </div>
  );
}
