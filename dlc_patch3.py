import re

with open('src/WalkthroughBloodborne.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

with open('dlc_content.txt', 'r', encoding='utf-8') as f:
    dlc_content = f.read()

# 1. Update TOC
toc_addition = """,
  { id: 'section-underground-corpse-pile', title: '地下尸堆 (Underground Corpse Pile)', level: 2 },
  { id: 'section-research-hall', title: '研究大厅 (Research Hall)', level: 2 },
  { id: 'section-astral-clocktower', title: '星辰钟塔 (Astral Clocktower)', level: 2 },
  { id: 'section-fishing-hamlet', title: '小渔村 (Fishing Hamlet)', level: 2 },
  { id: 'section-laurence', title: '大教堂 (重返) - 隐藏Boss', level: 2 }
];"""
content = re.sub(r"  { id: 'section-hunters-nightmare', title: '猎人的梦魇 \(Hunter\\'s Nightmare\)', level: 2 }\s*\];", 
                 "  { id: 'section-hunters-nightmare', title: '猎人的梦魇 (Hunter\\'s Nightmare)', level: 2 }" + toc_addition, 
                 content)

# 2. Update Content
# Replace:
#                </p>
# \n             </div>
#           </article>

target_pattern = r'               </p>\s*\\n\s*</div>\s*</article>'
replacement = dlc_content

if re.search(target_pattern, content):
    content = re.sub(target_pattern, replacement, content)
    with open('src/WalkthroughBloodborne.jsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully updated WalkthroughBloodborne.jsx")
else:
    print("Failed to find target content pattern.")
