import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';

const AuditModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ url: '', email: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const validate = () => {
        const newErrors = {};
        if (!formData.url.trim()) newErrors.url = "Website URL is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        if (!validate()) {
            e.preventDefault();
            return;
        }
        setSubmitted(true);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-[#0a0e26] border border-[#00f0ff]/30 rounded-2xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,240,255,0.2)] animate-fadeIn">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <X size={24} />
                </button>

                {submitted ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                        <p className="text-gray-400">We'll analyze your site and email you the report within 24 hours.</p>
                        <button onClick={onClose} className="mt-6 text-[#00f0ff] text-sm hover:underline">Close</button>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Get Your Free Audit</h2>
                            <p className="text-gray-400 text-sm">
                                See exactly why your website isn't converting and how to fix it.
                            </p>
                        </div>

                        <form action="https://formsubmit.co/pehchanly.digitalsolution@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Website URL</label>
                                <input
                                    name="url"
                                    value={formData.url}
                                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                    className={`w-full bg-[#050816] border ${errors.url ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:border-[#00f0ff] focus:outline-none`}
                                    placeholder="www.yourbusiness.com"
                                />
                                {errors.url && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.url}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={`w-full bg-[#050816] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:border-[#00f0ff] focus:outline-none`}
                                    placeholder="you@company.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</p>}
                            </div>

                            <input type="hidden" name="_subject" value="New Free Audit Request" />
                            <input type="hidden" name="_captcha" value="false" />

                            <button type="submit" className="w-full py-3 rounded-lg bg-[#00f0ff] text-[#050816] font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2">
                                Send Me The Report <Send size={18} />
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuditModal;
