import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import alipayImage from '../assets/Alipay-payme.JPG';
import wechatImage from '../assets/WeChat-payme.JPG';
import logo from '../../picture/logo.svg';

const Footer = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <Link to="/" className="site-footer__logo">
              <img src={logo} alt="GameStation" />
            </Link>
          </div>
          <div className="site-footer__grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="site-footer__col">
              <div className="site-footer__title">关于</div>
              <Link className="site-footer__link" to="/about">关于 GameStation</Link>
            </div>
            <div className="site-footer__col">
              <div className="site-footer__title">支持</div>
              <a className="site-footer__link" href="https://centurypaw.com">联系开发者</a>
            </div>
            <div className="site-footer__col">
              <div className="site-footer__title">资源</div>
              <a className="site-footer__link" href="https://www.playstation.com/zh-hans-cn/" target="_blank" rel="noopener noreferrer">PS官网</a>

            </div>
            <div className="site-footer__col">
                <div className="site-footer__title">请我喝奶茶</div>
                <a className="site-footer__link" href="#" onClick={(e) => { e.preventDefault(); setIsDonateOpen(true); }}>买奶茶</a>
              </div>
          </div>
          <div className="site-footer__divider"></div>
          <div className="site-footer__bottom">
            <div className="site-footer__legal">
              <div>© 2026 GameStation, LLC</div>
            </div>
            <div className="site-footer__social-links">
              <a href="https://github.com/yenicee1014" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://x.com/intensea1014?s=20" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              </a>
              <a href="https://www.xiaohongshu.com/user/profile/621c4e29000000000201b7c3?xsec_token=YBcsJopKIyo-7dD-nlE4b60y_Ubah35B_y0NKNdN_Y7-Q=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODw4RDw9SEE2NzUyOTgwNjY2OTo3R0lN&apptime=1772628461&share_id=dc6cb48ab677443c8192f8d4a20149fe" target="_blank" rel="noopener noreferrer" aria-label="Xiaohongshu">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 捐赠弹窗 */}
      {isDonateOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsDonateOpen(false)}></div>
          <div className="relative bg-white rounded-xl p-6 md:p-8 max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsDonateOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">请我喝杯奶茶 🧋</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                  <img src={alipayImage} alt="支付宝付款码" className="w-full h-full object-contain" />
                </div>
                <span className="font-medium text-blue-500 flex items-center gap-2">
                  支付宝 Alipay
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                  <img src={wechatImage} alt="微信付款码" className="w-full h-full object-contain" />
                </div>
                <span className="font-medium text-green-500 flex items-center gap-2">
                  微信支付 WeChat Pay
                </span>
              </div>
            </div>
            
            <p className="text-center text-gray-500 mt-8 text-sm">
              如果您喜欢我们的内容，欢迎通过页面底部的“买奶茶”支持我们！您的名字/留言将出现在这里。
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
