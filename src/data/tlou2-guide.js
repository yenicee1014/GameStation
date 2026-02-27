export const tlou2GuideData = [
  {
    id: 'intro',
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
    id: 'contents',
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
    id: 'jackson',
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
            type: 'collectible',
            name: '卡牌 1/2 (Seismicayla)',
            description: '离开温室到达主街道后，左转到画廊，沿着阳台走到挂着“Help Wanted”的板子处。'
          },
          {
            type: 'collectible',
            name: '文物 1/1 (Volunteer Request)',
            description: '沿着主街道走，在Tipsy Bison酒吧前，看街道对面有一个铁匠铺。在木制人行道尽头的红梯子旁。'
          },
          {
            type: 'collectible',
            name: '卡牌 2/2 (The Keene Twins)',
            description: '在酒吧与Seth和Maria交谈后，绕到酒吧另一头，飞镖盘左侧的桶上。'
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
          { type: 'collectible', name: '卡牌 1/4 (Motivator)', description: '巴士站右侧墙上。' },
          { type: 'collectible', name: '卡牌 2/4 (The Starfire Kids)', description: '公路左侧的建筑工地拖车内，软木板上。' },
          { type: 'collectible', name: '文物 1/6 (Map of Seattle)', description: '建筑工地拖车里屋的抽屉内。' },
          { type: 'collectible', name: '日志 1/1 (WLF Gate Entry)', description: '大门墙上的标语“TRESPASSERS KILLED ON SIGHT”。' },
          { type: 'collectible', name: '文物 2/6 (Refugee Note)', description: '大门左侧军用拖车内。' },
          { type: 'collectible', name: '文物 3/6 (Infected Infographic)', description: '大门区域另一侧的军用拖车内。' },
          { type: 'collectible', name: '卡牌 3/4 (Chessmaster)', description: '爬上瞭望塔顶层，桌子上。' },
          { type: 'collectible', name: '文物 4/6 (Isaac’s Orders)', description: '瞭望塔顶层，转身左侧箱子上。' },
          { type: 'collectible', name: '文物 5/6 (Checkpoint Gate Codes)', description: '砸碎玻璃进入大门控制室，桌子抽屉里。' },
          { type: 'collectible', name: '卡牌 4/4 (Oozer)', description: '用发电机电缆扔过控制室屋顶，爬上去，椅子旁边。' },
          { type: 'collectible', name: '文物 6/6 (Rooftop Note)', description: '控制室屋顶的椅子上。' }
        ]
      },
      {
        title: '市中心 (Downtown)',
        stats: { artifacts: 18, tradingCards: 5, journalEntries: 2, workbenches: 1, safes: 3, weapons: 1, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '文物 1/18 (FEDRA Census Document)', description: '发电机前的门卫室抽屉里。' },
          { type: 'collectible', name: '文物 2/18 (Bank Heist Plans)', description: '西湖银行 (Westlake Bank) 金库房间，尸体旁的包里。' },
          { type: 'collectible', name: '保险箱 1/3 (Bank Vault)', description: '银行金库大门。密码：60-23-06。' },
          { type: 'collectible', name: '武器 1/1 (Pump Shotgun)', description: '金库内尸体上。' },
          { type: 'collectible', name: '文物 3/18 (Bank Robber Letter)', description: '金库内桌子上。' },
          { type: 'collectible', name: '文物 4/18 (Antique Ring)', description: '金库角落的保险柜里 (奖杯: So Great and Small)。' },
          { type: 'collectible', name: '文物 5/18 (Cache Hunter Note)', description: '银行外的废墟建筑，包里的尸体旁。' },
          { type: 'collectible', name: '文物 6/18 (Letter from Isaac)', description: '坦克附近的废墟角落，骷髅旁的包里。' },
          { type: 'collectible', name: '卡牌 1/5 (Doctor Uckmann)', description: '坦克附近的废墟顶层。' },
          { type: 'collectible', name: '卡牌 2/5 (Das Wort)', description: 'Valiant Music Shop (乐器店) 柜台后。' },
          { type: 'collectible', name: '文物 7/18 (Street Drawing)', description: '乐器店二楼过桥到哨站，抽屉里。' },
          { type: 'collectible', name: '日志 1/2 (Street Drawing Entry)', description: '哨站处绘制。' },
          { type: 'collectible', name: '工作台 1/1', description: '哨站桥对面的草地帐篷里。' },
          { type: 'collectible', name: '保险箱 2/3 (Gate West 2)', description: '麦迪逊街 (Madison St) 附近的西2门 (Gate West 2)。密码：04-51。' },
          { type: 'collectible', name: '卡牌 3/5 (Flo)', description: '西2门保险箱内。' },
          { type: 'collectible', name: '文物 8/18 (WLF Community Supply Chest Note)', description: '建筑楼梯上的补给箱里。' },
          { type: 'collectible', name: '文物 9/18 (WLF Safe House Supply Note)', description: 'Ruston Coffee (咖啡店) 柜台上。' },
          { type: 'collectible', name: '卡牌 4/5 (Big Blue)', description: '咖啡店柜台后抽屉。' },
          { type: 'collectible', name: '文物 10/18 (Pet Store Keys)', description: '咖啡店厕所换尿布台上 (这是宠物店钥匙)。' },
          { type: 'collectible', name: '文物 11/18 (Join WLF Note)', description: 'Barkos Pet Shop (宠物店) 入口打印机上 (需钥匙)。' },
          { type: 'collectible', name: '装备 (Long Gun Holster)', description: '宠物店柜台桌上。' },
          { type: 'collectible', name: '手册 1/2 (Crafting)', description: '公路断桥上的消防车内，需用绳索荡过去。' },
          { type: 'collectible', name: '文物 12/18 (Note to Informant)', description: '瀑布下的FEDRA卡车内。' },
          { type: 'collectible', name: '文物 13/18 (Emergency Protocols Memo)', description: '犹太教堂 (Synagogue) 外的哨站梯子上或教堂内。' },
          { type: 'collectible', name: '日志 2/2 (Hebrew Calendar)', description: '犹太教堂二楼拉比办公室的日历。' },
          { type: 'collectible', name: '文物 14/18 (Rabbi Saunder’s Letter)', description: '拉比办公室抽屉。' },
          { type: 'collectible', name: '文物 15/18 (Plea to a Friend)', description: '法院 (Courthouse) 大厅尽头尸体旁。' },
          { type: 'collectible', name: '文物 16/18 (Lt. Torres’ Final Memorandum)', description: '法院办公室，拔出尸体上的砍刀获得。' },
          { type: 'collectible', name: '文物 17/18 (List of Known WLF Agitators)', description: '法院办公室文件柜。' },
          { type: 'collectible', name: '保险箱 3/3 (Courthouse)', description: '法院办公室窗户下。密码：86-07-22 (白板上)。' },
          { type: 'collectible', name: '文物 18/18 (WLF Recruiter Journal)', description: 'Serevena Hotel (旅馆) 二楼房间抽屉。' },
          { type: 'collectible', name: '卡牌 5/5 (Know It All)', description: '同一房间两床之间的床头柜。' }
        ]
      },
      {
        title: '东布鲁克小学 (Eastbrook Elementary)',
        stats: { artifacts: 3, tradingCards: 1 },
        content: [
          { type: 'collectible', name: '文物 1 & 2 (Leah’s Note & Photo)', description: '剧情自动获得。' },
          { type: 'collectible', name: '文物 3/3 (Isaac’s Mandate)', description: '屋顶离开时的房间桌上。' },
          { type: 'collectible', name: '卡牌 1/1 (Cardio)', description: '跳到公寓卧室，床边抽屉。' }
        ]
      },
      {
        title: '国会山 (Capitol Hill)',
        stats: { artifacts: 7, tradingCards: 6, workbenches: 2, safes: 1, trainingManuals: 1 },
        content: [
          { type: 'collectible', name: '卡牌 1/6 (Kinnard, Esq.)', description: '3号房子一楼小桌。' },
          { type: 'collectible', name: '文物 1/7 (Chevy’s Apology)', description: '6号公寓楼上卧室床上。' },
          { type: 'collectible', name: '卡牌 2/6 (Rockafella)', description: '汽车旅馆 (Capitol Inn) 3号房外垃圾桶旁。' },
          { type: 'collectible', name: '文物 2/7 (Raul’s Olive Branch)', description: '推垃圾箱爬上公寓阳台，厨房抽屉。' },
          { type: 'collectible', name: '工作台 1/2', description: '加油站车库内。' },
          { type: 'collectible', name: '文物 3/7 (Rebecca’s Tip Off)', description: '书店内的咖啡屋，咖啡机旁。' },
          { type: 'collectible', name: '手册 1/1 (Stealth)', description: '同一咖啡屋，角落桌上。' },
          { type: 'collectible', name: '卡牌 3/6 (Doctor Stern)', description: '书店里屋，红箱子上。' },
          { type: 'collectible', name: '卡牌 4/6 (Sergeant Frost)', description: 'Olive Street Market (杂货店) 后屋储物柜。' },
          { type: 'collectible', name: '卡牌 5/6 (Candelabra)', description: '陷阱爆炸后的商店内，ATM机旁。' },
          { type: 'collectible', name: '文物 4/7 (Tower Doodles)', description: '爬梯子上的哨站。' },
          { type: 'collectible', name: '文物 5/7 (Raul’s Account)', description: '河边卡车后车厢。' },
          { type: 'collectible', name: '文物 6/7 (Fran’s Refusal)', description: '武术馆 (Martial Arts Dojo) 软木板上。' },
          { type: 'collectible', name: '工作台 2/2', description: '武术馆后方房间。' },
          { type: 'collectible', name: '卡牌 6/6 (Blizzarebra)', description: '二手店 (Thrift Store) 书架上。' },
          { type: 'collectible', name: '文物 7/7 (Thrift Store Reminder)', description: '二手店后屋墙上。' },
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
          { type: 'collectible', name: '日志 1/2 (T-Rex Entry)', description: '霸王龙标志处。' },
          { type: 'collectible', name: '卡牌 1/2 (The Nighthawk)', description: '恐龙展区右侧长椅。' },
          { type: 'collectible', name: '奖杯 (Looks Good on You)', description: '给艾莉戴帽子，再给两只恐龙戴，最后给乔尔戴。' },
          { type: 'collectible', name: '日志 2/2 (Space Capsule Entry)', description: '太空展区长椅处。' },
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
          { type: 'collectible', name: '卡牌 1/5 (Wachumero)', description: '开局身后卡车窗户内。' },
          { type: 'collectible', name: '文物 1/10 (Join WLF Note)', description: '洗衣店后屋。' },
          { type: 'collectible', name: '工作台 1/2', description: '服装店地下室。' },
          { type: 'collectible', name: '文物 2/10 (Boris’ Daughter’s Drawing)', description: '地下室桌上。' },
          { type: 'collectible', name: '日志 1/2 (WLF Entry)', description: '爬过卡车后，横幅涂鸦处。' },
          { type: 'collectible', name: '文物 3/10 (Yolanda’s Note)', description: '书店柜台后。' },
          { type: 'collectible', name: '文物 4/10 (Need a Plan)', description: 'Caroline Paper Co 店内。' },
          { type: 'collectible', name: '卡牌 2/5 (Sahir the Sorcerer)', description: 'Caroline Paper Co 柜台后盒子。' },
          { type: 'collectible', name: '工作台 2/2', description: '自行车修理店。' },
          { type: 'collectible', name: '卡牌 3/5 (Naledi the Youthful)', description: '自行车店角落。' },
          { type: 'collectible', name: '文物 5/10 (Condolence Note)', description: '自行车店隔壁房间。' },
          { type: 'collectible', name: '手册 1/1 (Precision)', description: '酒店地下室或书店儿童区。' },
          { type: 'collectible', name: '文物 6/10 (Note in Tattoo Parlor)', description: '纹身店后屋。' },
          { type: 'collectible', name: '保险箱 1/1 (Auto Parts)', description: '纹身店后门对面的修车厂。密码：30-82-65。' },
          { type: 'collectible', name: '装备 (Short Gun Holster)', description: '保险箱内。' },
          { type: 'collectible', name: '文物 7/10 (Turn in Boris Note)', description: '宠物店后屋。' },
          { type: 'collectible', name: '文物 8/10 (Dale’s Combo)', description: '酒吧厨房。' },
          { type: 'collectible', name: '卡牌 4/5 (Brainstorm)', description: '爆炸后的儿童游乐屋旁。' },
          { type: 'collectible', name: '文物 9/10 (Boris’ Confession)', description: '房子茶几上。' },
          { type: 'collectible', name: '文物 10/10 (Rosemont’s Flyer)', description: '房子门口桌上。' },
          { type: 'collectible', name: '武器 (Bow)', description: '房子车库感染者身上。' },
          { type: 'collectible', name: '卡牌 5/5 (Reverb)', description: '最后一栋大房子二楼床下。' }
        ]
      },
      {
        title: '寻找琴弦 (Finding Strings)',
        stats: { artifacts: 1, tradingCards: 1, journalEntries: 1 },
        content: [
          { type: 'collectible', name: '日志 1/1 (Scenic Woods)', description: '开局悬崖边。' },
          { type: 'collectible', name: '卡牌 1/1 (The Austringer)', description: '酒店前的沟渠里的车内。' },
          { type: 'collectible', name: '文物 1/1 (Tara’s Invitation)', description: '酒店107房间。' }
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
          { type: 'collectible', name: '卡牌 1/4 (Esquire)', description: '剧院红幕布左侧。' },
          { type: 'collectible', name: '工作台 1/2', description: 'WPL建筑后方房间。' },
          { type: 'collectible', name: '卡牌 2/4 (Tormentra)', description: '工作台对面。' },
          { type: 'collectible', name: '文物 1/3 (Garage Note)', description: '停车库一层尸体旁。' },
          { type: 'collectible', name: '卡牌 3/4 (Tanager)', description: '书店底层爬行空间。' },
          { type: 'collectible', name: '日志 1/1 (Mushrooms)', description: '书店儿童区蘑菇壁画。' },
          { type: 'collectible', name: '文物 2/3 (Bookstore Note)', description: '书店儿童区桌上。' },
          { type: 'collectible', name: '文物 3/3 (Textile Note)', description: '纺织店二楼窗户间。' },
          { type: 'collectible', name: '工作台 2/2', description: '服装店二楼。' },
          { type: 'collectible', name: '卡牌 4/4 (Tatuaje)', description: '废墟建筑爬过架子后。' }
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
          { type: 'collectible', name: '文物 1 & 2', description: '自动获得。' },
          { type: 'collectible', name: '文物 3/3 (Zoo Holiday Brochure)', description: '凉亭长椅上。' },
          { type: 'collectible', name: '硬币 1/1 (Virginia)', description: '厕所窗户外垃圾箱上。' }
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
          { type: 'collectible', name: '硬币 1/4 (Alaska)', description: '房间出来左转地上。' },
          { type: 'collectible', name: '硬币 2/4 (Maine)', description: '洗衣区长椅上。' },
          { type: 'collectible', name: '硬币 3/4 (New Jersey)', description: '隧道壁画下。' },
          { type: 'collectible', name: '硬币 4/4 (Vermont)', description: '靶场旁架子上。' }
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
          { type: 'collectible', name: '文物 1/6', description: '自动获得。' },
          { type: 'collectible', name: '硬币 1/2 (Nevada)', description: '理发店收银台。' },
          { type: 'collectible', name: '文物 2/6 (Survivor Plea)', description: '二楼公寓地上。' },
          { type: 'collectible', name: '文物 3/6 (Neighbor Exchange)', description: '蓝色公寓白板前。' },
          { type: 'collectible', name: '保险箱 1/1 (Apartment)', description: '卧室。密码：30-23-04。' },
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
        stats: { artifacts: 3, coins: 5, safes: 1 },
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
    id: 'safes',
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
