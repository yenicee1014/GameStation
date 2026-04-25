# 最终幻想7重制版攻略提取 Spec

## Why
用户需要将特定网页（GameFAQs的《最终幻想7重制版》第一章攻略）上的文字和图片内容提取出来，并整理为支持一键导入自建网站的格式（如带有本地图片链接的标准化Markdown文件），以便于内容的迁移和展示。

## What Changes
- 开发一个抓取脚本，使用 Node.js 或 Python 抓取指定URL的攻略内容。
- 解析网页的HTML，提取正文内容（去除多余的广告、导航栏等），保留标题、段落、列表和加重显示等格式。
- 提取攻略中包含的所有图片链接，将其下载到本地 `images` 目录。
- 将提取的内容整理并输出为标准化的 Markdown 格式文件（包含Frontmatter元数据，适合导入网站），并将文档内的图片引用替换为相对路径或绝对的图床路径。
- 创建打包结构，将Markdown文档和图片文件夹打包为一个整体（例如 `ff7_walkthrough` 文件夹）。

## Impact
- Affected specs: 无
- Affected code: 新增爬虫和格式转换脚本，以及抓取后生成的输出目录。

## ADDED Requirements
### Requirement: 网页内容抓取与格式化
系统应提供自动化脚本，以提取指定的GameFAQs攻略页面内容。

#### Scenario: 成功提取并生成导入包
- **WHEN** 运行提取脚本并提供目标URL
- **THEN** 脚本会在本地生成一个 `ff7_walkthrough` 目录，内部包含 `chapter-1.md` 和一个 `images` 子目录。Markdown 文件内图片链接正确指向本地下载的图片，排版精美。
