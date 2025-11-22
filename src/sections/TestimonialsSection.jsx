import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const TestimonialsSection = () => (
  <section className="py-24 bg-[#0a0e26]">
    <div className="container mx-auto px-6">
      <SectionHeader title="Client Success Stories" subtitle="Testimonials" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Rahul Sharma",
            role: "Owner, Spice Garden",
            quote: "Pehchanly transformed our business. We went from zero online presence to getting 20+ orders a day through the website. Highly recommended!",
            img: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=00f0ff&color=050816"
          },
          {
            name: "Priya Patel",
            role: "Founder, Glow Skincare",
            quote: "The team is incredibly professional. They understood our brand vision perfectly and delivered a stunning site that our customers love.",
            img: "https://ui-avatars.com/api/?name=Priya+Patel&background=ffd700&color=050816"
          },
          {
            name: "Amit Verma",
            role: "Director, TechSolutions",
            quote: "Best SEO agency we've worked with. We're finally ranking on the first page of Google for our main keywords. The ROI has been fantastic.",
            img: "https://ui-avatars.com/api/?name=Amit+Verma&background=00f0ff&color=050816"
          }
        ].map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1} className="bg-[#050816] p-8 rounded-2xl border border-white/10 hover:border-[#00f0ff]/30 transition-all duration-300 relative hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]">
            <div className="text-[#ffd700] text-2xl mb-4">★★★★★</div>
            <p className="text-gray-300 mb-6 italic leading-relaxed">"{item.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full" />
              <div>
                <div className="text-white font-bold">{item.name}</div>
                <div className="text-gray-500 text-xs">{item.role}</div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
