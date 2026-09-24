import React, { useEffect, useRef, useState } from 'react';
import CircularText from './CircularText';
import { Calendar, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroVideo({ onVideoComplete }) {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      onVideoComplete?.(true);
      return;
    }

    let active = true;

    const canvas = document.getElementById('video-canvas');
    const videoSection = document.getElementById('video-section');
    const scrollCards = document.querySelectorAll('.scroll-card');
    const endBanner = document.getElementById('video-end-banner');

    if (!canvas || !videoSection) return;

    const ctx = canvas.getContext('2d');
    
    let frameCount = 143;
    const images = [];
    let imagesLoaded = 0;
    let videoCompleteEmitted = false;
    const PX_PER_FRAME = 24;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function preloadImages() {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const idx = String(i).padStart(4, '0');
        img.src = `/frames/frame_${idx}.webp`;
        images.push(img);

        img.onload = () => {
          if (!active) return;
          imagesLoaded++;

          if (i === 1) {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            
            // Força a renderização do frame correto
            // dependendo de onde o usuário está na página
            if (typeof handleScroll === 'function') {
              handleScroll();
            } else {
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
          }
        };
      }
    }

    function drawFrame(index) {
      if (!active) return;
      const i = Math.min(frameCount - 1, Math.max(0, index));
      const img = images[i];
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    }

    fetch('/info.json')
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        frameCount = Math.min(data.frameCount || 143, 143);
        // Restaurando a matemática Vanilla exata
        videoSection.style.height = (frameCount * PX_PER_FRAME) + window.innerHeight + 'px';
        preloadImages();
      })
      .catch(() => {
        if (!active) return;
        frameCount = 143;
        videoSection.style.height = (frameCount * PX_PER_FRAME) + window.innerHeight + 'px';
        preloadImages();
      });

    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!active) return;

        // Medição em tempo real para evitar falhas do React
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const videoScrollHeight = videoSection.offsetHeight - window.innerHeight;

        if (scrollTop <= videoScrollHeight) {
          // Lógica Clássica de mapeamento proporcional
          const scrollFraction = scrollTop / videoScrollHeight;
          const frameIndex = Math.floor(scrollFraction * frameCount);
          drawFrame(frameIndex);

          // Animate cards
          scrollCards.forEach(card => {
            const start = parseFloat(card.dataset.start);
            const end = parseFloat(card.dataset.end);
            if (scrollFraction >= start && scrollFraction <= end) {
              card.classList.add('active');
            } else {
              card.classList.remove('active');
            }
          });

          // Show end banner and cards
          const endCards = document.getElementById('video-end-cards');
          if (frameIndex >= 137) {
             if (endBanner) endBanner.classList.add('visible');
             if (endCards) endCards.classList.add('visible');
          } else {
             if (endBanner) endBanner.classList.remove('visible');
             if (endCards) endCards.classList.remove('visible');
          }

          // Show/Hide Scroll Indicator
          const scrollIndicator = document.getElementById('scroll-indicator');
          if (scrollIndicator) {
             if (frameIndex > 3) {
                 scrollIndicator.classList.add('hidden');
             } else {
                 scrollIndicator.classList.remove('hidden');
             }
          }

          // Video Complete trigger area
          if (!videoCompleteEmitted && scrollTop >= videoScrollHeight - 10) {
            drawFrame(frameCount - 1); // hold last frame
            videoCompleteEmitted = true;
            onVideoComplete?.(true);
          } else if (videoCompleteEmitted && scrollTop < videoScrollHeight - 10) {
            videoCompleteEmitted = false;
            onVideoComplete?.(false);
          }
          
        } else {
          // Past the section: hold the last frame
          drawFrame(frameCount - 1);
          if (!videoCompleteEmitted) {
            videoCompleteEmitted = true;
            onVideoComplete?.(true);
          }
        }
      });
    };

    const handleResize = () => {
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const videoScrollHeight = (frameCount * PX_PER_FRAME);
        const fraction = Math.min(1, scrollTop / videoScrollHeight);
        drawFrame(Math.floor(fraction * frameCount));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      active = false;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [onVideoComplete, isMobile]);

  const bannerContent = (
    <>
      <div className="banner-actions banner-mobile"
        style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>

        <div className='mobile-hj'  style={{ position: 'relative', width: 90, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', fontFamily: "'JetBrains Mono', monospace", fontSize: '26px', fontWeight: '100', color: '#00a8ff', zIndex: 2 }}>
            AA
          </div>
          <div style={{ position: 'absolute', transform: 'scale(0.45)', transformOrigin: 'center', fontWeight: '100', }}>
            <CircularText text="ALISSON AGUIAR • " spinDuration={20} className="" onHover="speedUp" />
          </div>
        </div>

        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 20px',
            borderRadius: '30px',
            backgroundColor: 'rgba(0, 168, 255, 0.08)',
            border: '1px solid rgba(0, 168, 255, 0.35)',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#00a8ff', boxShadow: '0 0 10px #00a8ff' }} />
          <span className='mobile-bagde-photo' style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00a8ff', fontWeight: 600 }}>
            {t('hero.badge')}
          </span>
        </div>

      </div>

      <div className='mobile-main' style={{ position: 'relative', zIndex: 1, padding: '10px 0' }}>
        <h1 className='title-main' style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 100,
          color: '#ffffff',
          lineHeight: 1.1,
          marginBottom: '16px',
          textShadow: '0 4px 20px rgba(0,0,0,0.4)',
          maxWidth: '700px',
          width: '100%',
        }}>
          {t('hero.title1')}<span style={{color: '#00a8ff'}}>{t('hero.title2')}</span>{t('hero.title3')}
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
          color: 'rgba(255,255,255,0.75)',
          maxWidth: '700px',
          lineHeight: 1.6,
          fontWeight: 300,
          textShadow: '0 2px 10px rgba(0,0,0,0.4)'
        }}>
          {t('hero.subtitle')}
        </p>
      </div>

      <div className="banner-actions"
        style={{ display: 'flex', gap: '20px', marginTop: '24px', position: 'relative', zIndex: 2, flexWrap: 'wrap' }}>
        <a href="#portfolio" aria-label="Ver Projetos no Portfólio" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Briefcase size={18} />
          <span>{t('hero.btnProjects')}</span>
        </a>

        <a 
          href="https://wa.me/558496572500?text=Ol%C3%A1%20Alisson!%20Gostaria%20de%20falar%20sobre%20um%20projeto." 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Iniciar Projeto via WhatsApp"
          className="btn-secondary" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Calendar size={18} />
          <span>{t('hero.btnContact')}</span>
        </a>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <div id="video-section-mobile" style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        backgroundImage: 'url(/frames/frame_0143.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Camada de escurecimento para dar contraste ao texto */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        
        <div id="video-end-banner" className="visible" style={{ position: 'relative', opacity: 1, pointerEvents: 'auto', transform: 'none', left: '0', top: '0', width: '100%', padding: '0 24px', zIndex: 2 }}>
          {bannerContent}
        </div>
      </div>
    );
  }

  return (
    <div id="video-section" ref={containerRef}>
      <div id="video-sticky">
        <canvas id="video-canvas"></canvas>

        <div id="scroll-indicator" className="scroll-indicator">
          <div className="mouse"></div>
          <p>{t('hero.scrollDown')}</p>
        </div>

        <div id="scroll-cards-container">
          <div className="scroll-card card-top-left" data-start="0.05" data-end="0.45">
            <h3>{t('hero.cards.cleanCodeTitle')}</h3>
            <p>{t('hero.cards.cleanCodeDesc')}</p>
          </div>
          
          <div className="scroll-card card-bottom-left" data-start="0.35" data-end="0.75">
            <h3>{t('hero.cards.architectureTitle')}</h3>
            <p>{t('hero.cards.architectureDesc')}</p>
          </div>
          
          <div className="scroll-card card-top-right" data-start="0.20" data-end="0.60">
            <h3>{t('hero.cards.uxuiTitle')}</h3>
            <p>{t('hero.cards.uxuiDesc')}</p>
          </div>
          
          <div className="scroll-card card-bottom-right" data-start="0.50" data-end="0.90">
            <h3>{t('hero.cards.valueTitle')}</h3>
            <p>{t('hero.cards.valueDesc')}</p>
          </div>
        </div>

        <div id="video-end-banner">
          {bannerContent}
        </div>
        
        <div id="video-end-cards">
          <div className="highlight-card">
            <h4>{t('hero.highlights.expTitle')}</h4>
            <p>{t('hero.highlights.expDesc')}<strong>{t('hero.highlights.expStrong1')}</strong>{t('hero.highlights.expDiv')}<strong>{t('hero.highlights.expStrong2')}</strong></p>
          </div>
          <div className="highlight-card">
            <h4>{t('hero.highlights.fullStackTitle')}</h4>
            <p>{t('hero.highlights.fullStackDesc')}</p>
          </div>
          <div className="highlight-card">
            <h4>{t('hero.highlights.uxuiTitle')}</h4>
            <p>{t('hero.highlights.uxuiDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
