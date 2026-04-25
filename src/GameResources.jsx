import { Link, useParams } from 'react-router-dom';
import { Calendar, ChevronDown, Heart, ExternalLink, Video, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import { categoryOptions, booksData } from './data';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import avatar from '../picture/avatar.JPG';
import logo from '../picture/logo.svg';
import tlou2EllieSeattle from '../picture/page1-game-walkthrough/tlou2/img_7007.jpeg';
import tlou2E3Demo from '../picture/page1-game-walkthrough/tlou2/Last-of-Us-Part-2-Ellie-Stealth-Feature.jpg';
import tlou2ConceptArtZIP from '../picture/page1-game-walkthrough/tlou2/tlou2-art-concept.zip';
import tlou2EllieCosplayPDF from '../picture/page1-game-walkthrough/tlou2/ellie-cosplay-guide.pdf';
import tlou2ConceptArt from '../picture/page1-game-walkthrough/tlou2/tlou2-overview.jpg';
import artbook from '../picture/page1-game-walkthrough/tlou2/tlou2-art-concept/art-concept-13.jpeg';
import tlouHboProductionDesign from '../picture/page1-game-walkthrough/tlou2/tlou-hbo-production-design.jpg';
import tlouTitleSequenceArt from '../picture/page1-game-walkthrough/tlou2/tlou-title-sequence-art.jpg';
import tlouFontsInUse from '../picture/page1-game-walkthrough/tlou2/tlou-fonts-in-use.jpg';
import tlouSantaBarbaraArt from '../picture/page1-game-walkthrough/tlou2/emilia-schatz-san-wilds-upper-07.jpg';
import ellieCosplayCover from '../picture/page1-game-walkthrough/tlou2/ellie-cosplay-guide-cover.jpg';
import tlou2OST from '../picture/page1-game-walkthrough/tlou2/The-Last-Of-Us-Part-II_original- soundtrack.webp';

const GameResources = () => {
  const { slug } = useParams();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Find the game based on the slug
    const foundGame = booksData.find(b => {
      // If the game object has a slug property, check it
      if (b.slug === slug) return true;
      
      // Otherwise, generate a slug from the title and compare
      const generatedSlug = b.title.toLowerCase().trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-\u4e00-\u9fa5]+/g, '') // Remove all non-word chars (except - and Chinese chars)
        .replace(/\-\-+/g, '-');        // Replace multiple - with single -
        
      return generatedSlug === slug;
    });
    setGame(foundGame);
  }, [slug]);

  // Mock resources data - in a real app this would come from a database or separate file
  const resourcesMap = {
    'the-last-of-us-part-2': [
      {
        title: "The Last of Us HBO: Production Design Exclusive (Vanity Fair)",
        type: "Article",
        date: "2023-01-23",
        description: "Vanity Fair 独家专访：深入解析 HBO 剧集第二集的场景美术设计。了解美术团队如何还原游戏中的波士顿废墟、博物馆以及循声者（Clickers）的恐怖细节。",
        link: "https://www.vanityfair.com/hollywood/2023/01/the-last-of-us-hbo-episode-2-production-design-exclusive",
        tags: ["HBO", "Production Design", "Interview"],
        imgUrl: tlouHboProductionDesign
      },
      {
        title: "The Last of Us (2013) Title Sequence (Art of the Title)",
        type: "Design",
        date: "2013",
        description: "深入幕后，探索《最后生还者》初代标志性片头动画的创作历程。包含对创意总监 Neil Druckmann 及视觉设计团队的独家专访，解析真菌蔓延视觉效果背后的设计理念。",
        link: "https://www.artofthetitle.com/title/the-last-of-us-2013/",
        tags: ["Title Design", "Interview", "Visual Arts"],
        imgUrl: tlouTitleSequenceArt
      },
      {
        title: "The Last of Us Posters and Titles (Fonts In Use)",
        type: "Design",
        date: "2023",
        description: "深入解析《最后生还者》系列（游戏与剧集）所使用的字体设计。了解标志性的 Press Gothic 字体及其在海报和标题中的应用。",
        link: "https://fontsinuse.com/uses/52504/the-last-of-us-posters-and-titles",
        tags: ["Fonts", "Typography", "Design"],
        imgUrl: tlouFontsInUse
      },
      {
        title: "Santa Barbara \"Wilds\" (ArtStation)",
        type: "Art",
        date: "2020",
        description: "欣赏《最后生还者2》中圣塔巴巴拉地区的精美环境概念艺术，展示了游戏后期的独特风貌与细节设计。",
        link: "https://www.artstation.com/artwork/ykd8K8",
        tags: ["Concept Art", "Environment", "Santa Barbara"],
        imgUrl: tlouSantaBarbaraArt
      },
      {
        title: "The Last of Us Wiki (粉丝自建站)",
        type: "Wiki",
        date: "2024",
        description: "最后生还者宇宙最全面的数据库。查找关于角色、感染者、派系、地点等的详细信息。",
        link: "https://thelastofus.fandom.com/wiki/The_Last_of_Us_Wiki",
        tags: ["Wiki", "Database", "Community"]
      },
      {
        title: "现实与游戏的交错：西雅图圣地巡礼",
        type: "Article",
        date: "2022-08-28",
        description: "一篇精彩的博客文章，详细对比了《最后生还者2》游戏场景与西雅图真实地点的异同。作者实地走访西雅图，对比了游戏中的派克市场、法院、国会山等地标。",
        link: "https://the5thcrewmember.com/2022/08/28/seattle-in-the-last-of-us-part-ii-in-game-vs-reality/",
        tags: ["Real Life", "Seattle", "Photography"],
        imgUrl: tlou2EllieSeattle
      },
      {
        title: "官方原声带 (OST)",
        type: "Music",
        date: "2020-06-19",
        description: "由 Gustavo Santaolalla 和 Mac Quayle 创作的完整游戏原声带，包含 28 首曲目。",
        link: "https://www.bilibili.com/video/BV1rZ4y1H7F4",
        tags: ["bilibili", "Music"],
        bvid: "BV1rZ4y1H7F4"
      },
      {
        title: "E3 2018 演示实机演示",
        type: "Video",
        date: "2018-06-12",
        description: "震惊世界的 E3 实机演示，展示了艾莉在丛林中的战斗以及与蒂娜的舞会场景。",
        link: "https://www.bilibili.com/video/BV1bZ4y1W77s",
        tags: ["bilibili", "Gameplay"],
        bvid: "BV1bZ4y1W77s"
      },
      {
        title: "概念艺术集",
        type: "Art",
        date: "2020-06-19",
        description: "包含数百张环境、角色和道具的概念设计图，展示了游戏美术的演变过程。",
        link: tlou2ConceptArtZIP,
        tags: ["Artbook", "ZIP"],
        imgUrl: artbook
      },
      {
        title: "官方 cosplay 指南",
        type: "Guide",
        date: "2019-09-26",
        description: "艾莉的官方 Cosplay 细节指南，包含服装纹理、纹身细节和武器设定。",
        link: tlou2EllieCosplayPDF,
        tags: ["Cosplay", "Official"],
        imgUrl: ellieCosplayCover
      }
    ],
    'resident-evil-9': [
      {
        title: "官方网站",
        type: "Web",
        date: "2024-01-01",
        description: "访问 Resident Evil 官方游戏页面获取最新资讯和购买信息。",
        link: "https://www.residentevil.com/requiem/en-us/",
        tags: ["Official", "Web"]
      }
    ],
    // Default resources for other games
    'default': [
      {
        title: "官方网站",
        type: "Web",
        date: "2024-01-01",
        description: "访问 PlayStation 官方游戏页面获取最新资讯和购买信息。",
        link: "https://www.playstation.com",
        tags: ["Official", "Web"]
      }
    ]
  };

  const resources = game && resourcesMap[slug] ? resourcesMap[slug] : resourcesMap['default'];

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

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
                  <Calendar size={14} strokeWidth={2.2} />
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
              {game.title} 资源
            </h1>
            <div className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              <p className="mb-4">探索 {game.title} 的相关资源、媒体和下载内容。</p>
              <p>精选最优质的社区与官方内容。</p>
            </div>
          </div>

          {/* Timeline / Resource List */}
          <div className="space-y-24 relative before:absolute before:left-[19px] md:before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-black/20 before:to-transparent">
            {resources.map((resource, index) => (
              <div key={index} className="relative pl-12 md:pl-0 md:grid md:grid-cols-[200px_1fr] md:gap-12 group">
                {/* Timeline Dot (Mobile) */}
                <div className="absolute left-[15px] top-2.5 w-2 h-2 rounded-full bg-black md:hidden ring-4 ring-white/50" />

                {/* Left Column: Meta info */}
                <div className="md:text-right mb-4 md:mb-0 md:sticky md:top-24 self-start">
                  <div className="inline-block md:block bg-black/5 md:bg-transparent rounded-full md:rounded-none px-3 py-1 md:p-0 mb-2 md:mb-1">
                    <span className="font-mono text-sm font-bold text-black">{resource.type}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium flex items-center md:justify-end gap-2">
                    <Calendar size={12} className="md:hidden" />
                    {resource.date}
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="space-y-6">
                  <div className="relative">
                    
                    {resource.bvid ? (
                      <div className="mb-6 rounded-lg overflow-hidden border border-black/10 shadow-sm bg-black/5 aspect-video relative">
                        <iframe
                          src={`//player.bilibili.com/player.html?bvid=${resource.bvid}&page=1&high_quality=1&danmaku=0&autoplay=0`}
                          scrolling="no"
                          border="0"
                          frameBorder="no"
                          framespacing="0"
                          allowFullScreen={true}
                          className="absolute inset-0 w-full h-full"
                        ></iframe>
                      </div>
                    ) : resource.imgUrl && (
                      <div className="mb-6 rounded-lg overflow-hidden border border-black/10 shadow-sm bg-black/5">
                        <img src={resource.imgUrl} alt={resource.title} className="w-full h-auto" />
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-black group-hover:text-blue-600 transition-colors">
                        {resource.type === 'Art' || resource.type === 'Guide' ? (
                           <a href={resource.link} download className="hover:underline flex items-center gap-2">
                            {resource.title}
                            <Download size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <a href={resource.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                            {resource.title}
                            <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        )}
                      </h2>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {resource.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-black/5 border border-black/10 rounded text-xs text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4 text-gray-800 leading-relaxed text-lg">
                      <p>{resource.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GameResources;
