import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowDownUp, Trophy, Plus, Settings, Triangle, CornerUpLeft } from 'lucide-react';
import './Tlou2TrophyList.css';

// Import Trophy Icons
import goldTrophyIcon from '../../picture/Gold PS Trophy.svg';
import silverTrophyIcon from '../../picture/Silver PS Trophy.svg';
import bronzeTrophyIcon from '../../picture/Bronze PS Trophy.svg';
// Import Game Icon
import gameIcon from '../../picture/page1-game-cover/The_Last_of_Us_Part_I_cover.jpg';

// Using Gold as base for Platinum with CSS filter
const platinumTrophyIcon = goldTrophyIcon;

const trophyGroups = [
  {
    id: 'base',
    title: 'The Last of Us Part I',
    trophies: [
      {
        id: 'plat-1',
        title: 'It Can\'t Be For Nothing (万物皆有因)',
        type: 'platinum',
        description: 'Collect all trophies (获得所有奖杯)',
        guide: '白金神作。重制版取消了难度杯和多人杯，只需通关并在任意难度下完成收集即可。',
        tags: ['白金']
      },
      {
        id: 'gold-1',
        title: 'No Matter What (无论如何)',
        type: 'gold',
        description: 'Complete Part 1 (完成第一部)',
        guide: '通关《最后生还者》第一部剧情。',
        tags: ['剧情']
      },
      {
        id: 'gold-2',
        title: 'Don\'t Go (别走)',
        type: 'gold',
        description: 'Complete Left Behind (完成“勒令遗忘”)',
        guide: '通关《最后生还者：勒令遗忘》剧情。',
        tags: ['剧情', 'DLC']
      },
      {
        id: 'gold-3',
        title: 'Look for the Light (寻找光芒)',
        type: 'gold',
        description: 'Find all Firefly Pendants (找到所有火萤挂坠)',
        guide: '全游戏共 30 个火萤挂坠。',
        tags: ['收集']
      },
      {
        id: 'gold-4',
        title: 'Endure and Survive (忍受与生存)',
        type: 'gold',
        description: 'Collect all comics (收集所有漫画)',
        guide: '全游戏共 14 本漫画。',
        tags: ['收集']
      },
      {
        id: 'gold-5',
        title: 'Chronicles (编年史)',
        type: 'gold',
        description: 'Find all notes and artifacts (找到所有笔记和收集品)',
        guide: '全游戏共 97 个文档（笔记和收集品）。',
        tags: ['收集']
      },
      {
        id: 'gold-6',
        title: 'Getting to Know You (逐渐了解)',
        type: 'gold',
        description: 'Engage in all optional conversations (参与所有可选对话)',
        guide: '全游戏共 54 个可选对话。需要注意对话提示出现的时机。',
        tags: ['收集', '易错过']
      },
      {
        id: 'gold-7',
        title: 'That\'s all I got (我就这点本事了)',
        type: 'gold',
        description: 'Survive all of Ellie\'s jokes (听完艾莉所有的笑话)',
        guide: '在特定章节艾莉会拿出笑话书讲笑话，需要等待她讲完。共 3 个场景（匹兹堡和郊区）以及 Left Behind 中的 1 个场景。',
        tags: ['收集', '易错过']
      },
      {
        id: 'silver-1',
        title: 'Something to Fight For (值得为之奋斗)',
        type: 'silver',
        description: 'Find all training manuals (找到所有训练手册)',
        guide: '全游戏共 12 本训练手册。',
        tags: ['收集']
      },
      {
        id: 'silver-2',
        title: 'Combat Ready (做好战斗准备)',
        type: 'silver',
        description: 'Fully upgrade a weapon (完全升级一把武器)',
        guide: '只需将任意一把武器的所有升级项点满。',
        tags: ['成长']
      },
      {
        id: 'silver-3',
        title: 'Master of Unlocking (开锁大师)',
        type: 'silver',
        description: 'Break into every shiv door (打开所有弹簧刀门)',
        guide: '全游戏共 13 个弹簧刀门。需要确保存储足够的弹簧刀（或材料）。',
        tags: ['收集']
      },
      {
        id: 'silver-4',
        title: 'Prepared For the Worst (做最坏的打算)',
        type: 'silver',
        description: 'Find all workbenches (找到所有工作台)',
        guide: '全游戏共 11 个工作台。',
        tags: ['收集']
      },
      {
        id: 'silver-5',
        title: 'Sticky Fingers (手脚不干净)',
        type: 'silver',
        description: 'Open all safes (打开所有保险箱)',
        guide: '全游戏共 4 个保险箱。',
        tags: ['收集']
      },
      {
        id: 'silver-6',
        title: 'Sharpest Tool in the Shed (工具好手)',
        type: 'silver',
        description: 'Find all workbench tools (找到所有工作台工具)',
        guide: '全游戏共 5 组工具，用于提升武器升级等级。',
        tags: ['收集']
      },
      {
        id: 'silver-7',
        title: 'Build \'Em Up, Break \'Em Down (破而后立)',
        type: 'silver',
        description: 'Upgrade and break every melee weapon (升级并损坏每一把近战武器)',
        guide: '共 5 种近战武器（小刀、棒球棍、水管、砍刀、斧头）。需要使用强化后的近战武器攻击直到损坏。',
        tags: ['战斗']
      },
      {
        id: 'bronze-1',
        title: 'Fallen Firefly (陨落的火萤)',
        type: 'bronze',
        description: 'Find a Firefly Pendant (找到一个火萤挂坠)',
        guide: '收集任意 1 个火萤挂坠。',
        tags: ['收集']
      },
      {
        id: 'bronze-2',
        title: 'Self Help (自助)',
        type: 'bronze',
        description: 'Find a training manual (找到一本训练手册)',
        guide: '收集任意 1 本训练手册。',
        tags: ['收集']
      },
      {
        id: 'bronze-3',
        title: 'Savage Starlight Fan (狂野星光粉丝)',
        type: 'bronze',
        description: 'Find a comic (找到一本漫画)',
        guide: '收集任意 1 本漫画。',
        tags: ['收集']
      },
      {
        id: 'bronze-4',
        title: 'Geared Up (装备齐全)',
        type: 'bronze',
        description: 'Craft every item (制作每一项道具)',
        guide: '制作所有可制作的道具（如医疗包、燃烧瓶、烟雾弹、弹簧刀、炸弹、近战升级）。',
        tags: ['收集']
      },
      {
        id: 'bronze-5',
        title: 'In Memoriam (追思)',
        type: 'bronze',
        description: 'Pick up Frank\'s note after it\'s discarded (捡起被丢弃的弗兰克的纸条)',
        guide: '在比尔的小镇，比尔看过弗兰克的遗书后会把它扔掉，你需要绕到他身后捡起来。',
        tags: ['易错过', '隐藏']
      },
      {
        id: 'bronze-6',
        title: 'Lights Out (熄灯)',
        type: 'bronze',
        description: 'While in stealth, turn off the spotlight generator in Pittsburgh (在潜行状态下关闭匹兹堡的聚光灯发电机)',
        guide: '在匹兹堡离开书店后，潜行经过敌人，关闭发电机而不被发现。',
        tags: ['技巧', '隐藏']
      },
      {
        id: 'bronze-7',
        title: 'Waterlogged (落汤鸡)',
        type: 'bronze',
        description: 'Ride the sewer contraption with Henry and Sam (与亨利和山姆一起乘坐下水道装置)',
        guide: '在下水道区域，不要马上过河，先和亨利、山姆一起玩那个运送水的装置。',
        tags: ['易错过', '隐藏']
      },
      {
        id: 'bronze-8',
        title: 'Left Hanging (被晾在一边)',
        type: 'bronze',
        description: 'Leave Ellie hanging after a job well done (事情办成后把艾莉晾在一边)',
        guide: '在大坝区域，艾莉和你击掌时，不要按△键回应她。',
        tags: ['趣味', '隐藏']
      },
      {
        id: 'bronze-9',
        title: 'Who\'s A Good Boy? (谁是好孩子？)',
        type: 'bronze',
        description: 'Pet Buckley the dog (抚摸巴克利这只狗)',
        guide: '在大坝区域，找到那只叫Buckley的狗并抚摸它。',
        tags: ['趣味', '隐藏']
      },
      {
        id: 'bronze-10',
        title: 'Nobody\'s Perfect (人无完人)',
        type: 'bronze',
        description: 'Played the Jak X game in Left Behind (在“勒令遗忘”中游玩Jak X游戏)',
        guide: '在Left Behind DLC的商场游戏厅，与Jak X赛车游戏机互动。',
        tags: ['DLC', '趣味', '隐藏']
      },
      {
        id: 'bronze-11',
        title: 'Brick Master (砖块大师)',
        type: 'bronze',
        description: 'Win the brick throwing contest (赢得扔砖块比赛)',
        guide: '在Left Behind DLC中，与莱利比赛砸车窗，获胜即可。',
        tags: ['DLC', '技巧', '隐藏']
      },
      {
        id: 'bronze-12',
        title: 'Angel Knives (天使利刃)',
        type: 'bronze',
        description: 'Defeat Blackfang without getting hit (在不受伤的情况下击败黑牙)',
        guide: '在Left Behind DLC的游戏厅，玩那个格斗游戏机，按对所有QTE且不失误。',
        tags: ['DLC', '技巧', '隐藏']
      },
      {
        id: 'bronze-13',
        title: 'Skillz (技巧)',
        type: 'bronze',
        description: 'Win the water gun fight (赢得水枪大战)',
        guide: '在Left Behind DLC中，与莱利打水仗并获胜。',
        tags: ['DLC', '技巧', '隐藏']
      },
      {
        id: 'bronze-14',
        title: 'Live Bait (活诱饵)',
        type: 'bronze',
        description: 'Use bricks or bottles to lure an infected into attacking a human (使用砖块或瓶子引诱感染者攻击人类)',
        guide: '在Left Behind DLC的最后战斗中（或主线特定区域），扔砖/瓶引诱感染者去攻击人类敌人。',
        tags: ['战斗', '技巧', '隐藏']
      }
    ]
  }
];

