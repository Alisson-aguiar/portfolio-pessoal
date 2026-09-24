import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar({ isVisible }) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 3.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.about'), href: '#sobre' },
    { label: t('nav.services'), href: '#servicos' },
    { label: t('nav.differentials'), href: '#diferenciais' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.highlights'), href: '#destaques' },
    { label: t('nav.certifications'), href: '#certificacoes' },
    { label: t('nav.process'), href: '#processo' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible || isScrolled ? 1 : 0,
        pointerEvents: isVisible || isScrolled ? 'auto' : 'none',
        transform: isVisible || isScrolled ? 'translateY(0)' : 'translateY(-20px)',
        boxSizing: 'border-box',
        overflow: 'visible',
      }}
    >
      <nav
        className='nav-mobile'
        style={{
          width: '100%',
          margin: 0,
          padding: '14px 0',
          boxSizing: 'border-box',
          backgroundColor: 'rgba(23, 23, 23, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 168, 255, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#ffffff',
            flexShrink: 0,
          }}
        >
          <img 
            src="/image/logo-alisson-aguiar.png" 
            alt="Alisson Aguiar Logo" 
            style={{ 
              height: '48px', 
              width: 'auto',
              objectFit: 'contain'
            }} 
          />
        </a>

        {/* Desktop Links */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            listStyle: 'none',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.label} style={{ position: 'relative' }}>
              <a
                href={link.href}
                className="nav-link-item"
                style={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  padding: '5px 0'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button & Language */}
        <div className="nav-actions" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', gap: '15px', flexShrink: 0, boxSizing: 'border-box', padding: '4px 12px' }}>
          
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              aria-label="Mudar idioma"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem'
              }}
            >
              <Globe size={18} color="var(--accent)" />
              {i18n.language.toUpperCase()}
            </button>
            {langMenuOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '10px',
                background: 'rgba(23, 23, 23, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--accent-border)',
                borderRadius: '8px',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                minWidth: '100px',
                zIndex: 9999
              }}>
                <button onClick={() => changeLanguage('pt')} style={{ background: 'none', border: 'none', color: '#fff', padding: '8px', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', borderRadius: '4px', backgroundColor: i18n.language === 'pt' ? 'rgba(0, 168, 255, 0.1)' : 'transparent' }}>PT</button>
                <button onClick={() => changeLanguage('en')} style={{ background: 'none', border: 'none', color: '#fff', padding: '8px', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', borderRadius: '4px', backgroundColor: i18n.language === 'en' ? 'rgba(0, 168, 255, 0.1)' : 'transparent' }}>EN</button>
                <button onClick={() => changeLanguage('es')} style={{ background: 'none', border: 'none', color: '#fff', padding: '8px', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', borderRadius: '4px', backgroundColor: i18n.language === 'es' ? 'rgba(0, 168, 255, 0.1)' : 'transparent' }}>ES</button>
              </div>
            )}
          </div>

          <a
            href="https://wa.me/558496572500?text=Ol%C3%A1%20Alisson!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato via WhatsApp"
            className="nav-contact-btn"
          >
            {t('nav.contact')}
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#00a8ff',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            margin: '10px 24px',
            padding: '24px',
            backgroundColor: '#171717',
            border: '1px solid rgba(0, 168, 255, 0.3)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav-link-item {
          position: relative;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 50%;
          background-color: #00a8ff;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        .nav-link-item:hover {
          color: #ffffff !important;
        }
        .nav-link-item:hover::after {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
