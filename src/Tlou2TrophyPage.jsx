import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronDown, Search, X, Trophy, Map } from 'lucide-react';
import Tlou2TrophyList from './components/Tlou2TrophyList';
import Tlou2Guide from './components/Tlou2Guide';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import alipayImage from './assets/Alipay-payme.JPG';
import wechatImage from './assets/WeChat-payme.JPG';
import { categoryOptions } from './data';

export default function Tlou2TrophyPage() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('trophies'); // 'trophies' or 'guide'

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

      <div className="pt-[100px] flex pb-10 flex-col min-h-screen">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 w-full mb-8">
            <div className="flex gap-4 border-b border-white/10 pb-1">
                <button 
                    onClick={() => setActiveTab('trophies')}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === 'trophies' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                >
                    <Trophy size={16} />
                    奖杯列表
                    {activeTab === 'trophies' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>}
                </button>
                <button 
                    onClick={() => setActiveTab('guide')}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === 'guide' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                >
                    <Map size={16} />
                    全收集攻略
                    {activeTab === 'guide' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>}
                </button>
            </div>
        </div>

        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1600px] mx-auto px-4 md:px-6">
            {activeTab === 'trophies' ? <Tlou2TrophyList /> : <Tlou2Guide />}
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
