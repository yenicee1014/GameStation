import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  Flame, 
  Search, 
  Users, 
  Video, 
  Star,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import ps5Badge from '../picture/ps5-black-badge-01-en-11sep20.webp';
import { booksData, categoryOptions } from './data';
import searchIcon from '../picture/search-icon.svg';
import alipayImage from './assets/Alipay-payme.JPG';
import wechatImage from './assets/WeChat-payme.JPG';
import './App.css';

// 修复预览环境 "tailwind is not defined" 报错的全局防御
if (typeof window !== 'undefined') {
  window.tailwind = window.tailwind || {};
  window.tailwind.config = window.tailwind.config || {};
}



// 将 3D CSS 提取为字符串，避免在预览环境中直接使用 <style> 引起错误
const globalStyles = `
  :root {
    --case-thickness: 16px; 
    --case-half-thick: 8px;
  }

  .book-wrapper { perspective: 1500px; position: relative; z-index: 1; transition: z-index 0s 0.4s; }
  .book-wrapper:hover { z-index: 50; transition: z-index 0s 0s; }

  .book-card {
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.2);
    transform: rotateY(-18deg) rotateX(8deg) scale(0.96);
  }
  .book-wrapper:hover .book-card { transform: rotateY(0deg) rotateX(0deg) scale(1.08); }

  .book-front { transform: translateZ(var(--case-half-thick)); z-index: 2; }
  
  .book-back { transform: translateZ(calc(var(--case-half-thick) * -1)); background-color: #002f6c; border-radius: 4px; }
  .book-card .book-back { transition: box-shadow 0.5s ease; box-shadow: -15px 15px 20px -8px rgba(0, 0, 0, 0.9), 0 0 4px rgba(255, 255, 255, 0.05); }
  .book-wrapper:hover .book-card .book-back { box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 1), 0 0 15px rgba(255, 255, 255, 0.1); }

  .book-page-right { position: absolute; right: 0; top: 0; bottom: 0; width: var(--case-thickness); margin-right: calc(var(--case-half-thick) * -1); transform: rotateY(90deg); }
  .book-page-left { position: absolute; left: 0; top: 0; bottom: 0; width: var(--case-thickness); margin-left: calc(var(--case-half-thick) * -1); transform: rotateY(-90deg); }
  .book-page-top { position: absolute; top: 0; left: 0; right: 0; height: var(--case-thickness); margin-top: calc(var(--case-half-thick) * -1); transform: rotateX(90deg); }
  .book-page-bottom { position: absolute; bottom: 0; left: 0; right: 0; height: var(--case-thickness); margin-bottom: calc(var(--case-half-thick) * -1); transform: rotateX(-90deg); }

  .case-edge-plastic { 
    background-color: rgba(0, 67, 156, 0.95); 
    box-shadow: inset 0 0 8px rgba(255,255,255,0.15), inset 0 0 3px rgba(0,0,0,0.6); 
  }

  .perspective-modal {
    perspective: 2500px;
  }

  .giant-open-book {
    transform-style: preserve-3d;
    transform: translateX(-25%) rotateX(15deg) rotateY(-5deg);
    transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.1, 1);
  }

  .giant-open-book.is-opened {
    transform: translateX(0%) rotateX(5deg) rotateY(0deg);
  }

  .cover-assembly {
    transform-style: preserve-3d;
    transform-origin: left center;
    transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.1, 1);
    transform: rotateY(0deg); 
    z-index: 20;
  }

  .giant-open-book.is-opened .cover-assembly {
    transform: rotateY(-180deg);
  }

  .cover-front, .cover-back {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .cover-back {
    transform: rotateY(180deg); 
  }

  .paper-texture {
    background-color: #fdfbf7;
    background-image: 
      linear-gradient(90deg, transparent 98%, rgba(0,0,0,0.02) 100%),
      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8), rgba(253,251,247,1));
  }
`;

