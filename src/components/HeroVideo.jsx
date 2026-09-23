import React, { useEffect, useRef } from 'react';
import CircularText from './CircularText';
import { Calendar, Briefcase } from 'lucide-react';

export default function HeroVideo({ onVideoComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
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

          if (imagesLoaded === 1) {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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

          // Show end banner
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
  }, [onVideoComplete]);

  return (
    <div id="video-section" ref={containerRef}>
      <div id="video-sticky">
        <canvas id="video-canvas"></canvas>

        <div id="scroll-indicator" className="scroll-indicator">
          <div className="mouse"></div>
          <p>Role para explorar</p>
        </div>

        <div id="scroll-cards-container">
          <div className="scroll-card card-top-left" data-start="0.05" data-end="0.35">
            <h3>Código Limpo & Escalável</h3>
            <p>Desenvolvimento focado em manutenibilidade, alta performance e boas práticas de engenharia de software.</p>
          </div>
          
          <div className="scroll-card card-bottom-left" data-start="0.25" data-end="0.55">
            <h3>Arquitetura Moderna</h3>
            <p>Construção de aplicações robustas utilizando as tecnologias mais avançadas e eficientes do ecossistema.</p>
          </div>
          
          <div className="scroll-card card-top-right" data-start="0.15" data-end="0.45">
            <h3>Foco no Usuário (UX/UI)</h3>
            <p>Interfaces intuitivas, responsivas e experiências fluidas projetadas para engajar e converter.</p>
          </div>
          
          <div className="scroll-card card-bottom-right" data-start="0.35" data-end="0.70">
            <h3>Entrega de Valor</h3>
            <p>Transformando desafios complexos de negócio em soluções tecnológicas eficientes e inovadoras.</p>
          </div>
        </div>

        {/* 
            Banner Final
            O ParticleText e CircularText do React Bits estão embutidos aqui 
            de forma passiva, fluindo naturalmente com a opacidade gerada 
            pela classe .visible controlada pelo scroll.
        */}
        <div id="video-end-banner">
          {/* <div className="banner-actions banner-mobile" style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '24px' }}> */}
          <div className="banner-actions banner-mobile"
            style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>

            <div className='mobile-hj'  style={{ position: 'relative', width: 90, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', fontFamily: "'Cinzel', serif", fontSize: '26px', fontWeight: '100', color: '#06b6d4', zIndex: 2 }}>
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
                backgroundColor: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.35)',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#06b6d4', boxShadow: '0 0 10px #06b6d4' }} />
              <span className='mobile-bagde-photo' style={{ fontFamily: "'Cinzel', serif", fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#06b6d4', fontWeight: 600 }}>
                Alisson Aguiar • Desenvolvedor
              </span>
            </div>

          </div>

          <div className='mobile-main' style={{ position: 'relative', zIndex: 1, padding: '10px 0' }}>
            <h1 className='title-main' style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 100,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '16px',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)',
              maxWidth: '700px',
              width: '100%',
            }}>
              Transformando ideias complexas em <span style={{color: '#06b6d4'}}>interfaces digitais modernas</span>.
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
              Desenvolvedor Full Stack e Web Designer focado em alta performance e UX/UI.
            </p>
          </div>

          {/* <div className="banner-actions" style={{ display: 'flex', gap: '20px', marginTop: '40px', position: 'relative', zIndex: 2 }}> */}
          <div className="banner-actions"
            style={{ display: 'flex', gap: '20px', marginTop: '24px', position: 'relative', zIndex: 2, flexWrap: 'wrap' }}>
            <a href="#portfolio" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Briefcase size={18} />
              <span>Ver Projetos</span>
            </a>

            <a 
              href="https://wa.me/558496572500?text=Ol%C3%A1%20Alisson!%20Gostaria%20de%20falar%20sobre%20um%20projeto." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Calendar size={18} />
              <span>Iniciar Projeto</span>
            </a>
          </div>
        </div>

        <div id="video-end-cards" className="desktop-only">
          <div className="highlight-card">
            <h4>+3 Anos</h4>
            <p>de Experiência em Desenvolvimento</p>
          </div>
          <div className="highlight-card">
            <h4>Full Stack</h4>
            <p>React, Node.js, PHP, e muito mais</p>
          </div>
          <div className="highlight-card">
            <h4>UX/UI</h4>
            <p>Foco em interfaces intuitivas e alta conversão</p>
          </div>
        </div>
      </div>
    </div>
  );
}
