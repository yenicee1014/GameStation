const fs = require('fs');
const path = './src/Changelog.jsx';
let content = fs.readFileSync(path, 'utf8');

const newUpdate = `    {
      version: "0.1.4",
      date: "2026-04-23",
      title: "多款经典大作专属沉浸式 UI 主题上线 🎨",
      content: [
        "✨ 《生化危机9：安魂曲》：全新暗黑生存恐怖主题！深邃黑与血红交织的配色，配合复古噪点滤镜与扫描线效果，带你重回保护伞公司的恐怖设施。",
        "✨ 《最后生还者 第一部》：废土丛林主题！苔藓绿与灰土白配色，搭配背景中缓慢漂浮的真菌孢子动画，以及“ENDURE AND SURVIVE”的末世标语。",
        "✨ 《最后生还者 第二部》：极暗复仇主题！极致纯黑背景，极具冲击力的鲜血红高亮，配合粗犷的标题字体与艾莉手写日记风格的点缀，沉浸感拉满。",
        "✨ 《地平线 西之绝境》：全息科技与部落狂野主题！深邃全息蓝黑背景，霓虹青蓝边框光晕，六边形能量护盾纹理，以及部落火焰橙的完美点缀。",
        "✨ 《血源诅咒》：哥特式维多利亚主题！亚楠黑与暗石灰的哥特石板背景，迷雾滤镜，苍白之血红高亮，搭配古典优雅的衬线字体，以及专属的移动端血红悬浮目录栏。",
        "🚀 体验升级：这些专属主题均已在对应的攻略页面实装，不仅包含了色彩与字体的重构，还对所有的组件（如提示框、表格、收集列表）进行了深度的风格化定制。"
      ],
      tags: ["Update", "Design", "UI/UX", "Themes"],
      image: bloodborneCover
    },
`;

content = content.replace(/const updates = \[/, "const updates = [\n" + newUpdate);

fs.writeFileSync(path, content);
console.log('Changelog updated to 0.1.4');