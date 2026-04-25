export const horizonForbiddenWestGuideData = [
  {
    id: 'intro',
    title: '入门指南与核心技巧',
    sections: [
      {
        title: '白金概览',
        content: [
          { type: 'text', text: '欢迎来到《地平线 西之绝境》全成就/白金攻略。本作的白金难度非常友好，不需要全收集，也不需要最高难度通关。' },
          { type: 'text', text: '• 预计时间：30-50小时\n• 难度：3/10 (可随时切换“剧情模式”)\n• 容易错过的奖杯：1个 (扫描所有类型的机器，特别是最终BOSS“幽魂主星”)\n• 联机奖杯：无' }
        ]
      },
      {
        title: '核心技巧',
        content: [
          { type: 'collectible', name: '扫描是一切的基础', description: '面对任何新机器，务必先用 Focus (R3) 扫描。这不仅能标记弱点部件，还是解锁“扫描所有机器”奖杯的唯一途径。' },
          { type: 'collectible', name: '元素克制是关键', description: '本作极其强调元素伤害。酸蚀（Corrosive）对重装甲有效，冰冻（Frost）能大幅增加后续物理伤害。' },
          { type: 'collectible', name: '尽早获取飞行坐骑', description: '虽然主线后期才会解锁“日翼者”，但它能极大地简化后续的收集工作（如高处的信号塔和无人机）。建议优先推进主线到“十特之翼”任务。' },
          { type: 'collectible', name: '利用“勇气激增”', description: '在技能树中解锁并装备勇气激增（Valor Surges），积累勇气值后按 L1+R1 释放。在 BOSS 战或遭遇战中能起到扭转乾坤的作用。' },
          { type: 'collectible', name: '自定义难度', description: '如果你只为了体验剧情或快速收集，可以随时在设置中开启“简易搜刮”，这样无需击落特定部件即可获得珍稀材料。' }
        ]
      }
    ]
  },
  {
    id: 'main-quests',
    title: '主线任务流程',
    sections: [
      {
        title: '序章与丹特',
        content: [
          { 
            type: 'text', 
            id: 'mq-1',
            name: '1. 摘星之志', 
            description: '推荐等级：3 | 奖励：500 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>摘星之志</strong> 在游戏开始时立即启动，作为本作的教程任务，教你掌握《地平线 西之绝境》的所有基本操作。' },
                
                { type: 'header', content: '剧情背景' },
                { type: 'text', content: '漫长的搜寻将埃洛伊 (Aloy) 引向了一座神秘的远古设施。她必须与朋友瓦尔 (Varl) 一起梳理废墟，寻找盖亚 的备份——这是她修复地球化系统、治愈世界的最后希望。' },

                { type: 'header', content: '攻略要点' },
                { type: 'text', content: '作为第一个任务，目标相对直观。跟随瓦尔穿过<strong>远至天顶 (Far Zenith)</strong> 设施，熟悉你的工具。' },
                { type: 'text', content: '在此任务中，你将制作<strong>拉钩发射器</strong>，它像抓钩一样运作，能辅助你进行移动和解谜。' },
                { type: 'text', content: '<strong>Boss战提示：</strong> 当你需要爬上塔楼击落航天飞机时，使用 Focus (R3) 高亮攀爬路线，射击顶部的黄色电缆连接器，将<strong>滑牙兽 (Slitherfang)</strong> 钉住。战斗非常直观，因为滑牙兽无法移动，扫描它并瞄准弱点即可造成额外伤害。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '采集药用浆果 (Gather Medicinal Skybrush)',
                    '吃药用浆果 (Eat the Medicinal Berries)',
                    '前往远古遗迹 (Go to the Ancient Ruins)',
                    '寻找远古遗迹的入口 (Find an Entrance to the Ancient Ruins)',
                    '在远古遗迹中搜索 GAIA 备份 (Search the Ancient Ruins for a GAIA Backup)',
                    '检查倒塌墙壁中的瓦砾 (Examine the Rubble in the Collapsed Wall)',
                    '检查尸体 (Examine the Corpse)',
                    '在营地寻找修理工具的零件 (Search the Camp for Parts to Repair the Tool)',
                    '制作工具 (Craft the Tool) - 拉钩发射器',
                    '扫描区域 (Scan the Area)',
                    '使用抓钩点 (Use the Grapple Point)',
                    '放下梯子 (Lower the Ladder)',
                    '躲在草丛中 (Hide in the Tall Grass)',
                    '使用无声攻击杀死挖穴兽 (Kill the Burrower with a Silent Strike)',
                    '杀死机器 (Kill the Machines)',
                    '制作爆炸陷阱（可选） (Craft Blast Traps)',
                    '检查控制台 (Examine the Console)',
                    '与瓦尔交谈',
                    '前往数据中心 (Go to the Data Center)',
                    '前往航天飞机 (Go to the Shuttle)',
                    '寻找航天飞机夹具控制装置 (Search for the Shuttle Clamp Controls)',
                    '爬上发射塔 (Climb up the Launch Tower)',
                    '射击航天飞机电缆连接器 (Shoot the Shuttle Cable Connectors)',
                    '杀死机器 (Kill the Machine) - 滑牙兽',
                    '扫描机器 (Scan the Machine)',
                    '前往数据中心 (Go to the Data Center)',
                    '在数据中心搜索 GAIA 备份 (Search the Data Center for a GAIA Backup)'
                ]},

                { type: 'header', content: '详细流程步骤' },
                
                { type: 'header', content: '1. 寻找远古遗迹的入口 – 击杀机器 (可选)' },
                { type: 'text', content: '扫描<strong>挖穴兽 (Burrower)</strong> 后，游戏会给出击杀它的选项。建议击杀以获取零件和资源。' },
                { type: 'text', content: '你可以选择潜行或正面硬刚。如果选择后者，建议瞄准它的<strong>眼睛</strong>，那是它的弱点。击杀这只挖穴兽后，会出现另一只。是继续练手还是继续前进，由你决定。' },

                { type: 'header', content: '2. 寻找远古遗迹的入口' },
                { type: 'text', content: '爬上第二只挖穴兽出现的山丘，射落梯子上的红色锁扣释放梯子。爬上去，沿着左侧线性路径前进，直到可以蹲着穿过一些岩石。' },
                { type: 'text', content: '穿过岩石后，你会发现一个梯子，推下去可以在路径尽头创造捷径。然后向右走，那里有一个全息接待员。' },

                { type: 'header', content: '3. 在远古遗迹中搜索 GAIA 备份' },
                { type: 'text', content: '靠近入口尽头的红门并将其撬开。' },

                { type: 'header', content: '4. 检查倒塌墙壁中的瓦砾' },
                { type: 'text', content: '撬开门后，你会发现自己处于一个燃烧的营地中。靠近倒塌墙壁中的瓦砾进行检查。' },

                { type: 'header', content: '5. 检查尸体' },
                { type: 'text', content: '现在，靠近躺在瓦尔 (Varl) 旁边的尸体进行检查。' },

                { type: 'header', content: '6. 在营地寻找修理工具的零件' },
                { type: 'text', content: '我们需要修理工具。埃洛伊 (Aloy) 的 Focus 已经扫描到了我们需要的零件（发光的紫色三角形）。靠近并捡起它们。' },

                { type: 'header', content: '7. 制作工具' },
                { type: 'text', content: '现在靠近瓦尔指示的工作台，开始制作我们需要的工具。在制作界面中，长按 <kbd>X</kbd> 制作<strong>拉钩发射器</strong>，这是《地平线 西之绝境》中引入的新工具。' },

                { type: 'header', content: '8. 使用拉钩发射器清理瓦砾' },
                { type: 'text', content: '现在靠近掉落的碎片，用拉钩发射器清理瓦砾。按照屏幕提示操作（按住 <kbd>L2</kbd> 瞄准，点击 <kbd>△</kbd> 切换，按住 <kbd>R2</kbd> 投掷并拉动）。' },
                { type: 'text', content: '为了完全清理瓦砾，确保瞄准蓝色部件上的锈迹。你需要操作两次，分别拉动左边和右边的部件。' },

                { type: 'header', content: '9. 扫描区域' },
                { type: 'text', content: '在下一个区域，使用 Focus (<kbd>R3</kbd>) 扫描区域内的兴趣点。激活那里的控制台并聆听全息录音。然后抬头看断裂梯子的黄色部分并扫描它。' },

                { type: 'header', content: '10. 攀爬抓钩点' },
                { type: 'text', content: '现在走上石坡。跳离坡道，在半空中按 <kbd>X</kbd> 自动钩住抓钩点。' },

                { type: 'header', content: '11. 继续搜索 GAIA 备份' },
                { type: 'text', content: '继续沿坡道向上，直到找到拉钩发射器的第二个抓钩点。然后，按照屏幕提示继续（按下 <kbd>L3</kbd> 冲刺，双击 <kbd>X</kbd> 进行长跳）。' },

                { type: 'header', content: '获取特殊装备' },
                { 
                  type: 'html', 
                  content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 flex gap-4 items-start shadow-sm">
                                <div class="bg-white p-2.5 rounded-full shadow-sm text-2xl flex items-center justify-center w-12 h-12">🪝</div>
                                <div>
                                  <h4 class="font-bold text-gray-900 text-sm mb-1">拉钩发射器</h4>
                                  <p class="text-xs text-gray-600 m-0 leading-relaxed">一种探险者原型工具的改进版，可以钩住并拉动物体。也能抓取特定的抓钩点进行移动。</p>
                                </div>
                              </div>
                              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 flex gap-4 items-start shadow-sm">
                                <div class="bg-white p-2.5 rounded-full shadow-sm text-2xl flex items-center justify-center w-12 h-12">❄️</div>
                                <div>
                                  <h4 class="font-bold text-gray-900 text-sm mb-1">爆破弹弓 (Blastsling)</h4>
                                  <p class="text-xs text-gray-600 m-0 leading-relaxed">发射冰霜炸弹，可造成范围伤害并积累脆化状态。</p>
                                </div>
                              </div>
                            </div>` 
                },
                { type: 'header', content: '收集品记录' },
                { 
                  type: 'html', 
                  content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                              <div class="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                                <h5 class="font-bold text-blue-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">📄 文本数据点</h5>
                                <ul class="list-disc list-inside text-xs text-blue-800 space-y-1.5">
                                  <li>零之曙光贸易协定 (Zero Dawn Trade Agreement)</li>
                                  <li>情报更新 (Intel Update)</li>
                                  <li>如何处置达尔加德？ (What to Do About Dalgaard?)</li>
                                </ul>
                              </div>
                              <div class="bg-purple-50/50 p-4 rounded-lg border border-purple-100">
                                <h5 class="font-bold text-purple-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">💿 全息数据点</h5>
                                <ul class="list-disc list-inside text-xs text-purple-800 space-y-1.5">
                                  <li>欢迎来到远至天顶 (Welcome to Far Zenith)</li>
                                  <li>公关演示 (PR Presentation)</li>
                                  <li>招聘演示 (Recruitment Presentation)</li>
                                  <li>安祖计划 (Project Anzu)</li>
                                  <li>惊喜！ (Surprise!)</li>
                                </ul>
                              </div>
                            </div>` 
                },
                { type: 'header', content: '任务结算' },
                { 
                  type: 'html', 
                  content: `<div class="bg-green-50 p-4 rounded-lg border border-green-100 flex items-center justify-between mt-2">
                              <div>
                                <span class="text-xs font-bold text-green-800 uppercase tracking-wider block mb-1">任务奖励</span>
                                <span class="text-lg font-bold text-green-900">500 XP, 2 技能点</span>
                              </div>
                              <div class="text-green-600/50">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                              </div>
                            </div>` 
                },
                { type: 'html', content: '<p class="text-sm text-gray-500 mt-4 italic">你是否完成了“摘星之志”的所有目标？查看更多关于《地平线 西之绝境》的攻略，包括所有任务列表，请点击访问我们的 <a href="/horizon-forbidden-west/trophies" class="text-sspai-red hover:underline font-medium">白金奖杯指南</a>。</p>' }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-2',
            name: '2. 长矛的尖端', 
            description: '推荐等级：4 | 奖励：1,500 XP',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>长矛的尖端</strong> 是《地平线 西之绝境》的第二个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { type: 'box', title: '任务详情', content: '等级：4 | 奖励：+1500 XP | 地点：子午线城 (Meridian)' },
                { type: 'text', content: '<strong>任务发布者：</strong> 纯洁的马拉德 (Blameless Marad)（完成“摘星之志”后自动触发）' },
                { type: 'text', content: '<strong>前置要求：</strong> 完成“摘星之志 (Reach For The Stars)”' },
                { type: 'text', content: '在远至天顶设施未能找到盖亚 的备份后，埃洛伊 (Aloy) 和瓦尔 (Varl) 前往子午线城寻找新的线索——但发现他们并不是唯一在寻找答案的人。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '检查曾囚禁哈迪斯的球体',
                    '爬上尖塔底部',
                    '爬上尖塔',
                    '返回马拉德和瓦尔身边',
                    '改装长矛 – 与朋友交谈（可选）',
                    '返回马拉德和瓦尔身边'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 检查曾囚禁哈迪斯的球体 (Examine the Orb that Contained HADES)' },
                { type: 'text', content: '是时候重温旧梦了。一旦你能控制埃洛伊，走近附近的球体进行检查。' },
                
                { type: 'header', content: '2. 爬上尖塔底部 (Climb up to the Base of the Spire)' },
                { type: 'text', content: '一道红色的火花一路窜到了附近尖塔的顶端。像往常一样，先用你的 Focus 扫描周围环境，你应该会高亮显示脚手架旁的一些可攀爬绳索，就在我们检查的球体右侧。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-2">
                    <p class="font-bold text-blue-900 mb-2">🧗‍♂️ 攀爬技巧</p>
                    <p class="text-sm text-blue-800">爬上绳索，然后在<strong>不触碰左摇杆或右摇杆</strong>的情况下按下 <kbd>○</kbd> (圆圈键) 向后跳到岩架上。</p>
                  </div>` 
                },
                { type: 'text', content: '接着爬上下一个黄色物体，向后跳跃，然后按住 <kbd>左摇杆向右</kbd> 并按下 <kbd>○</kbd> 向侧面跳跃。' },
                { type: 'text', content: '到达顶部后，你需要使用拉钩发射器将一根木梁拉向你，然后爬上去（按住 <kbd>L2</kbd> + <kbd>△</kbd> 切换，然后按 <kbd>R2</kbd> 发射）。' },
                { type: 'text', content: '在木梁的尽头向右看，用拉钩发射器拉开一个配电盘。双击 <kbd>✕</kbd> 跳过去。' },

                { type: 'header', content: '3. 攀爬尖塔 (Climb the Spire)' },
                { type: 'text', content: '爬上尖塔。在第二段攀爬过程中，你需要向上并向侧面攀爬。推住左摇杆并按下 <kbd>✕</kbd> 跳向远处的物体。' },

                { type: 'header', content: '4. 返回马拉德和瓦尔身边 (Return to Marad and Varl)' },
                { type: 'text', content: '是时候回去找马拉德和瓦尔，告诉他们你最近的发现。' },

                { type: 'header', content: '5. 改装长矛 – 与朋友交谈（可选）' },
                { type: 'text', content: '是时候改装埃洛伊新获得的武器——冠军长矛了。靠近主要路标指示的工作台进行互动并开始改装。' },
                { type: 'text', content: '你可以选择与这里的各种 NPC 交谈，但这并非强制性的。' },

                { type: 'header', content: '6. 再次返回马拉德和瓦尔身边' },
                { type: 'text', content: '现在去和马拉德及瓦尔会合。他们站在埃洛伊的雕像旁边。如果你准备好了，选择“出发 (Time to Go)”。' }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-3',
            name: '3. 在极限边缘', 
            description: '推荐等级：5 | 奖励：2,500 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>在极限边缘</strong> 是《地平线 西之绝境》的第三个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 丹特<br/>
                            <strong>任务发布者：</strong> Karhn（在片头字幕后自动触发）<br/>
                            <strong>任务等级：</strong> 5级<br/>
                            <strong>前置要求：</strong> 完成“长矛的尖端”<br/>
                            <strong>奖励：</strong> +2500 XP, +2 技能点`
                },
                { type: 'text', content: '<strong>任务背景：</strong> 为了进入西部禁地并追踪赛伦斯 (Sylens)，埃洛伊 (Aloy) 必须首先参加在卡加族太阳王国 (Carja Sundom) 边境举行的大使会议。但是危险的新机器威胁要阻止会议的进行。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往削链镇 – 寻找艾伦德 – 前往艾伦德最后已知的位置',
                    '前往削链镇 或 寻找艾伦德并前往艾伦德最后已知的位置',
                    '前往削链镇 – 与守卫交谈',
                    '升级你的弓',
                    '寻找艾伦德 – 前往艾伦德最后已知的位置',
                    '杀死奥斯拉姆陷阱师附近的机器',
                    '与奥斯拉姆陷阱师交谈',
                    '搜寻艾伦德的踪迹',
                    '跟随踪迹',
                    '击杀机器',
                    '与艾伦德交谈',
                    '清理丹特 – 前往爆炸源头',
                    '清理丹特 – 击杀机器',
                    '清理丹特 – 与奥斯拉姆工匠交谈',
                    '与瓦迪斯交谈',
                    '与乌尔文德交谈',
                    '返回瓦迪斯身边'
                ]},

                { type: 'header', content: '1. 升级你的弓' },
                { type: 'text', content: '佩特拉想喝杯冰啤酒叙叙旧，但我们首先需要升级我们的弓。所以，是时候找个工作台了，顺便说一句，它就在我们重新控制埃洛伊的地方旁边。' },
                { type: 'text', content: '在工作台菜单中，选择 <strong>武器升级</strong>，然后选择 <strong>猎手弓</strong>，再选择第一级升级。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-green-50 p-4 rounded-lg border border-green-200 my-2 flex items-start gap-3">
                    <div class="text-2xl">🏹</div>
                    <div>
                      <p class="font-bold text-green-900 mb-1">新弹药解锁：酸蚀箭</p>
                      <p class="text-sm text-green-800">这是一种会让敌人陷入腐蚀状态的箭矢，使它们更容易受到普通箭矢和高级箭矢的伤害。</p>
                    </div>
                  </div>` 
                },

                { type: 'header', content: '2. 寻找艾伦德 – 前往艾伦德最后已知的位置' },
                { type: 'text', content: '现在我们可以着手处理这个任务的第二个目标，去寻找艾伦德。' },
                { type: 'text', content: '从你进来的大门离开削链镇，前往艾伦德最后已知的位置。像往常一样，你可以决定是与机器交战并搜刮材料，还是直接跑过去。最终你会到达一片布满电击绊线的区域。' },

                { type: 'header', content: '3. 杀死奥斯拉姆陷阱师附近的机器' },
                { type: 'text', content: '一名奥斯拉姆陷阱师被困在废墟上，躲避着几只淘宝者。你可以将机器引诱到绊线上使其瘫痪，或者使用任何其他方法除掉它们。' },

                { type: 'header', content: '4. 与奥斯拉姆陷阱师交谈' },
                { type: 'text', content: '现在奥斯拉姆陷阱师会回到地面与你会合，你可以和他交谈。在继续之前，你可能想先搜刮一些零件和资源。' },
                { type: 'text', content: '他的名字叫瑟利斯，他非常好心地免费送给我们一把新武器——<strong>绊线枪</strong>。你可以问他更多问题，或者选择“我得继续前进了”来继续任务。' },
                { type: 'text', content: '在离开之前，他会告诉你关于<strong>狩猎场</strong>的信息，这与《地平线 零之曙光》中的试炼相同。' },

                { type: 'header', content: '5. 搜寻艾伦德的踪迹' },
                { type: 'text', content: '前往下一个标记点，就在我们与瑟利斯交谈的地方往南几米处，沿着小路走。到达那里后，激活你的 Focus，然后按 <kbd>R1</kbd> 高亮显示踪迹。踪迹正好从任务标记所在的地方开始。' },

                { type: 'header', content: '6. 跟随踪迹' },
                { type: 'text', content: '跟随紫色的踪迹和轮廓，一直跟着它们直到找到艾伦德。' },

                { type: 'header', content: '7. 击杀机器' },
                { type: 'text', content: '是时候击杀一些机器了。其中一种是新的机器类型：<strong>酸蚀刚背兽</strong>。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚠️ 战斗提示：酸蚀刚背兽</p>
                    <ul class="list-disc list-inside text-sm text-red-800">
                      <li><strong>弱点：</strong> 电击伤害</li>
                      <li><strong>抗性：</strong> 酸蚀伤害</li>
                      <li><strong>策略：</strong> 避免使用酸蚀箭。在保持隐蔽的同时，在区域内放置一些电击绊线，然后扔石头将它们引诱进去。</li>
                    </ul>
                  </div>` 
                },
                { type: 'text', content: '至于<strong>淘宝者</strong>，用酸蚀箭削弱它，然后用普通箭矢轻松解决。或者，你可以潜行到它身后进行无声攻击。当区域清理干净后，别忘了搜刮机器。' },

                { type: 'header', content: '8. 与艾伦德交谈' },
                { type: 'text', content: '现在去和艾伦德交谈。在与艾伦德交谈时，游戏会介绍<strong>关键点</strong>，这是让你按照自己的意愿表达埃洛伊个性的情感时刻。' },
                { type: 'text', content: '<span class="text-gray-500 italic">关键点不会影响奖杯获取，所以选择你最喜欢的选项即可。</span>' },

                { type: 'header', content: '9. 清除威胁 - 前往爆炸源头' },
                { type: 'text', content: '我们现在需要前往刚才听到爆炸声的地方进行调查。开始向地图上的主要标记点移动。' },
                
                { type: 'header', content: '10. 清除威胁 - 消灭机器' },
                { type: 'text', content: '在前往爆炸源头的路上，你会遇到其他的刚背兽。你可以很容易地潜行击杀它们：从背后跑向它们并按下 <kbd>R1</kbd>（即使它们亮着红色的“警报”灯，它们也会被其他人分心，只要它们没看见你，潜行击杀就会生效）。击败所有机器后，你可以与一位名叫贝尔纳的奥斯拉姆工匠交谈。' },
                
                { type: 'header', content: '11. 清除威胁 - 与奥斯拉姆工匠交谈' },
                { type: 'text', content: '与贝尔纳交谈，选择你喜欢的任何对话选项，或者随意离开。' },

                { type: 'header', content: '12. 与瓦迪斯交谈' },
                { type: 'text', content: '返回好学的瓦迪斯那里。你可以冲刺到标记点，或者快速旅行到附近的篝火。' },

                { type: 'header', content: '13. 与乌尔文德交谈' },
                { type: 'text', content: '现在前往乌尔文德那里，他也在削链镇，位于定居点的下层区域。与他交谈后，你还将获得支线任务“刚背兽”（等级 7）。' },
                { type: 'text', content: '现在你也可以使用商人了，这允许你购买新装备、补充资源和出售不需要的物品。' },
                { 
                  type: 'text', 
                  content: `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div class="bg-amber-50 p-3 rounded border border-amber-200">
                      <strong class="text-amber-900 block mb-1">缝纫工</strong>
                      <span class="text-sm text-amber-800">出售新的防护服装</span>
                    </div>
                    <div class="bg-red-50 p-3 rounded border border-red-200">
                      <strong class="text-red-900 block mb-1">猎人</strong>
                      <span class="text-sm text-red-800">出售强大的新武器</span>
                    </div>
                    <div class="bg-green-50 p-3 rounded border border-green-200">
                      <strong class="text-green-900 block mb-1">草药师</strong>
                      <span class="text-sm text-green-800">出售有价值的药水</span>
                    </div>
                    <div class="bg-orange-50 p-3 rounded border border-orange-200">
                      <strong class="text-orange-900 block mb-1">厨师</strong>
                      <span class="text-sm text-orange-800">出售提升技能的食物</span>
                    </div>
                  </div>` 
                },

                { type: 'header', content: '14. 返回瓦迪斯处' },
                { type: 'text', content: '回到瓦迪斯那里送他离开。' },

                { type: 'header', content: '获取武器' },
                { type: 'text', content: '<strong>电击绊线枪</strong>' },
                { type: 'text', content: '由奥斯拉姆陷阱师瑟利斯制造的武器。它可以放置电击绊线来击晕敌人，并在任何战斗中获得优势。' },
                { type: 'header', content: '支线任务与差事' },
                { type: 'list', items: [
                    '深重麻烦',
                    '刚背兽',
                    '勇气之味'
                ]},
                { type: 'header', content: '奖励' },
                { type: 'list', items: [
                    '2,500 XP',
                    '2 技能点',
                    '确保大使会议通道安全奖杯'
                ]}
            ]
          },
          { 
            type: 'text', 
            id: 'mq-4',
            name: '4. 大使会议', 
            description: '推荐等级：7 | 奖励：3,500 XP, 2 技能点, 1 卡加族纹章',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>大使会议</strong> 是《地平线 西之绝境》的第4个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 削链镇<br/>
                            <strong>任务发布者：</strong> 自动触发（完成“在极限边缘”后）<br/>
                            <strong>任务等级：</strong> 7级<br/>
                            <strong>前置要求：</strong> 完成“在极限边缘”<br/>
                            <strong>奖励：</strong> +3500 XP, +2 技能点, +1 卡加族纹章 (Carja Blazon)`
                },
                { type: 'text', content: '<strong>任务背景：</strong> 随着丹特 的机器被清理干净，卡加族 (Carja) 和特纳克族 (Tenakth) 之间的大使会议终于可以开始了。埃洛伊 (Aloy) 必须前往贫瘠之光 参加。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往贫瘠之光',
                    '与守卫交谈',
                    '跟随拉万',
                    '与诺扎尔指挥官交谈',
                    '前往大使会议地点',
                    '杀死叛军',
                    '杀死雷加拉的勇士'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往贫瘠之光' },
                { type: 'text', content: '是时候前往贫瘠之光，终于要开始大使会议了。' },
                { type: 'text', content: '在前往贫瘠之光的路上，你会遇到一些<strong>冲锋兽</strong>，它们弱<strong>电击伤害</strong>。' },
                { 
                  type: 'text', 
                  content: `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-2">
                    <p class="font-bold text-blue-900 mb-2">💡 坐骑提示</p>
                    <p class="text-sm text-blue-800">你完全可以忽略它们，但如果你想更快地移动，建议骑乘一只（这是奖杯/成就“骑乘所有常规坐骑”的要求步骤）。要做到这一点，你需要潜行靠近它并在不被发现的情况下覆盖指令。这将允许你使用冲锋兽作为你的坐骑。</p>
                  </div>` 
                },
                { type: 'text', content: '一旦到达贫瘠之光，进入堡垒并接近站在大门旁的守卫与他们交谈。' },

                { type: 'header', content: '2. 与守卫交谈' },
                { type: 'text', content: '埃洛伊暂时还不能进入大使会议，所以她希望与诺扎尔指挥官交谈，说服他打开大门。' },

                { type: 'header', content: '3. 跟随拉万' },
                { type: 'text', content: '现在跟随拉万爬上脚手架，你会见到诺扎尔指挥官。' },

                { type: 'header', content: '4. 与诺扎尔指挥官交谈' },
                { type: 'text', content: '诺扎尔告诉埃洛伊，在大使会议开始之前，必须等到三个特纳克部族都吹响号角。在与诺扎尔交谈时，你可以决定是等待部族到达，还是去寻找他们，从而推进任务。与此同时，瓦尔已经赶上了埃洛伊并重新加入了她的队伍。' },

                { type: 'header', content: '5. 前往大使会议地点' },
                { type: 'text', content: '我们终于可以前往大使会议的地点了。前往标记处，像往常一样，沿途收集你可以携带的任何零件或资源。' },

                { type: 'header', content: '6. 击杀叛军' },
                { type: 'text', content: '在漫长的过场动画之后，准备好击退一些叛军。他们中的大多数人都会骑着冲锋兽。你可以瞄准叛军本人或冲锋兽来击杀他们。在遭遇战的第二阶段，消灭所有掉队的敌人。' },

                { type: 'header', content: '7. 击杀雷加拉的勇士' },
                { type: 'text', content: '雷加拉站在悬崖顶上，赋予她最得力的勇士格鲁达与埃洛伊战斗的荣誉。他带着盾牌，但为了攻击他，必须先削弱盾牌。你可以使用<strong>酸蚀箭</strong> 或 <strong>电击绊线</strong> 来削弱它。' },
                { 
                  type: 'text', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚔️ BOSS战提示：格鲁达</p>
                    <ul class="list-disc list-inside text-sm text-red-800">
                      <li><strong>破盾：</strong> 使用酸蚀箭或电击绊线削弱他的盾牌。</li>
                      <li><strong>输出：</strong> 一旦盾牌消失，格鲁达将不再免疫攻击。利用这个时间窗口全力输出。</li>
                      <li><strong>注意：</strong> 动作要快，因为盾牌会再生。</li>
                    </ul>
                  </div>` 
                },
                { type: 'text', content: '一旦你解决了格鲁达，新的过场动画就会开始。你还将获得<strong>盾翼</strong>，这是一种基于能量的滑翔机，埃洛伊可以用它从高处安全着陆。' },
                
                { type: 'header', content: '获取特殊装备' },
                { 
                  type: 'text', 
                  content: `<div class="bg-purple-50 p-4 rounded-lg border border-purple-200 flex gap-4 items-start shadow-sm mt-2">
                    <div class="bg-white p-2.5 rounded-full shadow-sm text-2xl flex items-center justify-center w-12 h-12">🪂</div>
                    <div>
                      <h4 class="font-bold text-purple-900 text-sm mb-1">盾翼</h4>
                      <p class="text-xs text-purple-800 m-0 leading-relaxed">一种基于能量的滑翔机，允许埃洛伊从高处跳下并安全滑翔着陆。按住 <kbd>⬜</kbd> (方块键) 在空中部署。</p>
                    </div>
                  </div>` 
                }
            ]
          }
        ]
      },
      {
        title: '西部禁地',
        content: [
          { 
            type: 'text', 
            id: 'mq-5',
            name: '5. 死亡之门', 
            description: '推荐等级：10 | 奖励：5,000 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>死亡之门</strong> 是《地平线 西之绝境》的第5个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 贫瘠之光<br/>
                            <strong>任务发布者：</strong> 完成“大使会议”后自动触发<br/>
                            <strong>任务等级：</strong> 10级<br/>
                            <strong>前置要求：</strong> 完成“大使会议”<br/>
                            <strong>奖励：</strong> +5000 XP, +2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 埃洛伊前往她从尖塔恢复的坐标位置。赛伦斯正引得她去往某处……但这位圣贤的动机就如同她必须穿越的新土地一样神秘莫测。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往从尖塔恢复的坐标位置',
                    '检查设备',
                    '观看全息影像',
                    '跟随球体的踪迹 – 调查赛伦斯的工作室（可选）',
                    '检查球体',
                    '进入设施',
                    '收集制作点火器的资源 – 收集一个跃鞭兽火花线圈',
                    '制作点火器',
                    '点燃火光',
                    '寻找通往内部基因锁定舱门的路径',
                    '恢复终端电力',
                    '寻找通往内部基因锁定舱门的路径',
                    '探索设施北侧',
                    '解锁门',
                    '寻找通往内部基因锁定舱门的路径',
                    '在设施中搜索 GAIA 备份',
                    '检查访问控制台',
                    '寻找降低 GAIA 存储库的方法',
                    '检查 GAIA 存储库',
                    '杀死神秘攻击者',
                    '射击隐士蜘蛛的手臂联轴器',
                    '射击隐士蜘蛛的茎部联轴器',
                    '寻找出路',
                    '点燃火光'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往从尖塔恢复的坐标位置' },
                { type: 'text', content: '在深入西部禁地之前，确保留意从上一个任务发生大屠杀的营地回收任何零件或资源。在前往下一个任务标记的路上，你可能会遇到一只长颈兽。随时停下来超控它以揭开更多地图。到达位置后，靠近绿光面板以解锁下一个目标。' },

                { type: 'header', content: '2. 检查设备' },
                { type: 'text', content: '在控制台按 <kbd>△</kbd> 激活它。' },

                { type: 'header', content: '3. 观看全息影像' },
                { type: 'text', content: '设备触发了赛伦斯的全息影像。只需观看赛伦斯和哈迪斯之间的互动，即可触发下一个目标。' },

                { type: 'header', content: '4. 跟随球体的踪迹 – 调查赛伦斯的工作室（可选）' },
                { type: 'text', content: '现在我们需要跟随球体的踪迹。如果你愿意，你可以环顾赛伦斯的工作室，寻找零件和资源，并了解更多关于赛伦斯试图提取哈迪斯知识的信息。离开洞穴，继续沿着湖边侧翼前进，经过腐化者机器。' },
                { type: 'text', content: '最终你应该会进入一个淘宝者 (Scrapper) 和闪光鹰 (Glinthawk) 的生物群落。与机器交战或忽略它们，继续跟随路标。经过商人，最终你会进入一个看起来像废墟矿井洞穴的地方。这是哈迪斯的试验室。继续经过死去的滑牙兽 (Slitherfang)，你应该会解锁下一个目标。' },

                { type: 'header', content: '5. 检查球体' },
                { type: 'text', content: '靠近球体检查哈迪斯。' },

                { type: 'header', content: '6. 进入设施' },
                { type: 'text', content: '与赛伦斯的全息影像交谈后，你现在可以靠近激光门进入设施。但是，我们还不能打开门。我们需要一些零件来制作点火器，以燃烧粘在门墙上的花朵水晶（火光）。' },

                { type: 'header', content: '7. 收集制作点火器的资源 – 收集一个跃鞭兽火花线圈' },
                { type: 'text', content: '我们需要从收集一个跃鞭兽火花线圈开始。离开洞穴，你应该会在湖边看到一些跃鞭兽机器。扫描它们将它们添加到机器目录中，并发现它们的弱点（净水和普通箭），然后处理掉它们以获得你需要的资源。一旦你杀死了至少一只跃鞭兽，靠近它收集你需要的零件。' },

                { type: 'header', content: '8. 制作点火器' },
                { type: 'text', content: '回到洞穴入口，但不要进去。相反，靠近附近的工作台制作点火器。' },
                { type: 'text', content: '向下滚动到<strong>特殊装备</strong>，然后按住 <kbd>✕</kbd> 制作<strong>点火器</strong>。' },

                { type: 'header', content: '9. 点燃火光' },
                { type: 'text', content: '现在回到洞穴内部，使用你的新武器按 <kbd>R2</kbd> 烧掉基因锁定舱门上的火光。' },

                { type: 'header', content: '10. 寻找通往内部基因锁定舱门的路径' },
                { type: 'text', content: '使用点火器打开门后，前往下一个房间并打开一扇新门。你现在会处于一个充满水的区域，需要进行一些平台跳跃才能到达一个舱口，通过它进入另一扇门。' },
                { type: 'text', content: '爬过舱口后，抓取一个能量电池来重新激活门并进入下一个区域。' },
                { type: 'text', content: '在新区域中，使用你的<strong>拉钩发射器</strong> 将自己拉上去，并将板条箱推入洞中。' },

                { type: 'header', content: '11. 恢复终端电力' },
                { type: 'text', content: '跳进同一个洞里，然后将板条箱移动到它落地位置的对面，使其成为一个攀爬平台。' },
                { type: 'text', content: '点燃火光并穿过墙上的洞。' },
                { type: 'text', content: '你会回到之前使用能量电池打开门的区域。抓取同一个能量电池并将其带回你来的房间。' },
                { type: 'text', content: '将能量电池放入右侧的插槽（其中一个插槽会打开一个装有战利品的箱子）以激活下一个目标。' },

                { type: 'header', content: '12. 解锁门' },
                { type: 'text', content: '解锁门的密码是 <strong>7482</strong>。扫描箱子所在房间内的一个数据点可以找到该密码。' },
                { 
                  type: 'text', 
                  content: `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-2 flex items-center gap-3">
                    <div class="text-2xl">🔑</div>
                    <div>
                      <p class="font-bold text-blue-900 mb-0">密码：7482</p>
                    </div>
                  </div>` 
                },

                { type: 'header', content: '13. 寻找通往内部基因锁定舱口的路径 (继续)' },
                { type: 'text', content: '进入新走廊，撬开一扇新门，开始另一段攀爬。爬上黄色点，然后进入门，展现出一个带有另一扇门的新房间。' },
                { type: 'text', content: '打开门，准备好进行另一段平台跳跃。首先，放下梯子，以防你需要快速回来的路。' },
                { type: 'text', content: '现在，走到从平台伸出的小黄色木板上，瞄准有更多黄色攀爬点的柱子。' },
                { type: 'text', content: '爬上柱子直到无法再爬，然后向右移动镜头，露出一个拉钩发射器的抓钩点。攀爬并跳下。' },
                { type: 'text', content: '从这里向左看，找到拉钩发射器的目标。这会拉下一个壁架，你可以利用它继续前进。' },
                { type: 'text', content: '射击下一个拉钩发射器锁扣，然后跳向它把自己拉过去。接着，在落地前按 <kbd>○</kbd> 把自己射向空中，滑翔到任务标记所在的位置，打开基因锁定舱口。' },

                { type: 'header', content: '14. 在设施中搜索 GAIA 备份' },
                { type: 'text', content: '进入设施并靠近控制台。' },

                { type: 'header', content: '15. 检查访问控制台' },
                { type: 'text', content: '现在靠近并检查中间发绿光的访问控制台。' },

                { type: 'header', content: '16. 寻找降低 GAIA 存储库的方法' },
                { type: 'text', content: '要断开电缆，瞄准移动臂上的红色组件。现在你可以去检查它了。' },

                { type: 'header', content: '17. 检查 GAIA 存储库' },
                { type: 'text', content: '靠近轮子进行检查。' },

                { type: 'header', content: '18. 杀死神秘攻击者' },
                { type: 'text', content: '一个神秘的攻击者出现了，他对箭矢或长矛免疫。目标说要杀死他，但他实际上无法被伤害或杀死。相反，你必须躲避他并与一个绿色控制台互动。' },
                { 
                  type: 'text', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚠️ BOSS战提示：埃里克</p>
                    <p class="text-sm text-red-800">不要浪费弹药攻击他。专注于躲避他的攻击，并按照提示与控制台互动。</p>
                  </div>` 
                },

                { type: 'header', content: '19. 射击隐士蜘蛛的手臂联轴器' },
                { type: 'text', content: '射击隐士蜘蛛的一些手臂联轴器。瞄准所有红色部分以断开手臂。一旦你摧毁了所有手臂联轴器，我们需要开始攻击茎部联轴器。' },
                
                { type: 'header', content: '20. 射击隐士蜘蛛的茎部联轴器' },
                { type: 'text', content: '茎部联轴器位于机器的颈部，所以激活你的 Focus 来高亮显示它们。摧毁所有茎部联轴器，直到触发下一个过场动画。' },

                { type: 'header', content: '21. 寻找出路' },
                { type: 'text', content: '向前游，直到到达一个由一些<strong>幽魂机器</strong> 巡逻的房间。' },
                { 
                  type: 'text', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2 flex items-center gap-3">
                    <div class="text-2xl">⚠️</div>
                    <div>
                      <p class="font-bold text-red-900 mb-0">易错过机器</p>
                      <p class="text-sm text-red-800">快速扫描幽魂以将它们添加到机器目录中。这是极少数容易错过的机器之一，务必扫描！</p>
                    </div>
                  </div>` 
                },
                { type: 'text', content: '扫描后，忽略它们并保持在水下，仅在必要时浮出水面换气。游过房间，然后使用 Focus 高亮显示一扇你可以打开的门。' },
                { type: 'text', content: '游过门，利用加速点通过强劲的水流。' },
                { type: 'text', content: '一旦可以上浮，就游上去，你会找到一个平台休息。从这里，瞄准通风口，用拉钩发射器将其拉开，然后穿过通风口。' },
                { type: 'text', content: '再次潜入水下以避开下一组幽魂，继续前进直到可以打开一扇新门，然后游上去，你会发现梯子和一些攀爬点，通向另一个通风口。' },
                { type: 'text', content: '进入通风口，跳下去，打开另一扇门。' },

                { type: 'header', content: '22. 点燃火辉石' },
                { type: 'text', content: '在下一个动力室中，点燃火辉石以继续前进。' }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-6',
            name: '6. 垂危的土地', 
            description: '推荐等级：15 | 奖励：7,500 XP, 2 技能点, +1 乌塔鲁耳语者',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>垂危的土地</strong> 是《地平线 西之绝境》的第6个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 石峰 (Stone’s Echo)<br/>
                            <strong>任务发布者：</strong> 佐 和 瓦尔 (Varl) (完成“死亡之门”后自动触发)<br/>
                            <strong>任务等级：</strong> 15级<br/>
                            <strong>前置要求：</strong> 完成“死亡之门 (Death’s Door)”<br/>
                            <strong>奖励：</strong> +7500 XP, +2 技能点, +1 乌塔鲁耳语者 (Utaru Whisperer)`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 埃洛伊必须与瓦尔和佐一起前往乌塔鲁部落的家园——素歌之域，寻求进入神圣洞穴的许可。如果她能在里面找到米涅瓦 (MINERVA)，或许就能重启盖亚。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往素歌之域',
                    '与瓦尔和佐交谈',
                    '在合唱团外与瓦尔和佐会合',
                    '跟随佐前往封锁区',
                    '击杀机器',
                    '跟随佐前往封锁区',
                    '进入神圣洞穴',
                    '探索神圣洞穴',
                    '超控门',
                    '前往维修湾核心 – 击杀机器',
                    '前往维修湾核心',
                    '前往维修湾核心 – 寻找向上的路',
                    '前往维修湾核心 – 超控网络上行链路',
                    '前往维修湾核心 – 超控网络上行链路',
                    '前往维修湾核心 – 超控网络上行链路',
                    '前往维修湾核心',
                    '超控网络上行链路',
                    '击杀恐角兽 – 击杀机器',
                    '超控维修湾核心'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往素歌之域' },
                { type: 'text', content: '埃洛伊已痊愈，准备继续在素歌之域寻找米涅瓦。让我们出发吧。在前往那里的路上，你很可能会遇到一只长颈兽。随时超控它以驱散周围更多的迷雾，开阔视野。' },

                { type: 'header', content: '2. 与瓦尔和佐交谈' },
                { type: 'text', content: '到达营地后，问候在入口处等候的瓦尔和佐。合唱团已经集合，是时候和瓦尔及佐一起去见他们了。不过，正如佐建议的那样，你可以随意在周围逛逛，储备零件和资源。准备好后，回到瓦尔和佐身边。' },

                { type: 'header', content: '3. 在合唱团外与瓦尔和佐会合' },
                { type: 'text', content: '与瓦尔和佐交谈，告诉他们你准备好与合唱团对话了。埃洛伊将恳求合唱团允许她进入神圣洞穴以继续她的旅程。然而，合唱团对打破传统并不太高兴。不久之后，警报打破了局面。是时候调查一番了。' },

                { type: 'header', content: '4. 跟随佐前往封锁区' },
                { type: 'text', content: '我们需要跟随佐前往封锁区的山区。然而，在前往那里的途中，我们会穿过一些敌人的领地。跟随佐的时候，你可以攻击任何你想攻击的敌人，或者完全无视他们，继续跟着佐。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-purple-50 p-4 rounded-lg border border-purple-200 my-2 flex items-center gap-3">
                    <div class="text-2xl">🤖</div>
                    <div>
                      <p class="font-bold text-purple-900 mb-1">新机器变体：强化型</p>
                      <p class="text-sm text-purple-800">路线周围的机器是你之前遇到的机器的全新<strong>强化型</strong>变体，所以确保留描它们以录入你的机器图鉴。</p>
                    </div>
                  </div>` 
                },

                { type: 'header', content: '5. 击杀机器' },
                { type: 'text', content: '最终你会来到一个新的开阔区域，那里有更多的爪步者和淘宝者。我们需要在继续之前解决它们。用你喜欢的任何方式消灭它们。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚔️ 战斗弱点提示</p>
                    <ul class="list-disc list-inside text-sm text-red-800">
                      <li><strong>爪步者：</strong> 弱点是尾巴和背部。</li>
                      <li><strong>淘宝者：</strong> 弱点是背部。</li>
                      <li>瞄准这些部位以造成最大伤害。</li>
                    </ul>
                  </div>` 
                },

                { type: 'header', content: '6. 跟随佐前往封锁区' },
                { type: 'text', content: '继续跟随佐和瓦尔前往封锁区，清除挡路的任何机器。' },

                { type: 'header', content: '7. 进入神圣洞穴' },
                { type: 'text', content: '到达封锁区后，进入神圣洞穴。' },

                { type: 'header', content: '8. 探索神圣洞穴' },
                { type: 'text', content: '是时候探索神圣洞穴了。门被堵住了，所以我们需要找到另一条路。幸运的是，有一个岩架我们可以爬上去。绕回来跳过缺口，就可以继续下坡并通过被堵住的门。最终你会遇到一扇闪着红光的大坩埚门，我们需要超控它。' },

                { type: 'header', content: '9. 覆盖指令：大门' },
                { type: 'text', content: '靠近大门，按 <kbd>R2</kbd> 进行覆盖指令。' },

                { type: 'header', content: '10. 前往维修湾核心 – 消灭机器' },
                { type: 'text', content: '进入新开启的区域，你很快会遇到一些跃鞭兽。你知道该怎么做。对于跃鞭兽，瞄准它们背部的绿色罐子。那是它们的弱点之一。' },

                { type: 'header', content: '11. 前往维修湾核心' },
                { type: 'text', content: '靠近第二扇闪烁红光的大门，对其进行覆盖指令。' },

                { type: 'header', content: '12. 前往维修湾核心 – 寻找向上的路' },
                { type: 'text', content: '现在我们需要清除该区域受腐蚀的赫菲斯托斯线缆。首先站在下图中所示的地板面板上。' },
                { type: 'text', content: '这将激活一个旋转平台，上面有一些锁扣，你可以射击它们使其锁定到位。当锁扣发出金光时射击它。对第二个和第三个旋转平台重复相同的操作。' },
                { type: 'text', content: '一旦它们被锁定到位，你可以利用地板面板旁边的黄色小木板爬上去。当你爬上柱子时，别忘了移动视角寻找挂钩和攀爬点以继续前进。这些指示了你应该攀爬的路径。' },
                { type: 'text', content: '现在我们需要锁定第二组旋转平台。然而，首先我们需要一些东西来激活地板面板。我们自己站在地板面板上无法看到锁扣并进行射击。在第二个地板面板旁边，有一个小的攀爬点，可以让你到达一扇半碎的门。' },
                { type: 'text', content: '用你的长矛将其彻底击碎，露出一个紫色的六角形箱子。将箱子推过护盾使其掉落到下方，然后将其拖到地板面板上。' },
                { type: 'text', content: '像之前一样，当锁扣发出金光时射击它们。当旋转平台停止移动后，利用黄色小木板继续通过黄色攀爬点前进。在这里跳跃可能会有点棘手，所以花点时间调整好位置，对准攀爬点和木板。' },
                { type: 'text', content: '再次站在第三个地板面板上，等待锁扣变金后射击它们使其归位。' },
                { type: 'text', content: '一旦它们全部锁定到位，爬上去到达一个新的平台。' },

                { type: 'header', content: '13. 前往维修湾核心 – 覆盖网络上行链路' },
                { type: 'text', content: '跳到下方（就在你跳进来的路的左边），靠近红光处覆盖网络上行链路。' },
                { type: 'text', content: '线缆现在将失去腐蚀并恢复移动。现在继续前往下一个区域，我们需要覆盖第二个网络上行链路。' },

                { type: 'header', content: '14. 前往维修湾核心 – 覆盖网络上行链路' },
                { type: 'text', content: '从这个新区域的入口向左走，从黄色木板跳到下方的机械臂上。' },
                { type: 'text', content: '等待机械臂暂时锁定位置，然后瞄准你面前两个黄色攀爬点中的任意一个。然后，向前跳到下一个木板。' },
                { type: 'text', content: '从这里，前往平台的另一端，那里有两个更多的攀爬点等着你。沿着边缘移动，然后爬上下一组攀爬点。最后，覆盖第二个网络上行链路。' },

                { type: 'header', content: '15. 前往维修湾核心 – 覆盖网络上行链路' },
                { 
                  type: 'html', 
                  content: `<div class="space-y-4">
                    <p class="text-gray-700 leading-relaxed">现在需要覆盖第三个节点。在瓦尔和佐所在的位置附近有一个面板。虽然你无法与这个特定面板互动，但你可以利用它作为一个制高点滑翔出去。瞄准另一个发光的面板。</p>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r shadow-sm">
                      <div class="flex items-start">
                        <span class="text-2xl mr-3">💨</span>
                        <div>
                          <p class="font-bold text-blue-900 mb-1">关键动作：滑翔与攀爬</p>
                          <p class="text-sm text-blue-800">从这里，你应该能看到一些蒸汽从可攀爬的裂缝中冒出来。你必须动作快点，因为这些裂缝过一会儿就会关闭。</p>
                        </div>
                      </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed">然后，爬上柱子，最后到达木板上。</p>
                    <p class="text-gray-700 leading-relaxed">现在你需要把握好跳跃的时机，抓住其中一个移动的传送带。挂在其中一个机器上，当你下方出现新平台时松手。接着你需要从一块新木板滑翔到新的黄色面板处，从那里覆盖新的节点。</p>
                  </div>` 
                },

                { type: 'header', content: '16. 前往维修湾核心' },
                { type: 'text', content: '继续沿着新开启的走廊前进，到达一个新的红光门并进行覆盖。' },

                { type: 'header', content: '17. 覆盖网络上行链路' },
                { 
                  type: 'html', 
                  content: `<div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p class="text-gray-700 mb-2">赫菲斯托斯腐化了一台机器，所以我们需要覆盖一个新的网络上行链路来关闭它。</p>
                    <p class="text-gray-700 font-medium">绳降下去并覆盖附近的网络上行链路。</p>
                  </div>` 
                },

                { type: 'header', content: '18. 击杀恐角兽 – 击杀机器' },
                { 
                  type: 'html', 
                  content: `<div class="space-y-4">
                    <p class="text-gray-700">然而，这将释放出<strong>恐角兽</strong>，这是一种新的机器类型（别忘了扫描它），战斗随之而来。</p>
                    
                    <div class="bg-red-50 p-5 rounded-xl border border-red-200 shadow-sm">
                      <h4 class="font-bold text-red-900 flex items-center gap-2 mb-3">
                        <span class="text-xl">⚔️</span> BOSS战：恐角兽
                      </h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white p-3 rounded border border-red-100">
                          <span class="block text-xs font-bold text-red-500 uppercase tracking-wider mb-1">弱点</span>
                          <span class="text-gray-800 font-medium">💧 净水</span><br/>
                          <span class="text-gray-800 font-medium">🧪 酸蚀</span>
                        </div>
                        <div class="bg-white p-3 rounded border border-red-100">
                          <span class="block text-xs font-bold text-red-500 uppercase tracking-wider mb-1">关键战术</span>
                          <span class="text-gray-800 text-sm">使用酸蚀箭攻击，瞄准弱点。</span>
                        </div>
                      </div>
                      <div class="mt-4 pt-4 border-t border-red-100">
                         <p class="text-sm text-red-800 leading-relaxed">
                           <strong>💡 必杀技：</strong> 恐角兽的一个弱点是<strong>集束发射器</strong>。如果击中它，恐角兽就会掉落该武器，你可以捡起来对付它，这是造成大量伤害的稳妥方法。
                         </p>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p class="text-sm text-yellow-800">
                        <strong>⚠️ 增援警告：</strong> 战斗开始后不久，恐角兽会有其他机器增援，即一些<strong>长腿兽</strong>和<strong>清道夫</strong>。建议你先清理掉这些小型机器，然后再专注于恐角兽。最后，清理掉剩余的任何机器。
                      </p>
                    </div>
                  </div>` 
                },

                { type: 'header', content: '19. 覆盖维修湾核心' },
                { 
                  type: 'html', 
                  content: `<div class="bg-green-50 p-4 rounded-lg border border-green-200 flex items-center justify-between">
                    <div class="flex-1">
                      <p class="text-green-900 font-medium mb-1">覆盖最终的炼油厂核心</p>
                      <p class="text-sm text-green-800">这也将赋予你覆盖一些前所未见的机器以及熟悉的<strong>刚背兽</strong>的能力。</p>
                    </div>
                    <div class="text-green-500 text-3xl ml-4">🔓</div>
                  </div>` 
                }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-7',
            name: '7. 地球之眼', 
            description: '推荐等级：17 | 奖励：8,500 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>地球之眼</strong> 是《地平线 西之绝境》的第7个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 维修湾：TAU (Repair Bay: TAU)<br/>
                            <strong>任务发布者：</strong> 自动触发（完成“垂危的土地”后）<br/>
                            <strong>任务等级：</strong> 17级<br/>
                            <strong>前置要求：</strong> 完成“垂危的土地”<br/>
                            <strong>奖励：</strong> +8500 XP, +2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 埃洛伊 (Aloy)、瓦尔 (Varl) 和佐 探索素歌之域西部山顶的一座神秘设施。米涅瓦 (MINERVA) 会藏在里面吗？' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '进入设施',
                    '爬上电梯井',
                    '在设施中搜寻米涅瓦',
                    '检查控制台',
                    '前往实验室',
                    '检查制造终端',
                    '返回控制室',
                    '与盖亚交谈',
                    '通过西门离开基地'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 进入设施' },
                { type: 'text', content: '进入设施并沿着楼梯向上爬，直到到达一扇你可以打开的门。你暂时还无法打开第二扇门。' },

                { type: 'header', content: '2. 爬上电梯井' },
                { type: 'text', content: '在与瓦尔和佐进行简短对话后，撬开第二扇门开始爬上电梯井。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-2">
                    <p class="font-bold text-yellow-900 mb-2">💡 探索提示</p>
                    <p class="text-sm text-yellow-800">由于刺眼的红光，在这里弄清楚要去哪里有点棘手，所以请随时使用 Focus (<kbd>R3</kbd>) 扫描，并参考周围环境。</p>
                  </div>` 
                },

                { type: 'header', content: '3. 在设施中搜寻米涅瓦' },
                { type: 'text', content: '爬上电梯井后，撬开一扇新门。进入服务器机房唯一的开口，你应该能看到两个供拉钩发射器使用的舱口。从你进来的方向看，左边的一个通向一个小储藏箱，而我们要走的是前面那个。' },
                { type: 'text', content: '蹲下穿过通风口，然后爬上墙壁进入一个新的通风口。虽然你可以蹲下穿过右边的通风口，但尽头有一扇你目前无法进入的门。' },
                { type: 'text', content: '这会把我们带回外面，我们需要在那里攀爬山壁。爬上圆木（使用 Focus 查看攀爬点），绕回去把自己拉上下一个黄色攀爬点。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-2">
                    <p class="font-bold text-blue-900 mb-2">🧗‍♂️ 攀爬技巧</p>
                    <p class="text-sm text-blue-800">在这里不断使用 Focus，因为接下来的几个攀爬点几乎看不见，而且与钟乳石的颜色伪装得很好。继续向上攀爬，绕过钟乳石和山壁，确保你不断使用 Focus。当你再也看不到攀爬点时，你会注意到埃洛伊伸出了她的手。这意味着她可以跳跃到当前摄像机角度内看不到的新攀爬点。</p>
                  </div>` 
                },
                { type: 'text', content: '站在圆木上并激活 Focus 以高亮显示你可以攀爬的山壁。为了轻松到达那里，跳离圆木并在半空中激活盾翼，然后爬上去。如果需要指引，请继续使用 Focus。' },
                { type: 'text', content: '撬开岩壁，通过另一个通风井回到内部。爬上楼梯并绳降下去。' },

                { type: 'header', content: '4. 检查控制台' },
                { type: 'text', content: '与控制台互动以插入盖亚核心。然而，事情并没有按计划进行，米涅瓦似乎并不配合。不过经过一番劝说，她允许埃洛伊覆盖她。最终，米涅瓦回到了盖亚的矩阵中。' },
                
                { type: 'header', content: '5. 前往实验室' },
                { type: 'text', content: '走下楼梯，打开瓦尔和佐进来的那扇门，然后进入第二扇门即可到达实验室。' },

                { type: 'header', content: '6. 检查制造终端' },
                { type: 'text', content: '靠近终端开始制造。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-2 space-y-2">
                    <p class="font-bold text-blue-900">🏭 制造终端机制</p>
                    <p class="text-sm text-blue-800">制造终端显示了您可以覆盖多少种以及哪些机器。您首先需要确定大坩埚在世界中的位置。只有这样，您才能创建任务来寻找所需的材料，从而获得覆盖您在大坩埚中解锁的机器的能力。</p>
                    <p class="text-sm text-blue-800">具体在这里，按 <kbd>△</kbd> 为 <strong>犁角兽覆盖指令</strong> 创建一个任务，然后选择“是”将其设为活动任务。</p>
                  </div>` 
                },
                { type: 'text', content: '游戏现在会将您刚刚创建并激活的任务固定在侧边，允许您去寻找所需的材料。但是，我们将继续进行此主线任务。要重新激活主线任务，按 <kbd>触摸板</kbd>，然后选择 <strong>任务</strong>，接着选择 <strong>主线</strong>，最后在“地球之眼”上按 <kbd>✕</kbd>。' },

                { type: 'header', content: '7. 返回控制室' },
                { type: 'text', content: '返回控制室与盖亚交谈。' },

                { type: 'header', content: '8. 与盖亚交谈' },
                { type: 'text', content: '盖亚会告诉您初始化已完成，但为了恢复她的核心，盖亚需要她的“子功能”。这些是：<strong>以太</strong>、<strong>德墨忒尔</strong>、<strong>波塞冬</strong> 和 <strong>赫菲斯托斯</strong>。' },
                { type: 'text', content: '虽然前三个可以“轻易”收服，但赫菲斯托斯已经进化，可能更难获得。然而，正如盖亚所说，没有他，地球的灭绝只能被推迟而不能被彻底阻止。' },
                { type: 'text', content: '总结之后，盖亚会问您想先去寻找哪个子功能。' },
                { 
                  type: 'html', 
                  content: `<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                    <div class="bg-cyan-50 p-3 rounded border border-cyan-200 text-center">
                      <strong class="text-cyan-900 block mb-1">以太</strong>
                      <span class="text-sm text-cyan-800">等级要求：17</span>
                    </div>
                    <div class="bg-blue-50 p-3 rounded border border-blue-200 text-center">
                      <strong class="text-blue-900 block mb-1">波塞冬</strong>
                      <span class="text-sm text-blue-800">等级要求：22</span>
                    </div>
                    <div class="bg-green-50 p-3 rounded border border-green-200 text-center">
                      <strong class="text-green-900 block mb-1">德墨忒尔</strong>
                      <span class="text-sm text-green-800">等级要求：24</span>
                    </div>
                  </div>` 
                },
                { type: 'text', content: '既然我们目前的等级最接近以太，那么先去寻找 <strong>以太</strong> 是合理的，但您可以随意选择其他任何子功能。如果您选择其他子功能，您可能需要在继续故事之前升级一下，特别是如果您在较高难度下进行游戏。' },
                { type: 'text', content: '一旦您选择了首选的子功能，盖亚会将其选为您日志中的下一个主线任务。您可以随时切换到另一个子功能，但为了保持线性，本攻略将继续专注于以太。' },

                { type: 'header', content: '9. 通过西门离开基地' },
                { type: 'text', content: '是时候继续向西前进了。走下楼梯并打开西门。打开接下来的几扇门，直到回到外面。以太，我们来了。' }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-8',
            name: '8. 破碎的天空', 
            description: '推荐等级：17 | 奖励：8,500 XP, 2 技能点, 1 特纳克征服者',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>破碎的天空</strong> 是《地平线 西之绝境》的第8个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 基地<br/>
                            <strong>任务发布者：</strong> 盖亚 (完成“地球之眼”后自动触发)<br/>
                            <strong>任务等级：</strong> 17级<br/>
                            <strong>前置要求：</strong> 完成“地球之眼”<br/>
                            <strong>奖励：</strong> +8500 XP, +2 技能点, +1 特纳克征服者 (Tenakth Conqueror)`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 埃洛伊必须前往特纳克领地的中心，寻找以太 (AETHER)——盖亚丢失的子功能之一。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往以太的坐标',
                    '进入特纳克要塞',
                    '前往王座室 – 观看幻象（可选）',
                    '与德卡交谈',
                    '在石冠与科塔罗会合',
                    '跟随科塔罗 – 杀死雷加拉的叛军（可选）',
                    '与科塔罗交谈',
                    '跟随科塔罗',
                    '与守卫交谈',
                    '前往堡垒底部',
                    '前往观察点',
                    '扫描堡垒',
                    '寻找上堡垒的路',
                    '调查通道',
                    '扫描远古瓦砾',
                    '与科塔罗交谈',
                    '寻找一门大炮',
                    '杀死震颤獠牙和叛军',
                    '搜刮震颤獠牙',
                    '返回堡垒',
                    '摧毁堡垒 – 使用大炮',
                    '摧毁堡垒 – 射击弱点'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往以太的坐标' },
                { type: 'text', content: '前往以太的坐标，途中扫描、与机器交战或忽略它们。' },

                { type: 'header', content: '2. 进入特纳克要塞' },
                { type: 'text', content: '到达地点后，接近入口处的守卫以触发过场动画。' },

                { type: 'header', content: '3. 前往王座室 – 观看幻象（可选）' },
                { type: 'text', content: '跟随德卡前往王座室与赫卡罗酋长交谈。' },
                { type: 'text', content: '如果你愿意，可以停在全息图前了解更多关于幻象的信息。当你到达王座室时，在提示时选择“我准备好见酋长了”。' },
                { type: 'text', content: '在过场动画中，埃洛伊将发现以太的位置，但赫卡罗酋长请求埃洛伊帮助保卫库尔鲁特——一个部族社会，作为回报，他将允许她获取以太。' },
                { type: 'text', content: '是时候向北进发，去说服天空部族与酋长合作了。' },

                { type: 'header', content: '4. 与德卡交谈' },
                { type: 'text', content: '离开王座室，回到要塞入口处的德卡那里继续任务。她会给你一把新武器来协助你的任务——<strong>劈裂神射弓</strong>。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-purple-50 p-4 rounded-lg border border-purple-200 flex gap-4 items-start shadow-sm mt-2">
                    <div class="bg-white p-2.5 rounded-full shadow-sm text-2xl flex items-center justify-center w-12 h-12">🏹</div>
                    <div>
                      <h4 class="font-bold text-purple-900 text-sm mb-1">新武器：劈裂神射弓</h4>
                      <p class="text-xs text-purple-800 m-0 leading-relaxed">一种高伤害的弓，特别适合撕裂敌人的部件。德卡为了这次任务特意赠送给埃洛伊。</p>
                    </div>
                  </div>` 
                },

                { type: 'header', content: '5. 在石冠与科塔罗会合' },
                { type: 'text', content: '前往石冠，像往常一样，扫描沿途的任何新机器，选择交战或避开它们。' },
                { type: 'text', content: '到达地点后，你会受到怀疑但最终被允许进入石冠。一旦两名守卫放行，利用木制脚手架深入定居点中心，然后在悬崖边与科塔罗会合。' },

                { type: 'header', content: '6. 跟随科塔罗 – 击杀雷加拉的叛军（可选）' },
                { type: 'text', content: '继续跟随科塔罗。在跟随他的过程中，你可以选择击杀雷加拉的叛军。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚔️ 战斗提示：叛军</p>
                    <p class="text-sm text-red-800">叛军弱<strong>酸蚀</strong>，所以使用酸蚀箭快速解决他们，特别是那些携带激光护盾的敌人。</p>
                  </div>` 
                },

                { type: 'header', content: '7. 与科塔罗交谈' },
                { type: 'text', content: '到达目的地后，与科塔罗交谈。' },

                { type: 'header', content: '8. 跟随科塔罗' },
                { type: 'text', content: '一旦被允许进入坚堡，继续跟随科塔罗。' },

                { type: 'header', content: '9. 与守卫交谈' },
                { type: 'text', content: '到达顶部后，与站立的守卫交谈。他会允许我们进入提科特的王座室。' },
                { type: 'text', content: '提科特不想派遣他的挑战者去帮助赫卡罗，并表示只有当坚堡的城墙不再坚固时才会这样做。然而，埃洛伊有一个备用计划：摧毁坚堡本身，以说服提科特重新考虑！' },

                { type: 'header', content: '10. 前往坚堡底部' },
                { type: 'text', content: '原路返回，回到你进入坚堡时使用的升降梯底部。' },

                { type: 'header', content: '11. 前往观察点' },
                { type: 'text', content: '升降梯北面几米处就是观察点。' },

                { type: 'header', content: '12. 扫描坚堡' },
                { type: 'text', content: '从观察点激活你的 Focus，寻找一些橙色的远古碎片。使用 Focus 高亮显示目标物体。' },

                { type: 'header', content: '13. 寻找通往坚堡上方的路径' },
                { type: 'text', content: '是时候爬上坚堡了。前往新的任务标记处并攀爬墙壁（使用 Focus 查看黄色攀爬点），然后撬开岩壁继续前进。' },

                { type: 'header', content: '14. 调查通道' },
                { type: 'text', content: '沿着通道继续前进，直到到达一个冰冻的湖泊。' },

                { type: 'header', content: '15. 寻找一门大炮' },
                { type: 'text', content: '现在我们需要一门大炮才能处理那块瓦砾。北边驻扎的一些叛军可能有我们想要的东西。但这并非易事，因为我们需要的大炮是<strong>震颤獠牙</strong> 的一部分，这是一种巨大的像大象一样的机器，它的主要弱点是<strong>冰霜</strong>。' },

                { type: 'header', content: '16. 杀死震颤獠牙和叛军' },
                { type: 'text', content: '首先，蹲在草丛中，潜行解决掉所有叛军。理想情况下，你不想惊动震颤獠牙。' },
                { type: 'text', content: '一旦解决了所有叛军，我们就需要对付震颤獠牙了。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-2">
                    <p class="font-bold text-blue-900 mb-2">❄️ 战斗提示：震颤獠牙</p>
                    <p class="text-sm text-blue-800">由于它的主要弱点是冰霜，你可能需要优先使用<strong>冰霜爆破弹弓</strong>。试着潜行接近它，一旦距离足够近，就用爆破弹弓攻击，释放你所有的炸弹。</p>
                    <p class="text-sm text-blue-800 mt-2">削弱它之后，射击它的弱点（黄色高亮部分）来终结它。另一个对震颤獠牙造成巨大伤害的好方法是用精准撕裂箭射击它的<strong>烈焰囊</strong>（位于震颤獠牙的底部）。</p>
                  </div>` 
                },
                { type: 'text', content: '现在解决掉所有剩余的叛军。' },

                { type: 'header', content: '17. 搜刮震颤獠牙' },
                { type: 'text', content: '现在靠近震颤獠牙进行搜刮，包括它的大炮。科塔罗会主动提出把大炮带回堡垒。' },

                { type: 'header', content: '18. 返回堡垒' },
                { type: 'text', content: '返回堡垒。' },

                { type: 'header', content: '19. 摧毁壁垒 – 使用加农炮' },
                { type: 'text', content: '按下 <kbd>⬜</kbd> 抓取加农炮。' },

                { type: 'header', content: '20. 摧毁壁垒 – 射击弱点' },
                { type: 'text', content: '瞄准任务标记指示的弱点，然后按下 <kbd>R2</kbd> 发射加农炮。多次射击弱点以触发新的过场动画。提科特现在会屈服，并派遣他的挑战者参加库尔鲁特。' },

                { 
                  type: 'html', 
                  content: `<div class="bg-green-50 p-4 rounded-lg border border-green-200 mt-4 flex items-center gap-3">
                    <div class="text-2xl">✅</div>
                    <div>
                      <p class="font-bold text-green-900 mb-0">任务完成</p>
                      <p class="text-sm text-green-800">至此，《地平线 西之绝境》的主线任务“破碎天空”完成。</p>
                    </div>
                  </div>` 
                }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-9', 
            name: '9. 库尔鲁特', 
            description: '推荐等级：18 | 奖励：9,000 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>库尔鲁特</strong> 是《地平线 西之绝境》的第9个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 坚堡<br/>
                            <strong>任务发布者：</strong> 赫卡罗 (Hekarro) 和 科塔罗 (完成“破碎的天空”后自动触发)<br/>
                            <strong>任务等级：</strong> 18级<br/>
                            <strong>前置要求：</strong> 完成“破碎的天空”<br/>
                            <strong>奖励：</strong> +9000 XP, +2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 随着天空部族的挑战者在路上，库尔鲁特准备开始了。为了获得以太 (AETHER)，埃洛伊必须确保比赛成功。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往纪念林',
                    '与赫卡罗交谈',
                    '前往北侧路障',
                    '与德卡交谈',
                    '击杀机器',
                    '击杀滑牙兽',
                    '寻找赫卡罗',
                    '进入王座下方的密室',
                    '回收以太',
                    '返回基地',
                    '与德卡交谈',
                    '返回基地',
                    '将以太交付给盖亚'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往纪念林' },
                { type: 'text', content: '是时候回到赫卡罗那里开始库尔鲁特了。使用快速移动包快速移动到任务标记附近的篝火。' },

                { type: 'header', content: '2. 与赫卡罗交谈' },
                { type: 'text', content: '到达竞技场后，接近赫卡罗和科塔罗与他们交谈。为了确保比赛成功，我们需要击退雷加拉任何潜在的攻击者。' },

                { type: 'header', content: '3. 前往北侧路障' },
                { type: 'text', content: '绕着竞技场跑到另一端，与德卡会合。' },

                { type: 'header', content: '4. 与德卡交谈' },
                { type: 'text', content: '爬上梯子，自动触发过场动画，你将与德卡交谈。' },

                { type: 'header', content: '5. 击杀机器' },
                { type: 'text', content: '不出所料，雷加拉的机器到达了，所以让我们用德卡给我们的加农炮轰击它们。在不受到太多伤害的情况下，试着时不时激活你的 Focus 扫描任何新的机器类型，如果可能的话，瞄准它们的弱点。然而，威胁还没有结束。' },

                { type: 'header', content: '6. 击杀滑牙兽' },
                { type: 'text', content: '被推入竞技场后，我们现在受到一只滑牙兽的攻击。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">🐍 战斗提示：滑牙兽</p>
                    <p class="text-sm text-red-800">滑牙兽弱<strong>火</strong>、<strong>冰霜</strong> 和 <strong>等离子</strong> 伤害，所以优先使用这三种元素中的任何一种来击败它。</p>
                    <p class="text-sm text-red-800 mt-2">滑牙兽在竞技场周围移动很多，所以放置陷阱可以帮助你更快地摆脱它。战斗结束后别忘了搜刮它。</p>
                  </div>` 
                },

                { type: 'header', content: '7. 寻找赫卡罗' },
                { type: 'text', content: '是时候去寻找赫卡罗，确保他在雷加拉伏击后安全。爬上倒塌的坡道，冲刺到赫卡罗那里。' },
                { type: 'text', content: '在赫卡罗和雷加拉的短暂战斗之后，赫卡罗将允许我们要去存放以太的位置。' },

                { type: 'header', content: '8. 进入王座之下的密室' },
                { type: 'text', content: '爬下梯子进入密室。' },

                { type: 'header', content: '9. 回收以太' },
                { type: 'text', content: '靠近并使用控制台插入盖亚内核并回收以太。' },

                { type: 'header', content: '10. 返回基地' },
                { type: 'text', content: '成功回收以太后，是时候返回基地将其整合进盖亚了。在离开之前，德卡注意到了“幻象”的变化并引起了我们的注意。' },

                { type: 'header', content: '11. 与德卡交谈' },
                { type: 'text', content: '在离开的路上，靠近德卡与她交谈。' },

                { type: 'header', content: '12. 返回基地' },
                { type: 'text', content: '现在我们可以带着新加入的科塔尔罗返回盖亚身边了。基地附近有一个营火，你可以利用它快速传送回去。' },

                { type: 'header', content: '13. 将以太交付给盖亚' },
                { type: 'text', content: '在基地，佐、瓦尔和埃伦德都在等你。短暂寒暄后，是将以太交付给盖亚的时候了。进入盖亚所在的控制室，靠近控制台插入盖亚内核，让以太与她融合。' },

                { 
                  type: 'html', 
                  content: `<div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200 my-4 shadow-sm">
                    <div class="flex items-start gap-3">
                      <div class="text-2xl mt-1">📡</div>
                      <div>
                        <h4 class="font-bold text-indigo-900 mb-1">新的转折</h4>
                        <p class="text-sm text-indigo-800 leading-relaxed">
                          然而，盖亚的另一个子功能——<strong>艾露西亚</strong> 向盖亚发出了求救信号，请求我们的援助。这是一个陷阱，还是获取另一个子功能的良机？
                        </p>
                      </div>
                    </div>
                  </div>` 
                }
            ]
          }
        ]
      },
      {
        title: '寻找子系统',
        content: [
          { 
            type: 'text', 
            id: 'mq-10', 
            name: '10. 回声的摇篮', 
            description: '推荐等级：20 | 奖励：10,000 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>回声的摇篮</strong> 是《地平线 西之绝境》的第10个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 基地<br/>
                            <strong>任务发布者：</strong> 盖亚 (完成“库尔鲁特”后自动触发)<br/>
                            <strong>任务等级：</strong> 20级<br/>
                            <strong>前置要求：</strong> 完成“库尔鲁特”<br/>
                            <strong>奖励：</strong> +10000 XP, +2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 盖亚收到了一个求救信号，似乎是由艾露西亚——她丢失的另一个子功能发出的。埃洛伊必须在埃伦德和瓦尔的帮助下进行调查。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '与瓦尔交谈',
                    '检查致远天顶的尸体',
                    '调查战场',
                    '返回埃伦德处',
                    '与瓦尔交谈',
                    '调查设施',
                    '检查中央处理器',
                    '在设施中搜索资产',
                    '检查控制台',
                    '准备战斗',
                    '杀死幽魂',
                    '离开设施',
                    '杀死幽魂',
                    '检查武器',
                    '与瓦尔和克隆体交谈',
                    '与盖亚交谈'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 与瓦尔交谈' },
                { type: 'text', content: '从盖亚的控制室，下楼与瓦尔和埃伦德会合，与他交谈并回到外面。' },

                { type: 'header', content: '2. 检查致远天顶的尸体' },
                { type: 'text', content: '接近致远天顶的尸体，找出她为什么会出现在那里的更多信息。' },

                { type: 'header', content: '3. 调查战场' },
                { type: 'text', content: '首先，检查附近的幽魂机器。' },
                { type: 'text', content: '现在爬上悬崖，调查奥斯拉姆尸体和烧焦的武器。' },
                { type: 'text', content: '从烧焦的武器位置转身 180 度，调查灌木丛之间的露营装备。' },

                { type: 'header', content: '4. 返回埃伦德处' },
                { type: 'text', content: '现在回到埃伦德那里，告诉他你的发现。' },

                { type: 'header', content: '5. 与瓦尔交谈' },
                { type: 'text', content: '现在回到瓦尔那里通知他。' },

                { type: 'header', content: '6. 调查设施' },
                { type: 'text', content: '是时候进入设施，找出致远天顶为什么会在那里了。' },
                { type: 'text', content: '沿着隧道和瓦砾往下走，然后沿着线性路径深入设施，然后进入门。' },

                { type: 'header', content: '7. 检查中央处理器' },
                { type: 'text', content: '下楼，然后使用发绿光的访问控制台。' },

                { type: 'header', content: '8. 在设施中搜索资产' },
                { type: 'text', content: '打开门到达另一个区域，面前有一些楼梯。上楼梯，穿过门，然后进入右边的门。走过破碎的玻璃，然后跳进宽敞的储藏室。' },

                { type: 'header', content: '9. 检查控制台' },
                { type: 'text', content: '在你进来的对这端是一个控制台面板，你可以检查并与之互动。你需要输入的数字是 <strong>237</strong>。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-2 flex items-center gap-3">
                    <div class="text-2xl">🔑</div>
                    <div>
                      <p class="font-bold text-blue-900 mb-0">控制台密码：237</p>
                    </div>
                  </div>` 
                },

                { type: 'header', content: '10. 准备战斗' },
                { type: 'text', content: '输入代码后，准备迎接一场恶战。' },

                { type: 'header', content: '11. 杀死幽魂' },
                { type: 'text', content: '一只幽魂会出现。利用掩体，瞄准它的弱点。幽魂弱酸蚀和等离子。' },

                { type: 'header', content: '12. 离开设施' },
                { type: 'text', content: '战斗结束后，离开设施。' },

                { type: 'header', content: '13. 杀死幽魂' },
                { type: 'text', content: '在外面你会遇到另一只幽魂。再次击败它。' },

                { type: 'header', content: '14. 检查武器' },
                { type: 'text', content: '检查幽魂留下的武器。' },

                { type: 'header', content: '15. 与瓦尔和克隆体交谈' },
                { type: 'text', content: '回到基地，与瓦尔和那个克隆体（贝塔）交谈。' },

                { type: 'header', content: '16. 与盖亚交谈' },
                { type: 'text', content: '最后，与盖亚交谈完成任务。' }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-11', 
            name: '11. 沙海', 
            description: '推荐等级：22 | 奖励：12,000 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>沙海</strong> 是《地平线 西之绝境》的第11个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 基地<br/>
                            <strong>任务发布者：</strong> 盖亚 (完成“回声的摇篮”后自动触发)<br/>
                            <strong>任务等级：</strong> 22级<br/>
                            <strong>前置要求：</strong> 完成“回声的摇篮”<br/>
                            <strong>奖励：</strong> +12000 XP, +2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 为了追寻盖亚丢失的子功能之一——波塞冬，埃洛伊必须穿越广阔的沙漠，抵达拉斯维加斯的废墟。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往波塞冬的坐标',
                    '在废墟中寻找通往地下的路',
                    '调查被淹没的废墟',
                    '收集机器零件 – 前往机器群',
                    '收集机器零件 – 寻找踪迹',
                    '收集机器零件 – 跟随踪迹 – 击杀机器群（可选）',
                    '收集机器零件 – 跟随踪迹',
                    '收集机器零件 – 击杀机器群',
                    '回收压缩空气胶囊',
                    '返回莫伦德处',
                    '制作潜水面具',
                    '寻找波塞冬',
                    '寻找红光',
                    '调查红光',
                    '排水 – 寻找主泵节点',
                    '排水 – 激活主泵节点',
                    '排水 – 寻找辅助泵节点',
                    '排水 – 激活辅助泵节点',
                    '排水 – 返回水下城市',
                    '排水 – 寻找泵维护站',
                    '排水 – 寻找泵维护站入口',
                    '排水 – 激活紧急清除',
                    '寻找波塞冬',
                    '击杀潮汐波',
                    '寻找波塞冬 – 与莫伦德及其船员交谈（可选）',
                    '回收波塞冬',
                    '返回电梯井',
                    '爬回地面',
                    '离开废墟',
                    '返回基地',
                    '将波塞冬交付给盖亚'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往波塞冬的坐标' },
                { type: 'text', content: '离开基地，开始向南前往拉斯维加斯的废墟。在向南的途中，你可能会遇到<strong>静沙地长颈兽</strong>。值得对其进行超控以驱散地图上更多的迷雾。' },

                { type: 'header', content: '2. 在废墟中寻找通往地下的路' },
                { type: 'text', content: '到达地点后，你需要在广阔的调查区域内找到进入地下废墟的方法。入口区域如下所示。一旦你接近它，游戏就会触发下一个目标。' },

                { type: 'header', content: '3. 调查被淹没的废墟' },
                { type: 'text', content: '使用梯子进入被淹没的塔楼并进入营地。' },

                { type: 'header', content: '4. 收集机器零件 – 前往机器群' },
                { type: 'text', content: '离开营地，继续向南前往机器群以回收你需要的零件。' },

                { type: 'header', content: '5. 收集机器零件 – 寻找踪迹' },
                { type: 'text', content: '激活你的 Focus (<kbd>R3</kbd>) 以高亮显示废墟竞技场中间的踪迹 (<kbd>R1</kbd>)。' },

                { type: 'header', content: '6. 收集机器零件 – 跟随踪迹 – 击杀机器 (可选)' },
                { type: 'text', content: '现在，在 Focus 视图中高亮显示踪迹，退出 Focus 视图并开始跟随它们。在踪迹的尽头，你会遇到一群由不同机器组成的群体：净水罐挖穴兽 和 冰霜闪光鹰。如果你愿意，你可以忽略它们，但我们建议击败它们以获取材料。' },

                { type: 'header', content: '7. 收集机器零件 – 跟随踪迹' },
                { type: 'text', content: '在忽略或解决掉机器后，重新激活你的 Focus 以重新高亮显示踪迹，并跟随它们绕过废墟。它们将由紫色三角形显示，并前往如下所示的位置。' },

                { type: 'header', content: '8. 收集机器零件 – 击杀机器群' },
                { type: 'text', content: '你很快会遇到一群新的由不同机器组成的群体：长腿兽、跃鞭兽 和 冰霜风背兽。这次你必须杀死这些机器。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚔️ 战斗提示</p>
                    <p class="text-sm text-red-800">识别它们的弱点并相应地制定计划。一旦你收集到了你需要的东西，你可以返回营地回收第二部分：压缩空气胶囊。</p>
                  </div>` 
                },
                { type: 'header', content: '9. 排水 – 返回水下城市' },
                { type: 'text', content: '现在返回水下城市。我们需要前往第二个节点。' },

                { type: 'header', content: '10. 排水 – 寻找辅助泵节点' },
                { type: 'text', content: '一旦回到水下城市，跟随路标前往第二个节点，再次尝试避开敌对机器。' },

                { type: 'header', content: '11. 排水 – 激活辅助泵节点' },
                { type: 'text', content: '在路径尽头，游回水面，通过黄色梯子前往阀门处。' },
                { type: 'text', content: '但这阀门纹丝不动，必须先松动它。生锈的桥上有一些<strong>焰光孢</strong>，你可以将其摧毁，之后就可以转动阀门了。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-2 flex items-start gap-3">
                    <div class="text-2xl">⚠️</div>
                    <div>
                      <p class="font-bold text-yellow-900 mb-1">小心爆炸</p>
                      <p class="text-sm text-yellow-800">引爆焰光孢时请保持距离，爆炸会造成伤害。</p>
                    </div>
                  </div>` 
                },

                { type: 'header', content: '12. 排水 – 返回水下城市' },
                { type: 'text', content: '现在返回水下城市，前往泵维护站。' },

                { type: 'header', content: '13. 排水 – 寻找泵维护站' },
                { type: 'text', content: '跟随路标到达泵维护站的大致区域。' },

                { type: 'header', content: '14. 排水 – 寻找泵维护站入口' },
                { type: 'text', content: '泵维护站的入口位于泵站塔旁边的一些瓦砾之间。' },
                { type: 'text', content: '从那里向下游并打开门。继续沿着主路径游过几扇门，直到到达第三扇也是最后一扇需要打开的门。' },

                { type: 'header', content: '15. 排水 – 激活紧急清除' },
                { type: 'text', content: '从这里向上游，到达控制台面板并激活全息投影仪，这将排干该区域的水。' },

                { type: 'header', content: '16. 寻找波塞冬' },
                { type: 'text', content: '现在我们可以继续寻找波塞冬了。原路返回圆顶区域并跟随路标。' },

                { type: 'header', content: '17. 击杀潮汐波' },
                { type: 'text', content: '<strong>潮汐波</strong> 是一种巨大的龙形机器。它的弱点是<strong>电击</strong> 和 <strong>冰霜</strong> 伤害，所以优先使用这些元素攻击它。' },
                { type: 'text', content: '它的前鳍附近和身体中段也有弱点。你可以在战斗开始时扫描机器以高亮显示这些弱点。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚔️ BOSS 战策略</p>
                    <p class="text-sm text-red-800">利用电击陷阱或箭矢使其瘫痪，然后用高伤害武器攻击它的弱点。注意躲避它的水流喷射和冲撞攻击。</p>
                  </div>` 
                },
                { type: 'header', content: '18. 寻找波塞冬 – 与莫伦德及其船员交谈（可选）' },
                { type: 'text', content: '如果你愿意，可以与莫伦德及其船员交谈，或者直接前往寻找波塞冬。打开门继续前进，直到进入服务器机房。在机房的尽头就是波塞冬。' },

                { type: 'header', content: '19. 回收波塞冬' },
                { type: 'text', content: '只需将盖亚内核插入波塞冬即可将其回收。' },

                { type: 'header', content: '20. 返回电梯井' },
                { type: 'text', content: '回到你与潮汐波战斗的区域，使用黄色梯子快速向上爬。' },
                { type: 'text', content: '然后，进入建筑物并前往二楼，找到通往更上层的梯子。' },
                { type: 'text', content: '在下一个区域，跑回电梯井。' },

                { type: 'header', content: '21. 爬回地面' },
                { type: 'text', content: '激活电梯返回地面。' },

                { type: 'header', content: '22. 离开废墟' },
                { type: 'text', content: '最后，离开废墟。' },

                { type: 'header', content: '23. 返回基地' },
                { type: 'text', content: '是时候返回基地并将波塞冬交给盖亚了。你可以使用篝火立即快速旅行回去。' },

                { type: 'header', content: '24. 将波塞冬交付给盖亚' },
                { type: 'text', content: '回到盖亚的房间，将波塞冬加入她的矩阵。' }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-12', 
            name: '12. 过去的种子', 
            description: '推荐等级：24 | 奖励：12,000 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>过去的种子</strong> 是《地平线 西之绝境》的第12个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 基地<br/>
                            <strong>任务发布者：</strong> 瓦尔 (Varl) (完成“沙海”后自动触发)<br/>
                            <strong>任务等级：</strong> 24级<br/>
                            <strong>前置要求：</strong> 完成“沙海”<br/>
                            <strong>奖励：</strong> +12000 XP, +2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 为了回收盖亚丢失的子功能之一——德墨忒尔，埃洛伊必须穿越广阔的荒野到达遥远的西海岸。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '与瓦尔交谈',
                    '前往德墨忒尔的坐标',
                    '击杀伏击者',
                    '前往德墨忒尔的坐标',
                    '搜索设施',
                    '检查控制台',
                    '寻找常春藤测试站',
                    '击杀陌生人',
                    '进入设施',
                    '检查配对控制台',
                    '进入设施隧道',
                    '在隧道中寻找出口',
                    '寻找榆树测试站的入口',
                    '搜索榆树测试站',
                    '恢复控制室门的电力',
                    '返回阿尔瓦处',
                    '检查配对控制台',
                    '进入隧道',
                    '在隧道中寻找出口',
                    '寻找常春藤测试站的入口',
                    '击杀恐翼兽',
                    '搜索常春藤测试站',
                    '制作切蔓器',
                    '返回数据核心',
                    '摧毁金属花的藤蔓',
                    '进入数据核心',
                    '回收德墨忒尔',
                    '返回基地',
                    '将德墨忒尔交付给盖亚'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 与瓦尔交谈' },
                { type: 'text', content: '在前往西部荒野寻找德墨忒尔之前，瓦尔想和我们谈谈。离开盖亚的控制室，在楼下与他会合。与瓦尔和贝塔的对话结束后，你就可以自由地去追踪德墨忒尔了。' },

                { type: 'header', content: '2. 前往德墨忒尔的坐标' },
                { type: 'text', content: '离开基地，开始向西进发。' },
                { type: 'text', content: '沿途你可以超控 <strong>长颈兽：守卫之林</strong> 以揭开更多地图。' },

                { type: 'header', content: '3. 击杀伏击者' },
                { type: 'text', content: '到达地点后，你会受到一些昆恩族伏击者的攻击。营地里有一些敌人，建筑物屋顶上也有（可以通过在抓钩点附近双击 <kbd>✕</kbd> 抓钩上屋顶）。' },

                { type: 'header', content: '4. 前往德墨忒尔的坐标' },
                { type: 'text', content: '现在我们可以安全地继续寻找德墨忒尔了。从建筑物屋顶滑索到下一栋建筑物。进入建筑物，上自动扶梯，前往数据核心测试设施。' },

                { type: 'header', content: '5. 搜索设施' },
                { type: 'text', content: '红花左侧有一扇开着的门，墙上可以使用拉钩发射器（<kbd>L2</kbd> + <kbd>△</kbd> > 按住 <kbd>R2</kbd>）。' },
                { type: 'text', content: '在下一个房间，有一个通风口，同样使用拉钩发射器。' },
                { type: 'text', content: '现在开始攀爬进入一扇门。' },

                { type: 'header', content: '6. 检查控制台' },
                { type: 'text', content: '靠近房间里发绿光的控制台以激活全息投影仪。' },

                { type: 'header', content: '7. 寻找常春藤测试站' },
                { type: 'text', content: '从开口处绳降离开房间，接近敌人营地。' },

                { type: 'header', content: '8. 击杀陌生人' },
                { type: 'text', content: '清除营地里的敌人。你可以选择潜行或正面进攻，但我们建议潜行，因为这些敌人特别棘手。' },

                { type: 'header', content: '9. 进入设施' },
                { type: 'text', content: '清除营地后，你可以通过营地尽头的门进入设施。在这里，你会遇到阿尔瓦，她愿意帮助你追踪德墨忒尔。' },

                { type: 'header', content: '10. 检查配对控制台' },
                { type: 'text', content: '靠近房间里的控制台进行验证。' },

                { type: 'header', content: '11. 进入设施隧道' },
                { type: 'text', content: '随着舱门打开，爬下梯子进入隧道。' },

                { type: 'header', content: '12. 在隧道中寻找出口' },
                { type: 'text', content: '爬到底部后，是时候辨别方向寻找出口了。沿着唯一的路径走，在看到蓝光的岔路口继续直行。' },
                { type: 'text', content: '蹲下穿过锈迹，看到焰光孢时将其点燃。记得后退以避免被爆炸波及。' },
                { type: 'text', content: '在下一个房间，按照阿尔瓦的建议，我们可以用拉钩发射器拉下墙上的钩子。' },
                { type: 'text', content: '进入新隧道，立即向右走，一直走到可以穿过常春藤墙的地方。' },
                { type: 'text', content: '现在沿着唯一的路径继续走，直到可以爬上梯子并打开舱门。' },

                { type: 'header', content: '13. 寻找榆树测试站的入口' },
                { type: 'text', content: '我们现在回到了外面。穿过隧道到达一个开阔区域，那里有一些<strong>挖穴兽</strong> 和一只<strong>爪步者</strong> 在巡逻。这对你来说应该不是什么大麻烦。像往常一样，决定是与它们交战还是无视它们。' },
                { type: 'text', content: '处理完机器后，前往带有巨大 <strong>ELM</strong> 标志的建筑物左侧。这里有一个梯子，我们可以将其放下，爬上脚手架进入设施。' },
                { type: 'text', content: '跑酷到另一端，找到一个可以拉开的舱口。蹲下穿过通风口，继续前进，直到可以打开通风口的另一端。' },
                { type: 'text', content: '我们现在位于榆树测试站 (Test Station Elm) 内部。' },

                { type: 'header', content: '14. 搜索榆树测试站' },
                { type: 'text', content: '我们现在需要到达控制台，但你猜怎么着，门锁着。跳到一楼，在房间的一个角落附近，有一些金属箱子，旁边有一个通风口可以拉开。' },
                { type: 'text', content: '在另一侧，使用<strong>点火器</strong> 炸毁墙壁。' },
                { type: 'text', content: '现在，在通风口所在角落的斜对面，有一个你可以拉动的架子。把它拉向你，进入电池存储室拿到<strong>维护旁路钥匙</strong>。' },
                { 
                    type: 'html', 
                    content: `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-2 flex items-center gap-3">
                    <div class="text-2xl">🔑</div>
                    <div>
                        <p class="font-bold text-blue-900 mb-0">获得物品：维护旁路钥匙</p>
                    </div>
                    </div>` 
                },
                { type: 'text', content: '现在与房间里的钥匙控制台互动，这将打开附近的金库门。' },
                { type: 'text', content: '抓住存储单元并将其拉向你。埃洛伊会自动放手，以便阿尔瓦可以跳上去安全到达控制台室。一旦阿尔瓦在存储单元上，再次拉动它直到它锁定到位。' },

                { type: 'header', content: '15. 恢复控制室门的电力' },
                { type: 'text', content: '阿尔瓦现在在控制台旁，并将解锁离我们之前拉开的舱口最近的存储架。拉开存储架并抓住能量电池。' },
                { type: 'text', content: '现在去把它放入你炸毁点火器 (Firegleam) 的房间里的插槽中。' },

                { type: 'header', content: '16. 返回阿尔瓦处' },
                { type: 'text', content: '门的电力现在已经恢复，你可以和阿尔瓦会合了。' },

                { type: 'header', content: '17. 检查配对控制台' },
                { type: 'text', content: '阿尔瓦在一个控制台上，我们需要去房间另一端的另一个控制台。利用存储单元到达另一个控制台并激活它。' },
                { type: 'text', content: '我们现在有了新的目的地。然而，不知何故释放了更多的枯萎病。' },

                { type: 'header', content: '18. 进入隧道' },
                { type: 'text', content: '爬下你面前的舱口，进入一组新的隧道。是时候寻找另一个出口了。' },

                { type: 'header', content: '19. 在隧道中寻找出口' },
                { type: 'text', content: '直走，看到第二个岔路口（蓝光处）时右转。' },
                { type: 'text', content: '现在沿着主要且唯一的路径冲刺，直到你可以爬上梯子。我们现在回到了外面，可以继续寻找常春藤测试站。' },

                { type: 'header', content: '20. 寻找常春藤测试站的入口' },
                { type: 'text', content: '通过通向一个小池塘的门进入试验场。' },
                { type: 'text', content: '然后，到达带有白色叶子标志的建筑物。然而，一只恐翼兽会挡住你的路，你需要消灭它。' },

                { type: 'header', content: '21. 杀死恐翼兽' },
                { type: 'text', content: '恐翼兽弱<strong>火焰伤害</strong>，对<strong>冰霜</strong>、<strong>电击</strong>和<strong>酸蚀</strong>伤害有抗性。' },
                { type: 'text', content: '如果你有的话，优先使用火焰箭和爆炸陷阱。你也可以使用绳索发射器暂时将其束缚住，将其锁定在原地以便更容易命中。此外，它的一些部件可用于触发电击和净水连锁反应，所以如果有机会，瞄准这些部位。像往常一样，当它俯冲向你时进行躲避。至于恐翼兽本身，它有能力隐形、投射致盲光和投掷炸弹。它也没有明显的弱点，这使它成为一个难以击败的敌人。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚔️ BOSS战提示：恐翼兽</p>
                    <ul class="list-disc list-inside text-sm text-red-800">
                      <li><strong>弱点：</strong> 火焰伤害</li>
                      <li><strong>抗性：</strong> 冰霜、电击、酸蚀</li>
                      <li><strong>策略：</strong> 使用绳索发射器限制移动，用火焰箭输出。注意躲避它的隐形偷袭和炸弹。</li>
                    </ul>
                  </div>` 
                },

                { type: 'header', content: '22. 搜寻常春藤测试站' },
                { type: 'text', content: '一旦解决了恐翼兽，我们继续寻找常春藤测试站。前往通往常春藤测试站内部的门并打开它。' },
                { type: 'text', content: '进入温室并在第二个房间操作控制台以激活全息投影仪并继续。' },
                { type: 'text', content: '我们现在可以制作藤蔓切割器来清除我们在任务早期看到的花。不过我们需要一个工作台。' },

                { type: 'header', content: '23. 制作藤蔓切割器' },
                { type: 'text', content: '撬开门，上楼并打开下一扇门。' },
                { type: 'text', content: '现在我们需要爬上去。首先激活你的 Focus 以高亮显示黄色的攀爬点。爬上去穿过门，然后滑索到地面。' },
                { type: 'text', content: '我们现在回到了任务早期面对昆恩族海军陆战队的营地。使用他们的工作台进行我们需要的改装。前往<strong>特殊装备</strong>并长按 <kbd>X</kbd> 制作你的新工具。' },

                { type: 'header', content: '24. 返回数据核心' },
                { type: 'text', content: '跟随路标回到数据核心花朵处。' },

                { type: 'header', content: '25. 摧毁金属花的藤蔓' },
                { type: 'text', content: '现在，用近战攻击摧毁金属花的藤蔓，直到你可以按 <kbd>R1</kbd> 将藤蔓切割器模块安装到数据核心花朵中。' },

                { type: 'header', content: '26. 回收得墨忒尔' },
                { type: 'text', content: '靠近控制台并插入盖亚内核以回收得墨忒尔。阿尔瓦现在可以如愿访问整个服务器了。' },
                { 
                    type: 'html', 
                    content: `<div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-2 flex items-start gap-3">
                    <div class="text-2xl">⚠️</div>
                    <div>
                        <p class="font-bold text-yellow-900 mb-1">剧情提示</p>
                        <p class="text-sm text-yellow-800">一些昆恩族陆战队员试图阻止我们，但阿尔瓦设法说服他们停止攻击。</p>
                    </div>
                    </div>` 
                },

                { type: 'header', content: '27. 返回基地' },
                { type: 'text', content: '在前往阿尔瓦给我们的位置之前，我们需要先回到基地，将得墨忒尔添加到盖亚的矩阵中。建议直接使用快速移动返回基地。' },

                { type: 'header', content: '28. 将得墨忒尔交付给盖亚' },
                { type: 'text', content: '你现在已经熟悉流程了。进入盖亚的控制室，将得墨忒尔交给她。' },
                { 
                    type: 'html', 
                    content: `<div class="bg-green-50 p-4 rounded-lg border border-green-200 my-2 flex items-center gap-3">
                    <div class="text-2xl">✅</div>
                    <div>
                        <p class="font-bold text-green-900 mb-0">子功能收集进度：100%</p>
                        <p class="text-sm text-green-800">我们现在拥有了所有的子功能。盖亚现在应该能够获取赫菲斯托斯了。</p>
                    </div>
                    </div>` 
                }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-13', 
            name: '13. 法罗的坟墓', 
            description: '推荐等级：26 | 奖励：13,000 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>法罗的坟墓</strong> 是《地平线 西之绝境》的第13个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 基地<br/>
                            <strong>任务发布者：</strong> 自动触发（完成“过去的种子”后）<br/>
                            <strong>任务等级：</strong> 26级<br/>
                            <strong>前置要求：</strong> 完成“过去的种子”<br/>
                            <strong>奖励：</strong> +13000 XP, +2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 为了从泰德·法罗的私人避难所“底比斯”中找到并回收欧米茄权限，埃洛伊必须渡过海湾前往旧金山的远古遗迹。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '寻找阿尔瓦 – 前往瀑布边',
                    '调查昆恩族前哨',
                    '前往先祖智慧的登陆点',
                    '前往底比斯',
                    '击杀雷霆牙',
                    '前往底比斯',
                    '与阿尔瓦交谈',
                    '寻找底比斯的入口',
                    '进入破裂的管道',
                    '寻找底比斯的入口',
                    '打开大门',
                    '在底比斯搜寻欧米茄权限',
                    '击杀腐化者',
                    '在底比斯搜寻欧米茄权限',
                    '扫描设备',
                    '在底比斯搜寻欧米茄权限',
                    '寻找通过锁住的门的方法',
                    '回收泰德·法罗的欧米茄权限',
                    '击杀保镖',
                    '逃离底比斯'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 寻找阿尔瓦 – 前往瀑布边' },
                { type: 'text', content: '我们现在需要前往西海岸，即旧金山的废墟，与阿尔瓦会合，开始寻找我们制服赫菲斯托斯所需的欧米茄权限。像往常一样，扫描、攻击或忽略你在路上发现的任何机器。如果遇到长颈兽，我们建议超控它们以驱散西部禁地更多的迷雾。在前往旧金山的路上，我们还会收到第二个目标：前往瀑布边，但这对于推进任务并非必需。我们可以直接去找阿尔瓦。' },

                { type: 'header', content: '2. 调查昆恩族前哨' },
                { type: 'text', content: '到达地点后，进入破损的建筑物，你会立即获得下一个目标。' },

                { type: 'header', content: '3. 前往先祖智慧的登陆点' },
                { type: 'text', content: '离开建筑物并登船前往旧金山。' },
                { type: 'text', content: '到达岸边后，按照指引前往路径点。' },
                { type: 'text', content: '我们建议稍微绕道超控附近的长颈兽，以揭开该区域更多的地图。到达地点后，你会自动受到一些昆恩族士兵和部落的欢迎。然而，他们告诉我们，通往底比斯法罗秘密的道路目前被封锁了。' },

                { type: 'header', content: '4. 前往底比斯' },
                { type: 'text', content: '前往底比斯，当你接近大门时，一只雷霆牙会出现。' },

                { type: 'header', content: '5. 击杀雷霆牙' },
                { type: 'text', content: '雷霆牙是一种重量级机器，唯一的弱点是<strong>酸蚀</strong>。它对其他所有元素都免疫，这限制了你的伤害输出选择。然而，它有许多可拆卸的部件，扫描后会为你提供大量目标。它的弱点很少，大多数都需要你先移除其他部件才能攻击到。优先处理它的机枪，这是它的首选武器。战斗结束后别忘了搜刮它。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚔️ BOSS战提示：雷霆牙</p>
                    <ul class="list-disc list-inside text-sm text-red-800">
                      <li><strong>弱点：</strong> 酸蚀</li>
                      <li><strong>抗性：</strong> 所有其他元素</li>
                      <li><strong>策略：</strong> 优先拆除背部的圆盘发射器和头部的机枪。利用它掉落的重武器进行反击。</li>
                    </ul>
                  </div>` 
                },

                { type: 'header', content: '6. 前往底比斯' },
                { type: 'text', content: '现在你可以安全进入底比斯了。' },

                { type: 'header', content: '7. 与阿尔瓦交谈' },
                { type: 'text', content: '大门打开后，进入与就在入口处等你的阿尔瓦交谈。随着 CEO 和 Bohai 加入你，你准备好下降到达底比斯的大门，但我们仍然需要从我们这一侧找到进入的方法。' },

                { type: 'header', content: '8. 进入破裂的管道' },
                { type: 'text', content: '有一根破裂的管道，我们可以从那里向前游。' },

                { type: 'header', content: '9. 寻找底比斯的入口' },
                { type: 'text', content: '继续沿着主要路径游泳。这里只有一条路，所以你不会迷路。当你到达一个两端都有涡轮风扇的巨大管道时，瞄准亮着蓝光的涡轮，并在它停止时游过去。' },
                { type: 'text', content: '然后，向下并向左游，进入另一个开口。' },
                { type: 'text', content: '我们需要找到一种方法来停止涡轮。进入下一个房间并与控制台互动以禁用涡轮。' },
                { type: 'text', content: '游过控制台旁边的窗户，并游过你刚刚停止的涡轮。' },
                { type: 'text', content: '然后，向下并向右游，找到另一个开口游过去。最后，浮出水面。' },

                { type: 'header', content: '10. 打开大门' },
                { type: 'text', content: '我们现在到了另一边。首先，撬开门，进入一个看起来像生活区的地方。' },
                { type: 'text', content: '这里有一些补给箱，如果你想补充材料的话。准备好后，继续跟随路标直到到达地堡（有一个巨大的三角形门的区域）。' },
                { type: 'text', content: '前往主控制台激活顶部的门。你现在将与其他人重聚，并被要求穿上一些……不寻常的服装。' },

                { type: 'header', content: '11. 在底比斯搜索欧米茄权限' },
                { type: 'text', content: '是时候继续寻找我们要找的欧米茄权限了。走近并打开地堡尽头的门。你现在应该能看到法罗壮观的雕像在你面前。然后，向右走打开下一扇门，最后下楼打开另一扇门。然而，你会遭到两个腐化者的伏击。' },

                { type: 'header', content: '12. 杀死腐化者' },
                { type: 'text', content: '首先，扫描机器将它们添加到数据库中。腐化者的主要弱点是<strong>火</strong>，所以不用说，应该优先使用这种元素。它有一个内部弱点，可拆卸部件不多，所以这场战斗将主要集中在火力输出上，别忘了留意它们的机枪。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-red-50 p-4 rounded-lg border border-red-200 my-2">
                    <p class="font-bold text-red-900 mb-2">⚔️ 战斗提示：腐化者</p>
                    <ul class="list-disc list-inside text-sm text-red-800">
                      <li><strong>弱点：</strong> 火</li>
                      <li><strong>策略：</strong> 集中火力攻击，注意躲避机枪扫射。</li>
                    </ul>
                  </div>` 
                },

                { type: 'header', content: '13. 继续搜索' },
                { type: 'text', content: '清除伏击后，前往门口将其打开并继续。再打开两扇门，你将进入某种王座室。开始跑向房间的另一端，你会得到下一个目标。' },

                { type: 'header', content: '14. 扫描设备' },
                { type: 'text', content: '希欧要求我们扫描设备，所以我们照做。按住 <kbd>R3</kbd> 扫描医疗椅。' },

                { type: 'header', content: '15. 寻找通过锁住的门的路径' },
                { type: 'text', content: '在狂热的希欧经历了又一个“启迪”时刻后，让我们继续寻找欧米茄权限。走近并打开有保镖的门，但很快我们的路就会被锁住，我们需要找到另一条路进去。' },
                { type: 'text', content: '墙上有一个我们可以拉开的舱口。把自己拉过去，埃洛伊会自动蹲下。然后，跳下去。' },

                { type: 'header', content: '16. 回收泰德·法罗的欧米茄权限' },
                { type: 'text', content: '我们终于可以回收我们要找的东西了：泰德·法罗的欧米茄权限。走近控制台并与之互动。不过麻烦正在酝酿中。' },

                { type: 'header', content: '17. 杀死保镖' },
                { type: 'text', content: '希欧背叛了我们，并命令他的保镖不留活口。我们需要除掉他们才能生存。这里不需要太讲究策略，因为房间正慢慢被熔岩淹没。' },

                { type: 'header', content: '18. 逃离底比斯' },
                { type: 'text', content: '解决掉保镖后，我们需要逃离底比斯以确保安全。在房间中冲刺，无视路上的一切人和物，必要时撬开门并避开熔岩。' },
                { type: 'text', content: '在一段令人满意的剧情后，我们准备继续逃亡。跳上熔岩中的岩石到达对面的门，继续冲刺穿过熔岩和守卫。' },
                { 
                    type: 'html', 
                    content: `<div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-2 flex items-start gap-3">
                    <div class="text-2xl">⚠️</div>
                    <div>
                        <p class="font-bold text-yellow-900 mb-1">注意脚下</p>
                        <p class="text-sm text-yellow-800">注意桥梁坍塌造成的缺口。</p>
                    </div>
                    </div>` 
                },
                { type: 'text', content: '波海在出口等你，并给予埃洛伊进出登陆点的无限制权限。阿尔瓦也加入了基地。' }
            ]
          }
        ]
      },
      {
        title: '终局',
        content: [
          { 
            type: 'text', 
            id: 'mq-14', 
            name: '14. 双子座', 
            description: '推荐等级：30 | 奖励：15,000 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>双子座</strong> 是《地平线 西之绝境》的第14个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 挖掘场<br/>
                            <strong>任务发布者：</strong> 自动触发（完成“法罗的坟墓”后）<br/>
                            <strong>任务等级：</strong> 30级<br/>
                            <strong>前置要求：</strong> 完成“法罗的坟墓”<br/>
                            <strong>奖励：</strong> +15000 XP, +2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 随着欧米茄权限的获得，盖亚 应该能够在双子座大坩埚 制服并捕获赫菲斯托斯。埃洛伊必须为这次任务做好准备。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '返回基地',
                    '与盖亚交谈',
                    '与瓦尔交谈',
                    '与盖亚交谈',
                    '保护贝塔',
                    '回到贝塔和瓦尔身边',
                    '追击赫菲斯托斯进入大坩埚',
                    '迫使赫菲斯托斯回到核心 – 跟随输送带',
                    '迫使赫菲斯托斯回到核心 – 探索两个大坩埚室',
                    '迫使赫菲斯托斯回到核心 – 探索两个大坩埚室 – 超控网络上行链路',
                    '迫使赫菲斯托斯回到核心 – 探索两个大坩埚室 – 击杀机器',
                    '迫使赫菲斯托斯回到核心 – 探索两个大坩埚室 – 超控网络上行链路',
                    '迫使赫菲斯托斯回到核心 – 前往第二个大坩埚室',
                    '迫使赫菲斯托斯回到核心 – 超控网络上行链路',
                    '迫使赫菲斯托斯回到核心 – 击杀机器',
                    '迫使赫菲斯托斯回到核心 – 超控网络上行链路',
                    '返回装配室',
                    '击杀杀戮脊',
                    '超控网络上行链路',
                    '回到贝塔和瓦尔身边'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 返回基地' },
                { type: 'text', content: '让我们回到基地，与其他人以及盖亚会合。' },

                { type: 'header', content: '2. 与盖亚交谈' },
                { type: 'text', content: '盖亚告诉我们，赫菲斯托斯已经增殖并变得更强，这使得盖亚需要更长的时间和更大的难度来制服它。不过也许有办法减少所需的时间。' },

                { type: 'header', content: '3. 与瓦尔交谈' },
                { type: 'text', content: '离开盖亚的房间，与瓦尔交谈，他告诉你贝塔的状态很不好。让我们下楼去看看。' },
                { type: 'text', content: '我们需要说服贝塔加入我们的事业，别无他法。在与贝塔交谈时，选择任何最符合你个性的对话选项。' },
                { type: 'text', content: '最终，埃洛伊向贝塔展示了她养父罗斯特 的全息影像，这足以说服贝塔加入我们拯救世界的努力。' },

                { type: 'header', content: '4. 与盖亚交谈' },
                { type: 'text', content: '现在回到盖亚那里，告诉她你和贝塔已经达成了共识，准备好执行任务了。' },

                { type: 'header', content: '5. 保护贝塔' },
                { type: 'text', content: '就在一切似乎进展顺利时，麻烦来了。一大群新机器向我们袭来，我们需要在保护贝塔的同时消灭机器。其中一个是<strong>贝希摩斯</strong>，弱点是<strong>火</strong> 和 <strong>酸蚀</strong> 伤害，它有许多可拆卸、易爆和连锁反应的部件。' },
                { type: 'text', content: '另一台机器是<strong>破坏者</strong>，弱点是<strong>酸蚀</strong>，它的背部有一个非常有用的可拆卸大炮，我们可以用它来对付贝希摩斯本身。所以，理想情况下，先集中火力对付破坏者。' },

                { type: 'header', content: '6. 回到贝塔和瓦尔身边' },
                { type: 'text', content: '一旦解决了机器，回到贝塔和瓦尔身边。与此同时，赫菲斯托斯已经通过系统逃跑了。是时候去追捕它了。' },

                { type: 'header', content: '7. 追击赫菲斯托斯进入大坩埚' },
                { type: 'text', content: '现在我们需要深入大坩埚去寻找赫菲斯托斯。前往路径点继续前进。' },
                { type: 'text', content: '在新房间里，滑翔到下一个平台。现在进入带有防护罩的巨大房间。' },

                { type: 'header', content: '8. 迫使赫菲斯托斯回到核心 – 跟随输送带' },
                { type: 'text', content: '跳下或滑翔进入房间，跟随上方输送带的方向。' },

                { type: 'header', content: '9. 迫使赫菲斯托斯回到核心 – 探索两个大坩埚室' },
                { type: 'text', content: '不久后你会到达一个岔路口。我们将先向左走。利用房间里的柱子爬上左边的高地（以你进来的方向为参考点）。' },
                { type: 'text', content: '从这里，使用你的抓钩发射器 拉动蓝色能量电池以露出攀爬点，然后从上层平台在安全的时候跳上输送带。当新目标出现时，你可以跳跃并滑翔离开输送带。' },

                { type: 'header', content: '10. 迫使赫菲斯托斯回到核心 – 超控网络上行链路' },
                { type: 'text', content: '输送带会将你带到一个满是机器的房间。先解决掉它们，然后安全地超控网络上行链路。这里有<strong>精锐跳跃者</strong> 和 <strong>长腿兽</strong>，此时应该不难对付。像往常一样，先扫描机器以揭示它们的弱点和元素缺陷，并将它们添加到数据库中。' },
                { type: 'text', content: '当区域安全后，靠近节点尝试超控它。' },

                { type: 'header', content: '11. 迫使赫菲斯托斯回到核心 – 击杀机器' },
                { type: 'text', content: '新的机器，包括一只<strong>恐角兽</strong>，会冲进来。你知道该怎么做。' },

                { type: 'header', content: '12. 迫使赫菲斯托斯回到核心 – 超控网络上行链路' },
                { type: 'text', content: '现在再次尝试超控节点，这次会很顺利。' },

                { type: 'header', content: '13. 迫使赫菲斯托斯回到核心 – 前往第二个大坩埚室' },
                { type: 'text', content: '赫菲斯托斯已经逃离了这个房间，去了附近的第二个房间。穿过机器进来的巨大门离开，利用柱子到达对面，因为整个地板都被赫菲斯托斯通电了。' },
                { type: 'text', content: '然后，利用抓钩点和盾翼，在空中反复弹射，到达下方的一条可以滑行的轨道。' },

                { type: 'header', content: '14. 迫使赫菲斯托斯回到核心 – 超控网络上行链路' },
                { type: 'text', content: '和在另一个房间一样，先清除所有机器，然后在安全的时候超控节点。这里的一个机器是<strong>尖刺鼻</strong>，一种新的机器类型。扫描它以识别其弱点是<strong>火</strong> 和 <strong>净水</strong>。这种机器特别有许多可拆卸和易爆的部件，所以好好研究它以确定攻击目标。' },
                { type: 'text', content: '当区域清理完毕后，靠近节点尝试超控，但和之前一样，新的机器会伏击你。消灭它们。' },

                { type: 'header', content: '将赫菲斯托斯逼回核心 – 击杀机器' },
                { type: 'text', content: '击杀伏击你的机器。其中一个是火焰背囊兽，这是背囊兽的一个变种。扫描并研究它以将其添加到数据库中，并发现它的弱点（冰霜）。它的大部分部件都是易爆物，所以不要吝啬向它们射箭。' },

                { type: 'header', content: '将赫菲斯托斯逼回核心 – 超控网络上行链路' },
                { type: 'text', content: '现在可以安全地超控节点了。' },

                { type: 'header', content: '返回装配室' },
                { type: 'text', content: '既然我们已经将赫菲斯托斯逼回了核心，是时候返回装配室了。记得利用攀爬点和柱子，并不时激活你的盾翼以避开地面上的电流。当你到达装配室时，准备好面对大量的机器。' },

                { type: 'header', content: '击杀杀戮脊' },
                { type: 'text', content: '在返回装配室的路上，你会遭到一种巨大的新机器的伏击：杀戮脊。和任何新机器一样，扫描它以研究它的弱点。特别是，这种机器只弱冰霜和净水，而且它的大部分可拆卸部件都位于它的脊背和尾巴上，所以一旦你用正确的元素削弱了它，就优先攻击那些部位。' },
                { type: 'html', content: `<div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-4">
                    <p class="font-bold text-blue-900 mb-2">💡 建议策略</p>
                    <p class="text-sm text-blue-800">在地上放置净水陷阱，并将其冻结，然后瞄准它的等离子核心，以便在不受到太多伤害的情况下击败它。</p>
                </div>`},

                { type: 'header', content: '超控网络上行链路' },
                { type: 'text', content: '现在靠近节点并进行超控。' },

                { type: 'header', content: '返回贝塔和瓦尔身边' },
                { type: 'text', content: '赫菲斯托斯终于被收容并回到了主核心。现在只需返回贝塔和瓦尔身边。一些意想不到的惊喜在等着你。' }
            ]
          },
          { 
            type: 'text', 
            id: 'mq-15', 
            name: '15. 所剩一切', 
            description: '推荐等级：31 | 奖励：+2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>所剩一切</strong> 是《地平线 西之绝境》的第15个主线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 蒂尔达的宅邸<br/>
                            <strong>任务发布者：</strong> 蒂尔达（完成“双子座”后自动触发）<br/>
                            <strong>任务等级：</strong> 31级<br/>
                            <strong>前置要求：</strong> 完成“双子座”<br/>
                            <strong>奖励：</strong> +2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 埃洛伊在悲伤与哀痛中醒来——试图理解为什么一个致远天顶人会冒着失去一切的风险来救她。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '在楼上与蒂尔达会面 – 检查艺术品（可选）'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 在楼上与蒂尔达会面 – 检查艺术品（可选）' },
                { type: 'text', content: '致远天顶成员之一，蒂尔达，救了埃洛伊，我们和她一样感到惊讶。上楼去见蒂尔达。当你上楼时，你可以选择检查蒂尔达艺术画廊中的画作。当你准备好后，打开楼梯顶端的金库门。是时候揭晓答案并开始我们的下一个任务了。' }
            ]
          },
          { type: 'text', id: 'mq-16', name: '16. 十特之翼', description: '推荐等级：32 | 奖励：25,600 XP, 2 技能点, 日翼者' },
          { type: 'text', id: 'mq-17', name: '17. 奇点', description: '推荐等级：35 | 奖励：28,000 XP, 2 技能点' }
        ]
      }
    ]
  },
  {
    id: 'side-quests',
    title: '全支线任务列表',
    sections: [
      {
        title: '早期支线',
        content: [
          { 
            type: 'text', 
            id: 'sq-deep-trouble', 
            name: '1. 深渊之厄 (Deep Trouble)', 
            description: '推荐等级：5 | 奖励：1250 XP, 2 技能点, 1 奥斯拉姆工匠',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>深渊之厄 (Deep Trouble)</strong> 是《地平线 西之绝境》中的一个支线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 绯红狭地 (Crimson Narrows)<br/>
                            <strong>任务发布者：</strong> 科尔文德 (Korvend)<br/>
                            <strong>任务等级：</strong> 5级<br/>
                            <strong>前置要求：</strong> 完成主线任务2“长矛的尖端”<br/>
                            <strong>奖励：</strong> 1250 XP, 2 技能点, 1 奥斯拉姆工匠 (Oseram Artificier)`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 一场危险的爆炸淹没了隧道，两名奥斯拉姆旷工被困矿井。如果没有帮助，他们毫无逃生希望。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '寻找失踪的矿工',
                    '排干矿井的水',
                    '回到矿工身边',
                    '回到科尔文德身边'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 寻找失踪的矿工' },
                { type: 'text', content: '与科尔文德交谈，他会指向他正前方的矿井，让你去营救另外两名工人。' },
                { type: 'text', content: '沿着线性路径穿过矿井的起始部分，你会潜入水中。当你浮出水面进入一个水中有3个桶的房间后，直接向前再次潜入，游过小隧道，在另一侧浮出水面进入一个新房间。' },
                { type: 'text', content: '在这里你会清楚地看到那两名矿工，与他们交谈。他们会告诉你隧道被堵住了，需要疏通才能排干矿井的水。' },

                { type: 'header', content: '2. 排干矿井的水' },
                { type: 'text', content: '现在你必须清除排水井上的堵塞物。进入矿工左侧的水域并潜入水下。有一股强劲的水流向你冲来，会减慢你的游泳速度。你必须按下 <kbd>L3</kbd> 加速并到达水下被淹没隧道中的黄色把手处，然后按下 <kbd>○</kbd> 蹬离把手（这能让你游得更快以通过强劲的水流）。在另一侧浮出水面并爬上黄色梯子。' },
                { type: 'text', content: '你需要到达房间另一侧脚手架顶部的矿车处。跳入水中，前往矿车正下方的平台，跳上这里的梯子爬上去（可以使用 Focus <kbd>R3</kbd> 扫描查看黄色攀爬标记）。' },
                { type: 'text', content: '沿着木梁穿过线性路径到达一个新房间。在这里你可以潜入水下避开机器，或者在水面上前进到另一侧（由你决定）。然后沿着铁轨走出房间。' },
                { type: 'text', content: '继续沿着线性路径穿过前方的爬行空间，它会带你回到有矿车的房间。放下梯子，以防你掉下去可以爬回来。使用你的拉钩发射器（<kbd>L2</kbd> + <kbd>△</kbd> > 按住 <kbd>R2</kbd>）拉动前方的木制起重机将其荡到你身边，然后跳上去到达另一侧的脚手架。然后只需走到矿车前按下 <kbd>△</kbd> 引爆炸药。' },

                { type: 'header', content: '3. 回到矿工身边' },
                { type: 'text', content: '引爆炸药后，你会受到几只机器的攻击，包括挖穴兽和淘宝者。解决掉它们，然后将梯子附近的一个箱子稍微拉出来一点，从这里离开房间回到矿工那里，再次与他们交谈。' },

                { type: 'header', content: '4. 回到科尔文德身边' },
                { type: 'text', content: '现在原路返回离开矿井，与科尔文德交谈以完成任务。' }
            ]
          },
          { 
            type: 'text', 
            id: 'sq-shadow-from-the-past', 
            name: '2. 往日阴影 (Shadow from the Past)', 
            description: '推荐等级：7 | 奖励：1750 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>往日阴影 (Shadow from the Past)</strong> 是《地平线 西之绝境》中的一个支线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 贫瘠之光 (Barren Light)<br/>
                            <strong>任务发布者：</strong> 科诺弗 (Conover)<br/>
                            <strong>任务等级：</strong> 7级<br/>
                            <strong>前置要求：</strong> 无，在贫瘠之光找到任务起点<br/>
                            <strong>奖励：</strong> 1750 XP, 2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 一名卡加卫兵被指控谋杀了一名战友。他坚称自己是正当防卫——但没有找到任何证据支持他的说法。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往空地',
                    '检查血迹',
                    '调查空地',
                    '跟随踪迹',
                    '潜行绕过或杀死机器',
                    '寻找踪迹 / 检查血迹',
                    '跟随血迹',
                    '检查瞭望点',
                    '跟随踪迹',
                    '进入洞穴',
                    '调查洞穴',
                    '杀死日蚀教分子',
                    '在藏身处寻找拉亚德的尸体',
                    '返回科诺弗处'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往空地' },
                { type: 'text', content: '一名囚犯因杀害他的战友拉鲁维克而被判处死刑，他声称拉鲁维克是一个名为“日蚀教”的组织成员。科诺弗声称他遭到拉鲁维克的袭击，在被对方持刀扑倒后才被迫自卫杀人。埃洛伊前往事发空地，调查他的说法是否属实。' },

                { type: 'header', content: '2. 检查血迹' },
                { type: 'text', content: '到达空地后，首先调查地上的血迹。' },

                { type: 'header', content: '3. 调查空地' },
                { type: 'text', content: '随后使用全息眼镜（按住 <kbd>R3</kbd>）调查由紫色光芒标记的3个兴趣点。' },

                { type: 'header', content: '4. 跟随踪迹 / 潜行绕过或杀死机器' },
                { type: 'text', content: '使用 <kbd>R1</kbd> 高亮显示踪迹并跟随它们。在某一点，你可以选择杀死机器或潜行绕过它们。这里只有3只挖穴兽，很容易用无声攻击一击必杀。' },

                { type: 'header', content: '5. 寻找踪迹（检查血迹）' },
                { type: 'text', content: '穿过3只挖穴兽后是一条破碎的沥青路。在路的起点有一只死去的机器。与它互动。杀死挖穴兽后，可能需要半分钟目标才会更新，之后才能进行互动。还要扫描机器旁边的血迹，像往常一样使用 <kbd>R3</kbd> 和 <kbd>R1</kbd> 高亮显示踪迹。' },

                { type: 'header', content: '6. 跟随血迹' },
                { type: 'text', content: '从死去的机器开始，跟随踪迹穿过桥梁，调查同一座桥下的瞭望点。在那里调查绷带。' },

                { type: 'header', content: '7. 跟随踪迹 / 进入洞穴' },
                { type: 'text', content: '从绷带处再次使用 <kbd>R3</kbd> 并用 <kbd>R1</kbd> 高亮显示踪迹。继续跟随踪迹直到来到一面墙前。爬上墙进入一个名为“落单者之影”的洞穴。' },

                { type: 'header', content: '8. 调查洞穴 / 杀死日蚀教分子' },
                { type: 'text', content: '在洞穴中你会发现一群日蚀教信徒。杀死他们所有人，因为他们正在策划袭击贫瘠之光。你可以按住 <kbd>R3</kbd> 扫描他们，这会将他们用黄色轮廓标记出来。有时一两个敌人也会在洞穴外生成。' },

                { type: 'header', content: '9. 在藏身处寻找拉亚德的尸体' },
                { type: 'text', content: '杀光他们后，你必须找到拉亚德的尸体，它位于这个藏身处的户外区域。离开洞穴后，它就在户外区域的尽头。' },

                { type: 'header', content: '10. 返回科诺弗处' },
                { type: 'text', content: '通过影像，你将了解到日蚀教的首领，这将是你未来的目标。不过现在，埃洛伊拿走了拉亚德的面具，必须返回贫瘠之光证明科诺弗的清白。再次与任务发布者科诺弗交谈以完成此任务。' },
                { type: 'text', content: '这就完成了《地平线 西之绝境》中的“往日阴影”支线任务，并解锁了后续任务“西部阴影”。' }
            ]
          },
          { 
            type: 'text', 
            id: 'sq-shadow-in-the-west', 
            name: '3. 西部阴影 (Shadow in the West)', 
            description: '推荐等级：10 | 奖励：2500 XP, 3 技能点, 奖杯“拯救丹特”',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>西部阴影 (Shadow in the West)</strong> 是《地平线 西之绝境》中的一个支线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 贫瘠之光 (Barren Light)<br/>
                            <strong>任务发布者：</strong> 科诺弗 (Conover)（完成前置任务“往日阴影”后自动触发）<br/>
                            <strong>任务等级：</strong> 10级<br/>
                            <strong>前置要求：</strong> 完成支线任务“往日阴影 (Shadow from the Past)”<br/>
                            <strong>奖励：</strong> 2500 XP, 3 技能点, 奖杯“拯救丹特”`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 日蚀教的残党正在西部禁地集结，在光明之战后重建他们的军队。必须彻底阻止他们。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往日蚀教藏身处坐标',
                    '杀死日蚀教分子',
                    '寻找日蚀教藏身处的入口',
                    '与乌塔鲁囚犯交谈',
                    '寻找韦兹雷',
                    '进入韦兹雷的密室',
                    '杀死韦兹雷和他的机器',
                    '调查韦兹雷的密室',
                    '与耶夫交谈'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往日蚀教藏身处坐标' },
                { type: 'text', content: '在“往日阴影”支线任务中，你发现了日蚀教的首领以及他们在西部的藏身处。完成上述支线任务后，你将自动获得贫瘠之光西南方向该区域的路径点。' },

                { type: 'header', content: '2. 杀死日蚀教分子' },
                { type: 'text', content: '到达该区域后，你必须杀死大门前的所有敌人和机器。你可以按住 <kbd>R3</kbd> 以黄色高亮显示附近的敌人轮廓。记得也要杀死机器，不仅仅是人类敌人。' },

                { type: 'header', content: '3. 寻找日蚀教藏身处的入口 / 与乌塔鲁囚犯交谈' },
                { type: 'text', content: '击败敌人后，靠近大门，乌塔鲁囚犯会朝你的方向呼喊。与他交谈，他会告诉你进入藏身处的方法。你必须爬上他刚刚下来的脚手架，绕过它进入大院。' },

                { type: 'header', content: '4. 寻找韦兹雷' },
                { type: 'text', content: '在大院内杀死敌人。然后进入那扇古老的门。' },
                { type: 'text', content: '在里面你会发现一些被关在笼子里的囚犯。打开笼门释放他们。' },
                { type: 'text', content: '然后进入左侧韦兹雷的密室。' },

                { type: 'header', content: '5. 进入韦兹雷的密室' },
                { type: 'text', content: '在密室里你会发现韦兹雷，他看到你并不高兴。' },

                { type: 'header', content: '6. 杀死韦兹雷和他的机器' },
                { type: 'text', content: '韦兹雷会召唤一只<strong>破坏者 (Ravager)</strong> 协助他战斗，而他自己则会站在高台上用重型武器射击你。首先解决破坏者。然后集中精力对付韦兹雷。你可以躲在石柱后面，但他射击次数多了石柱最终会崩塌。他的武器射击一段时间后需要冷却。这给了你用弓箭爆头的机会。记住在瞄准时按 <kbd>R3</kbd> 可以减慢时间并放大，争取爆头，并在他射击时保持掩护。另外，如果你有<strong>射钉枪 (Spike Thrower)</strong>，它能对他造成大量伤害。' },

                { type: 'header', content: '7. 调查韦兹雷的密室' },
                { type: 'text', content: '战斗结束后，不要往外走。留在你重生的密室里。你必须使用 Focus（按住 <kbd>R3</kbd>）扫描该区域的3个紫色数据点（日志）。' },
                { type: 'text', content: '第一个在你重生位置前方右侧：' },
                { type: 'text', content: '第二个需要你转身，进入身后的房间。' },
                { type: 'text', content: '在第二个日志的左边有一个通风口，你可以用拉钩发射器拉开（<kbd>L2</kbd> + <kbd>△</kbd> > 按住 <kbd>R2</kbd>）。然后爬过通风口进入后面的房间，找到第3个也是最后一个数据点。扫描完所有3个后，目标将更新为与耶夫交谈。' },

                { type: 'header', content: '8. 与耶夫交谈' },
                { type: 'text', content: '最后与耶夫交谈你的发现，他站在密室的出口处，也就是第一个数据点所在的位置。' }
            ]
          },
          { 
            type: 'text', 
            id: 'sq-twilight-path', 
            name: '4. 暮光之路 (The Twilight Path)', 
            description: '推荐等级：7 | 奖励：1750 XP, 2 技能点, 1 卡加族学者',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>暮光之路 (The Twilight Path)</strong> 是《地平线 西之绝境》中的一个支线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 削链镇 (Chainscrape)<br/>
                            <strong>任务发布者：</strong> 佩特拉 (Petra)<br/>
                            <strong>任务等级：</strong> 7级<br/>
                            <strong>前置要求：</strong> 完成主线任务3“在极限边缘”<br/>
                            <strong>奖励：</strong> 1750 XP, 2 技能点, 1 卡加族学者`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 一群暗影卡加族难民——旧政权的忠诚拥护者——拒绝让任何人通过一条通往宝贵资源的道路。奥斯拉姆暴徒威胁要不惜一切代价强迫他们离开。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '与托兰德交谈（可选）',
                    '前往暮光卡加营地',
                    '与暮光卡加难民交谈',
                    '寻找萨霍瓦尔',
                    '与萨霍瓦尔交谈',
                    '收集风暴鸟之心',
                    '返回萨霍瓦尔身边',
                    '返回暮光卡加营地'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 与托兰德交谈（可选）' },
                { type: 'text', content: '这个任务在削链镇开始，在酒馆内与佩特拉交谈。' },
                { type: 'text', content: '托兰德就在削链镇酒馆外，近战格斗场旁边。如果你愿意，可以和他交谈，他会告诉你他是如何杀死风暴鸟的。' },

                { type: 'header', content: '2. 前往暮光卡加营地' },
                { type: 'text', content: '前往营地并帮助击杀那里的机器。' },

                { type: 'header', content: '3. 与暮光卡加难民交谈' },
                { type: 'text', content: '机器被击杀后，与同一区域的难民交谈。' },

                { type: 'header', content: '4. 寻找萨霍瓦尔' },
                { type: 'text', content: '与洛卡莎 (Lokasha) 交谈后，径直向前走，你需要爬上梯子。射击梯子下方的锁扣以放下梯子，爬上去并沿着左侧的线性路径前进。' },
                { type: 'text', content: '你会来到一个断裂的梯子处，检查它，然后爬上断裂的梯子，向上看可以看到一个抓钩点。跳向它（<kbd>✕</kbd> <kbd>✕</kbd>），然后回到部分断裂的梯子处，利用它到达顶部。' },
                { type: 'text', content: '在这里你必须跳离墙壁以到达另一个抓取点（<kbd>✕</kbd> 跳上墙壁，<kbd>○</kbd> 蹬墙跳），然后爬到顶部。' },
                { type: 'text', content: '正前方左侧是另一组墙壁绳索和梯子，可以爬得更高。' },
                { type: 'text', content: '当你到达顶部时，埃洛伊会评论另一个断裂的梯子，相反，你必须攀爬右侧的悬崖继续向上。' },
                { type: 'text', content: '到达顶部后，向前走并在断桥处跳下，然后爬上另一侧。' },
                { type: 'text', content: '就在断桥对面，埃洛伊会评论地上的一些血迹。按住 <kbd>R3</kbd> 使用你的 Focus 并按 <kbd>R1</kbd> 标记踪迹，这将引导你沿着线性路径到达一个新区域。' },
                { type: 'text', content: '你可以潜行绕过或杀死这里的机器。无论哪种方式，都要跟随标记的血迹穿过这个区域。' },

                { type: 'header', content: '5. 与萨霍瓦尔交谈' },
                { type: 'text', content: '离开这个区域后，继续跟随踪迹，你会发现萨霍瓦尔就在前方不远处，与他交谈。' },

                { type: 'header', content: '6. 收集风暴鸟之心' },
                { type: 'text', content: '与萨霍瓦尔交谈后，向右下方看，找到一个抓钩点。跳向它，然后向右爬下，跳向另一个抓钩点，然后绕过悬崖右侧，最后爬到顶部。' },
                { type: 'text', content: '到达顶部后，爬上这里的塔楼，你会发现风暴鸟就在顶部，搜刮它获得心脏。' },

                { type: 'header', content: '7. 返回萨霍瓦尔身边' },
                { type: 'text', content: '就在风暴鸟旁边，你可以从塔楼上用绳索降落到下方，然后利用断桥对面的抓钩点返回萨霍瓦尔那里。' },

                { type: 'header', content: '8. 返回暮光卡加营地' },
                { type: 'text', content: '回到有机器的区域，穿过一座小桥向左走，你可以从这里用绳索降落回营地。' },
                { type: 'text', content: '然后与这里的一群人交谈，选择任何对话选项来化解局势，之后任务完成。' }
            ]
          },
          { 
            type: 'text', 
            id: 'sq-bristlebacks', 
            name: '5. 刚背兽 (The Bristlebacks)', 
            description: '推荐等级：7 | 奖励：2330 XP, 2 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>刚背兽 (The Bristlebacks)</strong> 是《地平线 西之绝境》中的一个支线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 削链镇 (Chainscrape)<br/>
                            <strong>任务发布者：</strong> 乌尔文德 (Ulvund)<br/>
                            <strong>任务等级：</strong> 7级<br/>
                            <strong>前置要求：</strong> 首次抵达削链镇后出现在地图上，但必须完成主线任务“大使会议”后才能完全完成。<br/>
                            <strong>奖励：</strong> 2330 XP, 2 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 刚背兽在丹特地区横行霸道。但它们最初是如何进入山谷的呢？' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '与卡加长官交谈',
                    '在采石场西边搜索刚背兽',
                    '跟随踪迹前往山谷后方',
                    '进入矿井',
                    '杀死机器',
                    '调查冒烟的隧道',
                    '回到杰瓦德·威林身边',
                    '寻找贫瘠之光以外刚背兽的源头（必须完成第4个主线任务“大使会议”）',
                    '在贫瘠之光北边搜索叛军营地',
                    '寻找叛军机器围栏的入口',
                    '杀死叛军和他们的机器',
                    '调查洞穴',
                    '回到杰瓦德·威林身边'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 与卡加长官交谈' },
                { type: 'text', content: '前往附近的酒馆，与杰瓦德·威林 (Javad the Willing) 交谈。' },

                { type: 'header', content: '2. 在采石场西边搜索刚背兽' },
                { type: 'text', content: '前往采石场，你会发现瀑布旁有一只死去的刚背兽，检查它。' },

                { type: 'header', content: '3. 跟随踪迹前往山谷后方' },
                { type: 'text', content: '检查完死去的刚背兽后，沿着小路深入山谷，找到矿井的入口。' },

                { type: 'header', content: '4. 进入矿井' },
                { type: 'text', content: '现在进入矿井，沿着线性路径前进，当埃洛伊提到轨道坍塌时向右走。' },

                { type: 'header', content: '5. 杀死机器' },
                { type: 'text', content: '你会来到一个有两只刚背兽的房间，你必须解决它们。' },

                { type: 'header', content: '6. 调查冒烟的隧道' },
                { type: 'text', content: '杀死刚背兽后，沿着房间右侧断裂的轨道进入一个充满烟雾的隧道。刚进去时，跳进左边的一个充满烈性炸药桶的小洞，阅读那里的笔记。' },

                { type: 'header', content: '7. 回到杰瓦德·威林身边' },
                { type: 'text', content: '原路离开矿井，回到削链镇的酒馆找杰瓦德。' },

                { type: 'header', content: '8. 寻找贫瘠之光以外刚背兽的源头' },
                { type: 'text', content: '完成第4个主线任务“大使会议”后，你将自动完成此目标。' },

                { type: 'header', content: '9. 在贫瘠之光北边搜索叛军营地' },
                { type: 'text', content: '完成上述主线任务后，你将被指派前往一个叛军营地。' },

                { type: 'header', content: '10. 寻找叛军机器围栏的入口' },
                { type: 'text', content: '径直前往前方的围栏。' },

                { type: 'header', content: '11. 杀死叛军和他们的机器' },
                { type: 'text', content: '杀死该区域内的所有叛军和机器，如果需要，使用你的 Focus 找到它们。' },

                { type: 'header', content: '12. 调查洞穴' },
                { type: 'text', content: '杀死所有叛军和机器后，再往前一点有一座吊桥，把它放下来。' },
                { type: 'text', content: '现在射击另一半两侧的绳索固定物，穿过它进入洞穴。' },

                { type: 'header', content: '13. 回到杰瓦德·威林身边' },
                { type: 'text', content: '一段短片将会播放，然后你必须回到削链镇酒馆找杰瓦德，可以使用快速旅行。与他交谈，任务将完成。' }
            ]
          },
          { type: 'text', name: '5. 西部阴影', description: 'Lv.10 | 贫瘠之光 | 奖励：解锁后续任务' },
          { type: 'text', name: '6. 洪水', description: 'Lv.15 | 炙矛地北部 | 奖励：特纳克辩护者 染料' },
          { type: 'text', name: '7. 败战者之门', description: 'Lv.15 | 箭手地 | 奖励：火风暴战弓' },
          { type: 'text', name: '8. 分裂的部族', description: 'Lv.15 | 石峰 (Stone\'s Echo) | 奖励：特纳克辩护者 染料' },
          { type: 'text', name: '9.  树根以此结合', description: 'Lv.15 | 素歌之域 | 奖励：库的射手弓 (Kue\'s Sharpshot Bow)' },
          { 
            type: 'text', 
            id: 'sq-burning-blooms', 
            name: '10. 燃烧的花朵 (The Burning Blooms)', 
            description: '推荐等级：15 | 奖励：3750 XP, 2 技能点, 卡加族暗影面部彩绘',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>燃烧的花朵 (The Burning Blooms)</strong> 是《地平线 西之绝境》中的一个支线任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 野外（炼油厂 Mu 南部 / 无人地带）<br/>
                            <strong>任务发布者：</strong> 塔拉纳 (Talanah)<br/>
                            <strong>任务等级：</strong> 15级<br/>
                            <strong>前置要求：</strong> 在野外找到任务起始位置<br/>
                            <strong>奖励：</strong> 3750 XP, 2 技能点, 卡加族暗影面部彩绘`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 一名卡加族女猎人被发现在无人地带的野外游荡。难道是位老朋友？' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '击杀机器',
                    '与塔拉纳交谈',
                    '跟随塔拉纳前往战场',
                    '检查脚印',
                    '调查战场 – 扫描踪迹',
                    '跟随踪迹',
                    '与乌塔鲁人交谈',
                    '前往西部山脊',
                    '击杀壳行龟 (Shellsnapper)',
                    '进入隧道',
                    '调查隧道'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 击杀机器' },
                { type: 'text', content: '接近该区域会触发过场动画，一名猎人——塔拉纳 (Talanah) 正在猎杀一些机器。埃洛伊 (Aloy) 不需要多问，直接加入战斗。' },

                { type: 'header', content: '2. 与塔拉纳交谈' },
                { type: 'text', content: '塔拉纳会把你介绍给她的“画眉” (Thrush)，并告诉你她正在寻找一位在西部禁地失踪的朋友。' },

                { type: 'header', content: '3. 跟随塔拉纳前往战场' },
                { type: 'text', content: '重逢后，塔拉纳会让她的画眉去治疗，自己则先行一步。你需要跟随她前往战场。' },

                { type: 'header', content: '4. 检查脚印' },
                { type: 'text', content: '到达后，检查塔拉纳蹲伏位置旁边的脚印。' },

                { type: 'header', content: '5. 调查战场' },
                { type: 'text', content: '现在像往常一样使用 Focus 调查战场。按 <kbd>R3</kbd> 扫描并调查区域内的所有紫色标记。最远的一个标记将触发扫描该区域脚印的目标。' },

                { type: 'header', content: '6. 跟随踪迹' },
                { type: 'text', content: '像往常一样，按 <kbd>R1</kbd> 标记踪迹并跟随它走一段路。' },

                { type: 'header', content: '7. 与乌塔鲁人交谈' },
                { type: 'text', content: '跟随踪迹后，你会发现一个乌塔鲁人坐在石头上。与他交谈，得知他叫 Lel，他见过你要找的人。他告诉你塔拉纳的朋友加入了一支商队，正前往西部山脊。' },

                { type: 'header', content: '8. 前往西部山脊' },
                { type: 'text', content: 'Lel 告诉了埃洛伊和塔拉纳该去哪里，所以我们照做，向西前往西部山脊。' },

                { type: 'header', content: '9. 击杀壳行龟 (Shellsnapper)' },
                { type: 'text', content: '到达后，你会发现一只壳行龟 (Shellsnapper) 在那里等着你。在继续前进之前先解决它。' },

                { type: 'header', content: '10. 进入隧道' },
                { type: 'text', content: '击败机器后，前往隧道。' },

                { type: 'header', content: '11. 调查隧道' },
                { type: 'text', content: '在隧道中，扫描左侧的石头，发现一具尸体，揭示了隧道里发生的事情。' }
            ]
          }
        ]
      },
      {
        title: '中期支线',
        content: [
          { type: 'text', name: '11. 信号峰', description: 'Lv.16 | 某地营地 | 奖励：刺钉发射器' },
          { type: 'text', name: '12. 渴求狩猎', description: 'Lv.17 | 箭手地 | 奖励：特纳克征服者 染料' },
          { type: 'text', name: '13. 岬角', description: 'Lv.17 | 素歌之域 | 奖励：乌塔鲁保护者 染料' },
          { type: 'text', name: '14. 士兵的行军 (A Soldier\'s March)', description: 'Lv.18 | 堡垒 | 奖励：特纳克战术家 染料' },
          { type: 'text', name: '15. 收支平衡', description: 'Lv.18 | 某地营地 | 奖励：大量经验' },
          { type: 'text', name: '16. 以血还血', description: 'Lv.19 | 纪念林 | 奖励：周界绊线枪' },
          { type: 'text', name: '17. 沙中之伤', description: 'Lv.19 | 箭手地 | 奖励：大量经验' },
          { type: 'text', name: '18. 雾中', description: 'Lv.20 | 潮汐之令 (Tide\'s Reach) | 奖励：日鹰粉碎护手' },
          { type: 'text', name: '19. 溺水的希望', description: 'Lv.22 | 卡加营地 | 奖励：守卫绊线枪' },
          { type: 'text', name: '20. 爆炸或破产', description: 'Lv.24 | 隐秘余烬 | 奖励：布默的粉碎护手 (Boomer\'s Shredder Gauntlet)' },
          { type: 'text', name: '21. 雄心壮志', description: 'Lv.24 | 隐秘余烬 | 奖励：奥斯拉姆好斗者 染料' },
          { type: 'text', name: '22. 第二次主歌', description: 'Lv.25 | 基地 | 佐 的同伴任务。奖励：乌塔鲁歌者 染料' },
          { type: 'text', name: '23. 需要知道', description: 'Lv.25 | 某地营地 | 塔拉纳 的任务线。奖励：闪电猎手弓' }
        ]
      },
      {
        title: '后期支线',
        content: [
          { type: 'text', name: '24. 血呛', description: 'Lv.27 | 荆棘沼泽城 | 奖励：特纳克掠夺者 染料' },
          { type: 'text', name: '25. 陨落之谷', description: 'Lv.28 | 纪念林 | 奖励：空袭爆破枪' },
          { type: 'text', name: '26. 失而复得', description: 'Lv.30 | 基地 | 科塔尔罗 的同伴任务。奖励：贝壳行者护手、远古雕塑' },
          { type: 'text', name: '27. 禁忌的先祖智慧', description: 'Lv.30 | 基地 | 阿尔瓦 的同伴任务。奖励：乌塔鲁保护者 染料' },
          { type: 'text', name: '28. 归途', description: 'Lv.32 | 先祖智慧的登陆点 (Legacy\'s Landfall) | 奖励：传奇武器“天空杀手”' }
        ]
      },
      {
        title: '竞技场与挑战',
        content: [
          { type: 'collectible', name: '竞技场', description: '完成主线“库尔鲁特”后解锁。这是获取顶级传奇装备（如“死亡探索者”猎手弓）的最佳途径。建议后期再来刷。' },
          { type: 'collectible', name: '回收契约', description: '在地图各地的回收商处接取。完成所有契约（共4个回收商）可获得“奥斯拉姆工匠”传奇护甲，近战流毕业装。' },
          { type: 'collectible', name: '狩猎场', description: '共4个。每个狩猎场只需获得最低评价（四分之一条纹）即可满足白金要求。' }
        ]
      },
      {
        title: '差事任务 (Errand Quests)',
        content: [
          { 
            type: 'text', 
            id: 'errand-learning-machine-strike', 
            name: '1. 学习机器斗棋 (Learning Machine Strike)', 
            description: '地点：削链镇 | 奖励：无', 
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>学习机器斗棋 (Learning Machine Strike)</strong> 是《地平线 西之绝境》中的一个差事任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 削链镇 (Chainscrape)<br/>
                            <strong>任务发布者：</strong> 萨尔玛 (Salma)<br/>
                            <strong>任务等级：</strong> 无<br/>
                            <strong>前置要求：</strong> 完成主线任务2“长矛的尖端”<br/>
                            <strong>奖励：</strong> 无`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 这种传统的特纳克棋盘游戏看起来很有趣。在削链镇可能有一两个玩家愿意带新手入门。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往削链镇',
                    '听取关于机器斗棋的传闻',
                    '与萨尔玛交谈'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往削链镇' },
                { type: 'text', content: '前往削链镇，走向酒馆里的机器斗棋图标，你会发现萨尔玛。' },

                { type: 'header', content: '2. 听取关于机器斗棋的传闻' },
                { type: 'text', content: '这个目标可能会在与萨尔玛交谈之前出现，你只需要在酒馆里与萨尔玛交谈即可推进。' },

                { type: 'header', content: '3. 与萨尔玛交谈' },
                { type: 'text', content: '与萨尔玛交谈并游玩“学习机器斗棋”的教程以完成该差事任务。萨尔玛还会给你机器斗棋的入门套装。' }
            ]
          },
          { 
            type: 'text', 
            id: 'errand-a-bigger-boom', 
            name: '2. 更大的爆炸 (A Bigger Boom)', 
            description: '地点：削链镇 | 奖励：原型射钉枪', 
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>更大的爆炸 (A Bigger Boom)</strong> 是《地平线 西之绝境》中的一个差事任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 削链镇 (Chainscrape)<br/>
                            <strong>任务发布者：</strong> 德拉 (Delah) 和 布默 (Boomer)<br/>
                            <strong>任务等级：</strong> 7级<br/>
                            <strong>前置要求：</strong> 完成主线任务3“在极限边缘”<br/>
                            <strong>奖励：</strong> 1170 XP, 1 技能点, 原型射钉枪 (Prototype Spike Thrower)`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 削链镇的两位奥斯拉姆工匠提议，如果埃洛伊能给他们弄来合适的零件，就为她打造一把强大的新武器。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '收集 3 个冲锋兽角',
                    '收集 1 个宽颌兽肋骨',
                    '将零件交给德拉'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 收集 3 个冲锋兽角' },
                { type: 'text', content: '前往地图上标记的冲锋兽出没地寻找冲锋兽。你需要用箭射断它们的角，猎手箭或精准箭效果最好。' },

                { type: 'header', content: '2. 收集 1 个宽颌兽肋骨' },
                { type: 'text', content: '接下来前往地图上标记的宽颌兽出没地寻找宽颌兽。你只需要杀死一只并搜刮尸体，无需攻击特定弱点。' },

                { type: 'header', content: '3. 将零件交给德拉' },
                { type: 'text', content: '回到削链镇的同一地点找德拉完成差事。你将获得“原型射钉枪”作为奖励。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-purple-50 p-4 rounded-lg border border-purple-200 flex gap-4 items-start shadow-sm mt-2">
                    <div class="bg-white p-2.5 rounded-full shadow-sm text-2xl flex items-center justify-center w-12 h-12">🧨</div>
                    <div>
                      <h4 class="font-bold text-purple-900 text-sm mb-1">获得武器：原型射钉枪</h4>
                      <p class="text-xs text-purple-800 m-0 leading-relaxed">这是一种投掷爆炸长矛的武器，充满蓄力后可以穿透护甲并造成大量爆炸伤害。是对付大型机器的利器。</p>
                    </div>
                  </div>` 
                }
            ]
          },
          { 
            type: 'text', 
            id: 'errand-a-dash-of-courage', 
            name: '3. 勇气之味 (A Dash of Courage)', 
            description: '推荐等级：5 | 奖励：830 XP, 1 技能点', 
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>勇气之味 (A Dash of Courage)</strong> 是《地平线 西之绝境》中的一个差事任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 削链镇 (Chainscrape)<br/>
                            <strong>任务发布者：</strong> 米尔杜夫 (Milduf)<br/>
                            <strong>任务等级：</strong> 5级<br/>
                            <strong>前置要求：</strong> 在首次抵达削链镇后出现在地图上，你会在主线任务3“在极限边缘”期间前往那里。<br/>
                            <strong>奖励：</strong> 830 XP, 1 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 削链镇的厨师需要物资和设备来满足顾客的需求。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '收集野肉 0/5',
                    '收集苦叶 0/5',
                    '前往淘宝者出没地',
                    '将物资交给米尔杜夫'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 收集野肉 0/5' },
                { type: 'text', content: '该区域周围有大量的野生动物，野猪、浣熊和松鼠最为常见。你可以按住 <kbd>R3</kbd> 使用 Focus 查看附近是否有动物。潜行接近它们，用弓箭射杀并从5只不同的动物身上搜刮野肉。' },

                { type: 'header', content: '2. 收集苦叶 0/5' },
                { type: 'text', content: '苦叶在该区域很常见，特别是削链镇外的河流附近（米尔杜夫会告诉你这一点）。这是一种很容易发现的绿色植物。' },

                { type: 'header', content: '3. 前往淘宝者出没地' },
                { type: 'text', content: '前往地图上标记的区域，解决掉这里的淘宝者，然后搜刮这个特定的淘宝者废料堆，获得一块波纹金属板。' },

                { type: 'header', content: '4. 将物资交给米尔杜夫' },
                { type: 'text', content: '收集完所有物品后，回到削链镇找米尔杜夫完成差事任务。过场动画结束后，你可以与他交谈并购买一些食物来解锁食物袋。这是解锁“升级每种袋子类型”奖杯必须升级的袋子之一，但也可以通过从游戏中的任何其他厨师那里购买食物来获得。' }
            ]
          },
          { 
            type: 'text', 
            id: 'errand-the-enduring', 
            name: '4. 持久者 (The Enduring)', 
            description: '推荐等级：32 | 奖励：5000 XP, +1 长矛伤害, 3 技能点',
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>持久者 (The Enduring)</strong> 是《地平线 西之绝境》中的一个差事任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 削链镇 (Chainscrape)<br/>
                            <strong>任务发布者：</strong> 格斗场大师 (Pit Master)<br/>
                            <strong>任务等级：</strong> 32级<br/>
                            <strong>前置要求：</strong> 完成主线任务3“在极限边缘”并在削链镇格斗场获胜。<br/>
                            <strong>奖励：</strong> 5000 XP, +1 长矛伤害, 3 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 在西部禁地的某处，有一位被称为“持久者”的传奇特纳克大师。只有证明自己价值的人，才能获得与其训练的殊荣。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '获得沙漠氏族的标记',
                    '获得低地氏族的标记',
                    '获得天空氏族的标记',
                    '前往沙漠氏族北部的山脉',
                    '找到持久者',
                    '跟随持久者',
                    '击败持久者'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '起始地点：削链镇' },
                { type: 'text', content: '要触发此差事，你需要在削链镇完成格斗场挑战并击败格斗场大师。这需要战士技能树中的“破防 (Block Breaker)”技能。格斗场在主线任务3：在极限边缘后可用。' },

                { type: 'header', content: '1. 获得沙漠氏族的标记 (Earn the Desert Clan’s Mark)' },
                { type: 'text', content: '要获得此标记，你需要完成灼烧矛地 (Scalding Spear) 的格斗场挑战并击败格斗场大师。这需要战士技能树中的“诺拉族战士 (Nora Warrior)”和“空中斩击 (Aerial Slash)”技能。' },

                { type: 'header', content: '2. 获得低地氏族的标记 (Earn the Lowland Clan’s Mark)' },
                { type: 'text', content: '要获得此标记，你需要完成荆棘沼泽城 (Thornmarsh) 的格斗场挑战并击败格斗场大师。这需要战士技能树中的“毁灭者 (The Destroyer)”、“旋转镰刀 (Spinning Scythe)”、“半月斩 (Halfmoon Slash)”、“跳跃攻击 (Jump-Off)”、“能量涌动 (Energy Surge)”和“诺拉族战士 (Nora Warrior)”技能。' },

                { type: 'header', content: '3. 获得天空氏族的标记 (Earn the Sky Clan’s Mark)' },
                { type: 'text', content: '要获得此标记，你需要完成坚堡 (The Bulwark) 的格斗场挑战并击败格斗场大师。这需要战士技能树中的“跳跃攻击 (Jump-Off)”、“破防 (Block Breaker)”和“半月斩 (Halfmoon Slash)”技能。' },

                { type: 'header', content: '4. 前往沙漠氏族北部的山脉 (Go to the Mountains North of the Desert Clan)' },
                { type: 'text', content: '获得所有三个标记后，前往目标区域。' },

                { type: 'header', content: '5. 找到持久者 (Find the Enduring)' },
                { type: 'text', content: '持久者在一个小营地里睡觉，与她交谈。' },

                { type: 'header', content: '6. 跟随持久者 (Follow the Enduring)' },
                { type: 'text', content: '跟随持久者走一小段路到附近的竞技场，再次与她交谈。' },

                { type: 'header', content: '7. 击败持久者 (Defeat the Enduring)' },
                { type: 'text', content: '现在你需要在一场战斗中击败她。这并不是很难，尤其是在低难度下，所以你应该不会遇到太大的麻烦。' },
                { 
                  type: 'html', 
                  content: `<div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-2 flex items-center gap-3">
                    <div class="text-2xl">🏆</div>
                    <div>
                      <p class="font-bold text-yellow-900 mb-0">恭喜！你击败了持久者，获得了长矛伤害提升！</p>
                    </div>
                  </div>` 
                }
            ]
          },
          { 
            type: 'text', 
            id: 'errand-signals-of-the-sun', 
            name: '5. 太阳的信号 (Signals of the Sun)', 
            description: '地点：丹特 | 奖励：830 XP, 1 技能点', 
            details: [
                { type: 'header', content: '概览' },
                { type: 'text', content: '<strong>太阳的信号 (Signals of the Sun)</strong> 是《地平线 西之绝境》中的一个差事任务。本攻略将指引你完成该任务的所有目标。' },
                
                { type: 'header', content: '任务信息' },
                { 
                  type: 'box', 
                  title: '任务详情', 
                  content: `<strong>起始地点：</strong> 丹特，荒光城外 (The Daunt, just outside Barren Light)<br/>
                            <strong>任务发布者：</strong> 马里夫 (Maleev)<br/>
                            <strong>任务等级：</strong> 5级<br/>
                            <strong>前置要求：</strong> 完成主线任务3“在极限边缘”<br/>
                            <strong>奖励：</strong> 830 XP, 1 技能点`
                },
                { type: 'text', content: '<strong>任务简介：</strong> 一个奥斯拉姆人需要帮助抵御旧卡尔加瞭望塔附近的机器攻击。' },

                { type: 'header', content: '任务目标' },
                { type: 'checklist', items: [
                    '前往悬崖顶部',
                    '消灭机器',
                    '与奥斯拉姆人交谈',
                    '收集信号透镜',
                    '返回雷娜处'
                ]},

                { type: 'header', content: '详细流程' },
                
                { type: 'header', content: '1. 前往悬崖顶部' },
                { type: 'text', content: '从与马里夫交谈的地方径直向前，跳上前面的岩石，爬上去并继续向前移动。' },
                { type: 'text', content: '爬上去，靠着这堵墙的右侧爬到顶部。从这里再次向上攀爬，沿着墙壁向右移动。' },
                { type: 'text', content: '跳过小瀑布，下到下方的一个洞穴中。跑过洞穴，利用另一侧的墙壁爬出来，然后继续前进到一个有机器的更开阔的区域。' },

                { type: 'header', content: '2. 消灭机器' },
                { type: 'text', content: '消灭这里的机器。' },

                { type: 'header', content: '3. 与奥斯拉姆人交谈' },
                { type: 'text', content: '与雷娜 (Raynah) 交谈，她就在机器所在的区域的一块小岩石上。' },

                { type: 'header', content: '4. 收集信号透镜' },
                { type: 'text', content: '看向信号塔所在的右侧，你可以使用拉钩发射器 (<kbd>L2</kbd> + <kbd>△</kbd> > 按住 <kbd>R2</kbd>) 拉下一堵墙，进去后会看到正前方有另一堵墙可以拉下，从而去到外面。' },
                { type: 'text', content: '从这里向左爬上去，找到另一堵可以拉下的墙，进去。' },
                { type: 'text', content: '抬头看，有一个抓钩点，转身，向前走，然后从右边的门口出去，接着在左边爬上去。' },
                { type: 'text', content: '从信号设备上取下透镜。' },

                { type: 'header', content: '5. 返回雷娜处' },
                { type: 'text', content: '回到雷娜那里，把透镜交给她以完成任务。' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tallnecks',
    title: '🦒 长颈兽',
    sections: [
      {
        title: '全6只长颈兽位置与攻略',
        content: [
          { type: 'collectible', name: '1. 朱砂砂地', description: '位于地图东部。射击卫星盘红色锁扣，爬梯子，推正圆盘后滑翔到头顶。' },
          { type: 'collectible', name: '2. 静沙地', description: '位于南部沙漠。使用弩炮射击弱点并装上重物，使其倒地后超控。' },
          { type: 'collectible', name: '3. 守卫之林', description: '位于西部森林。需要在树屋平台间跑酷，最后滑翔到背上。' },
          { type: 'collectible', name: '4. 登陆点', description: '位于最西端旧金山遗址。先潜水扫描背部零件，去附近找回零件安装，待其站起后攀爬。' },
          { type: 'collectible', name: '5. 盐咬', description: '位于大坩埚：约塔 内部。必须完成该大坩埚流程，长颈兽会带你回到地面。' },
          { type: 'collectible', name: '6. 闪光荒原', description: '位于地图中央。主线任务“十特之翼”自动解锁，无法提前完成。' }
        ]
      }
    ]
  },
  {
    id: 'cauldrons',
    title: '⚙️ 大坩埚',
    sections: [
      {
        title: '全6个大坩埚位置与攻略',
        content: [
          { type: 'collectible', name: '1. 维修湾 TAU', description: '主线“垂危的土地”自动完成。解锁陆行兽坐骑。' },
          { type: 'collectible', name: '2. 大坩埚：缪', description: '地图东南部。利用通风口和镜子反射机制。BOSS：广口兽。' },
          { type: 'collectible', name: '3. 大坩埚：约塔', description: '地图正北部。包含“盐咬”长颈兽。BOSS：滚背兽。' },
          { type: 'collectible', name: '4. 大坩埚：基', description: '地图西南角沼泽。需藤蔓切割器。拉动机械臂攀爬。BOSS：滑皮兽。' },
          { type: 'collectible', name: '5. 大坩埚：卡帕', description: '地图西北角海岸。难度最高，涉及水位升降谜题。BOSS：海龙。' },
          { type: 'collectible', name: '6. 大坩埚：双子座', description: '地图中心。主线“双子座”剧情锁定。推荐等级较高。' }
        ]
      },
      {
        title: '大坩埚：缪 详细流程',
        content: [
          { type: 'header', content: '探索圣石洞 (Explore the Sacred Cave)' },
          { type: 'text', content: '是时候探索圣石洞了。门被堵住了，所以我们需要找到另一条路。幸运的是，有一个岩架我们可以爬上去。绕回来跳过缺口，就可以继续下坡并通过被堵住的门。最终你会遇到一扇闪着红光的大坩埚门，我们需要超控它。' },
          
          { type: 'header', content: '超控大门 (Override the Door)' },
          { type: 'text', content: '靠近大门并按 <kbd>R2</kbd> 进行超控。' },

          { type: 'header', content: '前往维修湾核心 – 击杀机器 (Go to the Repair Bay Core – Kill the Machines)' },
          { type: 'text', content: '进入新开启的区域，你很快就会面对一些跃鞭兽 (Leaplasher)。你知道该怎么做。对于跃鞭兽，你可以瞄准它们背部的绿色罐子。那是它们的弱点之一。' },

          { type: 'header', content: '前往维修湾核心 (Go to the Repair Bay Core)' },
          { type: 'text', content: '靠近第二扇闪着红光的门并超控它。' },

          { type: 'header', content: '前往维修湾核心 – 寻找向上之路 (Go to the Repair Bay Core – Find a Way Up)' },
          { type: 'text', content: '现在我们需要清除区域内被污染的赫菲斯托斯 线缆。首先站在地板面板上（如下方截图所示）。' },
          { type: 'text', content: '这将激活一个带有锁扣的旋转平台，你可以通过射击将锁扣固定到位。当锁扣发出金光时射击它。对第二个和第三个旋转平台重复相同的操作。' },
          { type: 'text', content: '一旦它们被锁定到位，你可以利用地板面板旁边的小黄色木板爬上去。当你爬上柱子时，别忘了转动视角寻找钩点和攀爬点以继续前进。这些指示了你应该攀爬的路径。' },
          { type: 'text', content: '现在我们需要锁定第二组旋转平台。然而，我们首先需要找东西来激活地板面板。我们自己站在地板面板上无法看到锁扣来射击它们。在第二个地板面板旁边有一个小的攀爬点，可以让你到达一扇半破碎的门。' }
        ]
      }
    ]
  },
  {
    id: 'relic-ruins',
    title: '🏛️ 遗杰遗迹',
    sections: [
      {
        title: '全9个遗迹遗址攻略',
        content: [
          { type: 'collectible', name: '1. 丹特', description: '新手村南侧。推箱子教学。密码：1705。' },
          { type: 'collectible', name: '2. 无人地带 (No Man\'s Land)', description: '贫瘠之光西南。需点火器。推电池进水前需先把水排干。密码：2204。' },
          { type: 'collectible', name: '3. 焦躁原野', description: '素歌之域西北。利用铁轨车作为攀爬点。密码：1923。' },
          { type: 'collectible', name: '4. 干渴之地', description: '中部山区。需藤蔓切割器。操作防爆门破坏墙壁。' },
          { type: 'collectible', name: '5. 静沙地', description: '南部沙漠。需点火器。堵住出水口提升水位。' },
          { type: 'collectible', name: '6. 荒野行者 (Runner\'s Wild)', description: '地图北部。叠箱子或卡门。' },
          { type: 'collectible', name: '7. 长海岸', description: '西部丛林北侧。利用电梯运送箱子。' },
          { type: 'collectible', name: '8. 尖塔岛', description: '旧金山摩天楼。限时电池运送。密码：2109109。' },
          { type: 'collectible', name: '9. 夜之灯', description: '隐秘余烬地下。支线任务形式。转盘锁密码：739135。' }
        ]
      }
    ]
  },
  {
    id: 'black-boxes',
    title: '📼 黑盒子',
    sections: [
      {
        title: '全12个黑盒子位置',
        content: [
          { type: 'text', text: '收集所有黑盒子并交给纪念林的恩塔拉，可获得传奇爆破弹弓“特纳克之翼”。' },
          { type: 'collectible', name: '1. 无人地带', description: '石峰南部坠机残骸，需撬开门。' },
          { type: 'collectible', name: '2. 白卫峰', description: '素歌之域西南山区，需用拉钩点拉开废墟。' },
          { type: 'collectible', name: '3. 锯齿深渊', description: '南部水域，需潜水面具。' },
          { type: 'collectible', name: '4. 海角', description: '素歌之域东部，需藤蔓切割器和电池开门。' },
          { type: 'collectible', name: '5. 流血印记', description: '雪山北部，通过抓钩点攀爬。' },
          { type: 'collectible', name: '6. 静沙地', description: '遗迹西北方，需藤蔓切割器和拉箱子。' },
          { type: 'collectible', name: '7. 纪念林', description: '东侧小树林，使用抓钩打开入口。' },
          { type: 'collectible', name: '8. 盐咬', description: '村落猎人商人后，拉开通风口。' },
          { type: 'collectible', name: '9. 雨迹', description: '中西部丛林，需藤蔓切割器和运送电池。' },
          { type: 'collectible', name: '10. 白骨之泪', description: '西北部峭壁，电池在电梯门后。' },
          { type: 'collectible', name: '11. 守卫之岗', description: '长海岸北部森林，跑酷滑索到达。' },
          { type: 'collectible', name: '12. 尖塔岛', description: '旧金山北部直升机残骸旁。' }
        ]
      }
    ]
  },
  {
    id: 'survey-drones',
    title: '📡 勘测无人机',
    sections: [
      {
        title: '全10个无人机获取',
        content: [
          { type: 'text', text: '在基地盖亚房间连接无人机数据，可更换穹顶风景。获取方法：爬到高处，跳向悬停的无人机并压低它。' },
          { type: 'collectible', name: '1. 无人地带', description: '石峰西南方，爬上高岩石平台。' },
          { type: 'collectible', name: '2. 素歌之域', description: '东北方旧堡垒遗迹，爬上城墙。' },
          { type: 'collectible', name: '3. 干渴之地', description: '北部山谷，爬上中间小高台。' },
          { type: 'collectible', name: '4. 绿井', description: '地图北部，爬上木制柱子。' },
          { type: 'collectible', name: '5. 静沙地', description: '拉斯维加斯塔楼遗迹顶端。' },
          { type: 'collectible', name: '6. 棘沼城', description: '最西边沼泽，抓钩爬上枯树。' },
          { type: 'collectible', name: '7. 灰顶峰', description: '雪山南部悬崖边岩石。' },
          { type: 'collectible', name: '8. 守卫之岗', description: '森林树冠层，利用倒下的树干。' },
          { type: 'collectible', name: '9. 希尔赛德山', description: '极北部雪山悬崖木制突起。' },
          { type: 'collectible', name: '10. 尖塔岛', description: '旧金山摩天楼顶端横梁。' }
        ]
      }
    ]
  },
  {
    id: 'vista-points',
    title: '👁️ 观景点',
    sections: [
      {
        title: '全9个观景点解谜',
        content: [
          { type: 'text', text: '扫描塔获取图像，找到正确角度重叠旧世界景观。完成所有给大量经验。' },
          { type: 'collectible', name: '1. 丹特', description: '断桥边缘望向旧旅馆。' },
          { type: 'collectible', name: '2. 素歌之域', description: '风力发电机对面高台。' },
          { type: 'collectible', name: '3. 炙矛地', description: '东部山上木制瞭望塔。' },
          { type: 'collectible', name: '4. 静沙地', description: '北部小山望向拉斯维加斯。' },
          { type: 'collectible', name: '5. 沙丘谷', description: '地下圆顶断桥末端望向艾菲尔铁塔。' },
          { type: 'collectible', name: '6. 纪念林', description: '雷达站附近小开口对准空军基地入口。' },
          { type: 'collectible', name: '7. 长海岸', description: '西部海滩小岛礁望向温室遗迹。' },
          { type: 'collectible', name: '8. 雾锁高地', description: '西北角海底废墟。' },
          { type: 'collectible', name: '9. 尖塔岛', description: '金属塔上望向金门大桥。' }
        ]
      }
    ]
  },
  {
    id: 'dlc',
    title: '🔥 炙炎海岸 DLC',
    sections: [
      {
        title: 'DLC 主线任务',
        content: [
          { type: 'text', name: '1. 前往炙炎海岸', description: '需完成主线“奇点”后触发。塞伦斯会呼叫你。' },
          { type: 'text', name: '2. 天地之间', description: '探索升天大厅，解开谜题。' },
          { type: 'text', name: '3. 明星以此为家', description: '潜入名为“飞升”的基地。' },
          { type: 'text', name: '4. 为了他的娱乐', description: '由于火山喷发，需要在熔岩流中战斗。' },
          { type: 'text', name: '5. 他的最后行动', description: '最终决战。面对全系列体型最大的机器 BOSS - 荷鲁斯。' }
        ]
      },
      {
        title: 'DLC 新增收集与挑战',
        content: [
          { type: 'collectible', name: '盘古古器', description: '共5个。收集后开启盘古公园的谜题，获得传奇涂装。' },
          { type: 'collectible', name: '空中捕捉', description: '共6个。类似黑盒子，但需要飞行坐骑在空中寻找信号轨迹。' },
          { type: 'collectible', name: '德尔弗的饰品', description: '共7个。隐藏在地图各处，集齐后获得传奇宝藏。' },
          { type: 'collectible', name: '新机器扫描', description: '别忘了扫描：水翼者、胆肠兽、刺卵 和 荷鲁斯。' }
        ]
      }
    ]
  },
  {
    id: 'trophies',
    title: '🏆 其他重要奖杯',
    sections: [
      {
        title: '战斗与挑战',
        content: [
          { type: 'text', name: '狩猎场', description: '在全部4个狩猎场中，每个试炼至少获得最低评价（四分之一条纹）。' },
          { type: 'text', name: '叛军营地', description: '完成所有6个叛军营地，触发并完成隐藏任务“第一铁匠铺”。' },
          { type: 'text', name: '扫描所有机器', description: '共43种机器。如果不确定缺哪个，查看“笔记本 -> 机器图鉴”。务必手动扫描最终BOSS。' },
          { type: 'text', name: '滑翔60秒', description: '获得飞行坐骑后，飞到最高处跳下持续滑翔即可。' }
        ]
      }
    ]
  }
];

export const horizonForbiddenWestTocItems = [
  { id: 'section-intro', title: '前言与导读', level: 1 },
  { id: 'section-main-quests', title: '一、主线任务流程', level: 1 },
  { id: 'section-main-quests-daunt', title: '1.1 序章与丹特', level: 2 },
  { id: 'mq-1', title: '1. 摘星之志', level: 3 },
  { id: 'mq-2', title: '2. 长矛的尖端', level: 3 },
  { id: 'mq-3', title: '3. 在极限边缘', level: 3 },
  { id: 'mq-4', title: '4. 大使会议', level: 3 },
  { id: 'section-main-quests-fw', title: '1.2 西部禁地', level: 2 },
  { id: 'mq-5', title: '5. 死亡之门', level: 3 },
  { id: 'mq-6', title: '6. 垂危的土地', level: 3 },
  { id: 'mq-7', title: '7. 地球之眼', level: 3 },
  { id: 'mq-8', title: '8. 破碎的天空', level: 3 },
  { id: 'mq-9', title: '9. 库尔鲁特', level: 3 },
  { id: 'section-main-quests-sub', title: '1.3 寻找子系统', level: 2 },
  { id: 'mq-10', title: '10. 回声的摇篮', level: 3 },
  { id: 'mq-11', title: '11. 沙海', level: 3 },
  { id: 'mq-12', title: '12. 过去的种子', level: 3 },
  { id: 'mq-13', title: '13. 法罗的坟墓', level: 3 },
  { id: 'section-main-quests-end', title: '1.4 终局', level: 2 },
  { id: 'mq-14', title: '14. 双子座', level: 3 },
  { id: 'mq-15', title: '15. 所剩一切', level: 3 },
  { id: 'mq-16', title: '16. 十特之翼', level: 3 },
  { id: 'mq-17', title: '17. 奇点', level: 3 },
  { id: 'section-side-quests', title: '二、全支线任务列表', level: 1 },
  { id: 'section-side-quests-early', title: '2.1 早期支线 (Lv 5-15)', level: 2 },
  { id: 'sq-deep-trouble', title: '1. 深渊之厄', level: 3 },
  { id: 'sq-shadow-from-the-past', title: '2. 往日阴影', level: 3 },
  { id: 'sq-shadow-in-the-west', title: '3. 西部阴影', level: 3 },
  { id: 'sq-twilight-path', title: '4. 暮光之路', level: 3 },
  { id: 'sq-bristlebacks', title: '5. 刚背兽', level: 3 },
  { id: 'section-side-quests-mid', title: '2.2 中期支线 (Lv 16-25)', level: 2 },
  { id: 'section-side-quests-late', title: '2.3 后期支线 (Lv 26+)', level: 2 },
  { id: 'section-side-quests-arena', title: '2.4 竞技场与挑战', level: 2 },
  { id: 'section-errands', title: '2.5 差事任务', level: 2 },
  { id: 'errand-learning-machine-strike', title: '1. 学习机器斗棋', level: 3 },
  { id: 'errand-a-bigger-boom', title: '2. 更大的爆炸', level: 3 },
  { id: 'errand-a-dash-of-courage', title: '3. 勇气之味', level: 3 },
  { id: 'errand-the-enduring', title: '4. 持久者', level: 3 },
  { id: 'errand-signals-of-the-sun', title: '5. 太阳的信号', level: 3 },
  { id: 'section-collectibles', title: '三、全收集品位置', level: 1 },
  { id: 'section-collectibles-tallnecks', title: '3.1 长颈兽', level: 2 },
  { id: 'section-collectibles-cauldrons', title: '3.2 大坩埚', level: 2 },
  { id: 'section-collectibles-relics', title: '3.3 遗杰遗迹', level: 2 },
  { id: 'section-collectibles-black-boxes', title: '3.4 黑盒子', level: 2 },
  { id: 'section-collectibles-survey-drones', title: '3.5 勘测无人机', level: 2 },
  { id: 'section-collectibles-vista-points', title: '3.6 观景点', level: 2 },
  { id: 'section-dlc', title: '四、炙炎海岸 DLC', level: 1 },
  { id: 'section-trophies', title: '五、白金奖杯指南', level: 1 },
];