export default function Tlou1TrophyList() {
  const navigate = useNavigate();
  // Flatten trophies for previous next logic if needed, but we will render by group
  const allTrophies = trophyGroups.flatMap(group => group.trophies);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const listRef = useRef(null);

  const filteredGroups = trophyGroups.map(group => ({
    ...group,
    trophies: group.trophies.filter(trophy => {
      if (filter === 'all') return true;
      return trophy.type === filter;
    })
  })).filter(group => group.trophies.length > 0);

  // Flatten filtered list for keyboard navigation index calculation
  const filteredTrophiesFlat = filteredGroups.flatMap(group => group.trophies);

  // Handle keyboard navigation for better accessibility and "console feel"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, filteredTrophiesFlat.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredTrophiesFlat.length]);

  // Scroll into view when selected index changes
  // This logic needs to be a bit smarter because we have headers now.
  // We can add data-index to items and scroll to that.
  useEffect(() => {
    const selectedElement = document.querySelector(`[data-index="${selectedIndex}"]`);
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

  // Calculate global index for selection
  let globalIndexCounter = 0;

  return (
    <div className="ps5-settings-container">
      {/* Header Section */}
      <div className="ps5-header">
        <div className="ps5-game-info">
          <div className="ps5-game-icon-box">
            <img src={gameIcon} alt="Game Cover" className="ps5-game-cover-img" />
          </div>
          <div className="ps5-game-meta">
            <h1 className="ps5-game-title">THE LAST OF US™ PART I</h1>
            <div className="ps5-trophy-count">所有奖杯：{allTrophies.length}</div>
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
        <div className="ps5-menu-list" ref={listRef}>
          {filteredGroups.map((group) => (
            <div key={group.id} className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-blue-500 opacity-90 sticky top-0 bg-[#0f0f0f] z-10 py-2">
                {group.title}
              </h3>
              <ul>
                {group.trophies.map((trophy) => {
                  const currentIndex = globalIndexCounter++;
                  const isSelected = currentIndex === selectedIndex;
                  const rarity = rarityMap[trophy.type] || rarityMap.bronze;
                  
                  return (
                    <li 
                      key={trophy.id} 
                      data-index={currentIndex}
                      className={`ps5-menu-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedIndex(currentIndex)}
                      onMouseEnter={() => setSelectedIndex(currentIndex)}
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
                      <div className="ps5-col-status">
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer (Removed) */}
      <div className="ps5-footer">
      </div>
    </div>
  );
}
