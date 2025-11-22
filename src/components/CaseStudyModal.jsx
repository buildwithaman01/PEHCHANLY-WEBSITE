import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.9 },
};

const modal = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: { y: '0', opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    exit: { y: '100vh', opacity: 0 },
};

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
    if (!isOpen || !caseStudy) return null;
    return (
        <motion.div
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
        >
            <motion.div
                className="bg-[#0a0e26] rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
                variants={modal}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={e => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    onClick={onClose}
                >
                    ✕
                </button>
                <img src={caseStudy.image} alt={caseStudy.client} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.client}</h3>
                <p className="text-gray-300 mb-1"><strong>Category:</strong> {caseStudy.category}</p>
                <p className="text-gray-400 mb-3">{caseStudy.desc}</p>
                {caseStudy.technical && (
                    <p className="text-gray-300 mb-1"><strong>Technical:</strong> {caseStudy.technical}</p>
                )}
                {caseStudy.practical && (
                    <p className="text-gray-300 mb-3"><strong>Practical Impact:</strong> {caseStudy.practical}</p>
                )}
                <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-3">
                    <span className="text-[#00f0ff] font-bold">{caseStudy.result}</span>
                    <Button variant="outline" onClick={onClose}>Close</Button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CaseStudyModal;
