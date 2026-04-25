import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CornerUpLeft, Triangle } from 'lucide-react';
import './Bg3TrophyList.css';

// Import Trophy Icons
import goldTrophyIcon from '../../picture/Gold PS Trophy.svg';
import silverTrophyIcon from '../../picture/Silver PS Trophy.svg';
import bronzeTrophyIcon from '../../picture/Bronze PS Trophy.svg';
// Import Game Icon
import gameIcon from '../../picture/page1-game-cover/Baldur\'s_Gate_3_cover_art.jpg';

// Using Gold as base for Platinum with CSS filter
const platinumTrophyIcon = goldTrophyIcon;

const trophyGroups = [
  {
    id: 'base',
    title: 'Baldur\'s Gate 3',
    trophies: [
      {
        id: 'plat-1',
        title: 'Pride of Baldur\'s Gate (博德之门的荣耀)',
        type: 'platinum',
        description: 'Collect every trophy in Baldur\'s Gate 3 (收集《博德之门III》中的所有奖杯——非常困难)',
        guide: '白金神作，但也需要耗费大量时间。需要至少完成两个周目（建议一周目善线全收集，二周目邪念）。注意几个易错过的奖杯如“救出所有提夫林”和“不牺牲威尔父亲”。',
        tags: ['白金']
      },
      {
        id: 'gold-1',
        title: 'All\'s Well That Ends Well (爆机)',
        type: 'gold',
        description: 'Finish the game (完成游戏)',
        guide: '通关游戏即可获得，不限难度。',
        tags: ['剧情']
      },
      {
        id: 'gold-2',
        title: 'Absolute Power Corrupts (至上真神的侵蚀)',
        type: 'gold',
        description: 'Take control of the Netherbrain (控制耐色脑)',
        guide: '在结局时选择控制耐色脑而不是摧毁它。',
        tags: ['结局']
      },
      {
        id: 'gold-3',
        title: 'Sins of the Father (以父之名)',
        type: 'gold',
        description: 'Claim your Throne of Blood (为巴尔控制耐色脑，摧毁整个世界，登上鲜血王座)',
        guide: '邪念专属结局。需要接受巴尔的礼物，并在最后选择控制耐色脑奉献给巴尔。',
        tags: ['邪念', '结局']
      },
      {
        id: 'silver-1',
        title: 'The Plot Thickens (前路未卜)',
        type: 'silver',
        description: 'Leave Act One (离开第一幕)',
        guide: '剧情杯，进入第二幕（幽暗地域或通过山口）时获得。',
        tags: ['剧情']
      },
      {
        id: 'silver-2',
        title: 'The City Awaits (一座城市在等待)',
        type: 'silver',
        description: 'Leave Act Two (离开第二幕)',
        guide: '剧情杯，完成月出之塔战役并前往博德之门时获得。',
        tags: ['剧情']
      },
      {
        id: 'silver-3',
        title: 'Hero of the Forgotten Realms (被遗忘国度的英雄)',
        type: 'silver',
        description: 'Kill the Netherbrain (杀死耐色脑)',
        guide: '在结局时选择摧毁耐色脑，拯救城市。',
        tags: ['结局']
      },
      {
        id: 'silver-4',
        title: 'Ceremorphosis (脑噬变异)',
        type: 'silver',
        description: 'Become a mindflayer (转化为夺心魔)',
        guide: '在结局前选择自己转化为夺心魔以使用耐色石。',
        tags: ['结局']
      },
      {
        id: 'bronze-1',
        title: 'Descent From Avernus (地狱降临)',
        type: 'bronze',
        description: 'Take control of the Nautiloid (控制螺壳舰逃离九狱)',
        guide: '完成序章螺壳舰部分即可获得。',
        tags: ['剧情']
      },
      {
        id: 'bronze-2',
        title: 'Roleplayer (沉浸式角色扮演)',
        type: 'bronze',
        description: 'Complete ten background goals (完成十个背景目标)',
        guide: '完成角色的激励任务。在游玩过程中很容易自然解锁，只需注意查看激励点数来源。',
        tags: ['流程']
      },
      {
        id: 'bronze-3',
        title: 'Bedrolls and Breakfast (小憩片刻)',
        type: 'bronze',
        description: 'Take four full Long Rests (进行四次完整的长休)',
        guide: '在营地进行4次长休。注意需要消耗足够的食物。',
        tags: ['流程']
      },
      {
        id: 'bronze-4',
        title: 'Expand Your Mind (开拓思维)',
        type: 'bronze',
        description: 'Consume a parasite (消耗寄生虫)',
        guide: '在获得夺心魔蝌蚪标本后，选择使用它解锁灵吸怪能力。',
        tags: ['流程']
      },
      {
        id: 'bronze-5',
        title: 'Dig for Victory (挖出个成就)',
        type: 'bronze',
        description: 'Dig up five buried chests (挖出五个宝箱)',
        guide: '需要携带铲子，并在通过生存检定发现土堆后挖掘。全游戏有大量隐藏宝箱。',
        tags: ['收集']
      },
      {
        id: 'bronze-6',
        title: 'No Penny Left Behind (白嫖之王)',
        type: 'bronze',
        description: 'Successfully use Detect Thoughts (成功用“侦测思想”窥探心事)',
        guide: '在对话中使用“侦测思想”选项并检定成功。可以使用卷轴、药水或法术。',
        tags: ['技巧']
      },
      {
        id: 'bronze-7',
        title: 'Escapologist (逃脱大师)',
        type: 'bronze',
        description: 'Break out of prison (越狱成功)',
        guide: '故意犯罪被捕入狱，然后撬锁逃脱。可以在第一章翠绿林地监狱尝试。',
        tags: ['技巧']
      },
      {
        id: 'bronze-8',
        title: 'Outsourcing (外包)',
        type: 'bronze',
        description: 'Hire a hireling (招募雇佣兵)',
        guide: '在营地与守墓人对话，花费金币招募一名雇佣兵。',
        tags: ['功能']
      },
      {
        id: 'bronze-9',
        title: 'Jack-of-all-Trades (万金油)',
        type: 'bronze',
        description: 'Multiclass into every class (兼职所有职业)',
        guide: '在一个角色上兼职所有12个职业。可以在达到12级后洗点完成，或者招募一个雇佣兵升级时每级选不同职业。注意不能使用守墓人重置职业。',
        tags: ['挑战']
      },
      {
        id: 'bronze-10',
        title: 'Homebrewer (自酿大师)',
        type: 'bronze',
        description: 'Create three unique alchemical solutions (调制三种独特炼金溶液)',
        guide: '采集材料，在炼金界面制作三种不同的药水、涂油或手雷。',
        tags: ['收集']
      },
      {
        id: 'bronze-11',
        title: 'You Have Two Hands for a Reason (双线操作)',
        type: 'bronze',
        description: 'Pet Scratch and the Owlbear Cub at the same time (同时逗乐挠挠和枭熊宝宝)',
        guide: '需要同时招募挠挠（狗）和枭熊宝宝到营地。当它们在营地成为朋友后，长休时会触发事件，此时选择同时抚摸它们。',
        tags: ['隐藏', '易错过']
      },
      {
        id: 'bronze-12',
        title: 'Rude, Crude, and Full of Attitude (本事不多，想法不少)',
        type: 'bronze',
        description: 'Find and summon the Quasit Shovel (找到并召唤小趴铲)',
        guide: '在染疫村落炼金术士地下室的一具棺材里找到“召唤夸塞魔”卷轴。让法师抄录并召唤，不要直接使用卷轴（是一次性的）。',
        tags: ['收集', '易错过']
      },
      {
        id: 'bronze-13',
        title: 'Forged in Blood and Fire (血火铸器)',
        type: 'bronze',
        description: 'Craft an item in the Adamantine Forge (在精金熔炉里锻造一件物品)',
        guide: '在第一章幽暗地域的复仇之炉，找到精金熔炉，使用模具和秘银矿石锻造一件装备。',
        tags: ['任务']
      },
      {
        id: 'bronze-14',
        title: 'Under Lock and Key (牢不可破)',
        type: 'bronze',
        description: 'Rescue all prisoners from Moonrise Towers (解救月出之塔深处的所有囚犯)',
        guide: '第二章，在与月出之塔敌对前，潜入监狱解救提夫林和深侏儒。需要给乌尔布伦工具（或自己砸墙），并保护他们撤离到船上。',
        tags: ['任务', '易错过']
      },
      {
        id: 'bronze-15',
        title: 'She Cannot be Caged! (放了她！)',
        type: 'bronze',
        description: 'Rescue Sazza from the Emerald Grove, Goblin Camp, and Moonrise Towers (在一次游戏中从翠绿林地、地精营地和月出之塔解救萨扎)',
        guide: '需要全程保下地精萨扎。1.林地监狱救她带她去地精营地。2.在地精营地明萨拉面前保她。3.在月出之塔凯瑟里克面前保她。',
        tags: ['任务', '易错过']
      },
      {
        id: 'bronze-16',
        title: 'Taking Blood (取血)',
        type: 'bronze',
        description: 'Steal the Blood of Lathander (盗取洛山达之血)',
        guide: '在瑰晨修道院（养育间）寻找洛山达之血传奇钉头锤。需要集齐仪式武器或通过检定。',
        tags: ['收集']
      },
      {
        id: 'bronze-17',
        title: 'Action Surge (动作如潮)',
        type: 'bronze',
        description: 'Perform five attacks in one turn (在一回合中执行五个攻击动作)',
        guide: '战士5级（二打）+ 动作如潮（再二打）+ 加速术/附赠动作攻击。很容易达成。',
        tags: ['战斗']
      },
      {
        id: 'bronze-18',
        title: 'Fancy Footwork (凌波微步)',
        type: 'bronze',
        description: 'Defeat Gortash without a single trap triggering (在不触发任何陷阱的情况下击败戈塔什)',
        guide: '在第三章飞龙岩要塞击败戈塔什时，不要触发房间内的任何陷阱。可以先把陷阱拆了，或者在加冕仪式上直接开战（难度较大）。',
        tags: ['战斗', '挑战']
      },
      {
        id: 'bronze-19',
        title: 'Loophole (漏洞)',
        type: 'bronze',
        description: 'Break Wyll\'s pact (在不牺牲威尔灵魂的情况下救出威尔的父亲)',
        guide: '第三章，米佐拉会提出用威尔的灵魂换他父亲的命。选择打破契约，然后自己去钢铁王座监狱救出雷文迦德公爵。',
        tags: ['任务', '易错过']
      },
      {
        id: 'bronze-20',
        title: 'Pest Control (害虫防治)',
        type: 'bronze',
        description: 'Kill the Spider Matriarch before her eggs hatch (在相位蜘蛛女王的卵孵化前杀死她)',
        guide: '第一章染疫村落井下。需要在开战前潜行破坏所有蜘蛛卵，或者在战斗中快速击杀女王，不让她有机会唤醒幼蛛。',
        tags: ['战斗']
      },
      {
        id: 'bronze-21',
        title: 'A Grym Fate (专业魔像杀手)',
        type: 'bronze',
        description: 'Kill the Adamantine Golem without using the Forge Hammer (不使用熔炉大锤杀死精金魔像)',
        guide: '在精金熔炉Boss战中，不要拉拉杆用大锤砸它。靠常规伤害击杀。建议使用钝击武器。',
        tags: ['战斗']
      },
      {
        id: 'bronze-22',
        title: 'Non-Invasive Procedure (非侵入手术)',
        type: 'bronze',
        description: 'Kill the Surgeon without letting him perform surgery (在外科医生不施展手术的情况下杀死他)',
        guide: '第二章治疗中心Boss马鲁斯·索姆。可以通过嘴炮让他自杀，或者在他复活护士/对玩家使用手术技能前快速击杀。',
        tags: ['战斗']
      },
      {
        id: 'bronze-23',
        title: 'Penny Pincher (铁公鸡)',
        type: 'bronze',
        description: 'Defeat the Toll Collector without her using Gold (在收税员不使用金币技能的情况下击败她)',
        guide: '第二章雷斯文征税所Boss格灵哥斯·索姆。可以通过嘴炮说死，或者潜行偷光她身上的金币再开战（较难）。',
        tags: ['战斗']
      },
      {
        id: 'bronze-24',
        title: 'No Free Lunches (看得见吃不着)',
        type: 'bronze',
        description: 'Defeat the Apostle of Myrkul before it consumes any Necromites (在米尔寇的使徒吞噬任何死灵侍僧前击败它)',
        guide: '第二章最终Boss战。Boss会吞噬周围的小怪回血。需要优先清理小怪或快速RUSH Boss。',
        tags: ['战斗']
      },
      {
        id: 'bronze-25',
        title: 'First Blood (第一滴血)',
        type: 'bronze',
        description: 'Kill Orin while her cultists are chanting (在奥林的邪教徒进行仪式时杀死她)',
        guide: '第三章巴尔神殿Boss战。不要打断周围邪教徒的仪式，直接集火击杀奥林。',
        tags: ['战斗']
      },
      {
        id: 'bronze-26',
        title: 'Interfectorem Draconis (屠龙者)',
        type: 'bronze',
        description: 'Kill the Red Dragon in the Upper City (杀死上城区的红龙)',
        guide: '最终战在耐色脑脊背上会遇到红龙。击杀它即可。',
        tags: ['战斗']
      },
      {
        id: 'bronze-27',
        title: 'Crash Landing (软着陆)',
        type: 'bronze',
        description: 'Wait for the dragon to be mid-flight, then knock it out of the sky (等待龙在飞行途中，将其击落)',
        guide: '第三章飞龙岩要塞，在前往戈塔什处会遇到红龙。当它飞起来准备喷火时，通过伤害将其打断（虽然通常它是直接被打死的，这个奖杯描述有点迷，实际上可能指的是在龙背上战斗时的某种情况，或者是遭遇战）。更正：这是要在巨龙安苏的战斗中，当它飞天蓄力时将其击杀或打断。',
        tags: ['战斗']
      },
      {
        id: 'bronze-28',
        title: 'Bottoms Up (干杯)',
        type: 'bronze',
        description: 'Long Rest using only alcohol (只使用酒类进行长休)',
        guide: '在长休选择食物时，全部选择酒类物品直到满足营地补给需求（40或80）。',
        tags: ['趣味']
      },
      {
        id: 'bronze-29',
        title: 'Kill Two Birds with One Gnome (一石二鸟)',
        type: 'bronze',
        description: 'Use an enemy as an improvised weapon against another enemy (使用一名敌人作为临时武器攻击另一名敌人)',
        guide: '力量高的角色（如卡拉克），使用“临时近战武器”动作，举起一个地精砸向另一个地精。',
        tags: ['战斗']
      },
      {
        id: 'bronze-30',
        title: 'Busker (街头艺人)',
        type: 'bronze',
        description: 'Earn 100 gold from playing music (通过演奏音乐获得100金币)',
        guide: '需要有乐器熟练项（诗人或专长）。在人多的地方演奏，路人会扔钱。',
        tags: ['趣味']
      },
      {
        id: 'bronze-31',
        title: 'No One Left Behind (无人掉队)',
        type: 'bronze',
        description: 'Save every Tiefling refugee (拯救所有提夫林难民)',
        guide: '全游戏最难奖杯之一。需要全程保护提夫林。1.林地不被屠。2.罗兰一家在第二章存活。3.月出之塔救出提夫林。4.第三章不让相关NPC死亡。',
        tags: ['任务', '易错过']
      },
      {
        id: 'bronze-32',
        title: 'Murder in Baldur\'s Gate (博德之门谋杀案)',
        type: 'bronze',
        description: 'Become an Unholy Assassin of Bhaal (成为巴尔的邪恶刺客)',
        guide: '第三章，完成谋杀裁判所的任务，杀死小飞象，成为巴尔刺客。',
        tags: ['任务']
      },
      {
        id: 'bronze-33',
        title: 'Mind Blown (脑洞大开)',
        type: 'bronze',
        description: 'Romance the Emperor (与君主罗曼蒂克)',
        guide: '第三章，在与君主的对话中表现出开放态度，接受他的诱惑。',
        tags: ['恋爱']
      },
      {
        id: 'bronze-34',
        title: 'To Bloom in Darkest Night (暗夜之花)',
        type: 'bronze',
        description: 'Gift Shadowheart a Night Orchid (送给影心一朵夜兰花)',
        guide: '第二章幽暗地域可以采到夜兰花。与影心对话得知她喜欢这个，然后送给她。',
        tags: ['恋爱', '影心']
      },
      {
        id: 'bronze-35',
        title: 'Hot Date (火热约会)',
        type: 'bronze',
        description: 'Go on a date with Karlach (与卡拉克约会)',
        guide: '攻略卡拉克。需要在前两章修好她的心脏，并在第三章进入博德之门后触发约会剧情。',
        tags: ['恋爱', '卡拉克']
      },
      {
        id: 'bronze-36',
        title: 'Just a Nibble (只咬一口)',
        type: 'bronze',
        description: 'Let Astarion bite you (让阿斯代伦咬你一口)',
        guide: '第一章长休时触发阿斯代伦吸血剧情，选择同意。',
        tags: ['恋爱', '阿斯代伦']
      },
      {
        id: 'bronze-37',
        title: 'Repairing the Weave (修复魔网)',
        type: 'bronze',
        description: 'Stabilize Gale\'s Netherese Orb (稳定盖尔的耐色瑞尔法球)',
        guide: '攻略盖尔。给他吃魔法物品，并在之后遇到伊尔明斯特时稳定他的法球。',
        tags: ['恋爱', '盖尔']
      },
      {
        id: 'bronze-38',
        title: 'The Lich-Queen\'s Wrath (巫妖女王的愤怒)',
        type: 'bronze',
        description: 'Ally with Voss against the Githyanki Queen (与沃斯结盟对抗吉斯洋基女王)',
        guide: '莱埃泽尔个人任务。在第一章养育间反抗女王，并在之后与沃斯结盟。',
        tags: ['任务', '莱埃泽尔']
      },
      {
        id: 'bronze-39',
        title: 'Embrace Your Urge (拥抱你的欲望)',
        type: 'bronze',
        description: 'Become the Slayer (成为杀戮者)',
        guide: '邪念专属。在第二章杀死伊索贝尔（或在此之前杀死爱人），管家会奖励杀戮者变身形态。',
        tags: ['邪念']
      },
      {
        id: 'bronze-40',
        title: 'Critical Hit (暴击)',
        type: 'bronze',
        description: 'Complete the game in Tactician mode (在战术家难度下完成游戏)',
        guide: '全程保持战术家难度通关。',
        tags: ['挑战']
      },
       {
        id: 'bronze-41',
        title: 'Foehammer (敌锤)',
        type: 'bronze',
        description: 'Complete the game in Honour mode (在荣誉模式下完成游戏)',
        guide: '在荣誉模式（一命通关）下完成游戏。如果不幸团灭，存档会变成自定义模式，无法获得奖杯。',
        tags: ['挑战', '最高难度']
      }
    ]
  }
];

export default function Bg3TrophyList() {
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
    platinum: { label: '非常珍贵', percent: '5.8%' },
    gold: { label: '珍贵', percent: '15.2%' },
    silver: { label: '稀有', percent: '25.6%' },
    bronze: { label: '一般', percent: '45.3%' }
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
            <h1 className="ps5-game-title">Baldur's Gate 3</h1>
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
              {/* <h3 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-blue-500 opacity-90 sticky top-0 bg-[#0f0f0f] z-10 py-2">
                {group.title}
              </h3> */}
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
