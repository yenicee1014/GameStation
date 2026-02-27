import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowDownUp, Trophy, Plus, Settings, Triangle, CornerUpLeft } from 'lucide-react';
import './Tlou2TrophyList.css';

// Import Trophy Icons
import goldTrophyIcon from '../../picture/Gold PS Trophy.svg';
import silverTrophyIcon from '../../picture/Silver PS Trophy.svg';
import bronzeTrophyIcon from '../../picture/Bronze PS Trophy.svg';
// Import Game Icon
import gameIcon from '../../picture/page1-game-cover/TLOU_P2_Box_Art_2.png';

// Using Gold as base for Platinum with CSS filter
const platinumTrophyIcon = goldTrophyIcon;

const trophyData = {
  platinum: [
    {
      id: 'plat-1',
      title: 'Every Last One of Them (一丝不挂)',
      type: 'platinum',
      description: 'Collect all trophies (获得所有奖杯)',
      guide: '白金神作。除了两个多人联机奖杯外（本作无多人模式），只需完成单人战役和收集即可。可以在任意难度下完成，使用了辅助功能和作弊选项也不影响跳杯。',
      tags: ['白金']
    },
    {
      id: 'gold-1',
      title: 'What I Had to Do (为了该做的事)',
      type: 'gold',
      description: 'Complete the story (完成剧情故事)',
      guide: '通关游戏即可获得，不限难度。',
      tags: ['剧情']
    },
    {
      id: 'gold-2',
      title: 'Survival Expert (生存专家)',
      type: 'gold',
      description: 'Learn all player upgrades (学会所有玩家升级)',
      guide: '需要收集所有训练手册（共8本）并花费补充品（药丸）升级所有技能树。一周目无法点满，必须在二周目（新游戏+）继续收集补充品才能完成。',
      tags: ['收集', '二周目']
    },
    {
      id: 'gold-3',
      title: 'Arms Master (武器大师)',
      type: 'gold',
      description: 'Fully upgrade all weapons (完全升级所有武器)',
      guide: '需要收集所有零件并升级所有武器。同样一周目零件不够，需要在二周目继续收集。',
      tags: ['收集', '二周目']
    },
    {
      id: 'gold-4',
      title: 'Archivist (档案管理员)',
      type: 'gold',
      description: 'Find all artifacts and journal entries (找到所有收集品和日志条目)',
      guide: '全游戏共有 127 个文档和 20 个日志条目。建议参考全收集攻略逐章排查。',
      tags: ['收集']
    },
    {
      id: 'gold-5',
      title: 'Master Set (大师套装)',
      type: 'gold',
      description: 'Find all trading cards (找到所有集换式卡牌)',
      guide: '艾莉篇专属收集品，共 48 张卡牌。',
      tags: ['收集', '艾莉']
    },
    {
      id: 'gold-6',
      title: 'Numismatist (钱币学家)',
      type: 'gold',
      description: 'Find all coins (找到所有硬币)',
      guide: '艾比篇专属收集品，共 32 枚硬币。',
      tags: ['收集', '艾比']
    },
    {
      id: 'silver-1',
      title: 'Mechanist (机械师)',
      type: 'silver',
      description: 'Fully upgrade a weapon (完全升级一把武器)',
      guide: '在工作台将任意一把武器的所有升级项点满即可。',
      tags: ['战斗']
    },
    {
      id: 'silver-2',
      title: 'Specialist (专家)',
      type: 'silver',
      description: 'Learn all player upgrades in one branch (学会一个分支的所有玩家升级)',
      guide: '点满任意一个技能树分支即可。',
      tags: ['成长']
    },
    {
      id: 'silver-3',
      title: 'Safecracker (保险箱大盗)',
      type: 'silver',
      description: 'Unlock every safe (打开所有保险箱)',
      guide: '全游戏共 14 个保险箱。密码通常在附近的文档或墙壁上。',
      tags: ['收集']
    },
    {
      id: 'silver-4',
      title: 'Sightseer (观光客)',
      type: 'silver',
      description: 'Visit every location in downtown Seattle (造访西雅图市中心的所有地点)',
      guide: '在“西雅图第1天 - 市中心”章节，探索地图上的所有可进入建筑（共10个地点）。艾莉会在地图上画圈标记。',
      tags: ['探索', '易错过']
    },
    {
      id: 'bronze-1',
      title: 'So Great and Small (伟大且渺小)',
      type: 'bronze',
      description: 'Find the Engraved Ring (找到刻有文字的戒指)',
      guide: '在“西雅图第1天 - 市中心”章节，Westlake Bank（银行）金库内，打开角落的保险箱（密码60-23-06）即可在抽屉里找到。这是向《神秘海域》致敬的彩蛋。',
      tags: ['收集', '彩蛋']
    },
    {
      id: 'bronze-2',
      title: 'Relic of the Past (过去的遗物)',
      type: 'bronze',
      description: 'Find the Strange Artifact (找到奇怪的遗物)',
      guide: '在“西雅图第1天 - 敌对领土”章节，进入唐人街区域的一家名为“Ruby Dragon”的古董店楼上，在桌子下可以找到这个前驱者遗物（Jak & Daxter彩蛋）。',
      tags: ['收集', '彩蛋']
    },
     {
      id: 'bronze-3',
      title: 'Looks Good On You (这很适合你)',
      type: 'bronze',
      description: 'Put a hat on your companion (给你的同伴戴上帽子)',
      guide: '在“艾莉的回忆 - 生日礼物”章节，进入博物馆后，在入口右侧拿一顶帽子，分别给恐龙化石戴上，最后给乔尔戴上即可解锁。',
      tags: ['隐藏', '流程']
    },
    {
      id: 'bronze-4',
      title: 'Sharpshooter (神枪手)',
      type: 'bronze',
      description: 'Win the marksmanship competition (赢得射击比赛)',
      guide: '在“西雅图第1天 - 体育场”章节（艾比篇），在拿取背包后进入靶场，与曼尼比赛射击并获胜。尽量射击头部或红心。',
      tags: ['流程', '易错过']
    },
    {
      id: 'bronze-5',
      title: 'Put My Name Up (榜上留名)',
      type: 'bronze',
      description: 'Earn the high score in the archery game (在射箭游戏中获得高分)',
      guide: '在“西雅图第1天 - 冬季之旅”章节（艾比篇），在水族馆玩具区拿起玩具弓，需要在限时内射中11个以上的目标。',
      tags: ['流程', '易错过']
    }
  ],
  grounded: [
    {
      id: 'dlc-1',
      title: 'Dig Two Graves (掘墓双人)',
      type: 'gold',
      description: 'Complete the story on Grounded (以“绝地”难度完成故事)',
      guide: '绝地难度下敌人伤害极高，听觉模式禁用，HUD极简。建议二周目继承所有升级后挑战。多利用潜行，避免不必要的战斗。',
      tags: ['DLC', '高难度']
    },
    {
      id: 'dlc-2',
      title: 'You Can\'t Stop This (势不可挡)',
      type: 'silver',
      description: 'Complete the story with Permadeath enabled on any setting (在开启“永久死亡”设定的情况下完成故事)',
      guide: '永久死亡可以设置为“全游戏”、“每章”或“每幕”。为了稳妥，建议选择“每章”并在最低难度下完成。',
      tags: ['DLC', '挑战']
    }
  ],
  noreturn: [
    {
      id: 'nr-1',
      title: 'Mixed Bag (混合袋)',
      type: 'gold',
      description: 'Get kills with 5 different weapons in an Assault encounter (在一次突击遭遇战中使用5种不同武器获得击杀)',
      guide: '在“浴血无归”模式中，选择艾莉或艾比这种初始武器较多的角色，并在关卡中购买/拾取额外武器。在一个回合内切换使用即可。',
      tags: ['No Return']
    },
    {
      id: 'nr-2',
      title: 'Become The Hunter (成为猎人)',
      type: 'gold',
      description: 'Kill 12 enemies in a Hunted encounter (在一次猎杀遭遇战中击杀12名敌人)',
      guide: '猎杀模式下敌人会不断刷新，只需存活到时间结束。要拿杯需要主动出击，尽快击杀12人。',
      tags: ['No Return']
    },
    {
      id: 'nr-3',
      title: 'Got Your Back (有我罩你)',
      type: 'silver',
      description: 'Win a round of Holdout without your ally falling below 70% health (在盟友生命值不低于70%的情况下赢得一轮坚守)',
      guide: '坚守模式中AI队友会吸引仇恨。你需要快速清理围攻队友的敌人，使用大范围杀伤武器（如燃烧瓶、散弹枪）效果最好。',
      tags: ['No Return']
    },
    {
      id: 'nr-4',
      title: 'Team Ellie (艾莉战队)',
      type: 'gold',
      description: 'Complete a run with all Ellie faction characters (使用艾莉阵营的所有角色完成一次通关)',
      guide: '包括艾莉、狄娜、杰西、汤米、乔尔。',
      tags: ['No Return', '角色解锁']
    },
    {
      id: 'nr-5',
      title: 'Team Abby (艾比战队)',
      type: 'gold',
      description: 'Complete a run with all Abby faction characters (使用艾比阵营的所有角色完成一次通关)',
      guide: '包括艾比、列夫、雅拉、曼尼、梅尔。',
      tags: ['No Return', '角色解锁']
    },
    {
      id: 'nr-6',
      title: 'True Strength (真正的力量)',
      type: 'gold',
      description: 'Get an S rank on an encounter (在一次遭遇战中获得S级评价)',
      guide: '评分主要看：杀敌速度、潜行/爆头击杀加分、受伤害程度。',
      tags: ['No Return']
    },
     {
      id: 'nr-7',
      title: 'May Your Survival Be Long (愿你长寿)',
      type: 'gold',
      description: 'Win a Daily Run of No Return (赢得一次“浴血无归”每日挑战)',
      guide: '每日挑战只有一次机会。建议先在普通模式熟悉当天的词条和Boss配置后再尝试，或者查看社区作业。',
      tags: ['No Return', '每日']
    }
  ]
};

