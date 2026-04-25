import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Triangle, CornerUpLeft } from 'lucide-react';
import './BloodborneTrophyList.css';

// Import Trophy Icons
import goldTrophyIcon from '../../picture/Gold PS Trophy.svg';
import silverTrophyIcon from '../../picture/Silver PS Trophy.svg';
import bronzeTrophyIcon from '../../picture/Bronze PS Trophy.svg';
// Import Game Icon
import gameIcon from '../../picture/page1-game-cover/Bloodborne_Cover_Wallpaper.jpg';

// Using Gold as base for Platinum with CSS filter
const platinumTrophyIcon = goldTrophyIcon;

const trophyGroups = [
  {
    "id": "base",
    "title": "Bloodborne",
    "trophies": [
      {
        "id": "plat-1",
        "title": "Bloodborne (血源诅咒)",
        "type": "platinum",
        "description": "All trophies acquired. Hats off! (获得所有奖杯。脱帽致敬！)",
        "guide": "获得游戏中所有的奖杯即可解锁白金。建议规划好收集路线和NPC任务。",
        "tags": [
          "白金"
        ]
      },
      {
        "id": "gold-1",
        "title": "Yharnam Sunrise (雅南日出)",
        "type": "gold",
        "description": "You lived through the hunt, and saw another day. (你经历了猎杀，迎来了新的一天。)",
        "guide": "结局一。在游戏最后面对杰尔曼时，选择“奉献你的生命”。",
        "tags": [
          "结局",
          "易错过"
        ]
      },
      {
        "id": "gold-2",
        "title": "Honoring Wishes (表彰愿望)",
        "type": "gold",
        "description": "Captivated by the moon presence, you pledge to watch over the hunter's dream. (被月之妖气迷惑，你发誓守护猎人梦境。)",
        "guide": "结局二。在游戏最后面对杰尔曼时，选择“拒绝”，并击败杰尔曼。",
        "tags": [
          "结局",
          "易错过"
        ]
      },
      {
        "id": "gold-3",
        "title": "Childhood's Beginning (童年开端)",
        "type": "gold",
        "description": "You became an infant Great One, lifting humanity into its next childhood. (你成为了一个新生的古神祇，带领人类进入下一个童年。)",
        "guide": "结局三。消耗至少3个“三分之一脐带”，在游戏最后选择“拒绝”，击败杰尔曼后，再击败月神。",
        "tags": [
          "结局",
          "易错过"
        ]
      },
      {
        "id": "silver-1",
        "title": "Yharnam, Pthumerian Queen (苏美鲁女王雅南)",
        "type": "silver",
        "description": "Defeat Yharnam, Blood Queen of the Old Labyrinth. (击败旧迷宫的血族女王雅南。)",
        "guide": "位于圣杯地牢的最深处。需要依次打通多个金杯迷宫，最终在苏美鲁伊忽尔大金杯的第三层击败她。",
        "tags": [
          "圣杯",
          "高难度"
        ]
      },
      {
        "id": "silver-2",
        "title": "Hunter's Essence (猎人精华)",
        "type": "silver",
        "description": "Acquire all hunter weapons. (获得所有猎人武器。)",
        "guide": "收集游戏本体中的所有右手武器和左手武器。部分武器需要特定徽章或在特定地点拾取。",
        "tags": [
          "收集"
        ]
      },
      {
        "id": "silver-3",
        "title": "Hunter's Craft (猎人技艺)",
        "type": "silver",
        "description": "Acquire all special hunter tools. (获得所有特殊的猎人工具。)",
        "guide": "收集游戏中的所有猎人秘法道具（共9个）。",
        "tags": [
          "收集"
        ]
      },
      {
        "id": "silver-4",
        "title": "Weapon Master (武器大师)",
        "type": "silver",
        "description": "Acquire a weapon of the highest level. (获得一把最高等级的武器。)",
        "guide": "将任意一把武器强化至+10。需要一块“血岩”，本体流程中只有一块，位于曼西斯梦魇。",
        "tags": [
          "强化"
        ]
      },
      {
        "id": "silver-5",
        "title": "Blood Gem Master (血宝石大师)",
        "type": "silver",
        "description": "Acquire an extremely precious blood gem. (获得一颗极其珍贵的血宝石。)",
        "guide": "获得一颗评级为15级或以上的血宝石。通常在深度4或深度5的圣杯地牢中掉落。",
        "tags": [
          "圣杯"
        ]
      },
      {
        "id": "silver-6",
        "title": "Rune Master (符文大师)",
        "type": "silver",
        "description": "Acquire an extremely precious Caryll Rune. (获得一个极其珍贵的卡尔符文。)",
        "guide": "获得任何一个“极其珍贵”级别的卡尔符文。随流程深入自然获得。",
        "tags": [
          "收集"
        ]
      },
      {
        "id": "silver-7",
        "title": "Cainhurst (该隐赫斯特)",
        "type": "silver",
        "description": "Gain entry to Forsaken Castle Cainhurst. (进入废弃的该隐赫斯特城堡。)",
        "guide": "获得“该隐赫斯特的召唤”后，前往汉威克阴森小巷的纪念碑前乘坐马车。",
        "tags": [
          "隐藏地图"
        ]
      },
      {
        "id": "silver-8",
        "title": "The Choir (圣歌团)",
        "type": "silver",
        "description": "Gain entry to the realm of the Choir, the high stratum of the Healing Church. (进入圣歌团的领域，治愈教会的高层。)",
        "guide": "在未见之村亚哈古尔获得“上层教堂区钥匙”后，从治愈教会工厂顶部开门进入。",
        "tags": [
          "隐藏地图"
        ]
      },
      {
        "id": "silver-9",
        "title": "The Source of the Dream (梦境的源头)",
        "type": "silver",
        "description": "Discover the abandoned old workshop, the source of the hunter's dream. (发现废弃的旧工厂，猎人梦境的源头。)",
        "guide": "在治愈教会工厂的深坑中，通过精准掉落进入隐藏的门。",
        "tags": [
          "隐藏地图"
        ]
      },
      {
        "id": "silver-10",
        "title": "Nightmare Lecture Building (噩梦教学大楼)",
        "type": "silver",
        "description": "Gain entry into the Byrgenwerth lecture building, that drifts within the realm of nightmare. (进入在噩梦领域中漂流的拜尔金沃斯教学大楼。)",
        "guide": "获得“扁桃体石头”后，被大教堂区右侧的亚米达拉抓住即可进入。",
        "tags": [
          "隐藏地图"
        ]
      },
      {
        "id": "bronze-1",
        "title": "Father Gascoigne (神父加斯科因)",
        "type": "bronze",
        "description": "Defeat the beast that once was Father Gascoigne. (击败曾经是加斯科因神父的野兽。)",
        "guide": "流程Boss。在亚南中心的亚顿之墓击败他。",
        "tags": [
          "Boss",
          "流程"
        ]
      },
      {
        "id": "bronze-2",
        "title": "Vicar Amelia (代理人阿梅利亚)",
        "type": "bronze",
        "description": "Defeat the beast that once was Vicar Amelia. (击败曾经是代理人阿梅利亚的野兽。)",
        "guide": "流程Boss。在大教堂区击败她。",
        "tags": [
          "Boss",
          "流程"
        ]
      },
      {
        "id": "bronze-3",
        "title": "Shadow of Yharnam (雅南暗影)",
        "type": "bronze",
        "description": "Defeat the Shadow of Yharnam. (击败雅南暗影。)",
        "guide": "流程Boss。在禁忌森林击败他们。",
        "tags": [
          "Boss",
          "流程"
        ]
      },
      {
        "id": "bronze-4",
        "title": "Rom, the Vacuous Spider (愚钝蜘蛛罗姆)",
        "type": "bronze",
        "description": "Defeat Great One: Rom, the Vacuous Spider. (击败古神祇：愚钝蜘蛛罗姆。)",
        "guide": "流程Boss。在拜尔金沃斯的月畔湖击败它。",
        "tags": [
          "Boss",
          "流程"
        ]
      },
      {
        "id": "bronze-5",
        "title": "The One Reborn (重生古神祇)",
        "type": "bronze",
        "description": "Defeat the One Reborn. (击败重生古神祇。)",
        "guide": "流程Boss。在未见之村亚哈古尔的降临广场击败它。",
        "tags": [
          "Boss",
          "流程"
        ]
      },
      {
        "id": "bronze-6",
        "title": "Micolash, Host of the Nightmare (噩梦之主密寇拉什)",
        "type": "bronze",
        "description": "Defeat Micolash, Host of the Nightmare. (击败噩梦之主密寇拉什。)",
        "guide": "流程Boss。在曼西斯梦魇击败他。",
        "tags": [
          "Boss",
          "流程"
        ]
      },
      {
        "id": "bronze-7",
        "title": "Mergo's Wet Nurse (梅高的奶妈)",
        "type": "bronze",
        "description": "Defeat Great One: Mergo's Wet Nurse. (击败古神祇：梅高的奶妈。)",
        "guide": "流程Boss。在曼西斯梦魇的最高处击败她。",
        "tags": [
          "Boss",
          "流程"
        ]
      },
      {
        "id": "bronze-8",
        "title": "Cleric Beast (神职人员野兽)",
        "type": "bronze",
        "description": "Defeat Cleric Beast. (击败神职人员野兽。)",
        "guide": "可选Boss。在亚南中心的大桥上击败它。",
        "tags": [
          "Boss"
        ]
      },
      {
        "id": "bronze-9",
        "title": "Blood-starved Beast (渴血神兽)",
        "type": "bronze",
        "description": "Defeat Blood-starved Beast. (击败渴血神兽。)",
        "guide": "可选Boss。在旧雅南的良杯教会击败它。",
        "tags": [
          "Boss"
        ]
      },
      {
        "id": "bronze-10",
        "title": "The Witch of Hemwick (汉威克女巫)",
        "type": "bronze",
        "description": "Defeat the Witch of Hemwick. (击败汉威克女巫。)",
        "guide": "可选Boss。在汉威克阴森小巷的女巫住所击败她。",
        "tags": [
          "Boss"
        ]
      },
      {
        "id": "bronze-11",
        "title": "Darkbeast Paarl (黑兽帕尔)",
        "type": "bronze",
        "description": "Defeat Darkbeast Paarl. (击败黑兽帕尔。)",
        "guide": "可选Boss。在未见之村的监狱外的地下墓地击败它。",
        "tags": [
          "Boss"
        ]
      },
      {
        "id": "bronze-12",
        "title": "Amygdala (亚米达拉)",
        "type": "bronze",
        "description": "Defeat Great One: Amygdala. (击败古神祇：亚米达拉。)",
        "guide": "可选Boss。在噩梦边境的底层击败它。",
        "tags": [
          "Boss"
        ]
      },
      {
        "id": "bronze-13",
        "title": "Martyr Logarius (烈士洛格力斯)",
        "type": "bronze",
        "description": "Defeat Martyr Logarius. (击败烈士洛格力斯。)",
        "guide": "可选Boss。在该隐赫斯特城堡的屋顶击败他。",
        "tags": [
          "Boss"
        ]
      },
      {
        "id": "bronze-14",
        "title": "Celestial Emissary (神圣使者)",
        "type": "bronze",
        "description": "Defeat Great One: Celestial Emissary. (击败古神祇：神圣使者。)",
        "guide": "可选Boss。在明花花园击败它。",
        "tags": [
          "Boss"
        ]
      },
      {
        "id": "bronze-15",
        "title": "Ebrietas, Daughter of the Cosmos (宇宙之女伊碧塔丝)",
        "type": "bronze",
        "description": "Defeat Great One: Ebrietas, Daughter of the Cosmos. (击败古神祇：宇宙之女伊碧塔丝。)",
        "guide": "可选Boss。在绝望祭坛击败她。",
        "tags": [
          "Boss"
        ]
      },
      {
        "id": "bronze-16",
        "title": "Blood Gem Contact (接触血宝石)",
        "type": "bronze",
        "description": "Acquire a blood gem that imparts special strength to hunter weapons. (获得一颗能赋予猎人武器特殊力量的血宝石。)",
        "guide": "流程中拾取任意一颗血宝石即可。",
        "tags": [
          "收集"
        ]
      },
      {
        "id": "bronze-17",
        "title": "Rune Contact (接触符文)",
        "type": "bronze",
        "description": "Acquire a Caryll Rune that endows hunters with special strength. (获得一个能赋予猎人特殊力量的卡尔符文。)",
        "guide": "流程中拾取任意一个卡尔符文即可。",
        "tags": [
          "收集"
        ]
      },
      {
        "id": "bronze-18",
        "title": "Chalice of Pthumeru (苏美鲁金杯)",
        "type": "bronze",
        "description": "Acquire the Chalice of Pthumeru that seals the network of deep, underground labyrinths. (获得封印着深层地下迷宫网络的苏美鲁金杯。)",
        "guide": "击败渴血神兽后掉落。",
        "tags": [
          "收集",
          "圣杯"
        ]
      },
      {
        "id": "bronze-19",
        "title": "Chalice of Ailing Loran (衰弱罗伦城金杯)",
        "type": "bronze",
        "description": "Acquire the Chalice of Ailing Loran that seals the tragic land lost to the sands. (获得封印着消失在沙海中的悲惨土地的衰弱罗伦城金杯。)",
        "guide": "击败亚米达拉后掉落。",
        "tags": [
          "收集",
          "圣杯"
        ]
      },
      {
        "id": "bronze-20",
        "title": "Chalice of Isz (伊兹金杯)",
        "type": "bronze",
        "description": "Acquire the Great Chalice of Isz that seals the home of the cosmic kin. (获得封印着宇宙眷属故乡的伊兹大金杯。)",
        "guide": "击败宇宙之女伊碧塔丝后掉落。",
        "tags": [
          "收集",
          "圣杯"
        ]
      }
    ]
  },
  {
    "id": "dlc",
    "title": "The Old Hunters DLC",
    "trophies": [
      {
        "id": "dlc-silver-1",
        "title": "Old Hunter's Essence (老猎人的精华)",
        "type": "silver",
        "description": "Acquire all old hunter weapons. (获得所有老猎人武器。)",
        "guide": "收集DLC中的所有右手武器和左手武器（共16把）。",
        "tags": [
          "DLC",
          "收集"
        ]
      },
      {
        "id": "dlc-bronze-1",
        "title": "Orphan of Kos (科斯的孤儿)",
        "type": "bronze",
        "description": "Defeat Great One: Orphan of Kos. (击败古神祇：科斯的孤儿。)",
        "guide": "DLC最终Boss。在小渔村的海岸边击败他。",
        "tags": [
          "DLC",
          "Boss"
        ]
      },
      {
        "id": "dlc-bronze-2",
        "title": "Ludwig, the Holy Blade (圣剑路德维希)",
        "type": "bronze",
        "description": "Defeat the beast that was once Ludwig, the Holy Blade. (击败曾经是圣剑路德维希的野兽。)",
        "guide": "DLC流程Boss。在地下尸堆击败他。",
        "tags": [
          "DLC",
          "Boss"
        ]
      },
      {
        "id": "dlc-bronze-3",
        "title": "Lady Maria of the Astral Clocktower (星辰钟塔的玛丽亚女士)",
        "type": "bronze",
        "description": "Defeat Lady Maria of the Astral Clocktower. (击败星辰钟塔的玛丽亚女士。)",
        "guide": "DLC流程Boss。在星辰钟塔击败她。",
        "tags": [
          "DLC",
          "Boss"
        ]
      },
      {
        "id": "dlc-bronze-4",
        "title": "Living Failures (失败者)",
        "type": "bronze",
        "description": "Defeat the failed attempts to become Great Ones. (击败试图成为古神祇的失败者。)",
        "guide": "DLC流程Boss。在研究大厅顶层击败他们。",
        "tags": [
          "DLC",
          "Boss"
        ]
      },
      {
        "id": "dlc-bronze-5",
        "title": "Laurence, the First Vicar (第一任主教劳伦斯)",
        "type": "bronze",
        "description": "Defeat the beast that was once Laurence, the First Vicar. (击败曾经是第一任主教劳伦斯的野兽。)",
        "guide": "DLC可选Boss。获得“劳伦斯的头骨”后在噩梦大教堂击败他。",
        "tags": [
          "DLC",
          "Boss"
        ]
      }
    ]
  }
];

export default function BloodborneTrophyList() {
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
            <h1 className="ps5-game-title">Bloodborne™</h1>
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
                              <span>{rarity.label}</span>
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

