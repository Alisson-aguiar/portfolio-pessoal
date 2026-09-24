import React from 'react';
import { Camera, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import CircularText from './CircularText';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#121212',
        borderTop: '1px solid rgba(0, 168, 255, 0.2)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1.2fr 1.5fr',
            gap: '48px',
            marginBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <img 
                src="/image/logo-alisson-aguiar.png" 
                alt="Alisson Aguiar Logo" 
                style={{ 
                  height: '48px', 
                  width: 'auto',
                  objectFit: 'contain'
                }} 
              />
            </div>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: 340,
                marginBottom: '24px',
              }}
            >
              {t('footer.bio')}
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alisson-aguiars2k/' },
                { name: 'GitHub', url: 'https://github.com/Alisson-aguiar' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '8px 14px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(0, 168, 255, 0.25)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00a8ff';
                    e.currentTarget.style.color = '#121212';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.95rem',
                letterSpacing: '0.15em',
                color: '#00a8ff',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              {t('footer.nav_title')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: t('footer.nav_links.about'), href: '#sobre' },
                { label: t('footer.nav_links.services'), href: '#servicos' },
                { label: t('footer.nav_links.differentials'), href: '#diferenciais' },
                { label: t('footer.nav_links.portfolio'), href: '#portfolio' },
                { label: t('footer.nav_links.process'), href: '#processo' },
                // { label: 'Depoimentos', href: '#depoimentos' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00a8ff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.95rem',
                letterSpacing: '0.15em',
                color: '#00a8ff',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              {t('footer.spec_title')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t('footer.spec_items', { returnObjects: true }).map((s) => (
                <li key={s}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Atendimento */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.95rem',
                letterSpacing: '0.15em',
                color: '#00a8ff',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              {t('footer.contact_title')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#00a8ff" />
                <span>+55 (84) 9657-2500</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#00a8ff" />
                <span>alissonaguiars2k10@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="#00a8ff" />
                <span>{t('footer.remote')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} margin-left="20px">
            © {new Date().getFullYear()} Alisson Aguiar. {t('footer.rights')}
          </p>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: '#00a8ff',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            <span>{t('footer.back_to_top')}</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 600px) {
            .footer-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
