export const re9GuideData = [
  {
    id: 'intro',
    title: '基础操作与生存技巧',
    sections: [
      {
        title: '前言与概览',
        content: [
          { type: 'text', text: '欢迎来到《生化危机 9：安魂曲》(Resident Evil 9: Requiem) 全成就/白金攻略。本攻略将带领你深入未知的恐惧，揭开最后的谜团。' },
          { type: 'text', text: '预计白金时间：25-35小时。包含50个奖杯。' },
          { type: 'text', text: '本作回归了系列经典的资源管理与解谜探索，同时引入了半开放世界的探索机制。建议首周目体验剧情，二周目利用无限弹药完成高难度挑战。' }
        ]
      },
      {
        title: '通用技巧 (General Tips)',
        content: [
          { type: 'collectible', name: '资源管理', description: '弹药和回复药非常有限。学会“合成”是生存的关键。别忘了收集火药和药草。' },
          { type: 'collectible', name: '地图探索', description: '未探索或有遗留物品的区域在地图上会显示为红色，完全探索后变为蓝色。养成把地图“变蓝”的好习惯。' },
          { type: 'collectible', name: '安全屋', description: '安全屋（Safe Room）是绝对安全的避风港。这里有打字机（存档点）和异次元储物箱。' },
          { type: 'collectible', name: '弱点攻击', description: '大多数敌人都有弱点（通常是头部或发光的脓包）。精准射击弱点不仅能节省弹药，还能造成更大的硬直。' }
        ]
      },
      {
        title: '全收集统计',
        content: [
          { type: 'text', name: '总计 100+ 个收集品', description: '• 20个 黑白浣熊先生 (Mr. Raccoons)\n• 60+ 文件 (Files)\n• 15个 武器 (Weapons)\n• 10个 扩容背包 (Hip Pouches)\n• 8个 撬锁箱 (Lockpicks)\n• 4个 保险箱 (Safes)' }
        ]
      }
    ]
  },
  {
    id: 'chapter-1',
    title: '第一章：鹪木市爆发 (Wrenwood Outbreak)',
    sections: [
      {
        title: '序章 - 调查犯罪现场',
        stats: { files: 2 },
        content: [
          { type: 'text', text: '开场动画后，你将行走在城市街道上。这里有两个收集品可供获取。', summary: '游戏开始进入市区' },
          { type: 'collectible', name: '文件 1/60 (Investigation Report)', description: '游戏开始时自动在库存中。按下触摸板 > 物品 > 调查报告 > 放大并旋转，直到可以互动那张露出来的照片，阅读文件。', summary: '查看调查报告' },
          { type: 'collectible', name: '文件 2/60 (Wrenwood City Guide)', description: '在街道右侧检查城市地图。', summary: '检查城市地图' },
          { type: 'text', text: '继续走过地图，直到触发剧情进入巷子。沿着巷子穿过建筑物。', summary: '进入巷子穿过建筑' }
        ]
      },
      {
        title: '序章 - 前往204号房',
        stats: { keyItems: 2, files: 3 },
        content: [
          { type: 'collectible', name: '关键道具 (Old Key)', description: '休息室与酒吧：穿过厨房后的黑暗区域（使用手电筒）。在下一个非常暗的房间里，检查贴在吧台上的照片并查看背面。这是第一个可以使用地图（触摸板）的区域。', summary: '检查照片获取旧钥匙' },
          { type: 'text', text: '使用旧钥匙打开吧台右侧的门。', summary: '使用旧钥匙开门' },
          { type: 'collectible', name: '文件 3/60 (Hotel Pamphlet)', description: '大堂：用旧钥匙开门后，前方有楼梯的房间。检查地上的纸张。', summary: '大堂检查纸张' },
          { type: 'collectible', name: '文件 4/60 (Notice of Closure)', description: '办公室：在同一区域前往接待台后面，沿路进入后屋并打开蓝色抽屉。', summary: '办公室抽屉获取文件' },
          { type: 'collectible', name: '地图 (Wrenwood Hotel Map)', description: '办公室：同一房间的墙上。', summary: '获取酒店地图' },
          { type: 'text', text: '搜刮完一楼后，上二楼。', summary: '前往二楼' },
          { type: 'collectible', name: '关键道具 (Wire Cutters)', description: '二楼娱乐室：台球桌上。', summary: '台球桌获取剪线钳' },
          { type: 'text', text: '前往房间另一侧，使用剪线钳剪断门上的铁丝。沿走廊走到尽头的房间，互动床上的照片。看向右上方，观察床中间的照片以推进剧情。', summary: '剪断铁丝推进剧情' }
        ]
      },
      {
        title: '序章 - 回忆与逃生',
        stats: { files: 1, keyItems: 1 },
        content: [
          { type: 'text', text: '进入回忆片段。跟随 Alyssa 下楼，结束后返回现实。', summary: '经历回忆片段' },
          { type: 'text', text: '回到楼下移动行李车，然后互动刚才回忆中看到的画作。', summary: '移动行李车互动画作' },
          { type: 'collectible', name: '文件 5/60 (Alyssa’s Journal)', description: '剧情流程自动获得，互动楼下的画作后。', summary: '自动获得艾莉莎日记' },
          { type: 'text', text: '随后会被警官袭击。按住 X 并左右移动以躲避射击。', summary: '躲避警官射击' },
          { type: 'collectible', name: '关键道具 (Emergency Exit Key)', description: '剧情流程自动获得，紧接上一文件。', summary: '自动获得出口钥匙' },
          { type: 'text', text: '拿到钥匙后自动拾取火钳，连按 R2 进行反击。之后跑回二楼，与右侧的门互动使用紧急出口钥匙完成本节。', summary: '反击并逃离酒店' }
        ]
      },
      {
        title: '鹪木市 - 里昂篇 (Wrenwood - Leon)',
        stats: { files: 1 },
        content: [
          { type: 'text', text: '剧情切换至里昂视角。', summary: '切换至里昂视角' },
          { type: 'collectible', name: '文件 6/60 (Report on Victor Gideon)', description: '剧情流程自动获得，过场动画期间。', summary: '自动获得维克托报告' },
          { type: 'text', text: '跟随路径前进，系统会提示战斗教学。沿着街道走，在人群奔跑处向右转。一路清理敌人直到触发本节结束的过场动画。', summary: '完成战斗教学' }
        ]
      }
    ]
  },
  {
    id: 'chapter-2',
    title: '第二章：罗兹山护理中心 (Rhodes Hill – Care Center)',
    sections: [
      {
        title: '初始区域 (Room 203) 与 开灯',
        stats: { files: 1 },
        content: [
          { type: 'text', text: '本章节主要操作角色为格蕾丝 (Grace)，目标是逃离。', summary: '开始格蕾丝章节' },
          { type: 'collectible', name: '文件 7/60 (Progress Notes)', description: 'Room 203: 恢复控制后，在起始房间的小桌子上。', summary: 'Room 203获取文件' },
          { type: 'text', text: '离开房间右转，在红灯处与墙上的开关互动开启远处走廊的灯。本区域无法进入无光照的房间。', summary: '开启走廊灯光' }
        ]
      },
      {
        title: '获取钥匙与安全屋 (Room 201)',
        stats: { keyItems: 3 },
        content: [
          { type: 'collectible', name: '关键道具 (Cherub Key)', description: '在锁住的门（旁边有保险丝盒）旁的抽屉里。用于打开 Room 201。', summary: '抽屉获取小天使钥匙' },
          { type: 'text', text: '使用 Cherub Key 打开 Room 201，这是本区域的安全屋。', summary: '开启安全屋Room 201' },
          { type: 'collectible', name: '关键道具 (Lighter)', description: 'Room 201: 绿色保险丝盒旁边。', summary: '获取打火机' },
          { type: 'collectible', name: '关键道具 (Empty Bottle)', description: 'Room 201: 与柜子互动获取。⚠️ 警告：务必保留至少一个空瓶子用于后续奖杯，不要全部用完。', summary: '获取关键道具空瓶' }
        ]
      },
      {
        title: '探索 Room 202',
        stats: { files: 1 },
        content: [
          { type: 'text', text: '获得打火机后进入 Room 202。', summary: '使用打火机进202' },
          { type: 'collectible', name: '文件 8/60 (Note on Cardboard Box)', description: 'Room 202: 左后方角落的衣柜里。', summary: '衣柜获取文件' }
        ]
      },
      {
        title: '护士站 (Nurses’ Station) - 收集与逃脱',
        stats: { coins: 1, keyItems: 1 },
        content: [
          { type: 'text', text: '前往东南角的护士站。第一次遭遇怪物时，立即跑回有灯光的起始房间 (Room 203) 避难。', summary: '护士站遭遇怪物' },
          { type: 'text', text: '怪物消失后返回护士站。⚠️ 注意：先不要推车！', summary: '返回护士站搜刮' },
          { type: 'collectible', name: '古董硬币 1 (Antique Coin)', description: '护士站: 爬上左侧的推车，在储物柜顶部。必须在移动推车前获取！', summary: '推车顶部获取硬币' },
          { type: 'text', text: '拿到硬币后将推车移到右侧。', summary: '向右移动推车' },
          { type: 'collectible', name: '关键道具 (Screwdriver)', description: '护士站: 爬上推车后，在架子上的工具箱里。', summary: '工具箱获取螺丝刀' },
          { type: 'text', text: '拿到螺丝刀后，钻进杂物堆下躲避怪物。待怪物移至左侧后，蹲伏从侧门离开。', summary: '钻过杂物堆逃脱' }
        ]
      },
      {
        title: '最终撤离 (格蕾丝)',
        stats: { keyItems: 1 },
        content: [
           { type: 'text', text: '怪物会破门追击，再次跑回 Room 203 避难。', summary: '怪物追击返回避难' },
           { type: 'text', text: '从东南门回护士站，向走廊东侧投掷空瓶子引开怪物，跑回 Room 201。', summary: '投掷瓶子引开怪物' },
           { type: 'collectible', name: '关键道具 (Fuse)', description: 'Room 201: 使用螺丝刀打开保险丝盒获取。', summary: '保险丝盒获取保险丝' },
           { type: 'text', text: '拿到保险丝后立即跑向走廊尽头锁住的门，放入保险丝结束本章节。', summary: '放入保险丝完成章节' }
        ]
      },
      {
        title: '里昂篇 - 护理中心调查',
        stats: { raccoons: 1 },
        content: [
          { type: 'text', text: '视角切换至里昂。跟随医生直到触发过场动画，进入战斗。', summary: '切换至里昂开启战斗' },
          { type: 'text', text: '⚠️ **战斗提示**：首个敌人手持电锯。按 L1 可以招架，但建议保持距离。击败后可以拾取电锯，但要小心地面旋转的刀片。其他敌人也会试图抢夺电锯。', summary: '应对电锯敌人' },
          { type: 'text', text: '清理敌人后，在侧室搜刮补给。拿起电锯，与门互动锯开通过。', summary: '使用电锯破门' },
          { type: 'collectible', name: '浣熊先生 1/25', description: '锯开门后，穿过下一扇门，就在前方的壁炉上。', summary: '壁炉上获取浣熊' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 逃离护理中心',
        stats: { files: 2, coins: 1, keyItems: 1 },
        content: [
          { type: 'text', text: '视角切回格蕾丝。现在持有里昂的左轮手枪 (Requiem)，但只有一发子弹。⚠️ 慎用子弹！', summary: '格蕾丝获得左轮' },
          { type: 'collectible', name: '古董硬币 2 (Antique Coin)', description: '警卫室 (Guard Office): 从起始位置下楼进入安全屋，在桌子上。', summary: '警卫室桌上获取硬币' },
          { type: 'collectible', name: '文件 9/60 (Care Center Pamphlet)', description: '警卫室: 安全屋内的茶几上。', summary: '警卫室茶几获取文件' },
          { type: 'collectible', name: '文件 10/60 (Whiteboard Scrawl)', description: '警卫室: 离开前的墙上白板。', summary: '警卫室白板获取文件' },
          { type: 'collectible', name: '🏆 奖杯 (Out of Sight, Out of Mind)', description: '警卫室: 与箱子互动并放入任意物品即可解锁。', summary: '互动箱子解锁奖杯' },
          { type: 'collectible', name: '关键道具 (West Wing Keycard)', description: '警卫室: 穿过红灯门自动获得。在中央大厅使用以进入西翼。', summary: '获取西翼房卡' },
          { type: 'text', text: '进入西翼厨房遭遇“厨师”(The Chef)。避开他，等待他移动后穿过厨房。', summary: '避开厨师穿过厨房' },
          { type: 'text', text: '继续向右，处理或避开玩弄开关的丧尸，解锁右侧门打通捷径。准备好后进入餐厅 (Dining Room)。', summary: '进入餐厅开启捷径' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 探索与武装',
        stats: { weapons: 3, coins: 1 },
        content: [
          { type: 'collectible', name: '武器 (B934)', description: '餐厅 (Dining Room): 穿过厨房后，在餐厅的地板上。', summary: '餐厅地板获取武器' },
          { type: 'collectible', name: '🏆 奖杯道具 (Empty Bottle)', description: '餐厅: 桌子后方左侧架子上。⚠️ 警告：这是解锁奖杯“Internal Dispute”的关键道具，千万不要扔掉或用掉！建议放入储物箱。', summary: '获取奖杯关键道具' },
          { type: 'text', text: '穿过餐厅进入左侧的档案室 (Filing Room)，搜刮所有物品并留意跟随的丧尸。', summary: '进入档案室搜刮' },
          { type: 'collectible', name: '武器 (Makeshift Knife)', description: '档案室: 房间内的储物柜里。', summary: '储物柜获取简易小刀' },
          { type: 'collectible', name: '武器 (Hunting Knife)', description: '由餐厅和档案室附近的其中一个手持小刀的敌人掉落。', summary: '击败敌人获取猎刀' },
          { type: 'text', text: '💡 **机制提示**：格蕾丝使用的小刀有耐久度限制且无法修复。被抓住时可用于挣脱，但会插在敌人身上，若不回收或敌人不消失则无法取回。', summary: '小刀耐久度机制提示' },
          { type: 'collectible', name: '古董硬币 3 (Antique Coin)', description: '档案室北侧的走廊内。', summary: '档案室走廊获取硬币' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 酒吧与休息室',
        stats: { coins: 5, weapons: 1, safes: 1 },
        content: [
          { type: 'collectible', name: '地图 (West Wing Map)', description: '走上第一段楼梯后的墙上。', summary: '墙上获取西翼地图' },
          { type: 'text', text: '前进至酒吧与休息室 (Bar & Lounge)。这里有三个丧尸，其中一个是“歌唱丧尸”。', summary: '进入酒吧遭遇丧尸' },
          { type: 'text', text: '⚠️ **敌人提示**：歌唱丧尸会释放远程范围攻击使你眩晕，且血量较厚，建议优先处理或集中火力。', summary: '优先处理歌唱丧尸' },
          { type: 'collectible', name: '古董硬币 4 (Antique Coin)', description: '酒吧: 钢琴上面。', summary: '钢琴上获取硬币' },
          { type: 'collectible', name: '古董硬币 5 (Antique Coin)', description: '酒吧: 击败穿着白裙的歌唱丧尸后掉落。', summary: '击败歌唱丧尸获硬币' },
          { type: 'collectible', name: '保险箱 #1 (Bar & Lounge Safe)', description: '酒吧: 吧台后方。包含 **3枚古董硬币 (#6-#8)**。\n密码（普通难度）：左10 - 右80 - 左30\n密码（疯狂难度）：右20 - 左50 - 右30', summary: '吧台后开启保险箱' },
          { type: 'collectible', name: '武器 (S&S M232 手枪)', description: '酒吧: 吧台上面。比之前的武器更强，建议立即更换。', summary: '吧台获取强力手枪' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 主席办公室',
        stats: { files: 4, keyItems: 1 },
        content: [
          { type: 'collectible', name: '文件 11/60 (Folded Note)', description: '画廊 (Gallery): 穿过酒吧后的走廊左转，检查墙上挂着的白色外套。', summary: '外套内获取文件' },
          { type: 'collectible', name: '红宝石 (Red Jewel / Unicorn Trinket Box)', description: '主席办公室 (Chairman’s Office): 房间左侧角落（黑暗处）。疯狂难度下位置会移至后方丧尸附近。', summary: '角落获取红宝石' },
          { type: 'collectible', name: '文件 12/60 (Copy of an Email to a Manager)', description: '主席办公室: 橱柜上面。', summary: '橱柜上获取文件' },
          { type: 'collectible', name: '文件 13/60 (Note to a Chairman)', description: '主席办公室: 后屋垃圾桶内（有一个丧尸看守）。', summary: '垃圾桶内获取文件' },
          { type: 'collectible', name: '关键道具 (Pencil)', description: '主席办公室: 后屋桌子上。', summary: '后屋桌上获取铅笔' },
          { type: 'collectible', name: '文件 14/60 (Chairman’s Note)', description: '主席办公室: 在桌子上使用 **Pencil** 涂抹信件后获得。⚠️ 注意：即使不涂抹也能开盒子，但为了全文件收集请务必先涂抹。', summary: '涂抹信件获取文件' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 石英谜题与客厅 (Parlor)',
        stats: { keyItems: 2, coins: 3, upgrades: 4 },
        content: [
          { type: 'collectible', name: '关键道具 (Moon Quartz)', description: '主席办公室: 完成谜题保险箱后获得。用于中央大厅的石英门。\n谜题解法：Moon – Sun – Star – Moon', summary: '获取月亮石英' },
          { type: 'text', text: '目标：收集三个石英开启中央大厅的门。建议拿到后存入仓库或直接放入门中。', summary: '收集三个石英' },
          { type: 'text', text: '穿过西翼下楼返回客厅 (Parlor)，将 Red Jewel 嵌入客厅的门。', summary: '返回客厅嵌入红宝石' },
          { type: 'collectible', name: '古董硬币 9 (Antique Coin)', description: '客厅 (Parlor): 轮盘赌桌上。', summary: '轮盘赌桌获取硬币' },
          { type: 'collectible', name: '古董硬币 10 (Antique Coin)', description: '客厅: 吧台柜台上。', summary: '吧台获取硬币' },
          { type: 'collectible', name: '古董硬币 11 (Antique Coin)', description: '客厅: 吧台后方，打破瓷器容器获得。', summary: '打破容器获取硬币' },
          { type: 'collectible', name: '关键道具 (East Wing Keycard)', description: '客厅: 检查左后方角落的断臂获得。', summary: '获取东翼房卡' },
          { type: 'collectible', name: '升级道具 x4 (Upgrades)', description: '客厅: 4个储物柜，共需 17 枚古董硬币。\n• Hip Pouch (扩容背包) - 推荐优先购买\n• Stabilizer (稳定剂)\n• Steroids (类固醇)\n• Override Manual (超频手册)\n(疯狂难度下道具会有所变化)', summary: '购买升级道具' }
        ]
      },
      {
        title: 'BOSS战：厨师 (The Chef)',
        stats: { keyItems: 1, trophies: 1 },
        content: [
          { type: 'text', text: '前往厨房区域遭遇厨师 BOSS。', summary: '前往厨房遭遇厨师' },
          { type: 'collectible', name: '🏆 奖杯 (Order Up!)', description: '击败厨师即可解锁。', summary: '击败厨师解锁奖杯' },
          { type: 'text', text: '⚠️ **战斗策略**：\n1. 简单难度：1发 Requiem 爆头 + 4-5发普通手枪爆头即可。\n2. 拉怪技巧：将厨师引诱至通往中央大厅的走廊门口，他会停止追击并转身，利用这个机制安全输出。', summary: '战斗策略提示' },
          { type: 'collectible', name: '关键道具 (Pantry Key)', description: '击败厨师后获得。', summary: '击败厨师获取钥匙' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 储藏室与东翼 (East Wing)',
        stats: { raccoons: 1 },
        content: [
          { type: 'collectible', name: '挂件 (Stakeout Takeout Charm)', description: '储藏室 (Pantry): 使用 Pantry Key 打开厨房内的门。挂件在房间后方。', summary: '储藏室获取挂件' },
          { type: 'text', text: '清理完西翼后，返回中央大厅。', summary: '返回中央大厅' },
          { type: 'text', text: '1. 将 Moon Quartz 放入北门（清空背包）。\n2. 使用 East Wing Keycard 打开东翼大门。', summary: '开启东翼大门' },
          { type: 'collectible', name: '浣熊先生 2/25', description: '东翼大厅 (East Wing Lobby): 刷卡进入东翼后，就在前方的前台桌子上。', summary: '东翼大厅获取浣熊' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 检查室与血液实验室',
        stats: { trophies: 2, coins: 3, keyItems: 1 },
        content: [
          { type: 'collectible', name: '🏆 奖杯 (Fatal Dose)', description: '检查室 (Examination Room): 拾取桌上的 **Hemolytic Injector**。蹲伏潜行至左侧背对你的丧尸身后，按 R2 使用注射器处决即可解锁。', summary: '使用注射器处决' },
          { type: 'text', text: '⚠️ **资源提示**：注射器可以秒杀强敌，也可以阻止敌人变异。虽然系统提示用于处决倒地敌人，但建议保留以应对后续强敌。', summary: '保留注射器提示' },
          { type: 'collectible', name: '保险箱 #2 (Examination Room Safe)', description: '检查室: 角落的柜子里。包含 **3枚古董硬币 (#12-#14)**。\n密码（普通难度）：右30 - 左10 - 右50\n密码（疯狂难度）：左50 - 右30 - 左90', summary: '检查室开启保险箱' },
          { type: 'collectible', name: '关键道具 (Blood Collector)', description: '血液实验室 (Blood Lab): 穿过治疗室走廊尽头，在桌子上。', summary: '获取血液收集器' },
          { type: 'collectible', name: '文件 15/60 (Blood Compound Synthesis)', description: '血液实验室: 同一张桌子的另一侧。', summary: '获取合成配方文件' },
          { type: 'text', text: '互动桌上的紫色血液样本 (Red Blood Specimen)，在左侧分析仪上将其原子全部调为红色。解锁 Handgun Ammo 和 Hemolytic Injector 的制作配方。', summary: '分析样本解锁配方' },
          { type: 'collectible', name: '🏆 奖杯 (Science! & The Power of Blood)', description: '解锁配方获得 Science!。互动地上的血桶或尸体收集血液，制作手枪弹药获得 The Power of Blood。', summary: '制作弹药解锁奖杯' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 等候室与奖杯挑战',
        stats: { coins: 6, raccoons: 1, files: 5 },
        content: [
          { type: 'collectible', name: '🏆 奖杯挑战 (Internal Dispute)', description: '⚠️ **易错过/高难度**：让盲眼丧尸攻击女仆丧尸。\n1. **存档**：进入红灯走廊前务必手动存档。\n2. **诱导**：进入等候室 (Waiting Room)，打破右侧花瓶引诱两者。\n3. **执行**：当两者靠近时，向女仆丧尸投掷 **Empty Bottle**。盲眼丧尸会攻击她，奖杯解锁。\n失败请读档重试。', summary: '诱导丧尸互殴' },
          { type: 'collectible', name: '古董硬币 15 (Antique Coin)', description: '等候室: 进门前方的桌子上。', summary: '等候室桌上获取硬币' },
          { type: 'collectible', name: '文件 16/60 (Safe Replacements)', description: '等候室: 柜台后方打开的保险箱旁。', summary: '获取保险箱说明文件' },
          { type: 'collectible', name: '古董硬币 16-17 (Antique Coin x2)', description: '等候室: 打开的保险箱内。', summary: '保险箱内获取硬币' },
          { type: 'text', text: '穿过等候室另一侧门可开启捷径。', summary: '开启捷径' },
          { type: 'collectible', name: '浣熊先生 3/25', description: '走廊尽头（上楼前）。', summary: '走廊尽头获取浣熊' },
          { type: 'collectible', name: '古董硬币 18 (Antique Coin)', description: '浣熊先生旁边的小桌子上。', summary: '浣熊旁获取硬币' },
          { type: 'collectible', name: '古董硬币 19 (Antique Coin)', description: '浣熊先生旁边的白色花瓶里（需打破）。', summary: '打破花瓶获取硬币' },
          { type: 'collectible', name: '地图 (East Wing Map)', description: '上楼后的墙上。', summary: '获取东翼地图' },
          { type: 'collectible', name: '文件 17/60 (Lead Researcher’s Picture 2)', description: '首席研究员办公室 (二楼安全屋): 后屋橱柜上。', summary: '获取研究员照片2' },
          { type: 'collectible', name: '文件 18/60 (Lead Researcher’s Picture 1)', description: '首席研究员办公室: 桌子上。', summary: '获取研究员照片1' },
          { type: 'collectible', name: '文件 19/60 (Lead Researcher’s Picture 3)', description: '首席研究员办公室: 桌上的相框。', summary: '获取研究员照片3' },
          { type: 'collectible', name: '文件 20/60 (Lead Researcher’s Message)', description: '首席研究员办公室: 另一侧橱柜。', summary: '获取研究员留言' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - ID 手环与胖丧尸 (The Chunk)',
        stats: { trophies: 2, keyItems: 2 },
        content: [
          { type: 'collectible', name: '🏆 奖杯 (Like Mother, Like Daughter)', description: '首席研究员办公室: 拾取打字机左侧的 **Lockpick (撬锁器)**，并用其打开任意一个锁住的抽屉（如东翼大厅前台）。', summary: '撬锁解锁奖杯' },
          { type: 'text', text: '💡 **资源提示**：锁住的抽屉会提供 **Rare Metal**，建议优先用于制作强力的 Requiem 弹药，以应对接下来的战斗。', summary: '资源搜刮提示' },
          { type: 'collectible', name: '关键道具 (ID Wristband - Level 1)', description: '办公室外走廊: 地板上。解锁地图上蓝色的 Level 1 门。', summary: '获取一级手环' },
          { type: 'collectible', name: '🏆 奖杯 (Grace and Goliath) & 挂件 (Eye Spy Charm)', description: '击败拾取手环后出现的 **Chunk (胖丧尸)**。\n• **简单难度**：1发 Requiem 爆头 + 15发普通手枪爆头（或3发 Requiem）。\n• **策略**：若弹药不足可先逃离，它会在走廊徘徊。击杀后掉落挂件。', summary: '击败胖丧尸解锁奖杯' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 血液样本收集',
        stats: { keyItems: 2, files: 1, upgrades: 1 },
        content: [
          { type: 'collectible', name: '关键道具 (Green Blood Specimen - Converged)', description: '衣帽间 (Closet): 拿到手环后下楼，进入等候室 (Waiting Room) 的 Level 1 门内。', summary: '获取绿色血液样本' },
          { type: 'text', text: '返回血液实验室，分析绿色样本。解锁 Med Injector 和 12.7x55mm 弹药配方。', summary: '分析样本解锁配方' },
          { type: 'collectible', name: '文件 21/60 (Victor’s Journal Entry)', description: '血液实验室: 使用 Level 1 手环打开实验室内的门，在桌子上。', summary: '获取维克托日记' },
          { type: 'collectible', name: '关键道具 (White Blood Specimen - Reversible)', description: '血液实验室: 与文件在同一房间。', summary: '获取白色血液样本' },
          { type: 'text', text: '分析白色样本。解锁 **Steroids (类固醇)** 和 **Stabilizer (稳定剂)** 配方。', summary: '分析样本解锁类固醇' },
          { type: 'collectible', name: '升级道具 (Hip Pouch)', description: '档案室 (Filing Room): 返回西翼的档案室，打开 Level 1 门获取。', summary: '获取扩容背包' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 管理员办公室与车库',
        stats: { files: 1, keyItems: 2 },
        content: [
          { type: 'collectible', name: '文件 22/60 (Construction Notice)', description: '西翼走廊: 厨房南侧走廊，打开 Level 1 门后的新走廊白板上。', summary: '获取施工通知' },
          { type: 'collectible', name: '关键道具 (Wrench)', description: '管理员办公室 (Custodian’s Office): 存档点房间的打字机旁。', summary: '获取扳手' },
          { type: 'text', text: '穿过管理员办公室进入车库区域。', summary: '进入车库' },
          { type: 'collectible', name: '关键道具 (Organ Transport Box)', description: '车库 (Garage): 车库尽头一辆卡车的后部。', summary: '获取器官运输箱' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 推土机与办公室探索',
        stats: { raccoons: 1, files: 3 },
        content: [
          { type: 'text', text: '⚠️ **事件预警**：试图离开车库时，推土机会撞墙冲出。', summary: '应对推土机袭击' },
          { type: 'text', text: '策略：快速射击驾驶员。疯狂难度下还需射击铲斗下方的火焰区域。随后爬过推土机离开。', summary: '推土机战斗策略' },
          { type: 'text', text: '离开车库上楼进入办公室 (Office)。', summary: '进入办公室' },
          { type: 'collectible', name: '文件 23/60 (Bar & Lounge Safe Code)', description: '办公室: 第一张桌子上。揭示了之前已开启的酒吧保险箱密码。', summary: '获取酒吧保险箱密码' },
          { type: 'collectible', name: '文件 24/60 (Background Check)', description: '办公室: 右后方角落的桌子上。', summary: '获取背景调查文件' },
          { type: 'collectible', name: '文件 25/60 (Disposal Team Report)', description: '档案室 (Records Room): 办公室右侧房间，中间货架尽头的纸箱里。小心房内两个丧尸。', summary: '获取处理报告' },
          { type: 'collectible', name: '浣熊先生 4/25', description: '茶水间 (Kitchenette): 从办公室北门进入，在水槽旁边。', summary: '茶水间获取浣熊' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 冷藏室与会议室',
        stats: { trophies: 1, coins: 2, keyItems: 1 },
        content: [
          { type: 'text', text: '通过走廊解锁通往酒吧的门，然后下楼向左走。⚠️ 小心楼梯上的丧尸变异为 Blisterhead。', summary: '前往冷藏室' },
          { type: 'collectible', name: '关键道具 (Artificial Heart)', description: '冷藏室 (Cold Storage): 西翼一楼西北角，使用 **Wrench (扳手)** 打开门。进门即可看到。', summary: '获取人造心脏' },
          { type: 'collectible', name: '文件 26/60 (Examination Room Safe Code)', description: '东翼二楼房间: 回到最初遇到 Chunk 的地方，在储物柜上。揭示了之前已开启的检查室保险箱密码。', summary: '获取检查室密码' },
          { type: 'collectible', name: '古董硬币 20 (Antique Coin)', description: '会议室 (Conference Room): 就在上一个文件旁边的房间，进门后的白色桌子上。', summary: '会议室获取硬币' },
          { type: 'collectible', name: '🏆 奖杯 (Deadly Duet) & 古董硬币 21', description: '会议室: 击杀房间内的歌唱丧尸（第二个）。\n• **策略**：进门会惊动3个丧尸，建议退回走廊拉怪处理。击杀歌唱丧尸后掉落古董硬币 #21 并解锁奖杯。', summary: '击败歌唱丧尸解锁' },
          { type: 'collectible', name: '文件 27/60 (Patient Medical Records)', description: '会议室: 就在歌唱丧尸所在的办公桌上。', summary: '获取病历记录' },
          { type: 'collectible', name: '关键道具 (Corrosive / 腐蚀剂)', description: '会议室: 房间内的蓝色瓶子。', summary: '获取腐蚀剂' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - ID 手环升级 (Level 2)',
        stats: { keyItems: 3, files: 3 },
        content: [
          { type: 'text', text: '返回首席研究员办公室 (Lead Researcher’s Office) 的后屋。', summary: '返回研究员办公室' },
          { type: 'collectible', name: '文件 28-29 (Spencer’s Research I & Puzzle Box Note)', description: '对后屋的谜题箱使用 **Corrosive (腐蚀剂)**。在打开的笔记本中获得这两个文件。', summary: '腐蚀剂开启谜题箱' },
          { type: 'collectible', name: '关键道具 (Sun Quartz)', description: '谜题箱内。用于中央大厅的石英门。\n谜题解法：Star – Sun – Moon – Sun', summary: '获取太阳石英' },
          { type: 'collectible', name: '关键道具 (Artificial Lungs / 人造肺)', description: '从库存检查 **Organ Transport Box**。旋转至背面面板。\n解法：右下开关调至 HAND -> 右侧开关调至中层 -> 按按钮 5 -> 按按钮 2 -> 右下开关调回 AUTO -> 取出人造肺。', summary: '解谜获取人造肺' },
          { type: 'collectible', name: '关键道具 (ID Wristband - Level 2)', description: '检查室 (Examination Room): 对无内脏尸体使用 **Artificial Heart + Artificial Lungs**。击败起身的丧尸后从其身上搜刮获得。', summary: '获取二级手环' },
          { type: 'text', text: '⚠️ **敌人提示**：返回时注意手术台上的丧尸可能变异为 Blisterhead。', summary: '注意变异丧尸' },
          { type: 'collectible', name: '文件 30/60 (Double Mutation)', description: '隔离病房 (Isolation Ward): 使用 Level 2 手环打开东翼东北角的绿锁门。在右侧办公室的纸箱上。', summary: '获取双重变异文件' }
        ]
      },
      {
        title: '格蕾丝篇 Part 2 - 护送艾米丽与章节结束',
        stats: { raccoons: 1, files: 1, keyItems: 1 },
        content: [
          { type: 'collectible', name: '文件 31/60 (Nurse’s Log)', description: '隔离病房 (Isolation Ward): 同一房间的桌子上。', summary: '获取护士日志' },
          { type: 'collectible', name: '关键道具 (ID Wristband - Level 3)', description: '安保经理办公室 (Security Manager’s Office): 隔离病房尽头。阅读桌上的纸条并互动谜题箱，触发过场动画后从尸体上获得。', summary: '获取三级手环' },
          { type: 'text', text: '💡 **最终升级提示**：此时你应该有足够的古董硬币。建议回到客厅 (Parlor) 购买剩余的所有升级道具。', summary: '最终升级提示' },
          { type: 'collectible', name: '浣熊先生 5/25', description: '治疗室 (Medication Room): 穿过警卫室回到关押小女孩的区域。使用 Level 3 手环打开左侧空房间，在床后。', summary: '治疗室获取浣熊' },
          { type: 'text', text: '🏆 **奖杯检查点**：在带走女孩前，确保已击杀 Chunk (Grace and Goliath) 和 Chef (Order Up!)。', summary: '奖杯检查点' },
          { type: 'text', text: '抱起女孩 (Emily) 前往安保经理办公室的谜题箱。', summary: '护送艾米丽' },
          { type: 'text', text: '⚠️ **护送战**：抱人时无法攻击。建议先清理路线上的敌人，或者将女孩放在安全屋沙发上再战斗。', summary: '保护艾米丽战斗' },
          { type: 'text', text: '抵达谜题箱后触发战斗，防守直到 Emily 呼救。结束后跳入地板上的洞，结束本章节。', summary: '跳入洞口结束章节' }
        ]
      },
      {
        title: '里昂篇 Part 2 - 阁楼与霰弹枪 (Attic & Shotgun)',
        stats: { weapons: 1, files: 2, upgrades: 1 },
        content: [
          { type: 'text', text: '视角再次切换至里昂。目标是寻找 Victor 的办公室。', summary: '切换至里昂视角' },
          { type: 'collectible', name: '文件 32/60 (Satiety Suppression Medical Records)', description: '阁楼 (Attic): 穿过第一扇门后，在房间后方（需推动的橱柜对面）。', summary: '阁楼获取病历' },
          { type: 'collectible', name: '武器 (MSBG 500 Shotgun)', description: '阁楼: 主路径的地板上，遭遇 Chunk 之前。', summary: '获取霰弹枪' },
          { type: 'text', text: '⚠️ **强制战斗**：必须击败此处的 Chunk。', summary: '击败胖丧尸' },
          { type: 'text', text: '策略：利用霰弹枪输出。当它被门框卡住时是攻击好时机。利用梯子在上下层周旋。击败后拾取 **Hand Grenade (手雷)**。', summary: '胖丧尸战斗策略' },
          { type: 'collectible', name: '文件 33/60 (Basement Safe Code)', description: '离开阁楼后，下楼前用 Hatchet (手斧) 破开右侧衣柜。揭示地下室保险箱密码：Right 60 – Left 40 – Right 80。', summary: '获取地下室密码' },
          { type: 'collectible', name: '武器配件 (Compensator)', description: '与文件 33 在同一衣柜内。', summary: '获取武器配件' },
          { type: 'collectible', name: '🏆 奖杯 (Tailor Made)', description: '在库存中将 Compensator 组装到里昂的手枪上解锁。', summary: '组装配件解锁奖杯' }
        ]
      },
      {
        title: '里昂篇 Part 2 - 主席办公室与档案室',
        stats: { raccoons: 1, files: 2 },
        content: [
          { type: 'text', text: '放下梯子回到主席办公室 (Chairman’s Office)。虽然没有新道具，但可以搜刮之前 Grace 错过的资源。', summary: '返回主席办公室' },
          { type: 'collectible', name: '文件 34/60 (Dishwasher’s Note)', description: '从主席办公室向左走，打破衣柜发现。', summary: '打破衣柜获取文件' },
          { type: 'collectible', name: '浣熊先生 6/25', description: '档案室 (Records Room): 只能用里昂的 Hatchet 破开档案室内的衣柜才能发现。', summary: '档案室获取浣熊' }
        ]
      },
      {
        title: '里昂篇 Part 2 - 厨房与储藏室',
        stats: { raccoons: 1 },
        content: [
          { type: 'collectible', name: '挂件 (Connoisseur Charm)', description: '储藏室 (Pantry): 在储藏室的衣柜里。', summary: '储藏室获取挂件' },
          { type: 'text', text: '如果之前 Grace 没杀厨师，里昂可以在此击杀。', summary: '击杀厨师' }
        ]
      },
      {
        title: '里昂篇 Part 2 - 维克托办公室与章节结束',
        content: [
          { type: 'text', text: '前往西翼顶层，通过西北角的楼梯进入 Victor’s Office。', summary: '进入维克托办公室' },
          { type: 'text', text: '⚠️ **战斗提示**：房间内的尸体会复活为 Blisterheads。', summary: '应对变异丧尸' },
          { type: 'text', text: '策略：打破花瓶获取弹药，尽量用霰弹枪爆头节省子弹。利用第三个房间的投掷物对敌人造成硬直后使用手斧处决。', summary: '战斗策略提示' },
          { type: 'text', text: '清理首波敌人后，进入办公室互动桌后的画作，拉动拉杆。', summary: '互动画作拉杆' },
          { type: 'text', text: '防守直到大门开启，期间会有更多敌人涌入。', summary: '防守至大门开启' },
          { type: 'text', text: '门开后通过并乘坐电梯，本章节结束。', summary: '乘电梯结束章节' }
        ]
      }
    ]
  },
  {
    id: 'chapter-3',
    title: '第三章：护理中心地下室 (Care Center Basement)',
    sections: [
      {
        title: '营救艾米丽 (Rescue Emily)',
        stats: { files: 4 },
        content: [
           { type: 'collectible', name: '文件 35/60 (Special Directive for Raccoon City)', description: '剧情流程自动获得（过场动画后）。', summary: '自动获得指令文件' },
           { type: 'collectible', name: '文件 36/60 (Report on Raccoon City Syndrome)', description: '剧情流程自动获得（过场动画后）。', summary: '自动获得综合症报告' },
           { type: 'collectible', name: '文件 37/60 (Staff Member’s Last Words)', description: '地下通道: 刚开始操作 Grace 时，前行几步在尸体旁发现。', summary: '地下通道尸体旁获取' },
           { type: 'text', text: '沿直线路径穿过黑暗区域。此时只能进入右侧有灯光的安全屋 (Security Room)。', summary: '前往安全屋' },
           { type: 'collectible', name: '文件 38/60 (Operation to Eliminate “The Girl”)', description: '安全屋 (Security Room): 在满是监控屏幕的房间内。', summary: '安全屋监控室获取' }
        ]
      },
      {
        title: '解锁牢房 (Unlock the Cells)',
        stats: { keyItems: 1, files: 2, raccoons: 1 },
        content: [
           { type: 'text', text: '离开安全屋向右前往拘留室 (Holding Cells)。忽略牢房里的丧尸，不要浪费弹药。', summary: '前往拘留室' },
           { type: 'collectible', name: '文件 39/60 (Unlocking the Cells)', description: '拘留室 (Holding Cells): 走廊尽头过场动画后，在拉杆上方。', summary: '拘留室拉杆上方获取' },
           { type: 'collectible', name: '关键道具 (Joint Plug #1)', description: '拘留室: 与文件在同一位置。需要集齐3个以打开牢房。', summary: '获取第一个插头' },
           { type: 'text', text: '⚠️ **敌人提示**：拿到第一个插头后，“女孩 (The Girl)” 会出现。躲在角落避开她，她无法进入有灯光的区域。', summary: '躲避女孩前往车间' },
           { type: 'collectible', name: '浣熊先生 7/25', description: '车间 (Workshop): 在拘留室走廊另一端，使用插头打开门。进门后的工作台上。', summary: '车间工作台上获取' },
           { type: 'collectible', name: '文件 40/60 (Technician’s Note)', description: '车间: 就在浣熊先生旁边。', summary: '车间浣熊旁获取' }
        ]
      },
      {
        title: '熔炉与安全屋 #3 (Furnace & Safe)',
        stats: { keyItems: 1, files: 1, safes: 1 },
        content: [
           { type: 'text', text: '从车间门上取下 Joint Plug，插入中央熔炉 (Furnace) 的门。', summary: '插入插头开启熔炉' },
           { type: 'collectible', name: '保险箱 #3 (Care Center Basement Safe)', description: '熔炉右侧办公室。内含 **Raccoon Roundup Map**（地图上标记所有浣熊先生）。\n密码（普通难度）：右60 - 左40 - 右80\n密码（疯狂难度）：左70 - 右50 - 左20', summary: '熔炉办公室开启保险箱' },
           { type: 'collectible', name: '文件 41/60 (Security Guard’s Report)', description: '熔炉: 与保险箱在同一房间。', summary: '熔炉办公室获取文件' },
           { type: 'collectible', name: '关键道具 (Joint Plug #2)', description: '熔炉: 叉车旁边。', summary: '熔炉叉车旁获取插头' },
           { type: 'text', text: '现在拥有2个插头。返回中央区域（原路返回或走通风管道捷径）。', summary: '携带插头返回中央区' }
        ]
      },
      {
        title: '锅炉房与宿舍 (Boiler Room & Bunkroom)',
        stats: { raccoons: 1, keyItems: 1, recipes: 1 },
        content: [
           { type: 'text', text: '前往地图上标有黄色“!”的锅炉房走廊。插入一个 Joint Plug 开启区域。', summary: '插入插头开启锅炉房' },
           { type: 'collectible', name: '浣熊先生 8/25', description: '宿舍 (Bunkroom): 进入右侧宿舍，在电视机上。', summary: '宿舍电视机上获取' },
           { type: 'collectible', name: '配方 (Molotov Cocktail)', description: '宿舍: 中间桌子的盒子里。', summary: '宿舍桌上获取配方' },
           { type: 'text', text: '⚠️ **解谜关键**：为了进入锅炉房深处，必须拔掉宿舍走廊的 Joint Plug（否则水面带电）。', summary: '拔掉插头断电' },
           { type: 'text', text: '带着插头回到起始点的黑暗隧道（地图东北角）。插入插头开启锅炉房后门。', summary: '开启锅炉房后门' },
           { type: 'collectible', name: '关键道具 (Square Socket Wrench)', description: '锅炉房 (Boiler Room): 推开箱子穿过围栏，在房间深处。', summary: '锅炉房深处获取扳手' },
           { type: 'text', text: '拿到扳手后，The Girl 会出现并进食。趁机潜行绕过她离开，记得拔走插头。', summary: '潜行绕过女孩离开' }
        ]
      },
      {
        title: '处理区 (Processing)',
        stats: { keyItems: 1 },
        content: [
           { type: 'text', text: '回到中央区域，使用 Square Socket Wrench 操作收集池 (Collection Pool) 的控制台。', summary: '使用扳手操作控制台' },
           { type: 'text', text: '插入 2 个 Joint Plug 为处理区大门供电。', summary: '插入插头供电' },
           { type: 'collectible', name: '关键道具 (Forklift Key)', description: '处理区 (Processing): 区域尽头的叉车旁地板上。', summary: '处理区获取叉车钥匙' }
        ]
      },
      {
        title: '叉车谜题与收集品清理',
        stats: { upgrades: 1, maps: 1, keyItems: 1 },
        content: [
           { type: 'collectible', name: '升级道具 (Hip Pouch) & 地图 (Care Center Basement Floor Plan)', description: '处理区: 使用 Forklift Key 后进入的门内。⚠️ 注意：必须让插头留在控制台上保持门开启，暂时无法取回。', summary: '获取处理区地图' },
           { type: 'text', text: '现在回到熔炉门后的叉车处。带上收集池 (Collection Pool) 的2个插头。', summary: '返回叉车处' },
           { type: 'text', text: '⚠️ **潜行挑战**：进入房间后 The Girl 会再次出现。躲在侧室等她经过，然后冲向 Joint Plug 插槽开启灯光驱赶她。', summary: '开启灯光驱赶女孩' },
           { type: 'text', text: '使用 Forklift Key 升起叉车。移动悬挂的尸袋（不要拉开关），推动推车制造捷径。', summary: '升起叉车开启捷径' },
           { type: 'text', text: '回到起点拉动开关，通过捷径，利用尸袋移动到房间尽头。转动阀门排水。', summary: '移动尸袋排水' },
           { type: 'text', text: '跳入下方区域。传送带启动，丧尸会被推入刀片。', summary: '跳入下方区域' },
           { type: 'text', text: '策略：靠墙躲避刀片，射击丧尸头部造成硬直，将其推入刀片。传送带停止后爬梯子。', summary: '利用传送带杀敌' },
           { type: 'collectible', name: '关键道具 (Joint Plug #3)', description: '传送带尽头梯子上方。', summary: '传送带尽头获取插头' }
        ]
      },
      {
        title: '营救与撤离',
        stats: { keyItems: 2 },
        content: [
           { type: 'text', text: '从另一侧返回，钻过打字机旁的通风口。拉动开关使用电梯。', summary: '乘电梯返回' },
           { type: 'text', text: '回收叉车处和熔炉门上的插头（共3个）。', summary: '回收所有插头' },
           { type: 'text', text: '回到拘留室走廊，插入3个插头打开 Emily 的牢房。', summary: '打开艾米丽牢房' },
           { type: 'text', text: '抱起 Emily 冲向起始点的电梯。放下她，推开挡路的托盘（连按 X）。', summary: '抱起艾米丽逃离' },
           { type: 'text', text: '电梯上升时 The Girl 会试图从顶部攻击。射击她一次，然后连按 X 打开电梯门逃脱。', summary: '击退女孩攻击' },
           { type: 'collectible', name: '关键道具 (Star Quartz)', description: '电梯逃生后自动获得。用于开启中央大厅的门。', summary: '获得星形石英' },
           { type: 'collectible', name: '关键道具 (Severed Hand)', description: '电梯门前拾取。彩蛋道具：带到血液实验室分析可得“GLITCH”字样。', summary: '获得断手彩蛋' },
           { type: 'text', text: '现在可以自由探索护理中心剩余区域。准备好后，将所有 Quartz 放入中央大厅的门，离开此区域。', summary: '放入石英离开区域' }
        ]
      }
    ]
  },
  {
    id: 'chapter-4',
    title: '第四章：护理中心庭院 (Care Center Courtyard)',
    sections: [
      {
         title: '庭院与VIP套房 (Courtyard & VIP Suite)',
         stats: { coins: 1, files: 2, keyItems: 1 },
         content: [
            { type: 'text', text: '从中央大厅穿过石英门进入庭院。本区域一旦深入将无法返回，请确保已完成所有收集和升级。', summary: '穿过石英门进入庭院' },
            { type: 'collectible', name: '古董硬币 22 (Antique Coin)', description: '庭院: 下楼梯后转身，在楼梯间的椅子上。这是最后的硬币收集机会。', summary: '庭院楼梯间获取硬币' },
            { type: 'text', text: '沿路向左前往直升机停机坪方向，触发剧情后进入VIP套房。', summary: '前往直升机停机坪' },
            { type: 'collectible', name: '文件 42/60 (Visitor Record)', description: 'VIP套房: 进入第一间房子的木柜上。', summary: 'VIP套房木柜上获取' },
            { type: 'collectible', name: '文件 43/60 (Note Regarding Research Results)', description: 'VIP套房: 下一间房的主桌上。', summary: 'VIP套房主桌上获取' },
            { type: 'collectible', name: '干扰项 (Hourglass)', description: 'VIP套房: 桌上的沙漏。虽可互动看到代码“U=380,000”，但这只是干扰项，无需理会。', summary: '检查沙漏获取代码' },
            { type: 'collectible', name: '关键道具 (Double Helix Model)', description: 'VIP套房: 检查同一房间的酒瓶，旋转瓶底发现隐藏螺旋。取出后插入桌上的讲台激活电梯。', summary: '旋转酒瓶获取模型' }
         ]
       },
       {
         title: '接待处与测试区 (Reception & Testing)',
         stats: { files: 2 },
         content: [
            { type: 'collectible', name: '文件 44/60 (Spencer’s Research II)', description: '接待处: 乘电梯上来后，在打字机旁的桌子上。', summary: '接待处打字机旁获取' },
            { type: 'text', text: '从打字机处下楼进入收集与测试区。', summary: '前往收集与测试区' },
            { type: 'collectible', name: '文件 45/60 (Subject 170 Record)', description: '收集与测试区: 出口附近的担架上。', summary: '测试区担架上获取' }
         ]
       },
       {
         title: '私人实验室与逃脱 (Private Lab)',
         stats: { files: 1, raccoons: 1, keyItems: 1 },
         content: [
            { type: 'text', text: '上楼进入私人实验室。', summary: '进入私人实验室' },
            { type: 'collectible', name: '文件 46/60 (Grace Ashcroft Blood Analysis Report)', description: '私人实验室: 进门后的办公桌上。', summary: '实验室办公桌上获取' },
            { type: 'collectible', name: '浣熊先生 9/25', description: '私人实验室: 同一房间的另一张桌子上。', summary: '实验室另一桌上获取' },
            { type: 'collectible', name: '关键道具 (Helicopter Key)', description: '私人实验室: 监控台桌子上。', summary: '监控台获取直升机钥匙' },
            { type: 'text', text: '拿到钥匙后，互动电脑点击“Authorize”。穿过新开启的门下楼回到测试区。', summary: '授权并返回测试区' },
            { type: 'text', text: '⚠️ **逃脱战**：大量丧尸从培养槽涌出。', summary: '遭遇大量丧尸' },
            { type: 'text', text: '策略：右转拿取墙上的 **Disposal Tank (处理罐)**，喷射丧尸引发爆炸。炸开通路后一路狂奔回直升机处。', summary: '利用处理罐引发爆炸' }
         ]
       },
       {
         title: '里昂篇 - 支援格蕾丝 (Leon - Help Grace)',
         stats: { weapons: 1, raccoons: 1 },
         content: [
            { type: 'text', text: '视角切换至里昂。', summary: '切换至里昂视角' },
            { type: 'collectible', name: '武器 (Classic 70 Sniper Rifle)', description: '自动装备。若非首周目，请务必从箱子里取出狙击枪，否则无法收集接下来的浣熊先生。', summary: '装备狙击步枪' },
            { type: 'collectible', name: '浣熊先生 10/25', description: '⚠️ **极易错过**：翻过窗户，在屋顶左侧跳下。走到楼梯顶端左转（不要进木门）。透过楼梯和金属栅栏的缝隙看向花园，在第二盏路灯的底座上。必须用狙击枪射击。', summary: '花园路灯底座射击' },
            { type: 'text', text: '接下来是掩护格蕾丝和艾米丽进入教堂的防守战。', summary: '开始教堂防守战' },
            { type: 'text', text: '策略：你可以大部分时间专注于观察她们并射杀出现的敌人，因为她们移动较慢，足够你在敌人靠近时将其击杀。', summary: '优先保护格蕾丝' },
            { type: 'text', text: '💡 **多周目技巧**：如果你记得敌人的位置，可以提前射击地上趴着的敌人（如门前或栅栏边），在它们激活前将其击杀。', summary: '提前清理趴地敌人' },
            { type: 'text', text: '⚠️ **疯狂难度 (Insanity)**：里昂身边的两具尸体会变异为 **Blisterheads**。一定要提前射击地上的尸体将其击杀，避免被偷袭。', summary: '疯狂难度尸体变异' },
            { type: 'text', text: '👹 **强敌应对 (The Chef)**：最后阶段厨师会随最后一波敌人从里昂下方出现。切记**不要**提前打爆地上的爆炸桶！留给厨师，即使在疯狂难度下也能将其瞬杀。', summary: '保留爆炸桶对付厨师' }
         ]
       },
       {
         title: '教堂决战 (Church Battle)',
         content: [
            { type: 'text', text: '清理完外面的敌人后，里昂会自动跳下并跟随格蕾丝进入教堂，触发 BOSS 战。', summary: '进入教堂触发BOSS战' },
            { type: 'text', text: '👹 **BOSS战：巨型丧尸 (Big Zombie)**', summary: '遭遇巨型丧尸BOSS' },
            { type: 'text', text: '⚠️ **战斗机制**：攻击 BOSS 身上发光的弱点。注意：每摧毁一个弱点，周围任何头部完整的普通丧尸都会突变为 **Blisterheads**，使战斗更加困难。', summary: '攻击发光弱点' },
            { type: 'text', text: '🛡️ **环境利用**：', summary: '利用环境优势' },
            { type: 'text', text: '1. **二楼 (推荐起手)**：战斗开始立即上二楼。这里有一个爆炸桶，且敌人上楼路线单一，容易防守。随着战斗进行，教堂火势蔓延会封锁二楼，所以务必尽早利用。', summary: '优先利用二楼爆炸桶' },
            { type: 'text', text: '2. **一楼**：入口附近有另一个爆炸桶，二楼封锁后跳下来利用它。', summary: '转战一楼利用爆炸桶' },
            { type: 'text', text: '击败 BOSS 后清理剩余杂兵，即可自动完成本章节。', summary: '清理杂兵完成章节' }
         ]
       }
    ]
  },
  {
    id: 'chapter-5',
    title: '第五章：水处理厂 (Water Treatment Plant)',
    sections: [
      {
        title: '前往地表 (Get to the Surface)',
        stats: { files: 1, trophies: 1 },
        content: [
          { type: 'text', text: 'Storage Bay: 再次操作格蕾丝，向前走直到放下艾米丽并抵达带有打字机的安全屋。', summary: '抵达安全屋' },
          { type: 'collectible', name: '文件 47/60 (Roof Hatch Manual)', description: '安全屋: 打字机旁边。', summary: '打字机旁获取手册' },
          { type: 'text', text: '🏆 **奖杯 (Bring Out the Big Guns)**', summary: '奖杯获取提示' },
          { type: 'text', text: '在安全屋务必装备 **Requiem** 左轮手枪（如果在箱子里请取出）。拿起打字机桌上的 12.7x55mm 弹药。', summary: '装备左轮手枪' },
          { type: 'text', text: '下楼后会再次遭遇大怪物“The Girl”。用 Requiem 射击她一次即可解锁奖杯。也可以在之前的遭遇中完成，但这里是剧情安排的射击点（为了击晕她并开启电源）。', summary: '射击女孩解锁奖杯' }
        ]
      },
      {
        title: '重启配电单元 (Restart the Power Distribution Units)',
        content: [
          { type: 'text', text: '离开安全屋，互动绿色电梯按钮下到低层。跳下两层，捡起地上的 12.7x55mm 弹药。', summary: '下楼搜刮弹药' },
          { type: 'text', text: '继续前进遇到三岔路口，The Girl 会出现在前方。后退，当她向左移动时，你走右边的路。', summary: '岔路口躲避女孩' },
          { type: 'text', text: '一直向右转，她会开始追你，但在角落里有一盏灯。开启灯光可以暂时击晕她。注意：灯光是一次性的，使用后会烧毁，请把握时机。', summary: '利用灯光击晕女孩' },
          { type: 'text', text: '趁她眩晕时迅速向前跑，互动红灯旁的曲柄。这是三个开关中的第一个，会开启该区域的灯光驱赶 The Girl。', summary: '开启第一个开关' },
          { type: 'text', text: '回到分岔路口，走右边的那条路。The Girl 暂时不会出现，快速跑过红灯房间到达后面的房间。', summary: '前往红灯房间' },
          { type: 'collectible', name: '关键道具 (Crank Lever)', description: 'Filing Room: 位于 Filing Room 的架子上。用于控制室 (Control Room) 开启电源。', summary: '获取曲柄杠杆' },
          { type: 'text', text: '返回控制室，将 Crank Lever 放入控制台。', summary: '使用曲柄杠杆' },
          { type: 'text', text: '⚠️ **战斗提示**：当你尝试使用杠杆时，The Girl 会出现并将 Grace 扔向窗户。', summary: '遭遇女孩袭击' },
          { type: 'text', text: '🏆 **奖杯机会 (Bring Out the Big Guns)**：这是使用 Requiem 射击她的绝佳机会。射击可以击晕她，让你有足够时间跑回控制台启动它。', summary: '射击女孩解锁奖杯' },
          { type: 'text', text: '注意：疯狂难度下需要射击两次才能击晕，低难度只需一次。', summary: '难度差异提示' },
          { type: 'text', text: '启动开关后，回到分岔路口，慢慢走向最后一条路。The Girl 会在中央区域徘徊，等她移到左侧后再前往红灯处的控制台。', summary: '躲避女孩前往最后开关' },
          { type: 'text', text: '⚠️ **埋伏预警**：经过时注意天花板掉落的格栅，这是 The Girl 之后会跳下来的位置。', summary: '注意天花板埋伏' },
          { type: 'text', text: '准备好 **Molotov (燃烧瓶)**（如果没有，右侧有一个）。互动开关时会卡住，需要长按 X 旋转。', summary: '准备燃烧瓶' },
          { type: 'text', text: '一旦触摸开关，The Girl 就会跳下来。**不要**继续按住按钮，立即向她掉落的位置（格栅处）投掷燃烧瓶。这会击晕她，让你有足够时间转动开关。', summary: '使用燃烧瓶击晕' }
        ]
      },
      {
        title: '最终逃脱与里昂篇 (Final Escape & Leon)',
        stats: { files: 0 },
        content: [
          { type: 'text', text: '开启最后一个开关后，回到最初跳下来的地方，使用电梯回到上层。', summary: '乘电梯返回上层' },
          { type: 'text', text: '迅速跑回去按下绿色开关开启舱门。如果有剩余弹药，可以用 Requiem 或普通枪射击 The Girl 阻挡她。', summary: '开启舱门阻挡女孩' },
          { type: 'text', text: '过场动画后，回到放下 Emily 的房间。', summary: '返回艾米丽处' },
          { type: 'text', text: '再次触发过场动画，视角切换为 Leon。射击面前的敌人直到触发下一个过场动画。', summary: '切换至里昂射击敌人' }
        ]
      }
    ]
  },
  {
    id: 'chapter-6',
    title: '第六章：东浣熊市 (East Raccoon City)',
    sections: [
      {
        title: '前往市中心 (Head to Raccoon City Center)',
        stats: { files: 2, raccoons: 1 },
        content: [
          { type: 'text', text: '本章开始操作 Leon。', summary: '切换至里昂' },
          { type: 'collectible', name: '文件 48/60 (Report on the Raccoon City Incident)', description: '剧情流程自动获得。', summary: '自动获得事件报告' },
          { type: 'collectible', name: '文件 49/60 (Raccoon City Incident Newspaper)', description: '起始点：向前走几步，右侧地上的垃圾袋旁。', summary: '垃圾袋旁获取报纸' },
          { type: 'collectible', name: '浣熊先生 11/25', description: 'Café Oasis: 从起始点一直走到路口，右转进入左手边第一栋开放建筑（Café Oasis，在 Applegate Hotel 之前）。在柜台后面。', summary: '咖啡馆柜台后获取' }
        ]
      },
      {
        title: '阿普尔盖特酒店与巨型蜘蛛 (Applegate Hotel & Giant Spider)',
        content: [
          { type: 'text', text: '穿过 Applegate Hotel 的门进入建筑。', summary: '进入酒店' },
          { type: 'text', text: '在长走廊遭遇巨大敌人袭击，墙壁被破坏后，转身跑回另一端。等它追上你时会自动触发剧情，将你撞入下一个区域。', summary: '遭遇巨大敌人' },
          { type: 'text', text: '起身转身跑到远处的墙，立即右转进门。沿路如上楼，经过左侧开放墙壁后会出现小蜘蛛。', summary: '上楼遭遇小蜘蛛' },
          { type: 'text', text: '⚠️ **战斗提示**：小蜘蛛出现时立即射杀，然后再前进。', summary: '清理小蜘蛛' },
          { type: 'text', text: '爬上梯子进入开阔区域，准备迎战 **Giant Spider (巨型蜘蛛)**。', summary: '爬梯迎战BOSS' },
          { type: 'text', text: '👹 **BOSS战：巨型蜘蛛**', summary: '巨型蜘蛛BOSS战' },
          { type: 'text', text: '弱点：主要攻击它尾部的弱点。它会在墙上爬行，较难命中。', summary: '攻击尾部弱点' },
          { type: 'text', text: '策略：顺时针绕场跑动，利用梯子到达上层平台，迫使它减速爬行来追你。', summary: '利用梯子绕场' },
          { type: 'text', text: '注意：战斗时间过长（尤其是疯狂难度且无无限火箭筒时）会生成更多小蜘蛛，需优先处理。', summary: '清理增援小蜘蛛' },
          { type: 'text', text: 'QTE：如果被BOSS抓住拖向窗户，连按 X 挣脱。', summary: 'QTE挣脱' }
        ]
      },
      {
        title: '收集起爆器零件 (Collect the Detonator Parts)',
        stats: { files: 1, keyItems: 3, weapons: 1, upgrades: 2, raccoons: 1 },
        content: [
          { type: 'text', text: 'Central Camp: 击败蜘蛛后掉入地铁区域，沿路走直到看到未完成的炸弹（触发剧情）。', summary: '抵达中央营地' },
          { type: 'collectible', name: '文件 50/60 (Orders for the Engineer Corps)', description: 'Central Camp: 左转进入蓝色的 BSAA 帐篷。剧情会强制进入这里开启发电机，存档点旁就是文件。', summary: '帐篷内获取命令书' },
          { type: 'collectible', name: '关键道具 (Tactical Tracker)', description: 'Central Camp: 开启发电机后，在存档点旁边的补给箱上。', summary: '获取战术追踪器' },
          { type: 'text', text: '💡 **新功能解锁**：击杀敌人现在会掉落积分解锁补给箱物品。', summary: '解锁积分交易' },
          { type: 'collectible', name: '购买推荐 (Supply Box)', description: 'Silencer 9 (消音器) + 990-TAC (霰弹枪) + Stiri REVO3 A1 (冲锋枪) + Body Armor (防弹衣) + Case Upgrade (背包扩容)。\n提示：手斧可以无限使用且可随时修复 (L1+方块 / LB+X)，建议多用以节省弹药。', summary: '补给箱购买推荐' },
          { type: 'collectible', name: '关键道具 (Cedarbrook Apartments Key)', description: 'Logistics Warehouse 2F: 在中央营地后方，按红按钮升起卷帘门。射落悬挂的箱子前进，直到二楼的暗室，挂在门边的墙上。', summary: '仓库获取公寓钥匙' },
          { type: 'text', text: '⚠️ **战斗提示**：该区域敌人会从地底钻出，无法提前规避。建议尽量清图，利用手斧处决，资源非常充足。', summary: '地底敌人应对' },
          { type: 'collectible', name: '关键道具 (Distributor)', description: 'Logistics Warehouse Roof: 爬上屋顶左转，在黄色盒子里。', summary: '屋顶获取分电器' },
          { type: 'collectible', name: '浣熊先生 12/25', description: 'Logistics Warehouse Roof: 拿到分电器后自动使用望远镜侦查。转身面向电梯，看向西边的高速公路。在一个送货卡车前的废弃轿车顶上，需要狙击枪射击。', summary: '高速路废车顶获取' }
        ]
      },
      {
        title: '获取电池 (Get the Batteries)',
        stats: { raccoons: 1, files: 1, keyItems: 1 },
        content: [
          { type: 'collectible', name: '浣熊先生 13/25', description: 'Underground Parking Garage: 在中央营地电梯旁使用公寓钥匙打开大门。下楼进右侧门。在遇到第一个敌人（暗杀教学）的地方，进入左侧房间，在箱子上。', summary: '地下车库获取浣熊' },
          { type: 'collectible', name: '文件 51/60 (Battery Storage Locations)', description: 'Underground Parking Garage: 进入下一区域左转，在一个有单个丧尸的积水区。检查右侧红灯闪烁的盒子。', summary: '积水区获取文件' },
          { type: 'collectible', name: '关键道具 (Battery #1)', description: 'Underground Parking Garage: 从拿文件的地方转身 180° 翻过梯子。跳下到低层，前往西北角。小心水下冒出的敌人。电池在西北角小房间的墙上。', summary: '车库西北角获取电池' },
          { type: 'text', text: '⚠️ **陷阱提示**：靠近电池位置的面包车里藏有敌人和炸药，小心开启。', summary: '注意面包车陷阱' },
          { type: 'collectible', name: '武器 (Gal SMG)', description: 'Underground Parking Garage: 在获取电池的同一个小房间内，一个银色盒子里。', summary: '获取冲锋枪' },
          { type: 'text', text: '拿到电池后，爬上梯子回到上层，走过屋顶回到关闭的大门处，插入电池。', summary: '插入电池' },
          { type: 'text', text: '然后上楼，通过侧面的蓝色门进入污水处理设施 (Sewage Facility)。', summary: '进入污水处理厂' },
          { type: 'collectible', name: '关键道具 (Valve Handwheel)', description: 'Sewage Facility: 跳下后的通道上。', summary: '获取阀门手轮' },
          { type: 'text', text: '⚠️ **强制战斗**：捡起手轮后，三个敌人会从地底钻出。尽量爆头处理。', summary: '清理地底敌人' },
          { type: 'text', text: '处理完敌人后，将手轮放在墙上。长按 X 直到图标达到约 20% 时停止。墙壁会移动，但此时一个新的大型敌人（类似护理中心遇到的）会从新开启的通道走来。', summary: '操作手轮引出强敌' },
          { type: 'text', text: '策略：后退并处理大敌人，注意它被攻击弱点时可能会复活之前的敌人。', summary: '应对强敌' },
          { type: 'collectible', name: '关键道具 (Battery #2)', description: 'Sewage Facility: 击败敌人后，将手轮彻底转到底，架起桥梁。在房间顶部的另一侧获得第二个电池。注意下层可能还有残余敌人。', summary: '获取第二个电池' },
          { type: 'collectible', name: '关键道具 (BSAA Container Keys)', description: 'Underground Parking Garage: 将两个电池都插入车库大门。左转触发过场动画，自动获得钥匙。', summary: '自动获得集装箱钥匙' },
          { type: 'text', text: '这把钥匙用于开启 Cedarbrook Apartments 前面的 3 个 BSAA 集装箱，这是解锁奖杯 **Crate Expectations** 的条件。', summary: '钥匙用途说明' },
          { type: 'collectible', name: '文件 52/60 (Inventory List)', description: 'Cedarbrook Apartments Entrance: 过场动画后，直接左转进入开放的集装箱（在公寓入口前）。', summary: '集装箱内获取清单' },
          { type: 'collectible', name: '浣熊先生 14/25', description: 'Cedarbrook Apartments Entrance: 在上一个文件旁边的巴士驾驶座上。', summary: '巴士驾驶座获取浣熊' }
        ]
      },
      {
        title: 'Cedarbrook 公寓与屋顶战斗 (Cedarbrook Apartments & Rooftop)',
        stats: { keyItems: 1, raccoons: 1 },
        content: [
          { type: 'text', text: '进入公寓，搜刮大型灰色集装箱获取弹药。上楼并跳下到低层房间。', summary: '搜刮公寓' },
          { type: 'text', text: '⚠️ **新敌人 (BSAA Zombies)**：这些丧尸装备精良，头盔可挡一次爆头，且会使用机枪扫射。务必快速解决。', summary: '应对BSAA丧尸' },
          { type: 'collectible', name: '关键道具 (Rusty Crank)', description: 'Cedarbrook Apartments 1F: 清理敌人后，转动底层门的曲柄，同时获得该曲柄。注意转动时会刷怪。', summary: '获取生锈曲柄' },
          { type: 'collectible', name: '浣熊先生 15/25', description: 'Cedarbrook Apartments Upper Floor: 拿到曲柄后上楼，用曲柄打开阳台门。爬梯子，右转进入公寓上层。右转到楼梯间，走到后面（不要下楼），在一个打开的冰箱里。', summary: '公寓冰箱获取浣熊' },
          { type: 'text', text: '回到大门继续上楼到达屋顶。', summary: '前往屋顶' },
          { type: 'text', text: '⚠️ **屋顶战斗 (Mortars)**：屋顶有 4 个迫击炮丧尸。', summary: '屋顶迫击炮战斗' },
          { type: 'text', text: '1. 第一个迫击炮：刚上屋顶就能看到，看向红色接收器，然后向左下方射击。', summary: '解决第一个迫击炮' },
          { type: 'text', text: '2. 绕过栅栏，注意第二个炮塔和出现的两个敌人。可以让迫击炮误伤敌人节省弹药。第二个炮塔在第二栋楼左侧。', summary: '利用迫击炮清敌' },
          { type: 'text', text: '3. 爬上下一层屋顶向左跑（朝向第二个炮塔方向）。小心更多敌人和两个瞄准你的迫击炮。躲进建筑避难。', summary: '躲避炮火' },
          { type: 'text', text: '4. 前往左侧的第三个迫击炮位置，利用它解决第四个迫击炮和剩余敌人。', summary: '夺取迫击炮' },
          { type: 'collectible', name: '关键道具 (Broken Signal Receiver / 损坏的信号接收器)', description: 'Cedarbrook Apartments Roof: 清理完敌人后，在屋顶尽头第四个迫击炮位置的黄色盒子里。', summary: '获取损坏的接收器' },
          { type: 'text', text: '组合：在库存中将 **Distributor (分电器)** 与 **Broken Signal Receiver** 组合。', summary: '组合道具' },
          { type: 'collectible', name: '文件 53/60 (Engineer Corps Note)', description: 'Cedarbrook Apartments Roof: 与接收器在同一位置，黄色盒子右侧。', summary: '屋顶获取工程师笔记' },
          { type: 'text', text: '准备离开屋顶时会刷出更多敌人。利用第三个迫击炮处理他们。', summary: '屋顶撤离战' }
        ]
      },
      {
        title: '获取燃油与 BSAA 集装箱 (Fuel & BSAA Containers)',
        stats: { raccoons: 3, keyItems: 2, files: 0, weapons: 1 },
        content: [
          { type: 'text', text: '回到街道，在 Cedarbrook 公寓入口对面，射击梯子上的带子放下梯子。', summary: '放下梯子' },
          { type: 'collectible', name: '浣熊先生 16/25', description: 'Gas Station: 爬上刚放下的梯子进入加油站区域。在加油站内部的金属架子上。', summary: '加油站架子上获取浣熊' },
          { type: 'collectible', name: '关键道具 (Gas Can)', description: 'Gas Station: 加油站内部，靠近被发电机锁住的门。', summary: '获取油桶' },
          { type: 'text', text: '⚠️ **战斗提示 (Chainsaw)**：拿起油桶后会遭遇电锯男。击败他后利用地形死守加油站入口，所有敌人都会被掉落的电锯吸引。', summary: '利用电锯清理尸潮' },
          { type: 'text', text: '注意：之后会有第二个（铁头）电锯男从对面车堆出现。普通爆头无效，建议用之前捡到的电锯或爆炸物处理。', summary: '应对铁头电锯男' },
          { type: 'text', text: '战斗结束后，去加油站北侧的大油罐互动装满 Gas Can。然后回到原处给发电机加油，打开大门回到街道。', summary: '装油开启大门' },
          { type: 'collectible', name: 'BSAA Container #1 & 武器 (Marksman 1A Sniper)', description: 'Main Road East: 加油站和公寓之间的主路东端。爬上卡车后方到达蓝色大集装箱。使用 **BSAA Container Keys** 开启。', summary: '开启集装箱获取狙击枪' },
          { type: 'collectible', name: '浣熊先生 17/25', description: 'Main Road West: 主路西端的大起重机处。拉动开关开启通往 Central Camp 的捷径。在捷径途中向下看，左侧的开放污水管里。', summary: '捷径污水管获取浣熊' },
          { type: 'collectible', name: 'BSAA Container #2 & 关键道具 (Repair Kit)', description: 'Central Camp: 回到中央营地，开启帐篷旁角落的蓝色集装箱。获得维修包。', summary: '开启集装箱获取维修包' },
          { type: 'text', text: '组合：使用 **Repair Kit** 修复 **Distributor & Broken Signal Receiver**。', summary: '修复信号接收器' },
          { type: 'collectible', name: '浣熊先生 18/25', description: 'Ridgewood Station: 在主路西端起重机处，给发电机加油。穿过开启的门下梯子进入地下。沿着路走自动到达一节车厢，浣熊先生在乘客座位上。这条路也通往浣熊市起始点。', summary: '地下车厢获取浣熊' },
          { type: 'collectible', name: 'BSAA Container #3 & 挂件 (BSAA Emblem Charm)', description: 'Start of Raccoon City: 从上一个位置继续走，回到这一章最开始的地方（Applegate Hotel 外面）。开启最后一个集装箱。', summary: '开启集装箱获取挂件' },
          { type: 'collectible', name: '浣熊先生 19/25', description: 'Willis Tower: 再次回到 Central Camp。从电梯上屋顶，爬下右侧梯子，给发电机加油并启动，使用滑索到达 Willis Tower。在落地后上楼，右转沿着沙发进入一个房间，架子上。', summary: '威利斯塔获取浣熊' }
        ]
      },
      {
        title: '威利斯塔与组装起爆器 (Willis Tower & Detonator)',
        stats: { keyItems: 1 },
        content: [
          { type: 'text', text: '在 Willis Tower 射击木板开路。跳入电梯井时，先在左侧电梯，等右侧电梯下落后再跳过去。', summary: '穿越电梯井' },
          { type: 'text', text: '掉落到玻璃窗区域。可以射击敌人脚下的玻璃让他们掉下去，节省弹药。小心不要射中自己脚下的玻璃。', summary: '射击玻璃击杀敌人' },
          { type: 'text', text: '通过易碎门后立即右转处理敌人，然后左转射击金属柱下的玻璃，制造向上的斜坡。', summary: '制造通路' },
          { type: 'text', text: '上坡后注意上方和平台的持枪丧尸及手雷丧尸。清理后前往对面屋顶。', summary: '清理屋顶敌人' },
          { type: 'collectible', name: '关键道具 (Relay / 继电器)', description: 'Willis Tower End: 塔顶尽头。', summary: '获取继电器' },
          { type: 'text', text: '组合：将所有零件组合得到 **Detonator (起爆器)**。', summary: '组装起爆器' }
        ]
      },
      {
        title: '炸毁大门与摩托车追逐 (Destroy the Gate & Motorcycle Chase)',
        stats: { trophies: 1 },
        content: [
          { type: 'text', text: '原路返回地面。利用屋顶的箱子爬上高层，滑下斜坡到达第一个曲柄处。', summary: '返回地面' },
          { type: 'text', text: '启动两个曲柄激活电梯。在等待电梯下降时，背靠按钮，用霰弹枪将跳下来的丧尸一一击退。', summary: '电梯防守战' },
          { type: 'text', text: '电梯到底后，跑向排水管开门回到街道（靠近 BSAA 帐篷）。', summary: '回到街道' },
          { type: 'text', text: '前往大门安放炸弹。', summary: '安放炸弹' },
          { type: 'text', text: '🏆 **奖杯 (Road Rage)**', summary: '奖杯获取提示' },
          { type: 'text', text: '在摩托车追逐战中，当 Victor 准备发射 RPG（头顶有红色箭头）时射击他以打断攻击。如果错过，立即读取自动存档重试。最早的机会是第二次看到 Victor 时。', summary: '打断维克托攻击' },
          { type: 'text', text: '其余时间射击出现的怪物，并射击爆炸物清除路障。', summary: '清理路障与怪物' }
        ]
      }
    ]
  },
  {
    id: 'chapter-7',
    title: '第七章：浣熊市中心 (Raccoon City Center)',
    sections: [
      {
        title: '寻找格蕾丝 (Search for Grace)',
        stats: { raccoons: 2, files: 2 },
        content: [
          { type: 'text', text: '本章开始继续操作 Leon。', summary: '切换至里昂' },
          { type: 'collectible', name: '浣熊先生 20/25', description: 'After Motorcycle Chase: 摩托车追逐战结束，步行开始后，向左转一点，在废墟中被摧毁的油罐车前面。', summary: '废墟油罐车前获取浣熊' },
          { type: 'collectible', name: '文件 54/60 (R.P.D Perimeter Report)', description: 'Main Hall: 沿剧情路线进入 R.P.D. 警察局大楼，在存档点对面的箱子上。', summary: '警察局大厅获取报告' },
          { type: 'collectible', name: '文件 55/60 (Top Secret Operation)', description: 'West Office: 存档点旁边的房间（西侧办公室），右侧第一张桌子上。', summary: '西侧办公室获取文件' },
          { type: 'collectible', name: '浣熊先生 21/25', description: 'Operations Room: 在作战室左侧的废墟中，藏在木质路障后面。', summary: '作战室废墟获取浣熊' },
          { type: 'collectible', name: '文件 56/60 (Record of Events)', description: 'Operations Room: 作战室的黑板上。', summary: '作战室黑板获取文件' }
        ]
      },
      {
        title: 'S.T.A.R.S. 办公室与寻宝游戏 (S.T.A.R.S. Office & Scavenger Hunt)',
        stats: { files: 3 },
        content: [
          { type: 'text', text: '从 Operations Room 向南前往 Reception（有锁住的卷帘门）。抬头射击梯子并爬上去。', summary: '前往接待处' },
          { type: 'text', text: '直走穿过走廊（不要进右边的图书馆），走廊尽头进入 S.T.A.R.S. Office。', summary: '前往STARS办公室' },
          { type: 'collectible', name: '文件 57/60 (Scavenger Hunt – Clue 2)', description: 'S.T.A.R.S. Office: 进门右侧的架子里。旋转文件查看背面的提示。', summary: '获取寻宝线索2' },
          { type: 'collectible', name: '文件 58/60 (Library Card)', description: 'S.T.A.R.S. Office: 进门左侧的小办公室，在桌子抽屉里。互动打开抽屉稍等片刻文件出现。', summary: '获取借书卡' },
          { type: 'collectible', name: '文件 59/60 (Scavenger Hunt – Clue 1)', description: 'S.T.A.R.S. Office: 入口正对面的墙上，挂在两张桌子之间的棕色夹克上。旋转文件查看提示。', summary: '获取寻宝线索1' },
          { type: 'collectible', name: '文件 60/60 (Barry’s To Do List)', description: 'S.T.A.R.S. Office: 最左侧的桌子上。', summary: '获取巴瑞的任务清单' },
          { type: 'collectible', name: '挂件 (Power Shades Charm)', description: 'S.T.A.R.S. Office: 左侧角落进入更衣室，找到锁住的公文包。输入密码 **RRR** (Rising Rookie Rebecca) 打开。', summary: '更衣室获取挂件' }
        ]
      },
      {
        title: '寻宝游戏与图书馆 (Scavenger Hunt & Library)',
        stats: { raccoons: 1, files: 1, keyItems: 2 },
        content: [
          { type: 'collectible', name: '关键道具 (Locker Key)', description: 'Operations Room: 阅读完两个线索文件后，回到作战室。进门右转爬上黑板前的箱子，看向挂在天花板上的电视机顶部。⚠️ 必须先阅读两个线索文件才会出现。', summary: '电视机顶获取钥匙' },
          { type: 'collectible', name: '挂件 (S.T.A.R.S Emblem Charm)', description: 'West Office: 回到西侧办公室，用 Locker Key 打开地图上标有“!”的储物柜。从背面查看柜子里的动物园门票，完成寻宝游戏。', summary: '储物柜获取挂件' },
          { type: 'collectible', name: '关键道具 (Mechanic Jack)', description: 'Library: 从接待处上二楼，进入右侧的图书馆。在图书馆北部的地板上。', summary: '图书馆获取千斤顶' },
          { type: 'collectible', name: '浣熊先生 22/25', description: 'Library: 图书馆中间的高书架。去北面那一侧，瞄准最底层（就在捡到千斤顶的旁边）。从左数第二个格子里，藏在一堆书后面，很难看见。', summary: '书架底层获取浣熊' },
          { type: 'collectible', name: '文件 61/60 (Photograph)', description: 'Library: 上楼走过过道，前往锁住的木门。互动门右侧书架上的棕色皮书。⚠️ 必须先阅读 S.T.A.R.S. 办公室的所有4个文件才会出现。', summary: '书本内获取照片' },
          { type: 'text', text: '收集完所有物品后，前往 Main Hall 入口附近的两个卷帘门处，使用 Mechanic Jack。', summary: '使用千斤顶' },
          { type: 'text', text: '穿过东侧生锈的卷帘门，沿着走廊前进触发过场动画，直接跳过到孤儿院章节。', summary: '前往孤儿院' },
          { type: 'text', text: '注意：浣熊市的最后一个文件是在孤儿院章节之后，所以现在少一个文件是正常的。', summary: '文件收集提示' }
        ]
      }
    ]
  },
  {
    id: 'chapter-8',
    title: '第八章：孤儿院 (Orphanage)',
    sections: [
      {
        title: '潜行与逃脱 (Stealth & Escape)',
        stats: { keyItems: 1 },
        content: [
          { type: 'text', text: '过场动画后操作 Grace（幼年体）在孤儿院。', summary: '开始孤儿院章节' },
          { type: 'text', text: '进入走廊左侧第一扇门。回到卧室躲在床下直到安全。', summary: '躲避在床下' },
          { type: 'text', text: '返回左侧房间，蹲伏钻进角落的游乐区，找到通往楼下的门。', summary: '钻入游乐区' },
          { type: 'text', text: '下楼躲在右侧的小桌子下。等待 1-2 分钟直到孩子们离开。', summary: '躲在桌下' },
          { type: 'text', text: '提示：如果孩子守在走廊尽头，可以故意让他们看到，然后迅速跑回同一张桌子下躲藏，这会触发他们离开走廊。', summary: '诱导孩子离开' },
          { type: 'text', text: 'Director’s Office: 互动右侧的灯，然后打开左侧墙上的木抽屉爬上去，获得 **Hatch Key**。', summary: '获取地下室钥匙' },
          { type: 'text', text: '当孩子们再次出现时，躲在白色箱子后面的角落里（就在你打开的抽屉右边）。保持蹲伏等待 1-2 分钟直到他们离开。', summary: '躲在箱子后' },
          { type: 'text', text: '使用钥匙打开办公室南侧地板上的舱门。', summary: '打开地下室舱门' }
        ]
      },
      {
        title: '地下礼拜堂与实验室 (Underground Chapel & Lab)',
        stats: { files: 3, keyItems: 1 },
        content: [
          { type: 'text', text: '沿隧道前进到达地下礼拜堂。走到祭坛后面，墙壁打开露出梯子（无法攀爬）。使用梯子同房间的拉杆开启灯光。', summary: '开启礼拜堂灯光' },
          { type: 'collectible', name: '文件 62/60 (Toe Tag)', description: 'Underground Chapel: 使用拉杆后进入侧门，在右侧的黑色棺材里。旋转查看背面。', summary: '棺材内获取文件' },
          { type: 'text', text: '棺材后方有锁住的门。拉出右侧地上的棺材，攀爬这 3 个棺材翻过大门。', summary: '翻越棺材' },
          { type: 'collectible', name: '关键道具 (Fire Poker)', description: '翻过门后拾取，用于打开大门。', summary: '获取火钳' },
          { type: 'text', text: '过场动画后，快速跑向梯子（避开孩子），使用火钳放下梯子。', summary: '逃离礼拜堂' },
          { type: 'text', text: '进入实验室区域（白色走廊）。', summary: '进入实验室' },
          { type: 'collectible', name: '文件 63/60 (Series 60 Results)', description: 'Lab Corridor: 进入白色走廊后，穿过右侧第一扇发绿光的门，就在前方。', summary: '获取实验结果' },
          { type: 'collectible', name: '文件 64/60 (New Researcher’s Notebook)', description: 'Lab Corridor: 同一房间的右后方桌子上。', summary: '获取研究员笔记' },
          { type: 'text', text: '穿过右后方的绿门进入会议室，使用桌上的遥控器。播放所有幻灯片触发过场动画。', summary: '播放幻灯片' },
          { type: 'text', text: '之后剧情切换回 Leon。', summary: '切换至里昂' }
        ]
      }
    ]
  },
  {
    id: 'chapter-9',
    title: '第九章：浣熊市侧街 (Raccoon City Side Street)',
    sections: [
      {
        title: '逃离 R.P.D. (Escape R.P.D.)',
        stats: { files: 1 },
        content: [
          { type: 'text', text: '回到 Leon 视角。被暴君追赶穿过墙壁进入侧区。', summary: '被暴君追赶' },
          { type: 'text', text: '沿路跑上二楼，遇到暴君再次破墙（直升机尾翼）。掉头进入死胡同（鹿头雕像房间），利用瓦砾躲避暴君，然后跑回警察局中心区域。', summary: '利用瓦砾躲避暴君' },
          { type: 'collectible', name: '文件 65/60 (Guide Pamphlet)', description: 'Main Hall 2F: 逃离暴君回到大厅后，转身在东侧二楼的长椅上。', summary: '大厅二楼获取手册' }
        ]
      },
      {
        title: '前往孤儿院与枪店 (Head to Orphanage & Kendo Gun Shop)',
        stats: { weapons: 1, upgrades: 1, raccoons: 1, trophies: 1 },
        content: [
          { type: 'collectible', name: '挂件 (Cute Bear Charm)', description: 'Parking Garage: 离开警察局向左下到黑暗的车库。正前方有灯光的集装箱右侧地面。', summary: '车库获取挂件' },
          { type: 'collectible', name: '武器配件 (Silver Finish Scope)', description: 'Parking Garage: 有灯光的集装箱内部。', summary: '获取狙击镜' },
          { type: 'text', text: '⚠️ **战斗提示**：拿到物品后身后会出现装甲丧尸，必须清理才能离开。', summary: '清理装甲丧尸' },
          { type: 'collectible', name: '武器 (W870 Police Shotgun)', description: 'Gun Shop Kendo: 进入肯多枪店触发剧情。剧情后转身 180° 在门后的架子上。', summary: '枪店获取霰弹枪' },
          { type: 'collectible', name: '浣熊先生 23/25', description: 'Gun Shop Kendo: 剧情后转身进入侧面小巷。巷子尽头抬头看，在 Umbrella 广告牌左侧的开窗里。', summary: '巷子窗户获取浣熊' },
          { type: 'text', text: '👹 **BOSS战：暴君 (Tyrant)**', summary: '暴君BOSS战' },
          { type: 'text', text: '策略：利用手斧格挡（Parry）他的冲锋攻击。注意磨刀。攻击心脏弱点。推荐使用 Requiem 快速输出。', summary: '格挡与攻击弱点' },
          { type: 'collectible', name: '🏆 奖杯 (Not Today, Buds!)', description: 'Train & Cave: 击杀 9 个 Plant 43 幼苗（张嘴时射击）。\n1. 火车内（必得）\n2. 洞穴入口主路\n3-4. 下一个洞穴主路\n5. 左侧岔路（会抓脚）\n6. 水淹区主路\n7. 紧挨着上一个左侧\n8-9. 通往光亮出口的主路', summary: '击杀9个植物幼苗' }
        ]
      },
      {
        title: '巨型植物 BOSS 战 (Giant Plant Boss)',
        content: [
          { type: 'text', text: '在开阔区域射击出现的大藤蔓。跳下迎战 BOSS。', summary: '射击藤蔓' },
          { type: 'text', text: '策略：射击中心的巨型花朵。躲避两侧触手的拍击（左右横跳）。', summary: '射击花朵躲避触手' },
          { type: 'text', text: '造成足够伤害后，它会打翻下方的集装箱。射击集装箱引爆，结束战斗。', summary: '引爆集装箱' },
          { type: 'text', text: '沿路拉动拉杆进入 ARK。', summary: '进入方舟' }
        ]
      }
    ]
  },
  {
    id: 'chapter-10',
    title: '第十章：方舟 (ARK)',
    sections: [
      {
        title: '追赶格蕾丝 (Head After Grace) - Leon',
        stats: { files: 1, raccoons: 1 },
        content: [
          { type: 'collectible', name: '文件 66/60 (N0-AH Status Report)', description: 'Save Room: 穿过消毒隧道后左转进入绿门，安全屋内的墙壁监视器上。', summary: '安全屋获取报告' },
          { type: 'collectible', name: '浣熊先生 24/25', description: 'Corridor: 离开安全屋直走，在下楼前的走廊右侧箱子后面。', summary: '走廊箱子后获取浣熊' }
        ]
      },
      {
        title: '精英守卫与指挥官 BOSS (Elite Guards & Commander)',
        stats: { files: 3, weapons: 1 },
        content: [
          { type: 'text', text: 'Server Room: 使用电脑触发剧情。灯灭后，4个重装敌人从远处进入。建议在门口扔手雷一波带走。', summary: '服务器机房战斗' },
          { type: 'text', text: 'Stockroom: 仓库有4个掩体后的敌人，可用狙击枪爆头。也可以爬上右侧猫道居高临下清理。', summary: '仓库战斗' },
          { type: 'text', text: 'Stockroom Lower Level: 跳下后会有更多敌人和盾牌兵。扔手雷处理，然后射击左侧红罐释放舔食者 (Licker) 协助清理杂兵。', summary: '利用舔食者' },
          { type: 'collectible', name: '文件 67-69 (Bioweapon Report & Product Catalogs)', description: 'Guest Lounge: 上楼（有金色骨架雕像）后进入右侧第一个绿门。查看墙上的3个显示器。', summary: '休息室获取3份文件' },
          { type: 'text', text: '👹 **BOSS战：指挥官 (The Commander)**', summary: '指挥官BOSS战' },
          { type: 'text', text: '策略：主要使用手斧进行格挡（Parry）和反击。战斗分为几个阶段，会有过场动画分隔。BOSS 攻击频率会增加（2连击 -> 3连击）。', summary: '格挡反击' },
          { type: 'text', text: '烟雾阶段：BOSS 会释放烟雾并跑动射击，注意观察位置躲避并还击。', summary: '应对烟雾阶段' },
          { type: 'collectible', name: '武器 (Mortal Edge)', description: 'Boss Loot: 击败指挥官后从他身上拾取。比初始手斧伤害更高、耐久更好。', summary: '获取强化手斧' }
        ]
      },
      {
        title: '逃离垃圾场与寻找钥匙 (Escape Dump & Override Key) - Grace',
        stats: { safes: 1, weapons: 1, keyItems: 2, files: 1 },
        content: [
          { type: 'text', text: '切换至 Grace。沿路被托进通风管，穿过直到安全屋。', summary: '切换至格蕾丝' },
          { type: 'text', text: 'Sterilization Chamber: 遇到舔食者巡逻。用燃烧瓶解决第一只，小心地上的玻璃。', summary: '躲避舔食者' },
          { type: 'collectible', name: '保险箱 #4 (Sterilization Chamber)', description: 'Sterilization Chamber: 进门正对面的窗户上。\n密码（普通）：右10 - 左90 - 右20\n密码（疯狂）：左80 - 右50 - 左0', summary: '开启消毒室保险箱' },
          { type: 'collectible', name: '武器 (Bottle of Acid)', description: 'Chemical Storage: 进入下一个房间，入口桌子上。酸瓶可一击必杀舔食者，务必节省使用。', summary: '获取酸瓶' },
          { type: 'collectible', name: '关键道具 (Override Key)', description: 'Chemical Storage: 房间尽头绿色发光的面板。小心房内两个丧尸。', summary: '获取覆盖钥匙' },
          { type: 'text', text: '拿到钥匙后原路返回。利用走廊的绿门捷径。楼梯间会出现舔食者，用酸瓶解决。', summary: '返回使用钥匙' },
          { type: 'collectible', name: '关键道具 (Magnetic Key)', description: 'Dump Control Room: 使用 Override Key 后触发剧情，在同一房间墙上的绿色面板里。', summary: '获取磁卡' },
          { type: 'collectible', name: '文件 70/60 (Access Log)', description: 'Monitor Control Room: 用磁卡打开楼上的红门。进入大厅（红色地板），进左侧第一个绿门，查看右侧监视器。', summary: '监控室获取日志' },
          { type: 'collectible', name: '保险箱 #5 (Monitor Control Room)', description: 'Monitor Control Room: 同一房间的柜台上。这是最后一个保险箱。\n密码（普通）：左50 - 右60 - 左80\n密码（疯狂）：右20 - 左0 - 右70', summary: '开启监控室保险箱' },
          { type: 'collectible', name: '配方 (Bottle of Acid)', description: 'Monitor Control Room: 同一房间，保险箱左侧。', summary: '获取酸瓶配方' },
          { type: 'text', text: '💡 **生存提示**：建议现在制作尽可能多的酸瓶，接下来的区域有很多舔食者。', summary: '制作酸瓶提示' },
          { type: 'collectible', name: '文件 71/60 (Sterilization Chamber Safe)', description: 'Anteroom: 穿过绿门下楼。在 Bioweapon Repository 05 入口前的第一个拐角右侧箱子上。', summary: '获取保险箱线索' },
          { type: 'collectible', name: '升级道具 (Hip Pouch)', description: 'Bioweapon Repository 05: 进入满是集装箱和舔食者的大房间。打开左侧第一个集装箱。小心转角的舔食者。', summary: '获取背包扩容' },
          { type: 'collectible', name: '文件 72/60 (Monitor Control Room Safe)', description: 'Bioweapon Repository 05: 同一房间，中间一排最右侧的开放集装箱里。清理完房间内的敌人后获取。', summary: '获取监控室保险箱线索' },
          { type: 'collectible', name: '浣熊先生 25/25', description: 'Operations Room: 下一个房间会触发警报。最后一个浣熊先生在巨大的监视器前面。', summary: '作战室获取最后浣熊' },
          { type: 'collectible', name: '关键道具 (Noblesse Orb)', description: 'Operations Room: 浣熊先生旁边的红盒子里。', summary: '获取贵族宝珠' },
          { type: 'text', text: '拿到宝珠后，翻过左侧窗台。使用酸瓶处理舔食者。跳下低层，上楼梯时注意破窗而入的两只舔食者。', summary: '撤离作战室' },
          { type: 'collectible', name: '关键道具 (Animus Orb)', description: 'Cleanroom: 原路返回楼上的 Lab Entrance（最初用磁卡开红门的地方）。向北穿过 Bioweapon Repository 02 进入 Cleanroom，在红盒子里。', summary: '获取灵魂宝珠' },
          { type: 'text', text: '拿到宝珠后小心新刷出的丧尸。跑回 Lobby。', summary: '返回大厅' },
          { type: 'collectible', name: '文件 73/60 (Access Log: First Assembly Minutes)', description: 'Archives: 在 Lobby 使用两个宝珠开启 Archives。查看右墙上的最后一个监视器。⚠️ 必须在互动房间尽头的大控制台之前完成。', summary: '档案馆获取日志' }
        ]
      },
      {
        title: '中央精炼系统与最终决战 (Central Refining System & Finale)',
        stats: { trophies: 3, keyItems: 1, files: 2 },
        content: [
          { type: 'text', text: '切换回 Leon。爬出垃圾场，穿过安全屋和绿门，到达有舔食者的房间。', summary: '切换至里昂' },
          { type: 'collectible', name: '🏆 奖杯 (Cat Got Your Tongue?)', description: 'Licker Room: 当舔食者用舌头攻击时（伸舌头前摇），按 L1/LB 完美格挡切断舌头解锁。机会难得，需耐心引诱。', summary: '切断舔食者舌头' },
          { type: 'text', text: '跳下，按集装箱间控制台的红按钮。开启西侧门进入 Generator Room 按红按钮。上楼进入 Systems Management。', summary: '开启发电机' },
          { type: 'collectible', name: '关键道具 (Override Key)', description: 'Systems Management: 墙上。用于 Bioweapon Repository 11。', summary: '获取覆盖钥匙' },
          { type: 'text', text: 'Bioweapon Repository 11: 这是一个满是培养罐的房间。低难度下天花板有舔食者（可用爆炸物清理），疯狂难度下舔食者会在使用钥匙后刷出。', summary: '生物武器库战斗' },
          { type: 'text', text: '使用 Override Key。清理刷出的舔食者和破罐而出的丧尸。乘坐电梯。', summary: '使用钥匙乘电梯' },
          { type: 'collectible', name: '文件 74-75 (Alyssa’s Interview & Letter from Patrick)', description: 'Cutscene: 剧情自动获得。随后解锁奖杯 **Case Closed**。', summary: '自动获得最后文件' },
          { type: 'text', text: '切换回 Grace。沿路与 Leon 会合。', summary: '双人会合' },
          { type: 'text', text: '⚠️ **结局选择**：', summary: '结局分歧点' },
          { type: 'text', text: '1. **Destroy Elpis**: 立即结束游戏（坏结局）。计入疯狂难度通关，但不计入速通。', summary: '坏结局' },
          { type: 'text', text: '2. **Release Elpis**: 进入最终 BOSS 战（真结局）。解锁奖杯 **Hope** 和 **Requiem**。推荐先选 Destroy，读档后再选 Release。', summary: '真结局' },
          { type: 'text', text: '👹 **最终 BOSS：Victor**', summary: '最终BOSS战' },
          { type: 'text', text: 'P1 (人形): 类似暴君战，格挡近战，趁他吸电时输出。躲避直线雷电攻击。', summary: '一阶段打法' },
          { type: 'text', text: 'P2 (巨怪): 类似植物战，躲避触手拍击。射击身体各处轮流出现的发光弱点（头、地面、手臂）。', summary: '二阶段打法' },
          { type: 'text', text: 'QTE 结束后，通关游戏！恭喜！🎉', summary: '通关撒花' }
        ]
      }
    ]
  },
  {
    id: 'collectibles',
    title: '收集品汇总',
    sections: [
      {
        title: '保险箱密码一览',
        content: [
          { type: 'collectible', name: '保险箱 #1 (疗养院)', description: '位置：护士站\n密码：09-22-98' },
          { type: 'collectible', name: '保险箱 #2 (工厂)', description: '位置：主管办公室\n密码：左6-右4-左11' },
          { type: 'collectible', name: '保险箱 #3 (警察局)', description: '位置：西侧办公室\n密码：右9-左15-右7' }
        ]
      }
    ]
  },
  {
    id: 'mr-raccoons',
    title: '全浣熊先生收集指南 (All Mr. Raccoons)',
    sections: [
      {
        title: '护理中心 (Care Center)',
        content: [
          { type: 'collectible', name: '🦝 浣熊先生 #1 — Care Center (Leon)', description: '【疗养院 1F】复健室（Rehabilitation Ward）击败丧尸后进入走廊，**壁炉壁架上方**。', image: 'raccoon1' },
          { type: 'collectible', name: '🦝 浣熊先生 #2 — Care Center (Grace)', description: '【疗养院 1F】解锁东翼大门后，**东翼大厅（East Wing Lobby）接待台桌面上**。', image: 'raccoon2' },
          { type: 'collectible', name: '🦝 浣熊先生 #3 — Care Center (Grace)', description: '【疗养院 1F】**东翼等候室（Waiting Room）东侧的小房间内**。', image: 'raccoon3' },
          { type: 'collectible', name: '🦝 浣熊先生 #4 — Care Center (Grace)', description: '【疗养院 2F】**2楼小厨房（Kitchenette）内，咖啡机顶上**。', image: 'raccoon4' },
          { type: 'collectible', name: '🦝 浣熊先生 #5 — Care Center (Grace)', description: '【疗养院 1F】获得**3级ID手环**后，打开有墙洞的空牢房，在**床旁边**。', image: 'raccoon5' },
          { type: 'collectible', name: '🦝 浣熊先生 #6 — Care Center (Leon)', description: '【疗养院 2F】Grace进入地下室后切换Leon，到西翼2楼**档案室（Records Room）打开变形衣柜**。', image: 'raccoon6' }
        ]
      },
      {
        title: '护理中心地下室 (Care Center Basement)',
        content: [
          { type: 'collectible', name: '🦝 浣熊先生 #7 — Care Center Basement (Grace)', description: '【地下室】地下室西北侧**工坊（Workshop）的桌子上**，需用接头插销开门。', image: 'raccoon7' },
          { type: 'collectible', name: '🦝 浣熊先生 #8 — Care Center Basement (Grace)', description: '【地下室】**宿舍（Bunkroom）电视机顶部**，需用接头插销打开宿舍门。', image: 'raccoon8' }
        ]
      },
      {
        title: '庭院设施 (Courtyard & Facilities)',
        content: [
          { type: 'collectible', name: '🦝 浣熊先生 #9 — Courtyard (Grace)', description: '【庭院设施】在研究所找直升机钥匙时经过的**私人实验室（Private Lab）桌上**。', image: 'raccoon9' },
          { type: 'collectible', name: '🦝 浣熊先生 #10 — Courtyard (Leon)', description: '【庭院屋顶】切换为Leon后爬上屋顶阳台楼梯，用**狙击枪瞄准北方远处灯柱上的光点**。', image: 'raccoon10' }
        ]
      },
      {
        title: '东浣熊市 (East Raccoon City)',
        content: [
          { type: 'collectible', name: '🦝 浣熊先生 #11 — East Raccoon City (Leon)', description: '【东浣熊市】**Cafe Oasis 咖啡馆柜台后方货架上**。', image: 'raccoon11' },
          { type: 'collectible', name: '🦝 浣熊先生 #12 — East Raccoon City (Leon)', description: '【东浣熊市】**物流仓库（Logistics Warehouse）屋顶西侧**，用狙击枪瞄准西方高架桥上**一辆车顶**。', image: 'raccoon12' },
          { type: 'collectible', name: '🦝 浣熊先生 #13 — East Raccoon City (Leon)', description: '【东浣熊市（地下）】**地下停车场（Underground Parking Garage）储物间内的箱子堆上**。', image: 'raccoon13' },
          { type: 'collectible', name: '🦝 浣熊先生 #14 — East Raccoon City (Leon)', description: '【东浣熊市】**Cedarbrook 公寓顶层**爬梯上来右转，西南角**打开的冰箱里面**。', image: 'raccoon14' },
          { type: 'collectible', name: '🦝 浣熊先生 #15 — East Raccoon City (Leon)', description: '【东浣熊市】公寓外主街上**废弃巴士的驾驶座车窗处**。', image: 'raccoon15' },
          { type: 'collectible', name: '🦝 浣熊先生 #16 — East Raccoon City (Leon)', description: '【东浣熊市】**加油站（Gas Station）主建筑进门右侧顶层货架上**。', image: 'raccoon16' },
          { type: 'collectible', name: '🦝 浣熊先生 #17 — East Raccoon City (Leon)', description: '【东浣熊市】加油站向西走到路面**塌陷处（Sinkhole）**，用武器瞄准对面**暴露的下水管道内**。', image: 'raccoon17' },
          { type: 'collectible', name: '🦝 浣熊先生 #18 — East Raccoon City (Leon)', description: '【东浣熊市（地下）】下水道向西返回 **Ridgewood 车站**途中，**破损地铁车厢内部**。', image: 'raccoon18' },
          { type: 'collectible', name: '🦝 浣熊先生 #19 — East Raccoon City (Leon)', description: '【东浣熊市】攀爬 **Willis 大楼**第一段楼梯后右转再右转，**货架上**。', image: 'raccoon19' }
        ]
      },
      {
        title: '浣熊市中心与 R.P.D. (Raccoon City Center & R.P.D.)',
        content: [
          { type: 'collectible', name: '🦝 浣熊先生 #20 — Raccoon City Center (Leon)', description: '【浣熊市中心】摩托车追逐战结束后**向西走**，街道上**几辆破车旁边**。', image: 'raccoon20' },
          { type: 'collectible', name: '🦝 浣熊先生 #21 — R.P.D. (Leon)', description: '【R.P.D. 1F】R.P.D. **作战室（Operations Room）西侧墙边瓦砾下方**隐藏。', image: 'raccoon21' },
          { type: 'collectible', name: '🦝 浣熊先生 #22 — R.P.D. (Leon)', description: '【R.P.D. 2F】**图书馆中央书架底层东北侧**，需从书架缝隙中**蹲下射击**，极其隐蔽。', image: 'raccoon22' },
          { type: 'collectible', name: '🦝 浣熊先生 #23 — Raccoon City Center (Leon)', description: '【浣熊市中心】经过 **Kendo 枪店**出来后左转进小巷，**抬头看对面建筑2楼窗户/广告牌处**。', image: 'raccoon23' }
        ]
      },
      {
        title: 'ARK 设施 (ARK Facility)',
        content: [
          { type: 'collectible', name: '🦝 浣熊先生 #24 — ARK Facility (Leon)', description: '【ARK 设施】离开**装卸区（Loading Dock）**后走廊内，下楼梯前右侧**绿色箱子顶部**。', image: 'raccoon24' },
          { type: 'collectible', name: '🦝 浣熊先生 #25 — ARK Facility (Grace)', description: '【ARK 设施 B2】通过生化武器储藏室后进入 **B2 作战室（Operations Room）**，**电脑上方货架上**。', image: 'raccoon25' }
        ]
      }
    ]
  }
];
