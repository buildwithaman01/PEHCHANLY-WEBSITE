import { Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { PROCESS, GUARANTEES } from '../data/constants';
import AnimatedSection from '../components/AnimatedSection';

const ProcessSection = () => (
   <section className="py-24 bg-[#0a0e26] border-y border-white/5">
      <div className="container mx-auto px-6">
         <SectionHeader title="How We Work" subtitle="3-Step Process" />
         <div className="grid md:grid-cols-3 gap-8 relative mb-16">
            {/* Line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#00f0ff]/0 via-[#00f0ff]/30 to-[#00f0ff]/0 border-t border-dashed border-[#00f0ff]/50"></div>

            {PROCESS.map((p, i) => (
               <AnimatedSection key={i} delay={i * 0.1} className="relative z-10 text-center group">
                  <div className="w-24 h-24 bg-[#050816] border border-[#00f0ff] rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-[0_0_20px_rgba(0,240,255,0.15)] group-hover:scale-110 transition-transform">
                     {p.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk']">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed px-4">{p.desc}</p>
               </AnimatedSection>
            ))}
         </div>

         {/* Guarantees Section */}
         <div className="bg-[#050816] border border-white/5 rounded-2xl p-8">
            <h3 className="text-white font-bold text-center mb-8 uppercase tracking-widest text-sm text-[#ffd700]">Our Guarantees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {GUARANTEES.map((g, i) => (
                  <AnimatedSection key={i} delay={i * 0.05} className="flex items-start gap-4">
                     <div className="bg-[#00f0ff]/10 p-2 rounded text-[#00f0ff]"><Check size={18} /></div>
                     <div>
                        <h4 className="text-white font-bold text-sm">{g.title}</h4>
                        <p className="text-gray-500 text-xs">{g.desc}</p>
                     </div>
                  </AnimatedSection>
               ))}
            </div>
         </div>
      </div>
   </section>
);

export default ProcessSection;
