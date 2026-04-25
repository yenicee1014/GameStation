import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CornerUpLeft, Triangle } from 'lucide-react';
import './Bg3TrophyList.css'; // Reusing BG3 styles as they are likely generic PS5 styles

// Import Trophy Icons
import goldTrophyIcon from '../../picture/Gold PS Trophy.svg';
import silverTrophyIcon from '../../picture/Silver PS Trophy.svg';
import bronzeTrophyIcon from '../../picture/Bronze PS Trophy.svg';
// Import Game Icon
import gameIcon from '../../picture/page1-game-cover/Horizon_Forbidden_West_cover_art.jpg';

// Using Gold as base for Platinum with CSS filter
const platinumTrophyIcon = goldTrophyIcon;

const trophyGroups = [
  {
    id: 'base',
    title: 'Horizon Forbidden West',
    trophies: [
      // --- Platinum ---
      {
        id: 'plat-1',
        title: 'All Trophies Obtained (获得所有奖杯)',
        type: 'platinum',
        description: 'Obtained all Horizon Forbidden West trophies. (获得了《地平线 西之绝境》的所有奖杯。)',
        guide: '恭喜！你已经完成了西部的所有挑战，获得了白金奖杯！',
        tags: ['白金']
      },
      // --- Gold ---
      {
        id: 'gold-1',
        title: 'Discovered Nemesis (发现涅墨西斯)',
        type: 'gold',
        description: 'Put an end to the Zenith threat and discovered Nemesis. (终结致远天顶的威胁并发现涅墨西斯。)',
        guide: '剧情自动获得。通关主线任务“奇点”后解锁。⚠️注意：最终战记得扫描最终BOSS“幽魂主星”。',
        tags: ['剧情', '通关']
      },
      // --- Silver ---
      {
        id: 'silver-1',
        title: 'Reached Level 50 (达到50级)',
        type: 'silver',
        description: 'Reached player level 50. (玩家等级达到50级。)',
        guide: '本体满级为50级。做完主线和大部分支线即可达成，无需刻意刷经验。',
        tags: ['成长']
      },
      {
        id: 'silver-2',
        title: 'All Tallnecks Overridden (超控所有长颈兽)',
        type: 'silver',
        description: 'Reached the top of every Tallneck and accessed their information. (到达每一只长颈兽的顶端并获取其信息。)',
        guide: '共6只长颈兽。其中一只（盐咬）在炼油厂内部，需要完成【艾奥塔炼油厂】才能解锁；还有一只在主线后期自动解锁；一只隐藏在地图右下角森林中。',
        tags: ['收集', '探索']
      },
      {
        id: 'silver-3',
        title: 'Defeated Asera (打败阿赛拉)',
        type: 'silver',
        description: 'Investigated all Rebel Camps and helped Erend defeat Asera. (调查所有叛军营地并帮助艾伦德击败阿赛拉。)',
        guide: '清理全部5个叛军营地（不包括岗哨），然后触发艾伦德的后续任务【第一铁匠铺】，击败最终BOSS阿赛拉。',
        tags: ['支线', '战斗']
      },
      {
        id: 'silver-4',
        title: 'All Core Overrides Obtained (获得所有核心超控)',
        type: 'silver',
        description: 'Reached the Core of every Cauldron and accessed their information. (到达每一座炼油厂的核心并获取其信息。)',
        guide: '完成所有炼油厂（Cauldrons）：MU, IOTA (艾奥塔), CHI, KAPPA 等。包含主线去过的维修湾。',
        tags: ['探索', '挑战']
      },
      {
        id: 'silver-5',
        title: 'Obtained 3 Stripes at All Hunting Grounds (在所有狩猎场获得3个勋带)',
        type: 'silver',
        description: 'Earned at least a Quarter Stripe in all three trials at all Hunting Grounds. (在所有狩猎场的所有三个考验中至少获得四分一勋带。)',
        guide: '完成地图上所有4个狩猎场的全部挑战。只需拿到最低级奖励即可，不需要全部全勋带（金牌）。',
        tags: ['挑战']
      },
      {
        id: 'silver-6',
        title: 'All Machine Types Scanned (扫描所有类型的机器)',
        type: 'silver',
        description: 'Encountered and Focus scanned every type of machine. (遭遇并使用Focus扫描所有类型的机器。)',
        guide: '⚠️重点奖杯。需扫描全部43种机器。注意：最终BOSS【幽魂主星】和【幽魂】容易漏掉。变体（如酸蚀、火焰）不算新类型，只需扫描基础型。',
        tags: ['收集', '易错过']
      },
      {
        id: 'silver-7',
        title: 'Skill Tree Learned (学会技能树)',
        type: 'silver',
        description: 'Learned all available skills on one tree. (学习一个技能树上的所有可用技能。)',
        guide: '将6大技能树中的任意一个（推荐“猎人”或“生存”）全部点满。不需要点满所有技能树。',
        tags: ['成长']
      },
      // --- Bronze ---
      {
        id: 'bronze-1',
        title: 'Reached Level 20 (达到20级)',
        type: 'bronze',
        description: 'Reached player level 20. (玩家等级达到20级。)',
        guide: '流程必得。',
        tags: ['成长']
      },
      {
        id: 'bronze-2',
        title: 'Reached Level 30 (达到30级)',
        type: 'bronze',
        description: 'Reached player level 30. (玩家等级达到30级。)',
        guide: '流程必得。',
        tags: ['成长']
      },
      {
        id: 'bronze-3',
        title: 'Reached the Daunt (到达丹特)',
        type: 'bronze',
        description: 'Arrived at the Daunt seeking passage into the Forbidden West. (到达丹特，寻求进入西之绝境的途径。)',
        guide: '剧情自动获得。完成序章后到达丹特区域即可解锁。',
        tags: ['剧情']
      },
      {
        id: 'bronze-4',
        title: 'Secured Passage to the Embassy (平息威胁)',
        type: 'bronze',
        description: 'Cleared the way to the Embassy. (解决了前往大使会议的阻碍。)',
        guide: '剧情自动获得。完成主线任务“在极限边缘”后解锁。',
        tags: ['剧情']
      },
      {
        id: 'bronze-5',
        title: 'Attended the Embassy (参加大使会议)',
        type: 'bronze',
        description: 'Survived the ambush at the Embassy. (在大使会议的伏击中生还。)',
        guide: '剧情自动获得。完成主线任务“大使会议”后解锁，获得滑翔伞。',
        tags: ['剧情']
      },
      {
        id: 'bronze-6',
        title: 'Established the Base (建立基地)',
        type: 'bronze',
        description: 'Secured a base of operations and rebooted GAIA. (确保行动基地并重启盖亚。)',
        guide: '剧情自动获得。完成主线任务“垂危的土地”和“地球之眼”后解锁。',
        tags: ['剧情']
      },
      {
        id: 'bronze-7',
        title: 'Recovered AETHER (回收以太)',
        type: 'bronze',
        description: 'Defended the Kulrut and recovered AETHER. (守卫库尔鲁特并回收以太。)',
        guide: '剧情自动获得。完成主线任务“库尔鲁特”后解锁。',
        tags: ['剧情']
      },
      {
        id: 'bronze-8',
        title: 'Recovered POSEIDON (回收波塞冬)',
        type: 'bronze',
        description: 'Drained Las Vegas and recovered POSEIDON. (排干拉斯维加斯的水并回收波塞冬。)',
        guide: '剧情自动获得。完成主线任务“沙海”后解锁，获得潜水面具。',
        tags: ['剧情']
      },
      {
        id: 'bronze-9',
        title: 'Recovered DEMETER (回收德墨忒尔)',
        type: 'bronze',
        description: 'Encountered the Quen and recovered DEMETER. (遭遇昆恩族并回收德墨忒尔。)',
        guide: '剧情自动获得。完成主线任务“法罗的坟墓”前置任务“过去的种子”后解锁。',
        tags: ['剧情']
      },
      {
        id: 'bronze-10',
        title: 'Recovered Beta (救回贝塔)',
        type: 'bronze',
        description: 'Brought Beta back to the Base. (将贝塔带回基地。)',
        guide: '剧情自动获得。完成主线任务“克雷达斯”后解锁。',
        tags: ['剧情']
      },
      {
        id: 'bronze-11',
        title: 'Discovered Faro\'s Fate (揭露法罗的命运)',
        type: 'bronze',
        description: 'Survived Thebes and befriended the Quen. (在底比斯生还并与昆恩族结盟。)',
        guide: '剧情自动获得。完成主线任务“法罗的坟墓”后解锁。',
        tags: ['剧情']
      },
      {
        id: 'bronze-12',
        title: 'Flew on the Wings of the Ten (飞越十特之翼)',
        type: 'bronze',
        description: 'Flew into battle and vanquished Regalla. (飞入战场并击败雷加拉。)',
        guide: '剧情自动获得。完成主线任务“十特之翼”后解锁，解锁飞行坐骑日翼者。',
        tags: ['剧情']
      },
      {
        id: 'bronze-13',
        title: 'Chose a Desert Commander (选择沙漠指挥官)',
        type: 'bronze',
        description: 'Aided Drakka and Yarra and chose the better candidate. (帮助德拉卡和雅拉，并选出更好的候选人。)',
        guide: '完成支线任务线：【渴望狩猎】 -> 【干旱的渴望】 -> 【败战关口】。无论选择谁都不影响奖杯。',
        tags: ['支线']
      },
      {
        id: 'bronze-14',
        title: 'Saved the Daunt (拯救丹特)',
        type: 'bronze',
        description: 'Resolved all of the problems troubling the Daunt. (解决了困扰丹特的所有问题。)',
        guide: '完成丹特区域的4个特定支线任务：【暮光之路】、【暗影从西边来】、【刚背兽】（主线附带）、【 Bristlebacks (刚背兽)后续】。',
        tags: ['支线']
      },
      {
        id: 'bronze-15',
        title: 'Aided Kotallo (协助科塔尔罗)',
        type: 'bronze',
        description: 'Helped Kotallo build and test a mechanic arm. (帮助科塔尔罗制造并测试机械手臂。)',
        guide: '完成科塔尔罗的个人支线任务【失而复得】。需在主线解锁“天空及其以此”后，在基地与他对话触发。',
        tags: ['支线', '同伴']
      },
      {
        id: 'bronze-16',
        title: 'Healed the Land-gods (治愈土地神)',
        type: 'bronze',
        description: 'Helped Zo reboot the land-gods to save Plainsong. (帮助佐重启土地神以拯救素歌之域。)',
        guide: '完成佐的个人支线任务【第二节诗】。需在主线推进到后期，在基地与佐对话触发。',
        tags: ['支线', '同伴']
      },
      {
        id: 'bronze-17',
        title: 'Recovered Alva\'s Data (取回阿尔瓦的数据)',
        type: 'bronze',
        description: 'Helped Alva retrieve data to help the Quen. (帮助阿尔瓦取回数据以协助昆恩族。)',
        guide: '完成阿尔瓦的个人支线任务【禁忌的先祖智慧】。需在主线后期在基地与阿尔瓦对话触发。',
        tags: ['支线', '同伴']
      },
      {
        id: 'bronze-18',
        title: 'First Tallneck Overridden (抢修首个长颈兽)',
        type: 'bronze',
        description: 'Reached the top of a Tallneck and accessed its information. (爬上长颈兽的头顶并获取其中的信息。)',
        guide: '在地图上找到任意一只长颈兽（如丹特地区的朱砂沙地长颈兽），寻找高处跳跃点爬到其头顶圆盘处，按三角形键进行超控即可解锁。',
        tags: ['探索']
      },
      {
        id: 'bronze-19',
        title: 'First Rebel Camp Completed (完成第一个叛军营地)',
        type: 'bronze',
        description: 'Completed key objectives in 1 Rebel Camp. (完成了1个叛军营地的主要目标。)',
        guide: '清理任意一个叛军营地（Rebel Camp），击杀首领并搜索线索。',
        tags: ['战斗', '探索']
      },
      {
        id: 'bronze-20',
        title: 'First Core Overridden (抢修首个核心)',
        type: 'bronze',
        description: 'Reached the Core of a Cauldron and accessed its information. (到达大坩埚的核心并获取其中的信息。)',
        guide: '完成任意一个大坩埚（Cauldron）的挑战并超控核心。通常主线剧情中会经过维修湾陶（TAU），或者可以去最早的大坩埚缪（MU）。',
        tags: ['探索']
      },
      {
        id: 'bronze-21',
        title: 'Obtained 3 Stripes at a Hunting Ground (在一个狩猎场获得3个勋带)',
        type: 'bronze',
        description: 'Earned at least a Quarter Stripe in all three trials at one Hunting Ground. (在一个狩猎场的所有三个考验中至少获得四分一勋带。)',
        guide: '在一个狩猎场完成全部3个挑战，只要获得最低级的铜牌（四分一勋带）即可。',
        tags: ['挑战']
      },
      {
        id: 'bronze-22',
        title: 'All Acquisition Machines Killed (干掉所有采集型机器)',
        type: 'bronze',
        description: 'Killed at least one of every type of Acquisition Machine. (干掉所有类型的采集型机器至少各一只。)',
        guide: '击杀以下18种采集机器各一只：食草者、淘宝者、好斗者、剑嘴兽、犁角兽、冲锋兽、长角兽、刚背兽、牙角兽、宽颌兽、滑翔者、猛咬者、日翼者、攀爬兽、碎石者、碎波者、霜爪兽、火爪兽。',
        tags: ['战斗', '收集']
      },
      {
        id: 'bronze-23',
        title: 'All Recon Machines Killed (干掉所有侦察型机器)',
        type: 'bronze',
        description: 'Killed at least one of every type of Recon Machine. (干掉所有类型的侦察型机器至少各一只。)',
        guide: '击杀以下4种可击杀的侦察机器各一只：挖穴兽、斯凯放荡者、长腿兽、红眼观察者。（注：长颈兽属于侦察型但无法击杀，只需超控即可，不计入此杀敌奖杯）。',
        tags: ['战斗', '收集']
      },
      {
        id: 'bronze-24',
        title: 'All Combat Machines Killed (击杀所有战斗机器)',
        type: 'bronze',
        description: 'Killed at least one of every type of Combat Machine. (击杀每一类战斗机器至少一只。)',
        guide: '战斗机器包括：爪步者、腐蚀者、恐翼兽、剑背兽、追踪者、日翼者等。如果不确定缺哪个，可以在笔记本的数据页查看统计。',
        tags: ['战斗', '收集']
      },
      {
        id: 'bronze-25',
        title: 'All Transport Machines Killed (击杀所有运输机器)',
        type: 'bronze',
        description: 'Killed at least one of every type of Transport Machine. (击杀每一类运输机器至少一只。)',
        guide: '运输机器包括：跃鞭兽、风暴鸟、壳行者、巨怪兽、滚背兽等。',
        tags: ['战斗', '收集']
      },
      {
        id: 'bronze-26',
        title: 'Rode All Regular Mounts (骑乘所有常规坐骑)',
        type: 'bronze',
        description: 'Rode a Charger, Bristleback, and Clawstrider. (骑乘冲锋兽、刚背兽和爪步者。)',
        guide: '需要先在对应的炼油厂解锁超控权限，然后潜行接近超控并骑乘。这三种是基础地面坐骑。',
        tags: ['游戏机制']
      },
      {
        id: 'bronze-27',
        title: 'Completed a Long Glide (完成一次长距离滑翔)',
        type: 'bronze',
        description: 'Glided uninterrupted for 60 seconds. (不间断滑翔60秒。)',
        guide: '推荐在地图最西边的高山或者乘坐飞行坐骑飞到极高处，跳下打开盾翼滑翔60秒。',
        tags: ['游戏机制']
      },
      {
        id: 'bronze-28',
        title: 'Completed 2 Flying Mount Quests (完成2个飞行坐骑任务)',
        type: 'bronze',
        description: 'Completed 2 quests that require a flying mount. (完成2个需要飞行坐骑的任务。)',
        guide: '获得日翼者后，地图上会解锁特定的支线/跑腿任务（如“闪亮榜样”、“飞行第一人”等），完成两个。',
        tags: ['支线']
      },
      {
        id: 'bronze-29',
        title: 'Won 2 Gauntlet Runs (赢得2场骑乘赛)',
        type: 'bronze',
        description: 'Won first place in 2 different Gauntlet Runs. (在2场不同的骑乘赛中获得第一名。)',
        guide: '完成地图上的机器赛车小游戏。只需赢两场。',
        tags: ['小游戏']
      },
      {
        id: 'bronze-30',
        title: 'Completed a Set of Salvage Contracts (完成一组回收契约)',
        type: 'bronze',
        description: 'Completed all contracts at a Salvage Contractor. (在一个回收承包商处完成所有契约。)',
        guide: '地图有几个回收商营地（如贫瘠之光外）。完成该营地发布的所有4-5个小任务。',
        tags: ['支线']
      },
      {
        id: 'bronze-31',
        title: 'Completed 4 Rebel Outposts (完成4个叛军前哨)',
        type: 'bronze',
        description: 'Defeated the outpost leader and recovered the tags from 4 Rebel Outposts. (击败4个叛军前哨的首领并取回兵籍牌。)',
        guide: '地图上有很多叛军前哨（Rebel Outposts），只需清理其中任意4个。重点是击杀前哨的首领并从其尸体上搜刮“兵籍牌”才算完成。',
        tags: ['战斗', '探索']
      },
      {
        id: 'bronze-32',
        title: 'Completed 3 Relic Ruins (完成3个遗迹遗址)',
        type: 'bronze',
        description: 'Discovered and completed 3 Relic Ruins. (发现并完成3个遗迹遗址。)',
        guide: '解谜收集遗迹中的装饰品。地图共有8-9个，只需完成其中任意3个。推荐丹特那个作为入门。',
        tags: ['解谜', '探索']
      },
      {
        id: 'bronze-33',
        title: 'Completed Arena Challenge Set (完成竞技场挑战组)',
        type: 'bronze',
        description: 'Completed 1 Arena challenge set. (完成了1组竞技场挑战。)',
        guide: '在主线任务“库尔鲁特”后解锁竞技场。完成“业余”级别的全部挑战即可。',
        tags: ['战斗', '竞技场']
      },
      {
        id: 'bronze-34',
        title: 'Defeated Machine Strike Challengers (击败机器斗棋挑战者)',
        type: 'bronze',
        description: 'Won a match against 2 different Machine Strike challengers. (在机器斗棋中战胜2位不同的挑战者。)',
        guide: '在定居点（如削链镇、贫瘠之光）找到机器斗棋（Machine Strike）小游戏，分别战胜2位不同的NPC棋手。建议挑战初级难度的棋手即可轻松获胜。',
        tags: ['小游戏']
      },
      {
        id: 'bronze-35',
        title: 'Obtained All Weapon Classes (获得所有武器类别)',
        type: 'bronze',
        description: 'Obtained 1 weapon of every class. (获得所有类别的武器各一件。)',
        guide: '游戏中共有9种武器类别，每种至少获得一把：猎手弓、战弓、神射弓、爆破弹弓、绊索枪、绳索枪、粉碎护手、射钉枪、拉栓发射器。',
        tags: ['收集']
      },
      {
        id: 'bronze-36',
        title: 'Used all Elemental States (使用所有元素状态)',
        type: 'bronze',
        description: 'Inflicted every elemental state on an enemy at least once. (对敌人施加每一种元素状态至少一次。)',
        guide: '元素包括：火焰、冰霜、电击、净水、酸蚀、等离子。将敌人对应的状态槽打满直到触发效果即可。',
        tags: ['战斗']
      },
      {
        id: 'bronze-37',
        title: 'Performed 3 Melee Combos (执行3个近战连击)',
        type: 'bronze',
        description: 'Successfully performed 3 different unlockable melee combos. (成功执行3个不同的已解锁近战连击。)',
        guide: '在技能树解锁近战技能（如R1+R1+R2），然后在战斗中完整打出3种不同的连招。',
        tags: ['战斗']
      },
      {
        id: 'bronze-38',
        title: 'Stealth Killed 10 Machines (潜行击杀10台机器)',
        type: 'bronze',
        description: 'Performed a stealth kill on 10 machines. (对10台机器执行潜行击杀。)',
        guide: '躲在红草中，等待提示出现按R1击杀小型机器（如挖穴兽）。',
        tags: ['战斗']
      },
      {
        id: 'bronze-39',
        title: 'Tore off 100 Components (拆卸100个部件)',
        type: 'bronze',
        description: 'Detached 100 components from machines. (从机器上拆卸100个部件。)',
        guide: '使用撕裂伤害高的弓箭（如猎手弓），瞄准机器的黄色部件攻击。自然流程基本必得。',
        tags: ['战斗']
      },
      {
        id: 'bronze-40',
        title: 'Picked up 5 Heavy Weapons (拾取5把重型武器)',
        type: 'bronze',
        description: 'Picked up 5 different heavy weapons. (拾取5种不同的重型武器。)',
        guide: '从大型机器（如震颤獠牙、雷霆牙）身上打掉重武器，然后按三角键拾取。需要5种不同类型的。',
        tags: ['战斗']
      },
      {
        id: 'bronze-41',
        title: 'Override 10 Types of Machines (超控10种类型的机器)',
        type: 'bronze',
        description: 'Unlocked and used the overrides for 10 different types of machines. (解锁并使用10种不同类型机器的超控。)',
        guide: '通过完成炼油厂解锁更多超控权限。然后在野外潜行超控10种不同的机器。',
        tags: ['游戏机制']
      },
      {
        id: 'bronze-42',
        title: 'Defeated the Enduring (打败持久者)',
        type: 'bronze',
        description: 'Defeated the Tenakth melee master known as the Enduring. (打败被称为“持久者”的特纳克近战大师。)',
        guide: '完成所有近战格斗场（Melee Pit）挑战后，会获得线索去挑战“持久者”。这是近战的最终BOSS战。',
        tags: ['战斗', '支线']
      },
      {
        id: 'bronze-43',
        title: 'Fully Upgraded a Valor Surge (完全升级勇气激增)',
        type: 'bronze',
        description: 'Upgraded a Valor Surge to its maximum level. (将一种勇气激增升级至最高级。)',
        guide: '在技能树中，选择那个大圆圈图标的技能（勇气激增），投入技能点升到3级满级。',
        tags: ['成长']
      },
      {
        id: 'bronze-44',
        title: 'Upgraded 3 Weapons (升级3把武器)',
        type: 'bronze',
        description: 'Fully upgraded 3 weapons. (完全升级3把武器。)',
        guide: '建议升级绿装（普通品质），因为只需要很少的材料就能升满。',
        tags: ['制作']
      },
      {
        id: 'bronze-45',
        title: 'Upgraded 3 Outfits (升级3件装束)',
        type: 'bronze',
        description: 'Fully upgraded 3 different outfits. (完全升级3件不同的装束。)',
        guide: '同样建议升级绿装（普通品质）的防具，材料好找。',
        tags: ['制作']
      },
      {
        id: 'bronze-46',
        title: 'Upgraded Every Pouch Type (升级所有袋子类型)',
        type: 'bronze',
        description: 'Upgraded the Food Pouch, Potion Pouch, Resource Pouch, Trap Pouch, and any ammo pouch at least once. (升级食物袋、药剂袋、资源袋、陷阱袋以及任意弹药袋至少一次。)',
        guide: '在工作台进行升级。需要收集各种动物素材（如野猪皮、松鸦羽毛等）。',
        tags: ['制作']
      },
      {
        id: 'bronze-47',
        title: 'Enhanced Weapon with Coils (使用线圈强化武器)',
        type: 'bronze',
        description: 'Equipped a weapon of any tier with 2 coils. (为任意阶级的武器装备2个线圈。)',
        guide: '需要一把稀有（蓝色）或更高品质的武器，因为绿色武器通常只有1个孔位。在菜单中选择武器并安装2个线圈即可。',
        tags: ['制作']
      },
      {
        id: 'bronze-48',
        title: 'Unlocked 3 Weapon Techniques (解锁3个武器技巧)',
        type: 'bronze',
        description: 'Unlocked a Weapon Technique for 3 different weapon classes. (为3种不同的武器类别解锁武器技巧。)',
        guide: '技能树中那些小菱形的技能点是武器技巧。分别点亮猎手弓、战弓、爆破弹弓等不同武器的技巧。',
        tags: ['成长']
      },
      {
        id: 'bronze-49',
        title: 'Recovered 5 Different Collectables (回收5种不同的收集品)',
        type: 'bronze',
        description: 'Completed 1 Survey Drone, 1 Black Box, 1 Relic Ruin, 1 Vista Point, and 1 Signal Tower. (完成1个勘测无人机、1个黑匣子、1个遗迹遗址、1个观景点和1个信号塔。)',
        guide: '这是一个综合收集奖杯。只需每种类型做一个。信号塔在丹特就有，黑匣子在坠机点。',
        tags: ['收集']
      },
      {
        id: 'bronze-50',
        title: 'Used Dye Flowers (使用染料花)',
        type: 'bronze',
        description: 'Used dye flowers to unlock and apply a new dye. (使用染料花解锁并应用一种新染料。)',
        guide: '在山上采集花朵，去聚居地的“染料师”那里给衣服换个颜色。',
        tags: ['自定义']
      }
    ]
  }
];

export default function HorizonForbiddenWestTrophyList() {
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
    platinum: { label: '非常珍贵', percent: '5.2%' },
    gold: { label: '珍贵', percent: '12.5%' },
    silver: { label: '稀有', percent: '20.8%' },
    bronze: { label: '一般', percent: '48.6%' }
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
            <h1 className="ps5-game-title">Horizon Forbidden West</h1>
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

      <div className="ps5-footer">
      </div>
    </div>
  );
}
