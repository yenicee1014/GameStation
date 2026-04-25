# encoding: utf-8
import json

weapons = [
    {
        "id": "weapon-beasthunter-saif",
        "title": "怪兽猎人弯刀 (Beasthunter Saif)",
        "locations": [
            ("普通 (Normal)", "猎人梦魇血河尽头 (Found by the river of blood end in Hunter's Nightmare)"),
            ("怪异 (Uncanny)", "圣杯地牢信使商店 - 16,000 血之回响"),
            ("失落 (Lost)", "圣杯地牢信使商店 - 16,000 血之回响")
        ],
        "attrs": {"str": "9", "skl": "11", "blt": "-", "arc": "-"},
        "upgrades": [
            ["0", "90", "E", "D", "-", "D"],
            ["1", "99", "E", "D", "-", "D"],
            ["2", "108", "E", "D", "-", "D"],
            ["3", "117", "E", "D", "-", "D"],
            ["4", "126", "E", "C", "-", "D"],
            ["5", "135", "E", "C", "-", "D"],
            ["6", "144", "E", "C", "-", "D"],
            ["7", "153", "E", "C", "-", "D"],
            ["8", "162", "E", "C", "-", "D"],
            ["9", "171", "D", "B", "-", "C"],
            ["10", "180", "D", "B", "-", "C"]
        ],
        "gems": [
            ("普通 (Normal)", "放射 (Radial), 放射 (Radial), 衰弱 (Waning)"),
            ("怪异 (Uncanny)", "放射 (Radial), 放射 (Radial), 三角 (Triangular)"),
            ("失落 (Lost)", "放射 (Radial), 三角 (Triangular), 衰弱 (Waning)")
        ],
        "scalings": [
            {"title": "力量", "data": [["9 - 25", "1.56", "25"], ["26 - 50", "0.72", "18"], ["51 - 99", "0.18", "9"]]},
            {"title": "技巧", "data": [["11 - 25", "3.79", "53"], ["26 - 50", "1.76", "44"], ["51 - 99", "0.39", "19"]]}
        ],
        "special": {"slow": "0", "rapid": "0", "beast": "100%", "kin": "100%"}
    },
    {
        "id": "weapon-threaded-cane",
        "title": "螺纹手杖 (Threaded Cane)",
        "locations": [
            ("普通 (Normal)", "由信使作为初始武器给予 / 信使商店 - 1,200 血之回响"),
            ("怪异 (Uncanny)", "苏美鲁迷宫始源 (Central Pthumerian Labyrinth Root)"),
            ("失落 (Lost)", "险恶/伊兹墓碑始源 (Sinister/Isz Gravestone Root)")
        ],
        "attrs": {"str": "7", "skl": "9", "blt": "-", "arc": "-"},
        "upgrades": [
            ["0", "78", "E", "C", "-", "D"],
            ["1", "85", "E", "C", "-", "D"],
            ["2", "92", "E", "B", "-", "D"],
            ["3", "99", "E", "B", "-", "D"],
            ["4", "106", "E", "B", "-", "D"],
            ["5", "113", "E", "B", "-", "D"],
            ["6", "120", "E", "B", "-", "C"],
            ["7", "127", "E", "B", "-", "C"],
            ["8", "134", "E", "B", "-", "C"],
            ["9", "141", "E", "A", "-", "C"],
            ["10", "156", "E", "A", "-", "B"]
        ],
        "gems": [
            ("普通 (Normal)", "放射 (Radial), 放射 (Radial), 三角 (Triangular)"),
            ("怪异 (Uncanny)", "放射 (Radial), 放射 (Radial), 衰弱 (Waning)"),
            ("失落 (Lost)", "放射 (Radial), 三角 (Triangular), 衰弱 (Waning)")
        ],
        "scalings": [
            {"title": "力量", "data": [["8 - 25", "1.17", "21"], ["26 - 50", "0.64", "16"], ["51 - 99", "0.14", "7"]]},
            {"title": "技巧", "data": [["10 - 25", "4.00", "64"], ["26 - 50", "1.96", "49"], ["51 - 99", "0.43", "21"]]}
        ],
        "special": {"slow": "0", "rapid": "0", "beast": "100%", "kin": "100%"}
    },
    {
        "id": "weapon-beast-cutter",
        "title": "野兽切割刀 (Beast Cutter)",
        "locations": [
            ("普通 (Normal)", "猎人梦魇大教堂主楼梯上 (Found on the main Grand Cathedral stairs in Hunter's Nightmare)"),
            ("怪异 (Uncanny)", "圣杯地牢信使商店 - 20,000 血之回响"),
            ("失落 (Lost)", "圣杯地牢信使商店 - 20,000 血之回响")
        ],
        "attrs": {"str": "11", "skl": "9", "blt": "-", "arc": "-"},
        "upgrades": [
            ["0", "92", "D", "E", "-", "E"],
            ["1", "101", "D", "E", "-", "D"],
            ["2", "110", "D", "E", "-", "D"],
            ["3", "119", "D", "E", "-", "D"],
            ["4", "128", "D", "E", "-", "D"],
            ["5", "137", "D", "E", "-", "D"],
            ["6", "146", "D", "E", "-", "D"],
            ["7", "155", "C", "E", "-", "D"],
            ["8", "164", "C", "E", "-", "D"],
            ["9", "173", "C", "E", "-", "D"],
            ["10", "184", "C", "D", "-", "D"]
        ],
        "gems": [
            ("普通 (Normal)", "放射 (Radial), 放射 (Radial), 三角 (Triangular)"),
            ("怪异 (Uncanny)", "放射 (Radial), 放射 (Radial), 衰弱 (Waning)"),
            ("失落 (Lost)", "放射 (Radial), 三角 (Triangular), 衰弱 (Waning)")
        ],
        "scalings": [
            {"title": "力量", "data": [["11 - 25", "3.21", "45"], ["26 - 50", "1.56", "39"], ["51 - 99", "0.33", "16"]]},
            {"title": "技巧", "data": [["9 - 25", "1.71", "24"], ["26 - 50", "0.76", "19"], ["51 - 99", "0.18", "9"]]}
        ],
        "special": {"slow": "0", "rapid": "0", "beast": "100%", "kin": "100%"}
    },
    {
        "id": "weapon-burial-blade",
        "title": "送葬之刃 (Burial Blade)",
        "locations": [
            ("普通 (Normal)", "信使商店 - 60,000 血之回响"),
            ("怪异 (Uncanny)", "险恶/下层衰弱的罗伦城始源 (Sinister/Lower Ailing Loran Root)"),
            ("失落 (Lost)", "险恶/苏美鲁伊忽尔始源 (Sinister/Pthumeru Ihyll Root)")
        ],
        "attrs": {"str": "10", "skl": "12", "blt": "-", "arc": "-"},
        "upgrades": [
            ["0", "80", "30", "E", "C", "-", "D"],
            ["1", "88", "33", "E", "C", "-", "D"],
            ["2", "96", "36", "E", "C", "-", "D"],
            ["3", "104", "39", "E", "C", "-", "D"],
            ["4", "112", "42", "E", "C", "-", "D"],
            ["5", "120", "45", "E", "B", "-", "C"],
            ["6", "128", "48", "E", "B", "-", "C"],
            ["7", "136", "51", "E", "B", "-", "C"],
            ["8", "144", "54", "E", "B", "-", "C"],
            ["9", "152", "57", "E", "B", "-", "B"],
            ["10", "160", "60", "D", "B", "-", "B"]
        ],
        "gems": [
            ("普通 (Normal)", "放射 (Radial), 放射 (Radial), 三角 (Triangular)"),
            ("怪异 (Uncanny)", "放射 (Radial), 放射 (Radial), 衰弱 (Waning)"),
            ("失落 (Lost)", "放射 (Radial), 三角 (Triangular), 衰弱 (Waning)")
        ],
        "scalings": [
            {"title": "力量", "data": [["11 - 25", "1.53", "23"], ["26 - 50", "0.68", "17"], ["51 - 99", "0.14", "7"]]},
            {"title": "技巧", "data": [["13 - 25", "3.69", "48"], ["26 - 50", "1.68", "42"], ["51 - 99", "0.37", "18"]]},
            {"title": "奥术", "data": [["8 - 25", "1.11", "20"], ["26 - 50", "0.60", "15"], ["51 - 99", "0.12", "6"]]}
        ],
        "special": {"slow": "0", "rapid": "0", "beast": "100%", "kin": "100%"}
    },
    {
        "id": "weapon-blade-of-mercy",
        "title": "慈悲之刃 (Blade of Mercy)",
        "locations": [
            ("普通 (Normal)", "信使商店 - 1,200 血之回响"),
            ("怪异 (Uncanny)", "险恶/下层衰弱的罗伦城始源 (Sinister/Lower Ailing Loran Root)"),
            ("失落 (Lost)", "险恶/苏美鲁伊忽尔始源 (Sinister/Pthumeru Ihyll Root)")
        ],
        "attrs": {"str": "7", "skl": "11", "blt": "-", "arc": "-"},
        "upgrades": [
            ["0", "60", "30", "-", "C", "-", "D"],
            ["1", "66", "33", "-", "B", "-", "D"],
            ["2", "72", "36", "-", "B", "-", "D"],
            ["3", "78", "39", "-", "B", "-", "D"],
            ["4", "84", "42", "-", "B", "-", "D"],
            ["5", "90", "45", "-", "A", "-", "C"],
            ["6", "96", "48", "-", "A", "-", "C"],
            ["7", "102", "51", "-", "A", "-", "C"],
            ["8", "108", "54", "-", "A", "-", "C"],
            ["9", "114", "57", "-", "A", "-", "B"],
            ["10", "120", "60", "-", "S", "-", "B"]
        ],
        "gems": [
            ("普通 (Normal)", "放射 (Radial), 放射 (Radial), 三角 (Triangular)"),
            ("怪异 (Uncanny)", "放射 (Radial), 放射 (Radial), 衰弱 (Waning)"),
            ("失落 (Lost)", "放射 (Radial), 三角 (Triangular), 衰弱 (Waning)")
        ],
        "scalings": [
            {"title": "力量", "data": [["12 - 25", "4.00", "56"], ["26 - 50", "1.84", "46"], ["51 - 99", "0.41", "20"]]},
            {"title": "技巧", "data": [["8 - 25", "1.00", "18"], ["26 - 50", "0.60", "15"], ["51 - 99", "0.12", "6"]]}
        ],
        "special": {"slow": "0", "rapid": "0", "beast": "100%", "kin": "100%"}
    },
    {
        "id": "weapon-rifle-spear",
        "title": "步枪矛 (Rifle Spear)",
        "locations": [
            ("普通 (Normal)", "旧雅南广场隐藏建筑内 (Found in the hidden building of Old Yharnam plaza) / 信使商店 - 4,000 血之回响"),
            ("怪异 (Uncanny)", "险恶/下层苏美鲁迷宫始源 (Sinister/Lower Pthumerian Labyrinth Root)"),
            ("失落 (Lost)", "衰弱的罗伦城始源 (Ailing Loran Root)")
        ],
        "attrs": {"str": "10", "skl": "11", "blt": "9", "arc": "-"},
        "upgrades": [
            ["0", "85", "85", "E", "D", "D", "D"],
            ["1", "93", "93", "E", "D", "D", "D"],
            ["2", "101", "101", "E", "D", "D", "D"],
            ["3", "109", "109", "E", "C", "D", "D"],
            ["4", "117", "117", "E", "C", "D", "D"],
            ["5", "125", "125", "E", "C", "D", "D"],
            ["6", "133", "133", "E", "C", "D", "D"],
            ["7", "141", "141", "E", "C", "C", "D"],
            ["8", "149", "149", "E", "B", "C", "D"],
            ["9", "157", "157", "E", "B", "C", "D"],
            ["10", "170", "170", "D", "B", "B", "C"]
        ],
        "gems": [
            ("普通 (Normal)", "放射 (Radial), 放射 (Radial), 三角 (Triangular)"),
            ("怪异 (Uncanny)", "放射 (Radial), 放射 (Radial), 衰弱 (Waning)"),
            ("失落 (Lost)", "放射 (Radial), 三角 (Triangular), 衰弱 (Waning)")
        ],
        "scalings": [
            {"title": "力量", "data": [["11 - 25", "1.53", "23"], ["26 - 50", "0.68", "17"], ["51 - 99", "0.16", "8"]]},
            {"title": "技巧", "data": [["12 - 25", "3.57", "50"], ["26 - 50", "1.64", "41"], ["51 - 99", "0.37", "18"]]},
            {"title": "奥术", "data": [["10 - 25", "3.19", "51"], ["26 - 50", "1.52", "38"], ["51 - 99", "0.35", "17"]]}
        ],
        "special": {"slow": "0", "rapid": "0", "beast": "100%", "kin": "100%"}
    },
    {
        "id": "weapon-stake-driver",
        "title": "打桩机 (Stake Driver)",
        "locations": [
            ("普通 (Normal)", "信使商店 - 8,000 血之回响"),
            ("怪异 (Uncanny)", "险恶/下层内墓穴始源 (Sinister/Lower Hintertomb Root)"),
            ("失落 (Lost)", "险恶/下层衰弱的罗伦城始源 (Sinister/Lower Ailing Loran Root)")
        ],
        "attrs": {"str": "18", "skl": "9", "blt": "-", "arc": "-"},
        "upgrades": [
            ["0", "85", "D", "D", "-", "D"],
            ["1", "93", "D", "D", "-", "D"],
            ["2", "101", "D", "D", "-", "D"],
            ["3", "109", "D", "D", "-", "D"],
            ["4", "117", "D", "D", "-", "D"],
            ["5", "125", "D", "D", "-", "D"],
            ["6", "133", "D", "D", "-", "D"],
            ["7", "141", "D", "D", "-", "C"],
            ["8", "149", "C", "D", "-", "C"],
            ["9", "157", "C", "D", "-", "C"],
            ["10", "170", "C", "C", "-", "C"]
        ],
        "gems": [
            ("普通 (Normal)", "放射 (Radial), 放射 (Radial), 衰弱 (Waning)"),
            ("怪异 (Uncanny)", "放射 (Radial), 放射 (Radial), 三角 (Triangular)"),
            ("失落 (Lost)", "放射 (Radial), 三角 (Triangular), 衰弱 (Waning)")
        ],
        "scalings": [
            {"title": "力量", "data": [["19 - 25", "3.14", "22"], ["26 - 50", "1.40", "35"], ["51 - 99", "0.33", "16"]]},
            {"title": "技巧", "data": [["10 - 25", "2.69", "43"], ["26 - 50", "1.32", "33"], ["51 - 99", "0.29", "14"]]}
        ],
        "special": {"slow": "0", "rapid": "0", "beast": "100%", "kin": "100%"}
    }
]

