import { useParams, Link } from 'react-router-dom';
import { booksData, categoryOptions } from './data';
import { useState, useEffect, useMemo } from 'react';
import { Search, Heart, Share2, Bookmark, ChevronDown, ChevronRight, BookOpen, X, ShoppingCart, ExternalLink, ScrollText, Disc, Hammer, Lock, ShieldAlert, Award, Book, Wrench, DoorOpen, MessageCircle, Smile, List, Trophy } from 'lucide-react';
import Footer from './components/Footer';
import backgroundImage from '../picture/30th-anniversary-hub-background-mobile-02-en-02oct24.webp';
import ff7rBanner from '../picture/page1-game-cover/FFVIIRemake.png';
import ff7rCover from '../picture/page1-game-cover/FFVIIRemake.png';
import squareEnixLogo from '../picture/page1-game-cover/FFVIIRemake.png'; // Using cover as placeholder for logo
import logo from '../picture/logo.svg';
import './App.css';

// TOC Data structure
const tocItems = [
  { id: 'section-intro', title: '前言与导读', level: 1 },
  { id: 'section-1', title: '1. 如何使用本攻略', level: 1 },
  { id: 'section-2', title: '2. 第一章：壹号魔晄炉的毁灭', level: 1 },
  { id: 'section-2-1', title: '2.1 核心注意事项', level: 2 },
  { id: 'section-2-2', title: '2.2 本章物品收集指南', level: 2 },
  { id: 'section-2-3', title: '2.3 战斗系统基础', level: 2 },
  { id: 'section-2-4', title: '2.4 克劳德战斗基础', level: 2 },
  { id: 'section-2-5', title: '2.5 陷危机制 (Pressuring Enemies)', level: 2 },
  { id: 'section-2-6', title: '2.6 物理攻击 vs 魔法攻击', level: 2 },
  { id: 'section-2-7', title: '2.7 元素弱点与战斗报告', level: 2 },
  { id: 'section-2-8', title: '2.8 武器升级与对比', level: 2 },
  { id: 'section-2-9', title: '2.9 本章流程：潜入魔晄炉', level: 2 },
  { id: 'section-2-10', title: '2.10 锁定敌人技巧', level: 2 },
  { id: 'section-2-11', title: '2.11 收集与探索', level: 2 },
  { id: 'section-2-12', title: '2.12 巴雷特战斗基础', level: 2 },
  { id: 'section-2-13', title: '2.13 推进与中Boss战：清道夫', level: 2 },
  { id: 'section-2-14', title: '2.14 守卫巨蝎 Boss战', level: 2 },
  { id: 'section-2-15', title: '2.15 逃离魔晄炉', level: 2 },
  { id: 'section-3', title: '3. 第二章：八番街的相遇', level: 1 },
  { id: 'section-3-1', title: '3.1 核心注意事项', level: 2 },
  { id: 'section-3-2', title: '3.2 元素弱点提醒', level: 2 },
  { id: 'section-3-3', title: '3.3 本章物品收集', level: 2 },
  { id: 'section-3-4', title: '3.4 本章流程：使用逃跑路线', level: 2 },
  { id: 'section-3-5', title: '3.5 躲避追捕者与收集品', level: 2 },
  { id: 'section-3-6', title: '3.6 致命躲避魔晶石 (Deadly Dodge)', level: 2 },
  { id: 'section-3-7', title: '3.7 突破封锁与带盾敌人', level: 2 },
  { id: 'section-3-8', title: '3.8 中Boss战：猎犬', level: 2 },
  { id: 'section-4', title: '4. 第三章：第七天堂 (Home Sweet Slum)', level: 1 },
  { id: 'section-4-1', title: '4.1 核心注意事项与音乐收集', level: 2 },
  { id: 'section-4-2', title: '4.2 贫民窟的生活与武器升级', level: 2 },
  { id: 'section-4-3', title: '4.3 蒂法战斗基础', level: 2 },
  { id: 'section-4-4', title: '4.4 武器熟练度机制', level: 2 },
  { id: 'section-4-5', title: '4.5 社区守卫任务', level: 2 },
  { id: 'section-4-6', title: '4.6 克劳德的钢铁剑与无尽斩 (Triple Slash)', level: 2 },
  { id: 'section-4-7', title: '4.7 查德利的战斗情报报告', level: 2 },
  { id: 'section-4-8', title: '4.8 关于支线任务的重要提示', level: 2 },
  { id: 'section-4-9', title: '4.9 重置武器升级', level: 2 },
  { id: 'section-4-10', title: '4.10 收集音乐唱片与追踪支线', level: 2 },
  { id: 'section-4-11', title: '4.11 支线任务：游荡的军犬', level: 2 },
  { id: 'section-4-12', title: '4.12 战斗情报报告 03：力竭效应 Pt. 1', level: 2 },
  { id: 'section-4-13', title: '4.13 支线任务：徘徊的魔物', level: 2 },
  { id: 'section-4-14', title: '4.14 突发事件：神罗的动向与乔尼', level: 2 },
  { id: 'section-4-15', title: '4.15 支线任务：消失的朋友', level: 2 },
  { id: 'section-4-16', title: '4.16 支线任务：废工厂的微小火花', level: 2 },
  { id: 'section-4-17', title: '4.17 支线任务：来自墓地的飞行物', level: 2 },
  { id: 'section-4-18', title: '4.18 EX事件：二人独处', level: 2 },
  { id: 'section-4-19', title: '4.19 飞镖小游戏与“飞镖专家”奖杯', level: 2 },
  { id: 'section-4-20', title: '4.20 主线推进：不祥的阴影', level: 2 },
  { id: 'section-5', title: '5. 第四章：午夜狂飙 (Mad Dash)', level: 1 },
  { id: 'section-5-1', title: '5.1 核心注意事项', level: 2 },
  { id: 'section-5-2', title: '5.2 摩托车追逐与“机车男孩”奖杯', level: 2 },
  { id: 'section-5-3', title: '5.3 获得“机车男孩”奖杯的策略', level: 2 },
  { id: 'section-5-4', title: '5.4 潜入附属设施', level: 2 },
  { id: 'section-5-5', title: '5.5 召唤兽系统与属性加成', level: 2 },
  { id: 'section-5-6', title: '5.6 Boss战：罗榭 (Roche)', level: 2 },
  { id: 'section-5-7', title: '5.7 返回贫民窟与结算报酬', level: 2 },
  { id: 'section-5-8', title: '5.8 贫民窟的智慧与调整装备', level: 2 },
  { id: 'section-5-9', title: '5.9 突袭与虚无魔物战', level: 2 },
  { id: 'section-5-10', title: '5.10 新的行动与章节结尾', level: 2 },
  { id: 'section-6', title: '6. 第五章：迷宫般的通道 (Dogged Pursuit)', level: 1 },
  { id: 'section-6-1', title: '6.1 核心注意事项', level: 2 },
  { id: 'section-6-2', title: '6.2 开往第四区', level: 2 },
  { id: 'section-6-3', title: '6.3 寻找同伴与印记', level: 2 },
  { id: 'section-6-4', title: '6.4 秘密通道与中毒魔晶石', level: 2 },
  { id: 'section-6-5', title: '6.5 Boss战：废弃机器人 (Crab Warden)', level: 2 },
  { id: 'section-6-6', title: '6.6 蒂法的金属指虎与压制能力', level: 2 },
  { id: 'section-7', title: '7. 第六章：贫民窟的太阳 (Light the Way)', level: 1 },
  { id: 'section-7-1', title: '7.1 核心注意事项', level: 2 },
  { id: 'section-7-2', title: '7.2 前往G区与H区', level: 2 },
  { id: 'section-7-3', title: '7.3 关闭第一与第二盏太阳灯', level: 2 },
  { id: 'section-7-4', title: '7.4 收集元素魔晶石与第三盏太阳灯', level: 2 },
  { id: 'section-7-5', title: '7.5 隐藏区域与挑战准备', level: 2 },
  { id: 'section-7-6', title: '7.6 一分钟限时挑战与“清理小队”奖杯', level: 2 },
  { id: 'section-7-7', title: '7.7 前往动力平台与最终战', level: 2 },
  { id: 'section-7-8', title: '7.8 巴雷特的轻机枪与雪中送炭能力', level: 2 },
  { id: 'section-8', title: '8. 第七章：陷阱启动 (A Trap is Sprung)', level: 1 },
  { id: 'section-8-1', title: '8.1 核心注意事项', level: 2 },
  { id: 'section-8-2', title: '8.2 魔晶石配对策略', level: 2 },
  { id: 'section-8-3', title: '8.3 前往魔晄储存区', level: 2 },
  { id: 'section-8-4', title: '8.4 判处死刑与钥匙卡谜题', level: 2 },
  { id: 'section-8-5', title: '8.5 蒂法的音速拳套与下段踢能力', level: 2 },
  { id: 'section-8-6', title: '8.6 突袭大门与“同步齐心”奖杯', level: 2 },
  { id: 'section-8-7', title: '8.7 Boss战：破甲炮 (Airbuster)', level: 2 },
  { id: 'section-9', title: '9. 第八章：重逢之花 (Budding Bodyguard)', level: 1 },
  { id: 'section-9-1', title: '9.1 核心注意事项', level: 2 },
  { id: 'section-9-2', title: '9.2 再度相遇与 Boss 战：雷诺 (Reno)', level: 2 },
  { id: 'section-9-3', title: '9.3 逃离教堂与屋顶跑酷', level: 2 },
  { id: 'section-9-4', title: '9.4 爱丽丝的战斗基础', level: 2 },
  { id: 'section-9-5', title: '9.5 爱丽丝的防御杖与圣魔阵能力', level: 2 },
  { id: 'section-9-6', title: '9.6 前往车站与后街探索', level: 2 },
  { id: 'section-9-7', title: '9.7 绕过大门与监视器', level: 2 },
  { id: 'section-9-8', title: '9.8 绿叶之家送花与装饰', level: 2 },
  { id: 'section-9-9', title: '9.9 收集音乐唱片与查德利的新任务', level: 2 },
  { id: 'section-9-10', title: '9.10 偷窃魔晶石 (Steal Materia) 的重要性', level: 2 },
  { id: 'section-9-11', title: '9.11 拯救孩子与开启支线任务', level: 2 },
  { id: 'section-9-12', title: '9.12 支线：神秘的莫古力商人', level: 2 },
  { id: 'section-9-13', title: '9.13 爱丽丝的银制长杖与光芒风暴', level: 2 },
  { id: 'section-9-14', title: '9.14 支线：巡逻的孩子们', level: 2 },
  { id: 'section-9-15', title: '9.15 克劳德的钉棒与无序交叉能力', level: 2 },
  { id: 'section-9-16', title: '9.16 召唤兽战斗：希瓦 (Shiva)', level: 2 },
  { id: 'section-9-17', title: '9.17 支线：英雄的证明与打箱子小游戏', level: 2 },
  { id: 'section-9-18', title: '9.18 支线：暴走的武器', level: 2 },
  { id: 'section-9-19', title: '9.19 支线：扫墓的报酬', level: 2 },
  { id: 'section-9-20', title: '9.20 支线：贫民窟的天使', level: 2 },
  { id: 'section-9-21', title: '9.21 Boss战：路德 (Rude)', level: 2 },
  { id: 'section-9-22', title: '9.22 发现事件：花语与章节结尾', level: 2 },
  { id: 'section-10', title: '10. 第九章：欲望的街道 (The Town That Never Sleeps)', level: 1 },
  { id: 'section-10-1', title: '10.1 核心注意事项', level: 2 },
  { id: 'section-10-2', title: '10.2 机械臂谜题与范围化魔晶石', level: 2 },
  { id: 'section-10-3', title: '10.3 告别与蒂法的礼服', level: 2 },
  { id: 'section-10-4', title: '10.4 追赶蒂法与支线任务分支', level: 2 },
  { id: 'section-10-5', title: '10.5 收集音乐唱片与追踪乔尼', level: 2 },
  { id: 'section-10-6', title: '10.6 流浪乔尼与重要魔晶石购买', level: 2 },
  { id: 'section-10-7', title: '10.7 破甲大剑 (Hardedge) 及其能力解析', level: 2 },
  { id: 'section-10-8', title: '10.8 三人组与任务线抉择', level: 2 },
  { id: 'section-10-9', title: '10.9 地下竞技场与地狱屋 (Hell House)', level: 2 },
  { id: 'section-10-10', title: '10.10 分道扬镳与玛姆的任务线', level: 2 },
  { id: 'section-10-11', title: '10.11 支线：无尽之夜', level: 2 },
  { id: 'section-10-12', title: '10.12 支线：爆炸躯体', level: 2 },
  { id: 'section-10-13', title: '10.13 竞技场挑战与极限技 (Limit Breaks)', level: 2 },
  { id: 'section-10-14', title: '10.14 爱丽丝的星云杖与魔法使魔', level: 2 },
  { id: 'section-10-15', title: '10.15 支线：深蹲比赛', level: 2 },
  { id: 'section-10-16', title: '10.16 营救蒂法与爱丽丝的红色礼服', level: 2 },
  { id: 'section-10-17', title: '10.17 蜜蜂之馆：舞蹈小游戏与奖杯', level: 2 },
  { id: 'section-10-18', title: '10.18 克劳德的女装与第三套礼服解锁', level: 2 },
  { id: 'section-10-19', title: '10.19 选秀与古留根尾宅邸决战', level: 2 },
  { id: 'section-11', title: '11. 第十章：焦躁的迷宫 (Rough Waters)', level: 1 },
  { id: 'section-11-1', title: '11.1 核心注意事项', level: 2 },
  { id: 'section-11-2', title: '11.2 逃离下水道与 Boss 战：阿勃祖 (Abzu)', level: 2 },
  { id: 'section-11-3', title: '11.3 顺水而行：蒂法的新武器', level: 2 },
  { id: 'section-11-4', title: '11.4 越过主干线与收集结界魔晶石', level: 2 },
  { id: 'section-11-5', title: '11.5 重返地面与本章结尾', level: 2 },
  { id: 'section-12', title: '12. 第十一章：亡灵的恶作剧 (Haunted)', level: 1 },
  { id: 'section-12-1', title: '12.1 核心注意事项', level: 2 },
  { id: 'section-12-2', title: '12.2 列车坟场：爱丽丝的新武器', level: 2 },
  { id: 'section-12-3', title: '12.3 爱丽丝的秘银棒与审判光线', level: 2 },
  { id: 'section-12-4', title: '12.4 穿越列车与维修设施', level: 2 },
  { id: 'section-12-5', title: '12.5 穿过维修设施与迎战恶灵', level: 2 },
  { id: 'section-12-6', title: '12.6 Boss战：恶灵 (Ghoul)', level: 2 },
  { id: 'section-12-7', title: '12.7 迷宫导航与爱丽丝的防刃魔杖', level: 2 },
  { id: 'section-12-8', title: '12.8 Boss战：埃力格 (Eligor)', level: 2 },
  { id: 'section-13', title: '13. 第十二章：死斗 (Fight for Survival)', level: 1 },
  { id: 'section-13-1', title: '13.1 核心注意事项与导航', level: 2 },
  { id: 'section-13-2', title: '13.2 战斗情报报告 13：ATB 增幅魔晶石', level: 2 },
  { id: 'section-13-3', title: '13.3 攀登支柱与拯救玛琳', level: 2 },
  { id: 'section-13-4', title: '13.4 Boss战：雷诺与路德 (Reno and Rude)', level: 2 },
  { id: 'section-14', title: '14. 第十三章：崩塌的世界 (A Broken World)', level: 1 },
  { id: 'section-14-1', title: '14.1 核心注意事项', level: 2 },
  { id: 'section-14-2', title: '14.2 查德利的报告与先发制人魔晶石', level: 2 },
  { id: 'section-14-3', title: '14.3 召唤兽战斗：胖陆行鸟 (Fat Chocobo)', level: 2 },
  { id: 'section-14-4', title: '14.4 探望朋友与穿过地下通道', level: 2 },
  { id: 'section-14-5', title: '14.5 贫民窟下层探索与返回地面', level: 2 },
  { id: 'section-14-6', title: '14.6 秘密地下通道 (Collapsed Expressway)', level: 2 },
  { id: 'section-14-7', title: '14.7 常绿公园 (Evergreen Park) 的商店', level: 2 },
  { id: 'section-14-8', title: '14.8 巴雷特的巨炮与满腔怒火能力', level: 2 },
  { id: 'section-14-9', title: '14.9 独处与寻找威吉', level: 2 },
  { id: 'section-14-10', title: '14.10 Boss战：变异实验体 (Failed Experiment)', level: 2 },
  { id: 'section-14-11', title: '14.11 蒂法的秘银爪与斗气幻光球', level: 2 },
  { id: 'section-15', title: '15. 第十四章：寻找希望 (In Search of Hope)', level: 1 },
  { id: 'section-15-1', title: '15.1 核心注意事项', level: 2 },
  { id: 'section-15-2', title: '15.2 发现事件：第十四章的决心', level: 2 },
  { id: 'section-15-3', title: '15.3 收集计步魔晶石与查德利的新任务', level: 2 },
  { id: 'section-15-4', title: '15.4 支线任务：寻找陆行鸟', level: 2 },
  { id: 'section-15-5', title: '15.5 获取敌方技能：自爆', level: 2 },
  { id: 'section-15-6', title: '15.6 支线任务：消失的孩子们与幻影战', level: 2 },
  { id: 'section-15-7', title: '15.7 支线任务：淘气盗贼与提灯怪', level: 2 },
  { id: 'section-15-8', title: '15.8 巴雷特的钢铁钳与能量上勾拳', level: 2 },
  { id: 'section-15-9', title: '15.9 奖杯：破坏箱子神童', level: 2 },
  { id: 'section-15-10', title: '15.10 克劳德的秘银剑与破晄击', level: 2 },
  { id: 'section-15-11', title: '15.11 支线任务：音乐的力量', level: 2 },
  { id: 'section-15-12', title: '15.12 支线任务：淘气盗贼 (与地狱犬之战)', level: 2 },
  { id: 'section-15-13', title: '15.13 竞技场挑战与极限技获取', level: 2 },
  { id: 'section-15-14', title: '15.14 支线任务：动摇的决心 (引体向上)', level: 2 },
  { id: 'section-15-15', title: '15.15 支线任务：地底的咆哮 (零号巨兽)', level: 2 },
  { id: 'section-15-16', title: '15.16 巴雷特的破坏铁球与大地锤击', level: 2 },
  { id: 'section-15-17', title: '15.17 支线任务：秘传药方与古留根尾的秘密财产', level: 2 },
  { id: 'section-15-18', title: '15.18 重返下水道与阿勃祖的复仇战', level: 2 },
  { id: 'section-15-19', title: '15.19 翻越围墙：最终决战前的准备', level: 2 },
  { id: 'section-16', title: '16. 第十五章：落日之城 (The Day Midgar Stood Still)', level: 1 },
  { id: 'section-16-1', title: '16.1 核心注意事项', level: 2 },
  { id: 'section-16-2', title: '16.2 攀登阶段与学习敌方技能', level: 2 },
  { id: 'section-16-3', title: '16.3 摇摇欲坠的建筑与收集品', level: 2 },
  { id: 'section-16-4', title: '16.4 155米高空躲避战', level: 2 },
  { id: 'section-16-5', title: '16.5 Boss战：女武神 (Valkyrie)', level: 2 },
  { id: 'section-17', title: '17. 第十六章：潜入神罗大厦 (The Belly of the Beast)', level: 1 },
  { id: 'section-17-1', title: '17.1 核心注意事项', level: 2 },
  { id: 'section-17-2', title: '17.2 获取蒂法的软羽手套 (Purple Pain)', level: 2 },
  { id: 'section-17-3', title: '17.3 扮演游客与参观神罗展览', level: 2 },
  { id: 'section-17-4', title: '17.4 巴雷特的搏动炮与近距离射击', level: 2 },
  { id: 'section-17-5', title: '17.5 休息区与新的战斗模拟器挑战', level: 2 },
  { id: 'section-17-6', title: '17.6 营救爱丽丝与 H0512 样本战', level: 2 },
  { id: 'section-17-7', title: '17.7 第十六章最终战斗：装甲特种兵', level: 2 },
  { id: 'section-18', title: '18. 第十七章：逃出生天 (Deliverance from Chaos)', level: 1 },
  { id: 'section-18-1', title: '18.1 核心注意事项', level: 2 },
  { id: 'section-18-2', title: '18.2 爱丽丝的全金属杖与光之盾', level: 2 },
  { id: 'section-18-3', title: '18.3 寻找同伴与第一分舱', level: 2 },
  { id: 'section-18-4', title: '18.4 克劳德的双刺剑与反击架势', level: 2 },
  { id: 'section-18-5', title: '18.5 小队分离：第一阶段', level: 2 },
  { id: 'section-18-6', title: '18.6 蒂法的原力手镯与第三分舱', level: 2 },
  { id: 'section-18-7', title: '18.7 男生小队与第二分舱的连环手镯', level: 2 },
  { id: 'section-18-8', title: '18.8 脑部舱 (Brain Pods) 战斗策略', level: 2 },
  { id: 'section-18-9', title: '18.9 小队重聚前的最后考验', level: 2 },
  { id: 'section-18-10', title: '18.10 Boss战 1：百足剑龙 (Swordipede)', level: 2 },
  { id: 'section-18-11', title: '18.11 顶层探索与神罗总裁', level: 2 },
  { id: 'section-18-12', title: '18.12 Boss战 2：杰诺瓦·织梦者 (Jenova Dreamweaver)', level: 2 },
  { id: 'section-18-13', title: '18.13 Boss战 3：路法斯与暗黑猎犬 (Rufus and Darkstar)', level: 2 },
  { id: 'section-18-14', title: '18.14 Boss战 4：百机兵装 (The Arsenal)', level: 2 },
  { id: 'section-19', title: '19. 第十八章：命运的奇点 (Destiny\'s Crossroads)', level: 1 },
  { id: 'section-19-1', title: '19.1 核心注意事项', level: 2 },
  { id: 'section-19-2', title: '19.2 摩托车追逐与“摩托车骑手”奖杯', level: 2 },
  { id: 'section-19-3', title: '19.3 菲拉 Boss 连战准备', level: 2 },
  { id: 'section-19-4', title: '19.4 Boss战：菲拉·巴哈姆特 (Whisper Bahamut)', level: 2 },
  { id: 'section-19-5', title: '19.5 最终 Boss 战：萨菲罗斯 (Sephiroth)', level: 2 },
  { id: 'section-20', title: '附录一：最高机密挑战与诸神黄昏 (Top Secrets / Gotterdammerung)', level: 1 },
  { id: 'section-trophies', title: '奖杯指南', level: 1 },
];

export default function WalkthroughFF7R() {
  const { slug: paramSlug } = useParams();
  const slug = paramSlug || 'final-fantasy-7-remake';
  const [game, setGame] = useState(null);
  const [activeSection, setActiveSection] = useState('section-1');
  const [readingProgress, setReadingProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [expandedSections, setExpandedSections] = useState({});
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  
  useEffect(() => {
    // Add FF7R specific styles to document head when component mounts
    const styleEl = document.createElement('style');
    styleEl.id = 'ff7r-styles';
    styleEl.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');

      .ff7r-theme {
        font-family: 'Rajdhani', system-ui, sans-serif !important;
        --mako-cyan: #00f0ff;
        --mako-dark: #021824;
        --shinra-red: #ff3366;
      }
      
      .ff7r-theme .site-nav {
        background: rgba(4, 13, 20, 0.85) !important;
        border-bottom: 1px solid rgba(0, 240, 255, 0.3) !important;
        box-shadow: 0 4px 20px rgba(0, 240, 255, 0.1) !important;
      }
      .ff7r-theme .site-nav__brand, .ff7r-theme .nav-link, .ff7r-theme .site-nav__search {
        color: #e0f7fa !important;
      }
      .ff7r-theme .nav-link:hover {
        background: rgba(0, 240, 255, 0.15) !important;
        color: #00f0ff !important;
        text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
      }
      .ff7r-theme .site-nav__search {
        background: rgba(0, 240, 255, 0.05) !important;
        border-color: rgba(0, 240, 255, 0.3) !important;
      }
      .ff7r-theme .site-nav__search:focus-within {
        border-color: #00f0ff !important;
        box-shadow: 0 0 10px rgba(0, 240, 255, 0.3) !important;
      }
      .ff7r-theme .site-nav__input {
        color: #e0f7fa !important;
      }
      
      /* Hexagon pattern background overlay */
      .ff7r-bg-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 0;
        background-image: 
          linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px);
        background-size: 30px 30px;
        opacity: 0.5;
      }

      /* Custom scrollbar for FF7R */
      .ff7r-theme ::-webkit-scrollbar {
        width: 8px;
      }
      .ff7r-theme ::-webkit-scrollbar-track {
        background: #04131a;
        border-left: 1px solid #00f0ff33;
      }
      .ff7r-theme ::-webkit-scrollbar-thumb {
        background: #00f0ff88;
        border-radius: 0;
      }
      .ff7r-theme ::-webkit-scrollbar-thumb:hover {
        background: #00f0ff;
        box-shadow: 0 0 10px #00f0ff;
      }

      /* Chamfered corners for FF7R cards */
      .ff7r-card {
        clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
        border: 1px solid rgba(0, 240, 255, 0.3);
        background: linear-gradient(135deg, rgba(8, 13, 20, 0.95) 0%, rgba(2, 24, 36, 0.95) 100%);
      }
      
      .ff7r-heading {
        position: relative;
        padding-left: 15px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .ff7r-heading::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10%;
        height: 80%;
        width: 4px;
        background: #00f0ff;
        box-shadow: 0 0 10px #00f0ff;
      }
      
      /* Active TOC item styling */
      .ff7r-toc-active {
        background: linear-gradient(90deg, rgba(0, 240, 255, 0.2) 0%, transparent 100%);
        border-left: 2px solid #00f0ff;
        color: #00f0ff !important;
        text-shadow: 0 0 5px rgba(0, 240, 255, 0.5);
      }
    `;
    document.head.appendChild(styleEl);
    
    // Add class to body
    document.body.classList.add('ff7r-theme');
    
    return () => {
      document.getElementById('ff7r-styles')?.remove();
      document.body.classList.remove('ff7r-theme');
    };
  }, []);


  // Initialize likes from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem(`ff7r-likes-${slug}`);
    const hasLiked = localStorage.getItem(`ff7r-has-liked-${slug}`);
    
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    } else {
      // Default starting likes
      setLikes(45);
    }
    
    if (hasLiked === 'true') {
      setIsLiked(true);
    }
  }, [slug]);

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);
    
    localStorage.setItem(`ff7r-likes-${slug}`, newLikes.toString());
    localStorage.setItem(`ff7r-has-liked-${slug}`, (!isLiked).toString());
  };

  // 生成正式上线后的链接，而不是本地 localhost 链接
  const getShareUrl = () => {
    const baseUrl = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
      ? 'https://gamestation.cc' 
      : window.location.origin;
    return `${baseUrl}/${slug}`;
  };

  const handleCopyLink = () => {
    const url = getShareUrl();
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleWechatShare = () => {
    window.location.href = 'weixin://';
    setIsShareOpen(false);
  };

  const handleWeiboShare = () => {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(`最后生还者 第一部 终极攻略指南 ${url}`);
    window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${title}`, '_blank');
    setIsShareOpen(false);
  };

  const handleSystemShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '最后生还者 第一部 终极攻略指南',
          text: '来看看这篇超详细的《最后生还者 第一部》攻略指南！',
          url: getShareUrl(),
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      handleCopyLink();
      alert('您的浏览器不支持系统分享，已为您复制链接。');
    }
    setIsShareOpen(false);
  };

  const handleSaveImage = () => {
    alert('请使用系统截屏功能保存当前页面。');
    setIsShareOpen(false);
  };

  // 构建树形结构 TOC
  const tocTree = useMemo(() => {
    const tree = [];
    let currentParent = null;

    tocItems.forEach(item => {
      if (item.level === 1) {
        currentParent = { ...item, children: [] };
        tree.push(currentParent);
      } else if (item.level === 2 && currentParent) {
        currentParent.children.push(item);
      }
    });

    return tree;
  }, []);

  // 切换章节展开状态
  const toggleSection = (e, id, forceState) => {
    e.stopPropagation();
    e.preventDefault();
    setExpandedSections(prev => ({
      ...prev,
      [id]: forceState !== undefined ? forceState : !prev[id]
    }));
  };

  // 监听 activeSection 变化，自动展开父级
  useEffect(() => {
    const parent = tocTree.find(p => 
      p.id === activeSection || p.children.some(c => c.id === activeSection)
    );
    
    if (parent) {
       setExpandedSections(prev => ({
         ...prev,
         [parent.id]: true
       }));
    }
  }, [activeSection, tocTree]);

  // 获取推荐游戏
  const recommendedGames = useMemo(() => {
    if (!game) return [];
    
    // Explicitly find TLOU2
    const tlou2 = booksData.find(b => b.slug === 'the-last-of-us-part-2' || b.title === '最后生还者 2');
    
    // Get other random games, excluding current game and TLOU2
    const otherGames = booksData
      .filter(b => b.title !== game.title && b.slug !== 'the-last-of-us-part-2' && b.title !== '最后生还者 2')
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
      
    // Return TLOU2 + 2 others, or just 3 others if TLOU2 not found
    return tlou2 ? [tlou2, ...otherGames] : otherGames.slice(0, 3);
  }, [game]);

  useEffect(() => {
    // Decode URL and find game
    const foundGame = booksData.find(g => {
        const gameSlug = g.slug || g.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-\u4e00-\u9fa5]+/g, '').replace(/\-\-+/g, '-');
        // Match slug either directly or with -walkthrough suffix removed
        return slug === gameSlug || slug === `${gameSlug}-walkthrough`;
    });
    
    setGame(foundGame);
  }, [slug]);

  // Scroll spy and progress logic
  useEffect(() => {
    const handleScroll = () => {
      // 1. Update Reading Progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100))) : 0;
      setReadingProgress(progress);

      // 2. Update Active Section
      // Find the section that is currently most visible
      let currentSection = activeSection;
      
      // Get all section elements positions
      const sectionOffsets = tocItems.map(item => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, offset: -Infinity };
        // Offset adjusted for header height (100px) + some buffer
        return { id: item.id, offset: element.getBoundingClientRect().top - 120 };
      });

      // Find the last section that has passed the top threshold
      // We look for offset <= 0 (meaning it's at or above our reading line)
      // OR the one closest to 0 if all are positive (top of page)
      
      // If we are at the very bottom of the page, highlight the last item
      if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.documentElement.scrollHeight - 10) {
         // Find the last item that has a corresponding element in DOM
         for (let i = tocItems.length - 1; i >= 0; i--) {
            if (document.getElementById(tocItems[i].id)) {
               currentSection = tocItems[i].id;
               break;
            }
         }
      } else {
          const passedSections = sectionOffsets.filter(s => s.offset <= 0);
          
          if (passedSections.length > 0) {
            // The last one that passed is the current one
            currentSection = passedSections[passedSections.length - 1].id;
          } else if (sectionOffsets.length > 0) {
            // If none passed (at very top), active is the first one
            currentSection = sectionOffsets[0].id;
          }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    
    if (id === 'section-intro') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setActiveSection(id);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header (60px) + padding (40px)
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const renderStats = (stats) => {
    if (!stats) return null;
    return (
      <div className="flex flex-wrap gap-3 mt-2 mb-4 text-xs text-[#5c7e82] font-medium">
        {stats.artifacts > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><ScrollText size={12} /> 文物: {stats.artifacts}</span>}
        {stats.tradingCards > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><Disc size={12} /> 卡牌: {stats.tradingCards}</span>}
        {stats.coins > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><Disc size={12} /> 硬币: {stats.coins}</span>}
        {stats.journalEntries > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><BookOpen size={12} /> 日志: {stats.journalEntries}</span>}
        {stats.workbenches > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><Hammer size={12} /> 工作台: {stats.workbenches}</span>}
        {stats.safes > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><Lock size={12} /> 保险箱: {stats.safes}</span>}
        {stats.trainingManuals > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><BookOpen size={12} /> 手册: {stats.trainingManuals}</span>}
        {stats.weapons > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><ShieldAlert size={12} /> 武器: {stats.weapons}</span>}
        {/* TLOU1 Specific */}
        {stats.pendants > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><Award size={12} /> 挂坠: {stats.pendants}</span>}
        {stats.comics > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><Book size={12} /> 漫画: {stats.comics}</span>}
        {stats.tools > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><Wrench size={12} /> 工具: {stats.tools}</span>}
        {stats.shivDoors > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><DoorOpen size={12} /> 弹簧刀门: {stats.shivDoors}</span>}
        {stats.conversations > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><MessageCircle size={12} /> 对话: {stats.conversations}</span>}
        {stats.jokes > 0 && <span className="flex items-center gap-1 bg-[#0e222b] px-2 py-1 rounded"><Smile size={12} /> 笑话: {stats.jokes}</span>}
      </div>
    );
  };

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sspai-bg text-sspai-gray">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-sspai-text">404</h1>
          <p>未找到该游戏的攻略信息</p>
          <a href="/" className="mt-4 inline-block text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] hover:underline font-medium">返回首页</a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#02080c] ff7r-theme font-sans relative text-gray-200 selection:bg-black selection:text-[#fdfbf7]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
       <div className="ff7r-bg-overlay"></div>
       {/* Header */}
       <header className="site-nav">
        <div className="site-nav__inner">
          <div className="site-nav__left">
            <Link to="/" className="site-nav__brand">
              <img src={logo} alt="Gamestation" />
            </Link>
            <nav className="site-nav__links">
              <div className="nav-item" tabIndex={0}>
                <button
                  type="button"
                  className="nav-link"
                  aria-expanded={isCategoryOpen}
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                >
                  游戏分类
                  <ChevronDown 
                    size={14} 
                    strokeWidth={2.2} 
                    className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`nav-panel ${isCategoryOpen ? 'is-open' : ''}`}
                  style={isCategoryOpen ? { opacity: 1, transform: 'translateY(0)', pointerEvents: 'auto' } : undefined}
                >
                  <div className="nav-panel__col">
                    {categoryOptions.map((category) => (
                      <Link
                        key={category}
                        to="/"
                        className={`nav-panel__link ${activeCategory === category ? 'is-active' : ''}`}
                        onClick={() => {
                          setActiveCategory(category);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link className="nav-link nav-link--with-icon" to="/changelog">
                <span className="flex items-center gap-2">
                  <BookOpen size={14} strokeWidth={2.2} />
                  <span>更新日志</span>
                </span>
                <span className="nav-badge">更新</span>
              </Link>
              <Link className="nav-link nav-link--with-icon" to="/sponsors">
                <span className="flex items-center gap-2">
                  <Heart size={14} strokeWidth={2.2} />
                  <span>赞助者名单</span>
                </span>
              </Link>
            </nav>
          </div>
          <div className="site-nav__right">
            <div className="site-nav__search">
              <Search size={16} strokeWidth={2.2} />
              <input 
                className="site-nav__input" 
                placeholder="搜索页面内容..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.find(searchQuery);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

       {/* Main Content */}
       <main className="pt-[100px] pb-20 max-w-[1400px] mx-auto px-4 md:px-6 flex gap-10 lg:gap-14">
          
          

          {/* Article Column */}
          <article className="flex-1 min-w-0 ff7r-card shadow-[0_0_20px_rgba(0,255,255,0.15)] p-8 md:p-12 md:pb-16 transition-shadow text-[#e0f7fa]">
             {/* Banner */}
             <div className="w-full aspect-[2/1] rounded-lg overflow-hidden mb-8 shadow-inner bg-[#0e222b] relative group">
               <img 
                 src={game.slug === 'final-fantasy-7-remake' ? ff7rBanner : game.imgUrl} 
                 alt={game.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
 
             </div>
             
             {/* Title */}
             <h1 className="text-3xl md:text-[40px] font-bold mb-6 leading-[1.2] text-[#e0f7fa] tracking-tight">
               {game.title} 完整图文攻略
               <span className="block text-2xl md:text-3xl text-[#5c7e82] mt-2 font-normal">从入门到精通的白金之路</span>
             </h1>
             
             {/* Meta */}
             <div className="flex items-center justify-between mb-10 pb-8 border-b border-[#112a32]">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-[#112a32] shadow-sm cursor-pointer hover:ring-2 hover:ring-sspai-red/20 transition-all">
                   <img src={squareEnixLogo} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-[15px] text-[#e0f7fa] hover:text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] cursor-pointer transition-colors">{game.author}</span>
                     <span className="px-1.5 py-[1px] bg-[#f0f0f0] text-[#5c7e82] text-[10px] font-bold rounded uppercase tracking-wider">官方</span>
                   </div>
                   <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-3 font-medium">
                    <span>{game.date || '2026年02月26日'}</span>
                    <span>阅读 15分钟</span>
                  </div>
                 </div>
               </div>
               
             </div>
             
             {/* Content Body */}
             <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#e0f7fa] prose-headings:tracking-tight prose-p:text-[#e0f7fa] prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] prose-a:no-underline prose-a:border-b prose-a:border-[#00f0ff]/30 hover:prose-a:border-[#00f0ff] hover:prose-a:bg-[#00f0ff]/10 prose-a:transition-all prose-img:rounded-lg prose-img:shadow-sm prose-blockquote:border-l-4 prose-blockquote:border-[#00f0ff] prose-blockquote:bg-[#0c1821] prose-blockquote:border prose-blockquote:border-[#163840] prose-blockquote:shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:text-[#e0f7fa] prose-li:text-[#e0f7fa] prose-strong:text-[#e0f7fa] prose-strong:font-bold">
               
                 <>
                   {/* TLOU2 Specific Content - Optimized Layout */}
                    <div className="mb-12">
                      <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
                         {/* Cover Image & Purchase */}
                        <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 flex flex-col gap-4">
                          
                          {/* Purchase Card */}
                          <div className="bg-[#080d14]/90 backdrop-blur-md rounded-xl shadow-sm border border-[#1a3a40] p-5">
                            <h3 className="font-bold text-cyan-300 mb-4 text-sm flex items-center gap-2">
                              <span>🛍️</span> 购买游戏
                            </h3>
                            
                            <div className="flex flex-col gap-4">
                              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-[#112a32] bg-[#080d14]/90 backdrop-blur-md mb-2">
                                <img src={ff7rCover} alt="PS5 Official Disc Cover" className="absolute inset-0 w-full h-full object-contain p-1" />
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                  <span className="text-xs text-gray-400 line-through">HK$ 468.00</span>
                                  <span className="text-2xl font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">HK$ 234.00</span>
                                </div>
                                <span className="px-2.5 py-1 bg-[#00f0ff]/10 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] text-xs font-bold rounded">-50%</span>
                              </div>

                              <a 
                                href="https://store.playstation.com/zh-hant-hk/product/HP0082-PPSA01369_00-7231454536640324" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-[#00439c] text-white font-bold rounded-full text-sm hover:bg-[#003087] transition-all flex items-center justify-center gap-2 shadow-sm group"
                              >
                                <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                                <span>前往 PS Store 购买</span>
                              </a>
                              
                              <p className="text-[10px] text-gray-300 text-center">
                                *价格仅供参考，请以商店实际价格为准
                              </p>
                            </div>
                          </div>
                        </div>
                         
                         {/* Basic Info Table */}
                         <div className="flex-1 flex flex-col">
                           <div className="bg-[#080d14]/90 backdrop-blur-md rounded-xl shadow-sm border border-[#1a3a40] p-6 flex flex-col h-full">
                             <div className="flex items-center justify-between border-b border-[#112a32] pb-4 mb-4">
                               <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                                <span className="text-2xl">📋</span> 游戏档案
                              </h3>
                             </div>
                             
                             <div className="flex-1 grid grid-cols-1 content-center gap-1">
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#0c1821] transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-[#5c7e82] font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🏢</span> 开发商
                                 </span>
                                 <span className="font-semibold text-cyan-300">史克威尔艾尼克斯 (Square Enix)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#0c1821] transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-[#5c7e82] font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📦</span> 发行商
                                 </span>
                                 <span className="font-semibold text-cyan-300">史克威尔艾尼克斯 (Square Enix)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#0c1821] transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-[#5c7e82] font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">📅</span> 发售日期
                                 </span>
                                 <span className="font-semibold text-cyan-300">2021-06-10 (PS5)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#0c1821] transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-[#5c7e82] font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🎯</span> 游戏类型
                                 </span>
                                 <span className="font-semibold text-cyan-300">动作角色扮演 (ARPG)</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#0c1821] transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-[#5c7e82] font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🕹️</span> 对应平台
                                 </span>
                                 <span className="font-semibold text-cyan-300">PS5 / PS4 / PC</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#0c1821] transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-[#5c7e82] font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">👥</span> 游玩人数
                                 </span>
                                 <span className="font-semibold text-cyan-300">1人</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#0c1821] transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-[#5c7e82] font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">💰</span> 参考价格
                                 </span>
                                 <span className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] text-base">HK$ 468.00</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#0c1821] transition-colors border-b border-gray-50/50 last:border-0">
                                 <span className="text-[#5c7e82] font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">🌐</span> 语言支持
                                 </span>
                                 <span className="font-semibold text-cyan-300 text-right max-w-[50%] leading-tight">简繁中字 / 英语日语音</span>
                               </div>
                               <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#0c1821] transition-colors last:border-0">
                                 <span className="text-[#5c7e82] font-medium flex items-center gap-2.5 text-sm">
                                   <span className="w-5 text-center">⭐</span> 年龄分级
                                 </span>
                                 <div className="flex items-center gap-2">
                                   <span className="px-1.5 py-0.5 border border-gray-300 rounded text-[10px] font-bold text-[#5c7e82]">ESRB T</span>
                                   <span className="font-semibold text-cyan-300">15+</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                      </div>

                     <h2 className="text-2xl mt-8 mb-6 flex items-center gap-2 group cursor-pointer text-[#e0f7fa]">
                        <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 w-6 text-center font-normal">#</span>
                        📖 游戏简介
                     </h2>
                     <p className="lead text-[17px] text-cyan-100 leading-relaxed mb-8">
                       《最终幻想7 重制版》(Final Fantasy VII Remake) 是由史克威尔艾尼克斯开发并发行的动作角色扮演游戏，是对1997年经典游戏《最终幻想VII》的完全重制。故事发生在赛博朋克风格的米德加市，克劳德·斯特莱夫——一名前神罗战士转行的雇佣兵——加入了生态恐怖组织“雪崩”，对抗榨取星球生命作为能源的巨型企业“神罗”。
                       <br/><br/>
                       游戏在保留原作经典元素的同时，引入了实时动作结合ATB指令的全新战斗系统，并极大地扩展了米德加篇章的故事深度。PS5版《最终幻想7 重制版 INTERgrade》进一步提升了画面表现，并加入了以尤菲为主角的全新DLC章节。
                     </p>

                     <h2 className="text-2xl mt-12 mb-6 group cursor-pointer text-[#e0f7fa]">
                        <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎯 核心特色
                     </h2>
                     <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32]">
                          <h4 className="font-bold text-lg mb-2 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">全新战斗系统</h4>
                          <p className="text-sm text-[#7ea1a6] m-0">
                            完美融合了即时动作与经典的 ATB（活动时间战斗）指令系统，玩家可以在快节奏的战斗中随时暂停下达策略指令。
                          </p>
                        </div>
                        <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32]">
                          <h4 className="font-bold text-lg mb-2 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">米德加深度扩充</h4>
                          <p className="text-sm text-[#7ea1a6] m-0">
                            将原作初期的米德加部分扩展为一部完整的游戏，更深入地刻画了角色之间的羁绊与这座赛博朋克城市的社会阶层。
                          </p>
                        </div>
                        <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32]">
                          <h4 className="font-bold text-lg mb-2 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">INTERgrade 升级</h4>
                          <p className="text-sm text-[#7ea1a6] m-0">
                            PS5版带来了光线追踪、60帧性能模式、极速加载，以及专属的“尤菲篇”DLC，补全了更多剧情细节。
                          </p>
                        </div>
                     </div>

                     <h2 className="text-2xl mt-12 mb-6 group cursor-pointer text-[#e0f7fa] flex items-center gap-2">
                        <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        <span className="text-2xl">🏆</span> 媒体评分
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#bf1313] text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-90">IGN</span>
                          <span className="text-5xl font-black mb-4">8<span className="text-2xl opacity-70">/10</span></span>
                          <p className="text-xs leading-relaxed opacity-90">"战斗系统非常惊艳，角色塑造比以往任何时候都更加生动。"</p>
                        </div>
                        <div className="bg-[#ffcc00] text-[#e0f7fa] p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-70">GameSpot</span>
                          <span className="text-5xl font-black mb-4">10<span className="text-2xl opacity-50">/10</span></span>
                          <p className="text-xs leading-relaxed opacity-80">"一部令人惊叹的现代RPG，超越了人们对重制版的期待。"</p>
                        </div>
                        <div className="bg-[#333333] text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                          <span className="font-bold text-lg mb-2 opacity-90">Metacritic</span>
                          <span className="text-5xl font-black mb-4 bg-green-600 px-3 py-1 rounded">89</span>
                          <p className="text-xs leading-relaxed opacity-90">"重制的标杆，既尊重原作又带来了大胆的创新。"</p>
                        </div>
                     </div>

                     <h2 className="text-2xl mt-12 mb-6 group cursor-pointer text-[#e0f7fa]">
                        <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                        🎬 官方游戏截图
                     </h2>
                     <div className="space-y-8 mb-10">
                        <figure>
                          <img src={ff7rCover} alt="Final Fantasy 7 Remake Gameplay" className="w-full rounded-lg shadow-md" />
                          <figcaption className="text-center text-sm text-gray-400 mt-2">克劳德与神罗的对决 | 来源: Square Enix 官方</figcaption>
                        </figure>

                     </div>

                     
                     <div className="text-xs text-gray-400 border-t border-[#112a32] pt-4">
                       📌 数据更新于：2026-04-11 | 以上信息汇总自 PlayStation 官网及多家权威媒体，请以官方最新公告为准。
                     </div>
                   </div>
                   
                  <h2 id="section-1" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     一、如何使用本攻略
                  </h2>
                  <p>
                    欢迎来到《最终幻想7 重制版》完整图文攻略。以下是本攻略的阅读指南：
                  </p>
                  
                  <div className="space-y-6 my-8">
                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                       <h4 className="text-lg font-bold mb-2 text-cyan-300 flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                         核心任务 (Essential tasks)
                       </h4>
                       <p className="text-[#7ea1a6] leading-relaxed m-0 text-sm">
                         包含导航、收集品和特定操作，将以列表形式呈现。务必仔细阅读并遵循，它们为你提供每个游戏阶段的"按图索骥"式计划。
                       </p>
                    </div>

                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                       <h4 className="text-lg font-bold mb-2 text-cyan-300 flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                         剧情叙事 (Narrative)
                       </h4>
                       <p className="text-[#7ea1a6] leading-relaxed m-0 text-sm">
                         解释操作原因等内容将以段落形式呈现。大部分较为简短，为重点信息提供背景。建议在一周目时仔细阅读，后续由你自行决定。
                       </p>
                    </div>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                       <h4 className="text-lg font-bold mb-2 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2">
                         <span>💡</span> 深度解析 (Deeper analysis)
                       </h4>
                       <p className="text-[#a5c3c7] leading-relaxed m-0 text-sm">
                         涵盖游戏机制、通用建议和迷你游戏规则，通常在此类提示框中显示。根据需要使用，但如果你想尽可能多地了解游戏，建议至少阅读一次。了解机制越多，越能制定更好的策略。
                       </p>
                    </div>
                  </div>

                  <h2 id="section-2" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     二、第一章：壹号魔晄炉的毁灭
                  </h2>
                  <p>
                    终于，是时候开始我们的第一次游戏通关之旅了。
                  </p>

                  <h3 id="section-2-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg border border-[#112a32] mb-8">
                    <ul className="space-y-3 text-[#a5c3c7] text-[15px] m-0 pl-4">
                      <li>第一章不包含直接与奖杯相关的物品，因此我们将重点放在熟悉游戏上。</li>
                      <li>仔细阅读游戏提供的教程，并尝试练习介绍的技巧。</li>
                      <li>学会使用地图，花时间仔细探索周围环境，寻找包含过关所需物品的宝箱。</li>
                      <li>养成打破你看到的每一个神罗箱子的习惯，以获取额外物品。</li>
                      <li><strong>关于难度：</strong>你需要选择一个难度级别，建议在 <strong>普通模式 (Normal Mode)</strong> 下游玩。如果你想获得所有奖杯，最终必须在困难模式 (Hard Mode) 下通关。普通模式比简单模式 (Easy Mode) 能更好地为你准备困难模式。</li>
                    </ul>
                  </div>

                  <h3 id="section-2-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.2 本章物品收集指南</h3>
                  <p>
                    在本攻略的前两章中，我会提醒你注意许多可收集的物品。然而，为了让你有机会自己发现它们，我会尽量避免描述它们的具体位置。
                  </p>
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-4 rounded border border-[#1a3a40] shadow-sm hover:border-gray-300 transition-colors my-4">
                    <p className="m-0 text-[#7ea1a6] text-sm">如果你在寻找物品时遇到困难，我在页面底部插入了一些显示这些物品位置的地图。建议仅将这些地图作为最后手段。</p>
                  </div>
                  <p className="text-sm text-[#5c7e82] italic">
                    注意：这些地图可能并未显示本章中所有物品的位置。可能还有其他物品需要你自己去寻找。
                  </p>

                  <h3 id="section-2-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.3 战斗系统基础</h3>
                  <p>
                    假设你之前没有玩过这款游戏，这里是战斗基础的概述：
                  </p>
                  <div className="space-y-4 my-6">
                    <div className="flex gap-3">
                      <div className="mt-1 min-w-[16px] flex justify-center"><div className="w-2 h-2 rounded-full bg-[#00f0ff] mt-1.5 ring-2 ring-[#00f0ff]/30"></div></div>
                      <div>
                        <h5 className="text-cyan-300 font-bold text-[15px] mb-1">单角色战斗</h5>
                        <p className="text-[#7ea1a6] text-[15px] leading-relaxed m-0">当你只有一个角色时，通常的模式是先用 <strong>方块键 (Square)</strong> 攻击，以填满屏幕右下角的 ATB 槽。一旦你的 ATB 槽至少填满一半，就可以消耗它来使用能力 (Ability)、施放魔法 (Spell) 或使用物品 (Item)，然后重复此过程。</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="mt-1 min-w-[16px] flex justify-center"><div className="w-2 h-2 rounded-full bg-[#00f0ff] mt-1.5 ring-2 ring-[#00f0ff]/30"></div></div>
                      <div>
                        <h5 className="text-cyan-300 font-bold text-[15px] mb-1">攻击逻辑</h5>
                        <p className="text-[#7ea1a6] text-[15px] leading-relaxed m-0">基础攻击通常造成的伤害极小，而能力 (Abilities) 可以造成相当大的伤害。</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="mt-1 min-w-[16px] flex justify-center"><div className="w-2 h-2 rounded-full bg-[#00f0ff] mt-1.5 ring-2 ring-[#00f0ff]/30"></div></div>
                      <div>
                        <h5 className="text-cyan-300 font-bold text-[15px] mb-1">主动治疗</h5>
                        <p className="text-[#7ea1a6] text-[15px] leading-relaxed m-0">注意，你通常无法在战斗开始时就治疗或施放魔法，因为你缺乏 ATB。因此，你必须特别主动地进行治疗，以免在需要治疗时却没有 ATB。</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="mt-1 min-w-[16px] flex justify-center"><div className="w-2 h-2 rounded-full bg-[#00f0ff] mt-1.5 ring-2 ring-[#00f0ff]/30"></div></div>
                      <div>
                        <h5 className="text-cyan-300 font-bold text-[15px] mb-1">多角色战斗</h5>
                        <p className="text-[#7ea1a6] text-[15px] leading-relaxed m-0">当你有多个角色时，模式如上所述，但一旦你消耗了 ATB 槽，立即切换到另一个角色，填满他们的 ATB 槽并使用它。</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="mt-1 min-w-[16px] flex justify-center"><div className="w-2 h-2 rounded-full bg-[#00f0ff] mt-1.5 ring-2 ring-[#00f0ff]/30"></div></div>
                      <div>
                        <h5 className="text-cyan-300 font-bold text-[15px] mb-1">防打断机制</h5>
                        <p className="text-[#7ea1a6] text-[15px] leading-relaxed m-0">如果你在输入消耗 ATB 的指令和实际执行该动作之间受到攻击，你的行动可能会被打断。如果发生这种情况，你会失去 ATB，如果是施放魔法，你还会失去打算消耗的 MP。因此，在消耗 ATB 之前，请尽量确保相对安全。</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="mt-1 min-w-[16px] flex justify-center"><div className="w-2 h-2 rounded-full bg-[#00f0ff] mt-1.5 ring-2 ring-[#00f0ff]/30"></div></div>
                      <div>
                        <h5 className="text-cyan-300 font-bold text-[15px] mb-1">仇恨机制</h5>
                        <p className="text-[#7ea1a6] text-[15px] leading-relaxed m-0">敌人倾向于将攻击集中在你控制的角色身上。让敌人措手不及的最佳方法之一是频繁切换你控制的角色。</p>
                      </div>
                    </div>
                  </div>

                  <h3 id="section-2-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.4 克劳德战斗基础</h3>
                  <p>
                    这里是克劳德基础攻击的快速概述。很多信息在游戏内教程中没有明确说明。
                    克劳德有两种攻击模式：<strong>普通模式 (Operator Mode)</strong>（默认）和 <strong>勇穴模式 (Punisher Mode)</strong>。你可以按 <strong>三角键 (Triangle)</strong> 在两种模式之间切换。
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                      <h4 className="text-lg font-bold text-[#00f0ff] mb-4 border-b border-[#112a32] pb-2">⚔️ 普通模式 (Operator Mode)</h4>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4">
                        <li>克劳德可以自由移动。</li>
                        <li>连续按 <strong>方块键</strong> 最多 5 次，将执行一系列基础攻击。</li>
                        <li>如果按住 <strong>方块键</strong>，克劳德将执行一个圆形的 AOE（范围）攻击。继续按住将使他执行第二次 AOE 攻击。</li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                      <h4 className="text-lg font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 border-b border-[#112a32] pb-2">🔥 勇穴模式 (Punisher Mode)</h4>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4">
                        <li>采取更具防御性的姿态，移动非常缓慢。通常在靠近目标时使用。</li>
                        <li>攻击速度更快，从而更快地积累 ATB 槽。</li>
                        <li>可以通过再次按 <strong>三角键</strong> 或按 <strong>圆圈键</strong> 执行闪避翻滚来退出该模式。</li>
                        <li>连续按 <strong>方块键</strong> 最多 3 次，将执行一系列基础攻击。</li>
                        <li>按住 <strong>方块键</strong>，克劳德将短暂（约10秒）处于 <strong>狂暴 (Berserked)</strong> 状态，受到的伤害增加，但造成的伤害也大幅增加。</li>
                        <li>按住 <strong>R1 (格挡)</strong> 键，将 <strong>招架 (Parry)</strong> 下一次近战攻击，减伤 60% 并大幅增加敌人力竭值。无法招架魔法或远程攻击。</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold mb-3 text-cyan-300">克劳德的初始特殊攻击</h4>
                  <p className="mb-4 text-[15px] text-[#a5c3c7]">克劳德游戏开始时拥有 2 个特殊攻击，每个消耗一格 ATB 槽：</p>
                  
                  <div className="space-y-4 mb-10">
                    <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-4 rounded border border-[#112a32]">
                      <strong className="text-cyan-300 block mb-1">奋力一击 (Braver)</strong>
                      <p className="m-0 text-[#7ea1a6] text-sm">两者中较强的一个。蓄力时间较长，但对目标敌人及其周围有限的 AOE 造成显著伤害。</p>
                    </div>
                    <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-4 rounded border border-[#112a32]">
                      <strong className="text-cyan-300 block mb-1">突刺 (Focused Thrust)</strong>
                      <p className="m-0 text-[#7ea1a6] text-sm">伤害较低，但可以大幅增加敌人的力竭值 (Stagger)，特别是当敌人处于“陷危 (Pressured)”状态时。对付强敌的标准策略是使其进入陷危状态，然后用尽可能多的突刺攻击使其达到完全力竭。</p>
                    </div>
                  </div>

                  <h3 id="section-2-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.5 陷危机制 (Pressuring Enemies)</h3>
                  <p>
                    正如上文所述，处于“陷危”状态的敌人极其脆弱。你可以非常快速地提升陷危敌人的力竭槽 (Stagger gauge)，通常敌人会被击晕，任由你攻击。因此，一个常见的策略是：<strong>陷危 -{">"} 力竭 -{">"} 疯狂输出</strong>。
                  </p>
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3">如何使敌人陷入“陷危”状态？</h4>
                    <p className="text-[15px] text-[#a5c3c7] mb-3">虽然没有简单的答案，且陷危条件因敌人而异，但以下是一些常见的触发动作：</p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4">
                      <li>使用敌人弱点的元素魔法攻击。例如，像“肮脏盗贼 (Grungy Bandit)”这样的人类敌人很容易被火属性魔法陷危。</li>
                      <li>格挡、闪避或以其他方式打断敌人的攻击。例如，克劳德的“招架 (Parry)”在陷危方面非常有效。</li>
                      <li>某些 ATB 能力，如蒂法的“星之雨 (Starshower)”，可以增加陷危。</li>
                      <li>有些敌人只要其 HP 降低到一定程度就会陷入陷危状态。</li>
                    </ul>
                  </div>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-4 rounded border-l-4 border-[#00f0ff] text-[#a5c3c7] text-sm my-4">
                    <strong>重要提示：</strong> 敌人通常只会在陷危状态停留几秒钟，因此请务必留意屏幕上的“陷危 (Pressured)”提示。一旦看到它，立即使用能增加力竭的魔法或攻击打击敌人。
                  </div>

                  <h3 id="section-2-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.6 物理攻击 vs 魔法攻击</h3>
                  <p>
                    在 RPG 中，通常的趋势是严重依赖物理攻击，以便节省魔法值 (MP) 用于治疗和特殊情况。在《最终幻想7 重制版》中，MP 绝对是非常宝贵的资源，这似乎证明了上述默认策略是合理的。
                  </p>
                  <p>
                    许多敌人对魔法有较强抗性，但对物理攻击较弱，此时近战攻击是你的首选策略。然而，<strong>许多敌人具有相对较高的物理防御和较低的魔法防御</strong>，这意味着魔法攻击能更快造成更多伤害，并在很多情况下能立即陷危甚至击败敌人。因此，选择消耗 ATB 进行哪种类型的攻击需要视情况而定。
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                      <h4 className="text-lg font-bold text-[#00f0ff] mb-2">🛡️ 保守策略：节省 MP</h4>
                      <p className="text-[14px] text-[#a5c3c7] m-0">如果你严重依赖物理攻击，战斗往往会持续更长时间，从而需要更多的治疗（消耗MP）。</p>
                    </div>
                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                      <h4 className="text-lg font-bold text-[#b088ff] mb-2">⚡ 积极策略：魔法速攻</h4>
                      <p className="text-[14px] text-[#a5c3c7] m-0">如果你花费一些 MP 进行攻击，战斗可能会更快结束，治疗的需求也会减少。长远来看，对强敌施放一两个法术实际上可以为你节省 MP。</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 relative overflow-hidden my-6">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="text-lg font-bold mb-2 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2">
                      <span>💡</span> 战斗资源管理建议
                    </h4>
                    <p className="text-[#a5c3c7] leading-relaxed m-0 text-[15px]">
                      对于大多数普通战斗，目前严重依赖物理攻击是完全可以的。随着游戏推进，建议你尝试寻找两种攻击类型的最佳平衡点：<strong>尝试比平时稍微多使用一点魔法攻击</strong>。
                      你会发现你的 MP 储备比预期的要耐用得多。许多神罗箱子包含 <strong>魔晄碎片 (Mako Shards)</strong>，每个都能恢复全队 10% 的 MP。在进入困难模式之前，长椅（通常在 Boss 战前）会恢复所有 MP。充分利用这些资源。
                    </p>
                  </div>

                  <h3 id="section-2-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.7 元素弱点与战斗报告</h3>
                  <p>
                    大多数敌人对特定类型的魔法有天生的弱点。用敌人弱点的魔法攻击会造成可观的伤害。
                  </p>
                  
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="font-bold text-cyan-300 mb-4 border-b border-[#112a32] pb-2">常见的元素弱点规律：</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>👤 <strong>人类敌人</strong> 通常弱 <strong>火 (Fire)</strong></li>
                      <li>🐺 <strong>野兽敌人</strong> 通常弱 <strong>冰 (Ice)</strong></li>
                      <li>🤖 <strong>机械敌人</strong> 通常弱 <strong>雷 (Lightning)</strong></li>
                      <li>🦅 <strong>飞行敌人</strong> 通常弱 <strong>风 (Wind)</strong></li>
                    </ul>
                    <p className="text-sm text-[#5c7e82] mt-4 italic">
                      当然也有例外，例如路德 (Rude) 虽是人类且不会飞，但他弱风。如果不确定，可以随时使用 <strong>“洞察 (Assess)”</strong> 技能查看弱点。
                    </p>
                  </div>

                  <p>
                    <strong>现在就开始</strong>用敌人弱点的魔法攻击他们。这样做有助于完成“战斗情报报告 (Battle Intel Reports)”，从而获得新型魔晶石 (Materia)。
                  </p>
                  <p className="mb-8">
                    目前，克劳德拥有 <strong>火之魔晶石</strong>，所以当对抗人类敌人时，只要他有 ATB，就让他施放火焰魔法。巴雷特即将加入队伍，他装备了 <strong>雷之魔晶石</strong>，让他使用 ATB 对你遇到的任何机甲施放雷电魔法。
                  </p>

                  <h3 id="section-2-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.8 武器升级与对比</h3>
                  <p>
                    随着游戏的进行，你可以升级武器以增加属性、魔晶石槽位，并获得新能力和增益。
                  </p>
                  
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                      克劳德的初始武器：破坏剑 (Buster Sword)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      克劳德游戏开始时装备的是破坏剑。它的物理攻击和魔法攻击属性非常接近，使你可以将他作为物理攻击者和法系角色使用。破坏剑的基础物理伤害仅次于“破甲大剑 (Hardedge)”，但它的魔法加成要高得多。升级将为克劳德增加 800 HP，可以说是他最平衡和多才多艺的武器。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] m-0">
                      <strong>武器技能：</strong> 突刺 (Focused Thrust)
                    </p>
                  </div>

                  <h3 id="section-2-9" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.9 本章流程：潜入魔晄炉</h3>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：进入魔晄炉区域 (Enter the Reactor Grounds)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>沿着火车出来的线性路径穿过前几个区域。仔细阅读每个教程，并边走边练习。</li>
                      <li><strong>地图提示：</strong> 获得地图后，按 <strong>L2</strong> 在主屏幕上调出小地图，这会使导航容易得多。按 <strong>方向键下 (Down)</strong> 可以查看“连接通道 (Connecting Passage)”，了解不同楼层的目标。</li>
                      <li>虽然音乐和队友给人一种紧迫感，但<strong>不要着急</strong>。花时间探索并练习教程中的技巧。</li>
                      <li>在楼梯顶部有一个 <strong>宝箱 (1)</strong>。在继续前进之前，在这个区域（Station 2F）找到另一个包含 2 个手榴弹的 <strong>宝箱 (2)</strong>。</li>
                      <li>前往你的队伍试图开门的地方。你会经过一堆神罗箱子 (3)，用剑砸碎它们可以获得 <strong>药水 (Potion)</strong> 和 <strong>莫古力奖牌 (Moogle Medal)</strong>。</li>
                    </ul>
                  </div>

                  <h3 id="section-2-10" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.10 锁定敌人技巧</h3>
                  <p>
                    你将获得一个关于使用 <strong>R3</strong> 锁定敌人的教程。一旦锁定，按下右摇杆的左或右，可以在可用敌人之间进行选择。
                  </p>
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3">🎯 锁定敌人 (Locking On to an Enemy)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      学会锁定敌人让战斗变得轻松很多。不再是每个角色都在打离他们最近的敌人（或者更糟的是，因为附近没有敌人而攻击空气），<strong>R3</strong> 让他们都能集中攻击指定的共同敌人。特别是在敌人众多的战斗中，这能迅速削减他们的数量，从而使战斗更容易控制。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      作为额外的好处，如果一个角色离你锁定的敌人很远，你不需要浪费时间让那个角色跑过去。只要开始攻击，你的角色就会非常快地冲向敌人。因此，<strong>养成在每次战斗开始时按下 R3 的习惯</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      不幸的是，当敌人传送（消失然后重新出现）时，你会失去对该目标的锁定，需要再次锁定。在与利维坦 (Leviathan) 这样难缠的敌人战斗时，这尤其令人烦恼，但你只需要学会应对它。
                    </p>
                  </div>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-4 rounded border-l-4 border-[#00f0ff] text-[#a5c3c7] text-sm my-4">
                    <strong>提示：</strong> 有时候你会希望你的团队的不同成员瞄准不同的敌人。在这种情况下，锁定目标通常不是一个好主意。
                  </div>

                  <h3 id="section-2-11" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.11 收集与探索</h3>
                  <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 mb-6">
                    <li>检查你的地图。看到存储区 (Storage Area) 那个指向北方的死胡同了吗？这是寻找物品的常见地方。在这里你会找到一个包含 <strong>以太 (Ether)</strong> 的 <strong>宝箱 (4)</strong>。</li>
                    <li>就在你上电梯的东北方，你会找到一些可以恢复 MP 的 <strong>神罗箱子 (5)</strong>。</li>
                    <li>下楼梯后，在穿过栅栏上的洞之前，你会找到另外两堆可以砸碎的 <strong>神罗箱子 (6) 和 (7)</strong>。</li>
                    <li>在闸门通道 (Gate Passageway) 区域，有一个你几乎会被绊倒的 <strong>宝箱 (8)</strong>。它包含 <strong>2个药水 (Potions)</strong>。</li>
                  </ul>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：突破安保 (Breach Security)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>在前门 (Front Gate) 区域，你会找到一个包含 <strong>凤凰尾巴 (Phoenix Down)</strong> 的 <strong>宝箱 (9)</strong> 和一些 <strong>神罗箱子 (10)</strong>。</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：前往魔晄炉储存区 (Reach Mako Storage)</h4>
                    <p className="text-[15px] text-[#a5c3c7] m-0">在这里的某个地方，巴雷特 (Barret) 加入了队伍，所以让我们花点时间看看他的攻击选项。</p>
                  </div>

                  <h3 id="section-2-12" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.12 巴雷特战斗基础</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                      <h4 className="text-lg font-bold text-[#00f0ff] mb-4 border-b border-[#112a32] pb-2">🔫 巴雷特的战斗基础</h4>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4">
                        <li>按住 <strong>方块键</strong>，巴雷特将释放一系列基础射击，最后一次射击比其他射击更强大。</li>
                        <li>巴雷特可以在射击时移动。</li>
                        <li>他还有一个更强大的攻击 <strong>猛烈枪击 (Overcharge)</strong>，这也会显著增加敌人的力竭值。</li>
                        <li>猛烈枪击通过按住 <strong>三角键</strong> 执行，但它并不总是可用的。它有一个计量表，在每次战斗开始时完全充满，但之后必须重新充能才能再次使用。</li>
                        <li><strong>通常的连招顺序是：</strong> 首先，按住方块键执行常规的普通射击。在最后那次更强大的射击之后，按下三角键来提升猛烈枪击计量表。重复这个模式直到计量表再次充满，然后重复整个过程。</li>
                        <li>如果目标敌人在猛烈枪击序列完成之前死亡，猛烈枪击将<strong>自动切换目标</strong>。这非常好，因为它帮助你充分利用这种强大的攻击。</li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                      <h4 className="text-lg font-bold text-[#b088ff] mb-4 border-b border-[#112a32] pb-2">🛠️ 武器能力与初始武器</h4>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4">
                        <li>像克劳德一样，巴雷特在游戏开始时有 2 个武器能力。</li>
                        <li><strong>坚忍不拔 (Steelskin)</strong>：这是一个消耗一格 ATB 的防御增益。它将巴雷特受到的所有伤害降低 30%，并且具有减少敌人攻击将他击退并打断其行动的可能性的重要属性。</li>
                        <li><strong>爆燃射击 (Focused Shot)</strong>：类似于克劳德的突刺，它显著增加敌人的力竭值。坏消息是它消耗巴雷特所有的 ATB。好消息是，它的威力随着可用于执行它的 ATB 数量的增加而增加。主要在敌人处于“陷危”状态时使用，以增加他们的力竭值。</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                      巴雷特的加特林机枪 (Gatling Gun)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      巴雷特的第一把武器是加特林机枪。就像克劳德的破坏剑一样，这把武器为巴雷特提供了近乎完美的物理和魔法攻击力平衡。在他的远程武器中，其物理攻击力仅次于巨炮 (Big Bertha)，并且它的升级将为巴雷特提供令人印象深刻的 950 HP 增益。除了防御和魔法防御的轻微升级外，加特林机枪最终将提供一个将巴雷特猛烈枪击能力造成的伤害增加 10% 的升级。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] m-0">
                      从长远来看，由于其增强的攻击属性，你可能会更喜欢巨炮，但在你获得那把武器之前，加特林机枪是一个不错的选择。
                    </p>
                  </div>
                  
                  <p>
                    你现在有 2 名活跃的团队成员。在让巴雷特攻击 <strong>守卫光线 (Sentry Rays)</strong> 和让克劳德攻击 <strong>单眼射击机 (Monodrives)</strong> 之间来回切换。
                  </p>

                  <h3 id="section-2-13" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.13 推进与中Boss战：清道夫</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：跟随杰西 (Follow Jessie)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>穿过第三组激光后，砸碎一些神罗箱子。它们就在你面前。</li>
                      <li>在最后一道激光之后，有一个包含 <strong>2个药水</strong> 的宝箱。同样，你绝对不会错过这个。</li>
                      <li>在前进与清道夫战斗之前，回头看看角落里，有一个包含 <strong>以太 (Ether)</strong> 的 <strong>宝箱 (11)</strong>。</li>
                    </ul>
                  </div>

                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                      🤖 中Boss：清道夫 (Sweeper)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      清道夫是你遇到的第一个中Boss。它的魔法防御 (4) 远低于它的物理防御 (20)。由于清道夫是一台机甲，它<strong>弱雷属性 (Thunder)</strong>，而幸运的是，巴雷特配备了雷霆魔晶石。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] m-0">
                      所以当巴雷特获得一些 ATB 时，尝试对清道夫施放雷霆法术，看看它有多有效。不用担心耗尽你的魔法。在即将到来的 Boss 战之前，前面有一些魔晄碎片可以补充它。
                    </p>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：设置炸药 (Set the Charge)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li><strong>实用提示：</strong> 下梯子时，你可以通过按住 <strong>R1</strong> 快速滑下来加快下降速度。</li>
                      <li>打开主菜单，选择“战斗设置 (Battle Settings)”和“克劳德”。请注意，某些常见操作有快捷键。例如，<strong>L1 + 三角键</strong> 将执行突刺，而无需通过战斗菜单。这在战斗情况变得狂热时会很有帮助。</li>
                      <li>在第一个梯子的底部，你会发现一些包含药水和魔晄碎片的神罗箱子。</li>
                      <li>在 B5 层，你会看到正前方有一个包含凤凰尾巴的宝箱。紧接着是一些带有魔晄碎片的神罗箱子。</li>
                      <li>在 B7 层，就在你需要下去的梯子前面，你会看到一些单眼射击机在保护一个宝箱和一些神罗箱子。这是一场相当简单的战斗，可以获得一个以太和一些魔晄碎片，所以我建议与它们交战。</li>
                      <li>当设置计时器时，选择 <strong>20分钟</strong>。你将有充足的时间，并且选择较短的时间会获得一些适度的奖励。忽略巴雷特的评论。克劳德并不自大。他只是自信。</li>
                    </ul>
                  </div>

                  <h3 id="section-2-14" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.14 守卫巨蝎 Boss战</h3>
                  <p>
                    你的第一个 Boss 是 <strong>守卫巨蝎 (Scorpion Sentinel)</strong>。密切关注克劳德和巴雷特之间的讨论。他们会为你提供击败这个丑陋怪物的具体细节。
                  </p>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2 text-lg">
                       <span>🦂</span> Boss 战：守卫巨蝎 (Scorpion Sentinel)
                    </h4>
                    
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-bold text-cyan-300 mb-2">基础须知：</h5>
                        <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4">
                          <li>守卫巨蝎的防御力为 57，但其魔法防御力只有 11。因此，你可以<strong>用魔法更快地造成伤害</strong>。</li>
                          <li>当敌人的特定部位成为可用目标时（在这种情况下，是它的<strong>护盾发生器 (Field Generator)</strong> 和<strong>腿部 (Legs)</strong>），通常快速猛烈地攻击那个部位是个好主意。</li>
                          <li>一旦克劳德就位开始攻击，他的<strong>勇穴模式 (Punisher Mode)</strong> 将比普通模式更快地造成更多伤害，特别是当他完成一整套攻击循环并进入狂暴状态时。</li>
                          <li>当一个角色使敌人陷入“力竭 (Stagger)”状态时，他的<strong>极限爆发 (Limit Break)</strong> 计量表会显著增加（约 30%）。因此，每次让一个角色去触发力竭（希望能获得极限爆发）通常比两个角色的计量表都只有一半要好。</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-bold text-cyan-300 mb-2">基本攻击计划：</h5>
                        <ol className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                          <li>立即将克劳德置于<strong>勇穴模式 (三角键)</strong> 并让他防御 <strong>(R1键)</strong>，这样他受到的伤害会减少，并且会招架 Boss 的初始攻击。</li>
                          <li>让巴雷特释放<strong>猛烈枪击 (三角键)</strong> 来填满一格 ATB，然后切换回克劳德。</li>
                          <li>让克劳德在勇穴模式下进行一整套攻击。当他达到狂暴状态时，让他对 Boss 施放<strong>火属性法术 (Fire spell)</strong>。</li>
                          <li>如果 Boss 没有陷入“陷危 (Pressured)”，让巴雷特施放<strong>雷属性法术 (Thunder spell)</strong>，这应该就能达到目的。</li>
                          <li>让巴雷特和克劳德交替攻击（以填满 ATB），然后使用爆燃射击或突刺来使敌人<strong>力竭 (Stagger)</strong>。如果可能的话，让克劳德执行最后那次触发力竭的攻击，这样他就能获得极限爆发增益。</li>
                          <li>过场动画之后，你的团队将远离 Boss，而它将使自己免疫物理攻击和雷属性攻击。你需要破坏<strong>护盾发生器 (Field Generator)</strong>，但它在 Boss 的背面。让克劳德在普通模式下，<strong>锁定 Boss (R3键)</strong> 并攻击。他向目标移动的速度应该比跑过去快得多。</li>
                          <li>将克劳德移动到敌人的后方，切换到勇穴模式，攻击护盾发生器直到狂暴，并对巨蝎的背部施放火属性法术，这也应该击中护盾发生器。这应该会摧毁护盾发生器并使敌人陷入陷危，它会跳到墙上。</li>
                          <li>让巴雷特用爆燃射击打它，它应该会掉下来。让克劳德再次使它力竭，他的极限爆发计量表应该几乎满了。</li>
                          <li>当 Boss 为其<strong>尾部激光 (Tail Laser)</strong> 蓄力时，在碎片后面寻找掩护。然后出来继续攻击巨蝎，直到它的<strong>腿部 (Legs)</strong> 成为目标。</li>
                          <li>一次解决一条腿，最后终结守卫巨蝎。</li>
                        </ol>
                        <p className="text-[14px] text-[#5c7e82] mt-4 italic">如果你不能让战斗完全按照上面描述的那样进行，没关系。只需遵循基本概念，你就会获胜。</p>
                      </div>
                    </div>
                  </div>

                  <h3 id="section-2-15" className="text-xl mt-8 mb-4 font-bold text-cyan-100">2.15 逃离魔晄炉</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：逃离魔晄炉 (Escape From the Reactor)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>计时器其实不是问题，因为它经常停止，你有充足的时间逃跑。杰西会给你指明正确的出路——大概吧。</li>
                      <li>在出去的路上，另一个清道夫会跳到你面前。这是这个游戏中极少数你可以避开的战斗之一。绕过它跑上楼梯。你<strong>确实</strong>必须击败你和电梯之间的其他敌人，但他们不应该减慢你太多速度。</li>
                      <li>跳上电梯，救出杰西，然后用克劳德的跳跃能力给她留下深刻印象。</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-500 text-green-800 text-[15px] font-medium my-6 flex items-center gap-2">
                    <span>🏆</span> 恭喜！完成第一章，你将获得一个参与奖杯。
                  </div>

                  <h2 id="section-3" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     三、第二章：八番街的相遇
                  </h2>

                  <h3 id="section-3-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">3.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg border border-[#112a32] mb-8">
                    <ul className="space-y-3 text-[#a5c3c7] text-[15px] m-0 pl-4">
                      <li>克劳德在这一章中独自行动，所以要特别注意<strong>保持他的生命值</strong>。</li>
                      <li>和第一章一样，第二章也不包含与获取奖杯直接相关的物品。</li>
                      <li>不过，这里可以找到一些优质物品，因此利用这一章来<strong>磨练你的搜索技巧</strong>。搜索每个区域的每个角落，并使用地图寻找以前未探索的区域去查看。</li>
                      <li>致力于发展你的基本战斗技能，并学习一两个新技能。</li>
                      <li>我将引导你完成这里的大部分导航，不仅告诉你该去哪里，还会解释为什么要这样做，以便你在这之后能够自己找到路。</li>
                    </ul>
                  </div>

                  <h3 id="section-3-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">3.2 元素弱点提醒</h3>
                  <p>
                    第二章是继续利用敌人元素弱点的好地方，可以为战斗情报报告 2 和 7 (Battle Intel Reports 2 and 7) 开个好头。这里有很多<strong>人类敌人</strong>，所以用克劳德的<strong>火属性魔法 (Fire magic)</strong> 攻击他们以造成巨大伤害，并为完成这些报告积累进度。
                  </p>

                  <h3 id="section-3-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">3.3 本章物品收集</h3>
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-4 rounded border border-[#1a3a40] shadow-sm hover:border-gray-300 transition-colors my-4">
                    <p className="m-0 text-[#7ea1a6] text-[15px]">
                      与第一章的情况一样，可收集物品将在我们推进时被标识出来，显示其位置的地图将出现在页面底部。祝你狩猎愉快！
                    </p>
                  </div>

                  <h3 id="section-3-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">3.4 本章流程：使用逃跑路线</h3>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：使用逃跑路线 (Use the Escape Route)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>看一会你的地图。我真的不知道在这里怎么会不确定该去哪里。</li>
                      <li>就在上楼梯之前，你会找到一个包含 <strong>以太 (Ether)</strong> 的 <strong>宝箱 (1)</strong>。</li>
                    </ul>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：到达八番街车站 (Reach the Sector 8 Station)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>杰西给了克劳德他的第二颗<strong>恢复魔晶石 (Healing Materia)</strong>（他本身装备了火之魔晶石）。看看教程——或者不看——但一定要装备这颗魔晶石。</li>
                      <li>再次检查你的地图。标记在西北方，所以向北前进，一路上检查是否有宝箱。你应该能找到一个包含 <strong>50 gil</strong> 的 <strong>宝箱 (2)</strong>。最终，杰西会给你指路。</li>
                      <li>在向上的路上，你会经过一个包含 <strong>3个手榴弹 (Grenades)</strong> 的 <strong>宝箱 (3)</strong>。在与带盾牌的敌人战斗时，手榴弹是火属性魔法的良好替代品。</li>
                    </ul>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：跟着他！(Follow Him!)</h4>
                    <p className="text-[15px] text-[#a5c3c7] m-0">
                      这是游戏中几个你必须极其缓慢移动的地方之一。你得习惯这个。
                    </p>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：绕道而行 (Taking a Detour)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>好吧——计划赶不上变化。向北的路线现在被封锁了。你唯一的选择是向西的路。上一些楼梯，上一个梯子，然后下一些楼梯。</li>
                      <li>在这条路径上的某个地方有另一个 <strong>宝箱 (4)</strong>。在你下那个最后的梯子之前拿走里面的东西。</li>
                      <li>向东南倾斜的街道有守卫，所以你不想去那里。事实上，游戏甚至不让你尝试，所以向西走去触发剧情。</li>
                    </ul>
                  </div>

                  <h3 id="section-3-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">3.5 躲避追捕者与收集品</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：躲避追捕者 (Evade Pursuers)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      如果你向南走到广场，你将被卷入一系列战斗中。<strong>在这样做之前，先探索该区域的其余部分。</strong>始终注意地图上你没去过的地方。它们通常包含物品。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在进入那个南部广场之前，你应该能够找到 <strong>4个物品</strong> 和一些包含魔晄碎片的神罗箱子。记住，你必须赢得一些战斗才能获得它们：
                    </p>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>一个有价值的 <strong>提升HP魔晶石 (HP Up Materia) (5)</strong>，你可以立即将其装备在你的破坏剑的第二个魔晶石槽中。</li>
                      <li>一个包含 <strong>高级药水 (Hi-Potion)</strong> 的 <strong>宝箱 (6)</strong>。</li>
                      <li>一颗 <strong>致命躲避魔晶石 (Deadly Dodge Materia) (7)</strong>。</li>
                      <li>一个包含一副 <strong>力量护腕 (Power Wristguards)</strong> 的 <strong>宝箱 (8)</strong>，你应该立即装备它。</li>
                    </ul>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mt-4">
                      一旦你拿到了这 4 个物品，准备好战斗，继续向南与几波敌人交战。
                    </p>
                  </div>

                  <h3 id="section-3-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">3.6 致命躲避魔晶石 (Deadly Dodge)</h3>
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-[#b088ff] mb-3">🔄 致命躲避机制解析</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      我不太使用这个特定的魔晶石，但有些人非常喜欢它。你可能想尝试一下，看看你的想法。
                    </p>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>如果装备了此魔晶石的角色成功<strong>躲避（圆圈键）</strong>了一次攻击，然后<strong>立即按下大方块键</strong>，产生的攻击将击中一个区域内的所有敌人（所谓的“AOE”攻击），而不仅仅是一个敌人。</li>
                      <li>当你被众多敌人包围时，这特别有效。</li>
                      <li>如果你靠近敌人但他们实际上并没有攻击你，产生的攻击将是普通的而不是 AOE。你必须<strong>真正避开一次攻击</strong>才能触发致命躲避。换句话说，你必须把握好时机才能获得这个特定魔晶石的效果。</li>
                    </ul>
                  </div>

                  <h3 id="section-3-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">3.7 突破封锁与带盾敌人</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：突破封锁 (Break the Blockade)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      不知道接下来该去哪里？寻找东南方有用的标记。在附近，你会找到一个包含 <strong>几个手榴弹</strong> 的 <strong>宝箱 (9)</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      这条路会引导你上 3 个梯子，然后再下 3 个，但在沿途，你应该经过一个包含 <strong>铁手镯 (Iron Bangle)</strong> 的 <strong>宝箱 (10)</strong>。立即装备它并利用它的魔晶石槽。
                    </p>
                  </div>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2 text-lg">
                       <span>🛡️</span> 对付带盾牌的敌人
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      带有盾牌的敌人（比如镇暴兵 Riot Trooper）通常会挡住你的物理攻击。通过攻击其他敌人来积累你的 ATB 槽，然后<strong>使用魔法技能</strong>来击倒带盾的敌人。或者，使用<strong>圆圈键</strong>翻滚过去，攻击他们脆弱的背部。
                    </p>
                  </div>

                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed my-6">
                    一旦你落到地面，路径就非常线性了。慢慢推进，击败敌人并沿途检查侧面区域，寻找宝箱和神罗箱子。你至少应该找到以下物品：
                  </p>
                  
                  <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 mb-8">
                    <li>一个包含 <strong>以太 (Ether)</strong> 的 <strong>宝箱 (11)</strong>。</li>
                    <li>一些你可能需要用来补充 MP 的 <strong>神罗箱子 (12)</strong>。</li>
                    <li>一个包含 <strong>高级药水 (Hi-Potion)</strong> 的 <strong>宝箱 (13)</strong>。</li>
                    <li>另一堆用来补充 MP 的 <strong>神罗箱子 (14)</strong>。</li>
                  </ul>

                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed my-6 font-medium">
                    在本章的最后一场战斗中，一个中Boss——猎犬 (the Huntsman) 将会加入战斗。
                  </p>

                  <h3 id="section-3-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">3.8 中Boss战：猎犬 (The Huntsman)</h3>
                  
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2 text-lg">
                       <span>🐕</span> Boss 战：猎犬 (The Huntsman)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      只要他的盾牌还举着，猎犬就会弹开你试图从正面攻击他的企图。这仍然为你击败他留下了几个选择：
                    </p>
                    
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>你可能<strong>不想尝试去招架 (Parry)</strong> 他的攻击，因为他的攻击可以击晕克劳德。</li>
                      <li>通过与你周围的其他部队战斗来积累一些 ATB。首先使用<strong>火属性魔法 (Fire)</strong> 来干掉镇暴兵 (Riot Troopers)。然后对其他敌人使用<strong>勇穴模式 (Punisher Mode)</strong> 攻击。理想情况下，你希望在对付猎犬之前拥有<strong>2 个满的 ATB 槽</strong>。</li>
                      <li>当只剩下猎犬时，用火属性魔法击中他。这应该会立即将他击倒并使他陷入<strong>陷危 (Pressure)</strong>，但他的陷危状态不会持续很长时间。使用你的第二个 ATB 槽用<strong>突刺 (Focused Thrust)</strong> 击中他以增加他的力竭值，然后用一些勇穴模式攻击击打他以重建一些 ATB。</li>
                      <li>他的<strong>背部是脆弱的</strong>，所以如果有必要，你可以通过翻滚越过他并从背后攻击他来重新建立一些 ATB。</li>
                      <li>他的攻击很强，所以要仔细观察他。如果他即将攻击，请暂缓你的进攻并集中精力<strong>躲避他的攻击</strong>。这样你就不必花费你的 ATB 来治疗，并且被击晕的机会也会减少。</li>
                      <li>当你再次拥有 ATB 时，用火属性魔法击中他，再次使他陷危，然后跟上突刺。这应该足以使他<strong>力竭 (Stagger)</strong>。用勇穴模式将他击倒，并以<strong>奋力一击 (Braver)</strong> 结束。</li>
                    </ul>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：前往第三章</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>进行一次大胆的逃跑并乘坐火车前往第三章。一路上，如果你非常仔细地搜索，你会发现一个包含 <strong>100 gil</strong> 的宝箱。</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6 border-l-4 border-l-blue-500">
                    <h4 className="text-lg font-bold text-[#00f0ff] mb-3 flex items-center gap-2">
                      <span>💡</span> 给玩家的话
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      到目前为止，你应该在寻找物品方面变得相当出色了。在此之后，<strong>我只会引导你去寻找我认为必不可少的物品</strong>，我会让你自己决定你想花多少时间在角落和死胡同里翻找药水和类似的低优先级物品。
                    </p>
                  </div>

                  <h2 id="section-4" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     四、第三章：第七天堂 (Home Sweet Slum)
                  </h2>

                  <h3 id="section-4-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.1 核心注意事项与音乐收集</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg border border-[#112a32] mb-6">
                    <h4 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                      重要提示
                    </h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>与第一章和第二章不同，第三章包含几个导致奖杯的物品和事件。<strong>特别密切地遵循本指南，这样你就不会错过任何东西！</strong>这就是我的工作和研究希望开始使你受益的地方。</li>
                      <li>特别是，确保你收集了本章中的<strong>所有 4 张音乐唱片 (Music Discs)</strong>。</li>
                    </ul>
                  </div>

                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3">📍 目标：返回基地 (Return to Base)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在第七天堂 (Seventh Heaven) 内与巴雷特和玛琳 (Marlene) 发生剧情后，看向屏幕的左上角。你会看到一个圆圈里的蓝色音符，后面跟着 3 个问号。这意味着附近有一张音乐唱片。与自动点唱机 (jukebox) 互动，你将获得 <strong>音乐唱片 #3 (Music Disc #3)</strong>。
                    </p>
                    <div className="bg-[#021824] p-4 rounded border-l-4 border-[#00f0ff] text-[14px] text-[#a5c3c7]">
                      <strong>🏆 音乐收藏奖杯：</strong>总共有 31 张音乐唱片。找到其中 3 张会获得一个奖杯，找到全部 31 张会获得另一个奖杯。你可以通过主菜单下的 物品栏 (Inventory) &gt; 音乐收藏 (Music Collection) 来跟踪你的收集进度。
                    </div>
                  </div>

                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed my-6">
                    在去你新公寓的路上，看看第七天堂对面的那个戴着帽子和条纹紧身裤的女孩。我们将在第 14 章再次见到她。
                  </p>

                  <h3 id="section-4-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.2 贫民窟的生活与武器升级</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：贫民窟的生活 (Life in the Slums)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>当克劳德醒来时，在下楼梯之前可以拿到一个包含<strong>凤凰尾巴</strong>的宝箱。既然它不是必不可少的，我就留给你自己去找了。</li>
                      <li>你“换水过滤器”的第一站是物品店 (Item Shop)。检查他的库存，并购买 <strong>音乐唱片 #1</strong>。</li>
                      <li>当你在这里时，你可能想购买<strong>另一颗雷霆魔晶石 (Lightning Materia)</strong>。这将确保当你在第 6 章进行最终战斗时，你的团队中的每个成员都有一颗。</li>
                    </ul>
                  </div>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2 text-lg">
                       <span>⚔️</span> 升级武器 (Upgrading Weapons)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在与比格斯 (Biggs) 交谈时，你将获得一个升级武器的教程。正如我在通用建议部分指出的那样，我建议<strong>开启自动升级 (Automatic upgrades)</strong>，这样你就不必一直手动执行此操作。
                    </p>
                    
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>要做到这一点，转到主菜单 &gt; 升级武器 (Upgrade Weapons) 并选择克劳德。当“破坏剑”突出显示时，按<strong>三角键</strong>并选择你偏好的 3 个自动选项之一。</li>
                      <li>对于你的第一次通关，我建议选择<strong>“平衡 (Balanced)”或“优先防御 (Prioritize Defense)”</strong>。如果你改变主意，以后随时可以更改。</li>
                      <li>对于每把武器和每个角色，你都需要重复这个过程。当蒂法稍后加入团队时，请确保将她的<strong>皮革手套 (Leather Gloves)</strong> 设置为自动更新。</li>
                      <li>每当你获得技能点 (SP) 来升级武器时，你当前拥有的每把武器以及你在游戏后期获得的每把武器都会获得相同数量的 SP。因此，你不必为未来的武器保留 SP，也不必决定现在升级哪把武器。</li>
                    </ul>
                    
                    <p className="text-[14px] text-[#5c7e82] italic mt-4">
                      当我们完成初始通关后，我将在一个名为“技能点和武器升级”的部分中为你提供更具体的信息。在一周目中，你无论如何都无法过多控制你的 SP，我不想用你还不需要的信息使你超载。
                    </p>
                  </div>

                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6 border-l-4 border-l-sspai-red">
                    <h4 className="text-[15px] font-bold text-cyan-300 mb-2">简而言之...</h4>
                    <p className="text-[15px] text-[#a5c3c7] m-0 mb-2">将克劳德和蒂法的武器设置为<strong>自动升级</strong>。</p>
                    <p className="text-[15px] text-[#a5c3c7] m-0">蒂法自带<strong>气卦魔晶石 (Chakra Materia)</strong>。她的武器有另一个槽位，所以在出去进行害虫巡逻 (Pest Patrol) 之前，继续为她装备<strong>致命躲避魔晶石</strong>。</p>
                  </div>

                  <h3 id="section-4-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.3 蒂法战斗基础</h3>
                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed mb-6">
                    既然你即将与蒂法进行一些战斗，现在是快速了解她基本能力的好时机。
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                      <h4 className="text-lg font-bold text-[#00f0ff] mb-4 border-b border-[#112a32] pb-2">🥊 蒂法战斗特性</h4>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4">
                        <li>蒂法被广泛认为是你最好的战士。她在所有角色中拥有<strong>最高的速度 (Speed)</strong> 属性，但不幸的是她也有最低的防御属性。她能造成很大伤害，但如果你不进行防御性游玩，她也会承受很大伤害。</li>
                        <li>像克劳德和巴雷特一样，蒂法在按 R1 时会防御，按圆圈键时会躲避。</li>
                        <li>此外，如果你<strong>按住 R1 并轻按圆圈键</strong>，蒂法将执行滑动动作，这将帮助她比单纯奔跑更快地接近敌人。</li>
                        <li>她的基本攻击通过使用<strong>方块键</strong>执行。连击中的攻击次数取决于她的“气 (Chi)”等级。</li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm">
                      <h4 className="text-lg font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 border-b border-[#112a32] pb-2">🔥 蒂法的“气”系统</h4>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4">
                        <li>蒂法有 <strong>3 个气的等级 (Chi levels)</strong>。每个等级对应一个独特的<strong>三角键</strong>攻击，并且基本连击次数也不同。在更高的气等级下，蒂法的攻击造成的伤害更大，并且增加的力竭值也更多。</li>
                        <li>你可以通过消耗一个 ATB 槽来执行她的<strong>“秘技解放 (Unbridled Strength)”</strong>能力，将蒂法的气提升一个等级。</li>
                        <li><strong>等级 1：</strong>三角攻击是升龙拳 (Whirling Uppercut)，基本连击为 4 次。</li>
                        <li><strong>等级 2：</strong>三角攻击是爆裂拳 (Omnistrike)，基本连击为 6 次。</li>
                        <li><strong>等级 3：</strong>三角攻击是强打 (Rise and Fall)，基本连击为 8 次。</li>
                        <li>执行三角攻击会使蒂法<strong>下降一个气等级</strong>。</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2 text-lg">
                       <span>🌟</span> 为什么蒂法的三角攻击如此厉害？
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] mb-3">至少有 3 个原因：</p>
                    <ol className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li>它们可以对力竭的敌人造成显着伤害。</li>
                      <li>它们能增加力竭敌人的力竭百分比（伤害倍率）。</li>
                      <li>它们以不同数量<strong>回复蒂法的 ATB</strong>。</li>
                    </ol>
                    
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 bg-[#080d14]/90 backdrop-blur-md p-4 rounded border border-[#00f0ff]/30 mb-4">
                      <li><strong>升龙拳：</strong>对力竭敌人回复 50% ATB，增加 5% 伤害倍率。</li>
                      <li><strong>爆裂拳：</strong>对力竭敌人回复 10% ATB，增加 25% 伤害倍率。</li>
                      <li><strong>强打：</strong>对力竭敌人回复 45% ATB，增加 20% 伤害倍率。</li>
                    </ul>
                    
                    <p className="text-[15px] text-[#a5c3c7] m-0">
                      最棒的是，蒂法的三角攻击可以在<strong>不消耗 ATB 的情况下执行</strong>。因此，她的“秘技解放”能力可以给她一种力量的“储蓄账户”，她可以在敌人力竭时释放出来，从而造成最大的伤害。
                      <br/><br/>
                      <strong>常用策略：</strong>对付难缠的对手时，先让他们力竭，然后让蒂法在 ATB 攻击和三角攻击之间交替。从她的三角攻击中恢复的 ATB 可以使这个序列几乎是连续的。
                    </p>
                  </div>

                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                      蒂法的皮革手套与下压踢 (Divekick)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      蒂法初始装备了<strong>皮革手套 (Leather Gloves)</strong>，它在物理攻击和魔法攻击之间提供了一个很好的 3:2 平衡。早期的升级将为她至关重要的三角攻击提供 10% 的伤害提升，后期的升级将赋予她 50% 的几率以 2 级气进入战斗（这被称为“专注激活 Concentration Activated”）。升级还将提供非常需要的 850 HP 提升，以帮助抵消蒂法天生较低的防御，以及 +15 的速度增加，巩固了她作为能快速造成大量伤害的进攻强者的角色。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] m-0">
                      皮革手套的能力是<strong>下压踢 (Divekick)</strong>。它消耗一个 ATB 槽，能造成显着伤害，并且在目标周围有一个 AOE 范围，这意味着如果敌人靠得很近，它可以伤害多个敌人。
                    </p>
                  </div>

                  <h3 id="section-4-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.4 武器熟练度机制</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                      检查熟练度进度
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] m-0 mb-4">
                      即使某个武器能力看起来不是那么有用，也要把<strong>反复使用它直到获得该能力</strong>作为你的目标。一旦你对某个武器的能力获得了 100% 的熟练度，你就可以在战斗中使用该能力，<strong>即使没有装备那把特定的武器</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] m-0">
                      你可以在主菜单下的 魔晶石与装备 (Materia and Equipment) 中检查进度。选择角色然后选择武器，查看屏幕右侧，你会看到熟练度进度。
                    </p>
                  </div>

                  <div className="bg-[#021824] p-5 rounded-lg border border-[#0088aa]/50 my-6">
                    <h4 className="font-bold text-cyan-200 mb-3 flex items-center gap-2">
                      <span>📈</span> 熟练度奖励 (Proficiency Bonuses)
                    </h4>
                    <p className="text-[14px] text-cyan-100 m-0 mb-3">
                      通常，使用一次新的武器能力将增加 10% 的熟练度。但是，对于每把武器，如果你满足某些条件，<strong>每次使用可以获得 30% 的增加</strong>。这些条件将始终显示在熟练度进度信息下方。
                    </p>
                    <p className="text-[14px] text-cyan-100 m-0 mb-3">
                      例如，如果“熟练度奖励”下写着“终结一个敌人”。这意味着如果蒂法的下压踢杀死了一个敌人，她将获得 30% 的熟练度，而不仅仅是 10%。
                    </p>
                    <p className="text-[14px] text-cyan-100 m-0">
                      有时获得奖励的条件相当难达成，这种情况下你可能只需要使用该能力 10 次即可学习它。但是，你应该始终注意需要什么条件才能获得奖励，以便在情况允许时加快学习过程。
                    </p>
                  </div>

                  <h3 id="section-4-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.5 社区守卫任务</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：社区守卫的工作 (A Job for the Neighborhood Watch)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>贪食者 (Gorgers) 可能会附着在你身上，使你被“束缚 (Bound)”并无法移动。让你的另一个角色攻击那个贪食者。如果你设法释放了被束缚的角色，你必定会获得<strong>“友谊之绊 (Bonds of Friendship)”奖杯</strong>。</li>
                      <li>穿过隧道并检查地图上的“凹槽”，在那里你会找到一个重要物品——<strong>冰之魔晶石 (Ice Materia)</strong>。我建议把它装备在蒂法身上，这意味着你必须用它替换她的另一个魔晶石。</li>
                      <li>如果可能的话，从现在起始终将你的新冰之魔晶石装备在某人身上。如果能在第 7 章结束前将其提升一个等级（让你能使用中级冰魔法 Blizzara），将会很有帮助。你也应该在遇到的许多动物敌人身上使用它，以继续完成那些战斗情报报告。</li>
                      <li>回到镇上，听从蒂法的建议与武器商人交谈。他会给你一把<strong>钢铁剑 (Iron Blade)</strong>。立即装备它，并将你从蒂法身上取下的任何魔晶石填入其额外的魔晶石槽中。</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6 border-l-4 border-l-blue-500">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      正如教程所述，每把武器都有独特的能力。学习所有 24 个能力（4 个角色每人 6 个）将为你赢得<strong>“武器专家 (Weapons Expert)”奖杯</strong>。此外，学习 16 个武器能力将完成情报报告之一，有助于获得“情报特工 (Intelligence Agent)”奖杯。
                    </p>
                  </div>

                  <h3 id="section-4-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.6 克劳德的钢铁剑与无尽斩 (Triple Slash)</h3>
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                      钢铁剑 (Iron Blade) 属性解析
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      与破坏剑相比，钢铁剑更加侧重于魔法攻击，较少侧重物理攻击力，物理与魔法的比例更接近 40:60 而不是 50:50。升级将增加 350 HP，比破坏剑的 800 少，但好过克劳德一半根本不增加 HP 的武器。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在其进化的中途，钢铁剑将获得<strong>“绝命回生 (Tradeoff)”</strong>能力，在受到“重大伤害”时补充 MP。在困难模式 (Hard Mode) 中 MP 非常宝贵，这可能是一个重要的考虑因素。在游戏后期，钢铁剑可以提供<strong>“绝处逢生 (Reprieve)”</strong>能力，如果克劳德倒下，它将在每场战斗中使他复活一次。
                    </p>
                  </div>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2 text-lg">
                       <span>🗡️</span> 无尽斩 (Triple Slash) 能力机制
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      钢铁剑的独特能力是<strong>无尽斩 (Triple Slash)</strong>，它非常有用。它消耗 1 个 ATB 槽，当存在多个敌人时它的运作方式有所不同：
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li><strong>如果存在多个敌人：</strong>克劳德将攻击被锁定的敌人，然后对附近其他随机敌人发起另外 2 次攻击。在这种情况下，每次攻击都比上一次更强，第二次和第三次攻击分别有 12% 和 41% 的伤害提升。</li>
                      <li><strong>如果只有一个敌人存在：</strong>克劳德将攻击它 3 次，第一次攻击的强度与存在多个敌人时相同。然而，在这种情况下，随后的每次攻击都比前一次<strong>弱</strong>，第二次和第三次攻击的威力分别只有原始攻击的 55% 和 10%。</li>
                    </ul>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      由于这个原因，当对付一群敌人时使用无尽斩会获得更大的收益。同时击中 3 个或更多敌人也能为你赢得熟练度奖励 (Proficiency Bonus)。
                    </p>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：解决问题 (Problem Solving)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>与威玛 (Wymer) 谈论支线任务 (Side Quests)，他旁边那个看起来有点呆的小孩查德利 (Chadley) 会开始自言自语，然后插话并向克劳德搭话。</li>
                      <li>装备他给你的<strong>“洞察 (Assess)”魔晶石</strong>，然后舒服地坐好，因为我要用我冗长的解释催眠你了。</li>
                    </ul>
                  </div>

                  <h3 id="section-4-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.7 查德利的战斗情报报告</h3>
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-[#00f0ff] mb-3">📋 查德利的情报报告 (Chadley's Intelligence Reports)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      总共有 20 个情报报告需要为他完成。每次你完成一个，回去找他，他会免费给你一个魔晶石和/或以折扣价向你出售魔晶石。他是你获得<strong>“情报特工 (Intelligence Agent)”奖杯</strong>的关键。
                    </p>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>每次完成报告或经常见到他时都要找他确认。</li>
                      <li>在游戏过程中，定期进入主菜单下的<strong>战斗情报 (Battle Intel)</strong>，看看你还需要做什么来完成他分配给你的报告。这可以提醒你，例如，更频繁地进行洞察或更多地利用敌人的弱点。</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-4 rounded border-l-4 border-[#00f0ff] text-[#a5c3c7] text-sm my-4">
                    <strong>提示：</strong> 现在，尝试完成<strong>报告 02 (Report 02)</strong>。你只需要用敌人弱点的法术击中 3 个敌人即可。完成此报告将允许你仅花 100 gil 购买一颗<strong>风之魔晶石 (Wind Materia)</strong>，在即将到来的 2 个任务中你会需要它的。
                  </div>

                  <div className="bg-[#021824] p-5 rounded-lg border border-[#0088aa]/50 my-6">
                    <h4 className="font-bold text-cyan-200 mb-3">📍 任务：查德利的报告 (Chadley's Report)</h4>
                    <p className="text-[14px] text-cyan-100 m-0 mb-3">
                      在可预见的未来，<strong>每次遇到新敌人时，都消耗一格 ATB 对其使用“洞察 (Assess)”</strong>。
                    </p>
                    <p className="text-[14px] text-cyan-100 m-0">
                      你将完成洞察 2 个、10 个、20 个和 30 个敌人的情报报告，这占了你总共 20 个报告中的 4 个。此外，你还将获得有关敌人弱点、攻击模式等有用信息。
                    </p>
                  </div>

                  <h3 id="section-4-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.8 关于支线任务的重要提示</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2 text-lg">
                       <span>⚠️</span> 支线任务与“最佳服装”奖杯
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      完成所有 26 个支线任务将为你赢得<strong>“万能帮手 (Best in the Business)”奖杯</strong>。但事实上，这不能在你的第一次通关中完成，因为有两对任务是互斥的（在第九章）。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      更大的考量是为了获得<strong>“最佳服装 (Dressed to the Nines)”奖杯</strong>必须满足的相当复杂的条件。赢得这个奖杯至少需要分别在第 3、8 和 9 章通关 3 次，并且在每次通关中你都必须确保做出所有正确的选择。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md p-4 rounded border border-[#00f0ff]/30 mt-4">
                      <strong className="block mb-2 text-cyan-300">作者的保证：</strong>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        我向你保证，我将引导你走上的路线绝对会为你赢得这个难以获得的奖杯。我要求你信任我，避免自己研究这个话题，以免偏离我为你规划的路线。网上许多指南信息模糊、不完整甚至完全不准确。相信我，我会致力于帮助你避免我的错误。
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed my-6 font-medium">
                    目前，我们将完成本章中可用的<strong>所有 6 个支线任务</strong>，但你要知道我们稍后将不得不重新做一遍。
                  </p>

                  <h3 id="section-4-9" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.9 重置武器升级</h3>
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                      通过查德利重置升级
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      我一直建议你将武器设置为自动升级，在你的首次通关中，这会运作得很好。但是，当你进入困难模式时，你可能想手动选择应用哪些升级，如果是这样，查德利就是你需要找的人。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      查德利菜单的第三个选择是<strong>“重置武器核心 (Reset Upgrades)”</strong>。付给他 100 gil，他就会移除单把武器的所有升级，然后退还你花费的所有 SP，让你自行重新分配。如果你正在培养特定类型的角色（例如专注于魔法而不是近战攻击），这会很方便。
                    </p>
                    <p className="text-[14px] text-[#5c7e82] italic mt-4">
                      目前，让 AI 为你进行升级，但请记住，你随时都可以重置它们。
                    </p>
                  </div>

                  <h3 id="section-4-10" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.10 收集音乐唱片与追踪支线</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 收集目标：两张新的音乐唱片</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4">
                      <li>花一分钟时间一直跑回镇东靠近火车站的物品店（在你的地图上标有常见的“袋子”图标），购买 <strong>音乐唱片 #4</strong>。这应该会为你解锁“音乐收藏家 (Music Collector)”奖杯。</li>
                      <li>回到第七天堂，沿着面对蒂法酒吧时右侧的小巷走。与带有披萨标志的俱乐部会所前的 NPC 互动，他会给你一张 <strong>音乐唱片 #27</strong> 添加到你的收藏中。</li>
                    </ul>
                  </div>

                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-[#b088ff] mb-3">🔍 追踪你的支线任务进度</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      要查看有哪些可用的支线任务，请调出你的地图。它将显示<strong>绿色标记</strong>，你可以去那里触发可用的任务。按下 <strong>R2 键</strong>以调出更具体的信息。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      除了查德利给你的任务外，应该还有 3 个列出。例如，请注意“游荡的军犬 (Rat Problem)”显示了 4 个小圆圈。这意味着你有 4 个步骤来完成这个任务。高亮显示该任务并按 X 键，你可以查看你已经做了什么以及接下来需要做什么。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-medium">
                      完成这些支线任务的顺序无关紧要，但让我们先去物品店解决“游荡的军犬 (Rat Problem)”吧。
                    </p>
                  </div>

                  <h3 id="section-4-11" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.11 支线任务：游荡的军犬 (Rat Problem)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 任务：游荡的军犬</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>在你与物品店老板交谈后，你的地图将显示“城镇边缘”在哪里。现在，你只能在那里找到变异老鼠 (Wererats)。消灭它们，然后回去再次与物品店老板交谈。</li>
                      <li>当你返回老鼠的位置时，你会发现<strong>末日老鼠 (Doomrats)</strong>。记住要使用“洞察”，并使用克劳德的无尽斩能力和蒂法的下压踢能力，以便你开始学习它们。</li>
                      <li>末日老鼠可能很难对付。<strong>一次锁定一个</strong>，这样两个角色都会攻击那个敌人。末日老鼠弱冰属性法术，所以使用你的 ATB 施放暴雪法术 (Blizzard)。</li>
                      <li>当末日老鼠陷入陷危时，让克劳德用他的突刺击中它以使它力竭，并开始努力完成战斗情报报告 4。</li>
                      <li>回到物品店老板那里报告。他会以折扣价向你提供一颗<strong>净化魔晶石 (Cleansing Materia)</strong>，我建议你买下它。你可能还想买另一颗恢复魔晶石，这样克劳德和蒂法都可以使用治疗 (Cure)。</li>
                    </ul>
                  </div>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 relative overflow-hidden my-6">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="text-lg font-bold mb-2 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2">
                      <span>⚠️</span> 关于“自动回复”魔晶石 (Auto-Cure Materia)
                    </h4>
                    <p className="text-[#a5c3c7] leading-relaxed m-0 text-[15px] mb-3">
                      走过去与查德利交谈。他会给你一些 gil 和一些新任务，并会以 100 gil 的特价为你提供<strong>自动回复魔晶石</strong>。买下它，但请阅读下面关于其局限性的段落。
                    </p>
                    <p className="text-[#a5c3c7] leading-relaxed m-0 text-[15px]">
                      自动回复并不像你想象的那么神奇。它<strong>只会自动对装备它以外的角色施放治疗</strong>，也就是说，一个角色不能对自己使用它。它也<strong>只有在某人的 HP 极低时</strong>才会自动治疗，在很多情况下，这已经太迟了。
                    </p>
                  </div>
                  
                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed my-4">
                    一定要阅读你的新情报任务，并尝试将它们融入你的战斗策略中。其中许多会自然而然地完成，但有些你可能需要有意识地去使用。
                  </p>

                  <h3 id="section-4-12" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.12 战斗情报报告 03：力竭效应 Pt. 1</h3>
                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed mb-4">
                    你的新情报任务之一是<strong>报告 03 - 力竭效应 Pt. 1 (The Stagger Effect, Pt. 1)</strong>，你要把完成这个任务放在首位。然而，许多人，包括我自己，在完成情报报告 03 时都遇到了困难，所以让我们仔细看看它。
                  </p>

                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3">📝 任务解析</h4>
                    <p className="text-[15px] text-[#a5c3c7] m-0 mb-3">首先，让我解释一下报告要求你做什么。文本写着：<strong>“对力竭的敌人使用固有能力并使 ATB 槽充能 10 次。”</strong> 这里有两件事可能不清楚：</p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li><strong>“固有能力 (Unique abilities)”</strong>是指由角色的<strong>三角键</strong>控制的能力，例如，克劳德的勇穴模式或蒂法的升龙拳。</li>
                      <li><strong>“使 ATB 槽充能 (Charge the ATB gauge)”</strong>意味着你必须增加它。尚不清楚槽是否必须完全充满还是只是增加，但我很确定只要增加槽的电量就足够了。无论哪种方式，如果使用固有能力的角色已经有一个满的 ATB 槽，你将不会获得进度。那些三角攻击必须增加 ATB 槽。</li>
                    </ul>
                    <p className="text-[14px] text-[#5c7e82] italic m-0">我不确定使敌人力竭的角色是否必须与使用固有能力的角色相同。为了安全起见，我可能会坚持使用一个角色。</p>
                  </div>

                  <div className="bg-[#021824] p-5 rounded-lg border border-[#0088aa]/50 my-6">
                    <h4 className="font-bold text-cyan-200 mb-3 flex items-center gap-2">
                      <span>💡</span> 推荐策略
                    </h4>
                    <p className="text-[15px] text-cyan-100 leading-relaxed m-0 mb-4">
                      例如，你可以填满克劳德的 ATB 槽，然后让力竭女王蒂法将敌人打到接近力竭。切换到克劳德让他使用突刺。这将做两件事。希望能使敌人力竭，并且也会消耗一个 ATB 槽，让你然后可以使用他的勇穴模式来填补它。
                    </p>
                    <p className="text-[15px] text-cyan-100 leading-relaxed m-0">
                      完成这份报告的奖励是<strong>先发制人魔晶石 (First Strike Materia)</strong>。除了在为困难模式准备升级魔晶石时至关重要外，它还可以帮助你在几秒钟内完成常规战斗。例如，如果克劳德带着至少一格 ATB 进入战斗，他可以立即执行无尽斩。这可以立即消灭一群 3 只变异老鼠。
                    </p>
                  </div>

                  <h3 id="section-4-13" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.13 支线任务：徘徊的魔物 (On the Prowl)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 任务：徘徊的魔物</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      威玛为我们准备了另一个任务。这是一个艰难的任务，但反正我们就在这里，所以我们不妨前往西边的废料大道 (Scrap Boulevard)，对付<strong>怒尾猎犬 (Wrath Hound)</strong>。他弱冰属性，所以确保有人仍然装备了冰之魔晶石。
                    </p>
                  </div>

                  <h3 id="section-4-14" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.14 突发事件：神罗的动向与乔尼</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：神罗的动向 (Shinra Reacts!)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在下一个任务中，你将靠近第七天堂正东面的区域。当你这样做时，你可能会被一个新的目标“神罗的动向”转移注意力。蒂法会让你立即完成这个任务，所以继续去完成它，然后继续寻找丢失的猫。记得先在蓝色的长椅上恢复体力。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      在“神罗的动向”剧情中那个可爱的失败者是<strong>乔尼 (Johnny)</strong>。你还会看到他好几次，最终你会因为见证他参与的所有事件而获得一个奖杯。
                    </p>
                  </div>

                  <h3 id="section-4-15" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.15 支线任务：消失的朋友 (Lost Friends)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 任务：消失的朋友</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      接下来，让我们去帮助贝蒂 (Betty) 找到她丢失的朋友（猫）。我同意克劳德的观点，这个任务有失他的身份，但我们还是把它完成吧。这是你可以找到它们的地方：
                    </p>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li>沿着从贝蒂那里向东北方向走的路，直到它形成一个 T 形路口。其中一只猫就在你正前方。</li>
                      <li>从那里向西北走到第七天堂。猫在前廊上。</li>
                      <li>向西走，当道路分叉时，走南边的路。你会看到一个头上带有绿色标记的 NPC。和她交谈（或不交谈），穿过南边的隧道找到最后一只猫。</li>
                    </ul>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      当提示时，返回找贝蒂交任务。
                    </p>
                  </div>

                  <h3 id="section-4-16" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.16 支线任务：废工厂的微小火花 (Nuisance in the Factory)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 任务：废工厂的微小火花</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>回到你穿过去找末日老鼠的那个隧道，和标记处的家伙交谈。</li>
                      <li>像次级小龙 (Lesser Drake) 这样的飞行敌人很烦人。你的团队成员必须在空中跳跃来攻击并积累 ATB，并且他们无法真正跟上有翅膀的东西。然而，<strong>一旦你有了 ATB，像疾风 (Aero) 这样基于风属性的法术会很快将飞行物击落到地面。</strong></li>
                      <li>穿过工厂，杀掉你看到的一切，并且<strong>不要忘记捡起那颗火之魔晶石 (Fire Materia)！</strong></li>
                      <li>当提示时，返回以完成此任务。</li>
                    </ul>
                  </div>

                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6 border-l-4 border-l-sspai-red">
                    <h4 className="text-[15px] font-bold text-cyan-300 mb-2">未雨绸缪 (Planning Ahead)</h4>
                    <p className="text-[15px] text-[#a5c3c7] m-0">
                      你现在有 2 颗火之魔晶石。<strong>尝试将它们都装备在活跃成员身上</strong>，直到它们累积 300 AP 并升至 2 级。当我们到达第 8 章时，你会希望有 2 个角色能够施放中级火魔法 (Fira)。
                    </p>
                  </div>

                  <h3 id="section-4-17" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.17 支线任务：来自墓地的飞行物 (Just Flew in From the Graveyard)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 任务：消失在墓地的飞龙</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      我们的第 6 个也是最后一个任务回到了工厂。前往下面地图上圈出的区域，并在到达长椅之前砸碎左侧的板条箱。在那里你会找到<strong>守卫钥匙 (Watch Security Key)</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      使用这把钥匙进入你尚未访问的唯一区域（在上方图片中用绿色标记显示）。击倒<strong>蔚蓝飞龙 (Cerulean Drake)</strong>，并在提示时返回报告。
                    </p>
                  </div>

                  <h3 id="section-4-18" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.18 EX事件：二人独处 (Alone At Last)</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2 text-lg">
                       <span>✨</span> 发现事件：终于独处 (Discovery Event: Alone At Last)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      完成所有 6 个任务将解锁“终于独处 (Alone at Last)”发现事件，此事件是解锁我们需要用于<strong>“最佳服装”奖杯</strong>的两件裙子的关键。如果此事件没有出现，请进入地图并按 R2，看看你没有完成这 6 个任务中的哪一个。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      直接回到公寓（地图上的蓝色标记）。让克劳德更换他房间里的过滤器，然后去蒂法的房间。经过一番交谈后，蒂法会问“你觉得什么衣服适合我？”
                    </p>
                    <p className="text-[15px] font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] leading-relaxed m-0 mb-4 bg-[#00f0ff]/10 p-3 rounded">
                      你要选择这个回答：“异国风情的？(Something exotic?)”
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      别问为什么。做就是了。我稍后会解释。现在，我不想剧透任何东西。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      蒂法建议回镇上去。选择“否 (no)”并继续进入酒吧。
                    </p>
                  </div>

                  <h3 id="section-4-19" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.19 飞镖小游戏与“飞镖专家”奖杯</h3>
                  <div className="bg-[#080d14]/90 backdrop-blur-md p-5 rounded-lg border border-[#1a3a40] shadow-sm my-6 border-l-4 border-l-blue-500">
                    <h4 className="text-lg font-bold text-cyan-300 mb-3">🎯 天才飞镖手 (Heavenly Dart Player) 奖杯</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当克劳德被独自留下时，你就有机会赢得“天才飞镖手”奖杯了。我想说服你，花点时间现在就完成它是值得的。这是一个相对简单的为你的收藏添加另一个奖杯的方法。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      此外，如果你现在获得了这个奖杯，魏格 (Wedge) 会在下一章给你一颗极其稀有的<strong>提升运气魔晶石 (Luck Up Materia)</strong>（这会增加暴击的几率）。游戏中只有 2 颗这样的魔晶石，它是通关后最常用的魔晶石之一。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      如果你对试图赢得这个游戏感到沮丧，你可以在以后再次游玩第三章时重试。然而，推迟这样做将需要你完成所有 18 章（以解锁章节选择），然后再次完成第 3 章和第 4 章才能真正获得该魔晶石。因此，<strong>现在通关这个小游戏可以为你节省时间和避免不必要的重复</strong>。
                    </p>
                    <p className="text-[14px] text-[#5c7e82] italic m-0 mt-4 bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-3 rounded border border-[#112a32]">
                      就我个人而言，我并不擅长这种类型的小游戏，连我都在大约 15 - 20 分钟内获得了这个奖杯，所以我知道你也可以。
                    </p>
                  </div>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] flex items-center gap-2 text-lg">
                       <span>🕹️</span> 飞镖小游戏规则与制胜策略
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      我将在这里为你概述一些规则和策略，但如果你愿意，也可以随意自行研究。
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li>游戏不是关于高分的。你从 <strong>301 分</strong>开始，投掷得到的分数会从总分中减去。你要尝试用尽可能少的飞镖精确地达到 0 分。为了赢得奖杯，你需要用 <strong>6 次或 7 次投掷达到 0 分</strong>。</li>
                      <li>你有有限的时间来投掷每支飞镖。如果计时器（也就是你移动瞄准时的最内圈）走完，飞镖会自动投出。</li>
                      <li>为了达到最高精度，你必须在<strong>外圈缩到最小时释放飞镖（按 X 键）</strong>。把这个圆圈想象成飞镖可能落入的区域。</li>
                      <li>实际上，由于上述第 2 和第 3 点，你必须在圆圈<strong>第一次或第二次完全缩小</strong>时释放飞镖。计时器会在它第三次缩小之前走完。</li>
                      <li>为了更好地控制，尝试用你的<strong>拇指和食指捏住左摇杆</strong>来移动圆圈，而不是仅仅用拇指推它。这个技巧真的帮了我大忙。</li>
                      <li>虽然靶心 (bullseye) 是一个诱人的目标，但它只值 50 分。如果你瞄准<strong>三倍 20 区 (triple 20, 60分)</strong>，你会给自己更多的容错空间。</li>
                      <li>你不需要进行快速的心理计算。当你达到可以在下一次投掷中击中 0 分的点时，你需要击中的区域会<strong>用黄色为你突出显示</strong>。这很有帮助吧？</li>
                    </ul>
                  </div>

                  <h3 id="section-4-20" className="text-xl mt-8 mb-4 font-bold text-cyan-100">4.20 主线推进：不祥的阴影 (Ominous Shadows)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg border border-[#112a32] my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：不祥的阴影</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>走到外面，和一群流氓打一架。你的<strong>火属性法术</strong>可以很快解决他们。</li>
                      <li>回家。你会遇到一位意外的访客，他会给你<strong>伊弗利特魔晶石 (Ifrit Materia)</strong>。将它装备在你剑最右侧的插槽中，然后出发执行一项神秘的任务。</li>
                    </ul>
                  </div>

                  <h2 id="section-5" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     五、第四章：午夜狂飙 (Mad Dash)
                  </h2>
                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed mb-6">
                    第四章相对较短且平淡无奇。你应该能在很少的帮助下通过本章，所以希望你这章的阅读量会比第三章少得多。
                  </p>

                  <h3 id="section-5-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>本章中没有任何物品直接与奖杯相关，但你可以获得几颗不错的魔晶石。</li>
                      <li>通过耐心和练习，你可以在本章开始时获得一个奖杯。</li>
                      <li>在本章的大部分时间里，<strong>克劳德将是你唯一可操作的角色</strong>，所以请密切关注他的生命值。</li>
                    </ul>
                  </div>

                  <h3 id="section-5-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.2 摩托车追逐与“机车男孩”奖杯</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3 flex items-center gap-2">
                      <span>🏍️</span> 摩托战与奖杯 (Biker Boy Trophy)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      本章以一场令人烦躁的超长摩托车追逐战开始。如果你在剩余充足生命值的情况下完成此序列（对于什么是“充足”似乎没有共识，但大多数估计在 <strong>75% - 80%</strong> 左右），你将赢得<strong>“机车男孩 (Biker Boy)”奖杯</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      然而，我的建议是现在尽力而为即可。因为这场战斗就在本章的开头，所以在通关后通过<strong>章节选择 (Chapter Selection)</strong> 很容易访问，这将允许你在<strong>简单模式 (Easy Mode)</strong> 下尝试，从而增加你获得该奖杯的几率。
                    </p>
                  </div>

                  <h3 id="section-5-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.3 获得“机车男孩”奖杯的策略</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-4">🏆 奖杯攻克指南</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      对于当你准备认真尝试获得这个奖杯时，我实际上有一些建议。以下是我在这个问题上给你的智慧总结：
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li><strong>在简单模式 (Easy Mode) 下应对这一挑战。</strong>根本没有理由让它变得比现在更难。你现在就可以更改为简单难度，或者等到通关后可以使用章节选择时再做。</li>
                      <li>你最好的攻击是你用<strong>三角键 (Triangle) 激活的特殊攻击 (Special Attacks)</strong>。只需按下三角键即可执行旋转攻击，如果位置合适，它可以同时消灭几个敌人。远程攻击也是三角攻击，尽管你必须<strong>先按 L1 锁定目标，然后再按三角键发动攻击</strong>。游戏在这一点上说明得不够清楚。</li>
                      <li>另一件不清楚的事情是，三角攻击有点像 ATB，因为它们并不总是可用的。一个计量表会随着时间的推移慢慢填满来为它们充能。充能槽位于屏幕左下角。</li>
                      <li><strong>不要节省特殊攻击。</strong>特别是在后半段对付罗榭 (Roche) 时，每次充能槽满时都要用远程攻击打击他。它们是你最安全、最强大的攻击，你等待使用它们的时间越短，你就能使用越多的特殊攻击。</li>
                      <li>偶尔，屏幕中间会出现坡道。<strong>跳过其中一个斜坡会完全填满你的特殊攻击槽。</strong>这非常方便，但说明中也没有明确指出。</li>
                      <li>在罗榭加入之前会出现 2 个敌人，你可以直接忽略他们。他们会自己离开的。</li>
                      <li><strong>获得奖杯的关键在于防守。</strong>有时你就是跑得不够快，无法追上并击中罗榭。在那段时间里，你必须躲避他的能量爆炸，尤其是他的闪电攻击。如果你<strong>按 L2 减速</strong>，这会更容易做到。</li>
                      <li>利用罗榭偶尔让你靠近他身边的难得机会，执行圆圈键或方块键攻击。他在外面待的时间越长，你将不得不花越多的时间躲避他的攻击，而你不能永远这样做。</li>
                    </ul>
                    <p className="text-[14px] text-[#5c7e82] italic mt-4 p-3 bg-[#080d14]/90 backdrop-blur-md rounded border border-[#112a32]">
                      作者寄语：我有点不好意思承认这一点，但“机车男孩”是我白金之路上的最后一个奖杯（是的，我实际上在获得机车男孩之前就获得了“身经百战的退伍军人 Hardened Veteran”——想想看吧）。但最终，它并没有我预期的尝试那么多次。在简单模式下花半个小时左右进行这项挑战，你就会成功的。
                    </p>
                  </div>

                  <h3 id="section-5-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.4 潜入附属设施 (Annex Infiltration)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：潜入附属设施 / 转移注意力 (A Little Diversion)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>这里有一个训练中心，你可以在那里打一些简单的敌人，但 EXP 和 AP 的增长非常慢，所以我建议<strong>直接跳过它</strong>。</li>
                      <li>这里也有一个长椅，你可以用来补满 HP 和 MP。</li>
                      <li>在某个时刻，比格斯会建议你装备杰西给你的召唤兽。在战斗中使用它，你将获得<strong>“我的第一个召唤兽 (My First Summon)”奖杯</strong>。</li>
                      <li>挤过门口，你将与几波敌人战斗。只要保持治疗，你会做得很好的。最终，你将与罗榭进行一对一的对决。</li>
                    </ul>
                  </div>

                  <h3 id="section-5-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.5 召唤兽系统与属性加成 (Summon Stats)</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      除了作为与你的团队并肩作战的盟友之外，召唤兽还可以<strong>增加装备其魔晶石的角色的某些属性</strong>。下表显示了这些增加值。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      请注意，<strong>百分比增加仅适用于角色的基础属性</strong>，不考虑其他装备的魔晶石或任何武器升级。例如，如果一个角色的基础属性为 100 MP，但装备了一颗 MP 提升魔晶石将其增加到 125 MP，那么装备利维坦 (Leviathan) 魔晶石将增加 100 的 4%（即 4 MP），而不是 125 的 4%（那将是 5 MP）。
                    </p>
                    <p className="text-[14px] text-[#5c7e82] italic mb-4">
                      这些提升大多相当微不足道——大约是 1-2% 的增加——但它们不花任何代价，所以你不妨利用它们。
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-[#a5c3c7] border-collapse">
                        <thead>
                          <tr className="bg-[#021824] border-b border-[#00f0ff]/30 text-[#00f0ff]">
                            <th className="py-3 px-4 font-bold">召唤兽 (Summon)</th>
                            <th className="py-3 px-4 font-bold">HP</th>
                            <th className="py-3 px-4 font-bold">MP</th>
                            <th className="py-3 px-4 font-bold">攻击 (ATK)</th>
                            <th className="py-3 px-4 font-bold">魔攻 (MATK)</th>
                            <th className="py-3 px-4 font-bold">防御 (DEF)</th>
                            <th className="py-3 px-4 font-bold">魔防 (MDEF)</th>
                            <th className="py-3 px-4 font-bold">力量 (STR)</th>
                            <th className="py-3 px-4 font-bold">魔法 (MAG)</th>
                            <th className="py-3 px-4 font-bold">精神 (Spirit)</th>
                            <th className="py-3 px-4 font-bold">体力 (Vit)</th>
                            <th className="py-3 px-4 font-bold">运气 (Luck)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#112a32]">
                          <tr className="hover:bg-[#0c1821] transition-colors">
                            <td className="py-3 px-4 font-medium text-cyan-100">伊弗利特 (Ifrit)</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2%</td>
                            <td className="py-3 px-4 text-green-400">+4</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4">-</td>
                          </tr>
                          <tr className="hover:bg-[#0c1821] transition-colors">
                            <td className="py-3 px-4 font-medium text-cyan-100">希瓦 (Shiva)</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+3%</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+4</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                          </tr>
                          <tr className="hover:bg-[#0c1821] transition-colors">
                            <td className="py-3 px-4 font-medium text-cyan-100">陆行鸟&莫古力</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2%</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+4</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                          </tr>
                          <tr className="hover:bg-[#0c1821] transition-colors">
                            <td className="py-3 px-4 font-medium text-cyan-100">胖陆行鸟</td>
                            <td className="py-3 px-4 text-green-400">+5%</td>
                            <td className="py-3 px-4 text-green-400">+2%</td>
                            <td className="py-3 px-4 text-green-400">+4</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                          </tr>
                          <tr className="hover:bg-[#0c1821] transition-colors">
                            <td className="py-3 px-4 font-medium text-cyan-100">利维坦</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+4%</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+4</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                          </tr>
                          <tr className="hover:bg-[#0c1821] transition-colors">
                            <td className="py-3 px-4 font-medium text-cyan-100">巴哈姆特</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+5%</td>
                            <td className="py-3 px-4 text-green-400">+4</td>
                            <td className="py-3 px-4 text-green-400">+4</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4 text-green-400">+2</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h3 id="section-5-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.6 Boss战：罗榭 (Roche)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight: Roche
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在战斗开始时，罗榭会恢复你的 HP 和 MP，说真的，他真是太好了。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      对于大多数 Boss 和独特的敌人，总有某种“技巧”可以相对轻松地击败他们。在这种情况下，这个技巧是<strong>招架 (Parry) 罗榭的攻击，而不是积极地追击他。</strong>
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">第一阶段</h5>
                        <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>开始战斗时，进入<strong>勇穴模式 (Punisher Mode)</strong> 并按 R1 防御。</li>
                          <li>当罗榭攻击时，克劳德受到的伤害会减少并会进行招架，从而增加罗榭的力竭值。</li>
                          <li>克劳德已经处于勇穴模式，所以在罗榭能够再次攻击之前，<strong>给他一轮猛烈的攻击，然后回到防御状态。</strong></li>
                          <li>如果罗榭蓄力魔法攻击，尽力避开它，如果可以的话进行攻击，然后回到防御状态。</li>
                          <li>一旦克劳德储备了一些 ATB，他就可以用<strong>火属性魔法 (Fire)</strong> 代替那些物理攻击，这是罗榭的弱点。</li>
                          <li>罗榭的“陷危 (Pressured)”状态持续时间不长，但如果你能在它结束前发动<strong>突刺 (Focused Thrust)</strong>，你可以大大增加他的力竭值。</li>
                        </ul>
                      </div>
                      
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">第二阶段</h5>
                        <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>在战斗的第二阶段，罗榭攻击后会背对克劳德几秒钟。像以前一样招架，<strong>趁他背对着你时造成伤害</strong>，然后回到防御状态。</li>
                          <li>坚持这样做并根据需要进行治疗，你最终会使罗榭力竭。用<strong>奋力一击 (Braver)</strong> 或者，如果可能的话，用<strong>极限技 (Limit Break)</strong> 终结他。</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-[14px] text-[#5c7e82] italic mt-4 p-3 bg-[#080d14]/90 backdrop-blur-md rounded border border-[#112a32]">
                      总结：在你的招架和火属性攻击之间，罗榭应该会相当快地力竭。在勇穴模式下建立一些 ATB，然后用它施放火属性法术或奋力一击来结束战斗。
                    </p>
                  </div>

                  <h3 id="section-5-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.7 返回贫民窟与结算报酬</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：返回贫民窟 (Return to the Slums)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      带领你回到贫民窟时，杰西会打开左边的一扇门，带你走下一条狭窄的通道。当通道向右（北）拐弯时，看向你的左边，会发现一颗<strong>复活魔晶石 (Revival Materia)</strong>。
                    </p>
                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded p-4 text-[14px] text-[#a5c3c7]">
                      <strong>💡 困难模式预警：</strong>在困难模式中，你将不被允许使用物品，所以当你的团队成员“失去意识”时，凤凰尾巴 (Phoenix Downs) 将毫无用处。因此，你会希望为你的每个活跃角色准备一颗升满级的复活魔晶石。我们稍后会在路上再买 3 颗。
                    </div>
                  </div>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：剩余的报酬 (Remaining Payment)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      把魏格送回家见他的猫之后，去见杰西，以获得一些感激之情和一颗<strong>护盾魔晶石 (Barrier Materia)</strong>。
                    </p>
                  </div>

                  <h3 id="section-5-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.8 贫民窟的智慧与调整装备</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：贫民窟的智慧 (Slum Wisdom)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      当克劳德回到他的房间时，蒂法会来看他。当她离开时，看屏幕的左下角。当“菜单”图标出现时，<strong>按住方块键 (Square button)</strong>。这将允许你在下一场战斗前调整装备和魔晶石。
                    </p>
                  </div>

                  <h3 id="section-5-9" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.9 突袭与虚无魔物战</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：突如其来的袭击 (Sudden Attack)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      你将与 2 波虚无魔物 (Spectres) 战斗：
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li><strong>第一波：</strong>只需击败所有的敌人。</li>
                      <li><strong>第二波：</strong>击败神秘的虚无魔物 (Mysterious Spectres) 会增加<strong>谜团虚无魔物 (Enigmatic Spectre)</strong> 的力竭槽，并使其成为可攻击的目标。</li>
                      <li>当收到一条信息说谜团虚无魔物处于脆弱状态时，<strong>只要他处于陷危 (Pressured) 状态，就将你的攻击集中在他身上。</strong></li>
                      <li>一旦陷危状态结束，将你的精力重新转移到神秘的虚无魔物身上，因为此时谜团虚无魔物将抵抗伤害。</li>
                    </ul>
                  </div>

                  <h3 id="section-5-10" className="text-xl mt-8 mb-4 font-bold text-cyan-100">5.10 新的行动与章节结尾</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：新的行动 (A New Operation)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>回到酒吧，和魏格交谈。如果你之前在飞镖游戏排行榜上获得了第一名，他会给你一颗<strong>提升运气魔晶石 (Luck Up Materia)</strong>。</li>
                      <li>在火车站与巴雷特会合。至此，第四章结束！</li>
                    </ul>
                  </div>

                  <h2 id="section-6" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     六、第五章：迷宫般的通道 (Dogged Pursuit)
                  </h2>

                  <h3 id="section-6-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">6.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>在这一关中我们只有 2 个与奖杯相关的物品要拿，其中一个是自动获得的。和第四章一样，你应该能够在我的最少帮助下毫无困难地找到路。</li>
                      <li>记住继续对敌人使用<strong>“洞察 (Assess)”</strong>，并遵循我们一直在练习的战斗基础，你应该会在这里做得很好。</li>
                      <li>沿途有很多侧边通道，你应该去探索。有些包含有用的物品，所以记得要四处看看。</li>
                    </ul>
                  </div>

                  <h3 id="section-6-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">6.2 开往第四区</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：开往第四区 (All Aboard for Sector 4)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      当你要去查看巴雷特时，火车座位上有一颗<strong>恢复魔晶石 (Healing Materia)</strong>，但它真的很难错过。我的意思是，它就像一个胳膊上装着机关枪的家伙一样显眼。
                    </p>
                  </div>

                  <h3 id="section-6-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">6.3 寻找同伴与印记</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：寻找同伴 (Looking for a Friend)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>确保在螺旋隧道 (Corkscrew Tunnel) 的第一场战斗后使用长椅恢复。</li>
                      <li>你正从长椅向东北 (NE) 走。西南 (SW) 方向有一个房间，但里面只有一个药水。</li>
                      <li>向北走，消灭敌人并沿途探索所有的侧边通道。一旦蒂法发现巴雷特，她会带你上楼，从而为你指路。我喜欢巴雷特的胜利之歌！</li>
                    </ul>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：寻找印记 (Find Stamp)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>如果在过场动画后查看地图，看起来你可以走任何一个方向。然而，由于克劳德面向西南 (SW)，那是该走的方向。<strong>通常来说，过场动画后前进的路径就是你主角面向的方向。</strong></li>
                      <li>注意当你接近楼梯时，蒂法和巴雷特跑到前面，再次为你指路。</li>
                      <li>在杀死毒气爬虫女王 (Queen Gashtrike) 之后，你面临的是一个死胡同。快速查看你的地图显示你需要转身向东南 (SE) 走。</li>
                      <li>在铁路控制区 E2 的东南角有一个你可以使用的长椅。</li>
                      <li>穿过长椅，你将通过一扇门并向西北 (NW) 走。路径将会分开。北边的路径有一个房间可以探索，正如印记 (Stamp) 会告诉你的那样，南边的路径是前进的方向。</li>
                    </ul>
                  </div>

                  <h3 id="section-6-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">6.4 秘密通道与中毒魔晶石</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：秘密通道 (Secret Passageway)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在靠近螺旋隧道尽头与哨兵发射器 (Sentry Launchers) 战斗后，你将上楼梯。路径第二次分开时，<strong>直走而不是向右走</strong>。你会找到一个用于恢复的长椅和一台自动售货机，里面卖 <strong>音乐唱片 #28</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      如果你查看你的地图，你会发现你正在经过通往下一个检查点的岔路。在继续前进之前，<strong>不要忘记捡起地板上的雷霆魔晶石 (Lightning Materia)</strong>。
                    </p>
                  </div>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3 flex items-center gap-2">
                      <span>🧪</span> 中毒魔晶石 (Poison Materia)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      出售音乐唱片 #28 的自动售货机也出售<strong>中毒魔晶石 (Poison Materia)</strong>，这是一种非常有用且应该备有的魔晶石。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      通常情况下，机甲不能被毒化，但大多数人类和动物敌人可以。许多非常强壮的敌人可以被毒化，让你即使在他们无法触及、无法用近战武器攻击的时候也能削减他们大量的 HP。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      你将在第 8 章的 boss 战中需要中毒魔晶石，所以我<strong>强烈建议你现在就买一颗</strong>。
                    </p>
                  </div>
                  
                  <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg my-6 border-l-4 border-l-[#00f0ff]">
                    <h4 className="text-[15px] font-bold text-cyan-300 mb-2">未雨绸缪 (Planning Ahead)</h4>
                    <p className="text-[15px] text-[#a5c3c7] m-0 mb-3">
                      <strong>雷霆魔晶石</strong>是对抗机器最好的武器之一，你现在应该至少有 2 颗了。到第 7 章结束时，你会希望将这两颗都提升到 2 级以便可以使用中级雷电魔法 (Thundara)，所以在此期间尽量将这两颗都装备在活跃角色身上。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] m-0">
                      你可能想检查一下你的物品栏。你现在应该有 5 张唱片 —— #1, 3, 4, 27, 和 28。
                    </p>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：楼梯绕道 (Stairway Detour)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      在去打 Boss 的路上你必须再打一场战斗。如果你愿意，你可以折返回你刚刚使用过的长椅去补充 HP 和 MP。这一关的 boss 是<strong>废弃机器人 (Crab Warden)</strong>。
                    </p>
                  </div>

                  <h3 id="section-6-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">6.5 Boss战：废弃机器人 (Crab Warden)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight: Crab Warden
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      记住这个一般规则：<strong>当个别部位（例如腿）可以作为目标时，你要优先集中攻击它们</strong>，这场战斗也不例外。
                    </p>
                    <p className="text-[14px] text-[#5c7e82] italic m-0 mb-4">
                      （北墙边有一些箱子，西边的包含一个魔晄碎片。如果你 MP 不足，可以使用这个。）
                    </p>
                    
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li><strong>一次集中攻击一条腿</strong>，让你的整个团队试图破坏那条腿。这样做会使废弃机器人的力竭值增加将近一半。</li>
                      <li>消灭 2 条腿应该会让它足够接近力竭，以至于你可以将攻击转移到 boss 的身体上，直到它完全力竭。</li>
                      <li>当 boss 力竭时，它的<strong>发生器 (Generator)</strong> 会暴露出来。将你的攻击集中在那里，因为它们基本上会造成双倍伤害。</li>
                      <li>当 boss 的 HP 降至 70% 以下时，会出现 3 架浮游炮 (Slug Rays)。优先用巴雷特的猛烈枪击或雷属性魔法 (Thunder) 解决它们，因为它们可以眩晕你。</li>
                      <li>解决掉浮游炮后，消灭另外 2 条腿，然后像以前一样使废弃机器人力竭并攻击发生器。</li>
                      <li>废弃机器人有一种名为“高压电场 (Surge)”的攻击，它会在爆炸前让铁轨充满电（使它们变成蓝色）。发生这种情况时，确保你<strong>远离铁轨</strong>。</li>
                      <li>辅助武器现在应该成为可攻击目标了。选择一个并用雷属性魔法打击它直到它被破坏。这应该能让废弃机器人几乎力竭。</li>
                      <li>使废弃机器人力竭会短暂暴露发生器。用雷属性魔法击中它，如果可以的话尽量破坏它。</li>
                      <li>如果你没有破坏发生器，<strong>驾驶员 (Pilot)</strong> 将作为目标出现。破坏驾驶员将永久暴露发生器，让你能够一直用雷属性魔法攻击它直到战斗结束。</li>
                    </ul>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      击败废弃机器人后，你将获得一套给蒂法用的<strong>金属指虎 (Metal Knuckles)</strong>。给她装备上，适当地填满魔晶石槽，并在心里记下尽可能多地使用她的新能力<strong>“压制 (Overpower)”</strong>直到她学会它。记住将它们设置为自动升级。
                    </p>
                  </div>

                  <h3 id="section-6-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">6.6 蒂法的金属指虎与压制能力</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🥊 金属指虎 (Metal Knuckles) 与压制 (Overpower)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      就纯粹的攻击力而言，金属指虎是蒂法最强大的武器。例如，皮革手套（以及蒂法的大多数武器）的物理攻击与魔法攻击的比率约为 1.5。而对于金属指虎，该比率为 <strong>4.57</strong>。代价是，每次击打造成较少伤害的其他武器可以达到更高的速度属性，因此可能在单位时间内造成更多的伤害。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      早期的升级提供 +7 的速度提升，是蒂法所有武器中第二低的。后期的升级包括 30% 的专注激活（以 2 级气进入战斗）和 10% 的 ATB 充能率增加。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      <strong>压制 (Overpower)</strong> 能力消耗 1 格 ATB。虽然它的伤害低于下压踢，但这种特殊攻击在增加力竭和陷危方面高于平均水平。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      要获得<strong>熟练度奖励 (Proficiency Bonus)</strong>，只需让蒂法在使用压制后立即执行一连串正常（即方块键）攻击。
                    </p>
                  </div>

                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed my-8 pb-8 border-b border-[#112a32]">
                    永远乐观的巴雷特警告我们，事情不会变得更容易。在这个令人“振奋”的提示下，我们结束了第五章。
                  </p>

                  <h2 id="section-7" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     七、第六章：贫民窟的太阳 (Light the Way)
                  </h2>

                  <h3 id="section-7-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">7.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>再一次，这里只有 2 个与奖杯相关的物品要收集（一把武器和一张音乐唱片），而且武器是自动获得的。然而，我们也有机会收集 <strong>3 颗必备的魔晶石</strong>，所以我们一定要确保不要错过。</li>
                      <li>此外，你将有机会通过完成一个相当简单的事件来获得一个奖杯。仔细阅读，这样你就不会错过这个了！</li>
                      <li>与往常不同的是，由于在这个相当令人困惑的区域你的路径并不总是很清晰，我将尽最大努力引导你走过所有的弯路。</li>
                      <li>即使我会尝试给出明确的方向，也请<strong>务必经常查看你的地图</strong>。我第一次玩的时候，转错了几个弯，结果因为花了太长时间才到达目的地而被巴雷特责骂。你真的不会想惹恼巴雷特的。</li>
                    </ul>
                  </div>

                  <h3 id="section-7-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">7.2 前往G区与H区</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：前往G区 (Head for Section G)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      跟着蒂法和巴雷特爬下梯子，然后向东走过木板。继续跟着他们进入控制室。
                    </p>
                  </div>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：前往H区 (Head for Section H)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>向南走，与 2 只毒气爬虫 (Grashtrikes) 战斗，然后向东再向北前往标记为 <strong>G-04</strong> 的区域。走下楼梯到 <strong>G-05</strong> 并沿着线性路径前进。</li>
                      <li>你会在 <strong>H-07</strong> 看到一些魔晶石，但你无法从这边拿到它。幸运的是，它的位置会被标记在你的地图上。</li>
                      <li>西边的方形区域是一个死胡同，有 3 只毒气爬虫和一个装有万能药 (Remedy) 的宝箱。消灭敌人，拿到万能药，然后原路返回向东并上楼梯。蒂法会建议你停下来确定方向。</li>
                      <li>沿着线性路径穿过 <strong>G-06</strong> 和 <strong>G-07</strong>，下楼梯，爬上梯子，经过风扇。你会看到另一颗你够不到的魔晶石，但我们稍后会回来拿。你最终会到达带有货物平台的 <strong>H-01</strong>。</li>
                    </ul>
                  </div>

                  <h3 id="section-7-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">7.3 关闭第一与第二盏太阳灯</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：关闭第一盏太阳灯 (One Sunlamp Down)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>在长椅上恢复，然后向东再向北爬楼梯。</li>
                      <li>清理该区域的敌人，然后向北走去关灯。</li>
                      <li>向南折返并移动平台，这样你就可以继续向南走。</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：关闭第二盏太阳灯 (Two Sunlamps Down)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>沿着线性路径向东然后向北走，必要时清理敌人。</li>
                      <li>继续向东并关闭第二盏灯。</li>
                    </ul>
                  </div>

                  <h3 id="section-7-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">7.4 收集元素魔晶石与第三盏太阳灯</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：关闭第三盏太阳灯 (Three Sunlamps Down)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>爬下梯子，然后乘坐“升降机”向西回到 <strong>H-02</strong>。（严格来说，这不是升降机，因为它是水平移动而不是垂直移动的，但我们就不计较了）。</li>
                      <li>向南走，乘坐另一台升降机向东。如果有必要，你可以在乘坐升降机前，快速绕道去西边的长椅恢复。</li>
                      <li>向南走，然后逆时针绕过 C 形区域。</li>
                    </ul>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded-lg my-4 border-l-4 border-l-[#00f0ff]">
                      <p className="text-[14px] text-[#a5c3c7] m-0 italic">
                        如果你正在玩困难模式 (Hard Mode)，并且已经获得了这个区域的“属性魔晶石 (Elemental Materia)”，你可以跳过下面的步骤。
                      </p>
                    </div>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                        ✨ 收集：MP提升魔晶石 & 属性魔晶石
                      </h5>
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>在 <strong>H-05</strong> 的西南角，爬下宝箱旁边的梯子。</li>
                        <li>向东北 (NE) 方向走，迎战 2 只毒气爬虫女王。击败它们后，你就可以使用北边的控制面板。使用它将平台<strong>一直向下移动</strong>，并从移动平台上取回 <strong>MP 提升魔晶石 (MP Up Materia)</strong>。</li>
                        <li>现在升起平台，这样你就可以穿过到另一边，并取回你早些时候看到但够不到的<strong>属性魔晶石 (Elemental Materia)</strong>。</li>
                        <li><strong className="text-cyan-300">注意：属性魔晶石是游戏中最有用的魔晶石之一，而且整个游戏中只有 2 颗，所以这是一个非常棒的发现！</strong></li>
                      </ul>
                    </div>

                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>向南和向西返回到 <strong>H-06</strong> 处的梯子并爬上去。（困难模式玩家从这里恢复阅读）</li>
                      <li>向东和向南前往另一个控制面板。</li>
                      <li>向下和向左移动平台，以便你可以穿过。</li>
                      <li>清理敌人，然后爬上梯子关闭第三盏灯。你可能想先戴上墨镜。</li>
                    </ul>
                  </div>

                  <h3 id="section-7-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">7.5 隐藏区域与挑战准备</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：为平台供电 (Power for the Platform)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      前往回到 <strong>H-01</strong> 处的标记。也就是爬下梯子，向西穿过移动平台，顺时针绕过 C 形区域，然后向北乘坐向西的升降机，继续向西到达长椅。
                    </p>
                    <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] leading-relaxed m-0 mb-4 bg-[#080d14]/90 backdrop-blur-md p-3 rounded">
                      在长椅处休息，但先别使用货物平台！(DON'T USE THE CARGO PLATFORM YET!)
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      原谅我的大喊大叫，但如果你从这里离开，你会错过一张音乐唱片并留下一个奖杯，我知道你不想做这两件事。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      查看你的地图，你会看到西边有一个你还没有去过的区域。这通常意味着那里藏着好东西。你以前无法进入这个区域，但现在灯灭了，你有电了，你可以进去了。所以...
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-medium border-l-4 border-l-[#00f0ff] pl-3">
                      乘坐新的升降机向西前往新区域。爬上梯子进入房间。从自动售货机购买 <strong>音乐唱片 #18</strong> 并做好准备，因为你面前有一个挑战。
                    </p>
                  </div>

                  <h3 id="section-7-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">7.6 一分钟限时挑战与“清理小队”奖杯</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3366]"></div>
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 flex items-center gap-2">
                      <span>⏱️</span> 一分钟限时挑战
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在与这个房间的控制台互动后，你只有<strong>刚好一分钟</strong>的时间进入隔壁房间，击败里面的任何敌人，然后与另一个控制台互动来停止计时器。你可能需要尝试几次，但你能做到的，而且这是值得的。
                    </p>
                    <p className="text-[14px] text-[#5c7e82] italic m-0 mb-4">
                      （我认为房间里可能出现的敌人会改变，但在第一次尝试时我总是遇到一只毒气爬虫女王 (Queen Gashtrike) 和 2 架哨兵射线 (Sentry Rays)。）
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-3 mt-6 text-[15px]">战斗策略</h5>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>给克劳德装备他的破坏剑 (Buster Sword)，并使用其连接槽装备你的新<strong>属性魔晶石和冰之魔晶石</strong>。这将使他的物理攻击对女王造成更大的伤害。确保蒂法和巴雷特每人都有一颗<strong>雷霆魔晶石 (Lightning Materia)</strong>。</li>
                      <li>让克劳德在勇穴模式下攻击女王（她在左边的第二个壁龛里），直到他陷入狂暴并拥有一个 ATB 槽。使用它施放中级冰魔法 (Blizzara)（如果有），如果没有则施放初级冰魔法 (Blizzard)。</li>
                      <li>让巴雷特将他的“猛烈枪击 (Overcharge)”攻击倾泻在一架哨兵射线上。当他有一个 ATB 时，让他用中级雷魔法 (Thundara) 或初级雷魔法 (Thunder) 攻击它。</li>
                      <li>派蒂法去对付女王，试着让她力竭。当她有一个 ATB 槽时，她可以向哨兵射线施放雷魔法。</li>
                      <li>此时，哨兵射线应该已经被消灭了，而毒气爬虫女王的血条应该非常低。锁定她并终结她，然后向北走与控制台互动以打开门。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded text-[14px] text-[#a5c3c7] mb-4">
                      <strong className="text-[#00f0ff]">💡 提示：</strong>如果你做得很完美，这只需要大约 30 秒。如果你在第一次尝试中没有成功，在第二次尝试时你会遇到一场简单得多的战斗（3 只毒气爬虫）。
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      穿过门并向右转，找到你之前在风扇里看到的陆行鸟和莫古力魔晶石 (Chocobo and Moogle Materia)。这也为你赢得了“清理小队 (Cleanup Crew)”奖杯。
                    </p>

                    <div className="mt-6 border-t border-[#112a32] pt-4">
                      <h5 className="font-bold text-cyan-300 mb-2 text-sm flex items-center gap-2">
                        <span>📚</span> 困难模式：格斗术秘籍 第六卷
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        当你在困难模式下回到本章时，一定要再次进入这个特殊区域。击败敌人将再次打开门。在里面你会找到一个宝箱，里面装有蒂法的<strong>《格斗术秘籍 第六卷 (Way of the Fist Vol. VI Manuscript)》</strong>。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-7-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">7.7 前往动力平台与最终战</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：前往动力平台 (To the Power Platform)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      你现在可以爬下梯子，向东走启动货物平台，然后乘它向南前往新区域。
                    </p>
                    
                    <h5 className="font-bold text-[#00f0ff] mb-2 mt-6 text-sm">⚔️ 本章最终战</h5>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                      你的下一场战斗是对抗 6 架机甲：哨兵射线 x2，哨兵发射器 x2，试作型哨兵枪 (Sentry Gun Prototype) x2。
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>一般来说，像这样的机甲对物理攻击的防御相对较高，而魔法防御相对较低。因此，你要尽可能使用<strong>雷属性魔法</strong>来造成伤害。这是本章的最后一场战斗，所以没有必要节省魔法。</li>
                      <li>给每个人装备<strong>雷霆魔晶石</strong>，并在其中一名团队成员的武器上连接<strong>属性-雷霆魔晶石对</strong>。</li>
                      <li>哨兵射线和试作型哨兵枪无法用近战攻击够到。</li>
                      <li>让巴雷特对一架哨兵射线使用他的“猛烈枪击”，然后利用产生的 ATB 向另一架投掷雷属性法术。他的普通攻击应该能够解决掉这两架。</li>
                      <li>克劳德和蒂法可以攻击试作型哨兵枪来积累 ATB，然后使用这些 ATB 施放雷属性法术。</li>
                    </ul>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-medium">
                      战斗结束后，只要顺着路走到比格斯那里。他会给你一些装备——包括给巴雷特的<strong>轻机枪 (Light Machine Gun)</strong>——并且（几乎）得到了大个子的一个大大的拥抱。
                    </p>
                  </div>

                  <h3 id="section-7-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">7.8 巴雷特的轻机枪与雪中送炭能力</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🔫 轻机枪 (Light Machine Gun) 与雪中送炭 (Lifesaver)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      轻机枪的属性较少侧重于物理伤害，更多侧重于魔法，其魔法属性通常比其攻击属性高出约 50%。在巴雷特的远程武器中，它提供的 HP 增加是最少的。综合这两个因素，它似乎并不是特别适合巴雷特作为物理攻击者和坦克的固有优势。不过，在它的最高级别，它将获得“绝处逢生 (Reprieve)”能力，这始终是一个加分项。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      轻机枪的武器能力是<strong>雪中送炭 (Lifesaver)</strong>。激活它需要消耗一格 ATB，它会<strong>将盟友受到的所有伤害的 70% 转移给巴雷特</strong>。例如，如果激活了雪中送炭，而敌人对克劳德造成了 100 HP 的伤害，克劳德将承受 30 HP 的伤害，而巴雷特将承受 70 HP 的伤害。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>转移给巴雷特的伤害不能使他的 HP 降至 1 以下，即雪中送炭本身不能杀死巴雷特。</li>
                      <li>激活坚忍不拔 (Steelskin) <strong>不会</strong>减少从盟友转移给巴雷特的伤害，但当然会减少他直接从敌人那里受到的伤害。</li>
                      <li>雪中送炭允许你将巴雷特用作坦克，保护像蒂法这样能输出更多伤害但防御较低的脆弱队友。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7] mb-4">
                      <strong>📈 熟练度奖励：</strong>获得熟练度奖励 (Proficiency Bonus) 的条件说明有点误导人。你可能会认为“恢复盟友的 HP”是指用药水或法术治疗盟友，但事实并非如此。相反，在巴雷特使用雪中送炭后，<strong>只要有盟友受到伤害就行</strong>。这种伤害是从巴雷特的 HP 中“恢复”的，从而为你带来奖励。
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-medium">
                      既然你有了新武器，记得装备它，设置为自动升级，并记下它独特的能力（雪中送炭），你应该抓住每一个机会使用它，直到学会为止。
                    </p>
                  </div>

                  <h2 id="section-8" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     八、第七章：陷阱启动 (A Trap is Sprung)
                  </h2>

                  <h3 id="section-8-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">8.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>在这一章中，我们将拾取一张音乐唱片和一把武器，并获得一个解谜的奖杯。这些都不会是自动获得的，所以让我们保持敏锐的眼光去寻找它们。</li>
                      <li>虽然有些错综复杂，但我发现这一章在导航上远没有第六章那么令人困惑。</li>
                    </ul>
                  </div>

                  <h3 id="section-8-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">8.2 魔晶石配对策略：属性弱点</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3 flex items-center gap-2">
                      <span>💡</span> 免费战术提示 (Enemies with Elemental Weaknesses)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      由于你将在这个区域与大量机甲战斗，而且巴雷特的新武器有一对相连的魔晶石槽，所以在一个槽中装备<strong>雷霆魔晶石 (Lightning Materia)</strong>，在另一个槽中装备你新获得的<strong>属性魔晶石 (Elemental Materia)</strong>。现在他的普通攻击将附带雷属性，并对机甲造成更多伤害。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在对抗人类敌人的战斗中，你应该<strong>用火属性 (Fire) 替换雷属性</strong>。当然，你不能在战斗中更改魔晶石，所以你需要提前预判。一般来说，<strong>动物弱冰 (Ice)，飞行敌人弱风 (Wind)</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      像这样将属性魔晶石对装备在你的<strong>防具 (Armor)</strong> 上而不是武器上，会使你抵抗来自该元素的伤害，或者，当魔晶石升满级时，当你的角色受到该元素攻击时，实际上可以恢复 HP。
                    </p>
                  </div>

                  <h3 id="section-8-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">8.3 前往魔晄储存区</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：到达魔晄储存区 (Reach Mako Storage)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      一直向西南 (SW) 走。当你到达死胡同时，蒂法会建议一种“有创意”的继续前进的方法。
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>请注意，你通常是在这里往下走，而且位置编号会变大（例如，从 B5 到 B6）。如果你记住这一点，去魔晄炉应该没有任何困难。</li>
                      <li>你即将遇到大量人类敌人，所以现在是<strong>将巴雷特武器上的雷霆魔晶石换成火之魔晶石</strong>的好时机。</li>
                    </ul>
                  </div>

                  <h3 id="section-8-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">8.4 判处死刑与钥匙卡谜题</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 目标：判处死刑 (Sentenced to Death)
                    </h4>
                    
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>你需要一张钥匙卡 (keycard)，你会发现它很方便地在你身后西墙边闪闪发光。使用它访问控制台并处理掉一个 <strong>M 单位</strong>。</li>
                      <li>这里事情可能会变得混乱。虽然检查点标记在你南边，但你实际上要向北走。这是因为标记在不同的楼层。当有疑问时，跟着蒂法和巴雷特走。还要观察到你的团队现在正在向上走。</li>
                      <li>在 <strong>B7</strong> 的房间里，你会沿着西墙找到一张钥匙卡，并有 2 种选择来削弱你即将到来的敌人。说真的，这里由你决定。我选择禁用 AI，这样它就会减速。<strong>不要忽略西北角免费的雷霆魔晶石。</strong></li>
                      <li>从南门出去到 <strong>B6</strong>。在击败通道里的敌人后，看西南角找到一张奖励钥匙卡！继续向上走到标有 B6 的门。</li>
                      <li>清理敌人并从西墙收集另一张钥匙卡。你有 3 个选择，但只有 2 张钥匙卡。同样，这取决于你。</li>
                      <li>从北边退出，看到前面紫色的宝箱。<strong>紫色宝箱意味着武器。</strong>在这种情况下，你为蒂法获得了一副<strong>音速拳套 (Sonic Strikers)</strong>。装备它，设置为自动升级，填满魔晶石，并记下要学习的新能力“下段踢 (Focused Strike)”。</li>
                    </ul>
                  </div>

                  <h3 id="section-8-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">8.5 蒂法的音速拳套与下段踢能力</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🥊 音速拳套 (Sonic Strikers) 与下段踢 (Focused Strike)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      音速拳套提供与皮革手套大约相同的 3:2 物理攻击与魔法攻击比率，尽管对于音速拳套来说这两个数字通常都略低。升级为蒂法提供了所有武器中<strong>第二高的速度提升 (21)</strong> 和最大的 MP 增加 (31)。后期的升级提供了高达 50% 的几率激活专注（以 2 级气进入战斗），而通关后的升级将使治疗消耗的 MP 减少 20%。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      <strong>下段踢 (Focused Strike)</strong> 能力消耗 1 格 ATB，这是蒂法最有用的武器能力之一。执行时，下段踢会让蒂法向后跳以避免被攻击，然后向前冲刺，接着再次向后跳。该攻击会造成伤害，但下段踢的亮点在于它能令人印象深刻地<strong>提升力竭值 (Stagger)</strong>，特别是当敌人处于陷危状态时。作为奖励，仅仅通过执行这次攻击，蒂法就能<strong>恢复高达 70% 的 ATB 槽</strong>。
                    </p>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7] mb-4">
                      <strong>🔄 连招策略：</strong>下段踢与升龙拳 (Whirling Uppercut) 结合得非常好，你还记得，升龙拳至少恢复 40% 的 ATB 槽。当面对一个处于陷危的敌人时，蒂法可以执行下段踢来增加力竭，然后紧接着使用升龙拳。现在她已经有超过一整格的 ATB (70% + 40% &gt; 100%)，并且可以重复这个序列而无需停下来补充 ATB。对于许多敌人来说，这将非常快地导致力竭。
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-medium">
                      熟练度奖励是不言自明的，但这并不能阻止我解释它。如果蒂法的下段踢攻击使敌人力竭，则获得奖励。
                    </p>
                  </div>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>继续上坡到 <strong>B5</strong>。击败敌人并找到 2 张钥匙卡——一张在东墙边，一张在西北角。在 4 个系统中选择 2 个标记为废弃，然后从南边退出。</li>
                      <li>沿着线性路径前往 <strong>B4</strong> 处的标记。击败切割机 (Cutter) 以打开前进的道路。</li>
                    </ul>
                  </div>

                  <h3 id="section-8-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">8.6 突袭大门与“同步齐心”奖杯</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3366]"></div>
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 目标：突袭大门 (Storm the Gates)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当你到达前门 (Front Gate) 楼层时，解锁并进入房间，耐心地尝试与团队其他成员<strong>同步推拉杆</strong>。这将解锁你需要前进的门。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7] mb-4">
                      <strong className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">🏆 同步齐心 (In Lockstep) 奖杯：</strong>
                      但在继续前进之前，你还想解锁通往处理室 (Disposal Room) 的门。回到拉杆处并同步推拉杆 <strong>4 次</strong>。你将获得“同步齐心”奖杯。这极其困难且令人沮丧，所以如果尝试了几十次也不要气馁。
                    </div>

                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>进入处理室（它是地图上的紫色发现标记）并拉下开关。在那里你会找到几个要打开的“宝箱”（对我来说是 6 个宝箱）以及一颗稀有的<strong>提升魔法魔晶石 (Magic Up Materia)</strong>。</li>
                      <li>向北绕一圈，找到一张长椅和一台卖 <strong>音乐唱片 #2</strong> 的自动售货机。在购物时，你应该买下促销的 3 个特级药水 (Megapotions)。它们在接下来的战斗中可能会派上用场。</li>
                      <li>准备好后，向西退出，然后向北前往标记处，与本章的 boss 战斗。</li>
                    </ul>
                  </div>

                  <h3 id="section-8-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">8.7 Boss战：破甲炮 (Airbuster)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight: Airbuster
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">第一阶段</h5>
                        <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>在战斗的第一阶段，你可以通过将其 HP 减少 8% 来使破甲炮陷入陷危 (Pressure) 状态。</li>
                          <li>雷属性魔法和巴雷特的猛烈枪击 (Overcharge) 会造成不错的伤害，但你<strong>也必须进行防守</strong>。</li>
                          <li>任何被震爆弹 (Stun Grenades) 或手指射线 (Fingerbeams) 击中的人都会被眩晕，导致破甲炮对那个无助的角色释放大轰炸 (Big Bomber) 攻击。</li>
                        </ul>
                      </div>
                      
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">第二阶段</h5>
                        <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>在第二阶段，破甲炮会分离它的手臂。你必须击败其中一只，才能再次安全地攻击破甲炮本体。</li>
                          <li>尝试为克劳德和蒂法<strong>各保留至少一格 ATB 槽</strong>，为战斗的第三阶段做准备。</li>
                        </ul>
                      </div>

                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">第三阶段 (半血以后)</h5>
                        <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>在半血时，破甲炮会飘走，除了巴雷特之外谁也够不到。使用那些储备的 ATB 向它施放<strong>雷属性魔法</strong>，将它打回近战范围内。</li>
                          <li>在 15% 血量时，最后阶段开始。破甲炮将以 5 次连续攻击开始。尽可能避开它们，治疗你的团队，并准备致命一击，使用你拥有的任何 MP 向它施放雷属性法术。</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-[14px] text-[#5c7e82] italic mt-6 p-3 bg-[#080d14]/90 backdrop-blur-md rounded border border-[#112a32]">
                      作者碎碎念：破甲炮其实没那么难打，但我（请允许我抱怨一下）真的很讨厌当一个 boss 飞到你够不着的地方，然后用攻击轰炸你。当然，巴雷特可以用他的远程攻击造成一些伤害，但克劳德和蒂法做不了什么，因为他们的 ATB 充满得太慢了。啊啊啊！不管怎样，破甲炮的失败导致了如此爆炸性的结局，以至于连蒂法都被卷走了，第七章就此结束。
                    </p>
                  </div>

                  <h2 id="section-9" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     九、第八章：重逢之花 (Budding Bodyguard)
                  </h2>

                  <h3 id="section-9-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>这一章有很多事情要做。我们要获取 <strong>2 把新武器</strong>，获得一个<strong>新召唤兽</strong>，承担许多<strong>支线任务</strong>，追踪 <strong>5 张音乐唱片</strong>，并采取一些具体步骤来最终获得<strong>“最佳服装 (Dressed to the Nines)”奖杯</strong>。</li>
                      <li>要特别小心，不要偏离我为你规划的路线，这样你就能确保不会错过任何东西。</li>
                      <li>就我而言，我将尽力非常详尽地描述你的每一个动作，以帮助你专注于任务。</li>
                    </ul>
                  </div>

                  <h3 id="section-9-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.2 再度相遇与 Boss 战：雷诺 (Reno)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：再度相遇 (Second Chance Meeting)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      与爱丽丝 (Aerith) 会合，消灭一些神罗的暴徒，然后你将面对雷诺 (Reno)。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mt-6">
                      <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                        <span>⚔️</span> Boss Fight: Reno
                      </h4>
                      
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                        <li>给克劳德装备你闪亮的新<strong>钛金手镯 (Titanium Bangle)</strong>，里面装满恢复魔晶石 (Healing Materia) 和 HP 提升魔晶石 (HP Up Materia)。在他的破坏剑相连的槽位中，装备<strong>属性-火焰 (Elemental - Fire)</strong> 魔晶石对，并将你新的<strong>中毒魔晶石 (Poison Materia)</strong> 放在其最后一个槽位。雷诺的弱点不是火，但在与雷诺战斗前你必须击败的其他敌人弱火。</li>
                        <li>赢得这场战斗的关键是使用克劳德的<strong>勇穴模式 - 招架 (Punisher Mode - Parry)</strong> 能力，就像你对付罗榭时那样。</li>
                        <li>所以，当战斗开始时，立即进入勇穴模式并防御。招架雷诺的攻击应该会使他陷入陷危 (Pressure)。那是你卸下一轮勇穴模式攻击的机会，最后用突刺 (Focused Thrust) 结束以增加力竭。然后回到防御状态。</li>
                        <li>当雷诺准备他的电磁射击 (EM Shot) 攻击时，停止防御并闪避。如果克劳德被击中，他将被眩晕 5 秒钟。</li>
                        <li>当你有 ATB 槽并且雷诺的攻击出现停顿时，用<strong>毒属性魔法 (Bio)</strong> 击中他。确保你锁定雷诺，并在他攻击间隙施放 Bio。他实际上移动得很快，甚至可以躲避法术。</li>
                        <li>当雷诺的 HP 降到 50% 以下时，他会扔出一堆电磁地雷 (EM Mines)。这些会造成雷属性伤害并眩晕克劳德。尽可能避开这些，直到克劳德有一两个 ATB 槽，然后使用他的<strong>无尽斩 (Triple Slash)</strong> 能力相当快地消灭它们。</li>
                        <li>继续防御、招架、闪避和攻击，你就能拿下雷诺。</li>
                      </ul>
                    </div>
                  </div>

                  <h3 id="section-9-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.3 逃离教堂与屋顶跑酷</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：逃离教堂 (Escape from the Church)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                      通往屋顶的路是线性的。跟着走就行了。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      穿过屋顶的旅程很容易导航。你很难迷路或错过宝箱。享受角色之间有趣的戏谑吧。就故事而言，这是我最喜欢的游戏部分之一。
                    </p>
                  </div>

                  <h3 id="section-9-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.4 爱丽丝的战斗基础</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：前往车站 (Head for the Station)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      爱丽丝初始装备着<strong>防御杖 (Guard Stick)</strong>。当她加入队伍时，将其设置为自动升级，并记下开始学习她的“圣魔阵 (Arcane Ward)”能力。你也可以给她装备一个配件 (Accessory)。
                    </p>
                  </div>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🌸 爱丽丝的战斗基础 (Aerith's Combat Basics)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      正如你所料，爱丽丝是你最好的魔法使用者。出乎你意料的是，她可以说是你<strong>最强大的进攻角色</strong>。这是因为在《最终幻想7 重制版》中，魔法主宰一切。她也可以安全地从远处攻击，这很好，因为她的防御力仅比蒂法高一点点。
                    </p>

                    <h5 className="font-bold text-cyan-300 mb-2 text-sm mt-4">基础与特殊攻击</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>她的基本攻击是 5 连击的魔法，可以通过按 5 次方块键或仅按住方块键来执行。</li>
                      <li>她的三角攻击是<strong>风暴 (Tempest)</strong>，可以用 2 种方式执行——蓄力或不蓄力。两个版本的风暴都会为爱丽丝恢复一些 ATB，并增加敌人的力竭和/或陷危。</li>
                      <li><strong>不蓄力版本</strong>可以通过只需轻按三角键 3 次来进行 3 次魔法攻击。这些攻击比标准的方块键攻击需要更长的时间。</li>
                      <li>对于<strong>蓄力版本</strong>，按住三角键直到爱丽丝脚下形成一小团云。然后释放三角键发动攻击。部分伤害会立即发生。此外，在目标敌人周围会形成一个“爆炸范围”。几秒钟后，将发生爆炸，该范围内的任何敌人都将受到伤害。</li>
                      <li>由于涉及延迟，这个蓄力版本<strong>最适合移动性低的敌人</strong>，因为高机动性的敌人可以通过简单地移动到范围外来躲避爆炸。</li>
                      <li>蓄力风暴攻击超级酷的一点是，如果它击中目标，它可以为爱丽丝<strong>恢复高达 80% 的 ATB 槽！</strong></li>
                    </ul>

                    <h5 className="font-bold text-cyan-300 mb-2 text-sm mt-4">初始 ATB 能力</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>爱丽丝在游戏开始时有 2 个 ATB 能力——吸魔 (Soul Drain) 和圣魔阵 (Arcane Ward)。</li>
                      <li><strong>吸魔 (Soul Drain)</strong> 消耗一格 ATB 槽。它会对目标敌人造成伤害，并为爱丽丝恢复一些 MP。对于普通敌人，爱丽丝将恢复其最大 MP 的 3%。对于力竭的敌人，这个数字是 15%。吸魔可以打断敌人正在进行的魔法施放。</li>
                    </ul>
                  </div>

                  <h3 id="section-9-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.5 爱丽丝的防御杖与圣魔阵能力</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🪄 防御杖 (Guard Stick) 与圣魔阵 (Arcane Ward)
                    </h4>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      爱丽丝的大多数武器的攻击属性都在 20 多，而且不会随着升级而增加，防御杖也不例外。她武器之间的差异主要在于她的魔法属性，防御杖排在第 4 位，这在目前来说已经很好了。早期的升级将防御和魔法防御都提升 7，并且她可以获得排名第二的 +650 HP 和排名第二的 +34 MP 的总加成。后期的升级提供治疗法术消耗 MP 减少 20% 的效果，并且在通关后游玩时，提供永远好用的“绝处逢生 (Reprieve)”能力，这将允许爱丽丝在每场战斗中从致命打击中恢复一次。
                    </p>
                    
                    <h5 className="font-bold text-cyan-300 mb-2 text-sm mt-4">圣魔阵 (Arcane Ward) 机制解析</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-2">
                      圣魔阵可以说是爱丽丝最好的 ATB 能力。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>花费 1 格 ATB，爱丽丝可以在任何角色周围创建一个“阵 (Ward)”或区域。</li>
                      <li><strong>每当任何盟友站在这阵内并施放攻击性魔法时，该魔法将自动施放两次。</strong></li>
                      <li>阵将持续整整 3 分钟。同时只能存在一个圣魔阵。</li>
                      <li>圣魔阵仅对像火焰 (Fire) 这样的<strong>攻击性法术有效</strong>。治疗法术和状态法术（如中毒 Poison）只会被施放一次。</li>
                      <li>虽然第二次施放不消耗任何额外的 ATB，但它<strong>确实消耗一些 MP</strong>，与你在其他地方可能读到的相反。根据我的实验，该成本似乎大约是通常 MP 成本的 <strong>25%</strong>。</li>
                      <li>这里有一个小问题，那就是<strong>第二次施放只有第一次一半的威力</strong>。所以你实际上是花了单次法术 1.25 倍的成本获得了 1.5 个法术的威力。这相当于每 MP 威力的 20% 奖励，或者，如果你愿意，相当于每单位伤害消耗的 MP 大约有 17% 的折扣。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7] mb-4">
                      <strong className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">💡 举个例子：</strong>高级雷魔法 (Thundaga) 名义上需要 22 MP。从圣魔阵中施放它，第一次施放消耗 22 MP，第二次施放消耗 6 MP（从 5.5 MP 向上取整），总共 28 MP。这相当于每个 Thundaga 28/1.5 ≈ 19 MP。这大约是 14% 的“折扣”。这与半价相去甚远，但仍然是一笔划算的买卖。并且记住，<strong>你用相同的 ATB 获得了 50% 更多的伤害。</strong>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      总体而言，圣魔阵是爱丽丝充分利用她的 MP 和 ATB 的好方法。当我们进入困难模式时，MP 将非常宝贵，它将变得特别有用。
                    </p>
                    
                    <p className="text-[14px] text-[#5c7e82] m-0 mb-4">
                      <strong>熟练度奖励：</strong>要获得熟练度奖励，你所要做的就是让团队的任何成员在阵内施放攻击性法术。换句话说，仅让阵出现就能获得 +10% 的熟练度，而实际使用它又能获得 +20%。
                    </p>

                    <p className="text-[14px] text-[#5c7e82] m-0">
                      爱丽丝初始还装备有<strong>祈祷魔晶石 (Refocus Materia)</strong>。使用它两次将完成查德利的一项战斗情报报告，并有助于获得“情报特工”奖杯。我将在第 12 章更详细地解释这颗魔晶石以及如何完成此报告。
                    </p>
                  </div>

                  <h3 id="section-9-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.6 前往车站与后街探索</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      回到地面上，给爱丽丝一些恢复魔晶石 (Healing Materia)，并赢得一些简单的战斗。
                    </p>
                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 目标：车站 (The Station)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      车站北端的自动售货机会卖给你 <strong>音乐唱片 #21</strong>。这应该使你的总数达到 8 张。
                    </p>
                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 目标：穿过后街 (Through the Backstreets)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      在你顺时针绕一圈并打开一扇门后，你可能想装备<strong>雷霆魔晶石 (Lightning Materia)</strong>来与一台机甲战斗。当你击败它时要后退，因为它可能会爆炸并造成伤害。
                    </p>
                  </div>

                  <h3 id="section-9-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.7 绕过大门与监视器</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：绕过大门 (Around the Gate)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当道路分叉时，正如爱丽丝指出的那样，向北的路是死胡同，所以<strong>向东走</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      通往贫民窟的路相当笔直。沿途有一两个谜题，但我不想剧透或者侮辱你的智商来告诉你怎么做。
                    </p>
                    
                    <h4 className="font-bold text-cyan-300 mb-3 mt-6">📍 目标：贫民窟的监视器 (Slums Monitor)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      你以后有时间收集东西。现在，看一会儿电视，然后跟着爱丽丝四处走走，看看她有多受大家喜爱。
                    </p>
                  </div>

                  <h3 id="section-9-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.8 绿叶之家送花与装饰</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：送往绿叶之家 (Leaf House Delivery)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当爱丽丝去拿花篮时，让克劳德走到房子的顶层，走出门，然后再下来。
                    </p>
                    
                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-2 flex items-center gap-2">
                        <span>🌼</span> 采花的蝴蝶效应
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        你选择采摘的花朵将决定稍后在本章中绿叶之家外墙上的装饰。可能的装饰有<strong>陆行鸟、莫古力或仙人掌</strong>，但我还没有找到哪种花对应哪种装饰的明确答案。在这次通关中，我挑了 2 朵黄花和 1 朵白花，得到了陆行鸟装饰。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      一旦你把爱丽丝送到绿叶之家，你终于可以去探索一番了（并且可以再次以正常速度移动了）。
                    </p>
                  </div>

                  <h3 id="section-9-9" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.9 收集音乐唱片与查德利的新任务</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>就在绿叶之家南边是社区中心。里面有一台自动点唱机，你可以免费获得 <strong>音乐唱片 #25</strong>。</li>
                      <li>当你在那里时，洗劫宝箱获得一瓶加速药 (Celeris)。你可能想在接下来的战斗中使用它。</li>
                      <li>回到北边，然后向东走到地图上标记的魔晶石商人那里。他会卖给你 <strong>音乐唱片 #19</strong>。你现在应该在收藏中有 10 张唱片了。</li>
                    </ul>

                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 与查德利交谈</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      魔晶石商人的南边就是查德利 (Chadley)。<strong>与他多次交谈</strong>，告诉他已完成的情报报告，获取新的报告，并获得他刚刚给你而你已经完成的报告的奖励。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      查德利还会提供很多好的魔晶石。如果某个魔晶石对应已完成的情报任务，他会以 100 gil 的特价卖给你一颗（也只能买一颗）。<strong>如果你能以 100 gil 购买疾风 (Wind)、ATB 增幅 (ATB Boost)、偷窃 (Steal)、先发制人 (First Strike) 或强化防御 (Steadfast Block)，一定要买。</strong>
                    </p>
                  </div>

                  <h3 id="section-9-10" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.10 偷窃魔晶石 (Steal Materia) 的重要性</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3366]"></div>
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 flex items-center gap-2">
                      <span>⚠️</span> 极其重要！请仔细阅读！
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      除其他事项外，查德利将分配给你<strong>情报报告 7 (Intel Report 7)</strong>，即利用 15 个敌人的弱点。这非常重要，因为完成这份报告可以让你购买<strong>偷窃魔晶石 (Steal Materia)</strong>。
                    </p>
                    
                    <p className="text-[15px] text-cyan-100 font-bold leading-relaxed m-0 mb-4">
                      偷窃魔晶石是必不可少的，因为有一把武器只能在第 11 章末尾从一个 boss 身上偷取。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      而且，从第 9 章结束到你需要这颗魔晶石的时候，你都不会再见到查德利，所以你必须尽快买下它。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded text-[14px] text-[#a5c3c7]">
                      很可能你已经完成了这份报告的条件。然而，如果你还没有，你需要将此作为优先事项。你所要做的就是用敌人弱点的魔法击中 15 个不同的敌人（你可以通过使用“洞察”来了解敌人的弱点）。你随时可以在主菜单的“战斗情报 (Battle Intel)”中检查完成此报告的进度。
                    </div>
                  </div>

                  <h3 id="section-9-11" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.11 拯救孩子与开启支线任务</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      查德利还有一个获取希瓦 (Shiva) 的 VR 任务，但等爱丽丝再次可以帮忙时我们再做那个。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      前往地图上标记以东的十字路口。在那附近你应该能找到奥兹 (Oates)，就是早些时候在高处朝爱丽丝大喊的那个孩子。和奥兹交谈继续剧情。跟着他跑向绿叶之家。
                    </p>

                    <h4 className="font-bold text-cyan-300 mb-3 mt-6">📍 目标：藏身处的危险 / 护送孩子们</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>奥兹随后会带你前往孩子们的秘密藏身处。跟着他去那里并记住它的位置（就在查德利东边）。然后他会指明去救孩子们的路。</li>
                      <li>沿着几乎笔直的路径击败敌人并救出孩子们，然后护送他们回来。</li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <p className="text-[14px] text-[#a5c3c7] m-0 font-bold">
                        总共有 6 个支线任务即将开放，我们将完成所有这些任务。这将有助于（最终）获得“万能帮手 (Best in the Business)”奖杯，并为“最佳服装 (Dressed to the Nines)”奖杯解锁另一件衣服。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-9-12" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.12 支线：神秘的莫古力商人</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：神秘的莫古力商人 (The Mysterious Moogle Merchant)
                    </h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>和穿着莫古力套装的孩子交谈。购买一张会员卡。</li>
                      <li>再次和他交谈并购买 <strong>音乐唱片 #20</strong>，一把给爱丽丝的<strong>银制长杖 (Silver Staff)</strong>，以及墓地钥匙 (Graveyard Key)。</li>
                      <li>将所有剩余的莫古力奖牌 (Moogle Medals) 花在秘籍 (Manuscripts) 上，也就是他库存中的最后 4 个物品。这些会给你用于升级武器的 SP。</li>
                      <li>给爱丽丝装备她的新武器，将其设置为自动升级，并提醒自己开始学习“光芒风暴 (Sorcerous Storm)”能力。</li>
                    </ul>
                  </div>

                  <h3 id="section-9-13" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.13 爱丽丝的银制长杖与光芒风暴</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🪄 银制长杖 (Silver Staff) 与光芒风暴 (Sorcerous Storm)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      爱丽丝的银制长杖比防御杖 (Guard Stick) 提供适度的魔法攻击力提升。在增加 HP（350 而不是 650）和 MP（10 而不是 34）方面的升级稍微不那么慷慨，而且爱丽丝的防御属性没有升级。从好的方面来看，相对后期的升级将减少所有用于治疗或攻击法术的 MP 消耗的 20%，并在她受到“重大伤害”时向爱丽丝退还 MP。像防御杖一样，银制长杖最终将赋予“绝处逢生 (Reprieve)”能力。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      银制长杖的武器能力是<strong>光芒风暴 (Sorcerous Storm)</strong>，一种消耗 1 格 ATB 的攻击。这种能力会对以爱丽丝为中心的指定半径内的所有敌人造成伤害。如果一群敌人聚集在爱丽丝附近，它可以用来消灭他们。不要试图对远处的敌人发动这种攻击，因为它打不到。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这就是光芒风暴的难点所在。通常，你希望让爱丽丝尽可能远离战斗，但这种攻击只对靠近她的敌人有效。我想如果爱丽丝被多个敌人压倒，这可能会有用，但在正常情况下，你会发现她的 ATB 有更好的用途。使用它足以获得 100% 的熟练度，然后将这种能力束之高阁，等待它是爱丽丝最佳选择的那种罕见情况。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7]">
                      <strong>📈 熟练度奖励：</strong>如果你能用一次光芒风暴击中 3 个或更多敌人，你就能获得熟练度奖励。
                    </div>
                  </div>

                  <h3 id="section-9-14" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.14 支线：巡逻的孩子们</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：巡逻的孩子们 (Kids on Patrol)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      前往绿叶之家（在你的地图上有标记）并获得你的任务——追踪 5 个失踪的孩子。芙莉亚老师 (Ms. Folia) 给了你关于他们下落的线索，但以下是在哪里可以找到他们：
                    </p>

                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>在社区中心前面，绿叶之家正南方。</li>
                      <li>在社区中心南边和东边，靠近三岔路口。</li>
                      <li>在武器店前面。</li>
                      <li>在物品店附近。</li>
                      <li>在镇子的东北方 (NE)，就在“暴走的武器”标记正南方。</li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-2 flex items-center gap-2">
                        <span>🏆</span> “用花来传达 (Say It With Flowers)” 奖杯
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        在你去社区中心的路上，院长（订花的人）可能会出现并和你交谈。如果她这样做了，你应该获得“用花来传达”奖杯。
                      </p>
                    </div>

                    <h5 className="font-bold text-cyan-300 mb-2 text-sm mt-6">击败刺猬派王</h5>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>把这 5 个任性的熊孩子围捕起来并回到绿叶之家，但你还没有完成。</li>
                      <li>回到藏身处（还记得吗，在查德利附近），去它后面的区域打倒<strong>刺猬派王 (Hedgehog Pie King)</strong>。</li>
                      <li>回去向孩子们报告，获得一把<strong>钉棒 (Nail Bat)</strong> 作为你的辛苦费。完成这个任务还会解锁“英雄的证明 (A Verified Hero)”任务。</li>
                    </ul>
                  </div>

                  <h3 id="section-9-15" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.15 克劳德的钉棒与无序交叉能力</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🗡️ 钉棒 (Nail Bat) 与无序交叉 (Disorder)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      正如其外观所暗示的那样，这是游戏中比较不寻常的武器之一。物理攻击力和魔法攻击力都设定为 30，并且这些属性<strong>没有任何升级</strong>。升级的重点是增加 HP（令人印象深刻的 1050 HP）以及提高克劳德的暴击率和暴击伤害，特别是当克劳德的 HP 较低时。因此，其意图似乎是提高克劳德的运气，增加他的最大 HP，让他处于低 HP 状态，然后依靠通过暴击击败敌人，同时赌克劳德不会被杀死。仁慈的是，钉棒确实有“绝处逢生 (Reprieve)”升级，它允许克劳德在一次致命打击中幸存（保留 1 HP）。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7] mb-4 border-l-4 border-l-[#ff3366]">
                      <strong>注意：</strong>钉棒初始没有任何魔晶石槽，所以我建议在设置为自动升级之前，手动通过添加 3 个魔晶石槽来升级它。
                    </div>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      钉棒的武器能力是<strong>无序交叉 (Disorder)</strong>，一个恰如其分地古怪能力。使用这个能力会让克劳德发动一次攻击，然后<strong>切换模式</strong>。也就是说，如果克劳德处于普通模式 (Operator Mode)，他将切换到勇穴模式 (Punisher Mode)，反之亦然。它对目标造成的伤害不多，但它会<strong>恢复 40-50% 的 ATB 槽</strong>，这使得它的使用相当经济。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      无序交叉克服了勇穴模式机动性低的弱点。克劳德可以在普通模式下快速接近敌人，释放无序交叉（恢复 ATB），然后立即切换到勇穴模式（这个过程通常涉及时间延迟）以造成额外伤害。作为奖励，在普通模式下使用无序交叉比在勇穴模式下使用更能迫使敌人陷入陷危 (Pressure) 状态。一旦我了解了它的作用以及如何使用它，我发现自己让克劳德在正常战斗中越来越多地使用无序交叉。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7]">
                      <strong>📈 熟练度奖励：</strong>你只需在用无序交叉击中敌人后用方块键执行一次攻击即可获得熟练度奖励。
                    </div>
                  </div>

                  <p className="text-[15px] text-[#a5c3c7] leading-relaxed my-8 font-medium">
                    现在是向查德利报告并对战希瓦 (Shiva) 的好时机。
                  </p>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h5 className="font-bold text-cyan-300 mb-2 text-sm">💡 战斗模拟器中的物品使用</h5>
                    <p className="text-[14px] text-[#a5c3c7] m-0">
                      当你在战斗模拟器中使用物品时，它会暂时从你的物品栏中移除。然而，当你退出模拟器时，你使用的所有物品都将退还给你的物品栏，这似乎很公平。毕竟，这只是一个模拟战斗，对吧？
                    </p>
                  </div>

                  <h3 id="section-9-16" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.16 召唤兽战斗：希瓦 (Shiva)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#b088ff] drop-shadow-[0_0_8px_rgba(176,136,255,0.6)] mb-4 flex items-center gap-2">
                      <span>❄️</span> Summon Battle: Shiva
                    </h4>
                    
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>希瓦可以中毒，所以给克劳德装备<strong>中毒魔晶石 (Poison Materia)</strong>。（天哪，这东西真的派上用场了，不是吗？）</li>
                      <li>正如我在第 3 章建议的那样，克劳德和爱丽丝都应该有 <strong>2 级火之魔晶石 (Fire Materia)</strong>，以便两人都可以施放中级火魔法 (Fira)。如果你的火之魔晶石还没有达到 2 级，你可以装备它去完成更多任务，并在本章晚些时候再来对战希瓦。Fira 不是绝对必要的，但它肯定会让这场战斗容易得多。</li>
                      <li>将<strong>属性-冰 (Elemental - Ice) 魔晶石对</strong>放在爱丽丝的秘银护腕 (Mythril Armlet) 中。这将使她受到希瓦冰系法术的伤害减半。</li>
                      <li>克劳德主要要施放魔法，所以装备他的钢铁剑 (Iron Blade) 来提升他的魔法属性。</li>
                    </ul>

                    <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px]">战斗流程</h5>
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg">
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>一开始让克劳德锁定希瓦，然后对她施放毒魔法 (Bio)。</li>
                        <li>让爱丽丝开始积累 ATB。当她有一格 ATB 时，让她对自己使用你在社区中心捡到的加速药 (Celeris)。然后让她继续攻击以重建 ATB。</li>
                        <li>让两个角色都完全填满他们的 ATB 槽。让克劳德在勇穴模式下做这件事，这样他就会陷入狂暴 (Berserked)。</li>
                        <li>当你的 ATB 槽满了准备好攻击时，让克劳德对希瓦施放 Fira。这应该会让她立即陷入陷危。</li>
                        <li>现在希瓦会静止不动几秒钟，让克劳德靠近她，让爱丽丝在克劳德周围施放<strong>圣魔阵 (Arcane Ward)</strong>。</li>
                        <li>让克劳德执行一次突刺并开始攻击希瓦以重建一些 ATB，而爱丽丝移动到圣魔阵中施放 Fira。</li>
                        <li>一旦希瓦力竭，让爱丽丝和克劳德都从圣魔阵中狂丢 Fira。你有可能在一次力竭中就解决掉希瓦。</li>
                        <li>如果没有，希瓦应该离被击败非常近了。根据需要进行治疗，继续用 Fira 猛击希瓦直到她倒下。</li>
                      </ul>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mt-6 font-bold text-center">
                      胜利将为你赢得希瓦魔晶石 (Shiva Materia) 和“召唤兽杀手 (Summon Slayer)”奖杯。
                    </p>
                  </div>

                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h5 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-2 flex items-center gap-2">
                      <span>💡</span> 学习无序交叉能力的建议
                    </h5>
                    <p className="text-[14px] text-[#a5c3c7] m-0">
                      超级慢的钉棒在即将到来的对抗独特敌人的战斗中并不是最佳武器。即使你有一个新能力要学，我还是建议你目前坚持使用克劳德的钢铁剑。当你进入下一章的竞技场 (Colisseum) 时，你将有更好的机会多次使用这把破武器，以在将钉棒搁置游戏剩余时间之前学会无序交叉。当我们到达那里时我会提醒你的。
                    </p>
                  </div>

                  <h3 id="section-9-17" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.17 支线：英雄的证明与打箱子小游戏</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：英雄的证明 (A Verified Hero)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      挤回孩子们的藏身处，和奥兹交谈，然后和莎拉 (Sarah) 交谈。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      “打箱子 (Whack-a-Box)”游戏与几个奖杯相关联。现在得到 <strong>10,000 分</strong> 就可以完成这个任务，这应该很容易。获得 <strong>30,000 分</strong>，你就能赢得<strong>“箱子破坏王 (Crate Annihilator)”奖杯</strong>。稍后该游戏将在困难模式下可用，在困难模式下获得 30,000 分将赢得“打箱子神童 (Whack-a-Box Wunderkind)”奖杯。我建议你现在就玩，直到你赢得“箱子破坏王”奖杯。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px] mt-6">打箱子必胜法则 (Winning at Whack-a-Box)</h5>
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-6">
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>箱子的分值标在箱子上。高分箱子显然更难打破。</li>
                        <li>你唯一能使用的武器能力是奋力一击 (Braver) 以及你装备的武器附带的能力。带有“无尽斩 (Triple Slash)”能力的钢铁剑是合乎逻辑的选择。</li>
                        <li><strong>不要使用奋力一击。</strong>执行它需要太长时间，而且可能会打空。坚持使用无尽斩。</li>
                        <li>进入主菜单 &gt; 战斗设置 (Battle Settings) 并为无尽斩设置快捷键。这将节省一些时间。</li>
                        <li>不要猛敲方块键。<strong>按住它以获得 AOE（范围）攻击。</strong>这样在每次攻击时能更好地摧毁多个箱子。</li>
                        <li>寻找红色的红色箱子。摧毁一个红色箱子可延长你的时间 10 秒。</li>
                        <li><strong>你站的位置很重要！</strong>如果你没有正对你的目标，你可能会浪费很多时间在空气中挥砍。</li>
                        <li>场地被分为几个区域，由 1500 分的箱子隔开，你必须打破它们才能继续前进。当有 2 个这样的大箱子并排时，使用可以同时击中两者的攻击。如果你站位正确，在勇穴模式下进行三轮完整攻击加上一个无尽斩应该可以消灭两个大箱子。</li>
                      </ul>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px]">推荐路线（夺取 30,000 分）</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      以下路线将带你找到 <strong>5 个红色箱子</strong>。这些应该能给你足够的额外时间来达到 30,000 分。沿途打掉一些 50 分和 100 分的箱子，但要把到达所有 5 个红色箱子以获得这 50 秒的额外时间作为你的首要任务。
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>滚过第一堆箱子，走上你右边的斜坡。砸碎那个就在那里等你的红色箱子。</li>
                      <li>继续上斜坡，打掉挡路的蓝色大箱子（下文简称“BBB”）。</li>
                      <li>继续上斜坡，你右边会有另一个红色箱子。</li>
                      <li>走下斜坡回到你开始的地方，向右走到下面第四张图所示的 BBB 并打掉它。</li>
                      <li>清除几堆高高的箱子，然后向左看。有一个 BBB 保护着一个红色箱子。从侧面攻击 BBB，你可能不需要打掉 BBB 就能拿到红色箱子。</li>
                      <li>转过身，会有两个 BBB 挡路。解决掉它们。</li>
                      <li>你会看到正前方右侧有另一个红色箱子。</li>
                      <li>你左边是另一对 BBB。打掉它们并拿到高高的一堆箱子顶部的红色箱子。</li>
                      <li>你已经到了死胡同，所以把剩下的时间花在攻击你来时路上绕过的那堆高高的箱子上。</li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded p-4 text-[14px] text-[#a5c3c7]">
                      你每次未能赢得“箱子破坏王”奖杯，都会获得一枚莫古力奖牌。使用任何多余的奖牌从莫古力商人那里购买秘籍 (Manuscripts)。
                    </div>
                  </div>

                  <h3 id="section-9-18" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.18 支线：暴走的武器</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：暴走的武器 (Weapons on a Rampage)
                    </h4>
                    
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>向北走到标记处接受任务，然后向北进入废弃工厂区域 (Nuts 'n' Bolts Hills)。</li>
                      <li>忽略你地图上的标记——我认为它们不准确。在废料场后巷 (Scrapyard Back Alley) 区域，该区域中心的正上方有一个死胡同，你将在那里找到 3 个目标敌人。就在那里的东边是一个近乎方形的开阔区域，你将在那里找到另外 2 个。</li>
                    </ul>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗策略</h5>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>敌人会在区域内传送。如果你锁定了一个传送的敌人，你将失去该锁定，必须再次锁定它。</li>
                      <li>在任何时间点，给定的二型独眼飞行器 (Mark II Monodrive) 要么容易受到物理攻击且对魔法免疫，要么反之。</li>
                      <li>如果你看到其中一个周围有一个透明的球体，那是物理屏障。用<strong>风属性法术 (Aero)</strong> 击中它，然后它会静止不动几秒钟让你揍它。</li>
                      <li><strong>它们的元素弱点是风 (Wind)。</strong></li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded p-4 text-[14px] text-[#a5c3c7]">
                      <strong className="text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)]">⚠️ 极其重要：</strong>回去和受惊的男人交谈以完成任务。你将获得一双<strong>防护靴 (Protective Boots)</strong> 作为奖励。<strong>一定要留着这个！你会需要它的！</strong>它们能保护你免受“停止 (Stop)”状态的影响，它们买不到，而且游戏中只有另一个地方可以获得它们。
                    </div>
                  </div>

                  <h3 id="section-9-19" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.19 支线：扫墓的报酬</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：扫墓的报酬 (Paying Respects)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      受惊的男人 (Scared Man) 会把你派到武器店门前的老人那里，大概就 10 英尺远。他会把你派往墓地，墓地现在已在你的地图上标出。你需要用到你从莫古力商店 (Moggie) 买来的<strong>墓地钥匙 (Graveyard Key)</strong>。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗策略</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这些敌人可能很难对付，因为它们可以让你的团队成员陷入沉睡，然后在他们无助的时候痛打他们。成功的关键是迅速减少他们的数量。
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li>派克劳德进去攻击，让爱丽丝撤退到一个安全的地方。</li>
                      <li>在安全的地方，爱丽丝可以填满她的 ATB 槽，设置一个<strong>圣魔阵 (Arcane Ward)</strong>，并向一个敌人释放 2 次中级冰魔法 (Blizzara) 攻击。</li>
                      <li>这应该会使那个敌人陷入陷危 (Pressure)，并几乎使他力竭。</li>
                      <li>派克劳德过去用突刺 (Focused Thrust) 使那个敌人力竭，并用奋力一击 (Braver) 终结它。</li>
                      <li>一旦你只剩下 2 个敌人，事情就会容易得多。以类似的方式一次解决一个，然后回去向受惊的男人报告。</li>
                    </ul>
                  </div>

                  <h3 id="section-9-20" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.20 支线：贫民窟的天使</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：贫民窟的天使 (Angel of the Slums)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      我们做好事的日子快要结束了。前往最后一个绿色标记处，和那个连爱丽丝都无法忍受的名声扫地的记者交谈。
                    </p>
                    
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>在社区中心内，至少与 3 个可以互动的人中的一个交谈。米瑞叶 (Mireille) 然后会进来，你可以和她说话。</li>
                      <li>她会把你送回给那个爱管闲事的记者，而记者又会把你送到瞭望点 (Lookout Point)，这离你现在所在的地方大概有十万八千里远。不管怎样，去那里吧。</li>
                      <li>痛打铬毒气怪 (Chromogger)，拿到预告信 (Calling Card)，然后回到记者那里，他会间接地给你奖励。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">🆚 铬毒气怪 (Chromogger) 战术</h5>
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                        铬毒气怪可能非常难对付，也可能非常容易。它的铁球会弹开物理攻击；如果你靠得太近发动近战攻击，它的“碎骨击 (Skull Cracker)”攻击会造成巨大的伤害；它会在地上散布一层能使你的团队眩晕的电场；它的紫色烟雾 (Purple Smog) 会在地上覆盖毒池，导致中毒和沉默。你真的不想尝试与这个怪物肉搏。
                      </p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>给爱丽丝的武器连接槽里装备<strong>属性-雷霆魔晶石对 (Elemental - Lightning Materia)</strong>。这将使她的普通攻击造成雷属性伤害，而这正是铁球的弱点。</li>
                        <li>让她在积累 ATB 的同时攻击铁球（并避开铬毒气怪！）。</li>
                        <li>当敌人陷入陷危时，让她用中级雷魔法 (Thundara) 攻击它，最好是从<strong>圣魔阵 (Arcane Ward)</strong> 中施放，这样你可以获得更大的威力。</li>
                        <li>一旦铬毒气怪力竭，克劳德就可以安全地用近战攻击或 Thundara 攻击铬毒气怪（<strong>不要打铁球</strong>）。</li>
                        <li>你可能需要使它力竭两次，但只要你让爱丽丝远离危险，这是一场相对容易的战斗。</li>
                      </ul>
                    </div>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 mt-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <p className="text-[14px] text-[#a5c3c7] m-0 font-bold">
                        支线任务就到此为止了。完成全部 6 个任务将为爱丽丝解锁一件红色连衣裙，用于“最佳服装”奖杯。使用你的地图和 R2 键来确保所有 6 个任务都已完成。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-9-21" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.21 Boss战：路德 (Rude)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在结束本章之前，让我们收集一些其他物品：
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>向北朝火车站走。就在你到达那里之前，你会听到音乐。和商人交谈以获得免费的 <strong>音乐唱片 #23</strong>，使你的总数达到 12 张。（如果你忘记拿这张，你仍然可以在第 14 章拿到它）。</li>
                      <li>如果你想<strong>一路</strong>跑回教堂，有一颗<strong>气卦魔晶石 (Chakra Materia)</strong> 可以捡。当我们在第 14 章回到教堂时它还会一直在那里，所以这个随你便。</li>
                    </ul>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6 font-medium">
                      是时候前往爱丽丝的家与路德 (Rude) 战斗了。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg">
                      <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                        <span>⚔️</span> Boss Fight: Rude
                      </h4>
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>像以前一样，给克劳德装备<strong>中毒魔晶石</strong>，并让他尽快施放毒魔法 (Bio)。</li>
                        <li>你可能不想依靠招架来击败路德，因为你无法招架他的魔法攻击，而他有很多魔法攻击。</li>
                        <li>路德的元素弱点是<strong>风 (Wind)</strong>。如果你完成了战斗情报任务 2，你可以花 100 gil 从查德利那里得到一颗风之魔晶石。第二颗将花费你 2000 gil，但现在有一颗就足够了。</li>
                        <li>开始时积累一些 ATB，但不要在爱丽丝身上停留太久。路德会用“甜蜜梦境 (Sweet Dreams)”专门瞄准她，这会让她沉睡 15 秒，而你目前没有防御睡眠的方法。（这就是为什么我建议让克劳德而不是爱丽丝施放 Bio 的原因）。</li>
                        <li>一旦爱丽丝有 2 格 ATB，让她设置一个<strong>圣魔阵</strong>，并对路德施放她最好的风属性法术 (Aerora)。对我来说，这立即将战斗转移到了下一个阶段。</li>
                        <li>最终，路德会格挡你的攻击。你必须用 2 次 ATB 攻击击中他来解除这个状态。</li>
                        <li>在爱丽丝的中级风魔法 (Aerora) 和中毒造成的伤害之间，即使路德从未陷入过力竭状态，他也应该会以惊人的速度倒下。</li>
                      </ul>
                    </div>
                  </div>

                  <h3 id="section-9-22" className="text-xl mt-8 mb-4 font-bold text-cyan-100">9.22 发现事件：花语与章节结尾</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3 flex items-center gap-2">
                      <span>✨</span> 发现事件：花语 (The Language of Flowers)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      跟着爱丽丝到花园去看一段剧情。抓住在背景中发光的 <strong>MP 提升魔晶石 (MP Up Materia)</strong>。
                    </p>
                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded p-4 text-[14px] text-[#a5c3c7] mb-6">
                      <strong className="text-[#00f0ff]">💡 提示：</strong>在其他章节（特别是在第 14 章的开头）随后访问爱丽丝的花园时，这颗 MP 提升魔晶石可能会重新生成。一定要找找看。
                    </div>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-medium">
                      从这里开始，只要顺着故事情节走，和一个意想不到的同伴一起出城即可。第八章结束！
                    </p>
                  </div>

                  <h2 id="section-10" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十、第九章：欲望的街道 (The Town That Never Sleeps)
                  </h2>

                  <h3 id="section-10-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>准备好迎接另一个漫长的章节吧，这里有许多支线任务和许多要收集的物品，包括 <strong>7 张音乐唱片</strong>。</li>
                      <li>我们再次要做一些非常具体的事情，以继续为获得<strong>“最佳服装 (Dressed to the Nines)”奖杯</strong>而努力，所以要特别注意，避免偏离剧本。<strong>重要的决定已经用加粗的红色字体强调。</strong></li>
                      <li>从积极的一面来看，我们将看到我们的第一组 3 件礼服，并验证我们到目前为止所做的一切都是正确的（希望如此！）</li>
                    </ul>
                  </div>

                  <h3 id="section-10-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.2 机械臂谜题与范围化魔晶石</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：抄近路 (Take the Shortcut)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      穿过废墟，并以显而易见的方式使用机械臂。通往第二个机械臂的路径非常笔直，所以我相信你能自己找到路。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      你应该很明显地看出，你需要逆时针将箱子移动到下一个位置。把爱丽丝放在箱子顶部，这样她就能拿到<strong>封印魔晶石 (Binding Materia)</strong>。然后再把她接起来，运送到顶部，这样她就可以踢下梯子。
                    </p>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：齐心协力 (Working Together)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在克劳德与爱丽丝会合后，她喊道：“克劳德！这边！”<strong>跟着她！</strong>她会带你到一个死胡同，那里有一张恢复长椅和一台自动售货机，会卖给你 <strong>音乐唱片 #22</strong>（不知为何，我竟然错过了一次又一次，甚至两次都没看到）。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      从这里开始的路径并不明显，因为下一个向下的梯子没有标在你的地图上。留意它的位置。
                    </p>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：越过死胡同 (Beyond the Dead End)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      你将与一些——呃——“形形色色”的人物战斗，最终到达第三个也是最后一个机械臂谜题处。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      看到那颗魔晶石了吗？那是游戏中唯一的一颗<strong>范围化魔晶石 (Magnify Materia)</strong>，你绝对不想错过它。这不是一个困难的谜题，游戏基本上会告诉你该怎么做，所以如果你遇到困难，只需阅读屏幕上的提示。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7] mb-4">
                      <strong>💡 机械臂谜题的实用提示：</strong>移动集装箱或放下爱丽丝后，你不必担心要把一只手臂从另一只手臂的预定路径上移开。只要你切换手臂，你刚用完的那只就会自动移开。几乎没有一只手臂会阻碍另一只手臂路径的危险，所以，例如，一旦你把一个集装箱放到位，你就可以把那只手臂留在原处，然后切换到另一只。
                    </div>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-2 flex items-center gap-2">
                        <span>✨</span> 范围化魔晶石 (Magnify Materia)
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        范围化魔晶石基本上就是以前的“全体 (All)”魔晶石。当它与另一颗魔晶石在相连的槽中配对时，另一颗魔晶石的效果将被施放于所有盟友或所有敌人（视情况而定）。例如，<strong>范围化 + 恢复</strong> 将对你的整个队伍施放治疗法术，而 <strong>范围化 + 烈火</strong> 可以对范围内的所有敌人施放火属性法术！
                      </p>
                    </div>
                  </div>

                  <h3 id="section-10-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.3 告别与蒂法的礼服</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：告别 (Saying Goodbye)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      前往公园。看了一些剧情后，告诉爱丽丝你准备好了。一辆由陆行鸟拉的马车会穿过大门，蒂法在里面。
                    </p>
                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded p-4 text-[14px] text-[#a5c3c7]">
                      <strong>👗 最佳服装检查点：</strong>仔细看她穿的是什么。如果你按照描述完成了第 3 章，她应该穿着一件<strong>黑色的和服 (black kimono)</strong>。
                    </div>
                  </div>

                  <h3 id="section-10-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.4 追赶蒂法与支线任务分支</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：追赶蒂法 (Chasing Tifa)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当你到达镇上时，和陆行鸟马车停靠站的人交谈。<strong>小心！你的行动在这里会产生后果！</strong>在继续之前，请阅读下面方框中的内容。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-6">
                      <h5 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 text-[15px]">
                        ⚠️ 第 9 章支线任务分支机制 (Chapter 9 Side Quests)
                      </h5>
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>第 9 章总共有 5 个支线任务。你总是会接到“燃烧大腿 (Burning Thighs)”任务，外加另外一对任务，总共 3 个。</li>
                        <li>除了“燃烧大腿”之外，剩下的两对任务是<strong>互斥的</strong>。也就是说，你在任何一次通关中只能完成其中一对任务。</li>
                        <li>你接到的那对支线任务将取决于你在某些特定情况下的回答，它们也将决定克劳德的服装结果。（如果最后一句话你没看懂，别担心。很快你就会明白的）。</li>
                        <li>你的一些回答将为名叫<strong>陆行鸟山姆 (Chocobo Sam)</strong> 的角色给你的一对任务（“任务线”）分配隐藏分，而其他回答将为名叫<strong>玛姆 (Madame M)</strong> 的角色给你的一条任务线分配分数。</li>
                        <li>在这次通关第 9 章时，<strong>我们要做出能使山姆的任务线获得最大分数的决定</strong>。</li>
                      </ul>
                      <p className="text-[14px] text-[#a5c3c7] mt-4 mb-0">
                        你不必为了细节而烦恼。如果你遵循我给你的指示，一切都会顺利的。随着我们的进行，我会告诉你哪些情况会产生分数，以及哪些回答会将这些分数分配给我们想要的任务线。现在，只需非常小心地做出我用<strong>加粗红色字体</strong>为你指定的选择。
                      </p>
                    </div>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] m-0">
                        当山姆问你蒂法长什么样时，选择第一个回答：“她身材很好 (She's in great shape)。”
                      </p>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-2">
                        （这会给山姆的任务线 +1 分）。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-10-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.5 收集音乐唱片与追踪乔尼</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：前往古留根尾宅邸 (To Corneo's Mansion)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当你进城时，你会被一个拉客的人拦住。继续往前走一点，找到在旅馆前面的拉客的人，这差不多是在陆行鸟山姆所在街道的正西方，隔着一条南北走向的街道。你会以大致逆时针的半圆形路线找到他。
                    </p>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] m-0">
                        当他问你是否想留宿时，告诉他：“不用了，谢谢 (No thanks)。”
                      </p>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-2">
                        （给山姆的任务线再 +1 分）。
                      </p>
                    </div>

                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>沿着旅馆西侧狭窄的南北街道往下走，向右看。你会在一个有围栏的区域看到一台自动点唱机，在那里你可以拿到 <strong>音乐唱片 #8</strong>。</li>
                      <li>向西走到下一条南北街道，然后向南走。你应该会看到我们的老朋友<strong>乔尼 (Johnny)</strong> 从你身边飞奔而过。如果你快速阅读他说的话，他会给你一个关于他要去哪里的线索。</li>
                      <li>跟着他向北走，向西走下一条狭窄的小巷，然后再次向北走，到达巨大的“蜜蜂之馆 (Supergirls)”招牌前的地方。</li>
                    </ul>
                  </div>

                  <h3 id="section-10-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.6 流浪乔尼与重要魔晶石购买</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      一个新的发现事件“流浪乔尼 (Vagabond Johnny)”将显示在你的地图上。
                    </p>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] m-0">
                        和乔尼交谈，当出现提示时，回答“是啊 (Yeah)。”
                      </p>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-2">
                        （给山姆的任务线 +1 分）。
                      </p>
                    </div>

                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>当你在那里时，向南走一点，然后向北走上楼梯，来到一个西部主题的酒吧。和那里的女牛仔交谈以获得 <strong>音乐唱片 #17</strong>。</li>
                      <li>沿着最近的主要南北大道向南走。你应该会在左边看到<strong>查德利 (Chadley)</strong>，所以去他那里看看。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-6">
                      <h4 className="font-bold text-cyan-300 mb-3 text-[15px]">⚠️ 魔晶石购买警告</h4>
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                        如果你还没有<strong>偷窃魔晶石 (Steal Materia)</strong>，<strong>现在就从他那里买一颗。</strong>你在第 11 章会用到它，我很确定这是你在那之前最后一次购买的机会。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                        如果查德利没有出售偷窃魔晶石，那么你还没有完成情报报告 7。这将导致你错过一把只能在第 11 章从 boss 身上偷取的武器。稍后，你将有机会在竞技场 (Colosseum) 中解决这个问题，但如果你不解决，你就必须在章节选择或困难模式中解决这个问题。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0">
                        如果你还没有这样做，你现在应该购买<strong>第二颗先发制人魔晶石 (First Strike Materia)</strong>。你应该有充足的现金，这是对你未来的伟大投资。始终装备这两颗魔晶石，以便它们升级。
                      </p>
                    </div>

                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>获取召唤兽胖陆行鸟 (Fat Chocobo) 的 VR 任务现在可用了，但我们可以在第 13 章再处理它。</li>
                      <li>在同一条街上继续向南走，刚好经过下一个十字路口。在你的左边，你会看到一家招牌上写着“醉酒 (Yoidore)”的酒吧。打断歌手的表演，他会给你 <strong>音乐唱片 #29</strong>。</li>
                      <li>武器店在你的地图上标出，就在你当前位置的正南方。</li>
                      <li><strong>买至少一条头巾 (Headband)。</strong>如果你之前没用上，我们下次过第 8 章时你会想要它的防睡眠保护。</li>
                      <li>为克劳德购买一把<strong>破甲大剑 (Hardedge)</strong>，装备它，并设置为自动升级。</li>
                    </ul>
                  </div>

                  <h3 id="section-10-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.7 破甲大剑 (Hardedge) 及其能力解析</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🗡️ 破甲大剑 (Hardedge) 与无尽终结 (Infinity's End)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      就纯粹的物理攻击力而言，克劳德没有比破甲大剑更好的选择了。他的破坏剑在物理和魔法攻击之间有更好的平衡，他稍后会获得更适合魔法的武器，但如果你追求最大的物理攻击力，这把剑适合你。它有一种不寻常但可能有用的能力，当敌人的离散部位（例如，腿或鳍）作为目标出现时，增加对这些部位的伤害。一个缺点是获取魔晶石槽的速度慢。直到武器等级 5（满级 6 级）你才能获得第 4 个槽位。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      破甲大剑的武器能力是<strong>无尽终结 (Infinity's End)</strong>，这是一种需要很长时间蓄力并且需要 <strong>2 个完整的 ATB 槽</strong>才能执行的攻击。不幸的是，敌人很容易躲避它，在这个游戏中没有什么比把你满载的 ATB 浪费在一次未命中的攻击上更令人沮丧的了。然而，<strong>处于力竭状态的敌人无法躲避这次攻击</strong>，甚至在你计算力竭百分比伤害加成之前，它对力竭敌人的威力就几乎翻倍了。由于这个原因，一旦你学会了这个能力，你可能想把它留着，以便对力竭的敌人进行明智的使用。
                    </p>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7]">
                      <strong>📈 熟练度奖励：</strong>通过用该能力击中力竭的敌人来获得熟练度奖励。这很难完成，除非敌人有很多 HP，因为大多数敌人在你能使他们力竭之前就已经死了。
                    </div>
                  </div>

                  <h3 id="section-10-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.8 三人组与任务线抉择</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：三人组 (The Trio)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      继续向南走到古留根尾宅邸 (Corneo's Mansion) 和莱斯利 (Leslie) 交谈。出来后，有一段与乔尼的简短剧情，然后前往山姆处（地图上有标记）。
                    </p>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] m-0">
                        当山姆要求你选择时，选正面或反面都可以 (Heads or Tails)。
                      </p>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-2">
                        （任何一个选择都会给山姆的任务线 +1.5 分）。
                      </p>
                    </div>

                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>从这里向北走，前往西北方安德烈·罗德亚 (Andrea Rhodea) 的标记处。如果你经过物品店（实际上是一家药房）标记附近，你会听到音乐，并在屏幕左上角看到“???”。进去买 <strong>音乐唱片 #10</strong>，总数达到 17 张。</li>
                      <li>继续前往标记处，正好及时看到沮丧的乔尼离开。和接待员交谈，然后前往玛姆的店（也在你的地图上），再次错过乔尼。</li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] m-0">
                        当被问及时，为克劳德选择“穷人套餐 (Poor Man's Course)”。
                      </p>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-2">
                        （这不会给山姆的任务线增加任何分数，但也不会给玛姆的任务线增加分数）。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      之后，让爱丽丝在柜台等候与玛姆交谈。
                    </p>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] m-0">
                        当克劳德被问及爱丽丝的装扮时，选择“看起来还不错 (It's alright)”。
                      </p>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-2">
                        （给山姆的任务线 +1 分）。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      然后玛姆会把你送到地下竞技场 (Underground Colosseum)。它在你的地图上标出了，所以去那里吧。
                    </p>
                  </div>

                  <h3 id="section-10-9" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.9 地下竞技场与地狱屋 (Hell House)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：地下竞技场 (Underground Colosseum)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在楼下，进入左边的第一个房间准备战斗。出来后检查左边的下一个房间，看一段关于乔尼的剧情。
                    </p>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] m-0">
                        在乔尼所在的房间里，桌子上有一个小瓶子你可以互动。如果你愿意，这次通关你可以选择“我要尝尝 (I'll taste it)”。
                      </p>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-2">
                        （给山姆的任务线 +1 分）。但在你以后重玩这一章时，直接无视那个瓶子。
                      </p>
                    </div>

                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>你总共要打 4 轮。你的敌人（及其弱点）是狗（冰）、人类（火）、机器（雷）和一座房子（为此你需要装备所有 4 种元素魔晶石）。尽力而为，尽量别死掉。</li>
                      <li><strong>始终使用长椅在两轮之间恢复。</strong></li>
                      <li>只有最后一轮会给你带来麻烦，所以让我们仔细看看那场遭遇战。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mt-6">
                      <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                        <span>⚔️</span> Boss Fight: Hell House (地狱屋)
                      </h4>
                      
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                        很难给出如何赢得这场战斗的一步步指示，但我认为如果你知道一些关键事实，你会发现这场战斗完全可以应对。
                      </p>

                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                        <li>地狱屋可以——也应该——通过尽快施放 <strong>Bio (毒魔法)</strong> 来使其<strong>中毒</strong>。有时你会发现你的团队无法对其造成伤害，而中毒会造成缓慢但持续的伤害。</li>
                        <li>Bio 可能会在战斗结束前失效。留意这一点，并根据需要优先重新施放。中毒不能杀死地狱屋，但可以将其 HP 降至 1，此时任何攻击都会终结敌人。</li>
                        <li>在你的 2 个角色之间，你需要<strong>装备所有 4 种元素魔晶石</strong>。为了方便记住谁有什么，我装备了相反的元素，给一个角色火和冰，给另一个角色雷和风。</li>
                        <li>地狱屋会经常对特定元素产生弱点。<strong>地狱屋窗户的颜色告诉你它在任何时候的元素弱点是什么：</strong>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-[#00f0ff] font-medium">
                            <li><span className="text-[#ff3366]">红色</span>意味着它弱<span className="text-blue-300">冰</span>。</li>
                            <li><span className="text-white">白色</span>意味着它弱<span className="text-[#ff3366]">火</span>。</li>
                            <li><span className="text-green-400">绿色</span>意味着它弱<span className="text-yellow-400">雷</span>。</li>
                            <li><span className="text-blue-400">蓝色</span>意味着它弱<span className="text-green-300">风</span>。</li>
                          </ul>
                        </li>
                        <li>地狱屋总是以红色的窗户开始，因此一开始弱冰。</li>
                        <li>让爱丽丝尽早设置一个<strong>圣魔阵 (Arcane Ward)</strong>。只要有可能，让带有合适魔晶石的团队成员使用圣魔阵来充分利用你的 MP。</li>
                        <li>我建议不要在竞技场的外围设置圣魔阵。有时候你会四处跑动，如果你这样做，你会找不到它。在中心和外边缘之间的中间位置就可以了。</li>
                        <li>开始时积累 ATB。使地狱屋中毒，然后开始从圣魔阵中施放法术。</li>
                        <li>在 80% 血量时，会有一个过场动画，地狱屋会冲向你正在控制的玩家。如果可能的话，让这个人是克劳德。这次冲锋无法避免，所以<strong>让他防御以减少伤害</strong>，然后在被击中后翻滚避开。</li>
                        <li>最终，地狱屋会进入<strong>“神明模式 (God Mode)”</strong>，这提供了 90% 的所有物理和魔法伤害减免。在这段时间里，不要浪费你的 ATB 和健康试图攻击。进行防守，等待它消失，同时让毒素发挥其魔力。</li>
                        <li>当地狱屋退出神明模式时，用它弱点的元素击中它会使其陷入陷危 (Pressure)。尝试通过为每个团队成员保留一个 ATB 槽来为此做好准备。</li>
                        <li>每当地狱屋不处于神明模式时，尝试从圣魔阵施放 1 级或 2 级魔法，并始终保持中毒状态 (Bio)。</li>
                      </ul>

                      <p className="text-[14px] text-[#5c7e82] m-0 mt-4 font-bold text-center">
                        这将是一场漫长的战斗，但遵循这个基本策略，你应该能取得胜利。
                      </p>
                    </div>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] m-0 mb-3">
                        打完之后，暂时不要离开竞技场！ (DO NOT LEAVE THE COLOSSEUM YET!)
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0">
                        回到楼上，守门人 (Gatekeeper) 会给你机会进行更多的战斗。我们现在要打其中的 2 场。下一个区块将解释原因。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-10-10" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.10 分道扬镳与玛姆的任务线</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：分道扬镳 (Parting Ways)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>跟随剧情前往玛姆的按摩院 (Madame M's parlor) 并换上新衣服。</li>
                      <li>如果你按照上述指示行事，当你离开时，你应该会接到查德利关于一些新任务的电话。这表明你的所有隐藏分数都成功分配给了山姆的任务线 (Sam's Questline)。</li>
                      <li>在前往这些任务的路上，停下来再次拜访<strong>查德利</strong>。既然你刚刚与他交谈过，你可以使用“幻象 (Synergy)”魔晶石，这将需要 100 gil。</li>
                      <li>不要忘记他还有获取胖陆行鸟 (Fat Chocobo) 召唤兽的 VR 任务，你以后一定要完成它。</li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <h5 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 text-[15px]">
                        ⚠️ 玛姆的任务线 (Madame M's Questline)
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                        在困难模式下重玩时，你需要完成与当前通关时不同的任务线。要做到这一点，只需改变之前的 4 个回答即可。
                      </p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>在酒店前，选择<strong>“多少钱？(How much?)”</strong></li>
                        <li>当山姆问起蒂法时，选择<strong>“她很会经营店面 (She's great at handling the books)”</strong>或<strong>“她是个出色的格斗家 (She's a great fighter)”</strong>。</li>
                        <li>当山姆掷硬币时，选择<strong>“不选 (No deal)”</strong>。</li>
                        <li>当你选择你的按摩套餐时，选择<strong>“豪华套餐 (Luxury Course)”</strong>——这很贵，但没关系。在困难模式下重玩时，钱不应该是问题。</li>
                        <li>当克劳德被问及爱丽丝的装扮时，选择<strong>“我不介意 (I don't mind)”</strong>。</li>
                        <li>这 5 个选择将保证让你触发玛姆的任务线。</li>
                      </ul>
                    </div>
                  </div>

                  <h3 id="section-10-11" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.11 支线：无尽之夜</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：无尽之夜 (The Party Never Stops)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这个任务就在服装店外面触发（在你的地图上标记为 1 号任务），这正是我们之前遇到乔尼的地方。在这个任务中，你的脚真的要磨出水泡了！跟着任务标记进行所有的对话并收集所有的重要物品。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">获取魔晶石提升</h5>
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>当你在自动售货机买东西时，买下<strong>所有 3 种重要的魔晶石（恢复、治疗和冰）</strong>以及 <strong>音乐唱片 #26</strong>。</li>
                        <li>当你被派去餐馆（你之前获得音乐唱片 #29 的同一个地方）时，根据你装备的各种魔晶石的等级，你的结果可能会有所不同。如果你遵循了我到目前为止的建议，你应该会没问题的。</li>
                        <li>你的“洞察 (Assess)”魔晶石可能是你首先获得也是升级最多的。这应该能让你得到第一条线索。同样地，“恢复 (Healing)”和“冰 (Ice)”也是你早早就能拿到并应该已经升到相当高级别的魔晶石，它们应该能让你得到另外 2 条线索。你总共可以得到 3 条线索，分别对应不同的奖杯。</li>
                        <li>不要错过获取最后线索的机会，你必须在药房购买某种药物。</li>
                      </ul>
                    </div>
                  </div>

                  <h3 id="section-10-12" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.12 支线：爆炸躯体</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：爆炸躯体 (A Dynamite Body)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这个任务把你送回竞技场。与接待员交谈并选择特殊对战。你将要面对两只自爆怪 (Bomb) 和一只变异重型爆弹怪 (Smogger)。这些敌人都不好对付。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗准备与策略</h5>
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li><strong>必须携带治疗魔晶石：</strong>你的生命值会消耗得很快。给队伍装备你手头上有的最好防具。</li>
                        <li>给爱丽丝装备<strong>属性-火魔晶石对</strong>。自爆怪的弱点是冰，如果你之前用火元素攻击它，它就会自爆，这正是你想要的，但在那之前不要使用火系法术。</li>
                        <li>自爆怪在血量降低时会自爆，对周围造成巨大的范围伤害。当一只自爆怪准备自爆时，<strong>必须远离它</strong>。利用这段时间躲避并恢复。</li>
                        <li>对付变异重型爆弹怪，就像之前对付它一样：用雷属性法术 (Thunder) 攻击它的铁球，等它力竭后用任何技能猛攻。如果你有 2 级雷魔法 (Thundara)，这会很有帮助。</li>
                      </ul>
                    </div>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      开始时让一只自爆怪沉睡，这样你就可以在不受干扰的情况下与另一只战斗。立即尽可能远离沉睡的自爆怪。如果你靠得太近，你的攻击会打中它并唤醒它。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      等待没睡觉的自爆怪攻击你。如果你打断它的攻击，它就会膨胀并最终爆炸，造成大量伤害。当它完成攻击后，在勇穴模式下对其倾泻攻击，然后在它即将再次攻击时停止。一旦自爆怪陷入陷危，使用突刺使其力竭，然后用勇穴模式和奋力一击终结它。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      当第一只自爆怪成为历史时，对第二只重复此操作。打败这两只怪物完成任务，并为爱丽丝赢得一把<strong>星云杖 (Arcane Scepter)</strong>。
                    </p>
                  </div>

                  <h3 id="section-10-13" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.13 竞技场挑战与极限技 (Limit Breaks)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 竞技场挑战 (Colosseum Challenges)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      完成所有竞技场挑战是获得“终极武器 (Ultimate Weapon)”奖杯的要求之一。你可以稍后再做，但现在做可以获得切实可见的奖励：
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>赢得“单人 vs 野生动物”挑战，克劳德和爱丽丝都能获得<strong>二级极限技 (Level 2 Limit Breaks)</strong>。</li>
                      <li>赢得“单人 vs 神罗暴徒”挑战，克劳德和爱丽丝都能获得<strong>秘籍卷二 (Vol. II Manuscripts)</strong>。这能提供用于升级武器的 SP。</li>
                      <li>其中两项挑战需要爱丽丝单挑，而这不仅是你直到通关后才能再次使用爱丽丝，也是你再次进入竞技场的最后机会。</li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <p className="text-[15px] font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] m-0 mb-2">
                        🌟 强烈推荐：爱丽丝的“星之守护 (Planet's Protection)”
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0">
                        不幸的是，现在只有“爱丽丝 vs 野生动物”挑战可用。好消息是，赢得它将奖励爱丽丝她的二级极限技“星之守护”，这使你的团队在 80 秒内免疫物理攻击。单凭这一点，现在就值得打这 5 场连续的战斗。
                      </p>
                    </div>

                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>选择简单模式 (Easy Mode) 并接受“爱丽丝 vs 野生动物”挑战。给她的武器装备<strong>属性-冰魔晶石对</strong>，并确保她也有风魔晶石来对付最后一轮的次级小龙 (Lesser Drake)。完成所有 5 场战斗大约需要一分钟。完成此挑战将为你赢得“回归的冠军 (Returning Champion)”奖杯。</li>
                      <li>如果爱丽丝还没有学会她的光芒风暴 (Sorcerous Storm) 能力，这里是个学习的好地方。</li>
                      <li>然后让克劳德做“克劳德 vs 野生动物”挑战。他的奖励将是他的二级极限技“凌空破 (Ascension)”。</li>
                      <li>如果克劳德还没有学会无序交叉 (Disorder) 能力，给他装备钉棒，并在简单模式下不断赢得这个挑战直到他学会。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg">
                      <h5 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 text-[15px]">🔥 极限技 (Limit Breaks) 机制解析</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>极限技是角色在极限槽 (Limit Gauge) 满时可以采取的超强动作。</li>
                        <li>爱丽丝的极限技侧重于治疗和保护。其他 3 个角色的极限技是强大的攻击。</li>
                        <li>当角色受到伤害或使敌人力竭时，极限槽就会填满。</li>
                        <li>每个角色将获得 2 个极限技，但每次只能使用一个。在主菜单 &gt; 战斗设置 &gt; 角色名称 &gt; 极限技中设置。</li>
                        <li>二级极限技（就像你刚刚为克劳德和爱丽丝获得的那些）通常更强大，但它们的极限槽也需要<strong>多花大约 50% 的时间</strong>来填满。</li>
                        <li>执行极限技<strong>不需要 ATB</strong>，并且可以在获得它的战斗中保存到需要时使用。</li>
                        <li>当角色被击倒 (KO) 时，充满的极限槽不会自动清空。该角色复活后仍然可以使用该极限技。</li>
                        <li>极限技在战斗结束时会失效，即你不能将它带到另一场战斗中。</li>
                        <li>极限技不会停止敌人的动作，因此<strong>不保证能命中</strong>。敌人可以躲避它们，击倒执行它们的角色，变形为抵抗物理攻击的形态，或消失。因此，在执行这种宝贵的攻击之前，最好确保你的敌人被牵制住了。</li>
                      </ul>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mt-6 font-bold border-l-4 border-l-[#ff3366] pl-3">
                      如果你还没有完成战斗情报报告 7（利用敌人弱点 15 次），这是你在第 11 章之前的最后机会。选择“双人组 vs 贫民窟亡命徒”挑战。所有 5 场战斗中的所有敌人都弱火。
                    </p>
                  </div>

                  <h3 id="section-10-14" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.14 爱丽丝的星云杖与魔法使魔</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🪄 星云杖 (Arcane Scepter) 与魔法使魔 (Fleeting Familiar)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      星云杖增加了爱丽丝的基本攻击，但对她的魔法攻击几乎没有提升，在大多数情况下，这似乎没有很好地利用她的潜力。后期的升级包括对她基本攻击的微小（5%）提升以及攻击法术的 20% MP 消耗减少。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      它附带的武器能力是<strong>魔法使魔 (Fleeting Familiar)</strong>。当爱丽丝花费 1 格 ATB 使用这种能力时，她会召唤出一个小小的紫色使魔（看起来有点像蝴蝶），它每 3 秒向敌人发射一次自身的蓝色复制品，持续长达 240 秒。你会看到敌人在没有明显原因的情况下不断掉血，有点像你使敌人中毒时的情况。<strong>当爱丽丝使用攻击性法术或能力时，使魔会发射造成更大伤害的红色复制品。</strong>
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这种能力可以慢慢地削弱强硬 boss 的 HP，即使在他们难以受到伤害的时候也是如此。这是一种缓慢但稳妥地造成伤害的方式，同时让爱丽丝有自由进行普通攻击。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7]">
                      <strong>📈 熟练度奖励：</strong>如果你“连续释放能力或法术攻击”，就会获得熟练度奖励。这仅仅意味着在爱丽丝使用魔法使魔后，让她使用能使使魔如上所述发射红色复制品的能力或法术。在召唤使魔后施放像 Fire 这样的 1 级法术可能是最简单的方法。
                    </div>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 flex items-center gap-2">
                      <span>⚠️</span> 前进前的最终检查 (Check Before Proceeding)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      我们在这次通关第 9 章时想要解锁的物品取决于 2 件事：触发山姆的任务线以及<strong>完成所有 3 个任务</strong>。如果你没有完成全部 3 个任务，你将得不到我们寻找的物品。因此，在继续之前，你应该查看地图 &gt; R2 以确保所有 3 个任务都显示为已完成。
                    </p>
                  </div>

                  <h3 id="section-10-15" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.15 支线：深蹲比赛</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：燃烧大腿 (Burning Thighs)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      前往健身房（在你的地图上有标记）和吉南 (Jules) 交谈。他会安排你和罗尼 (Ronnie) 对抗。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这里要记住的主要事情是<strong>永远不要太快</strong>。如果你这样做了，你会摔倒并无可挽回地落后。由于节奏会随着你的进展而加快，这实际上只是在最初几秒钟内是个问题。如果你走得太慢，系统会提示你连按 X 键几次才能再次前进，但你能挺过去的。如果你不摔倒，你很容易就能赢。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      打败罗尼将完成任务，但不要就此止步。趁你还在状态，挑战并击败杰伊 (Jay) 获得一颗<strong>提升运气魔晶石 (Luck Up Materia)</strong>。然后挑战吉南。当你击败他时，你将赢得一条冠军腰带 (Champion Belt)，并且<strong>“深蹲之王 (Sultan of Squat)”奖杯</strong>将属于你。这是一个很容易赢的奖杯，所以我绝对建议现在就拿。
                    </p>
                  </div>

                  <h3 id="section-10-16" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.16 营救蒂法与爱丽丝的红色礼服</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：营救蒂法 (Rescue Tifa)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      回到玛姆那里。乔尼会把你拖回古留根尾的宅邸。进去和莱斯利交谈，然后往北走。
                    </p>
                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded p-4 text-[14px] text-[#a5c3c7]">
                      <strong>👗 最佳服装检查点：</strong>你应该会遇到爱丽丝，如果你遵循了第 8 章的说明，她应该穿着本页顶部图片中那件<strong>惊艳的红色礼服</strong>。
                    </div>
                  </div>

                  <h3 id="section-10-17" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.17 蜜蜂之馆：舞蹈小游戏与奖杯</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：爱丽丝的计划 (Aerith's Plan)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      爱丽丝会带你去蜜蜂之馆 (Honeybee Inn)。和接待员交谈穿过门，但在和里面任何人交谈之前<strong>手动存个档 (Manual Save)</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      一张音乐唱片和一个奖杯与接下来的事件序列相关。不幸的是，很难在一次通关中同时获得这两者。可能需要尝试几次才能获得每个物品，并且它们之间没有保存的机会。我建议我们现在先拿音乐唱片，等通关后回到这里再拿奖杯。我让你手动保存是为了以防你想一次尝试同时获得两者。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 mt-6 text-[15px]">舞蹈练习：音乐唱片 #26</h5>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>这两个事件都涉及跟着音乐在正确的时间按下正确的按钮。你可以通过仔细听来判断每次按键的好坏。Great 会发出清脆明亮的“叮”声。Good 会类似但没那么亮，而 Bad 听起来就，嗯，很糟糕。</li>
                      <li>和门口的蜜蜂女孩交谈。当被问及是否要前往舞台时，选择“是”。她们会让你先练习。</li>
                      <li>不断尝试练习环节，直到你得到 <strong>10 个 "Greats"</strong>。如果你没达到，就选择再试一次的选项。</li>
                      <li>当你完美地做到这一点时，你将获得 <strong>音乐唱片 #26</strong>。这不应该花费超过 5-10 分钟。</li>
                    </ul>

                    <h5 className="font-bold text-[#00f0ff] mb-2 mt-6 text-[15px]">获取“舞蹈皇后”奖杯 (Dancing Queen Trophy)</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      克劳德会被拖进去（结果几乎是字面意义上的拖）和安德烈做类似的小游戏。如前所述，赢得“舞蹈皇后”奖杯的标准是不确定的。
                    </p>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-4">
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                        这个小游戏包括与安德烈跳舞，并在屏幕提示时在适当的时间按下按钮。有 28 个这样的按键需要执行。每次按下按钮都会被评为 "Great"、"Good" 或 "Bad"，这取决于按下按钮的时机与屏幕提示的匹配程度。除了上面描述的听觉提示外，你不会得到任何关于你动作准确性的即时反馈。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                        你必须依靠舞蹈结束时得到的记分卡。该记分卡决定你是否能获得关键物品“安德烈的耳环 (Andrea's Earrings)”和“舞蹈皇后”奖杯。
                      </p>
                      <p className="text-[14px] font-bold text-cyan-300 m-0 border-l-4 border-l-[#00f0ff] pl-3">
                        经过作者考证与多次测试，最可能的标准是：最多 5 个 Bad 评价（即 0 到 5 个均可）。如果你没能一次拿到，通关后通过章节选择再回来刷会有效率得多。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-10-18" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.18 克劳德的女装与第三套礼服解锁</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      改头换面后，仔细观察克劳德出门。他大概是第 9 个出门的人。跟着他，仔细看看他的衣服。
                    </p>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-2 flex items-center gap-2">
                        <span>👗</span> 最佳服装检查点：克劳德的女装
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        如果你在第 9 章中正确地遵循了指示，他应该穿着一件<strong>宝蓝色和黑色的裙子</strong>，辫子上系着<strong>粉红色的缎带</strong>，如本页顶部图片所示。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      我们现在已经解锁了 9 套服装中的 3 套，以获得恰如其分的“最佳服装 (Dressed to the Nines)”奖杯。在此处的某个地方，你应该会因此获得<strong>“时尚达人 (Snappy Dresser)”奖杯</strong>。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#ff3366] pl-3">
                      通过做出不同的决定，我们将在接下来的两次通关第 3、8 和 9 章时解锁另外 3 套。
                    </p>
                  </div>

                  <h3 id="section-10-19" className="text-xl mt-8 mb-4 font-bold text-cyan-100">10.19 选秀与古留根尾宅邸决战</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：选秀 (The Audition)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      向南回到古留根尾宅邸 (Corneo Mansion)。当团队重聚时，检查一下做成古留根尾模样的自动售货机。它会卖给你 <strong>音乐唱片 #11</strong>。
                    </p>

                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 mt-6">
                      📍 目标：与古留根尾对峙 (Showdown with Corneo)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在爱丽丝和蒂法去“营救”克劳德之前，让她们下楼去和古留根尾的三个暴徒打一架。战斗结束后，挤过楼梯下的狭窄通道，取回一枚<strong>愤怒戒指 (Fury Ring)</strong>。
                    </p>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                        💍 愤怒戒指 (The Fury Ring)
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                        愤怒戒指使其佩戴者处于<strong>永久的狂暴 (Berserk) 状态</strong>。这将增加 30% 的造成伤害，但也会增加 30% 的受到伤害。是否装备它取决于具体情况，但它是快速赢得艰难的模拟器战斗的<strong>首选配件</strong>，你绝对想在你的物品栏中至少拥有一枚。
                      </p>
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7]">
                        <strong>💡 提示：</strong>当你获得章节选择 (Chapter Selection) 选项时，你可以通过从第 14 章开始并直接回到这个地点，来获得任意数量的愤怒戒指（而无需重复这个漫长的章节）。
                      </div>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      别忘了你刚刚为爱丽丝获得了一把新武器。你现在应该知道该怎么做了（装备、自动升级并学习技能）。
                    </p>
                  </div>

                  <h2 id="section-11" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十一、第十章：焦躁的迷宫 (Rough Waters)
                  </h2>

                  <h3 id="section-11-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">11.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>这是一个简单得多的章节。我们只需要收集<strong>一张音乐唱片和一把武器</strong>，而且没有支线任务。</li>
                      <li>专注于学习武器能力和完成情报报告的要求。</li>
                      <li>大部分路线都相当笔直，所以我可能只会提供最少的指示。换个口味，享受探索的乐趣吧！</li>
                    </ul>
                  </div>

                  <h3 id="section-11-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">11.2 逃离下水道与 Boss 战：阿勃祖 (Abzu)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：逃离下水道 (Escape to the Surface)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      本章开始时，蒂法和爱丽丝躺在地上。由于一些我将在第 14 章解释的原因，我建议你<strong>走向爱丽丝并与她互动</strong>，而不是蒂法。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      接下来是一场对抗弱火 (Fire) 的 Boss 战。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg">
                      <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                        <span>⚔️</span> Boss Fight: Abzu (阿勃祖)
                      </h4>
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>阿勃祖的早期攻击可以用克劳德的勇穴模式 (Punisher Mode) 招架能力进行反击。</li>
                        <li>让爱丽丝设置一个<strong>圣魔阵 (Arcane Ward)</strong>，然后向阿勃祖狂丢火 (Fire) 和中级火魔法 (Fira)。消耗一些 MP 也没关系，这场战斗之后会有很多机会恢复。</li>
                        <li>当阿勃祖爬上墙并准备猛扑 (Pounce) 时，切换到克劳德并尽最大努力躲避这次攻击。这样做会短暂地使阿勃祖陷入陷危 (Pressure)。</li>
                        <li>当阿勃祖的 HP 降到 88% 时，他也会陷入陷危。用突刺 (Focused Thrust) 和下段踢 (Focused Strikes) 打击他，让爱丽丝用魔法攻击他的<strong>其中一只角 (Horns)</strong>。</li>
                        <li>小心他的黑水冲击 (Blackwater Blast) 能力，这可以全灭你的队伍。你需要<strong>远离喷发黑水的管子</strong>，如果你能及时分辨出它在哪里并拉开距离的话（你能做到的话你比我厉害）。</li>
                        <li>打断他的一只角会使他陷入陷危。从这里开始，使用火属性法术和你的专注类攻击使他力竭并击败他。</li>
                      </ul>
                    </div>
                  </div>

                  <h3 id="section-11-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">11.3 顺水而行：蒂法的新武器</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：顺水而行 (Follow the Waterway)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      拉下第一个开关排空水渠后，女士们会走上楼梯。然而，如果你<strong>往下走</strong>，你会看到一个紫色的宝箱，里面装着给蒂法的一副<strong>软羽手套 (Feathered Gloves)</strong>。
                    </p>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                        🥊 软羽手套 (Feathered Gloves) 与星之雨 (Starshower)
                      </h4>
                      
                      <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                        软羽手套很好地补充了蒂法的固有优势。它们具有蒂法武器特有的 3:2 物理与魔法攻击比率，但在满级武器中，这些数字的总和 (200) 是她所有武器中最高的。它们提供最高的<strong>速度提升 (28)</strong> 和第二高的物理攻击力提升。在它们的许多有用属性中，有一项升级可以让她有 70% 的几率以 2 级气 (Chi) 进入战斗（即我前面提到的“专注激活”）。缺点是，直到武器等级 5 它们都没有任何连接的魔晶石槽对，这很可惜。不过，在很多方面，这对于大多数情况来说是蒂法最好的武器。
                      </p>
                      
                      <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                        它们独特的武器能力是<strong>星之雨 (Starshower)</strong>，这是一个由 9 次连续打击组成的连击，威力不断增强，对单个目标造成伤害。作为奖励，在星之雨之后采取的下一个攻击行动将造成比平时<strong>多 70% 的伤害</strong>。这个加成适用于任何攻击行动——普通攻击、魔法攻击，甚至是极限技。利用这个提升的一个好方法是用蒂法的三角攻击（例如升龙拳 Whirling Uppercut）紧跟在星之雨之后。三角攻击不需要 ATB，加上 70% 的伤害加成，它们可以造成比平时更多的伤害。
                      </p>

                      <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                        星之雨会增加敌人的力竭和陷危，但不提供 ATB 恢复。即便如此，星之雨可以说是蒂法<strong>最具破坏性的特殊攻击</strong>，而且它还有一个令人惊叹的、看起来很爽的动画！
                      </p>

                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7]">
                        <strong>📈 熟练度奖励：</strong>首先让蒂法完全填满她的 ATB 槽。然后让她释放星之雨，并立即接上任何其他攻击能力，例如下压踢 (Divekick) 或火焰 (Fire) 这样的法术。你可以同时输入这两个命令，然后在她执行这些命令时切换到另一个角色。
                      </div>
                    </div>

                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>爬上梯子与女士们会合。进入一个有恢复长椅和自动售货机的房间，自动售货机会卖给你 <strong>音乐唱片 #9</strong>。</li>
                      <li>从 2 号引水渠 (Aqueduct 2) 的西北角，你可以向北或向东走。向东的路是死胡同，所以顺着梯子<strong>向北</strong>走。</li>
                      <li>在沉淀池走廊 (Settling Basin Corridor) 的北端，你要向北走，但遇到了一扇锁着的门。</li>
                      <li>去锁着的门正南面的房间，打开<strong>发电机</strong>。</li>
                      <li>向南绕圈，拉下开关并探索所有区域。</li>
                      <li>在其中一边，你会找到一些现金，赋予了“肮脏的钱”新的含义。</li>
                      <li>在另一边，你会找到<strong>下水道钥匙 (Key to the Sewers)</strong>，这将打开前进的道路。</li>
                    </ul>
                  </div>

                  <h3 id="section-11-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">11.4 越过主干线与收集结界魔晶石</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：越过主干线 (Crossing the Trunk Line)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在过场动画之后，向西北看穿过空运河，你会看到一颗魔晶石。看你的地图并记下它的位置。我们就是要往那边走，但如果你不注意的话很容易错过。
                    </p>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded p-4 text-[14px] text-[#a5c3c7] mb-6">
                      <strong className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">💡 收集提示：</strong>在蹑手蹑脚地穿过你左边关闭的闸门之前，爬上你右边短小的楼梯并向右转弯，可以拿到一颗<strong>中毒魔晶石 (Poison Materia)</strong>。我们已经见识过这东西有多有用了。
                    </div>

                    <h4 className="font-bold text-cyan-300 mb-3 mt-6">📍 目标：前往第七区贫民窟 (To the Sector 7 Slums)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>在 3 号引水渠 (Aqueduct 3) 的北端，你会来到一个治疗长椅。</li>
                      <li>你到了一个可以向南或向西走的房间。向南是一个由 5 只变异老鼠 (Wererats) 守卫的宝箱。向西并爬上梯子是前进的路。</li>
                      <li>你会爬上一个梯子，来到一个 T 形路口。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3366]"></div>
                      <h5 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-2 text-[15px]">
                        ⚠️ 极其重要的魔晶石收集
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        向左转，沿着唯一的一条路走。爬下梯子后，向北走，捡起向你发光的<strong>结界魔晶石 (Warding Materia)</strong>。<strong>一定要拿到这个！</strong>游戏中只有 2 颗这样的魔晶石。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      南边逆时针方向的环路是一个死胡同，里面有一场不必要的战斗且没有有用的物品，所以折返回去，爬上梯子，继续向北和向西走。最终，你会来到一个满是粘液的池子和一个控制室。
                    </p>
                  </div>

                  <h3 id="section-11-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">11.5 重返地面与本章结尾</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：重返地面 (To the Surface)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在令人讨厌的抽水机小游戏之后，你要连续打 3 场战斗。最后一场是对抗 3 只鱼人 (Sahagins)，可能会很艰难。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      只要有机会就使用<strong>火属性魔法 (Fire Magic)</strong>，并且一次集中攻击一个敌人，你应该就能干净利落地脱身。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-medium">
                      好吧，考虑到你刚刚去过的地方，可能也没那么“干净”。关键是，你活着逃出了下水道。第十章结束！
                    </p>
                  </div>

                  <h2 id="section-12" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十二、第十一章：亡灵的恶作剧 (Haunted)
                  </h2>

                  <h3 id="section-12-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">12.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>在本章中，你将收集到一张音乐唱片和 <strong>2 把武器</strong>。然而，正如我之前警告过你的，要获得其中一把武器，你<strong>必须拥有偷窃魔晶石 (Steal Materia)</strong>。如果你现在错过了它，你以后还能拿到，但是，就像生活中的很多事情一样，越早越好。</li>
                      <li>尽管除极少数例外情况外，本章相当笔直，但众多的梯子和楼梯使得仅凭地图很难导航。因此，我将再次打破常规，为你提供穿过这个区域的详细说明。</li>
                      <li>不过，我鼓励你尝试在没有我帮助的情况下自己导航。为了确保你不会错过任何必需品，我将用<strong>加粗的文字</strong>来强调引导你找到这 4 个物品的关键步骤。</li>
                    </ul>
                  </div>

                  <h3 id="section-12-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">12.2 列车坟场：爱丽丝的新武器</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：列车残骸 (A Train Wreck)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      下到地面后，你将向北穿过一节火车车厢，然后向东进入一个开阔区域。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在爬上北边的梯子之前，继续向东穿过另一节火车车厢，进入休息长椅正北方的一个开阔区域。
                    </p>
                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-4">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <p className="text-[15px] font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] m-0">
                        一直向南走，找到一个紫色的宝箱，里面装着爱丽丝的秘银棒 (Mythril Rod)。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-12-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">12.3 爱丽丝的秘银棒与审判光线</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🪄 秘银棒 (Mythril Rod) 与审判光线 (Ray of Judgment)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      秘银棒提供爱丽丝所有武器中<strong>最高的魔法攻击加成</strong>，因此与她的优势完美契合。魔晶石槽在早期就能得到升级，这始终是一个加分项。尽管它缺乏银制长杖的一些重要升级能力，但就纯粹的魔法力量而言，没有任何其他武器能与之相提并论。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      秘银棒的武器能力是<strong>审判光线 (Ray of Judgment)</strong>。这个能力需要消耗整整 <strong>2 格 ATB 槽</strong>，但它是爱丽丝最好的不需要 MP 的攻击技能。爱丽丝的武器会释放出一道光束，可以击中敌人 10 次造成巨大伤害，而且它是除了蒂法的正拳 (True Strike) 和三角攻击之外，唯一能真正<strong>增加力竭百分比</strong>的能力。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      除了高昂的 ATB 成本外，这种攻击的缺点是它<strong>不会追踪敌人</strong>，这意味着高机动性的敌人可以简单地移开并躲避攻击的主要威力。因此，这个能力很适合用来对付无法躲避的<strong>力竭状态的敌人</strong>。如果在敌人力竭后尽快使用，其他攻击者也能从它所增加的力竭百分比中受益。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7] mb-4">
                      <strong>📈 熟练度奖励：</strong>对力竭的敌人使用审判光线也能获得熟练度奖励。
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      秘银棒自带 3 个魔晶石槽，但都没有相连。我建议你手动花费 20 AP 在这把武器的第一个核心 (Core) 中购买 2 个“新增魔晶石槽 (New Materia Slot)”技能。第一个会增加一个槽位，第二个会将 2 个槽位连接起来。现在爱丽丝可以继续使用<strong>范围化-恢复 (Magnify-Healing)</strong> 组合了。
                    </p>
                  </div>

                  <h3 id="section-12-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">12.4 穿越列车与维修设施</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>穿过火车车厢，爬上东北方的梯子。穿过车厢，然后下另一个梯子，到达 C 区东北部，面向一扇门。</li>
                      <li>穿过门，然后继续向北，再向西进入 B 区。挤过一条狭窄的通道。</li>
                      <li>在收到一条神秘信息并打了一场仗后，女孩们会带你爬上东北方的一个梯子。上去，然后从另一边的梯子下去。</li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-2 flex items-center gap-2">
                        <span>💡</span> 收集提示：HP 提升魔晶石
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        现在看你的地图。在调车场 2 - B 区 (Switchyard 2 - Section B)，地图北端有一条水平分支，其西端是死胡同。去那里取回一颗 <strong>HP 提升魔晶石 (HP Up Materia)</strong>。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      向东折返，从另一个梯子向北爬。沿着小路向北走，走一条……嗯，算是捷径吧，然后收到一个意想不到的邀请。护送女士们进入维修设施 (Maintenance Facility)。
                    </p>
                  </div>

                  <h3 id="section-12-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">12.5 穿过维修设施与迎战恶灵</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-5 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：穿过维修设施 (Pass Through the Maintenance Facility)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>朝北端的标记走。当你的路被挡住时，回到南端的门。那扇门会关上，但西边的另一扇门会打开，所以沿着那条路走。</li>
                      <li>你真的很想继续向北穿过这节车厢，但不幸的是这行不通。在心里记下，你这一章的大部分目标将是找到一条向北穿过这节车厢的路。</li>
                      <li>现在，向西走并爬楼梯。一旦你上了楼，你会被邀请进入西北方的一扇门，但不幸的是它被锁上了。</li>
                      <li>改走东边的路。在那里你会找到一扇门和一些向下的楼梯。先下楼打一场仗，然后拿一个宝物。</li>
                      <li>然后回到楼上，穿过那扇门。穿过房间到下一个区域，进入西北方一扇没锁的门。</li>
                      <li>这个房间有向北和向南的出口。先向南走。</li>
                      <li>这个房间有向南和向东的出口。南边的出口就是你之前遇到的那扇锁着的门，所以解锁它，然后回到房间里，走东边的出口去拿一个宝物。</li>
                      <li>回到西边的房间，然后向北走，再向北走到设施的西北角。</li>
                      <li>在这里你会发现向上的楼梯，向下的楼梯，以及一条向东的新路。向上的楼梯会带你到一扇你现在还打不开的门，而向东的路是死胡同。你唯一的选择是下楼梯。</li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3366]"></div>
                      <h5 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-2 flex items-center gap-2">
                        <span>🎵</span> 收集：音乐唱片 #6
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        在楼下你会找到一个梯子。爬上去，它会带你走上一条通往设施东北部的高架道路。从那条路东侧的梯子下去，爬上附近的楼梯，来到一个恢复长椅和自动售货机前。在这里你可以购买 <strong>音乐唱片 #6</strong>，使你的总数达到 21 张。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#ff3366] pl-3">
                      进门并与控制台互动。这将引发一场与恶灵 (Ghoul) 的战斗。
                    </p>
                  </div>

                  <h3 id="section-12-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">12.6 Boss战：恶灵 (Ghoul)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 flex items-center gap-2">
                      <span>⚔️</span> 目标：控制室的阴影 / Boss Fight: Ghoul
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      恶灵之所以让人烦恼，不仅因为房间里堆满了杂物难以靠近，还因为它会在 <strong>2 种形态</strong>之间切换：
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>当它是<strong className="text-[#00f0ff]">蓝色</strong>时，它处于物理形态，对魔法免疫。</li>
                      <li>当它是<strong className="text-[#ff3366]">红色</strong>时，它处于幽灵形态，对物理攻击免疫。</li>
                      <li>恶灵总是以物理形态开始。每次他使用“无形化 (Incorporeality)”，他就会改变形态。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗策略</h5>
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>一开始让克劳德和蒂法揍他。他一改变形态，就用 <strong>毒属性魔法 (Bio)</strong> 击中他让他中毒。（这场战斗我打了两次——一次用了 Bio，一次没用。用 Bio 战斗快得多）。</li>
                        <li>对恶灵施放<strong>恢复魔法 (Regen)</strong> 也会产生与中毒相同的效果，所以只要他变红，就用 Regen 击中他。</li>
                        <li>总体而言，你最好积累一些 ATB，然后在恶灵变成蓝色时寻找掩护。总的来说，很难靠得足够近以造成任何持续的伤害。</li>
                        <li>然后当恶灵变红时，让每个人都向他狂丢 <strong>中级或高级火魔法 (Fira/Firaga)</strong>。这将迅速填满他的力竭槽并使他陷入陷危。</li>
                        <li>通常我建议使用圣魔阵 (Arcane Ward)，但在所有的杂物中，你很难再找到回去的路，所以别费心了。只需根据需要使用魔法即可。战斗结束后你可以在外面的长椅补充 MP。</li>
                        <li>不断观察恶灵处于哪种形态，在你的近战攻击和魔法攻击之间交替，直到恶灵吃土。至少在离开之前，他还能体面地把所有东西都整整齐齐地放回原处。</li>
                      </ul>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      从这里你需要折回到维修设施的西南部分（“起重机游戏 Crane Game”标记所在的地方）去拉一个开关。穿过房间西侧之前锁着的门，向西下楼梯，然后向南走直到到达标记处。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      向西下楼梯，然后向东进入火车车厢。向北，从西边出口出去，再次向北，沿着向北的小路到达标记处。你现在可以在附近的长椅休息，然后离开设施。
                    </p>
                  </div>

                  <h3 id="section-12-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">12.7 迷宫导航与爱丽丝的防刃魔杖</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：重回同伴身边 (Back Amongst Friends)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>去控制面板拉下开关。然后你会打一场仗。之后，你只需回到之前的长椅就可以免费治疗。</li>
                      <li>你现在可以向北走，爬上一个梯子，然后再爬下另一个梯子。</li>
                      <li>爬上那个短梯子进入附近的火车车厢，拉下一个开关。你现在可以爬上几乎就在正北方的一个梯子。顺着路走，从另一端的单向梯子滑下去。</li>
                    </ul>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-5 my-4 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-2 flex items-center gap-2">
                        <span>🧭</span> 最终区域导航指南
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">这最后一块区域不容易导航，请仔细按照以下步骤（对应游戏内可能的复杂地形）：</p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>进入北边的一节火车车厢，顺着它向东北走。在你正北方会有另一个火车头。爬上去拉下另一个开关。这将让你进入西边有两个次级小龙 (Drakes) 飞来飞去的区域。</li>
                        <li>击败小龙后，顺时针绕到西北，进入 A 区的西北部分。</li>
                        <li>爬进北边最后一辆火车的车厢并拉下一个开关。这会将高架路线连接到北边的一个新区域。</li>
                        <li>爬上东边的最后一个梯子。顺着小路走到长椅和自动售货机前。你应该治疗一下，为即将到来的 boss 战做准备。</li>
                      </ul>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold text-cyan-300">
                      战前准备：尽可能给更多角色装备冰 (Ice) 和风 (Wind) 魔法。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-6 border-l-4 border-l-[#ff3366]">
                      <h5 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-2 text-[15px]">
                        ⚠️ 关键武器获取：防刃魔杖 (Bladed Staff)
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        正如前面提到的，接下来的 boss 身上有爱丽丝的一把武器，但你<strong>必须有偷窃魔晶石 (Steal Materia)</strong> 才能获得它。希望你有。如果有的话，把偷窃魔晶石装备在某人身上，让那个角色<strong>每个回合都使用“偷窃”</strong>，直到你得到“防刃魔杖”。
                      </p>
                    </div>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                        🪄 防刃魔杖 (Bladed Staff) 与光之盾 (Lustrous Shield)
                      </h4>
                      
                      <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                        防刃魔杖主要增加爱丽丝的普通方块键攻击强度和她的暴击率，但它对她的魔法攻击几乎没有提升。虽然这似乎能节省 MP，但它削弱了爱丽丝作为施法者的真正实力。它确实给了她的生命值一个急需的 850 HP 提升——这是她所有武器中最多的——以及 +27 MP，但这根本不足以弥补她魔法力量的损失。
                      </p>
                      
                      <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                        从防刃魔杖中，爱丽丝可以学习<strong>光之盾 (Lustrous Shield)</strong> 能力。消耗 1 格 ATB 槽，她可以在一个角色周围放置一个盾牌，保护该人在 80 秒内免受投射物的伤害。接触盾牌的敌人会受到一些伤害。这个盾牌是静止的（即，它不会随角色移动），所以受保护的角色必须保持相对不动，以获得最大的保护效益。
                      </p>
                      
                      <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                        这种能力的一个用途是在它后面设置一个圣魔阵 (Arcane Ward)，提供一个相对安全的地方来双重施法。我之所以说“相对”，是因为敌人仍然可以用近战物理攻击突破盾牌的防御。然而，当像地狱屋这样的敌人飞向空中并从上方用投射物向你轰炸时，光之盾可以提供一个避难所，让你安全地用魔法反击。
                      </p>
                      
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7]">
                        <strong>📈 熟练度奖励：</strong>如果你用盾牌“击中敌人 (Strike an enemy)”，就能获得奖励。然而，由于你实际上不能移动盾牌，这本质上意味着如果敌人撞到盾牌上，你就能获得奖励，而这你很难控制。在对付地面上多个具有攻击性的敌人时，这个奖励最容易获得，但不幸的是，在游戏的这一部分并没有太多这样的敌人。
                      </div>
                    </div>
                  </div>

                  <h3 id="section-12-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">12.8 Boss战：埃力格 (Eligor)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight: Eligor
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      如果你只是一味地和敌人死磕，这场战斗可能会非常艰难和令人沮丧。然而，一旦你掌握了埃力格的攻击模式，这其实还挺好玩的。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px]">战前准备 (Materia)</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>克劳德：装备<strong>偷窃 (Steal)</strong> 魔晶石和<strong>先发制人 (First Strike)</strong> 魔晶石。</li>
                      <li>爱丽丝：装备<strong>先发制人 (First Strike)</strong> 魔晶石。</li>
                      <li>每个人都装备<strong>冰之魔晶石 (Ice Materia)</strong>。把你等级最高的给爱丽丝，第二好的给克劳德。</li>
                      <li>在克劳德或蒂法的武器上，将<strong>冰 (Ice) 与属性 (Elemental)</strong> 配对。</li>
                    </ul>

                    <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px]">第一阶段</h5>
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-6">
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>战斗开始时，让克劳德向左闪避以躲过埃力格的第一次攻击，然后<strong>从埃力格身上偷窃</strong>。如果你第一次没偷到“防刃魔杖”，你要重试 (Retry) 这场战斗。不要站着等结果，继续战斗，如果你看到“偷窃失败”的信息，就重试。</li>
                        <li>战斗的下一部分是最棘手的。爱丽丝需要一格完整的 ATB 槽，但如果她攻击埃力格太久，他会用“扫视 (Sweeping Gaze)”击中她，这将使她沉默并陷入睡眠。<strong>如果你看到他正在为这个能力蓄力，切换到另一个角色。</strong>爱丽丝会跑去寻找掩护，不应该被扫视击中。当攻击结束时，切回爱丽丝，直到她的 ATB 槽充满。</li>
                        <li>现在你需要消磨一些时间，直到埃力格静止不动。我们要用冰系法术攻击他，但冰系法术需要很长的施法时间，因此很容易被躲避。当看起来埃力格要静止片刻时，让爱丽丝使用 1 格 ATB 建立一个<strong>圣魔阵 (Arcane Ward)</strong>，并用另一格双重施放中级冰魔法 (Blizzara)。我建议避免使用高级冰魔法 (Blizzaga)，因为它施法时间太长。Blizzara 就足够了。</li>
                        <li>移动蒂法，让她在埃力格的马前面或战车正后方（埃力格对侧面的攻击免疫）。让她攻击直到爱丽丝的冰系法术使埃力格陷入陷危，然后让她狂丢下段踢 (Focused Strike) 直到埃力格力竭。如果你在这里没能打出力竭，你应该考虑重试。</li>
                        <li>现在埃力格力竭了，让大家痛揍他，直到战斗进入下一阶段。</li>
                      </ul>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px]">第二阶段：空战</h5>
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg mb-6">
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>埃力格会在你上方盘旋并对自己施放<strong>反射 (Reflect)</strong>。反射对我们来说不是问题，但我还是提一下。</li>
                        <li>派蒂法飞到空中攻击埃力格。克劳德也会加入。一两轮空中攻击应该就能把埃力格打回地面。如果蒂法或克劳德陷入睡眠，只需切换到另一个角色来完成空中突击。</li>
                        <li>当埃力格下降时，绕着区域中间的箱子跑，用它来保护你的团队免受即将到来的攻击。当埃力格着陆时，反射状态应该已经消失了，你可以再次用魔法攻击他。</li>
                        <li>让埃力格完成他的刺穿/扫视 (Piercing/Sweeping Gaze) 攻击。然后试着把克劳德和/或爱丽丝移进圣魔阵。</li>
                        <li>让克劳德和爱丽丝都施放 Blizzara 来使埃力格陷危，然后让蒂法靠近用下段踢使他力竭。</li>
                      </ul>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px]">最终阶段</h5>
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-5 rounded-lg">
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>痛揍力竭的埃力格，战斗将进入最后阶段。一段动画后，埃力格将执行欣嫩谷之风 (Winds of Gehanna)。尽量把大家都移到最右侧以躲避这次攻击，但你也希望蒂法和/或克劳德尽可能靠近埃力格。</li>
                        <li>埃力格现在会静止片刻。<strong>车轮 (Wheels)</strong> 现在将成为目标，一次漂亮的奋力一击 (Braver) 或下压踢 (Divekick) 就能破坏一个。运气好的话，你可以冲进去立刻把它们都解决掉。</li>
                        <li>如果你运气不佳，埃力格会开始绕着竞技场跑圈，让你几乎不可能打到车轮。在后面追他，等他停下来执行技能。当他停下时，尝试至少破坏一个车轮。必要时重复以破坏第二个车轮。</li>
                        <li>当两个车轮都被破坏时，埃力格将被最后一次力竭。它的持续时间足足有 10 秒，这应该给你足够的时间来终结他。</li>
                      </ul>
                    </div>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded p-4 mt-6 text-[14px] text-[#a5c3c7]">
                      <strong>💡 作者心得：</strong>我估计这个策略对我有大约 50% 的成功率。一旦我拿到第一次力竭，我估计我的成功率会达到 90% 左右。你可能需要练习几次才能掌握好时机。不过，当你掌握了之后，你应该能够一次也不需要治疗就完成这场战斗，而且对于完全拿捏这样一个难缠的敌人，你应该会感到非常自豪。
                    </div>
                  </div>

                  <h2 id="section-13" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十三、第十二章：死斗 (Fight for Survival)
                  </h2>

                  <h3 id="section-13-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">13.1 核心注意事项与导航</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>这是一个相当短的章节，没有与奖杯相关的物品需要收集，也没有特别的动作需要执行。你基本上就是沿着一条笔直的路杀过去，最终迎战两位塔克斯 (Turks) 的硬仗。</li>
                      <li>保持专注于战斗策略，尽量不要只会狂按方块键，你应该能顺利通关。</li>
                    </ul>

                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 目标：前往支柱 (Head for the Pillar)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      除了一些角色焦点的转移之外，本章主要就是爬上塔顶。在每一层，只有一条路可以继续向上，所有这些梯子和楼梯都在你的地图上标得清清楚楚。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      因此，在每一层你只需要：清理所有敌人，寻找宝箱和事件，然后查看地图上<strong>指向上的箭头</strong>，找到通往下一层的路。
                    </p>
                    <div className="bg-[#04151a] border border-[#ff3366]/30 rounded p-4 text-[14px] text-[#a5c3c7] mb-6">
                      <strong className="text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)]">⚠️ 忽略目的地标记：</strong>你的目的地在顶层，但在你到达那里之前，这个标记只会误导你。由于路径相当简单，我将把大部分导航工作交给你。我只提供你第一次玩本章时可能不太明显的建议。
                    </div>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      一群虚无魔物会挡住你的去路。攻击神秘的虚无魔物，直到你收到信息说谜团虚无魔物 (Enigmatic Spectre) 处于脆弱状态。然后把你的攻击集中在他身上。
                    </p>
                  </div>

                  <h3 id="section-13-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">13.2 战斗情报报告 13：ATB 增幅魔晶石</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3 flex items-center gap-2">
                      <span>📋</span> 战斗情报报告 13：祈祷分析 (Refocus Analysis)
                    </h4>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      📍 <strong>目标：与雪崩汇合 (Link Up with Avalanche)</strong>
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      由于克劳德是独自一人，这是完成情报报告 13“祈祷分析”的绝佳地点。以下是通过 5 个简单步骤完成此报告的方法：
                    </p>
                    
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>给克劳德装备<strong>祈祷魔晶石 (Refocus Materia)</strong>。</li>
                      <li>当你受到攻击时，消灭所有敌人，只留一个。如果可能的话，<strong>让最弱的敌人活着</strong>。你应该在 2F 和 6F 找到很好的机会来做这件事（在 6F，先干掉直升机兵）。</li>
                      <li>让那个敌人痛打克劳德直到他的<strong>极限槽 (Limit gauge) 满</strong>，让克劳德在必要时治愈自己。</li>
                      <li>一旦极限槽满了，选择<strong>“祈祷 (Refocus)”</strong>作为你的极限技，然后消灭最后一个敌人。</li>
                      <li>在另一群敌人身上再做一次，你的报告就完成了。</li>
                    </ul>

                    <h5 className="font-bold text-cyan-300 mb-2 text-sm mt-4">关于“祈祷 (Refocus)”与“ATB 增幅 (ATB Assist)”</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                      就其本身而言，祈祷能力的价值值得怀疑，除了在非常长的战斗中，它毫无用处。祈祷将你的 ATB 槽的 2 个部分分成 3 个，这意味着你将在正常时间的三分之二内填满一个 ATB 槽。这本来非常有用，除了你必须等极限槽填满一次才能激活它，然后你还得把那次极限技花在祈祷上，而不是输出巨额伤害。
                    </p>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] shadow-[0_0_20px_rgba(0,255,255,0.15)] p-4 rounded text-[14px] text-[#a5c3c7]">
                      <strong>🌟 真正的奖励：</strong>使用祈祷两次从而完成战斗情报报告 13，让你能够获得<strong>ATB 增幅魔晶石 (ATB Assist Materia)</strong>，这可以说是游戏中最强大的魔晶石，这一断言被游戏中只有这一颗的事实所证实。
                    </div>
                    
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mt-3 mb-3">
                      许多关键战斗的限制因素是让你的 ATB 槽填满，而这正是 ATB 增幅能提供帮助的地方。当装备此魔晶石的角色执行任何 2 次连续的 ATB 命令时，其他 2 名活跃角色的 ATB 槽会得到部分补充。这可能是一个巨大的优势。例如，如果蒂法装备了 ATB 增幅，然后执行 2 次连续的“下段踢 (Focused Strike)”使敌人力竭，她的 2 个盟友可以立即对力竭的敌人释放 ATB 攻击，而无需等待 ATB 槽填满。
                    </p>
                    
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 italic text-cyan-100 border-l-2 border-[#00f0ff] pl-2">
                      请注意，ATB 命令必须是<strong>连续的</strong>，也就是说，如果你发出一个命令，积累了一些 ATB，然后执行第二个命令，你将得不到增幅。因此，在执行 2 个 ATB 命令之前，你通常需要完全填满带有 ATB 增幅魔晶石的人的 ATB 槽。如果重复的攻击是像下段踢这样能补充 ATB 的攻击，那么可能不需要提前填满 ATB 槽。
                    </p>
                  </div>

                  <h3 id="section-13-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">13.3 攀登支柱与拯救玛琳</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      继续向上，击败挡路的一切（这建议有够废话的，对吧？）
                    </p>
                    
                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 目标：拯救玛琳 (Saving Marlene)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      帮助爱丽丝导航到第七天堂 (Seventh Heaven)。这里没什么实际要做的。
                    </p>

                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 目标：前往顶层 (To the Top)</h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>当你到达支柱 - 12F 时，不要错过圆环上大约 1 点钟方向宝箱里的<strong>万灵药 (Elixir)</strong>。</li>
                      <li>在 14F 有一个长椅，不过你应该很难错过它。</li>
                      <li>就在你与巴雷特会合后，雷诺 (Reno) 和路德 (Rude) 会乘坐他们的直升机出现。发生这种情况时，查看左下角标有“菜单”的紫色方块按钮。<strong>按住方块键</strong>，以便在即将到来的 boss 战之前调整魔晶石和装备。</li>
                    </ul>
                  </div>

                  <h3 id="section-13-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">13.4 Boss战：雷诺与路德 (Reno and Rude)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight: Reno and Rude
                    </h4>
                    
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>确保有人装备了<strong>中毒魔晶石 (Poison Materia)</strong> 和<strong>封印魔晶石 (Binding Materia)</strong>。不一定非要是同一个人，只要有就行。</li>
                      <li>雷诺以物理攻击开场。让克劳德使用他的<strong>勇穴模式防御 (Punisher Mode-Guard)</strong> 来削弱其效果，并借机进行反击。</li>
                      <li><strong>尽快给雷诺施放毒魔法 (Poison)。</strong></li>
                      <li>过一会儿，路德会出现在直升机里。巴雷特的猛烈枪击 (Overcharge) 可以对他造成很大伤害。</li>
                      <li>当雷诺回来时，他会设置一个<strong>金字塔陷阱 (Pyramid Mine)</strong>。任何接触到它的人都会被束缚并被吸取 HP，所以要把攻击金字塔和解救他们作为优先事项。</li>
                      <li>保持雷诺中毒并继续防御他的攻击。</li>
                      <li>当路德加入战斗时，<strong>立即让他陷入睡眠 (Sleep)</strong>，以防止这两个塔克斯联手对付你。现在你可以专注于消灭雷诺。</li>
                      <li>抓住这个机会。你只能让路德睡着一次。</li>
                      <li>一旦雷诺倒下，路德就容易对付多了。先让他中毒，然后就在你的团队成员之间轮换，根据需要进行攻击和治疗。</li>
                    </ul>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      一旦计时器开始倒数，克劳德需要逆时针绕着区域走，找到蒂法触发剧情。
                    </p>
                  </div>

                  <h2 id="section-15" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十五、第十四章：寻找希望 (In Search of Hope)
                  </h2>

                  <h3 id="section-15-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      ⚠️ 核心注意事项
                    </h4>
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>基本上，第 14 章是一组包含 9 个任务的集合，其中一些任务会相互重叠。你有很多地方需要跑，在此期间，你也有机会完成一些与奖杯相关的任务，之后你将不可逆转地越过围墙并前往神罗大厦。</li>
                      <li>这是你在游戏通关后进行二周目之前完成许多事情的最后机会，所以我建议你保持耐心，现在就处理好你能做的任务。</li>
                      <li>鉴于上述情况，我将提供比前几章具体得多的指导。</li>
                    </ul>
                  </div>

                  <h3 id="section-15-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.2 发现事件：第十四章的决心</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      攻略开始：虽然不是很明显，但克劳德下楼后，需要向左走到花园里。
                    </p>
                    
                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 发现事件：第十四章的决心 (Chapter 14 Resolutions)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在花园里，克劳德将与其他 3 位主要角色中的一位触发一段剧情。在早期章节中采取的行动将决定哪个角色与克劳德共享这段剧情。解锁所有 3 个场景没有奖杯或其他奖励，但它会显示在你游戏进度的游玩日志 (Play Log) 中。如果你遵循本指南的说明，你应该能看到所有 3 个场景。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">解锁条件（基于隐藏的“好感度”点数）：</h5>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>第 3 章完成的每个支线任务可为蒂法获得 +2 点好感度。</li>
                      <li>第 8 章完成的每个支线任务可为爱丽丝获得 +2 点好感度。</li>
                      <li>在第 10 章开头，克劳德先和哪个女孩说话，她就获得 +1 点好感度。</li>
                      <li>如果蒂法至少有 6 点，且点数多于爱丽丝，我们会看到她的剧情。</li>
                      <li>如果爱丽丝至少有 6 点，且点数多于蒂法，我们会看到她的剧情。</li>
                      <li>如果蒂法和爱丽丝的点数都少于 6 点，我们会看到巴雷特的剧情。</li>
                    </ul>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      请记住，分配给蒂法和/或爱丽丝的分数直到你完成必要的章节才最终确定（例如，蒂法的分数在完成第 3 章时确定）。如果你遵循了我到目前为止的建议，这次你应该会得到<strong>爱丽丝的场景</strong>，因为我们在第 3 章和第 8 章中都完成了 6 个支线任务，而在第 10 章开头与爱丽丝交谈打破了这个 12-12 的平局。
                    </p>
                  </div>

                  <h3 id="section-15-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.3 收集计步魔晶石与查德利的新任务</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 目标：收集情报 (Intel Gathering)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      剧情结束后，花园里的提升 MP 魔晶石 (MP Up Materia) 可能在也可能不在。如果在，就捡起来。不在也没关系，我们稍后可以拿到。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      当你前往中心区 (Center District) 时，你会经过一颗计步魔晶石 (Pedometer Materia)。捡起它并立即装备在某人身上。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      一旦你在装备计步魔晶石的情况下走完 5000 步，它就会变成游戏中唯一的<strong>提升 AP 魔晶石 (AP Up Materia)</strong>。顾名思义，与提升 AP 魔晶石配对的魔晶石将获得双倍 AP，因此成长速度快两倍。
                    </p>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当你到达镇上时，你会听到第 3 章中一个熟悉角色的叫喊声。去看看查德利 (Chadley)。如果你完成了报告 16，你可以花区区 100 gil 购买<strong>敌方技能魔晶石 (Enemy Skill Materia)</strong>。你会需要它来获得一个奖杯。即使现在不用，也买下它，我们可以边走边学习 4 种敌方技能中的 3 种。
                    </p>
                  </div>

                  <h3 id="section-15-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.6 支线任务：消失的孩子们与幻影战</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：消失的孩子们 (Missing Children)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      Folia 老师就在街对面，她似乎又找不到孩子们了。幸运的是，这次他们都在同一个地方。向北走，马厩员工会拦住你并给你寻找陆行鸟 (Missing Chocobos) 的任务和一些基萨尔野菜 (Gysahl Greens)。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] font-bold">
                      现在，在岔路口右转，再向右拐进贫民窟公共墓地 (Slum Public Cemetery)。在穿过大门之前，请进行一次手动存档！
                    </p>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">时间节省提示：学习敌方技能</h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        游戏中只有 4 种可学习的敌方技能。学习所有 4 种将为你赢得“模仿大师 (Master of Mimicry)”奖杯。我们可以在这里获得其中之一（吸收灵气 Essence Drain），这将使我们免于在以后通过章节选择回来做这件事。
                      </p>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗策略：幻影 (Phantoms)</h5>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>幻影基本上是幽灵 (Ghosts) 的强化版。幻影对物理和魔法攻击都容易受到伤害，但过一段时间它们会施放“反射 (Reflect)”并将你的法术反弹给你。</li>
                      <li>装备：给克劳德装备<strong>敌方技能魔晶石</strong>。每个人都应该装备烈火魔晶石 (Fire)，并且某人应该有封印魔晶石 (Binding - Sleep)。</li>
                      <li>战斗开始时，让克劳德立即对其中一个幻影施放中级火魔法 (Fira)，以防止它消失。然后尽快对那个幻影施放睡眠 (Sleep)，让它暂时退出战斗。</li>
                      <li>将注意力转向另一个幻影。用物理攻击填满它的力竭槽并击败它。</li>
                      <li>现在处理剩下的幻影。如果克劳德还没有学会<strong>“吸收灵气 (Essence Drain)”</strong>技能，让克劳德成为你的活跃角色，并让他等待，直到第二个幻影对克劳德使用该技能并让他学会。</li>
                      <li>如果你不确定是否学会了该技能，请进入主菜单 > 敌人情报 > 幻影。查看“战斗日志”部分，寻找“已学习技能 (Skill Learned)”的字样。</li>
                    </ul>
                  </div>

                  <h3 id="section-15-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.4 支线任务：寻找陆行鸟</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：寻找陆行鸟 (Chocobo Search)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      既然我们已经接了这个任务，不如顺便把它做了。你需要找回 3 只丢失的陆行鸟。记住一有机会就使用蒂法的新能力“斗气幻光球 (Chi Trap)”，直到你学会它。
                    </p>

                    <div className="space-y-4">
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">陆行鸟 #1</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0">原路返回 Y 型交叉口，向北经过车站前往避难所之路 (Sanctuary Way)。你会在左边看到第一只陆行鸟。</p>
                      </div>

                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">陆行鸟 #2 与 铁锈巨龙 (Rust Drake)</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">返回车站并走东边的路前往废弃工厂区。在岔路口向右走，滑下梯子。你会看到第二只陆行鸟，但必须赢得一场战斗才能解救它。</p>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2"><strong>战斗策略：</strong>铁锈巨龙会立即竖起吸收所有魔法攻击的屏障。给蒂法的拳套装备风属性配对 (Wind-Elemental)。给克劳德和巴雷特装备先发制人魔晶石。使用蒂法的空中攻击可以在它施放重力 (Gravity) 攻击前将其力竭并轻松击败。</p>
                      </div>
                    </div>
                  </div>

                  <h3 id="section-15-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.5 获取敌方技能：自爆</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在追踪最后一只陆行鸟之前，我们可以为了“模仿大师”奖杯再完成一项任务。向东走一点到“鸟”的标记处。<strong>装备克劳德敌方技能魔晶石，并进行手动存档。</strong>就在这里东边的区域有一个烟爆怪 (Smogger)。
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>我们想要获取它的<strong>“自爆 (Self-Destruct)”</strong>能力，当烟爆怪被击败时，它可能会也可能不会执行此操作。</li>
                      <li>尽量避免用“力竭”来终结它（在战斗中使其力竭是可以的），并确保它爆炸时克劳德站在它的碎片上。</li>
                      <li>如果你没学到，就重新读取存档再试一次。</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      陆行鸟 #3 与 突变魔草 (Trypapolis)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      现在回到西边的标记处。我们的下一只陆行鸟在下陷道路 (Collapsed Expressway) 里。花 300 gil 坐车到入口处。陆行鸟在非常深的地方。
                    </p>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>你将在这里与 3 个突变魔草 (Trypapolis) 战斗。它们对元素、法术和物理攻击有 90% 的抗性，它们的力竭状态只持续 1 秒。</li>
                      <li><strong>技巧：</strong>如果你在它“跳舞”时对其造成一定伤害，它会用粉色光环包围自己并克隆自己。克隆体（原型突变魔草）相对容易击败，<strong>这样做将削减本体最大 HP 的 30%！</strong></li>
                      <li>确保装备<strong>中毒魔晶石 (Poison)</strong>，以便在战斗开始时对每个敌人施放毒魔法 (Bio)。然后积攒 ATB，当看到一个敌人跳舞时，锁定它并释放 ATB 攻击，击败克隆体，重复此过程。</li>
                    </ul>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mt-4">
                      出现提示时，返回地面找山姆报到，将此任务标记为完成。
                    </p>
                  </div>

                  <h3 id="section-15-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.7 支线任务：淘气盗贼与提灯怪</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：淘气盗贼 (Malicious Goons)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      既然我们在围墙街 (Wall Market)，我们接下来就接这个任务。确保你有充足的凤凰尾巴 (Phoenix Downs)，因为敌人有即死攻击。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      向北走，与玛姆 (Madame M) 交谈。稍微向北去山姆的快递服务点，免费骑车前往第 5 区贫民窟入口。向北然后向西前往爱丽丝的家。前往绿色标记处并与<strong>提灯怪 (Tonberry)</strong> 战斗。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗策略：提灯怪</h5>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>和大多数最终幻想游戏一样，提灯怪移动缓慢，但攻击致命。它成功的物理攻击会导致即死。</li>
                      <li>不要使用魔法攻击（除了开场）。提灯怪会通过眩晕施法者或用远程即死法术反击。</li>
                      <li>只有在战斗的最开始才安全。给克劳德装备先发制人，并让他立即施放最高级火魔法 (Firaga)。这应该会击倒提灯怪并使其陷危。让蒂法在它起身前用尽可能多的“下段踢 (Focused Strikes)”攻击它。</li>
                      <li>通常，提灯怪会攻击面前的敌人，所以我建议尝试从背后攻击它。如果克劳德在前面，蒂法在后面，蒂法可以短暂攻击，当提灯怪转身时切换到克劳德。</li>
                      <li>让巴雷特留在后面充当治疗者，只进行足够的攻击以获得治疗所需的 ATB。</li>
                      <li>你可能需要复活一两次，但只要你迅速这样做，你就能赢得这场战斗。</li>
                    </ul>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这完成了任务。在返回镇上的途中，在孩子们的秘密基地停下来与莫古力 (Moggie) 交谈。他会用 7 枚莫古力奖牌卖给你巴雷特的钢铁钳 (Steel Pincers)。当你在这里时，买下<strong>莫古力迫击炮 (Moogle's Mortar)</strong>，另一个任务需要用到它。
                    </p>
                  </div>

                  <h3 id="section-15-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.8 巴雷特的钢铁钳与能量上勾拳</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      🦾 钢铁钳 (Steel Pincers) 与 能量上勾拳 (Charging Uppercut)
                    </h4>
                    <p className="text-[14px] text-[#a5c3c7] m-0 mb-4">
                      <strong>钢铁钳</strong>是巴雷特可以装备的两把近战武器中的第一把。它们不像他的枪臂那样有远程攻击，所以他必须近距离与敌人肉搏。它们在巴雷特的武器中拥有第二高的攻击力，但这被他极慢的动作所抵消——即使以巴雷特的标准来看，执行一个简单的攻击也很慢。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>装备钢铁钳会将巴雷特的△键攻击从<strong>猛烈枪击 (Overcharge)</strong> 变为<strong>猛烈冲撞 (Overrun)</strong>。巴雷特会向敌人冲锋，将其向后推，然后将武器砸向地面造成 AOE 伤害。</li>
                      <li>相应的武器能力是<strong>能量上勾拳 (Charging Uppercut)</strong>。巴雷特基本上是在近距离用武器刺向敌人。使用此能力会重新填充猛烈枪击/冲撞的计量表。</li>
                      <li>如果使用能量上勾拳完全填满了充能计量表，你就会获得熟练度奖励 (Proficiency Bonus)。</li>
                    </ul>
                    <div className="bg-[#080d14]/90 p-4 rounded border border-[#112a32]">
                      <p className="text-[13px] text-[#5c7e82] m-0 italic">
                        <strong>作者碎碎念：</strong>我不太喜欢巴雷特的钢铁钳和破坏铁球 (Wrecking Ball)。对我来说，巴雷特最大的优势在于他能在不使用魔法的情况下攻击其他人无法击中的敌人，所以给他装备近战武器没太大意义。装备近战武器后，他的攻击会完全打不中许多敏捷的敌人，而且他对飞行敌人无能为力。建议在简单的战斗中装备这些武器，只要足够学会它们的能力即可，然后将它们换下，让巴雷特装备更适合他特定技能组合的武器。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-15-9" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.9 奖杯：破坏箱子神童</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 flex items-center gap-2">
                      <span>🏆</span> 奖杯机会：破坏箱子神童 (Whack-a-Box Wunderkind)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当你在这里（孩子们的秘密基地）时，和烦人的打箱子女孩莎拉 (Sarah) 交谈。该小游戏现在可以在<strong>困难模式 (Hard Mode)</strong> 下游玩，如果你能在困难模式下获得 30,000 分或更高，你就能获得“破坏箱子神童”奖杯。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                      布局与简单模式不同，但策略仍然相同：
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li>使用你的<strong>钢铁剑 (Iron Blade)</strong>，这样你就可以使用无尽斩 (Triple Slash) 能力；</li>
                      <li>为无尽斩设置一个快捷键组合；</li>
                      <li>寻找红色的箱子（似乎多了一些）以增加你的时间；</li>
                      <li>长按□键以获得最大范围的 AOE 攻击；</li>
                      <li>在前进的过程中摧毁那些 50 分和 100 分的箱子堆，以减少走回头路的时间。</li>
                    </ul>
                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded p-4 text-[14px] text-[#a5c3c7] mb-4">
                      <strong>💡 免费提示：</strong>在最开始的时候，你的左后方有一个红色的箱子，它不是立刻就能看到的。把它作为你的第一个目标。
                    </div>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0">
                      你可以选择现在做还是以后再做。在通关后的游戏阶段，你可以很快到达这里，因为在这个章节的早期就可以游玩。这不是一个很难获得的奖杯。你需要尝试几次来熟悉箱子的布局，但一旦你掌握了窍门，奖杯应该很快就会弹出。<strong>我的建议是现在就去拿。</strong>
                    </p>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      如果你完成了战斗报告，你可以去找查德利交差。在这一点上，你几乎应该完成了除 15（我建议你推迟）、18（需要很长时间）和 20（尚未提供）之外的所有报告。如果还有其他报告未完成，请在脑海中记下还需要做什么，并尝试在我们还在第 14 章时努力完成它们。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      向北走一点，乘坐陆行鸟前往<strong>围墙街 - 城市发展区 (Wall Market -- Urban Advancement District)</strong> 站。当你向北走时，你会听到音乐。和 NPC 交谈，他会给你<strong>音乐唱片 #24</strong>，希望这能安抚巴雷特，让他更温和一些。对吧。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      继续向北走到武器店。在这里你可以为克劳德购买一把<strong>秘银剑 (Mythril Saber)</strong>。装备它，等等等等。
                    </p>
                  </div>

                  <h3 id="section-15-10" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.10 克劳德的秘银剑与破晄击</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      ⚔️ 秘银剑 (Mythril Saber) 与 破晄击 (Blade Burst)
                    </h4>
                    <p className="text-[14px] text-[#a5c3c7] m-0 mb-4">
                      克劳德天生在近战攻击和魔法攻击之间有很好的平衡。然而，秘银剑以其低攻击力和高魔法力，尽可能地将天平向“法师”倾斜。值得注意的升级包括：来自魔法魔晶石-属性魔晶石配对的伤害增加 10%，以及攻击法术的 MP 消耗减少 20%（尽管后一项能力直到在困难模式下进行二周目游戏时才能获得）。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] m-0 mb-4">
                      尽管如此，一个装备精良的法师通常能比物理攻击者更快地造成更多伤害。因此，对于一些在通关后不论 MP 消耗如何都需要尽快消灭敌人的追求来说，克劳德和爱丽丝双双施法组成的<strong>双法师阵容</strong>可能会具有毁灭性的威力。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>秘银剑的能力是<strong>破晄击 (Blade Burst)</strong>，消耗 1 个 ATB 槽。</li>
                      <li>它是一种潜在的非常强大的非元素魔法攻击，在大范围的 AOE 内发出魔晄能量束。因此，它允许克劳德从远处发动魔法攻击，有可能对多个敌人造成伤害，而无需消耗 MP。即使克劳德装备了魔法攻击属性较普通的武器，这也可以是非常有用的攻击。</li>
                      <li>如果敌人被克劳德的破晄击击败，则会应用熟练度奖励。这在对付弱小敌人时很容易做到。</li>
                    </ul>
                  </div>

                  <h3 id="section-15-11" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.11 支线任务：音乐的力量</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      走进竞技场的大厅，和纪念品店老板交谈。他会卖给你<strong>音乐唱片 #12</strong>。
                    </p>

                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：音乐的力量 (The Power of Music)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      前往客栈西边狭窄的南北小巷，在带围栏区域里的点唱机那里，和贝蒂 (Betty) 交谈。她希望你找到 3 张音乐唱片。其中一张是我们来的路上拿到的 #12。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>走进附近的客栈，和前台大厅里留着汤姆·塞立克式胡子的绅士交谈。他会给你<strong>音乐唱片 #16</strong>。</li>
                      <li>前往蜜蜂之馆 (Honeybee Inn)。进入从那里向西延伸的小巷，捡起<strong>音乐唱片 #30</strong>。</li>
                      <li>既然我们无论如何都在镇子的北端，向东走，然后向北经过玛姆的店，到达湖边的圆形区域。和梳着高高发髻的女人交谈，获得<strong>音乐唱片 #7</strong>。现在你总共有了 31 张中的 28 张。</li>
                    </ul>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0">
                      回到贝蒂那里，与点唱机互动，一次播放一张唱片。以防你忘记是哪些唱片，它们已经为你用绿色标记高亮显示了。完成这个极其简单的任务，你将获得巴雷特的射手指南第三卷秘籍 (Sharpshooter's Companion, Vol. III Manuscript)。
                    </p>
                  </div>

                  <h3 id="section-15-12" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.12 支线任务：淘气盗贼 (与地狱犬之战)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：淘气盗贼后续 / 寻找琪里耶 (Tomboy Bandit)
                    </h4>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>去山姆那里，乘坐陆行鸟马车到第 5 区贫民窟车站。你会看到克劳德最喜欢的兄弟乔尼在附近。他会把你派到教堂去。你可以再搭一次车上去。</li>
                      <li>讨厌的记者达蒙 (Damon) 可能会在你进教堂的路上拦截你，并给你另一个任务。这是因为他的任务与你当前的任务有关。如果他这样做了，让他唠叨完你再去做你的事。</li>
                      <li>捡起地上发光的药用花朵（Medicinal Flowers，你将在另一个任务中需要它们）并与永远迷人的琪里耶 (Kyrie) 交谈。她会让你去竞技场。</li>
                      <li>离开教堂前，记得捡起我们之前留在隔壁房间的<strong>气卦魔晶石 (Chakra Materia)</strong>。（潜在的有趣花絮：当我们在第 8 章来到这里时，这个魔晶石闪烁着绿光。现在它闪烁着黄光。好吧——也许没那么有趣……）</li>
                    </ul>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold">
                      搭车前往围墙街的任何一个目的地，然后去竞技场。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>顺便去楼下有长椅的房间，检查你的魔晶石库存。你应该有一颗复活魔晶石 (Revival Materia)。如果有，从附近的自动售货机再买两颗。那些将对即将到来的战斗有所帮助。</li>
                      <li>现在前往守门人那里，接受“特别比赛 (Special Match)”。</li>
                    </ul>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗策略：驯兽师与地狱犬 (Beastmaster and Hellhound)</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                      驯兽师很容易被击败，但如果你试图在正面交锋中击败地狱犬，你将面临挑战。幸运的是，他有一个你可以利用的弱点。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>给克劳德装备<strong>封印魔晶石 (Binding Materia)</strong>，给克劳德和蒂法都装备先发制人魔晶石。蒂法需要一个（最好是满级的）烈火魔晶石 (Fire)，并且所有 3 名团队成员都应该装备寒气魔晶石 (Ice)。尽可能多地给团队成员装备复活魔晶石 (Revival)。</li>
                      <li>战斗开始时，让克劳德对地狱犬施放<strong>睡眠 (Sleep)</strong>。切换到蒂法，让她用最高级火魔法 (Firaga) 攻击驯兽师，这应该能永远地解决掉他。确保驯兽师远离地狱犬，这样你就不会过早地唤醒那条狗。</li>
                      <li>地狱犬是一种不死怪物，有两个头，一个有红色火焰，一个有紫色火焰。<strong>冰法术将熄灭红色火焰，任何治疗物品或法术将熄灭紫色火焰。</strong>熄灭任何一个火焰都会使地狱犬陷入陷危 (Pressure)。</li>
                      <li>当地狱犬打盹时，等到每个人都至少有一个 ATB 槽。然后用最高级冰魔法 (Blizzaga) 攻击它以使其陷危，接着用“下段踢/突刺 (Focused)”攻击使其力竭。如果你没能让它力竭，就朝它扔一瓶药水 (Potion)，让它再次陷危。</li>
                      <li><strong>一旦它力竭，施放“复活 (Raise)”法术将对其造成 9999 点伤害！</strong>两次复活法术应该就足以终结它。</li>
                    </ul>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      当提示时传送回琪里耶那里。在教堂的剧情结束后，搭车回到车站把钱包还给乔尼。尽管这个任务已经完成，但你必须这样做才能在以后获得“乔尼体验 (The Johnny Experience)”奖杯。而且——这也是应该做的事。
                    </p>
                  </div>

                  <h3 id="section-15-13" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.13 竞技场挑战与极限技获取</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 竞技场挑战 (Colosseum Challenges)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      竞技场中有 7 个新的挑战等着你，现在完成这些可以获得几项好处：
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>在你能解锁“最高机密 (Top Secrets)”挑战之前，你必须完成这些挑战。</li>
                      <li>你可以学习巴雷特和克劳德的新武器能力。</li>
                      <li>巴雷特和蒂法可以获得他们的<strong>2 级极限技 (Level 2 Limit Breaks)</strong>。</li>
                      <li>巴雷特和蒂法将获得他们的第二卷秘籍，这相当于用于武器升级的 SP。</li>
                    </ul>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      所以，搭车回到围墙街的任何一个目的地，然后回到竞技场。打赢可用战斗列表中尚未勾选的 7 个挑战。你可以在<strong>简单模式 (Easy Mode)</strong> 下打这些，它们会很快结束。以下是一些装备魔晶石的提醒：
                    </p>

                    <div className="space-y-4">
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">“对抗野生动物 (vs. Wild Animals)”</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          敌人大部分弱冰，但最后一场战斗是对抗飞行敌人，所以你需要先发制人、风属性，并在武器上装备冰属性与元素魔晶石对。
                        </p>
                      </div>

                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">“对抗神罗暴徒 (vs. Shinra Thugs)”</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          挑战中的敌人是人和机器的混合体，所以除了先发制人之外，一定要装备雷属性和火属性魔晶石。
                        </p>
                      </div>

                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">“三人组对抗神罗战士 (Three-Person Team vs. Shinra Warriors)”</h5>
                        <ul className="space-y-1 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>你需要所有 3 名团队成员都拥有冰、雷和火魔晶石。</li>
                          <li>你的团队中两名成员也应该拥有先发制人。</li>
                          <li>给克劳德的配对槽中装备<strong>火属性 - 范围化 (Fire - Magnify)</strong> 组合，这样他就能同时点燃多个敌人。</li>
                        </ul>
                      </div>

                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">“双人组对抗复仇小队 (Two-Person Team vs. Team Payback)”</h5>
                        <ul className="space-y-1 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>我建议使用巴雷特和克劳德。没有敌人弱火，但你需要克劳德和巴雷特都拥有冰、雷和风属性以及先发制人。</li>
                          <li>在第 3 回合，你将不得不对付另一个铬毒气怪 (Chromogger)，而这次你没有爱丽丝帮忙。让巴雷特在他的武器上装备<strong>元素 - 雷属性 (Elemental - Lightning)</strong> 配对，并从安全距离攻击，你应该会没事的。</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 id="section-15-14" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.14 支线任务：动摇的决心 (引体向上)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 flex items-center gap-2">
                      <span>📍</span> 支线任务：动摇的决心 (Wavering Heart)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      去隔壁的健身房。和安德烈 (Andrea) 交谈，他会向蒂法挑战<strong>引体向上比赛 (pullup contest)</strong>。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这绝对比深蹲比赛难，但打败安德烈应该只需要尝试几次。这将允许你挑战杰伊 (Jay) 和吉尔斯 (Jules)，就像克劳德之前那样。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>打败杰伊并不难，并且会为你赢得一颗稀有的<strong>提升魔法魔晶石 (Magic Up Materia)</strong>，所以我绝对建议现在就去做。</li>
                      <li>为了打败吉尔斯并获得“引体向上女王 (Peeress of Pullups)”奖杯，你必须做到近乎完美。好消息是，这在通关后很容易访问，所以如果你想把吉尔斯留到以后再挑战，也没什么大不了的。</li>
                      <li>然而，你将不得不再打败安德烈和杰伊一次，才能再次获得挑战吉尔斯的机会。我的建议是<strong>现在就把它解决掉</strong>。</li>
                    </ul>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      打败安德烈将完成此任务，并为你赢得蒂法的格斗术指南第三卷秘籍 (Way of the Fist, Vol. III Manuscript)。
                    </p>
                  </div>

                  <h3 id="section-15-15" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.15 支线任务：地底的咆哮 (零号巨兽)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：地底的咆哮 (Subterranean Menace)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      搭车去常绿公园 (Evergreen Park) 和威玛 (Wymer) 交谈，然后前往地下。注意那条信息，只需长按 L1 键就可以返回地面。沿着长长的线性路径走向<strong>零号巨兽 (Type-O Behemoth)</strong>。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">Boss 战：零号巨兽 (Type O Behemoth)</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                      基本策略是这样的：破坏它的上半身和下半身。这将使巨兽陷危，并暴露之前无敌的角 (Horn)。你想要破坏角的 3 个原因：
                    </p>
                    <ul className="space-y-1 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li>Boss 将不再反击魔法攻击。</li>
                      <li>它的防御力将降低 40%。</li>
                      <li>当上半身和下半身再生时，它们将只有一半的 HP。</li>
                    </ul>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-4">
                      <h6 className="font-bold text-[#ff3366] mb-2 text-sm">战斗流程</h6>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>因此，在让它力竭之前储备一些攻击力量是个好主意。让蒂法使用“秘技解放 (Unbridled Strength)”直到她达到斗气等级 3，并尽量让克劳德保留一个 ATB 槽。</li>
                        <li><strong>（暂且）不要使用攻击性魔法。</strong>巨兽会用“核爆 (Flare)”进行反击。</li>
                        <li>以对 boss 施放<strong>中毒 (Poison)</strong> 开始战斗。敌人会反击，但这将使战斗进行得快得多。</li>
                        <li>瞄准上半身或下半身并持续攻击直到它被破坏。然后去攻击另一半。</li>
                        <li>当巨兽全身变红（狂暴 Rampage）并在房间里奔跑时，不要试图攻击它。风险回报率太高了。</li>
                      </ul>
                    </div>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h6 className="font-bold text-[#00f0ff] mb-2 text-sm">当巨兽力竭时：</h6>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>让蒂法对它的角倾泻她的△键攻击以增加力竭百分比。这也将建立 ATB，她可以用它来执行“斗气幻光球 (Starshower)”或“下段踢 (Divekick)”。</li>
                        <li>尝试让克劳德的 ATB 槽充满，这样他就可以对角释放<strong>“无尽斩 (Infinity's End)”</strong>。</li>
                        <li>让巴雷特贡献“猛烈枪击 (Overcharge)”，接着是“满腔怒火 (Maximum Fury)”或魔法咒语。</li>
                        <li>你可能将不得不再次解决上半身和下半身，但如果你消灭了角，这将会快得多。记住必要时重新施放毒魔法。</li>
                      </ul>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      长按 L1 键返回地面。和威玛交谈以清除此任务并获得一把<strong>破坏铁球 (Wrecking Ball)</strong>。太棒了。现在你有两把对巴雷特来说没用的武器和 2 个需要学习的能力了。
                    </p>
                  </div>

                  <h3 id="section-15-16" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.16 巴雷特的破坏铁球与大地锤击</h3>
                  <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 my-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                    <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                      💣 破坏铁球 (Wrecking Ball) 与 大地锤击 (Smackdown)
                    </h4>
                    <p className="text-[14px] text-[#a5c3c7] m-0 mb-4">
                      破坏铁球类似于钢铁钳，但具有更高的攻击力和更低的魔法攻击力。巴雷特执行攻击需要很长时间，但一旦击中，威力惊人。早期的升级包括 5% 的基础攻击提升和 10% 的 ATB 充能率提升。后者总是一个不错的增益，但这并不能抵消巴雷特使用这把武器执行单次攻击所需的时间。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>武器能力是<strong>大地锤击 (Smackdown)</strong>，顾名思义，它让巴雷特用他的武器砸击地面，在一个显著的 AOE 范围内造成大量伤害。</li>
                      <li>如果大地锤击击中 3 个或更多敌人，就会获得熟练度奖励，这很容易做到。它有相当长的蓄力时间，但在清除附近的敌群时非常有效。</li>
                      <li>与能量上勾拳类似，当巴雷特发起这种攻击时，他会暂时获得一层“霸体 (super-armor)”，防止他的动作被较弱的攻击打断。</li>
                    </ul>
                    <div className="bg-[#080d14]/90 p-4 rounded border border-[#112a32]">
                      <p className="text-[13px] text-[#5c7e82] m-0 italic">
                        <strong>学习大地锤击：</strong>你应该考虑去竞技场跑一趟，让巴雷特打他的“单人对抗野生动物挑战 (solo vs. Wild Animals Challenge)”并学习大地锤击能力。游戏告诉你如果“击中三个或更多敌人”你就能获得熟练度奖励，但我一直在第一阶段对抗 2 只巨鼠时获得了奖励。你应该能在这个 5 场战斗完成前学会这个能力，然后你就可以把破坏铁球放在一边了，直到你想再用它。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-15-17" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.17 支线任务：秘传药方与古留根尾的秘密财产</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：秘传药方 (Secret Medicine)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      搭车到第 5 区贫民窟入口，前往社区中心 (Community Center)。和那个穿着看起来很专业的实验室大褂、头顶有绿色标记的 NPC 交谈。他会给你一份他需要的物品清单，但你应该已经拥有所有这些了：
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li><strong>莫古力迫击炮 (Moogle's mortar)</strong>，你从莫古力那里买的；</li>
                      <li><strong>巨兽之角 (Behemoth Horn)</strong>，你从上一个任务中得到的；</li>
                      <li><strong>药用花朵 (Medicinal flowers)</strong>，你拜访琪里耶时从教堂得到的。</li>
                    </ul>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      再次与他交谈，这个任务将被标记为完成。完成这个任务会为你赢得爱丽丝的星之神秘书第三卷秘籍 (Telluric Scriptures, Vol. III Manuscript)。遗憾的是她不在这里享受它，但如果她在，我相信她会说“谢谢你！”。
                    </p>

                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      📍 支线任务：古留根尾的秘密财产 (Corneo's Secret Stash)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      我们把这个任务留到最后，因为它是最长、最复杂的。一旦我们完成它，我们就会有一些时间来处理一些未完的事情。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>检查你的重要物品 (Key Items) 库存，确保你有<strong>古留根尾的宝库钥匙 (Corneo Vault Key)</strong>（你应该从教堂的琪里耶那里得到了这个）。你需要用它来打开 3 个宝藏金库。</li>
                      <li>其中一个古留根尾的金库在钢铁山 (Steel Mountain) 区域，非常靠近那里山姆的快递站。</li>
                    </ul>
                  </div>

                  <h3 id="section-15-18" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.18 重返下水道与阿勃祖的复仇战</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      不幸的是，那个（山姆的）驿站只提供接客服务。贫民窟车站 (Undercity Station) 是最近的下客点。从第 5 区向北走，在岔路口向右走，朝钢铁山方向前进。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>砸碎所有的箱子并打开所有的宝箱，然后前往交通便利的陆行鸟驿站。</li>
                      <li>搭车到下陷道路入口 (Collapsed Expressway Entrance)。走进去，你应该能很快找到下一个金库，它应该标记在你的地图上。洗劫里面的战利品，然后回到地面。</li>
                    </ul>
                    <div className="bg-[#080d14]/90 p-3 rounded border border-[#112a32] mb-6">
                      <p className="text-[13px] text-[#5c7e82] m-0">
                        <strong>顺便说一句：</strong>你无法装备那些头饰 (Tiaras)。我们对它们有其他安排。
                      </p>
                    </div>

                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 目标：穿越地下水道 (Through the Underground Waterway)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      最后一个金库需要通过我们在第 10 章下水道中发现的那扇华丽的锁门才能进入。我们的导游将是莱斯利 (Leslie)，所以搭车去围墙街，前往古留根尾的宅邸。上楼进入第二扇门穿过古留根尾的办公室，观看与莱斯利的剧情。他将带你进入下水道。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">下水道探索准备</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>沿途我们要打几场仗。你可能想把新的<strong>提升 AP 魔晶石 (AP Up Materia)</strong> 和你的先发制人魔晶石配对，直到它满级。</li>
                        <li>许多即将出现的敌人弱火，所以这可能是你在这里首选的元素魔晶石。</li>
                        <li>一旦你进入地下，你需要径直向前走，越过你前面的碎石。它看起来无法通行，但其实不是。</li>
                        <li>道路有一段是线性的。你以前来过这里，所以大部分的路（和宝箱）都已经打开了。最近的一些塌方进一步限制了你的路线选择。</li>
                      </ul>
                    </div>

                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 目标：找回钥匙 (Recovering the Key)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      就在莱斯利提出带路之后，你会来到一个长椅和自动售货机前，这里出售<strong>音乐唱片 #13</strong>。你现在应该拥有除了 #5 和 #31 之外的所有唱片了。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>在旧引水渠 1 (Old Aqueduct 1) 的西南角，有一颗<strong>中毒魔晶石 (Poison Materia)</strong>，你可能应该拿走它。</li>
                      <li>淘气的小阿勃祖 (Mischievous Shoat) 会带领你穿过一系列房间，你必须在其中战斗。击败敌人后，一定要在进入下一个房间之前检查每个房间的每个角落和缝隙，寻找宝箱和箱子。</li>
                      <li>最终，你追上了淘气的小阿勃祖并把它痛揍了一顿。在 85% 的血量时，它会召唤 3 只小阿勃祖 (Abzu Shoats)。</li>
                      <li>如果你一开始就用几个最高级火魔法 (Firagas) 击中它使其陷危，就有可能在它召唤盟友之前使其力竭并终结它。如果没有，就对付那些小阿勃祖好了，没什么大不了的。</li>
                    </ul>

                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      ⚠️ 关键步骤：命运的抉择与最后的金库
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold text-[#ff3366]">
                      在最终击败淘气的小阿勃祖后，莱斯利会告诉你他知道一条捷径。跟着他穿过门，但【千万不要现在爬梯子上去】！
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>相反，拉下梯子旁边的开关，使最后一个古留根尾的金库可以进入。你的地图会显示它在旧废弃物处理区 (Former Disposal Area) 的位置。现在就去那里，但在进入金库之前请阅读接下来的两点。</li>
                      <li>通往金库的东西走向分支将向北转一个直角。看看那个弯道的角落（给几何迷的直角顶点）。在那里你会找到一个宝箱，里面装着游戏中第二双<strong>防护靴 (Protective Boots)</strong>。一定要拿到它们！你将会需要它们的！</li>
                      <li>继续前往金库，但在进入之前准备好你的团队。给每个人装备火魔晶石，并给克劳德或蒂法的武器装备火元素配对。</li>
                    </ul>

                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-6 border-l-4 border-[#00f0ff] pl-3 bg-[#080d14]/50 p-3">
                      你必须与 3 个弱火的敌人战斗——2 只鱼人 (Sahagins) 和 1 只鱼人王子 (Sahagin Prince)。它们都能把你变成青蛙，所以你要在发生这种情况之前狠狠地打击它们。在下一场战斗之前你可以恢复 HP 和 MP，所以一开始就积极地使用火魔法，否则局面很快就会失控。一旦这场战斗结束，洗劫金库，回到梯子处，跟着莱斯利走到锁住的门和一个恢复长椅前。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px] mt-6">Boss 战：阿勃祖 + 小阿勃祖群</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                      莱斯利将带你去与阿勃祖 (Abzu) 进行复仇战。对我来说，这与我们在第 10 章第一次遇到阿勃祖时并没有太大不同。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>我会给你的团队中至少一名成员装备<strong>复活耳环 (Revival Earrings)</strong>。如果你像我一样倒霉，阿勃祖的一次攻击就能让你的整个团队 KO。</li>
                      <li>给某人装备<strong>封印魔晶石 (Binding)</strong>。我更喜欢巴雷特，因为他几乎总是能相对安全地恢复 ATB。</li>
                      <li>首先瞄准角（我猜他只剩一个了，因为我在第一场战斗中打断了另一个？）破坏角会使他陷危。魔法更好，因为物理攻击对角和尾巴只造成一半伤害。</li>
                      <li>阿勃祖和游戏中的许多 boss 一样，有一个烦人的习惯：当他受到足够的伤害进入战斗的下一阶段时，他会清空他的力竭槽，即使你刚刚才让他力竭。你本来应该把握好时机，在阶段的开始而不是结束时让他力竭。祝你好运。</li>
                      <li>他最具毁灭性的攻击是<strong>黑水冲击 (Blackwater Blast)</strong>，它可以消灭或严重削弱你的整个团队。找到污水流出的出口（上面覆盖着网状格栅），当你看到阿勃祖发起这种攻击时，避开污水流动的方向。你可以躲在场地最左侧、最右侧，或者前后墙的正中央。</li>
                      <li>黑水冲击的好处是它也会伤害小阿勃祖，完全消灭其中几只。因此，集中攻击阿勃祖并保持团队健康，阿勃祖会帮你处理那些小家伙。</li>
                      <li>阿勃祖的许多攻击会让你中毒。同样，我的倾向是顺其自然等它结束。我不记得曾经因为中毒而失去过团队成员，而且你的 ATB 有更好的用处。</li>
                      <li>只要阿勃祖不在动画中间，就可以让他<strong>陷入睡眠 (Sleep)</strong>。你可以利用他打盹的时间消灭小阿勃祖、恢复生命值和/或恢复一些 ATB，而不用担心遭到报复。</li>
                    </ul>
                    <p className="text-[14px] text-[#a5c3c7] m-0 mt-4 italic text-[#5c7e82]">
                      （我意识到以上内容可能不够连贯或不够循序渐进，不足以构成一个真正的“策略”，但它应该能给你提供足够的信息来取得胜利。）
                    </p>
                  </div>

                  <h3 id="section-15-19" className="text-xl mt-8 mb-4 font-bold text-cyan-100">15.19 翻越围墙：最终决战前的准备</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当收到提示时返回找玛姆 (Marle)，完成这个看似永无止境的任务。作为奖励，你将获得克劳德的剑术指南第三卷秘籍 (Art of Swordplay, Vol. III Manuscript)。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      在洗劫了古留根尾的金库之后，你应该拥有大量的莫古力奖牌了。前往孩子们的秘密基地，购买任何你尚未购买的秘籍。如果你还差几枚奖牌，就开始一局“破坏箱子”小游戏然后退出。你会获得一枚奖牌作为参与奖。
                    </p>

                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：越过围墙 (Over the Wall)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      搭车到围墙街 - 城市发展区，朝着标记前进。在地上，你会找到“来自守护天使的信 (Letter from the Guardian Angel)”重要物品和另一颗<strong>元素魔晶石 (Elemental Materia)</strong>。这应该会为你解锁<strong>“神圣感激 (Divine Gratitude)”奖杯</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      你可能会观察到，从这条路向西延伸的通道现在解锁了。它通向下水道，以防你忘记了下面的什么东西。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)]">
                      我们现在还有其他事情可以做，但通常它们在通关后做效率更高。让我们继续前进，越过围墙，踏入我们的下一次冒险吧！
                    </p>
                  </div>

                  <h2 id="section-16" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十六、第十五章：落日之城 (The Day Midgar Stood Still)
                  </h2>

                  <h3 id="section-16-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">16.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li className="font-bold text-[#ff3366]">一旦你越过那堵墙，就没有回头路了。你留下的任何东西都必须等到完成第 18 章之后才能处理。</li>
                      <li>这是另一个传统的关卡。我们将沿着一条相当线性的路径前进，边走边与敌人战斗，并在关卡高潮时进行一场 boss 战。</li>
                      <li>我们将收集另外一张音乐唱片和另外一种敌方技能。</li>
                    </ul>
                  </div>

                  <h3 id="section-16-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">16.2 攀登阶段与学习敌方技能</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：攀登 (The Climb)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在攀登时检查你的地图。当你到达距地面 55 米 (55M) 时，给克劳德装备<strong>敌方技能魔晶石 (Enemy Skill Materia)</strong> 并进行一次手动存档。在上一层，你将与 2 只蔚蓝飞龙 (Cerulean Drakes) 战斗，你想从它们那里学习一项技能。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>在距地面 65 米 (65M) 处，让克劳德一次面对一只飞龙。如果他在战斗结束前没有学会它们的技能（<strong>冰冻气场 Icy Aura</strong>），请重新加载游戏再试一次。</li>
                      <li>你现在可以取下敌方技能魔晶石了。我们还有一项技能要学，但在我们准备好去做之前还需要一些时间。</li>
                    </ul>
                    <div className="bg-[#080d14]/90 p-4 rounded border border-[#112a32]">
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        当你到达死胡同时，你会得到一个关于定位可以使用<strong>抓钩枪 (grappling guns)</strong> 地方的教程。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-16-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">16.3 摇摇欲坠的建筑与收集品</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：摇摇欲坠的建筑 (The Crumbling Building, etc.)</h4>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>爬上一段短梯后，你将直接看到一台自动售货机，它会卖给你<strong>音乐唱片 #5</strong>。在获得“唱片骑师 (Disc Jockey)”奖杯之前只差一张了。</li>
                      <li>长椅东南方的区域有一个包含 3000 gil 的宝箱。你必须进行一场战斗才能得到它，但既然你可以在战斗前后恢复，似乎值得你去洗劫它。</li>
                      <li>在距地面 115 米 (115M) 处，路径似乎分叉了。楼梯将直接带你到 120 米和前进的道路。然而……向西的抓钩点通向一条向下的室外路径，引导你到一个包含<strong>星之坠饰 (Enchantment Ring)</strong> 的宝箱。从那里，你可以抓钩回到 115 米，然后走楼梯到 120 米。</li>
                      <li>在距地面 120 米处，你会遇到一台激光炮机甲 (Blast Ray)，当它力竭时，它会升起一道屏障阻止你靠近它。保持冷静。你仍然可以用魔法、巴雷特的枪、克劳德的破晄击能力或蒂法的斗气幻光球来攻击它。</li>
                      <li>在 135 米处，有 2 个向上的梯子。从你爬上来的地方顺时针方向的那个有一个宝箱。另一个是前进的道路。</li>
                      <li>当巴雷特叫你别往下看时，<strong>一定要往下看。景色很棒！</strong></li>
                    </ul>
                  </div>

                  <h3 id="section-16-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">16.4 155米高空躲避战</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在 155 米处，本关的 boss 会出现，并用它无限的子弹向你扫射。躲在障碍物后面，等待女武神 (Valkyrie) 暂停攻击，然后冲向下一个障碍物并重复，感谢幸运星女武神没有直接飞到你这边的障碍物来射击你。
                    </p>
                    <div className="bg-[#080d14]/90 p-3 rounded border border-[#112a32] mb-4">
                      <p className="text-[13px] text-[#5c7e82] m-0 italic">
                        顺便说一句 (FWIW)，这里女武神的子弹不能把克劳德的 HP 降到 1 以下，所以他总是能活下来。
                      </p>
                    </div>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      本章以一场对抗这个飞行 boss 的战斗结束，而且在一段时间内，只有巴雷特能打到它。真是我的最爱。
                    </p>
                  </div>

                  <h3 id="section-16-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">16.5 Boss战：女武神 (Valkyrie)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight: Valkyrie
                    </h4>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗准备</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>在普通模式下，女武神弱<strong>雷 (Thunder)</strong> 和<strong>风 (Wind)</strong>。由于雷魔法能更可靠地击中目标，给每个人装备雷霆魔晶石 (Lightning Materia)，并在巴雷特的武器上装备<strong>雷霆-元素 (Lightning-Elemental)</strong> 配对。</li>
                        <li>boss 的其中一种攻击会引发睡眠 (Sleep)，所以你可能想通过装备头带 (Headbands) 来防止这种情况。你应该可以从附近的自动售货机买到它们。</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">第一阶段</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          在短暂的第一阶段，除了巴雷特之外，女武神将超出所有人的攻击范围。他可以用普通攻击填满他的 ATB 槽，然后释放基于雷属性的攻击（如雷霆魔法或满腔怒火）来增加伤害，并更快地进入下一阶段。
                        </p>
                      </div>

                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">第二阶段</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                          在第二阶段，你可以通过将女武神的 HP 减少其最大 HP 的 3% 来使其陷入陷危 (Pressure)。狂按物理攻击会有用，但要注意女武神的物理防御 (206) 几乎是魔法防御 (117) 的两倍，所以如果你有 MP，使用法术会让你更快达到目的。
                        </p>
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          当女武神使用它的“钻头俯冲 (Drill Dive)”时，它会旋转然后猛烈砸下造成 AOE 伤害。远离它并进行防御。
                        </p>
                      </div>

                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">第三阶段（HP 降至 1/3 时）</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">当女武神的 HP 降至 1/3 时，会发生几件糟糕的事情：</p>
                        <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-2">
                          <li>攻击对填满其力竭槽的作用大大降低。</li>
                          <li>它会发射一颗卫星 (Satellite)，向你的一名角色发射蓝色光束。锁定 2 秒后，它会释放一次卫星炮 (Satellite Cannon) 攻击，可造成<strong>巨大伤害</strong>。</li>
                        </ul>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2 text-[#ff3366]">
                          <strong>躲避卫星炮：</strong>它似乎总是瞄准活跃角色，所以如果你切换角色，你可以让它追着活跃角色跑，这样它似乎不太可能锁定并执行卫星炮攻击。
                        </p>
                        <p className="text-[14px] text-[#a5c3c7] m-0 italic">
                          （有一些聪明的方法可以利用卫星炮来对付女武神，但我祝你好运能让它成功。）
                        </p>
                      </div>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mt-6 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      我预测你最终会求助于不断削减女武神的 HP 来使其陷危然后力竭，并根据需要重复此过程来终结它。
                    </p>
                  </div>

                  <h2 id="section-17" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十七、第十六章：潜入神罗大厦 (The Belly of the Beast)
                  </h2>

                  <h3 id="section-17-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">17.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>本章某些部分的导航可能会令人困惑，所以换个方式，我将尽量提供不包含“线性 (linear)”一词的指导。</li>
                      <li>我们将捡起 2 把容易错过的武器，并获得因为找到我们最后一张音乐唱片而奖励的“唱片骑师 (Disc Jockey)”奖杯。</li>
                      <li>能再次见到爱丽丝真是太好了，不是吗？我想念她那种有点小调皮的幽默感，你呢？</li>
                    </ul>
                    
                    <h4 className="font-bold text-cyan-300 mb-3 mt-6">📍 目标：潜入 (Infiltration)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在进去的路上，你会在每一群敌人中面对越来越多数量的敌人，所以请小心前进。
                    </p>

                    <h4 className="font-bold text-cyan-300 mb-3 mt-4">📍 目标：神罗大厦情报 / 获取钥匙卡 (Shinra Building Intel / Acquiring the Keycard)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      一旦进入大楼，走楼梯到下一层。为了推进剧情，你必须尝试打开北端的门，并发现没有钥匙卡你无法打开。当蒂法在地面上时，她会站起来，直接看向一辆她可以爬上去继续前进的汽车。
                    </p>
                  </div>

                  <h3 id="section-17-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">17.2 获取蒂法的软羽手套 (Purple Pain)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6 font-bold text-[#ff3366]">
                      在第一个平台处，在爬上梯子之前，向西看，你会看到一个紫色的宝箱。那就是我们的下一个目标。向西走，然后向南，再向西，去获取蒂法的武器<strong>软羽手套 (Purple Pain)</strong>。
                    </p>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                        🥊 软羽手套 (Purple Pain) 与 正拳 (True Strike)
                      </h4>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">
                        在合适的情况下，这可能是蒂法最好的武器。软羽手套没有金属指虎 (Metal Knuckles) 那样的攻击力，其魔法属性处于中游。然而，它有增加暴击伤害 (Critical Hit damage) 和暴击率 (Critical Hit Percent) 的升级。升级还会使她的最大 HP 惊人地增加 1450，有助于弥补她天生较低的防御属性。在最高级别时，它还可以获得“绝处逢生 (Reprieve)”能力。加上以斗气等级 2 进入战斗的 70% 几率以及她△键攻击威力 10% 的提升，你就拥有了一把在进攻和防守上都能帮助蒂法的武器。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-4">
                        这把武器的缺点是物理攻击和魔法攻击属性都异常低，有点像我们将在第 17 章找到的克劳德的双刺剑 (Twin Stinger)。例如，满级的金属指虎，物理+魔法是 200。对于软羽手套，这个总和是 148，大约少了 25%。然而，如果你给蒂法装备上满级的<strong>提升运气魔晶石 (Luck Up Materia)</strong>，你就可以利用那些暴击升级，弥补看似较低的数值，造成巨大的伤害。
                      </p>
                      
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">核心能力：正拳 (True Strike)</h5>
                        <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>消耗 1 个 ATB 槽，是游戏中最有用的能力之一。虽然它缺少 ATB 恢复功能，但正拳会将力竭敌人的力竭倍率惊人地增加 30%！</li>
                          <li>它可以与她的△键攻击交替使用，以快速补充 ATB，同时倾泻伤害并提升力竭倍率。</li>
                          <li><strong>下段踢 (Focused Strike)</strong> 和 <strong>正拳 (True Strike)</strong> 的结合使蒂法成为你的力竭超级巨星。前者可以迅速将陷危的敌人打至力竭，后者可以迅速提升力竭倍率，让所有盟友造成更多伤害。</li>
                          <li>对力竭的敌人执行正拳，你将获得熟练度奖励。</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      回到第一个平台，爬上梯子，沿着明确的路径去拿钥匙卡。
                    </p>
                  </div>

                  <h3 id="section-17-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">17.3 扮演游客与参观神罗展览</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：使用电梯/紧急楼梯 (Use the Elevator/Emergency Stairwell)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      你可以使用楼梯或电梯。如果你使用电梯，在上去的路上你将不得不打几场仗。如果你走楼梯，你将在整个上去的过程中听到巴雷特的抱怨。对我来说，我会试着让那个大个子高兴，然后<strong>坐电梯</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      和全息投影交谈，打开你东边的一扇门。向北走，乘自动扶梯上到 60 楼。
                    </p>

                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：扮演游客 (Playing the Tourist)</h4>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>穿过纪念博物馆，从东南门退出，进入南边的走廊。你必须四处走走，让向导完成她的长篇大论，然后你才能打开西南边的门。</li>
                      <li>从业务部展览室 (Business Division Exhibit) 的东南出口退出，再次四处走走让向导讲完，门才会打开。从北边退出。</li>
                      <li>绕过米德加的模型，使用你的钥匙卡从北边退出。上楼进入宇宙剧场 (Cosmos Theater)。</li>
                      <li>使用你的钥匙卡离开剧场，去和市长 (Mayor) 谈谈。</li>
                    </ul>
                  </div>

                  <h3 id="section-17-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">17.4 巴雷特的搏动炮与近距离射击</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：伸出援手 (A Helping Hand)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold text-[#ff3366]">
                      当你离开市长办公室时，停下来和哈特 (HART) 交谈，就是那个护送你上来的人。他提供情报以换取报酬。付给他 10,000 gil。除了他那些没用的情报外，他还会给你巴雷特的搏动炮 (EKG Cannon)。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      打开这个圆形区域北端的宝箱，你将拿回你 10K 投资中的 3k。
                    </p>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                        🔫 搏动炮 (EKG Cannon) 与 近距离射击 (Point Blank)
                      </h4>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">
                        巴雷特的搏动炮牺牲了物理攻击力来换取魔法攻击力。它拥有他所有武器中最低的物理攻击力，尽管它有升级可以使他的暴击率和暴击伤害各增加 10%。对于大多数流派来说，这对巴雷特来说是一把不够理想的武器。
                      </p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>像巴雷特的其他一些 ATB 攻击一样，<strong>近距离射击 (Point Blank)</strong> 消耗他所有的 ATB，消耗的 ATB 越多，威力就越大。</li>
                        <li>这是他更强大的攻击之一，但顾名思义，巴雷特需要非常靠近他的目标才能让这次攻击命中。因此，如果巴雷特靠近力竭的敌人，这可能会很有效。</li>
                        <li>像他的近战 ATB 攻击一样，“近距离射击”使巴雷特能够承受较弱的攻击而不会被中断动作（霸体）。</li>
                        <li>如果“近距离射击”终结了被锁定的敌人，那么你将获得熟练度奖励。</li>
                      </ul>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      使用圆形路径东南位置的门下一层，然后从那里向北退出。乘自动扶梯上到 63 楼，并使用你的钥匙卡进入南边的区域。向西走向自动售货机，然后通过那里的门向南退出。
                    </p>
                  </div>

                  <h3 id="section-17-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">17.5 休息区与新的战斗模拟器挑战</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      走上宽阔的楼梯来到 63 楼上层——休息区 (Recreation Facility)。在东南端，你会看到一张蓝色的长椅和一台自动售货机，它将给你——当当当当！——<strong>音乐唱片 #31</strong>，从而完成你的收集并为你赢得<strong>“唱片骑师 (Disc Jockey)”奖杯</strong>。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      当你在上面时，你可能想去商店看看。除其他外，你可以花 6400 gil 买一个<strong>高级手镯 (Supreme Bracer)</strong>。高级手镯只有 3 个魔晶石槽，但它提供 +64 物理防御以及 +16 魔法防御。（不要买超过一个。你马上就能几乎免费获得一个，而且在第 17 章会有更好的手镯等着你）。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-6 border-l-4 border-[#00f0ff] pl-3 bg-[#080d14]/50 p-3">
                      和战斗模拟器 (Combat Simulator) 前面的人交谈。你需要击败 2 台锯刀机甲 (Cutters)，如果在你的 2 名角色上装备雷霆-元素 (Lightning-Elemental) 魔晶石组合，这会变得很简单。你也可以选择简单模式 (Easy Mode)。一定要使用你的新武器的能力来获得一些熟练度。
                    </p>

                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 mt-6">
                      📍 新的战斗模拟器挑战 (New Combat Challenges)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      查德利现在在模拟器外面等着，大模拟器中现在有五个新的战斗挑战可用。最终，你需要完成所有这些挑战才能解锁“傲慢机器原型 (Pride and Joy Prototype)”，你可以利用章节选择在第 17 章相对轻松地完成。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      不过请注意，其中一个奖励是<strong>提升 EXP 魔晶石 (EXP Up Materia)</strong>（你可能永远不会用），另一个是<strong>高级手镯 (Supreme Bracer)</strong>。单凭这一点，这些挑战现在就值得一做。它们实际上很有趣，而且完成这些不需要很长时间，特别是如果你在简单模式下解决它们的话。再次强调，这由你决定，但我在继续前进之前花时间完成了它们。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mt-6">
                      <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px]">如果你准备现在就接受这些挑战，这里有几个小贴士：</h5>
                      <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                        <li>在战斗模拟器的选择屏幕上，按<strong>□键</strong>将显示你在给定挑战中将要面对的具体敌人。</li>
                        <li>为尽可能多的团队成员装备你的先发制人魔晶石、提升魔法魔晶石和提升 MP 魔晶石。你会希望以强大的魔法攻击开始大多数战斗。</li>
                        <li>如果你已经“洞察 (Assessed)”过一个敌人但不记得它的弱点，你可以在战斗中按地图键获取该信息。你可能想给某人装备洞察魔晶石，以便对付你还没来得及洞察的敌人。</li>
                        <li>在“对抗神罗特种兵候补生 (vs. SOLDIER Trainees)”挑战中，所有的敌人都弱火，<strong>除了</strong>你在最后一轮面临的锯刀机甲，所以你需要同时装备火和雷魔晶石。</li>
                        <li>在“双人组对抗高空飞行者 (Two-Person Team vs. High Flyers)”挑战中，敌人有许多不同的元素弱点，所以我不建议在武器上链接任何元素。给每个团队成员装备冰、风和雷属性，你就会准备好。既然你的敌人是飞行者，我建议使用巴雷特以及克劳德或蒂法中的任何一个（随你喜欢）。巴雷特的攻击通常较弱，但它们几乎能击中任何东西，即使是从远处。</li>
                        <li>对于“三人组对抗杂牌军 (Three-Person Team vs. Team Ragbag)”：
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>每个团队成员都需要雷、火和冰属性。</li>
                            <li>你将对抗另一只地狱犬 (Hellhound)，所以确保有人拥有封印魔晶石 (Binding)，并且每个人都有复活魔晶石 (Revival)。</li>
                            <li>在第 2 回合，你将面对另一只突变魔草 (Trypapolis)。利用它克隆自己的机制来削减血量。</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 id="section-17-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">17.6 营救爱丽丝与 H0512 样本战</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：侦察 (Reconnaissance)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      原路返回走下那段宽阔的楼梯，通过北边的门离开休息区。继续向东然后向北走，触发一段剧情。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>乘自动扶梯上两层到达 64 楼，使用钥匙卡穿过南边的门。沿着标记去洗手间。</li>
                      <li>向上进入通风管道，朝着标记爬行。（似乎如果克劳德把他那把巨大的剑留在巴雷特那里，爬起来会快得多。）</li>
                      <li>在到达标记之前，注意左边死胡同里的一颗<strong>提升 HP 魔晶石 (HP Up Materia)</strong>。</li>
                    </ul>

                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3 mt-6">
                      📍 目标：行动：拯救爱丽丝 (Operation: Save Aerith)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      从这里开始，导航变得容易多了。你沿着直接的路线走（我打赌你真的已经厌倦了“线性”这个词，对吧？）。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-6 border-l-4 border-[#00f0ff] pl-3 bg-[#080d14]/50 p-3">
                      在前往宝条 (Hojo) 实验室的路上，你会经过一张长椅。你不应该需要治疗，但你可能想从自动售货机买一些<strong>星之坠饰 (Star Pendants)</strong>，为即将到来的 boss 战做准备。阅读下面的方框以帮助你做出决定。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px]">Boss 战：样本 H0512 (Specimen H0512)</h5>
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-4">
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-2"><strong>样本 H0512 没有元素弱点。</strong></p>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                        它的魔法防御 (233) 高于物理防御 (183)，这表明物理攻击是首选。然而，克劳德和蒂法很难对它使用近战攻击，因为当他们靠近时，它要么把他们拍飞，要么抓住他们并砸在地上。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                        因此，你可能希望<strong>让巴雷特从远处对 Boss 造成大部分伤害</strong>，而克劳德和蒂法则通过消灭 boss 扔进战场的众多小兵来积攒 ATB。然后他们可以用 ATB 向 Boss 施放法术，或者保留 ATB 直到 Boss 陷危。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-2 font-bold text-[#00f0ff]">
                        你的基本策略是攻击左爪 (Left Claw)。击败它会使 Boss 陷危。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        当 Boss 陷危时，跟进下段踢/突刺 (Focused) 攻击，尝试使其力竭。之后左爪会再生，允许你重复这个模式。
                      </p>
                    </div>

                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li>样本 H0512 会让你中毒。你可以给团队装备星之坠饰来免疫中毒，或者你干脆忽略它，只是更频繁地治疗。我选择了第二种。我猜第三种选择是治愈中毒，但我只是觉得把 ATB 浪费在治愈中毒上毫无意义，因为它很快又会被施加。</li>
                      <li>一定要给某人装备<strong>封印魔晶石 (Binding)</strong>，因为 boss 可以被催眠。在它睡着时攻击它会把它吵醒，但睡眠可以给你的团队一个机会来积攒一些 ATB，并在几乎不受伤害的情况下清除一些小兵。</li>
                      <li>boss 最大的威胁是抓住你团队的一名成员，榨干那个人的 HP，然后把他们砸在地上，经常在这个过程中将其 KO。这就是为什么我把复活耳环 (Revival Earrings) 的优先级排在星之坠饰之上的原因。</li>
                      <li>一旦左爪被破坏，H0512 就无法执行“抓取 (Seize)”。这就是你的信号，派克劳德和蒂法去使其力竭，并用他们储备的 ATB 进行猛烈攻击。</li>
                    </ul>
                    <p className="text-[14px] text-[#5c7e82] m-0 italic">
                      （我打得很草率，让团队成员被砸死了两次，而且一直处于中毒状态很烦人，但最终赢得这场战斗并没有我想象的那么艰难。）
                    </p>
                  </div>

                  <h3 id="section-17-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">17.7 第十六章最终战斗：装甲特种兵</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当巴雷特说“宝条要跑了 (Hojo's gettin' away)”时，在跟着他进电梯之前，一定要在附近的长椅上治疗。确保每个人都有火魔晶石和雷魔晶石，以应对接下来的战斗。考虑给克劳德装备<strong>火 - 范围化 (Fire - Magnify)</strong> 魔晶石配对。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold">
                      跳上附近的电梯，乘它去迎接你的下一场战斗。你将与两批神罗坏蛋战斗。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">第一批敌人：</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>第一批只是一群杂鱼，由精锐保安兵 (Elite Security Officers)、精锐掷弹兵 (Elite Grenadiers) 和精锐镇压兵 (Elite Shock Troopers) 各 2 名组成。它们都弱火。</li>
                      <li>在施放法术之前，让克劳德立即向右移动。你想击中两名精锐防暴兵 (Elite Riot Troopers) 以击倒他们的盾牌，但他们都在两侧很远的地方。如果你站在大致位于原本在克劳德右边的那个人面前，你就可以用一发<strong>范围化的最高级火魔法 (Magnified Firaga)</strong> 击中所有敌人。</li>
                      <li>切换到巴雷特，让他执行猛烈枪击，然后跟上满腔怒火。这些攻击会追踪任何幸存者并解决掉他们中的大多数。让蒂法上去清理残局即可。</li>
                    </ul>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">第二批敌人：2 名装甲镇压兵 (Armored Shock Troopers)</h5>
                    <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">
                      一旦解决掉第一组，你将面对 2 名装甲镇压兵。他们对物理攻击有极高的防御力 (259)，但魔法防御力相对较低 (31)，并且弱雷，所以你想用魔法干掉他们。然而，这里有个问题。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">
                      一旦他们达到半血，他们会执行一个名为<strong>“弹射 (Eject)”</strong>的动作，这有两个不好的后果：
                    </p>
                    <ul className="space-y-1 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-4">
                      <li>首先，它会引起范围爆炸，能造成严重伤害。</li>
                      <li>其次，你随后将需要击败从装甲镇压兵外壳中出现的<strong>强化镇压兵 (Enhanced Shock Trooper)</strong>。</li>
                    </ul>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h6 className="font-bold text-[#ff3366] mb-2 text-sm">应对策略：</h6>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">因此，你想把装甲镇压兵 (AST) 的血量削减到刚好一半以上，然后干脆利落地终结它。以下是对我有效的方法：</p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>我让巴雷特（他的魔法属性比克劳德低）用最高级雷魔法 (Thundaga) 击中一个 AST。这使其 HP 减少了约 40%，并对另一个 AST 造成了一些伤害。</li>
                        <li>然后克劳德的一发 Thundaga 轻松解决了第一个，并将第二个的 HP 减少到约 60%。</li>
                        <li>我必须再积攒一点 ATB，但一旦克劳德和巴雷特各有一个 ATB 槽，我就让克劳德使用 Thundaga，并且在那个法术蓄力时，让巴雷特使用中级雷魔法 (Thundara)。这样，两个法术几乎同时命中，AST 根本没时间执行“弹射”。</li>
                        <li>在困难模式下，2 发 Thundaga 没能解决掉第一个 AST。为了解决这个问题，我让蒂法接着施放一发 Thundara，这就搞定了。</li>
                      </ul>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-2 italic">你将在战斗模拟器中再次面对这些敌人。在那里面，他们不会执行“弹射”。</p>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">如果他们弹射了：强化镇压兵 (Enhanced Shock Troopers, EST) 的打法</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>即使一个 AST 执行了弹射，战斗也不会变得困难多少。强化版本的属性与装甲版本相反——防御力低 (31) 但魔法防御力高 (259)。这表明应该对他们使用物理攻击。</li>
                      <li>问题是他们移动速度极快，用近战攻击很难击中。</li>
                      <li>解决办法是用<strong>最高级火魔法 (Firaga)</strong> 击中他。这不会造成太大伤害，但应该会使强化镇压兵陷危并将其击倒。从这里开始，你应该能够轻松地使其力竭并终结他。</li>
                      <li>如果你让他们在场上转悠，请注意这一点：当他们停止滑行并开始旋转时，你需要躲开。旋转可以吸入你的一名团队成员并反复攻击他，造成大量伤害。</li>
                      <li>当他们只是滑行时，克劳德的勇穴模式格挡 (Punisher Mode Parry) 对他们的普通攻击很有效，但对他们的旋转毫无用处。</li>
                      <li>巴雷特的远程攻击可以从安全距离执行，并且会追踪移动目标，但它们造成的伤害不高。<strong>你最好的策略是用 Firaga 法术使其陷危，然后使其力竭并痛击。</strong></li>
                    </ul>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      之后，你们将迎来一场欢乐的重聚，结交一位新朋友，接着克劳德会重温一些令人不安的记忆。
                    </p>
                  </div>

                  <h2 id="section-18" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十八、第十七章：逃出生天 (Deliverance from Chaos)
                  </h2>

                  <h3 id="section-18-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li className="font-bold text-[#ff3366]">这是一个非常漫长且非常困难的章节，有不少于 4 场 Boss 战！</li>
                      <li>在这一章中，我们将捡起最后 2 把武器。学习它们的能力，你就能获得<strong>“武器专家 (Weapons Expert)”奖杯</strong>！</li>
                      <li>我将比平时提供更详细的关于如何继续的指导。</li>
                      <li>你将在两个双人小队之间来回切换。找到你能接受的魔晶石组合，因为不断地在角色之间重新分配魔晶石会非常累人。</li>
                      <li>一路上，我们将捡起 3 件分别能容纳 4 颗魔晶石的防具。一件会自动获得，但一定要确保不要错过另外 2 件。在游戏的这些后期阶段，魔晶石槽的最大数量将变得越来越重要。</li>
                    </ul>
                  </div>

                  <h3 id="section-18-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.2 爱丽丝的全金属杖与光之盾</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：寻找出路 (A Way Out)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 text-[#ff3366] font-bold">
                      开场动画结束后不要急着离开！本章开始的房间里有一个紫色的宝箱，里面装着爱丽丝的<strong>全金属杖 (Reinforced Staff)</strong>。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      她可能还没有学会她的防刃魔杖 (Bladed Staff) 的“光之盾 (Lustrous Shield)”能力，所以先完成那个，然后再切换武器。爱丽丝现在在你的团队里，她可能没有装备任何魔晶石。当你在解决这个问题时，你可能也想更新一下她的防具。
                    </p>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                        🪄 全金属杖 (Reinforced Staff) 与 光之盾 (ATB Ward)
                      </h4>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">
                        在魔法攻击力方面，全金属杖仅次于秘银棒 (Mythril Rod)，其升级包括爱丽丝防御能力的一些小幅提升。
                      </p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                        <li><strong>光之盾 (ATB Ward)</strong> 能力消耗 2 个 ATB 槽，并在地面上创建一个大区域或“结界”，持续 240 秒。</li>
                        <li>只要爱丽丝的 ATB 槽不为空，任何在这个结界内使用 ATB 能力的盟友都将通过从爱丽丝的槽中抽取 ATB 来部分恢复 ATB。基本上，盟友是在使用能力后向爱丽丝“借用”ATB。</li>
                        <li>据我所知，这个过程没有 ATB 的净增长。你只是把它从爱丽丝转移到其他人身上。</li>
                      </ul>
                      <div className="bg-[#080d14]/90 p-4 rounded border border-[#112a32]">
                        <p className="text-[13px] text-[#5c7e82] m-0 italic">
                          <strong>熟练度获取：</strong>使结界出现可获得 +10% 的熟练度。如果盟友进入结界并从那里执行任何 ATB 攻击，则获得熟练度奖励。考虑到使用这个能力的高成本，我预测除了学习武器能力以帮助获得武器专家奖杯之外，你很少会用到它。
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      第一场战斗后，你会在该区域东侧找到一张长椅和自动售货机。它的北边是战斗模拟器 (Combat Simulator)。最终你将会在那里花很多时间，但现在它还不可用。
                    </p>
                  </div>

                  <h3 id="section-18-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.3 寻找同伴与第一分舱</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：寻找同伴 (Find the Others)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      当克劳德独自在神罗机密研究设施·锣格 (The Drum) - 第 1 层时，一定要探索东边那个死胡同分支，那里有一颗<strong>中毒魔晶石 (Poison Materia)</strong>。继续前进，直到克劳德到达第一分舱 (1st Ward) 的入口。他可以在入口旁边的长椅上休息。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">M.O.T.H. 客房服务机战前准备</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>在进入第一分舱之前，在克劳德和巴雷特的防具上装备<strong>雷霆-元素 (Lightning-Elemental)</strong> 组合，为接下来对抗 M.O.T.H. 单元的战斗做准备。这将减少即将到来的敌人非常强大的雷电攻击所造成的伤害。</li>
                        <li>如果你想从你的<strong>偷窃魔晶石 (Steal Materia)</strong> 中榨取一点价值，请在对抗 M.O.T.H. 单元的战斗中装备它。这个敌人是<strong>铁处女 (Iron Maiden)</strong> 防具的唯一来源，它提供了惊人的 +124 物理防御和 +20 魔法防御。缺点是它<strong>没有</strong>魔晶石槽。</li>
                      </ul>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗策略：M.O.T.H. 单元</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>M.O.T.H. 单元在战斗开始时被旋转的刀片包围，这将阻止克劳德靠近进行近战攻击，所以想都别想。</li>
                      <li>巴雷特的枪仍然可以造成伤害，而克劳德的勇穴模式格挡 (Punisher Mode Parry) 对敌人的物理攻击非常有效。</li>
                      <li>一旦敌人受到足够的伤害，它就会放下那些刀片，让克劳德可以用他的勇穴模式把它打死。</li>
                    </ul>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4 border-l-4 border-[#00f0ff] pl-3 bg-[#080d14]/50 p-3">
                      击败 M.O.T.H. 单元后，像我这样的小气鬼会回到第一分舱外的长椅免费治疗。在下一场战斗之前，没有其他免费治疗的机会了。
                    </p>
                  </div>

                  <h3 id="section-18-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.4 克劳德的双刺剑与反击架势</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      回到你与 M.O.T.H. 战斗的地方。离开后，你会被锁在外面。在附近你会找到游戏中的最后一把武器，克劳德的<strong>双刺剑 (Twin Stinger)</strong>。
                    </p>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 relative overflow-hidden mb-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h4 className="font-bold text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-3">
                        ⚔️ 双刺剑 (Twin Stinger) 与 反击架势 (Counterstance)
                      </h4>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">
                        双刺剑在物理和魔法强度之间为克劳德提供了最佳的平衡。这种一致性的代价是两者的数值都较低。这两个属性的总和是他所有武器中最低的（除了钉棒 Nail Bat）。升级主要集中在魔法增益上，包括总共 +35 MP 的增加。在积极的一面，这是极少数在通关后游玩之前就能获得全部 6 个魔晶石槽的武器之一。在最高级别时，双刺剑可以获得“绝处逢生 (Reprieve)”能力。
                      </p>
                      
                      <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mt-4">
                        <h5 className="font-bold text-[#00f0ff] mb-2 text-sm">核心能力：反击架势 (Counterstance)</h5>
                        <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>反击架势需要把握时机，但当你能让它发挥作用时，真的非常值得。消耗 1 个 ATB 槽，克劳德采取防御姿态等待敌人的攻击。如果敌人没有在短时间内发动攻击，克劳德会挥剑一次进行微弱的攻击，然后像往常一样恢复战斗。</li>
                          <li>然而，如果他在等待期间受到攻击，克劳德将从该攻击中<strong>减少 80% 的伤害</strong>，并释放一系列 3 次威力递增的 AOE 反击，最后一次反击会增加力竭槽并能击飞敌人。</li>
                          <li>与他的格挡攻击（只能由近战攻击触发）不同，反击架势将使克劳德反击<strong>任何攻击</strong>——近战、远程或魔法。</li>
                          <li>反击架势可能非常有效，特别是对付单一、非常具有攻击性的敌人。当你躲避或格挡许多这类敌人的攻击时，它们会陷入陷危，并且当它发挥作用时，反击架势既减少了对克劳德的伤害，又对敌人造成了巨大伤害。诀窍在于时机。你必须能够相当准确地预测敌人何时发动攻击。</li>
                        </ul>
                      </div>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-4 italic">
                        <strong>熟练度获取：</strong>执行反击架势获得 +10% 熟练度。如果你把握好时机，让克劳德受到攻击，然后在等待时间到期前释放反击，就能获得奖励。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-18-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.5 小队分离：第一阶段</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      你们将被分成两支由 2 人组成的小队——男士一队，女士一队。你需要做的事情可能并不总是很明显，所以我将带你一步步走过本章的这一部分。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-6 border-l-4 border-[#00f0ff] pl-3 bg-[#080d14]/50 p-3">
                      我也会指出魔晄石 (Mako Shards) 的位置，以帮助你确信使用魔法是没有问题的。记住，每个魔晄石会恢复每位团队成员 10% 的 MP。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">克劳德与巴雷特</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      让克劳德和巴雷特沿着路线走到蒂法和爱丽丝所在房间的最远端，到达一个 PHS 终端（通讯设备）。出现提示时，将队伍切换到蒂法和爱丽丝。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">蒂法与爱丽丝</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      她们将前往第三分舱 (3rd Ward) 的入口。那里有一张长椅，但她们可能不需要。拉下一个开关，然后使用附近的 PHS 终端切换回克劳德和巴雷特。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">克劳德与巴雷特</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>让克劳德和巴雷特都装备<strong>雷霆-元素 (Lightning-Elemental)</strong> 组合，为即将对抗激光炮机甲 (Blast-Ray) 的战斗做准备。</li>
                      <li>记住，当力竭时，激光炮机甲会升起一个力场阻止你靠近它们。你仍然可以用巴雷特的枪、基于雷属性的法术和克劳德的破晄击能力对它们造成伤害。</li>
                      <li>拉下开关，走向中央终端 (Central Terminal)。在那里时，捡起掉在地上的<strong>时间魔晶石 (Time Materia)</strong>。然后打开通往第三分舱的门，并使用附近的 PHS 终端切换队伍。</li>
                    </ul>
                  </div>

                  <h3 id="section-18-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.6 蒂法的原力手镯与第三分舱</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      蒂法和爱丽丝将进入第三分舱，打开一扇门，并与一些未知生命体 (Unknown Entities) 战斗。之后，她们可以回到入口外的长椅上进行不消耗 MP 的治疗。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      接下来，女士们将与一群寻血猎犬 (Bloodhounds) 战斗，所以<strong>在蒂法的手套上和爱丽丝身上的某处装备冰属性 (Ice)</strong>。战斗结束后，挤过开口，砸碎挡在门口的箱子获得一个魔晄石。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#ff3366] mb-2 text-sm">⚠️ 重要收集：原力手镯 (Force Bracelet)</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>击败异舞者 (Zenene)，但在上楼梯之前，砸碎楼梯下面的箱子获得一个魔晄石。</li>
                        <li>跌落到地板后，与 2 只异舞者战斗。【在你离开这个房间之前】，去东北角拉下一个开关。</li>
                        <li>大门将会打开，让你拿到一个装着<strong>原力手镯 (Force Bracelet)</strong> 的宝箱。</li>
                      </ul>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-3 italic border-t border-[#112a32] pt-2">
                        只有 +9 物理防御和 +9 魔法防御，原力手镯看起来像是一件相当糟糕的防具。然而，它是极少数拥有<strong>四个魔晶石槽</strong>的防具之一。随着我们接近游戏通关，这个额外的魔晶石槽变得更加重要。
                      </p>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">继续探索</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>向西南走来到室外。下楼梯，向南走到有箱子的地方获得一个魔晄石。</li>
                      <li>向北走去对抗一些机甲。<strong>战斗一开始，按下“Options”按钮并选择“从上一场战斗重试 (Retry from Last Battle)”。</strong>这应该会导致南边的箱子重生。</li>
                      <li>战斗结束后，回到南边的箱子那里，从里面的魔晄石中获取更多的 MP。</li>
                      <li>爬上梯子，拉下开关，穿过吊舱走向另一个魔晄石和一个 PHS 终端。呼叫伙计们并切换队伍。</li>
                    </ul>
                  </div>

                  <h3 id="section-18-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.7 男生小队与第二分舱的连环手镯</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      打开通往第二分舱 (2nd Ward) 的门。走过去，在进去之前在长椅上治疗。进入第二分舱并与 2 只异舞者战斗。当你沿着通道向西南走时，你会发现一堆包含<strong>三个魔晄石</strong>的箱子。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      接下来是另一个 M.O.T.H. 单元，所以相应地调整装备。这场战斗之后，你会找到 4 个魔晄石，所以你不需要节省你的 MP。在东北-西南走向的大厅里，东北端的死胡同有一个魔晄石，西南端有 3 个魔晄石。哇哦！
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗策略：雪橇虫 (Sledgeworms)</h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">接下来是 3 只雪橇虫。我真的非常讨厌这些东西！</p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>它们能让你中毒，这已经够糟了，但更糟的是，它们会用<strong>“停止 (Stop)”</strong>打击你，然后当你毫无防备地站在那里时痛打你。所以，<strong>装备防护靴 (Protective Boots) 以防止被停止</strong>，并且只需应付中毒状态即可。</li>
                        <li>它们只短暂出现，然后就会潜回你够不到的地方，所以你通常不能使用最高级雷魔法 (Thundaga)，因为它的蓄力时间太长。</li>
                        <li>坚持使用初级雷魔法 (Thunder)、巴雷特的枪以及克劳德能靠得足够近时的攻击。</li>
                      </ul>
                    </div>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 relative overflow-hidden mb-4">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                        ⚠️ 极易错过：连环手镯 (Chain Bangle)
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">
                        向东退出并上楼梯，向东北方向走到死胡同房间获得一个魔晄石。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3 font-bold text-[#00f0ff]">
                        在你爬上那些楼梯之前，探索第二分舱 - 控制平台 (Control Deck) 区域的西南角！你会找到一个宝箱，里面装着游戏中独一无二的连环手镯 (Chain Bangle)。
                      </p>
                      <p className="text-[13px] text-[#5c7e82] m-0 italic border-t border-[#112a32] pt-2">
                        拥有 +50 物理防御、+50 魔法防御和 4 个魔晶石槽，<strong>连环手镯可以说是游戏中最好的防具。</strong>遗憾的是，你只能得到一个。如果你在通关后回到这里，你只会得到一瓶药水 (Potion)。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      走上楼梯到第 6 层，在那里你会找到另一堆包含 3 个魔晄石的箱子。
                    </p>
                  </div>

                  <h3 id="section-18-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.8 脑部舱 (Brain Pods) 战斗策略</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight: Brain Pods
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      克劳德和巴雷特将与满屋子的脑部舱 (Brain Pods) 战斗。脑部舱会使视线内的任何东西中毒，并且能用“停止 (Stop)”打击你。
                    </p>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗准备与打法</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>装备<strong>防护靴 (Protective Boots)</strong> 将防止被停止。在这一点上，你真的对中毒无能为力，但你可以做 2 件事让这场战斗尽可能短。</li>
                        <li>给巴雷特的武器装备<strong>元素-雷霆 (Elemental-Lightning)</strong> 配对。</li>
                        <li>给克劳德装备<strong>范围化-雷霆 (Magnify-Lightning)</strong> 配对。</li>
                        <li>使用物理攻击将第一只脑部舱的 HP 削减到一半。然后它会召唤 11 个较弱版本的自己加入混战。</li>
                        <li>让克劳德对暴徒施放<strong>范围化的中级雷魔法 (Magnified Thundara)</strong>，尽可能多地同时击中目标，同时巴雷特紧跟其后使用猛烈枪击 (Overcharge) 和满腔怒火 (Maximum Fury)。</li>
                      </ul>
                      <p className="text-[14px] text-[#5c7e82] m-0 mt-3 italic">
                        尽管看起来情况对我们的小伙子们很不利，但他们应该能很快取得胜利。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      之后，你们将迎来一场欢乐的重聚，结交一位新朋友，接着克劳德会重温一些令人不安的记忆。
                    </p>
                  </div>

                  <h2 id="section-18" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十八、第十七章：逃出生天 (Deliverance from Chaos)
                  </h2>

                  <h3 id="section-18-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      你们将被分成两支由 2 人组成的小队——男士一队，女士一队。你需要做的事情可能并不总是很明显，所以我将带你一步步走过本章的这一部分。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-6 border-l-4 border-[#00f0ff] pl-3 bg-[#080d14]/50 p-3">
                      我也会指出魔晄石 (Mako Shards) 的位置，以帮助你确信使用魔法是没有问题的。记住，每个魔晄石会恢复每位团队成员 10% 的 MP。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">克劳德与巴雷特</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      让克劳德和巴雷特沿着路线走到蒂法和爱丽丝所在房间的最远端，到达一个 PHS 终端（通讯设备）。出现提示时，将队伍切换到蒂法和爱丽丝。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">蒂法与爱丽丝</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      她们将前往第三分舱 (3rd Ward) 的入口。那里有一张长椅，但她们可能不需要。拉下一个开关，然后使用附近的 PHS 终端切换回克劳德和巴雷特。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">克劳德与巴雷特</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-4">
                      <li>让克劳德和巴雷特都装备<strong>雷霆-元素 (Lightning-Elemental)</strong> 组合，为即将对抗激光炮机甲 (Blast-Ray) 的战斗做准备。</li>
                      <li>记住，当力竭时，激光炮机甲会升起一个力场阻止你靠近它们。你仍然可以用巴雷特的枪、基于雷属性的法术和克劳德的破晄击能力对它们造成伤害。</li>
                      <li>拉下开关，走向中央终端 (Central Terminal)。在那里时，捡起掉在地上的<strong>时间魔晶石 (Time Materia)</strong>。然后打开通往第三分舱的门，并使用附近的 PHS 终端切换队伍。</li>
                    </ul>
                  </div>

                  <h3 id="section-18-6" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.6 蒂法的原力手镯与第三分舱</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      蒂法和爱丽丝将进入第三分舱，打开一扇门，并与一些未知生命体 (Unknown Entities) 战斗。之后，她们可以回到入口外的长椅上进行不消耗 MP 的治疗。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      接下来，女士们将与一群寻血猎犬 (Bloodhounds) 战斗，所以<strong>在蒂法的手套上和爱丽丝身上的某处装备冰属性 (Ice)</strong>。战斗结束后，挤过开口，砸碎挡在门口的箱子获得一个魔晄石。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#ff3366] mb-2 text-sm">⚠️ 重要收集：原力手镯 (Force Bracelet)</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>击败异舞者 (Zenene)，但在上楼梯之前，砸碎楼梯下面的箱子获得一个魔晄石。</li>
                        <li>跌落到地板后，与 2 只异舞者战斗。【在你离开这个房间之前】，去东北角拉下一个开关。</li>
                        <li>大门将会打开，让你拿到一个装着<strong>原力手镯 (Force Bracelet)</strong> 的宝箱。</li>
                      </ul>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-3 italic border-t border-[#112a32] pt-2">
                        只有 +9 物理防御和 +9 魔法防御，原力手镯看起来像是一件相当糟糕的防具。然而，它是极少数拥有<strong>四个魔晶石槽</strong>的防具之一。随着我们接近游戏通关，这个额外的魔晶石槽变得更加重要。
                      </p>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">继续探索</h5>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>向西南走来到室外。下楼梯，向南走到有箱子的地方获得一个魔晄石。</li>
                      <li>向北走去对抗一些机甲。<strong>战斗一开始，按下“Options”按钮并选择“从上一场战斗重试 (Retry from Last Battle)”。</strong>这应该会导致南边的箱子重生。</li>
                      <li>战斗结束后，回到南边的箱子那里，从里面的魔晄石中获取更多的 MP。</li>
                      <li>爬上梯子，拉下开关，穿过吊舱走向另一个魔晄石和一个 PHS 终端。呼叫伙计们并切换队伍。</li>
                    </ul>
                  </div>

                  <h3 id="section-18-7" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.7 男生小队与第二分舱的连环手镯</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      打开通往第二分舱 (2nd Ward) 的门。走过去，在进去之前在长椅上治疗。进入第二分舱并与 2 只异舞者战斗。当你沿着通道向西南走时，你会发现一堆包含<strong>三个魔晄石</strong>的箱子。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      接下来是另一个 M.O.T.H. 单元，所以相应地调整装备。这场战斗之后，你会找到 4 个魔晄石，所以你不需要节省你的 MP。在东北-西南走向的大厅里，东北端的死胡同有一个魔晄石，西南端有 3 个魔晄石。哇哦！
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗策略：雪橇虫 (Sledgeworms)</h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">接下来是 3 只雪橇虫。我真的非常讨厌这些东西！</p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>它们能让你中毒，这已经够糟了，但更糟的是，它们会用<strong>“停止 (Stop)”</strong>打击你，然后当你毫无防备地站在那里时痛打你。所以，<strong>装备防护靴 (Protective Boots) 以防止被停止</strong>，并且只需应付中毒状态即可。</li>
                        <li>它们只短暂出现，然后就会潜回你够不到的地方，所以你通常不能使用最高级雷魔法 (Thundaga)，因为它的蓄力时间太长。</li>
                        <li>坚持使用初级雷魔法 (Thunder)、巴雷特的枪以及克劳德能靠得足够近时的攻击。</li>
                      </ul>
                    </div>

                    <div className="bg-[#04151a] border border-[#00f0ff]/30 rounded-lg p-6 relative overflow-hidden mb-4">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
                      <h5 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                        ⚠️ 极易错过：连环手镯 (Chain Bangle)
                      </h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">
                        向东退出并上楼梯，向东北方向走到死胡同房间获得一个魔晄石。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3 font-bold text-[#00f0ff]">
                        在你爬上那些楼梯之前，探索第二分舱 - 控制平台 (Control Deck) 区域的西南角！你会找到一个宝箱，里面装着游戏中独一无二的连环手镯 (Chain Bangle)。
                      </p>
                      <p className="text-[13px] text-[#5c7e82] m-0 italic border-t border-[#112a32] pt-2">
                        拥有 +50 物理防御、+50 魔法防御和 4 个魔晶石槽，<strong>连环手镯可以说是游戏中最好的防具。</strong>遗憾的是，你只能得到一个。如果你在通关后回到这里，你只会得到一瓶药水 (Potion)。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      走上楼梯到第 6 层，在那里你会找到另一堆包含 3 个魔晄石的箱子。
                    </p>
                  </div>

                  <h3 id="section-18-8" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.8 脑部舱 (Brain Pods) 战斗策略</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight: Brain Pods
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      克劳德和巴雷特将与满屋子的脑部舱 (Brain Pods) 战斗。脑部舱会使视线内的任何东西中毒，并且能用“停止 (Stop)”打击你。
                    </p>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战斗准备与打法</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>装备<strong>防护靴 (Protective Boots)</strong> 将防止被停止。在这一点上，你真的对中毒无能为力，但你可以做 2 件事让这场战斗尽可能短。</li>
                        <li>给巴雷特的武器装备<strong>元素-雷霆 (Elemental-Lightning)</strong> 配对。</li>
                        <li>给克劳德装备<strong>范围化-雷霆 (Magnify-Lightning)</strong> 配对。</li>
                        <li>使用物理攻击将第一只脑部舱的 HP 削减到一半。然后它会召唤 11 个较弱版本的自己加入混战。</li>
                        <li>让克劳德对暴徒施放<strong>范围化的中级雷魔法 (Magnified Thundara)</strong>，尽可能多地同时击中目标，同时巴雷特紧跟其后使用猛烈枪击 (Overcharge) 和满腔怒火 (Maximum Fury)。</li>
                      </ul>
                      <p className="text-[14px] text-[#5c7e82] m-0 mt-3 italic">
                        尽管看起来情况对我们的小伙子们很不利，但他们应该能很快取得胜利。
                      </p>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      向东北退出前往室外。上楼梯到第四分舱 (4th Ward) 的入口。在长椅上治疗，然后走西边的楼梯下去。在前往 PHS 终端的路上，你们被另一个任务转移了注意力。呼叫并切换队伍。
                    </p>
                  </div>

                  <h3 id="section-18-9" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.9 小队重聚前的最后考验</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 蒂法与爱丽丝的最后一段路</h4>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li>在两名团队成员身上都装备雷霆、烈火和寒气魔晶石，并装备防护靴，为接下来对抗雪橇虫的战斗做准备。</li>
                      <li>向西北走，用雷魔法击败雪橇虫，然后下梯子。</li>
                      <li>在梯子底部，蒂法和爱丽丝将不得不击败 2 名强化镇压兵 (Enhanced Shock Troopers)。记住，一发中级火魔法 (Fira) 或最高级火魔法 (Firaga) 会将他们击倒，之后蒂法的物理攻击将造成最大的伤害。</li>
                    </ul>
                  </div>

                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      战斗结束后，几乎正南走去找赤红十三 (Red XIII) 并击败所有的未知生命体 (Unknown Entities)。该区域南端的箱子里有一个魔晄石。走南边的楼梯上到第 4 层，在 Red 的协助下，向北走向电梯，当然，电梯还不能用。
                    </p>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-6">
                      拉下开关，打一场仗，然后走向中央控制终端打开第四分舱 (4th Ward)。在切换回男士们之前，你可能需要治疗。这是你在 boss 战之前的最后机会。准备好后，呼叫克劳德切换队伍。
                    </p>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">克劳德与巴雷特</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0">
                      向东南往回走，上去到第四分舱的入口。在长椅上休息，并在进去引发 boss 战之前根据下面的提示装备你的团队。
                    </p>
                  </div>

                  <h3 id="section-18-10" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.10 Boss战 1：百足剑龙 (Swordipede)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight #1: Swordipede
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      你即将进行一场涉及你团队全部 4 名成员的 boss 战。首先克劳德和巴雷特会发起攻击，然后爱丽丝和蒂法将结束战斗。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">上半场：克劳德与巴雷特</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>百足剑龙 (Swordipede) 没有元素弱点，但你需要使用一些魔法攻击。给巴雷特装备雷霆 (Lightning)、中毒 (Poison) 和先发制人魔晶石，给克劳德装备雷霆和先发制人。当女士们接手战斗时，你将有机会把这些转移给她们。</li>
                        <li>百足剑龙会弹开大多数近战攻击，所以克劳德无法击中很多次。利用他的 ATB 向敌人施放中级雷魔法 (Thundara) 或最高级雷魔法 (Thundaga)。克劳德在本章中还有 2 场战斗要打，所以我建议通过使用 Thundara 来节省 MP。</li>
                        <li>巴雷特应该立即让 boss 中毒，然后用他的枪攻击来削减它的 HP。</li>
                      </ul>
                    </div>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">下半场：蒂法与爱丽丝</h5>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                        当战斗即将转移给女士们时，屏幕左下角会出现一个<strong>□键</strong>按钮。长按□键以访问主菜单。给两位女士都装备先发制人和雷霆魔晶石，并给爱丽丝装备中毒魔晶石。
                      </p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>当战斗恢复时，让爱丽丝尽快对百足剑龙施放中毒，然后为雷属性法术设置一个<strong>圣魔阵 (Arcane Ward)</strong>。爱丽丝在这之后有一场非常艰难的战斗，所以你可能想节省一下你的 MP 使用。暂时让蒂法保持距离。</li>
                        <li>当敌人形成一个风车并在该区域滚动（“锯齿旋转 Saw-Toothed Spin”）时要小心。它会在内墙和外墙之间交替，对任何被它击中的东西造成巨大伤害。躲开它以减少伤害。</li>
                        <li>一旦它完成锯齿旋转，百足剑龙就会陷入陷危 (Pressured)。这是蒂法出手的信号。她应该储备了大量的 ATB 并准备释放。加上爱丽丝的一两发 Thundara，百足剑龙就完蛋了。</li>
                      </ul>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      击败百足剑龙将为你赢得第二个<strong>原力手镯 (Force Bracelet)</strong>。
                    </p>
                  </div>

                  <h3 id="section-18-11" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.11 顶层探索与神罗总裁</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：不祥的踪迹 (The Ominous Trail)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      战斗结束后，女士们将穿过一条隧道并拉下一个开关与团队重聚，尽管在此之前把伙计们吓了一跳。你可以返回之前的长椅进行治疗，但没有必要。在打下一场仗之前你会经过另一张长椅。
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li>呼叫电梯并乘它到顶层。向东北方向走，那是 Red 指示的方向。</li>
                      <li>跟着蓝色粘液走到 69 楼，然后到 70 楼。蒂法会指引你走向一张长椅和恳求声的来源。</li>
                      <li>和神罗总裁 (President of Shinra) 待一会儿，然后前往你的下一场 boss 战，克劳德、蒂法和爱丽丝将是你的团队。</li>
                    </ul>
                  </div>

                  <h3 id="section-18-12" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.12 Boss战 2：杰诺瓦·织梦者 (Jenova Dreamweaver)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight #2: Jenova Dreamweaver
                    </h4>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战前准备与基本属性</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>杰诺瓦 (Jenova) 会造成中毒和停止状态，所以你必须再次选择你想防范哪一个。我建议给 2 名团队成员装备你的<strong>防护靴 (Protective Boots)</strong> 以避免被停止。你只能忍受中毒了。</li>
                        <li>杰诺瓦有火和风属性的攻击，所以你可以用防具上的<strong>元素 - 火 (Elemental - Fire)</strong> 或<strong>元素 - 风 (Elemental - Wind)</strong> 配对来减弱伤害。</li>
                        <li>该 boss <strong>没有元素弱点</strong>，但在战斗的早期阶段可以被中毒，所以一定要相应地进行装备。</li>
                        <li>杰诺瓦对魔法有“较低的抗性”，所以一般来说物理攻击会造成更多伤害。</li>
                      </ul>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">第一阶段</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          你的首要任务是施加中毒。之后，你需要破坏左触手 (Left Tentacle) 和右触手 (Right Tentacle)，如果任其完好无损，它们会把你的攻击者打飞。然后用你最好的物理攻击打击杰诺瓦，直到战斗的下一阶段开始。
                        </p>
                      </div>

                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">第二阶段：反弹与护盾</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">从现在开始，每当杰诺瓦陷入陷危时，她将处于“反弹 (Reflect)”或“护盾 (Shield)”状态之一：</p>
                        <ul className="space-y-1 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-2">
                          <li>如果她被陷危的次数是<strong>奇数</strong>，她会执行“决议 (Resolution)”并获得护盾，使她对<strong>物理攻击免疫</strong>。</li>
                          <li>如果她被陷危的次数是<strong>偶数</strong>，她会执行“拒绝 (Rejection)”并获得反弹，使她对<strong>魔法攻击免疫</strong>。</li>
                        </ul>
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          考虑到这一点，你在第二阶段的总体策略是相同的：破坏触手，然后用能对她造成伤害的攻击去打杰诺瓦。
                        </p>
                      </div>

                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">第三与最终阶段</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                          杰诺瓦通过召唤数不清的触手开始第三阶段，并使自己免疫，直到你消灭所有的触手。克劳德的<strong>无尽斩 (Triple Slash)</strong> 对付这样的小怪群非常有效，因为斩击的力量会逐渐增强。一次无尽斩通常可以消灭 3 根触手。
                        </p>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                          你必须击败 3 波触手才能让杰诺瓦失去免疫力并陷入陷危。最终阶段与前两个阶段类似，只不过杰诺瓦可以传送。破坏触手并终结杰诺瓦。
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#ff3366]/50 p-4 rounded-lg border-l-4 border-l-[#ff3366]">
                      <h6 className="font-bold text-[#ff3366] mb-2 text-sm">⚠️ 重要装备提醒</h6>
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        在继续之前，我建议你<strong>为克劳德装备下面提到的 Boss 战 #3 的配置</strong>，并且<strong>为巴雷特和爱丽丝装备 Boss 战 #4 的配置</strong>。这样，如果你需要重试 Boss 战 #4，你就不必反复为战斗调整装备。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-18-13" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.13 Boss战 3：路法斯与暗黑猎犬 (Rufus and Darkstar)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在前往标记并爬上那条非常长的梯子之前先休息一下。克劳德必须独自进行这场战斗。
                    </p>

                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight #3: Rufus and Darkstar
                    </h4>
                    
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      接下来是克劳德单挑路法斯 (Rufus) 和暗黑猎犬 (Darkstar)。路法斯速度快得惊人，几乎不可能用近战攻击打中他。克劳德能积攒足够的 ATB 来维持治疗伤口就很幸运了。你绝对不想试图通过与路法斯互殴来赢得这场战斗。相反，我提供以下策略（基本策略来自 BltzZ 的 YouTube 视频。谢谢！）。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战前准备：克劳德最强配置</h5>
                      <p className="text-[13px] text-[#5c7e82] m-0 mb-3 italic">
                        首先，你应该意识到这个时机非常紧。如果出现任何一点差错，这可能就行不通了。没关系。重新开始并继续尝试，直到成功为止。相信我，这值得努力。这比试图和路法斯硬拼要容易得多。
                      </p>
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">装备克劳德以获得最大的攻击力和 ATB：</p>
                      <ul className="grid grid-cols-2 gap-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>愤怒戒指 (Fury Ring)</li>
                        <li>破甲大剑 (Hardedge)</li>
                        <li>ATB 增幅魔晶石 (ATB Boost Materia)</li>
                        <li>时间魔晶石 (Time Materia)</li>
                        <li>封印魔晶石 (Binding Materia)</li>
                        <li>先发制人魔晶石 (First Strike Materia)</li>
                        <li>中毒魔晶石 (Poison Materia)</li>
                        <li>火魔晶石 (Fire Materia)</li>
                        <li>伊弗利特魔晶石 (Ifrit Materia，为了获得 +4 攻击力提升)</li>
                      </ul>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-3 text-[15px]">战斗流程详解</h5>
                    <ul className="space-y-3 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li>战斗开始时，如果“先发制人”没有给克劳德至少 1.5 个 ATB 槽，你不如直接“重试 (Retry)”，因为 ATB 增幅不会给你需要的完整 ATB 槽。</li>
                      <li>一旦你以至少 1.5 个 ATB 槽开始战斗，让克劳德对自己施放<strong>急速 (Haste)</strong>，然后立即使用 <strong>ATB 增幅 (ATB Boost)</strong>。</li>
                      <li>暗黑猎犬和路法斯是“连接 (linked)”在一起的，你需要打破这个连接才能将暗黑猎犬移出战场。为此，执行一次<strong>无尽斩 (Triple Slash)</strong>，以暗黑猎犬开始（因此也以它结束）。这将立即让暗黑猎犬陷危，并且它的陷危状态会持续很长一段时间。</li>
                      <li>切换到勇穴模式并痛打暗黑猎犬，填满你的 ATB 槽。<strong>忽略路法斯</strong>，即使他攻击你。你希望在下一阶段开始时拥有 2 个完整的 ATB 槽。</li>
                      <li>当战斗进入下一阶段时，像之前一样执行另一次无尽斩。紧接着用<strong>无序交叉 (Disorder)</strong> 击中暗黑猎犬。除了造成一些伤害外，这将使克劳德切换到勇穴模式并恢复他的一些 ATB。</li>
                      <li>在勇穴模式下痛打暗黑猎犬直到他力竭，并解决掉他。同样，忽略路法斯。尽量在暗黑猎犬倒下时拥有 2 个完整的 ATB 槽。</li>
                      <li>当下一阶段开始时，<strong>对路法斯施放睡眠 (Sleep)</strong>。这只会生效一次，所以你必须确保接下来的操作万无一失。</li>
                      <li>站在打盹的路法斯旁边等待你的 ATB 充能。一旦你拥有 2 个 ATB 槽，使用一个槽用<strong>中级毒魔法 (Biora)</strong> 击中路法斯，用第二个槽用<strong>奋力一击 (Braver)</strong> 击中他。Braver 会立即让他力竭。</li>
                      <li>切换到勇穴模式并痛打路法斯，直到他的力竭槽几乎空了，然后用一发 Braver 击中他。Braver 有相当长的蓄力时间，所以请相应地计划。</li>
                      <li>如果你没有用你的第二发 Braver 解决掉路法斯，不要烦恼。一切都没有白费。中毒会为你做很多工作，但中毒不会将生命值降到 1 HP 以下。所以，如果路法斯快不行了，跑来跑去打防守，直到他的血条看起来空了。然后，下次他停下来重新装弹时，快速用火魔法击中他应该就能解决他。</li>
                    </ul>
                    <p className="text-[14px] text-[#5c7e82] m-0 italic">
                      （每当你有空余时间时，你应该尝试用常规方法打这场战斗，看看结果如何。）
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mt-6">
                      <p className="text-[14px] text-[#a5c3c7] m-0">
                        焦点将转移到巴雷特和爱丽丝身上。当他们在电梯里经过威吉 (Wedge) 时，注意屏幕左下角的菜单/□键符号。<strong>长按□键以便访问主菜单，并在本章最后一场战斗之前更换装备。</strong>（如果你忘记这样做，你可以直接在下一场战斗开始时选择“重试 Retry”）。
                      </p>
                    </div>
                  </div>

                  <h3 id="section-18-14" className="text-xl mt-8 mb-4 font-bold text-cyan-100">18.14 Boss战 4：百机兵装 (The Arsenal)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight #4: The Arsenal
                    </h4>
                    
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      最后一场战斗是面对百机兵装 (The Arsenal)。我曾经非常害怕这场战斗，因为我总是打得很挣扎。现在我更了解了它的运作方式，我意识到了我以前犯的错误，我发现它真的没那么难。
                    </p>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      我将对如何进行这场战斗的传统策略做一些微小的调整。为了尽量减少你需要阅读的内容，下面将对打法进行总结。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">战前准备</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>给一名团队成员装备<strong>陆行鸟与莫古力魔晶石 (Chocobo & Moogle Materia)</strong>。它们的最终攻击将对百机兵装造成巨大伤害。</li>
                        <li>给爱丽丝和巴雷特的武器都装备<strong>元素 - 雷霆 (Elemental - Lightning)</strong> 魔晶石配对。</li>
                        <li>给爱丽丝装备两个提升魔法魔晶石、两个提升 MP 魔晶石，以及几个提升 HP 魔晶石。</li>
                      </ul>
                      <p className="text-[13px] text-[#5c7e82] m-0 mt-3 italic border-t border-[#112a32] pt-2">
                        <strong>作者注：</strong>百机兵装弱所有 4 种元素，但屏障无人机弱雷，所以这个魔晶石配对将最大化对所有敌人和敌人部位的伤害。此外，你将不得不大量依赖普通攻击，这样你发动的每一次微弱攻击都会造成增加的伤害，而不是仅仅造成 1 点 HP 伤害。百机兵装可以启动“雷电防御协议”，这会使雷属性攻击对力竭槽的影响降低。然而，这个协议似乎并没有减少雷属性攻击造成的伤害。即使百机兵装使用这个协议，你仍然能够造成稳定增强的伤害。
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">第一阶段：屏障无人机 (Barrier Drones)</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">这场战斗的很大一部分是关于<strong>打防守</strong>。百机兵装会提前发出攻击信号，所以当你看到攻击即将到来时，躲在该区域众多的障碍物之一后面，等待百机兵装完成攻击，然后再出来攻击。不幸的是，百机兵装的许多攻击会摧毁这些障碍物，减少你躲藏的地方。这使得不必要地延长这场战斗变得更加危险。</p>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">百机兵装开始时有 3 架屏障无人机盘旋在它上方。在它们被消灭之前，你无法对百机兵装造成伤害。这是实现这一目标的最快方法：</p>
                        <ul className="space-y-1 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                          <li>让两名角色都通过躲避百机兵装的攻击来开始积攒一些 ATB。</li>
                          <li>观察百机兵装准备它的主炮开火 (Primary Fire) 或追踪激光 (Homing Laser) 攻击。当它这样做时，主炮或激光炮将作为目标出现。</li>
                          <li>发生这种情况时，使用你储存的 ATB 来攻击大炮。对大炮造成足够的伤害将导致 Red 立即击倒其中一架无人机，使其很容易被猛烈枪击或中级雷魔法 (Thundara) 消灭。</li>
                        </ul>
                        <p className="text-[14px] text-[#5c7e82] m-0 mt-2 italic">战斗的这一部分可能需要一些练习。如有必要，请重试直到你找到感觉。这就是为什么我们为这场战斗提前做好了装备准备。</p>
                      </div>

                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">第二阶段：轮子与百机兵装</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">当无人机消失后，轮子 (Wheels) 将成为可攻击的目标。不幸的是，除非百机兵装陷入陷危或力竭，否则它们对伤害有很高的抗性。</p>
                        <ul className="space-y-1 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                          <li>用常规攻击和雷属性魔法（最好是在圣魔阵中施放）猛烈攻击百机兵装，直到它陷入陷危。</li>
                          <li>当这种情况发生时，<strong>当且仅当</strong>你非常确定你的攻击会在陷危状态到期前命中时，才向其中一个轮子投掷雷魔法。如果不是这样，就瞄准百机兵装而不是轮子。</li>
                        </ul>
                        <p className="text-[13px] text-[#5c7e82] m-0 mt-3 italic border-t border-[#112a32] pt-2">
                          <strong>作者注：</strong>当百机兵装陷危时，Thundara 法术会对轮子造成大量伤害，从而增加百机兵装的力竭值。不幸的是，很难预测百机兵装何时会陷危，而且当它陷危时，你需要同时拥有 ATB 并且最好靠近圣魔阵。如果陷危状态在 Thundara 命中之前到期，它对轮子的伤害将非常小，你基本上就浪费了一个 ATB 槽。在大多数情况下，我发现求稳并使用我的 ATB 进行瞄准百机兵装的满腔怒火或雷属性法术是更好的选择。
                        </p>
                      </div>

                      <div className="bg-[#04151a] border border-[#ff3366]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-[#ff3366] mb-2 text-sm">最终阶段：加农炮 (Cry Havoc)</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">当百机兵装的 HP 低于 15% 时，它将使用一种名为<strong>加农炮 (Cry Havoc)</strong> 的攻击。</p>
                        <ul className="space-y-1 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal">
                          <li>当你看到这个在蓄力时，<strong>立即寻找掩体</strong>，否则这次攻击将消灭你的整个团队。这次攻击将摧毁你用来做掩体的任何障碍物。</li>
                          <li>如果可能的话，你想在加农炮<strong>之前</strong>召唤陆行鸟与莫古力，这样它们就会在战斗结束前发动最终攻击。</li>
                          <li>百机兵装随后将开始再次为加农炮蓄力。<strong>你有 45 秒的时间</strong>全力攻击百机兵装并在它再次使用加农炮消灭你的整个团队之前终结它。</li>
                          <li>百机兵装在为加农炮蓄力时不会攻击，所以设置一个圣魔阵，让爱丽丝和巴雷特都双重施放中级雷魔法/最高级雷魔法，在你被消灭前用来解决百机兵装的短时间内造成最大伤害。</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 id="section-19" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                     <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                     十九、第十八章：命运的奇点 (Destiny's Crossroads)
                  </h2>

                  <h3 id="section-19-1" className="text-xl mt-8 mb-4 font-bold text-cyan-100">19.1 核心注意事项</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <ul className="space-y-3 text-[15px] text-[#a5c3c7] m-0 pl-4 list-disc">
                      <li className="font-bold text-[#ff3366]">没有迷宫，没有收集品，也没有支线任务！这一章全都是关于战斗的。</li>
                      <li>我们在这一章没有任何特别的东西需要获取。</li>
                      <li>在普通模式 (Normal Mode) 下，本章相当简单。但是，如果你稍后在困难模式 (Hard Mode) 下尝试它，它将是你所面临的最困难的挑战之一。</li>
                    </ul>
                  </div>

                  <h3 id="section-19-2" className="text-xl mt-8 mb-4 font-bold text-cyan-100">19.2 摩托车追逐与“摩托车骑手”奖杯</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：逃脱 (Flying the Coop)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这一章以摩托车追逐开始。如果在第 4 章中，当你获得“机车男孩 (Biker Boy)”奖杯时，你发现很难将生命值保持在 80% 以上，那么你可能会发现这一段很难生存。
                    </p>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">摩托车追逐策略：</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li><strong>防守为主：</strong>和上次一样，按住 L1 键在你的屏幕上打出一个大大的隐形盾牌，以躲避近战攻击或偏转远距离攻击。这对于阻挡来自直升机的炮火尤其有效。</li>
                        <li><strong>对付特种兵机车手 (SOLDIER Biker)：</strong>你将多次遇到特种兵机车手。你需要小心他的一连串旋转攻击，所以尽可能防守，并在他停止旋转时再发起攻击。如果你能击中他几次，他的攻击将会被打断。你可以趁机多打几下，但你最好的选择仍然是保存 HP。</li>
                      </ul>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">摩托车追逐 Boss 战：马达球 (Motor Ball)</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">
                      这台机器有六个可以作为攻击目标的轮子，并且有 2 种你应该能够识别和规避的强大攻击：
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc mb-6">
                      <li><strong>猛烈撞击：</strong>boss 的前部会向下倾斜。当这种情况发生时，你需要迅速减速。</li>
                      <li><strong>喷火：</strong>它会从后方喷出火焰。如果你紧跟其后，你会被烤熟的。要么退后，要么绕到旁边。</li>
                    </ul>
                    
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4 font-bold border-l-4 border-l-[#00f0ff] pl-3 bg-[#080d14]/50 p-3">
                      当其中一个轮子发出蓝光时，你可以造成最大的伤害。用你的剑（使用 L1 + △ 的重击）或用远程攻击击中那些发光的轮子，boss 很快就会力竭。尽情倾泻伤害，重复以上步骤。
                    </p>
                  </div>

                  <h3 id="section-19-3" className="text-xl mt-8 mb-4 font-bold text-cyan-100">19.3 菲拉 Boss 连战准备</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-cyan-300 mb-3">📍 目标：转折点 (The Turning Point)</h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      一段剧情过后，你将在接下来的大部分章节中与那些像斗篷一样的命运仲裁者（菲拉 Whispers）战斗。一旦你能控制克劳德，在前进之前按住 L1 键治疗并设置你的装备。
                    </p>
                    
                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#ff3366]/50 p-4 rounded-lg border-l-4 border-l-[#ff3366] mb-6">
                      <h5 className="font-bold text-[#ff3366] mb-2 text-sm">⚠️ 极其重要的魔晶石搭配</h5>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>在接下来的部分中，每个角色的首要任务是<strong>在防具上</strong>装备最高级的属性魔晶石 (Elemental Materia) 以及<strong>冰 (Ice)、雷 (Lightning) 或火 (Fire)</strong> 魔晶石。</li>
                        <li>当这些“命运仲裁者”用带有这三种元素之一的攻击打击你时，这种配对将大大减少甚至消除伤害，而这会经常发生。</li>
                        <li>由于你的属性魔晶石可能尚未达到最高级别（满级可吸收伤害转化为 HP），并且你将不可避免地受到许多无法用这种方式偏转的物理攻击，因此要让每个人尽可能装备治疗魔晶石 (Healing) 或气卦魔晶石 (Chakra)。</li>
                      </ul>
                    </div>

                    <h5 className="font-bold text-[#00f0ff] mb-2 text-[15px]">认识菲拉三兄弟</h5>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-3">你将主要对抗以下三个实体。记住每个实体对应的元素（以及它所弱的元素）：</p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-none mb-6">
                      <li>🔴 <strong>菲拉·红莲 (Whisper Rubrum)</strong> — 代表火 (Fire)，弱冰 (Ice)。</li>
                      <li>🟢 <strong>菲拉·碧翠 (Whisper Viridi)</strong> — 代表风 (Wind)，弱雷 (Lightning)。</li>
                      <li>🟡 <strong>菲拉·黄琥 (Whisper Croceo)</strong> — 代表雷 (Lightning)，弱风 (Wind)。</li>
                    </ul>

                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-3">
                      ⚔️ 命运仲裁者连战 (The Whisper Battles)
                    </h4>
                    <p className="text-[14px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      在这场涉及多阶段、跨越整个区域并具有不断变化的伤害容忍度的长时间战斗中，很难提供精确的指导，但我将强调需要注意的事项。
                    </p>
                    
                    <div className="space-y-4 mb-4">
                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          首先，你需要将这三个菲拉各击败三次。第一次，它们会“力竭”，你需要用攻击痛击它们。在这三个家伙每次都受到一次这样的对待后，巨大无比的<strong>菲拉·普拉格 (Whisper Harbinger)</strong> 将会陷危 (Pressured)。向那个大家伙倾泻你的攻击。
                        </p>
                      </div>

                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          在这之后，你将再次需要将较小的菲拉的 HP 降至零。不过这一次，只有普拉格陷危，你可以对那三个小家伙造成尽可能多的伤害。
                        </p>
                      </div>

                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          第三次，击败一个小家伙会导致它彻底消失，而且这样做会对普拉格造成巨大伤害。
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 id="section-19-4" className="text-xl mt-8 mb-4 font-bold text-cyan-100">19.4 Boss战：菲拉·巴哈姆特 (Whisper Bahamut)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这第三阶段会被下面描述的 Boss 战打断。在这场战斗之前，一定要储备尽可能多的满格 ATB 槽，并在提示时治疗。
                    </p>

                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> Boss Fight: Whisper Bahamut
                    </h4>

                    <div className="bg-[#080d14]/90 backdrop-blur-md border border-[#112a32] p-4 rounded-lg mb-6">
                      <p className="text-[14px] text-[#a5c3c7] m-0 mb-3">
                        三个小家伙会暂时合并成一头龙。是的，那是<strong>巴哈姆特 (Bahamut)</strong>。它保留了它的标志性动作——<strong>百万核爆 (Megaflare)</strong>，这可以在一击中消灭你的整个团队。
                      </p>
                      <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-disc">
                        <li>在百万核爆完全充能并发射之前，你需要削减它相当多的生命值以使其力竭。不要保留任何实力，否则后果自负。如果需要的话使用魔法，但此时近战技能可能会造成更大的伤害。</li>
                        <li>当巨龙力竭时，全力以赴倾泻伤害直到它解体，再次分裂成那三个小家伙。然后继续分别击败它们三个。如果你的魔法值在第一场或第二场战斗后没有恢复，你可能会想要使用以太 (Ether)。</li>
                        <li>当第三个小家伙消失时，普拉格将再次陷危。集中你剩余的 ATB 发动一次全面的攻击，直到最后它消失在一团光芒中。</li>
                      </ul>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3">
                      准备好进行最终战。在最终战之前不要忘记利用你的 PHS 终端并设置你的装备。
                    </p>
                  </div>

                  <h3 id="section-19-5" className="text-xl mt-8 mb-4 font-bold text-cyan-100">19.5 最终 Boss 战：萨菲罗斯 (Sephiroth)</h3>
                  <div className="bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] p-6 rounded-lg my-6">
                    <h4 className="font-bold text-[#ff3366] drop-shadow-[0_0_8px_rgba(255,51,102,0.6)] mb-4 flex items-center gap-2">
                      <span>⚔️</span> 最终 Boss 战：萨菲罗斯 (Sephiroth)
                    </h4>
                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 mb-4">
                      这一战有 4 个阶段，难度逐渐增加。前两个阶段只涉及克劳德和爱丽丝，并且并不难。在这两个阶段中，你要尽量多做以下两件事：
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#a5c3c7] m-0 pl-4 list-decimal mb-6">
                      <li><strong>尽可能多地保存你的 MP。</strong>之后你会有更好的用处。</li>
                      <li><strong>让萨菲罗斯陷危并使其力竭 (Stagger)。</strong>如果你能在这个阶段让他力竭，接下来的战斗会容易得多。</li>
                    </ul>

                    <div className="space-y-4 mb-6">
                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">阶段 1 与阶段 2</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                          最安全的策略是切换到爱丽丝并让她充当治疗者。让她用普通攻击进行远距离攻击。这会建立她的 ATB（以防你需要治疗）并将萨菲罗斯的注意力从克劳德身上引开。一旦他的注意力被转移，克劳德可以用他的勇穴模式或技能从侧面或后面安全地攻击，建立力竭槽。如果克劳德受伤了，爱丽丝可以在他打架时治疗他。
                        </p>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                          如果这种方法不起作用，并且萨菲罗斯持续攻击克劳德，那么切换到克劳德的勇穴模式并只进行防守。他的防御会反击许多萨菲罗斯最强的攻击（但不包括萨菲罗斯的魔法攻击！），如果他受到太多伤害，爱丽丝可以在安全距离外提供支持。
                        </p>
                      </div>

                      <div className="bg-[#04151a] border border-[#00f0ff]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-300 mb-2 text-sm">阶段 3</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                          第三阶段以萨菲罗斯使用基于元素的攻击开始。这通常意味着蒂法的到来，尽管有时是巴雷特。无论哪种方式，第三名团队成员都会加入。由于你的团队现在至少对其中一种元素有抗性，这场战斗可能会很容易也可能会很难，这取决于萨菲罗斯决定使用哪种元素。如果他碰巧使用了你装备的属性防具所对应的元素魔法，请大声感谢你的幸运星。
                        </p>
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          这是释放你的<strong>极限技 (Limit Breaks)</strong> 和任何其他你能掌握的攻击的时候了。如果你有召唤兽可用，现在也是引入它的好时机。
                        </p>
                      </div>

                      <div className="bg-[#04151a] border border-[#ff3366]/30 p-4 rounded-lg">
                        <h5 className="font-bold text-[#ff3366] mb-2 text-sm">阶段 4 与 无心天使 (Heartless Angel)</h5>
                        <p className="text-[14px] text-[#a5c3c7] m-0 mb-2">
                          最后阶段开始于巴雷特（如果蒂法早点加入的话）加入战斗。萨菲罗斯将使用一个名为“无心天使 (Heartless Angel)”的动作，这不可避免地会<strong>将除了他当前目标之外的所有人的生命值降低到 1 HP</strong>。你无能为力，只能忍受。当生命值较低时，他也可以再次使用它。
                        </p>
                        <p className="text-[14px] text-[#a5c3c7] m-0">
                          然而，这也是你的队伍可以释放他们在前几个阶段中储备的所有魔法（以及他们的 MP）的时候。使用所有的 3 级法术攻击他，萨菲罗斯应该很快就会被击败。
                        </p>
                      </div>
                    </div>

                    <p className="text-[15px] text-[#a5c3c7] leading-relaxed m-0 font-bold border-l-4 border-l-[#00f0ff] pl-3 text-[#ff3366]">
                      恭喜你！你刚刚完成了《最终幻想7 重制版》的主要故事。欣赏结尾的过场动画吧。
                    </p>
                  </div>

                 {/* Final Fantasy 7 Remake Trophies Link */}
                 <h2 id="section-trophies" className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                    <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                    奖杯指南
                 </h2>
                 <Link 
                   to="/final-fantasy-7-remake/trophies"
                   className="block bg-[#080d14]/90 backdrop-blur-md rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#112a32] p-6 hover:border-[#00f0ff] mb-12"
                 >
                   <div className="flex items-center gap-4">
                     <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#0055ff] flex items-center justify-center shrink-0">
                       <Trophy className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-cyan-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] mb-2">
                         《最终幻想7 重制版》完整奖杯指南
                       </h3>
                       <p className="text-[#a5c3c7]">
                         包含所有白金、金、银、铜奖杯的详细获取条件与白金路线图。
                       </p>
                     </div>
                   </div>
                 </Link>

                 <h2 className="text-2xl mt-12 mb-6 ff7r-heading group cursor-pointer text-[#e0f7fa]">
                    <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 absolute w-6 text-center font-normal">#</span>
                    更多精彩内容
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                   {recommendedGames.map((item, index) => (
                     <Link 
                       key={index} 
                       to={`/${item.slug || item.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-\u4e00-\u9fa5]+/g, '').replace(/\-\-+/g, '-')}`}
                       className="group block bg-[#080d14]/90 backdrop-blur-md rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#112a32]"
                     >
                       <div className="aspect-video w-full overflow-hidden relative">
                         <img 
                           src={item.imgUrl} 
                           alt={item.title} 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                         />
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                       </div>
                       <div className="p-4">
                         <h3 className="font-bold text-cyan-300 group-hover:text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-colors truncate">
                           {item.title}
                         </h3>
                         <p className="text-xs text-[#5c7e82] mt-1">{item.author}</p>
                       </div>
                     </Link>
                   ))}
                 </div>
                  
                  <hr className="my-12 border-[#112a32]" />
                 </>
             </div>
          </article>
          
          {/* Sidebar */}
          <aside className="w-[300px] hidden lg:block shrink-0 space-y-6 sticky top-[100px] h-fit self-start">
             {/* Author Card */}
             <div className="ff7r-card p-6 shadow-[0_0_20px_rgba(0,255,255,0.15)] border border-[#112a32] hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]-hover transition-all group">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-[#112a32] group-hover:ring-2 group-hover:ring-sspai-red/20 transition-all">
                   <img src={squareEnixLogo} alt={game.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-base text-cyan-300 truncate">{game.author}</h3>
                   <p className="text-xs text-gray-400 font-medium truncate">知名游戏开发商</p>
                 </div>
               </div>
               <a 
                 href="https://www.square-enix.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-2 bg-[#080d14]/90 backdrop-blur-md border border-[#00f0ff] text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] font-bold rounded-full text-sm hover:bg-[#00f0ff] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
               >
                  <span>打开官网</span>
               </a>
             </div>

             {/* TOC */}
              <div className="ff7r-card p-6 shadow-[0_0_20px_rgba(0,255,255,0.15)] border border-[#112a32] sticky top-4 flex flex-col">
                <h3 className="font-bold text-cyan-300 mb-4 pl-1 text-[15px] flex items-center justify-between shrink-0">
                  目录
                  <span className="text-xs font-bold text-white bg-[#00f0ff] px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                </h3>
                
                <nav className="space-y-1 relative pr-2 flex-1">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#0e222b]"></div>
                 
                 {tocTree.map((parent) => {
                   const isParentActive = activeSection === parent.id;
                   const hasChildren = parent.children && parent.children.length > 0;
                   const isChildActive = parent.children ? parent.children.some(child => child.id === activeSection) : false;
                   
                   // Determine if expanded: manual toggle > active state > collapsed default
                   const isExpanded = expandedSections[parent.id] !== undefined 
                     ? expandedSections[parent.id] 
                     : (isParentActive || isChildActive);
                   
                   return (
                     <div key={parent.id} className="relative">
                       <div className="flex items-center group relative">
                         <a 
                           href={`#${parent.id}`}
                           onClick={(e) => scrollToSection(e, parent.id)}
                           className={`
                             flex-1 block py-2 pr-10 transition-all relative z-10 rounded-r border-l-[3px] pl-6 text-[14px] flex items-center justify-between
                             ${(isParentActive || isChildActive)
                               ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] font-bold bg-[#00f0ff]/10 border-[#00f0ff] shadow-sm' 
                               : 'text-[#5c7e82] hover:text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] hover:bg-[#0c1821] border-transparent hover:border-[#1a3a40] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors z-20 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] hover:bg-[#00f0ff]/20' 
                                 : 'text-gray-400 hover:text-[#7ea1a6] hover:bg-[#0e222b]'}`}
                           >
                             {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                           </button>
                         )}
                       </div>

                       {/* Children */}
                       {hasChildren && isExpanded && (
                         <div className="space-y-1 mt-1 transition-all duration-300 ease-in-out">
                           {parent.children.map(child => {
                             const isCurrentChildActive = activeSection === child.id;
                             return (
                               <a 
                                 key={child.id}
                                 href={`#${child.id}`}
                                 onClick={(e) => scrollToSection(e, child.id)}
                                 className={`
                                   block py-1.5 pr-3 transition-all relative z-10 rounded-r border-l-[3px] pl-9 text-[13px]
                                   ${isCurrentChildActive 
                                     ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] font-bold bg-[#00f0ff]/10/50 border-[#00f0ff]' 
                                     : 'text-[#5c7e82] hover:text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] hover:bg-[#0c1821] border-transparent hover:border-[#1a3a40]'}
                                 `}
                               >
                                 {child.title}
                               </a>
                             );
                           })}
                         </div>
                       )}
                     </div>
                   );
                 })}
               </nav>
             </div>

          </aside>
       </main>
       
       {/* Mobile Bottom Floating Bar */}
       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-[#080d14]/90 backdrop-blur-md/95 backdrop-blur-md border border-[#1a3a40] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full z-40 lg:hidden px-6 py-3 flex items-center justify-between">
         <div className="flex items-center gap-8">
           <button 
             onClick={() => setIsShareOpen(true)}
             className="flex flex-col items-center justify-center text-[#a5c3c7] hover:text-[#e0f7fa] transition-colors"
           >
             <Share2 size={22} />
           </button>
           <button 
             onClick={handleLike}
             className="flex flex-col items-center justify-center transition-colors relative"
           >
             <div className="relative">
               <Heart 
                 size={22} 
                 className={`transition-colors duration-300 ${isLiked ? 'fill-[#00f0ff] text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]' : 'text-[#a5c3c7] hover:text-[#e0f7fa]'}`}
               />
               <span className="absolute -top-2 -right-3 text-[10px] font-bold text-yellow-500 leading-none">
                 {likes > 99 ? '99+' : likes}
               </span>
             </div>
           </button>
         </div>
         <button 
           onClick={() => setIsTocOpen(true)}
           className="flex items-center justify-center text-[#a5c3c7] hover:text-[#e0f7fa] transition-colors"
         >
           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
         </button>
       </div>

       {/* Mobile TOC Bottom Sheet */}
       {isTocOpen && (
         <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/50 transition-opacity"
             onClick={() => setIsTocOpen(false)}
           />
           
           {/* Sheet */}
           <div className="relative bg-[#080d14]/90 backdrop-blur-md w-full max-h-[80vh] rounded-t-2xl shadow-xl flex flex-col animate-slide-up">
             {/* Handle */}
             <div className="flex justify-center pt-3 pb-2 cursor-pointer" onClick={() => setIsTocOpen(false)}>
               <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
             </div>
             
             {/* Header */}
             <div className="px-6 pb-4 border-b border-[#112a32] flex items-center justify-between">
               <h3 className="font-bold text-cyan-300 text-lg flex items-center gap-2">
                 <BookOpen size={18} className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
                 目录
               </h3>
               <div className="flex items-center gap-3">
                 <span className="text-xs font-bold text-white bg-[#00f0ff] px-2 py-0.5 rounded-full shadow-sm">{readingProgress}%</span>
                 <button onClick={() => setIsTocOpen(false)} className="text-gray-400 hover:text-[#7ea1a6]">
                   <X size={20} />
                 </button>
               </div>
             </div>
             
             {/* TOC Content */}
             <div className="overflow-y-auto p-4 pb-12 custom-scrollbar">
               <nav className="space-y-1 relative pr-2 flex-1">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#0e222b]"></div>
                 
                 {tocTree.map((parent) => {
                   const isParentActive = activeSection === parent.id;
                   const hasChildren = parent.children && parent.children.length > 0;
                   const isChildActive = parent.children ? parent.children.some(child => child.id === activeSection) : false;
                   
                   const isExpanded = expandedSections[parent.id] !== undefined 
                     ? expandedSections[parent.id] 
                     : (isParentActive || isChildActive);
                   
                   return (
                     <div key={parent.id} className="relative">
                       <div className="flex items-center group relative">
                         <a 
                           href={`#${parent.id}`}
                           onClick={(e) => {
                             scrollToSection(e, parent.id);
                             setIsTocOpen(false);
                           }}
                           className={`
                             flex-1 block py-3 pr-10 transition-all relative z-10 rounded-r border-l-[3px] pl-6 text-[15px] flex items-center justify-between
                             ${(isParentActive || isChildActive)
                               ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] font-bold bg-[#00f0ff]/10 border-[#00f0ff] shadow-sm' 
                               : 'text-[#5c7e82] hover:text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] hover:bg-[#0c1821] border-transparent hover:border-[#1a3a40] font-medium'}
                           `}
                         >
                           <span className="truncate">{parent.title}</span>
                         </a>

                         {hasChildren && (
                           <button
                             onClick={(e) => toggleSection(e, parent.id, !isExpanded)}
                             className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md transition-colors z-20 
                               ${(isParentActive || isChildActive) 
                                 ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] hover:bg-[#00f0ff]/20' 
                                 : 'text-gray-400 hover:text-[#7ea1a6] hover:bg-[#0e222b]'}`}
                           >
                             {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                           </button>
                         )}
                       </div>

                       {hasChildren && isExpanded && (
                         <div className="space-y-1 mt-1 transition-all duration-300 ease-in-out">
                           {parent.children.map(child => {
                             const isCurrentChildActive = activeSection === child.id;
                             return (
                               <a 
                                 key={child.id}
                                 href={`#${child.id}`}
                                 onClick={(e) => {
                                   scrollToSection(e, child.id);
                                   setIsTocOpen(false);
                                 }}
                                 className={`
                                   block py-2 pr-3 transition-all relative z-10 rounded-r border-l-[3px] pl-9 text-[14px]
                                   ${isCurrentChildActive 
                                     ? 'text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] font-bold bg-[#00f0ff]/10/50 border-[#00f0ff]' 
                                     : 'text-[#5c7e82] hover:text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] hover:bg-[#0c1821] border-transparent hover:border-[#1a3a40]'}
                                 `}
                               >
                                 {child.title}
                               </a>
                             );
                           })}
                         </div>
                       )}
                     </div>
                   );
                 })}
               </nav>
             </div>
           </div>
         </div>
       )}

       {/* Mobile Share Bottom Sheet */}
       {isShareOpen && (
         <div className="fixed inset-0 z-50 flex flex-col justify-end">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/50 transition-opacity"
             onClick={() => setIsShareOpen(false)}
           />
           
           {/* Sheet */}
           <div className="relative bg-[#0c1821] border border-[#163840] shadow-[inset_0_0_20px_rgba(0,255,255,0.02)] w-full rounded-t-2xl shadow-xl flex flex-col animate-slide-up pb-safe">
             {/* Header Card */}
             <div className="bg-[#080d14]/90 backdrop-blur-md rounded-t-2xl p-4 shadow-sm relative z-10">
               <button 
                 onClick={() => setIsShareOpen(false)} 
                 className="absolute top-4 right-4 text-gray-400 hover:text-[#7ea1a6] z-20"
               >
                 <X size={24} />
               </button>
               
               <div className="flex items-center gap-3 pr-10">
                 <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#112a32] shadow-sm shrink-0">
                   <img src={ff7rCover} alt="Final Fantasy 7 Remake Cover" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-cyan-300 text-[15px] truncate">
                     {game.title} 终极攻略指南
                   </h3>
                   <p className="text-[#5c7e82] text-xs truncate mt-0.5">
                     {getShareUrl()}
                   </p>
                 </div>
               </div>
             </div>
             
             {/* Share Options Grid */}
             <div className="p-6 relative z-10">
               <div className="grid grid-cols-4 gap-y-6 gap-x-4 mb-6">
                 {/* Row 1 */}
                 <button 
                   onClick={handleWechatShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#080d14]/90 backdrop-blur-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#07C160]" fill="currentColor">
                       <path d="M8.2,16.5C3.7,16.5,0,13.2,0,9.1C0,5.1,4.1,1.8,8.8,1.8c4.6,0,8.4,3.3,8.4,7.4C17.2,13.2,13.2,16.5,8.2,16.5z M5.4,6.1 c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1C6.4,6.5,5.9,6.1,5.4,6.1z M11.5,6.1c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1 c0.6,0,1-0.5,1-1C12.6,6.5,12.1,6.1,11.5,6.1z"/>
                       <path d="M24,13.6c0-3.3-3.2-5.9-7.1-5.9c-0.3,0-0.6,0-0.9,0.1c0.8,0.8,1.2,1.8,1.2,2.8c0,3.7-3.4,6.6-7.5,6.6 c-0.5,0-0.9-0.1-1.4-0.2c1.1,2.5,4.3,4.2,7.7,4.2C20.4,21.1,24,17.7,24,13.6z M15.1,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C15.9,11.7,15.6,11.3,15.1,11.3z M19.9,11.3c-0.5,0-0.8,0.4-0.8,0.8 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8C20.7,11.7,20.3,11.3,19.9,11.3z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-[#7ea1a6]">微信</span>
                 </button>
                 <button 
                   onClick={handleWechatShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#080d14]/90 backdrop-blur-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <div className="relative w-8 h-8 rounded-full border-[3px] border-[#07C160] border-t-[#FCBE22] border-r-[#FCBE22] rotate-45 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#FA5151]"></div>
                     </div>
                   </div>
                   <span className="text-[11px] text-[#7ea1a6]">朋友圈</span>
                 </button>
                 <button 
                   onClick={handleWeiboShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#080d14]/90 backdrop-blur-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                     <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#E6162D]" fill="currentColor">
                       <path d="M21.2,10.6c-0.7-1.4-2.1-2.4-3.6-2.6c-0.3-0.1-0.6-0.1-1-0.1c0.2-0.5,0.3-1,0.3-1.6c0-1.8-1.5-3.3-3.3-3.3 c-1.2,0-2.3,0.7-2.9,1.7c-0.3-0.3-0.8-0.5-1.2-0.5c-1,0-1.9,0.8-1.9,1.9c0,0.3,0.1,0.6,0.2,0.9C7.4,6.7,7,6.6,6.5,6.6 c-2.4,0-4.3,2-4.3,4.4c0,1,0.3,1.9,0.9,2.6c-0.5,0.7-0.7,1.5-0.7,2.4c0,2.4,2,4.4,4.4,4.4c1.1,0,2.1-0.4,2.9-1 c0.8,0.7,1.9,1.2,3.1,1.2c2.7,0,4.9-2.2,4.9-4.9c0-0.4-0.1-0.8-0.2-1.2C20.1,14,21.8,12.5,21.2,10.6z M17.6,15.7 c-0.6,1.4-1.9,2.4-3.4,2.7c-1.3,0.3-2.6,0-3.6-0.6c-0.4-0.2-0.8-0.5-1.1-0.8c-0.4,0.4-1,0.6-1.6,0.6c-1.4,0-2.6-1.1-2.6-2.6 c0-0.7,0.3-1.4,0.8-1.8c0.2-0.2,0.5-0.4,0.8-0.5C5.8,11.9,5,10.5,5,8.9c0-1.8,1.5-3.3,3.3-3.3c1,0,1.8,0.4,2.5,1.1 c0.3-0.5,0.8-0.8,1.4-0.8c0.9,0,1.6,0.7,1.6,1.6c0,0.2-0.1,0.4-0.2,0.6C14.7,7.8,15.6,8.8,15.6,10c0,0.5-0.1,0.9-0.3,1.3 c1.5-0.1,2.8,0.8,3.3,2.1C19.1,14.3,18.5,15.2,17.6,15.7z"/>
                     </svg>
                   </div>
                   <span className="text-[11px] text-[#7ea1a6]">微博</span>
                 </button>
                 <div className="hidden sm:block"></div> {/* Spacer for alignment if needed, or 4th item */}
                 
                 {/* Row 2 */}
                 <button 
                   onClick={handleSaveImage}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#080d14]/90 backdrop-blur-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-cyan-100">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                   </div>
                   <span className="text-[11px] text-[#7ea1a6]">保存图片</span>
                 </button>
                 <button 
                   onClick={handleCopyLink}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#080d14]/90 backdrop-blur-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-cyan-100 relative">
                     {copySuccess ? (
                       <span className="text-green-500 font-bold text-sm">已复制</span>
                     ) : (
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                     )}
                   </div>
                   <span className="text-[11px] text-[#7ea1a6]">复制链接</span>
                 </button>
                 <button 
                   onClick={handleSystemShare}
                   className="flex flex-col items-center gap-2 group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-[#080d14]/90 backdrop-blur-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-cyan-100">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                   </div>
                   <span className="text-[11px] text-[#7ea1a6]">系统分享</span>
                 </button>
               </div>
             </div>
           </div>
         </div>
       )}

       {/* Footer */}
       <Footer />
    </div>
  );
}
