import { BarChart, Target, Check, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const AnalyticsSection = () => (
  <section className="py-24 bg-[#050816]">
    <div className="container mx-auto px-6">
      <SectionHeader 
        title="Track What Matters" 
        subtitle="Analytics & Insights" 
      />
      
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-xl text-gray-300 text-center leading-relaxed">
          We don't just build websites—we build <span className="text-[#00f0ff] font-bold">data-driven digital assets</span>. Every Growth and Enterprise package includes comprehensive analytics dashboards so you can track real business metrics, not vanity numbers.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#0a0e26] p-8 rounded-2xl border border-white/10">
          <BarChart className="w-12 h-12 text-[#00f0ff] mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Website Performance</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
              <span>Real-time visitor tracking (who's on your site right now)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
              <span>Page speed monitoring (load time alerts)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
              <span>Mobile vs desktop traffic breakdown</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
              <span>Bounce rate and session duration analysis</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#0a0e26] p-8 rounded-2xl border border-white/10">
          <Target className="w-12 h-12 text-[#ffd700] mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Marketing Insights</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#ffd700] shrink-0 mt-0.5" />
              <span>Conversion tracking (form fills, calls, WhatsApp clicks)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#ffd700] shrink-0 mt-0.5" />
              <span>Traffic sources (Google, social, direct, referrals)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#ffd700] shrink-0 mt-0.5" />
              <span>SEO ranking reports (keyword positions monthly)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#ffd700] shrink-0 mt-0.5" />
              <span>Google Business Profile insights (if applicable)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#00f0ff]/10 to-transparent border-l-4 border-[#00f0ff] rounded-r-2xl p-8">
        <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#00f0ff]" />
          Monthly Reporting Included
        </h4>
        <p className="text-gray-400 leading-relaxed">
          Every month, you'll receive a detailed report with key metrics, insights, and recommendations. No jargon—just clear data on what's working and what needs improvement. You'll always know exactly how your digital presence is performing.
        </p>
      </div>
    </div>
  </section>
);

export default AnalyticsSection;
