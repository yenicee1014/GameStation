import React from 'react';
import { tlou2GuideData } from '../data/tlou2-guide';
import { MapPin, BookOpen, Key, Disc, ScrollText, Hammer, Lock, ShieldAlert } from 'lucide-react';

const Tlou2Guide = () => {
  // Helper to render stats icons
  const renderStats = (stats) => {
    if (!stats) return null;
    return (
      <div className="flex flex-wrap gap-3 mt-2 mb-4 text-xs text-gray-400">
        {stats.artifacts && <span className="flex items-center gap-1"><ScrollText size={14} /> 文物: {stats.artifacts}</span>}
        {stats.tradingCards && <span className="flex items-center gap-1"><Disc size={14} /> 卡牌: {stats.tradingCards}</span>}
        {stats.coins && <span className="flex items-center gap-1"><Disc size={14} /> 硬币: {stats.coins}</span>}
        {stats.journalEntries && <span className="flex items-center gap-1"><BookOpen size={14} /> 日志: {stats.journalEntries}</span>}
        {stats.workbenches && <span className="flex items-center gap-1"><Hammer size={14} /> 工作台: {stats.workbenches}</span>}
        {stats.safes && <span className="flex items-center gap-1"><Lock size={14} /> 保险箱: {stats.safes}</span>}
        {stats.trainingManuals && <span className="flex items-center gap-1"><BookOpen size={14} /> 手册: {stats.trainingManuals}</span>}
        {stats.weapons && <span className="flex items-center gap-1"><ShieldAlert size={14} /> 武器: {stats.weapons}</span>}
      </div>
    );
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20">
      <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-bold mb-4 text-white">全收集与白金流程攻略</h2>
        <p className="text-gray-400 mb-4">
          本攻略按章节顺序排列，涵盖所有文物、卡牌、硬币、日志、工作台、保险箱、武器和手册。
          <br />
          <span className="text-yellow-500 text-sm">提示：点击右下角的“返回顶部”可快速导航。</span>
        </p>
      </div>

      {tlou2GuideData.map((chapter) => (
        <div key={chapter.id} className="bg-zinc-900/80 rounded-xl border border-zinc-800 overflow-hidden shadow-lg">
          <div className="bg-zinc-800/80 p-4 border-b border-zinc-700">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="text-yellow-500" size={20} />
              {chapter.title}
            </h3>
          </div>
          
          <div className="p-6">
            {chapter.isTable ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-400">
                  <thead className="bg-zinc-950 text-gray-200 uppercase">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg">章节</th>
                      <th className="px-4 py-3">位置</th>
                      <th className="px-4 py-3">密码</th>
                      <th className="px-4 py-3 rounded-tr-lg">奖励</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {chapter.content.map((item, index) => (
                      <tr key={index} className="hover:bg-zinc-800/50 transition-colors">
                        <td className="px-4 py-3 font-medium text-white">{item.chapter}</td>
                        <td className="px-4 py-3">{item.location}</td>
                        <td className="px-4 py-3 font-mono text-yellow-400 text-lg">{item.code}</td>
                        <td className="px-4 py-3">{item.reward}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="space-y-8">
                {chapter.sections ? (
                  chapter.sections.map((section, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-zinc-700">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-700 border-4 border-zinc-900"></div>
                      <h4 className="text-lg font-semibold text-gray-200 mb-2">{section.title}</h4>
                      {renderStats(section.stats)}
                      
                      <div className="space-y-4">
                        {section.content.map((item, itemIdx) => (
                          <div key={itemIdx} className="bg-black/20 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                            <div className="flex gap-3">
                              <div className="mt-1 min-w-[20px]">
                                {item.type === 'collectible' && <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>}
                              </div>
                              <div>
                                {item.name && <h5 className="text-white font-medium mb-1">{item.name}</h5>}
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description || item.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                   <div className="space-y-4">
                        {chapter.content.map((item, itemIdx) => (
                          <div key={itemIdx}>
                             <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                          </div>
                        ))}
                   </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tlou2Guide;
