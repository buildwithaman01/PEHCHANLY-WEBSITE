import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Loader2 } from 'lucide-react';
import Button from './Button';
import { BRAND } from '../data/constants';

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        business: '',
        phone: '',
        email: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        // Show after 15 seconds on ALL devices (Desktop + Mobile)
        const timer = setTimeout(() => {
            if (!hasShown) {
                setIsVisible(true);
                setHasShown(true);
            }
        }, 15000);

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timer);
        };
    }, [hasShown]);

    const handleClose = () => {
        setIsVisible(false);
        // Removed localStorage setting so it shows again on refresh
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch(`https://formsubmit.co/ajax/${BRAND.email}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "🔥 New Exit Popup Lead (Free Audit Claim)",
                    ...formData
                })
            });
            setSubmitted(true);
            setTimeout(() => {
                handleClose();
            }, 4000);
        } catch (error) {
            console.error("Form submission failed", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Popup Card */}
            <div className="relative bg-[#0a0e26] border border-[#00f0ff]/30 rounded-2xl p-1 max-w-lg w-full shadow-2xl transform transition-all scale-100 animate-bounceIn max-h-[90vh] overflow-y-auto">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#00f0ff]/20 rounded-full flex items-center justify-center border-4 border-[#050816]">
                    <Gift className="w-10 h-10 text-[#00f0ff] animate-pulse" />
                </div>

                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="bg-[#050816]/50 rounded-xl p-8 pt-16 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Wait! Don't Miss This
                    </h3>
                    <p className="text-[#00f0ff] font-bold mb-4 uppercase tracking-wider">
                        Limited Time Offer
                    </p>
                    <p className="text-gray-300 mb-4">
                        Get a <span className="text-white font-bold">FREE Website Audit</span> (worth ₹5,000) before you go. We'll analyze your current site and give you a custom improvement roadmap.
                    </p>
                    <div className="bg-[#00f0ff]/10 border border-[#00f0ff]/30 p-4 rounded-lg mb-8">
                        <p className="text-sm text-gray-300">
                            <span className="text-[#00f0ff] font-bold">BUSINESS OWNERS:</span> We will give you a <span className="text-white font-bold">FREE DEMO</span> of your future website before you pay a single rupee!
                        </p>
                    </div>

                    {submitted ? (
                        <div className="bg-green-500/20 text-green-400 p-4 rounded-lg font-bold">
                            🎉 Offer claimed! We'll contact you shortly.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-[#0a0e26] border border-white/10 rounded-lg p-3 text-white focus:border-[#00f0ff] focus:outline-none transition-colors"
                            />
                            <input
                                type="text"
                                name="business"
                                placeholder="Business Name"
                                value={formData.business}
                                onChange={handleChange}
                                className="w-full bg-[#0a0e26] border border-white/10 rounded-lg p-3 text-white focus:border-[#00f0ff] focus:outline-none transition-colors"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-[#0a0e26] border border-white/10 rounded-lg p-3 text-white focus:border-[#00f0ff] focus:outline-none transition-colors"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-[#0a0e26] border border-white/10 rounded-lg p-3 text-white focus:border-[#00f0ff] focus:outline-none transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#00f0ff] text-[#050816] font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" /> : <>Claim Free Audit <ArrowRight size={18} /></>}
                            </button>
                            <p className="text-xs text-gray-500 mt-4">
                                No spam. Unsubscribe anytime.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExitIntentPopup;