// 提取出的 PS5 游戏光盘封面 UI 组件
const PS5CoverUI = ({ book, glareRef }) => (
  <div className="absolute inset-0 bg-[#00439c] rounded-[4px] p-[3px] shadow-inner overflow-hidden flex flex-col">
    {/* 鼠标物理反光层 */}
    {glareRef && (
      <div 
        ref={glareRef} 
        className="absolute inset-0 z-50 pointer-events-none opacity-0 transition-opacity duration-300" 
        style={{ mixBlendMode: 'screen' }}
      ></div>
    )}
    
    {/* PS5 顶部白色 Banner */}
    <div className="h-[14%] min-h-[22px] bg-white rounded-t-[1px] flex items-center px-2 z-30 relative shadow-sm">
      <img src={ps5Badge} alt="PS5" className="h-[70%] w-auto object-contain" />
    </div>

    {/* 游戏封面原画区域 */}
    <div className="relative flex-1 bg-black rounded-b-[1px] overflow-hidden">
       <img src={book.imgUrl} alt={book.title} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 pointer-events-none"/>
       
       {/* 底部渐变以凸显文字和标志 */}
       <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none"></div>

       {/* 游戏/漫画标题大字 */}
       <div className="absolute bottom-12 left-2 right-2 z-20 text-center">
          <h2 className="text-white font-black uppercase text-xl leading-tight drop-shadow-lg" style={{ fontFamily: "'Impact', 'Microsoft YaHei', sans-serif" }}>
            {book.title}
          </h2>
       </div>

       {/* 拟物化 ESRB 年龄评级标志 (T for Teen) */}
       <div className="absolute bottom-2 left-2 bg-white text-black p-[2px] border-[1.5px] border-black w-6 h-[34px] flex flex-col justify-between items-center z-30 rounded-sm">
         <span className="text-[4px] font-black leading-none mt-0.5">TEEN</span>
         <span className="text-[22px] font-black leading-none -mt-[2px] tracking-tighter">T</span>
         <span className="text-[3px] font-bold border-t border-black w-full text-center leading-none pt-[1px]">ESRB</span>
       </div>

       {/* 拟物化 PlayStation Studios 标志 */}
       <div className="absolute bottom-2 right-2 z-30 flex flex-col items-center">
         <div className="w-5 h-3.5 bg-white rounded-[2px] flex items-center justify-center mb-[2px]">
           <span className="text-black text-[7px] font-black leading-none mt-[1px]">PS</span>
         </div>
         <span className="text-white text-[3.5px] font-bold tracking-[0.2em]">STUDIOS</span>
       </div>
    </div>
  </div>
);


