import { useParams, Link } from 'react-router-dom';
import { booksData, categoryOptions } from './data';
import { useState, useEffect } from 'react';
import { Search, Bell, Heart, Share2, Bookmark, MessageSquare, MoreHorizontal, ChevronDown, BookOpen, X, ShoppingCart } from 'lucide-react';
import alipayImage from './assets/Alipay-payme.JPG';
import wechatImage from './assets/WeChat-payme.JPG';
import backgroundImage from '../../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import './App.css';

// TOC Data structure
const tocItems = [
  { id: 'section-1', title: '前言', level: 1 },
  { id: 'section-2', title: '1. 游戏基础与操作指南', level: 1 },
  { id: 'section-2-1', title: '1.1 战斗系统详解', level: 2 },
  { id: 'section-3', title: '2. 全流程图文攻略', level: 1 },
  { id: 'section-3-1', title: `第一章：序幕`, level: 2 },
  { id: 'section-4', title: '3. 全收集品位置一览', level: 1 },
  { id: 'section-5', title: '4. 白金奖杯获取指南', level: 1 },
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
          <article className="flex-1 min-w-0 bg-white rounded-lg shadow-sspai p-8 md:p-12 md:pb-16 transition-shadow">
             {/* Banner */}
             <div className="w-full aspect-[2/1] rounded-lg overflow-hidden mb-8 shadow-inner bg-gray-100 relative group">
               <img src={game.imgUrl} alt={game.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute top-4 left-4">
                  <span className="bg-sspai-red text-white px-2 py-1 text-xs font-bold rounded shadow-sm tracking-wide">Matrix 精选</span>
               </div>
             </div>
             
             {/* Title */}
             <h1 className="text-3xl md:text-[40px] font-bold mb-6 leading-[1.2] text-[#292525] tracking-tight">
               {game.title} 完整图文攻略：从入门到精通的白金之路
             </h1>
             
             {/* Meta */}
             <div className="flex items-center justify-between mb-10 pb-8 border-b border-gray-100">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 shadow-sm cursor-pointer hover:ring-2 hover:ring-sspai-red/20 transition-all">
                   <img src={game.imgUrl} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-[15px] text-gray-900 hover:text-sspai-red cursor-pointer transition-colors">{game.author}</span>
                     <span className="px-1.5 py-[1px] bg-[#f0f0f0] text-gray-500 text-[10px] font-bold rounded uppercase tracking-wider">PRO</span>
                   </div>
                   <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-3 font-medium">
                     <span>2026年02月26日</span>
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
             <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#292525] prose-headings:tracking-tight prose-p:text-black prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-sspai-red prose-a:no-underline prose-a:border-b prose-a:border-sspai-red/30 hover:prose-a:border-sspai-red hover:prose-a:bg-red-50/50 prose-a:transition-all prose-img:rounded-lg prose-img:shadow-sm prose-blockquote:border-l-4 prose-blockquote:border-sspai-red prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-black prose-li:text-black prose-strong:text-[#292525] prose-strong:font-bold">
               
               <p className="lead text-[18px] text-black mb-10 font-serif italic pl-2 border-l-4 border-gray-200">
                 {game.description}
               </p>
               
               <h2 id="section-1" className="text-2xl mt-12 mb-6 flex items-center gap-2 group cursor-pointer">
                  <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
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

               <h2 id="section-3" className="text-2xl mt-12 mb-6 group cursor-pointer">
                  <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  二、全流程图文攻略
               </h2>
               <h3 id="section-3-1" className="text-xl mt-8 mb-4 font-bold text-gray-800">第一章：{game.title} 的序幕</h3>
               <p>
                 故事开始于一个风雨交加的夜晚。主角醒来时，发现自己身处陌生的环境。这里我们需要跟随教程指引，完成基本的移动与交互操作。注意路边的发光物体，那通常是补给品或收集要素。
               </p>
               <p>
                 随着剧情的推进，我们将遇到第一个挑战...（此处为攻略正文占位符）
               </p>
               
               <h2 id="section-4" className="text-2xl mt-12 mb-6 group cursor-pointer">
                  <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
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
               
               <h2 id="section-5" className="text-2xl mt-12 mb-6 group cursor-pointer">
                  <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                  四、白金奖杯获取指南
               </h2>
               <p>
                 想要获得白金奖杯，你需要完成所有主线任务、收集所有要素，并达成特定的战斗挑战。部分奖杯具有一定难度，建议在二周目继承存档后尝试。
               </p>

               <hr className="my-12 border-gray-100" />
             </div>
          </article>
          
          {/* Sidebar */}
          <aside className="w-[300px] hidden lg:block shrink-0 space-y-6 sticky top-[100px] h-fit self-start">
             {/* Author Card */}
             <div className="bg-white rounded-lg p-6 shadow-sspai border border-gray-100 hover:shadow-sspai-hover transition-all group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 group-hover:ring-2 group-hover:ring-sspai-red/20 transition-all">
                   <img src={game.imgUrl} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-base text-gray-900 truncate">{game.author}</h3>
                   <p className="text-xs text-gray-400 font-medium truncate">知名游戏开发商 • 2026年度作者</p>
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
             <div className="bg-white rounded-lg p-6 shadow-sspai border border-gray-100">
               <h3 className="font-bold text-gray-900 mb-4 pl-1 text-[15px] flex items-center justify-between">
                 目录
                 <span className="text-xs font-normal text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{readingProgress}%</span>
               </h3>
               <nav className="space-y-0.5 relative">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-100"></div>
                 {tocItems.map((item) => (
                   <a 
                     key={item.id}
                     href={`#${item.id}`}
                     onClick={(e) => scrollToSection(e, item.id)}
                     className={`
                       block py-1.5 pr-3 transition-colors relative z-10 rounded-r border-l-2
                       ${item.level === 1 ? 'pl-6' : 'pl-9 text-[12px]'}
                       ${activeSection === item.id 
                         ? 'text-sspai-red font-bold bg-red-50/50 border-sspai-red' 
                         : 'text-gray-600 hover:text-sspai-red hover:bg-gray-50 border-transparent hover:border-gray-300 font-normal'}
                       ${item.level === 1 && activeSection !== item.id ? 'text-[13px]' : ''}
                     `}
                   >
                     {item.title}
                   </a>
                 ))}
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
