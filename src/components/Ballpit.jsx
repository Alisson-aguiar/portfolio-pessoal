import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';
import { Search, PenTool, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProcessSection() {
  const { t } = useTranslation();

  const steps = [
    {
      num: '01',
      title: t('process.steps.0.title', 'Discovery & Requisitos'),
      subtitle: t('process.steps.0.subtitle', 'Entendimento do Negócio'),
      description: t('process.steps.0.description', 'Reunião inicial para compreender as necessidades, alinhar expectativas e definir o escopo ideal para o seu projeto.'),
      icon: Search,
    },
    {
      num: '02',
      title: t('process.steps.1.title', 'Design & Arquitetura'),
      subtitle: t('process.steps.1.subtitle', 'Planejamento Estratégico'),
      description: t('process.steps.1.description', 'Criação de protótipos (UI/UX), escolha das melhores tecnologias e estruturação da arquitetura do sistema.'),
      icon: PenTool,
    },
    {
      num: '03',
      title: t('process.steps.2.title', 'Desenvolvimento'),
      subtitle: t('process.steps.2.subtitle', 'Código & Engenharia'),
      description: t('process.steps.2.description', 'Construção do software com código limpo, responsivo e escalável, aplicando as melhores práticas do mercado.'),
      icon: Code,
    },
    {
      num: '04',
      title: t('process.steps.3.title', 'Entrega & Deploy'),
      subtitle: t('process.steps.3.subtitle', 'Lançamento ao Mundo'),
      description: t('process.steps.3.description', 'Testes rigorosos, publicação em ambiente de produção e suporte contínuo para garantir estabilidade e sucesso.'),
      icon: Rocket,
    },
  ];

  return (
    <section id="processo" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Discreet Luxury Ballpit Canvas Background */}
      <BallpitCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <ScrollFloat subtitle={t('process.badge')} accent={true}>
          {t('process.title')}
        </ScrollFloat>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
            marginTop: '50px',
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'relative',
                  backgroundColor: 'rgba(23, 23, 23, 0.8)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  border: '1px solid rgba(0, 168, 255, 0.25)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                  transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#00a8ff';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 168, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 168, 255, 0.25)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.6)';
                }}
              >
                {/* Step number badge */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '2.4rem',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #00a8ff 0%, rgba(0, 168, 255, 0.3) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {step.num}
                  </span>

                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 168, 255, 0.1)',
                      border: '1px solid rgba(0, 168, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00a8ff',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#00a8ff',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '6px',
                  }}
                >
                  {step.subtitle}
                </p>

                <h3
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1.6rem',
                    fontWeight: 400,
                    color: '#ffffff',
                    marginBottom: '12px',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BallpitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    let animationFrameId;
    const mouse = { x: -1000, y: -1000, radius: 120 };

    // Generate discrete subtle balls
    const ballCount = 28;
    const balls = [];

    for (let i = 0; i < ballCount; i++) {
      const radius = Math.random() * 22 + 10;
      const isGold = Math.random() > 0.5;

      balls.push({
        x: Math.random() * (width - radius * 2) + radius,
        y: Math.random() * (height - radius * 2) + radius,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: radius,
        color: isGold ? 'rgba(0, 168, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
        borderColor: isGold ? 'rgba(0, 168, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)',
        glow: isGold,
      });
    }

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    function update() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        // Movement
        b.x += b.vx;
        b.y += b.vy;

        // Boundary collision
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx *= -1;
        } else if (b.x + b.radius > width) {
          b.x = width - b.radius;
          b.vx *= -1;
        }

        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy *= -1;
        } else if (b.y + b.radius > height) {
          b.y = height - b.radius;
          b.vy *= -1;
        }

        // Mouse repulsion
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius + b.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius + b.radius - dist) / (mouse.radius + b.radius);
          b.vx += Math.cos(angle) * force * 5.0;
          b.vy += Math.sin(angle) * force * 5.0;
        }

        // Friction damping
        b.vx *= 0.99;
        b.vy *= 0.99;

        // Draw discreet ball
        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = b.borderColor;
        ctx.stroke();

        // Highlight specular
        ctx.beginPath();
        ctx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(update);
    }

    update();

    window.addEventListener('resize', handleResize);
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.7,
      }}
    />
  );
}
