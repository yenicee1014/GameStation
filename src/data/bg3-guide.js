export const bg3GuideData = [
  {
    id: 'basics',
    title: '基础操作与生存技巧',
    sections: [
      {
        id: 'general',
        title: '通用技巧 (General)',
        content: [
          { type: 'text', text: '• 对话检定：将鼠标悬停在检定类型（如游说）上，查看角色是否获得任何加成，从而选择成功率最高的选项。' },
          { type: 'text', text: '• 扒窃商人：可以轻松扒窃商人获得大量金币（包括你之前交易给他们的物品）。建议使用盗贼角色并在回合制模式下进行。' },
          { type: 'text', text: '• 黑暗视觉：在黑暗区域探索时，最好选择具有黑暗视觉（如精灵、提夫林、矮人）的队员领头，或者使用光亮术。' },
          { type: 'text', text: '• 暴力开箱：直接攻击宝箱也是一种打开方式，但要注意可能会损坏里面的物品（如药水）。' }
        ]
      },
      {
        id: 'interface',
        title: '界面与交互 (Interface)',
        content: [
          { type: 'text', text: '• 调查敌人：右键点击敌人（PC版）或按手柄对应键进行调查，了解他们的抗性、弱点和属性值。' },
          { type: 'text', text: '• 队友对话：当队友头顶出现感叹号或图标时，表示他们对当前情况有话要说。此时与他们交谈并选择合适的回复，可以影响好感度。' },
          { type: 'text', text: '• 整理背包：在队伍背包界面顶部，“显示消耗品”左侧的按钮可以一键整理整个背包。' },
          { type: 'text', text: '• 战斗日志：点击屏幕右下角的面板可以展开日志，查看详细的战斗数据和检定结果，了解为什么攻击未命中。' },
          { type: 'text', text: '• 背包管理：可以用袋子分类存放卷轴或其他道具，并将袋子放入快捷栏以便快速访问。' },
          { type: 'text', text: '• 火把切换：对于单手武器角色，可以将火把装备在副手。在战斗外使用切换武器键（PC为V）即可快速在武器和火把间切换。' },
          { type: 'text', text: '• 分类收纳：多准备几个背包来分类整理物品（如一个放食物，一个放卷轴，一个放箭矢）。' },
          { type: 'text', text: '• 离开营地：长休或剧情后，通过地图界面的“离开营地”按钮返回之前的探索位置。' },
          { type: 'text', text: '• 任务列表：任务界面左侧的小箭头可以上下滚动列表，方便查看大量任务。' }
        ]
      },
      {
        id: 'combat',
        title: '战斗指南 (Combat)',
        content: [
          { type: 'text', text: '• 战前Buff：开战前先给队伍上好Buff（如法师护甲、祝福术、神导术），能显著提升战斗力。' },
          { type: 'text', text: '• 潜行起手：尽可能以潜行攻击开怪。这通常能触发“受惊”状态，让队伍获得一轮免费的攻击机会。' },
          { type: 'text', text: '• 利用优势：时刻寻找优势（Advantage）。最简单的方法是攻击前隐蔽、绕背（背刺）或占据高地。' },
          { type: 'text', text: '• 强制回合制：在开战前手动开启回合制模式（Shift+Space），可以让你从容布置站位并抢得先手。' },
          { type: 'text', text: '• 投掷尸体：高力量角色可以投掷尸体造成伤害，或者将尸体扔到一起方便范围法术清理。' },
          { type: 'text', text: '• 投掷药水：使用“投掷”动作将治疗药水扔向队友可以进行治疗。如果队友站得够近，一瓶药水甚至能奶两个人（砸在地板上）。' },
          { type: 'text', text: '• 蜡烛蘸火：随身携带蜡烛。战斗中无需消耗动作扔在地上点燃，使用“蘸取”动作可以让武器附带火焰伤害。蜡烛也是移除黑暗劣势的便携光源。' },
          { type: 'text', text: '• 箱子塔：在背包里带几个箱子，战斗中叠起来爬上去，可以人造高地获得射击优势。' },
          { type: 'text', text: '• 投掷敌人：莱埃泽尔（及其他高力量角色）可以投掷地精甚至半身人，将其扔下悬崖或扔向其他敌人。' },
          { type: 'text', text: '• 调整朝向：移动结束后，通过按住 Ctrl 并移动鼠标来调整角色朝向，防止被敌人背刺。' },
          { type: 'text', text: '• 对话中切人：当一名队员触发对话（战斗前兆）时，点击左下角头像切换到其他队员进行站位、上Buff或偷袭。' }
        ]
      },
      {
        id: 'spells',
        title: '法术与环境 (Spells)',
        content: [
          { type: 'text', text: '• 法术推荐：参考法术强度排名来选择法术。不要忽视控制类法术（如人类定身术、塔莎狂笑术）。' },
          { type: 'text', text: '• 灼热射线：灼热射线（多段攻击）是破除“镜像术”的神技，每一发都能通过一次镜像检定。' },
          { type: 'text', text: '• 火焰箭：火焰箭可以烧毁烦人且致命的藤蔓，也可以引爆油桶和表面。' }
        ]
      }
    ]
  },
  {
    id: 'prologue',
    title: '序章：逃离螺壳舰',
    sections: [
      {
         id: 'creation',
         title: '角色创建 (Character Creation)',
         content: [
           { type: 'image', src: 'bg3CharacterCreation' },
           { type: 'text', text: '过场动画后进入捏人环节。种族对属性影响不大，但职业选择至关重要。' },
           { type: 'text', text: '花点时间了解技能/法术，选择你喜欢的即可。不必过于纠结BD（构建），洗点很便宜，以后有的是时间优化。' }
         ]
       },
      {
        id: 'escape',
        title: '逃离螺壳舰 (Escape the Nautiloid)',
        content: [
          { type: 'image', src: 'bg3PrologueEscape' },
          { type: 'text', text: '获得控制权后，按 M 键可打开地图。本攻略的方向指引均基于地图方向。' },
          { type: 'text', text: '沿东南方向斜坡上行，在平台上可以找到一个软骨箱和桌上的玛瑙。按 左 Alt 键可高亮显示周围的可互动物品。' },
          { type: 'text', text: '回到初始位置，房间中央有一个孵化囊。通过 调查 (Investigation) 检定（智力调整值）可以互动，难度等级(DC)为10。失败可能会受点小伤。左侧死去的夺心魔身上有一些物品。' },
          { type: 'text', text: '前往括约肌门方向，左侧有一个蓝色的 回复装置 (Restoration machine)（像触手一样），互动可恢复全队血量和法术位（相当于长休）。' }
        ]
      },
      {
        id: 'rescue',
        title: '救援俘虏：米尔纳斯与“我们”',
        content: [
          { type: 'text', text: '穿过括约肌门向西走。操作中间的神经装置升降梯上楼。你会发现被开颅的米尔纳斯。' },
          { type: 'text', text: '通过 感知 (Perception) 检定可检查他。通过 奥秘 (Arcana) 检定可得知你在与一只噬脑怪（智力吞噬者）对话。' },
          { type: 'text', text: '取出脑子有几种方法：' },
          { type: 'text', text: '🎲 1. 调查 (DC 10) -> 医药 (DC 10) -> 敏捷 (DC 10)：最稳妥的方法，如果成功，取出时会更加小心。' },
          { type: 'text', text: '🎲 2. 力量 (DC 10)：暴力扯出，会弄伤它（导致获得一个永久Debuff“新生弱点”）。' },
          { type: 'text', text: '🎲 3. 敏捷 (DC 10)：直接取出。' },
          { type: 'text', text: '⚠️ 关键分支与后果：' },
          { type: 'text', text: '• 调查路线补充：如果通过调查检定，将解锁医药检定 (DC 10)，成功后可进行更安全的提取。' },
          { type: 'text', text: '• 关于“致残”选项：取出大脑后，你可以选择是否致残它。' },
          { type: 'text', text: '  - 🚫 尝试致残 (敏捷 DC 15)：若成功，它会变弱并加入；若失败，它会逃跑。' },
          { type: 'text', text: '  - ✅ 不致残（直接招募）：它会作为完全体队友“我们 (Us)”直接加入，无需通过那次高难度的 DC 15 检定。这是最佳选择。' },
          { type: 'text', text: '• 如果提取失败，你可以选择摧毁大脑或直接离开。' }
        ]
      },
      {
        id: 'laezel',
        title: '遭遇莱埃泽尔与初次战斗',
        content: [
          { type: 'text', text: '回到下层，从西侧出口离开。触发剧情，遇到吉斯洋基战士 莱埃泽尔，她会加入队伍。' },
          { type: 'text', text: '战斗教学：你将面对几只小恶魔。利用这个机会熟悉回合制战斗、移动和攻击。虽然回合顺序是固定的，但你可以自由控制当前回合的角色移动。' },
          { type: 'text', text: '战斗结束后，向北前进。如果需要，可以使用附近的 回复装置。按 左 Alt 键高亮并搜刮战场上的尸体，可能会有有用的物品。' },
          { type: 'text', text: '沿着 动脉网 (Arterial Mesh) 向上攀爬，进入一个有控制台的房间。' },
          { type: 'text', text: '控制台互动：' },
          { type: 'text', text: '• 中间的大按钮：唤醒椅子上的两个奴隶（会触发战斗，虽然不强但没必要）。' },
          { type: 'text', text: '• 右侧按钮：直接杀死奴隶（无需战斗）。' },
          { type: 'text', text: '• 屏幕检查：通过 奥秘 检定可以获得一些关于飞船的信息。' }
        ]
      },
      {
        id: 'shadowheart',
        title: '救援影心 (Shadowheart)',
        content: [
          { type: 'text', text: '在下一个房间，你会看到被困在孵化囊中的影心。尽管莱埃泽尔建议不管她，但救下她会让你在序章拥有一名牧师队友，且不仅能增加好感度，还能让接下来的Boss战更轻松。' },
          { type: 'text', text: '解救步骤：' },
          { type: 'text', text: '• 职业专属选项：术士、法师或野蛮人可能有直接打开舱门的选项。' },
          { type: 'text', text: '  - 术士/法师检定：智力 (DC 7) 识别魔法连接 -> 智力 (DC 10) 确认开启 -> 感知 (DC 2) 开启舱门。' },
          { type: 'text', text: '  - 野蛮人检定：直接通过力量检定强行打开。' },
          { type: 'text', text: '• 通用解法（寻找符文）：' },
          { type: 'text', text: '  1. 检查孵化囊右侧的控制台，发现缺少一个插槽组件。' },
          { type: 'text', text: '  2. 前往东侧的房间（也是通往驾驶台的必经之路）。' },
          { type: 'text', text: '  3. 房间入口处有一具奴隶尸体，搜刮可获得“金钥匙 (Gold Key)”。' },
          { type: 'text', text: '  4. 继续向东，你会看到一个装着人的孵化囊。与其东侧的控制台互动会将里面的人变成夺心魔（不会触发战斗）。' },
          { type: 'text', text: '  5. 走上控制台后方的楼梯，找到一个箱子和一具尸体，尸体上有“诡异符文 (Eldritch Rune)”。' },
          { type: 'text', text: '  6. 如果你没带“我们 (Us)”，在这里可能会遇到一只敌对的噬脑怪。' },
          { type: 'text', text: '  7. 拿到符文后，记得返回上一个房间。使用刚才拿到的金钥匙打开东南角的“精美的圣物箱”，里面有玛瑙等物品。' },
          { type: 'text', text: '  8. 将符文插入影心旁边的控制台。' },
          { type: 'text', text: '  9. 触发剧情，通过一个简单的 感知 (Wisdom) 检定（DC 2，利用蝌蚪共鸣）打开舱门。' },
          { type: 'text', text: '成功解救后与她对话，她将加入你的队伍。记得按 I 打开她的法术书，装备“命令术 (Command)”，这对接下来的Boss战至关重要。' }
        ]
      },
      {
        id: 'helm',
        title: '驾驶台之战 (The Helm)',
        content: [
          { type: 'text', text: '向南走，在进入驾驶台前会遇到一个回复装置，如有需要请使用并保存游戏。' },
          { type: 'text', text: '进入驾驶台触发剧情，战斗开始。你的主要目标是在回合数耗尽（约15回合）前连接西侧的神经应答器。' },
          { type: 'text', text: '战斗策略：' },
          { type: 'text', text: '1. 忽略扎尔克和夺心魔：除非你想拿武器，否则不要理会他们的战斗，专注于清理路上的小恶魔和地狱野猪，向西推进。' },
          { type: 'text', text: '2. 夺取神器（进阶）：如果你按照之前的建议让影心准备了“命令术”，现在是时候了。靠近扎尔克，使用“命令术：丢弃 (Drop)”让他掉落手中的“永燃之刃”。捡起这把前期超模的火焰巨剑，然后迅速撤离。' },
          { type: 'text', text: '3. 应对增援：当你接近应答器时，入口处会出现更多增援（坎比翁）。不要恋战，直接冲向应答器。' },
          { type: 'text', text: '4. 完成序章：与神经应答器互动，触发过场动画。恭喜你逃离螺壳舰，冒险正式开始！' }
        ]
      }
    ]
  }
];

