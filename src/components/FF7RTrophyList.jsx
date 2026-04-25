import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Plus, CornerUpLeft, ChevronDown } from 'lucide-react';
import './Tlou2TrophyList.css'; // Reusing the same CSS

// Import Trophy Icons
import goldTrophyIcon from '../../picture/Gold PS Trophy.svg';
import silverTrophyIcon from '../../picture/Silver PS Trophy.svg';
import bronzeTrophyIcon from '../../picture/Bronze PS Trophy.svg';
// Import Game Icon (using FF7R cover)
import gameIcon from '../../picture/page1-game-cover/FFVIIRemake.png';

// Using Gold as base for Platinum with CSS filter
const platinumTrophyIcon = goldTrophyIcon;

const trophyGroups = [
  {
    id: 'base',
    title: 'Final Fantasy VII Remake (Base Game)',
    trophies: [
      {
        id: 'plat-1',
        title: 'Master of Fate (命运的主人)',
        type: 'platinum',
        description: 'Earn all FINAL FANTASY VII REMAKE trophies. (获得所有奖杯。)',
        guide: '白金需要至少通关两次。一周目任意难度通关，二周目必须在 Hard（困难）难度下通关所有章节。建议一周目尽量完成所有支线任务、收集品、全武器技能和战斗报告，二周目专注于通关和拿困难难度专属的技能书。',
        tags: ['白金', '多周目']
      },
      {
        id: 'gold-1',
        title: 'Hardcore (超越极限)',
        type: 'gold',
        description: 'Complete all chapters on Hard difficulty. (在 Hard 难度下完成所有章节。)',
        guide: 'Hard难度下无法使用道具，且休息点只恢复HP不恢复MP。建议一周目通关后，先通过斗技场或神罗模拟器将全员等级练到满级(50级)，并将主要的魔晶石（如恢复、复活、提升HP/MP、各属性魔法）练满，再来挑战。合理利用祈祷和气卦魔晶石来回血。',
        tags: ['难度', '通关']
      },
      {
        id: 'silver-1',
        title: 'Intelligence Agent (战斗报告大师)',
        type: 'silver',
        description: 'Complete all battle intel reports. (完成所有战斗报告。)',
        guide: '完成查德利的全部 20 个战斗报告。其中比较难的是全魔法满级、武器能力全精通等，建议在二周目开始前全部清掉。',
        tags: ['收集', '支线']
      },
      {
        id: 'silver-2',
        title: 'Weapons Expert (武器能力大师)',
        type: 'silver',
        description: 'Learn all weapon abilities. (学会所有武器的专属能力。)',
        guide: '全角色共 24 把武器（每人 6 把）。拿到武器后装备上，在战斗中使用其专属技能，熟练度满后即可永久学会该技能。',
        tags: ['成长', '收集']
      },
      {
        id: 'silver-3',
        title: 'Master of Mimicry (敌方技能大师)',
        type: 'silver',
        description: 'Learn all enemy skills. (学会所有敌方技能。)',
        guide: '需要装备“敌方技能”魔晶石，并被特定的敌方技能击中才能学会。共有 4 种技能：吸收灵气（幽灵）、自爆（废气怪）、冰冻气场（翼蜥）、臭气（魔界花，需在神罗模拟器中挑战）。',
        tags: ['收集', '战斗']
      },
      {
        id: 'silver-4',
        title: 'Dressed to the Nines (最佳穿搭)',
        type: 'silver',
        description: 'Obtain all nine bridal candidate outfits. (获得所有新娘候选人的服装。)',
        guide: '克劳德、蒂法和爱丽丝各有 3 套服装。蒂法的服装取决于第3章完成全支线后的特殊对话（成熟风/格斗家风/异国风）；爱丽丝的服装取决于第8章完成的支线数量（0-2个/3-5个/全6个）；克劳德的服装取决于第9章完成的支线路线（无/山姆路线/玛姆路线）。需要通过章节选择重复游玩第3、8、9章。',
        tags: ['收集', '多周目']
      },
      {
        id: 'silver-5',
        title: 'Ultimate Weapon (究极兵器)',
        type: 'silver',
        description: 'Defeat the Pride and Joy prototype. (打倒傲慢巨怪零号机。)',
        guide: '通关后，在第17章的神罗战斗模拟器中完成所有挑战后解锁终极挑战。这是本篇最难的战斗，你需要连续挑战希瓦、胖陆行鸟、利维坦、巴哈姆特+伊弗利特，最后挑战傲慢巨怪零号机。推荐满级并搭配最优魔晶石组合（如属性+烈火防御等）。',
        tags: ['挑战', '战斗']
      },
      {
        id: 'bronze-1',
        title: 'Onetime Gig (第一次领薪水)',
        type: 'bronze',
        description: 'Complete Chapter 1. (完成第1章。)',
        guide: '剧情流程杯，完成第一章后自动获得。',
        tags: ['剧情']
      },
      {
        id: 'bronze-2',
        title: 'Escape Artist (逃脱魔晄炉)',
        type: 'bronze',
        description: 'Complete Chapter 2. (完成第2章。)',
        guide: '剧情流程杯，完成第二章后自动获得。',
        tags: ['剧情']
      },
      {
        id: 'bronze-3',
        title: 'Mercenary Endeavors (万能帮手初体验)',
        type: 'bronze',
        description: 'Complete Chapter 3. (完成第3章。)',
        guide: '剧情流程杯，完成第三章后自动获得。',
        tags: ['剧情']
      },
      {
        id: 'bronze-4',
        title: 'My First Ability (初级武器能力)',
        type: 'bronze',
        description: 'Max out a weapon\'s proficiency. (将一把武器的熟练度升至最高。)',
        guide: '装备新武器后，多次使用该武器的专属技能，直到屏幕提示学会该技能。',
        tags: ['成长']
      },
      {
        id: 'bronze-5',
        title: 'Materia for Beginners (魔晶石新手)',
        type: 'bronze',
        description: 'Level up an orb of materia. (将一颗魔晶石升级。)',
        guide: '装备魔晶石进行战斗，获得 AP 后会自动升级。',
        tags: ['成长']
      },
      {
        id: 'bronze-6',
        title: 'Music Collector (音乐收藏家)',
        type: 'bronze',
        description: 'Collect 3 music discs. (收集 3 张音乐唱片。)',
        guide: '在游戏中的点唱机、自动贩卖机或NPC处购买/获得音乐唱片。',
        tags: ['收集']
      },
      {
        id: 'bronze-7',
        title: 'Disc Jockey (唱片骑师)',
        type: 'bronze',
        description: 'Collect all music discs. (收集所有音乐唱片。)',
        guide: '全游戏共 31 张音乐唱片。靠近有唱片的地方时，屏幕左上角会出现音符提示。如果错过，可以在通关后通过章节选择补齐。',
        tags: ['收集']
      },
      {
        id: 'bronze-8',
        title: 'Biker Boy (传说中的摩托车手)',
        type: 'bronze',
        description: 'Get praised by Jessie at the end of the motorcycle mini-game. (在摩托车小游戏结束后获得杰西的称赞。)',
        guide: '在第4章的摩托车追逐战中，保持克劳德的血量在 80% 以上（尽量少受伤），结束时杰西会夸奖你并在脸颊亲一下。可以随时在战斗前保存并重试。',
        tags: ['小游戏', '易错过']
      },
      {
        id: 'bronze-9',
        title: 'Heavenly Dart Player (飞镖好手)',
        type: 'bronze',
        description: 'Rise to the top of the Seventh Heaven darts leaderboard. (在第七天堂的飞镖小游戏中获得第一名。)',
        guide: '在第3章第七天堂等待蒂法时，可以玩飞镖。需要用最少的飞镖数（7镖以内）达到 301 分。建议瞄准 20 分的三倍区（内圈红点，即 60 分）。',
        tags: ['小游戏']
      },
      {
        id: 'bronze-10',
        title: 'Sultan of Squat (深蹲大王)',
        type: 'bronze',
        description: 'Complete all squat challenges. (完成所有深蹲挑战。)',
        guide: '在第9章的健身房，击败所有的深蹲对手（初级、中级、高级）。节奏感是关键。',
        tags: ['小游戏']
      },
      {
        id: 'bronze-11',
        title: 'Peerless Pull-Upper (引体向上大王)',
        type: 'bronze',
        description: 'Complete all pull-up challenges. (完成所有引体向上挑战。)',
        guide: '在第14章的健身房，击败所有的引体向上对手。尤拉是最后一个对手，非常强，容错率极低，需要大量练习。',
        tags: ['小游戏']
      }
    ]
  },
  {
    id: 'dlc',
    title: 'FF7R EPISODE INTERmission (尤菲 DLC)',
    trophies: [
      {
        id: 'silver-dlc-1',
        title: 'Out of Darkness\'s Clutches (斩断黑暗)',
        type: 'silver',
        description: 'Complete FF7R EPISODE INTERmission on Hard difficulty. (在 Hard 难度下完成尤菲篇。)',
        guide: '与本篇类似，一周目通关后解锁 Hard 难度。建议先在神罗模拟器练满尤菲和索侬的等级，并熟练掌握两人“联手”状态的战斗技巧。',
        tags: ['DLC', '难度']
      },
      {
        id: 'silver-dlc-2',
        title: 'Corrupter of the Immaculate (击败纯白帝王)',
        type: 'silver',
        description: 'Defeat Weiss. (打倒魏斯。)',
        guide: '在尤菲篇通关后，回到本篇第17章的神罗战斗模拟器，会解锁挑战魏斯的任务。这是一场难度极高的 Boss 战，要求极高的操作和魔晶石配置，推荐使用蒂法主控打出高力竭伤害。',
        tags: ['DLC', '挑战']
      },
      {
        id: 'bronze-dlc-1',
        title: 'Takes Two to Wutai (五台的搭档)',
        type: 'bronze',
        description: 'Complete Chapter 1 of INTERmission. (完成尤菲篇第1章。)',
        guide: 'DLC 剧情流程杯。',
        tags: ['DLC', '剧情']
      },
      {
        id: 'bronze-dlc-2',
        title: 'The Fox and the Hound (狐狸与猎犬)',
        type: 'bronze',
        description: 'Complete Chapter 2 of INTERmission. (完成尤菲篇第2章。)',
        guide: 'DLC 剧情流程杯。',
        tags: ['DLC', '剧情']
      },
      {
        id: 'bronze-dlc-3',
        title: 'Turtle-tastic (寻找乌龟海报大王)',
        type: 'bronze',
        description: 'Collect all the Happy Turtle flyers. (收集所有龟角海报。)',
        guide: '在尤菲篇第1章，贫民窟内共有 6 张龟角海报。找到老龟酒馆老板接任务后开始收集。',
        tags: ['DLC', '收集']
      },
      {
        id: 'bronze-dlc-4',
        title: 'Game, Set, Master (兀鹰冠军)',
        type: 'bronze',
        description: 'Become the Fort Condor grandmaster. (在兀鹰堡垒小游戏中获得冠军。)',
        guide: '尤菲篇第1章的“兀鹰堡垒”小游戏，需要击败贫民窟里的所有对手（共7人），最后击败查德利即可。',
        tags: ['DLC', '小游戏']
      },
      {
        id: 'bronze-dlc-5',
        title: 'Condor Queen (兀鹰女王)',
        type: 'bronze',
        description: 'Become the Fort Condor grandmaster on Hard difficulty. (在 Hard 难度下获得兀鹰堡垒冠军。)',
        guide: '在 Hard 难度下重玩尤菲篇时，重新击败所有兀鹰堡垒的对手。对手的难度会显著提升。',
        tags: ['DLC', '小游戏', '难度']
      },
      {
        id: 'bronze-dlc-6',
        title: 'Materia Maven (魔晶石猎人)',
        type: 'bronze',
        description: 'Obtain all materia from Shinra Box Buster challenges. (在神罗破坏箱挑战中获得所有魔晶石。)',
        guide: '在尤菲篇第2章开始时的神罗破坏箱小游戏中，完成所有级别的挑战（包括普通和困难）并达到最高分数。',
        tags: ['DLC', '小游戏']
      }
    ]
  }
];

