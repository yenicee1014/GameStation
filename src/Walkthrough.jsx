import { useParams, Link } from 'react-router-dom';
import { booksData, categoryOptions } from './data';
import { useState, useEffect } from 'react';
import { Search, Heart, Share2, Bookmark, ChevronDown, BookOpen, X, ShoppingCart, ExternalLink } from 'lucide-react';
import alipayImage from './assets/Alipay-payme.JPG';
import wechatImage from './assets/WeChat-payme.JPG';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import tlou2Banner from '../picture/page1-game-walkthrough/tlou2/The-Last-of-Us-part-2-remastered-hub-hero-banner-desktop-01-en-27nov23.webp';
import tlou2Ps5Cover from '../picture/page1-game-walkthrough/tlou2/The-Last-Of-Us-Part-II-Remastered-PlayStation-5_901e04c9-bac6-4560-8c2b-705307058fc3.fc2bbde84f012348309a30046a71564a.jpg';
import naughtyDogLogo from '../picture/page1-game-walkthrough/tlou2/NaughtyDog_64x64.png';
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
import Tlou2TrophyList from './components/Tlou2TrophyList';
import './App.css';

// TOC Data structure
const tocItems = [
  { id: 'section-intro', title: '前言与导读', level: 1 },
  { id: 'section-1', title: '1. 基础操作与生存技巧', level: 1 },
  { id: 'section-1-1', title: '1.1 战斗技巧', level: 2 },
  { id: 'section-1-2', title: '1.2 探索技巧', level: 2 },
  { id: 'section-2', title: '2. 全章节流程攻略', level: 1 },
  { id: 'section-3', title: '3. 战斗与探索指南', level: 1 },
  { id: 'section-4', title: '4. 保险箱与密码全解', level: 1 },
  { id: 'section-5', title: '5. 全收集品位置指南', level: 1 },
  { id: 'section-6', title: '6. 白金路线图', level: 1 },
  { id: 'section-6-1', title: '6.1 章节选择与存档要点', level: 2 },
  { id: 'section-7', title: '7. 收集与升级重点', level: 1 },
  { id: 'section-8', title: '8. 奖杯总览', level: 1 },
  { id: 'section-9', title: '9. 奖杯详细攻略', level: 1 },
  { id: 'section-9-1', title: '9.1 白金与金杯', level: 2 },
  { id: 'section-9-2', title: '9.2 银杯', level: 2 },
  { id: 'section-9-3', title: '9.3 铜杯', level: 2 },
  { id: 'section-9-4', title: '9.4 绝地与永久死亡追加', level: 2 },
  { id: 'section-9-5', title: '9.5 No Return 追加', level: 2 },
  { id: 'section-9-6', title: '9.6 复刻版额外奖杯', level: 2 },
  { id: 'section-10', title: '10. 版本与DLC说明', level: 1 },
];

