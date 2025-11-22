import { Cpu, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { TEAM } from '../data/constants';

const AboutPage = ({ setPage }) => (
   <div className="pt-32 pb-24 px-6 container mx-auto">
      <AnimatedSection>
         <SectionHeader title="We Are Pehchanly" subtitle="About Us" />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
         <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
               <h3 className="text-3xl font-bold text-white mb-6 font-['Space_Grotesk']">Engineers Meet Marketing</h3>
               <p className="text-gray-300 mb-4 leading-relaxed">
                  Pehchanly was founded by <span className="text-[#00f0ff] font-bold">Aman Singh</span>, a CSE graduate who spent years watching talented business owners struggle with slow, outdated websites that didn't generate results.
               </p>
               <p className="text-gray-300 mb-4 leading-relaxed">
                  After seeing one too many businesses pay agencies thousands for templated WordPress sites that took weeks to load, Aman decided to do something different: combine <span className="text-white font-bold">engineering excellence with marketing psychology</span>.
               </p>
               <p className="text-gray-300 mb-4 leading-relaxed">
                  Today, Pehchanly is a team of CSE engineers and growth marketers who understand that in 2025, your website isn't just a digital brochure—it's your primary revenue driver. That's why we build with Next.js 16, track analytics that matter, and deliver in 1-2 weeks instead of months.
               </p>
               <p className="text-gray-300 mb-8 leading-relaxed">
                  Last month alone, we delivered 13 complete digital solutions. We don't just build websites. We build digital assets that grow with your business.
               </p>
               <div className="flex gap-4">
                  <Button onClick={() => setPage('contact')} variant="primary">Work With Us</Button>
                  <Button onClick={() => setPage('services')} variant="secondary">Our Services</Button>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-[#0a0e26] p-6 rounded-2xl border border-white/5">
                  <Cpu className="text-[#00f0ff] w-8 h-8 mb-2" />
                  <div className="text-[#00f0ff] font-bold text-2xl mb-1">CSE</div>
                  <p className="text-xs text-gray-400">Core Engineering Team</p>
               </div>
               <div className="bg-[#0a0e26] p-6 rounded-2xl border border-white/5">
                  <Zap className="text-[#ffd700] w-8 h-8 mb-2" />
                  <div className="text-[#ffd700] font-bold text-2xl mb-1">1.5s</div>
                  <p className="text-xs text-gray-400">Avg Load Time</p>
               </div>
               <div className="bg-[#0a0e26] p-6 rounded-2xl border border-white/5 col-span-2 flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full"><Sparkles className="text-white w-6 h-6" /></div>
                  <div>
                     <div className="text-white font-bold text-lg">Psychology-Driven</div>
                     <p className="text-xs text-gray-400">Design that converts.</p>
                  </div>
               </div>
            </div>
         </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
         <h3 className="text-2xl font-bold text-white mb-12 text-center">Meet The Experts</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
               <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0a0e26] p-6 rounded-2xl text-center border border-white/5 hover:border-[#00f0ff]/30 transition-all group"
               >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                     <div className="absolute inset-0 bg-[#00f0ff] rounded-full blur opacity-20 group-hover:opacity-50 transition-opacity" />
                     <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full relative z-10 border-2 border-white/10" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{member.name}</h4>
                  <p className="text-[#00f0ff] text-sm font-medium">{member.role}</p>
               </motion.div>
            ))}
         </div>
      </AnimatedSection>
   </div>
);

export default AboutPage;
