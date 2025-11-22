import React, { useState, useEffect, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Code, Zap, ShieldCheck, Globe } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './components/Button';
import CircuitLogo from './components/CircuitLogo';
import PehchanlyLogo from './components/PehchanlyLogo';
import Hero from './sections/Hero';
import AuditModal from './components/AuditModal';
import ExitIntentPopup from './components/ExitIntentPopup';
import CountUpAnimation from './components/CountUpAnimation';
import PageTransition from './components/PageTransition';
import AnimatedSection from './components/AnimatedSection';
import { BRAND, METRICS, SERVICES, OFFICE_LOCATION, SEO_CITIES } from './data/constants';

// Lazy Load Sections
const ProcessSection = React.lazy(() => import('./sections/ProcessSection'));
const HostingSection = React.lazy(() => import('./sections/HostingSection'));
const AnalyticsSection = React.lazy(() => import('./sections/AnalyticsSection'));
const TestimonialsSection = React.lazy(() => import('./sections/TestimonialsSection'));
const CaseStudiesSection = React.lazy(() => import('./sections/CaseStudiesSection'));

// Lazy Load Pages
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const PricingSection = React.lazy(() => import('./pages/PricingSection'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loading Component
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#00f0ff] border-t-transparent rounded-full animate-spin" />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const handleNav = (path) => {
    navigate(path);
    setMobileMenu(false);
  };

  return (
    <div className="bg-[#050816] min-h-screen text-white font-sans">
      <ScrollToTop />


      <AuditModal isOpen={auditOpen} onClose={() => setAuditOpen(false)} />
      <ExitIntentPopup />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        html, body, #root { margin: 0; padding: 0; background-color: #050816; color: white; }
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050816]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <PehchanlyLogo className="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tight">PEHCHANLY</span>
          </div>

          <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 gap-2">
            {navItems.map(item => (
              <Link key={item.path} to={item.path}>
                <button className={`px-6 py-2 rounded-full text-sm transition-all ${isActive(item.path) ? 'bg-[#00f0ff] text-[#050816] font-bold' : 'text-gray-300 hover:text-white'}`}>
                  {item.label}
                </button>
              </Link>
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
              <button key={item.path} onClick={() => handleNav(item.path)} className={`text-2xl hover:text-[#00f0ff] ${isActive(item.path) ? 'text-[#00f0ff] font-bold' : 'text-white'}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <PageTransition>
                  <Hero
                    setPage={(page) => navigate(page === 'contact' ? '/contact' : '/services')}
                    onOpenAudit={() => setAuditOpen(true)}
                  />

                  <AnimatedSection className="py-12 border-y border-white/5 bg-[#0a0e26]/50">
                    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                      {METRICS.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl md:text-4xl font-bold mb-1">
                            <CountUpAnimation value={stat.value} />
                          </div>
                          <div className="text-[#00f0ff] text-xs uppercase">{stat.label}</div>
                          {stat.sublabel && <div className="text-gray-400 text-[10px] mt-1">{stat.sublabel}</div>}
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>

                  <div className="py-24 bg-[#050816]">
                    <div className="container mx-auto px-6">
                      <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-5xl font-bold text-white mb-8">Our Services</h2>
                      </AnimatedSection>
                      <div className="grid md:grid-cols-3 gap-6">
                        {SERVICES.slice(0, 3).map((s, index) => (
                          <AnimatedSection key={s.id} delay={index * 0.1} className="bg-[#0a0e26] p-8 rounded-xl border border-white/5 hover:border-[#00f0ff] transition-colors group">
                            <div className="text-[#00f0ff] mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                            <p className="text-gray-400 text-sm">{s.desc}</p>
                          </AnimatedSection>
                        ))}
                      </div>
                      <AnimatedSection className="text-center mt-12" delay={0.4}>
                        <Link to="/services">
                          <Button variant="secondary">View All Services</Button>
                        </Link>
                      </AnimatedSection>
                    </div>
                  </div>

                  <CaseStudiesSection />
                  <ProcessSection />
                  <HostingSection />
                  <AnalyticsSection />
                  <TestimonialsSection />
                </PageTransition>
              } />

              <Route path="/about" element={<PageTransition><AboutPage setPage={(page) => navigate(page === 'contact' ? '/contact' : '/services')} /></PageTransition>} />
              <Route path="/services" element={<PageTransition><ServicesPage setPage={(page) => navigate(page === 'contact' ? '/contact' : '/services')} /></PageTransition>} />
              <Route path="/pricing" element={<PageTransition><PricingSection setPage={(page) => navigate(page === 'contact' ? '/contact' : '/services')} /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <footer className="border-t border-white/5 py-12 bg-[#03050e]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PehchanlyLogo className="w-8 h-8" />
                <span className="font-bold text-xl">PEHCHANLY</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">Building Digital Identities for Business Growth</p>
              <p className="text-xs text-gray-600">Serving businesses across India with premium digital solutions.</p>
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
                <li onClick={() => navigate('/about')} className="hover:text-[#00f0ff] cursor-pointer">About</li>
                <li onClick={() => navigate('/pricing')} className="hover:text-[#00f0ff] cursor-pointer">Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="mb-4">
                  <p className="text-white font-medium mb-1">Headquarters:</p>
                  <p>{OFFICE_LOCATION.address}</p>
                  <p>{OFFICE_LOCATION.landmark}</p>
                  <p>{OFFICE_LOCATION.city} - {OFFICE_LOCATION.pincode}</p>
                </li>
                <li>{BRAND.email}</li>
                <li>{BRAND.phone}</li>
                <li className="mt-4">
                  <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:underline">WhatsApp →</a>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Cities */}
          <div className="border-t border-white/5 pt-6 pb-4">
            <div className="flex flex-wrap gap-2 justify-center text-xs text-gray-600">
              {SEO_CITIES.map((city, i) => (
                <span key={i} className="hover:text-gray-400 cursor-default">{city} {i < SEO_CITIES.length - 1 && "•"}</span>
              ))}
            </div>
            <div className="text-center text-gray-600 text-xs mt-4">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};



export default App;
