import { ShieldCheck, Cpu, Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const HostingSection = () => (
  <section className="py-24 bg-gradient-to-b from-[#0a0e26] to-[#050816] relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffd700]/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeader
        title="We Don't Just Build. We Support."
        subtitle="Complete Digital Partnership"
      />

      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-xl text-gray-300 leading-relaxed">
          Most agencies build your site and disappear. <span className="text-white font-bold">We're different.</span> We host, maintain, secure, and continuously optimize your digital presence so you can focus on running your business.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: <ShieldCheck className="w-10 h-10" />,
            title: "Secure Hosting",
            desc: "Enterprise-grade hosting with SSL certificates, automated backups, and 99.9% uptime guarantee. Your site stays fast and secure 24/7.",
            color: "from-green-500/10 to-transparent"
          },
          {
            icon: <Cpu className="w-10 h-10" />,
            title: "Monthly Maintenance",
            desc: "Regular updates, security patches, performance optimization, and bug fixes included. We keep your site running smoothly without you lifting a finger.",
            color: "from-[#00f0ff]/10 to-transparent"
          },
          {
            icon: <Users className="w-10 h-10" />,
            title: "Ongoing Support",
            desc: "Email, WhatsApp, and phone support during business hours. Got a question? Need a change? We respond within 24 hours.",
            color: "from-[#ffd700]/10 to-transparent"
          }
        ].map((item, i) => (
          <AnimatedSection
            key={i}
            delay={i * 0.1}
            className="group p-8 bg-[#0a0e26] rounded-2xl border border-white/10 hover:border-[#00f0ff]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="text-[#00f0ff] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <div className="bg-gradient-to-r from-[#00f0ff]/5 to-[#ffd700]/5 border border-white/10 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk']">
          Included in Every Package
        </h3>
        <p className="text-gray-400 mb-6">
          No surprise fees. No hidden costs. Just complete digital support from day one.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["SSL Certificate", "Daily Backups", "Security Monitoring", "Performance Optimization", "Email Support", "WhatsApp Support"].map((item, i) => (
            <span key={i} className="px-4 py-2 bg-[#0a0e26] border border-white/10 rounded-full text-sm text-gray-300">
              ✓ {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HostingSection;
