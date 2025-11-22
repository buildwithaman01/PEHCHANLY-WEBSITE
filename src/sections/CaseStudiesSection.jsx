import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { CASE_STUDIES } from '../data/caseStudies';
import CaseStudyModal from '../components/CaseStudyModal';
import AnimatedSection from '../components/AnimatedSection';

const CaseStudiesSection = () => {
    const [selectedCase, setSelectedCase] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (caseItem) => {
        setSelectedCase(caseItem);
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
        setSelectedCase(null);
    };

    return (
        <section className="py-24 bg-[#050816]">
            <div className="container mx-auto px-6">
                <SectionHeader title="Proven Results" subtitle="Case Studies" />

                <div className="grid md:grid-cols-3 gap-8">
                    {CASE_STUDIES.map((item, index) => (
                        <AnimatedSection key={item.id} delay={index * 0.1} className="group bg-[#0a0e26] rounded-2xl border border-white/10 overflow-hidden hover:border-[#00f0ff]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[#050816]/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                <img
                                    src={item.image}
                                    alt={item.client}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-[#00f0ff] text-[#050816] text-xs font-bold px-3 py-1 rounded-full">
                                    {item.result}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-2 text-[#00f0ff] text-xs font-bold uppercase mb-3">
                                    {item.icon === 'Globe' && <Globe size={20} />}
                                    {item.icon === 'Users' && <Users size={20} />}
                                    {item.icon === 'TrendingUp' && <TrendingUp size={20} />}
                                    {item.category}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">{item.client}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                                <div className="flex items-center text-white text-sm font-bold group-hover:translate-x-2 transition-transform cursor-pointer" onClick={() => openModal(item)}>
                                    View Case Study <ArrowRight size={16} className="ml-2 text-[#00f0ff]" />
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/contact">
                        <Button variant="outline">View All Projects</Button>
                    </Link>
                </div>
            </div>
            <CaseStudyModal isOpen={isOpen} onClose={closeModal} caseStudy={selectedCase} />
        </section>
    );
};

export default CaseStudiesSection;
