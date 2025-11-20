import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code, Zap, ShieldCheck, Globe } from 'lucide-react';
import Button from './components/Button';
import CircuitLogo from './components/CircuitLogo';
import Hero from './sections/Hero';
import ProcessSection from './sections/ProcessSection';
import HostingSection from './sections/HostingSection';
import AnalyticsSection from './sections/AnalyticsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingSection from './pages/PricingSection';
import ContactPage from './pages/ContactPage';
import { BRAND, METRICS, SERVICES } from './data/constants';

const App = () => {
  const [page, setPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNav = (id) => {
    setPage(id);
    setMobileMenu(false);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{backgroundColor: '#050816', minHeight: '100vh', color: 'white'}} className="bg-[#050816] min-h-screen text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        html, body, #root { margin: 0; padding: 0; background-color: #050816; color: white; }
        body { font-family: 'Inter', sans-serif; }
        .animate-fadeIn { animation: fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
      `}</style>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050816]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav('home')}>
            <CircuitLogo className="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tight">PEHCHANLY</span>
          </div>

          <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 gap-2">
            {navItems.map(item => (
              <button key={item.id} onClick={() => handleNav(item.id)} className={`px-6 py-2 rounded-full text-sm transition-all ${page === item.id ? 'bg-[#00f0ff] text-[#050816] font-bold' : 'text-gray-300 hover:text-white'}`}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <a href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
              <Button variant="outline" className="px-6 py-2 text-sm">WhatsApp</Button>
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileMenu && (
        <div className="fixed inset-0 z-40 bg-[#050816] flex items-center justify-center pt-20">
          <div className="flex flex-col items-center gap-8">
            {navItems.map(item => (
              <button key={item.id} onClick={() => handleNav(item.id)} className="text-2xl hover:text-[#00f0ff]">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="pt-20">
        {page === 'home' && (
          <>
            <Hero setPage={setPage} />
            
            <div className="py-12 border-y border-white/5 bg-[#0a0e26]/50">
              <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {METRICS.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                    <div className="text-[#00f0ff] text-xs uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-24 bg-[#050816]">
              <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                  <h2 className="text-5xl font-bold text-white mb-8">Our Services</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {SERVICES.slice(0,3).map(s => (
                    <div key={s.id} className="bg-[#0a0e26] p-8 rounded-xl border border-white/5 hover:border-[#00f0ff]">
                      <div className="text-[#00f0ff] mb-4">{s.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                      <p className="text-gray-400 text-sm">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Button onClick={() => handleNav('services')} variant="secondary">View All Services</Button>
                </div>
              </div>
            </div>

            <ProcessSection />
            <HostingSection />
            <AnalyticsSection />
            <TestimonialsSection />
          </>
        )}

        {page === 'about' && <AboutPage setPage={setPage} />}
        {page === 'services' && <ServicesPage setPage={setPage} />}
        {page === 'pricing' && <PricingSection setPage={setPage} />}
        {page === 'contact' && <ContactPage />}
      </main>

      <footer className="border-t border-white/5 py-12 bg-[#03050e]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CircuitLogo className="w-8 h-8" />
                <span className="font-bold text-xl">PEHCHANLY</span>
              </div>
              <p className="text-gray-500 text-sm">Digital Solutions built for growth.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-[#00f0ff] cursor-pointer">Web Development</li>
                <li className="hover:text-[#00f0ff] cursor-pointer">App Development</li>
                <li className="hover:text-[#00f0ff] cursor-pointer">SEO & Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li onClick={() => handleNav('about')} className="hover:text-[#00f0ff] cursor-pointer">About</li>
                <li onClick={() => handleNav('pricing')} className="hover:text-[#00f0ff] cursor-pointer">Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>{BRAND.email}</li>
                <li>{BRAND.phone}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
            © 2025 Pehchanly Digital Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
