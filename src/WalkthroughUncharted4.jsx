import { useParams, Link } from 'react-router-dom';
import { booksData, categoryOptions } from './data';
import { bg3GuideData, bg3TocItems } from './data/bg3-guide';
import { horizonForbiddenWestGuideData, horizonForbiddenWestTocItems } from './data/horizon-forbidden-west-guide';
import { witcher3GuideData, witcher3TocItems } from './data/witcher3-guide';
import { useState, useEffect, useMemo } from 'react';
import { Search, Heart, Share2, Bookmark, ChevronDown, ChevronRight, BookOpen, X, ShoppingCart, ExternalLink, ScrollText, Disc, Hammer, Lock, ShieldAlert, MapPin, Landmark, Box, Radio, Eye, CheckCircle2, Gamepad2, Skull, MessageCircle } from 'lucide-react';
import Footer from './components/Footer';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import horizonCover from '../picture/page1-game-walkthrough/forbidden-west/horizon-forbidden-west-ps5-launch-box-front-en-hk-08dec21.webp';
import horizonGameplayShot from '../picture/page1-game-walkthrough/forbidden-west/xizhijuejing2.jpeg';
import guerrillaLogo from '../picture/page1-game-walkthrough/forbidden-west/logo-guerrilla-full.svg';
import logo from '../picture/logo.svg';
import bg3CharacterCreation from '../picture/page1-game-walkthrough/bd3/Bg_000.jpg';
import bg3PrologueEscape from '../picture/page1-game-walkthrough/bd3/bg2.jpg';
import bg3Frame from '../picture/page1-game-walkthrough/bd3/bd3-frame.png';
import bg3Button from '../picture/page1-game-walkthrough/bd3/bg3-Main button.png';
import './App.css';

// Default TOC for TLOU2 (Moved from constant to component logic later, but keeping structure here for now)
const uncharted4TocItems = [
  { id: 'section-gameplay', title: '游戏玩法', level: 1 },
  { id: 'section-controls', title: '操作控制', level: 2 },
  { id: 'section-movement', title: '移动与导航', level: 2 },
  { id: 'section-climbing', title: '攀爬', level: 2 },
  { id: 'section-jumping', title: '跳跃', level: 2 },
  { id: 'section-swimming', title: '游泳', level: 2 },
  { id: 'section-grappling', title: '抓钩', level: 2 },
  { id: 'section-story', title: '前情提要', level: 1 },
  { id: 'section-drakes-fortune', title: '神秘海域：德雷克船长的宝藏', level: 2 },
  { id: 'section-among-thieves', title: '神秘海域2：纵横四海', level: 2 },
  { id: 'section-drakes-deception', title: '神秘海域3：德雷克的欺骗', level: 2 },
  { id: 'section-video-walkthrough', title: '视频流程攻略', level: 1 },
  { id: 'section-walkthrough', title: '流程攻略', level: 1 },
  { id: 'section-prologue', title: '序章', level: 2 },
  { id: 'section-lure-of-adventure', title: '第一章：冒险的诱惑', level: 2 },
  { id: 'section-infernal-place', title: '第二章：地狱之地', level: 2 },
  { id: 'section-malaysia-job', title: '第三章：马来西亚的工作', level: 2 },
  { id: 'section-normal-life', title: '第四章：正常生活', level: 2 },
  { id: 'section-hector-alcazar', title: '第五章：海克特·阿尔卡扎', level: 2 },
  { id: 'section-once-a-thief', title: '第六章：一日为贼...', level: 2 },
  { id: 'section-lights-out', title: '第七章：熄灯', level: 2 },
  { id: 'section-grave-of-henry-avery', title: '第八章：亨利·艾弗里的坟墓', level: 2 },
];

