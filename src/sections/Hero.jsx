import { ArrowRight, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';

const Hero = ({ setPage }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#050816]">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#00f0ff]/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#ffd700]/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#00f0ff]"></span>
            <span className="text-sm font-medium text-gray-300">Built with Next.js 16 + Turbopack</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white font-['Space_Grotesk'] leading-[1.1] mb-6">
            Digital Solutions. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-white to-[#ffd700]">Built for Growth.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Transforming businesses with modern technology and data-driven marketing. Founded by a team of CSE engineers & experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => setPage('contact')} variant="primary" icon={ArrowRight}>
              Free Consultation
            </Button>
            <Button onClick={() => setPage('services')} variant="secondary">
              Explore Services
            </Button>
          </div>

          {/* ENHANCED TRUST METRICS */}
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-[#00f0ff]/10 to-[#0a0e26] rounded-2xl border border-[#00f0ff]/30 backdrop-blur-sm">
              <div className="text-5xl font-bold text-[#00f0ff] font-['Space_Grotesk'] mb-2">13</div>
              <div className="text-white font-bold text-sm mb-1">Projects Completed</div>
              <div className="text-gray-400 text-xs flex items-center gap-1">
                <Clock size={12} />
                Last month alone
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#ffd700]/10 to-[#0a0e26] rounded-2xl border border-[#ffd700]/30 backdrop-blur-sm">
              <div className="text-5xl font-bold text-[#ffd700] font-['Space_Grotesk'] mb-2">8</div>
              <div className="text-white font-bold text-sm mb-1">Active Projects</div>
              <div className="text-gray-400 text-xs flex items-center gap-1">
                <Sparkles size={12} />
                Right now
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual - 3D Tech Element */}
        <div className="hidden lg:block relative">
          <div className="relative z-10 bg-[#0a0e26] border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent rounded-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
               <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"/><div className="w-3 h-3 rounded-full bg-yellow-500"/><div className="w-3 h-3 rounded-full bg-green-500"/></div>
               <div className="text-xs text-gray-500 font-mono">nextjs_config.ts</div>
            </div>
            <div className="space-y-4">
               <div className="flex justify-between text-white font-bold text-2xl font-['Space_Grotesk']">
                  <div><div className="text-xs text-gray-500 font-sans font-normal">Performance Score</div>100/100</div>
                  <div className="text-right"><div className="text-xs text-gray-500 font-sans font-normal">SEO</div>Native</div>
               </div>
               <div className="h-40 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                     <div key={i} className="w-full bg-[#00f0ff]/20 rounded-t-sm relative group">
                        <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-[#00f0ff] rounded-t-sm opacity-80 group-hover:opacity-100 transition-all"/>
                     </div>
                  ))}
               </div>
            </div>
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-10 -left-10 bg-[#111633] p-4 rounded-xl border border-white/10 shadow-xl animate-float">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-500"><ShieldCheck size={20} /></div>
                <div><div className="text-xs text-gray-400">Security</div><div className="text-white font-bold">Enterprise Grade</div></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
