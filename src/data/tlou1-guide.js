export const tlou1GuideData = [
  {
    id: 'intro',
    title: '基础操作与生存技巧',
    sections: [
      {
        title: '前言与概览',
        content: [
          { type: 'text', text: '欢迎来到《最后生还者 第一部》(The Last of Us Part I) 重制版全成就/白金攻略。本攻略旨在协助玩家高效完成白金奖杯。' },
          { type: 'text', text: '预计白金时间：20-30小时。包含29个奖杯（无难度相关奖杯）。' },
          { type: 'text', text: '重制版移除了原版中的难度杯和多人模式杯，使得白金难度大幅降低。你可以在任意难度（包括最低难度）下完成所有奖杯。' }
        ]
      },
      {
        title: '通用技巧 (General Tips)',
        content: [
          { type: 'collectible', name: '辅助功能', description: '重制版引入了《最后生还者2》中强大的辅助功能。推荐开启“高对比度显示”和“增强聆听模式”，这能极大地简化收集过程。' },
          { type: 'collectible', name: '章节选择', description: '通关后，你可以通过“章节选择”来补齐遗漏的收集品。菜单中会详细显示每一章的收集进度。' },
          { type: 'collectible', name: '自动存档', description: '游戏支持频繁的自动存档。如果你意识到错过了某个物品或对话，可以尝试立即重新加载最近的检查点。' },
          { type: 'collectible', name: '小刀门 (Shiv Doors)', description: '游戏中共有13个需要用弹簧刀（Shiv）打开的门。务必保留足够的资源制作弹簧刀，不要在普通敌人身上浪费弹簧刀（除非你点了相关技能）。' }
        ]
      },
      {
        title: '全收集统计',
        content: [
          { type: 'text', name: '总计 254 个收集品', description: '• 97个 遗物 (Artifacts)\n• 30个 火萤挂坠 (Firefly Pendants)\n• 12本 训练手册 (Training Manuals)\n• 14本 漫画 (Comics)\n• 11个 工作台 (Workbenches)\n• 5级 工作台工具 (Workbench Tools)\n• 13个 弹簧刀门 (Shiv Doors)\n• 4个 保险箱 (Safes)\n• 54次 可选对话 (Optional Conversations)\n• 6次 艾莉的冷笑话 (Ellie\'s Jokes)' }
        ]
      }
    ]
  },
  {
    id: 'hometown',
    title: '第一章：家乡 (Hometown)',
    sections: [
      {
        title: '序章',
        stats: { artifacts: 0, pendants: 0, manuals: 0, comics: 0 },
        content: [
          { type: 'text', text: '⚠️ 免责声明：本章节没有任何成就或收集品，纯粹为了剧情服务。虽然你可以作为莎拉（Sarah）拿起和查看一些物品，但这些都不计入“Chronicles”成就。所以，如果你愿意，完全可以快速通过这部分。' }
        ]
      }
    ]
  },
  {
    id: 'quarantine-zone',
    title: '第二章：隔离区 (The Quarantine Zone)',
    sections: [
      {
        title: '20年后 (20 Years Later)',
        stats: { conversations: 1 },
        content: [
           { type: 'collectible', name: '可选对话 1/4', description: '在左侧检查站之前，向右走，等待一个男人走向一个女人。当乔尔靠近时，他们会交谈，然后问乔尔一个问题。' }
        ]
      },
      {
        title: '隔离区外 (Beyond the Wall)',
        stats: { artifacts: 2, pendants: 1, conversations: 2 },
        content: [
          { type: 'collectible', name: '遗物 1-2/8', description: '在逃离火萤袭击并钻过架子后面的洞后：我们会穿过一条隧道，在某个时刻，你必须捡起乔尔的装备。你会自动获得2个遗物（波士顿隔离区地图、军事小册子）。' },
          { type: 'collectible', name: '可选对话 2/4', description: '在捡起乔尔的装备后不久，你需要爬过地板上的一个洞，进入一家咖啡店。当泰丝走过商店门口时，对话提示就会弹出。' },
          { type: 'collectible', name: '火萤挂坠 1/3 (David Vigil)', description: '离开咖啡店后，你需要找梯子爬上建筑侧面。爬上去后，右转进入另一个房间。直走进卧室，挂坠就在床的左侧。捡起这个挂坠后，我们将获得“Fallen firefly”成就。' },
          { type: 'collectible', name: '可选对话 3/4 (孢子来源)', description: '当你因为孢子被迫戴上防毒面具时，你需要蹲下穿过建筑的一部分。你会看到一个死去的循声者/奔跑者靠在墙上，此时会出现对话提示。很难错过。' }
        ]
      },
      {
        title: '贫民窟 (The Slums)',
        stats: { artifacts: 4 },
        content: [
          { type: 'collectible', name: '遗物 #3: 征兵启事', description: '在穿过公共汽车后，地上的水坑附近。' },
          { type: 'collectible', name: '遗物 #4: 通缉海报', description: '在靠近那个卖食物的摊位附近的墙上。' },
          { type: 'collectible', name: '遗物 #5: 仓库钥匙', description: '剧情流程必得。' },
          { type: 'collectible', name: '遗物 #6: 码头纸条', description: '在遇到罗伯特之前的仓库区域，右侧桌子上。' }
        ]
      },
       {
        title: '货物 (The Cargo)',
        stats: { pendants: 1 },
        content: [
          { type: 'collectible', name: '火萤挂坠 #2', description: '当你第一次看到国会大厦时，在周围的草地上寻找。' }
        ]
      }
    ]
  },
  {
    id: 'the-outskirts',
    title: '第三章：外围 (The Outskirts)',
    sections: [
      {
        title: '外围',
        stats: { artifacts: 2, conversations: 1 },
        content: [
           { type: 'collectible', name: '遗物 1/9 (泰丝的清单)', description: '乔尔在夜晚醒来的过场动画结束后，转身回到他之前所在的房间。它就在放着台灯的边桌上。' },
           { type: 'collectible', name: '可选对话 1/4 (玛琳)', description: '无论你是否先拿起了清单：走向站在窗边的泰丝，对话提示应该会出现。' },
           { type: 'collectible', name: '遗物 2/9 (巡逻路线图)', description: '启动发电机并下电梯后。向右看，地上应该有一张纸条。' }
        ]
      },
      {
        title: '市中心 (Downtown)',
        stats: { artifacts: 4, pendants: 1, conversations: 1, shivDoors: 1, safes: 1 },
        content: [
           { type: 'collectible', name: '遗物 3/9 (撤离传单)', description: '很久之后，在与隔离区守卫战斗并逃跑后。在某个时刻，你会爬上一条位于摩天大楼下方的街道。在右侧，你会发现一个垃圾桶和一辆车之间有一张传单。' },
           { type: 'collectible', name: '火萤挂坠 1/4 (Lenz)', description: '走了一段路后，你会来到一座摩天大楼的入口。向右走，一直走到尽头的第一棵树。挂坠就在树上，右侧。如果太难找，可以在辅助功能选项中开启高对比度显示。' },
           { type: 'collectible', name: '可选对话 2/4 (金石大厦死去的士兵)', description: '完成后，进入摩天大楼并穿过门口。在下一个门口之前的右侧应该有一具尸体。会出现一个提示，你将开始一段可选对话。' },
           { type: 'collectible', name: '遗物 4/9 (战地行动日志)', description: '上楼梯，在第一段楼梯后，你会发现靠墙有一具尸体。旁边有一张纸条。' },
           { type: 'collectible', name: '弹簧刀门 1/2', description: '上楼梯，在某个时刻会发生一段关于循声者的过场动画。过场动画结束后，进入右侧的房间，然后左转进入下一个房间。面前的门需要弹簧刀才能打开。使用一把未使用的弹簧刀进入。' },
           { type: 'collectible', name: '遗物 5/9 (火萤地图)', description: '过了一会儿，你会进入摩天大楼地下的地铁站。向前走，你可以在左边捡到一个燃烧瓶。经过那里，继续向前走上被封锁的楼梯，右边的一具尸体旁有一张纸条。' },
           { type: 'collectible', name: '遗物 6/9 (给德里克的纸条)', description: '下一个房间将是一个感染者战斗室，有许多循声者、少数奔跑者，以及1个遗物和1个保险箱。进入房间后向左走，应该有一个奔跑者在我们想进入的商店前吃尸体。进入商店，走到收银台后面，打开抽屉，拿到一张写有保险箱密码的纸条。' },
           { type: 'collectible', name: '保险箱 1/1 (密码：03-43-78)', description: '现在，保险箱在房间的另一端，所以前往书店。这家店里会有一个奔跑者，但他基本上是在睡觉，很容易走过去暗杀。走到商店柜台后面，保险箱应该就在那里。' }
        ]
      },
      {
        title: '博物馆 (Museum)',
        stats: { artifacts: 1, pendants: 1, conversations: 2, shivDoors: 1, workbenches: 1 },
        content: [
           { type: 'collectible', name: '遗物 7/9 (医疗小册子)', description: '离开地铁回到街上后，会有一辆卡车挡路，你需要用箱子爬过去。翻到另一边，转身进入卡车内部。在卡车后部有一张纸条。' },
           { type: 'collectible', name: '工作台 1/1', description: '跑进大楼并结束过场动画后，在房间的左后方，离开这个房间的门口左侧，就是游戏中的第一个工作台。我们需要与之互动才能计入“Prepared for the Worst”成就。' },
           { type: 'text', text: '免责声明：正如指南开头所述，有一个名为“Combat ready”的成就，我们需要完全升级至少一把武器。如果你一直在每个房间寻找物资和零件，你应该可以轻松获得这个成就。左轮手枪是最快升级的枪，只需要155个零件和3级工具。我们还需要留意工具箱，以便从下一章开始获得更好的武器升级。' },
           { type: 'collectible', name: '火萤挂坠 2/4 (Kiper)', description: '向前走几步，我们进入一个楼层坍塌的房间。我们需要沿着斜坡向上走，靠左走。到达斜坡顶部后，转身，继续靠右，沿着小路爬到另一边，在陈列柜里拿到一个挂坠。' },
           { type: 'collectible', name: '弹簧刀门 2/2', description: '与泰丝和艾莉分开后，转身，走左边的第一扇门，经过双扇门，然后走左边的门。进入后，我们的右边将是另一个弹簧刀门。' },
           { type: 'collectible', name: '可选对话 3/4 (查看泰丝)', description: '与泰丝和艾莉汇合并清理完感染者后，前往房间左侧开着的窗户。不要爬窗户或离泰丝太近。等她们走到窗户前，会有2个可选对话。第一个是与泰丝的对话。当她探出窗外时，提示应该会出现。' },
           { type: 'collectible', name: '可选对话 4/4 (查看艾莉)', description: '第二个可选对话是与艾莉的。在与泰丝交谈后，提示应该很快就会出现。' }
        ]
      },
      {
        title: '国会大厦 (The Capitol Building)',
        stats: { artifacts: 2, pendants: 2 },
        content: [
           { type: 'collectible', name: '遗物 8/9 (火萤指令)', description: '过场动画和时间跳跃后，我们走下一段楼梯。就在这段楼梯的底部，向右转身，走向一具尸体，在附近找到一张纸条。' },
           { type: 'collectible', name: '火萤挂坠 3/4 (Davidson)', description: '移动翻斗车并爬过它回到街上后，我们将进入一个完全被淹没的大区域。我们要沿着路向前走，不要向右转进入国会大厦，而是向左转走向凉亭。里面水里的地板上有一个火萤挂坠；有点难看到。' },
           { type: 'collectible', name: '武器 (狩猎步枪)', description: '在国会大厦里会有很多战斗，所以做好准备。跳过一个小缺口后深入内部。在一具尸体旁可以捡到步枪；很难错过。' },
           { type: 'collectible', name: '遗物 9/9 (走私者笔记)', description: '离开国会大厦进入被淹没的地铁后，在某个时刻，你和艾莉会来到地铁的一部分，艾莉无法穿过。所以你必须找到木托盘来帮她过河。相反，去艾莉站着等待的左侧。靠墙应该有一具尸体。他旁边应该有一张纸条。' },
           { type: 'collectible', name: '火萤挂坠 4/4 (Jirang)', description: '在尸体旁（上一个遗物的位置），我们的左边会有一些被淹没的楼梯；我们需要游下去。游下去并径直穿过。在某个时刻你会看到左边有一个门口；进入那个房间。在这个房间的架子上会有一些零件和一个火萤挂坠。' }
        ]
      }
    ]
  },
  {
    id: 'bills-town',
    title: '第四章：比尔的小镇 (Bill\'s Town)',
    sections: [
       {
        title: '森林 (The Woods)',
        stats: { artifacts: 4, shivDoors: 2, conversations: 1, pendants: 1, safes: 1 },
        content: [
           { type: 'text', text: '我们现在在比尔的小镇，这是一个有趣的区域，有一些收集品，而且大多在同一个地方。穿过森林到达镇门后，环顾四周我们会发现一根带有刀片的管子。这很难错过，因为它就在我们需要走过的屋顶上，用来翻过栅栏。' },
           { type: 'collectible', name: '遗物 1/11 (药丸纸条)', description: '走进小镇后，我们会跳进一个稍微开阔的区域，前面有一个棚屋和一栋建筑。进入前面的建筑，进入左边的第一个房间。房间的另一端是本章的第一个笔记。' },
           { type: 'collectible', name: '弹簧刀门 1/2', description: '在这个区域有一些战利品，所以一定要查看建筑内外。警告：棚屋里有一个沉睡的循声者，所以一定要小心处理。搜刮完后，我们可以从建筑的左侧跳下去，跳下去后立即向左转，就能看到第一个弹簧刀门。' },
           { type: 'collectible', name: '可选对话 1/5 (The Turning)', description: '穿过上锁的大门后。这个区域很开阔，有很多战利品。你可以四处搜刮，或者直接走向我们进入该区域时正前方的两层建筑，去披萨店的一楼。在里面我们会找到一台名为“The Turning”的街机，站在它旁边，等艾莉走过来。提示应该就会出现。' },
           { type: 'collectible', name: '遗物 2/11 (给鲍勃的纸条)', description: '之后，沿着街道走到阻挡我们去教堂的木制路障处。一张写有该区域保险箱密码的纸条会卡在路障的一些铁丝网上。' },
           { type: 'collectible', name: '火萤挂坠 1/3 (Wang)', description: '捡起纸条，然后转身。我们面前会有一辆房车。爬上屋顶，那里有一个火萤挂坠。' },
           { type: 'collectible', name: '保险箱 1/1 (密码：05-17-21)', description: '完成后，从房车上跳下来，沿着街道往回走，直到我们走到驱逐通知牌处。在通知牌处，走向我们左边的小巷，在卡车的后端是本章唯一的保险箱。' },
           { type: 'collectible', name: '遗物 3/11 (边界纸条)', description: '之后，走进应该位于我们之前所在的木制路障左侧的唱片店。进去后，走到后面，然后向左转，拿到另一张纸条。' },
           { type: 'collectible', name: '弹簧刀门 2/2', description: '至此，我们已经完成了这个区域，所以在继续前进之前，请确保你已经四处搜刮过。我们现在将沿着唱片店左侧的小巷走。循声者爆炸后，在右边的红色桶处右转，使用弹簧刀打开门。' },
           { type: 'collectible', name: '武器 (弓)', description: '继续沿着小巷走，在某个时刻，我们会发现一具身上有一些箭的尸体；捡起来。然后我们需要爬上一辆卡车，在卡车顶上会有弓。' },
           { type: 'collectible', name: '遗物 4/11 (瑞秋的纸条)', description: '在经过循声者，跳下到小巷，并经过铁丝网后，向左转。这条小巷的尽头会有一扇门。上楼梯，进入左边的房间，然后向右急转，在一个桌子上，上方的墙上写着“Rachel”。' }
        ]
       },
       {
        title: '藏身处 (Safehouse)',
        stats: { artifacts: 3, conversations: 1, trainingManuals: 1, pendants: 1 },
        content: [
           { type: 'collectible', name: '遗物 5/11 (比尔的地图)', description: '与比尔的过场动画结束后，转身，左边的桌子上会有比尔之前在过场动画中使用的城镇地图；捡起来。' },
           { type: 'collectible', name: '遗物 6/11 (围栏笔记)', description: '现在，进入我们身后或右边的房间。咖啡桌上会有一张纸条。' },
           { type: 'collectible', name: '可选对话 2/5 (国际象棋)', description: '完成后，你可以走向比尔，左边房间中央附近有一个棋盘。会出现一个提示，乔尔会和艾莉谈论国际象棋。' },
           { type: 'collectible', name: '训练手册 1/1 (弹簧刀强化)', description: '在那之后，我们身后的吧台上将是我们的第一本关于弹簧刀的训练手册，同时获得“Self-help”成就。' },
           { type: 'collectible', name: '遗物 7/11 (猎人笔记)', description: '至此，酒吧区域的所有收集品都拿到了，搜刮剩下的东西或跟随比尔。爬上楼梯后，向右走，房间的桌子上有一张纸条。' },
           { type: 'collectible', name: '火萤挂坠 2/3 (Vincent)', description: '跟随比尔走一段路，直到我们走进一个开阔区域，是的，这是一个有感染者的战斗区域。击退它们或者跑来跑去让比尔做所有的工作以节省弹药。清理完该区域后，我们要走到救护车和蓝色货车之间，抬头看。路灯柱上应该挂着一个火萤挂坠。用砖块/瓶子或把它射下来。' }
        ]
       },
       {
        title: '墓园 (Graveyard)',
        stats: { tools: 1, workbenches: 1, artifacts: 4, pendants: 1, conversations: 3 },
        content: [
           { type: 'collectible', name: '工具箱 1/1 (1级工具)', description: '过场动画结束后，我们有了一把霰弹枪，走向比尔我们会得到钉子炸弹。这个区域有一些我们需要拿的东西，所以四处看看。但我们的第一个收集品将是游戏的第一个工具箱。捡起钉子炸弹后，径直向前走；它应该藏在左边房间的角落里。只需走到红色工具箱前并与之互动，就能让我们获得更高级的升级。注意：如果你错过了这个工具箱，游戏会在到达高中之前生成一个。' },
           { type: 'collectible', name: '工作台 1/1', description: '捡起后，向右转，靠墙会有本章唯一的工作台。与之互动以计入统计。' },
           { type: 'collectible', name: '遗物 8/11 (炸弹笔记)', description: '搜刮完底层后，和比尔一起上楼并穿过教堂。但在离开教堂之前，右边会有一个侧室，进入房间，左边的桌子上会有另一张纸条。' },
           { type: 'collectible', name: '火萤挂坠 3/3 (Mrozik)', description: '现在离开教堂，穿过墓地战斗到学校。有一些循声者，所以要小心。下一个区域右边会有一所我们可以进去的房子，这就是我们要找的。找到房子并进入，在房子的一楼，浴室里，马桶旁边会有一个火萤挂坠。' },
           { type: 'collectible', name: '遗物 9/11 (男孩的日记)', description: '在与感染者战斗并四处搜刮后，在某个时刻我们需要穿过一个树屋并进入学校前的一所房子。一定要先看看房子周围，因为这是一个不归点。上房子的二楼，进入右边的孩子房间。架子上会有一本日记。' },
           { type: 'collectible', name: '可选对话 3/5 (泰丝)', description: '我们现在要等艾莉上楼进入房间，开始一段乔尔关于泰丝的可选对话。只需在这里等一会儿，一旦她在房间里，提示就会出现。' },
           { type: 'text', text: '高中逃亡 (High School Escape): 进入学校后，我们必须杀出一条血路穿过一些感染者到达体育馆区域，所以在去体育馆之前先四处看看。进入体育馆后，我们必须对抗一波奔跑者，然后是游戏中的第一个巨无霸 (Bloater)。它们弱火，所以向它们扔一些燃烧瓶。' },
           { type: 'collectible', name: '可选对话 4/5 (艾莉开车)', description: '处理完巨无霸后，我们得到比尔的帮助并必须逃跑。我们爬梯子跑进一所房子，播放过场动画。过场动画后，走向卡车并在艾莉旁边等待。一旦比尔说完话，你会得到一个与她交谈的提示。' },
           { type: 'collectible', name: '遗物 10/11 (弗兰克的纸条)', description: '完成后，深入房子并在那里寻找物资。但我们要前往尽头的卧室，左边的桌子上会有弗兰克留下的纸条。' },
           { type: 'collectible', name: '可选对话 5/5 (比尔读弗兰克的纸条)', description: '捡起那个后，我们现在可以把刚才捡到的弗兰克的纸条给比尔，开始一段有趣的可选对话。' },
           { type: 'collectible', name: '遗物 11/11 (弗兰克的纸条-被揉皱)', description: '为了雪上加霜，我们可以捡起比尔刚刚扔掉的现在已经被揉皱的“弗兰克的纸条”。我们必须捡起这个，因为它计入遗物计数器，而且我们会因此获得“In Memorium”成就，这是一个有趣的成就。' }
        ]
       }
    ]
  },
  {
    id: 'pittsburgh',
    title: '第五章：匹兹堡 (Pittsburgh)',
    sections: [
       {
        title: '孤独与遗弃 (Alone and Forsaken)',
        stats: { artifacts: 10, conversations: 7, tools: 1, trainingManuals: 1, workbenches: 1, comics: 1, pendants: 1, shivDoors: 2, jokes: 3 },
        content: [
           { type: 'collectible', name: '遗物 1/17 (虹吸管)', description: '本章开始时自动获得。' },
           { type: 'collectible', name: '遗物 2/17 (游客清单)', description: '解决猎人后，寻找战利品。我们需要打开一个卷帘门才能继续，这是一个不归点。通过卷帘门后，向右转，房间尽头的台面上有一张纸条。' },
           { type: 'collectible', name: '可选对话 1/14 (猎物)', description: '捡起纸条后，艾莉会走到有尸体的桌子旁，此时会出现对话提示。' },
           { type: 'collectible', name: '工具箱 1/1 (2级工具)', description: '对话结束后，左边应该是第二个工具箱（2级）。' },
           { type: 'collectible', name: '训练手册 1/4 (医疗夹板)', description: '就在那右边，我们可以捡到一个烟雾弹。搜刮完一楼后，上楼去房间。在左边的床上是我们的第二本训练手册。' },
           { type: 'collectible', name: '遗物 3/17 (伏击地图)', description: '搜刮完这个房间后，前往下一个房间，那里有一个工作台和一张地图。地图在右边。' },
           { type: 'collectible', name: '工作台 1/3', description: '工作台就在正前方。' },
           { type: 'collectible', name: '漫画 1/3 (Termination Shock)', description: '在某个时刻，我们会离开大楼跳到下面的高速公路上。在路上，右侧前方有一辆公交车。我们的第一本漫画就在公交车内部的后面。捡起它会获得“Savage Starlight Fan”成就。' },
           { type: 'collectible', name: '可选对话 2/14 (军方的所作所为)', description: '现在在公交车的另一边是一辆棕色的车。站在车旁边等艾莉过来。她会说些什么，然后会出现一个提示。' },
           { type: 'collectible', name: '可选对话 3/14 (笑话 1/4)', description: '继续沿路走，一群猎人会出现巡逻。你可以等他们走远或杀了他们；无论哪种方式，我们都需要在公交车旁停留足够长的时间，等艾莉拿出笑话书。讲完一个笑话后，她上方会出现一个提示，让你问她关于书的事。这是我们需要听到的 1/6 个笑话，用于解锁“That’s all I got”成就。' },
           { type: 'collectible', name: '遗物 4/17 (失落山丘的纸条)', description: '完成后，爬上公交车，前往右边的小警卫室，走到柜台后面，地板上有一个笔记本。' },
           { type: 'collectible', name: '可选对话 4/17 (口粮)', description: '艾莉会走到警卫室旁墙上的一些字迹前。走向她，在她说完话后，会出现一个提示。' },
           { type: 'text', text: '免责声明：一旦过了大门，前面的区域有很多猎人。我们必须杀死该区域的所有人，笑话/可选对话才会出现。' },
           { type: 'collectible', name: '遗物 5/17 (叛徒传单)', description: '这个区域的第一个收集品就在我们进入的地方附近。向前走，海报就在通往另一边开阔区域的两条分岔路之间的墙上。' },
           { type: 'collectible', name: '火萤挂坠 1/3 (Risk)', description: '下一个在庭院的另一边。图书馆左边有一条小巷，走到书店左边，沿着小巷走，尽头的垃圾桶旁有一个火萤挂坠。' },
           { type: 'collectible', name: '遗物 6/17 (弃守区笔记)', description: '接下来，进入书店，去大楼右后方的工作人员房间。右边咖啡机旁的厨房里有一张纸条。' },
           { type: 'collectible', name: '遗物 7/17 (申请人清单)', description: '下一张纸条在你进入书店时右侧的楼梯下。如果你看楼梯下面，你会发现架子上有纸条。' },
           { type: 'collectible', name: '弹簧刀门 1/4', description: '一楼搜刮完了，上楼。上楼梯，最右边是一个锁着的厕所，可以用弹簧刀打开。' },
           { type: 'collectible', name: '可选对话 5/14 和 笑话 2/4', description: '现在我们需要等艾莉讲另一个笑话。等待时间只有在区域清理干净后才开始倒计时，所以你可能会早点或晚点得到这个提示。只需等待并聆听，直到她开始讲笑话，提示就会出现。这既算作笑话也算作可选对话。' },
           { type: 'collectible', name: '可选对话 6/17 (为了外表)', description: '在书店完成后，上楼继续前进。我们将到达一个开阔区域，播放过场动画，一些猎人越过木板上了一辆公交车。过场动画结束后，转身向右走，去一家橱窗里有模特海报的商店。等艾莉看海报，然后会出现提示。' },
           { type: 'collectible', name: '可选对话 7/14 和 笑话 3/4', description: '现在我们又要等艾莉讲另一个笑话了。在等艾莉的时候在这个后方区域四处看看。过了一会儿，艾莉终于会拿出笑话书，提示就会出现。' },
           { type: 'collectible', name: '弹簧刀门 2/4 和 遗物 9/17 (母亲的信)', description: '笑话结束后，向前走到一辆警车旁的黄色出租车处。在这里左转，蓝色布屋顶下有一扇带有红色“X”的门。我们可以用弹簧刀解锁它。解锁后，径直向前走，黄色椅子上有一张纸条。' },
           { type: 'collectible', name: '遗物 10/17 (藏匿点笔记)', description: '我们需要通过卡车后部进入一家咖啡店。进入商店并前往一楼。到达后，沿着路走，右边的长凳上有一张关于弹簧刀门的纸条。' }
        ]
       },
       {
        title: '酒店大堂 (Hotel Lobby)',
        stats: { conversations: 3, safes: 1, trainingManuals: 2, jokes: 1, artifacts: 2, workbenches: 1, comics: 1, pendants: 1 },
        content: [
           { type: 'collectible', name: '可选对话 8/14 (咖啡小姐)', description: '现在我们在酒店大堂，向左转，柜台后面有一台咖啡机。靠近时会出现提示。' },
           { type: 'collectible', name: '保险箱 1/1 (密码：22-10-56) 和 训练手册 2/4 (弹簧刀加固)', description: '完成后，回到入口，去右边的柜台后面找保险箱。保险箱里有一本训练手册，一定要拿上。' },
           { type: 'collectible', name: '可选对话 9/14 和 笑话 4/4', description: '一楼完成后，寻找梯子继续前进或寻找物资。爬上电梯旁的梯子后，在电梯旁站一会儿，等艾莉最后一次拿出笑话书。书拿出来后，提示就会出现。' },
           { type: 'collectible', name: '遗物 11/17 (给员工的便条)', description: '我们要穿过酒店大堂到另一边。向前走，贴着左边的墙（楼梯曾经所在的位置）爬过去。另一边有一张写有保险箱密码的纸条。' },
           { type: 'text', text: '现在我们完成了大堂部分。在某个时刻，你会爬上楼梯到一个有很多猎人的开放屋顶。这次遭遇战非常适合完成“Build em up, Break em down”成就（如果你还没有升级并使用 5 种不同的近战武器杀敌）。这里可以找到 2x4 木板、金属管和棒球棒。卧室里会生成升级所需的材料。' },
           { type: 'collectible', name: '可选对话 10/14 (简单的方法)', description: '免责声明：我们必须清理两层楼才能触发可选对话。处理完后，上楼。顶层有一个我们本可以用来爬上来的洞的房间。这个洞旁边是一个浴室，左边是一个浴缸，里面有两具尸体。艾莉走到浴缸旁说话，上方出现提示。' },
           { type: 'collectible', name: '遗物 12/17 (酒店房卡)', description: '搜刮完物资后，我们将不得不打开电梯，这是一个不归点。打开并播放我们掉下去的过场动画后，我们将进入一个有发电机的房间，我们必须打开它才能离开这个区域，但首先，我们要去这一层上面的安保室，拿到离开所需的房卡。' },
           { type: 'collectible', name: '工作台 2/3', description: '现在有了房卡，我们必须打开发电机才能离开，但这样做会生成一个巨无霸。你可以跑向出口或战斗；取决于你。离开该区域后，我们将跑上一些楼梯，需要穿过右边的第一个房间，右边是一个工作台。记得与它互动才算找到。' },
           { type: 'collectible', name: '漫画 2/3 (Accretion)', description: '完成后，向前穿过厨房和用餐区，同时处理猎人。找到梯子离开，过场动画结束后，爬上梯子到下一层。穿过左边的第一扇双开门后，进入左边的房间，爬到另一边。到了另一边，漫画就在左边的桌子上。' },
           { type: 'collectible', name: '火萤挂坠 2/3 (Reed)', description: '我们要从一些坏掉的楼梯跳到下面一层。完成后，我们会在左边发现两个浴室。我们要走进第二个，也就是女厕所。挂坠在倒数第二个隔间里，马桶左边。' },
           { type: 'collectible', name: '训练手册 3/4 (近战结)', description: '完成后，回到大厅，左边的第一张桌子上是下一本训练手册。' },
           { type: 'collectible', name: '可选对话 11/14 (背景幕)', description: '在这个小厅区域完成后，我们可以走进下一个开放房间。向右转，走向背景幕。等艾莉走到背景幕前获得提示。注意：会有 3 次不同的提示出现，一定要做完所有 3 次才算作 1 个可选对话。' }
        ]
       },
       {
        title: '金融区 (Financial District)',
        stats: { artifacts: 4, conversations: 3, workbenches: 1, shivDoors: 1 },
        content: [
           { type: 'collectible', name: '遗物 13/17 (火萤笔记)', description: '我们要去 Don Fiocchi 商店后面的冷冻室。该建筑位于该区域的右后方，就在该区域尽头被封锁的道路旁边。冷冻室里有一张纸条。' },
           { type: 'collectible', name: '可选对话 12/14 (悬挂的尸体)', description: '回到之前猎人所在的悬挂尸体处。等艾莉走上前去触发提示。' },
           { type: 'collectible', name: '工作台 3/3', description: '在那之后，这个区域的收集品就完成了，记得四处搜刮物资。完成后，前往该区域的最左侧，穿过金属卷帘门。在里面，我们需要抓住推车并将其推到墙边以便翻越。翻过墙后，我们的右边是一个工作台。' },
           { type: 'collectible', name: '遗物 14/17 (最终攻击笔记)', description: '向前走，我们会跳过一张桌子并受到攻击。解决后，上银行楼上，这层楼还有 2 个猎人。处理完后，去办公室，这个房间后面，破窗户旁边有一张纸条。' },
           { type: 'collectible', name: '遗物 15/17 (暴徒攻击笔记)', description: '现在我们要离开银行到达下面的道路。我们要沿着它走一段路。在一个十字路口，右边有一栋看起来二楼被炸毁的建筑，我们要进去。进去后，上楼梯到一楼，左边柜台后面，地板上有一个遗物。' },
           { type: 'collectible', name: '遗物 16/17 (卡车笔记)', description: '解决那个后，回到街上继续沿着路走。路尽头有一栋名为 Ration Depot 的建筑，我们要进去。进去后，笔记在右边的柜台上。' },
           { type: 'collectible', name: '弹簧刀门 3/4', description: '然后去后面，有一扇可以用弹簧刀打开的门。' },
           { type: 'collectible', name: '可选对话 13/14 (军事学校)', description: '在建筑物外面，坦克旁边的墙上有一些文字，有一个与艾莉谈论它的提示，但这不算作可选对话。不管怎样我还是会做。完成后，把艾莉托上去并爬上梯子。跳下去，右边是一所军事学校的大门。等艾莉走到标志前触发对话提示。' },
           { type: 'collectible', name: '可选对话 14/14 (Dawn of the Wolf: Part 2)', description: '之后，转身，你应该看到一张“Dawn of the Wolf: Part 2”的海报。走过去进行另一段可选对话。' }
        ]
       },
       {
        title: '逃离城市 (Escape The City)',
        stats: { trainingManuals: 1, shivDoors: 1, comics: 1, pendants: 1, artifacts: 1 },
        content: [
           { type: 'text', text: '穿过小巷，小心炮塔。穿过窗户进入后面的小巷。继续跑下小巷并进入右边的建筑。上楼并与更多猎人战斗。穿过办公室并通过防火梯离开。穿过几块木板到一个开着的窗户。搜刮这间公寓，然后穿过厨房附近的窗户离开，爬到另一个窗户，过场动画开始。' },
           { type: 'collectible', name: '训练手册 4/4 (燃烧瓶构造)', description: '过场动画结束后，一定要在这里搜刮，因为这里有一些好东西，所以搜刮每个房间。在我们离开之前，这间公寓的厨房里有一本训练手册。' },
           { type: 'collectible', name: '弹簧刀门 4/4', description: '清理完后，我们离开公寓下楼一层。我们面前有一扇可以用弹簧刀打开的门，里面有一本漫画书。' },
           { type: 'collectible', name: '漫画 3/3 (Deep Phase)', description: '漫画在右边的卧室里，一旦我们在房间里向左转。' },
           { type: 'collectible', name: '火萤挂坠 3/3 (Rios)', description: '完成后，下楼到玩具店，然后从后面出去。这里有 3 个猎人，很容易处理。处理完后，我们必须走进一栋建筑，然后走进左边的第一个浴室，我们可以进去拿到一个挂坠。' },
           { type: 'collectible', name: '遗物 17/17 (审判笔记)', description: '与其他人会合进入建筑公司。在这里，穿过我们面前的门口，右边的地板上有一张纸条。' },
           { type: 'text', text: '“Lights out”成就：拿到最后一张纸条后，跟随亨利之前先搜刮物资。跟随他穿过另一个门口，过场动画发生，现在是晚上了。建议在这里存档。跟随亨利到一楼，有两个猎人；选一个，亨利会杀另一个。对于这个区域，有一个特殊条件成就叫“Lights out”，即在潜行状态下关闭大门附近的发电机。如果不小心被发现，可以重新加载上一个检查点。发电机在大门左侧，聚光灯正下方。' }
        ]
       }
    ]
  },
  {
    id: 'the-suburbs',
    title: '第六章：郊区 (The Suburbs)',
    sections: [
       {
        title: '下水道 (Sewers)',
        stats: { comics: 1, artifacts: 6, pendants: 3, tools: 1, trainingManuals: 1 },
        content: [
           { type: 'collectible', name: '漫画 1/2 (Antiparticles)', description: '醒来并与亨利和山姆会合后，走向搁浅的船，跳上船顶，然后进入左边的船长室找到漫画书。' },
           { type: 'collectible', name: '遗物 1/10 (船上的纸条)', description: '转身看向船长椅，座位上有一张纸条。' },
           { type: 'collectible', name: '火萤挂坠 1/4 (Scheffler)', description: '现在下到甲板下面，入口附近有一个火萤挂坠。它很难看到；你可以四处寻找提示或打开高对比度模式。' },
           { type: 'collectible', name: '火萤挂坠 2/4 (Righetti)', description: '在周围完成后，前往亨利那里进入下水道。进去后，我们会看到一个分岔路口，但在那之前，右边我们会看到水从侧面涌出。我们要爬上这个洞。在左边，一些水会从破损的墙壁涌出，火萤挂坠就挂在它下面。' },
           { type: 'collectible', name: '遗物 2/10 (下水道纸条)', description: '现在在分岔路口，我们要走右边的路。我们会看到右边有一个被围起来的区域，如果我们移开通风口盖，艾莉可以爬过通风口打开门。这样做，走进被围起来的区域，左后方的桌子上有一张纸条。' },
           { type: 'text', text: '注意：搜刮这个区域，然后走左边的路与其他人会合。你将进入一个被淹没的开阔区域。进入时左边有一根大金属杆。记住这个，因为我们稍后需要它来获得一个成就。' },
           { type: 'collectible', name: '火萤挂坠 3/4 (Fuentes)', description: '当我们进入这个区域时，我们要从左边跳进水里并潜下去。水下有一辆车，车旁边有一个火萤挂坠。' },
           { type: 'collectible', name: '遗物 3/10 (交易纸条)', description: '大门升起后，游进下一个区域并上楼。右边有一扇门。穿过门，但要小心循声者。一旦安全，走到房间的另一端，右边的蓝色桶旁边有一张纸条。' },
           { type: 'text', text: '“Waterlogged”成就：当艾莉跳下木托盘时，立即转身游向亨利和山姆。然后爬上他们站着的大金属平台，如果够快，可以搭个便车到另一边，并因此获得“Waterlogged”成就。' },
           { type: 'collectible', name: '工具箱 1/1 (3级工具)', description: '到达另一边后，我们要径直走，走进左边的第一个房间，里面有一个工具箱。' },
           { type: 'collectible', name: '训练手册 1/2 (炸弹遏制)', description: '继续走，在某个时刻我们会打开一扇门并触发声音陷阱，但什么也没发生。困惑中，我们向前走，在跳过另一张桌子后的左边桌子上会有短管霰弹枪，一定要捡起来。经过短管霰弹枪，左边有两个架子，训练手册就在第一个架子上。' },
           { type: 'collectible', name: '遗物 4/10 (雨水收集器纸条)', description: '拿到前面的物资，然后折返穿过我们发现短管霰弹枪旁边的隧道。在某个时刻你会进入一个分岔路口的房间，一条路向右。在这个房间里，一波感染者会从两边攻击。处理完后，你可以走右边的路，右边雨水收集器旁边有一个遗物。' },
           { type: 'collectible', name: '遗物 5/10 (被困者的纸条)', description: '回去走前面的路。楼梯顶端，经过一些床垫，左边有一个房间，进去，左边尸体旁有一张纸条。' },
           { type: 'collectible', name: '遗物 6/10 (孩子的画)', description: '一旦我们与亨利和艾莉分开并与山姆在一起，就会有一个有很多潜行者的大区域，所以要睁大眼睛。处理完所有敌人后，一定要搜刮该区域。游戏室在该区域的左后方，架子顶上有一幅孩子的画。' }
        ]
       },
       {
        title: '郊区 (Suburbs)',
        stats: { artifacts: 4, conversations: 4, jokes: 1, workbenches: 1, trainingManuals: 1, comics: 1, safes: 1, pendants: 1 },
        content: [
           { type: 'collectible', name: '遗物 7/10 (搜刮笔记)', description: '我们现在在郊区，有很多东西要收集和搜刮。左边的第二栋建筑是我们要进入的。上楼进入左边的卧室，有一张纸条。' },
           { type: 'collectible', name: '可选对话 1/4 (爆发后)', description: '搜刮完后，回到街上并沿着街走，直到我们看到一栋上面有红色文字的孤立房子。站在附近，等亨利走过来，提示就会出现。' },
           { type: 'text', text: '可选对话和笑话要求：现在转身，前面的房子侧面有一个洞，走进这个洞，等亨利走进房间并谈论更多关于过去的事情。我们需要他这样做才能让艾莉讲主线游戏的最后一个笑话。' },
           { type: 'collectible', name: '可选对话 2/4 (冰淇淋)', description: '现在让我们沿着街走到冰淇淋车旁，等孩子们走过来交谈。过了一会儿，艾莉上方会出现一个提示。' },
           { type: 'collectible', name: '可选对话 3/4 和 笑话 1/1', description: '沿着路走到之前有狗的地方。拐角处会有火萤标志，亨利会谈论火萤。这之后，应该会让艾莉给我们讲最后一个笑话。所以，在这里等一会儿，直到 AI 想给我们讲最后一个笑话和可选对话。注意：要获得“That’s all I got”成就，我们必须在 Left Behind DLC 中获得最后一个笑话。' },
           { type: 'collectible', name: '工作台 1/1', description: '完成后，我们现在可以回到冰淇淋车所在的路上，向右转进入开放的车库，里面有一个工作台。记得与它互动才算找到。' },
           { type: 'collectible', name: '训练手册 2/2 (近战技巧)', description: '完成后，上开放车库右边的楼梯，进入右边的房子并上楼。就在我们右上方有一根绳子，拉它，它会掉在我们身上。之后，把艾莉托上去，过了一会儿，她会给我们一本训练手册。' },
           { type: 'collectible', name: '遗物 8/10 (父亲的纸条)', description: '之后，进入我们身后的房间，电脑桌上有一张纸条。' },
           { type: 'collectible', name: '遗物 9/10 (火柴盒)', description: '搜刮完这个地方后，我们要去隔壁的房子，一直上楼梯到顶层。在顶层，我们的右边是一个火柴盒，上面有这所房子里的保险箱密码。' },
           { type: 'collectible', name: '漫画 2/2 (Messenger Particle)', description: '我们现在要下一层楼，走第一个右转，在房间的另一边，桌子上有一本漫画。' },
           { type: 'collectible', name: '遗物 10/10 (幸存者笔记)', description: '现在我们要离开这个房间，进入浴室左边的房间，进入另一间卧室。左边角落里，架子后面有一张纸条。' },
           { type: 'collectible', name: '保险箱 1/1 (密码：8-21-36)', description: '我们现在要打开这个房间里的保险箱。只需转身，在床另一边的抽屉里就是保险箱。打开主线游戏的最后一个保险箱后，我们将获得“Sticky fingers”成就。' },
           { type: 'collectible', name: '可选对话 4/4 (飞镖)', description: '下楼到一楼，去门口左边的飞镖盘。山姆和艾莉应该已经玩完游戏了，所以现在乔尔可以向飞镖盘扔飞镖，这算作一个可选对话。' },
           { type: 'collectible', name: '火萤挂坠 4/4 (White)', description: '清理完搜刮区域后，回到外面，然后去房子右边的后院，在房子和之前的火萤标志之间。这个院子里有一棵树，左边有一个火萤挂坠。很难看到，但它就在那里。' }
        ]
       }
    ]
  },
  {
    id: 'tommys-dam',
    title: '第七章：汤米的水坝 (Tommy\'s Dam)',
    sections: [
       {
        title: '水电站 (Hydroelectric Dam)',
        stats: { comics: 1, shivDoors: 1, conversations: 4, artifacts: 2, trainingManuals: 1, workbenches: 1, pendants: 1 },
        content: [
           { type: 'text', text: '我们现在在汤米的水坝章节。我们首先要沿着路向前走，直到我们到达一辆吉普车，在尸体旁将是 El Diablo 枪。' },
           { type: 'collectible', name: '漫画 1/2 (Foreign Element)', description: '沿着河走，直到桥边。在桥底之前，向右转上山。你会看到一辆抛锚的车，走上前去，旁边有一本漫画书。这本漫画书有 bug，所以要站在它上面才能捡到。' },
           { type: 'collectible', name: '弹簧刀门 1/1', description: '继续沿着河走，直到我们到达大坝。我们要爬上台阶，但在楼梯顶端，右边有一个弹簧刀门，打开它。' },
           { type: 'text', text: '“Left hanging”成就：桥一旦完成，手动存档以防万一，因为我们必须在另一边做一件可怕的事情来获得成就。走到另一边，艾莉会要求击掌。我们从她身边走过，让她晾在那儿。一旦她抱怨我们不理她，我们就获得了“Left hanging”成就。' },
           { type: 'collectible', name: '可选对话 1/4 (小坟墓)', description: '过河后，走左边的路，经过一个小营地，在一根圆木上会有一个小坟墓。在坟墓旁等艾莉，然后提示应该会出现。' },
           { type: 'collectible', name: '遗物 1/2 (发电厂地图)', description: '返回并走右边的路。我们需要从树下钻过去，另一边我们的右边是一个大门，左边是一个小木屋。走进小木屋，拿起墙上的发电厂地图。' },
           { type: 'collectible', name: '可选对话 2/4 (温斯顿的马)', description: '捡起地图后，前往大门，播放过场动画。结束后，我们将不得不跟随汤米在工厂里走一段路。在某个时刻，艾莉会因为看到马而兴奋并跑开，走向她，她上方会出现一个提示。' },
           { type: 'collectible', name: '可选对话 3/4 (我看到了相似之处)', description: '与汤米交谈后，我们将继续跟随他穿过工厂直到外面。在桥上外面时，右边中间附近会有一位女士。我们要走过去和她交谈。' },
           { type: 'collectible', name: '可选对话 4/4 (巴克利)', description: '现在回去跟随汤米。到了另一边，汤米会评论一只叫巴克利的狗。如果我们给这只乖狗狗拍拍头，我们将获得“Who’s a good boy”成就，这算作一次对话。' },
           { type: 'collectible', name: '训练手册 1/1 (烟雾化学)', description: '好了，现在进入工厂并走到左侧。左边的储物柜顶上有一本训练手册。' },
           { type: 'collectible', name: '工作台 1/2', description: '手册右边是一个工作台。' },
           { type: 'collectible', name: '火萤挂坠 1/2 (Oliverio)', description: '现在我们正下方有一个房间，我们需要进去。下楼梯，旁边应该有一个房间。走进去，挂坠应该在左边两个蓝色发电机之间。' },
           { type: 'collectible', name: '遗物 2/2 (工厂图纸)', description: '过了一会儿，大坝会受到攻击，我们必须帮忙。很多袭击者会出现，我们基本上必须一路杀回游览开始的地方，所以这需要一些时间。一旦我们清理了这个房间的人，在离开大楼之前，桌子上有一张之前有人看过的地图。我们现在可以捡起这张地图。' },
           { type: 'text', text: '从右边的门离开工厂，这里应该有一把斧头靠在叉车上。捡起来。如果你已经用其他 4 种近战武器杀过敌，升级它，用它杀敌，你应该会获得“Build em up, Break em down”成就。如果没有，后面还有时间。' }
        ]
       },
       {
        title: '牧场 (Ranch House)',
        stats: { pendants: 1, comics: 1 },
        content: [
           { type: 'collectible', name: '火萤挂坠 2/2 (Pino)', description: '跟随汤米一段时间后，我们会在一个牧场停下来并进去。我们要去最里面的房间，在右侧。房间里有一个壁炉，挂坠在靠墙的桌子上，通往里面的两扇门之间。' },
           { type: 'collectible', name: '漫画 2/2 (Zero Point)', description: '接下来，我们要上楼进入左边的第一个房间。漫画在床的左侧，抽屉顶上。' },
           { type: 'text', text: '房子将受到袭击者的攻击。击退他们。一些袭击者会掉落一些近战武器，如果你还没有获得“Build em up, Break em down”成就，你可以用来升级。' }
        ]
       }
    ]
  },
  {
    id: 'the-university',
    title: '第八章：大学 (The University)',
    sections: [
       {
        title: '上路 (Go Big Horns)',
        stats: { comics: 1, workbenches: 1, artifacts: 5, conversations: 2, pendants: 4, trainingManuals: 1 },
        content: [
           { type: 'collectible', name: '漫画 1/1 (Free Radicals)', description: '我们现在在大学，这个区域很大，有很多骑马的路要走。首先，我们需要原路返回。转身沿路往回走。在某个时刻，在死胡同附近会有一辆卡车和一辆车。车里有一本漫画。' },
           { type: 'collectible', name: '工作台 1/2', description: '现在让我们回到正轨。我们骑马进入大学，经过一道金属门。过去后会有一个我们可以跳过的障碍物，但我们要向右走。我们会停在一个车库附近。下马进去。叉车旁边是喷火器，左边的墙上是一个工作台。' },
           { type: 'collectible', name: '遗物 1/9 (狙击手巢穴日志)', description: '接下来，我们需要上楼去屋顶。楼梯在这个房间的右边。上完所有楼梯，走右边的第一扇门。阳台尽头有一把椅子和一张纸条。' },
           { type: 'collectible', name: '可选对话 1/3 (Go Big Horns)', description: '现在我们要回到马上，跳过障碍物后，我们要看左边的队伍横幅。看着它，足够近的时候，会出现一个提示。' },
           { type: 'collectible', name: '火萤挂坠 1/5 (H.Pino)', description: '让我们继续前进，上楼梯。上楼梯后，向右转，会有很多树。骑到右边的最后一棵树。树的左侧有一个火萤挂坠。射击它或使用附近的投掷物让它掉下来。' },
           { type: 'collectible', name: '遗物 2/9 (墙板笔记)', description: '在某个时刻，我们会听到一些感染者的声音，把马和艾莉留在后面去清理。一旦我们控制了局面，向右跑，到控制面板，大门左边有一张纸条。' },
           { type: 'collectible', name: '火萤挂坠 2/5 (Rohner)', description: '回到马上，沿着路向前走，直到你爬上一些楼梯。不要跳过障碍物。相反，下马爬上我们右边的蓝色垃圾箱，进入上面的窗户。一旦进入房间，右边的桌子上是下一个挂坠。' },
           { type: 'collectible', name: '训练手册 1/2 (健康消毒)', description: '既然完成了，现在我们可以回到马上跳过去。我们要向右骑，到一栋两层楼的建筑。到了那里，下马，穿过破损的窗户，上楼。爬上屋顶，通过窗户进入左边的宿舍。这里有一些好的物资，但我们想要的是训练手册，我们一进去就在右边的桌子上。' },
           { type: 'collectible', name: '可选对话 2/3 (生命迹象)', description: '既然结束了，我们可以继续到下一个区域。我们可以触发这个对话的地方有很多，但最近的一个就在我们前面，右边。只需向前骑，我们左边的建筑物上会有一个火萤标志。停在旁边，应该会出现一个提示。' },
           { type: 'collectible', name: '遗物 3/9 (UEC 校园地图)', description: '我们现在向前骑一点，但我们的路现在被堵住了。我们必须下马，蹲在右边的一些椅子下面进入宿舍。一旦进入第一个房间，我们面前的柜台上就有一张地图。' },
           { type: 'collectible', name: '遗物 4/9 (学生的日记)', description: '接下来，我们要上二楼，寻找 200-B 房间。它应该在在大厅的大横幅之后。进入宿舍，打开抽屉拿笔记。' },
           { type: 'collectible', name: '火萤挂坠 3/5 (Warren)', description: '我们将不得不从地板上的洞掉下去，在这一层会有很多循声者和一个巨无霸。遗憾的是，我们必须杀死巨无霸才能拿到挂坠。记住，感染者弱火，尤其是巨无霸。在与巨无霸的血战之后，它死的地方应该就是火萤挂坠。' },
           { type: 'collectible', name: '遗物 5/9 (剪报)', description: '现在大厅下面会有一扇被封住的门。我们必须猛击提示才能通过门离开这个区域。在另一边，上楼梯，走右边的第一扇门。一旦进入房间，笔记就在左侧的桌子上。' },
           { type: 'collectible', name: '火萤挂坠 4/5 (Griggs)', description: '一旦到达科学楼的底部，我们要前往该区域左后方角落的两个帐篷。进入右边的那个，桌子上有一个火萤挂坠。' }
        ]
       },
       {
        title: '科学楼 (Science Building)',
        stats: { workbenches: 1, shivDoors: 1, trainingManuals: 1, tools: 1, conversations: 1, artifacts: 4, pendants: 1 },
        content: [
           { type: 'collectible', name: '工作台 2/2', description: '一旦我们爬进大楼，穿过左边的门，右边就是第二个工作台。' },
           { type: 'collectible', name: '弹簧刀门 1/1, 训练手册 2/2 (燃烧瓶部署) 和 工具箱 1/1 (4级工具)', description: '好了，现在我们要走右边的门，沿着大楼的走廊走。走廊尽头会被堵住，但在它的右边是一个弹簧刀门。里面有一本训练手册和一个工具箱，所以一定要带把弹簧刀。' },
           { type: 'collectible', name: '可选对话 3/3 (不孤单)', description: '一旦房间里的物资清理完毕，我们要去的下一个地方是大楼的中间。沿着走廊走，左边的第一扇门会带我们出去。继续跟着走，我们会走进一个有楼梯和杂物箱的房间。箱子顶上有一张纸条，我们可以查看它来进行可选对话。' },
           { type: 'collectible', name: '遗物 6/9 (办公室录音机)', description: '接下来，上楼梯然后回到大楼里。我们要一直走到左边，进入右边的最后一道门。一旦进入房间，那个录音机就在我们面前的桌面上。' },
           { type: 'collectible', name: '遗物 7/9 (真菌 X 光片)', description: '现在我们要回去，沿着走廊走。一直走到走廊尽头，在尽头向左转。房间的另一端是一张 X 光片。' },
           { type: 'collectible', name: '遗物 8/9 (实验室录音机)', description: '现在我们可以走右边的门。一旦我们打开门，我们会受到一些猴子的迎接。在这个房间里，我们要前往中间右边的桌子，因为上面有另一个录音机。' },
           { type: 'collectible', name: '火萤挂坠 5/5 (Hickman)', description: '这个房间里也有一个挂坠。挂坠在我们左边的两个架子之间，右边的台面上。' },
           { type: 'collectible', name: '遗物 9/9 (火萤录音机)', description: '在这个房间完成后，继续向前走，在某个时刻，我们会看到一个过场动画，讲述火萤不在这个城市而是搬走了。然后我们会受到一些猎人的攻击。在这个过场动画结束后，我们会自动获得最后一个遗物。' }
        ]
       }
    ]
  },
  {
    id: 'lakeside-resort',
    title: '第九章：湖畔度假村 (Lakeside Resort)',
    sections: [
       {
        title: '狩猎 (The Hunt)',
        stats: { artifacts: 8, comics: 1, pendants: 1, conversations: 1 },
        content: [
           { type: 'collectible', name: '遗物 1-8/10', description: '在本章的一开始，我们已经有了8个遗物，这很不错。艾莉的背包里会有弹簧刀、随身听、山姆的机器人、妈妈的信、No Pun Intended、No Pun Intended: Volume Two、To Get To The Other Side以及乔尔和莎拉的照片。' },
           { type: 'collectible', name: '漫画 1/2 (Uncertainty)', description: '现在我们在猎鹿。环顾四周并用你的弓箭射击它。在某个时刻，你会跟随它进入一个废弃的采矿设施，我们必须跳到一个谷仓。在谷仓里，左边有一个房间，进入房间，后面有一本漫画。' },
           { type: 'collectible', name: '火萤挂坠 1/2 (Kristof)', description: '与感染者战斗一段时间后，艾莉和大卫进入建筑物的后面，大卫会把你托上下一层。我们要沿着路走到另一边。到了那里，我们在左边和右边有一个分岔路口，但一个循声者从左边的房间里出来，我们要进入左边的那个房间。所以进去，左边的桌子上有一个挂坠。' },
           { type: 'collectible', name: '可选对话 1/1 (失踪的男孩)', description: '回到外面，为大卫放下梯子，然后也跳下去。大卫会把梯子放在出口处，所以爬上去跟着他。一旦我们到达死胡同，右边会有两具尸体，我们可以与他们互动进行对话。' }
        ]
       },
       {
        title: '木屋度假村 (Cabin Resort)',
        stats: { pendants: 1, comics: 1, shivDoors: 1, trainingManuals: 1, artifacts: 2 },
        content: [
           { type: 'collectible', name: '火萤挂坠 2/2 (Braun)', description: '我们从马上摔下来跑进第一所房子后，我们要出去去右边的凉亭，那里有一个挂坠。' },
           { type: 'collectible', name: '漫画 2/2 (Negentropy)', description: '离开这第一个战斗区域后，我们会穿过一根管子，不要径直向前走，我们要绕到左边，海滩上有一本漫画。' },
           { type: 'collectible', name: '弹簧刀门 1/1 和 训练手册 1/1 (烟雾塑形)', description: '一旦我们第二次控制乔尔，我们将进入银湖，一个小镇。我们的右边会有一个加油站，但我们要经过它，前往马路对面的建筑物。这栋楼后面有一条小巷，有一个弹簧刀门，里面也有一本训练手册。' },
           { type: 'collectible', name: '遗物 9-10/10 (艾莉的背包和肉类账本)', description: '经过一番战斗并推过一些猎人后，我们被迫进入一个有背包和衣服的房间。乔尔会在过场动画中自动捡起艾莉的包，这算作一个遗物，但在这个房间里，我们身后有一张纸条，所以转身去拿。' }
        ]
       }
    ]
  },
  {
    id: 'bus-depot',
    title: '第十章：公共汽车站 (Bus Depot)',
    sections: [
       {
        title: '公路出口 (Highway Exit)',
        stats: { conversations: 6, artifacts: 4, pendants: 3, comics: 1, tools: 1, workbenches: 1 },
        content: [
           { type: 'collectible', name: '可选对话 1/6 (艾莉，我在跟你说话)', description: '我们现在切到他们在通往城市的高速公路上。首先要做的是缓慢向前走，在乔尔进行了一段单向对话后，艾莉头上会出现一个提示。' },
           { type: 'collectible', name: '遗物 1/4 (家庭照片)', description: '之后，路上会有一辆房车。我们要进去，家庭照片就在右边，靠近水槽。' },
           { type: 'collectible', name: '可选对话 2/6 (关于飞机的梦)', description: '接下来，我们离开房车，前往前面的公交车。等艾莉走到公交车前，谈论她做的一个关于飞机的梦。然后会出现一个提示。' },
           { type: 'collectible', name: '火萤挂坠 1/3 (Perich)', description: '现在，沿着高速公路走，走下出口匝道。到了下面的街道，我们要靠左走，绕一圈，因为在坏掉的卡车另一边有一个挂坠。' },
           { type: 'collectible', name: '遗物 2/4 (给妻子的纸条)', description: '继续沿着右边的路走，直到被一些车挡住。爬过它们，然后跳过栅栏。翻过去后，进入前面的公交车站，走左边的楼梯。下楼梯时靠墙走，手提箱里有一张纸条。' },
           { type: 'collectible', name: '可选对话 3/6 (今天格外安静)', description: '拿到后，转身，艾莉正坐在长椅上。走向她，她上方会出现一个提示，问她为什么这么安静。' },
           { type: 'collectible', name: '可选对话 4/6 (长颈鹿)', description: '接下来，我们需要把艾莉托上去给我们放下梯子。她会放下梯子然后跑掉；跟着她。短暂追逐后，我们会看到她跑向的东西，一只长颈鹿。会有一个抚摸它的提示，这算作一个可选对话。' },
           { type: 'collectible', name: '可选对话 5/6 (你所希望的一切)', description: '互动后，跟随艾莉上楼，然后到一个有很多其他长颈鹿的开阔区域。走向艾莉并与她互动，让乔尔坐在那里看长颈鹿做它们自己的事。这是游戏中最放松的部分之一；我们可以想待多久就待多久。' },
           { type: 'collectible', name: '漫画 1/2 (Precipate)', description: '看完风景后，你可以前往门口，会播放一段简短的过场动画。结束后，下楼。在一楼，进入右边的浴室，尸体旁有一本漫画书。' },
           { type: 'collectible', name: '工具箱 1/1 (5级工具)', description: '继续走到外面，我们会看到一些 FEDRA 帐篷，进入右边的第二个，我们一进去右边的桌子上就是最后一个工具箱。捡起它，如果你找到了所有 5 个工具箱，你应该会获得“Sharpest tool in the shed”成就。' },
           { type: 'collectible', name: '火萤挂坠 2/3 (Nicole Hoo)', description: '现在回到外面，但沿着帐篷的左侧走，因为我们要走第一个左转。一旦我们向左转到一个泛光灯处，挂在泛光灯上的就是一个挂坠。可以使用投掷物或射击把它弄下来。' },
           { type: 'collectible', name: '遗物 3/4 (盐湖城隔离区地图) 和 工作台 1/2', description: '捡起后，转身前往另一边。那里有一个单独的帐篷，我们要去那里。到了那里，左边的桌子上有一张纸条，右边是一个工作台，所以一定要两个都拿到。' },
           { type: 'collectible', name: '可选对话 6/6 (逃离过去) 和 遗物 4/4 (乔尔和莎拉的照片)', description: '现在去公交车离开并等艾莉；她会想和我们说话，给我们一个提示。互动后，她会谈论她在杰克逊拿的东西，并把莎拉的照片给乔尔。这样做会给我们一个可选对话和一个遗物。' },
           { type: 'collectible', name: '火萤挂坠 3/3 (Natalie Hoo)', description: '好了，现在我们可以穿过公交车了。走左边的路，然后在前面的黄色公交车后面再向左转。公交车后面有一个挂坠。' }
        ]
       },
       {
        title: '地下隧道 (Underground Tunnel)',
        stats: { trainingManuals: 1, comics: 1, workbenches: 1, shivDoors: 1 },
        content: [
           { type: 'collectible', name: '训练手册 1/1 (炸弹弹片)', description: '我们将继续沿着隧道走，这将是游戏中最后一个感染者区域，所以这里当然会生成 2-3 个巨无霸。走在隧道的左侧，我们需要的那辆卡车在屋顶阳光照射进来的绿色补丁旁边，它是进入开放感染者区域之前的最后一辆卡车。爬上去捡起训练手册。' },
           { type: 'text', text: '“Something to fight for”成就：一旦我们捡起手册，如果我们收集了游戏中所有 12 本训练手册，我们将获得“Something to fight for”成就。' },
           { type: 'collectible', name: '漫画 2/2 (Catalysis)', description: '一旦我们爬过卡车穿过另一边，我们必须为艾莉找到梯子帮她过河。一旦我们为她放下梯子，向右转并穿过左边的通风口。走到尽头，尽头有一本漫画。' },
           { type: 'collectible', name: '工作台 2/2', description: '完成后，在右侧与艾莉会合，把她托过栅栏去开门，在那里她会被一个循声者攻击。杀死循声者后，进入房间，在最右边的角落是游戏的最后一个工作台。' },
           { type: 'text', text: '“Prepared for the worst”成就：与工作台互动后，如果你与游戏中所有 11 个工作台都互动过，你应该会获得“Prepared for the worst”成就。如果没有，你可以从游戏菜单加载章节或进行新游戏+。' },
           { type: 'text', text: '“Combat ready”成就：这是游戏的最后一个工作台，这也是你最后一次升级枪支的机会，也就意味着如果你还没有获得“Combat ready”成就，这是最后的机会。再次强调，左轮手枪是最容易完全升级的，但在这个时候，就看你升级得最多的是什么了。' },
           { type: 'collectible', name: '弹簧刀门 1/1', description: '我们的左边有一扇门，不要向左走，向右走，这里有一个弹簧刀门。打开它并搜刮物资。' }
        ]
       }
    ]
  },
  {
    id: 'the-firefly-lab',
    title: '第十一章：火萤实验室 (The Firefly Lab)',
    sections: [
       {
        title: '医院 (The Hospital)',
        stats: { artifacts: 4, shivDoors: 1, pendants: 1 },
        content: [
           { type: 'text', text: '好了，就是这里了。就是电视剧里的那一幕！' },
           { type: 'text', text: '注意：这是游戏的最后一个战斗区域，所以这也是我们获得最后几个成就的最后机会，比如“Build em up, Break em down”和“Geared up”。' },
           { type: 'text', text: '“Geared up”成就：如果你还没有获得“Geared up”成就，现在是时候了。只需制作你能制作的所有物品：医疗包、燃烧瓶、弹簧刀、钉子炸弹、烟雾弹和近战升级至少一次。一旦完成，你将获得“Geared up”成就。' },
           { type: 'text', text: '一旦我们获得控制权，整个地方都在找我们，而且守卫森严，所以要打起精神。如果你用步枪杀死某人，你现在可以在这一章中捡起并使用它，尽情享受吧。' },
           { type: 'collectible', name: '遗物 1/4 (外科医生的录音机)', description: '我们要做的是到达 6 楼。在某个时刻，爬上一些楼梯并打开通往该楼层的门后，我们要去右边的柜台拿录音机。' },
           { type: 'collectible', name: '弹簧刀门 1/1', description: '现在接下来要做的是转身打开同样在柜台后面的最后一个弹簧刀门。门内右侧有一个火萤挂坠。' },
           { type: 'text', text: '“Master of Unlocking”成就：打开弹簧刀门时，如果开启了所有 13 个弹簧刀门，我们应该会获得“Master of Unlocking”成就。如果没有，请进行新游戏+或在主菜单中使用章节选择。' },
           { type: 'collectible', name: '火萤挂坠 1/1 (Stewart-Seume)', description: '最后一个火萤挂坠在弹簧刀门内，就在右边。' },
           { type: 'collectible', name: '遗物 2/4 (玛琳的录音机 1)', description: '回到大厅，进入我们走的楼梯左边的房间。走进去，右边是另一个录音机。' },
           { type: 'collectible', name: '遗物 3/4 (玛琳的日志)', description: '回到走廊，然后向左走。走廊最左边有一扇双开门。穿过门，然后进入我们面前的帐篷。另一个录音机在里面，在帐篷的最左边。' },
           { type: 'collectible', name: '遗物 4/4 (玛琳的录音机 2)', description: '现在最后一个收集品在守卫最后防线之后的走廊里，基本上。清理房间或跑过去；取决于你。但是一旦你过了这个区域并穿过门，走右边的第一个房间，床的左边有最后一个录音机。' }
        ]
       }
    ]
  },
  {
    id: 'jackson',
    title: '第十二章：杰克逊 (Jackson)',
    sections: [
       {
        title: '尾声 (Epilogue)',
        stats: { comics: 1 },
        content: [
           { type: 'collectible', name: '漫画 1/1 (Singularity)', description: '好吧，就是这样，结局。长途车程后，我们在这一章扮演艾莉。我们要做的就是跟随乔尔，但我们需要捡起最后一本漫画。一旦我们翻过栅栏，我们要稍微向右走，寻找岩壁附近的一辆坏掉的卡车。漫画在座位上。' },
           { type: 'text', text: '“Endure and Survive”成就：一旦我们捡起漫画，我们将获得“Endure and Survive”成就，并且我们完成了主线游戏的收集品收集。' },
           { type: 'text', text: '现在，我们所要做的就是跟随乔尔，然后在谈话后游戏结束。我想知道他们在第二部中会如何处理这个问题。' },
           { type: 'text', text: '《最后生还者 第一部》：结语。我们现在完成了主线游戏；恭喜！你应该已经获得了通关主线游戏的“No matter what”成就。' },
           { type: 'text', text: '现在我们必须玩 Left Behind DLC 来收集更多的收集品，然后我们就完成了。如果你缺少任何成就，你可以进行新游戏+来获得它们，或者使用主菜单中的章节选择来玩特定的章节。' }
        ]
       }
    ]
  },
  {
    id: 'left-behind',
    title: 'DLC：Left Behind',
    sections: [
       {
        title: '如此接近 (So Close)',
        stats: { artifacts: 4, conversations: 3, jokes: 1 },
        content: [
           { type: 'collectible', name: '遗物 1/4 (中庭笔记)', description: '在直升机下面，向右走。笔记在大厅尽头，过了 Fast Burgers 之后。' },
           { type: 'collectible', name: '遗物 2/4 (发电机笔记)', description: '过了一会儿，你会进入一个被淹没的黑暗房间。我们需要打开的发电机旁边有一张纸条。' },
           { type: 'collectible', name: '遗物 3/4 (中庭录音机)', description: '一旦发电机打开，我们打开大门，走上自动扶梯。我们的左边是一个帐篷，帐篷里有一个录音机。' },
           { type: 'collectible', name: '遗物 4/4 (医疗用品)', description: '最后一个遗物我们在直升机里捡起医疗用品时会自动获得。' },
           { type: 'collectible', name: '可选对话 1/3 (旋转木马)', description: '我们再次控制艾莉后，跳上旋转木马进行可选对话。' },
           { type: 'collectible', name: '可选对话 2/3 和 笑话 6/6', description: '一旦我们完成了旋转木马，莱利会给我们笑话书，让我们获得游戏的最后一个笑话。我们必须听完所有的笑话，这算作 1 个笑话和 1 个可选对话。' },
           { type: 'text', text: '“That’s all I got”成就：至此，如果我们听了所有 6 个笑话（主线 5 个，Left Behind 1 个），我们最终将获得“That’s all I got”成就。' }
        ]
       },
       {
        title: '乐趣与游戏 (Fun and Games)',
        stats: { artifacts: 1, conversations: 1 },
        content: [
           { type: 'collectible', name: '遗物 1/1 (厨房笔记)', description: '完成后，旋转木马的左边是另一家 Fast Burger。在厨房里，左后方有一个遗物。' },
           { type: 'collectible', name: '可选对话 3/3 (照相亭)', description: '旋转木马前面有一间照相亭，下几步台阶。互动进行游戏的最后一个可选对话。' },
           { type: 'text', text: '“Getting to Know You”成就：一旦我们离开照相亭并控制艾莉，如果听完了所有 54 个可选对话（主线 40 个，Left Behind 14 个），我们将获得“Getting to Know You”成就。' },
           { type: 'text', text: '“Nobody’s perfect”成就：在某个时刻，我们将前往 Raja 的街机厅。不要与 The Turning 街机互动，而是寻找后面的 Jak X 街机。艾莉假装在里面开车后，我们将获得“Nobody’s perfect”成就。' },
           { type: 'text', text: '“Angel knives”成就：准备好后，前往 The Turning 街机。为了这个，我们必须在不被击中一次的情况下击败 Black Fang。简单的做法是在下一批提示出现时暂停游戏，提前知道它们。如果你被击中，重新加载检查点。' },
           { type: 'text', text: '“Skillz”成就：接下来，我们将与莱利进行水枪大战。我们必须赢才能获得“Skillz”成就。如果你快输了，重新加载检查点或加载手动存档重试。' }
        ]
       },
       {
        title: '逃离自由 (The Enemy of My Enemy)',
        stats: { artifacts: 2 },
        content: [
           { type: 'collectible', name: '遗物 1/2 (船员照片)', description: '一旦重新控制现在的艾莉，离开直升机后转过拐角。右边有一个标有“禁止入内”标志的房间。里面是一张照片，旁边是一具尸体。' },
           { type: 'collectible', name: '遗物 2/2 (管道录音机)', description: '在某个时刻，你会进入通风口。走第一个左转，尽头有一具尸体。旁边是最后一个遗物和游戏的最后一个收集品。' },
           { type: 'text', text: '“Chronicles”成就：至此，在收集了所有 97 个遗物（主线 83 个，Left Behind 14 个）后，我们应该最终获得“Chronicles”成就。如果你没有，请检查主菜单中的章节选择，看看你在哪一章错过了遗物。' },
           { type: 'text', text: '“Live bait”成就：一旦我们离开通风口，我们会在一家体育用品商店的屋顶上。一些感染者会在我们下面，一些猎人很快就会进入商店。向猎人附近扔砖块或瓶子，触发感染者攻击猎人。一旦一个猎人被感染者杀死，我们将获得“Live bait”成就。这里和一家科技商店是我们唯一能获得这个成就的地方。' },
           { type: 'text', text: 'Left Behind 结局：一旦我们完成了 Left Behind，我们应该获得完成 DLC 的“Don’t go”成就，以及收集游戏中所有其他成就的“It can’t be for nothing”成就。' }
        ]
       }
    ]
  },
  {
    id: 'safes',
    title: '保险箱与密码',
    sections: [
      {
        title: '所有保险箱位置与密码',
        content: [
          { type: 'collectible', name: '保险箱 #1 (外围)', description: '位置：第3章 - 市中心，充满循声者的地铁站左侧商店内。\n密码：03-43-78' },
          { type: 'collectible', name: '保险箱 #2 (比尔的小镇)', description: '位置：第4章 - 森林，主街道的一辆卡车旁。\n密码：05-17-21' },
          { type: 'collectible', name: '保险箱 #3 (匹兹堡)', description: '位置：第5章 - 酒店大堂，右侧办公室。\n密码：22-10-56' },
          { type: 'collectible', name: '保险箱 #4 (郊区)', description: '位置：第6章 - 郊区，一栋房子的二楼卧室衣柜里。\n密码：08-21-36' }
        ]
      }
    ]
  },
  {
    id: 'intro-p2',
    title: '基础操作与生存技巧',
    sections: [
      {
        title: '前言与概览',
        content: [
          { type: 'text', text: '欢迎来到《最后生还者2》全成就/白金攻略。本攻略旨在提供清晰、互动的指引，涵盖推荐路线、物品收集顺序、成就触发时机等。' },
          { type: 'text', text: '预计100%完成时间：40-50小时。包含26个故事模式成就（2个难度相关）和13个“无归路”模式成就。' }
        ]
      },
      {
        title: '通用技巧 (General Tips)',
        content: [
          { type: 'collectible', name: '开启“高对比度显示”', description: '强烈推荐！在 辅助功能 > 视觉辅助 中开启。启用后，按 G 键（或触摸板左滑）可将可互动的物品和敌人高亮显示，让收集品无处遁形。' },
          { type: 'collectible', name: '增强聆听模式', description: '在 辅助功能 > 导航与穿越 中开启。这将允许你在聆听模式下按 扫描键（如圆圈） 扫描周围环境，直接高亮显示附近的物品和敌人。' },
          { type: 'collectible', name: '收集品追踪', description: '在 选项 > HUD > 通知 > 收集品追踪 中开启。捡起物品时会显示图标，方便确认是否已收集。' },
          { type: 'collectible', name: '章节选择查漏补缺', description: '如果漏掉了收集品，利用“章节选择”功能。菜单会显示每个章节各类收集品的总数和你已获得的数量。你可以直接跳转到特定章节进行补漏。' },
          { type: 'collectible', name: '训练手册刷新机制', description: '注意：训练手册有多个刷新点。如果你在攻略提到的位置没找到，它可能会在后续的刷新点出现（通常是如果你错过了第一个点，会在第二个点刷出）。' }
        ]
      },
      {
        title: '收集品统计',
        content: [
          { type: 'text', name: '故事模式全收集统计', description: '• 127个 文物 (Artifacts)  • 20个 日志 (Journal Entries)\n• 48个 卡牌 (Trading Cards)  • 32个 硬币 (Coins)\n• 25个 工作台 (Workbenches)  • 14个 保险箱 (Safes)\n• 12种 武器 (Weapons)  • 8本 训练手册 (Training Manuals)\n• 4个 枪套 (Holsters)  • 奇异遗物 & 刻字戒指' }
        ]
      },
      {
        title: '难度与路线推荐',
        content: [
          { type: 'text', name: '难度成就', description: '本作只有2个难度杯，且可以通过策略轻松获得：\n• "You Can\'t Stop This"：在"极难" (Grounded) 难度下完成游戏。\n• "Dig Two Graves"：启用"永久死亡" (Permadeath) 完成游戏。' },
          { type: 'text', name: '推荐路线 1：安全稳健 (Safe & Steady)', description: '第一遍：选择“极轻”难度 + 开启“永久死亡”（按章节）。专注于全收集和角色/武器升级。\n第二遍：新游戏+ 选择“极难”难度。继承所有装备和升级，专注于通关极难和补齐剩余升级。' },
          { type: 'text', name: '推荐路线 2：硬核挑战 (The Chad Route)', description: '一遍通关：直接选择“极难” + “永久死亡”。效率最高，但容错率极低。' },
          { type: 'text', name: '逃课玩法 ("Cheese" Method)', description: '利用辅助功能大幅降低极难难度（PS4/PS5可用）：\n开启所有“战斗辅助”选项（如人质不逃跑、队友不被抓、趴下隐形、慢动作瞄准等）。\n系统可能会提示“建议在极难下关闭这些选项”，直接选择“否”忽略即可，这不会影响成就解锁。' },
          { type: 'text', name: '永久死亡设置建议', description: '建议将永久死亡设置为“按章节” (Per Chapter) 而非“整局游戏”。这样如果死亡，只需重打当前章节（约20-60分钟进度），避免损失几十小时的存档。' }
        ]
      }
    ]
  },
  {
    id: 'contents-p2',
    title: '📋 目录导航',
    content: [
      {
        type: 'text',
        text: '🎯 攻略概览'
      },
      {
        type: 'text',
        text: '• 基础操作与生存技巧（当前章节）'
      },
      {
        type: 'text',
        text: '• 杰克逊 (Jackson) - 序章至打包章节'
      },
      {
        type: 'text',
        text: '• 西雅图 第一天 (Seattle Day 1) - 艾莉篇'
      },
      {
        type: 'text',
        text: '• 西雅图 第二天 (Seattle Day 2) - 艾莉篇'
      },
      {
        type: 'text',
        text: '• 西雅图 第三天 (Seattle Day 3) - 艾莉篇'
      },
      {
        type: 'text',
        text: '• 公园 (The Park) - 埃比篇'
      },
      {
        type: 'text',
        text: '• 西雅图 第一天 (Seattle Day 1) - 埃比篇'
      },
      {
        type: 'text',
        text: '• 西雅图 第二天 (Seattle Day 2) - 埃比篇'
      },
      {
        type: 'text',
        text: '• 西雅图 第三天 (Seattle Day 3) - 埃比篇'
      },
      {
        type: 'text',
        text: '• 圣塔芭芭拉 (Santa Barbara)'
      },
      {
        type: 'text',
        text: '• 🔐 保险箱与密码全解'
      },
      {
        type: 'text',
        text: '💡 快速导航提示：'
      },
      {
        type: 'text',
        text: '• 使用搜索功能快速定位章节'
      },
      {
        type: 'text',
        text: '• 每个章节都包含详细的收集品位置'
      },
      {
        type: 'text',
        text: '• 奖杯相关物品已特别标注'
      },
      {
        type: 'text',
        text: '• 建议按章节顺序完成以确保100%收集'
      }
    ]
  },
  {
    id: 'jackson-p2',
    title: '杰克逊 (Jackson)',
    sections: [
      {
        title: '序章 (Prologue)',
        content: [
          { type: 'text', text: '无收集品。' }
        ]
      },
      {
        title: '苏醒 (Waking Up)',
        stats: { artifacts: 1, tradingCards: 2 },
        content: [
          {
            type: 'text',
            text: '时间来到4年后，我们醒来并开始操控艾莉。在艾莉应答杰西的敲门后，我们可以自由活动并开始寻找收集品，第一个收集品是一张卡牌。'
          },
          {
            type: 'collectible',
            name: '卡牌 1/2 (Seismicayla)',
            description: '离开温室到达主街道后，左转到达“Main Street Gallery”（主街画廊），沿着阳台绕行到墙上挂着“Help Wanted”的布告栏处。卡牌就在布告栏上。'
          },
          {
            type: 'collectible',
            name: '文物 1/1 (Volunteer Request)',
            description: '沿着主街道走，直到杰西在“Tipsy Bison”酒吧处向左分开。此时看向街道对面，有一家铁匠铺。在木制人行道的尽头，红色梯子旁的板条箱上有一张便条。'
          },
          {
            type: 'collectible',
            name: '卡牌 2/2 (The Keene Twins)',
            description: '在酒吧与顽固的老头（塞斯）和玛丽亚交谈后，继续深入酒吧内部，绕过吧台。在另一端，飞镖盘左侧的桶上有一张卡牌。这是本章节的最后一个收集品。'
          },
          {
            type: 'text',
            text: '正如之前所说，成就只与我们拾取的收集品有关，与可选对话无关。所以你不需要为了任何东西去赢下雪球大战，尽情享受游戏乐趣即可。'
          }
        ]
      },
      {
        title: '眺望 (The Overlook)',
        stats: { artifacts: 1 },
        content: [
          {
            type: 'collectible',
            name: '文物 1/1 (Note From a Father)',
            description: '爬过房子后，转身跳回前面的开窗。在书房右侧窗户的桌子上。'
          }
        ]
      },
      {
        title: '巡逻 (Patrol)',
        stats: { artifacts: 6, tradingCards: 2, journalEntries: 2, workbenches: 1, safes: 1 },
        content: [
          {
            type: 'collectible',
            name: '日志 1/2 (Scenic Overlook)',
            description: '和Dina到达眺望点后，等待几秒出现提示。'
          },
          {
            type: 'collectible',
            name: '文物 1/6 (A Note to Santa)',
            description: '骑马到废弃城镇，左边的房子二楼卧室床头柜里。'
          },
          {
            type: 'collectible',
            name: '卡牌 1/2 (Tesseracter)',
            description: '同一区域，街对面的房子，爬卡车上去。在卧室开放衣柜的架子上。'
          },
          {
            type: 'collectible',
            name: '文物 2/6 (Supermarket Apology)',
            description: '爬过卡车进入超市拖车，在后面箱子堆里。'
          },
          {
            type: 'collectible',
            name: '文物 3/6 (Good Boy Combo)',
            description: '进入超市上方办公室，在有“Employee of the Month”板子的走廊右侧房间（有保险箱）。桌上有此便条。'
          },
          {
            type: 'collectible',
            name: '保险箱 1/1 (Grocery Store)',
            description: '就在上一个文物的房间里。密码：07-20-13 (线索是“本月最佳员工”狗狗的照片日期)。'
          },
          {
            type: 'collectible',
            name: '文物 4/6 (Eugene’s Firefly Pendant)',
            description: '图书馆后台，穿过门时自动获得。'
          },
          {
            type: 'collectible',
            name: '日志 2/2 (Toy Giraffe)',
            description: '儿童图书馆区域，右侧的长颈鹿玩具。'
          },
          {
            type: 'collectible',
            name: '卡牌 2/2 (Laurent Foucault)',
            description: '儿童区前台后面的小储藏室里。'
          },
          {
            type: 'collectible',
            name: '文物 5/6 (Photo of Eugene and Tommy)',
            description: '儿童区飞镖盘和夹克之间的桌子上。'
          },
          {
            type: 'collectible',
            name: '文物 6/6 (Eugene’s Ultimatum)',
            description: '尤金床边的床头柜里。'
          },
          {
            type: 'collectible',
            name: '工作台 1/1',
            description: '启动发电机后，Ellie转身就会看到。'
          }
        ]
      },
      {
        title: '打包 (Packing Up)',
        stats: { artifacts: 1, journalEntries: 2, weapons: 1 },
        content: [
          {
            type: 'collectible',
            name: '日志 1/2 (Owl Mug)',
            description: '厨房水槽旁的猫头鹰马克杯。'
          },
          {
            type: 'collectible',
            name: '日志 2/2 (Joel\'s Guitar)',
            description: '楼上乔尔的工作室，吉他处。'
          },
          {
            type: 'collectible',
            name: '文物 1/1 (Joel’s Watch)',
            description: '乔尔卧室床上红盒子里。'
          },
          {
            type: 'collectible',
            name: '武器 1/1 (Revolver)',
            description: '自动获得左轮手枪。'
          }
        ]
      }
    ]
  },
  {
    id: 'seattle-day-1-ellie',
    title: '西雅图 第一天 (Seattle Day 1) - 艾莉',
    sections: [
      {
        title: '大门 (The Gate)',
        stats: { artifacts: 6, tradingCards: 4, journalEntries: 1 },
        content: [
          { type: 'collectible', name: '卡牌 1/4 (Motivator)', description: '章节开始后不久，迪娜和艾莉会经过一片有几辆废弃汽车和杂草丛生巴士站的空地。下马检查巴士站的侧面，卡牌就在那里。' },
          { type: 'collectible', name: '卡牌 2/4 (The Starfire Kids)', description: '沿着长满杂草的高速公路向西雅图前进，穿过一座桥后，在路左侧找到一辆小型建筑拖车。进去后在软木板上找到卡牌。' },
          { type: 'collectible', name: '文物 1/6 (Map of Seattle)', description: '在同一个建筑拖车里，进入里屋，在一个破窗户旁的抽屉里找到西雅图地图。' },
          { type: 'collectible', name: '日志 1/1 (WLF Gate Entry)', description: '当到达巨大的西雅图隔离区大门时，走近大门上的“TRESPASSERS KILLED ON SIGHT”（擅入者格杀勿论）标语，出现提示后在日记中记录。' },
          { type: 'collectible', name: '文物 2/6 (Refugee Note)', description: '在大门左侧的FEDRA军事拖车里，桌子上有一张难民的便条。' },
          { type: 'collectible', name: '文物 3/6 (Infected Infographic)', description: '在同一个区域，靠近后墙的另一个军事拖车里，桌子上有一张关于感染阶段的图表。' },
          { type: 'collectible', name: '卡牌 3/4 (Chessmaster)', description: '穿过隔离区大门并上楼后，爬梯子上去之前，在瞭望塔顶部的桌子上找到卡牌。' },
          { type: 'collectible', name: '文物 4/6 (Isaac’s Orders)', description: '在同一个瞭望塔顶部，转身在左侧的箱子上找到这份文件。' },
          { type: 'collectible', name: '文物 5/6 (Checkpoint Gate Codes)', description: '通过大门并从瞭望塔下来后，砸碎玻璃进入左侧的大门控制室，在桌子抽屉里找到大门密码文件。' },
          { type: 'collectible', name: '卡牌 4/4 (Oozer)', description: '在控制室外，用发电机电缆扔过屋顶的标志，然后从另一侧爬上去。卡牌在椅子旁边。' },
          { type: 'collectible', name: '文物 6/6 (Rooftop Note)', description: '在同一个控制室屋顶上，椅子上放着这份文件。' }
        ]
      },
      {
        title: '市中心 (Downtown)',
        stats: { artifacts: 18, tradingCards: 5, journalEntries: 2, workbenches: 1, safes: 3, weapons: 1, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '文物 1/18 (FEDRA Census Document)', description: '在看到Serevena酒店后左转，进入门卫室，在抽屉里找到。' },
          { type: 'collectible', name: '文物 2/18 (Bank Heist Plans)', description: '在西湖银行 (Westlake Bank) 的金库房间里，尸体旁的包里。' },
          { type: 'collectible', name: '保险箱 1/3 (Bank Vault)', description: '银行金库大门。密码：60-23-06。' },
          { type: 'collectible', name: '武器 1/1 (Pump Shotgun)', description: '在金库内，从尸体上拾取泵动式霰弹枪。' },
          { type: 'collectible', name: '文物 3/18 (Bank Robber Letter)', description: '在金库内的桌子上。' },
          { type: 'collectible', name: '文物 4/18 (Antique Ring)', description: '在金库角落的保险柜抽屉里 (奖杯: So Great and Small)。' },
          { type: 'collectible', name: '文物 5/18 (Cache Hunter Note)', description: '在银行外的废墟建筑中，一个包里的尸体旁。' },
          { type: 'collectible', name: '文物 6/18 (Letter from Isaac)', description: '在坦克附近的废墟角落，骷髅旁的包里。' },
          { type: 'collectible', name: '卡牌 1/5 (Doctor Uckmann)', description: '在坦克附近的废墟顶层，小心爬上去。' },
          { type: 'collectible', name: '卡牌 2/5 (Das Wort)', description: '在Valiant Music Shop (乐器店) 的柜台抽屉里。' },
          { type: 'collectible', name: '文物 7/18 (Street Drawing)', description: '乐器店二楼过桥到达哨站，在抽屉里。' },
          { type: 'collectible', name: '日志 1/2 (Street Drawing Entry)', description: '在哨站处，艾莉会绘制周围环境的草图。' },
          { type: 'collectible', name: '工作台 1/1', description: '在哨站桥对面的草地帐篷里。' },
          { type: 'collectible', name: '保险箱 2/3 (Gate West 2)', description: '麦迪逊街 (Madison St) 附近的西2门。密码：04-51。' },
          { type: 'collectible', name: '卡牌 3/5 (Flo)', description: '在西2门保险箱内。' },
          { type: 'collectible', name: '文物 8/18 (WLF Community Supply Chest Note)', description: '在Valiant Music Shop东边，楼梯上的补给箱里。' },
          { type: 'collectible', name: '文物 9/18 (WLF Safe House Supply Note)', description: '在Ruston Coffee (咖啡店) 的柜台上。' },
          { type: 'collectible', name: '卡牌 4/5 (Big Blue)', description: '咖啡店柜台后的抽屉里。' },
          { type: 'collectible', name: '文物 10/18 (Pet Store Keys)', description: '咖啡店厕所的换尿布台上 (这是Barkos宠物店的钥匙)。' },
          { type: 'collectible', name: '文物 11/18 (Join WLF Note)', description: '在Barkos Pet Shop (宠物店) 入口的打印机上 (需要先拿到钥匙)。' },
          { type: 'collectible', name: '装备 (Long Gun Holster)', description: '宠物店柜台的桌子上。' },
          { type: 'collectible', name: '手册 1/2 (Crafting)', description: '在公路断桥上的消防车内，需要用绳索荡过去。' },
          { type: 'collectible', name: '文物 12/18 (Note to Informant)', description: '在瀑布下的FEDRA卡车内。' },
          { type: 'collectible', name: '文物 13/18 (Emergency Protocols Memo)', description: '犹太教堂 (Synagogue) 外的哨站梯子上，或者教堂内。' },
          { type: 'collectible', name: '日志 2/2 (Hebrew Calendar)', description: '犹太教堂二楼拉比办公室的墙上日历。' },
          { type: 'collectible', name: '文物 14/18 (Rabbi Saunder’s Letter)', description: '拉比办公室的抽屉里。' },
          { type: 'collectible', name: '文物 15/18 (Plea to a Friend)', description: '法院 (Courthouse) 大厅尽头，尸体旁。' },
          { type: 'collectible', name: '文物 16/18 (Lt. Torres’ Final Memorandum)', description: '法院一楼办公室，拔出尸体上的砍刀获得。' },
          { type: 'collectible', name: '文物 17/18 (List of Known WLF Agitators)', description: '法院办公室的文件柜里。' },
          { type: 'collectible', name: '保险箱 3/3 (Courthouse)', description: '法院办公室窗户下。密码：86-07-22 (写在白板上)。' },
          { type: 'collectible', name: '文物 18/18 (WLF Recruiter Journal)', description: 'Serevena Hotel (旅馆) 二楼房间的抽屉里。' },
          { type: 'collectible', name: '卡牌 5/5 (Know It All)', description: '同一个房间，两床之间的床头柜里。' }
        ]
      },
      {
        title: '东布鲁克小学 (Eastbrook Elementary)',
        stats: { artifacts: 3, tradingCards: 1 },
        content: [
          { type: 'collectible', name: '文物 1 & 2 (Leah’s Note & Photo)', description: '剧情自动获得。' },
          { type: 'collectible', name: '文物 3/3 (Isaac’s Mandate)', description: '在屋顶遭遇战后，离开时的房间桌上。' },
          { type: 'collectible', name: '卡牌 1/1 (Cardio)', description: '跳到公寓卧室，在床边的床头柜里。' }
        ]
      },
      {
        title: '国会山 (Capitol Hill)',
        stats: { artifacts: 7, tradingCards: 6, workbenches: 2, safes: 1, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '卡牌 1/6 (Kinnard, Esq.)', description: '在3号房子的一楼小桌上。' },
          { type: 'collectible', name: '文物 1/7 (Chevy’s Apology)', description: '6号公寓楼上卧室的床上。' },
          { type: 'collectible', name: '卡牌 2/6 (Rockafella)', description: '汽车旅馆 (Capitol Inn) 3号房外的垃圾桶旁。' },
          { type: 'collectible', name: '文物 2/7 (Raul’s Olive Branch)', description: '推垃圾箱爬上公寓阳台，在厨房抽屉里。' },
          { type: 'collectible', name: '工作台 1/2', description: '加油站车库内。' },
          { type: 'collectible', name: '文物 3/7 (Rebecca’s Tip Off)', description: '书店内的咖啡屋，咖啡机旁。' },
          { type: 'collectible', name: '手册 1/1 (Stealth)', description: '同一个咖啡屋，角落的桌子上。' },
          { type: 'collectible', name: '卡牌 3/6 (Doctor Stern)', description: '书店里屋，红色箱子上。' },
          { type: 'collectible', name: '卡牌 4/6 (Sergeant Frost)', description: 'Olive Street Market (杂货店) 后屋的储物柜里。' },
          { type: 'collectible', name: '卡牌 5/6 (Candelabra)', description: '陷阱爆炸后的商店内，ATM机旁。' },
          { type: 'collectible', name: '文物 4/7 (Tower Doodles)', description: '爬梯子上的哨站。' },
          { type: 'collectible', name: '文物 5/7 (Raul’s Account)', description: '河边卡车后车厢。' },
          { type: 'collectible', name: '文物 6/7 (Fran’s Refusal)', description: '武术馆 (Martial Arts Dojo) 的软木板上。' },
          { type: 'collectible', name: '工作台 2/2', description: '武术馆后方房间。' },
          { type: 'collectible', name: '卡牌 6/6 (Blizzarebra)', description: '二手店 (Thrift Store) 的书架上。' },
          { type: 'collectible', name: '文物 7/7 (Thrift Store Reminder)', description: '二手店后屋的墙上。' },
          { type: 'collectible', name: '保险箱 1/1 (Thrift Store)', description: '二手店后屋。密码：55-01-33。' }
        ]
      },
      {
        title: '13频道 (Channel 13)',
        stats: { artifacts: 1, tradingCards: 1 },
        content: [
          { type: 'collectible', name: '卡牌 1/1 (Kimimela)', description: '办公室后方桌上。' },
          { type: 'collectible', name: '文物 1/1 (Dad’s Pep Talk)', description: '上一层办公室沙发上。' }
        ]
      },
      {
        title: '隧道 (The Tunnels)',
        stats: { artifacts: 5, tradingCards: 3, journalEntries: 1, workbenches: 1 },
        content: [
          { type: 'collectible', name: '文物 1/5 (Subway Note)', description: '红色房间后的火车车厢墙上。' },
          { type: 'collectible', name: '卡牌 1/3 (The Imp)', description: '轨道末端破碎火车车门下。' },
          { type: 'collectible', name: '工作台 1/1', description: '红色房间爬梯子上去后的房间。' },
          { type: 'collectible', name: '日志 1/1 (Shambler Entry)', description: '首次击败跛行者 (Shamblers) 后调查尸体。' },
          { type: 'collectible', name: '卡牌 2/3 (Dr Daniela Star)', description: '储藏室笼子里。' },
          { type: 'collectible', name: '文物 2/5 (Whittled Statue)', description: '休息室 (Lounge) 微波炉旁。' },
          { type: 'collectible', name: '文物 3/5 (Soda Can Note)', description: '休息室打破贩卖机玻璃获得。' },
          { type: 'collectible', name: '文物 4/5 (Locker Room Note)', description: '休息室桌上。' },
          { type: 'collectible', name: '密码门', description: '休息室更衣室门。密码：15243。' },
          { type: 'collectible', name: '卡牌 3/3 (Bastet)', description: '地铁站爬过红色贩卖机左侧缝隙，手提箱上。' },
          { type: 'collectible', name: '文物 5/5 (Subway Station Note)', description: '爬上红色贩卖机后的火车车厢门上。' }
        ]
      },
      {
        title: '剧院 (The Theater)',
        stats: { artifacts: 4, tradingCards: 2 },
        content: [
          { type: 'collectible', name: '卡牌 1/2 (Mortem)', description: '大厅柜台后玻璃柜底层。' },
          { type: 'collectible', name: '文物 1/4 (Programme for Cassandra)', description: '大厅左侧绿色箱子上。' },
          { type: 'collectible', name: '文物 2/4 (Lone FEDRA Soldier Journal #1)', description: '二楼阳台桌上。' },
          { type: 'collectible', name: '卡牌 2/2 (Beyond)', description: '二楼走廊尽头死角沙发旁。' },
          { type: 'collectible', name: '文物 3/4 (Lone FEDRA Soldier Journal #2)', description: '放映室收音机上。' },
          { type: 'collectible', name: '文物 4/4 (The Sick Habit Flyer)', description: '舞台中央箱子上。' }
        ]
      },
      {
        title: '生日礼物 (The Birthday Gift)',
        stats: { artifacts: 1, tradingCards: 2, journalEntries: 2 },
        content: [
          { type: 'collectible', name: '日志 1/2 (T-Rex Entry)', description: '在霸王龙标志处记录。' },
          { type: 'collectible', name: '卡牌 1/2 (The Nighthawk)', description: '恐龙展区右侧的长椅上。' },
          { type: 'collectible', name: '奖杯 (Looks Good on You)', description: '给艾莉戴帽子，再给两只恐龙戴，最后给乔尔戴。' },
          { type: 'collectible', name: '日志 2/2 (Space Capsule Entry)', description: '太空展区长椅处记录。' },
          { type: 'collectible', name: '卡牌 2/2 (Saura)', description: '博物馆二区，麋鹿雕像右侧长椅下。' },
          { type: 'collectible', name: '文物 1/1 (Suicide Note)', description: '黑暗展区尸体旁。' }
        ]
      }
    ]
  },
  {
    id: 'seattle-day-2-ellie',
    title: '西雅图 第二天 (Seattle Day 2) - 艾莉',
    sections: [
      {
        title: '希尔克雷斯特 (Hillcrest)',
        stats: { artifacts: 10, tradingCards: 5, journalEntries: 1, workbenches: 2, safes: 1, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '卡牌 1/5 (Wachumero)', description: '刚控制艾莉时，向后转180度，跳进沟渠，爬上卡车后部。打破窗户，集换式卡牌就在后座上。' },
          { type: 'collectible', name: '文物 1/10 (Join WLF Note)', description: '继续沿路前进，打破窗户进入左手边的第二栋建筑（Majestic Laundromat 洗衣店）。在后方办公室里可以找到这张字条。' },
          { type: 'collectible', name: '工作台 1/2', description: '进入洗衣店对面的服装店（Rosemont）。下楼到地下室，工作台就在楼梯正前方。' },
          { type: 'collectible', name: '文物 2/10 (Boris’ Daughter’s Drawing)', description: '还在地下室时，左转，后方的桌子上放着这幅画。' },
          { type: 'collectible', name: '日志 1/2 (WLF Entry)', description: '翻过卡车看着WLF士兵开车离开后，正前方两家商店之间，检查横幅上的“♥♥♥♥ the WLF”涂鸦以获得新的日志条目。' },
          { type: 'collectible', name: '文物 3/10 (Yolanda’s Note)', description: '横幅左侧是一家名为“Used & Rare Books”的书店。里面的收银台后面有一张字条。' },
          { type: 'collectible', name: '文物 4/10 (Need a Plan)', description: '沿着路一直走到尽头的沟渠。然后跳上垃圾箱，进入上方的“Caroline Paper Co”文具店。字条在店铺中间。' },
          { type: 'collectible', name: '卡牌 2/5 (Sahir the Sorcerer)', description: '在同一栋建筑内，柜台后面的一些盒子里藏着这张卡牌。' },
          { type: 'collectible', name: '工作台 2/2', description: '继续前进，你需要爬上移动的垃圾箱才能继续。穿过墙洞后你会进入一家自行车店的修理间。工作台就在正前方，很难错过。' },
          { type: 'collectible', name: '卡牌 3/5 (Naledi the Youthful)', description: '就在右侧有自行车的角落里。' },
          { type: 'collectible', name: '文物 5/10 (Condolence Note)', description: '从自行车处进入右侧的相邻房间，搜寻左侧的桌子。' },
          { type: 'collectible', name: '手册 1/1 (Precision)', description: '这本手册也可以在酒类商店下方的地下室找到。那里有一些感染者，请小心。在另一端有一个洞，爬过去会进入一家儿童书店，手册就在一具变异尸体旁。' },
          { type: 'collectible', name: '文物 6/10 (Note in Tattoo Parlor)', description: '从窗户离开，进入马路对面的“Velvet Tattoo”纹身店。前往柜台后面的房间找到字条。' },
          { type: 'collectible', name: '保险箱 1/1 (Auto Parts)', description: '从后门离开纹身店，右转，移动垃圾箱进入左侧的小建筑（汽修店）。里面有保险箱。密码是 30-82-65。' },
          { type: 'collectible', name: '装备 (Short Gun Holster)', description: '保险箱内可以找到短枪枪套。' },
          { type: 'collectible', name: '文物 7/10 (Turn in Boris Note)', description: '回到有酒类商店的开阔区域，进入左侧的宠物店。在宠物店的后屋桌子上可以找到字条。' },
          { type: 'collectible', name: '文物 8/10 (Dale’s Combo)', description: '穿过宠物店的破墙进入酒吧，前往后面的厨房。进门左手边就是字条。' },
          { type: 'collectible', name: '卡牌 4/5 (Brainstorm)', description: '看到神秘爆炸的烟雾后，避开奔跑者，翻过围栏进入一个后院，那里有一个小热水浴缸和左侧的儿童游戏屋。绕到游戏屋后面可以找到卡牌。' },
          { type: 'collectible', name: '文物 9/10 (Boris’ Confession)', description: '进入房子，右侧的茶几上放着这张字条。' },
          { type: 'collectible', name: '文物 10/10 (Rosemont’s Flyer)', description: '在我们进来的门左侧的桌子上还有一张字条。' },
          { type: 'collectible', name: '武器 (Bow)', description: '很难错过，进入车库会触发战斗。从感染者的尸体上捡起弓。' },
          { type: 'collectible', name: '卡牌 5/5 (Reverb)', description: '在希尔克雷斯特章节末尾的大型遭遇战区域后，上楼进入那栋两层的大房子，沿着楼梯走，进入左手边的第二扇门。卡牌在那间卧室的床底下。' }
        ]
      },
      {
        title: '寻找琴弦 (Finding Strings)',
        stats: { artifacts: 1, tradingCards: 1, journalEntries: 1 },
        content: [
          { type: 'collectible', name: '日志 1/1 (Scenic Woods)', description: '关卡一开始，右侧悬崖边有绝佳的景色，走过去按提示记录。' },
          { type: 'collectible', name: '卡牌 1/1 (The Austringer)', description: '和乔尔骑马下山进城，下马后跟随他走向乐器店，直到前方道路被阻断。当他建议穿过酒店时，爬上卡车，下到积水的小水坑处，查看边缘的一辆白色轿车，里面有一本书夹着卡牌。' },
          { type: 'collectible', name: '文物 1/1 (Tara’s Invitation)', description: '和乔尔进入酒店后，跟随他直到你需要翻过墙洞。进入走廊对面的107号房间。在房间内的梳妆台上找到字条。' }
        ]
      },
      {
        title: '塞拉菲特 (The Seraphites)',
        stats: { artifacts: 7, tradingCards: 6, journalEntries: 3, workbenches: 2, safes: 2, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '卡牌 1/6 (Randy Styles)', description: 'Quickmart超市货架。' },
          { type: 'collectible', name: '文物 1/7 (WLF Target List)', description: '啤酒吧 (Kingsgate Brewing) 内尸体。' },
          { type: 'collectible', name: '日志 1/3 (Feel Her Love)', description: '办公室墙上涂鸦。' },
          { type: 'collectible', name: '卡牌 2/6 (Shift)', description: '办公室电梯井房间。' },
          { type: 'collectible', name: '文物 2/7 (Last Letter to Husband)', description: '办公室沙发。' },
          { type: 'collectible', name: '文物 3/7 (Evacuation Letter)', description: '公寓二楼厨房桌子。' },
          { type: 'collectible', name: '保险箱 1/2 (Luxury Apartments)', description: '公寓卧室衣柜。密码：10-08-83。' },
          { type: 'collectible', name: '卡牌 3/6 (Star Sign)', description: '公寓床头柜。' },
          { type: 'collectible', name: '工作台 1/2', description: '对面公寓厨房。' },
          { type: 'collectible', name: '文物 4/7 (WLF Deserter Letter)', description: '对面公寓卧室。' },
          { type: 'collectible', name: '手册 1/1 (Explosives)', description: '对面公寓卧室床上。' },
          { type: 'collectible', name: '日志 2/3 (Hospital Sign)', description: '看见医院标志后。' },
          { type: 'collectible', name: '卡牌 4/6 (Arch-Enemy)', description: '脚手架下房间抽屉。' },
          { type: 'collectible', name: '日志 3/3 (Scars)', description: '公园战后，公交车站旁的尸体。' },
          { type: 'collectible', name: '卡牌 5/6 (Doppelganger)', description: '酒店大厅二楼玩具堆。' },
          { type: 'collectible', name: '文物 5/7 (Dying Husband’s Plea)', description: '酒店防火梯顶层房间。' },
          { type: 'collectible', name: '卡牌 6/6 (Bhat M’andarr)', description: '药店 (Pharmacy) 柜台左侧。' },
          { type: 'collectible', name: '文物 6/7 (Pharmacy Note)', description: '药店柜台后。' },
          { type: 'collectible', name: '保险箱 2/2 (Pharmacy)', description: '药店后屋墙洞内。密码：38-55-23。' },
          { type: 'collectible', name: '工作台 2/2', description: '药店后屋。' },
          { type: 'collectible', name: '文物 7/7 (Hospital Supply List)', description: '医院楼梯后房间。' }
        ]
      }
    ]
  },
  {
    id: 'seattle-day-3-ellie',
    title: '西雅图 第三天 (Seattle Day 3) - 艾莉',
    sections: [
      {
        title: '通往水族馆的路 (Road to the Aquarium)',
        stats: { artifacts: 3, tradingCards: 4, journalEntries: 1, workbenches: 2 },
        content: [
          { type: 'collectible', name: '卡牌 1/4 (Esquire)', description: '在穿过红色幕布离开剧院舞台之前，向幕布左侧看，在一堆旅行箱中间可以找到 Esquire 收集卡牌。' },
          { type: 'collectible', name: '工作台 1/2', description: '离开剧院后，你会和杰西一起穿过一栋名为 WPL 的黑暗建筑。走到后面，进入左侧开着的门。爬过倒塌的文件柜下方，工作台就在左侧。' },
          { type: 'collectible', name: '卡牌 2/4 (Tormentra)', description: '在同一个房间里，转身180度，你会发现桌子上有一张 Tormentra 卡牌。' },
          { type: 'collectible', name: '文物 1/3 (Garage Note)', description: '和杰西一起游过被淹没的区域后，向左急转进入一个满是循声者（Clickers）的停车库。在第一层，靠近车库入口处的一具尸体旁，你会找到这张便条。' },
          { type: 'collectible', name: '卡牌 3/4 (Tanager)', description: '爬进窗户后我们到达一家书店。如果在刚进来的地方正前方跳下去，落到这个小平台上，就在下方，穿过爬行空间，左边就是卡牌。或者如果迷路了，就在收银台区域的正前方。' },
          { type: 'collectible', name: '日志 1/1 (Mushrooms)', description: '在大书店的底层，找到左后方的儿童区，那里装饰着《爱丽丝梦游仙境》的壁画和蘑菇道具。与蘑菇互动，触发艾莉记录日志。' },
          { type: 'collectible', name: '文物 2/3 (Bookstore Note)', description: '就在蘑菇的右边，你会发现这张便条放在桌子上的一些书中。' },
          { type: 'collectible', name: '文物 3/3 (Textile Note)', description: '目睹有人被狗袭击后，你会遇到一栋标有“Rachel\'s Fabrics”的建筑，外面有脚手架。上到二楼，在两扇窗户之间找到纺织品笔记。' },
          { type: 'collectible', name: '工作台 2/2', description: '游过一辆公交车下方后，出现在一家破旧的美容店附近，里面有人体模型。爬上去之后，不要穿过墙洞，而是向左走继续向上，在商店尽头找到第二个工作台。' },
          { type: 'collectible', name: '卡牌 4/4 (Tatuaje)', description: '发现那艘船并跟随进入附近的建筑后，你会掉进一个充满废墟的狭窄区域。向左走，右边有一个我们可以翻过的架子，卡牌就在架子的另一边。' }
        ]
      },
      {
        title: '淹没的城市 (The Flooded City)',
        stats: { artifacts: 6, tradingCards: 2, journalEntries: 1, workbenches: 2, safes: 1 },
        content: [
          { type: 'collectible', name: '卡牌 1/2 (Seff-L’ho’phad)', description: '乘船过门后上岸，抽屉里。' },
          { type: 'collectible', name: '日志 1/1 (Ferris Wheel)', description: '摩天轮窗景。' },
          { type: 'collectible', name: '文物 1/6 (Stash Note)', description: '尸体旁。' },
          { type: 'collectible', name: '保险箱 1/1 (Boat)', description: '笼子里的保险箱。密码：70-12-64。' },
          { type: 'collectible', name: '工作台 1/2', description: '制造车间内。' },
          { type: 'collectible', name: '文物 2/6 (Shambler Note)', description: 'Carthy Hotel 入口右侧小岛尸体。' },
          { type: 'collectible', name: '文物 3/6 (Sniper’s Note)', description: '单轨列车车厢内。' },
          { type: 'collectible', name: '文物 4/6 (Encampment Note)', description: '塞拉菲特基地二楼墙上。' },
          { type: 'collectible', name: '文物 5/6 (Arcade Flyer)', description: '街机厅一楼餐桌。' },
          { type: 'collectible', name: '工作台 2/2', description: '街机厅二楼。' },
          { type: 'collectible', name: '卡牌 2/2 (Khazakh Bright)', description: '街机厅一楼奖品柜台后。' },
          { type: 'collectible', name: '文物 6/6 (Arcade Note)', description: '街机厅二楼网吧墙上。' }
        ]
      },
      {
        title: '渗透 (Infiltration)',
        stats: { journalEntries: 1 },
        content: [
          { type: 'collectible', name: '日志 1/1 (Owen Moore Pendant)', description: '休息室包里。' }
        ]
      }
    ]
  },
  {
    id: 'park-abby',
    title: '公园 (The Park) - 埃比',
    sections: [
      {
        title: '追踪课 (Tracking Lesson)',
        stats: { artifacts: 3, coins: 1 },
        content: [
          { type: 'collectible', name: '文物 1/3 (Thank You Card from Mel)', description: '梅尔的感谢卡：剧情相关。章节开始时自动出现在埃比的背包中。' },
          { type: 'collectible', name: '文物 2/3 (Owen’s Drawing of Abby)', description: '欧文画的艾比：剧情相关。同上，已经收集在背包中。' },
          { type: 'collectible', name: '文物 3/3 (Zoo Holiday Brochure)', description: '动物园假日手册：穿过公园时，你会看到右边有一个凉亭。在里面的长椅上可以找到这本手册。' },
          { type: 'collectible', name: '硬币 1/1 (Virginia)', description: '弗吉尼亚州25分硬币：在厕所遇到一只打翻垃圾桶的松鼠后，打破水槽上方的窗户，翻进栅栏围起来的区域。爬过去，右边的垃圾箱上有一枚硬币。' }
        ]
      }
    ]
  },
  {
    id: 'seattle-day-1-abby',
    title: '西雅图 第一天 (Seattle Day 1) - 埃比',
    sections: [
      {
        title: '体育场 (The Stadium)',
        stats: { coins: 4 },
        content: [
          { type: 'collectible', name: '硬币 1/4 (Alaska)', description: '章节开始时，离开艾比俯瞰体育场的房间后，走到楼梯左侧一点，硬币就在左侧的地板上。' },
          { type: 'collectible', name: '硬币 2/4 (Maine)', description: '跟随两人经过食品市场后，你会来到人们洗衣服的地方。继续向前走，不要上楼梯，就在左侧那张可以俯瞰体育场的空长椅上，你会找到这枚硬币。' },
          { type: 'collectible', name: '硬币 3/4 (New Jersey)', description: '当你到达体育场底层，和狗玩耍（或者无视它/把球扔过围栏）之后，继续跟随两人直到进入隧道，查看右侧墙壁，在 WLF 壁画下方捡起这枚硬币。' },
          { type: 'collectible', name: '硬币 4/4 (Vermont)', description: '到达靶场并拿到枪后，进入下一个房间左转，检查靠墙的金属架子，找到这枚硬币。' }
        ]
      },
      {
        title: '步行 (On Foot)',
        stats: { artifacts: 1, coins: 4, workbenches: 1, safes: 1, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '硬币 1/4 (Kentucky)', description: '仓库桌上。' },
          { type: 'collectible', name: '硬币 2/4 (Massachusetts)', description: '温室收银台。' },
          { type: 'collectible', name: '工作台 1/1', description: '船库冰箱旁。' },
          { type: 'collectible', name: '硬币 3/4 (Ohio)', description: '船库屋顶桌上。' },
          { type: 'collectible', name: '手册 1/1 (Stealth)', description: '悬挂的船内。' },
          { type: 'collectible', name: '硬币 4/4 (Indiana)', description: '拖车内。' },
          { type: 'collectible', name: '文物 1/2 (WLF Gun Cache Note)', description: '拖车门旁。' },
          { type: 'collectible', name: '保险箱 1/1 (Big Win Lottery)', description: '拖车对面墙洞进去。密码：17-38-07。' },
          { type: 'collectible', name: '武器 (Hunting Pistol)', description: '保险箱内。' }
        ]
      },
      {
        title: '前沿基地 (The Forward Base)',
        stats: { artifacts: 1, coins: 3, workbenches: 1 },
        content: [
          { type: 'collectible', name: '硬币 1/3 (California)', description: '下车后右侧栏杆。' },
          { type: 'collectible', name: '硬币 2/3 (New Mexico)', description: '入口检查点左侧箱子。' },
          { type: 'collectible', name: '工作台 1/1', description: '军械库帐篷内。' },
          { type: 'collectible', name: '硬币 3/3 (South Carolina)', description: '餐厅桌子上。' },
          { type: 'collectible', name: '文物 1/1 (WLF Interrogator\'s Letter)', description: '餐厅桌子上。' }
        ]
      },
      {
        title: '敌对领土 (Hostile Territory)',
        stats: { artifacts: 12, coins: 1, workbenches: 1, safes: 1, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '文物 1/12 (Scar’s Suicide Note)', description: '爬窗进入房间，尸体旁。' },
          { type: 'collectible', name: '手册 1/1 (Close Quarters)', description: '同一房间。' },
          { type: 'collectible', name: '硬币 1/1 (North Dakota)', description: '爬上货车进公寓，抽屉里。' },
          { type: 'collectible', name: '保险箱 1/1 (Jasmine Bakery)', description: '面包店收银台后。密码：68-96-89。' },
          { type: 'collectible', name: '文物 2/12 (Plea to Seraphite Prophet)', description: '红色食品店楼顶尸体。' },
          { type: 'collectible', name: '文物 3/12 (Jasmine Bakery Safe Note)', description: '唐人街二楼。' },
          { type: 'collectible', name: '文物 4/12 (Strange Relic)', description: '房间桌上的“奇异遗物” (奖杯物品)。' },
          { type: 'collectible', name: '武器 (Double Barrel Shotgun)', description: '商店柜台下。' },
          { type: 'collectible', name: '文物 5-10 (Seraphite Prayers)', description: '卡车周围和车厢内共6个。' },
          { type: 'collectible', name: '文物 11/12 (Prayer)', description: '美甲店桌上。' },
          { type: 'collectible', name: '装备 (Short Gun Holster)', description: '美甲店后屋。' },
          { type: 'collectible', name: '文物 12/12 (Prayer)', description: '爬过废墟后，左侧房间桌上。' },
          { type: 'collectible', name: '工作台 1/1', description: '同一房间。' }
        ]
      },
      {
        title: '森林 (The Forest)',
        stats: { artifacts: 1, workbenches: 1, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '工作台 1/1', description: '车库内。' },
          { type: 'collectible', name: '手册 1/1 (Firearms)', description: '休息室抽屉。' },
          { type: 'collectible', name: '文物 1/1 (Failed Truce)', description: '休息室桌子。' }
        ]
      },
      {
        title: '海岸 (The Coast)',
        stats: { artifacts: 3, coins: 4, workbenches: 1, safes: 1, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '工作台 1/1', description: '仓库内。' },
          { type: 'collectible', name: '装备 (Long Gun Holster)', description: '仓库办公室。' },
          { type: 'collectible', name: '硬币 1/4 (Alabama)', description: '高速公路尽头尸体旁。' },
          { type: 'collectible', name: '文物 1/3 (Infirmary Note)', description: '船舱医务室床上。' },
          { type: 'collectible', name: '武器 (Crossbow)', description: '走廊尽头尸体上。' },
          { type: 'collectible', name: '文物 2/3 (Mutiny Note)', description: '走廊另一头床上。' },
          { type: 'collectible', name: '硬币 2/4 (West Virginia)', description: '二楼走廊尽头熊玩偶旁。' },
          { type: 'collectible', name: '保险箱 1/1 (Bridge)', description: '船桥上。密码：90-77-01。' },
          { type: 'collectible', name: '手册 1/1 (Ordnance)', description: '保险箱内。' },
          { type: 'collectible', name: '文物 3/3 (Ferry Log)', description: '船长尸体旁。' },
          { type: 'collectible', name: '硬币 3/4 (Utah)', description: '船桥顶部梯子后。' },
          { type: 'collectible', name: '硬币 4/4 (Mississippi)', description: '水族馆外喷泉里。' }
        ]
      }
    ]
  },
  {
    id: 'seattle-day-2-abby',
    title: '西雅图 第二天 (Seattle Day 2) - 埃比',
    sections: [
      {
        title: '捷径 (The Shortcut)',
        stats: { artifacts: 6, coins: 2, workbenches: 2, safes: 1 },
        content: [
          { type: 'collectible', name: '文物 1/6 (Amputation Supplies)', description: '剧情相关。章节开始时自动添加到你的背包中。' },
          { type: 'collectible', name: '硬币 1/2 (Nevada)', description: '当勒夫指出我们需要攀爬的高楼后，进入该区域右侧的理发店 (Barber Shop)。在收银台后面可以找到这枚硬币。' },
          { type: 'collectible', name: '文物 2/6 (Survivor Plea)', description: '沿着混凝土板穿过水域到达对面的建筑后，上楼进入右侧的公寓。进门后右转，你会发现地上有一张便条。' },
          { type: 'collectible', name: '文物 3/6 (Neighbor Exchange)', description: '在跳入急流之前，左转跳到附近蓝色建筑的阳台上。打破窗户进入公寓。在里面，找到厨房附近有白板的桌子。那里有一张便条，提供了保险箱密码的线索。' },
          { type: 'collectible', name: '保险箱 1/1 (Apartment Bedroom Safe)', description: '就在你身后或白板前方是一间有保险箱的卧室。密码：30-23-04。' },
          { type: 'collectible', name: '工作台 1/2', description: '手机店 (Interbay Wireless) 角落。' },
          { type: 'collectible', name: '文物 4/6 (Scavenging List)', description: '手机店尸体旁。' },
          { type: 'collectible', name: '硬币 2/2 (Colorado)', description: '眼镜店 (Westport Optix) 窗外窗台上。' },
          { type: 'collectible', name: '文物 5/6 (Seraphite Truce)', description: '办公楼房间桌上。' },
          { type: 'collectible', name: '工作台 2/2', description: '塞拉菲特神龛房间。' },
          { type: 'collectible', name: '文物 6/6 (Seraphite Orders)', description: '电梯后走廊墙上。' }
        ]
      },
      {
        title: '下降 (The Descent)',
        stats: { artifacts: 3, coins: 5, safes: 1, weapons: 1 },
        content: [
          { type: 'collectible', name: '硬币 1/5 (Illinois)', description: '泳池底部。' },
          { type: 'collectible', name: '文物 1/3 (Gym Safe Combo)', description: '果汁吧厨房。' },
          { type: 'collectible', name: '保险箱 1/1 (Gym)', description: '健身房储藏室。密码：12-18-79。' },
          { type: 'collectible', name: '文物 2/3 (FEDRA Orders)', description: '楼梯间尸体。' },
          { type: 'collectible', name: '文物 3/3 (FEDRA Final Notes)', description: '穿墙后尸体旁。' },
          { type: 'collectible', name: '武器 (Flamethrower)', description: '浴室尸体上或沙发上。' },
          { type: 'collectible', name: '硬币 2/5 (Oregon)', description: '1107号房间。' },
          { type: 'collectible', name: '硬币 3/5 (Wisconsin)', description: '电梯井下贩卖机。' },
          { type: 'collectible', name: '硬币 4/5 (Rhode Island)', description: '户外酒吧柜台后。' },
          { type: 'collectible', name: '硬币 5/5 (Missouri)', description: '医院前建筑走廊尽头。' }
        ]
      },
      {
        title: '归零地 (Ground Zero)',
        stats: { artifacts: 5, coins: 2, workbenches: 1 },
        content: [
          { type: 'collectible', name: '硬币 1/2 (Washington)', description: '咖啡厅柜台下。' },
          { type: 'collectible', name: '文物 1/5 (Annex Letter)', description: '办公室爬行进入。' },
          { type: 'collectible', name: '文物 2/5 (Chapel Note)', description: '教堂祭坛。' },
          { type: 'collectible', name: '文物 3/5 (Soldier’s Letter)', description: '隔离区包里。' },
          { type: 'collectible', name: '文物 4/5 (Patient’s Note)', description: '24号房间。' },
          { type: 'collectible', name: '文物 5/5 (Doctor’s Note)', description: '电力室桌上。' },
          { type: 'collectible', name: '工作台 1/1', description: '电力室墙洞后。' },
          { type: 'collectible', name: '硬币 2/2 (Hawaii)', description: '车库保安室。' }
        ]
      }
    ]
  },
  {
    id: 'seattle-day-3-abby',
    title: '西雅图 第三天 (Seattle Day 3) - 埃比',
    sections: [
      {
        title: '码头 (The Marina)',
        stats: { artifacts: 1, coins: 2 },
        content: [
          { type: 'collectible', name: '硬币 1/2 (Kansas)', description: '起始处楼梯后。' },
          { type: 'collectible', name: '硬币 2/2 (Louisiana)', description: '车站坡道右侧。' },
          { type: 'collectible', name: '文物 1/1 (Marina Note)', description: '码头柜台上。' }
        ]
      },
      {
        title: '岛屿 (The Island)',
        stats: { artifacts: 4, coins: 3, workbenches: 1 },
        content: [
          { type: 'collectible', name: '硬币 1/3 (Idaho)', description: '卡车后。' },
          { type: 'collectible', name: '文物 1/4 (WLF Scout Journal)', description: '吊死士兵旁的尸体。' },
          { type: 'collectible', name: '硬币 2/3 (North Carolina)', description: '瀑布旁车门。' },
          { type: 'collectible', name: '文物 2/4 (Venison Distribution)', description: '大木屋内。' },
          { type: 'collectible', name: '硬币 3/3 (Montana)', description: '伐木场二楼。' },
          { type: 'collectible', name: '文物 3/4 (Mournful Prayer)', description: '瞭望塔旁小屋。' },
          { type: 'collectible', name: '文物 4/4 (Young Seraphite’s Journal)', description: '对面小屋床上。' },
          { type: 'collectible', name: '工作台 1/1', description: '同一小屋。' }
        ]
      },
      {
        title: '逃离 (The Escape)',
        stats: { coins: 1, workbenches: 1 },
        content: [
          { type: 'collectible', name: '硬币 1/1 (Arkansas)', description: '卡车左侧购物车后。' },
          { type: 'collectible', name: '工作台 1/1', description: '爬梯子进窗后的房间。' }
        ]
      }
    ]
  },
  {
    id: 'santa-barbara',
    title: '圣塔芭芭拉 (Santa Barbara)',
    sections: [
      {
        title: '康斯坦斯2425 (2425 Constance)',
        stats: { artifacts: 1 },
        content: [
          { type: 'collectible', name: '文物 1/1', description: '厕所马桶上。' }
        ]
      },
      {
        title: '推向内陆 (Pushing Inland)',
        stats: { artifacts: 3, tradingCards: 1, journalEntries: 1, workbenches: 1 },
        content: [
          { type: 'collectible', name: '文物 1/3 (Abby’s Note)', description: '船上柜台。' },
          { type: 'collectible', name: '文物 2/3 (Mansion Note)', description: '车库桌上。' },
          { type: 'collectible', name: '卡牌 1/1 (CBB-73)', description: '豪宅二楼卧室。' },
          { type: 'collectible', name: '文物 3/3 (Runaway Warning)', description: '厨房岛台。' },
          { type: 'collectible', name: '工作台 1/1', description: '厨房内。' },
          { type: 'collectible', name: '日志 1/1', description: '爬出豪宅后看房子。' }
        ]
      },
      {
        title: '度假村 (The Resort)',
        stats: { artifacts: 2, tradingCards: 1, journalEntries: 1, workbenches: 1, weapons: 1 },
        content: [
          { type: 'collectible', name: '武器 (Silenced SMG)', description: '剧情获得。' },
          { type: 'collectible', name: '日志 1/1 (Rattler Van)', description: '响尾蛇涂鸦货车。' },
          { type: 'collectible', name: '文物 1/2 (Slave Note)', description: '铁轨旁桶上。' },
          { type: 'collectible', name: '工作台 1/1', description: '花园木屋。' },
          { type: 'collectible', name: '卡牌 1/1 (Sparkthug)', description: '进屋后右侧桌子。' },
          { type: 'collectible', name: '文物 2/2 (Rattler’s Letter)', description: '二楼床头柜。' }
        ]
      }
    ]
  },
  {
    id: 'safes-p2',
    title: '🔐 保险箱与密码全解',
    isTable: true,
    content: [
      { chapter: '杰克逊 - 巡逻', location: '超市办公室', code: '07-20-13', reward: '补给' },
      { chapter: '西雅图D1(艾莉) - 市中心', location: '银行金库', code: '60-23-06', reward: '泵动式霰弹枪' },
      { chapter: '西雅图D1(艾莉) - 市中心', location: '西2门 (Gate West 2)', code: '04-51', reward: '卡牌, 补给' },
      { chapter: '西雅图D1(艾莉) - 市中心', location: '法院办公室', code: '86-07-22', reward: '补给' },
      { chapter: '西雅图D1(艾莉) - 国会山', location: '二手店 (Thrift Store)', code: '55-01-33', reward: '补给' },
      { chapter: '西雅图D1(艾莉) - 隧道', location: '更衣室门 (密码门)', code: '15243', reward: '补给' },
      { chapter: '西雅图D2(艾莉) - 希尔克雷斯特', location: '汽修店 (Auto Parts)', code: '30-82-65', reward: '枪套' },
      { chapter: '西雅图D2(艾莉) - 塞拉菲特', location: '豪华公寓卧室', code: '10-08-83', reward: '补给' },
      { chapter: '西雅图D2(艾莉) - 塞拉菲特', location: '药店 (Pharmacy)', code: '38-55-23', reward: '补给' },
      { chapter: '西雅图D3(艾莉) - 淹没的城市', location: '船上笼子', code: '70-12-64', reward: '补给' },
      { chapter: '西雅图D1(埃比) - 步行', location: '乐透店墙洞 (Big Win)', code: '17-38-07', reward: '狩猎手枪' },
      { chapter: '西雅图D1(埃比) - 敌对领土', location: '茉莉花面包店', code: '68-96-89', reward: '补给' },
      { chapter: '西雅图D1(埃比) - 海岸', location: '船桥 (Bridge)', code: '90-77-01', reward: '手册' },
      { chapter: '西雅图D2(埃比) - 捷径', location: '公寓卧室', code: '30-23-04', reward: '补给' },
      { chapter: '西雅图D2(埃比) - 下降', location: '健身房储藏室', code: '12-18-79', reward: '补给' }
    ]
  }
];
