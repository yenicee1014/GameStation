import re

with open('src/WalkthroughBloodborne.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

with open('weapons_block.jsx', 'r', encoding='utf-8') as f:
    weapons = f.read()

# Find the start and end indices
start_str = "                 {/* Blade of Mercy */}"
end_str = "                 </div>\n               </div>\n  \n            </article>"

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + weapons + content[end_idx:]
    with open('src/WalkthroughBloodborne.jsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replaced successfully")
else:
    print("Could not find start or end string")
    print("start_idx:", start_idx)
    print("end_idx:", end_idx)