export const bg3TocItems = [
  { id: 'section-intro', title: '前言与导读', level: 1 },
  { id: 'section-basics', title: '1. 基础操作与生存技巧', level: 1 },
  { id: 'section-basics-general', title: '1.1 通用技巧', level: 2 },
  { id: 'section-basics-interface', title: '1.2 界面与交互', level: 2 },
  { id: 'section-basics-combat', title: '1.3 战斗指南', level: 2 },
  { id: 'section-basics-spells', title: '1.4 法术与环境', level: 2 },
  { id: 'section-prologue', title: '2. 序章：逃离螺壳舰', level: 1 },
  { id: 'section-prologue-creation', title: '2.1 角色创建', level: 2 },
  { id: 'section-prologue-escape', title: '2.2 逃离螺壳舰', level: 2 },
  { id: 'section-prologue-rescue', title: '2.3 救援俘虏', level: 2 },
  { id: 'section-prologue-laezel', title: '2.4 遭遇莱埃泽尔', level: 2 },
  { id: 'section-prologue-shadowheart', title: '2.5 救援影心', level: 2 },
  { id: 'section-prologue-helm', title: '2.6 驾驶台之战', level: 2 },
  { id: 'section-trophy-list', title: '3. 查看全奖杯列表', level: 1 },
];
