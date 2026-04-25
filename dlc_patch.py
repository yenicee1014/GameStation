import re

with open('src/WalkthroughBloodborne.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_content = """
               <h3 id="section-underground-corpse-pile" className="text-2xl mt-8 mb-6 font-bold text-gray-800 flex items-center gap-2">
                 地下尸堆 (Underground Corpse Pile)
               </h3>
               
               <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                 <h4 className="font-bold text-red-900 text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 丑陋的野兽路德维希 / 圣剑路德维希 (Ludwig the Accursed / Ludwig, the Holy Blade)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     路德维希实际上是两个截然不同的Boss合二为一：第一阶段是丑陋的野兽路德维希，第二阶段是圣剑路德维希。
                   </p>
                   <div>
                     <strong className="text-red-900">第 1 阶段 (Phase 1)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       这个阶段比第二阶段更加疯狂，他会积极冲向你，几乎不给你喘息的空间。这场战斗的关键是积极攻击他的侧面（而不是背面，因为他会向后踢），并在打完后迅速撤离。你可以躲在路德维希身下攻击他的后腿，大多数攻击都会打空，但不要在这个位置停留太久。他几乎总是以高空跳跃攻击开局拉近距离，你可以向后滑步躲避。由于路德维希的两侧只需很小的伤害就会受伤并导致该部位受到额外伤害，你需要尽快将他的一侧或两侧打伤。用大炮和骨髓灰很容易将路德维希打出硬直，从而进行内脏暴击。
                       <br/><br/>
                       这个阶段他武器库中最危险的攻击是“冲锋擒抱”（Charging Tackle），他会直接向你冲撞造成巨大伤害；以及“高空伏击”（Drop Ambush），他会跳到天花板上悬挂片刻然后再猛砸下来。“冲锋擒抱”可以通过远离他的正面或连续侧步两次来躲避（该攻击几乎没有前摇），而“高空伏击”可以在他跳到空中后向任意方向直线奔跑来躲避。
                     </p>
                   </div>
                   
                   <div>
                     <strong className="text-red-900">第 2 阶段 (Phase 2)</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       在这个阶段，路德维希会放弃所有第一阶段的攻击，拔出大剑并用后腿站立。虽然他的移动和攻击变得更加有限和缓慢，但他获得了更大的攻击范围，且攻击附带额外的奥术伤害。作为一般经验法则，你需要保持在中近距离，并始终向前滑步以躲避他的攻击，因为他的所有攻击都附带了额外的奥术能量波，即使剑身没有击中你，能量波也会打中你。此外，路德维希的侧面不再会受伤，并且由于你只能攻击他的腿，他变得更难被打出硬直。
                       <br/><br/>
                       除了标准挥砍外，你还需要应对四种主要攻击。最危险的是“月光圆环”（Moonlight Ring），他将剑指向地面蓄力然后插入地下，在周围制造一圈奥术爆炸；以及“月光猛攻”（Moonlight Onslaught），他将剑举向空中制造一个巨大的锥形奥术波，如果被卷入其中很可能会被秒杀。注意躲避这些大招并紧贴他的侧面，你应该就能过关。
                     </p>
                   </div>

                   <div className="mt-6 pt-4 border-t border-red-200">
                     <strong className="text-red-900 block mb-3">路德维希的攻击方式：</strong>
                     <div className="bg-white/60 rounded-lg p-3 overflow-x-auto">
                       <table className="w-full text-sm text-left">
                         <thead>
                           <tr className="border-b border-red-200">
                             <th className="py-2 px-3 w-1/4">攻击名称</th>
                             <th className="py-2 px-3 w-1/6">范围</th>
                             <th className="py-2 px-3">描述</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="bg-red-50/50">
                             <td colSpan="3" className="py-2 px-3 font-bold text-red-900 border-b border-red-100">第 1 阶段</td>
                           </tr>
                           <tr className="border-b border-red-100">
                             <td className="py-2 px-3 font-medium">高空跳跃 (High Jump)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">向前飞跃的突刺攻击，靠近时可向前滑步或向后滑步躲避</td>
                           </tr>
                           <tr className="border-b border-red-100">
                             <td className="py-2 px-3 font-medium">高空伏击 (Drop Ambush)</td>
                             <td className="py-2 px-3">-</td>
                             <td className="py-2 px-3">跳到空中然后猛砸下来造成巨大伤害，看到血液滴落时向任意方向跑</td>
                           </tr>
                           <tr className="border-b border-red-100">
                             <td className="py-2 px-3 font-medium">冲锋擒抱 (Charging Tackle)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">喷出黄色气体，然后直线冲锋造成巨大伤害</td>
                           </tr>
                           <tr className="border-b border-red-100">
                             <td className="py-2 px-3 font-medium">旋转挥击 (Spin Swipe)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">用右爪从左向右进行旋转刮擦，无法翻滚躲避，必须向后滑步</td>
                           </tr>
                           <tr className="bg-red-50/50">
                             <td colSpan="3" className="py-2 px-3 font-bold text-red-900 border-b border-red-100">第 2 阶段</td>
                           </tr>
                           <tr className="border-b border-red-100">
                             <td className="py-2 px-3 font-medium">双重月光波 (Double Moonlight Wave)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">两道交叉的对角线奥术魔法挥砍</td>
                           </tr>
                           <tr className="border-b border-red-100">
                             <td className="py-2 px-3 font-medium">月光圆环 (Moonlight Ring)</td>
                             <td className="py-2 px-3">短</td>
                             <td className="py-2 px-3">将剑指向地面蓄力，然后向下插入，释放出一圈奥术魔法</td>
                           </tr>
                           <tr className="border-b border-red-100">
                             <td className="py-2 px-3 font-medium">月光猛攻 (Moonlight Onslaught)</td>
                             <td className="py-2 px-3">长</td>
                             <td className="py-2 px-3">将剑向上举起，释放出巨大的锥形奥术魔法波</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                   
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-red-900">
                     🎁 掉落：34,500 血之回响 和 引导 (1) 符文 (Guidance (1) Rune)
                   </div>
                 </div>
               </div>

               <h3 id="section-research-hall" className="text-2xl mt-8 mb-6 font-bold text-gray-800 flex items-center gap-2">
                 研究大厅 (Research Hall)
               </h3>
               <p className="text-gray-700 mb-6">
                 击败路德维希后，点亮提灯并与地上的劳伦斯头骨互动，或者与西蒙对话。继续前进，穿过地下牢房，这里有许多被锁住的门（需要地下牢房钥匙）。继续往上走，你会进入研究大厅，这里是一个巨大的螺旋楼梯迷宫，布满了大脑变异的病人（大头娃娃）。
               </p>
               <p className="text-gray-700 mb-6">
                 研究大厅的目标是到达顶层，操作一个巨大的机关，这会使整个房间的楼梯旋转，从而解锁之前无法到达的区域。在这里你需要收集<strong>脑浆 (Brain Fluid)</strong>来完成NPC爱德琳（Adeline）的任务。当你将楼梯旋转后，你可以进入 Boss 区域。
               </p>

               <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                 <h4 className="font-bold text-red-900 text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 失败者 (Living Failures)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     失败者是一场群体Boss战，类似于原版的“神圣使者”。场地中会不断生成高大的蓝色外星生物。
                   </p>
                   <div>
                     <strong className="text-red-900">战斗策略</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       这些怪物移动缓慢，但它们的近战攻击伤害惊人，并且会发射奥术魔法球。利用场地的中央向日葵（星辰钟塔）作为掩体，躲避它们的奥术飞弹。将它们分散开来，逐个击破。它们共享一个总生命值条。
                       <br/><br/>
                       <strong>陨石召唤：</strong>当Boss们的血量下降到一半时，它们会集体举起双手，将天空变暗，并从右上方召唤巨大的陨石雨。此时立即躲到星辰钟塔门后的左侧死角，陨石无法砸到那里，你可以安全地度过这个致命阶段。
                     </p>
                   </div>
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-red-900">
                     🎁 掉落：星辰钟塔钥匙 (Astral Clocktower Key)
                   </div>
                 </div>
               </div>

               <h3 id="section-astral-clocktower" className="text-2xl mt-8 mb-6 font-bold text-gray-800 flex items-center gap-2">
                 星辰钟塔 (Astral Clocktower)
               </h3>
               
               <p className="text-gray-700 mb-6">
                 击败失败者后点亮提灯，用刚刚获得的钥匙打开巨大的双开门。里面坐着一位沉睡的女士，这就是DLC最经典的Boss之一。
               </p>

               <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                 <h4 className="font-bold text-red-900 text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 星辰钟塔的玛丽亚女士 (Lady Maria of the Astral Clocktower)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     玛丽亚是杰尔曼的首席学徒，她的战斗是一场极其优雅且致命的猎人对决。她的武器“落叶”（Rakuyo）可以在双刀和双刃剑之间切换。
                   </p>
                   <div>
                     <strong className="text-red-900">第 1 阶段：物理攻击</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       玛丽亚的攻击速度极快，但非常容易被枪反。她会频繁使用冲刺斩和双刀连击。保持中距离，在她抬手准备挥砍时开枪打断，然后进行内脏暴击。如果枪反不熟练，向左前（她的右侧）滑步躲避是比较安全的策略。
                     </p>
                   </div>
                   <div>
                     <strong className="text-red-900">第 2 阶段：鲜血附魔</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当血量降至约60%时，玛丽亚会将双刀刺入胸膛，为武器附魔鲜血。她的所有攻击现在都有了更长的攻击距离和延迟的血液伤害判定。你不能再仅仅躲避刀刃，还要躲避挥砍产生的血刃。
                     </p>
                   </div>
                   <div>
                     <strong className="text-red-900">第 3 阶段：火焰鲜血</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       血量降至30%左右时，玛丽亚会悬浮在空中吸收血液，落地后她的攻击不仅有鲜血效果，还会附带火焰爆炸。这一阶段她的攻击范围极为恐怖，一旦被连击很容易被秒杀。尽量贴身缠斗，避免她释放超远距离的蓄力血火光炮。
                     </p>
                   </div>
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-red-900">
                     🎁 掉落：天体表盘 (Celestial Dial)
                   </div>
                 </div>
               </div>

               <h3 id="section-fishing-hamlet" className="text-2xl mt-8 mb-6 font-bold text-gray-800 flex items-center gap-2">
                 小渔村 (Fishing Hamlet)
               </h3>
               
               <p className="text-gray-700 mb-6">
                 拿起天体表盘，走向巨大的钟面，它会打开通往小渔村的道路。这里是DLC的最后一个区域，充满了恐怖的鱼人怪物和巨大的鲨鱼巨人。
               </p>
               <p className="text-gray-700 mb-6">
                 在村庄的中央水井里，有两只可怕的鲨鱼巨人（其中一只是无武装的，另一只拿着巨型船锚）。击败它们可以获得玛丽亚的武器<strong>落叶（Rakuyo）</strong>。建议使用萨满骨刃（Shaman Bone Blade）让它们自相残杀，否则这将是全游戏最难的非Boss战之一。
               </p>
               <p className="text-gray-700 mb-6">
                 穿过村庄，穿过充满蜗牛女的洞穴，最终你会到达海滩。海滩上躺着死去的古神“科斯”（Kos），从它的尸体中诞生了最终Boss。
               </p>

               <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                 <h4 className="font-bold text-red-900 text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 科斯的高儿 (Orphan of Kos)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     科斯的高儿被公认为《血源诅咒》中最难的 Boss，甚至可能是整个魂系游戏中最具挑战性的存在。他刚出生就拥有惊人的攻击性，使用胎盘作为武器。
                   </p>
                   <div>
                     <strong className="text-red-900">第 1 阶段</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       他的攻击范围大且极其不规则。他最致命的一招是高高跳起后的猛砸，但在他跳跃落地时，只要你一直向他原本站立的位置冲刺，就可以走到他背后，蓄力攻击打出硬直并内脏暴击。另一个好机会是他拉长胎盘在头顶旋转两次的招式，此时你可以冲进去枪反。
                     </p>
                   </div>
                   <div>
                     <strong className="text-red-900">第 2 阶段</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当生命值降至一半时，他会长出肉翼并变得极其狂暴，不断在空中飞跃。此时极难进行枪反。建议在水面上战斗（水面非常平坦，没有障碍物）。当他停下来发出尖叫时，海滩上的科斯尸体将释放闪电波并向外扩散。此时如果你在水面上，只需站在闪电波的空隙中即可轻松躲避。保持耐心，在他疯狂连击后的短暂僵直中反击。
                     </p>
                   </div>
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-red-900">
                     🎁 掉落：科斯寄生虫 (Kos Parasite) 武器
                   </div>
                 </div>
               </div>

               <h3 id="section-laurence" className="text-2xl mt-8 mb-6 font-bold text-gray-800 flex items-center gap-2">
                 大教堂 (重返) - 隐藏Boss
               </h3>
               
               <p className="text-gray-700 mb-6">
                 在研究大厅乘电梯下去（插入劳伦斯的头骨所在的祭坛前），你可以获得<strong>劳伦斯的头骨（Laurence's Skull）</strong>。带着头骨回到猎人梦魇的大教堂（你第一次遇到梦魇刽子手的地方），大厅里燃烧的圣职者野兽将会苏醒。
               </p>

               <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                 <h4 className="font-bold text-red-900 text-xl mb-4 flex items-center gap-2">
                   💀 Boss: 第一任主教劳伦斯 (Laurence, the First Vicar)
                 </h4>
                 
                 <div className="space-y-4 text-red-800">
                   <p className="mt-1 text-sm leading-relaxed">
                     劳伦斯是DLC的隐藏Boss。他看起来像燃烧的圣职者野兽，但攻击方式不同，且伤害极高。
                   </p>
                   <div>
                     <strong className="text-red-900">第 1 阶段</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       他的攻击范围很大，挥击会在地上留下爆炸的火焰。不要连续向后退，因为他会连续向前拍击并用火焰封死你的退路。尽量锁定并向他的较小的一只手臂（左臂）滑步。
                     </p>
                   </div>
                   <div>
                     <strong className="text-red-900">第 2 阶段</strong>
                     <p className="mt-1 text-sm leading-relaxed">
                       当血量降至40%左右时，劳伦斯的下半身会断裂。他将用双臂在地上爬行，并不断从身后喷出熔岩。在这个阶段千万不要待在他的正面或背面！你必须贴在他的左侧或右侧攻击。如果他开始顺时针爬行喷火，跟着他转圈并保持在侧面攻击即可。
                     </p>
                   </div>
                   <div className="mt-4 pt-3 border-t border-red-200 font-bold text-red-900">
                     🎁 掉落：野兽的拥抱 (Beast's Embrace) 符文
                   </div>
                 </div>
               </div>
"""

insert_target = '</p>\n\n             </div>\n          </article>'
if insert_target in content:
    new_file_content = content.replace(insert_target, new_content + '\n             </div>\n          </article>')
    with open('src/WalkthroughBloodborne.jsx', 'w', encoding='utf-8') as f:
        f.write(new_file_content)
    print("Successfully patched WalkthroughBloodborne.jsx")
else:
    print("Could not find the target string to replace.")
