import React from 'react';
import { ShoppingBag, Package, Globe, ExternalLink } from 'lucide-react';

const GameAffiliateLinks = ({ taobao, jd, playAsia }) => {
  if (!taobao && !jd && !playAsia) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2 text-sm">
      <span className="text-gray-400 font-medium whitespace-nowrap">🛒 购买渠道：</span>
      
      {taobao && (
        <a 
          href={taobao} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-[#ff5000]/10 text-[#ff5000] hover:bg-[#ff5000]/20 transition-colors border border-[#ff5000]/20 text-[12px] md:text-sm whitespace-nowrap flex-shrink-0"
        >
          <ShoppingBag size={14} className="w-3 h-3 md:w-3.5 md:h-3.5" />
          <span>淘宝</span>
        </a>
      )}

      {jd && (
        <a 
          href={jd} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-[#e1251b]/10 text-[#e1251b] hover:bg-[#e1251b]/20 transition-colors border border-[#e1251b]/20 text-[12px] md:text-sm whitespace-nowrap flex-shrink-0"
        >
          <Package size={14} className="w-3 h-3 md:w-3.5 md:h-3.5" />
          <span>京东</span>
        </a>
      )}

      {playAsia && (
        <a 
          href={playAsia} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-[#0052cc]/10 text-[#5495ff] hover:bg-[#0052cc]/30 transition-colors border border-[#0052cc]/30 text-[12px] md:text-sm whitespace-nowrap flex-shrink-0"
        >
          <Globe size={14} className="w-3 h-3 md:w-3.5 md:h-3.5" />
          <span>Play-Asia</span>
        </a>
      )}
    </div>
  );
};

export default GameAffiliateLinks;