export default function FF7RTrophyList() {
  const [activeGroup, setActiveGroup] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTrophy, setExpandedTrophy] = useState(null);
  const [sortBy, setSortBy] = useState('default'); // 'default', 'rarity'
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'platinum': return platinumTrophyIcon;
      case 'gold': return goldTrophyIcon;
      case 'silver': return silverTrophyIcon;
      case 'bronze': return bronzeTrophyIcon;
      default: return bronzeTrophyIcon;
    }
  };

  const getTrophyColor = (type) => {
    switch(type) {
      case 'platinum': return 'text-[#b0c4de] drop-shadow-[0_0_8px_rgba(176,196,222,0.8)]';
      case 'gold': return 'text-[#ffd700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]';
      case 'silver': return 'text-[#c0c0c0] drop-shadow-[0_0_8px_rgba(192,192,192,0.8)]';
      case 'bronze': return 'text-[#cd7f32] drop-shadow-[0_0_8px_rgba(205,127,50,0.8)]';
      default: return 'text-gray-400';
    }
  };

  const getTrophyBg = (type) => {
    switch(type) {
      case 'platinum': return 'bg-gradient-to-br from-[#b0c4de]/20 to-transparent border-[#b0c4de]/30';
      case 'gold': return 'bg-gradient-to-br from-[#ffd700]/20 to-transparent border-[#ffd700]/30';
      case 'silver': return 'bg-gradient-to-br from-[#c0c0c0]/20 to-transparent border-[#c0c0c0]/30';
      case 'bronze': return 'bg-gradient-to-br from-[#cd7f32]/20 to-transparent border-[#cd7f32]/30';
      default: return 'bg-gray-800/50 border-gray-700';
    }
  };

  // Get total counts
  const totalTrophies = trophyGroups.reduce((acc, group) => acc + group.trophies.length, 0);
  const platCount = trophyGroups.reduce((acc, group) => acc + group.trophies.filter(t => t.type === 'platinum').length, 0);
  const goldCount = trophyGroups.reduce((acc, group) => acc + group.trophies.filter(t => t.type === 'gold').length, 0);
  const silverCount = trophyGroups.reduce((acc, group) => acc + group.trophies.filter(t => t.type === 'silver').length, 0);
  const bronzeCount = trophyGroups.reduce((acc, group) => acc + group.trophies.filter(t => t.type === 'bronze').length, 0);

  // Filter and sort trophies
  let filteredGroups = trophyGroups.map(group => {
    let filteredTrophies = group.trophies.filter(trophy => {
      const matchesType = activeType === 'all' || trophy.type === activeType;
      const matchesSearch = trophy.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            trophy.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });

    // Apply sorting
    if (sortBy === 'rarity') {
      const rarityOrder = { platinum: 1, gold: 2, silver: 3, bronze: 4 };
      filteredTrophies.sort((a, b) => rarityOrder[a.type] - rarityOrder[b.type]);
    }

    return {
      ...group,
      trophies: filteredTrophies
    };
  }).filter(group => {
    if (activeGroup !== 'all' && group.id !== activeGroup) return false;
    return group.trophies.length > 0;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans pb-20">
      {/* Header */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent pt-6'}`}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleBack}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden border border-white/10 shadow-lg shrink-0">
                  <img src={gameIcon} alt="Final Fantasy VII Remake" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-white leading-tight">《最终幻想7 重制版》</h1>
                  <div className="text-xs text-gray-400 flex items-center gap-2 mt-0.5">
                    <span>PS5 奖杯指南</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-5 py-2">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-white text-lg">{totalTrophies}</span>
                <span className="text-gray-500 text-sm">Total</span>
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" title="Platinum">
                  <img src={platinumTrophyIcon} alt="Platinum" className="w-4 h-4 filter hue-rotate-[190deg] brightness-[1.2] drop-shadow-[0_0_2px_rgba(176,196,222,0.8)]" />
                  <span className="text-[#b0c4de] text-sm">{platCount}</span>
                </div>
                <div className="flex items-center gap-1.5" title="Gold">
                  <img src={goldTrophyIcon} alt="Gold" className="w-4 h-4" />
                  <span className="text-[#ffd700] text-sm">{goldCount}</span>
                </div>
                <div className="flex items-center gap-1.5" title="Silver">
                  <img src={silverTrophyIcon} alt="Silver" className="w-4 h-4" />
                  <span className="text-[#c0c0c0] text-sm">{silverCount}</span>
                </div>
                <div className="flex items-center gap-1.5" title="Bronze">
                  <img src={bronzeTrophyIcon} alt="Bronze" className="w-4 h-4" />
                  <span className="text-[#cd7f32] text-sm">{bronzeCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-[#111] p-4 rounded-2xl border border-white/5">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="搜索奖杯名称或描述..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <Plus size={18} className="rotate-45" />
              </button>
            )}
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide shrink-0">
            <button 
              onClick={() => setActiveType('all')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${activeType === 'all' ? 'bg-white text-black font-medium' : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#222] hover:text-white border border-white/5'}`}
            >
              全部
            </button>
            <button 
              onClick={() => setActiveType('platinum')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all flex items-center gap-2 ${activeType === 'platinum' ? 'bg-[#b0c4de]/20 text-[#b0c4de] border-[#b0c4de]/50 font-medium' : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#222] border border-white/5'}`}
            >
              <img src={platinumTrophyIcon} alt="Platinum" className="w-4 h-4 filter hue-rotate-[190deg] brightness-[1.2]" />
              <span className="hidden sm:inline">白金</span>
            </button>
            <button 
              onClick={() => setActiveType('gold')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all flex items-center gap-2 ${activeType === 'gold' ? 'bg-[#ffd700]/20 text-[#ffd700] border-[#ffd700]/50 font-medium' : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#222] border border-white/5'}`}
            >
              <img src={goldTrophyIcon} alt="Gold" className="w-4 h-4" />
              <span className="hidden sm:inline">金杯</span>
            </button>
            <button 
              onClick={() => setActiveType('silver')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all flex items-center gap-2 ${activeType === 'silver' ? 'bg-[#c0c0c0]/20 text-[#c0c0c0] border-[#c0c0c0]/50 font-medium' : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#222] border border-white/5'}`}
            >
              <img src={silverTrophyIcon} alt="Silver" className="w-4 h-4" />
              <span className="hidden sm:inline">银杯</span>
            </button>
            <button 
              onClick={() => setActiveType('bronze')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all flex items-center gap-2 ${activeType === 'bronze' ? 'bg-[#cd7f32]/20 text-[#cd7f32] border-[#cd7f32]/50 font-medium' : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#222] border border-white/5'}`}
            >
              <img src={bronzeTrophyIcon} alt="Bronze" className="w-4 h-4" />
              <span className="hidden sm:inline">铜杯</span>
            </button>
          </div>
        </div>

        {/* Group Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveGroup('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeGroup === 'all' 
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white'
            }`}
          >
            全部奖杯组
          </button>
          {trophyGroups.map(group => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeGroup === group.id 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                  : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Trophy List */}
        <div className="space-y-12">
          {filteredGroups.map(group => (
            <div key={group.id} className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3 pb-2 border-b border-white/10">
                <div className="w-1.5 h-6 bg-cyan-500 rounded-full"></div>
                {group.title}
                <span className="text-sm font-normal text-gray-500 bg-white/5 px-2.5 py-0.5 rounded-full ml-2">
                  {group.trophies.length}
                </span>
              </h2>
              
              <div className="grid gap-3">
                {group.trophies.map(trophy => {
                  const isExpanded = expandedTrophy === trophy.id;
                  
                  return (
                    <div 
                      key={trophy.id}
                      className={`
                        group relative rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer
                        ${isExpanded ? 'bg-[#151515] border-white/20' : 'bg-[#0f0f0f] border-white/5 hover:border-white/15 hover:bg-[#121212]'}
                      `}
                      onClick={() => setExpandedTrophy(isExpanded ? null : trophy.id)}
                    >
                      {/* Left color bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300
                        ${trophy.type === 'platinum' ? 'bg-[#b0c4de]' : 
                          trophy.type === 'gold' ? 'bg-[#ffd700]' : 
                          trophy.type === 'silver' ? 'bg-[#c0c0c0]' : 'bg-[#cd7f32]'}
                        ${isExpanded ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}
                      `}></div>
                      
                      <div className="p-4 md:p-5 pl-5 md:pl-6">
                        <div className="flex gap-4 md:gap-5">
                          {/* Icon */}
                          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 border ${getTrophyBg(trophy.type)}`}>
                            <img 
                              src={getTypeIcon(trophy.type)} 
                              alt={trophy.type} 
                              className={`w-8 h-8 md:w-10 md:h-10 ${trophy.type === 'platinum' ? 'filter hue-rotate-[190deg] brightness-[1.2]' : ''}`} 
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-1.5">
                              <h3 className={`text-lg md:text-xl font-bold truncate ${getTrophyColor(trophy.type)}`}>
                                {trophy.title}
                              </h3>
                              
                              <div className="flex flex-wrap items-center gap-2 shrink-0">
                                {trophy.tags.map((tag, idx) => (
                                  <span key={idx} className="px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-gray-400 border border-white/10">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                              {trophy.description}
                            </p>
                          </div>
                          
                          {/* Expand Icon */}
                          <div className="flex items-center shrink-0 ml-2">
                            <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-white/10' : 'group-hover:bg-white/10'}`}>
                              <ChevronDown size={18} className="text-gray-400" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Expanded Guide */}
                        <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-5' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                            <div className="pt-4 md:pt-5 border-t border-white/10 pl-[72px] md:pl-[84px]">
                              <div className="flex items-start gap-3">
                                <CornerUpLeft className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wider">攻略指南 Guide</h4>
                                  <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-3">
                                    {trophy.guide.split('\n').map((paragraph, idx) => (
                                      <p key={idx}>{paragraph}</p>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {filteredGroups.length === 0 && (
            <div className="text-center py-20 bg-[#111] rounded-2xl border border-white/5">
              <Trophy size={48} className="mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">未找到奖杯</h3>
              <p className="text-gray-400">尝试使用不同的搜索词或分类过滤。</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveType('all');
                  setActiveGroup('all');
                }}
                className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                重置过滤器
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
