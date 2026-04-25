import re

with open('src/WalkthroughBloodborne.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'               <h2 id="section-trophy-list".*?</Link>\n               </div>\n\n', content, re.DOTALL)
if match:
    actual_html = match.group(0)
    content = content.replace(actual_html, "")
    content = content.replace("            </article>", actual_html + "            </article>")
    
    with open('src/WalkthroughBloodborne.jsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Moved HTML successfully")
else:
    print("Could not find HTML section")
