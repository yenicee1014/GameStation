import { Link } from 'react-router-dom';
import { Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { categoryOptions } from './data';
import backgroundImage from '../../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import avatar from '../../picture/avatar.JPG';

const Changelog = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const updates = [
    {
      version: "0.0.1",
      date: "2026-02-25",
      title: "开启项目",
      content: [
        "放假一直在打游戏，尤其是博德之门3，打得过程中一直在各种地方找攻略（三周目玩家表示bd3可玩性太高了），所以就诞生了做攻略网站的想法，打算自己做是因为我觉得别的平台做的不好看，很乱，我只想要纯净的信息检索，而不是一堆广告，和一些没有太大意义的论坛。",
        "我自己打游戏不喜欢吵架，友好讨论早就成为乌托邦，所以本网站不会开设论坛功能，大家尽情探索游戏乐趣吧！"
      ],
      tags: ["vibecoding"]
    }
  ];

  return (
    <div 
      className="min-h-screen font-sans selection:bg-black selection:text-white text-gray-900"
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
                        className="nav-panel__link"
                        onClick={() => {
                          setIsCategoryOpen(false);
                        }}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="nav-link nav-link--with-icon">
                <Calendar size={14} strokeWidth={2.2} />
                更新日志
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-black to-gray-600 bg-clip-text text-transparent">
              更新日志
            </h1>
            <div className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              <p className="mb-4">探索 GameStation 的最新更新、改进和修复。</p>
              <p>我们要打造最极致的游戏探索体验。</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-24 relative before:absolute before:left-[19px] md:before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-black/20 before:to-transparent">
            {updates.map((update, index) => (
              <div key={index} className="relative pl-12 md:pl-0 md:grid md:grid-cols-[200px_1fr] md:gap-12 group">
                {/* Timeline Dot (Mobile) */}
                <div className="absolute left-[15px] top-2.5 w-2 h-2 rounded-full bg-black md:hidden ring-4 ring-white/50" />

                {/* Left Column: Meta info */}
                <div className="md:text-right mb-4 md:mb-0 md:sticky md:top-24 self-start">
                  <div className="inline-block md:block bg-black/5 md:bg-transparent rounded-full md:rounded-none px-3 py-1 md:p-0 mb-2 md:mb-1">
                    <span className="font-mono text-sm font-bold text-black">{update.version}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium flex items-center md:justify-end gap-2">
                    <Calendar size={12} className="md:hidden" />
                    {update.date}
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="space-y-6">
                  <div className="relative">
                    {/* Timeline Dot (Desktop) - Removed */}
                    
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-black group-hover:text-blue-600 transition-colors">
                        {update.title}
                      </h2>
                      <Link 
                        to="/about"
                        className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white/50 shadow-sm flex-shrink-0 hover:border-blue-500 transition-colors cursor-pointer"
                      >
                        <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                      </Link>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {update.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-black/5 border border-black/10 rounded text-xs text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4 text-gray-800 leading-relaxed text-lg">
                      {update.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 py-12 text-center text-gray-500 text-sm bg-white/50 backdrop-blur-sm">
        <p>© 2026 GameStation. Inspired by Intensea.</p>
      </footer>
    </div>
  );
};

export default Changelog;