export default function Tlou2TrophyList() {
  const navigate = useNavigate();
  const trophyRows = [
    ...trophyData.platinum,
    ...trophyData.grounded,
    ...trophyData.noreturn
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const listRef = useRef(null);

  const filteredTrophies = trophyRows.filter(trophy => {
    if (filter === 'all') return true;
    return trophy.type === filter;
  });

  // Handle keyboard navigation for better accessibility and "console feel"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, filteredTrophies.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredTrophies.length]);

  // Scroll into view when selected index changes
  useEffect(() => {
    const selectedElement = listRef.current?.children[selectedIndex];
    if (selectedElement) {
      selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedIndex]);

  const getTrophyIcon = (type) => {
    switch (type) {
      case 'platinum':
        return platinumTrophyIcon;
      case 'gold':
        return goldTrophyIcon;
      case 'silver':
        return silverTrophyIcon;
      case 'bronze':
        return bronzeTrophyIcon;
      default:
        return bronzeTrophyIcon;
    }
  };

  const rarityMap = {
    platinum: { label: '非常珍贵', percent: '10.7%' },
    gold: { label: '珍贵', percent: '20.3%' },
    silver: { label: '稀有', percent: '23.9%' },
    bronze: { label: '一般', percent: '56.5%' }
  };

  const typeLabelMap = {
    platinum: '白金',
    gold: '金',
    silver: '银',
    bronze: '铜'
  };

  // Mock dates for two players
  const datePairs = [
    { left: '2022/10/10 16:46', right: '2022/3/19 23:50' },
    { left: '2022/10/10 16:46', right: '2022/3/19 17:50' },
    { left: '2022/3/18 23:29', right: '2022/3/19 17:48' },
    { left: '2022/4/4 22:10', right: '2022/3/19 17:44' },
    { left: '2022/2/26 23:57', right: '2022/2/26 1:59' }
  ];

  return (
    <div className="ps5-settings-container">
      {/* Header Section */}
      <div className="ps5-header">
        <div className="ps5-game-info">
          <div className="ps5-game-icon-box">
            <img src={gameIcon} alt="Game Cover" className="ps5-game-cover-img" />
          </div>
          <div className="ps5-game-meta">
            <h1 className="ps5-game-title">THE LAST OF US™ PART II</h1>
            <div className="ps5-trophy-count">所有奖杯：{trophyRows.length}</div>
          </div>
        </div>
        
        <div className="ps5-players-info">
          <button 
            className="ps5-back-btn" 
            onClick={() => navigate(-1)}
            aria-label="返回上一页"
          >
            <CornerUpLeft size={24} className="ps5-back-icon" />
            <span className="ps5-back-text">返回</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="ps5-filter-bar">
        <button 
          className={`ps5-filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => { setFilter('all'); setSelectedIndex(0); }}
        >
          全部
        </button>
        <button 
          className={`ps5-filter-btn ${filter === 'platinum' ? 'active' : ''}`}
          onClick={() => { setFilter('platinum'); setSelectedIndex(0); }}
        >
          白金
        </button>
        <button 
          className={`ps5-filter-btn ${filter === 'gold' ? 'active' : ''}`}
          onClick={() => { setFilter('gold'); setSelectedIndex(0); }}
        >
          金
        </button>
        <button 
          className={`ps5-filter-btn ${filter === 'silver' ? 'active' : ''}`}
          onClick={() => { setFilter('silver'); setSelectedIndex(0); }}
        >
          银
        </button>
        <button 
          className={`ps5-filter-btn ${filter === 'bronze' ? 'active' : ''}`}
          onClick={() => { setFilter('bronze'); setSelectedIndex(0); }}
        >
          铜
        </button>
      </div>
      
      {/* List Section */}
      <div className="ps5-list-wrapper">
        <ul className="ps5-menu-list" ref={listRef}>
          {filteredTrophies.map((trophy, index) => {
            const isSelected = index === selectedIndex;
            const rarity = rarityMap[trophy.type] || rarityMap.bronze;
            const datePair = datePairs[index % datePairs.length];
            
            return (
              <li 
                key={trophy.id} 
                className={`ps5-menu-item ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {/* Column 1: Trophy Info */}
                <div className="ps5-col-info">
                  <div className={`ps5-menu-icon-wrapper ${trophy.type}`}>
                    <img 
                      src={getTrophyIcon(trophy.type)} 
                      alt={trophy.type} 
                      className={`ps5-menu-icon ${trophy.type === 'platinum' ? 'platinum-filter' : ''}`}
                    />
                  </div>
                  <div className="ps5-menu-content">
                    <div className="ps5-menu-title">{trophy.title}</div>
                    <div className="ps5-menu-meta">
                      <div className="ps5-trophy-type-badge">
                        <img 
                          src={getTrophyIcon(trophy.type)} 
                          alt="icon" 
                          className="ps5-mini-icon" 
                        />
                        <span>{typeLabelMap[trophy.type]}</span>
                      </div>
                      <div className="ps5-trophy-rarity">
                        <div className="ps5-rarity-icon">
                          <Triangle size={10} fill="#fff" />
                        </div>
                        <span>{rarity.label} | {rarity.percent}的玩家已获得</span>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="ps5-menu-description animate-fade-in">
                        <div className="ps5-desc-text">{trophy.description}</div>
                        <div className="ps5-guide-text">{trophy.guide}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Column 2: Player 1 Status (Removed) */}
                
                {/* Column 3: Player 2 Status -> Now Single Player Status (Removed) */}
                <div className="ps5-col-status">
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer (Removed) */}
      <div className="ps5-footer">
      </div>
    </div>
  );
}

