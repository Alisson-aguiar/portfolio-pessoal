import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';
import { ArrowUpRight } from 'lucide-react';

const Blob = ({ color, size, initialPos, animatePos, duration, delay }) => (
  <motion.div
    initial={{ left: initialPos.x, top: initialPos.y, opacity: 0.3 }}
    animate={{ 
      left: animatePos.x, 
      top: animatePos.y, 
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      repeatType: 'mirror', 
      ease: 'easeInOut',
      delay: delay
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: 'blur(80px)',
      zIndex: 0,
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%)'
    }}
  />
);

export default function AccordionGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 'desenvolvimento-web',
      title: 'Desenvolvimento Web',
      subtitle: 'Sistemas Customizados & Escaláveis',
      description: 'Criação de soluções sob medida com código limpo e arquitetura de alta performance para atender às necessidades específicas do seu negócio.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
      tag: 'Full Stack & Code',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      subtitle: 'Lojas Virtuais de Alta Conversão',
      description: 'Desenvolvimento de plataformas robustas utilizando WooCommerce e Shopify, focadas em usabilidade e performance para maximizar suas vendas.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
      tag: 'Shopify & WooCommerce',
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      subtitle: 'Design Orientado a Resultados',
      description: 'Páginas corporativas e institucionais projetadas com as melhores práticas de SEO e foco total na conversão de leads e clientes.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
      tag: 'Corporate & Institutional',
    },
    {
      id: 'ux-ui',
      title: 'Design UX/UI',
      subtitle: 'Interfaces Modernas e Intuitivas',
      description: 'Criação de experiências digitais envolventes que combinam estética refinada com facilidade de uso, garantindo a melhor jornada para o usuário.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85',
      tag: 'User Experience & Interface',
    },
    {
      id: 'wordpress',
      title: 'Soluções em WordPress',
      subtitle: 'Flexibilidade e Gerenciamento',
      description: 'Desenvolvimento de sites profissionais com WordPress, integrando plugins, desenvolvimento PHP sob medida e construtores de página avançados.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85',
      tag: 'WordPress & Elementor',
    },
    {
      id: 'manutencao',
      title: 'Refatoração de Sistemas',
      subtitle: 'Modernização e Manutenção',
      description: 'Análise e atualização de sistemas corporativos antigos (legados), unindo refatoração de código com modernização de interface e performance.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85',
      tag: 'Code Optimization',
    },
  ];

  return (
    <section id="servicos" className="section-spacing" style={{ 
      position: 'relative',
      backgroundImage: 'url(/frames/frame_0099.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay escuro para garantir a legibilidade do texto sobre a imagem */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(12, 12, 12, 0.85)',
        zIndex: 0
      }} />

      {/* Dynamic Animated Background Blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <Blob 
          color="rgba(6, 182, 212, 0.25)" 
          size="600px"
          initialPos={{ x: '10%', y: '20%' }}
          animatePos={{ x: '30%', y: '60%' }}
          duration={15}
          delay={0}
        />
        <Blob 
          color="rgba(139, 92, 246, 0.2)" 
          size="750px"
          initialPos={{ x: '90%', y: '80%' }}
          animatePos={{ x: '60%', y: '20%' }}
          duration={20}
          delay={2}
        />
        <Blob 
          color="rgba(16, 185, 129, 0.15)" 
          size="550px"
          initialPos={{ x: '70%', y: '10%' }}
          animatePos={{ x: '20%', y: '80%' }}
          duration={18}
          delay={5}
        />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollFloat subtitle="Experiências Exclusivas" accent={true}>
          Serviços & Especialidades
        </ScrollFloat>

        {/* Desktop Accordion Gallery */}
        <div
          style={{
            display: 'flex',
            height: '580px',
            gap: '16px',
            marginTop: '40px',
            borderRadius: '24px',
            overflow: 'hidden',
          }}
          className="accordion-container"
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={service.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                layout
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`accordion-item ${isActive ? 'accordion-item-active' : 'accordion-item-inactive'}`}
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: isActive
                      ? 'brightness(0.75) contrast(105%)'
                      : 'brightness(0.4) grayscale(40%)',
                    transform: isActive ? 'scale(1.03)' : 'scale(1)',
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: isActive
                      ? 'linear-gradient(to top, rgba(23, 23, 23, 0.95) 0%, rgba(23, 23, 23, 0.3) 60%, transparent 100%)'
                      : 'rgba(23, 23, 23, 0.6)',
                    transition: 'background 0.5s ease',
                  }}
                />

                {/* Inactive Vertical Title */}
                {!isActive && (
                  <div className="inactive-title">
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '0.95rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {service.title}
                    </span>
                  </div>
                )}

                {/* Active Expanded Card Content */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="active-content"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '6px 14px',
                        backgroundColor: 'rgba(6, 182, 212, 0.2)',
                        border: '1px solid var(--accent-border)',
                        borderRadius: '20px',
                        color: '#06b6d4',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '14px',
                      }}
                    >
                      {service.tag}
                    </span>

                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                        fontWeight: 400,
                        color: '#ffffff',
                        marginBottom: '8px',
                        lineHeight: 1.1,
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        color: '#06b6d4',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        marginBottom: '12px',
                      }}
                    >
                      {service.subtitle}
                    </p>

                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        maxWidth: '480px',
                        marginBottom: '20px',
                      }}
                    >
                      {service.description}
                    </p>

                    <a
                      href={`https://wa.me/558496572500?text=${encodeURIComponent(`Olá Alisson! Gostaria de solicitar um orçamento para ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid #06b6d4',
                        paddingBottom: '4px',
                        transition: 'color 0.3s ease, border-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#06b6d4')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                    >
                      <span>Falar sobre Projeto</span>
                      <ArrowUpRight size={16} color="#06b6d4" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <style>{`
          .accordion-item {
            position: relative;
            height: 100%;
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
          }
          
          .accordion-item-active {
            flex: 4.5;
            min-width: 320px;
            border: 1px solid rgba(6, 182, 212, 0.6);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
          }
          
          .accordion-item-inactive {
            flex: 1;
            min-width: 70px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: none;
          }
          
          .inactive-title {
            position: absolute;
            bottom: 32px;
            left: 50%;
            transform: translateX(-50%) rotate(-90deg);
            transform-origin: center center;
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          
          .active-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 36px;
            z-index: 2;
          }

          @media (max-width: 900px) {
            .accordion-container {
              flex-direction: column !important;
              height: auto !important;
            }
            .accordion-item {
              width: 100% !important;
              min-width: 100% !important;
            }
            .accordion-item-active {
              height: 420px !important;
              flex: none !important;
            }
            .accordion-item-inactive {
              height: 80px !important;
              flex: none !important;
            }
            .inactive-title {
              transform: translate(-50%, -50%) rotate(0deg) !important;
              top: 50% !important;
              bottom: auto !important;
              width: 100% !important;
              justify-content: center !important;
            }
            .active-content {
              padding: 24px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
