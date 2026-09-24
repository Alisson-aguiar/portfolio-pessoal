import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollFloat from './ScrollFloat';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import ElectricBorder from './ElectricBorder';
import { useTranslation } from 'react-i18next';

export default function DomeGallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!glowRef.current) return;
    const rect = glowRef.current.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    glowRef.current.animate(
      { transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` },
      { duration: 800, fill: 'forwards', easing: 'ease-out' }
    );
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      setCurrentSlideIndex(0);
    }
  }, [selectedImage]);

  const portfolio = [
    {
      id: 1,
      title: t('portfolio.projects.kanban.title'),
      category: 'sistemas',
      categoryName: t('portfolio.categories.sistemas'),
      image: '/projetos/banner-kanban.png',
      images: ['/projetos/banner-kanban.png'],
      description: t('portfolio.projects.kanban.description'),
      link: 'https://kanban-realtime-xi.vercel.app/landing',
      github: 'https://github.com/Alisson-aguiar/kanban-realtime'
    },
    {
      id: 2,
      title: t('portfolio.projects.saas.title'),
      category: 'sistemas',
      categoryName: t('portfolio.categories.sistemas'),
      image: '/projetos/banner-saas.png',
      images: ['/projetos/banner-saas.png'],
      description: t('portfolio.projects.saas.description'),
      link: 'https://saas-analytics-platform-six.vercel.app/',
      github: 'https://github.com/Alisson-aguiar/saas-analytics-platform'
    },
    {
      id: 3,
      title: t('portfolio.projects.php.title'),
      category: 'sistemas',
      categoryName: t('portfolio.categories.sistemas'),
      image: '/projetos/banner-php-evolution.png',
      images: ['/projetos/banner-php-evolution.png'],
      description: t('portfolio.projects.php.description'),
      link: 'https://evolution-php.vercel.app/',
      github: 'https://github.com/Alisson-aguiar/evolution-php'
    },
    /*
    {
      id: 4,
      title: 'Centro Educacional Zoe',
      category: 'sites',
      categoryName: t('portfolio.categories.sites'),
      image: '/projetos/banner-centro-educacional-zoe.png',
      images: ['/projetos/banner-centro-educacional-zoe.png'],
      description: 'Site Institucional - Nível I ao 6° ano',
      link: 'https://centro-educacional-zoe.vercel.app/',
      github: ''
    },
    */
    {
      id: 5,
      title: t('portfolio.projects.oxm.title'),
      category: 'sites',
      categoryName: t('portfolio.categories.sites'),
      image: '/projetos/banner-oxm-consultorias.png',
      images: ['/projetos/banner-oxm-consultorias.png'],
      description: t('portfolio.projects.oxm.description'),
      link: 'https://www.oxmconsultorias.com.br/',
      github: ''
    },
    {
      id: 6,
      title: t('portfolio.projects.solar.title'),
      category: 'landing-pages',
      categoryName: t('portfolio.categories.landing'),
      image: '/projetos/banner-energia-solar.png',
      images: ['/projetos/banner-energia-solar.png'],
      description: t('portfolio.projects.solar.description'),
      link: 'https://energia-solar-tan.vercel.app/',
      github: ''
    },
    {
      id: 7,
      title: t('portfolio.projects.foto3d.title'),
      category: 'landing-pages',
      categoryName: t('portfolio.categories.landing'),
      image: '/projetos/banner-fotografo-3d.png',
      images: ['/projetos/banner-fotografo-3d.png'],
      description: t('portfolio.projects.foto3d.description'),
      link: 'https://henriquejudson.vercel.app/',
      github: ''
    },
  ];

  const renderCardContent = (item) => (
    <div
      onClick={() => setSelectedImage(item)}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '40px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          display: 'block',
        }}
      />
      <div
        className="portfolio-info-overlay"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)',
          color: 'white',
        }}
      >
        <span className="portfolio-category-label" style={{ color: '#00a8ff', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
          {item.categoryName}
        </span>
        <h3 className="portfolio-card-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
          {item.title}
        </h3>
        <p className="portfolio-card-desc" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', lineHeight: 1.6 }}>
          {item.description}
        </p>
        
        <div style={{ display: 'flex', gap: '12px', marginTop: '1.5rem' }}>
          {item.link && (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-action-button primary"
            >
              <ExternalLink size={16} />
              <span>{t('portfolio.viewProject')}</span>
            </a>
          )}
          {item.github && (
            <a 
              href={item.github} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-action-button secondary"
            >
              <FaGithub size={16} />
              <span>{t('portfolio.viewGithub')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="portfolio" 
      className="section-spacing" 
      style={{ position: 'relative', overflow: 'hidden' }}
      onMouseMove={handleMouseMove}
    >
      {/* Background Interactive Lighting */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Ambient static glows */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0, 168, 255, 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 60%)',
            filter: 'blur(80px)',
            borderRadius: '50%',
          }}
        />

        {/* Mouse follower glow */}
        <div
          ref={glowRef}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '800px',
            height: '800px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(0, 168, 255, 0.12) 0%, rgba(0, 168, 255, 0) 50%)',
            filter: 'blur(40px)',
            borderRadius: '50%',
            willChange: 'transform',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollFloat subtitle={t('portfolio.badge')} accent={true}>
          {t('portfolio.title')}
        </ScrollFloat>

        {/* ScrollStack Viewport / Mobile Grid */}
        <div style={{ width: '100%', position: 'relative' }}>
          {isMobile ? (
            <div className="mobile-portfolio-grid">
              {portfolio.map((item) => (
                <div key={item.id} className="portfolio-card mobile-card">
                  {renderCardContent(item)}
                </div>
              ))}
            </div>
          ) : (
              <ScrollStack
              itemDistance={120}
              itemScale={0.03}
              itemStackDistance={15}
              stackPosition="5%"
              scaleEndPosition="2%"
              baseScale={0.85}
              scaleDuration={0.5}
              rotationAmount={0}
              blurAmount={2}
              useWindowScroll={true}
            >
              {portfolio.map((item) => (
                <ScrollStackItem key={item.id} itemClassName="portfolio-card">
                  <ElectricBorder borderRadius={40} color="#00a8ff" speed={1} chaos={0.12}>
                    {renderCardContent(item)}
                  </ElectricBorder>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          )}
        </div>
      </div>

      {/* Fullscreen Zoom Inspection Modal with Carousel */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="modal-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(10, 10, 10, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Previous Button */}
            {selectedImage.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlideIndex((prev) => (prev === 0 ? selectedImage.images.length - 1 : prev - 1));
                }}
                className="modal-prev-btn"
                style={{
                  position: 'absolute',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 9999999,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.borderColor = '#00a8ff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }}
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {/* Next Button */}
            {selectedImage.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlideIndex((prev) => (prev + 1) % selectedImage.images.length);
                }}
                className="modal-next-btn"
                style={{
                  position: 'absolute',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 9999999,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.borderColor = '#00a8ff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }}
              >
                <ChevronRight size={32} />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-content-wrapper"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden', // Segregado dentro do modal aberto, não afeta o scroll externo
                border: '1px solid rgba(0, 168, 255, 0.3)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#050505',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlideIndex}
                  src={selectedImage.images[currentSlideIndex]}
                  alt={`${selectedImage.title} - Foto ${currentSlideIndex + 1}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </AnimatePresence>
              
              <div
                className="modal-info-bar"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10,10,10,0.6) 60%, transparent 100%)',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ color: '#00a8ff', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {selectedImage.categoryName}
                  </span>
                  <h3 className="modal-title" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#ffffff', margin: '4px 0 0 0' }}>
                    {selectedImage.title}
                  </h3>
                </div>
                
                {/* Right Side: Carousel Dots and Close Button */}
                <div className="modal-right-actions">
                  {/* Carousel Indicator Dots */}
                  {selectedImage.images.length > 1 && (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {selectedImage.images.map((_, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: idx === currentSlideIndex ? '#00a8ff' : 'rgba(255,255,255,0.3)',
                            transition: 'background-color 0.3s ease'
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    style={{
                      padding: '8px 24px',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      borderRadius: '24px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00a8ff';
                      e.currentTarget.style.color = '#00a8ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    {t('portfolio.closeModal')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .portfolio-card {
          padding: 0 !important;
          height: 55vh !important;
        }
        
        .portfolio-info-overlay {
          padding: 3rem;
        }
        .portfolio-category-label {
          font-size: 0.85rem;
        }
        .portfolio-card-title {
          margin: 0.5rem 0 0;
          font-size: 2.5rem;
        }
        .portfolio-card-desc {
          margin: 1rem 0 0;
          font-size: 1rem;
        }
        .mobile-portfolio-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding: 3rem 0 0 0;
          width: 100%;
        }
        .mobile-card {
          width: 100%;
          position: relative;
        }

        @media (max-width: 1024px) {
          .portfolio-card {
            height: 50vh !important;
          }
          .portfolio-info-overlay {
            padding: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .portfolio-card {
            aspect-ratio: 1 / 1 !important;
            height: 90vw !important;
            max-height: 500px !important;
          }
          .portfolio-info-overlay {
            padding: 1.5rem !important;
            background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%) !important;
          }
          .portfolio-card-title {
            font-size: 1.8rem !important;
          }
          .portfolio-card-desc {
            font-size: 0.9rem !important;
            margin: 0.5rem 0 0 !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .project-action-button {
            padding: 8px 16px !important;
            font-size: 0.8rem !important;
          }
        }
        .project-action-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .project-action-button.primary {
          background-color: #00a8ff;
          color: #121212;
          border: 1px solid #00a8ff;
        }
        .project-action-button.primary:hover {
          background-color: transparent;
          color: #00a8ff;
        }
        .project-action-button.secondary {
          background-color: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .project-action-button.secondary:hover {
          border-color: #00a8ff;
          color: #00a8ff;
          background-color: rgba(0, 168, 255, 0.1);
        }
        .modal-overlay {
          padding: 40px;
        }
        .modal-right-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
        }
        .modal-prev-btn {
          left: 40px;
          width: 56px;
          height: 56px;
        }
        .modal-next-btn {
          right: 40px;
          width: 56px;
          height: 56px;
        }
        .modal-content-wrapper {
          width: 85vw;
          height: 85vh;
        }
        .modal-info-bar {
          padding: 30px 40px;
          flex-direction: row;
          align-items: center;
        }
        .modal-title {
          font-size: 2.2rem;
        }

        @media (max-width: 768px) {
          .modal-overlay {
            padding: 0 !important;
          }
          .modal-right-actions {
            align-items: center !important;
            flex-direction: row-reverse !important;
            justify-content: space-between !important;
            width: 100% !important;
            margin-top: 12px;
          }
          .modal-prev-btn {
            left: 12px !important;
            width: 40px !important;
            height: 40px !important;
          }
          .modal-next-btn {
            right: 12px !important;
            width: 40px !important;
            height: 40px !important;
          }
          .modal-content-wrapper {
            width: 100% !important;
            height: 100vh !important;
            border-radius: 0 !important;
            border: none !important;
          }
          .modal-info-bar {
            padding: 30px 20px 40px 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .modal-title {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
