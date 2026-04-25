import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Triangle, CornerUpLeft } from 'lucide-react';
import './Tlou2TrophyList.css'; // Reusing the same CSS

// Import Trophy Icons
import goldTrophyIcon from '../../picture/Gold PS Trophy.svg';
import silverTrophyIcon from '../../picture/Silver PS Trophy.svg';
import bronzeTrophyIcon from '../../picture/Bronze PS Trophy.svg';
// Import Game Icon
import gameIcon from '../../picture/page1-game-walkthrough/resident-evil-9/game-1772204759457-clluwk0f7.webp';

// Using Gold as base for Platinum with CSS filter
const platinumTrophyIcon = goldTrophyIcon;

const trophyGroups = [
  {
    id: 'base',
    title: 'Resident Evil 9: Requiem',
    trophies: [
      {
        id: 'plat-1',
        title: '安魂曲 (Requiem)',
        type: 'platinum',
        description: '获得全部奖杯 (Obtain all trophies)',
        guide: '白金奖杯。需要完成所有其他奖杯的挑战。',
        tags: ['白金']
      },
      {
        id: 'bronze-1',
        title: '昨日重现 (Yesterday Once More)',
        type: 'bronze',
        description: '在鹪木市遭遇丧尸爆发 (Encounter the zombie outbreak in Wrenwood)',
        guide: '剧情流程杯，序章必定获得。',
        tags: ['剧情']
      },
      {
        id: 'bronze-2',
        title: '堕入黑暗 (Into the Darkness)',
        type: 'bronze',
        description: '到达疗养院地下 (Reach the asylum underground)',
        guide: '剧情流程杯，在探索完疗养院一层后进入地下区域获得。',
        tags: ['剧情']
      },
      {
        id: 'bronze-3',
        title: '漫长的夜晚 (The Long Night)',
        type: 'bronze',
        description: '到达疗养院的中庭 (Reach the asylum courtyard)',
        guide: '剧情流程杯。',
        tags: ['剧情']
      },
      {
        id: 'bronze-4',
        title: '严酷的现实 (Grim Reality)',
        type: 'bronze',
        description: '逃离疗养院 (Escape the asylum)',
        guide: '剧情流程杯，击败第一个BOSS后逃离。',
        tags: ['剧情']
      },
      {
        id: 'bronze-5',
        title: '想下去吗？ (Going Down?)',
        type: 'bronze',
        description: '使用升降平台到达地面 (Use the lift to reach the surface)',
        guide: '剧情流程杯。',
        tags: ['剧情']
      },
      {
        id: 'bronze-6',
        title: '英雄归来 (Return of the Hero)',
        type: 'bronze',
        description: '到达浣熊市警察局 (Reach the Raccoon City Police Department)',
        guide: '剧情流程杯，里昂线必得。',
        tags: ['剧情', '里昂']
      },
      {
        id: 'bronze-7',
        title: '我也记得这个 (I Remember This)',
        type: 'bronze',
        description: '打倒超级暴君 (Defeat the Super Tyrant)',
        guide: 'BOSS战奖杯，注意利用场地陷阱。',
        tags: ['战斗', 'Boss']
      },
      {
        id: 'bronze-8',
        title: '保护伞的遗产 (Umbrella\'s Legacy)',
        type: 'bronze',
        description: '到达方舟 (Reach the Ark)',
        guide: '剧情流程杯，后期场景。',
        tags: ['剧情']
      },
      {
        id: 'bronze-9',
        title: '最终任务 (The Final Mission)',
        type: 'bronze',
        description: '开始探索方舟下层 (Begin exploring the Ark\'s lower levels)',
        guide: '剧情流程杯。',
        tags: ['剧情']
      },
      {
        id: 'gold-1',
        title: '希望与安魂曲 (Hope and Requiem)',
        type: 'gold',
        description: '取出厄尔庇斯并通关主线故事 (Retrieve Elpis and complete the main story)',
        guide: '通关奖杯，任意难度均可。',
        tags: ['通关', '剧情']
      },
      {
        id: 'bronze-10',
        title: '新人特工 (Rookie Agent)',
        type: 'bronze',
        description: '以休闲或更高难度完成主线故事 (Complete the story on Casual difficulty or higher)',
        guide: '通关最低难度即可获得。',
        tags: ['难度']
      },
      {
        id: 'bronze-11',
        title: '潜力特工 (Promising Agent)',
        type: 'bronze',
        description: '以标准（现代）或更高难度完成主线故事 (Complete the story on Standard (Modern) difficulty or higher)',
        guide: '通关标准难度即可获得。',
        tags: ['难度']
      },
      {
        id: 'silver-1',
        title: '坚毅特工 (Tenacious Agent)',
        type: 'silver',
        description: '以标准（传统）或更高难度完成主线故事 (Complete the story on Standard (Classic) difficulty or higher)',
        guide: '传统模式资源更少，类似旧作体验。',
        tags: ['难度']
      },
      {
        id: 'gold-2',
        title: '非凡特工 (Extraordinary Agent)',
        type: 'gold',
        description: '以癫狂难度完成主线故事 (Complete the story on Madness difficulty)',
        guide: '最高难度，建议解锁无限弹药后再挑战。',
        tags: ['难度', '挑战']
      },
      {
        id: 'bronze-12',
        title: '眼不见心不烦 (Out of Sight, Out of Mind)',
        type: 'bronze',
        description: '格蕾丝流程中向物品箱内存放物品 (Store an item in the item box during Grace\'s playthrough)',
        guide: '在安全屋使用异次元箱子即可。',
        tags: ['格蕾丝']
      },
      {
        id: 'bronze-13',
        title: '延续传统 (Keeping Traditions)',
        type: 'bronze',
        description: '使用墨带在打字机处保存游戏 (Save the game using an Ink Ribbon at a typewriter)',
        guide: '致敬老生化，需要先找到色带，然后在打字机处存档。',
        tags: ['收集', '彩蛋']
      },
      {
        id: 'bronze-14',
        title: '虎母无犬女 (Like Mother, Like Daughter)',
        type: 'bronze',
        description: '使用撬锁工具撬开抽屉 (Pick a lock on a drawer)',
        guide: '格蕾丝获得撬锁工具后，找到上锁的抽屉使用即可。',
        tags: ['格蕾丝', '收集']
      },
      {
        id: 'bronze-15',
        title: '致死量 (Lethal Dose)',
        type: 'bronze',
        description: '使用溶血注射器打倒丧尸 (Defeat a zombie using the Hemolytic Injector)',
        guide: '使用特定的剧情武器击杀普通丧尸。',
        tags: ['战斗']
      },
      {
        id: 'bronze-16',
        title: '这就是科学！ (It\'s Science!)',
        type: 'bronze',
        description: '通过分析血液样本来解锁合成配方 (Unlock a crafting recipe by analyzing a blood sample)',
        guide: '在实验室区域进行小游戏解谜解锁配方。',
        tags: ['解谜']
      },
      {
        id: 'bronze-17',
        title: '血的力量 (Power of Blood)',
        type: 'bronze',
        description: '使用采血器合成物品 (Craft an item using the Blood Harvester)',
        guide: '利用采集到的血液合成特殊弹药或药物。',
        tags: ['合成']
      },
      {
        id: 'silver-2',
        title: '血！更多的血！ (Blood! More Blood!)',
        type: 'silver',
        description: '使用感染的血液量达到300 (Use 300 units of infected blood)',
        guide: '累计型奖杯，多使用血液相关技能和合成。',
        tags: ['累积']
      },
      {
        id: 'silver-3',
        title: '大麻烦用大枪 (Big Gun for Big Trouble)',
        type: 'silver',
        description: '使用安魂让“女孩”暂时无法行动 (Temporarily incapacitate "The Girl" using Requiem)',
        guide: '在追踪者战中使用重武器造成一定伤害使其跪地。',
        tags: ['战斗']
      },
      {
        id: 'bronze-18',
        title: '狩猎开始 (The Hunt Begins)',
        type: 'bronze',
        description: '击碎1个黑白浣熊先生 (Destroy 1 Mr. Raccoon)',
        guide: '收集要素，全游戏分布着多个浣熊玩偶，击碎任意一个即可。',
        tags: ['收集']
      },
      {
        id: 'bronze-19',
        title: '触不可及 (Untouchable)',
        type: 'bronze',
        description: '招架敌人的攻击 (Parry an enemy attack)',
        guide: '在敌人攻击瞬间按下格挡键（L1/LB）触发完美招架。',
        tags: ['战斗']
      },
      {
        id: 'bronze-20',
        title: '借我用用 (Borrowing This)',
        type: 'bronze',
        description: '投掷敌人掉落的武器 (Throw a weapon dropped by an enemy)',
        guide: '部分敌人掉落的近战武器可以拾取并投掷出去。',
        tags: ['战斗']
      },
      {
        id: 'bronze-21',
        title: '砍瓜切菜 (Slice and Dice)',
        type: 'bronze',
        description: '使用斧头的处决攻击打倒3个丧尸 (Defeat 3 zombies using axe execution attacks)',
        guide: '使用斧头蓄力或在敌人失衡时进行处决。',
        tags: ['战斗']
      },
      {
        id: 'bronze-22',
        title: '购物疗法 (Retail Therapy)',
        type: 'bronze',
        description: '在补给箱处购买物品 (Purchase an item from a supply cache)',
        guide: '在商人的补给点购买任意物品。',
        tags: ['交易']
      },
      {
        id: 'silver-4',
        title: '军火库 (Arsenal)',
        type: 'silver',
        description: '获得所有武器 (Obtain all weapons)',
        guide: '收集所有枪械和近战武器。部分需要购买，部分在隐藏房间。',
        tags: ['收集']
      },
      {
        id: 'gold-3',
        title: '浣熊市原住民 (Raccoon City Native)',
        type: 'gold',
        description: '击碎所有黑白浣熊先生 (Destroy all Mr. Raccoons)',
        guide: '全收集奖杯，共有20个浣熊先生玩偶，建议参考全收集攻略。',
        tags: ['收集']
      },
      {
        id: 'silver-5',
        title: '文件管理员 (Archivist)',
        type: 'silver',
        description: '阅读所有文件 (Read all files)',
        guide: '全游戏约有50-60份文件，需要仔细探索每个角落。',
        tags: ['收集']
      },
      {
        id: 'silver-6',
        title: '极速逃生 (Speedy Escape)',
        type: 'silver',
        description: '在3小时内通关游戏 (Complete the game within 3 hours)',
        guide: '速通奖杯。建议在休闲难度下，无视收集和非必要战斗，熟练背板后尝试。',
        tags: ['速通', '挑战']
      }
    ]
  }
];

export default function Re9TrophyList() {
  const navigate = useNavigate();
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

  const filteredTrophiesFlat = filteredGroups.flatMap(group => group.trophies);

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

  useEffect(() => {
    const selectedElement = document.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedElement) {
      selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedIndex]);

  const getTrophyIcon = (type) => {
    switch (type) {
      case 'platinum': return platinumTrophyIcon;
      case 'gold': return goldTrophyIcon;
      case 'silver': return silverTrophyIcon;
      case 'bronze': return bronzeTrophyIcon;
      default: return bronzeTrophyIcon;
    }
  };

  const rarityMap = {
    platinum: { label: '极为珍贵', percent: '0.1%' },
    gold: { label: '极为珍贵', percent: '0.4%' },
    silver: { label: '非常珍贵', percent: '2.1%' },
    bronze: { label: '珍贵', percent: '15.5%' }
  };

  const typeLabelMap = {
    platinum: '白金',
    gold: '金',
    silver: '银',
    bronze: '铜'
  };

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
            <h1 className="ps5-game-title">RESIDENT EVIL 9: REQUIEM</h1>
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
    </div>
  );
}
