import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Triangle, CornerUpLeft } from 'lucide-react';
import './Tlou2TrophyList.css'; // Switch to the PS5 style CSS

// Import Trophy Icons
import goldTrophyIcon from '../../picture/Gold PS Trophy.svg';
import silverTrophyIcon from '../../picture/Silver PS Trophy.svg';
import bronzeTrophyIcon from '../../picture/Bronze PS Trophy.svg';
// Import Game Icon
import gameIcon from '../../picture/page1-game-cover/Witcher_3_cover_art.jpg';

// Using Gold as base for Platinum with CSS filter
const platinumTrophyIcon = goldTrophyIcon;

const trophyGroups = [
  {
    "id": "base",
    "title": "The Witcher 3: Wild Hunt (巫师 3：狂猎)",
    "trophies": [
      {
        "id": "plat-1",
        "title": "The Limits of the Possible (潜能极限)",
        "type": "platinum",
        "description": "Collect all trophies. (收集所有奖杯。)",
        "guide": "获得本体游戏中所有的奖杯即可解锁白金。",
        "tags": ["白金"]
      },
      {
        "id": "gold-1",
        "title": "Passed the Trial (通过试炼)",
        "type": "gold",
        "description": "Finish the game on any difficulty. (以任何难度完成游戏。)",
        "guide": "通关游戏主线剧情即可获得。如果以最高难度通关会一并获得此奖杯。",
        "tags": ["流程", "主线"]
      },
      {
        "id": "gold-2",
        "title": "Ran the Gauntlet (完成冒险)",
        "type": "gold",
        "description": "Finish the game on the \"Blood and Broken Bones!\" or \"Death March!\" difficulty levels. (完成游戏「想流点血！」或「死而无愧！」难度等级。)",
        "guide": "以第二高或最高难度通关游戏。",
        "tags": ["流程", "难度"]
      },
      {
        "id": "gold-3",
        "title": "Walked the Path (旅途终点)",
        "type": "gold",
        "description": "Finish the game on the \"Death March!\" difficulty level. (完成游戏「死而无愧！」难度等级。)",
        "guide": "以最高难度「死而无愧！」通关游戏。建议多利用法印（如昆恩印）、闪避和炼金药剂。",
        "tags": ["流程", "难度"]
      },
      {
        "id": "silver-1",
        "title": "Geralt: The Professional (杰洛特：专业好手)",
        "type": "silver",
        "description": "Complete all witcher contracts. (完成所有狩魔猎人的委托。)",
        "guide": "完成本体所有的猎魔人委托任务，有些委托可能会因为剧情推进而失败，建议尽早完成。",
        "tags": ["任务", "委托"]
      },
      {
        "id": "silver-2",
        "title": "Kingmaker (国王推手)",
        "type": "silver",
        "description": "Complete the subplot about choosing Skellige's ruler. (完成选择史凯利杰统治者的支线剧情。)",
        "guide": "完成史凯利杰群岛的王位继承支线任务（帮助凯瑞丝或哈尔玛）。",
        "tags": ["任务", "支线"]
      },
      {
        "id": "silver-3",
        "title": "Assassin of Kings (国王刺客)",
        "type": "silver",
        "description": "Take part in the assassination of King Radovid. (参与拉多维德国王的暗杀任务。)",
        "guide": "完成“为祖国”支线任务，这需要你在游戏前期和中期完成迪科斯彻和罗契的相关任务。",
        "tags": ["任务", "易错过"]
      },
      {
        "id": "silver-4",
        "title": "Friends With Benefits (交情匪浅)",
        "type": "silver",
        "description": "Complete the subplot involving Keira Metz. (完成跟凯拉．梅兹有关的支线剧情。)",
        "guide": "完成凯拉·梅兹的所有支线任务，并最终劝说她前往凯尔·莫罕。",
        "tags": ["任务", "支线"]
      },
      {
        "id": "silver-5",
        "title": "Full Crew (全员到齐)",
        "type": "silver",
        "description": "Bring all possible allies to Kaer Morhen for the battle against the Hunt. (把所有可招募的盟友都找到凯尔莫罕，准备与狂猎展开全面大战。)",
        "guide": "在“凯尔·莫罕之战”前，招募所有关键盟友（凯拉、特莉丝、罗契、薇丝、卓尔坦、尔米亚、哈尔玛）。",
        "tags": ["任务", "易错过"]
      },
      {
        "id": "silver-6",
        "title": "Dendrologist (植树专家)",
        "type": "silver",
        "description": "Acquire all the Abilities in one tree. (学会一个技能树上的所有技能。)",
        "guide": "将一个技能树（如战斗或法印）中的所有技能都升满级（不包括DLC新增技能）。",
        "tags": ["成长"]
      },
      {
        "id": "silver-7",
        "title": "Mutant (变种人)",
        "type": "silver",
        "description": "Fill all mutagen slots. (装满所有突变诱发物栏位。)",
        "guide": "达到28级后解锁所有4个突变诱发物槽位，并全部装备上诱发物。",
        "tags": ["成长"]
      },
      {
        "id": "silver-8",
        "title": "Fast and Furious (身手矫健)",
        "type": "silver",
        "description": "Kill 5 foes in a fight without taking damage (except for Toxicity) and without using the Quen Sign. (在一场战斗当中必须毫发无伤（毒害例外），也不使用昆恩之印来杀死 5 个敌人。)",
        "guide": "找一群低等级的狼或野狗，用伊格尼法印或快速近战攻击迅速解决。",
        "tags": ["战斗"]
      },
      {
        "id": "bronze-1",
        "title": "Lilac and Gooseberries (丁香与醋栗)",
        "type": "bronze",
        "description": "Find Yennefer of Vengerberg. (寻找范格堡的叶奈法。)",
        "guide": "完成白果园主线任务后自动获得。",
        "tags": ["流程", "主线"]
      },
      {
        "id": "bronze-2",
        "title": "A Friend in Need (伸出援手)",
        "type": "bronze",
        "description": "Find and free Dandelion. (寻找丹德里恩，解救他。)",
        "guide": "完成诺维格瑞主线任务后自动获得。",
        "tags": ["流程", "主线"]
      },
      {
        "id": "bronze-3",
        "title": "Necromancer (招魂问卜)",
        "type": "bronze",
        "description": "Help Yennefer extract information from Skjall's body. (帮助叶奈法从史凯裘的的尸体上获取情报。)",
        "guide": "完成史凯利杰群岛主线任务后自动获得。",
        "tags": ["流程", "主线"]
      },
      {
        "id": "bronze-4",
        "title": "Family Counselor (家庭咨商师)",
        "type": "bronze",
        "description": "Find the baron's wife and daughter. (寻找男爵的妻女。)",
        "guide": "完成威伦“血腥男爵”主线任务后自动获得。",
        "tags": ["流程", "主线"]
      },
      {
        "id": "bronze-5",
        "title": "Something More (未了之事)",
        "type": "bronze",
        "description": "Find Ciri. (寻找希里。)",
        "guide": "完成迷雾之岛主线任务后自动获得。",
        "tags": ["流程", "主线"]
      },
      {
        "id": "bronze-6",
        "title": "Xenonaut (舌灿莲花)",
        "type": "bronze",
        "description": "Visit Tir na Lia and convince Ge'els to betray Eredin. (前往提尔纳丽亚，说服盖尔背叛艾瑞汀。)",
        "guide": "完成相关主线任务后自动获得。",
        "tags": ["流程", "主线"]
      },
      {
        "id": "bronze-7",
        "title": "The King is Dead (国王已死)",
        "type": "bronze",
        "description": "Defeat Eredin. (打败艾瑞汀。)",
        "guide": "在主线最终战中击败狂猎之王艾瑞汀。",
        "tags": ["流程", "主线", "Boss"]
      },
      {
        "id": "bronze-8",
        "title": "That Is the Evilest Thing... (凶残至极)",
        "type": "bronze",
        "description": "Ignite the gas produced by a Dragon's Dream bomb using a burning opponent 10 times. (用燃烧的敌人点燃龙之梦炸弹所释放的气体 10 次。)",
        "guide": "先用伊格尼法印点燃敌人，然后向他们投掷龙之梦炸弹，重复10次。",
        "tags": ["战斗"]
      },
      {
        "id": "bronze-9",
        "title": "Butcher of Blaviken (巴尔维坎的屠夫)",
        "type": "bronze",
        "description": "Kill at least 5 opponents in under 10 seconds. (在 10 秒内杀死 5 名以上的敌人。)",
        "guide": "在低等级区域（如白果园）找一群野狗或狼，用伊格尼或剑舞快速清理。",
        "tags": ["战斗"]
      },
      {
        "id": "bronze-10",
        "title": "Brawler (打架好手)",
        "type": "bronze",
        "description": "Defeat Olaf, the Skellige champion of unarmed combat. (在史凯利杰徒手格斗中击败冠军欧拉夫。)",
        "guide": "完成史凯利杰群岛的系列拳击比赛，最后击败巨熊欧拉夫。",
        "tags": ["小游戏", "战斗"]
      },
      {
        "id": "bronze-11",
        "title": "Overkill (赶尽杀绝)",
        "type": "bronze",
        "description": "Make an opponent suffer from bleeding, poisoning and burning simultaneously. Do this 10 times. (使敌人同时流血、中毒和燃烧。完成 10 次。)",
        "guide": "装备流血技能的剑，涂上毒药，再使用伊格尼法印或恶魔之尘炸弹。",
        "tags": ["战斗"]
      },
      {
        "id": "bronze-12",
        "title": "Master Marksman (神射手)",
        "type": "bronze",
        "description": "Kill 50 human and nonhuman opponents by striking them in the head with a crossbow bolt. (以十字弓爆头杀死 50 个受到人类和非人类的对手。)",
        "guide": "非常有挑战性的奖杯。建议在恶魔坑（Devil's Pit）刷强盗，先削减血量，然后用亚克席法印定住，再用十字弓爆头。",
        "tags": ["战斗", "耗时"]
      },
      {
        "id": "bronze-13",
        "title": "What Was That? (那是什么？)",
        "type": "bronze",
        "description": "Attack, counter, cast a Sign and throw a bomb (in any order) in under 4 seconds. (在 4 秒内进行攻击、反击、施放法印、丢炸弹（顺序不拘）。)",
        "guide": "建议顺序：反击 -> 攻击 -> 法印 -> 丢炸弹。找个落单的敌人练习。",
        "tags": ["战斗"]
      },
      {
        "id": "bronze-14",
        "title": "Globetrotter (全职旅人)",
        "type": "bronze",
        "description": "Discover 100 fast travel points. (发现 100 个快速旅行点。)",
        "guide": "探索地图，多去未知区域（问号）。",
        "tags": ["探索"]
      },
      {
        "id": "bronze-15",
        "title": "Pest Control (除虫专家)",
        "type": "bronze",
        "description": "Destroy all monster nests in the Velen / Novigrad region, or in Skellige. (摧毁威伦／诺维格瑞区域，或史凯利杰的所有怪物巢穴。)",
        "guide": "建议清理史凯利杰群岛的怪物巢穴，数量相对较少。记得带够炸弹。",
        "tags": ["探索", "战斗"]
      },
      {
        "id": "bronze-16",
        "title": "Card Collector (纸牌收藏家)",
        "type": "bronze",
        "description": "Acquire all gwent cards available in the base version of the game. (收集游戏基本版的所有昆特牌。)",
        "guide": "极易错过的奖杯。需要购买商人出售的牌，并在任务和锦标赛中赢取特殊牌。注意部分NPC如果死亡则无法获取其卡牌。",
        "tags": ["收集", "小游戏", "易错过"]
      },
      {
        "id": "bronze-17",
        "title": "Gwent Master (昆特牌大师)",
        "type": "bronze",
        "description": "Defeat Tybalt and win the gwent tournament held at the Passiflora. (击败泰伯特，赢得帕西弗罗拉举办的昆特牌锦标赛。)",
        "guide": "参加诺维格瑞的“大赌局”支线任务并赢得所有比赛。建议赛前保存，一旦输掉任务即失败。",
        "tags": ["小游戏", "易错过"]
      },
      {
        "id": "bronze-18",
        "title": "Let's Play (来玩玩吧)",
        "type": "bronze",
        "description": "Win a round of gwent using only neutral cards. (只使用中立牌赢得一局昆特牌。)",
        "guide": "在第一局让对方先出牌并放弃，第二局打出你的强力中立牌（如杰洛特、希里）赢下这一局。",
        "tags": ["小游戏"]
      },
      {
        "id": "bronze-19",
        "title": "Geralt and Friends (杰洛特与朋友们)",
        "type": "bronze",
        "description": "Win a round of gwent using only neutral cards. (只使用中立卡牌赢的一局昆特牌)",
        "guide": "同上",
        "tags": ["小游戏"]
      },
      {
        "id": "bronze-20",
        "title": "All In (全力以赴)",
        "type": "bronze",
        "description": "Play three hero cards in one round of gwent and win the match. (在一局昆特牌中打出 3 张英雄牌并赢得比赛。)",
        "guide": "在后期卡组英雄牌较多时很容易完成。",
        "tags": ["小游戏"]
      },
      {
        "id": "bronze-21",
        "title": "Even Odds (势均力敌)",
        "type": "bronze",
        "description": "Kill 2 monsters you have a contract on without using Signs, potions, mutagens, oils or bombs. (在不使用法印、药水、突变诱发物、剑油或炸弹的情况下，杀死 2 只委托上的怪物。)",
        "guide": "在后期等级高了之后，卸下所有突变诱发物，去找等级极低的委托怪物（如白果园的井里恶魔），纯用平砍击杀。",
        "tags": ["战斗", "委托"]
      },
      {
        "id": "bronze-22",
        "title": "Mutant (突变异种)",
        "type": "bronze",
        "description": "Fill all mutagen slots. (装满所有突变诱发物栏位。)",
        "guide": "升到28级解锁全部栏位并装上诱发物。",
        "tags": ["成长"]
      }
    ]
  },
  {
    "id": "dlc1",
    "title": "DLC: Hearts of Stone (石之心)",
    "trophies": [
      {
        "id": "dlc1-bronze-1",
        "title": "I'm Not Kissing That (真爱之吻)",
        "type": "bronze",
        "description": "Kill the prince cursed into a toad. (杀死受诅咒变成蟾蜍的王子。)",
        "guide": "流程杯，击败蟾蜍王子自动获得。",
        "tags": ["DLC", "流程", "Boss"]
      },
      {
        "id": "dlc1-bronze-2",
        "title": "Let the Good Times Roll! (欢乐时光)",
        "type": "bronze",
        "description": "Participate in all the activities at the wedding. (参与婚礼上的所有活动。)",
        "guide": "在参加婚礼的任务中，与所有可互动的物品/小游戏互动（赶猪、找鞋、喝酒等），直到午夜钟声敲响前完成。",
        "tags": ["DLC", "易错过"]
      },
      {
        "id": "dlc1-bronze-3",
        "title": "Shopaholic (购物狂)",
        "type": "bronze",
        "description": "Buy all the items put on the block at the Borsodis' Auction House. (买下波索迪拍卖行的所有拍卖品。)",
        "guide": "在“芝麻开门”任务的拍卖会上，买下所有三件物品（总共需要不到1000克朗）。",
        "tags": ["DLC", "易错过"]
      },
      {
        "id": "dlc1-bronze-4",
        "title": "Curator of Nightmares (梦魇馆长)",
        "type": "bronze",
        "description": "Recreate all of Iris' nightmares in the Painted World. (重现画中世界里爱丽丝的所有梦魇。)",
        "guide": "在画中世界修复所有8个记忆场景。其中第一个（凉亭）极易错过。",
        "tags": ["DLC", "易错过"]
      },
      {
        "id": "dlc1-bronze-5",
        "title": "When It's Many Against One… (以寡敌众)",
        "type": "bronze",
        "description": "Provoke all Iris von Everec's Nightmares into fighting you at the same time and defeat them. (激怒所有爱丽丝·冯·埃弗瑞克的梦魇，使他们同时对你发动攻击，并将他们击败。)",
        "guide": "在最终面对爱丽丝梦魇的战斗中，用范围攻击（如阿尔德）唤醒所有未动的梦魇，然后同时击败它们。建议在低难度下进行。",
        "tags": ["DLC", "战斗", "易错过"]
      },
      {
        "id": "dlc1-bronze-6",
        "title": "Pacta Sunt Servanda (缔约者)",
        "type": "bronze",
        "description": "Finish the \"Hearts of Stone\" expansion. (完成《石之心》资料片。)",
        "guide": "完成石之心DLC的主线故事。",
        "tags": ["DLC", "流程"]
      },
      {
        "id": "dlc1-bronze-7",
        "title": "Wild Rose Dethorned (拔除野玫瑰)",
        "type": "bronze",
        "description": "Defeat all the fallen knights and loot their campsites. (击败所有堕落骑士并搜刮他们的营地。)",
        "guide": "清理资料片地图上所有带有红色玫瑰标志的强盗营地，并打开营地里的红色箱子。",
        "tags": ["DLC", "战斗", "收集"]
      },
      {
        "id": "dlc1-bronze-8",
        "title": "I Wore Ofieri Before It Was Cool (新潮流)",
        "type": "bronze",
        "description": "Collect all available Ofieri armor and horse gear, and at least one Ofieri sword. (收集所有欧飞尔护甲和马匹装备，以及至少一把欧飞尔剑。)",
        "guide": "完成“来自欧飞尔的遥远海岸”寻宝任务制作全套护甲，买下商人卖的欧飞尔马具，并在赛马比赛中赢取马鞍。",
        "tags": ["DLC", "收集"]
      },
      {
        "id": "dlc1-bronze-9",
        "title": "Killed It (牛鬼蛇神)",
        "type": "bronze",
        "description": "Win a round of gwent with a total strength of at least 187. (赢得一局昆特牌比赛，且总力量至少达到 187。)",
        "guide": "使用北方领域或尼弗迦德卡组，利用间谍牌获取手牌优势，在最后一局打出所有高战力牌和号角。",
        "tags": ["DLC", "小游戏"]
      }
    ]
  },
  {
    "id": "dlc2",
    "title": "DLC: Blood and Wine (血与酒)",
    "trophies": [
      {
        "id": "dlc2-bronze-1",
        "title": "The Witcher's Gone South (国境之南)",
        "type": "bronze",
        "description": "Travel to the Duchy of Toussaint. (前往陶森特公国。)",
        "guide": "接受DLC起始任务并到达陶森特后自动获得。",
        "tags": ["DLC", "流程"]
      },
      {
        "id": "dlc2-bronze-2",
        "title": "Last Action Hero (全能骑士)",
        "type": "bronze",
        "description": "Be decorated with the Order of Vitis Vinifera. (获颁酿酒葡萄勋章。)",
        "guide": "血与酒的结局之一（好结局）。在最终任务前去童话世界救出席安娜，并查出真正的第五个受害者（女爵）。",
        "tags": ["DLC", "结局", "易错过"]
      },
      {
        "id": "dlc2-bronze-3",
        "title": "Kling of the Clink (狱狱寡欢)",
        "type": "bronze",
        "description": "Serve time in Toussaint. (在陶森特服刑。)",
        "guide": "血与酒的结局之一（坏结局）。在任务“长牙之夜”中选择去找暗影长者，或在童话世界中没有获得席安娜的缎带。",
        "tags": ["DLC", "结局", "易错过"]
      },
      {
        "id": "dlc2-bronze-4",
        "title": "A Knight to Remember (骑士的恋爱故事)",
        "type": "bronze",
        "description": "Obtain a flawless victory in all the competitions during the knights' tourney. (在骑士比武大赛所有比赛中都获得完全胜利。)",
        "guide": "在支线任务“骑士的恋爱故事”中赢得射箭、赛马、团战和单挑的所有胜利。建议战前存档。",
        "tags": ["DLC", "任务", "易错过"]
      },
      {
        "id": "dlc2-bronze-5",
        "title": "Embodiment of the Five Virtues (五德化身)",
        "type": "bronze",
        "description": "Be given Aerondight by the Lady of the Lake. (从湖中剑获得湖女之剑。)",
        "guide": "完成“骑士五德”任务，在游戏中通过各种抉择展现慷慨、怜悯、荣誉、英勇和智慧五种美德。",
        "tags": ["DLC", "任务", "收集"]
      },
      {
        "id": "dlc2-bronze-6",
        "title": "Playing House (家家酒)",
        "type": "bronze",
        "description": "Use all available options for developing Corvo Bianco. (使用所有可用的选项来升级白鸦葡萄园。)",
        "guide": "花费克朗和管家对话，将白鸦葡萄园的所有设施升级完毕（需要约14000克朗）。",
        "tags": ["DLC", "家园"]
      },
      {
        "id": "dlc2-bronze-7",
        "title": "Turned Every Stone (寻根探底)",
        "type": "bronze",
        "description": "Find all grandmaster diagrams for each witcher school. (寻找每个狩魔猎人学派的所有宗师级图纸。)",
        "guide": "完成陶森特宗师级工匠提供的五个学派（狼、猫、熊、狮鹫、飞狮）的寻宝任务。",
        "tags": ["DLC", "收集"]
      },
      {
        "id": "dlc2-bronze-8",
        "title": "I Have a Gwent Problem (昆特牌成瘾)",
        "type": "bronze",
        "description": "Collect all the cards in the Skellige deck. (收集史凯利杰牌组的所有卡牌。)",
        "guide": "在陶森特击败19位特定NPC收集全部史凯利杰卡牌，并在比武大赛中使用该牌组。",
        "tags": ["DLC", "收集", "小游戏"]
      },
      {
        "id": "dlc2-bronze-9",
        "title": "Weapon \"W\" (终极武器)",
        "type": "bronze",
        "description": "Develop a mutation. (研发一种突变。)",
        "guide": "完成“面对改变”支线任务解锁新突变系统，然后花费技能点和诱发物研究任意一种新突变。",
        "tags": ["DLC", "成长"]
      },
      {
        "id": "dlc2-bronze-10",
        "title": "David and Golyat (大卫与歌利亚)",
        "type": "bronze",
        "description": "Kill Golyat with a crossbow bolt to his eye. (以十字弓箭矢射中果莉亚的眼睛将其击杀。)",
        "guide": "在进入陶森特后的第一场Boss战中，用十字弓射中果莉亚头盔木桶缝隙处的眼睛（一击必杀）。",
        "tags": ["DLC", "战斗", "易错过"]
      }
    ]
  }
];

export default function Witcher3TrophyList() {
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
    platinum: { label: '非常珍贵', percent: '1.0%' },
    gold: { label: '珍贵', percent: '3.3%' },
    silver: { label: '稀有', percent: '7.1%' },
    bronze: { label: '一般', percent: '36.5%' }
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
            <h1 className="ps5-game-title">The Witcher 3: Wild Hunt</h1>
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
