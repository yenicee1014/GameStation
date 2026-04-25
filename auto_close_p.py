import re

with open('src/WalkthroughBloodborne.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

out_lines = []
in_p = False
p_indent = ""

block_tags = ['<div', '</div', '<h2', '<h3', '<h4', '<ul', '<li', '<table', '<tr', '<td', '<tbody', '<thead']

for line in lines:
    stripped = line.strip()
    
    if in_p:
        # Check if this line is a block tag or the start of a new <p>
        is_block = any(stripped.startswith(tag) for tag in block_tags) or stripped.startswith('<p')
        if is_block:
            # We need to close the <p> before this line
            out_lines.append(p_indent + '</p>\n')
            in_p = False

    if '<p ' in line and not '</p>' in line:
        in_p = True
        # capture indentation of <p>
        p_indent = line[:len(line) - len(line.lstrip())]
    elif '<p>' in line and not '</p>' in line:
        in_p = True
        p_indent = line[:len(line) - len(line.lstrip())]
    elif '</p>' in line:
        in_p = False

    out_lines.append(line)

if in_p:
    out_lines.append(p_indent + '</p>\n')

with open('src/WalkthroughBloodborne.jsx', 'w', encoding='utf-8') as f:
    f.writelines(out_lines)

print("Auto-closed p tags")
