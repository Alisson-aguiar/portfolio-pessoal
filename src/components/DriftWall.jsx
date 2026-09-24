import React from 'react';
import ScrollFloat from './ScrollFloat';
import { useTranslation } from 'react-i18next';

export default function DriftWall() {
  const { t } = useTranslation();

  const row1 = [
    { title: 'Dev Toolkit', img: '/destaques/dev-toolkit-02.jpg' },
    { title: 'Energia Solar', img: '/destaques/enegia-solar-notbook.jpg' },
    { title: 'Evolution PHP', img: '/destaques/evolution-php-desktop.jpg' },
    { title: 'Fotografia 3D', img: '/destaques/fotografia-3d-02.jpg' },
    { title: 'Kanban Real-time', img: '/destaques/kanban-realtime-desktop.jpg' },
    { title: 'OXM Consultoria', img: '/destaques/oxm-consultorias-01.jpg' },
  ];

  const row2 = [
    { title: 'React Hooks', img: '/destaques/react-hooks.jpg' },
    { title: 'SaaS Analytics', img: '/destaques/saas-analytics-platform-desktop.jpg' },
    { title: 'Setup Dev', img: '/destaques/dev-toolkit-03.jpg' },
    { title: 'Galeria 3D', img: '/destaques/fotografia-3d-03.jpg' },
    { title: 'OXM Corporativo', img: '/destaques/oxm-consultorias-02.jpg' },
    { title: 'Code Toolkit', img: '/destaques/dev-toolkit.jpg' },
  ];

  return (
    <section id="destaques" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <ScrollFloat subtitle={t('highlights.badge')} accent={true}>
          {t('highlights.title')}
        </ScrollFloat>
      </div>

      {/* Drift Wall Multi-Row Marquee */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
        {/* Row 1: Drifts Left */}
        <div className="drift-track-left">
          <div className="drift-inner">
            {[...row1, ...row1, ...row1].map((item, idx) => (
              <div key={idx} className="drift-item">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="drift-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Drifts Right */}
        <div className="drift-track-right">
          <div className="drift-inner">
            {[...row2, ...row2, ...row2].map((item, idx) => (
              <div key={idx} className="drift-item">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="drift-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .drift-track-left, .drift-track-right {
          overflow: hidden;
          width: 100%;
          display: flex;
          position: relative;
          padding: 12px 0; /* Ensures the hover scale doesn't clip at top/bottom */
        }

        .drift-track-left::before, .drift-track-left::after,
        .drift-track-right::before, .drift-track-right::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .drift-track-left::before, .drift-track-right::before {
          left: 0;
          background: linear-gradient(to right, #171717, transparent);
        }

        .drift-track-left::after, .drift-track-right::after {
          right: 0;
          background: linear-gradient(to left, #171717, transparent);
        }

        .drift-inner {
          display: flex;
          gap: 20px;
          width: max-content;
        }

        .drift-track-left .drift-inner {
          animation: driftLeft 45s linear infinite;
        }

        .drift-track-right .drift-inner {
          animation: driftRight 50s linear infinite;
        }

        .drift-inner:hover {
          animation-play-state: paused;
        }

        .drift-item {
          position: relative;
          width: 360px;
          height: 202px; /* 16:9 aspect ratio to avoid cutting desktop screenshots */
          flex-shrink: 0;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(0, 168, 255, 0.2);
          cursor: pointer;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .drift-item:hover {
          transform: scale(1.05);
          border-color: #00a8ff;
          z-index: 10;
        }

        .drift-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: brightness(0.85);
          transition: filter 0.4s ease;
        }

        .drift-item:hover img {
          filter: brightness(1);
        }

        .drift-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(23, 23, 23, 0.9) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .drift-item:hover .drift-overlay {
          opacity: 1;
        }

        .drift-overlay span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: #ffffff;
        }

        @keyframes driftLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes driftRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
