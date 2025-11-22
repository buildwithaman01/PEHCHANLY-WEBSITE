import { ArrowRight, Clock, Sparkles, ShieldCheck, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import CountUpNumber from '../components/CountUpNumber';

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
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <motion.span
              className="flex h-2 w-2 rounded-full bg-[#00f0ff]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-gray-300">Digital Identity Experts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-['Space_Grotesk'] leading-[1.1] mb-6"
          >
            Digital Solutions <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-white to-[#ffd700]"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Built for Growth
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed"
          >
            Digital solutions that transform your business — websites, apps, SEO & branding. Built for speed, designed for growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button onClick={() => setPage('contact')} variant="primary" icon={ArrowRight}>
              Free Consultation
            </Button>
            <Button onClick={() => setPage('services')} variant="secondary">
              Explore Services
            </Button>
          </motion.div>

          {/* ENHANCED TRUST METRICS */}
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="group p-6 bg-gradient-to-br from-[#00f0ff]/10 to-[#0a0e26] rounded-2xl border border-[#00f0ff]/30 backdrop-blur-sm hover:border-[#00f0ff]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="text-5xl font-bold text-[#00f0ff] font-['Space_Grotesk'] mb-2">
                <CountUpNumber value={13} suffix="+" />
              </div>
              <div className="text-white font-bold text-sm mb-1">Projects Delivered</div>
              <div className="text-gray-400 text-xs flex items-center gap-1">
                <Clock size={12} />
                On Time, Last Months
              </div>
            </div>
            <div className="group p-6 bg-gradient-to-br from-[#ffd700]/10 to-[#0a0e26] rounded-2xl border border-[#ffd700]/30 backdrop-blur-sm hover:border-[#ffd700]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-100" />
              <div className="text-5xl font-bold text-[#ffd700] font-['Space_Grotesk'] mb-2">
                <CountUpNumber value={100} suffix="%" />
              </div>
              <div className="text-white font-bold text-sm mb-1">Client Satisfaction</div>
              <div className="text-gray-400 text-xs flex items-center gap-1">
                <Sparkles size={12} />
                5-Star Rated Service
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual - Cyber-Glass 3D */}
        <div className="hidden lg:block relative perspective-[1000px]">
          {/* Layer 1: Wireframe Grid (Background) */}
          <div className="absolute inset-0 opacity-20 animate-float" style={{ animationDelay: '0s' }}>
            <div className="w-full h-full bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Layer 2: Main Dashboard (Glass) */}
          <div className="relative z-10 glass rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cyber-border animate-glow-pulse" style={{ transform: 'rotateY(-5deg) rotateX(5deg)' }}>
            {/* Scan Line Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50 animate-scan" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_#27c93f]" />
                </div>
                <span className="text-xs text-gray-500 font-mono ml-2">system_monitor.tsx</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neon-cyan bg-neon-cyan/10 px-3 py-1.5 rounded-full border border-neon-cyan/30">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_#00f0ff]" />
                LIVE
              </div>
            </div>

            {/* Content */}
            <div className="grid gap-6">
              {/* Performance Bar */}
              <div className="group">
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-300 flex items-center gap-2 font-medium">
                    <Zap size={16} className="text-neon-cyan" />
                    Performance Index
                  </span>
                  <span className="text-neon-cyan font-bold text-lg tabular-nums">98<span className="text-sm text-gray-400">/100</span></span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-violet/20 via-neon-cyan/20 to-neon-gold/20 animate-gradient" />
                  <div className="relative h-full w-[98%] bg-gradient-to-r from-neon-cyan via-cyber-violet to-neon-cyan rounded-full shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-1000 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.8)]" />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Security */}
                <div className="glass rounded-xl p-5 border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 group cursor-pointer">
                  <ShieldCheck className="text-neon-cyan mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <div className="text-3xl font-bold text-white mb-1 font-['Space_Grotesk']">A+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Security Grade</div>
                  <div className="mt-2 h-1 bg-neon-cyan/20 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-neon-cyan to-cyber-violet animate-gradient" />
                  </div>
                </div>

                {/* SEO */}
                <div className="glass rounded-xl p-5 border border-white/5 hover:border-neon-gold/50 transition-all duration-300 group cursor-pointer">
                  <Globe className="text-neon-gold mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <div className="text-3xl font-bold text-white mb-1 font-['Space_Grotesk']">100%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">SEO Score</div>
                  <div className="mt-2 h-1 bg-neon-gold/20 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-neon-gold to-neon-cyan animate-gradient" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Layer 3: Floating Badges */}
          <div className="absolute -top-8 -right-8 z-20 glass rounded-xl px-4 py-3 border border-neon-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.3)] animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-neon-cyan font-['Space_Grotesk']">13+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 z-20 glass rounded-xl px-4 py-3 border border-neon-gold/30 shadow-[0_0_30px_rgba(255,215,0,0.2)] animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-neon-gold font-['Space_Grotesk']">100%</div>
              <div className="text-xs text-gray-400">Satisfaction</div>
            </div>
          </div>

          {/* Ambient Glow Effects */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyber-violet/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section >
  );
};

export default Hero;
