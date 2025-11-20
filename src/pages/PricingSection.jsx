import { Check, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { PRICING } from '../data/constants';

const PricingSection = ({ setPage }) => (
  <div className="pt-32 pb-24 px-6 container mx-auto animate-fadeIn">
    <SectionHeader title="Transparent Investment" subtitle="Pricing Tiers" />
    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
      {PRICING.map((plan, i) => (
        <div key={i} className={`relative p-8 rounded-3xl border transition-all duration-300 ${plan.highlight ? 'bg-[#0a0e26] border-[#00f0ff] shadow-[0_0_40px_rgba(0,240,255,0.15)] scale-105 z-10' : 'bg-[#080b1e] border-white/5 hover:border-white/20'}`}>
          {plan.highlight && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00f0ff] text-[#050816] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              Best Value
            </div>
          )}
          
          <div className="text-[#00f0ff] text-xs font-bold uppercase tracking-widest mb-2">{plan.tier}</div>
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-sm text-gray-400 mb-6 h-10">{plan.desc}</p>
          
          {/* UPDATED PRICE DISPLAY */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-white font-['Space_Grotesk']">{plan.price}</span>
            <p className="text-gray-500 text-xs mt-2">Contact us for detailed pricing</p>
          </div>
          
          <div className="flex items-center gap-2 text-[#ffd700] text-sm font-bold mb-6">
             <Clock size={16} /> {plan.time}
          </div>
          
          <div className="w-full h-px bg-white/10 mb-6" />
          
          <ul className="space-y-4 mb-8">
            {plan.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#00f0ff]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#00f0ff]" />
                </div>
                {feat}
              </li>
            ))}
          </ul>
          <Button onClick={() => setPage('contact')} variant={plan.highlight ? "primary" : "secondary"} className="w-full">
            Choose {plan.name}
          </Button>
        </div>
      ))}
    </div>
    <p className="text-center text-gray-500 text-sm mt-8">* All pricing is custom based on client requirements. These are starting packages.</p>
  </div>
);

export default PricingSection;
