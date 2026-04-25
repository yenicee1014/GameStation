import { Link } from 'react-router-dom';
import { Heart, ChevronDown, User, Star } from 'lucide-react';
import { useState } from 'react';
import Footer from './components/Footer';
import { categoryOptions } from './data';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import avatar from '../picture/avatar.JPG';
import sponsorImage from '../picture/sponsor.jpg';
import goodIdeaImage from '../picture/good-idea.png';
import wechatContact from '../picture/wechat- contact.JPG';
import websiteGroup from '../picture/website-group.JPG';
import logo from '../picture/logo.svg';

const Sponsors = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const sponsors = [
    {
      date: "2026-02-25",
      title: "特别鸣谢",
      isPinned: true,
      content: [
        "百年内无人能懂猫",
        "感谢为 GameStation 提供技术支持与维护。"
      ],
      tags: ["Developer", "Founder"],
      images: [
        { src: wechatContact, caption: "添加开发者" },
        { src: websiteGroup, caption: "官方群" }
      ]
    },
    {
      date: "2026-03-01",
      title: "来自朋友的妙思",
      content: [
        "我其实想的是",
        "每个赞助者都可以留下印象最深的游戏里的一句台词"
      ],
      tags: ["Idea", "Community"],
      image: goodIdeaImage
    },
    {
      date: "2026-02-28",
      title: "001号赞助者留言",
      content: [
        "“老师。那些没有天赋的人呢?他们的人生从一开始就浪费了吗?”"
      ],
      tags: ["Supporter"],
      image: sponsorImage,
      imageSource: "《石河伦吾的朋友们》"
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
              <Link className="nav-link nav-link--with-icon" to="/changelog">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                  <span>更新日志</span>
                </span>
              </Link>
              <Link className="nav-link nav-link--with-icon" to="/sponsors">
                <span className="flex items-center gap-2">
                  <Heart size={14} strokeWidth={2.2} />
                  <span>赞助者名单</span>
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-black to-gray-600 bg-clip-text text-transparent">
              赞助者名单
            </h1>
            <div className="text-xl text-gray-600 w-full leading-relaxed">
              <p className="mb-4">感谢每一位支持 GameStation 的朋友。</p>
              <p>你们的支持是我们持续创作高质量攻略的最大动力。</p>
              <p className="mt-4">
                如果您喜欢我们的内容，欢迎通过页面底部的“买奶茶”支持我们！您的名字/留言将出现在这里。
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-24 relative before:absolute before:left-[19px] md:before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-black/20 before:to-transparent">
            {sponsors
              .sort((a, b) => {
                // 1. Pinned items always on top
                if (a.isPinned && !b.isPinned) return -1;
                if (!a.isPinned && b.isPinned) return 1;
                // 2. Sort by date descending (newest first) for others
                return new Date(b.date) - new Date(a.date);
              })
              .map((sponsor, index) => (
              <div key={index} className="relative pl-12 md:pl-0 md:grid md:grid-cols-[200px_1fr] md:gap-12 group">
                {/* Timeline Dot (Mobile) */}
                <div className="absolute left-[15px] top-2.5 w-2 h-2 rounded-full bg-black md:hidden ring-4 ring-white/50" />

                {/* Left Column: Meta info */}
                <div className="md:text-right mb-4 md:mb-0 md:sticky md:top-24 self-start">
                  <div className="inline-block md:block bg-black/5 md:bg-transparent rounded-full md:rounded-none px-3 py-1 md:p-0 mb-2 md:mb-1">
                    <span className="font-mono text-sm font-bold text-black">{sponsor.date}</span>
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="space-y-6">
                  <div className="relative">
                    
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-black group-hover:text-red-500 transition-colors">
                        {sponsor.title}
                      </h2>
                      {sponsor.isPinned ? (
                        <div 
                          className="px-2 py-0.5 rounded text-xs font-bold border border-red-200 bg-red-50 text-red-600 shadow-sm flex-shrink-0 flex items-center justify-center"
                        >
                           置顶
                        </div>
                      ) : (
                        <div 
                          className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white/50 shadow-sm flex-shrink-0 flex items-center justify-center bg-gray-100"
                        >
                           <Heart size={16} className="text-red-500 fill-current" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {sponsor.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-red-50 border border-red-100 rounded text-xs text-red-600 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4 text-gray-800 leading-relaxed text-lg">
                  {sponsor.content.map((paragraph, i) => (
                    <p key={i} className="whitespace-nowrap overflow-hidden text-ellipsis">{paragraph}</p>
                  ))}
                  {sponsor.images ? (
                    <>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        {sponsor.images.map((img, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white">
                              <img 
                                src={img.src} 
                                alt={img.caption} 
                                className="absolute inset-0 w-full h-full object-contain p-2" 
                              />
                            </div>
                            <p className="text-sm text-gray-500 mt-2 font-medium">{img.caption}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-400 mt-4 text-center">如无法进群，请添加开发者，备注：游戏群</p>
                    </>
                  ) : sponsor.image && (
                    <div className="mt-4">
                      <img src={sponsor.image} alt={sponsor.title} className="w-full rounded-lg shadow-sm" />
                      {sponsor.imageSource && (
                        <p className="text-sm text-gray-500 mt-2 text-right">来源：{sponsor.imageSource}</p>
                      )}
                    </div>
                  )}
                </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
