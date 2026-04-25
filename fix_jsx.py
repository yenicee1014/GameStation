import re

with open('src/WalkthroughBloodborne.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add </p> before <h3 id="section-underground-corpse-pile"
content = content.replace(
    '捡到一个<strong>鹅卵石</strong>。\n               <h3 id="section-underground-corpse-pile"',
    '捡到一个<strong>鹅卵石</strong>。\n               </p>\n\n               <h3 id="section-underground-corpse-pile"'
)

# 2. Remove the extra </p> before \n             </div>\n          </article>
# It looks like:
#                </div>
#                </p>
# \n             </div>
#           </article>
content = re.sub(r'               </p>\s*\\n\s*</div>\s*</article>', r'\n             </div>\n          </article>', content)

with open('src/WalkthroughBloodborne.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed JSX nesting")
