import { useParams, Link } from 'react-router-dom';
import { booksData, categoryOptions } from './data';
import { tlou2GuideData } from './data/tlou2-guide';
import { bg3GuideData, bg3TocItems } from './data/bg3-guide';
import { horizonForbiddenWestGuideData, horizonForbiddenWestTocItems } from './data/horizon-forbidden-west-guide';
import { witcher3GuideData, witcher3TocItems } from './data/witcher3-guide';
import { useState, useEffect, useMemo } from 'react';
import { Search, Heart, Share2, Bookmark, ChevronDown, ChevronRight, BookOpen, X, ShoppingCart, ExternalLink, ScrollText, Disc, Hammer, Lock, ShieldAlert, MapPin, Landmark, Box, Radio, Eye, CheckCircle2, Gamepad2, Skull, MessageCircle } from 'lucide-react';
import Footer from './components/Footer';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import tlou2Banner from '../picture/page1-game-walkthrough/tlou2/The-Last-of-Us-part-2-remastered-hub-hero-banner-desktop-01-en-27nov23.webp';
import tlou2Ps5Cover from '../picture/page1-game-walkthrough/tlou2/The-Last-Of-Us-Part-II-Remastered-PlayStation-5_901e04c9-bac6-4560-8c2b-705307058fc3.fc2bbde84f012348309a30046a71564a.jpg';
import horizonCover from '../picture/page1-game-walkthrough/forbidden-west/horizon-forbidden-west-ps5-launch-box-front-en-hk-08dec21.webp';
import horizonGameplayShot from '../picture/page1-game-walkthrough/forbidden-west/xizhijuejing2.jpeg';
import guerrillaLogo from '../picture/page1-game-walkthrough/forbidden-west/logo-guerrilla-full.svg';
import naughtyDogLogo from '../picture/page1-game-walkthrough/tlou2/NaughtyDog_64x64.png';
import logo from '../picture/logo.svg';
import tlou2StealthShot from '../picture/page1-game-walkthrough/tlou2/tips-for-playing-as-ellie-with-the-stalkers-in-the-office-v0-mg9m8ug9t4cd1.webp';
import tlou2ResourcesShot from '../picture/page1-game-walkthrough/tlou2/tlou2-resources.jpg';
import tlou2EllieSeattle from '../picture/page1-game-walkthrough/tlou2/Ellie-in-seattle.jpeg';
import tlou2AgilityShot from '../picture/page1-game-walkthrough/tlou2/08_0.jpg.webp';
import tlou2DodgeShot from '../picture/page1-game-walkthrough/tlou2/dodge.jpg';
import tlou2ProneShot from '../picture/page1-game-walkthrough/tlou2/Last-of-Us-Part-2-Ellie-Stealth-Feature.jpg';
import tlou2BrickShot from '../picture/page1-game-walkthrough/tlou2/ellie-holding-a-brick-in-the-last-of-us-part-ii.jpg';
import tlou2BottleShot from '../picture/page1-game-walkthrough/tlou2/ellie-holding-a-throwable-bottle-in-the-last-of-us-part-ii.jpg';
import tlou2CraftShot from '../picture/page1-game-walkthrough/tlou2/The-Last-of-Us-2-How-to-Heal-Health-Kit.jpg';
import tlou2LookUpShot from '../picture/page1-game-walkthrough/tlou2/card.jpg';
import tlou2HighContrastShot from '../picture/page1-game-walkthrough/tlou2/ High Contrast Display.webp';
import tlou2TeamEllie from '../picture/page1-game-walkthrough/tlou2/team Ellie.jpg';
import tlou2TeamAbby from '../picture/page1-game-walkthrough/tlou2/team abby.jpg';
import bg3CharacterCreation from '../picture/page1-game-walkthrough/bd3/Bg_000.jpg';
import bg3PrologueEscape from '../picture/page1-game-walkthrough/bd3/bg2.jpg';
import bg3Frame from '../picture/page1-game-walkthrough/bd3/bd3-frame.png';
import bg3Button from '../picture/page1-game-walkthrough/bd3/bg3-Main button.png';
import Tlou2TrophyList from './components/Tlou2TrophyList';
import './App.css';

// Default TOC for TLOU2 (Moved from constant to component logic later, but keeping structure here for now)
const tlou2TocItems = [
  { id: 'section-intro', title: '前言与导读', level: 1 },
  { id: 'section-1', title: '1. 基础操作与生存技巧', level: 1 },
  { id: 'section-1-1', title: '1.1 战斗技巧', level: 2 },
  { id: 'section-1-2', title: '1.2 探索技巧', level: 2 },
  { id: 'section-2', title: '2. 全章节流程攻略', level: 1 },
  { id: 'section-2-1', title: '2.1 杰克逊', level: 2 },
  { id: 'section-2-2', title: '2.2 西雅图 第一天 - 艾莉', level: 2 },
  { id: 'section-2-3', title: '2.3 西雅图 第二天 - 艾莉', level: 2 },
  { id: 'section-2-4', title: '2.4 西雅图 第三天 - 艾莉', level: 2 },
  { id: 'section-2-5', title: '2.5 公园 - 埃比', level: 2 },
  { id: 'section-2-6', title: '2.6 西雅图 第一天 - 埃比', level: 2 },
  { id: 'section-2-7', title: '2.7 西雅图 第二天 - 埃比', level: 2 },
  { id: 'section-2-8', title: '2.8 西雅图 第三天 - 埃比', level: 2 },
  { id: 'section-2-9', title: '2.9 圣塔芭芭拉', level: 2 },
  { id: 'section-3', title: '3. 保险箱与密码全解', level: 1 },
  { id: 'section-4', title: '4. No Return 模式', level: 1 },
  { id: 'section-trophy-list', title: '5. 查看全奖杯列表', level: 1 },
];

