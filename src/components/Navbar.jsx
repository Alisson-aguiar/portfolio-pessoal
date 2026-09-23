import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

export default function Navbar({ isVisible }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 3.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Destaques', href: '#destaques' },
    { label: 'Certificações', href: '#certificacoes' },
    { label: 'Processo', href: '#processo' },
    // { label: 'Depoimentos', href: '#depoimentos' },
  ];

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
      }}
    >
      <nav
      className='nav-mobile'
        style={{
          width: '100%',
          margin: 0,
          padding: '14px 5%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'rgba(23, 23, 23, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(6, 182, 212, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#ffffff',
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

        {/* Action Button */}
        <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://wa.me/558496572500?text=Ol%C3%A1%20Alisson!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 22px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
              color: '#121212',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '30px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Contato
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#06b6d4',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            margin: '10px 24px',
            padding: '24px',
            backgroundColor: '#171717',
            border: '1px solid rgba(6, 182, 212, 0.3)',
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
          background-color: #06b6d4;
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