export default function Walkthrough() {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [activeSection, setActiveSection] = useState('section-1');
  const [readingProgress, setReadingProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  useEffect(() => {
    // Decode URL and find game
    const foundGame = booksData.find(g => {
        const gameSlug = g.slug || g.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-');
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
      const progress = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));
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
      
      const passedSections = sectionOffsets.filter(s => s.offset <= 0);
      
      if (passedSections.length > 0) {
        // The last one that passed is the current one
        currentSection = passedSections[passedSections.length - 1].id;
      } else if (sectionOffsets.length > 0) {
        // If none passed (at very top), active is the first one
        currentSection = sectionOffsets[0].id;
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

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sspai-bg text-sspai-gray">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-sspai-text">404</h1>
          <p>未找到该游戏的攻略信息</p>
          <a href="/" className="mt-4 inline-block text-sspai-red hover:underline font-medium">返回首页</a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#050505] font-sans text-gray-200 selection:bg-black selection:text-[#fdfbf7]"
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
            <Link to="/" className="site-nav__brand">Gamestation</Link>
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
                <BookOpen size={14} strokeWidth={2.2} />
                更新日志
                <span className="nav-badge">更新</span>
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
          <article className="flex-1 min-w-0 bg-white rounded-lg shadow-sspai p-8 md:p-12 md:pb-16 transition-shadow text-black">
             {/* Banner */}
             <div className="w-full aspect-[2/1] rounded-lg overflow-hidden mb-8 shadow-inner bg-gray-100 relative group">
               <img 
                 src={game.slug === 'the-last-of-us-part-2' ? tlou2Banner : game.imgUrl} 
                 alt={game.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
 
             </div>
             
             {/* Title */}
             <h1 className="text-3xl md:text-[40px] font-bold mb-6 leading-[1.2] text-black tracking-tight">
               {game.title} 完整图文攻略
               <span className="block text-2xl md:text-3xl text-gray-500 mt-2 font-normal">从入门到精通的白金之路</span>
             </h1>
             
             {/* Meta */}
             <div className="flex items-center justify-between mb-10 pb-8 border-b border-gray-100">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 shadow-sm cursor-pointer hover:ring-2 hover:ring-sspai-red/20 transition-all">
                   <img src={game.slug === 'the-last-of-us-part-2' ? naughtyDogLogo : game.imgUrl} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-[15px] text-black hover:text-sspai-red cursor-pointer transition-colors">{game.author}</span>
                     <span className="px-1.5 py-[1px] bg-[#f0f0f0] text-gray-500 text-[10px] font-bold rounded uppercase tracking-wider">官方</span>
                   </div>
                   <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-3 font-medium">
                    <span>{game.date || '2026年02月26日'}</span>
                    <span>阅读 15分钟</span>
                  </div>
                 </div>
               </div>
               
               <div className="flex items-center gap-1 xl:hidden">
                 <button className="p-2 text-gray-400 hover:text-sspai-red hover:bg-red-50 rounded-full transition-all">
                    <Heart size={20} />
                 </button>
                 <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-all">
                    <Bookmark size={20} />
                 </button>
                 <button className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-full transition-all">
                    <Share2 size={20} />
                 </button>
               </div>
             </div>
             
             {/* Content Body */}
             <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-headings:tracking-tight prose-p:text-black prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-sspai-red prose-a:no-underline prose-a:border-b prose-a:border-sspai-red/30 hover:prose-a:border-sspai-red hover:prose-a:bg-red-50/50 prose-a:transition-all prose-img:rounded-lg prose-img:shadow-sm prose-blockquote:border-l-4 prose-blockquote:border-sspai-red prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-black prose-li:text-black prose-strong:text-black prose-strong:font-bold">
               
               {game.slug === 'the-last-of-us-part-2' ? (
                 <>
                   {/* TLOU2 Specific Content - Optimized Layout */}
                    <div className="mb-12">
                      <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                         {/* Cover Image */}
                         <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 flex flex-col">
                           <div className="relative flex-1 rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                             <img src={tlou2Ps5Cover} alt="PS5 Official Disc Cover" className="absolute inset-0 w-full h-full object-contain p-1" />
                           </div>
                           <p className="text-xs text-center text-gray-400 mt-3 font-medium">📀 PS5 官方光盘封面 | 来源: PlayStation</p>
                         </div>
                         
                         {/* Basic Info Table */}
                         <div className="flex-1 flex flex-col">
                           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-full">
                             <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                               <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                 <span className="text-2xl">📋</span> 基础信息
                               </h3>
                               <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded uppercase tracking-wider">游戏档案</span>
                             </div>
                             
                             <div className="flex-1 grid grid-cols-1 content-center gap-1">
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🏢</span> 开发商
                                 </span>
                                 <span className="font-semibold text-gray-900">顽皮狗 (Naughty Dog)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📦</span> 发行商
                                 </span>
                                 <span className="font-semibold text-gray-900">索尼互动娱乐 (SIE)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📅</span> 发售日期
                                 </span>
                                 <span className="font-semibold text-gray-900">2020-06-19</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🎯</span> 游戏类型
                                 </span>
                                 <span className="font-semibold text-gray-900">动作冒险 / 生存恐怖</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🕹️</span> 对应平台
                                 </span>
                                 <span className="font-semibold text-gray-900">PS5 / PS4</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">👥</span> 游玩人数
                                 </span>
                                 <span className="font-semibold text-gray-900">1人</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">💰</span> 参考价格
                                 </span>
                                 <span className="font-bold text-sspai-red text-base">HK$ 398.00</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🌐</span> 语言支持
                                 </span>
                                 <span className="font-semibold text-gray-900 text-right max-w-[50%] leading-tight">简繁中字 / 英文语音</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors last:border-0">
                                 <span className="text-gray-500 font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">⭐</span> 年龄分级
                                 </span>
                                 <div className="flex items-center gap-2">
                                   <span className="px-1.5 py-0.5 border border-gray-300 rounded text-[10px] font-bold text-gray-500">ESRB M</span>
                                   <span className="font-semibold text-gray-900">17+ / 18+</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                      </div>

                     <h2 className="text-2xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-black">
                        <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                        📖 游戏简介
                     </h2>
                     <p className="lead text-[17px] text-gray-800 leading-relaxed mb-8">
                       《最后生还者 2》（The Last of Us Part II）是由顽皮狗（Naughty Dog）工作室开发，索尼互动娱乐发行的动作冒险游戏。故事发生在初代游戏结束后的五年，艾莉和乔尔定居在怀俄明州的杰克逊市。然而，一场突如其来的暴力冲突打破了这里的宁静。为了追捕肇事者，艾莉踏上了一场横跨西雅图的残酷报复之旅。
                       <br/><br/>
                       作为一款备受瞩目的续作，本作在叙事、画面表现和游戏机制上都达到了PS4时代的巅峰。玩家将在充满感染者和敌对幸存者的末世废墟中求生，体验扣人心弦的剧情与紧张刺激的战斗。复刻版（Remastered）更针对PS5主机进行了全面强化，带来了4K画质、更短的加载时间以及全新的“No Return”肉鸽生存模式。
                     </p>

                     <h2 className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                        <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎯 核心特色
                     </h2>
                     <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                          <h4 className="font-bold text-lg mb-2 text-sspai-red">次世代叙事体验</h4>
                          <p className="text-sm text-gray-600 m-0">
                            通过双主角视角，深入探讨复仇、原谅与人性。电影级的过场动画与无缝衔接的实机游玩，带来沉浸感极强的叙事体验。
                          </p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                          <h4 className="font-bold text-lg mb-2 text-sspai-red">进化的战斗系统</h4>
                          <p className="text-sm text-gray-600 m-0">
                            新增闪避、跳跃与俯卧机制，配合更加智能的AI敌人。玩家需要灵活利用环境潜行或正面对抗，每一场战斗都充满变数。
                          </p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                          <h4 className="font-bold text-lg mb-2 text-sspai-red">No Return 模式</h4>
                          <p className="text-sm text-gray-600 m-0">
                            PS5版独占的Roguelike生存模式。选择不同的角色与流派，在随机生成的关卡中挑战极限，体验纯粹的战斗乐趣。
                          </p>
                        </div>
                     </div>

                     <h2 className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                        <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        📊 媒体评分
                     </h2>
                     <div className="overflow-x-auto mb-10">
                        <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                          <thead className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider">
                            <tr>
                              <th className="px-6 py-3 border-b border-gray-200 font-bold">媒体 / 平台</th>
                              <th className="px-6 py-3 border-b border-gray-200 font-bold">评分</th>
                              <th className="px-6 py-3 border-b border-gray-200 font-bold">简评</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[15px]">
                            <tr>
                              <td className="px-6 py-4 font-medium">Metacritic (均分)</td>
                              <td className="px-6 py-4 text-green-600 font-bold">93/100</td>
                              <td className="px-6 py-4 text-gray-500 italic">"PS4 世代的绝唱，技术与艺术的完美结合。"</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 font-medium">IGN</td>
                              <td className="px-6 py-4 text-sspai-red font-bold">10/10</td>
                              <td className="px-6 py-4 text-gray-500">"大师之作 (Masterpiece)。在各个层面上都进化了初代的体验。"</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 font-medium">GameSpot</td>
                              <td className="px-6 py-4 font-bold">8/10</td>
                              <td className="px-6 py-4 text-gray-500">"虽然部分情节令人难受，但它依然是一部美丽且令人心碎的作品。"</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 font-medium">Famitsu (Fami通)</td>
                              <td className="px-6 py-4 font-bold">39/40</td>
                              <td className="px-6 py-4 text-gray-500">"荣获白金殿堂评价，在此类游戏中无可挑剔。"</td>
                            </tr>
                          </tbody>
                        </table>
                     </div>

                     <h2 className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                        <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎬 官方游戏截图
                     </h2>
                     <div className="space-y-8 mb-10">
                        <figure>
                          <img src={tlou2EllieSeattle} alt="The Last of Us Part II Gameplay" className="w-full rounded-lg shadow-md" />
                          <figcaption className="text-center text-sm text-gray-400 mt-2">艾莉在西雅图的探索之旅 | 来源: PlayStation 官方</figcaption>
                        </figure>

                     </div>

                     
                     <div className="text-xs text-gray-400 border-t border-gray-100 pt-4">
                       📌 数据更新于：2026-02-27 | 以上信息汇总自 PlayStation 官网及多家权威媒体，请以官方最新公告为准。
                     </div>
                   </div>
                   
                   <div className="bg-[#fffbfb] border border-[#ffebeb] rounded-lg p-6 my-10 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-sspai-red"></div>
                     <h4 className="font-bold mb-3 text-sspai-red flex items-center gap-2 text-base">
                        <span>💡</span> 通用技巧
                     </h4>
                     <div className="text-[15px] text-black m-0 leading-relaxed space-y-4">
                       <div>
                         <strong className="block mb-1">✔ 开启“高对比度显示” (High Contrast Display)</strong>
                         <p className="m-0">建议开启此功能。按下触摸板（原文是 G 键，针对 PC 版或特定设置，主机版通常在辅助功能里设置手势）可以高亮显示物品，让收集品变得非常显眼，极易发现。</p>
                       </div>
                       
                       <div>
                         <strong className="block mb-1">✔ 如果追求稳妥的通关路线</strong>
                         <p className="m-0">建议第一周目在“超轻 (Very Light)”难度下完成“永久死亡 (Permadeath)”模式，第二周目再挑战“绝地+ (Grounded+)”难度。</p>
                       </div>

                       <div>
                         <strong className="block mb-1">✔ 如果追求速度</strong>
                         <p className="m-0">可以尝试一次性同时完成两个高难度奖杯（绝地+ 和 永久死亡），然后在“新游戏+ (NG+)”中补齐遗漏的奖杯。</p>
                       </div>

                       <div>
                         <strong className="block mb-1">✔ 关于永久死亡 (Permadeath) 模式</strong>
                         <p className="m-0">建议将设置设定为<strong>“按章节 (Per Chapter)”</strong>，而不是“按幕 (Act)”或“整部游戏 (Whole Game)”。这样容错率最高。</p>
                       </div>

                       <div>
                         <strong className="block mb-1">✔ 增强聆听模式 (Enhanced Listen mode)</strong>
                         <p className="m-0">开启此功能后，聆听模式不仅能侦测敌人，还能为您扫描并“标记 (Ping)”附近的物品，非常实用。</p>
                       </div>

                       <div>
                         <strong className="block mb-1">✔ 收集品追踪 (Collectible Tracking)</strong>
                         <p className="m-0">前往 <strong>选项 &gt; HUD &gt; 通知 &gt; 收集品追踪</strong> 开启此功能。这样当您捡起收集品时会有提示，方便确认哪些已收集，哪些可能错过了。</p>
                       </div>

                       <div>
                         <strong className="block mb-1">✔ 收集品统计</strong>
                         <p className="m-0">如果您缺少某个收集品但不知道是在哪一章漏掉的，只需进入<strong>“章节选择”</strong>，系统会显示每一章各类收集品的总数以及您当前的收集进度。您也可以直接通过章节选择进入特定关卡快速补齐。</p>
                       </div>

                       <div>
                         <h5 className="font-bold text-base mb-2">📦 收集品概览</h5>
                         <p className="mb-2">《最后生还者 第二部 重制版》的剧情模式中大约有 <strong>286</strong> 个收集品：</p>
                         <ul className="list-disc pl-5 space-y-1">
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
                         <p className="mt-2">工程量确实不小，这也是为什么我强烈推荐开启<strong>“高对比度显示”</strong>的原因，找起东西来会轻松很多。</p>
                       </div>

                       <div>
                         <h5 className="font-bold text-base mb-2">⚠️ 重要提示：关于培训手册</h5>
                         <p className="mb-2">还有一点需要补充，我很确定<strong>培训手册 (Training Manuals)</strong> 有多个不同的刷新点。这意味着您找到它们的时间点可能与攻略一致，也可能比攻略早或晚。</p>
                         <p className="mb-2">我知道它们通常会刷新在相同的章节里，但具体位置可能不同。</p>
                         <p className="mb-2"><strong>关键点：</strong> 如果您按照攻略走到指定位置却没看到手册，请不要慌张，可以去查阅其他视频或指南，看看该章节其他的刷新点在哪里。</p>
                         <p className="m-0">在我完成这篇指南后，我可能会把其他刷新点也补加上去，但在我们开始游玩时，请务必把这一点记在心里。</p>
                       </div>
                     </div>
                   </div>
                   
                  <h2 id="section-1" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                     一、基础操作与生存技巧
                  </h2>
                  <p>
                    本作核心是潜行与资源管理，建议从最低难度开始熟悉系统，再逐步加快通关节奏。
                  </p>
                  <figure className="my-8">
                    <img src={tlou2StealthShot} alt="潜行与侦察" className="w-full rounded-lg shadow-md" />
                    <figcaption className="text-center text-sm text-gray-400 mt-3 font-medium">
                      潜行与侦察是推进与收集的核心
                    </figcaption>
                  </figure>
                  
                  {/* REPLACED CONTENT START */}
                  <h3 id="section-1-1" className="text-xl mt-8 mb-4 font-bold text-gray-800">1.1 战斗技巧</h3>
                  <p>
                    虽然战斗机制与前作相似，但《最后生还者 2》中的敌人 AI 更加智能，且艾莉的武器库也更加丰富。
                  </p>
                  
                  <div className="space-y-12 my-8">
                    {/* Item 1 */}
                    <div>
                       <h4 className="text-lg font-bold mb-2 text-gray-900">灵活机动</h4>
                       <p className="text-gray-600 leading-relaxed">
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
                       <h4 className="text-lg font-bold mb-2 text-gray-900">闪避是关键</h4>
                       <p className="text-gray-600 leading-relaxed">
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
                       <h4 className="text-lg font-bold mb-2 text-gray-900">利用环境</h4>
                       <p className="text-gray-600 leading-relaxed">
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
                       <h4 className="text-lg font-bold mb-2 text-gray-900">制作与资源</h4>
                       <p className="text-gray-600 leading-relaxed">
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

                  <h3 id="section-1-2" className="text-xl mt-8 mb-4 font-bold text-gray-800">1.2 探索技巧</h3>
                   <div className="space-y-12 my-8">
                     {/* Item 1 */}
                     <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-900">打碎玻璃</h4>
                        <p className="text-gray-600 leading-relaxed">
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
                        <h4 className="text-lg font-bold mb-2 text-gray-900">检查高处</h4>
                        <p className="text-gray-600 leading-relaxed">
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
                        <h4 className="text-lg font-bold mb-2 text-gray-900">辅助功能</h4>
                        <p className="text-gray-600 leading-relaxed">
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

                  <h2 id="section-2" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                     <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     二、全章节流程攻略
                  </h2>
                  <p>
                    本作流程分为多个章节，涵盖了杰克逊、西雅图（三天）以及后续的圣塔巴巴拉。以下是主要章节的流程概览。
                  </p>
                  
                  <h3 className="text-xl mt-8 mb-4 font-bold text-gray-800">第一章：杰克逊</h3>
                  <ul>
                    <li><strong>序章 & 梦醒：</strong> 熟悉基本操作，与杰西、蒂娜互动。</li>
                    <li><strong>眺望点 & 巡逻：</strong> 第一次遭遇感染者，学习潜行与战斗基础。注意暴风雪中的能见度。</li>
                    <li><strong>尸潮：</strong> 紧张的追逐战，保持奔跑，利用障碍物阻挡感染者。</li>
                  </ul>

                  <h3 className="text-xl mt-8 mb-4 font-bold text-gray-800">第二章：西雅图 第一天 - 艾莉</h3>
                  <ul>
                    <li><strong>大门 & 市中心：</strong> 这是一个半开放区域。你需要寻找汽油来启动发电机。这里包含了大量收集品，建议地毯式搜索。</li>
                    <li><strong>东布鲁克小学 & 国会山：</strong> 遭遇 WLF 士兵，战斗强度提升。利用草丛和建筑进行潜行。</li>
                    <li><strong>隧道：</strong> 面对新敌人 跛行者。保持距离，使用燃烧瓶和地雷。</li>
                  </ul>

                  <h3 className="text-xl mt-8 mb-4 font-bold text-gray-800">第三章：西雅图 第二天 - 艾莉</h3>
                  <ul>
                    <li><strong>希尔科列斯特：</strong> 充满 WLF 巡逻队和猎犬。利用消音武器优先解决落单敌人。</li>
                    <li><strong>赛拉菲特 (疤脸帮)：</strong> 首次遭遇疤脸帮。注意他们的口哨声，利用弓箭进行无声击杀。</li>
                  </ul>

                  <h3 className="text-xl mt-8 mb-4 font-bold text-gray-800">第四章：西雅图 第三天 - 艾莉</h3>
                  <ul>
                    <li><strong>通往水族馆之路 & 水没都市：</strong> 驾驶游艇探索。注意水下的潜行路径和隐藏的补给点。</li>
                  </ul>

                  <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-400 my-6">
                    <p className="text-sm text-gray-600 m-0">
                      *后续章节将切换至另一位主角 艾比，体验不同的战斗风格与剧情视角。艾比 的近战能力更强，且拥有独特的武器和技能树。
                    </p>
                  </div>

                  <h2 id="section-3" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                     <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     三、战斗与探索指南
                  </h2>
                  <p>
                    除了基础操作外，掌握进阶技巧能让你在绝地难度下也能游刃有余。
                  </p>
                  <ul>
                    <li><strong>利用感染者：</strong> 在人类敌人和感染者同时出现的场景，可以投掷砖块引诱感染者攻击人类，坐收渔翁之利。</li>
                    <li><strong>改装武器：</strong> 优先升级弹夹容量和稳定性。猎枪的伤害升级在对付重甲敌人时非常有效。</li>
                    <li><strong>不仅是潜行：</strong> 当潜行失败时，不要慌张。迅速切换至霰弹枪或近战武器，利用闪避制造反击机会，或者投掷烟雾弹重新进入潜行状态。</li>
                  </ul>

                  <h2 id="section-4" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                     <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     四、保险箱与密码全解
                  </h2>
                  <p>
                    游戏中许多物资被锁在保险箱内，密码通常藏在附近的文档或环境细节中。以下是全保险箱密码一览。
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                      <thead className="bg-gray-50 text-gray-700 text-sm uppercase">
                        <tr>
                          <th className="px-4 py-2 border-b font-bold">章节 / 位置</th>
                          <th className="px-4 py-2 border-b font-bold">密码</th>
                          <th className="px-4 py-2 border-b font-bold">提示来源</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        <tr><td className="px-4 py-2 font-bold" colSpan="3">杰克逊</td></tr>
                        <tr><td className="px-4 py-2">超市</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">07-20-13</td><td className="px-4 py-2">入职日期</td></tr>
                        
                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第一天 - 艾莉</td></tr>
                        <tr><td className="px-4 py-2">银行金库</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">60-23-06</td><td className="px-4 py-2">抢劫计划图纸</td></tr>
                        <tr><td className="px-4 py-2">西2门</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">04-51</td><td className="px-4 py-2">Checkmate 代码</td></tr>
                        <tr><td className="px-4 py-2">法院</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">86-07-22</td><td className="px-4 py-2">白板上的数字</td></tr>
                        <tr><td className="px-4 py-2">国会山</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">55-01-33</td><td className="px-4 py-2">垃圾箱旁的纸条</td></tr>
                        <tr><td className="px-4 py-2">隧道</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">15243</td><td className="px-4 py-2">苏打水罐上的数字</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第二天 - 艾莉</td></tr>
                        <tr><td className="px-4 py-2">希尔科列斯特</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">30-82-65</td><td className="px-4 py-2">厨房墙上的日历</td></tr>
                        <tr><td className="px-4 py-2">赛拉菲特</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">08-10-83</td><td className="px-4 py-2">结婚纪念日</td></tr>
                        <tr><td className="px-4 py-2">韦斯顿药店</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">38-55-23</td><td className="px-4 py-2">收银台下的纸条</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第三天 - 艾莉</td></tr>
                        <tr><td className="px-4 py-2">水没都市</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">70-12-64</td><td className="px-4 py-2">被困尸体旁的纸条</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第一天 - 艾比</td></tr>
                        <tr><td className="px-4 py-2">步行</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">17-38-07</td><td className="px-4 py-2">彩票号码</td></tr>
                        <tr><td className="px-4 py-2">敌对领土</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">68-96-89</td><td className="px-4 py-2">茉莉花面包店传单</td></tr>
                        <tr><td className="px-4 py-2">海岸</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">90-77-01</td><td className="px-4 py-2">船长室的纸条</td></tr>

                        <tr><td className="px-4 py-2 font-bold" colSpan="3">西雅图 第二天 - 艾比</td></tr>
                        <tr><td className="px-4 py-2">捷径</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">30-23-04</td><td className="px-4 py-2">邻居的公寓号码</td></tr>
                        <tr><td className="px-4 py-2">下降</td><td className="px-4 py-2 font-mono font-bold text-sspai-red">12-18-79</td><td className="px-4 py-2">Wi-Fi 密码</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 id="section-5" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                     <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     五、全收集品位置指南
                  </h2>
                  <p>
                    本作拥有极其丰富的收集要素，包括文物、集换式卡牌、硬币、日志条目、工作台和保险箱。
                  </p>
                  <ul>
                    <li><strong>集换式卡牌 (Trading Cards)：</strong> 仅出现在 Ellie 的章节中。通常藏在抽屉、架子或隐蔽的角落。</li>
                    <li><strong>硬币 (Coins)：</strong> 仅出现在 Abby 的章节中。代表了美国的各个州，留意喷泉、收银机或地面。</li>
                    <li><strong>训练手册 (Training Manuals)：</strong> 极为重要，用于解锁新的技能树。如果错过，游戏通常会在后续位置再次生成。</li>
                  </ul>
                  <p>
                    建议在通关后使用「章节选择」功能，配合游戏内的收集品追踪器来补齐遗漏的物品。
                  </p>

                  <h2 id="section-6" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                     六、白金路线图
                   </h2>
                  <ol>
                    <li>一周目通关并尽量全收集，重点搜刮补充品与零件。</li>
                    <li>通关后使用章节选择补遗漏收集与支线奖杯。</li>
                    <li>新游戏+继续搜刮补充品与零件，补齐全技能与全武器升级。</li>
                  </ol>
                  
                  <h3 id="section-6-1" className="text-xl mt-8 mb-4 font-bold text-gray-800">6.1 章节选择与存档要点</h3>
                  <ul>
                    <li>务必在最终章保留手动存档，避免章节选择被锁。</li>
                    <li>补漏时完成章节后加载最终章手动存档，再继续补其他章节。</li>
                  </ul>

                  <h2 id="section-7" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                      <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     七、收集与升级重点
                   </h2>
                  <p>
                    白金关键是全收集与全升级，具体数量可在章节选择中查看进度。
                  </p>
                  <ul>
                    <li><strong>武器：</strong>12 把</li>
                    <li><strong>训练手册：</strong>8 本</li>
                    <li><strong>工作台：</strong>25 个</li>
                    <li><strong>保险箱：</strong>14 个</li>
                    <li><strong>文物：</strong>127 个</li>
                    <li><strong>日志：</strong>20 条</li>
                    <li><strong>集换式卡牌：</strong>48 张</li>
                    <li><strong>硬币：</strong>32 枚</li>
                  </ul>
                  <p>
                    一周目无法获得足够补充品与零件完成全升级，新游戏+是必须环节。优先解锁与制作相关的技能，能更快完成制作与战斗类奖杯。
                  </p>

                  <h2 id="section-8" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                     <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     八、奖杯总览
                  </h2>
                  <ul>
                    <li><strong>白金难度：</strong>2/10</li>
                    <li><strong>预估时长：</strong>25-30 小时</li>
                    <li><strong>最少通关次数：</strong>1.5 周目</li>
                    <li><strong>Missable 奖杯：</strong>无</li>
                    <li><strong>联机奖杯：</strong>无</li>
                    <li><strong>已知 Bug：</strong>观光客可能卡杯，重做章节可解决</li>
                  </ul>

                  <h2 id="section-9" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                     <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     九、奖杯详细攻略
                  </h2>
                  <p>
                    以下按奖杯界面显示名称与品级编排，逐条给出获取方式。
                  </p>

                  <h3 id="section-9-1" className="text-xl mt-8 mb-4 font-bold text-gray-800">9.1 白金与金杯</h3>
                  <ul>
                    <li><strong>全数尽收：</strong>获得所有奖杯。完成下列全部奖杯后自动解锁。</li>
                    <li><strong>我必须做的事：</strong>完成剧情故事。任意难度通关即可。</li>
                    <li><strong>求生专家：</strong>学会所有玩家升级。集齐训练手册并在新游戏+补足补充品即可。</li>
                    <li><strong>武器大师：</strong>完全升级所有武器。搜刮零件并在工作台升级，新游戏+补齐。</li>
                    <li><strong>档案保管员：</strong>找到所有文物与日志条目。按章节选择补齐。</li>
                    <li><strong>大师套装：</strong>找到所有集换式卡牌。艾莉章节专属收集。</li>
                    <li><strong>硬币收藏家：</strong>找到所有硬币。艾比章节专属收集。</li>
                    <li><strong>万全准备：</strong>找到所有工作台。通关后可补漏。</li>
                  </ul>

                  <h3 id="section-9-2" className="text-xl mt-8 mb-4 font-bold text-gray-800">9.2 银杯</h3>
                  <ul>
                    <li><strong>机械师：</strong>完全升级一把武器。建议优先手枪或霰弹枪。</li>
                    <li><strong>专精行家：</strong>学会一个分支的所有玩家升级。任意技能树点满即可。</li>
                    <li><strong>保险箱大盗：</strong>打开所有保险箱。密码多在附近墙面或文档。</li>
                    <li><strong>观光客：</strong>西雅图第1天市中心全部地点都进入并探索。</li>
                    <li><strong>熟练工：</strong>找到所有训练手册。共 8 本。</li>
                    <li><strong>求生训练：</strong>学会 25 个玩家升级。正常升级流程必得。</li>
                    <li><strong>枪械专家：</strong>找到所有武器。通关流程可集齐。</li>
                    <li><strong>实地备战：</strong>找到 12 个工作台。流程中留意即可。</li>
                  </ul>

                  <h3 id="section-9-3" className="text-xl mt-8 mb-4 font-bold text-gray-800">9.3 铜杯</h3>
                  <ul>
                    <li><strong>谋生工具：</strong>制作每一种物品。需要解锁对应配方。</li>
                    <li><strong>新手工匠：</strong>升级一把武器。第一次工作台即可解锁。</li>
                    <li><strong>学徒：</strong>学会一个玩家升级。早期补充品即可完成。</li>
                    <li><strong>新手套牌：</strong>找到 5 张集换式卡牌。</li>
                    <li><strong>完好如初：</strong>找到 5 枚硬币。</li>
                    <li><strong>你戴起来很好看：</strong>博物馆章节给同伴戴帽子。</li>
                    <li><strong>神枪手：</strong>体育场靶场赢过曼尼的射击比赛。</li>
                    <li><strong>写上我的名字：</strong>水族馆射箭小游戏至少 11 分。</li>
                    <li><strong>贤者的遗物：</strong>敌对领土找到奇怪遗物。</li>
                    <li><strong>小处成就大事：</strong>市中心银行金库中找到刻字戒指。</li>
                  </ul>

                  <h3 id="section-9-4" className="text-xl mt-8 mb-4 font-bold text-gray-800">9.4 绝地与永久死亡追加</h3>
                  <ul>
                    <li><strong>掘墓双人：</strong>以绝地难度完成故事。建议二周目继承后挑战。</li>
                    <li><strong>势不可挡：</strong>开启永久死亡完成故事，推荐选择按章节保存。</li>
                  </ul>

                  <h3 id="section-9-5" className="text-xl mt-8 mb-4 font-bold text-gray-800">9.5 No Return 追加</h3>
                  <ul>
                    <li><strong>混合袋：</strong>突击遭遇战中用 5 种武器击杀。</li>
                    <li><strong>成为猎人：</strong>猎杀遭遇战中击杀 12 名敌人。</li>
                    <li><strong>有我罩你：</strong>坚守模式获胜且盟友血量不低于 70。</li>
                    <li><strong>入室盗窃：</strong>占领模式中不开杀敌打开保险箱。</li>
                    <li><strong>点名：</strong>用每个角色完成一次通关。</li>
                    <li><strong>模改高手：</strong>在 No Return 中完成一次带有所有 Mod 的遭遇战。</li>
                    <li><strong>冒险主义：</strong>一次征途中完成 5 个赌注。</li>
                    <li><strong>解脱：</strong>击败所有 Boss。</li>
                    <li><strong>艾莉战队：</strong>完成艾莉阵营全部挑战轨迹。</li>
                    <li><strong>艾比战队：</strong>完成艾比阵营全部挑战轨迹。</li>
                    <li><strong>真正的力量：</strong>单场遭遇获得 S 评级。</li>
                    <li><strong>愿你长寿：</strong>赢得一次每日挑战。</li>
                    <li><strong>愿你速死：</strong>绝地难度赢得每日挑战。</li>
                  </ul>

                  <h3 id="section-9-6" className="text-xl mt-8 mb-4 font-bold text-gray-800">9.6 复刻版额外奖杯</h3>
                  <ul>
                    <li><strong>这会让你们怀旧吗：</strong>完成 Part I 挑战轨迹。</li>
                    <li><strong>生物课：</strong>用比尔的泵动霰弹枪击杀巨无霸。</li>
                    <li><strong>萤火虫女王：</strong>一次遭遇中用玛琳冲锋枪击杀 15 名敌人。</li>
                    <li><strong>再来一次：</strong>以时间线顺序通关故事。</li>
                  </ul>

                  <h2 id="section-10" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                     十、版本与DLC说明
                  </h2>
                  <ul>
                    <li><strong>白金仅要求本体奖杯：</strong>No Return 与绝地模式追加奖杯不影响白金。</li>
                    <li><strong>奖杯名称与条件：</strong>以主机奖杯界面为准，如有更新以官方为准。</li>
                    <li><strong>攻略来源：</strong>以权威奖杯站与全收集攻略为参考整理。</li>
                  </ul>

                  <div className="my-8 text-black">
                    <p className="mb-6 text-black font-medium">
                      需要逐章节图文路线或奖杯筛选列表，请前往专属奖杯页面查看。
                    </p>
                    <Link 
                     to="/the-last-of-us-part-2/trophies"
                     className="block w-full text-center py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all rounded-sm shadow-sm hover:shadow-md"
                   >
                     查看全奖杯列表
                   </Link>
                  </div>
                   
                   <hr className="my-12 border-gray-100" />
                 </>
               ) : (
                 // Generic content for other games
                 <>
                   <p className="lead text-[18px] text-black mb-10 font-serif italic pl-2 border-l-4 border-gray-200">
                     {game.description}
                   </p>
               
               <h2 id="section-intro" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                  前言
               </h2>
               <p>
                 欢迎来到《{game.title}》的完整图文攻略。作为 {game.author} 的最新力作，本作在 {game.volume} 平台上展现了惊人的次世代画面与游戏性。无论你是初次接触该系列的萌新，还是想要挑战白金奖杯的老手，本攻略都将为你提供详尽的指引。
               </p>
               <p>
                 本篇攻略旨在以最清晰、直观的方式，带领大家领略这款游戏的魅力。我们会深入解析每一个关卡的设计思路，剖析敌人的行动模式，并给出最优的通关策略。
               </p>
               
               <div className="bg-[#fffbfb] border border-[#ffebeb] rounded-lg p-6 my-10 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-sspai-red"></div>
                 <h4 className="font-bold mb-3 text-sspai-red flex items-center gap-2 text-base">
                    <span>💡</span> 攻略导读
                 </h4>
                 <p className="text-[15px] text-black m-0 leading-relaxed">
                   本攻略将按照游戏章节顺序进行编写，包含所有收集品位置、BOSS战打法以及奖杯解锁条件。请善用右侧目录进行快速跳转。如果你在游戏中遇到了卡关的情况，不妨先查看相关的章节攻略。
                 </p>
               </div>

               <h2 id="section-2" className="text-2xl mt-12 mb-6 group cursor-pointer">
                  <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  一、游戏基础与操作指南
               </h2>
               <p>
                 在开始冒险之前，我们需要熟悉游戏的基本操作与系统机制。本作引入了全新的动态天气系统与光线追踪技术，不仅提升了视觉效果，也对战斗产生了一定影响。
               </p>
               
               <h3 id="section-2-1" className="text-xl mt-8 mb-4 font-bold text-gray-800">1.1 战斗系统详解</h3>
               <p>
                 战斗是本作的核心体验之一。你需要掌握闪避、格挡与反击的时机。特别是针对精英敌人，盲目的攻击只会让你陷入险境。观察敌人的出招前摇，利用环境优势，才是取胜的关键。
               </p>

               <figure className="my-10">
                 <img src={game.imgUrl} alt="Gameplay" className="w-full rounded-lg shadow-md" />
                 <figcaption className="text-center text-sm text-gray-400 mt-3 font-medium flex items-center justify-center gap-2">
                    <span className="w-8 h-[1px] bg-gray-200"></span>
                    游戏实机战斗画面演示
                    <span className="w-8 h-[1px] bg-gray-200"></span>
                 </figcaption>
               </figure>

               <h2 id="section-2" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                  二、全流程图文攻略
               </h2>
               <h3 id="section-3-1" className="text-xl mt-8 mb-4 font-bold text-gray-800">第一章：{game.title} 的序幕</h3>
               <p>
                 故事开始于一个风雨交加的夜晚。主角醒来时，发现自己身处陌生的环境。这里我们需要跟随教程指引，完成基本的移动与交互操作。注意路边的发光物体，那通常是补给品或收集要素。
               </p>
               <p>
                 随着剧情的推进，我们将遇到第一个挑战...（此处为攻略正文占位符）
               </p>
               
               <h2 id="section-3" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
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
               
               <h2 id="section-4" className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                  四、白金奖杯获取指南
               </h2>
               
               {game.slug === 'the-last-of-us-part-2' ? (
                 <div className="my-8 text-black">
                   <p className="mb-6 text-black font-medium">
                     本作包含大量奖杯挑战，为了方便查阅，我们将详细的奖杯获取指南整理在单独的页面中。点击下方按钮查看完整的白金攻略、绝地难度挑战以及 No Return 模式奖杯。
                   </p>
                   <Link 
                    to="/the-last-of-us-part-2/trophies"
                    className="block w-full text-center py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all rounded-sm shadow-sm hover:shadow-md"
                  >
                    查看全奖杯列表
                  </Link>
                 </div>
               ) : (
                 <p>
                   想要获得白金奖杯，你需要完成所有主线任务、收集所有要素，并达成特定的战斗挑战。部分奖杯具有一定难度，建议在二周目继承存档后尝试。
                 </p>
               )}

               <hr className="my-12 border-gray-100" />
               </>
             )}
             </div>
          </article>
          
          {/* Sidebar */}
          <aside className="w-[300px] hidden lg:block shrink-0 space-y-6 sticky top-[100px] h-fit self-start">
             {/* Author Card */}
             <div className="bg-white rounded-lg p-6 shadow-sspai border border-gray-100 hover:shadow-sspai-hover transition-all group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 group-hover:ring-2 group-hover:ring-sspai-red/20 transition-all">
                   <img src={game.slug === 'the-last-of-us-part-2' ? naughtyDogLogo : game.imgUrl} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-base text-gray-900 truncate">{game.author}</h3>
                   <p className="text-xs text-gray-400 font-medium truncate">知名游戏开发商</p>
                 </div>
               </div>
               <a 
                 href="https://www.naughtydog.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-2 bg-white border border-sspai-red text-sspai-red font-bold rounded-full text-sm hover:bg-sspai-red hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
               >
                  <span>打开官网</span>
               </a>
             </div>

             {/* TOC */}
             <div className="bg-white rounded-lg p-6 shadow-sspai border border-gray-100 sticky top-4">
               <h3 className="font-bold text-gray-900 mb-4 pl-1 text-[15px] flex items-center justify-between">
                 目录
                 <span className="text-xs font-bold text-white bg-sspai-red px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
               </h3>
               <nav className="space-y-1 relative">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-100"></div>
                 {tocItems.map((item) => {
                   const isActive = activeSection === item.id;
                   return (
                     <a 
                       key={item.id}
                       href={`#${item.id}`}
                       onClick={(e) => scrollToSection(e, item.id)}
                       className={`
                         block py-2 pr-3 transition-all relative z-10 rounded-r border-l-[3px]
                         ${item.level === 1 ? 'pl-6 text-[14px]' : 'pl-9 text-[13px]'}
                         ${isActive 
                           ? 'text-sspai-red font-bold bg-red-50/80 border-sspai-red shadow-sm' 
                           : 'text-gray-500 hover:text-sspai-red hover:bg-gray-50 border-transparent hover:border-gray-200 font-medium'}
                       `}
                     >
                       {item.title}
                     </a>
                   );
                 })}
               </nav>
             </div>

             {/* Game Purchase Card */}
             <div className="bg-white rounded-lg p-6 shadow-sspai border border-gray-100">
               <h3 className="font-bold text-gray-900 mb-4 text-[15px] flex items-center gap-2">
                 <span>🛍️</span> 购买游戏
               </h3>
               <div className="flex flex-col gap-4">
                 <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-100 relative group">
                   <img src={game.imgUrl} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                     <span className="text-white font-bold text-sm">{game.title}</span>
                   </div>
                 </div>
                 
                 <div className="flex items-center justify-between">
                   <div className="flex flex-col">
                     <span className="text-xs text-gray-500 line-through">HK$ 568.00</span>
                     <span className="text-lg font-bold text-sspai-red">HK$ 398.00</span>
                   </div>
                   <span className="px-2 py-1 bg-red-50 text-sspai-red text-xs font-bold rounded">-30%</span>
                 </div>

                 <a 
                   href="https://store.playstation.com/zh-hans-hk/product/HP9000-PPSA07644_00-THELASTOFUSPART1" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-full py-2.5 bg-[#00439c] text-white font-bold rounded-full text-sm hover:bg-[#003087] transition-all flex items-center justify-center gap-2 shadow-sm group"
                 >
                   <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                   <span>前往 PS Store 购买</span>
                 </a>
                 
                 <p className="text-[10px] text-gray-400 text-center">
                   *价格仅供参考，请以商店实际价格为准
                 </p>
               </div>
             </div>
             
          </aside>
       </main>
       
       {/* Footer */}
       <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <div className="site-footer__logo">GameStation</div>
          </div>
          <div className="site-footer__grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="site-footer__col">
              <div className="site-footer__title">关于</div>
              <Link className="site-footer__link" to="/about">关于 Intensea</Link>
            </div>
            <div className="site-footer__col">
              <div className="site-footer__title">支持</div>
              <Link className="site-footer__link" to="/about">联系开发者</Link>
            </div>
            <div className="site-footer__col">
              <div className="site-footer__title">资源</div>
              <a className="site-footer__link" href="https://www.playstation.com/zh-hans-cn/" target="_blank" rel="noopener noreferrer">PS官网</a>

            </div>
            <div className="site-footer__col">
                <div className="site-footer__title">请我喝奶茶</div>
                <a className="site-footer__link" href="#" onClick={(e) => { e.preventDefault(); setIsDonateOpen(true); }}>买奶茶</a>
              </div>
          </div>
          <div className="site-footer__divider"></div>
          <div className="site-footer__bottom">
            <div className="site-footer__sponsor">
              <div className="site-footer__sponsor-mark">◆</div>
              <div className="site-footer__sponsor-text">Intensea Interactive<br />Entertainment</div>
            </div>
            <div className="site-footer__legal">
              <div>© 2026 Intensea Interactive Entertainment LLC</div>
              <div>所有内容均受著作权保护。版权所有。</div>
            </div>
            <div className="site-footer__region">中国大陆（简体中文）</div>
          </div>
        </div>
      </footer>

      {/* 捐赠弹窗 */}
      {isDonateOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsDonateOpen(false)}></div>
          <div className="relative bg-white rounded-xl p-6 md:p-8 max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsDonateOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">请我喝杯奶茶 🧋</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                  <img src={alipayImage} alt="支付宝付款码" className="w-full h-full object-contain" />
                </div>
                <span className="font-medium text-blue-500 flex items-center gap-2">
                  支付宝 Alipay
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                  <img src={wechatImage} alt="微信付款码" className="w-full h-full object-contain" />
                </div>
                <span className="font-medium text-green-500 flex items-center gap-2">
                  微信支付 WeChat Pay
                </span>
              </div>
            </div>
            
            <p className="text-center text-gray-500 mt-8 text-sm">
              感谢您的支持！您的鼓励是我持续更新的动力。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
