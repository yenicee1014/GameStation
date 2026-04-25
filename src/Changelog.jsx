import { Link } from 'react-router-dom';
import { Calendar, ChevronDown, Heart } from 'lucide-react';
import { useState } from 'react';
import Footer from './components/Footer';
import { categoryOptions } from './data';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import avatar from '../picture/avatar.JPG';
import logo from '../picture/logo.svg';
import horizonCover from '../picture/page1-game-walkthrough/forbidden-west/xizhijuejing.jpeg';
import bloodborneCover from '../picture/page1-game-cover/Bloodborne_Cover_Wallpaper.jpg';
import witcher3Cover from '../picture/page1-game-cover/Witcher_3_cover_art.jpg';
import ff7rCover from '../picture/page1-game-cover/FFVIIRemake.png';

const Changelog = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const updates = [
    {
      version: "0.1.4",
      date: "2026-04-23",
      title: "多款经典大作专属沉浸式 UI 主题上线 🎨",
      content: [
        "✨ 《生化危机9：安魂曲》：全新暗黑生存恐怖主题！深邃黑与血红交织的配色，配合复古噪点滤镜与扫描线效果，带你重回保护伞公司的恐怖设施。",
        "✨ 《最后生还者 第一部》：废土丛林主题！苔藓绿与灰土白配色，搭配背景中缓慢漂浮的真菌孢子动画，以及“ENDURE AND SURVIVE”的末世标语。",
        "✨ 《最后生还者 第二部》：极暗复仇主题！极致纯黑背景，极具冲击力的鲜血红高亮，配合粗犷的标题字体与艾莉手写日记风格的点缀，沉浸感拉满。",
        "✨ 《地平线 西之绝境》：全息科技与部落狂野主题！深邃全息蓝黑背景，霓虹青蓝边框光晕，六边形能量护盾纹理，以及部落火焰橙的完美点缀。",
        "✨ 《血源诅咒》：哥特式维多利亚主题！亚楠黑与暗石灰的哥特石板背景，迷雾滤镜，苍白之血红高亮，搭配古典优雅的衬线字体，以及专属的移动端血红悬浮目录栏。",
        "🚀 体验升级：这些专属主题均已在对应的攻略页面实装，不仅包含了色彩与字体的重构，还对所有的组件（如提示框、表格、收集列表）进行了深度的风格化定制。"
      ],
      tags: ["Update", "Design", "UI/UX", "Themes"],
      image: bloodborneCover
    },

    {
      version: "0.1.3",
      date: "2026-04-22",
      title: "《最终幻想7 重制版》PS5 奖杯指南完整上线 🏆",
      content: [
        "✨ 新增攻略：《最终幻想7 重制版》PS5 奖杯指南独立页面现已发布！完整收录了游戏本体及“尤菲篇 (INTERmission)” DLC 的所有白金、金、银、铜奖杯获取条件。",
        "🔗 深度整合：我们在《最终幻想7 重制版》的主线图文攻略页面末尾，精心添加了专属的奖杯指南快捷入口卡片，方便你在通关后无缝衔接白金之旅。",
        "📑 目录优化：主线攻略页面的侧边栏悬浮目录已同步更新，新增了“奖杯指南”锚点，支持一键直达。",
        "🐛 细节修复：修复了《最终幻想7 重制版》攻略页面中极少数 JSX 语法渲染导致的潜在崩溃问题。"
      ],
      tags: ["Update", "Guide", "Trophies"],
      image: ff7rCover
    },
    {
      version: "0.1.2",
      date: "2026-04-19",
      title: "《最终幻想7 重制版》独立 UI 设计上线 & 移动端分享修复 ⚔️",
      content: [
        "🎨 独占视觉体验：为《最终幻想7 重制版》攻略页面量身定制了全新的独立 UI 设计！我们废弃了默认的亮色阅读模式，全面引入了极具 FF7 风格的“魔晄暗色主题 (Mako Dark Theme)”。",
        "✨ 深度定制细节：从背景的全息网格、发光的青色高亮文字、神罗科技风格的斜角卡片，到专属的机甲风字体 (Rajdhani) 和发光滚动条，所有细节都在向游戏原作致敬，为你带来完全沉浸的阅读体验。",
        "🚀 未来计划：这只是一个开始！我们决定：未来的重点游戏攻略都将拥有与其游戏本身美术风格高度契合的“独立定制化 UI”。攻略不再只是枯燥的文字，而是游戏体验的延伸。",
        "🐛 问题修复：修复了在移动端（或窄屏设备下）点击“分享”按钮后，弹窗组件因 CSS 隐藏类名导致一片黑屏、无法显示分享选项的 Bug。"
      ],
      tags: ["Update", "Design", "UI/UX", "Bugfix"],
      image: ff7rCover
    },
    {
      version: "0.1.1",
      date: "2026-04-11",
      title: "移动端交互体验全面升级 🚀",
      content: [
        "📱 新增底部悬浮导航：在手机端阅读攻略时，屏幕底部会固定显示包含“分享”、“点赞”和“目录”功能的悬浮毛玻璃导航栏，操作更便捷。",
        "📖 优化目录交互：点击目录图标后，会从底部平滑弹出抽屉式目录（Bottom Sheet）。支持实时显示阅读进度、高亮当前章节，并完美支持多级目录的展开与折叠。",
        "🔗 全新分享面板：点击分享图标，即可唤出精美的底部分享面板。面板会自动抓取当前游戏封面和专属链接，支持一键分享至微信、朋友圈、微博，或调用手机系统原生分享。",
        "❤️ 沉浸式点赞功能：底部导航栏新增爱心点赞按钮。点赞数据和状态会保存在你的设备中，每个游戏的点赞数均独立记录，互不干扰。"
      ],
      tags: ["Update", "UI/UX", "Mobile", "Feature"],
    },
    {
      version: "0.1.0",
      date: "2026-04-10",
      title: "移动端体验大升级：全站 UI 深度优化！",
      content: [
        "重构了移动端导航栏，引入了更符合手机操作习惯的侧边汉堡菜单，将“游戏分类”、“更新日志”和“赞助者名单”统一收纳，释放了顶部空间。",
        "全面优化了所有游戏的奖杯展示页在手机端的排版：修复了封面图过小、标题拥挤重叠的问题，并为奖杯筛选栏增加了横向滑动功能，让阅读体验更上一层楼。",
        "调整了游戏详情页的 3D 光盘盒交互效果，在小屏幕设备上改为了更适合阅读的上下堆叠布局，完美解决了文字显示不全和排版错乱的问题。"
      ],
      tags: ["Update", "UI/UX", "Mobile"],
    },
    {
      version: "0.0.9",
      date: "2026-04-09",
      title: "《巫师3：狂猎》完整白金攻略与系统指南上线！",
      content: [
        "新增了《巫师3：狂猎》的完整攻略，包含了详尽的游戏基础与系统指南（如法印、炼金、突变诱发物等），以及白果园和威伦等核心区域的图文流程。",
        "同步上线了包含本体、“石之心”与“血与酒”DLC的完整中文奖杯列表，并重新设计了经典的深色主机菜单风格 UI，支持按分类与级别快速筛选。",
        "针对难点奖杯（如“神射手”、“昆特牌大师”）以及容易错过的全收集要素提供了详尽的获取攻略提示，助你顺利踏上猎魔人的白金旅途！"
      ],
      tags: ["Release", "Guide"],
      image: witcher3Cover
    },
    {
      version: "0.0.8",
      date: "2026-04-01",
      title: "《血源诅咒》完整白金攻略已上线！",
      content: [
        "新增了《血源诅咒》的完整攻略，包括最高效的白金路线图、三结局分支存档点提示和核心战斗技巧。",
        "详细整理了所有奖杯的获取方式，以及极易错过的收集类奖杯（如“猎人的本质”与“猎人的秘法”）和NPC支线的特别提醒，帮你完美避坑。",
        "提供了深度圣杯地牢（特别是折磨人的玷污金杯）和高难BOSS的实用建议，帮助大家更轻松地度过猎杀之夜，打破梦魇！"
      ],
      tags: ["Release", "Guide"],
      image: bloodborneCover
    },
    {
      version: "0.0.7",
      date: "2026-03-14",
      title: "地平线：西之绝境 攻略上线",
      content: [
        "新增了《地平线：西之绝境》的完整攻略，包括白金路线图、主线流程和核心技巧。",
        "详细整理了所有奖杯的获取方式，以及易错过奖杯的特别提醒。",
        "提供了战斗和探索的实用建议，帮助大家更轻松地探索西部禁地。"
      ],
      tags: ["Release", "Guide"],
      image: horizonCover
    },
    {
      version: "0.0.6",
      date: "2026-03-08",
      title: "UI 视觉升级",
      content: [
        "更新了网站的品牌标识，将原本的文字 Logo 替换为全新的图标 Logo，视觉效果更加简洁统一。",
        "对导航栏（Header）和页脚（Footer）进行了风格调整，改为纯白背景搭配黑色/灰色文字，提升了界面的明亮度和阅读体验。"
      ],
      tags: ["Design"],
      image: logo
    },
    {
      version: "0.0.5",
      date: "2026-03-06",
      title: "创作对抗空虚-为何开发GameStation？",
      content: [
        "其实我想了想自己为什么要做这个网站，除了是因为自己很喜欢玩游戏，更大一部分是因为我只有通过创作才能对抗空虚和痛苦。我的朋友最近不怎么理我，回想起来其实自从去年下半年就没怎么联系，我很怀念和她认真讲话的日子。我想人和人的关系都是脆弱的，轻微的改变都可能让结构崩溃。",
        "昨天做了博德之门3的攻略，尝试了一下仿照博德之门的UI设计来做网页设计，遇到了瓶颈，因为博德之门这款游戏按照现有的攻略展示框架来展现会变得异常枯燥，而枯燥是这个游戏最不能忍受的标签。",
        "未来可能很长一段时间更新很慢或者没什么更新，网站依旧小众，我就这么碎碎念吧。"
      ],
      tags: ["Note"]
    },
    {
      version: "0.0.4",
      date: "2026-03-04",
      title: "生化危机9前瞻攻略上线",
      content: [
        "花了一天时间更新生化危机9的攻略，新增了 交互地图 的功能，利用了iframe 嵌入。",
        "底部导航栏小改了一些，增加了我的GitHub，推特，小红书账号，欢迎关注。"
      ],
      tags: ["Release"]
    },
    {
      version: "0.0.3",
      date: "2026-03-01",
      title: "最后生还者2攻略正式上线",
      content: [
        "出于开发者私心，优先更新美末系列的攻略，全内容根据互联网讯息整理。"
      ],
      tags: ["Release"]
    },
    {
      version: "0.0.2",
      date: "2026-02-26",
      title: "正式上线网站",
      content: [
        "Gamestation 正式与大家见面了！",
        "忙活了一天，弄好了page1游戏的封面，具体的简介还没做。先从美末2上手，弄了一个初版攻略介绍网页，内容还没细化。噢对了，这个域名一年8美金，是我可以承担的价格，先这样吧。"
      ],
      tags: ["Release"]
    },
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
              <div className="nav-link nav-link--with-icon">
                <span className="flex items-center gap-2">
                  <Calendar size={14} strokeWidth={2.2} />
                  <span>更新日志</span>
                </span>
              </div>
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
                      {update.image && (
                        <div className="mt-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm w-fit bg-white">
                          <img src={update.image} alt="Update visual" className="max-w-full h-auto" />
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

export default Changelog;
