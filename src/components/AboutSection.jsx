import React, { useEffect, useState, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import ScrollFloat from './ScrollFloat';
import { Award, Terminal, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function CountUp({ to, duration = 2, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        ease: 'easeOut',
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>+{count}</span>;
}

export default function AboutSection() {
  const { t } = useTranslation();
  const stats = [
    { value: 3, label: t('about.stat1_label'), icon: Terminal },
    { value: 30, label: t('about.stat2_label'), icon: Award },
    { value: 50, label: t('about.stat3_label'), icon: Users },
  ];

  const imageRef = useRef(null);
  const borderRef = useRef(null);
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (!imageRef.current || !borderRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (0.5 - y) * 20; 
    const rotateY = (x - 0.5) * -20; 

    imageRef.current.style.transition = 'none';
    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    borderRef.current.style.transition = 'none';
    borderRef.current.style.transform = `perspective(1000px) rotateX(${rotateX * -0.3}deg) rotateY(${rotateY * -0.3}deg) scale3d(0.98, 0.98, 0.98)`;

    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(0, 168, 255, 0.25) 0%, transparent 60%)`,
      transition: 'none',
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current || !borderRef.current) return;
    imageRef.current.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    imageRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    
    borderRef.current.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    borderRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    setGlareStyle({ opacity: 0, transition: 'opacity 0.6s ease' });
  };

  return (
    <section id="sobre" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <ScrollFloat subtitle={t('about.badge')} accent={true}>
          {t('about.title')}
        </ScrollFloat>

        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'stretch',
            marginTop: '40px',
          }}
        >
          {/* Left Column: Photographer Photo */}
          <motion.div
            className="about-photo-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              maxWidth: 480,
              margin: '0 auto',
              perspective: '1000px',
              zIndex: 10, // Bring forward so glare/tilt isn't obscured
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient gold glow back */}
            <div
              ref={borderRef}
              style={{
                position: 'absolute',
                top: -20,
                left: -20,
                right: 20,
                bottom: 20,
                border: '1px solid var(--accent-border)',
                borderRadius: '16px',
                zIndex: 0,
                pointerEvents: 'none',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            <div
              ref={imageRef}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                zIndex: 1,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8)',
                height: '100%',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Glare overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 10,
                  pointerEvents: 'none',
                  ...glareStyle
                }}
              />

              <img
                src="./image/alisson-aguiar.png"
                alt="Alisson Aguiar — Desenvolvedor Web"
                loading="lazy"
                className="about-img"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(25%) contrast(105%)',
                  transition: 'filter 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%) contrast(108%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(25%) contrast(105%)';
                }}
              />

              {/* Bottom vignette overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(23, 23, 23, 0.95), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '24px',
                  zIndex: 2,
                  transform: 'translateZ(30px)', // Parallax effect on the text itself
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '1.2rem',
                      letterSpacing: '0.1em',
                      color: '#ffffff',
                      marginBottom: '4px',
                      textShadow: '0 4px 10px rgba(0,0,0,0.5)',
                    }}
                  >
                    Alisson Aguiar
                  </p>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#00a8ff',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      textShadow: '0 4px 10px rgba(0,0,0,0.5)',
                    }}
                  >
                    {t('about.photoBadge')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & TextPressure & Stats */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 100,
                color: '#ffffff',
                lineHeight: 1.1,
                margin: 0
              }}>
                {t('about.greeting1')}<span style={{ color: '#00a8ff' }}>{t('about.greeting2')}</span>
              </h2>
            </div>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                fontWeight: 300,
                marginBottom: '20px',
              }}
            >
              {t('about.description1')}
            </p>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                fontWeight: 300,
                marginBottom: '20px',
              }}
            >
              {t('about.description2')}
            </p>

            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                fontWeight: 300,
                marginBottom: '40px',
              }}
            >
              <h3 style={{ color: '#ffffff', marginBottom: '10px' }}>{t('about.specialtiesTitle')}</h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>• {t('about.specFront')}</li>
                <li style={{ marginBottom: '8px' }}>• {t('about.specBack')}</li>
                <li style={{ marginBottom: '8px' }}>• {t('about.specUI')}</li>
              </ul>
            </div>

            {/* Stats Grid */}
            <div
              className="stats-grid"
              style={{
                display: 'grid',
                gap: '20px',
                borderTop: '1px solid rgba(0, 168, 255, 0.2)',
                paddingTop: '32px',
              }}
            >
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} style={{ textAlign: 'left' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '6px',
                      }}
                    >
                      <IconComponent size={18} color="#00a8ff" className='mobile-stats-icon' />
                      <span className='mobile-stats-span'
                        style={{  
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                          fontWeight: 600,
                          color: '#ffffff',
                        }}
                      >
                        <CountUp to={stat.value} />
                      </span>
                    </div>
                    <p className='mobile-stats-p'
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <style>{`
          .about-grid {
            gap: 64px;
          }
          .about-img {
            height: 100%;
            min-height: 560px;
          }
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          @media (max-width: 960px) {
            .about-grid {
              grid-template-columns: 1fr !important;
            }
            .about-photo-col {
              order: 1;
            }
            .about-text-col {
              order: 2;
            }
            .stats-grid {
              grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
              gap: 32px !important;
            }
            .about-img {
              height: 560px;
            }
          }

          @media (max-width: 640px) {
            .about-grid {
              gap: 40px;
            }
            .about-img {
              height: 420px;
            }
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 28px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