const BookCardItem = ({ book, onClick, isSelected }) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isSelected) return;
    
    if (cardRef.current.style.transitionDuration !== '0.1s') {
      cardRef.current.style.transition = 'transform 0.1s ease-out';
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20; 
    const rotateY = ((x - centerX) / centerX) * 20;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
    
    if (glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || isSelected) return;
    cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.2)';
    cardRef.current.style.transform = ''; 
    if (glareRef.current) glareRef.current.style.opacity = '0';
  };

  return (
    <div 
      className={`book-wrapper cursor-pointer group ${isSelected ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      onClick={(e) => onClick(e, book)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        // 微调 Aspect Ratio 以更接近光盘盒比例 (1:1.28)
        className="book-card relative w-full aspect-[1/1.28] rounded-[4px]"
      >
        {/* PS5 蓝色光盘盒材质 */}
        <div className="book-back absolute inset-0 rounded-[4px]"></div>
        
        {/* 光盘盒侧边 (蓝色塑胶) */}
        <div className="book-page-left flex flex-col items-center py-3 bg-[#003b8a] overflow-hidden rounded-l-[2px]">
           <span className="text-white font-black text-[6px] mb-4">PS5</span>
           <span className="text-white font-bold text-[8px] tracking-widest truncate w-[80%] text-center" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
             {book.title}
           </span>
        </div>
        <div className="book-page-right case-edge-plastic"></div>
        <div className="book-page-top case-edge-plastic"></div>
        <div className="book-page-bottom case-edge-plastic"></div>
        
        {/* 正面光盘盒包装UI */}
        <div className="book-front absolute inset-0 rounded-[4px] overflow-hidden">
          <PS5CoverUI book={book} glareRef={glareRef} />
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const navItemRef = useRef(null);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navItemRef.current && !navItemRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [selectedBook, setSelectedBook] = useState(null);
  const [originRect, setOriginRect] = useState(null);
  const [flyData, setFlyData] = useState(null);
  
  const [isOpened, setIsOpened] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  const modalCoverRef = useRef(null);
  const [flipStyle, setFlipStyle] = useState({ opacity: 0 });

  // 动态挂载 3D 样式，避免在特定环境下产生解析冲突
  useLayoutEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = globalStyles;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // --- Gemini AI 状态 ---
  const [aiReview, setAiReview] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiError, setAiError] = useState(null);
  
  // 捐赠弹窗状态
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const filteredBooks = booksData.filter((book) => {
    // 1. 分类筛选
    const matchesCategory = activeCategory === "全部" || book.category === activeCategory;
    
    // 2. 搜索关键词筛选 (标题或作者)
    const matchesSearch = searchQuery === "" || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredBooks.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

  // --- Gemini API 调用逻辑 ---
  const generateAIReview = async (title, author) => {
    setIsGenerating(true);
    setAiReview(null);
    setAiError(null);
    
    const apiKey = ""; // 执行环境会在运行时自动提供 API Key
    const prompt = `你是一位资深的次世代主机游戏鉴赏家。请为作品《${title}》（制作方：${author}）写一段引人入胜、免剧透的深度推荐评测。字数控制在100-150字，使用专业的游戏鉴赏语气，重点突出其沉浸感、核心魅力和独特的艺术风格。`;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    try {
      // 带有指数退避（Exponential Backoff）的重试机制
      let attempt = 0;
      let response;
      while (attempt < 5) {
        response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        if (response.ok) break;
        
        const delay = Math.pow(2, attempt) * 1000;
        attempt++;
        await new Promise(r => setTimeout(r, delay));
      }

      if (!response.ok) throw new Error("API call failed after retries.");

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (text) {
        setAiReview(text);
      } else {
        throw new Error("No text generated.");
      }
    } catch (err) {
      setAiError("AI 鉴赏生成失败，请稍后再试。");
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleBookClick = (e, book) => {
    const rect = e.currentTarget.querySelector('.book-card').getBoundingClientRect();
    setOriginRect(rect);
    setSelectedBook(book);
    setIsClosing(false);
    setIsOpened(false);
  };

  useLayoutEffect(() => {
    if (selectedBook && originRect && modalCoverRef.current && !isClosing && !isOpened) {
      const targetRect = modalCoverRef.current.getBoundingClientRect();
      const scale = originRect.width / targetRect.width;
      const originCenterX = originRect.left + originRect.width / 2;
      const originCenterY = originRect.top + originRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;

      const dx = originCenterX - targetCenterX;
      const dy = originCenterY - targetCenterY;

      setFlyData({ dx, dy, scale });

      setFlipStyle({
        transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
        transition: 'none',
        opacity: 1, 
        transformOrigin: '50% 50%',
      });

      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setFlipStyle({
            transform: `translate(0px, 0px) scale(1)`,
            transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
            opacity: 1,
            transformOrigin: '50% 50%',
          });
          
          setTimeout(() => setIsOpened(true), 600);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [selectedBook, originRect, isClosing, isOpened]);

  const handleClose = () => {
    setIsClosing(true);
    setIsOpened(false); 
    
    setTimeout(() => {
      if (flyData) {
        setFlipStyle({
          transform: `translate(${flyData.dx}px, ${flyData.dy}px) scale(${flyData.scale})`,
          transition: 'transform 0.5s cubic-bezier(0.8, 0.2, 0.2, 1)',
          opacity: 1,
          transformOrigin: '50% 50%',
        });
      }
      setTimeout(() => {
        setSelectedBook(null);
        setOriginRect(null);
        setFlyData(null);
        setIsClosing(false);
        
        // 重置 AI 状态
        setAiReview(null);
        setAiError(null);
      }, 500);
    }, 600);
  };

  return (
    <div
      className="min-h-screen bg-[#050505] font-sans text-gray-200 selection:bg-black selection:text-[#fdfbf7] overflow-x-hidden"
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
            <div className="site-nav__brand">Gamestation</div>
            <nav className="site-nav__links">
              <div className="nav-item" tabIndex={0} ref={navItemRef}>
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
                      <button
                        key={category}
                        type="button"
                        className={`nav-panel__link ${activeCategory === category ? 'is-active' : ''}`}
                        onClick={() => {
                          setActiveCategory(category);
                          setCurrentPage(1);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {category}
                      </button>
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
                placeholder="搜索游戏名或攻略关键词" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // 搜索时重置页码
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* 页面主体 */}
      <div className="pt-[72px] flex">
        {/* 主网格 */}
        <main className="flex-1 p-10 md:p-14 lg:p-20 overflow-x-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-12 gap-y-16 max-w-[1400px] mx-auto">
            {currentBooks.length > 0 ? (
              currentBooks.map((book) => (
               <BookCardItem 
                 key={book.id} 
                 book={book} 
                 isSelected={selectedBook?.id === book.id}
                 onClick={handleBookClick} 
               />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                 <Search size={48} className="mb-4 opacity-20" />
                 <p className="text-xl font-bold">暂无该游戏攻略</p>
                 <p className="text-sm mt-2 opacity-60">请尝试更换关键词或查看其他分类</p>
              </div>
            )}
          </div>
          <div className="pagination">
            <button
              className="pagination__nav"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            <div className="pagination__center">
              <div className="pagination__brand">
                <span className="pagination__letter is-blue">G</span>
                <span className="pagination__letter is-red">a</span>
                <span className="pagination__letter is-yellow">m</span>
                <span className="pagination__letter is-blue">e</span>
                <span className="pagination__letter is-green">s</span>
                <span className="pagination__letter is-red">t</span>
                <span className="pagination__letter is-yellow">a</span>
                <span className="pagination__letter is-blue">t</span>
                <span className="pagination__letter is-green">i</span>
                <span className="pagination__letter is-red">o</span>
                <span className="pagination__letter is-yellow">n</span>
              </div>
              <div className="pagination__pages">
                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  const isActive = page === currentPage;
                  return (
                    <button
                      key={page}
                      className={`pagination__page ${isActive ? 'is-active' : ''}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              className="pagination__nav"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </div>
        </main>
      </div>

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

      {/* 沉浸式 3D 巨型光盘盒展开模态框 */}
      {selectedBook && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 perspective-modal overflow-hidden">
          <div 
            className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`} 
            onClick={handleClose}
          ></div>
          
          <button onClick={handleClose} className={`absolute top-6 right-6 z-50 p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-opacity duration-300 ${isOpened && !isClosing ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <X size={28} />
          </button>

          <div style={flipStyle} className="relative w-full max-w-5xl md:h-[70vh] aspect-[2/1.28] mx-auto z-10 pointer-events-none">
            
            <div className={`giant-open-book absolute inset-0 flex shadow-2xl ${isOpened ? 'is-opened pointer-events-auto' : ''}`}>
               
              {/* --- 右侧光盘盒内侧与游戏说明书页 --- */}
              <div className="absolute right-0 w-1/2 h-full paper-texture rounded-r-md rounded-bl-sm z-10 shadow-[-10px_20px_40px_rgba(0,0,0,0.8)] overflow-hidden">
                 <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none z-0"></div>
                 
                 <div className={`relative z-10 p-10 lg:p-16 h-full flex flex-col transition-all duration-700 delay-200 ${isOpened && !isClosing ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                    <div className="absolute top-4 right-4 text-8xl font-black italic opacity-5 pointer-events-none select-none text-black">
                       {selectedBook.volume || '1'}
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-wide mb-3 leading-tight" style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', sans-serif" }}>
                      {selectedBook.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-bold uppercase tracking-widest mb-8 border-b border-gray-300 pb-4">
                      {selectedBook.author}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-3 py-1 bg-[#00439c] text-white text-xs font-bold uppercase tracking-wider rounded-sm">次世代游戏</span>
                      <span className="px-3 py-1 border border-gray-400 text-gray-800 text-xs font-bold uppercase tracking-wider rounded-sm">单人剧情</span>
                      {selectedBook.tag && (
                        <span className="px-3 py-1 bg-[#ffd700] text-black text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-1">
                          <Star size={10} fill="currentColor" /> {selectedBook.tag} 评分
                        </span>
                      )}
                    </div>

                    {/* AI 评测或原生描述展示区 */}
                    <div className="flex-1 overflow-y-auto pr-2 mb-6" style={{ scrollbarWidth: 'thin' }}>
                      {isGenerating ? (
                        <div className="flex flex-col items-center justify-center h-full space-y-3 text-purple-600">
                          <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                          <p className="text-xs font-bold animate-pulse">✨ AI 正在深度解析游戏世界观...</p>
                        </div>
                      ) : aiReview ? (
                        <div className="p-4 bg-purple-900/5 border border-purple-500/30 rounded-md shadow-sm">
                          <p className="text-gray-800 text-sm leading-relaxed text-justify font-serif">
                             <span className="font-bold text-purple-700 mr-2 block mb-1">✨ AI 深度鉴赏：</span>
                             {aiReview}
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-700 text-sm leading-relaxed mb-8 text-justify font-serif">
                          {selectedBook.description}
                        </p>
                      )}
                      {aiError && <p className="text-red-500 text-xs mt-2">{aiError}</p>}
                    </div>

                    <div className="mt-auto flex flex-col gap-3">
                      <div className="flex gap-4">
                        <Link 
                          to={`/${selectedBook.slug || selectedBook.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')}-walkthrough`}
                          className="flex-1 py-3 bg-[#00439c] text-white font-black uppercase tracking-widest text-sm hover:bg-[#003b8a] transition-colors rounded-sm shadow-xl flex items-center justify-center"
                        >
                          完整图文攻略
                        </Link>
                        <button className="flex-1 py-3 bg-transparent border-2 border-gray-900 text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors rounded-sm">
                          全奖杯列表
                        </button>
                      </div>
                      <a 
                         href="https://www.playstation.com" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black uppercase tracking-widest text-sm hover:opacity-90 transition-opacity rounded-sm shadow-xl flex items-center justify-center gap-2"
                       >
                         友情资源网站
                       </a>
                    </div>
                 </div>
              </div>

              {/* --- 左侧翻盖总成（光盘盒封面） --- */}
              <div ref={modalCoverRef} className="cover-assembly absolute right-0 w-1/2 h-full rounded-l-[4px] shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
                 
                 {/* 正面复用抽取出的 PS5CoverUI 保持完美衔接 */}
                 <div className="cover-front absolute inset-0 rounded-[4px] overflow-hidden">
                    <PS5CoverUI book={selectedBook} glareRef={null} />
                 </div>

                 {/* 左内侧（翻开时显示）：蓝色的游戏光盘盒塑料内壁与光盘 */}
                 <div className="cover-back absolute inset-0 bg-[#003b8a] rounded-l-[4px] rounded-br-sm overflow-hidden flex flex-col justify-center items-center border border-white/10 shadow-inner">
                   
                   {/* 背景：PS5 蓝色半透明塑料外壳质感 */}
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/plastic.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20 pointer-events-none"></div>
                   
                   {/* 游戏光盘 (Disc) */}
                   <div className="relative w-[85%] aspect-square rounded-full shadow-2xl flex items-center justify-center overflow-hidden z-10 group">
                      
                      {/* 光盘外圈反光层 */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-black/40 pointer-events-none z-20 mix-blend-overlay"></div>
                      
                      {/* 模拟全息 CD 纹理反光 */}
                      <div className="absolute inset-0 rounded-full opacity-20 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.5)_40deg,transparent_80deg,rgba(255,255,255,0.5)_120deg,transparent_160deg,rgba(255,255,255,0.5)_240deg,transparent_360deg)] animate-[spin_10s_linear_infinite] pointer-events-none z-30 mix-blend-color-dodge"></div>

                      {/* 光盘印刷面 (Artwork) */}
                      <div className="absolute inset-0 bg-gray-200">
                         <img src={selectedBook.imgUrl} alt="Disc Art" className="w-full h-full object-cover scale-110 blur-[1px] opacity-90"/>
                         <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]"></div>
                      </div>

                      {/* 盘面上的文字信息布局 (模仿图1) */}
                       <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-12">
                          {/* 顶部标题 - 已移除 */}
                          <div className="w-[70%] text-center"></div>
                          
                          {/* 底部 PS 蓝条 */}
                         <div className="w-full h-1/3 absolute bottom-0 bg-gradient-to-t from-[#003087] to-transparent opacity-90 mix-blend-multiply pointer-events-none"></div>
                         <div className="absolute bottom-10 flex flex-col items-center gap-1 w-full">
                             <div className="w-full h-[1px] bg-white/30 mb-2 w-[80%]"></div>
                             <img src={ps5Badge} alt="PS5" className="h-6 w-auto object-contain brightness-0 invert drop-shadow-md opacity-90" />
                             <div className="text-[6px] text-white/80 font-bold tracking-widest uppercase mt-1">
                               {selectedBook.author}
                            </div>
                         </div>
                      </div>

                      {/* 光盘中心孔 (Spindle Hole) */}
                      <div className="absolute w-[18%] aspect-square rounded-full border-4 border-white/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] z-40 bg-transparent backdrop-blur-sm flex items-center justify-center overflow-hidden">
                          {/* 露出底下的蓝色盒子卡扣 */}
                          <div className="w-full h-full bg-[#00285e] relative">
                             {/* 卡扣细节 */}
                             <div className="absolute inset-[20%] rounded-full border border-white/10 bg-[#003b8a] shadow-inner flex items-center justify-center">
                                <div className="w-[60%] h-[60%] rounded-full bg-[#002250] shadow-lg"></div>
                             </div>
                             {/* 卡扣爪 */}
                             {[0, 90, 180, 270].map(deg => (
                                <div key={deg} className="absolute w-1 h-3 bg-[#004ec2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-14px)` }}></div>
                             ))}
                          </div>
                      </div>
                      
                      {/* 内圈透明环 */}
                      <div className="absolute w-[22%] aspect-square rounded-full border border-white/20 pointer-events-none z-30"></div>
                   </div>

                   {/* 盒子边缘的高光 */}
                   <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/20"></div>
                   <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-black/20 shadow-[inset_-2px_0_5px_rgba(0,0,0,0.5)]"></div>

                 </div>
              </div>

            </div>
          </div>
        </div>
      )}

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