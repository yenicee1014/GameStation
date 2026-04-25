export const hfwGuideData = [
  {
    id: 'intro',
    title: '基础操作与生存技巧',
    sections: [
      {
        title: '前言与概览',
        content: [
          { type: 'text', text: '欢迎来到《地平线：西之绝境》全成就/白金攻略。本攻略旨在提供清晰、互动的指引，涵盖推荐路线、物品收集顺序、成就触发时机等。' },
          { type: 'text', text: '预计100%完成时间：60-80小时。包含主线任务、支线任务以及大量的开放世界探索要素。' }
        ]
      },
      {
        title: '通用技巧 (General Tips)',
        content: [
          { type: 'collectible', name: '善用扫描', description: '经常使用 R3 扫描周围环境。这不仅能高亮显示可攀爬的黄色边缘，还能标记敌人的弱点和巡逻路径。' },
          { type: 'collectible', name: '元素克制', description: '每种机器都有特定的元素弱点。在战斗前扫描机器，查看其弱点属性，并切换相应的武器弹药，能事半功倍。' },
          { type: 'collectible', name: '零件撕裂', description: '许多珍贵的升级材料需要从机器身上“撕裂”下来，而不是摧毁。使用猎人弓或撕裂弓瞄准发光的黄色部件。' },
          { type: 'collectible', name: '篝火传送', description: '解锁篝火后，你可以随时免费快速传送到任何已解锁的篝火。在野外时，利用“快速移动行囊”也可以传送，但会消耗资源。' },
          { type: 'collectible', name: '勇气激增', description: '技能树中解锁的“勇气激增”是大招，积累勇气值后按 L1+R1 释放。在面对大型机器或大量敌人时非常有效。' }
        ]
      },
      {
        title: '收集品统计',
        content: [
          { type: 'text', name: '世界探索全收集', description: '• 12个 黑盒子 (Black Boxes)  • 9个 遗迹废墟 (Relic Ruins)\n• 6个 炼大炉 (Cauldrons)  • 9个 观景点 (Vista Points)\n• 4个 岗哨 (Rebel Outposts)  • 6个 营地 (Rebel Camps)\n• 4个 骑乘赛 (Gauntlet Runs)  • 4个 格斗场 (Melee Pits)' }
        ]
      }
    ]
  },
  {
    id: 'contents',
    title: '📋 目录导航',
    content: [
      { type: 'text', text: '🎯 攻略概览' },
      { type: 'text', text: '• 基础操作与生存技巧' },
      { type: 'text', text: '• 主线任务流程' },
      { type: 'text', text: '• 支线任务精选' },
      { type: 'text', text: '• 全收集品位置' },
      { type: 'text', text: '• 🏆 白金奖杯指南' }
    ]
  },
  {
    id: 'main-quests',
    title: '主线任务 (Main Quests)',
    sections: [
      {
        title: '摘星之志 (Reach for the Stars)',
        stats: { artifacts: 1, workbenches: 1 },
        content: [
          { type: 'text', text: '作为游戏的序章，埃洛伊和瓦尔来到远顶号遗址寻找盖亚的备份。' },
          { type: 'collectible', name: '扫描机器', description: '记得扫描遇到的第一只挖穴兽，这是图鉴收集的一部分。' },
          { type: 'collectible', name: '抓钩点', description: '按两下 X 跳跃并使用抓钩。这是本作新增的重要移动机制。' },
          { type: 'collectible', name: 'Boss战：滑牙兽', description: '利用酸蚀陷阱和弓箭攻击其腹部的酸液囊。' }
        ]
      },
      {
        title: '长矛的尖端 (The Point of the Lance)',
        stats: { workbenches: 1, trainingManuals: 1 },
        content: [
          { type: 'text', text: '回到子午城，在出发前往西部禁地前，埃洛伊需要升级她的长矛。' },
          { type: 'collectible', name: '工作台教程', description: '在这里你会学习如何升级武器。' },
          { type: 'collectible', name: '技能树', description: '解锁第一个勇气激增技能。' }
        ]
      },
      {
        title: '大使会议 (The Embassy)',
        stats: { collectibles: 2 },
        content: [
          { type: 'text', text: '前往不毛之地参加大使会议，由于特纳克部族的内乱，会议变成了战场。' },
          { type: 'collectible', name: '盾翼', description: '任务结束后获得盾翼（滑翔伞），按住 方块 键在空中滑翔。' }
        ]
      },
      {
        title: '死亡之门 (Death\'s Door)',
        stats: { artifacts: 2 },
        content: [
          { type: 'text', text: '潜入拉托波利斯遗迹，寻找盖亚的备份。' },
          { type: 'collectible', name: '点火器', description: '制作点火器以清除墙上的红色结晶（火光）。' },
          { type: 'collectible', name: 'Boss战：艾瑞克', description: '这是一场剧情杀战斗，专注于破坏支撑结构逃离。' }
        ]
      }
    ]
  },
  {
    id: 'collectibles',
    title: '全收集品位置 (Collectibles)',
    sections: [
      {
        title: '黑盒子 (Black Boxes)',
        stats: { collectibles: 12 },
        content: [
          { type: 'collectible', name: '黑盒子 1: 不毛之地', description: '在地图南部的一架坠毁飞机残骸中，需要用抓钩拉开舱门。' },
          { type: 'collectible', name: '黑盒子 2: 锯齿深谷', description: '在水下的飞机残骸里，需要潜水面罩。' },
          { type: 'collectible', name: '奖励', description: '收集所有12个黑盒子后，可以在纪念林找Untalla交换稀有资源和一把传奇爆破弹弓。' }
        ]
      },
      {
        title: '遗迹废墟 (Relic Ruins)',
        stats: { collectibles: 9 },
        content: [
          { type: 'collectible', name: '遗迹 1: 丹特', description: '位于丹特区域南部。这是一个推箱子解谜，需要将箱子推到特定位置以攀爬。' },
          { type: 'collectible', name: '遗迹 2: 只有沙子', description: '位于沙漠区域。需要利用火光点火器和拉caster。' },
          { type: 'collectible', name: '奖励', description: '每个遗迹废墟包含一个装饰品。收集所有装饰品并交给斯坦莫，可获得传奇粉碎护手。' }
        ]
      },
      {
        title: '长颈兽 (Tallnecks)',
        stats: { collectibles: 6 },
        content: [
          { type: 'collectible', name: '长颈兽 1: 丹特', description: '最简单的一个，利用周围的卫星盘建筑跳到它头上。' },
          { type: 'collectible', name: '长颈兽 2: 灼沙地', description: '需要先用弩炮击倒它，然后跳上去重启。' },
          { type: 'collectible', name: '奖励', description: '超控长颈兽可以以此为中心开图，显示周围所有的地图迷雾。' }
        ]
      }
    ]
  },
  {
    id: 'trophies',
    title: '🏆 白金奖杯指南',
    isTable: true,
    content: [
      { chapter: '全奖杯', location: '白金', code: 'All Trophies', reward: '获得所有奖杯' },
      { chapter: '主线', location: '达到等级 50', code: 'Level 50', reward: '玩家等级达到50级' },
      { chapter: '收集', location: '所有长颈兽', code: 'All Tallnecks', reward: '超控所有长颈兽' },
      { chapter: '战斗', location: '击败艾莎拉', code: 'Defeated Asera', reward: '完成所有叛军营地' },
      { chapter: '收集', location: '获得3个条纹', code: 'Won 3 Stripes', reward: '在所有狩猎场获得至少四分之一条纹' }
    ]
  }
];