output = ""

for w in weapons:
    output += f"""                 {{/* {w['title'].split(' (')[0]} */}}
                 <div className="pt-8 border-t border-gray-200">
                   <h3 id="{w['id']}" className="text-2xl mb-6 font-bold text-gray-800 flex items-center gap-2">
                     {w['title']}
                   </h3>

                   <div className="bg-white/60 rounded-lg p-3 overflow-x-auto mb-6 border border-gray-200">
                     <table className="w-full text-sm text-left">
                       <thead>
                         <tr className="border-b border-gray-200 bg-gray-50">
                           <th className="py-2 px-3 w-1/4">类型 (Type)</th>
                           <th className="py-2 px-3">位置 (Location)</th>
                         </tr>
                       </thead>
                       <tbody>"""
    for loc in w['locations']:
        output += f"""
                         <tr className="border-b border-gray-100">
                           <td className="py-2 px-3 font-medium text-gray-800">{loc[0]}</td>
                           <td className="py-2 px-3">{loc[1]}</td>
                         </tr>"""
    output += """
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-gray-800 mb-2">属性需求 (Attribute Requirement)</h4>
                   <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mb-6 flex gap-6 text-sm">"""
    output += f"""
                     <div><strong className="text-red-600">力量:</strong> {w['attrs']['str']}</div>
                     <div><strong className="text-blue-600">技巧:</strong> {w['attrs']['skl']}</div>
                     <div><strong className="text-red-900">血质:</strong> {w['attrs']['blt']}</div>
                     <div><strong className="text-purple-600">奥术:</strong> {w['attrs']['arc']}</div>"""
    output += """
                   </div>

                   <h4 className="font-bold text-gray-800 mb-2">升级伤害与加成 (Damage from Upgrades)</h4>
                   <div className="bg-white/60 rounded-lg p-3 overflow-x-auto mb-6 border border-gray-200">
                     <table className="w-full text-sm text-center">
                       <thead>
                         <tr className="border-b border-gray-200 bg-gray-50">
                           <th className="py-2 px-3">等级 (Lvl)</th>
                           <th className="py-2 px-3">基础伤害 (Base)</th>"""
    
    # Check if there is arcane base or blood base
    has_arc_base = False
    has_blood_base = False
    if len(w['upgrades'][0]) == 7:
        if w['id'] == 'weapon-rifle-spear':
            has_blood_base = True
            output += '\n                           <th className="py-2 px-3 text-red-900">血质基础 (Blood)</th>'
        else:
            has_arc_base = True
            output += '\n                           <th className="py-2 px-3 text-purple-600">奥术基础 (Arcane)</th>'

    output += """
                           <th className="py-2 px-3 text-red-600">力量加成</th>
                           <th className="py-2 px-3 text-blue-600">技巧加成</th>
                           <th className="py-2 px-3 text-red-900">血质加成</th>
                           <th className="py-2 px-3 text-purple-600">奥术加成</th>
                         </tr>
                       </thead>
                       <tbody>"""
    for upg in w['upgrades']:
        if len(upg) == 6:
            output += f"""
                         <tr className="border-b border-gray-100"><td>{upg[0]}</td><td>{upg[1]}</td><td>{upg[2]}</td><td>{upg[3]}</td><td>{upg[4]}</td><td>{upg[5]}</td></tr>"""
        else:
            output += f"""
                         <tr className="border-b border-gray-100"><td>{upg[0]}</td><td>{upg[1]}</td><td>{upg[2]}</td><td>{upg[3]}</td><td>{upg[4]}</td><td>{upg[5]}</td><td>{upg[6]}</td></tr>"""
            
    output += """
                       </tbody>
                     </table>
                   </div>

                   <h4 className="font-bold text-gray-800 mb-2">宝石插槽 (Gem Slots)</h4>
                   <ul className="list-disc list-inside ml-4 text-sm text-gray-700 mb-6">"""
    for gem in w['gems']:
        output += f"""
                     <li><strong>{gem[0]}:</strong> {gem[1]}</li>"""
    output += """
                   </ul>

                   <div className="grid md:grid-cols-3 gap-6 mb-6">""" if len(w['scalings']) == 3 else """
                   <div className="grid md:grid-cols-2 gap-6 mb-6">"""

    for scale in w['scalings']:
        output += f"""
                     <div className="bg-white/60 rounded-lg p-3 border border-gray-200">
                       <h4 className="font-bold text-gray-800 mb-2 text-center text-sm">平均物理攻击力提升 ({scale['title']})</h4>
                       <table className="w-full text-xs text-center">
                         <thead>
                           <tr className="border-b border-gray-200 bg-gray-50">
                             <th className="py-1 px-2">范围</th>
                             <th className="py-1 px-2">每点增益</th>
                             <th className="py-1 px-2">总计</th>
                           </tr>
                         </thead>
                         <tbody>"""
        for sdata in scale['data']:
            output += f"""
                           <tr className="border-b border-gray-100"><td>{sdata[0]}</td><td>{sdata[1]}</td><td>{sdata[2]}</td></tr>"""
        output += """
                         </tbody>
                       </table>
                     </div>"""
    output += """
                   </div>

                   <h4 className="font-bold text-gray-800 mb-2">特殊攻击属性 (Special Attacks)</h4>
                   <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex gap-6 text-sm">"""
    output += f"""
                     <div><strong>慢毒:</strong> {w['special']['slow']}</div>
                     <div><strong>急毒:</strong> {w['special']['rapid']}</div>
                     <div><strong>对野兽伤害:</strong> {w['special']['beast']}</div>
                     <div><strong>对眷属伤害:</strong> {w['special']['kin']}</div>"""
    output += """
                   </div>
                 </div>
"""

with open("weapons_block.jsx", "w", encoding="utf-8") as f:
    f.write(output)
