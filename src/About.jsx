import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Mail, Phone, Globe, MessageCircle, Facebook, PenTool, Layout, Users, MessageSquare, Image, Video, Monitor, Pen } from 'lucide-react';
import Footer from './components/Footer';
import avatar from '../picture/avatar.JPG';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-[#1f1f1f] font-sans selection:bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 py-12 lg:px-10">
        
        {/* Header */}
        <header className="mb-16">
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
            <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <ArrowLeft size={16} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight">返回 GameStation</span>
          </Link>
        </header>

        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            
            {/* Avatar Section */}
            <div className="flex flex-col gap-6">
              <a href="https://centurypaw.com" className="w-full aspect-square rounded-[40px] overflow-hidden shadow-sm border border-gray-100 block hover:opacity-90 transition-opacity">
                <img 
                  src={avatar} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </a>
              <h1 className="text-xl font-medium text-gray-800">
                百年内无人能懂猫
              </h1>
            </div>



            {/* Skill Set */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-tight">技能栈</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-600 font-medium">
                  <Globe size={20} className="text-blue-500" />
                  网页设计
                </li>
                <li className="flex items-center gap-3 text-gray-600 font-medium">
                  <PenTool size={20} className="text-purple-500" />
                  UI/UX 设计
                </li>
                <li className="flex items-center gap-3 text-gray-600 font-medium">
                  <Monitor size={20} className="text-green-500" />
                  前端开发
                </li>
                <li className="flex items-center gap-3 text-gray-600 font-medium">
                  <Pen size={20} className="text-orange-500" />
                  内容策略
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-16">
            
            {/* About Me */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">关于我</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8 max-w-2xl">
                没有艺术细胞。 可以通过以下方式联系我
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:yeniceeyim@outlook.com" className="flex items-center gap-3 px-5 py-4 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors group md:col-span-2">
                  <Mail size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="font-medium text-sm underline decoration-gray-300 underline-offset-4 group-hover:decoration-blue-600">yeniceeyim@outlook.com</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-5 py-4 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors group md:col-span-2">
                  <MessageCircle size={20} className="text-gray-400 group-hover:text-green-600 transition-colors" />
                  <span className="font-medium text-sm underline decoration-gray-300 underline-offset-4 group-hover:decoration-green-600">theageofadzz</span>
                </a>
              </div>
            </section>

            {/* My Services */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">我的服务</h2>
              


              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <Layout size={20} />, text: "网站设计" },
                  { icon: <Users size={20} />, text: "社交媒体管理" },
                  { icon: <PenTool size={20} />, text: "文案写作" },
                  { icon: <MessageSquare size={20} />, text: "社区管理" },
                  { icon: <Image size={20} />, text: "平面设计" },
                  { icon: <Video size={20} />, text: "内容创作" }
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-4 p-5 border border-gray-100 rounded-xl hover:shadow-md hover:border-gray-200 transition-all bg-white group cursor-default">
                    <div className="text-gray-400 group-hover:text-gray-800 transition-colors">
                      {service.icon}
                    </div>
                    <span className="font-bold text-gray-700 group-hover:text-black transition-colors">{service.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">工具</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {/* Placeholder for tools logos if needed, or simple text blocks */}
                 {['Figma', 'React', 'Tailwind', 'Vite', 'Node.js', 'Git'].map(tool => (
                   <div key={tool} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg font-bold text-gray-600 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all">
                     {tool}
                   </div>
                 ))}
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