export default function WalkthroughTlou2() {
  const { slug: paramSlug } = useParams();
  const slug = paramSlug || 'the-last-of-us-part-2';
  const [game, setGame] = useState(null);
  const [activeSection, setActiveSection] = useState('section-1');
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

  // Initialize likes from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem(`tlou2-likes-${slug}`);
    const hasLiked = localStorage.getItem(`tlou2-has-liked-${slug}`);
    
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    } else {
      // Default starting likes
      setLikes(68);
    }
    
    if (hasLiked === 'true') {
      setIsLiked(true);
    }
  }, [slug]);

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);
    
    localStorage.setItem(`tlou2-likes-${slug}`, newLikes.toString());
    localStorage.setItem(`tlou2-has-liked-${slug}`, (!isLiked).toString());
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
    window.location.href = 'weixin://';
    setIsShareOpen(false);
  };

  const handleWeiboShare = () => {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(`${game?.title || '最后生还者 第二部'} 终极攻略指南 ${url}`);
    window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${title}`, '_blank');
    setIsShareOpen(false);
  };

  const handleSystemShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${game?.title || '最后生还者 第二部'} 终极攻略指南`,
          text: `来看看这篇超详细的《${game?.title || '最后生还者 第二部'}》攻略指南！`,
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

  // Determine TOC Items based on game
  const tocItems = useMemo(() => {
    if (!game) return [];
    if (game.slug === 'baldurs-gate-3') return bg3TocItems;
    if (game.slug === 'the-last-of-us-part-2') return tlou2TocItems;
    if (game.slug === 'horizon-forbidden-west') return horizonForbiddenWestTocItems;
    if (game.slug === 'the-witcher-3') return witcher3TocItems;
    
    // Default TOC for other games
    return [
      { id: 'section-intro', title: '前言', level: 1 },
      { id: 'section-2', title: '一、游戏基础与操作指南', level: 1 },
      { id: 'section-2-1', title: '1.1 战斗系统详解', level: 2 },
      { id: 'section-3', title: '三、全收集品位置一览', level: 1 },
      { id: 'section-4', title: '四、白金奖杯获取指南', level: 1 },
    ];
  }, [game]);

  // 构建树形结构 TOC
  const tocTree = useMemo(() => {
    const tree = [];
    let currentLevel1 = null;
    let currentLevel2 = null;

    tocItems.forEach(item => {
      if (item.level === 1) {
        currentLevel1 = { ...item, children: [] };
        tree.push(currentLevel1);
        currentLevel2 = null;
      } else if (item.level === 2 && currentLevel1) {
        currentLevel2 = { ...item, children: [] };
        currentLevel1.children.push(currentLevel2);
      } else if (item.level === 3 && currentLevel2) {
        currentLevel2.children.push(item);
      }
    });

    return tree;
  }, [tocItems]);

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
      p.id === activeSection || 
      (p.children && p.children.some(c => c.id === activeSection || (c.children && c.children.some(gc => gc.id === activeSection))))
    );
    
    if (parent) {
       setExpandedSections(prev => {
         const newState = { ...prev, [parent.id]: true };
         
         // Auto expand Level 2 if needed
         const child = parent.children?.find(c => 
            c.id === activeSection || (c.children && c.children.some(gc => gc.id === activeSection))
         );
         
         if (child) {
             newState[child.id] = true;
         }
         
         return newState;
       });
    }
  }, [activeSection, tocTree]);

  // 获取推荐游戏
  const recommendedGames = useMemo(() => {
    if (!game) return [];
    return [...booksData]
      .filter(b => b.title !== game.title)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [game]);

  useEffect(() => {
    // Decode URL and find game
    const foundGame = booksData.find(g => {
        const gameSlug = g.slug || g.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-\u4e00-\u9fa5]+/g, '').replace(/\-\-+/g, '-');
        // Match slug either directly or with -walkthrough suffix removed
        return slug === gameSlug || slug === `${gameSlug}-walkthrough`;
    });
    
    setGame(foundGame);
  }, [slug]);

  // Scroll spy and progress logic
  useEffect(() => {
    const handleScroll = () => {
      // 1. Update Reading Progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100))) : 0;
      setReadingProgress(progress);

      // 2. Update Active Section
      // Find the section that is currently most visible
      let currentSection = activeSection;
      
      // Get all section elements positions
      const sectionOffsets = tocItems.map(item => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, offset: -Infinity };
        // Offset adjusted for header height (100px) + some buffer
        return { id: item.id, offset: element.getBoundingClientRect().top - 120 };
      });

      // Find the last section that has passed the top threshold
      // We look for offset <= 0 (meaning it's at or above our reading line)
      // OR the one closest to 0 if all are positive (top of page)
      
      // If we are at the very bottom of the page, highlight the last item
      if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.documentElement.scrollHeight - 10) {
         // Find the last item that has a corresponding element in DOM
         for (let i = tocItems.length - 1; i >= 0; i--) {
            if (document.getElementById(tocItems[i].id)) {
               currentSection = tocItems[i].id;
               break;
            }
         }
      } else {
          const passedSections = sectionOffsets.filter(s => s.offset <= 0);
          
          if (passedSections.length > 0) {
            // The last one that passed is the current one
            currentSection = passedSections[passedSections.length - 1].id;
          } else if (sectionOffsets.length > 0) {
            // If none passed (at very top), active is the first one
            currentSection = sectionOffsets[0].id;
          }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    
    if (id === 'section-intro') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setActiveSection(id);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header (60px) + padding (40px)
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const renderStats = (stats) => {
    if (!stats) return null;
    return (
      <div className="flex flex-wrap gap-3 mt-2 mb-4 text-xs text-gray-500 font-medium">
        {stats.artifacts && <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded"><ScrollText size={12} /> 文物: {stats.artifacts}</span>}
        {stats.tradingCards && <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded"><Disc size={12} /> 卡牌: {stats.tradingCards}</span>}
        {stats.coins && <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded"><Disc size={12} /> 硬币: {stats.coins}</span>}
        {stats.journalEntries && <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded"><BookOpen size={12} /> 日志: {stats.journalEntries}</span>}
        {stats.workbenches && <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded"><Hammer size={12} /> 工作台: {stats.workbenches}</span>}
        {stats.safes && <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded"><Lock size={12} /> 保险箱: {stats.safes}</span>}
        {stats.trainingManuals && <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded"><BookOpen size={12} /> 手册: {stats.trainingManuals}</span>}
        {stats.weapons && <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded"><ShieldAlert size={12} /> 武器: {stats.weapons}</span>}
        {stats.collectibles && <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded"><Disc size={12} /> 收集品: {stats.collectibles}</span>}
      </div>
    );
  };

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sspai-bg text-sspai-gray">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-sspai-text">404</h1>
          <p>未找到该游戏的攻略信息</p>
          <a href="/" className="mt-4 inline-block text-[#a31515] hover:underline font-medium">返回首页</a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#030303] tlou2-grunge-bg font-sans text-gray-200 selection:bg-black selection:text-[#fdfbf7]"
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
          <article className="flex-1 min-w-0 bg-[#0a0a0a] rounded-sm border border-[#331111]/60 shadow-[0_0_50px_rgba(139,0,0,0.2)] p-8 md:p-12 md:pb-16 transition-shadow text-[#f1f1f1] relative z-10">
             {/* Banner */}
             <div className="w-full aspect-[2/1] rounded-sm overflow-hidden mb-8 shadow-inner bg-[#222222] relative group border border-[#331111]/80">
               <div className="tlou2-blood-splatter"></div>
               <img 
                 src={game.slug === 'the-last-of-us-part-2' ? tlou2Banner : game.imgUrl} 
                 alt={game.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
 
             </div>
             
             {/* Title */}
             <h1 className="text-4xl md:text-[50px] font-bold mb-6 leading-[1.2] text-[#e5e7eb] tracking-widest tlou2-font-title drop-shadow-lg">
               {game.title} 完整图文攻略
               <span className="block text-xl md:text-2xl text-[#a31515] mt-3 font-normal tlou2-font-journal opacity-90">IF I EVER WERE TO LOSE YOU...</span>
             </h1>
             
             {/* Meta */}
             <div className="flex items-center justify-between mb-10 pb-8 border-b border-[#333333]">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-[#333333] shadow-sm cursor-pointer hover:ring-2 hover:ring-[#a31515]/20 transition-all">
                   <img src={game.slug === 'the-last-of-us-part-2' ? naughtyDogLogo : game.slug === 'horizon-forbidden-west' ? guerrillaLogo : game.imgUrl} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-[15px] text-[#f1f1f1] hover:text-[#a31515] cursor-pointer transition-colors">{game.author}</span>
                     <span className="px-1.5 py-[1px] bg-[#222222] text-gray-500 text-[10px] font-bold rounded uppercase tracking-wider">官方</span>
                   </div>
                   <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-3 font-medium">
                    <span>{game.date || '2026年02月26日'}</span>
                    <span>阅读 15分钟</span>
                  </div>
                 </div>
               </div>
               
             </div>
             
             {/* Content Body */}
             <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#f1f1f1] prose-headings:tracking-tight prose-p:text-[#f1f1f1] prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-[#a31515] prose-a:no-underline prose-a:border-b prose-a:border-[#8b0000]/30 hover:prose-a:border-[#8b0000] hover:prose-a:bg-[#a31515]/10 prose-a:transition-all prose-img:rounded-lg prose-img:shadow-sm prose-blockquote:border-l-4 prose-blockquote:border-[#8b0000] prose-blockquote:bg-[#1a1a1a] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-[#f1f1f1] prose-li:text-[#f1f1f1] prose-strong:text-[#f1f1f1] prose-strong:font-bold">
               
               {game.slug === 'the-last-of-us-part-2' ? (
                 <>
                   {/* TLOU2 Specific Content - Optimized Layout */}
                    <div className="mb-12">
                      <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                         {/* Cover Image & Purchase */}
                        <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                          
                          {/* Purchase Card */}
                          <div className="bg-[#111111] rounded-xl shadow-sm border border-[#444444] p-5">
                            <h3 className="font-bold text-[#e5e7eb] mb-4 text-sm flex items-center gap-2">
                              <span>🛍️</span> 购买游戏
                            </h3>
                            
                            <div className="flex flex-col gap-4">
                              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#333333] bg-[#111111] mb-2">
                                <img src={tlou2Ps5Cover} alt="PS5 Official Disc Cover" className="absolute inset-0 w-full h-full object-contain p-1" />
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                  <span className="text-xs text-gray-400 line-through">HK$ 568.00</span>
                                  <span className="text-2xl font-bold text-[#a31515]">HK$ 398.00</span>
                                </div>
                                <span className="px-2.5 py-1 bg-[#8b0000]/30 text-[#a31515] text-xs font-bold rounded">-30%</span>
                              </div>

                              <a 
                                href="https://store.playstation.com/zh-hans-hk/product/HP9000-PPSA15512_00-THELASTOFUSPART2" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-[#7b0a0a] text-[#f1f1f1] font-bold rounded-sm text-sm hover:bg-[#5a0000] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,0,0,0.5)] group uppercase tracking-widest tlou2-font-title text-xl"
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
                           <div className="bg-[#111111] rounded-xl shadow-sm border border-[#444444] p-6 flex flex-col h-full">
                             <div className="flex items-center justify-between border-b border-[#333333] pb-4 mb-4">
                               <h3 className="text-xl font-bold text-[#e5e7eb] flex items-center gap-2">
                                <span className="text-2xl">📋</span> 游戏档案
                              </h3>
                             </div>
                             
                             <div className="flex-1 grid grid-cols-1 content-center gap-1">
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🏢</span> 开发商
                                 </span>
                                 <span className="font-semibold text-[#e5e7eb]">顽皮狗 (Naughty Dog)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📦</span> 发行商
                                 </span>
                                 <span className="font-semibold text-[#e5e7eb]">索尼互动娱乐 (SIE)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📅</span> 发售日期
                                 </span>
                                 <span className="font-semibold text-[#e5e7eb]">2020-06-19</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🎯</span> 游戏类型
                                 </span>
                                 <span className="font-semibold text-[#e5e7eb]">动作冒险 / 生存恐怖</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🕹️</span> 对应平台
                                 </span>
                                 <span className="font-semibold text-[#e5e7eb]">PS5 / PS4</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">👥</span> 游玩人数
                                 </span>
                                 <span className="font-semibold text-[#e5e7eb]">1人</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">💰</span> 参考价格
                                 </span>
                                 <span className="font-bold text-[#a31515] text-base">HK$ 398.00</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🌐</span> 语言支持
                                 </span>
                                 <span className="font-semibold text-[#e5e7eb] text-right max-w-[50%] leading-tight">简繁中字 / 英文语音</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">⭐</span> 年龄分级
                                 </span>
                                 <div className="flex items-center gap-2">
                                   <span className="px-1.5 py-0.5 border border-[#555555] rounded text-[10px] font-bold text-gray-500">ESRB M</span>
                                   <span className="font-semibold text-[#e5e7eb]">17+ / 18+</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                      </div>

                     <h2 className="text-3xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                        <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                        📖 游戏简介
                     </h2>
                     <p className="lead text-[17px] text-[#d1d5db] leading-relaxed mb-8">
                       《最后生还者 2》（The Last of Us Part II）是由顽皮狗（Naughty Dog）工作室开发，索尼互动娱乐发行的动作冒险游戏。故事发生在初代游戏结束后的五年，艾莉和乔尔定居在怀俄明州的杰克逊市。然而，一场突如其来的暴力冲突打破了这里的宁静。为了追捕肇事者，艾莉踏上了一场横跨西雅图的残酷报复之旅。
                       <br/><br/>
                       作为一款备受瞩目的续作，本作在叙事、画面表现和游戏机制上都达到了PS4时代的巅峰。玩家将在充满感染者和敌对幸存者的末世废墟中求生，体验扣人心弦的剧情与紧张刺激的战斗。复刻版（Remastered）更针对PS5主机进行了全面强化，带来了4K画质、更短的加载时间以及全新的“No Return”肉鸽生存模式。
                     </p>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                    <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                    参考信息
                 </h2>
                 <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] mb-12">
                   <p className="text-[#9ca3af] mb-3">
                     本攻略参考了 Steam 社区的优秀指南，原文链接如下：
                   </p>
                   <a 
                     href="https://steamcommunity.com/sharedfiles/filedetails/?id=3457531085" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-[#a31515] hover:text-[#ff3333] underline break-all"
                   >
                     The Last of Us Part 2: In Chapter Order 100% Achievement Walkthrough Guide
                   </a>
                 </div>

                 <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                        <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎯 核心特色
                     </h2>
                     <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner">
                          <h4 className="font-bold text-lg mb-2 text-[#a31515]">次世代叙事体验</h4>
                          <p className="text-sm text-[#9ca3af] m-0">
                            通过双主角视角，深入探讨复仇、原谅与人性。电影级的过场动画与无缝衔接的实机游玩，带来沉浸感极强的叙事体验。
                          </p>
                        </div>
                        <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner">
                          <h4 className="font-bold text-lg mb-2 text-[#a31515]">进化的战斗系统</h4>
                          <p className="text-sm text-[#9ca3af] m-0">
                            新增闪避、跳跃与俯卧机制，配合更加智能的AI敌人。玩家需要灵活利用环境潜行或正面对抗，每一场战斗都充满变数。
                          </p>
                        </div>
                        <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner">
                          <h4 className="font-bold text-lg mb-2 text-[#a31515]">No Return 模式</h4>
                          <p className="text-sm text-[#9ca3af] m-0">
                            PS5版独占的Roguelike生存模式。选择不同的角色与流派，在随机生成的关卡中挑战极限，体验纯粹的战斗乐趣。
                          </p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2 flex items-center gap-2">
                        <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        <span className="text-2xl">🏆</span> 媒体评分
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#bf1313] text-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-90">IGN</span>
                          <span className="text-5xl font-black mb-4">10<span className="text-2xl opacity-70">/10</span></span>
                          <p className="text-xs leading-relaxed opacity-90">"大师之作 (Masterpiece)。在各个层面上都进化了初代的体验。"</p>
                        </div>
                        <div className="bg-[#ffcc00] text-[#f1f1f1] p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-70">GameSpot</span>
                          <span className="text-5xl font-black mb-4">8<span className="text-2xl opacity-50">/10</span></span>
                          <p className="text-xs leading-relaxed opacity-80">"虽然部分情节令人难受，但它依然是一部美丽且令人心碎的作品。"</p>
                        </div>
                        <div className="bg-[#333333] text-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-90">Metacritic</span>
                          <span className="text-5xl font-black mb-4 bg-green-600 px-3 py-1 rounded">93</span>
                          <p className="text-xs leading-relaxed opacity-90">"PS4 世代的绝唱，技术与艺术的完美结合。"</p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                        <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎬 官方游戏截图
                     </h2>
                     <div className="space-y-8 mb-10">
                        <figure>
                          <img src={tlou2EllieSeattle} alt="The Last of Us Part II Gameplay" className="w-full rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                          <figcaption className="text-center text-sm text-gray-400 mt-2">艾莉在西雅图的探索之旅 | 来源: PlayStation 官方</figcaption>
                        </figure>

                     </div>

                     
                     <div className="text-xs text-gray-400 border-t border-[#333333] pt-4">
                       📌 数据更新于：2026-02-27 | 以上信息汇总自 PlayStation 官网及多家权威媒体，请以官方最新公告为准。
                     </div>
                   </div>
                   
                   <div className="bg-[#140a0a] border border-[#331111] rounded-lg p-6 my-10 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-[#8b0000]"></div>
                     <h4 className="font-bold mb-3 text-[#a31515] flex items-center gap-2 text-base">
                        <span>💡</span> 通用技巧
                     </h4>
                     <div className="text-[15px] text-[#f1f1f1] m-0 leading-relaxed space-y-4">
                       <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                         <strong className="block mb-1 text-[#e5e7eb]">✔ 开启“高对比度显示” (High Contrast Display)</strong>
                         <p className="m-0 text-[#9ca3af] text-sm">建议开启此功能。按下触摸板（原文是 G 键，针对 PC 版或特定设置，主机版通常在辅助功能里设置手势）可以高亮显示物品，让收集品变得非常显眼，极易发现。</p>
                       </div>
                       
                       <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                         <strong className="block mb-1 text-[#e5e7eb]">✔ 如果追求稳妥的通关路线</strong>
                         <p className="m-0 text-[#9ca3af] text-sm">建议第一周目在“超轻 (Very Light)”难度下完成“永久死亡 (Permadeath)”模式，第二周目再挑战“绝地+ (Grounded+)”难度。</p>
                       </div>

                       <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                         <strong className="block mb-1 text-[#e5e7eb]">✔ 如果追求速度</strong>
                         <p className="m-0 text-[#9ca3af] text-sm">可以尝试一次性同时完成两个高难度奖杯（绝地+ 和 永久死亡），然后在“新游戏+ (NG+)”中补齐遗漏的奖杯。</p>
                       </div>

                       <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                         <strong className="block mb-1 text-[#e5e7eb]">✔ 关于永久死亡 (Permadeath) 模式</strong>
                         <p className="m-0 text-[#9ca3af] text-sm">建议将设置设定为<strong>“按章节 (Per Chapter)”</strong>，而不是“按幕 (Act)”或“整部游戏 (Whole Game)”。这样容错率最高。</p>
                       </div>

                       <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                         <strong className="block mb-1 text-[#e5e7eb]">✔ 增强聆听模式 (Enhanced Listen mode)</strong>
                         <p className="m-0 text-[#9ca3af] text-sm">开启此功能后，聆听模式不仅能侦测敌人，还能为您扫描并“标记 (Ping)”附近的物品，非常实用。</p>
                       </div>

                       <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                         <strong className="block mb-1 text-[#e5e7eb]">✔ 收集品追踪 (Collectible Tracking)</strong>
                         <p className="m-0 text-[#9ca3af] text-sm">前往 <strong>选项 &gt; HUD &gt; 通知 &gt; 收集品追踪</strong> 开启此功能。这样当您捡起收集品时会有提示，方便确认哪些已收集，哪些可能错过了。</p>
                       </div>

                       <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                         <strong className="block mb-1 text-[#e5e7eb]">✔ 收集品统计</strong>
                         <p className="m-0 text-[#9ca3af] text-sm">如果您缺少某个收集品但不知道是在哪一章漏掉的，只需进入<strong>“章节选择”</strong>，系统会显示每一章各类收集品的总数以及您当前的收集进度。您也可以直接通过章节选择进入特定关卡快速补齐。</p>
                       </div>

                       <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                         <h5 className="font-bold text-base mb-2 text-[#e5e7eb]">📦 收集品概览</h5>
                         <p className="mb-2 text-[#9ca3af] text-sm">《最后生还者 第二部 重制版》的剧情模式中大约有 <strong>286</strong> 个收集品：</p>
                         <ul className="list-disc pl-5 space-y-1 text-[#9ca3af] text-sm">
                           <li>📜 <strong>127</strong> 个 遗物 (Artifacts)</li>
                           <li>📓 <strong>20</strong> 个 日记 (Journal Entries)</li>
                           <li>🃏 <strong>48</strong> 张 交易卡牌 (Trading Cards)</li>
                           <li>🪙 <strong>32</strong> 枚 硬币 (Coins)</li>
                           <li>🔧 <strong>25</strong> 个 工作台 (Workbenches)</li>
                           <li>🔐 <strong>14</strong> 个 保险箱 (Safes)</li>
                           <li>🔫 <strong>12</strong> 件 武器 (Weapons)</li>
                           <li>📘 <strong>8</strong> 本 培训手册 (Training Manuals)</li>
                           <li>🔫 <strong>4</strong> 个 枪套 (Upgrade Holsters)</li>
                           <li>以及 <strong>奇异遗物 (Strange Artifact)</strong> 和 <strong>刻字戒指 (Engraved Ring)</strong></li>
                         </ul>
                         <p className="mt-2 text-[#9ca3af] text-sm">工程量确实不小，这也是为什么我强烈推荐开启<strong>“高对比度显示”</strong>的原因，找起东西来会轻松很多。</p>
                       </div>

                       <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                         <h5 className="font-bold text-base mb-2 text-[#e5e7eb]">⚠️ 重要提示：关于培训手册</h5>
                         <p className="mb-2 text-[#9ca3af] text-sm">还有一点需要补充，我很确定<strong>培训手册 (Training Manuals)</strong> 有多个不同的刷新点。这意味着您找到它们的时间点可能与攻略一致，也可能比攻略早或晚。</p>
                         <p className="mb-2 text-[#9ca3af] text-sm">我知道它们通常会刷新在相同的章节里，但具体位置可能不同。</p>
                         <p className="mb-2 text-[#9ca3af] text-sm"><strong>关键点：</strong> 如果您按照攻略走到指定位置却没看到手册，请不要慌张，可以去查阅其他视频或指南，看看该章节其他的刷新点在哪里。</p>
                         <p className="m-0 text-[#9ca3af] text-sm">在我完成这篇指南后，我可能会把其他刷新点也补加上去，但在我们开始游玩时，请务必把这一点记在心里。</p>
                       </div>
                     </div>
                   </div>
                   
                  <h2 id="section-1" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                     一、基础操作与生存技巧
                  </h2>
                  <p>
                    本作核心是潜行与资源管理，建议从最低难度开始熟悉系统，再逐步加快通关节奏。
                  </p>
                  <figure className="my-8">
                    <img src={tlou2StealthShot} alt="潜行与侦察" className="w-full rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                    <figcaption className="text-center text-sm text-gray-400 mt-3 font-medium">
                      潜行与侦察是推进与收集的核心
                    </figcaption>
                  </figure>
                  
                  {/* REPLACED CONTENT START */}
                  <h3 id="section-1-1" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">1.1 战斗技巧</h3>
                  <p>
                    虽然战斗机制与前作相似，但《最后生还者 2》中的敌人 AI 更加智能，且艾莉的武器库也更加丰富。
                  </p>
                  
                  <div className="space-y-12 my-8">
                    {/* Item 1 */}
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-[#e5e7eb]">灵活机动</h4>
                       <p className="text-[#9ca3af] leading-relaxed">
                         艾莉体型小巧，可以钻入狭窄缝隙或趴在草丛中。利用这些优势快速脱离战斗或重新寻找有利位置。
                       </p>
                       <figure className="my-4">
                           <img src={tlou2ProneShot} alt="灵活机动" className="w-full rounded-lg shadow-sm" />
                           <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                             利用环境快速转移位置
                           </figcaption>
                        </figure>
                    </div>

                    {/* Item 2 */}
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-[#e5e7eb]">闪避是关键</h4>
                       <p className="text-[#9ca3af] leading-relaxed">
                         本作新增的闪避键（L1）至关重要。观察敌人的攻击前摇，适时闪避并发动反击。
                       </p>
                       <figure className="my-4">
                           <img src={tlou2DodgeShot} alt="闪避机制" className="w-full rounded-lg shadow-sm" />
                           <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                             精准闪避创造反击机会
                           </figcaption>
                        </figure>
                    </div>

                    {/* Item 3 */}
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-[#e5e7eb]">利用环境</h4>
                       <p className="text-[#9ca3af] leading-relaxed">
                         场景中充满了可投掷的砖块和酒瓶。先手眩晕敌人，再接上一击必杀，是节省弹药的好方法。
                       </p>
                       <figure className="my-4">
                           <img src={tlou2BrickShot} alt="环境互动" className="w-full rounded-lg shadow-sm" />
                           <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                             利用投掷物控制战局
                           </figcaption>
                        </figure>
                    </div>

                    {/* Item 4 */}
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-[#e5e7eb]">制作与资源</h4>
                       <p className="text-[#9ca3af] leading-relaxed">
                         不要等到战斗中才开始制作。时刻保持医疗包、燃烧瓶和消音器的库存充足。
                       </p>
                       <figure className="my-4">
                          <img src={tlou2CraftShot} alt="制作与资源" className="w-full rounded-lg shadow-sm" />
                          <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                            合理规划资源使用
                          </figcaption>
                       </figure>
                    </div>
                  </div>

                  <h3 id="section-1-2" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">1.2 探索技巧</h3>
                   <div className="space-y-12 my-8">
                     {/* Item 1 */}
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-[#e5e7eb]">打碎玻璃</h4>
                        <p className="text-[#9ca3af] leading-relaxed">
                          很多房间看似封闭，其实可以通过打破窗户或陈列柜进入。注意玻璃破碎的声音可能会吸引敌人。
                        </p>
                        <figure className="my-4">
                           <img src={tlou2BottleShot} alt="打碎玻璃" className="w-full rounded-lg shadow-sm" />
                           <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                             通过破碎玻璃寻找隐藏路径
                           </figcaption>
                        </figure>
                     </div>
 
                     {/* Item 2 */}
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-[#e5e7eb]">检查高处</h4>
                        <p className="text-[#9ca3af] leading-relaxed">
                          抬头看看。有些收集品藏在树上、灯柱上或高处的架子上。
                        </p>
                        <figure className="my-4">
                          <img src={tlou2LookUpShot} alt="检查高处" className="w-full rounded-lg shadow-sm" />
                          <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                             留意藏在架子上的搜集品
                           </figcaption>
                       </figure>
                     </div>
 
                     {/* Item 3 */}
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-[#e5e7eb]">辅助功能</h4>
                        <p className="text-[#9ca3af] leading-relaxed">
                          开启「强化聆听模式」和「高对比度显示」可以帮助你快速发现场景中的可互动道具体和收集品，极大提升探索效率。
                        </p>
                        <figure className="my-4">
                          <img src={tlou2HighContrastShot} alt="辅助功能" className="w-full rounded-lg shadow-sm" />
                          <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                            高对比度模式下的探索视图
                          </figcaption>
                       </figure>
                     </div>
                   </div>
                  {/* REPLACED CONTENT END */}

                  <h2 id="section-2" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                     <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     二、全章节流程攻略
                  </h2>
                  <p>
                    本作流程分为多个章节，涵盖了杰克逊、西雅图（三天）以及后续的圣塔巴巴拉。以下是主要章节的流程概览。
                  </p>
                  
                  <h3 id="section-2-1" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">杰克逊</h3>

                  {/* 详细攻略展开 */}
                  <div className="space-y-6 mt-8 mb-12">
                    {tlou2GuideData.find(c => c.id === 'jackson')?.sections.map((section, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                        <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                          {section.title}
                        </h4>
                        {renderStats(section.stats)}
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 ring-2 ring-red-50"></div>
                                  </div>
                                  <div>
                                    {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                    <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#444444] ml-1 py-1">{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 id="section-2-2" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">西雅图 第一天 - 艾莉</h3>
                  
                  <div className="space-y-6 mt-8 mb-12">
                    {tlou2GuideData.find(c => c.id === 'seattle-day-1-ellie')?.sections.map((section, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                        <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                          {section.title}
                        </h4>
                        {renderStats(section.stats)}
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 ring-2 ring-red-50"></div>
                                  </div>
                                  <div>
                                    {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                    <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#444444] ml-1 py-1">{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 id="section-2-3" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">西雅图 第二天 - 艾莉</h3>
                  
                  <div className="space-y-6 mt-8 mb-12">
                    {tlou2GuideData.find(c => c.id === 'seattle-day-2-ellie')?.sections.map((section, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                        <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                          {section.title}
                        </h4>
                        {renderStats(section.stats)}
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 ring-2 ring-red-50"></div>
                                  </div>
                                  <div>
                                    {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                    <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#444444] ml-1 py-1">{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 id="section-2-4" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">西雅图 第三天 - 艾莉</h3>
                  
                  <div className="space-y-6 mt-8 mb-12">
                    {tlou2GuideData.find(c => c.id === 'seattle-day-3-ellie')?.sections.map((section, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                        <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                          {section.title}
                        </h4>
                        {renderStats(section.stats)}
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 ring-2 ring-red-50"></div>
                                  </div>
                                  <div>
                                    {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                    <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#444444] ml-1 py-1">{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded border-l-4 border-gray-400 my-6">
                    <p className="text-sm text-[#9ca3af] m-0">
                      *后续章节将切换至另一位主角 艾比，体验不同的战斗风格与剧情视角。艾比 的近战能力更强，且拥有独特的武器和技能树。
                    </p>
                  </div>

                  <h3 id="section-2-5" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">公园 - 埃比</h3>
                  
                  <div className="space-y-6 mt-8 mb-12">
                    {tlou2GuideData.find(c => c.id === 'park-abby')?.sections.map((section, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                        <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                          {section.title}
                        </h4>
                        {renderStats(section.stats)}
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 ring-2 ring-red-50"></div>
                                  </div>
                                  <div>
                                    {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                    <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#444444] ml-1 py-1">{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 id="section-2-6" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">西雅图 第一天 - 埃比</h3>
                  
                  <div className="space-y-6 mt-8 mb-12">
                    {tlou2GuideData.find(c => c.id === 'seattle-day-1-abby')?.sections.map((section, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                        <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                          {section.title}
                        </h4>
                        {renderStats(section.stats)}
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 ring-2 ring-red-50"></div>
                                  </div>
                                  <div>
                                    {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                    <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#444444] ml-1 py-1">{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 id="section-2-7" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">西雅图 第二天 - 埃比</h3>
                  
                  <div className="space-y-6 mt-8 mb-12">
                    {tlou2GuideData.find(c => c.id === 'seattle-day-2-abby')?.sections.map((section, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                        <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                          {section.title}
                        </h4>
                        {renderStats(section.stats)}
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 ring-2 ring-red-50"></div>
                                  </div>
                                  <div>
                                    {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                    <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#444444] ml-1 py-1">{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 id="section-2-8" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">西雅图 第三天 - 埃比</h3>
                  
                  <div className="space-y-6 mt-8 mb-12">
                    {tlou2GuideData.find(c => c.id === 'seattle-day-3-abby')?.sections.map((section, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                        <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                          {section.title}
                        </h4>
                        {renderStats(section.stats)}
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 ring-2 ring-red-50"></div>
                                  </div>
                                  <div>
                                    {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                    <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#444444] ml-1 py-1">{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 id="section-2-9" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">圣塔芭芭拉</h3>
                  
                  <div className="space-y-6 mt-8 mb-12">
                    {tlou2GuideData.find(c => c.id === 'santa-barbara')?.sections.map((section, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                        <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                          {section.title}
                        </h4>
                        {renderStats(section.stats)}
                        
                        <div className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                              {item.type === 'collectible' ? (
                                <div className="flex gap-3">
                                  <div className="mt-1 min-w-[16px] flex justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#8b0000] mt-1.5 ring-2 ring-red-50"></div>
                                  </div>
                                  <div>
                                    {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                    <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#444444] ml-1 py-1">{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 id="section-3" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                     <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     三、保险箱与密码全解
                  </h2>
                  <p>
                    游戏中许多物资被锁在保险箱内，密码通常藏在附近的文档或环境细节中。以下是全保险箱密码一览。
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-[#0d0d0d] rounded-sm overflow-hidden border border-[#331111]/60 shadow-sm border border-[#444444]">
                      <thead className="bg-[#1a1a1a] text-[#9ca3af] text-sm uppercase">
                        <tr>
                          <th className="px-4 py-2 border-b font-bold">章节 / 位置</th>
                          <th className="px-4 py-2 border-b font-bold">密码</th>
                          <th className="px-4 py-2 border-b font-bold">提示来源</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        <tr><td className="px-4 py-2 font-bold" colSpan="3">杰克逊</td></tr>
                        <tr><td className="px-4 py-2">超市</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">07-20-13</td><td className="px-4 py-2">入职日期</td></tr>
                        
                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第一天 - 艾莉</td></tr>
                        <tr><td className="px-4 py-2">银行金库</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">60-23-06</td><td className="px-4 py-2">抢劫计划图纸</td></tr>
                        <tr><td className="px-4 py-2">西2门</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">04-51</td><td className="px-4 py-2">Checkmate 代码</td></tr>
                        <tr><td className="px-4 py-2">法院</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">86-07-22</td><td className="px-4 py-2">白板上的数字</td></tr>
                        <tr><td className="px-4 py-2">国会山</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">55-01-33</td><td className="px-4 py-2">垃圾箱旁的纸条</td></tr>
                        <tr><td className="px-4 py-2">隧道</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">15243</td><td className="px-4 py-2">苏打水罐上的数字</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第二天 - 艾莉</td></tr>
                        <tr><td className="px-4 py-2">希尔科列斯特</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">30-82-65</td><td className="px-4 py-2">厨房墙上的日历</td></tr>
                        <tr><td className="px-4 py-2">赛拉菲特</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">08-10-83</td><td className="px-4 py-2">结婚纪念日</td></tr>
                        <tr><td className="px-4 py-2">韦斯顿药店</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">38-55-23</td><td className="px-4 py-2">收银台下的纸条</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第三天 - 艾莉</td></tr>
                        <tr><td className="px-4 py-2">水没都市</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">70-12-64</td><td className="px-4 py-2">被困尸体旁的纸条</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第一天 - 艾比</td></tr>
                        <tr><td className="px-4 py-2">步行</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">17-38-07</td><td className="px-4 py-2">彩票号码</td></tr>
                        <tr><td className="px-4 py-2">敌对领土</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">68-96-89</td><td className="px-4 py-2">茉莉花面包店传单</td></tr>
                        <tr><td className="px-4 py-2">海岸</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">90-77-01</td><td className="px-4 py-2">船长室的纸条</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第二天 - 艾比</td></tr>
                        <tr><td className="px-4 py-2">捷径</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">30-23-04</td><td className="px-4 py-2">邻居的公寓号码</td></tr>
                        <tr><td className="px-4 py-2">下降</td><td className="px-4 py-2 font-mono font-bold text-[#a31515]">12-18-79</td><td className="px-4 py-2">Wi-Fi 密码</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 id="section-4" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                     <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     四、No Return 模式
                  </h2>

                  {/* Introduction */}
                  <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner mb-8">
                    <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                      模式简介
                    </h4>

                    <p className="text-[#9ca3af] leading-relaxed">
                      No Return 是一个 Roguelike 战斗模式，你将面对一系列随机遭遇战，最终挑战 Boss。每一轮完整的游戏包含五场遭遇战，随后是六个可能的 Boss 之一，通常需要 30-40 分钟完成。
                    </p>
                  </div>

                  {/* Run Types */}
                  <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner mb-8">
                      <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                      挑战类型
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                          <h5 className="font-bold text-[#e5e7eb] mb-1">标准挑战 (Standard Runs)</h5>
                          <p className="text-[#9ca3af] text-sm m-0">从一开始即可游玩。除了你的角色选择外，一切都是随机的。</p>
                      </div>
                      <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                          <h5 className="font-bold text-[#e5e7eb] mb-1">自定义挑战 (Custom Runs)</h5>
                          <p className="text-[#9ca3af] text-sm m-0">完成一次标准挑战后解锁。允许你自定义敌人类型、Boss 和模组。值得注意的是，自定义挑战不会禁用奖杯，因此非常适合达成特定目标或成就。</p>
                      </div>
                      <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                          <h5 className="font-bold text-[#e5e7eb] mb-1">每日挑战 (Daily Runs)</h5>
                          <p className="text-[#9ca3af] text-sm m-0">完成九次挑战后解锁。这些预设的挑战对所有玩家都是相同的，并且每天更换。无论输赢，每天只能尝试一次。</p>
                      </div>
                    </div>
                  </div>

                  {/* Trophy Difficulty & Strategy */}
                  <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner mb-8">
                    <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                      奖杯难度与策略
                    </h4>
                    <p className="text-[#9ca3af] leading-relaxed mb-4">
                      大多数奖杯都可以在“超轻 (Very Light)”难度下获得，除了“愿你的死亡迅速降临 (May Your Death Be Swift)”，该奖杯要求在“绝地 (Grounded)”难度下完成一次每日挑战。可能存在一些利用漏洞或速通玩家发现的策略来降低难度，建议关注 YouTube 上的相关攻略。
                    </p>
                    <p className="text-[#9ca3af] leading-relaxed">
                      本指南提供了一条推荐的 100% 完成路线，但你可以根据自己的喜好随意游玩。
                    </p>
                  </div>

                  {/* Overall Goal */}
                  <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner mb-8">
                    <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                      总体目标
                    </h4>
                    <p className="text-[#9ca3af] leading-relaxed mb-4">
                      主要目标是尽可能多地完成挑战，以解锁成就所需的新模式和角色。
                    </p>
                    <p className="text-[#9ca3af] leading-relaxed mb-4">
                      开始时，你只能使用艾莉和埃比，她们分别属于不同的阵营：
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm text-center hover:border-[#555555] transition-colors overflow-hidden group">
                          <div className="w-full aspect-video rounded-md overflow-hidden mb-3 shadow-sm">
                            <img src={tlou2TeamEllie} alt="Team Ellie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <h5 className="font-bold text-[#e5e7eb]">艾莉阵营 (Team Ellie)</h5>
                          <p className="text-[#9ca3af] text-sm">4 名可解锁角色</p>
                      </div>
                      <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm text-center hover:border-[#555555] transition-colors overflow-hidden group">
                          <div className="w-full aspect-video rounded-md overflow-hidden mb-3 shadow-sm">
                            <img src={tlou2TeamAbby} alt="Team Abby" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <h5 className="font-bold text-[#e5e7eb]">埃比阵营 (Team Abby)</h5>
                          <p className="text-[#9ca3af] text-sm">4 名可解锁角色</p>
                      </div>
                    </div>
                    
                    <h5 className="font-bold text-[#e5e7eb] mb-2">如何解锁角色：</h5>
                    <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm mb-6 hover:border-[#555555] transition-colors">
                        <p className="text-[#9ca3af] text-sm m-0 mb-2">解锁角色的方法很简单：<strong>使用该阵营中最新解锁的角色游玩遭遇战。</strong></p>
                        <ul className="list-disc pl-5 space-y-1 text-[#9ca3af] text-sm">
                            <li>例如，使用艾莉完成 2 场遭遇战可解锁狄娜。</li>
                            <li>接着，使用狄娜完成 3 场遭遇战可解锁杰西，以此类推。</li>
                            <li>最后的角色需要完成 4 场遭遇战才能解锁。</li>
                        </ul>
                    </div>

                    <h5 className="font-bold text-[#e5e7eb] mb-2">相关成就：</h5>
                    <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                        <p className="text-[#9ca3af] text-sm mb-3">这些解锁对于以下成就至关重要：</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-[#9ca3af]">
                                <span className="text-[#a31515] mt-0.5">🏆</span>
                                <span><strong>全员到齐 (Roll Call)：</strong> 使用每一位角色赢得一轮挑战。由于某些成就需要游玩所有角色，请务必在需要时轮换角色。</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-[#9ca3af]">
                                <span className="text-[#a31515] mt-0.5">🏆</span>
                                <span><strong>艾莉阵营 (Team Ellie)：</strong> 完成所有艾莉阵营的挑战路线。</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-[#9ca3af]">
                                <span className="text-[#a31515] mt-0.5">🏆</span>
                                <span><strong>埃比阵营 (Team Abby)：</strong> 完成所有埃比阵营的挑战路线。</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-[#9ca3af]">
                                <span className="text-[#a31515] mt-0.5">🏆</span>
                                <span><strong>生物课 (Biology Lesson)：</strong> 在 No Return 模式中，扮演比尔 (Bill) 使用泵动式霰弹枪击杀一只巨无霸 (Bloater)。<br/><span className="text-xs text-gray-400 italic">(注：原文提及 Bill，但在 TLoU2 No Return 模式中可能指代 Joel 或其他角色，请以游戏内实际描述为准)</span></span>
                            </li>
                        </ul>
                    </div>
                  </div>

                  {/* Bosses */}
                  <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner mb-8">
                    <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                      Boss 战
                    </h4>
                    <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                        <p className="text-[#9ca3af] text-sm leading-relaxed mb-2">
                          在每一轮挑战的最后，你将面对 6 个 Boss 中的一个。你必须击败它们才能解锁新的 Boss。
                        </p>
                        <p className="text-[#9ca3af] text-sm leading-relaxed m-0">
                          对于<strong>“摆脱重负 (Good Riddance)”</strong>奖杯（击败所有 Boss），这会在游玩过程中自然解锁，因此无需刻意去刷。
                        </p>
                    </div>
                  </div>

                  {/* Game Modes */}
                  <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner mb-8">
                    <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                      额外游戏模式
                    </h4>
                    <p className="text-[#9ca3af] leading-relaxed mb-4">
                      为了达成成就，你还需要解锁两个额外的模式：
                    </p>
                    <div className="space-y-3">
                      <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors flex items-center justify-between">
                          <div>
                            <h5 className="font-bold text-[#e5e7eb] mb-1">坚守模式 (Holdout)</h5>
                            <p className="text-[#9ca3af] text-sm m-0">完成 5 轮挑战后解锁</p>
                          </div>
                          <span className="text-xs bg-[#8b0000]/30 text-[#a31515] px-2 py-1 rounded border border-red-100 font-medium">成就相关</span>
                      </div>
                      <div className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors flex items-center justify-between">
                          <div>
                            <h5 className="font-bold text-[#e5e7eb] mb-1">占领模式 (Capture)</h5>
                            <p className="text-[#9ca3af] text-sm m-0">完成 7 轮挑战后解锁</p>
                          </div>
                          <span className="text-xs bg-[#8b0000]/30 text-[#a31515] px-2 py-1 rounded border border-red-100 font-medium">成就相关</span>
                      </div>
                    </div>
                    <p className="text-[#9ca3af] text-sm mt-4">
                      这些模式是完成某些成就的先决条件，解锁过程非常直接。
                    </p>
                  </div>

                  {/* Achievements Overview */}
                  <div className="bg-[#141414] p-5 rounded-sm border-l-4 border-l-[#7b0a0a] border-y border-r border-[#222222] shadow-inner mb-8">
                    <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                      成就总览
                    </h4>
                    <p className="text-[#9ca3af] leading-relaxed mb-4">
                      大多数成就都很简单，可以在“超轻 (Very Light)”难度下完成：
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                        {[
                          { name: "五花八门 (Mixed Bag)", desc: "在一次突击遭遇战中，使用 5 种不同的武器击杀敌人。" },
                          { name: "成为猎人 (Become The Hunter)", desc: "在一次被猎杀遭遇战中，击杀 12 名敌人。" },
                          { name: "背后有我 (Got Your Back)", desc: "在一轮坚守模式中获胜，且你的盟友生命值不低于 70%。" },
                          { name: "窃贼 (Burglar)", desc: "在不击杀任何敌人的情况下，打开占领遭遇战中的保险箱。" },
                          { name: "全员到齐 (Roll Call)", desc: "使用每一位角色赢得一轮挑战。" },
                          { name: "真正实力 (True Strength)", desc: "在一次遭遇战中获得 S 评价。" },
                          { name: "模组达人 (Modded)", desc: "配合每种模组各完成一次遭遇战。" },
                          { name: "冒险者 (Risk Taker)", desc: "在一轮挑战中完成 5 个开局目标 (Gambits)。" },
                          { name: "这让你感到怀念吗？ (This Make You All Nostalgic?)", desc: "完成第一部 (Part I) 的挑战路线。" },
                          { name: "萤火虫女王 (Queen Firefly)", desc: "在一次遭遇战中，使用玛琳 (Marlene) 的突击步枪击杀 15 名敌人。" },
                          { name: "生物课 (Biology Lesson)", desc: "扮演比尔 (Bill) 使用泵动式霰弹枪击杀一只巨无霸。" },
                          { name: "愿你长久生存 (May Your Survival Be Long)", desc: "赢得一次每日挑战。" }
                        ].map((ach, i) => (
                          <div key={i} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors flex gap-3">
                            <span className="text-[#a31515] mt-0.5">🏆</span>
                            <div>
                              <h5 className="font-bold text-[#e5e7eb] text-sm mb-1">{ach.name}</h5>
                              <p className="text-[#9ca3af] text-xs m-0 leading-relaxed">{ach.desc}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                    <p className="text-[#9ca3af] text-sm mt-6 leading-relaxed">
                      如果你只想快速解锁成就，“超轻”难度是最佳选择。然而，某些挑战——如获得 S 评价、保持盟友生命值以及不杀人开保险箱——可能仍然需要一定的策略或参考专门的攻略视频。
                    </p>
                  </div>

                  {/* May Your Death Be Swift */}
                  <div className="bg-[#fff1f1] p-6 rounded-lg border border-red-100 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#8b0000]/30 rounded-full -mr-12 -mt-12 opacity-50"></div>
                    <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2 relative z-10">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8b0000] text-white text-xs">!</span>
                      愿你的死亡迅速降临 (May Your Death Be Swift)
                    </h4>
                    <div className="relative z-10">
                        <p className="text-red-800 font-bold mb-3 italic">
                          在“绝地 (Grounded)”难度下赢得一次 No Return 每日挑战
                        </p>
                        <p className="text-red-700 text-sm leading-relaxed mb-4">
                          这是唯一一个强制要求在“绝地”难度下进行的成就，且每天只有一次尝试机会。
                        </p>
                        <div className="bg-[#111111]/60 p-4 rounded border border-red-200 shadow-sm">
                            <h5 className="font-bold text-red-900 text-sm mb-2">💡 专家建议：</h5>
                            <p className="text-red-800 text-sm m-0 leading-relaxed">
                              一个非常有效的策略是关注 YouTube 频道 <strong>AnthonyCaliber</strong> —— 他经常进行 No Return 每日挑战的直播或视频更新。在尝试之前先观看他的路线和打法，可以大大提高你的成功率。
                            </p>
                        </div>
                    </div>
                  </div>

                  <h2 id="section-trophy-list" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                     <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     五、查看全奖杯列表
                  </h2>
                  <div className="my-8 text-[#f1f1f1]">
                    <p className="mb-6 text-[#f1f1f1] font-medium">
                      需要逐章节图文路线或奖杯筛选列表，请前往专属奖杯页面查看。
                    </p>
                    <Link 
                     to="/the-last-of-us-part-2/trophies"
                     className="block w-full text-center py-4 bg-[#111111] border-2 border-gray-900 text-[#e5e7eb] font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all rounded-sm shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                   >
                     查看全奖杯列表
                  </Link>
                 </div>

                 <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                    <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                    更多精彩内容
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                   {recommendedGames.map((item, index) => (
                     <Link 
                       key={index} 
                       to={`/${item.slug || item.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-\u4e00-\u9fa5]+/g, '').replace(/\-\-+/g, '-')}`}
                       className="group block bg-[#0d0d0d] rounded-sm overflow-hidden border border-[#331111]/60 shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all border border-[#333333]"
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
                         <h3 className="font-bold text-[#e5e7eb] group-hover:text-[#a31515] transition-colors truncate">
                           {item.title}
                         </h3>
                         <p className="text-xs text-gray-500 mt-1">{item.author}</p>
                       </div>
                     </Link>
                   ))}
                 </div>
                  
                  <hr className="my-12 border-[#333333]" />
                 </>
               ) : game.slug === 'baldurs-gate-3' ? (
                 <>
                   {/* Baldur's Gate 3 Specific Content */}
                   <div className="mb-12">
                     <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                        {/* Cover Image & Purchase */}
                       <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                         <div className="bg-[#111111] rounded-xl shadow-sm border border-[#444444] p-5">
                           <h3 className="font-bold text-[#e5e7eb] mb-4 text-sm flex items-center gap-2">
                             <span>🛍️</span> 购买游戏
                           </h3>
                           <div className="flex flex-col gap-4">
                             <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#333333] bg-[#111111] mb-2">
                               <img src={game.imgUrl} alt="Cover" className="absolute inset-0 w-full h-full object-cover p-1" />
                             </div>
                             <div className="flex items-center justify-between">
                               <div className="flex flex-col">
                                 <span className="text-2xl font-bold text-[#a31515]">HK$ 468.00</span>
                               </div>
                             </div>
                             <a 
                               href="https://store.playstation.com/zh-hans-hk/concept/10007460" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="w-full py-3 bg-[#7b0a0a] text-[#f1f1f1] font-bold rounded-sm text-sm hover:bg-[#5a0000] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,0,0,0.5)] group uppercase tracking-widest tlou2-font-title text-xl"
                             >
                               <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                               <span>前往 PS Store 购买</span>
                             </a>
                           </div>
                         </div>
                       </div>
                        
                        {/* Basic Info Table */}
                        <div className="flex-1 flex flex-col">
                          <div className="bg-[#111111] rounded-xl shadow-sm border border-[#444444] p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between border-b border-[#333333] pb-4 mb-4">
                              <h3 className="text-xl font-bold text-[#e5e7eb] flex items-center gap-2">
                               <span className="text-2xl">📋</span> 游戏档案
                             </h3>
                            </div>
                            
                            <div className="flex-1 grid grid-cols-1 content-center gap-1">
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🏢</span> 开发商</span>
                                <span className="font-semibold text-[#e5e7eb]">Larian Studios</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📅</span> 发售日期</span>
                                <span className="font-semibold text-[#e5e7eb]">2023-09-06 (PS5)</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🎯</span> 游戏类型</span>
                                <span className="font-semibold text-[#e5e7eb]">CRPG / 策略 / 冒险</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">💰</span> 参考价格</span>
                                <span className="font-bold text-[#a31515] text-base">HK$ 468.00</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">⭐</span> 媒体评分</span>
                                <span className="font-bold text-green-600">96/100 (Metacritic)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>

                    <h2 id="section-intro" className="text-2xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#f1f1f1]">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                       📖 前言与导读
                    </h2>
                    <p className="lead text-[17px] text-[#d1d5db] leading-relaxed mb-8">
                      《博德之门 3》是一款基于《龙与地下城》(D&D) 5E 规则的 CRPG 巨作。游戏提供了极高的自由度，每一个选择都可能引发蝴蝶效应，改变故事的走向。
                      <br/><br/>
                      本攻略将为你提供基础的操作指南、战斗技巧以及生存建议，帮助你在费伦大陆的冒险中少走弯路。
                    </p>

                    <h2 id="section-basics" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       一、基础操作与生存技巧
                    </h2>
                    
                    <div className="space-y-8 mt-8 mb-12">
                       {bg3GuideData.find(c => c.id === 'basics')?.sections.map((section, idx) => (
                         <div 
                           key={idx} 
                           className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]"
                           style={{
                             backgroundImage: `url(${bg3Frame})`,
                             backgroundSize: '100% 100%',
                             backgroundRepeat: 'no-repeat',
                             border: 'none',
                             backgroundColor: 'transparent'
                           }}
                         >
                           <h4 id={`section-basics-${section.id}`} className="text-lg font-bold text-[#e5e7eb] mb-4 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                             {section.title}
                           </h4>
                           
                           <div className="space-y-3">
                             {section.content.map((item, itemIdx) => (
                               item.type === 'image' && (item.src === 'bg3CharacterCreation' || item.src === 'bg3PrologueEscape') ? (
                                  <div key={itemIdx} className="bg-transparent p-0">
                                    <figure className="my-2 w-full">
                                      <img 
                                        src={item.src === 'bg3CharacterCreation' ? bg3CharacterCreation : bg3PrologueEscape} 
                                        alt={item.src === 'bg3CharacterCreation' ? "Character Creation" : "Escape the Nautiloid"} 
                                        className="w-full rounded-lg shadow-sm" 
                                      />
                                    </figure>
                                  </div>
                                ) : (
                                 <div 
                                   key={itemIdx} 
                                   className="p-4 transition-colors relative flex items-center justify-center min-h-[80px]"
                                   style={{
                                     backgroundImage: `url(${bg3Button})`,
                                     backgroundSize: '100% 100%',
                                     backgroundRepeat: 'no-repeat',
                                     border: 'none',
                                     backgroundColor: 'transparent'
                                   }}
                                 >
                                   <p className="text-[#d1d5db] text-sm leading-relaxed m-0 font-medium relative z-10 px-2">
                                     {item.text}
                                   </p>
                                 </div>
                               )
                             ))}
                           </div>
                         </div>
                       ))}
                     </div>

                     <h2 id="section-prologue" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                        <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        二、序章：逃离螺壳舰
                     </h2>
                     <div className="space-y-8 mt-8 mb-12">
                       {bg3GuideData.find(c => c.id === 'prologue')?.sections.map((section, idx) => (
                         <div 
                           key={idx} 
                           className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]"
                           style={{
                             backgroundImage: `url(${bg3Frame})`,
                             backgroundSize: '100% 100%',
                             backgroundRepeat: 'no-repeat',
                             border: 'none',
                             backgroundColor: 'transparent'
                           }}
                         >
                           <h4 id={`section-prologue-${section.id}`} className="text-lg font-bold text-[#e5e7eb] mb-4 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                             {section.title}
                           </h4>
                           
                           <div className="space-y-3">
                             {section.content.map((item, itemIdx) => (
                               item.type === 'image' && (item.src === 'bg3CharacterCreation' || item.src === 'bg3PrologueEscape') ? (
                                 <div key={itemIdx} className="bg-transparent p-0">
                                   <figure className="my-2 w-full">
                                     <img 
                                       src={item.src === 'bg3CharacterCreation' ? bg3CharacterCreation : bg3PrologueEscape} 
                                       alt={item.src === 'bg3CharacterCreation' ? "Character Creation" : "Escape the Nautiloid"} 
                                       className="w-full rounded-lg shadow-sm" 
                                     />
                                   </figure>
                                 </div>
                               ) : (
                                 <div 
                                   key={itemIdx} 
                                   className="p-4 transition-colors relative flex items-center justify-center min-h-[80px]"
                                   style={{
                                     backgroundImage: `url(${bg3Button})`,
                                     backgroundSize: '100% 100%',
                                     backgroundRepeat: 'no-repeat',
                                     border: 'none',
                                     backgroundColor: 'transparent'
                                   }}
                                 >
                                   <p className="text-[#d1d5db] text-sm leading-relaxed m-0 font-medium relative z-10 px-2">
                                     {item.text}
                                   </p>
                                 </div>
                               )
                             ))}
                           </div>
                         </div>
                       ))}
                     </div>
 
                     <h2 id="section-trophy-list" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                        <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        三、查看全奖杯列表
                     </h2>
                    <div className="my-8 text-[#f1f1f1]">
                      <p className="mb-6 text-[#f1f1f1] font-medium">
                        本作包含 54 个奖杯，包括极其困难的“荣誉模式”挑战。点击下方按钮查看完整的中文奖杯列表与获取攻略。
                      </p>
                      <Link 
                       to="/baldurs-gate-3/trophies"
                       className="block w-full text-center py-4 bg-[#111111] border-2 border-gray-900 text-[#e5e7eb] font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all rounded-sm shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                     >
                       查看全奖杯列表
                    </Link>
                   </div>
                   
                   <hr className="my-12 border-[#333333]" />
                  </div>
                 </>
               ) : game.slug === 'horizon-forbidden-west' ? (
                 <>
                   {/* Horizon Forbidden West Specific Content */}
                   <div className="mb-12">
                     <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                        {/* Cover Image & Purchase */}
                       <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                         
                         {/* Purchase Card */}
                         <div className="bg-[#111111] rounded-xl shadow-sm border border-[#444444] p-5">
                           <h3 className="font-bold text-[#e5e7eb] mb-4 text-sm flex items-center gap-2">
                             <span>🛍️</span> 购买游戏
                           </h3>
                           
                           <div className="flex flex-col gap-4">
                             <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#333333] bg-[#111111] mb-2">
                               <img src={horizonCover} alt="Horizon Forbidden West Cover" className="absolute inset-0 w-full h-full object-cover p-1" />
                             </div>

                             <div className="flex items-center justify-between">
                               <div className="flex flex-col">
                                 <span className="text-xs text-gray-400 line-through">HK$ 568.00</span>
                                 <span className="text-2xl font-bold text-[#a31515]">HK$ 398.00</span>
                               </div>
                               <span className="px-2.5 py-1 bg-[#8b0000]/30 text-[#a31515] text-xs font-bold rounded">-30%</span>
                             </div>

                             <a 
                               href="https://www.playstation.com/zh-hans-hk/games/horizon-forbidden-west/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="w-full py-3 bg-[#7b0a0a] text-[#f1f1f1] font-bold rounded-sm text-sm hover:bg-[#5a0000] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,0,0,0.5)] group uppercase tracking-widest tlou2-font-title text-xl"
                             >
                               <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                               <span>前往 PS Store 购买</span>
                             </a>
                           </div>
                         </div>
                       </div>
                        
                        {/* Basic Info Table */}
                        <div className="flex-1 flex flex-col">
                          <div className="bg-[#111111] rounded-xl shadow-sm border border-[#444444] p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between border-b border-[#333333] pb-4 mb-4">
                              <h3 className="text-xl font-bold text-[#e5e7eb] flex items-center gap-2">
                               <span className="text-2xl">📋</span> 游戏档案
                             </h3>
                            </div>
                            
                            <div className="flex-1 grid grid-cols-1 content-center gap-1">
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🏢</span> 开发商</span>
                                <span className="font-semibold text-[#e5e7eb]">Guerrilla Games</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📦</span> 发行商</span>
                                <span className="font-semibold text-[#e5e7eb]">索尼互动娱乐 (SIE)</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📅</span> 发售日期</span>
                                <span className="font-semibold text-[#e5e7eb]">2022-02-18</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🎯</span> 游戏类型</span>
                                <span className="font-semibold text-[#e5e7eb]">动作角色扮演 / 开放世界</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🕹️</span> 对应平台</span>
                                <span className="font-semibold text-[#e5e7eb]">PS5 / PS4 / PC</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">💰</span> 参考价格</span>
                                <span className="font-bold text-[#a31515] text-base">HK$ 398.00</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">⭐</span> 媒体评分</span>
                                <span className="font-bold text-green-600">88/100 (Metacritic)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>

                    <h2 id="section-intro" className="text-2xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#f1f1f1]">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                       📖 游戏简介
                    </h2>
                    <p className="lead text-[17px] text-[#d1d5db] leading-relaxed mb-8">
                      《地平线 西之绝境》（Horizon Forbidden West）是Guerrilla Games开发的动作角色扮演游戏，为《地平线 零之曙光》的续作。故事延续前作，主角埃洛伊（Aloy）为了拯救面临枯萎病威胁的世界，前往危险的西部禁地，探索未知的机械生物与古老遗迹，揭开隐藏在末世背后的惊天秘密。
                    </p>

                    {/* New Sections: Features, Reference, Ratings, Screenshots */}
                    <div className="space-y-12 mb-12">
                      
                      {/* Core Features */}
                      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333333]">
                         <h3 className="text-xl font-bold text-[#e5e7eb] mb-6 flex items-center gap-2">
                           <span className="text-2xl">🌟</span> 核心特色
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="bg-[#111111] p-4 rounded-lg shadow-sm border border-[#444444]">
                             <div className="text-3xl mb-3">🏔️</div>
                             <h4 className="font-bold text-[#e5e7eb] mb-2">庞大的开放世界</h4>
                             <p className="text-sm text-[#9ca3af]">探索远未来的美国西部，包含森林、沉没城市和高耸山脉。利用新的跑酷动作和抓钩自由穿梭。</p>
                           </div>
                           <div className="bg-[#111111] p-4 rounded-lg shadow-sm border border-[#444444]">
                             <div className="text-3xl mb-3">🏹</div>
                             <h4 className="font-bold text-[#e5e7eb] mb-2">激烈的机器战斗</h4>
                             <p className="text-sm text-[#9ca3af]">利用各种武器、陷阱和策略对抗巨大的机器生物。针对不同机器的弱点制定战术。</p>
                           </div>
                           <div className="bg-[#111111] p-4 rounded-lg shadow-sm border border-[#444444]">
                             <div className="text-3xl mb-3">🏊‍♀️</div>
                             <h4 className="font-bold text-[#e5e7eb] mb-2">水下探索</h4>
                             <p className="text-sm text-[#9ca3af]">潜入水下，探索隐藏的秘密和遗迹。全新的潜水面具让你能无限制地在水下活动。</p>
                           </div>
                           <div className="bg-[#111111] p-4 rounded-lg shadow-sm border border-[#444444]">
                             <div className="text-3xl mb-3">🛠️</div>
                             <h4 className="font-bold text-[#e5e7eb] mb-2">深度RPG系统</h4>
                             <p className="text-sm text-[#9ca3af]">通过六大技能树（战士、陷阱、生存、渗透、猎人、机器大师）自定义埃洛伊的能力。</p>
                           </div>
                         </div>
                      </div>

                      {/* Reference Info */}
                      <div>
                        <h3 className="text-xl font-bold text-[#e5e7eb] mb-6 flex items-center gap-2">
                           <span className="text-2xl">ℹ️</span> 参考信息
                        </h3>
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] mb-6">
                           <p className="text-[#9ca3af] mb-3">
                             本攻略参考了 Steam 社区的优秀指南，原文链接如下：
                           </p>
                           <a 
                             href="https://steamcommunity.com/sharedfiles/filedetails/?id=3194697969" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-[#a31515] hover:text-[#ff3333] underline break-all"
                           >
                             Horizon Forbidden West [+DLC] - 100% Achievement Guide
                           </a>
                         </div>

                      </div>

                      {/* Media Ratings */}
                      <div>
                        <h3 className="text-xl font-bold text-[#e5e7eb] mb-6 flex items-center gap-2">
                           <span className="text-2xl">🏆</span> 媒体评分
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div className="bg-[#bf1313] text-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-90">IGN</span>
                             <span className="text-5xl font-black mb-4">9<span className="text-2xl opacity-70">/10</span></span>
                             <p className="text-xs leading-relaxed opacity-90">"令人惊叹的战斗与顶级生物设计的完美结合。"</p>
                           </div>
                           <div className="bg-[#ffcc00] text-[#f1f1f1] p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-70">GameSpot</span>
                             <span className="text-5xl font-black mb-4">8<span className="text-2xl opacity-50">/10</span></span>
                             <p className="text-xs leading-relaxed opacity-80">"虽然有些瑕疵，但西之绝境在很多方面都做得非常出色。"</p>
                           </div>
                           <div className="bg-[#333333] text-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-90">Metacritic</span>
                             <span className="text-5xl font-black mb-4 bg-green-600 px-3 py-1 rounded">88</span>
                             <p className="text-xs leading-relaxed opacity-90">"普遍好评 (Universal Acclaim)"</p>
                           </div>
                        </div>
                      </div>

                      {/* Official Screenshots */}
                      <div>
                        <h3 className="text-xl font-bold text-[#e5e7eb] mb-6 flex items-center gap-2">
                           <span className="text-2xl">📸</span> 官方游戏截图
                        </h3>
                        <div className="space-y-8 mb-10">
                           <figure>
                             <img 
                               src={horizonGameplayShot} 
                               alt="Horizon Forbidden West Gameplay" 
                               className="w-full rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]" 
                             />
                             <figcaption className="text-center text-sm text-gray-400 mt-2">
                               埃洛伊在西部的探索之旅 | 来源: PlayStation 官方
                             </figcaption>
                           </figure>
                        </div>
                      </div>

                    </div>

                    <div className="bg-[#140a0a] border border-[#331111] rounded-lg p-6 my-10 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#8b0000]"></div>
                      <h4 id="section-intro" className="font-bold mb-3 text-[#a31515] flex items-center gap-2 text-base">
                         <span>💡</span> 前言与导读
                      </h4>
                      <div className="space-y-6">
                        {horizonForbiddenWestGuideData.find(c => c.id === 'intro')?.sections?.map((section, idx) => (
                           <div key={idx}>
                             <h5 className="font-bold text-[#d1d5db] mb-2">{section.title}</h5>
                             <div className="space-y-3">
                               {section.content?.map((item, itemIdx) => (
                                 <div key={itemIdx} className="bg-[#111111] p-3 rounded border border-[#444444] text-sm text-[#9ca3af]">
                                   {item.name && <strong className="block mb-1 text-[#e5e7eb]">{item.name}</strong>}
                                   {item.text || item.description}
                                 </div>
                               ))}
                             </div>
                           </div>
                        ))}
                      </div>
                    </div>
                    
                    <h2 id="section-main-quests" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       一、主线任务流程
                    </h2>
                    
                    <div className="space-y-8 mb-12">
                      {horizonForbiddenWestGuideData.find(c => c.id === 'main-quests')?.sections?.map((section, idx) => (
                        <div key={idx} id={`section-main-quests-${['daunt', 'fw', 'sub', 'end'][idx] || idx}`} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                          <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                            {section.title}
                          </h4>
                          
                          <div className="space-y-3">
                            {section.content.map((item, itemIdx) => (
                              <div key={itemIdx} id={item.id} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors scroll-mt-[120px]">
                                <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>
                                <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                                {item.details && (
                                  <div className="mt-4 space-y-4 border-t pt-4 border-[#333333]">
                                    {item.details.map((detail, dIdx) => {
                                      if (detail.type === 'text') {
                                         // Check for Boss Tip
                                         if (detail.content.includes('Boss战提示') || detail.content.includes('Boss Battle Tip')) {
                                            return (
                                              <div key={dIdx} className="bg-[#8b0000]/30 border-l-4 border-red-500 p-4 my-4 rounded-r-lg shadow-sm">
                                                <h6 className="flex items-center gap-2 font-bold text-red-700 mb-2 text-sm uppercase tracking-wide">
                                                  <Skull size={18} className="stroke-2" />
                                                  BOSS 战提示
                                                </h6>
                                                <div className="text-red-900 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: detail.content.replace(/<strong>Boss战提示：<\/strong>/g, '')}}></div>
                                              </div>
                                            );
                                         }
                                         
                                         // Check for Action Prompt (contains <kbd>)
                                         if (detail.content.includes('<kbd>')) {
                                            return (
                                              <div key={dIdx} className="bg-slate-100 border-l-4 border-slate-400 p-4 my-3 rounded-r-lg flex items-start gap-3 shadow-sm group hover:bg-slate-200 transition-colors">
                                                 <div className="bg-[#111111] p-1.5 rounded-md shadow-sm border border-slate-200 shrink-0 mt-0.5 group-hover:border-slate-300 transition-colors">
                                                   <Gamepad2 size={18} className="text-slate-600" />
                                                 </div>
                                                 <div className="text-slate-700 text-sm leading-relaxed m-0 font-medium" dangerouslySetInnerHTML={{__html: detail.content}}></div>
                                              </div>
                                            );
                                         }

                                         return <p key={dIdx} className="text-[#9ca3af] text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: detail.content}}></p>;
                                      }
                                      if (detail.type === 'image') {
                                         return (
                                           <div key={dIdx} className="rounded-lg overflow-hidden my-3 shadow-sm border border-[#333333]">
                                             <img src={detail.src} alt={detail.alt || 'Guide Image'} className="w-full h-auto" />
                                             {detail.caption && <p className="text-xs text-gray-400 mt-1 text-center">{detail.caption}</p>}
                                           </div>
                                         );
                                      }
                                      if (detail.type === 'header') {
                                         const content = detail.content || '';
                                         // Check for Conversation/Dialogue
                                         if (content.includes('交谈') || content.includes('对话') || content.includes('Talk') || content.includes('Speak')) {
                                           return (
                                             <div key={dIdx} className="bg-indigo-50 border border-indigo-100 p-3 my-4 rounded-lg flex items-center gap-3 shadow-sm">
                                               <div className="bg-[#111111] p-1.5 rounded-full shadow-sm text-indigo-600 shrink-0">
                                                 <MessageCircle size={18} />
                                               </div>
                                               <h6 className="text-indigo-900 font-bold text-sm m-0">{content}</h6>
                                             </div>
                                           );
                                         }
                                         return <h6 key={dIdx} className="text-[#d1d5db] font-bold text-sm mt-4 mb-2 pb-1 border-b border-[#333333]">{content}</h6>;
                                      }
                                      if (detail.type === 'checklist') {
                                         return (
                                           <div key={dIdx} className="bg-emerald-50/80 border border-emerald-100 rounded-lg p-4 my-3">
                                             <ul className="space-y-3">
                                               {detail.items.map((li, liIdx) => (
                                                 <li key={liIdx} className="flex items-start gap-3 text-sm text-[#9ca3af]">
                                                   <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                                                   <span dangerouslySetInnerHTML={{__html: li}}></span>
                                                 </li>
                                               ))}
                                             </ul>
                                           </div>
                                         );
                                      }
                                      if (detail.type === 'list') {
                                         return (
                                           <ul key={dIdx} className="list-disc list-inside text-[#9ca3af] text-sm space-y-1 pl-2">
                                             {detail.items.map((li, liIdx) => <li key={liIdx} dangerouslySetInnerHTML={{__html: li}}></li>)}
                                           </ul>
                                         );
                                      }
                                      if (detail.type === 'box') {
                                        return (
                                            <div key={dIdx} className="bg-blue-50 p-3 rounded border border-blue-100 text-sm text-blue-800">
                                                {detail.title && <strong className="block mb-1">{detail.title}</strong>}
                                                <div dangerouslySetInnerHTML={{__html: detail.content}} />
                                            </div>
                                        )
                                      }
                                      if (detail.type === 'html') {
                                         return <div key={dIdx} dangerouslySetInnerHTML={{__html: detail.content}} className="text-sm leading-relaxed" />;
                                      }
                                      return null;
                                    })}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h2 id="section-side-quests" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       二、全支线任务列表
                    </h2>
                    
                    <div className="space-y-8 mb-12">
                      {horizonForbiddenWestGuideData.find(c => c.id === 'side-quests')?.sections?.map((section, idx) => (
                        <div key={idx} id={['section-side-quests-early', 'section-side-quests-mid', 'section-side-quests-late', 'section-side-quests-arena'][idx]} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                          <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                            {section.title}
                          </h4>
                          
                          <div className="space-y-3">
                            {section.content.map((item, itemIdx) => (
                              <div key={itemIdx} id={item.id} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors scroll-mt-[120px]">
                                {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.text || item.description}</p>
                                {item.details && (
                                  <div className="mt-4 space-y-4 border-t pt-4 border-[#333333]">
                                    {item.details.map((detail, dIdx) => {
                                      if (detail.type === 'text') {
                                         if (detail.content.includes('Boss战提示') || detail.content.includes('Boss Battle Tip')) {
                                            return (
                                              <div key={dIdx} className="bg-[#8b0000]/30 border-l-4 border-red-500 p-4 my-4 rounded-r-lg shadow-sm">
                                                <h6 className="flex items-center gap-2 font-bold text-red-700 mb-2 text-sm uppercase tracking-wide">
                                                  <Skull size={18} className="stroke-2" />
                                                  BOSS 战提示
                                                </h6>
                                                <div className="text-red-900 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: detail.content.replace(/<strong>Boss战提示：<\/strong>/g, '')}}></div>
                                              </div>
                                            );
                                         }
                                         
                                         if (detail.content.includes('<kbd>')) {
                                            return (
                                              <div key={dIdx} className="bg-slate-100 border-l-4 border-slate-400 p-4 my-3 rounded-r-lg flex items-start gap-3 shadow-sm group hover:bg-slate-200 transition-colors">
                                                 <div className="bg-[#111111] p-1.5 rounded-md shadow-sm border border-slate-200 shrink-0 mt-0.5 group-hover:border-slate-300 transition-colors">
                                                   <Gamepad2 size={18} className="text-slate-600" />
                                                 </div>
                                                 <div className="text-slate-700 text-sm leading-relaxed m-0 font-medium" dangerouslySetInnerHTML={{__html: detail.content}}></div>
                                              </div>
                                            );
                                         }

                                         return <p key={dIdx} className="text-[#9ca3af] text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: detail.content}}></p>;
                                      }
                                      if (detail.type === 'image') {
                                         return (
                                           <div key={dIdx} className="rounded-lg overflow-hidden my-3 shadow-sm border border-[#333333]">
                                             <img src={detail.src} alt={detail.alt || 'Guide Image'} className="w-full h-auto" />
                                             {detail.caption && <p className="text-xs text-gray-400 mt-1 text-center">{detail.caption}</p>}
                                           </div>
                                         );
                                      }
                                      if (detail.type === 'header') {
                                         const content = detail.content || '';
                                         if (content.includes('交谈') || content.includes('对话') || content.includes('Talk') || content.includes('Speak')) {
                                           return (
                                             <div key={dIdx} className="bg-indigo-50 border border-indigo-100 p-3 my-4 rounded-lg flex items-center gap-3 shadow-sm">
                                               <div className="bg-[#111111] p-1.5 rounded-full shadow-sm text-indigo-600 shrink-0">
                                                 <MessageCircle size={18} />
                                               </div>
                                               <h6 className="text-indigo-900 font-bold text-sm m-0">{content}</h6>
                                             </div>
                                           );
                                         }
                                         return <h6 key={dIdx} className="text-[#d1d5db] font-bold text-sm mt-4 mb-2 pb-1 border-b border-[#333333]">{content}</h6>;
                                      }
                                      if (detail.type === 'checklist') {
                                         return (
                                           <div key={dIdx} className="bg-emerald-50/80 border border-emerald-100 rounded-lg p-4 my-3">
                                             <ul className="space-y-3">
                                               {detail.items.map((li, liIdx) => (
                                                 <li key={liIdx} className="flex items-start gap-3 text-sm text-[#9ca3af]">
                                                   <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                                                   <span dangerouslySetInnerHTML={{__html: li}}></span>
                                                 </li>
                                               ))}
                                             </ul>
                                           </div>
                                         );
                                      }
                                      if (detail.type === 'list') {
                                         return (
                                           <ul key={dIdx} className="list-disc list-inside text-[#9ca3af] text-sm space-y-1 pl-2">
                                             {detail.items.map((li, liIdx) => <li key={liIdx} dangerouslySetInnerHTML={{__html: li}}></li>)}
                                           </ul>
                                         );
                                      }
                                      if (detail.type === 'box') {
                                        return (
                                            <div key={dIdx} className="bg-blue-50 p-3 rounded border border-blue-100 text-sm text-blue-800">
                                                {detail.title && <strong className="block mb-1">{detail.title}</strong>}
                                                <div dangerouslySetInnerHTML={{__html: detail.content}} />
                                            </div>
                                        )
                                      }
                                      if (detail.type === 'html') {
                                         return <div key={dIdx} dangerouslySetInnerHTML={{__html: detail.content}} className="text-sm leading-relaxed" />;
                                      }
                                      return null;
                                    })}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h2 id="section-collectibles" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       三、全收集品位置
                    </h2>
                    
                    <div className="flex flex-wrap gap-3 mt-2 mb-6 text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded">
                        <MapPin size={12} /> 长颈兽: 6
                      </span>
                      <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded">
                        <Hammer size={12} /> 大坩埚: 6
                      </span>
                      <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded">
                        <Landmark size={12} /> 遗迹: 9
                      </span>
                      <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded">
                        <Box size={12} /> 黑盒子: 12
                      </span>
                      <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded">
                        <Radio size={12} /> 无人机: 10
                      </span>
                      <span className="flex items-center gap-1 bg-[#222222] px-2 py-1 rounded">
                        <Eye size={12} /> 观景点: 9
                      </span>
                    </div>
                    
                    <div className="space-y-8 mb-12">
                      {['tallnecks', 'cauldrons', 'relic-ruins', 'black-boxes', 'survey-drones', 'vista-points'].map((typeId, typeIdx) => {
                         const sectionData = horizonForbiddenWestGuideData.find(c => c.id === typeId);
                         if (!sectionData) return null;
                         const idSuffix = ['tallnecks', 'cauldrons', 'relics', 'black-boxes', 'survey-drones', 'vista-points'][typeIdx];
                         return (
                           <div key={typeId} id={`section-collectibles-${idSuffix}`} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                             <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                               <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                               {sectionData.title}
                             </h4>
                             <div className="space-y-3">
                               {sectionData.sections.map((section, secIdx) => (
                                 <div key={secIdx} className="space-y-3">
                                   {section.title && <h5 className="font-bold text-[#d1d5db] border-l-4 border-[#8b0000] pl-2">{section.title}</h5>}
                                   {section.content.map((item, itemIdx) => {
                                      if (item.type === 'header') {
                                        const content = item.content || item.name || item.title || '';
                                        // Check for Conversation/Dialogue
                                        if (content.includes('交谈') || content.includes('对话') || content.includes('Talk') || content.includes('Speak')) {
                                          return (
                                            <div key={itemIdx} className="bg-indigo-50 border border-indigo-100 p-3 my-4 rounded-lg flex items-center gap-3 shadow-sm">
                                              <div className="bg-[#111111] p-1.5 rounded-full shadow-sm text-indigo-600 shrink-0">
                                                <MessageCircle size={18} />
                                              </div>
                                              <h6 className="text-indigo-900 font-bold text-sm m-0">{content}</h6>
                                            </div>
                                          );
                                        }
                                        return <h6 key={itemIdx} className="text-[#e5e7eb] font-bold text-sm mt-4 mb-1">{content}</h6>;
                                      }
                                      if (item.type === 'text') {
                                        const content = item.content || item.text;
                                        // Check for Boss Tip
                                        if (content.includes('Boss战提示') || content.includes('Boss Battle Tip')) {
                                           return (
                                             <div key={itemIdx} className="bg-[#8b0000]/30 border-l-4 border-red-500 p-4 my-4 rounded-r-lg shadow-sm">
                                               <h6 className="flex items-center gap-2 font-bold text-red-700 mb-2 text-sm uppercase tracking-wide">
                                                 <Skull size={18} className="stroke-2" />
                                                 BOSS 战提示
                                               </h6>
                                               <div className="text-red-900 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: content.replace(/<strong>Boss战提示：<\/strong>/g, '')}}></div>
                                             </div>
                                           );
                                        }
                                        
                                        // Check for Action Prompt (contains <kbd>)
                                        if (content.includes('<kbd>')) {
                                           return (
                                             <div key={itemIdx} className="bg-slate-100 border-l-4 border-slate-400 p-4 my-3 rounded-r-lg flex items-start gap-3 shadow-sm group hover:bg-slate-200 transition-colors">
                                                <div className="bg-[#111111] p-1.5 rounded-md shadow-sm border border-slate-200 shrink-0 mt-0.5 group-hover:border-slate-300 transition-colors">
                                                  <Gamepad2 size={18} className="text-slate-600" />
                                                </div>
                                                <div className="text-slate-700 text-sm leading-relaxed m-0 font-medium" dangerouslySetInnerHTML={{__html: content}}></div>
                                             </div>
                                           );
                                        }

                                        return <p key={itemIdx} className="text-[#9ca3af] text-sm leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: content }} />;
                                      }
                                      return (
                                     <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                                       {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                       <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.text || item.description}</p>
                                     </div>
                                   )})}
                                 </div>
                               ))}
                             </div>
                           </div>
                         );
                      })}
                    </div>

                    <h2 id="section-dlc" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       四、炙炎海岸 DLC
                    </h2>
                    <div className="space-y-8 mb-12">
                      {horizonForbiddenWestGuideData.find(c => c.id === 'dlc')?.sections?.map((section, idx) => (
                        <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                          <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                            {section.title}
                          </h4>
                          
                          <div className="space-y-3">
                            {section.content.map((item, itemIdx) => (
                              <div key={itemIdx} id={item.id} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors scroll-mt-[120px]">
                                {item.name && <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>}
                                <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.text || item.description}</p>
                                {item.details && (
                                  <div className="mt-4 space-y-4 border-t pt-4 border-[#333333]">
                                    {item.details.map((detail, dIdx) => {
                                      if (detail.type === 'text') {
                                         // Check for Boss Tip
                                         if (detail.content.includes('Boss战提示') || detail.content.includes('Boss Battle Tip')) {
                                            return (
                                              <div key={dIdx} className="bg-[#8b0000]/30 border-l-4 border-red-500 p-4 my-4 rounded-r-lg shadow-sm">
                                                <h6 className="flex items-center gap-2 font-bold text-red-700 mb-2 text-sm uppercase tracking-wide">
                                                  <Skull size={18} className="stroke-2" />
                                                  BOSS 战提示
                                                </h6>
                                                <div className="text-red-900 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: detail.content.replace(/<strong>Boss战提示：<\/strong>/g, '')}}></div>
                                              </div>
                                            );
                                         }
                                         
                                         // Check for Action Prompt (contains <kbd>)
                                         if (detail.content.includes('<kbd>')) {
                                            return (
                                              <div key={dIdx} className="bg-slate-100 border-l-4 border-slate-400 p-4 my-3 rounded-r-lg flex items-start gap-3 shadow-sm group hover:bg-slate-200 transition-colors">
                                                 <div className="bg-[#111111] p-1.5 rounded-md shadow-sm border border-slate-200 shrink-0 mt-0.5 group-hover:border-slate-300 transition-colors">
                                                   <Gamepad2 size={18} className="text-slate-600" />
                                                 </div>
                                                 <div className="text-slate-700 text-sm leading-relaxed m-0 font-medium" dangerouslySetInnerHTML={{__html: detail.content}}></div>
                                              </div>
                                            );
                                         }

                                         return <p key={dIdx} className="text-[#9ca3af] text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: detail.content}}></p>;
                                      }
                                      if (detail.type === 'image') {
                                         return (
                                           <div key={dIdx} className="rounded-lg overflow-hidden my-3 shadow-sm border border-[#333333]">
                                             <img src={detail.src} alt={detail.alt || 'Guide Image'} className="w-full h-auto" />
                                             {detail.caption && <p className="text-xs text-gray-400 mt-1 text-center">{detail.caption}</p>}
                                           </div>
                                         );
                                      }
                                      if (detail.type === 'header') {
                                         const content = detail.content || '';
                                         // Check for Conversation/Dialogue
                                         if (content.includes('交谈') || content.includes('对话') || content.includes('Talk') || content.includes('Speak')) {
                                           return (
                                             <div key={dIdx} className="bg-indigo-50 border border-indigo-100 p-3 my-4 rounded-lg flex items-center gap-3 shadow-sm">
                                               <div className="bg-[#111111] p-1.5 rounded-full shadow-sm text-indigo-600 shrink-0">
                                                 <MessageCircle size={18} />
                                               </div>
                                               <h6 className="text-indigo-900 font-bold text-sm m-0">{content}</h6>
                                             </div>
                                           );
                                         }
                                         return <h6 key={dIdx} className="text-[#d1d5db] font-bold text-sm mt-4 mb-2 pb-1 border-b border-[#333333]">{content}</h6>;
                                      }
                                      if (detail.type === 'checklist') {
                                         return (
                                           <div key={dIdx} className="bg-emerald-50/80 border border-emerald-100 rounded-lg p-4 my-3">
                                             <ul className="space-y-3">
                                               {detail.items.map((li, liIdx) => (
                                                 <li key={liIdx} className="flex items-start gap-3 text-sm text-[#9ca3af]">
                                                   <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                                                   <span dangerouslySetInnerHTML={{__html: li}}></span>
                                                 </li>
                                               ))}
                                             </ul>
                                           </div>
                                         );
                                      }
                                      if (detail.type === 'list') {
                                         return (
                                           <ul key={dIdx} className="list-disc list-inside text-[#9ca3af] text-sm space-y-1 pl-2">
                                             {detail.items.map((li, liIdx) => <li key={liIdx} dangerouslySetInnerHTML={{__html: li}}></li>)}
                                           </ul>
                                         );
                                      }
                                      if (detail.type === 'box') {
                                        return (
                                            <div key={dIdx} className="bg-blue-50 p-3 rounded border border-blue-100 text-sm text-blue-800">
                                                {detail.title && <strong className="block mb-1">{detail.title}</strong>}
                                                <div dangerouslySetInnerHTML={{__html: detail.content}} />
                                            </div>
                                        )
                                      }
                                      if (detail.type === 'html') {
                                         return <div key={dIdx} dangerouslySetInnerHTML={{__html: detail.content}} className="text-sm leading-relaxed" />;
                                      }
                                      return null;
                                    })}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h2 id="section-trophies" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       五、白金奖杯指南
                    </h2>
                    <div className="space-y-6 mt-8 mb-12">
                      {horizonForbiddenWestGuideData.find(c => c.id === 'trophies')?.sections?.map((section, idx) => (
                        <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#333333]">
                          <h4 className="text-lg font-bold text-[#e5e7eb] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8b0000]"></span>
                            {section.title}
                          </h4>
                          <div className="space-y-3">
                            {section.content.map((item, itemIdx) => (
                              <div key={itemIdx} className="bg-[#111111] p-4 rounded border border-[#444444] shadow-sm hover:border-[#555555] transition-colors">
                                 <h5 className="text-[#e5e7eb] font-bold text-sm mb-1">{item.name}</h5>
                                 <p className="text-[#9ca3af] text-sm leading-relaxed m-0">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                   <h2 id="section-trophy-list" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                      <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                      六、查看全奖杯列表
                   </h2>
                   <div className="my-8 text-[#f1f1f1]">
                     <p className="mb-6 text-[#f1f1f1] font-medium">
                       本作包含 59 个奖杯。点击下方按钮查看完整的中文奖杯列表与获取攻略。
                     </p>
                     <Link 
                      to="/horizon-forbidden-west/trophies"
                      className="block w-full text-center py-4 bg-[#111111] border-2 border-gray-900 text-[#e5e7eb] font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all rounded-sm shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                    >
                      查看全奖杯列表
                   </Link>
                  </div>
                   
                   <hr className="my-12 border-[#333333]" />
                  </div>
                 </>
               ) : game.slug === 'the-witcher-3' ? (
                 <>
                   {/* The Witcher 3 Specific Content */}
                   <div className="mb-12">
                     <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                        {/* Cover Image & Purchase */}
                       <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                         
                         {/* Purchase Card */}
                         <div className="bg-[#111111] rounded-xl shadow-sm border border-[#444444] p-5">
                           <h3 className="font-bold text-[#e5e7eb] mb-4 text-sm flex items-center gap-2">
                             <span>🛍️</span> 购买游戏
                           </h3>
                           
                           <div className="flex flex-col gap-4">
                             <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#333333] bg-[#111111] mb-2">
                               <img src={game.imgUrl} alt="The Witcher 3 Cover" className="absolute inset-0 w-full h-full object-cover p-1" />
                             </div>

                             <div className="flex items-center justify-between">
                               <div className="flex flex-col">
                                 <span className="text-2xl font-bold text-[#a31515]">HK$ 308.00</span>
                               </div>
                             </div>

                             <a 
                               href="https://store.playstation.com/zh-hant-hk/product/EP4497-PPSA05701_00-0000000000000004" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="w-full py-3 bg-[#7b0a0a] text-[#f1f1f1] font-bold rounded-sm text-sm hover:bg-[#5a0000] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,0,0,0.5)] group uppercase tracking-widest tlou2-font-title text-xl"
                             >
                               <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                               <span>前往 PS Store 购买</span>
                             </a>
                           </div>
                         </div>
                       </div>
                        
                        {/* Basic Info Table */}
                        <div className="flex-1 flex flex-col">
                          <div className="bg-[#111111] rounded-xl shadow-sm border border-[#444444] p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between border-b border-[#333333] pb-4 mb-4">
                              <h3 className="text-xl font-bold text-[#e5e7eb] flex items-center gap-2">
                               <span className="text-2xl">📋</span> 游戏档案
                             </h3>
                            </div>
                            
                            <div className="flex-1 grid grid-cols-1 content-center gap-1">
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🏢</span> 开发商</span>
                                <span className="font-semibold text-[#e5e7eb]">CD PROJEKT RED</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📦</span> 发行商</span>
                                <span className="font-semibold text-[#e5e7eb]">CD PROJEKT RED</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📅</span> 发售日期</span>
                                <span className="font-semibold text-[#e5e7eb]">2015-05-19 (PS5版 2022-12-14)</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🎯</span> 游戏类型</span>
                                <span className="font-semibold text-[#e5e7eb]">动作角色扮演 / 开放世界</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🕹️</span> 对应平台</span>
                                <span className="font-semibold text-[#e5e7eb]">PS5 / PS4 / PC / Xbox / Switch</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors border-b border-[#333333]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">💰</span> 参考价格</span>
                                <span className="font-bold text-[#a31515] text-base">HK$ 308.00</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">⭐</span> 媒体评分</span>
                                <span className="font-bold text-green-600">92/100 (Metacritic)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>

                    <h2 id="section-intro" className="text-2xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#f1f1f1]">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                       📖 游戏简介
                    </h2>
                    <p className="lead text-[17px] text-[#d1d5db] leading-relaxed mb-8">
                      《巫师 3：狂猎》（The Witcher 3: Wild Hunt）是一款由CD PROJEKT RED开发并发行的一款角色扮演游戏。玩家将扮演职业怪物杀手“白狼”杰洛特，在一个庞大且充满道德模糊选择的开放世界中，寻找被称为“预言之子”的养女希里。游戏以其深刻的叙事、复杂的角色和引人入胜的世界构建而闻名。
                    </p>

                    <div className="space-y-12 mb-12">
                      
                      {/* Core Features */}
                      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333333]">
                         <h3 className="text-xl font-bold text-[#e5e7eb] mb-6 flex items-center gap-2">
                           <span className="text-2xl">🌟</span> 核心特色
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="bg-[#111111] p-4 rounded-lg shadow-sm border border-[#444444]">
                             <div className="text-3xl mb-3">🗺️</div>
                             <h4 className="font-bold text-[#e5e7eb] mb-2">庞大的奇幻开放世界</h4>
                             <p className="text-sm text-[#9ca3af]">探索饱受战火蹂躏的威伦、繁华的自由之城诺维格瑞以及史凯利杰群岛的严寒地带。</p>
                           </div>
                           <div className="bg-[#111111] p-4 rounded-lg shadow-sm border border-[#444444]">
                             <div className="text-3xl mb-3">⚔️</div>
                             <h4 className="font-bold text-[#e5e7eb] mb-2">专业的怪物猎人</h4>
                             <p className="text-sm text-[#9ca3af]">利用各种升级的武器、变种药剂、战斗法印以及陷阱，猎杀各种奇异的怪物。</p>
                           </div>
                           <div className="bg-[#111111] p-4 rounded-lg shadow-sm border border-[#444444]">
                             <div className="text-3xl mb-3">⚖️</div>
                             <h4 className="font-bold text-[#e5e7eb] mb-2">道德模糊的选择</h4>
                             <p className="text-sm text-[#9ca3af]">每一个选择都有其后果。你的决定将影响故事的走向、角色的命运甚至整个世界的格局。</p>
                           </div>
                           <div className="bg-[#111111] p-4 rounded-lg shadow-sm border border-[#444444]">
                             <div className="text-3xl mb-3">🃏</div>
                             <h4 className="font-bold text-[#e5e7eb] mb-2">昆特牌</h4>
                             <p className="text-sm text-[#9ca3af]">内置了一款极具深度的卡牌游戏，收集卡牌、构建卡组，在酒馆中与全大陆的对手一决高下。</p>
                           </div>
                         </div>
                      </div>

                      {/* Media Ratings */}
                      <div>
                        <h3 className="text-xl font-bold text-[#e5e7eb] mb-6 flex items-center gap-2">
                           <span className="text-2xl">🏆</span> 媒体评分
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div className="bg-[#bf1313] text-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-90">IGN</span>
                             <span className="text-5xl font-black mb-4">9.3<span className="text-2xl opacity-70">/10</span></span>
                             <p className="text-xs leading-relaxed opacity-90">"《巫师3》规模宏大且细节丰富，标志着RPG游戏的一个新高度。"</p>
                           </div>
                           <div className="bg-[#ffcc00] text-[#f1f1f1] p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-70">GameSpot</span>
                             <span className="text-5xl font-black mb-4">10<span className="text-2xl opacity-50">/10</span></span>
                             <p className="text-xs leading-relaxed opacity-80">"在这个美丽的世界上，每一步探索都充满了意义。"</p>
                           </div>
                           <div className="bg-[#333333] text-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-90">Metacritic</span>
                             <span className="text-5xl font-black mb-4 bg-green-600 px-3 py-1 rounded">92</span>
                             <p className="text-xs leading-relaxed opacity-90">"普遍好评 (Universal Acclaim) - 世代最佳RPG之一"</p>
                           </div>
                        </div>
                      </div>

                      {/* Official Screenshots */}
                      <div>
                        <h3 className="text-xl font-bold text-[#e5e7eb] mb-6 flex items-center gap-2">
                           <span className="text-2xl">📸</span> 官方游戏截图
                        </h3>
                        <div className="space-y-8 mb-10">
                           <figure>
                             <img 
                               src={game.imgUrl} 
                               alt="The Witcher 3 Gameplay" 
                               className="w-full rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]" 
                             />
                             <figcaption className="text-center text-sm text-gray-400 mt-2">
                               杰洛特的猎魔之旅 | 来源: CD PROJEKT RED 官方
                             </figcaption>
                           </figure>
                        </div>
                      </div>
                    </div>

                    {/* Guide Content */}
                    <div className="bg-gradient-to-r from-stone-900 to-slate-800 rounded-xl p-8 my-12 relative overflow-hidden shadow-[0_0_20px_rgba(139,0,0,0.1)] border border-stone-700">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600"></div>
                      <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                         <Skull size={160} className="text-white" />
                      </div>
                      <div className="relative z-10">
                        <h4 id="section-intro" className="font-bold mb-4 text-red-500 flex items-center gap-3 text-lg tracking-wide uppercase">
                           <span className="bg-[#8b0000]/300/20 p-2 rounded-lg"><BookOpen size={20} className="text-red-500" /></span> 
                           攻略导读
                        </h4>
                        <p className="text-slate-300 text-[15px] m-0 leading-relaxed font-medium">
                          本攻略将引导你从白果园的初次狩猎，一直到与狂猎的最终决战。包含所有的主线任务、重要的支线任务抉择、战斗技巧，以及详细的昆特牌收集指南。
                        </p>
                      </div>
                    </div>

                     {witcher3GuideData.map((chapter) => (
                       <div key={chapter.id} className="mb-14 relative">
                         {/* Chapter Header */}
                         <div className="flex items-center gap-4 mb-8 group cursor-pointer">
                           <h2 id={`section-${chapter.id}`} className="text-2xl md:text-3xl font-bold text-[#e5e7eb] m-0 flex items-center gap-3">
                             <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity absolute -ml-8 text-xl">#</span>
                             {chapter.title}
                           </h2>
                           <div className="flex-1 h-[1px] bg-gradient-to-r from-red-600/50 to-transparent ml-4"></div>
                         </div>
                         
                         <div className="space-y-8 mt-6">
                           {chapter.sections.map((section, idx) => {
                             // Determine icon and color based on section id/title
                             let Icon = ChevronRight;
                             let colorClass = "text-slate-700";
                             let bgClass = "bg-slate-100";
                             
                             if (section.id.includes('combat') || section.id.includes('attack')) {
                               Icon = Skull; colorClass = "text-red-600"; bgClass = "bg-red-100";
                             } else if (section.id.includes('sign') || section.id.includes('magic')) {
                               Icon = Eye; colorClass = "text-purple-600"; bgClass = "bg-purple-100";
                             } else if (section.id.includes('alchemy') || section.id.includes('potion')) {
                               Icon = Box; colorClass = "text-emerald-600"; bgClass = "bg-emerald-100";
                             } else if (section.id.includes('gwent')) {
                               Icon = Landmark; colorClass = "text-amber-600"; bgClass = "bg-amber-100";
                             }

                             return (
                             <div key={idx} className="bg-[#111111] p-6 rounded-xl border border-[#444444] shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-shadow relative overflow-hidden group">
                               {/* Decorative accent */}
                               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-transparent group-hover:from-red-500 transition-colors"></div>
                               
                               <h4 id={`section-${chapter.id}-${section.id}`} className="text-lg font-bold text-[#e5e7eb] mb-5 flex items-center gap-3 scroll-mt-[100px]">
                                 <div className={`p-2 rounded-lg ${bgClass}`}>
                                   <Icon size={18} className={colorClass} />
                                 </div>
                                 {section.title}
                               </h4>
                               
                               <div className="space-y-3 pl-2 border-l-2 border-[#333333] ml-4">
                                 {section.content.map((item, itemIdx) => {
                                    // Highlight key terms in text
                                    const formattedText = item.text
                                      .replace(/杰洛特/g, '<span class="font-bold text-[#e5e7eb]">杰洛特</span>')
                                      .replace(/希里/g, '<span class="font-bold text-[#e5e7eb]">希里</span>')
                                      .replace(/叶奈法/g, '<span class="font-bold text-[#e5e7eb]">叶奈法</span>')
                                      .replace(/特莉丝/g, '<span class="font-bold text-[#e5e7eb]">特莉丝</span>')
                                      .replace(/阿尔德|亚克席|伊格尼|昆恩|亚登/g, '<span class="font-bold text-purple-600">$&</span>')
                                      .replace(/银剑|钢剑|十字弓/g, '<span class="font-bold text-slate-700">$&</span>');

                                    return (
                                     <div key={itemIdx} className="bg-[#1a1a1a]/50 p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                                       <p 
                                         className="text-[#9ca3af] text-[14.5px] leading-relaxed m-0"
                                         dangerouslySetInnerHTML={{ __html: formattedText }}
                                       />
                                     </div>
                                   )
                                 })}
                               </div>
                             </div>
                           )})}
                         </div>
                       </div>
                     ))}
                     
                     <h2 id="section-trophy-list" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#f1f1f1] border-b pb-4 flex items-center gap-2">
                        <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🏆 查看全奖杯列表 (Trophy List)
                     </h2>
                     <div className="my-8 text-[#f1f1f1]">
                       <p className="mb-6 text-[#f1f1f1] font-medium">
                         本作包含丰富的成就系统与收集挑战。点击下方按钮查看完整的中文奖杯列表与获取攻略。
                       </p>
                       <Link 
                        to="/the-witcher-3/trophies"
                        className="block w-full text-center py-4 bg-[#111111] border-2 border-gray-900 text-[#e5e7eb] font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all rounded-sm shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                      >
                        查看全奖杯列表
                     </Link>
                    </div>

                    <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       推荐阅读的其他攻略
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      {recommendedGames.map((item, index) => (
                        <Link 
                          key={index} 
                          to={`/${item.slug || item.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-\u4e00-\u9fa5]+/g, '').replace(/\-\-+/g, '-')}`}
                          className="group block bg-[#0d0d0d] rounded-sm overflow-hidden border border-[#331111]/60 shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all border border-[#333333]"
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
                            <h3 className="font-bold text-[#e5e7eb] group-hover:text-[#a31515] transition-colors truncate">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">{item.author}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                     <hr className="my-12 border-[#333333]" />
                  </div>
                 </>
               ) : (
                 // Generic content for other games
                 <>
                   <p className="lead text-[18px] text-[#f1f1f1] mb-10 font-serif italic pl-2 border-l-4 border-[#444444]">
                     {game.description}
                   </p>
               
               <h2 id="section-intro" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                  前言
               </h2>
               <p>
                 欢迎来到《{game.title}》的完整图文攻略。作为 {game.author} 的最新力作，本作在 {game.volume} 平台上展现了惊人的次世代画面与游戏性。无论你是初次接触该系列的萌新，还是想要挑战白金奖杯的老手，本攻略都将为你提供详尽的指引。
               </p>
               <p>
                 本篇攻略旨在以最清晰、直观的方式，带领大家领略这款游戏的魅力。我们会深入解析每一个关卡的设计思路，剖析敌人的行动模式，并给出最优的通关策略。
               </p>
               
               <div className="bg-[#140a0a] border border-[#331111] rounded-lg p-6 my-10 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#8b0000]"></div>
                 <h4 className="font-bold mb-3 text-[#a31515] flex items-center gap-2 text-base">
                    <span>💡</span> 攻略导读
                 </h4>
                 <p className="text-[15px] text-[#f1f1f1] m-0 leading-relaxed">
                   本攻略将按照游戏章节顺序进行编写，包含所有收集品位置、BOSS战打法以及奖杯解锁条件。请善用右侧目录进行快速跳转。如果你在游戏中遇到了卡关的情况，不妨先查看相关的章节攻略。
                 </p>
               </div>

               <h2 id="section-2" className="text-2xl mt-12 mb-6 group cursor-pointer">
                  <span className="text-[#a31515] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  一、游戏基础与操作指南
               </h2>
               <p>
                 在开始冒险之前，我们需要熟悉游戏的基本操作与系统机制。本作引入了全新的动态天气系统与光线追踪技术，不仅提升了视觉效果，也对战斗产生了一定影响。
               </p>
               
               <h3 id="section-2-1" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">1.1 战斗系统详解</h3>
               <p>
                 战斗是本作的核心体验之一。你需要掌握闪避、格挡与反击的时机。特别是针对精英敌人，盲目的攻击只会让你陷入险境。观察敌人的出招前摇，利用环境优势，才是取胜的关键。
               </p>

               <figure className="my-10">
                 <img src={game.imgUrl} alt="Gameplay" className="w-full rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                 <figcaption className="text-center text-sm text-gray-400 mt-3 font-medium flex items-center justify-center gap-2">
                    <span className="w-8 h-[1px] bg-gray-200"></span>
                    游戏实机战斗画面演示
                    <span className="w-8 h-[1px] bg-gray-200"></span>
                 </figcaption>
               </figure>

               <h2 id="section-2" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                  二、全流程图文攻略
               </h2>
               <h3 id="section-3-1" className="text-xl mt-8 mb-4 font-bold text-[#d1d5db]">第一章：{game.title} 的序幕</h3>
               <p>
                 故事开始于一个风雨交加的夜晚。主角醒来时，发现自己身处陌生的环境。这里我们需要跟随教程指引，完成基本的移动与交互操作。注意路边的发光物体，那通常是补给品或收集要素。
               </p>
               <p>
                 随着剧情的推进，我们将遇到第一个挑战...（此处为攻略正文占位符）
               </p>
               
               <h2 id="section-3" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                  三、全收集品位置一览
               </h2>
               <p>
                 本作共有 150 个收集品，分布在各个章节中。遗漏了也不要紧，通关后可以通过“章节选择”功能重新收集。
               </p>
               <ul>
                 <li><strong>文档：</strong>记录了世界观背景的重要道具。</li>
                 <li><strong>录音带：</strong>前人的语音记录，往往隐藏着关键线索。</li>
                 <li><strong>隐藏宝箱：</strong>包含强力装备与升级材料。</li>
               </ul>
               
               <h2 id="section-4" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a31515] tlou2-font-title border-b border-[#331111]/80 pb-2">
                  四、白金奖杯获取指南
               </h2>
               
               {game.slug === 'the-last-of-us-part-2' ? (
                 <div className="my-8 text-[#f1f1f1]">
                   <p className="mb-6 text-[#f1f1f1] font-medium">
                     本作包含大量奖杯挑战，为了方便查阅，我们将详细的奖杯获取指南整理在单独的页面中。点击下方按钮查看完整的白金攻略、绝地难度挑战以及 No Return 模式奖杯。
                   </p>
                   <Link 
                    to="/the-last-of-us-part-2/trophies"
                    className="block w-full text-center py-4 bg-[#111111] border-2 border-gray-900 text-[#e5e7eb] font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all rounded-sm shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  >
                    查看全奖杯列表
                  </Link>
                 </div>
               ) : (
                 <p>
                   想要获得白金奖杯，你需要完成所有主线任务、收集所有要素，并达成特定的战斗挑战。部分奖杯具有一定难度，建议在二周目继承存档后尝试。
                 </p>
               )}

               <hr className="my-12 border-[#333333]" />
               </>
             )}
             </div>
          </article>
          
          {/* Sidebar */}
          <aside className="w-[300px] hidden lg:block shrink-0 space-y-6 sticky top-[100px] h-fit self-start tlou2-font-title relative z-10">
             {/* Author Card */}
             <div className="bg-[#111111] rounded-lg p-6 shadow-[0_0_50px_rgba(139,0,0,0.15)] border border-[#333333] hover:shadow-[0_0_50px_rgba(139,0,0,0.15)]-hover transition-all group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-[#333333] group-hover:ring-2 group-hover:ring-[#a31515]/20 transition-all">
                   <img src={game.slug === 'the-last-of-us-part-2' ? naughtyDogLogo : game.imgUrl} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-base text-[#e5e7eb] truncate">{game.author}</h3>
                   <p className="text-xs text-gray-400 font-medium truncate">知名游戏开发商</p>
                 </div>
               </div>
               <a 
                 href={game.slug === 'horizon-forbidden-west' ? "https://www.guerrilla-games.com/" : "https://www.naughtydog.com/"}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-2 bg-[#111111] border border-[#8b0000] text-[#a31515] font-bold rounded-full text-sm hover:bg-[#8b0000] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
               >
                  <span>打开官网</span>
               </a>
             </div>

             {/* TOC */}
              <div className="bg-[#111111] rounded-lg p-6 shadow-[0_0_50px_rgba(139,0,0,0.15)] border border-[#333333] sticky top-4 flex flex-col max-h-[calc(100vh-2rem)]">
                <h3 className="font-bold text-[#e5e7eb] mb-4 pl-1 text-[15px] flex items-center justify-between shrink-0">
                  目录
                  <span className="text-xs font-bold text-white bg-[#8b0000] px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                </h3>
                
                <nav className="space-y-1 relative pr-2 flex-1 overflow-y-auto custom-scrollbar">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#222222]"></div>
                 
                 {tocTree.map((parent) => {
                   const isParentActive = activeSection === parent.id;
                   const hasChildren = parent.children && parent.children.length > 0;
                   const isChildActive = parent.children ? parent.children.some(child => child.id === activeSection) : false;
                   
                   // Determine if expanded: manual toggle > active state > collapsed default
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
                               ? 'text-[#a31515] font-bold bg-[#8b0000]/30/80 border-[#8b0000] shadow-sm' 
                               : 'text-gray-500 hover:text-[#a31515] hover:bg-[#1a1a1a] border-transparent hover:border-[#444444] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors z-20 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-[#a31515] hover:bg-red-100' 
                                 : 'text-gray-400 hover:text-[#9ca3af] hover:bg-[#222222]'}`}
                           >
                             {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                           </button>
                         )}
                       </div>

                       {/* Children */}
                       {hasChildren && isExpanded && (
                         <div className="space-y-1 mt-1 transition-all duration-300 ease-in-out">
                           {parent.children.map(child => {
                             const isCurrentChildActive = activeSection === child.id;
                             const isGrandChildActive = child.children && child.children.some(gc => gc.id === activeSection);
                             const isChildExpanded = isCurrentChildActive || isGrandChildActive || expandedSections[child.id];

                             return (
                               <div key={child.id}>
                                   <div className="flex items-center group relative">
                                       <a 
                                         href={`#${child.id}`}
                                         onClick={(e) => scrollToSection(e, child.id)}
                                         className={`
                                           flex-1 block py-1.5 pr-8 transition-all relative z-10 rounded-r border-l-[3px] pl-9 text-[13px]
                                           ${(isCurrentChildActive || isGrandChildActive)
                                             ? 'text-[#a31515] font-bold bg-[#a31515]/10 border-[#8b0000]' 
                                             : 'text-gray-500 hover:text-[#a31515] hover:bg-[#1a1a1a] border-transparent hover:border-[#444444]'}
                                         `}
                                       >
                                         {child.title}
                                       </a>
                                       {child.children && child.children.length > 0 && (
                                            <button
                                                onClick={(e) => toggleSection(e, child.id, !isChildExpanded)}
                                                className={`absolute right-1 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-gray-200 text-gray-400 z-20 transition-transform ${isChildExpanded ? 'rotate-180' : ''}`}
                                            >
                                                <ChevronDown size={14} />
                                            </button>
                                       )}
                                   </div>

                                   {/* Grandchildren (Level 3) */}
                                   {child.children && child.children.length > 0 && isChildExpanded && (
                                       <div className="space-y-1 mt-1 ml-4 border-l border-[#333333]">
                                           {child.children.map(grandChild => {
                                               const isGrandChildCurrent = activeSection === grandChild.id;
                                               return (
                                                   <a
                                                       key={grandChild.id}
                                                       href={`#${grandChild.id}`}
                                                       onClick={(e) => scrollToSection(e, grandChild.id)}
                                                       className={`
                                                           block py-1 pr-2 pl-4 text-[12px] transition-all rounded-r border-l-[3px]
                                                           ${isGrandChildCurrent
                                                               ? 'text-[#a31515] font-bold border-[#8b0000] bg-[#8b0000]/30/30'
                                                               : 'text-gray-500 hover:text-[#a31515] border-transparent hover:border-[#444444]'}
                                                       `}
                                                   >
                                                       {grandChild.title}
                                                   </a>
                                               )
                                           })}
                                       </div>
                                   )}
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
          </aside>
       </main>
       
       {/* Mobile Bottom Floating Bar */}
       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-[#111111]/95 backdrop-blur-md border border-[#444444] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full z-40 lg:hidden px-6 py-3 flex items-center justify-between">
         <div className="flex items-center gap-8">
           <button 
             onClick={() => setIsShareOpen(true)}
             className="flex flex-col items-center justify-center text-[#9ca3af] hover:text-[#f1f1f1] transition-colors"
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
                 className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-[#9ca3af] hover:text-[#f1f1f1]'}`}
               />
               <span className="absolute -top-2 -right-3 text-[10px] font-bold text-yellow-500 leading-none">
                 {likes > 99 ? '99+' : likes}
               </span>
             </div>
           </button>
         </div>
         <button 
           onClick={() => setIsTocOpen(true)}
           className="flex items-center justify-center text-[#9ca3af] hover:text-[#f1f1f1] transition-colors"
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
           <div className="relative bg-[#111111] w-full max-h-[80vh] rounded-t-2xl shadow-xl flex flex-col animate-slide-up">
             {/* Handle */}
             <div className="flex justify-center pt-3 pb-2 cursor-pointer" onClick={() => setIsTocOpen(false)}>
               <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
             </div>
             
             {/* Header */}
             <div className="px-6 pb-4 border-b border-[#333333] flex items-center justify-between">
               <h3 className="font-bold text-[#e5e7eb] text-lg flex items-center gap-2">
                 <BookOpen size={18} className="text-[#a31515]" />
                 目录
               </h3>
               <div className="flex items-center gap-3">
                 <span className="text-xs font-bold text-white bg-[#8b0000] px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                 <button onClick={() => setIsTocOpen(false)} className="text-gray-400 hover:text-[#9ca3af]">
                   <X size={20} />
                 </button>
               </div>
             </div>
             
             {/* TOC Content */}
             <div className="overflow-y-auto p-4 pb-12 custom-scrollbar">
               <nav className="space-y-1 relative pr-2 flex-1">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#222222]"></div>
                 
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
                               ? 'text-[#a31515] font-bold bg-[#8b0000]/30/80 border-[#8b0000] shadow-sm' 
                               : 'text-gray-500 hover:text-[#a31515] hover:bg-[#1a1a1a] border-transparent hover:border-[#444444] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md transition-colors z-20 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-[#a31515] hover:bg-red-100' 
                                 : 'text-gray-400 hover:text-[#9ca3af] hover:bg-[#222222]'}`}
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
                             const isChildExpanded = isCurrentChildActive || isGrandChildActive || expandedSections[child.id];

                             return (
                               <div key={child.id}>
                                   <div className="flex items-center group relative">
                                       <a 
                                         href={`#${child.id}`}
                                         onClick={(e) => {
                                           scrollToSection(e, child.id);
                                           setIsTocOpen(false);
                                         }}
                                         className={`
                                           flex-1 block py-2 pr-8 transition-all relative z-10 rounded-r border-l-[3px] pl-9 text-[14px]
                                           ${(isCurrentChildActive || isGrandChildActive)
                                             ? 'text-[#a31515] font-bold bg-[#a31515]/10 border-[#8b0000]' 
                                             : 'text-gray-500 hover:text-[#a31515] hover:bg-[#1a1a1a] border-transparent hover:border-[#444444]'}
                                         `}
                                       >
                                         {child.title}
                                       </a>
                                       {child.children && child.children.length > 0 && (
                                            <button
                                                onClick={(e) => toggleSection(e, child.id, !isChildExpanded)}
                                                className={`absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-gray-200 text-gray-400 z-20 transition-transform ${isChildExpanded ? 'rotate-180' : ''}`}
                                            >
                                                <ChevronDown size={20} />
                                            </button>
                                       )}
                                   </div>

                                   {/* Grandchildren (Level 3) */}
                                   {child.children && child.children.length > 0 && isChildExpanded && (
                                       <div className="space-y-1 mt-1 ml-4 border-l border-[#333333]">
                                           {child.children.map(grandChild => {
                                               const isGrandChildCurrent = activeSection === grandChild.id;
                                               return (
                                                   <a
                                                       key={grandChild.id}
                                                       href={`#${grandChild.id}`}
                                                       onClick={(e) => {
                                                         scrollToSection(e, grandChild.id);
                                                         setIsTocOpen(false);
                                                       }}
                                                       className={`
                                                           block py-2 pr-2 pl-6 text-[13px] transition-all rounded-r border-l-[3px]
                                                           ${isGrandChildCurrent
                                                               ? 'text-[#a31515] font-bold border-[#8b0000] bg-[#8b0000]/30/30'
                                                               : 'text-gray-500 hover:text-[#a31515] border-transparent hover:border-[#444444]'}
                                                       `}
                                                   >
                                                       {grandChild.title}
                                                   </a>
                                               )
                                           })}
                                       </div>
                                   )}
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

       {/* Mobile Share Bottom Sheet */}
       {isShareOpen && (
         <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/50 transition-opacity"
             onClick={() => setIsShareOpen(false)}
           />
           
           {/* Sheet */}
           <div className="relative bg-[#1a1a1a] w-full rounded-t-2xl shadow-xl flex flex-col animate-slide-up pb-safe">
             {/* Header Card */}
             <div className="bg-[#111111] rounded-t-2xl p-4 shadow-sm relative">
               <button 
                 onClick={() => setIsShareOpen(false)} 
                 className="absolute top-4 right-4 text-gray-400 hover:text-[#9ca3af]"
               >
                 <X size={24} />
               </button>
               
               <div className="flex items-center gap-3 pr-10">
                 <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#333333] shadow-sm shrink-0">
                   <img src={game?.imgUrl || tlou2Ps5Cover} alt={`${game?.title || 'Game'} Cover`} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-[#e5e7eb] text-[15px] truncate">
                     {game?.title || '最后生还者 第二部'} 终极攻略指南
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
                   <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#07C160]" fill="currentColor">
                       <path d="M8.2,16.5C3.7,16.5,0,13.2,0,9.1C0,5.1,4.1,1.8,8.8,1.8c4.6,0,8.4,3.3,8.4,7.4C17.2,13.2,13.2,16.5,8.2,16.5z M5.4,6.1 c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1C6.4,6.5,5.9,6.1,5.4,6.1z M11.5,6.1c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1 c0.6,0,1-0.5,1-1C12.6,6.5,12.1,6.1,11.5,6.1z"/>
                       <path d="M24,13.6c0-3.3-3.2-5.9-7.1-5.9c-0.3,0-0.6,0-0.9,0.1c0.8,0.8,1.2,1.8,1.2,2.8c0,3.7-3.4,6.6-7.5,6.6 c-0.5,0-0.9-0.1-1.4-0.2c1.1,2.5,4.3,4.2,7.7,4.2C20.4,21.1,24,17.7,24,13.6z M15.1,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C15.9,11.7,15.6,11.3,15.1,11.3z M19.9,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C20.7,11.7,20.3,11.3,19.9,11.3z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-[#9ca3af]">微信</span>
                 </button>
                 <button 
                   onClick={handleWechatShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <div className="relative w-8 h-8 rounded-full border-[3px] border-[#07C160] border-t-[#FCBE22] border-r-[#FCBE22] rotate-45 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#FA5151]"></div>
                     </div>
                   </div>
                   <span className="text-[11px] text-[#9ca3af]">朋友圈</span>
                 </button>
                 <button 
                   onClick={handleWeiboShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#E6162D]" fill="currentColor">
                       <path d="M21.2,10.6c-0.7-1.4-2.1-2.4-3.6-2.6c-0.3-0.1-0.6-0.1-1-0.1c0.2-0.5,0.3-1,0.3-1.6c0-1.8-1.5-3.3-3.3-3.3 c-1.2,0-2.3,0.7-2.9,1.7c-0.3-0.3-0.8-0.5-1.2-0.5c-1,0-1.9,0.8-1.9,1.9c0,0.3,0.1,0.6,0.2,0.9C7.4,6.7,7,6.6,6.5,6.6 c-2.4,0-4.3,2-4.3,4.4c0,1,0.3,1.9,0.9,2.6c-0.5,0.7-0.7,1.5-0.7,2.4c0,2.4,2,4.4,4.4,4.4c1.1,0,2.1-0.4,2.9-1 c0.8,0.7,1.9,1.2,3.1,1.2c2.7,0,4.9-2.2,4.9-4.9c0-0.4-0.1-0.8-0.2-1.2C20.1,14,21.8,12.5,21.2,10.6z M17.6,15.7 c-0.6,1.4-1.9,2.4-3.4,2.7c-1.3,0.3-2.6,0-3.6-0.6c-0.4-0.2-0.8-0.5-1.1-0.8c-0.4,0.4-1,0.6-1.6,0.6c-1.4,0-2.6-1.1-2.6-2.6 c0-0.7,0.3-1.4,0.8-1.8c0.2-0.2,0.5-0.4,0.8-0.5C5.8,11.9,5,10.5,5,8.9c0-1.8,1.5-3.3,3.3-3.3c1,0,1.8,0.4,2.5,1.1 c0.3-0.5,0.8-0.8,1.4-0.8c0.9,0,1.6,0.7,1.6,1.6c0,0.2-0.1,0.4-0.2,0.6C14.7,7.8,15.6,8.8,15.6,10c0,0.5-0.1,0.9-0.3,1.3 c1.5-0.1,2.8,0.8,3.3,2.1C19.1,14.3,18.5,15.2,17.6,15.7z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-[#9ca3af]">微博</span>
                 </button>
                 <div className="hidden sm:block"></div> {/* Spacer for alignment if needed, or 4th item */}
                 
                 {/* Row 2 */}
                 <button 
                   onClick={handleSaveImage}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#d1d5db]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                   </div>
                   <span className="text-[11px] text-[#9ca3af]">保存图片</span>
                 </button>
                 <button 
                   onClick={handleCopyLink}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#d1d5db] relative">
                     {copySuccess ? (
                       <span className="text-green-500 font-bold text-sm">已复制</span>
                     ) : (
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                     )}
                   </div>
                   <span className="text-[11px] text-[#9ca3af]">复制链接</span>
                 </button>
                 <button 
                   onClick={handleSystemShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#d1d5db]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                   </div>
                   <span className="text-[11px] text-[#9ca3af]">系统分享</span>
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
