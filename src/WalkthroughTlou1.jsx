import { useParams, Link } from 'react-router-dom';
import { booksData, categoryOptions } from './data';
import { tlou1GuideData } from './data/tlou1-guide';
import { useState, useEffect, useMemo } from 'react';
import { Search, Heart, Share2, Bookmark, ChevronDown, ChevronRight, BookOpen, X, ShoppingCart, ExternalLink, ScrollText, Disc, Hammer, Lock, ShieldAlert, Award, Book, Wrench, DoorOpen, MessageCircle, Smile, List } from 'lucide-react';
import Footer from './components/Footer';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import tlou2Banner from '../picture/page1-game-walkthrough/tlou1/the-last-of-us-part-i-keyart-01-en-18may22.webp';
import tlou2Ps5Cover from '../picture/page1-game-walkthrough/tlou1/The-Last-of-Us-Part-1.jpeg';
import naughtyDogLogo from '../picture/page1-game-walkthrough/tlou2/NaughtyDog_64x64.png';
import logo from '../picture/logo.svg';
import tlou2StealthShot from '../picture/page1-game-walkthrough/tlou2/tips-for-playing-as-ellie-with-the-stalkers-in-the-office-v0-mg9m8ug9t4cd1.webp';
import tlou2ResourcesShot from '../picture/page1-game-walkthrough/tlou2/tlou2-resources.jpg';
import tlou2EllieSeattle from '../picture/page1-game-walkthrough/tlou2/Ellie-in-seattle.jpeg';
import tlou1GameplayShot from '../picture/page1-game-walkthrough/tlou1/everything-we-know-about-the-last-of-us-game-overview-3840x2160-a4e85248c353.jpg';
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
import Tlou2TrophyList from './components/Tlou2TrophyList';
import './App.css';

// TOC Data structure
const tocItems = [
  { id: 'section-intro', title: '前言与导读', level: 1 },
  { id: 'section-1', title: '1. 基础操作与生存技巧', level: 1 },
  { id: 'section-1-1', title: '1.1 战斗技巧', level: 2 },
  { id: 'section-1-2', title: '1.2 探索技巧', level: 2 },
  { id: 'section-2', title: '2. 全章节流程攻略', level: 1 },
  { id: 'section-2-1', title: '2.1 家乡 (Hometown)', level: 2 },
  { id: 'section-2-2', title: '2.2 隔离区 (The Quarantine Zone)', level: 2 },
  { id: 'section-2-3', title: '2.3 外围 (The Outskirts)', level: 2 },
  { id: 'section-2-4', title: '2.4 比尔的小镇 (Bill\'s Town)', level: 2 },
  { id: 'section-2-5', title: '2.5 匹兹堡 (Pittsburgh)', level: 2 },
  { id: 'section-2-6', title: '2.6 郊区 (The Suburbs)', level: 2 },
  { id: 'section-2-7', title: '2.7 汤米的水坝 (Tommy\'s Dam)', level: 2 },
  { id: 'section-2-8', title: '2.8 大学 (The University)', level: 2 },
  { id: 'section-2-9', title: '2.9 湖畔度假村 (Lakeside Resort)', level: 2 },
  { id: 'section-2-10', title: '2.10 公共汽车站 (Bus Depot)', level: 2 },
  { id: 'section-2-11', title: '2.11 火萤实验室 (The Firefly Lab)', level: 2 },
  { id: 'section-2-12', title: '2.12 杰克逊 (Jackson)', level: 2 },
  { id: 'section-3', title: '3. 保险箱与密码全解', level: 1 },
  { id: 'section-trophy-list', title: '4. 查看全奖杯列表', level: 1 },
];

