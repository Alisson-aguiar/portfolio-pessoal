import React from 'react';
import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiWordpress,
  SiElementor,
  SiWoocommerce,
  SiShopify,
  SiFigma,
  SiPhp,
  SiNodedotjs
} from 'react-icons/si';

export default function TechStack() {
  const techLogos = [
    { node: <SiWordpress />, title: "WordPress" },
    { node: <SiElementor />, title: "Elementor" },
    { node: <SiPhp />, title: "PHP" },
    { node: <SiWoocommerce />, title: "WooCommerce" },
    { node: <SiShopify />, title: "Shopify" },
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiFigma />, title: "Figma" },
  ];

  return (
    <section className="py-8" style={{ backgroundColor: '#171717', borderBottom: '1px solid rgba(255,255,255,0.05)', width: '100%', overflow: 'hidden' }}>
      <div style={{ height: '100px', marginTop:'30px', position: 'relative', overflow: 'hidden', width: '100%' }}>
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={120}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#171717"
          ariaLabel="Tecnologias"
        />
      </div>
    </section>
  );
}
