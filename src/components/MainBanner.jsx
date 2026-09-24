import React from 'react';
import { motion } from 'framer-motion';
import CircularText from './CircularText';
import { ArrowDown, Calendar, Image as ImageIcon } from 'lucide-react';

export default function MainBanner() {
  return (
    <section
      id="banner"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171717',
        padding: '100px 24px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 168, 255, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
        {/* Photographer luxury badge & Circular Text */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', width: 90, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ position: 'absolute', fontFamily: "'JetBrains Mono', monospace", fontSize: '26px', fontWeight: 'bold', color: '#00a8ff', zIndex: 2 }}>
              AA
            </div>
            <div style={{ position: 'absolute', transform: 'scale(0.45)', transformOrigin: 'center' }}>
              <CircularText text="ALISSON AGUIAR � " spinDuration={20} className="" onHover="speedUp" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 20px',
              borderRadius: '30px',
              backgroundColor: 'rgba(0, 168, 255, 0.08)',
              border: '1px solid rgba(0, 168, 255, 0.35)',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#00a8ff',
                boxShadow: '0 0 10px #00a8ff',
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#00a8ff',
                fontWeight: 600,
              }}
            >
              Alisson Aguiar � Desenvolvedor Web
            </span>
          </motion.div>
        </div>

        {/* Elegant Title */}
        <div style={{ position: 'relative', zIndex: 1, padding: '20px 0' }}>
          <h1 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 500,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}>
            Transformando ideias complexas em interfaces digitais modernas.
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 300,
            textShadow: '0 2px 10px rgba(0,0,0,0.4)'
          }}>
            Desenvolvedor Full Stack e Web Designer focado no equil�brio perfeito entre c�digo limpo, arquitetura escal�vel e UX/UI de alta performance.
          </p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          <a href="#portfolio" className="btn-primary">
            <ImageIcon size={18} />
            <span>Ver Portf�lio</span>
          </a>

          <a 
            href="https://wa.me/558496572500?text=Ol%C3%A1%20Alisson!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Calendar size={18} color="#00a8ff" />
            <span>Iniciar Projeto</span>
          </a>
        </motion.div>

        {/* Scroll down indicator to Next Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            marginTop: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            color: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Conhe�a a hist�ria
          </span>
          <ArrowDown size={18} color="#00a8ff" style={{ animation: 'bounceSlow 2s infinite ease-in-out' }} />
          <style>{`
            @keyframes bounceSlow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(6px); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