export default function WalkthroughTlou1() {
  const { slug: paramSlug } = useParams();
  const slug = paramSlug || 'the-last-of-us-part-1';
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
    const savedLikes = localStorage.getItem(`tlou1-likes-${slug}`);
    const hasLiked = localStorage.getItem(`tlou1-has-liked-${slug}`);
    
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    } else {
      // Default starting likes
      setLikes(45);
    }
    
    if (hasLiked === 'true') {
      setIsLiked(true);
    }
  }, [slug]);

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);
    
    localStorage.setItem(`tlou1-likes-${slug}`, newLikes.toString());
    localStorage.setItem(`tlou1-has-liked-${slug}`, (!isLiked).toString());
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
    const title = encodeURIComponent(`最后生还者 第一部 终极攻略指南 ${url}`);
    window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${title}`, '_blank');
    setIsShareOpen(false);
  };

  const handleSystemShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '最后生还者 第一部 终极攻略指南',
          text: '来看看这篇超详细的《最后生还者 第一部》攻略指南！',
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
    
    // Explicitly find TLOU2
    const tlou2 = booksData.find(b => b.slug === 'the-last-of-us-part-2' || b.title === '最后生还者 2');
    
    // Get other random games, excluding current game and TLOU2
    const otherGames = booksData
      .filter(b => b.title !== game.title && b.slug !== 'the-last-of-us-part-2' && b.title !== '最后生还者 2')
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
      
    // Return TLOU2 + 2 others, or just 3 others if TLOU2 not found
    return tlou2 ? [tlou2, ...otherGames] : otherGames.slice(0, 3);
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
        {stats.artifacts > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><ScrollText size={12} /> 文物: {stats.artifacts}</span>}
        {stats.tradingCards > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><Disc size={12} /> 卡牌: {stats.tradingCards}</span>}
        {stats.coins > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><Disc size={12} /> 硬币: {stats.coins}</span>}
        {stats.journalEntries > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><BookOpen size={12} /> 日志: {stats.journalEntries}</span>}
        {stats.workbenches > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><Hammer size={12} /> 工作台: {stats.workbenches}</span>}
        {stats.safes > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><Lock size={12} /> 保险箱: {stats.safes}</span>}
        {stats.trainingManuals > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><BookOpen size={12} /> 手册: {stats.trainingManuals}</span>}
        {stats.weapons > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><ShieldAlert size={12} /> 武器: {stats.weapons}</span>}
        {/* TLOU1 Specific */}
        {stats.pendants > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><Award size={12} /> 挂坠: {stats.pendants}</span>}
        {stats.comics > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><Book size={12} /> 漫画: {stats.comics}</span>}
        {stats.tools > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><Wrench size={12} /> 工具: {stats.tools}</span>}
        {stats.shivDoors > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><DoorOpen size={12} /> 弹簧刀门: {stats.shivDoors}</span>}
        {stats.conversations > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><MessageCircle size={12} /> 对话: {stats.conversations}</span>}
        {stats.jokes > 0 && <span className="flex items-center gap-1 bg-[#20241f] px-2 py-1 rounded"><Smile size={12} /> 笑话: {stats.jokes}</span>}
      </div>
    );
  };

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sspai-bg text-sspai-gray">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-sspai-text">404</h1>
          <p>未找到该游戏的攻略信息</p>
          <a href="/" className="mt-4 inline-block text-[#8da37c] hover:underline font-medium">返回首页</a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#080908] tlou-spore-bg font-sans text-gray-200 selection:bg-black selection:text-[#fdfbf7]"
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
          <article className="flex-1 min-w-0 bg-[#121411] rounded-sm border border-[#3b4d3c]/40 shadow-[0_0_50px_rgba(20,30,20,0.6)] p-8 md:p-12 md:pb-16 transition-shadow text-[#e5e7eb] relative z-10">
             {/* Banner */}
             <div className="w-full aspect-[2/1] rounded-sm overflow-hidden mb-8 shadow-inner bg-[#20241f] relative group border border-[#3b4d3c]/50">
               <div className="tlou-particles"></div>
               <img 
                 src={game.slug === 'the-last-of-us-part-2' ? tlou2Banner : game.imgUrl} 
                 alt={game.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
 
             </div>
             
             {/* Title */}
             <h1 className="text-4xl md:text-[50px] font-bold mb-6 leading-[1.2] text-[#d4e0c8] tracking-widest tlou-font-title drop-shadow-md">
               {game.title} 完整图文攻略
               <span className="block text-xl md:text-2xl text-[#8da37c] mt-3 font-normal tlou-font-grunge opacity-80">ENDURE AND SURVIVE</span>
             </h1>
             
             {/* Meta */}
             <div className="flex items-center justify-between mb-10 pb-8 border-b border-[#2d332b]">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-[#2d332b] shadow-sm cursor-pointer hover:ring-2 hover:ring-[#8da37c]/20 transition-all">
                   <img src={naughtyDogLogo} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-[15px] text-[#e5e7eb] hover:text-[#8da37c] cursor-pointer transition-colors">{game.author}</span>
                     <span className="px-1.5 py-[1px] bg-[#20241f] text-gray-500 text-[10px] font-bold rounded uppercase tracking-wider">官方</span>
                   </div>
                   <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-3 font-medium">
                    <span>{game.date || '2026年02月26日'}</span>
                    <span>阅读 15分钟</span>
                  </div>
                 </div>
               </div>
               
             </div>
             
             {/* Content Body */}
             <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#e5e7eb] prose-headings:tracking-tight prose-p:text-[#e5e7eb] prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-[#8da37c] prose-a:no-underline prose-a:border-b prose-a:border-[#4b5945]/30 hover:prose-a:border-[#4b5945] hover:prose-a:bg-[#8da37c]/10 prose-a:transition-all prose-img:rounded-lg prose-img:shadow-sm prose-blockquote:border-l-4 prose-blockquote:border-[#4b5945] prose-blockquote:bg-[#1a1d19] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-[#e5e7eb] prose-li:text-[#e5e7eb] prose-strong:text-[#e5e7eb] prose-strong:font-bold">
               
                 <>
                   {/* TLOU2 Specific Content - Optimized Layout */}
                    <div className="mb-12">
                      <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                         {/* Cover Image & Purchase */}
                        <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                          
                          {/* Purchase Card */}
                          <div className="bg-[#151714] rounded-xl shadow-sm border border-[#363d34] p-5">
                            <h3 className="font-bold text-[#d1d5db] mb-4 text-sm flex items-center gap-2">
                              <span>🛍️</span> 购买游戏
                            </h3>
                            
                            <div className="flex flex-col gap-4">
                              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#2d332b] bg-[#151714] mb-2">
                                <img src={tlou2Ps5Cover} alt="PS5 Official Disc Cover" className="absolute inset-0 w-full h-full object-contain p-1" />
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                  <span className="text-xs text-gray-400 line-through">HK$ 568.00</span>
                                  <span className="text-2xl font-bold text-[#8da37c]">HK$ 398.00</span>
                                </div>
                                <span className="px-2.5 py-1 bg-[#4b5945]/30 text-[#8da37c] text-xs font-bold rounded">-30%</span>
                              </div>

                              <a 
                                href="https://www.playstation.com/zh-hant-hk/games/the-last-of-us-part-i/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-[#4b5945] text-[#e5e7eb] font-bold rounded-sm text-sm hover:bg-[#3b4736] transition-all flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(75,89,69,0.4)] group uppercase tracking-widest tlou-font-title text-xl"
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
                           <div className="bg-[#151714] rounded-xl shadow-sm border border-[#363d34] p-6 flex flex-col h-full">
                             <div className="flex items-center justify-between border-b border-[#2d332b] pb-4 mb-4">
                               <h3 className="text-xl font-bold text-[#d1d5db] flex items-center gap-2">
                                <span className="text-2xl">📋</span> 游戏档案
                              </h3>
                             </div>
                             
                             <div className="flex-1 grid grid-cols-1 content-center gap-1">
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1d19] transition-colors border-b border-[#2d332b]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🏢</span> 开发商
                                 </span>
                                 <span className="font-semibold text-[#d1d5db]">顽皮狗 (Naughty Dog)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1d19] transition-colors border-b border-[#2d332b]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📦</span> 发行商
                                 </span>
                                 <span className="font-semibold text-[#d1d5db]">索尼互动娱乐 (SIE)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1d19] transition-colors border-b border-[#2d332b]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📅</span> 发售日期
                                 </span>
                                 <span className="font-semibold text-[#d1d5db]">2022-09-02 (PS5)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1d19] transition-colors border-b border-[#2d332b]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🎯</span> 游戏类型
                                 </span>
                                 <span className="font-semibold text-[#d1d5db]">动作冒险 / 生存恐怖</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1d19] transition-colors border-b border-[#2d332b]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🕹️</span> 对应平台
                                 </span>
                                 <span className="font-semibold text-[#d1d5db]">PS5 / PC</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1d19] transition-colors border-b border-[#2d332b]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">👥</span> 游玩人数
                                 </span>
                                 <span className="font-semibold text-[#d1d5db]">1人</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1d19] transition-colors border-b border-[#2d332b]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">💰</span> 参考价格
                                 </span>
                                 <span className="font-bold text-[#8da37c] text-base">HK$ 568.00</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1d19] transition-colors border-b border-[#2d332b]/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🌐</span> 语言支持
                                 </span>
                                 <span className="font-semibold text-[#d1d5db] text-right max-w-[50%] leading-tight">简繁中字 / 英文语音</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1d19] transition-colors last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">⭐</span> 年龄分级
                                 </span>
                                 <div className="flex items-center gap-2">
                                   <span className="px-1.5 py-0.5 border border-[#4b5448] rounded text-[10px] font-bold text-gray-500">ESRB M</span>
                                   <span className="font-semibold text-[#d1d5db]">17+ / 18+</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                      </div>

                     <h2 className="text-3xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2">
                        <span className="text-[#8da37c] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                        📖 游戏简介
                     </h2>
                     <p className="lead text-[17px] text-[#c2c6bf] leading-relaxed mb-8">
                       《最后生还者 第一部》（The Last of Us Part I）是由顽皮狗（Naughty Dog）工作室开发，索尼互动娱乐发行的动作冒险游戏。故事发生在一种致命真菌爆发导致文明崩溃的20年后，饱经风霜的幸存者乔尔受雇将14岁的少女艾莉偷运出军事隔离区。这就开始了一场穿越残酷的后末日美国的令人心碎的旅程。
                       <br/><br/>
                       作为经典神作的完全重制版，本作利用PS5的强大性能对画面进行了彻底翻新，并改进了探索与战斗机制。游戏包含备受赞誉的单人前传章节《Left Behind》，讲述了改变艾莉和挚友莱利一生的事件。这是一部关于生存、忠诚与爱的深刻史诗。
                     </p>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2">
                    <span className="text-[#8da37c] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                    参考信息
                 </h2>
                 <div className="bg-[#1a1d19] p-6 rounded-lg border border-[#2d332b] mb-12">
                   <p className="text-[#a1a59f] mb-3">
                     本攻略参考了 Steam 社区的优秀指南，原文链接如下：
                   </p>
                   <a 
                     href="https://steamcommunity.com/sharedfiles/filedetails/?id=2953942660" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-[#8da37c] hover:text-[#b4cca0] underline break-all"
                   >
                     In Chapter Order 100% Achievement Walkthrough Guide: The Last of Us Part 1
                   </a>
                 </div>

                 <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2">
                        <span className="text-[#8da37c] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎯 核心特色
                     </h2>
                     <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#181a17] p-5 rounded-sm border-l-4 border-l-[#5a6b4d] border-y border-r border-[#262b24] shadow-inner">
                          <h4 className="font-bold text-lg mb-2 text-[#8da37c]">重制版画面升级</h4>
                          <p className="text-sm text-[#9ba099] m-0">
                            从零开始完全重制。利用 PS5 引擎技术，带来更逼真的光影效果、更精细的角色建模以及无缝的探索体验。
                          </p>
                        </div>
                        <div className="bg-[#181a17] p-5 rounded-sm border-l-4 border-l-[#5a6b4d] border-y border-r border-[#262b24] shadow-inner">
                          <h4 className="font-bold text-lg mb-2 text-[#8da37c]">改进的游戏机制</h4>
                          <p className="text-sm text-[#9ba099] m-0">
                            引入了《最后生还者 2》的现代战斗系统和辅助功能。更智能的敌方 AI、改进的近战与潜行机制，让经典体验焕发新生。
                          </p>
                        </div>
                        <div className="bg-[#181a17] p-5 rounded-sm border-l-4 border-l-[#5a6b4d] border-y border-r border-[#262b24] shadow-inner">
                          <h4 className="font-bold text-lg mb-2 text-[#8da37c]">包含 Left Behind</h4>
                          <p className="text-sm text-[#9ba099] m-0">
                            完整收录备受赞誉的前传章节《Left Behind》。深入了解艾莉的过去，以及她与挚友莱利之间改变一生的羁绊。
                          </p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2 flex items-center gap-2">
                        <span className="text-[#8da37c] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        <span className="text-2xl">🏆</span> 媒体评分
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#bf1313] text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-90">IGN</span>
                          <span className="text-5xl font-black mb-4">9<span className="text-2xl opacity-70">/10</span></span>
                          <p className="text-xs leading-relaxed opacity-90">"华丽的重制，让这部杰作在各个方面都达到了现代标准。"</p>
                        </div>
                        <div className="bg-[#ffcc00] text-[#e5e7eb] p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-70">GameSpot</span>
                          <span className="text-5xl font-black mb-4">8<span className="text-2xl opacity-50">/10</span></span>
                          <p className="text-xs leading-relaxed opacity-80">"视觉效果惊人，但核心玩法的改动相对保守。"</p>
                        </div>
                        <div className="bg-[#333333] text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-90">Metacritic</span>
                          <span className="text-5xl font-black mb-4 bg-green-600 px-3 py-1 rounded">88</span>
                          <p className="text-xs leading-relaxed opacity-90">"尽管是旧作重制，但它是体验这个经典故事的最佳方式。"</p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2">
                        <span className="text-[#8da37c] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎬 官方游戏截图
                     </h2>
                     <div className="space-y-8 mb-10">
                        <figure>
                          <img src={tlou1GameplayShot} alt="The Last of Us Part I Gameplay" className="w-full rounded-lg shadow-md" />
                          <figcaption className="text-center text-sm text-gray-400 mt-2">乔尔与艾莉的旅程 | 来源: PlayStation 官方</figcaption>
                        </figure>

                     </div>

                     
                     <div className="text-xs text-gray-400 border-t border-[#2d332b] pt-4">
                       📌 数据更新于：2026-02-27 | 以上信息汇总自 PlayStation 官网及多家权威媒体，请以官方最新公告为准。
                     </div>
                   </div>
                   
                   <div className="bg-[#181a17] border border-[#2d332b] rounded-lg p-6 my-10 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-[#4b5945]"></div>
                     <h4 className="font-bold mb-3 text-[#8da37c] flex items-center gap-2 text-base">
                        <span>💡</span> 通用技巧
                     </h4>
                     <div className="text-[15px] text-[#e5e7eb] m-0 leading-relaxed space-y-4">
                       <p className="font-medium text-[#d1d5db] mb-4">
                         《最后生还者 第一部》本体包含 <strong>225</strong> 个收集品和 <strong>21</strong> 个相关奖杯，所有这些都可以在一周目内完成。全收集白金大约需要 <strong>21.5</strong> 小时。
                       </p>

                       <div className="bg-[#151714] p-4 rounded border border-[#363d34] shadow-sm hover:border-[#4b5448] transition-colors">
                         <strong className="block mb-1 text-[#d1d5db]">⚠️ 关于难度选择</strong>
                         <p className="m-0 text-[#9ba099] text-sm">重制版没有与难度相关的奖杯，如果你想轻松体验剧情，完全可以选择最低难度。<strong>警告：</strong>不建议首周目直接挑战“绝地 (Grounded)”难度。在最高难度下资源极其匮乏，你可能会因为缺少制作弹簧刀的材料而错过“弹簧刀门”及里面的收集品，导致不得不通过章节选择重新游玩。</p>
                       </div>

                       <div className="bg-[#151714] p-4 rounded border border-[#363d34] shadow-sm hover:border-[#4b5448] transition-colors">
                         <strong className="block mb-1 text-[#d1d5db]">✔ 辅助功能神器 (Accessibility)</strong>
                         <p className="m-0 text-[#9ba099] text-sm">本作拥有出色的辅助功能。强烈推荐在设置中开启<strong>“高对比度显示”</strong>。开启后，游戏会将不可互动的环境显示为灰色，而将可交互物品（如收集品、物资）高亮显示。这对发现树上的挂坠等隐蔽物品非常有帮助。</p>
                       </div>
                       
                       <div className="bg-[#151714] p-4 rounded border border-[#363d34] shadow-sm hover:border-[#4b5448] transition-colors">
                         <strong className="block mb-1 text-[#d1d5db]">✔ 节省弹簧刀 (Save Your Shivs)</strong>
                         <p className="m-0 text-[#9ba099] text-sm">尽量不要在战斗中浪费弹簧刀！游戏中有很多需要弹簧刀开启的门（尤其是匹兹堡区域）。请务必保留弹簧刀用于开启这些门，或者保留刀片用于升级 5 种不同的近战武器，以解锁“Build em up, Break em down”奖杯。</p>
                       </div>

                       <div className="bg-[#151714] p-4 rounded border border-[#363d34] shadow-sm hover:border-[#4b5448] transition-colors">
                         <strong className="block mb-1 text-[#d1d5db]">✔ 武器升级策略 (Combat Ready)</strong>
                         <p className="m-0 text-[#9ba099] text-sm">游戏过程中你会收集到零件。“Combat ready”奖杯要求完全升级一把武器。最容易完成的是<strong>左轮手枪</strong>，当然你可以自由选择。注意：难度越低，捡到的零件越多。虽然在最高难度下也能完成，但低难度会更轻松。</p>
                       </div>

                       <div className="bg-[#151714] p-4 rounded border border-[#363d34] shadow-sm hover:border-[#4b5448] transition-colors">
                         <strong className="block mb-1 text-[#d1d5db]">✔ 全道具制作 (Geared Up)</strong>
                         <p className="m-0 text-[#9ba099] text-sm">“Geared up”奖杯要求你制作所有 6 种物品：<strong>医疗包、燃烧瓶、弹簧刀、钉子炸弹、烟雾弹、近战升级</strong>。即使你像我一样不喜欢用烟雾弹，也请记得在游戏中至少制作一次。</p>
                       </div>
                     </div>
                   </div>
                   
                  <h2 id="section-1" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2">
                     一、基础操作与生存技巧
                  </h2>
                  <p>
                    本作核心是潜行与资源管理。作为《最后生还者》的重制版，虽然画面和辅助功能向二代看齐，但核心战斗机制依然保留了初代的特色——你需要更谨慎地规划行动，因为乔尔无法像艾莉那样灵活地闪避或趴下。
                  </p>
                  
                  {/* REPLACED CONTENT START */}
                  <h3 id="section-1-1" className="text-xl mt-8 mb-4 font-bold text-[#c2c6bf]">1.1 战斗技巧</h3>
                  <p>
                    重制版改进了敌人的 AI，使战斗更具挑战性。合理利用有限的资源是生存的关键。
                  </p>
                  
                  <div className="space-y-12 my-8">
                    {/* Item 1 */}
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-[#d1d5db]">潜行至上</h4>
                       <p className="text-[#9ba099] leading-relaxed">
                         在大多数情况下，潜行通过或暗杀敌人是比正面硬刚更好的选择。利用聆听模式（R1）观察敌人动向，从背后通过绞杀（三角键）或使用弹簧刀（对付循声者）无声解决敌人。
                       </p>
                    </div>

                    {/* Item 2 */}
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-[#d1d5db]">利用环境与投掷物</h4>
                       <p className="text-[#9ba099] leading-relaxed">
                         场景中散落的砖块和酒瓶是你的好帮手。投掷它们可以引开敌人的注意力，或者直接砸向敌人使其眩晕，随后衔接近战攻击一击必杀。
                       </p>
                       <figure className="my-4">
                           <img src={tlou2BrickShot} alt="环境互动" className="w-full rounded-lg shadow-sm" />
                           <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                             利用投掷物控制战局（图示为二代，机制通用）
                           </figcaption>
                        </figure>
                    </div>

                    {/* Item 3 */}
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-[#d1d5db]">制作与资源管理</h4>
                       <p className="text-[#9ba099] leading-relaxed">
                         时刻保持医疗包、燃烧瓶和炸弹的库存。注意，制作这些物品是实时的，不会暂停游戏，所以请在战斗前或掩体后进行制作。
                       </p>
                       <figure className="my-4">
                          <img src={tlou2CraftShot} alt="制作与资源" className="w-full rounded-lg shadow-sm" />
                          <figcaption className="text-center text-sm text-gray-400 mt-2 font-medium">
                            合理规划资源使用
                          </figcaption>
                       </figure>
                    </div>
                  </div>

                  <h3 id="section-1-2" className="text-xl mt-8 mb-4 font-bold text-[#c2c6bf]">1.2 探索技巧</h3>
                   <div className="space-y-12 my-8">
                     {/* Item 1 */}
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-[#d1d5db]">彻底搜刮</h4>
                        <p className="text-[#9ba099] leading-relaxed">
                          不要放过任何一个角落。抽屉、柜子、废弃的车辆中都可能藏有弹药、零件或升级药丸。收集零件可以升级武器，药丸可以强化乔尔的能力。
                        </p>
                     </div>
 
                     {/* Item 2 */}
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-[#d1d5db]">弹簧刀门 (Shiv Doors)</h4>
                        <p className="text-[#9ba099] leading-relaxed">
                          游戏中有些上锁的门需要消耗一把完整的弹簧刀才能打开。这些房间内通常含有大量的物资、收集品或高级武器。务必随时保留一把弹簧刀以备不时之需。
                        </p>
                     </div>
 
                     {/* Item 3 */}
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-[#d1d5db]">辅助功能</h4>
                        <p className="text-[#9ba099] leading-relaxed">
                          重制版引入了强大的辅助功能。开启「强化聆听模式」和「高对比度显示」可以帮助你快速发现场景中的可互动道具和收集品，极大提升探索效率，强烈推荐开启。
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

                  <h2 id="section-2" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2">
                     <span className="text-[#8da37c] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     二、全章节流程攻略
                  </h2>
                  <p>
                    本作流程分为多个章节，从波士顿隔离区开始，横跨美国大陆。以下是主要章节的流程概览与收集品指引。
                  </p>
                  
                  {[
                    { id: 'hometown', title: '2.1 家乡 (Hometown)', sectionId: 'section-2-1' },
                    { id: 'quarantine-zone', title: '2.2 隔离区 (The Quarantine Zone)', sectionId: 'section-2-2' },
                    { id: 'the-outskirts', title: '2.3 外围 (The Outskirts)', sectionId: 'section-2-3' },
                    { id: 'bills-town', title: '2.4 比尔的小镇 (Bill\'s Town)', sectionId: 'section-2-4' },
                    { id: 'pittsburgh', title: '2.5 匹兹堡 (Pittsburgh)', sectionId: 'section-2-5' },
                    { id: 'the-suburbs', title: '2.6 郊区 (The Suburbs)', sectionId: 'section-2-6' },
                    { id: 'tommys-dam', title: '2.7 汤米的水坝 (Tommy\'s Dam)', sectionId: 'section-2-7' },
                    { id: 'the-university', title: '2.8 大学 (The University)', sectionId: 'section-2-8' },
                    { id: 'lakeside-resort', title: '2.9 湖畔度假村 (Lakeside Resort)', sectionId: 'section-2-9' },
                    { id: 'bus-depot', title: '2.10 公共汽车站 (Bus Depot)', sectionId: 'section-2-10' },
                    { id: 'the-firefly-lab', title: '2.11 火萤实验室 (The Firefly Lab)', sectionId: 'section-2-11' },
                    { id: 'jackson', title: '2.12 杰克逊 (Jackson)', sectionId: 'section-2-12' },
                  ].map(chapter => (
                    <div key={chapter.id}>
                      <h3 id={chapter.sectionId} className="text-xl mt-8 mb-4 font-bold text-[#c2c6bf]">{chapter.title}</h3>
                      <div className="space-y-6 mt-8 mb-12">
                        {tlou1GuideData.find(c => c.id === chapter.id)?.sections.map((section, idx) => (
                          <div key={idx} className="bg-[#1a1d19] p-5 rounded-lg border border-[#2d332b]">
                            <h4 className="text-lg font-bold text-[#d1d5db] mb-3 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4b5945]"></span>
                              {section.title}
                            </h4>
                            {renderStats(section.stats)}
                            
                            <div className="space-y-3">
                              {section.content.map((item, itemIdx) => (
                                <div key={itemIdx} className="bg-[#151714] p-4 rounded border border-[#363d34] shadow-sm hover:border-[#4b5448] transition-colors">
                                  {item.type === 'collectible' ? (
                                    <div className="flex gap-3">
                                      <div className="mt-1 min-w-[16px] flex justify-center">
                                        <div className="w-2 h-2 rounded-full bg-[#4b5945] mt-1.5 ring-2 ring-red-50"></div>
                                      </div>
                                      <div>
                                        {item.name && <h5 className="text-[#d1d5db] font-bold text-sm mb-1">{item.name}</h5>}
                                        <p className="text-[#9ba099] text-sm leading-relaxed m-0">{item.description}</p>
                                      </div>
                                    </div>
                                  ) : (
                                     <p className="text-[#a1a59f] text-sm leading-relaxed m-0 pl-2 border-l-2 border-[#363d34] ml-1 py-1">{item.text}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <h2 id="section-3" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2">
                     <span className="text-[#8da37c] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     三、保险箱与密码全解
                  </h2>
                  <p>
                    游戏中许多物资被锁在保险箱内，密码通常藏在附近的文档或环境细节中。以下是全保险箱密码一览。
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-[#151714] rounded-sm overflow-hidden border border-[#3b4d3c]/40 shadow-sm border border-[#363d34]">
                      <thead className="bg-[#1a1d19] text-[#a1a59f] text-sm uppercase">
                        <tr>
                          <th className="px-4 py-2 border-b font-bold">章节 / 位置</th>
                          <th className="px-4 py-2 border-b font-bold">密码</th>
                          <th className="px-4 py-2 border-b font-bold">提示来源</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        <tr><td className="px-4 py-2 font-bold" colSpan="3">外围 (The Outskirts)</td></tr>
                        <tr><td className="px-4 py-2">市中心 (Downtown)</td><td className="px-4 py-2 font-mono font-bold text-[#8da37c]">03-43-78</td><td className="px-4 py-2">地铁站左侧商店内</td></tr>
                        
                        <tr><td className="px-4 py-2 font-bold" colSpan="3">比尔的小镇 (Bill's Town)</td></tr>
                        <tr><td className="px-4 py-2">森林 (The Woods)</td><td className="px-4 py-2 font-mono font-bold text-[#8da37c]">05-17-21</td><td className="px-4 py-2">主街道卡车旁</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">匹兹堡 (Pittsburgh)</td></tr>
                        <tr><td className="px-4 py-2">酒店大堂 (Hotel Lobby)</td><td className="px-4 py-2 font-mono font-bold text-[#8da37c]">22-10-56</td><td className="px-4 py-2">大堂右侧办公室</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">郊区 (The Suburbs)</td></tr>
                        <tr><td className="px-4 py-2">郊区 (Suburbs)</td><td className="px-4 py-2 font-mono font-bold text-[#8da37c]">08-21-36</td><td className="px-4 py-2">二楼卧室衣柜</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 id="section-trophy-list" className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2">
                     <span className="text-[#8da37c] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     四、查看全奖杯列表
                  </h2>
                  <div className="my-8 text-[#e5e7eb]">
                    <p className="mb-6 text-[#e5e7eb] font-medium">
                      需要逐章节图文路线或奖杯筛选列表，请前往专属奖杯页面查看。
                    </p>
                    <Link 
                     to="/the-last-of-us-part-1/trophies"
                     className="block w-full text-center py-4 bg-[#151714] border-2 border-gray-900 text-[#d1d5db] font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all rounded-sm shadow-sm hover:shadow-md"
                   >
                     查看全奖杯列表
                  </Link>
                 </div>

                 <h2 className="text-3xl mt-12 mb-6 group cursor-pointer text-[#a5b894] tlou-font-title border-b border-[#3b4d3c]/50 pb-2">
                    <span className="text-[#8da37c] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                    更多精彩内容
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                   {recommendedGames.map((item, index) => (
                     <Link 
                       key={index} 
                       to={`/${item.slug || item.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-\u4e00-\u9fa5]+/g, '').replace(/\-\-+/g, '-')}`}
                       className="group block bg-[#151714] rounded-sm overflow-hidden border border-[#3b4d3c]/40 shadow-sm hover:shadow-md transition-all border border-[#2d332b]"
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
                         <h3 className="font-bold text-[#d1d5db] group-hover:text-[#8da37c] transition-colors truncate">
                           {item.title}
                         </h3>
                         <p className="text-xs text-gray-500 mt-1">{item.author}</p>
                       </div>
                     </Link>
                   ))}
                 </div>
                  
                  <hr className="my-12 border-[#2d332b]" />
                 </>
             </div>
          </article>
          
          {/* Sidebar */}
          <aside className="w-[300px] hidden lg:block shrink-0 space-y-6 sticky top-[100px] h-fit self-start tlou-font-title relative z-10">
             {/* Author Card */}
             <div className="bg-[#151714] rounded-lg p-6 shadow-[0_0_40px_rgba(40,50,40,0.4)] border border-[#2d332b] hover:shadow-[0_0_40px_rgba(40,50,40,0.4)]-hover transition-all group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-[#2d332b] group-hover:ring-2 group-hover:ring-[#8da37c]/20 transition-all">
                   <img src={naughtyDogLogo} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-base text-[#d1d5db] truncate">{game.author}</h3>
                   <p className="text-xs text-gray-400 font-medium truncate">知名游戏开发商</p>
                 </div>
               </div>
               <a 
                 href="https://www.naughtydog.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-2 bg-[#151714] border border-[#4b5945] text-[#8da37c] font-bold rounded-full text-sm hover:bg-[#4b5945] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
               >
                  <span>打开官网</span>
               </a>
             </div>

             {/* TOC */}
              <div className="bg-[#151714] rounded-lg p-6 shadow-[0_0_40px_rgba(40,50,40,0.4)] border border-[#2d332b] sticky top-4 flex flex-col">
                <h3 className="font-bold text-[#d1d5db] mb-4 pl-1 text-[15px] flex items-center justify-between shrink-0">
                  目录
                  <span className="text-xs font-bold text-white bg-[#4b5945] px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                </h3>
                
                <nav className="space-y-1 relative pr-2 flex-1">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#20241f]"></div>
                 
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
                               ? 'text-[#8da37c] font-bold bg-[#4b5945]/30/80 border-[#4b5945] shadow-sm' 
                               : 'text-gray-500 hover:text-[#8da37c] hover:bg-[#1a1d19] border-transparent hover:border-[#363d34] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors z-20 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-[#8da37c] hover:bg-red-100' 
                                 : 'text-gray-400 hover:text-[#9ba099] hover:bg-[#20241f]'}`}
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
                             return (
                               <a 
                                 key={child.id}
                                 href={`#${child.id}`}
                                 onClick={(e) => scrollToSection(e, child.id)}
                                 className={`
                                   block py-1.5 pr-3 transition-all relative z-10 rounded-r border-l-[3px] pl-9 text-[13px]
                                   ${isCurrentChildActive 
                                     ? 'text-[#8da37c] font-bold bg-[#8da37c]/10 border-[#4b5945]' 
                                     : 'text-gray-500 hover:text-[#8da37c] hover:bg-[#1a1d19] border-transparent hover:border-[#363d34]'}
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
       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-[#151714]/95 backdrop-blur-md border border-[#363d34] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full z-40 lg:hidden px-6 py-3 flex items-center justify-between">
         <div className="flex items-center gap-8">
           <button 
             onClick={() => setIsShareOpen(true)}
             className="flex flex-col items-center justify-center text-[#a1a59f] hover:text-[#e5e7eb] transition-colors"
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
                 className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-[#a1a59f] hover:text-[#e5e7eb]'}`}
               />
               <span className="absolute -top-2 -right-3 text-[10px] font-bold text-yellow-500 leading-none">
                 {likes > 99 ? '99+' : likes}
               </span>
             </div>
           </button>
         </div>
         <button 
           onClick={() => setIsTocOpen(true)}
           className="flex items-center justify-center text-[#a1a59f] hover:text-[#e5e7eb] transition-colors"
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
           <div className="relative bg-[#151714] w-full max-h-[80vh] rounded-t-2xl shadow-xl flex flex-col animate-slide-up">
             {/* Handle */}
             <div className="flex justify-center pt-3 pb-2 cursor-pointer" onClick={() => setIsTocOpen(false)}>
               <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
             </div>
             
             {/* Header */}
             <div className="px-6 pb-4 border-b border-[#2d332b] flex items-center justify-between">
               <h3 className="font-bold text-[#d1d5db] text-lg flex items-center gap-2">
                 <BookOpen size={18} className="text-[#8da37c]" />
                 目录
               </h3>
               <div className="flex items-center gap-3">
                 <span className="text-xs font-bold text-white bg-[#4b5945] px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                 <button onClick={() => setIsTocOpen(false)} className="text-gray-400 hover:text-[#9ba099]">
                   <X size={20} />
                 </button>
               </div>
             </div>
             
             {/* TOC Content */}
             <div className="overflow-y-auto p-4 pb-12 custom-scrollbar">
               <nav className="space-y-1 relative pr-2 flex-1">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#20241f]"></div>
                 
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
                               ? 'text-[#8da37c] font-bold bg-[#4b5945]/30/80 border-[#4b5945] shadow-sm' 
                               : 'text-gray-500 hover:text-[#8da37c] hover:bg-[#1a1d19] border-transparent hover:border-[#363d34] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md transition-colors z-20 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-[#8da37c] hover:bg-red-100' 
                                 : 'text-gray-400 hover:text-[#9ba099] hover:bg-[#20241f]'}`}
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
                                     ? 'text-[#8da37c] font-bold bg-[#8da37c]/10 border-[#4b5945]' 
                                     : 'text-gray-500 hover:text-[#8da37c] hover:bg-[#1a1d19] border-transparent hover:border-[#363d34]'}
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
           <div className="relative bg-[#1a1d19] w-full rounded-t-2xl shadow-xl flex flex-col animate-slide-up pb-safe">
             {/* Header Card */}
             <div className="bg-[#151714] rounded-t-2xl p-4 shadow-sm relative">
               <button 
                 onClick={() => setIsShareOpen(false)} 
                 className="absolute top-4 right-4 text-gray-400 hover:text-[#9ba099]"
               >
                 <X size={24} />
               </button>
               
               <div className="flex items-center gap-3 pr-10">
                 <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#2d332b] shadow-sm shrink-0">
                   <img src={tlou2Ps5Cover} alt="The Last of Us Part I Cover" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-[#d1d5db] text-[15px] truncate">
                     最后生还者 第一部 终极攻略指南
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
                   <div className="w-14 h-14 rounded-2xl bg-[#151714] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#07C160]" fill="currentColor">
                       <path d="M8.2,16.5C3.7,16.5,0,13.2,0,9.1C0,5.1,4.1,1.8,8.8,1.8c4.6,0,8.4,3.3,8.4,7.4C17.2,13.2,13.2,16.5,8.2,16.5z M5.4,6.1 c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1C6.4,6.5,5.9,6.1,5.4,6.1z M11.5,6.1c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1 c0.6,0,1-0.5,1-1C12.6,6.5,12.1,6.1,11.5,6.1z"/>
                       <path d="M24,13.6c0-3.3-3.2-5.9-7.1-5.9c-0.3,0-0.6,0-0.9,0.1c0.8,0.8,1.2,1.8,1.2,2.8c0,3.7-3.4,6.6-7.5,6.6 c-0.5,0-0.9-0.1-1.4-0.2c1.1,2.5,4.3,4.2,7.7,4.2C20.4,21.1,24,17.7,24,13.6z M15.1,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C15.9,11.7,15.6,11.3,15.1,11.3z M19.9,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C20.7,11.7,20.3,11.3,19.9,11.3z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-[#9ba099]">微信</span>
                 </button>
                 <button 
                   onClick={handleWechatShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#151714] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <div className="relative w-8 h-8 rounded-full border-[3px] border-[#07C160] border-t-[#FCBE22] border-r-[#FCBE22] rotate-45 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#FA5151]"></div>
                     </div>
                   </div>
                   <span className="text-[11px] text-[#9ba099]">朋友圈</span>
                 </button>
                 <button 
                   onClick={handleWeiboShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#151714] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#E6162D]" fill="currentColor">
                       <path d="M21.2,10.6c-0.7-1.4-2.1-2.4-3.6-2.6c-0.3-0.1-0.6-0.1-1-0.1c0.2-0.5,0.3-1,0.3-1.6c0-1.8-1.5-3.3-3.3-3.3 c-1.2,0-2.3,0.7-2.9,1.7c-0.3-0.3-0.8-0.5-1.2-0.5c-1,0-1.9,0.8-1.9,1.9c0,0.3,0.1,0.6,0.2,0.9C7.4,6.7,7,6.6,6.5,6.6 c-2.4,0-4.3,2-4.3,4.4c0,1,0.3,1.9,0.9,2.6c-0.5,0.7-0.7,1.5-0.7,2.4c0,2.4,2,4.4,4.4,4.4c1.1,0,2.1-0.4,2.9-1 c0.8,0.7,1.9,1.2,3.1,1.2c2.7,0,4.9-2.2,4.9-4.9c0-0.4-0.1-0.8-0.2-1.2C20.1,14,21.8,12.5,21.2,10.6z M17.6,15.7 c-0.6,1.4-1.9,2.4-3.4,2.7c-1.3,0.3-2.6,0-3.6-0.6c-0.4-0.2-0.8-0.5-1.1-0.8c-0.4,0.4-1,0.6-1.6,0.6c-1.4,0-2.6-1.1-2.6-2.6 c0-0.7,0.3-1.4,0.8-1.8c0.2-0.2,0.5-0.4,0.8-0.5C5.8,11.9,5,10.5,5,8.9c0-1.8,1.5-3.3,3.3-3.3c1,0,1.8,0.4,2.5,1.1 c0.3-0.5,0.8-0.8,1.4-0.8c0.9,0,1.6,0.7,1.6,1.6c0,0.2-0.1,0.4-0.2,0.6C14.7,7.8,15.6,8.8,15.6,10c0,0.5-0.1,0.9-0.3,1.3 c1.5-0.1,2.8,0.8,3.3,2.1C19.1,14.3,18.5,15.2,17.6,15.7z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-[#9ba099]">微博</span>
                 </button>
                 <div className="hidden sm:block"></div> {/* Spacer for alignment if needed, or 4th item */}
                 
                 {/* Row 2 */}
                 <button 
                   onClick={handleSaveImage}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#151714] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#c2c6bf]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                   </div>
                   <span className="text-[11px] text-[#9ba099]">保存图片</span>
                 </button>
                 <button 
                   onClick={handleCopyLink}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#151714] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#c2c6bf] relative">
                     {copySuccess ? (
                       <span className="text-green-500 font-bold text-sm">已复制</span>
                     ) : (
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                     )}
                   </div>
                   <span className="text-[11px] text-[#9ba099]">复制链接</span>
                 </button>
                 <button 
                   onClick={handleSystemShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#151714] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-[#c2c6bf]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                   </div>
                   <span className="text-[11px] text-[#9ba099]">系统分享</span>
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