export default function WalkthroughUncharted4() {
  const { slug: paramSlug } = useParams();
  const slug = paramSlug || 'uncharted-4';
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
    const savedLikes = localStorage.getItem(`uncharted4-likes-${slug}`);
    const hasLiked = localStorage.getItem(`uncharted4-has-liked-${slug}`);
    
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
    
    localStorage.setItem(`uncharted4-likes-${slug}`, newLikes.toString());
    localStorage.setItem(`uncharted4-has-liked-${slug}`, (!isLiked).toString());
  };

  // 生成正式上线后的链接，而不是本地 localhost 链接
  const getShareUrl = () => {
    const baseUrl = window.location.origin.includes('localhost') || window.location.origin.includes('109.0.0.1')
      ? 'https://gamestation.cc' 
      : window.location.origin;
    return `${baseUrl}/${slug}`;
  };

  const handleCopyLink = () => {
    const url = getShareUrl();
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    });
  };

  const handleWechatShare = () => {
    window.location.href = 'weixin://';
    setIsShareOpen(false);
  };

  const handleWeiboShare = () => {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(`${game?.title || '神秘海域4：盗贼末路'} 终极攻略指南 ${url}`);
    window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${title}`, '_blank');
    setIsShareOpen(false);
  };

  const handleSystemShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${game?.title || '神秘海域4：盗贼末路'} 终极攻略指南`,
          text: `来看看这篇超详细的《${game?.title || '神秘海域4：盗贼末路'}》攻略指南！`,
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
    if (game.slug === 'uncharted-4') return uncharted4TocItems;
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
        const gameSlug = g.slug || g.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-\u4e00-\u9fa5]+/g, '').replace(/--+/g, '-');
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
        return { id: item.id, offset: element.getBoundingClientRect().top - 125 };
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
        {stats.artifacts && <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded"><ScrollText size={12} /> 文物: {stats.artifacts}</span>}
        {stats.tradingCards && <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded"><Disc size={12} /> 卡牌: {stats.tradingCards}</span>}
        {stats.coins && <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded"><Disc size={12} /> 硬币: {stats.coins}</span>}
        {stats.journalEntries && <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded"><BookOpen size={12} /> 日志: {stats.journalEntries}</span>}
        {stats.workbenches && <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded"><Hammer size={12} /> 工作台: {stats.workbenches}</span>}
        {stats.safes && <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded"><Lock size={12} /> 保险箱: {stats.safes}</span>}
        {stats.trainingManuals && <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded"><BookOpen size={12} /> 手册: {stats.trainingManuals}</span>}
        {stats.weapons && <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded"><ShieldAlert size={12} /> 武器: {stats.weapons}</span>}
        {stats.collectibles && <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded"><Disc size={12} /> 收集品: {stats.collectibles}</span>}
      </div>
    );
  };

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sspai-bg text-sspai-gray">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-sspai-text">404</h1>
          <p>未找到该游戏的攻略信息</p>
          <a href="/" className="mt-4 inline-block text-[#8B4513] hover:underline font-medium">返回首页</a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#DED5C4] font-serif text-[#3E2723] selection:bg-[#8B4513] selection:text-[#F9F6F0]"
      style={{ backgroundImage: "url(\'https://www.transparenttextures.com/patterns/aged-paper.png\')" }}
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
                    className={`transition-transform duration-250 ${isCategoryOpen ? 'rotate-180' : ''}`}
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
       <main className="pt-[100px] pb-25 max-w-[1400px] mx-auto px-4 md:px-6 flex gap-10 lg:gap-14">
          
          

          {/* Article Column */}
          <article className="flex-1 min-w-0 bg-[#0a0a0a] rounded-sm border border-[#331111]/60 shadow-[0_0_50px_rgba(139,0,0,0.2)] p-8 md:p-12 md:pb-16 transition-shadow text-[#f1f1f1] relative z-10">
             {/* Banner */}
             <div className="w-full aspect-[2/1] rounded-sm overflow-hidden mb-8 shadow-inner bg-[#EBE3D5] relative group border border-[#331111]/80">
               <div className="uncharted4-blood-splatter"></div>
               <img 
                 src={game.slug === 'uncharted-4' ? game.imgUrl : game.imgUrl} 
                 alt={game.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
 
             </div>
             
             {/* Title */}
             <h1 className="text-4xl md:text-[50px] font-bold mb-6 leading-[1.2] text-[#3E2723] tracking-widest uncharted4-font-title drop-shadow-lg">
               {game.title} 完整图文攻略
               
             </h1>
             
             {/* Meta */}
             <div className="flex items-center justify-between mb-10 pb-8 border-b border-[#C8B598]">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C8B598] shadow-sm cursor-pointer hover:ring-2 hover:ring-[#a31515]/25 transition-all">
                   <img src={game.slug === 'uncharted-4' ? game.imgUrl : game.slug === 'horizon-forbidden-west' ? guerrillaLogo : game.imgUrl} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-[15px] text-[#f1f1f1] hover:text-[#8B4513] cursor-pointer transition-colors">{game.author}</span>
                     <span className="px-1.5 py-[1px] bg-[#EBE3D5] text-gray-500 text-[10px] font-bold rounded uppercase tracking-wider">官方</span>
                   </div>
                   <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-3 font-medium">
                    <span>{game.date || '2526年02月26日'}</span>
                    <span>阅读 15分钟</span>
                  </div>
                 </div>
               </div>
               
             </div>
             
             {/* Content Body */}
             <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#f1f1f1] prose-headings:tracking-tight prose-p:text-[#f1f1f1] prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-[#8B4513] prose-a:no-underline prose-a:border-b prose-a:border-[#8B4513]/30 hover:prose-a:border-[#8B4513] hover:prose-a:bg-[#a31515]/10 prose-a:transition-all prose-img:rounded-lg prose-img:shadow-sm prose-blockquote:border-l-4 prose-blockquote:border-[#8B4513] prose-blockquote:bg-[#1a1a1a] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-[#f1f1f1] prose-li:text-[#f1f1f1] prose-strong:text-[#f1f1f1] prose-strong:font-bold">
               
               {game.slug === 'uncharted-4' ? (
                 <>
                   {/* Uncharted 4 Specific Content */}
                   <div className="mb-12">
                     
                     
                        <h2 id="section-gameplay" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2 flex items-center gap-3">
                        <Gamepad2 size={28} className="text-[#8B4513]" />
                        游戏玩法
                     </h2>
                     
                     
                       <h3 id="section-controls" className="text-xl mb-4 font-bold text-[#3E2723] flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]"></span> 操作控制
                       </h3>
                       <p className="text-[#795548] text-[15px] leading-relaxed mb-6">
                         《神秘海域4》的控制方式与其他第三人称射击游戏相似。如果您玩过之前的《神秘海域》游戏，那么这些操作对您来说会很自然；但如果您需要稍微复习一下，可以在这里找到控制说明，不过游戏在开始时也会提供一个简短的内置教程。
                       </p>
                       
                       <div className="overflow-x-auto rounded-lg border border-[#C8B598]">
                         <table className="w-full text-left border-collapse text-sm">
                           <thead>
                             <tr className="bg-[#3E2723] text-[#F9F6F0]">
                               <th className="p-3 border-b border-[#C8B598] font-medium">控制键</th>
                               <th className="p-3 border-b border-[#C8B598] font-medium">导航控制</th>
                               <th className="p-3 border-b border-[#C8B598] font-medium">战斗控制</th>
                             </tr>
                           </thead>
                           <tbody className="text-[#4A3018] bg-white">
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">左摇杆</td><td className="p-3 border-b border-[#EBE3D5]">角色移动</td><td className="p-3 border-b border-[#EBE3D5]">角色移动</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">右摇杆</td><td className="p-3 border-b border-[#EBE3D5]">视角移动</td><td className="p-3 border-b border-[#EBE3D5]">视角移动</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50 text-green-600">△</td><td className="p-3 border-b border-[#EBE3D5]">互动、拾取</td><td className="p-3 border-b border-[#EBE3D5]">重新装弹、挣脱抓取</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50 text-blue-600">X</td><td className="p-3 border-b border-[#EBE3D5]">跳跃、攀爬</td><td className="p-3 border-b border-[#EBE3D5]">换肩瞄准</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50 text-red-600">O</td><td className="p-3 border-b border-[#EBE3D5]">悬挂下落、翻滚、潜水</td><td className="p-3 border-b border-[#EBE3D5]">进入/退出掩体、闪避</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50 text-pink-500">□</td><td className="p-3 border-b border-[#EBE3D5] text-gray-400">-</td><td className="p-3 border-b border-[#EBE3D5]">近战攻击</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">↑</td><td className="p-3 border-b border-[#EBE3D5]">提示</td><td className="p-3 border-b border-[#EBE3D5] text-gray-400">-</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">←/→</td><td className="p-3 border-b border-[#EBE3D5] text-gray-400">-</td><td className="p-3 border-b border-[#EBE3D5]">切换武器</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">↓</td><td className="p-3 border-b border-[#EBE3D5]">寻找盟友/载具</td><td className="p-3 border-b border-[#EBE3D5] text-gray-400">-</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">L1</td><td className="p-3 border-b border-[#EBE3D5]">绳索</td><td className="p-3 border-b border-[#EBE3D5] text-gray-400">-</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">R1</td><td className="p-3 border-b border-[#EBE3D5] text-gray-400">-</td><td className="p-3 border-b border-[#EBE3D5]">投掷手榴弹（按住以形成弧线）</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">L2</td><td className="p-3 border-b border-[#EBE3D5]">刹车</td><td className="p-3 border-b border-[#EBE3D5]">瞄准武器</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">R2</td><td className="p-3 border-b border-[#EBE3D5]">加速</td><td className="p-3 border-b border-[#EBE3D5]">开火</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">L3</td><td className="p-3 border-b border-[#EBE3D5] text-gray-400">-</td><td className="p-3 border-b border-[#EBE3D5]">标记敌人</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">R3</td><td className="p-3 border-b border-[#EBE3D5]">重置视角</td><td className="p-3 border-b border-[#EBE3D5]">缩放（使用瞄准镜时）</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">Options键</td><td className="p-3 border-b border-[#EBE3D5]">打开菜单</td><td className="p-3 border-b border-[#EBE3D5] text-gray-400">-</td></tr>
                             <tr className="hover:bg-[#F9F6F0] transition-colors"><td className="p-3 border-b border-[#EBE3D5] font-mono font-bold bg-[#F9F6F0]/50">触摸板</td><td className="p-3 border-b border-[#EBE3D5]">打开日志</td><td className="p-3 border-b border-[#EBE3D5] text-gray-400">-</td></tr>
                           </tbody>
                         </table>
                       </div>
                     </div>

                     {/* Mechanics Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                       <div className="bg-[#EBE3D5] p-6 rounded-xl shadow-sm border border-[#C8B598] hover:shadow-md transition-shadow">
                         <h3 id="section-movement" className="text-lg mb-3 font-bold text-[#4A3018] flex items-center gap-2">
                           <span className="text-xl">🏃</span> 移动与导航
                         </h3>
                         <p className="text-[#795548] text-sm leading-relaxed m-0">
                           经过了三款游戏，很明显内森几乎能克服他遇到的任何障碍。他最新的冒险与之前并无二致，他将发现自己正在探索广阔的悬崖和丛林。在《神秘海域4》中穿越险恶的地形时，您会发现自己冒着风险去到达看似不可能的地方，这非常有德雷克的风格！
                         </p>
                       </div>

                       <div className="bg-[#EBE3D5] p-6 rounded-xl shadow-sm border border-[#C8B598] hover:shadow-md transition-shadow">
                         <h3 id="section-climbing" className="text-lg mb-3 font-bold text-[#4A3018] flex items-center gap-2">
                           <span className="text-xl">🧗</span> 攀爬
                         </h3>
                         <p className="text-[#795548] text-sm leading-relaxed mb-3">
                           内森喜欢攀爬，大多数齐膝高的物体内森会自动爬上去，但任何更高、更复杂的物体都需要手动操作。可攀爬的部分通常以其边缘颜色比周围环境更亮为标志。按 X 键让内森抓住他想要攀爬的物体，然后使用左摇杆进行导航。
                         </p>
                         <p className="text-[#795548] text-sm leading-relaxed m-0 bg-white/50 p-3 rounded border border-[#C8B598]/50">
                           <strong>提示：</strong>在游戏后期，您将获得一枚岩钉（piton），按 □ 键击打墙壁并放置岩钉，允许内森攀爬缺乏坚固边缘的多孔墙壁。
                         </p>
                       </div>

                       <div className="bg-[#EBE3D5] p-6 rounded-xl shadow-sm border border-[#C8B598] hover:shadow-md transition-shadow">
                         <h3 id="section-jumping" className="text-lg mb-3 font-bold text-[#4A3018] flex items-center gap-2">
                           <span className="text-xl">🦘</span> 跳跃
                         </h3>
                         <p className="text-[#795548] text-sm leading-relaxed m-0">
                           核心游戏玩法也与攀爬和使用抓钩相辅相成。无论您的需求是什么，无论是越过一张桌子到另一张桌子，还是在绳索上摆荡，您在某个时候都可能需要跳跃。按 X 键将执行跳跃，同时用左摇杆指示您想要跳跃的方向。
                         </p>
                       </div>

                       <div className="bg-[#EBE3D5] p-6 rounded-xl shadow-sm border border-[#C8B598] hover:shadow-md transition-shadow">
                         <h3 id="section-swimming" className="text-lg mb-3 font-bold text-[#4A3018] flex items-center gap-2">
                           <span className="text-xl">🏊</span> 游泳
                         </h3>
                         <p className="text-[#795548] text-sm leading-relaxed m-0">
                           使用左摇杆在内森无法涉水的区域中游动，按 O 键潜入水下。在水下时，您可以按 O 键潜得更深，或者按 X 键向上游以浮出水面。只是要确保在屏幕开始变暗时上来换气。
                         </p>
                       </div>

                       <div className="md:col-span-2 bg-[#EBE3D5] p-6 rounded-xl shadow-sm border border-[#C8B598] hover:shadow-md transition-shadow">
                         <h3 id="section-grappling" className="text-lg mb-3 font-bold text-[#4A3018] flex items-center gap-2">
                           <span className="text-xl">🪝</span> 抓钩
                         </h3>
                         <div className="grid md:grid-cols-2 gap-6">
                           <p className="text-[#795548] text-sm leading-relaxed m-0">
                             这件单一的物品开启了一种全新的穿越地形和探索区域的方式，甚至可以用来拉动物体。可以被抓取的位置可以从远处识别出来：它们被绳索缠绕和/或标有抓钩图标。在很多情况下，您能够站在坚固的地面上进入按 L1 键连接挂钩的范围内，但在某些情况下，您必须进行一次“信仰之跃”，然后按 L1 键。
                           </p>
                           <p className="text-[#795548] text-sm leading-relaxed m-0">
                             在抓钩上摆荡类似于在横梁上摆荡，例外的是您可以通过向后推左摇杆来转移重心以获得更多的动力。在某些罕见情况下，内森会抓取一个靠墙的位置，需要内森在墙上奔跑，使用左摇杆在悬崖墙壁上来回奔跑。您还可以使用抓钩勾住位于无法到达的高处的活动板条箱。
                           </p>
                         </div>
                       </div>
                     </div>

                     <h2 id="section-story" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2 flex items-center gap-3">
                        <ScrollText size={28} className="text-[#8B4513]" />
                        前情提要
                     </h2>
                     
                     <div className="relative border-l-2 border-[#8B4513] ml-4 pl-8 space-y-10 mb-12">
                       {/* Story 1 */}
                       <div className="relative">
                         <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#8B4513] ring-4 ring-[#DED5C4]"></div>
                         <h3 id="section-drakes-fortune" className="text-xl mb-3 font-bold text-[#3E2723]">神秘海域：德雷克船长宝藏</h3>
                         <div className="bg-[#F9F6F0] p-6 rounded-lg border border-[#C8B598] shadow-sm text-[#795548] text-[15px] leading-relaxed space-y-3">
                           <p>在巴拿马的一艘小船上，记者艾莲娜·费舍尔（Elena Fisher）和寻宝猎人内森·德雷克（Nathan Drake）打捞起了著名探险家弗朗西斯·德雷克爵士的棺材。内森自称是德雷克的后代，在棺材中找到了德雷克本人的日记，里面充满了手绘图表、插图和笔记。</p>
                           <blockquote className="bg-[#EBE3D5] p-4 rounded border-l-4 border-[#8B4513] text-[#5D4037] italic my-4 text-sm shadow-inner">
                             “我的末日将近。恶魔在黑暗中猎杀我。黄金国的黄金带着可怕的诅咒；西班牙人释放了地狱，变成了恶魔。我的人都被谋杀了，只留下我一个人承担这项任务。没有船会离开这个岛；我摧毁了所有的船，并淹没了这座被诅咒的城市。”
                           </blockquote>
                           <p>原来黄金国，这座著名的黄金之城，实际上是一个带有诅咒的巨大黄金石棺。在前往黄金国新位置的途中，他们被加布里埃尔·罗曼、阿托克·纳瓦罗和他们的暴徒追捕——苏利和内森到达得太晚了，罗曼揭开了里面令人毛骨悚然的木乃伊，释放出一种可怕的病毒，把他变成了内森一直在与之战斗的野蛮生物。纳瓦罗下令用直升机将宝藏运走，内森抓住网，搭上了前往一艘货船的顺风车。与纳瓦罗的最后对决导致雕像和纳瓦罗一起被拖入海底。</p>
                         </div>
                       </div>

                       {/* Story 2 */}
                       <div className="relative">
                         <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#8B4513] ring-4 ring-[#DED5C4]"></div>
                         <h3 id="section-among-thieves" className="text-xl mb-3 font-bold text-[#3E2723]">神秘海域2：纵横四海</h3>
                         <div className="bg-[#F9F6F0] p-6 rounded-lg border border-[#C8B598] shadow-sm text-[#795548] text-[15px] leading-relaxed space-y-3">
                           <p>内森和他的老相识兼犯罪搭档哈利·弗林（Harry Flynn）闯入伊斯坦布尔皇宫博物馆，寻找一盏与马可·波罗有关的粘土油灯。这盏灯揭示了波罗的船队在婆罗洲海岸遭遇海啸，且货物来自香巴拉（Shambhala）。</p>
                           <p>由于弗林的背叛，内森被土耳其警方逮捕。在苏利和他的旧情人克洛伊（Chloe）的保释下，他们出发去抓捕弗林。弗林和他的客户拉扎雷维奇（Lazarevic）即将找到“佛教圣杯”——一块价值数亿美元的完美天然蓝宝石。</p>
                           <p>顺着线索，内森来到了西藏群山中的一座寺庙，并在那里找到了香巴拉的入口。内森穿过城市，进入一座金字塔神庙寻找辛塔玛尼石。他意识到这块石头实际上是树液化成的琥珀，而不是蓝宝石，很明显生命之树才是真正的宝藏。在树的底部，内森利用树液的爆炸反应对拉扎雷维奇造成伤害并取得胜利。</p>
                         </div>
                       </div>

                       {/* Story 3 */}
                       <div className="relative">
                         <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#8B4513] ring-4 ring-[#DED5C4]"></div>
                         <h3 id="section-drakes-deception" className="text-xl mb-3 font-bold text-[#3E2723]">神秘海域3：德雷克的欺骗</h3>
                         <div className="bg-[#F9F6F0] p-6 rounded-lg border border-[#C8B598] shadow-sm text-[#795548] text-[15px] leading-relaxed space-y-3">
                           <p>内森和维克托走进伦敦的一家酒吧，去见一个名叫塔尔博特（Talbot）的人，他有兴趣购买内森那枚属于弗朗西斯·德雷克爵士的戒指。20年前，年轻的内森在哥伦比亚寻找这枚戒指，被名叫马洛（Marlowe）的女人抓住。幸运的是，苏利看到了内森的潜力并救了他，从那天起将他收为门徒。</p>
                           <p>回到现在，一行人跟踪塔尔博特和马洛来到一个地下图书馆，找回了T·E·劳伦斯的笔记本，证实了弗朗西斯·德雷克爵士曾秘密航行到阿拉伯，寻找失落的千柱之城（Ubar）。</p>
                           <p>队伍兵分两路前往法国和叙利亚，最终指向了也门。在也门，内森寻求分居妻子艾莲娜的帮助，发现失落之城在广阔的鲁卜哈利沙漠中。来到沙漠后，内森了解到所罗门王的行为导致水被污染，水中含有会引起强烈幻觉的矿物质。这些物质正是马洛想要获得的。为了阻止马洛，内森不小心炸毁了伊拉姆的中央水箱，导致城市坍塌。马洛和德雷克的戒指一起掉进了天坑，内森和苏利逃脱并再次被救起。</p>
                         </div>
                       </div>
                     </div>

                     <h2 id="section-video-walkthrough" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                        <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        视频流程攻略 (Video Walkthrough)
                     </h2>
                     <p className="text-[#795548] leading-relaxed mb-4">
                       请注意，我将制作本游戏的完整视频通关流程，与此处的文本完全一致，您可以在这里观看：
                     </p>
                     <p className="text-[#795548] leading-relaxed mb-4">
                       <a href="https://www.youtube.com/playlist?list=PLVBHCZXojrJc3j-8KLl_-b1W1T_zYHcrB" target="_blank" rel="noopener noreferrer" className="text-[#8B4513] hover:underline break-all">https://www.youtube.com/playlist?list=PLVBHCZXojrJc3j-8KLl_-b1W1T_zYHcrB</a>
                     </p>

                     <h2 id="section-walkthrough" className="text-3xl mt-16 mb-8 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2 flex items-center gap-3">
                        <MapPin size={28} className="text-[#8B4513]" />
                        流程攻略
                     </h2>
                     <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-[#8B4513] mb-8">
                       <p className="text-[#EBE3D5] text-sm m-0">
                         <strong>提示：</strong> 本攻略将为您在每种情况下的潜行路线提供建议。这并不意味着您必须这样玩，所以只要不影响奖杯，请随意进行战斗。
                       </p>
                     </div>

                     <div className="space-y-8">
                       {/* Prologue */}
                       <div className="bg-white rounded-xl shadow-md border border-[#C8B598] overflow-hidden">
                         <div className="bg-[#3E2723] px-6 py-4 border-b border-[#C8B598]">
                           <h3 id="section-prologue" className="text-xl font-bold text-[#F9F6F0] m-0">序章 (Prologue)</h3>
                         </div>
                         <div className="p-6">
                           <p className="text-[#8B4513] leading-relaxed mb-6 italic font-bold text-lg text-center bg-[#F9F6F0] p-4 rounded border border-[#EBE3D5]">
                             "我是一个追寻财富的人，我必须去寻找我的财富。"<br/>
                             <span className="text-sm text-[#795548] font-normal">(I am a Man of Fortune, and I must seek my Fortune.)</span>
                           </p>
                           <div className="space-y-6">
                             <div className="flex gap-4">
                               <div className="shrink-0 mt-1">
                                 <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">1</span>
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">
                                 故事从中间开始，内森和一个名叫山姆（Sam）的人在船上被追赶。按住 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">R2</kbd> 加速将船驶向岛屿，不要害怕撞上小船来摧毁它们。当大船撞向你并开始投放水雷时，你要尽可能避开它们，但你最终还是会被击中，内森会被甩出船外。按住 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">X</kbd> 浮出水面，当你发现迎面驶来的船朝你开来时，按住 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 潜入水下，惊险地避开螺旋桨。
                               </p>
                             </div>
                             
                             <div className="flex gap-4">
                               <div className="shrink-0 mt-1">
                                 <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">2</span>
                               </div>
                               <div className="space-y-3">
                                 <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">
                                   当你浮出水面并游到船上时，山姆会接手修理引擎，而你负责提供掩护。在山姆所在的同一侧寻找掩体，准备好进行枪战。
                                 </p>
                                 <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r text-sm text-red-900">
                                   <strong>⚔️ 战斗提示：</strong> 第一艘船上起初有两名普通敌人，但当你看到一名全副武装的敌人冲向船的左侧时，你要把注意力集中在他身上。这名敌人使用榴弹发射器，能造成巨大伤害，但如果你迅速击败他，他会炸毁自己的船。
                                 </div>
                                 <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">
                                   两艘小船会加速并排靠近，每艘船上有一名敌人，当你击败最近的那艘船时，另一艘载有两名敌人的船会取代它的位置。
                                 </p>
                               </div>
                             </div>

                             <div className="flex gap-4">
                               <div className="shrink-0 mt-1">
                                 <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">3</span>
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">
                                 一旦小船被消灭，山姆修好了引擎，接管方向盘再次向岛屿驶去。这一次你要在区域内穿梭时避开岩石，并撞击小船。过了一会儿，大船会再次出现并撞向你的船，将其掀翻，内森也被甩入水中。
                               </p>
                             </div>
                           </div>
                         </div>
                       </div>

                       
                       {/* Lure of Adventure */}
                       <div className="bg-white rounded-xl shadow-md border border-[#C8B598] overflow-hidden">
                         <div className="bg-[#3E2723] px-6 py-4 border-b border-[#C8B598]">
                           <h3 id="section-lure-of-adventure" className="text-xl font-bold text-[#F9F6F0] m-0">第一章：冒险的诱惑 (The Lure of Adventure)</h3>
                         </div>
                         <div className="p-6 space-y-6">
                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">1</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">故事现在回到了过去，探索内森的童年。跳出窗户，沿着右边的屋顶越过一个小边缘后，你会注意到左边的屋顶对内森来说太陡了。爬上空调机组，利用小装饰性壁架爬上并翻过墙壁，当你在屋顶斜坡的另一边时再跳回边缘。</p>
                           </div>
                           
                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">2</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">进入相邻屋顶的窗户，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 打开正前方的门。当你走在走廊上时，一名神父和修女会进入前面的房间，所以紧贴走廊左侧，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 靠墙寻找掩体。当他们都转过身背对你时，向上推左摇杆并按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 冲过拐角，赶在两人转身之前迅速躲到白色桌子后面。</p>
                               <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r text-sm text-blue-900">
                                 <strong>💡 提示：</strong> 从这里，等待对话结束，修女打开你左边的门，如果你想看内森的档案，可以进入右边的房间。
                               </div>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">3</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">跟着修女进入下一个房间，在正前方的一排箱子后面寻找掩体，然后向右跟着她，向上推左摇杆并按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 绕过拐角。等修女抽烟时把头探出窗外，跑向右边的格子沙发再次寻找掩体，然后转过拐角在边桌边缘等待。等她再次把头探出窗外，跑向右边的窗户。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">4</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 从窗台落到下面的壁架上，向左平移到达屋顶的一侧并爬上去。沿着屋顶跳到相邻的建筑物上，然后跳到壁架上向右平移，同时按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">X</kbd> 跳过缺口。你现在可以跳到排水管上，爬上屋顶，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 检查背包。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">5</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">过场动画结束后，跟着山姆穿过屋顶，爬上烟囱，使用左摇杆和 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">X</kbd> 从烟囱向后跳到对面的屋顶。跳过栏杆滑下屋顶，然后跳过左侧的边缘触发过场动画。</p>
                               <div className="bg-[#EBE3D5] p-4 rounded border-l-4 border-[#8B4513] my-4 shadow-sm">
                                 <p className="m-0 font-medium text-[#3E2723]">🪝 抓钩是《神秘海域》系列中的一个新功能，它在整个游戏中都能派上用场。</p>
                                 <p className="mt-2 mb-0 text-sm">山姆爬上去后，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 抓住绳子，然后按住 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L1</kbd> 的同时向上推左摇杆爬上去。在顶部，你需要向左平移绕过边缘才能拉起身子，然后继续跟着山姆穿过屋顶。跳过巨大的缺口，勉强安全到达，爬上壁架，然后沿着壁架外侧平移并跳过缺口。从绿色网下爬过，继续跟着山姆穿过屋顶，在十字架上摆荡，然后按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 从山姆那里抓住绳子并摆荡穿过缺口，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 释放。</p>
                               </div>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">6</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">跳到相邻的建筑物上，然后再次跳到山姆附近的壁架上，但因为内森够不到更高的壁架，他必须绕到右边才能爬上尖塔。跟着山姆穿过屋顶，爬上下一座塔，然后看着他滑下屋顶并在最后一秒跳跃到达对面的屋顶。照着做，平移到柱子的末端，然后按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 落下，但一定要确保不要过早按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">X</kbd>，否则你会错过跳跃。绕过屋顶，从山姆那里拿走抓钩，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L1</kbd> 连线到电线杆。你现在可以跳跃并摆荡到防火梯，爬下梯子触发过场动画。</p>
                           </div>
                         </div>
                       </div>

                       
                       <div className="bg-white rounded-xl shadow-md border border-[#C8B598] overflow-hidden">
                         <div className="bg-[#3E2723] px-6 py-4 border-b border-[#C8B598]">
                           <h3 id="section-infernal-place" className="text-xl font-bold text-[#F9F6F0] m-0">第二章：地狱之地 (Infernal Place)</h3>
                         </div>
                         <div className="p-6 space-y-6">
                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">1</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">时间向前推移了几年，内森现在发现自己在一群旁观者的注视下参与了一场监狱斗殴。按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">□</kbd> 攻击，由于你还无法躲闪，你只能继续战斗。如果你被推入人群或被打倒在地，你必须在再次将古斯塔沃（Gustavo）揍成肉泥之前，连续点击 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 挣脱敌人的控制。</p>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">最终监狱看守瓦加斯（Vargas）会阻止打斗并将你送进单独禁闭室。又一段过场动画后，跟着瓦加斯穿过监狱，直到到达室外。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">2</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">走下楼梯，沿着悬崖滑下，使用左摇杆控制方向，然后跳上壁架。爬上墙到达有井的区域，<strong>一定要跳进井里找到宝藏！</strong></p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 巴拿马猫吊坠（Panamanian Cat Pendant） —— 获得奖杯：First Treasure（第一件宝藏）
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">爬回去，检查区域后面的工作台，拿起抓钩，然后把箱子推到旁边的墙上。这样你就可以爬上去，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L3</kbd> 查看牢房，然后按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L1</kbd> 摆荡穿过缺口。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">3</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">前面的楼梯坏了，所以用抓钩勾住右边的横梁跳上去，然后爬到另一边，平移向上并绕过去再次回到地面。滑下悬崖，准备在抓钩图标弹出时按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L1</kbd>，然后摆荡到右侧的壁架上跳下。你现在可以爬上壁架到达建筑物的屋顶，然后跳到俯瞰整个区域的相邻塔楼。通过跳上壁架并向右平移来登上塔楼，然后跳上几个壁架向左平移进入窗户。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">4</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">桌子上有一封其中一名守卫写的信，你可以阅读，不过这不会收集到你的日志中，然后检查一根柱子的底部，在碎石中找到 Navaja 摺叠刀。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> Navaja 摺叠刀（Navaja Folding Knife）
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">你现在可以使用 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L1</kbd> 将抓钩连接到上方挡住窗户的木板上，然后按住 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L1</kbd> 向后走打破木板并创造一条新路径。爬上二楼跳到窗户上，然后继续登上塔楼进入伯恩斯（Burnes）的牢房。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">5</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">墙上覆盖着黄道十二宫的符号，但没有参考资料你不知道该怎么做。走向门，直到你发现一个太阳/月亮的雕刻，然后按触摸板调出瓦加斯交给你的纸条。你需要翻转信件，让内森识别出背面的月亮，然后将信件对折以创建两个黄道十二宫符号。查看牢房的墙壁，识别这两个黄道十二宫以及它们旁边的罗马数字（X 和 II），然后将它们相加，找到带有对应符号的石头。</p>
                               <div className="bg-[#EBE3D5] p-4 rounded border-l-4 border-green-600 my-4 shadow-sm flex gap-3 items-start">
                                 <CheckCircle2 size={20} className="text-green-600 mt-0.5 shrink-0" />
                                 <div>
                                   <strong className="text-[#3E2723] block mb-1">解谜答案：</strong>
                                   <p className="text-sm m-0 text-[#5D4037]">你要找的符号（XII）在指南针下方的后墙上，指南针正指着它。</p>
                                 </div>
                               </div>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">6</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">检查在里面找到的十字架，然后推开牢门并在差点摔倒后跳下。用抓钩勾住横梁悬挂在塔楼中心，然后按住 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L1</kbd> 向下速降。跳到人行道上，穿过横梁到达房间的另一边，然后落下开始滑行，但一定要在最后一秒跳跃，抓住对面墙上的壁架。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">7</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">打开门离开塔楼，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L3</kbd> 发现区域另一边的瓦加斯。跳到破碎人行道的支撑物上，然后跳到斜坡上，确保你绕过岩石向左走，到达可以抓取的横梁。从这里你只需要爬上小塔的侧面，跳到对面的一些壁架上，然后从天窗落下。</p>
                               <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r text-sm text-red-900">
                                 <strong>⚔️ 战斗提示：</strong> 这伙人可能找到了艾弗里（Avery）宝藏的下一个线索，但古斯塔沃和他的帮派似乎并不在乎你之前揍了他一顿。这是本章开头战斗的高级教程。记住，使用 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">□</kbd> 攻击，使用 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 挣脱任何囚犯的抓取，现在你可以按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 躲避即将到来的攻击。你的目标只是生存下来，直到古斯塔沃找上你，当他把你按在机器上时狂按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd>。
                               </div>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">8</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">又一段场景过后你将开始逃跑，所以跟着山姆和雷夫（Rafe）直到遇到死胡同，然后帮忙推开右边窗户上的铁条。跳出窗户追赶山姆，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 从黄色脚手架上跳下，然后左转避开有管道区域敌人的火力。最终山姆会遇到死胡同，你需要转身跟着雷夫爬上一堵墙到达另一个死胡同。转身看向右边，在地面上的蓝色垫子上方，找到山姆提到的防火梯，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 托起他。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">9</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">走向右边的屋顶翻过栏杆，当你跳到金属雨篷上时它会塌陷。为什么这些守卫在其他所有守卫都在向你射击时选择用拳头战斗，这让我无法理解，但你不会孤军奋战，因为山姆会飞跃下来猛击其中一名守卫来帮助你。拳斗结束后，找到推车，那里有一些箱子挡住了附近的通风口，帮山姆移开它，然后沿着通风口到达新区域。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">10</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">不用担心前面的守卫，雷夫会从后面打晕他，然后跳到下面的区域，等雷夫放下梯子。你现在可以跟着雷夫穿过剩下的屋顶，并按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 帮助山姆。经过一段简短的场景后，跳过栏杆，跟着雷夫来到悬崖边完成本章。</p>
                           </div>
                         </div>
                       </div>

                       
                       <div className="bg-white rounded-xl shadow-md border border-[#C8B598] overflow-hidden">
                         <div className="bg-[#3E2723] px-6 py-4 border-b border-[#C8B598]">
                           <h3 id="section-malaysia-job" className="text-xl font-bold text-[#F9F6F0] m-0">第三章：马来西亚的工作 (The Malaysia Job)</h3>
                         </div>
                         <div className="p-6 text-[#4A3018] text-[15px] leading-relaxed space-y-4">
                           <p>15年后，我们发现内森在某个水域底部寻找一批货物。向前游，直到你发现右边有一根被两块岩石支撑的圆木，就在分叉后第二批海草的过去一点，检查它的下面找到古董挂锁（Antique Padlock）。继续顺流而下游，直到你来到一个有两个开口的洞穴，走左边的那个。当你在隧道中游动时，注意右边的墙壁，当它再次变宽时停下来，等你看到岩石中间地面上闪闪发光的奇里基鲨鱼饰品（Chiriqui Shark Trinket）。继续顺流而下检查一块金属，然后越过岩石跟着残骸，按 △ 找到你的货物。</p>
                           <p>面对残骸的顶部，注意半挂车是侧翻的，所以顶部实际上是它的一侧，然后一直向前游直到撞到一堵墙。在左边你应该能找到集装箱里的一个板条箱，你一会儿得回来拿，在右边，坐在墙壁边缘的是古董怀表（Antique Pocketwatch）。走到残骸的后面，打开门检查货物。你需要找到两个板条箱：第一个你已经在残骸外面发现了，另一个在残骸下面，你应该能在离开集装箱的路上发现它。按照内森的建议，去拿外面的板条箱，捡起它，按 X 将板条箱抬离地面，把它运回集装箱。</p>
                           <p>回到集装箱外面，当吊索降下时，抓住其中一个绞车把手并将其缠绕在车轴上，按 △ 将挂钩重新挂在钢丝上。现在在另一侧做同样的事情，然后远离集装箱，以便他们稍微将其抬起。你现在可以抓住集装箱下面的第二个板条箱，把它也放进货舱，然后游上吊索并按 △ 搭个顺风车。</p>
                           <p>一旦集装箱被降到钻机上，低头看其中一名工人触发 △ 按钮，让内森脱下装备并跳下。走到正在卸货的人那里，进行一段关于潜水的可选对话（Optional Conversation），然后上楼梯，与靠在栏杆上的那个人交谈，进行另一段关于打捞的可选对话。一定要检查这个平台上的架子，找到古董街机代币（Antique Arcade Token），然后和詹姆森（Jameson）交谈。跟着詹姆森回到板条箱那里，拿起撬棍，终于弄明白大家都在大惊小怪些什么了。</p>
                         </div>
                       </div>

                       {/* Normal Life */}
                       <div className="bg-white rounded-xl shadow-md border border-[#C8B598] overflow-hidden">
                         <div className="bg-[#3E2723] px-6 py-4 border-b border-[#C8B598]">
                           <h3 id="section-normal-life" className="text-xl font-bold text-[#F9F6F0] m-0">第四章：正常生活 (A Normal Life)</h3>
                         </div>
                         <div className="p-6 space-y-6">
                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">1</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">内森的阁楼里充满了回忆，所以检查整个区域，拿起任何带有 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 的物品仔细查看。在区域的后面，你会发现内森的枪套里有一把玩具枪，你可以对着挂在天花板上的圆形目标练习射击。一定要射击所有四个目标，包括在内森办公桌上方另一端的高处那个，以获得奖杯：Still Got It!（宝刀未老！）。</p>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">离开阁楼，检查内森和艾莲娜的卧室，找到他们婚礼的相册，并检查艾莲娜的办公室寻找更多可查看的物品。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">2</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">下楼从冰箱里拿一杯饮料——那不是食物，德雷克！——然后拿起对面柜台上的两个碗，去和艾莲娜坐在一起。</p>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">当艾莲娜讲述她的故事时，内森完全走神了，做着关于冒险的白日梦，随后会被叉子迅速地戳一下而粗鲁地惊醒。接下来的选择对随后的对话没有任何影响，所以选听起来最好的那个就行。在另一段简短的场景之后，你将面临顽皮狗（Naughty Dog）的怀旧时刻，游玩他们在 PlayStation 上制作的首批游戏之一。</p>
                             </div>
                           </div>
                         </div>
                       </div>

                       
                       <div className="bg-white rounded-xl shadow-md border border-[#C8B598] overflow-hidden">
                         <div className="bg-[#3E2723] px-6 py-4 border-b border-[#C8B598]">
                           <h3 id="section-hector-alcazar" className="text-xl font-bold text-[#F9F6F0] m-0">第五章：海克特·阿尔卡扎 (Hector Alcazar)</h3>
                         </div>
                         <div className="p-6 text-[#4A3018] text-[15px] leading-relaxed space-y-4">
                           <p>当一位不速之客出现在内森的工作场所时，有很多旧需要叙。观看场景，然后从《神秘海域》系列中挑选你最喜欢的冒险来开始你的故事，直到故事转换视角。</p>
                           <p>过场动画结束后，跟着海克特和他的手下穿过监狱的走廊，直到你得到一把枪，然后做好准备。当你穿过走廊时，阿尔卡扎的手下将承受大部分攻击，所以不要害怕退后一点，仔细挑选你的目标。利用整个牢房区提供的掩体，一定要在进一步推进之前干掉上层的守卫。如果守卫掉落了武器，你就能捡起并使用它，海克特的手下死后也会掉落武器，所以要保持警惕。</p>
                           <p>当海克特的手下炸毁一堵墙开辟出一条路时，你需要谨慎前进，因为几名守卫会从上方区域发动攻击，而海克特的手下不在那里帮忙。躲在管道后面，干掉守卫后再继续前进，然后左转上楼梯去洗衣房。躲在上层的柱子后面，而不是下到危险的地方，当确认安全后你就可以跳下去了。一定要从被击倒的守卫那里补充弹药，然后躲在附近的一根柱子后面，站在最靠近墙壁的一侧。更多的守卫会出现在房间的另一边，这就是为什么你不想待在中心的任何地方，所以从相对安全的地方干掉他们。</p>
                           <p>门被炸开后，你可以再次跟着阿尔卡扎进入院子，但要立即躲在混凝土块后面。炮塔会撕裂墙壁，所以不要在一个地方停留太久。你的目标是使用掩护射击（不通过瞄准镜瞄准进行射击）来杀死次要守卫并推进到院子前面。此时，阿尔卡扎的手下会向塔楼发射一枚 RPG 并摧毁炮塔。你现在可以冲过该区域，因为海克特的手下会处理剩下的守卫，然后爬墙逃向自由。</p>
                         </div>
                       </div>

                       {/* Once A Thief... */}
                       <div className="bg-white rounded-xl shadow-md border border-[#C8B598] overflow-hidden">
                         <div className="bg-[#3E2723] px-6 py-4 border-b border-[#C8B598]">
                           <h3 id="section-once-a-thief" className="text-xl font-bold text-[#F9F6F0] m-0">第六章：一日为贼... (Once A Thief...)</h3>
                         </div>
                         <div className="p-6 space-y-6">
                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">1</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">在长长的开场之后，跟着山姆穿过多岩的山口，直到视野开阔能看到附近的一座城市，检查悬崖左端找到莫卧儿水壶。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 莫卧儿水壶（Mughal Water Container）
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">沿着悬崖边缘走到一座桥，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L3</kbd> 发现一根横梁，然后抛出你的抓钩，抛两次，连接并摆荡过去。摆荡到桥左端的壁架上，然后等山姆跟上你，因为他会用抓钩勾住下一根横梁并开辟出一条前进的道路。你需要下落到壁架底部抓住绳子才能在墙上奔跑，然后跳到下一个壁架，接着你就可以跟着山姆去果园了。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">2</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">紧贴果园的右墙，直到你到达远处的角落，在柠檬树附近的窗户上找到一个软玉黄铜杯，然后走回山姆身边进行一段可选对话。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 软玉黄铜杯（Nephrite Brass Cup）
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">进入建筑物，走下楼梯，在跳出窗户之前用抓钩勾住里面的横梁。速降到绳子底部，然后在墙上奔跑并向左跳下，如果你落在了拱门上，就跳到地面上。跟着山姆走到小路的尽头进行一段可选对话，然后爬上拱门旁边的岩石，爬上拱门的侧面。从这里你可以摆荡过柱子，沿着壁架向左平移，然后爬上一些柱子摆荡到下一组岩石上。你现在可以等山姆开辟出一条通往窗户的路，跟着他触发过场动画。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">3</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">确保在过场动画结束后重新进入书房，在桌子上拿起维京斗篷扣，然后返回大厅。在第一群人之后在第一个路口右转，走到一个阳台上，在那里你可以找到珍珠母号角并触发与山姆的另一段可选对话。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block mr-3">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 维京斗篷扣（Viking Cloak Clasp）
                               </div>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 珍珠母号角（Mother of Pearl Horn）
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">下楼，你可以在正前方三名男子附近的桌子上查看拍卖清单，然后进入拍卖大厅，跟着苏利走到一扇锁着的门前。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">4</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">服务员有你需要的钥匙卡，但他不会乖乖站着让你不费吹灰之力就拿走。走到他身后，按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">△</kbd> 开始扒窃，然后将高亮区域保持在他的口袋上方，以真正推进扒窃过程。注意，第一次他总会在你完成扒窃过程之前移动，但在任何后续尝试中，你应该都能拿到钥匙卡。拿到卡后，回到苏利身边，进入豪宅的服务区。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">5</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">跟着山姆穿过摆满食物的区域，然后向左看，发现一些圆形折叠桌。走上楼梯到达那里，然后检查右边堆叠的食物容器，找到一个隐藏得很好的波斯铜碗。你现在可以跟着山姆下楼，在楼梯底部收集黄铜理发碗。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block mr-3">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 波斯铜碗（Persian Bronze Bowl）
                               </div>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 黄铜理发碗（Brass Barber's Bowl）
                               </div>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">6</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">跟着山姆检查上锁的门，会有一些有趣的对话，然后走到房间对面巨大的酒桶前，把它向前推。继续进入酒窖，这是一个像迷宫一样的区域，紧贴右侧向后拉一个酒桶。绕过酒桶左侧，在它后面找到一条路，然后左转并向后拉另一个酒桶。再一次，绕过酒桶左侧，跳过酒桶所在的这两堵小墙，找到一个开阔区域。你现在可以把房间另一边的大酒桶拉到通风口下面，创造出一条最终通向外面的路。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">7</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">跟着山姆，他把这栋建筑称为“无线电塔”，然后无视附近的梯子，从区域对面栏杆上跳下到较低的庭院。沿着小路走到梯子处，然后爬上排水管，绕着建筑物的拐角平移，落到一个铺着瓦片的屋顶上，上面有叙利亚花瓶。和山姆一起跳回庭院，把他托上梯子继续前进，但不要跟着他翻过前面的栏杆。相反，向左转，爬上带有装饰性镂空图案的拱门侧面，然后斜向跳到小阳台上，其中一根柱子上放着波斯烛台。你现在可以跳下进入庭院，让山姆把你托上梯子触发过场动画。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block mr-3">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 叙利亚花瓶（Syrian Vase）
                               </div>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 波斯烛台（Persian Candlestick）
                               </div>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">8</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">进入庭院，爬上没有被藤蔓覆盖的格子到达第二层，然后爬上拱门侧面的格子到达方形屋顶。斜向跳到下一个方形屋顶，然后再跳到后面的方形屋顶。你现在可以爬上布满栏杆的窗户，前往铺着瓦片的屋顶，在栏杆上摆荡触发过场动画。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">9</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">跳到正前方的金属横梁上，然后按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">O</kbd> 落下到下面的横梁上，再摆荡到坚固的地面。绕过柱子左转，落到壁架上，然后向右平移，爬上中央柱子，找到藏在一个小壁架上的莫卧儿匕首。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 莫卧儿匕首（Mughal Dagger）
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">回到坚固的地面，跳上墙侧面的壁架，爬上金属横梁，摆荡穿过到达最后一根横梁。转身向右平移爬上另一个壁架，然后沿着排水管爬到一个通向配电室的窗户。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">10</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">沿着金属猫道爬行，跳入房间，检查通往断路器的门，触发过场动画。你需要搜索该区域，找到随机放置在其中一个容器中的撬棍，然后再次检查门，触发过场动画。</p>
                           </div>
                         </div>
                       </div>

                       
                       <div className="bg-white rounded-xl shadow-md border border-[#C8B598] overflow-hidden">
                         <div className="bg-[#3E2723] px-6 py-4 border-b border-[#C8B598]">
                           <h3 id="section-lights-out" className="text-xl font-bold text-[#F9F6F0] m-0">第七章：熄灯 (Lights Out)</h3>
                         </div>
                         <div className="p-6 text-[#4A3018] text-[15px] leading-relaxed space-y-4">
                           <div className="bg-[#EBE3D5] p-4 rounded border-l-4 border-[#8B4513] my-4 shadow-sm">
                             <p className="m-0 font-medium text-[#3E2723]">本任务充当高级战斗的教程，例如敌人侦测和潜行战斗。</p>
                           </div>
                           <p>走上楼梯，跳过栏杆，然后跳到附近的塔楼上，触发关于敌人侦测的事件。这一部分的重点是不被敌人发现，因为这会让你的进度轻松很多，所以向左跳，然后拉起自己，躲在塔楼里避开视线。</p>
                           <p>这栋建筑只有一个门，面对着一座蓝白相间的塔楼，所以等敌人的手电筒照向别处时，跑出去跳上其中一个壁架。当你到达顶部壁架时，一名守卫会走到边缘，允许你在拉起自己之前按 □ 对他进行潜行击杀。对面的门与另一座塔楼斜对角，但在跳到铺着瓦片的屋顶然后跳到塔楼本身之前，要等上方的敌人看向别处。在拉起自己进入塔楼之前，确保对面阳台上的守卫没有在看，然后从左边的门跳到另一栋建筑上。你现在可以跑到建筑物的另一边，从阳台右侧跳下，等待一个空当，然后跑过屋顶，爬上栏杆。</p>
                           <p>该区域的高草丛可以用作掩护（《刺客信条》风格），所以慢慢移动到草丛中心，当守卫足够近时按 □ 进行潜行击倒。等另一名守卫也走过来再解决掉，然后走上楼梯，跳上聚光灯，爬上建筑物的侧面。在顶部你可以瞥见舞厅，但你需要爬进这栋建筑的一扇敞开的窗户才能继续。</p>
                           <div className="bg-[#F9F6F0] p-4 rounded border border-[#C8B598] shadow-sm my-4 flex gap-3 items-start">
                             <div className="text-xl">⚔️</div>
                             <div>
                               <strong className="text-[#3E2723] block mb-1">这是一场脚本战斗：</strong>
                               <p className="text-sm m-0 text-[#5D4037]">意味着无论你做什么，结果只有一个。按 □ 攻击娜汀（Nadine），当她抓住你时按 △ 挣脱。在回应娜汀时有几次说俏皮话的机会，所以当她揍你时，尽情地卖弄吧。</p>
                             </div>
                           </div>
                           <p>被踢出战斗后，在金属横梁上摆荡到建筑物的一侧，跳到相邻的屋顶上。斜向跳到另一个阳台上，然后跳出窗户抓住横跨拱门的金属横梁。简短的事件过后，摆荡到壁架上，向左平移到山姆提到的那个圆形标志处。</p>
                           <p>现在你有一把枪了，当两名守卫的注意力集中在山姆身上时，瞄准他们的头部，然后爬过标志继续向左，直到你站在坚固的地面上。你一去拿弹药，就会有更多守卫进入该区域，所以躲在栏杆后面。一旦相邻建筑物上的守卫不注意，跳过缺口，向右平移绕过建筑物并拉起自己，靠墙掩护。守卫会径直走向内森送上一次潜行击杀，然后你可以在大厅另一侧的栏杆上寻找掩体。等高草丛中的守卫向右看，然后跳过栏杆，跳过缺口。你现在可以爬上栏杆边缘（不透明的地方），等守卫过来时把他拉下边缘。</p>
                           <p>在高草丛中慢慢向前移动，直到守卫开始走上楼梯，然后后退，这样最近的守卫就必须绕过拐角，在另一名守卫视线之外，对他进行潜行击杀。你现在可以解决高草丛中的另一名守卫，在最靠近对面屋顶上守卫的角落里等待。等他开始走开，跳过栏杆，然后跳到装饰性镂空图案上爬上屋顶，迅速躲在烟囱后面。从这里，当他向你走回时，你可以对他进行潜行击杀，而不会让下面的守卫进入黄色警戒状态。</p>
                           <p>从你上来的那栋建筑的侧面跳下，爬上装饰性镂空图案到达窗户，等到安全后再跳进去。这个房间通常有两名守卫；一个在远处巡逻，一个走得离窗户更近，但在击倒任何一个之前要确保安全。最后一名守卫在旁边那栋建筑巡逻，当他走开时应该很容易击倒。你现在可以跳过栏杆到达一小块屋顶，然后跳到靠近高草丛庭院的相邻屋顶上。</p>
                           <p>直到你把木车向前推，敌人才会进入庭院，所以把它向前推到刚好能让敌人从区域后面的门出来的程度。有时敌人会穿过草丛，有时他们会先探索区域的一侧，所以最好跑回你身后的阳台，跳过壁架寻找掩体，这样你就不会被看到了。观察敌人并注意他们的巡逻路线，但要小心，因为屋顶上还有另一名敌人俯瞰整个庭院。最好在柱子后面、高草丛中或靠近上方守卫所在的二楼击倒他们。一旦下层庭院的敌人被击倒，利用楼梯（通过守卫出来的那个门口）到达上层并杀死最后一名守卫。</p>
                           <p>滑索将带你进入舞厅，正赶上山姆在交火。注意左边靠近山姆的舞台，因为那里会出来一名拿着霰弹枪的敌人，他构成了最大的威胁。木箱和桌子不能提供长时间的掩护，会在敌人的火力下破碎，所以你要穿过舞厅向右移动到最远的柱子。从这里你有充足的掩体来消灭第一波敌人，然后第二波敌人会从右边的门进入。</p>
                           <p>舞厅安全后，你可以离开并走下楼梯，再杀两名守卫，然后躲在楼梯底部的一根柱子后面。这里的敌人是无穷无尽的，会在整个战斗中不断生成。你的目标是推进到区域的前方，苏利将在那里开车撞穿灌木丛提供出口。尝试利用柱子作为掩护向前推进，直到你觉得足够安全，可以冲向车门。</p>
                         </div>
                       </div>

                       {/* The Grave of Henry Avery */}
                       <div className="bg-white rounded-xl shadow-md border border-[#C8B598] overflow-hidden">
                         <div className="bg-[#3E2723] px-6 py-4 border-b border-[#C8B598]">
                           <h3 id="section-grave-of-henry-avery" className="text-xl font-bold text-[#F9F6F0] m-0">第八章：亨利·艾弗里的坟墓 (The Grave of Henry Avery)</h3>
                         </div>
                         <div className="p-6 space-y-6">
                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">1</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">沿着海岸线走到一个小山洞，找到青铜野猪宝藏，然后沿着积雪上坡，稍微向右走一点。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block mr-3">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 青铜野猪（Bronze Boar）
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">你会知道自己找对地方了，因为当你走向死胡同时，积雪会开始变薄，就在积雪消失之前，你可以找到红陶和银质水壶。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 红陶和银质水壶（Redware and Silver Jug Flask）
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">转身，沿着积雪下坡向左走，来到一个碎石坡并滑下，跳跃抓住右侧对面的壁架。从这里你可以从树干上速降到下面的地面，在简短的过场动画后与一些敌人交战。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">2</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">上坡，落入僧侣的起居区，沿着右墙在灌木丛后面找到雕花木质乞食钵。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 雕花木质乞食钵（Carved Wood Kashkul）
                               </div>
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">目前该区域是空的，但在你从区域中心的箱子里拿炸药之前，你应该花点时间熟悉一下地形。往正前方的木门里扔一根炸药，然后多拿点炸药备用。建筑物的天花板上有一个洞，但太高了，无法把山姆托上去，你需要找另一条路爬上去。离开建筑物，走上右边的楼梯找到一个黄色的箱子，用一根炸药炸开附近的门口。</p>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">3</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">当你把箱子推向建筑物时，一群海岸线（Shoreline）的敌人会从建筑物里出来；猜猜看，那些爆炸声掩饰得并不太好。放开集装箱，跑回墙边，爬到你抓集装箱的地方，在脚手架的木板上寻找掩体。其中一名敌人应该会径直走向你，让你轻松击杀，而另一名敌人可能会也可能不会跟着他。有机会的时候尽量标记敌人，这样当你看向另一个方向时，他们就不会从你背后偷袭，并明智地利用掩体。较低的区域有很多高草丛，你可以从中潜行，敌人也会经常走过或穿过它。一旦区域安全，你可以回到黄色的箱子那里，把它推入建筑物以便爬上去。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">4</span></div>
                             <div className="space-y-3">
                               <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">在使用抓钩之前，找找左边的一个有几个箱子的小山洞。因为箱子挡住了路，你无法爬过去，但一根炸药可以清除它们，让你收集里面的雕花坚果瓶。</p>
                               <div className="bg-[#EBE3D5] p-3 rounded shadow-sm border border-[#C8B598] inline-block">
                                 <span className="text-[#8B4513] font-bold">💎 宝藏：</span> 雕花坚果瓶（Carved Nut Bottle）
                               </div>
                             </div>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">5</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">摆荡到正前方的壁架上，然后向右上方的寻找另一个抓钩点。从第二棵树开始在墙上奔跑，跳到左边的壁架上拉起自己，然后用抓钩勾住附近的树，摆荡到你刚才站的地方上方更高的壁架上。从这里你可以向右平移，爬上有划痕的墙壁，把山姆托上梯子。这里太高了，山姆无法伸出援手，但如果你向左平移回去，当你从壁架上跳起时，山姆会抓住你。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">6</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">你可以按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L3</kbd> 查看即将到达的目的地，但首先你需要滑下碎石坡并跳到前面的壁架上。前往左下角的壁架，等一名敌人在你下方停下，然后跳下去进行潜行击杀，毫不客气地打断他正在做的事。穿过高草丛，干掉右边的敌人，同时山姆对付另一个，然后花点时间尽可能多地标记敌人。观察正前方站在塔楼上的敌人，当他背对你时，走向小木栅栏，跳过去进入另一片草丛。再次确保没有敌人在看，前往相邻的草丛，然后穿过破碎的拱门进入另一片高草丛。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">7</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">上面的两名敌人很可能在交谈，所以穿过草丛，在有一名敌人那侧的柱子旁寻找掩体，从拐角探出头来检查该区域。一旦下层的敌人和在草地巡逻的敌人没在看，就从你所在的位置冲向附近的草丛。再一次，确保上方的敌人背对你，然后滚入下一片草丛。这应该会让你进入这样一片草丛区域：一名敌人在地面上走过，另一名敌人在残墙附近停下。根据敌人的位置，你可能需要先干掉走过草丛的那个，或者先跳上残墙把那个暴徒拉下来。无论哪种方式，趁上层敌人不注意时干掉他们俩，然后爬上柱子侧面，当他走近时把他拉下来。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">8</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">其余的敌人（除了一个）都在破碎建筑的主要部分。首先爬上最靠近柱子的墙，等戴红帽子的敌人走过来进行潜行击杀，如果他不战而降，就把他踢下去。向左平移绕过建筑物，直到你到达一根柱子，当远处尽头的敌人不注意时，绕过柱子，把站在那里的敌人拉下来。继续向左平移绕过该区域，你应该能毫不费力地解决掉剩下的敌人。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">9</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">沿着小路走，跳到大岩石上有标记的壁架上，绕着它平移到另一边的一段。从这里你可以用抓钩勾住峡谷对面的树，然后左转摆荡到更多的壁架上。按 <kbd className="font-mono bg-gray-100 border border-gray-300 rounded px-1">L3</kbd> 查看你离目的地有多近，然后跳进你身后的碎石坡，躲在高草丛中。沿着草丛走，然后转移到小路对面的另一片高草丛中，等待对话结束。一旦两人分开，你应该有机会穿过到另一边的另一片草丛中，在那里你可以等其中一名敌人走过来。当上方的敌人不注意时，下层剩下的那个家伙应该很容易干掉，然后你可以爬上去对付最后一个。</p>
                           </div>

                           <div className="flex gap-4">
                             <div className="shrink-0 mt-1"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EBE3D5] text-[#8B4513] font-bold border border-[#C8B598]">10</span></div>
                             <p className="text-[#4A3018] text-[15px] leading-relaxed m-0">注意那些一半被碎石坡掩盖的柱子，这些是你前进的门票。首先跳到正前方的柱子上，然后滑下碎石，跳到底部柱子侧面的壁架上。跳到第三根柱子上，再次跳跃到达桥上，然后转圈再次面对碎石坡。对面的墙上有一组你瞄准的壁架，所以深跳并在滑得太低之前向左按住左摇杆以到达它。该区域的另一边还有另一个碎石坡等着你，但如果你这次没有穿过去，你就会滑下悬崖边缘摔死。</p>
                           </div>
                        </div>
                      </div>

                    </div>
                  </>
                ) : game.slug === 'baldurs-gate-3' ? (
                 <>
                   {/* Baldur's Gate 3 Specific Content */}
                   <div className="mb-12">
                     <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                        {/* Cover Image & Purchase */}
                       <div className="w-full md:w-[365px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                         <div className="bg-[#F9F6F0] rounded-xl shadow-sm border border-[#C8B598] p-5">
                           <h3 className="font-bold text-[#3E2723] mb-4 text-sm flex items-center gap-2">
                             <span>🛍️</span> 购买游戏
                           </h3>
                           <div className="flex flex-col gap-4">
                             <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#C8B598] bg-[#F9F6F0] mb-2">
                               <img src={game.imgUrl} alt="Cover" className="absolute inset-0 w-full h-full object-cover p-1" />
                             </div>
                             <div className="flex items-center justify-between">
                               <div className="flex flex-col">
                                 <span className="text-2xl font-bold text-[#8B4513]">HK$ 468.00</span>
                               </div>
                             </div>
                             <a 
                               href="https://store.playstation.com/zh-hans-hk/concept/10007460" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="w-full py-3 bg-[#7b0a0a] text-[#f1f1f1] font-bold rounded-sm text-sm hover:bg-[#5a0000] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,0,0,0.5)] group uppercase tracking-widest uncharted4-font-title text-xl"
                             >
                               <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                               <span>前往 PS Store 购买</span>
                             </a>
                           </div>
                         </div>
                       </div>
                        
                        {/* Basic Info Table */}
                        <div className="flex-1 flex flex-col">
                          <div className="bg-[#F9F6F0] rounded-xl shadow-sm border border-[#C8B598] p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between border-b border-[#C8B598] pb-4 mb-4">
                              <h3 className="text-xl font-bold text-[#3E2723] flex items-center gap-2">
                               <span className="text-2xl">📋</span> 游戏档案
                             </h3>
                            </div>
                            
                            <div className="flex-1 grid grid-cols-1 content-center gap-1">
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🏢</span> 开发商</span>
                                <span className="font-semibold text-[#3E2723]">Larian Studios</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📅</span> 发售日期</span>
                                <span className="font-semibold text-[#3E2723]">2523-09-06 (PS5)</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🎯</span> 游戏类型</span>
                                <span className="font-semibold text-[#3E2723]">CRPG / 策略 / 冒险</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">💰</span> 参考价格</span>
                                <span className="font-bold text-[#8B4513] text-base">HK$ 468.00</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">⭐</span> 媒体评分</span>
                                <span className="font-bold text-green-600">96/100 (Metacritic)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>

                    <h2 id="section-intro" className="text-2xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#f1f1f1]">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                       📖 前言与导读
                    </h2>
                    <p className="lead text-[17px] text-[#4A3018] leading-relaxed mb-8">
                      《博德之门 3》是一款基于《龙与地下城》(D&D) 5E 规则的 CRPG 巨作。游戏提供了极高的自由度，每一个选择都可能引发蝴蝶效应，改变故事的走向。
                      <br/><br/>
                      本攻略将为你提供基础的操作指南、战斗技巧以及生存建议，帮助你在费伦大陆的冒险中少走弯路。
                    </p>

                    <h2 id="section-basics" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       一、基础操作与生存技巧
                    </h2>
                    
                    <div className="space-y-8 mt-8 mb-12">
                       {bg3GuideData.find(c => c.id === 'basics')?.sections?.map((section, idx) => (
                         <div 
                           key={idx} 
                           className="bg-[#1a1a1a] p-6 rounded-lg border border-[#C8B598]"
                           style={{
                             backgroundImage: `url(${bg3Frame})`,
                             backgroundSize: '100% 100%',
                             backgroundRepeat: 'no-repeat',
                             border: 'none',
                             backgroundColor: 'transparent'
                           }}
                         >
                           <h4 id={`section-basics-${section.id}`} className="text-lg font-bold text-[#3E2723] mb-4 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]"></span>
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
                                   <p className="text-[#4A3018] text-sm leading-relaxed m-0 font-medium relative z-10 px-2">
                                     {item.text}
                                   </p>
                                 </div>
                               )
                             ))}
                           </div>
                         </div>
                       ))}
                     </div>

                     <h2 id="section-prologue" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                        <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        二、序章：逃离螺壳舰
                     </h2>
                     <div className="space-y-8 mt-8 mb-12">
                       {bg3GuideData.find(c => c.id === 'prologue')?.sections?.map((section, idx) => (
                         <div 
                           key={idx} 
                           className="bg-[#1a1a1a] p-6 rounded-lg border border-[#C8B598]"
                           style={{
                             backgroundImage: `url(${bg3Frame})`,
                             backgroundSize: '100% 100%',
                             backgroundRepeat: 'no-repeat',
                             border: 'none',
                             backgroundColor: 'transparent'
                           }}
                         >
                           <h4 id={`section-prologue-${section.id}`} className="text-lg font-bold text-[#3E2723] mb-4 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]"></span>
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
                                   <p className="text-[#4A3018] text-sm leading-relaxed m-0 font-medium relative z-10 px-2">
                                     {item.text}
                                   </p>
                                 </div>
                               )
                             ))}
                           </div>
                         </div>
                       ))}
                     </div>
 
                     <h2 id="section-trophy-list" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                        <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        三、查看全奖杯列表
                     </h2>
                    <div className="my-8 text-[#f1f1f1]">
                      <p className="mb-6 text-[#f1f1f1] font-medium">
                        本作包含 54 个奖杯，包括极其困难的“荣誉模式”挑战。点击下方按钮查看完整的中文奖杯列表与获取攻略。
                      </p>
                      <Link 
                       to="/baldurs-gate-3/trophies"
                       className="block w-full text-center py-4 bg-[#F9F6F0] border-2 border-[#3E2723] text-[#3E2723] font-bold uppercase tracking-widest text-sm hover:bg-[#3E2723] hover:text-[#F9F6F0] transition-all rounded-sm shadow-sm hover:shadow-[0_0_15px_rgba(139,69,19,0.3)]"
                     >
                       查看全奖杯列表
                    </Link>
                   </div>
                   
                   <hr className="my-12 border-[#C8B598]" />
                  </div>
                 </>
               ) : game.slug === 'horizon-forbidden-west' ? (
                 <>
                   {/* Horizon Forbidden West Specific Content */}
                   <div className="mb-12">
                     <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                        {/* Cover Image & Purchase */}
                       <div className="w-full md:w-[365px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                         
                         {/* Purchase Card */}
                         <div className="bg-[#F9F6F0] rounded-xl shadow-sm border border-[#C8B598] p-5">
                           <h3 className="font-bold text-[#3E2723] mb-4 text-sm flex items-center gap-2">
                             <span>🛍️</span> 购买游戏
                           </h3>
                           
                           <div className="flex flex-col gap-4">
                             <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#C8B598] bg-[#F9F6F0] mb-2">
                               <img src={horizonCover} alt="Horizon Forbidden West Cover" className="absolute inset-0 w-full h-full object-cover p-1" />
                             </div>

                             <div className="flex items-center justify-between">
                               <div className="flex flex-col">
                                 <span className="text-xs text-gray-400 line-through">HK$ 568.00</span>
                                 <span className="text-2xl font-bold text-[#8B4513]">HK$ 398.00</span>
                               </div>
                               <span className="px-2.5 py-1 bg-[#8B4513]/30 text-[#8B4513] text-xs font-bold rounded">-30%</span>
                             </div>

                             <a 
                               href="https://www.playstation.com/zh-hans-hk/games/horizon-forbidden-west/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="w-full py-3 bg-[#7b0a0a] text-[#f1f1f1] font-bold rounded-sm text-sm hover:bg-[#5a0000] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,0,0,0.5)] group uppercase tracking-widest uncharted4-font-title text-xl"
                             >
                               <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                               <span>前往 PS Store 购买</span>
                             </a>
                           </div>
                         </div>
                       </div>
                        
                        {/* Basic Info Table */}
                        <div className="flex-1 flex flex-col">
                          <div className="bg-[#F9F6F0] rounded-xl shadow-sm border border-[#C8B598] p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between border-b border-[#C8B598] pb-4 mb-4">
                              <h3 className="text-xl font-bold text-[#3E2723] flex items-center gap-2">
                               <span className="text-2xl">📋</span> 游戏档案
                             </h3>
                            </div>
                            
                            <div className="flex-1 grid grid-cols-1 content-center gap-1">
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🏢</span> 开发商</span>
                                <span className="font-semibold text-[#3E2723]">Guerrilla Games</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📦</span> 发行商</span>
                                <span className="font-semibold text-[#3E2723]">索尼互动娱乐 (SIE)</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📅</span> 发售日期</span>
                                <span className="font-semibold text-[#3E2723]">2522-02-18</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🎯</span> 游戏类型</span>
                                <span className="font-semibold text-[#3E2723]">动作角色扮演 / 开放世界</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🕹️</span> 对应平台</span>
                                <span className="font-semibold text-[#3E2723]">PS5 / PS4 / PC</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">💰</span> 参考价格</span>
                                <span className="font-bold text-[#8B4513] text-base">HK$ 398.00</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">⭐</span> 媒体评分</span>
                                <span className="font-bold text-green-600">88/100 (Metacritic)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>

                    <h2 id="section-intro" className="text-2xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#f1f1f1]">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                       📖 游戏简介
                    </h2>
                    <p className="lead text-[17px] text-[#4A3018] leading-relaxed mb-8">
                      《地平线 西之绝境》（Horizon Forbidden West）是Guerrilla Games开发的动作角色扮演游戏，为《地平线 零之曙光》的续作。故事延续前作，主角埃洛伊（Aloy）为了拯救面临枯萎病威胁的世界，前往危险的西部禁地，探索未知的机械生物与古老遗迹，揭开隐藏在末世背后的惊天秘密。
                    </p>

                    {/* New Sections: Features, Reference, Ratings, Screenshots */}
                    <div className="space-y-12 mb-12">
                      
                      {/* Core Features */}
                      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#C8B598]">
                         <h3 className="text-xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                           <span className="text-2xl">🌟</span> 核心特色
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="bg-[#F9F6F0] p-4 rounded-lg shadow-sm border border-[#C8B598]">
                             <div className="text-3xl mb-3">🏔️</div>
                             <h4 className="font-bold text-[#3E2723] mb-2">庞大的开放世界</h4>
                             <p className="text-sm text-[#795548]">探索远未来的美国西部，包含森林、沉没城市和高耸山脉。利用新的跑酷动作和抓钩自由穿梭。</p>
                           </div>
                           <div className="bg-[#F9F6F0] p-4 rounded-lg shadow-sm border border-[#C8B598]">
                             <div className="text-3xl mb-3">🏹</div>
                             <h4 className="font-bold text-[#3E2723] mb-2">激烈的机器战斗</h4>
                             <p className="text-sm text-[#795548]">利用各种武器、陷阱和策略对抗巨大的机器生物。针对不同机器的弱点制定战术。</p>
                           </div>
                           <div className="bg-[#F9F6F0] p-4 rounded-lg shadow-sm border border-[#C8B598]">
                             <div className="text-3xl mb-3">🏊‍♀️</div>
                             <h4 className="font-bold text-[#3E2723] mb-2">水下探索</h4>
                             <p className="text-sm text-[#795548]">潜入水下，探索隐藏的秘密和遗迹。全新的潜水面具让你能无限制地在水下活动。</p>
                           </div>
                           <div className="bg-[#F9F6F0] p-4 rounded-lg shadow-sm border border-[#C8B598]">
                             <div className="text-3xl mb-3">🛠️</div>
                             <h4 className="font-bold text-[#3E2723] mb-2">深度RPG系统</h4>
                             <p className="text-sm text-[#795548]">通过六大技能树（战士、陷阱、生存、渗透、猎人、机器大师）自定义埃洛伊的能力。</p>
                           </div>
                         </div>
                      </div>

                      {/* Reference Info */}
                      <div>
                        <h3 className="text-xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                           <span className="text-2xl">ℹ️</span> 参考信息
                        </h3>
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#C8B598] mb-6">
                           <p className="text-[#795548] mb-3">
                             本攻略参考了 Steam 社区的优秀指南，原文链接如下：
                           </p>
                           <a 
                             href="https://steamcommunity.com/sharedfiles/filedetails/?id=3194697969" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-[#8B4513] hover:text-[#ff3333] underline break-all"
                           >
                             Horizon Forbidden West [+DLC] - 100% Achievement Guide
                           </a>
                         </div>

                      </div>

                      {/* Media Ratings */}
                      <div>
                        <h3 className="text-xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                           <span className="text-2xl">🏆</span> 媒体评分
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div className="bg-[#8B4513] text-[#F9F6F0] p-6 rounded-xl shadow-[0_0_15px_rgba(139,69,19,0.3)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-90">IGN</span>
                             <span className="text-5xl font-black mb-4">9<span className="text-2xl opacity-70">/10</span></span>
                             <p className="text-xs leading-relaxed opacity-90">"令人惊叹的战斗与顶级生物设计的完美结合。"</p>
                           </div>
                           <div className="bg-[#ffcc00] text-[#f1f1f1] p-6 rounded-xl shadow-[0_0_15px_rgba(139,69,19,0.3)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-70">GameSpot</span>
                             <span className="text-5xl font-black mb-4">8<span className="text-2xl opacity-50">/10</span></span>
                             <p className="text-xs leading-relaxed opacity-80">"虽然有些瑕疵，但西之绝境在很多方面都做得非常出色。"</p>
                           </div>
                           <div className="bg-[#5D4037] text-[#F9F6F0] p-6 rounded-xl shadow-[0_0_15px_rgba(139,69,19,0.3)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-90">Metacritic</span>
                             <span className="text-5xl font-black mb-4 bg-green-600 px-3 py-1 rounded">88</span>
                             <p className="text-xs leading-relaxed opacity-90">"普遍好评 (Universal Acclaim)"</p>
                           </div>
                        </div>
                      </div>

                      {/* Official Screenshots */}
                      <div>
                        <h3 className="text-xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                           <span className="text-2xl">📸</span> 官方游戏截图
                        </h3>
                        <div className="space-y-8 mb-10">
                           <figure>
                             <img 
                               src={horizonGameplayShot} 
                               alt="Horizon Forbidden West Gameplay" 
                               className="w-full rounded-lg shadow-[0_0_15px_rgba(139,69,19,0.3)]" 
                             />
                             <figcaption className="text-center text-sm text-gray-400 mt-2">
                               埃洛伊在西部的探索之旅 | 来源: PlayStation 官方
                             </figcaption>
                           </figure>
                        </div>
                      </div>

                    </div>

                    <div className="bg-[#140a0a] border border-[#331111] rounded-lg p-6 my-10 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#8B4513]"></div>
                      <h4 id="section-intro" className="font-bold mb-3 text-[#8B4513] flex items-center gap-2 text-base">
                         <span>💡</span> 前言与导读
                      </h4>
                      <div className="space-y-6">
                        {horizonForbiddenWestGuideData.find(c => c.id === 'intro')?.sections?.map((section, idx) => (
                           <div key={idx}>
                             <h5 className="font-bold text-[#4A3018] mb-2">{section.title}</h5>
                             <div className="space-y-3">
                               {section.content?.map((item, itemIdx) => (
                                 <div key={itemIdx} className="bg-[#F9F6F0] p-3 rounded border border-[#C8B598] text-sm text-[#795548]">
                                   {item.name && <strong className="block mb-1 text-[#3E2723]">{item.name}</strong>}
                                   {item.text || item.description}
                                 </div>
                               ))}
                             </div>
                           </div>
                        ))}
                      </div>
                    </div>
                    
                    <h2 id="section-main-quests" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       一、主线任务流程
                    </h2>
                    
                    <div className="space-y-8 mb-12">
                      {horizonForbiddenWestGuideData.find(c => c.id === 'main-quests')?.sections?.map((section, idx) => (
                        <div key={idx} id={`section-main-quests-${['daunt', 'fw', 'sub', 'end'][idx] || idx}`} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#C8B598]">
                          <h4 className="text-lg font-bold text-[#3E2723] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]"></span>
                            {section.title}
                          </h4>
                          
                          <div className="space-y-3">
                            {section.content.map((item, itemIdx) => (
                              <div key={itemIdx} id={item.id} className="bg-[#F9F6F0] p-4 rounded border border-[#C8B598] shadow-sm hover:border-[#8B4513] transition-colors scroll-mt-[125px]">
                                <h5 className="text-[#3E2723] font-bold text-sm mb-1">{item.name}</h5>
                                <p className="text-[#795548] text-sm leading-relaxed m-0">{item.description}</p>
                                {item.details && (
                                  <div className="mt-4 space-y-4 border-t pt-4 border-[#C8B598]">
                                    {item.details.map((detail, dIdx) => {
                                      if (detail.type === 'text') {
                                         // Check for Boss Tip
                                         if (detail.content.includes('Boss战提示') || detail.content.includes('Boss Battle Tip')) {
                                            return (
                                              <div key={dIdx} className="bg-[#8B4513]/30 border-l-4 border-red-500 p-4 my-4 rounded-r-lg shadow-sm">
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
                                              <div key={dIdx} className="bg-slate-100 border-l-4 border-slate-400 p-4 my-3 rounded-r-lg flex items-start gap-3 shadow-sm group hover:bg-slate-250 transition-colors">
                                                 <div className="bg-[#F9F6F0] p-1.5 rounded-md shadow-sm border border-slate-250 shrink-0 mt-0.5 group-hover:border-slate-300 transition-colors">
                                                   <Gamepad2 size={18} className="text-slate-600" />
                                                 </div>
                                                 <div className="text-slate-700 text-sm leading-relaxed m-0 font-medium" dangerouslySetInnerHTML={{__html: detail.content}}></div>
                                              </div>
                                            );
                                         }

                                         return <p key={dIdx} className="text-[#795548] text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: detail.content}}></p>;
                                      }
                                      if (detail.type === 'image') {
                                         return (
                                           <div key={dIdx} className="rounded-lg overflow-hidden my-3 shadow-sm border border-[#C8B598]">
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
                                               <div className="bg-[#F9F6F0] p-1.5 rounded-full shadow-sm text-indigo-600 shrink-0">
                                                 <MessageCircle size={18} />
                                               </div>
                                               <h6 className="text-indigo-900 font-bold text-sm m-0">{content}</h6>
                                             </div>
                                           );
                                         }
                                         return <h6 key={dIdx} className="text-[#4A3018] font-bold text-sm mt-4 mb-2 pb-1 border-b border-[#C8B598]">{content}</h6>;
                                      }
                                      if (detail.type === 'checklist') {
                                         return (
                                           <div key={dIdx} className="bg-emerald-50/80 border border-emerald-100 rounded-lg p-4 my-3">
                                             <ul className="space-y-3">
                                               {detail.items.map((li, liIdx) => (
                                                 <li key={liIdx} className="flex items-start gap-3 text-sm text-[#795548]">
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
                                           <ul key={dIdx} className="list-disc list-inside text-[#795548] text-sm space-y-1 pl-2">
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

                    <h2 id="section-side-quests" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       二、全支线任务列表
                    </h2>
                    
                    <div className="space-y-8 mb-12">
                      {horizonForbiddenWestGuideData.find(c => c.id === 'side-quests')?.sections?.map((section, idx) => (
                        <div key={idx} id={['section-side-quests-early', 'section-side-quests-mid', 'section-side-quests-late', 'section-side-quests-arena'][idx]} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#C8B598]">
                          <h4 className="text-lg font-bold text-[#3E2723] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]"></span>
                            {section.title}
                          </h4>
                          
                          <div className="space-y-3">
                            {section.content.map((item, itemIdx) => (
                              <div key={itemIdx} id={item.id} className="bg-[#F9F6F0] p-4 rounded border border-[#C8B598] shadow-sm hover:border-[#8B4513] transition-colors scroll-mt-[125px]">
                                {item.name && <h5 className="text-[#3E2723] font-bold text-sm mb-1">{item.name}</h5>}
                                <p className="text-[#795548] text-sm leading-relaxed m-0">{item.text || item.description}</p>
                                {item.details && (
                                  <div className="mt-4 space-y-4 border-t pt-4 border-[#C8B598]">
                                    {item.details.map((detail, dIdx) => {
                                      if (detail.type === 'text') {
                                         if (detail.content.includes('Boss战提示') || detail.content.includes('Boss Battle Tip')) {
                                            return (
                                              <div key={dIdx} className="bg-[#8B4513]/30 border-l-4 border-red-500 p-4 my-4 rounded-r-lg shadow-sm">
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
                                              <div key={dIdx} className="bg-slate-100 border-l-4 border-slate-400 p-4 my-3 rounded-r-lg flex items-start gap-3 shadow-sm group hover:bg-slate-250 transition-colors">
                                                 <div className="bg-[#F9F6F0] p-1.5 rounded-md shadow-sm border border-slate-250 shrink-0 mt-0.5 group-hover:border-slate-300 transition-colors">
                                                   <Gamepad2 size={18} className="text-slate-600" />
                                                 </div>
                                                 <div className="text-slate-700 text-sm leading-relaxed m-0 font-medium" dangerouslySetInnerHTML={{__html: detail.content}}></div>
                                              </div>
                                            );
                                         }

                                         return <p key={dIdx} className="text-[#795548] text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: detail.content}}></p>;
                                      }
                                      if (detail.type === 'image') {
                                         return (
                                           <div key={dIdx} className="rounded-lg overflow-hidden my-3 shadow-sm border border-[#C8B598]">
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
                                               <div className="bg-[#F9F6F0] p-1.5 rounded-full shadow-sm text-indigo-600 shrink-0">
                                                 <MessageCircle size={18} />
                                               </div>
                                               <h6 className="text-indigo-900 font-bold text-sm m-0">{content}</h6>
                                             </div>
                                           );
                                         }
                                         return <h6 key={dIdx} className="text-[#4A3018] font-bold text-sm mt-4 mb-2 pb-1 border-b border-[#C8B598]">{content}</h6>;
                                      }
                                      if (detail.type === 'checklist') {
                                         return (
                                           <div key={dIdx} className="bg-emerald-50/80 border border-emerald-100 rounded-lg p-4 my-3">
                                             <ul className="space-y-3">
                                               {detail.items.map((li, liIdx) => (
                                                 <li key={liIdx} className="flex items-start gap-3 text-sm text-[#795548]">
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
                                           <ul key={dIdx} className="list-disc list-inside text-[#795548] text-sm space-y-1 pl-2">
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

                    <h2 id="section-collectibles" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       三、全收集品位置
                    </h2>
                    
                    <div className="flex flex-wrap gap-3 mt-2 mb-6 text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded">
                        <MapPin size={12} /> 长颈兽: 6
                      </span>
                      <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded">
                        <Hammer size={12} /> 大坩埚: 6
                      </span>
                      <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded">
                        <Landmark size={12} /> 遗迹: 9
                      </span>
                      <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded">
                        <Box size={12} /> 黑盒子: 12
                      </span>
                      <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded">
                        <Radio size={12} /> 无人机: 10
                      </span>
                      <span className="flex items-center gap-1 bg-[#EBE3D5] px-2 py-1 rounded">
                        <Eye size={12} /> 观景点: 9
                      </span>
                    </div>
                    
                    <div className="space-y-8 mb-12">
                      {['tallnecks', 'cauldrons', 'relic-ruins', 'black-boxes', 'survey-drones', 'vista-points'].map((typeId, typeIdx) => {
                         const sectionData = horizonForbiddenWestGuideData.find(c => c.id === typeId);
                         if (!sectionData) return null;
                         const idSuffix = ['tallnecks', 'cauldrons', 'relics', 'black-boxes', 'survey-drones', 'vista-points'][typeIdx];
                         return (
                           <div key={typeId} id={`section-collectibles-${idSuffix}`} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#C8B598]">
                             <h4 className="text-lg font-bold text-[#3E2723] mb-3 flex items-center gap-2">
                               <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]"></span>
                               {sectionData.title}
                             </h4>
                             <div className="space-y-3">
                               {sectionData.sections.map((section, secIdx) => (
                                 <div key={secIdx} className="space-y-3">
                                   {section.title && <h5 className="font-bold text-[#4A3018] border-l-4 border-[#8B4513] pl-2">{section.title}</h5>}
                                   {section.content.map((item, itemIdx) => {
                                      if (item.type === 'header') {
                                        const content = item.content || item.name || item.title || '';
                                        // Check for Conversation/Dialogue
                                        if (content.includes('交谈') || content.includes('对话') || content.includes('Talk') || content.includes('Speak')) {
                                          return (
                                            <div key={itemIdx} className="bg-indigo-50 border border-indigo-100 p-3 my-4 rounded-lg flex items-center gap-3 shadow-sm">
                                              <div className="bg-[#F9F6F0] p-1.5 rounded-full shadow-sm text-indigo-600 shrink-0">
                                                <MessageCircle size={18} />
                                              </div>
                                              <h6 className="text-indigo-900 font-bold text-sm m-0">{content}</h6>
                                            </div>
                                          );
                                        }
                                        return <h6 key={itemIdx} className="text-[#3E2723] font-bold text-sm mt-4 mb-1">{content}</h6>;
                                      }
                                      if (item.type === 'text') {
                                        const content = item.content || item.text;
                                        // Check for Boss Tip
                                        if (content.includes('Boss战提示') || content.includes('Boss Battle Tip')) {
                                           return (
                                             <div key={itemIdx} className="bg-[#8B4513]/30 border-l-4 border-red-500 p-4 my-4 rounded-r-lg shadow-sm">
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
                                             <div key={itemIdx} className="bg-slate-100 border-l-4 border-slate-400 p-4 my-3 rounded-r-lg flex items-start gap-3 shadow-sm group hover:bg-slate-250 transition-colors">
                                                <div className="bg-[#F9F6F0] p-1.5 rounded-md shadow-sm border border-slate-250 shrink-0 mt-0.5 group-hover:border-slate-300 transition-colors">
                                                  <Gamepad2 size={18} className="text-slate-600" />
                                                </div>
                                                <div className="text-slate-700 text-sm leading-relaxed m-0 font-medium" dangerouslySetInnerHTML={{__html: content}}></div>
                                             </div>
                                           );
                                        }

                                        return <p key={itemIdx} className="text-[#795548] text-sm leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: content }} />;
                                      }
                                      return (
                                     <div key={itemIdx} className="bg-[#F9F6F0] p-4 rounded border border-[#C8B598] shadow-sm hover:border-[#8B4513] transition-colors">
                                       {item.name && <h5 className="text-[#3E2723] font-bold text-sm mb-1">{item.name}</h5>}
                                       <p className="text-[#795548] text-sm leading-relaxed m-0">{item.text || item.description}</p>
                                     </div>
                                   )})}
                                 </div>
                               ))}
                             </div>
                           </div>
                         );
                      })}
                    </div>

                    <h2 id="section-dlc" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       四、炙炎海岸 DLC
                    </h2>
                    <div className="space-y-8 mb-12">
                      {horizonForbiddenWestGuideData.find(c => c.id === 'dlc')?.sections?.map((section, idx) => (
                        <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#C8B598]">
                          <h4 className="text-lg font-bold text-[#3E2723] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]"></span>
                            {section.title}
                          </h4>
                          
                          <div className="space-y-3">
                            {section.content.map((item, itemIdx) => (
                              <div key={itemIdx} id={item.id} className="bg-[#F9F6F0] p-4 rounded border border-[#C8B598] shadow-sm hover:border-[#8B4513] transition-colors scroll-mt-[125px]">
                                {item.name && <h5 className="text-[#3E2723] font-bold text-sm mb-1">{item.name}</h5>}
                                <p className="text-[#795548] text-sm leading-relaxed m-0">{item.text || item.description}</p>
                                {item.details && (
                                  <div className="mt-4 space-y-4 border-t pt-4 border-[#C8B598]">
                                    {item.details.map((detail, dIdx) => {
                                      if (detail.type === 'text') {
                                         // Check for Boss Tip
                                         if (detail.content.includes('Boss战提示') || detail.content.includes('Boss Battle Tip')) {
                                            return (
                                              <div key={dIdx} className="bg-[#8B4513]/30 border-l-4 border-red-500 p-4 my-4 rounded-r-lg shadow-sm">
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
                                              <div key={dIdx} className="bg-slate-100 border-l-4 border-slate-400 p-4 my-3 rounded-r-lg flex items-start gap-3 shadow-sm group hover:bg-slate-250 transition-colors">
                                                 <div className="bg-[#F9F6F0] p-1.5 rounded-md shadow-sm border border-slate-250 shrink-0 mt-0.5 group-hover:border-slate-300 transition-colors">
                                                   <Gamepad2 size={18} className="text-slate-600" />
                                                 </div>
                                                 <div className="text-slate-700 text-sm leading-relaxed m-0 font-medium" dangerouslySetInnerHTML={{__html: detail.content}}></div>
                                              </div>
                                            );
                                         }

                                         return <p key={dIdx} className="text-[#795548] text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: detail.content}}></p>;
                                      }
                                      if (detail.type === 'image') {
                                         return (
                                           <div key={dIdx} className="rounded-lg overflow-hidden my-3 shadow-sm border border-[#C8B598]">
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
                                               <div className="bg-[#F9F6F0] p-1.5 rounded-full shadow-sm text-indigo-600 shrink-0">
                                                 <MessageCircle size={18} />
                                               </div>
                                               <h6 className="text-indigo-900 font-bold text-sm m-0">{content}</h6>
                                             </div>
                                           );
                                         }
                                         return <h6 key={dIdx} className="text-[#4A3018] font-bold text-sm mt-4 mb-2 pb-1 border-b border-[#C8B598]">{content}</h6>;
                                      }
                                      if (detail.type === 'checklist') {
                                         return (
                                           <div key={dIdx} className="bg-emerald-50/80 border border-emerald-100 rounded-lg p-4 my-3">
                                             <ul className="space-y-3">
                                               {detail.items.map((li, liIdx) => (
                                                 <li key={liIdx} className="flex items-start gap-3 text-sm text-[#795548]">
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
                                           <ul key={dIdx} className="list-disc list-inside text-[#795548] text-sm space-y-1 pl-2">
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

                    <h2 id="section-trophies" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       五、白金奖杯指南
                    </h2>
                    <div className="space-y-6 mt-8 mb-12">
                      {horizonForbiddenWestGuideData.find(c => c.id === 'trophies')?.sections?.map((section, idx) => (
                        <div key={idx} className="bg-[#1a1a1a] p-5 rounded-lg border border-[#C8B598]">
                          <h4 className="text-lg font-bold text-[#3E2723] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]"></span>
                            {section.title}
                          </h4>
                          <div className="space-y-3">
                            {section.content.map((item, itemIdx) => (
                              <div key={itemIdx} className="bg-[#F9F6F0] p-4 rounded border border-[#C8B598] shadow-sm hover:border-[#8B4513] transition-colors">
                                 <h5 className="text-[#3E2723] font-bold text-sm mb-1">{item.name}</h5>
                                 <p className="text-[#795548] text-sm leading-relaxed m-0">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                   <h2 id="section-trophy-list" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                      <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                      六、查看全奖杯列表
                   </h2>
                   <div className="my-8 text-[#f1f1f1]">
                     <p className="mb-6 text-[#f1f1f1] font-medium">
                       本作包含 59 个奖杯。点击下方按钮查看完整的中文奖杯列表与获取攻略。
                     </p>
                     <Link 
                      to="/horizon-forbidden-west/trophies"
                      className="block w-full text-center py-4 bg-[#F9F6F0] border-2 border-[#3E2723] text-[#3E2723] font-bold uppercase tracking-widest text-sm hover:bg-[#3E2723] hover:text-[#F9F6F0] transition-all rounded-sm shadow-sm hover:shadow-[0_0_15px_rgba(139,69,19,0.3)]"
                    >
                      查看全奖杯列表
                   </Link>
                  </div>
                   
                   <hr className="my-12 border-[#C8B598]" />
                  </div>
                 </>
               ) : game.slug === 'the-witcher-3' ? (
                 <>
                   {/* The Witcher 3 Specific Content */}
                   <div className="mb-12">
                     <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                        {/* Cover Image & Purchase */}
                       <div className="w-full md:w-[365px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                         
                         {/* Purchase Card */}
                         <div className="bg-[#F9F6F0] rounded-xl shadow-sm border border-[#C8B598] p-5">
                           <h3 className="font-bold text-[#3E2723] mb-4 text-sm flex items-center gap-2">
                             <span>🛍️</span> 购买游戏
                           </h3>
                           
                           <div className="flex flex-col gap-4">
                             <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#C8B598] bg-[#F9F6F0] mb-2">
                               <img src={game.imgUrl} alt="The Witcher 3 Cover" className="absolute inset-0 w-full h-full object-cover p-1" />
                             </div>

                             <div className="flex items-center justify-between">
                               <div className="flex flex-col">
                                 <span className="text-2xl font-bold text-[#8B4513]">HK$ 308.00</span>
                               </div>
                             </div>

                             <a 
                               href="https://store.playstation.com/zh-hant-hk/product/EP4497-PPSA05701_00-0000000000000004" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="w-full py-3 bg-[#7b0a0a] text-[#f1f1f1] font-bold rounded-sm text-sm hover:bg-[#5a0000] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,0,0,0.5)] group uppercase tracking-widest uncharted4-font-title text-xl"
                             >
                               <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                               <span>前往 PS Store 购买</span>
                             </a>
                           </div>
                         </div>
                       </div>
                        
                        {/* Basic Info Table */}
                        <div className="flex-1 flex flex-col">
                          <div className="bg-[#F9F6F0] rounded-xl shadow-sm border border-[#C8B598] p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between border-b border-[#C8B598] pb-4 mb-4">
                              <h3 className="text-xl font-bold text-[#3E2723] flex items-center gap-2">
                               <span className="text-2xl">📋</span> 游戏档案
                             </h3>
                            </div>
                            
                            <div className="flex-1 grid grid-cols-1 content-center gap-1">
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🏢</span> 开发商</span>
                                <span className="font-semibold text-[#3E2723]">CD PROJEKT RED</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📦</span> 发行商</span>
                                <span className="font-semibold text-[#3E2723]">CD PROJEKT RED</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">📅</span> 发售日期</span>
                                <span className="font-semibold text-[#3E2723]">2515-05-19 (PS5版 2522-12-14)</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🎯</span> 游戏类型</span>
                                <span className="font-semibold text-[#3E2723]">动作角色扮演 / 开放世界</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">🕹️</span> 对应平台</span>
                                <span className="font-semibold text-[#3E2723]">PS5 / PS4 / PC / Xbox / Switch</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors border-b border-[#C8B598]/50 last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">💰</span> 参考价格</span>
                                <span className="font-bold text-[#8B4513] text-base">HK$ 308.00</span>
                              </div>
                              <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors last:border-0">
                                <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm"><span className="w-5 text-center">⭐</span> 媒体评分</span>
                                <span className="font-bold text-green-600">92/100 (Metacritic)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>

                    <h2 id="section-intro" className="text-2xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#f1f1f1]">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                       📖 游戏简介
                    </h2>
                    <p className="lead text-[17px] text-[#4A3018] leading-relaxed mb-8">
                      《巫师 3：狂猎》（The Witcher 3: Wild Hunt）是一款由CD PROJEKT RED开发并发行的一款角色扮演游戏。玩家将扮演职业怪物杀手“白狼”杰洛特，在一个庞大且充满道德模糊选择的开放世界中，寻找被称为“预言之子”的养女希里。游戏以其深刻的叙事、复杂的角色和引人入胜的世界构建而闻名。
                    </p>

                    <div className="space-y-12 mb-12">
                      
                      {/* Core Features */}
                      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#C8B598]">
                         <h3 className="text-xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                           <span className="text-2xl">🌟</span> 核心特色
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="bg-[#F9F6F0] p-4 rounded-lg shadow-sm border border-[#C8B598]">
                             <div className="text-3xl mb-3">🗺️</div>
                             <h4 className="font-bold text-[#3E2723] mb-2">庞大的奇幻开放世界</h4>
                             <p className="text-sm text-[#795548]">探索饱受战火蹂躏的威伦、繁华的自由之城诺维格瑞以及史凯利杰群岛的严寒地带。</p>
                           </div>
                           <div className="bg-[#F9F6F0] p-4 rounded-lg shadow-sm border border-[#C8B598]">
                             <div className="text-3xl mb-3">⚔️</div>
                             <h4 className="font-bold text-[#3E2723] mb-2">专业的怪物猎人</h4>
                             <p className="text-sm text-[#795548]">利用各种升级的武器、变种药剂、战斗法印以及陷阱，猎杀各种奇异的怪物。</p>
                           </div>
                           <div className="bg-[#F9F6F0] p-4 rounded-lg shadow-sm border border-[#C8B598]">
                             <div className="text-3xl mb-3">⚖️</div>
                             <h4 className="font-bold text-[#3E2723] mb-2">道德模糊的选择</h4>
                             <p className="text-sm text-[#795548]">每一个选择都有其后果。你的决定将影响故事的走向、角色的命运甚至整个世界的格局。</p>
                           </div>
                           <div className="bg-[#F9F6F0] p-4 rounded-lg shadow-sm border border-[#C8B598]">
                             <div className="text-3xl mb-3">🃏</div>
                             <h4 className="font-bold text-[#3E2723] mb-2">昆特牌</h4>
                             <p className="text-sm text-[#795548]">内置了一款极具深度的卡牌游戏，收集卡牌、构建卡组，在酒馆中与全大陆的对手一决高下。</p>
                           </div>
                         </div>
                      </div>

                      {/* Media Ratings */}
                      <div>
                        <h3 className="text-xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                           <span className="text-2xl">🏆</span> 媒体评分
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div className="bg-[#8B4513] text-[#F9F6F0] p-6 rounded-xl shadow-[0_0_15px_rgba(139,69,19,0.3)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-90">IGN</span>
                             <span className="text-5xl font-black mb-4">9.3<span className="text-2xl opacity-70">/10</span></span>
                             <p className="text-xs leading-relaxed opacity-90">"《巫师3》规模宏大且细节丰富，标志着RPG游戏的一个新高度。"</p>
                           </div>
                           <div className="bg-[#ffcc00] text-[#f1f1f1] p-6 rounded-xl shadow-[0_0_15px_rgba(139,69,19,0.3)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-70">GameSpot</span>
                             <span className="text-5xl font-black mb-4">10<span className="text-2xl opacity-50">/10</span></span>
                             <p className="text-xs leading-relaxed opacity-80">"在这个美丽的世界上，每一步探索都充满了意义。"</p>
                           </div>
                           <div className="bg-[#5D4037] text-[#F9F6F0] p-6 rounded-xl shadow-[0_0_15px_rgba(139,69,19,0.3)] flex flex-col items-center text-center">
                             <span className="font-bold text-lg mb-2 opacity-90">Metacritic</span>
                             <span className="text-5xl font-black mb-4 bg-green-600 px-3 py-1 rounded">92</span>
                             <p className="text-xs leading-relaxed opacity-90">"普遍好评 (Universal Acclaim) - 世代最佳RPG之一"</p>
                           </div>
                        </div>
                      </div>

                      {/* Official Screenshots */}
                      <div>
                        <h3 className="text-xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                           <span className="text-2xl">📸</span> 官方游戏截图
                        </h3>
                        <div className="space-y-8 mb-10">
                           <figure>
                             <img 
                               src={game.imgUrl} 
                               alt="The Witcher 3 Gameplay" 
                               className="w-full rounded-lg shadow-[0_0_15px_rgba(139,69,19,0.3)]" 
                             />
                             <figcaption className="text-center text-sm text-gray-400 mt-2">
                               杰洛特的猎魔之旅 | 来源: CD PROJEKT RED 官方
                             </figcaption>
                           </figure>
                        </div>
                      </div>
                    </div>

                    {/* Guide Content */}
                    <div className="bg-gradient-to-r from-stone-900 to-slate-800 rounded-xl p-8 my-12 relative overflow-hidden shadow-[0_0_25px_rgba(139,0,0,0.1)] border border-stone-700">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600"></div>
                      <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                         <Skull size={160} className="text-[#F9F6F0]" />
                      </div>
                      <div className="relative z-10">
                        <h4 id="section-intro" className="font-bold mb-4 text-red-500 flex items-center gap-3 text-lg tracking-wide uppercase">
                           <span className="bg-[#8B4513]/300/25 p-2 rounded-lg"><BookOpen size={25} className="text-red-500" /></span> 
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
                           <h2 id={`section-${chapter.id}`} className="text-2xl md:text-3xl font-bold text-[#3E2723] m-0 flex items-center gap-3">
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
                             <div key={idx} className="bg-[#F9F6F0] p-6 rounded-xl border border-[#C8B598] shadow-sm hover:shadow-[0_0_15px_rgba(139,69,19,0.3)] transition-shadow relative overflow-hidden group">
                               {/* Decorative accent */}
                               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-250 to-transparent group-hover:from-red-500 transition-colors"></div>
                               
                               <h4 id={`section-${chapter.id}-${section.id}`} className="text-lg font-bold text-[#3E2723] mb-5 flex items-center gap-3 scroll-mt-[100px]">
                                 <div className={`p-2 rounded-lg ${bgClass}`}>
                                   <Icon size={18} className={colorClass} />
                                 </div>
                                 {section.title}
                               </h4>
                               
                               <div className="space-y-3 pl-2 border-l-2 border-[#C8B598] ml-4">
                                 {section.content.map((item, itemIdx) => {
                                    // Highlight key terms in text
                                    const formattedText = item.text
                                      .replace(/杰洛特/g, '<span class="font-bold text-[#3E2723]">杰洛特</span>')
                                      .replace(/希里/g, '<span class="font-bold text-[#3E2723]">希里</span>')
                                      .replace(/叶奈法/g, '<span class="font-bold text-[#3E2723]">叶奈法</span>')
                                      .replace(/特莉丝/g, '<span class="font-bold text-[#3E2723]">特莉丝</span>')
                                      .replace(/阿尔德|亚克席|伊格尼|昆恩|亚登/g, '<span class="font-bold text-purple-600">$&</span>')
                                      .replace(/银剑|钢剑|十字弓/g, '<span class="font-bold text-slate-700">$&</span>');

                                    return (
                                     <div key={itemIdx} className="bg-[#1a1a1a]/50 p-3 rounded-lg hover:bg-[#8B4513]/10 transition-colors">
                                       <p 
                                         className="text-[#795548] text-[14.5px] leading-relaxed m-0"
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
                        <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🏆 查看全奖杯列表 (Trophy List)
                     </h2>
                     <div className="my-8 text-[#f1f1f1]">
                       <p className="mb-6 text-[#f1f1f1] font-medium">
                         本作包含丰富的成就系统与收集挑战。点击下方按钮查看完整的中文奖杯列表与获取攻略。
                       </p>
                       <Link 
                        to="/the-witcher-3/trophies"
                        className="block w-full text-center py-4 bg-[#F9F6F0] border-2 border-[#3E2723] text-[#3E2723] font-bold uppercase tracking-widest text-sm hover:bg-[#3E2723] hover:text-[#F9F6F0] transition-all rounded-sm shadow-sm hover:shadow-[0_0_15px_rgba(139,69,19,0.3)]"
                      >
                        查看全奖杯列表
                     </Link>
                    </div>

                    <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                       <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                       推荐阅读的其他攻略
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      {recommendedGames.map((item, index) => (
                        <Link 
                          key={index} 
                          to={`/${item.slug || item.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-\u4e00-\u9fa5]+/g, '').replace(/--+/g, '-')}`}
                          className="group block bg-[#0d0d0d] rounded-sm overflow-hidden border border-[#331111]/60 shadow-sm hover:shadow-[0_0_15px_rgba(139,69,19,0.3)] transition-all border border-[#C8B598]"
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
                            <h3 className="font-bold text-[#3E2723] group-hover:text-[#8B4513] transition-colors truncate">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">{item.author}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                     <hr className="my-12 border-[#C8B598]" />
                  </div>
                 </>
               ) : (
                 // Generic content for other games
                 <>
                   <p className="lead text-[18px] text-[#f1f1f1] mb-10 font-serif italic pl-2 border-l-4 border-[#C8B598]">
                     {game.description}
                   </p>
               
               <h2 id="section-intro" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                  前言
               </h2>
               <p>
                 欢迎来到《{game.title}》的完整图文攻略。作为 {game.author} 的最新力作，本作在 {game.volume} 平台上展现了惊人的次世代画面与游戏性。无论你是初次接触该系列的萌新，还是想要挑战白金奖杯的老手，本攻略都将为你提供详尽的指引。
               </p>
               <p>
                 本篇攻略旨在以最清晰、直观的方式，带领大家领略这款游戏的魅力。我们会深入解析每一个关卡的设计思路，剖析敌人的行动模式，并给出最优的通关策略。
               </p>
               
               <div className="bg-[#140a0a] border border-[#331111] rounded-lg p-6 my-10 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#8B4513]"></div>
                 <h4 className="font-bold mb-3 text-[#8B4513] flex items-center gap-2 text-base">
                    <span>💡</span> 攻略导读
                 </h4>
                 <p className="text-[15px] text-[#f1f1f1] m-0 leading-relaxed">
                   本攻略将按照游戏章节顺序进行编写，包含所有收集品位置、BOSS战打法以及奖杯解锁条件。请善用右侧目录进行快速跳转。如果你在游戏中遇到了卡关的情况，不妨先查看相关的章节攻略。
                 </p>
               </div>

               <h2 id="section-2" className="text-2xl mt-12 mb-6 group cursor-pointer">
                  <span className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  一、游戏基础与操作指南
               </h2>
               <p>
                 在开始冒险之前，我们需要熟悉游戏的基本操作与系统机制。本作引入了全新的动态天气系统与光线追踪技术，不仅提升了视觉效果，也对战斗产生了一定影响。
               </p>
               
               <h3 id="section-2-1" className="text-xl mt-8 mb-4 font-bold text-[#4A3018]">1.1 战斗系统详解</h3>
               <p>
                 战斗是本作的核心体验之一。你需要掌握闪避、格挡与反击的时机。特别是针对精英敌人，盲目的攻击只会让你陷入险境。观察敌人的出招前摇，利用环境优势，才是取胜的关键。
               </p>

               <figure className="my-10">
                 <img src={game.imgUrl} alt="Gameplay" className="w-full rounded-lg shadow-[0_0_15px_rgba(139,69,19,0.3)]" />
                 <figcaption className="text-center text-sm text-gray-400 mt-3 font-medium flex items-center justify-center gap-2">
                    <span className="w-8 h-[1px] bg-gray-250"></span>
                    游戏实机战斗画面演示
                    <span className="w-8 h-[1px] bg-gray-250"></span>
                 </figcaption>
               </figure>

               <h2 id="section-2" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                  二、全流程图文攻略
               </h2>
               <h3 id="section-3-1" className="text-xl mt-8 mb-4 font-bold text-[#4A3018]">第一章：{game.title} 的序幕</h3>
               <p>
                 故事开始于一个风雨交加的夜晚。主角醒来时，发现自己身处陌生的环境。这里我们需要跟随教程指引，完成基本的移动与交互操作。注意路边的发光物体，那通常是补给品或收集要素。
               </p>
               <p>
                 随着剧情的推进，我们将遇到第一个挑战...（此处为攻略正文占位符）
               </p>
               
               <h2 id="section-3" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
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
               
               <h2 id="section-4" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#8B4513] uncharted4-font-title border-b border-[#331111]/80 pb-2">
                  四、白金奖杯获取指南
               </h2>
               
               {game.slug === 'uncharted-4' ? (
                 <div className="my-8 text-[#f1f1f1]">
                   <p className="mb-6 text-[#f1f1f1] font-medium">
                     本作包含大量奖杯挑战，为了方便查阅，我们将详细的奖杯获取指南整理在单独的页面中。点击下方按钮查看完整的白金攻略、绝地难度挑战以及 多人对战模式奖杯。
                   </p>
                   <Link 
                    to="/uncharted-4/trophies"
                    className="block w-full text-center py-4 bg-[#F9F6F0] border-2 border-[#3E2723] text-[#3E2723] font-bold uppercase tracking-widest text-sm hover:bg-[#3E2723] hover:text-[#F9F6F0] transition-all rounded-sm shadow-sm hover:shadow-[0_0_15px_rgba(139,69,19,0.3)]"
                  >
                    查看全奖杯列表
                  </Link>
                 </div>
               ) : (
                 <p>
                   想要获得白金奖杯，你需要完成所有主线任务、收集所有要素，并达成特定的战斗挑战。部分奖杯具有一定难度，建议在二周目继承存档后尝试。
                 </p>
               )}

               <hr className="my-12 border-[#C8B598]" />
               </>
             )}
             </div>
          </article>
          
          {/* Sidebar */}
          <aside className="w-[300px] hidden lg:block shrink-0 space-y-6 sticky top-[100px] h-fit self-start uncharted4-font-title relative z-10">
             {/* Author Card */}
             <div className="bg-[#F9F6F0] rounded-lg p-6 shadow-[0_0_20px_rgba(139,69,19,0.2)] border border-[#C8B598] hover:shadow-[0_0_20px_rgba(139,69,19,0.2)]-hover transition-all group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C8B598] group-hover:ring-2 group-hover:ring-[#a31515]/25 transition-all">
                   <img src={game.slug === 'uncharted-4' ? game.imgUrl : game.imgUrl} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-base text-[#3E2723] truncate">{game.author}</h3>
                   <p className="text-xs text-gray-400 font-medium truncate">知名游戏开发商</p>
                 </div>
               </div>
               <a 
                 href={game.slug === 'horizon-forbidden-west' ? "https://www.guerrilla-games.com/" : "https://www.naughtydog.com/"}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-2 bg-[#F9F6F0] border border-[#8B4513] text-[#8B4513] font-bold rounded-full text-sm hover:bg-[#8B4513] hover:text-[#F9F6F0] transition-all flex items-center justify-center gap-2 shadow-sm"
               >
                  <span>打开官网</span>
               </a>
             </div>

             {/* TOC */}
              <div className="bg-[#F9F6F0] rounded-lg p-6 shadow-[0_0_20px_rgba(139,69,19,0.2)] border border-[#C8B598] sticky top-4 flex flex-col max-h-[calc(100vh-2rem)]">
                <h3 className="font-bold text-[#3E2723] mb-4 pl-1 text-[15px] flex items-center justify-between shrink-0">
                  目录
                  <span className="text-xs font-bold text-[#F9F6F0] bg-[#8B4513] px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                </h3>
                
                <nav className="space-y-1 relative pr-2 flex-1 overflow-y-auto custom-scrollbar">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#EBE3D5]"></div>
                 
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
                               ? 'text-[#8B4513] font-bold bg-[#8B4513]/30/80 border-[#8B4513] shadow-sm' 
                               : 'text-gray-500 hover:text-[#8B4513] hover:bg-[#8B4513]/10 border-transparent hover:border-[#C8B598] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors z-25 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-[#8B4513] hover:bg-red-100' 
                                 : 'text-gray-400 hover:text-[#795548] hover:bg-[#EBE3D5]'}`}
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
                                             ? 'text-[#8B4513] font-bold bg-[#a31515]/10 border-[#8B4513]' 
                                             : 'text-gray-500 hover:text-[#8B4513] hover:bg-[#8B4513]/10 border-transparent hover:border-[#C8B598]'}
                                         `}
                                       >
                                         {child.title}
                                       </a>
                                       {child.children && child.children.length > 0 && (
                                            <button
                                                onClick={(e) => toggleSection(e, child.id, !isChildExpanded)}
                                                className={`absolute right-1 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-gray-250 text-gray-400 z-25 transition-transform ${isChildExpanded ? 'rotate-180' : ''}`}
                                            >
                                                <ChevronDown size={14} />
                                            </button>
                                       )}
                                   </div>

                                   {/* Grandchildren (Level 3) */}
                                   {child.children && child.children.length > 0 && isChildExpanded && (
                                       <div className="space-y-1 mt-1 ml-4 border-l border-[#C8B598]">
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
                                                               ? 'text-[#8B4513] font-bold border-[#8B4513] bg-[#8B4513]/30/30'
                                                               : 'text-gray-500 hover:text-[#8B4513] border-transparent hover:border-[#C8B598]'}
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
       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-[#F9F6F0]/95 backdrop-blur-md border border-[#C8B598] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full z-40 lg:hidden px-6 py-3 flex items-center justify-between">
         <div className="flex items-center gap-8">
           <button 
             onClick={() => setIsShareOpen(true)}
             className="flex flex-col items-center justify-center text-[#795548] hover:text-[#f1f1f1] transition-colors"
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
                 className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-[#795548] hover:text-[#f1f1f1]'}`}
               />
               <span className="absolute -top-2 -right-3 text-[10px] font-bold text-yellow-500 leading-none">
                 {likes > 99 ? '99+' : likes}
               </span>
             </div>
           </button>
         </div>
         <button 
           onClick={() => setIsTocOpen(true)}
           className="flex items-center justify-center text-[#795548] hover:text-[#f1f1f1] transition-colors"
         >
           <svg xmlns="http://www.w3.org/2500/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
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
           <div className="relative bg-[#F9F6F0] w-full max-h-[80vh] rounded-t-2xl shadow-xl flex flex-col animate-slide-up">
             {/* Handle */}
             <div className="flex justify-center pt-3 pb-2 cursor-pointer" onClick={() => setIsTocOpen(false)}>
               <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
             </div>
             
             {/* Header */}
             <div className="px-6 pb-4 border-b border-[#C8B598] flex items-center justify-between">
               <h3 className="font-bold text-[#3E2723] text-lg flex items-center gap-2">
                 <BookOpen size={18} className="text-[#8B4513]" />
                 目录
               </h3>
               <div className="flex items-center gap-3">
                 <span className="text-xs font-bold text-[#F9F6F0] bg-[#8B4513] px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                 <button onClick={() => setIsTocOpen(false)} className="text-gray-400 hover:text-[#795548]">
                   <X size={25} />
                 </button>
               </div>
             </div>
             
             {/* TOC Content */}
             <div className="overflow-y-auto p-4 pb-12 custom-scrollbar">
               <nav className="space-y-1 relative pr-2 flex-1">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#EBE3D5]"></div>
                 
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
                               ? 'text-[#8B4513] font-bold bg-[#8B4513]/30/80 border-[#8B4513] shadow-sm' 
                               : 'text-gray-500 hover:text-[#8B4513] hover:bg-[#8B4513]/10 border-transparent hover:border-[#C8B598] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md transition-colors z-25 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-[#8B4513] hover:bg-red-100' 
                                 : 'text-gray-400 hover:text-[#795548] hover:bg-[#EBE3D5]'}`}
                           >
                             {isExpanded ? <ChevronDown size={25} /> : <ChevronRight size={25} />}
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
                                             ? 'text-[#8B4513] font-bold bg-[#a31515]/10 border-[#8B4513]' 
                                             : 'text-gray-500 hover:text-[#8B4513] hover:bg-[#8B4513]/10 border-transparent hover:border-[#C8B598]'}
                                         `}
                                       >
                                         {child.title}
                                       </a>
                                       {child.children && child.children.length > 0 && (
                                            <button
                                                onClick={(e) => toggleSection(e, child.id, !isChildExpanded)}
                                                className={`absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-gray-250 text-gray-400 z-25 transition-transform ${isChildExpanded ? 'rotate-180' : ''}`}
                                            >
                                                <ChevronDown size={25} />
                                            </button>
                                       )}
                                   </div>

                                   {/* Grandchildren (Level 3) */}
                                   {child.children && child.children.length > 0 && isChildExpanded && (
                                       <div className="space-y-1 mt-1 ml-4 border-l border-[#C8B598]">
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
                                                               ? 'text-[#8B4513] font-bold border-[#8B4513] bg-[#8B4513]/30/30'
                                                               : 'text-gray-500 hover:text-[#8B4513] border-transparent hover:border-[#C8B598]'}
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
             <div className="bg-[#F9F6F0] rounded-t-2xl p-4 shadow-sm relative">
               <button 
                 onClick={() => setIsShareOpen(false)} 
                 className="absolute top-4 right-4 text-gray-400 hover:text-[#795548]"
               >
                 <X size={24} />
               </button>
               
               <div className="flex items-center gap-3 pr-10">
                 <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#C8B598] shadow-sm shrink-0">
                   <img src={game?.imgUrl || game.imgUrl} alt={`${game?.title || 'Game'} Cover`} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-[#3E2723] text-[15px] truncate">
                     {game?.title || '神秘海域4：盗贼末路'} 终极攻略指南
                   </h3>
                   <p className="text-gray-500 text-xs truncate mt-0.5">
                     {getShareUrl()}
                   </p>
                 </div>
               </div>
             </div>
             
             {/* Share Options键 Grid */}
             <div className="p-6">
               <div className="grid grid-cols-4 gap-y-6 gap-x-4 mb-6">
                 {/* Row 1 */}
                 <button 
                   onClick={handleWechatShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#F9F6F0] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="36" height="36" className="text-[#07C160]" fill="currentColor">
                       <path d="M8.2,16.5C3.7,16.5,0,13.2,0,9.1C0,5.1,4.1,1.8,8.8,1.8c4.6,0,8.4,3.3,8.4,7.4C17.2,13.2,13.2,16.5,8.2,16.5z M5.4,6.1 c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1C6.4,6.5,5.9,6.1,5.4,6.1z M11.5,6.1c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1 c0.6,0,1-0.5,1-1C12.6,6.5,12.1,6.1,11.5,6.1z"/>
                       <path d="M24,13.6c0-3.3-3.2-5.9-7.1-5.9c-0.3,0-0.6,0-0.9,0.1c0.8,0.8,1.2,1.8,1.2,2.8c0,3.7-3.4,6.6-7.5,6.6 c-0.5,0-0.9-0.1-1.4-0.2c1.1,2.5,4.3,4.2,7.7,4.2C25.4,21.1,24,17.7,24,13.6z M15.1,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C15.9,11.7,15.6,11.3,15.1,11.3z M19.9,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C25.7,11.7,25.3,11.3,19.9,11.3z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-[#795548]">微信</span>
                 </button>
                 <button 
                   onClick={handleWechatShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#F9F6F0] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <div className="relative w-8 h-8 rounded-full border-[3px] border-[#07C160] border-t-[#FCBE22] border-r-[#FCBE22] rotate-45 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#FA5151]"></div>
                     </div>
                   </div>
                   <span className="text-[11px] text-[#795548]">朋友圈</span>
                 </button>
                 <button 
                   onClick={handleWeiboShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#F9F6F0] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="36" height="36" className="text-[#E6162D]" fill="currentColor">
                       <path d="M21.2,10.6c-0.7-1.4-2.1-2.4-3.6-2.6c-0.3-0.1-0.6-0.1-1-0.1c0.2-0.5,0.3-1,0.3-1.6c0-1.8-1.5-3.3-3.3-3.3 c-1.2,0-2.3,0.7-2.9,1.7c-0.3-0.3-0.8-0.5-1.2-0.5c-1,0-1.9,0.8-1.9,1.9c0,0.3,0.1,0.6,0.2,0.9C7.4,6.7,7,6.6,6.5,6.6 c-2.4,0-4.3,2-4.3,4.4c0,1,0.3,1.9,0.9,2.6c-0.5,0.7-0.7,1.5-0.7,2.4c0,2.4,2,4.4,4.4,4.4c1.1,0,2.1-0.4,2.9-1 c0.8,0.7,1.9,1.2,3.1,1.2c2.7,0,4.9-2.2,4.9-4.9c0-0.4-0.1-0.8-0.2-1.2C25.1,14,21.8,12.5,21.2,10.6z M17.6,15.7 c-0.6,1.4-1.9,2.4-3.4,2.7c-1.3,0.3-2.6,0-3.6-0.6c-0.4-0.2-0.8-0.5-1.1-0.8c-0.4,0.4-1,0.6-1.6,0.6c-1.4,0-2.6-1.1-2.6-2.6 c0-0.7,0.3-1.4,0.8-1.8c0.2-0.2,0.5-0.4,0.8-0.5C5.8,11.9,5,10.5,5,8.9c0-1.8,1.5-3.3,3.3-3.3c1,0,1.8,0.4,2.5,1.1 c0.3-0.5,0.8-0.8,1.4-0.8c0.9,0,1.6,0.7,1.6,1.6c0,0.2-0.1,0.4-0.2,0.6C14.7,7.8,15.6,8.8,15.6,10c0,0.5-0.1,0.9-0.3,1.3 c1.5-0.1,2.8,0.8,3.3,2.1C19.1,14.3,18.5,15.2,17.6,15.7z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-[#795548]">微博</span>
                 </button>
                 <div className="hidden sm:block"></div> {/* Spacer for alignment if needed, or 4th item */}
                 
                 {/* Row 2 */}
                 <button 
                   onClick={handleSaveImage}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#F9F6F0] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#4A3018]">
                     <svg xmlns="http://www.w3.org/2500/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                   </div>
                   <span className="text-[11px] text-[#795548]">保存图片</span>
                 </button>
                 <button 
                   onClick={handleCopyLink}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#F9F6F0] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#4A3018] relative">
                     {copySuccess ? (
                       <span className="text-green-500 font-bold text-sm">已复制</span>
                     ) : (
                       <svg xmlns="http://www.w3.org/2500/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                     )}
                   </div>
                   <span className="text-[11px] text-[#795548]">复制链接</span>
                 </button>
                 <button 
                   onClick={handleSystemShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#F9F6F0] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#4A3018]">
                     <svg xmlns="http://www.w3.org/2500/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                   </div>
                   <span className="text-[11px] text-[#795548]">系统分享</span>
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
