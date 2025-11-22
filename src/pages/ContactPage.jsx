
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { BRAND } from '../data/constants';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    email: '',
    interest: 'Website (Launch Tier)',
    budget: '₹15k - ₹30k'
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = "Enter a valid 10-digit phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    // Allow default form submission to formsubmit.co
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 container mx-auto animate-fadeIn">
      <SectionHeader title="Let's Build Something" subtitle="Contact Us" />
      <div className="max-w-5xl mx-auto bg-[#0a0e26] rounded-3xl border border-white/10 overflow-hidden shadow-2xl grid md:grid-cols-2">
        <div className="p-12 bg-gradient-to-br from-[#00f0ff]/10 to-[#0a0e26] border-r border-white/5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-['Space_Grotesk'] text-white">Get In Touch</h2>
            <p className="text-gray-400 mb-8">
              Ready to scale? Fill out the form and we'll respond within 24 hours with a custom roadmap.
            </p>
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", val: BRAND.email, link: `mailto:${BRAND.email}` },
                { icon: Phone, title: "Phone", val: BRAND.phone, link: `tel:${BRAND.phone}` },
                { icon: MapPin, title: "Location", val: BRAND.location, link: null }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff]">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">{item.title}</div>
                    {item.link ? (
                      <a href={item.link} className="text-white font-medium hover:text-[#00f0ff] transition-colors">{item.val}</a>
                    ) : (
                      <div className="text-white font-medium">{item.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Prefer WhatsApp?</p>
            <a href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
              <button className="w-full py-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] font-bold hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2">
                <Phone size={18} /> Chat on WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="p-12">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6 animate-bounceIn">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-[#00f0ff] text-sm hover:underline">Send another message</button>
            </div>
          ) : (
            <form className="space-y-6" action="https://formsubmit.co/pehchanly.digitalsolution@gmail.com" method="POST" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name <span className="text-red-500">*</span></label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#050816] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg p-4 text-white focus:border-[#00f0ff] focus:outline-none transition-colors`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone <span className="text-red-500">*</span></label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-[#050816] border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg p-4 text-white focus:border-[#00f0ff] focus:outline-none transition-colors`}
                    placeholder="+91..."
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Business Name</label>
                  <input
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full bg-[#050816] border border-white/10 rounded-lg p-4 text-white focus:border-[#00f0ff] focus:outline-none transition-colors"
                    placeholder="Company Ltd."
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email <span className="text-red-500">*</span></label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#050816] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg p-4 text-white focus:border-[#00f0ff] focus:outline-none transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-[#050816] border border-white/10 rounded-lg p-4 text-white focus:border-[#00f0ff] focus:outline-none transition-colors appearance-none"
                >
                  <option>Website (Launch Tier)</option>
                  <option>Website (Growth Tier)</option>
                  <option>Custom Software/App</option>
                  <option>SEO & Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#050816] border border-white/10 rounded-lg p-4 text-white focus:border-[#00f0ff] focus:outline-none transition-colors appearance-none"
                >
                  <option>₹15k - ₹30k</option>
                  <option>₹30k - ₹1 Lakh</option>
                  <option>₹1 Lakh+</option>
                </select>
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission from Pehchanly Website" />
              <button type="submit" className="w-full relative px-8 py-4 rounded-lg font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden font-['Space_Grotesk'] bg-[#00f0ff] text-[#050816] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                <span className="relative z-10 flex items-center gap-2">Submit Request <Send size={18} /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12 origin-bottom-left" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto grid gap-4">
          {[
            { q: "How fast can you deliver?", a: "Our Launch package takes 1 week. Growth takes 2 weeks. Custom enterprise projects take 3-4 weeks." },
            { q: "Do you provide hosting?", a: "Yes! We handle hosting, security, and maintenance so you don't have to worry about the tech." },
            { q: "Are there hidden fees?", a: "Never. The price we quote is the price you pay. We value transparency." },
            { q: "Do you work with startups?", a: "Absolutely. We specialize in helping new businesses launch with a professional presence." },
            { q: "Do you provide ongoing analytics and reports?", a: "Yes! Every Growth and Enterprise package includes monthly analytics reports with traffic, conversions, and SEO performance. You'll always know exactly how your site is performing." },
            { q: "What if I need to make changes after launch?", a: "All packages include free support (1-3 months depending on tier). After that, small changes are covered under our maintenance plan. Larger updates are quoted separately." },
            { q: "Can you build more than 4-5 pages?", a: "Absolutely! Our Launch package includes 4-5 pages, Growth includes 8-12, and Enterprise is unlimited. We scale with your needs." },
            { q: "Do you work with existing websites or only new builds?", a: "Both! We can redesign/rebuild existing sites or start fresh. We'll assess your current site and recommend the best approach." }
          ].map((faq, i) => (
            <div key={i} className="bg-[#0a0e26] p-6 rounded-xl border border-white/5">
              <h4 className="text-white font-bold mb-2">{faq.q}</h4>
              <p className="text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
