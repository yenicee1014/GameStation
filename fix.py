with open('src/WalkthroughBloodborne.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('</li>\n                   <div className="grid md:grid-cols-2', '</li>\n                   </ul>\n\n                   <div className="grid md:grid-cols-2')

with open('src/WalkthroughBloodborne.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
