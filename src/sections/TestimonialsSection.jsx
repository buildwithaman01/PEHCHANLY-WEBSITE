import SectionHeader from '../components/SectionHeader';

const TestimonialsSection = () => (
  <section className="py-24 bg-[#0a0e26]">
    <div className="container mx-auto px-6">
      <SectionHeader title="Client Success Stories" subtitle="Testimonials" />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#050816] p-8 rounded-2xl border border-white/10">
          <div className="text-[#ffd700] mb-4">★★★★★</div>
          <p className="text-gray-300 mb-6 italic">"Coming soon..."</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-700"></div>
            <div>
              <div className="text-white font-bold">Your Client</div>
              <div className="text-gray-500 text-sm">Business Name</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
