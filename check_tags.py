import re

with open('weapons_block.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

tags = re.findall(r'</?([a-z0-9]+)[^>]*>', text)
stack = []
for i, tag in enumerate(tags):
    if tag in ['img', 'br', 'hr', 'input']:
        continue
    if not tag.startswith('/'):
        stack.append(tag)
    else:
        name = tag[1:]
        if not stack:
            print(f"Error: closing tag </{name}> without opening tag")
        elif stack[-1] != name:
            print(f"Error: expected </{stack[-1]}> but found </{name}>")
            break
        else:
            stack.pop()

if stack:
    print("Unclosed tags:", stack)
else:
    print("All tags matched perfectly!")
