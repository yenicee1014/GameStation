const fs = require('fs');

const filePath = 'src/WalkthroughFF7R.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm my-6 border-l-4 border-l-sspai-red">
                    <h4 className="text-[15px] font-bold text-gray-900 mb-2">未雨绸缪 (Planning Ahead)</h4>
                    <p className="text-[15px] text-gray-700 m-0">
                      你现在有 2 颗火之魔晶石。<strong>尝试将它们都装备在活跃成员身上</strong>，直到它们累积 300 AP 并升至 2 级。当我们到达第 8 章时，你会希望有 2 个角色能够施放中级火魔法 (Fira)。
                    </p>
                  </div>

                 <h2 className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                    <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>`;

const newStr = `                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm my-6 border-l-4 border-l-sspai-red">
                    <h4 className="text-[15px] font-bold text-gray-900 mb-2">未雨绸缪 (Planning Ahead)</h4>
                    <p className="text-[15px] text-gray-700 m-0">
                      你现在有 2 颗火之魔晶石。<strong>尝试将它们都装备在活跃成员身上</strong>，直到它们累积 300 AP 并升至 2 级。当我们到达第 8 章时，你会希望有 2 个角色能够施放中级火魔法 (Fira)。
                    </p>
                  </div>

                  <h3 id="section-4-17" className="text-xl mt-8 mb-4 font-bold text-gray-800">4.17 支线任务：来自墓地的飞行物 (Just Flew in From the Graveyard)</h3>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 my-6">
                    <h4 className="font-bold text-gray-900 mb-3">📍 任务：来自墓地的飞行物</h4>
                    <p className="text-[15px] text-gray-700 leading-relaxed m-0 mb-4">
                      我们的第 6 个也是最后一个任务又回到了工厂。前往地图上标记的区域，在到达长椅之前砸碎左边的箱子。在那里你会找到<strong>守卫钥匙 (Watch Security Key)</strong>。
                    </p>
                    <p className="text-[15px] text-gray-700 leading-relaxed m-0">
                      使用钥匙进入你尚未访问的唯一区域。打倒<strong>蔚蓝小龙 (Cerulean Drake)</strong>，并在收到提示时回去报告。
                    </p>
                  </div>

                  <h3 id="section-4-18" className="text-xl mt-8 mb-4 font-bold text-gray-800">4.18 EX事件：二人独处 (Alone At Last)</h3>
                  <div className="bg-[#fffbfb] border border-[#ffebeb] rounded-lg p-5 relative overflow-hidden my-6">
                    <div className="absolute top-0 left-0 w-1 h-full bg-sspai-red"></div>
                    <h4 className="text-lg font-bold mb-2 text-sspai-red flex items-center gap-2">
                      <span>🔑</span> 解锁关键事件
                    </h4>
                    <p className="text-gray-700 leading-relaxed m-0 text-[15px]">
                      完成所有 6 个任务将解锁“二人独处 (Alone at Last)”的发现事件 (Discovery event)，而这个事件是解锁我们获得<strong>“最佳服装 (Dressed to the Nines)”奖杯</strong>所需的两件衣服的关键。如果此事件没有出现，请打开地图并按 R2，看看你没有完成这 6 个任务中的哪一个。
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 my-6">
                    <h4 className="font-bold text-gray-900 mb-3">📍 目标：二人独处</h4>
                    <ul className="space-y-3 text-[15px] text-gray-700 m-0 pl-4 list-disc mb-4">
                      <li>直接回到公寓。让克劳德更换他房间里的过滤器，然后去蒂法的房间。</li>
                      <li>经过一番交谈，蒂法会问“你觉得什么衣服适合我？”你要选择的回答是：<strong>“异国风情的衣服？(Something exotic?)”</strong></li>
                      <li>不要问为什么。直接选就对了。我以后会解释的。现在，我不想剧透任何东西。</li>
                      <li>蒂法建议回到镇上。选择“不”，然后继续进入酒吧。</li>
                    </ul>
                  </div>

                  <h3 id="section-4-19" className="text-xl mt-8 mb-4 font-bold text-gray-800">4.19 飞镖小游戏与“飞镖专家”奖杯</h3>
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm my-6">
                    <h4 className="text-lg font-bold text-purple-600 mb-3">🎯 赢得“飞镖专家 (Heavenly Dart Player)”奖杯</h4>
                    <p className="text-[15px] text-gray-700 leading-relaxed m-0 mb-4">
                      当克劳德独自一人时，你有机会赢得“飞镖专家”奖杯。相信我，现在花时间做这件事是值得的：
                    </p>
                    <ul className="space-y-3 text-[15px] text-gray-700 m-0 pl-4 list-disc mb-4">
                      <li>这是一种相对容易地为你的收藏添加另一个奖杯的方法。</li>
                      <li>如果你现在赢得这个奖杯，魏格 (Wedge) 会在下一章给你一个罕见的<strong>提升运气魔晶石 (Luck Up Materia)</strong>（提高暴击率）。游戏中只有 2 颗这样的魔晶石，它是通关后最常用的魔晶石之一。</li>
                      <li>如果你现在不赢，虽然可以在之后通过章节选择重玩，但为了拿到这颗魔晶石，你需要打通所有 18 章，然后再重新打一遍第 3 和第 4 章。因此，现在通关这个小游戏可以节省时间。</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sspai-red"></span>
                      飞镖小游戏规则与策略
                    </h4>
                    <ol className="space-y-3 text-[14px] text-gray-700 m-0 pl-4 list-decimal">
                      <li>这个游戏不在于高分。你以 301 分开始，投掷得到的分数将从该总数中减去。你试图<strong>用尽可能少的飞镖精确地达到 0 分</strong>。为了赢得奖杯，你需要用 <strong>6 或 7 次</strong>投掷达到 0 分。</li>
                      <li>你投掷每一镖的时间有限。如果计时器（瞄准时的最内圈）耗尽，飞镖将自动投出。</li>
                      <li>为了达到最大准确度，你必须在<strong>外圈最小时释放飞镖（按 X 键）</strong>。把这个圈想象成飞镖可能降落的区域。</li>
                      <li>实际上，因为上面提到的 2) 和 3)，你必须在圆圈<strong>第一次或第二次</strong>完全缩小时释放飞镖。在它第三次缩小之前计时器就会耗尽。</li>
                      <li>为了更好地控制，尝试用<strong>拇指和食指移动左摇杆</strong>来控制圆圈，而不是仅仅用拇指推它。这个技巧对我帮助很大。</li>
                      <li>虽然红心（靶心）是一个诱人的目标，但它只值 50 分。如果你改为<strong>瞄准三倍 20 分区（60 分）</strong>，你会给自己留出更多的容错空间。</li>
                      <li>你不需要做快速的心算。当你达到可以在下一次投掷中达到 0 分的地步时，你需要击中的区域将<strong>为你高亮显示为黄色</strong>。这很有用，不是吗？</li>
                    </ol>
                  </div>

                  <h3 id="section-4-20" className="text-xl mt-8 mb-4 font-bold text-gray-800">4.20 第三章结尾与召唤兽魔晶石</h3>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 my-6">
                    <h4 className="font-bold text-gray-900 mb-3">📍 目标：不祥的阴影 (Ominous Shadows)</h4>
                    <ul className="space-y-3 text-[15px] text-gray-700 m-0 pl-4 list-disc mb-4">
                      <li>走到外面，与一群流氓打一架。你的<strong>火属性法术 (Fire spells)</strong> 可以迅速解决他们。</li>
                      <li>回家。你会遇到一位意外的访客，他会给你<strong>伊弗利特魔晶石 (Ifrit Materia)</strong>（召唤兽）。将其装备在你的剑的最右侧插槽中，然后出发执行一项神秘任务。</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-500 text-green-800 text-[15px] font-medium my-6 flex items-center gap-2">
                    <span>🏆</span> 第三章就到此为止。正如我所建议的，这是一个较长、事件更多、且最终收获颇丰的章节，你可能不想在非必要的情况下重复游玩它。收集另一个完成章节的奖杯，并准备好迎接一些摩托车动作场面吧。
                  </div>

                 <h2 className="text-2xl mt-12 mb-6 group cursor-pointer text-black">
                    <span className="text-sspai-red opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Content Patch applied successfully.');
} else {
  console.error('Content Target string not found in the file.');
}
