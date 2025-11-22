import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { SERVICES, INDUSTRIES } from '../data/constants';

const ServicesPage = ({ setPage }) => (
  <div className="pt-32 pb-24 px-6 container mx-auto">
    <AnimatedSection>
      <SectionHeader title="Built for Scale" subtitle="Our Services" />
    </AnimatedSection>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service, index) => (
        <AnimatedSection key={service.id} delay={index * 0.1}>
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative p-8 rounded-2xl bg-[#0a0e26] border border-white/5 hover:border-[#00f0ff]/30 transition-all duration-500 overflow-hidden h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/10 rounded-full blur-3xl group-hover:bg-[#00f0ff]/20 transition-all duration-500" />
            <div className="relative z-10">
              <motion.div
                className="w-12 h-12 rounded-lg bg-[#1a1f3d] flex items-center justify-center text-[#00f0ff] mb-6"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk']">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm min-h-[60px]">{service.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>

    <AnimatedSection delay={0.3}>
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Industries We Serve</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-full bg-[#0a0e26] border border-white/10 text-gray-300 text-sm hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors cursor-default"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </div>
);

export default ServicesPage;
