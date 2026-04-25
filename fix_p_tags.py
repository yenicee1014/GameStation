import re

with open('src/WalkthroughBloodborne.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# The missing </p> is right before the </div> that ends the phase block.
# In dlc_content.txt, it looks like this:
#                      <p className="mt-1 text-sm leading-relaxed">
#                        这个阶段比第二阶段更加疯狂...
#                      </div>
# It should be:
#                      <p className="mt-1 text-sm leading-relaxed">
#                        这个阶段比第二阶段更加疯狂...
#                      </p>
#                      </div>

# We can find all instances of <p className="mt-1 text-sm leading-relaxed"> that are followed by some text and then </div> without a </p> in between.
# But a simpler way: the text blocks have \n                     </div> right after the text.
# We can just do a regex replace:
# r'(<p className="mt-1 text-sm leading-relaxed">.*?)\s+(</div>)' where it doesn't contain </p>

def replacer(match):
    inner_text = match.group(1)
    if '</p>' not in inner_text:
        return inner_text + '\n                     </p>\n' + match.group(2)
    return match.group(0)

# We use re.DOTALL to match across newlines
content = re.sub(r'(<p className="mt-1 text-sm leading-relaxed">.*?)\n\s*(</div>)', replacer, content, flags=re.DOTALL)

with open('src/WalkthroughBloodborne.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed P tags")
