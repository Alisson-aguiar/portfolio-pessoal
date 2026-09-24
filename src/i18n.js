import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const pt = {
  nav: {
    about: 'Sobre',
    services: 'Serviços',
    differentials: 'Diferenciais',
    portfolio: 'Portfólio',
    highlights: 'Destaques',
    certifications: 'Certificações',
    process: 'Processo',
    contact: 'Contato'
  },
  hero: {
    badge: 'Alisson Aguiar • Desenvolvedor',
    title1: 'Transformando ideias complexas em ',
    title2: 'interfaces digitais modernas',
    title3: '.',
    subtitle: 'Desenvolvedor Full Stack e Web Designer focado em alta performance e UX/UI.',
    btnProjects: 'Ver Projetos',
    btnContact: 'Iniciar Projeto',
    scrollDown: 'Role para explorar',
    cards: {
      cleanCodeTitle: 'Código Limpo & Escalável',
      cleanCodeDesc: 'Desenvolvimento focado em manutenibilidade, alta performance e boas práticas de engenharia de software.',
      architectureTitle: 'Arquitetura Moderna',
      architectureDesc: 'Construção de aplicações robustas utilizando as tecnologias mais avançadas e eficientes do ecossistema.',
      uxuiTitle: 'Foco no Usuário (UX/UI)',
      uxuiDesc: 'Interfaces intuitivas, responsivas e experiências fluidas projetadas para engajar e converter.',
      valueTitle: 'Entrega de Valor',
      valueDesc: 'Transformando desafios complexos de negócio em soluções tecnológicas eficientes e inovadoras.'
    },
    highlights: {
      expTitle: '+3 Anos',
      expDesc: 'de Experiência em ',
      expStrong1: 'Desenvolvimento Web',
      expDiv: ' / ',
      expStrong2: 'Web Designer',
      fullStackTitle: 'Full Stack',
      fullStackDesc: 'React, Next.js, TypeScript, JavaScript, Node.js, PHP, e muito mais',
      uxuiTitle: 'Especialista em UX/UI',
      uxuiDesc: 'Foco em interfaces intuitivas e alta performance'
    }
  },
  about: {
    badge: 'Sobre o Desenvolvedor',
    title: 'A Arte do Código',
    photoBadge: 'Desenvolvedor Web & Web Designer',
    greeting1: 'Muito prazer, eu sou ',
    greeting2: 'Alisson Aguiar.',
    description1: 'Sou um Desenvolvedor Full Stack focado em transformar ideias em interfaces digitais modernas. Minha atuação foca no equilíbrio perfeito entre código limpo, arquitetura escalável e uma sólida experiência de usuário (UX/UI).',
    description2: 'Atualmente, lidero o desenvolvimento de projetos web corporativos, utilizando tecnologias de ponta como React, Node.js e WordPress. Meu foco constante é entregar sistemas orientados à alta conversão, com excelente SEO e velocidade de carregamento superior.',
    specialtiesTitle: 'Minhas Especialidades:',
    specFront: 'Front-end: React, Next.js, Vue.js, TypeScript',
    specBack: 'Back-end & CMS: Node.js, PHP, WordPress, Shopify',
    specUI: 'UX/UI: Figma, Prototipagem e Design Responsivo',
    stat1_label: 'Anos de Experiência',
    stat2_label: 'Projetos Desenvolvidos',
    stat3_label: 'Clientes Satisfeitos'
  },
  services: {
    badge: 'Experiências Exclusivas',
    title: 'Serviços & Especialidades',
    talkProject: 'Falar sobre Projeto',
    items: [
      {
        id: 'desenvolvimento-web',
        title: 'Desenvolvimento Web',
        subtitle: 'Sistemas Customizados & Escaláveis',
        description: 'Criação de soluções sob medida com código limpo e arquitetura de alta performance para atender às necessidades específicas do seu negócio.',
        tag: 'Full Stack & Code'
      },
      {
        id: 'ecommerce',
        title: 'E-commerce',
        subtitle: 'Lojas Virtuais de Alta Conversão',
        description: 'Desenvolvimento de plataformas robustas utilizando WooCommerce e Shopify, focadas em usabilidade e performance para maximizar suas vendas.',
        tag: 'Shopify & WooCommerce'
      },
      {
        id: 'landing-pages',
        title: 'Landing Pages',
        subtitle: 'Design Orientado a Resultados',
        description: 'Páginas corporativas e institucionais projetadas com as melhores práticas de SEO e foco total na conversão de leads e clientes.',
        tag: 'Corporate & Institutional'
      },
      {
        id: 'ux-ui',
        title: 'Design UX/UI',
        subtitle: 'Interfaces Modernas e Intuitivas',
        description: 'Criação de experiências digitais envolventes que combinam estética refinada com facilidade de uso, garantindo a melhor jornada para o usuário.',
        tag: 'User Experience & Interface'
      },
      {
        id: 'wordpress',
        title: 'Soluções em WordPress',
        subtitle: 'Flexibilidade e Gerenciamento',
        description: 'Desenvolvimento de sites profissionais com WordPress, integrando plugins, desenvolvimento PHP sob medida e construtores de página avançados.',
        tag: 'WordPress & Elementor'
      },
      {
        id: 'manutencao',
        title: 'Refatoração de Sistemas',
        subtitle: 'Modernização e Manutenção',
        description: 'Análise e atualização de sistemas corporativos antigos (legados), unindo refatoração de código com modernização de interface e performance.',
        tag: 'Code Optimization'
      }
    ]
  },
  differentials: {
    badge: 'Padrão de Excelência',
    title: 'Diferenciais Exclusivos',
    items: [
      {
        id: 1,
        title: 'Mais de 3 Anos de Experiência',
        subtitle: 'Tradição & Maestria',
        description: 'Uma trajetória sólida guiada pelo desenvolvimento de interfaces digitais modernas, código limpo e arquitetura escalável.'
      },
      {
        id: 2,
        title: 'Low-code & Vibecode',
        subtitle: 'Desenvolvimento Ágil',
        description: 'Criação de soluções de rápida implementação e alta eficiência utilizando plataformas Low-code e Vibecode.'
      },
      {
        id: 3,
        title: 'Product UX/UI',
        subtitle: 'Design Centrado no Usuário',
        description: 'Prototipagem no Figma focada na experiência do usuário, usabilidade e design estratégico de produtos digitais.'
      },
      {
        id: 4,
        title: 'E-commerce de Alta Conversão',
        subtitle: 'Lojas Virtuais',
        description: 'Desenvolvimento e customização de lojas robustas utilizando Nuvemshop, Shopify e WooCommerce.'
      },
      {
        id: 5,
        title: 'SEO Operacional',
        subtitle: 'Visibilidade Digital',
        description: 'Otimização técnica rigorosa para garantir carregamento ultra rápido e excelente rankeamento nos motores de busca.'
      }
    ]
  },
  portfolio: {
    badge: 'Meus Projetos',
    title: 'Projetos Recentes',
    categories: {
      sistemas: 'Sistemas Web',
      landing: 'Landing Pages',
      ecommerce: 'E-commerce',
      sites: 'Sites Profissionais'
    },
    viewProject: 'Ver Projeto',
    viewGithub: 'Código Fonte',
    closeModal: 'Fechar',
    projects: {
      kanban: {
        title: 'Kanban Pro',
        description: 'Uma aplicação completa de gerenciamento de tarefas no estilo Kanban, desenvolvida com foco em experiência offline-first, sincronização em tempo real e gestão de equipes.'
      },
      saas: {
        title: 'SaaS Analytics Platform',
        description: 'Plataforma SaaS completa de análise de dados desenvolvida para demonstrar habilidades avançadas em desenvolvimento web full-stack.'
      },
      php: {
        title: 'PHP Moderno Reimaginado',
        description: 'Uma jornada visual e prática por tudo que transformou o PHP nos últimos anos — das dores do PHP antigo até a elegância do PHP 8.x.'
      },
      oxm: {
        title: 'OXM Consultoria',
        description: '20 anos transformando negócios através de soluções financeiras estratégicas e personalizadas.'
      },
      solar: {
        title: 'Energia Solar',
        description: 'Modelo de landing page para a área de energia solar, totalmente personalizado.'
      },
      foto3d: {
        title: 'Fotografia 3D',
        description: 'Modelo de um site fotográfico 3D totalmente personalizado com Three.js.'
      }
    }
  },
  certifications: {
    badge: 'Formação Contínua',
    title: 'Certificações em Andamento',
    items: {
      az900: 'Conceitos básicos de nuvem, serviços do Azure, cargas de trabalho, segurança e privacidade.',
      dp900: 'Conceitos principais de dados relacionais e não relacionais, e serviços de dados no Microsoft Azure.',
      ai900: 'Conceitos fundamentais de aprendizado de máquina (ML) e inteligência artificial (IA) no Azure.',
      sc900: 'Conceitos de segurança, conformidade e identidade (SCI) em ambientes de nuvem da Microsoft.',
      pl900: 'Valor de negócios e recursos dos componentes fundamentais da Microsoft Power Platform.',
      ms900: 'Benefícios e opções de soluções em nuvem no Microsoft 365, além de segurança e conformidade.',
      testing: 'Princípios, terminologias e metodologias de teste de software para garantir qualidade em aplicações.'
    }
  },
  highlights: {
    badge: 'Seleção Premium',
    title: 'Trabalhos em Destaque'
  },
  process: {
    badge: 'Jornada Exclusiva',
    title: 'Como Funciona o Processo?',
    steps: [
      { id: 'discovery', title: 'Discovery & Requisitos', subtitle: 'Entendimento do Negócio', description: 'Reunião inicial para compreender as necessidades, alinhar expectativas e definir o escopo ideal para o seu projeto.' },
      { id: 'design', title: 'Design & Arquitetura', subtitle: 'Planejamento Estratégico', description: 'Criação de protótipos (UI/UX), escolha das melhores tecnologias e estruturação da arquitetura do sistema.' },
      { id: 'development', title: 'Desenvolvimento', subtitle: 'Código & Engenharia', description: 'Construção do software com código limpo, responsivo e escalável, aplicando as melhores práticas do mercado.' },
      { id: 'delivery', title: 'Entrega & Deploy', subtitle: 'Lançamento ao Mundo', description: 'Testes rigorosos, publicação em ambiente de produção e suporte contínuo para garantir estabilidade e sucesso.' }
    ]
  },
  cta: {
    banner: 'Vamos criar o seu próximo projeto digital? — Vamos criar o seu próximo projeto digital? — ',
    description: 'Entre em contato e vamos conversar sobre como posso ajudar a tirar a sua ideia do papel e transformá-la em uma plataforma digital de sucesso.',
    btn_whatsapp: 'Falar pelo WhatsApp',
    wa_message: 'Ol%C3%A1%20Alisson!%20Gostaria%20de%20falar%20sobre%20um%20projeto.'
  },
  footer: {
    bio: 'Desenvolvimento de software e interfaces digitais. Transformando ideias em plataformas web modernas e de alta performance.',
    nav_title: 'Navegação',
    nav_links: {
      about: 'Sobre o Desenvolvedor',
      services: 'Serviços Exclusivos',
      differentials: 'Diferenciais',
      portfolio: 'Portfólio 3D',
      process: 'Processo'
    },
    spec_title: 'Especialidades',
    spec_items: ['Desenvolvimento Web', 'E-commerce', 'Landing Pages', 'Design UX/UI', 'WordPress', 'Manutenção de Sistemas'],
    contact_title: 'Atendimento',
    remote: 'Atendimento Remoto para todo o Brasil',
    rights: 'Todos os direitos reservados.',
    back_to_top: 'Voltar ao topo'
  }
};

const en = {
  nav: {
    about: 'About',
    services: 'Services',
    differentials: 'Features',
    portfolio: 'Portfolio',
    highlights: 'Highlights',
    certifications: 'Certifications',
    process: 'Process',
    contact: 'Contact'
  },
  hero: {
    badge: 'Alisson Aguiar • Developer',
    title1: 'Transforming complex ideas into ',
    title2: 'modern digital interfaces',
    title3: '.',
    subtitle: 'Full Stack Developer and Web Designer focused on high performance and UX/UI.',
    btnProjects: 'View Projects',
    btnContact: 'Start Project',
    scrollDown: 'Scroll to explore',
    cards: {
      cleanCodeTitle: 'Clean & Scalable Code',
      cleanCodeDesc: 'Development focused on maintainability, high performance, and good software engineering practices.',
      architectureTitle: 'Modern Architecture',
      architectureDesc: 'Building robust applications using the most advanced and efficient technologies in the ecosystem.',
      uxuiTitle: 'User Focused (UX/UI)',
      uxuiDesc: 'Intuitive, responsive interfaces and fluid experiences designed to engage and convert.',
      valueTitle: 'Value Delivery',
      valueDesc: 'Transforming complex business challenges into efficient and innovative technological solutions.'
    },
    highlights: {
      expTitle: '+3 Years',
      expDesc: 'of Experience as ',
      expStrong1: 'Web Developer',
      expDiv: ' / ',
      expStrong2: 'Web Designer',
      fullStackTitle: 'Full Stack',
      fullStackDesc: 'React, Next.js, TypeScript, JavaScript, Node.js, PHP, and much more',
      uxuiTitle: 'UX/UI Specialist',
      uxuiDesc: 'Focused on intuitive interfaces and high performance'
    }
  },
  about: {
    badge: 'About the Developer',
    title: 'The Art of Code',
    photoBadge: 'Web Developer & Web Designer',
    greeting1: 'Nice to meet you, I am ',
    greeting2: 'Alisson Aguiar.',
    description1: 'I am a Full Stack Developer focused on transforming ideas into modern digital interfaces. My work focuses on the perfect balance between clean code, scalable architecture, and a solid user experience (UX/UI).',
    description2: 'Currently, I lead the development of corporate web projects using cutting-edge technologies such as React, Node.js, and WordPress. My constant focus is on delivering systems geared towards high conversion, with excellent SEO and superior loading speed.',
    specialtiesTitle: 'My Specialties:',
    specFront: 'Front-end: React, Next.js, Vue.js, TypeScript',
    specBack: 'Back-end & CMS: Node.js, PHP, WordPress, Shopify',
    specUI: 'UX/UI: Figma, Prototyping, and Responsive Design',
    stat1_label: 'Years of Experience',
    stat2_label: 'Developed Projects',
    stat3_label: 'Satisfied Clients'
  },
  services: {
    badge: 'Exclusive Experiences',
    title: 'Services & Specialties',
    talkProject: 'Talk about Project',
    items: [
      {
        id: 'desenvolvimento-web',
        title: 'Web Development',
        subtitle: 'Custom & Scalable Systems',
        description: 'Creating tailored solutions with clean code and high-performance architecture to meet your business\'s specific needs.',
        tag: 'Full Stack & Code'
      },
      {
        id: 'ecommerce',
        title: 'E-commerce',
        subtitle: 'High Conversion Virtual Stores',
        description: 'Developing robust platforms using WooCommerce and Shopify, focused on usability and performance to maximize your sales.',
        tag: 'Shopify & WooCommerce'
      },
      {
        id: 'landing-pages',
        title: 'Landing Pages',
        subtitle: 'Results-Oriented Design',
        description: 'Corporate and institutional pages designed with SEO best practices and full focus on lead and client conversion.',
        tag: 'Corporate & Institutional'
      },
      {
        id: 'ux-ui',
        title: 'UX/UI Design',
        subtitle: 'Modern & Intuitive Interfaces',
        description: 'Creating engaging digital experiences that combine refined aesthetics with ease of use, ensuring the best user journey.',
        tag: 'User Experience & Interface'
      },
      {
        id: 'wordpress',
        title: 'WordPress Solutions',
        subtitle: 'Flexibility & Management',
        description: 'Professional website development with WordPress, integrating plugins, custom PHP development, and advanced page builders.',
        tag: 'WordPress & Elementor'
      },
      {
        id: 'manutencao',
        title: 'System Refactoring',
        subtitle: 'Modernization & Maintenance',
        description: 'Analysis and updating of legacy corporate systems, combining code refactoring with interface and performance modernization.',
        tag: 'Code Optimization'
      }
    ]
  },
  differentials: {
    badge: 'Standard of Excellence',
    title: 'Exclusive Features',
    items: [
      {
        id: 1,
        title: 'Over 3 Years of Experience',
        subtitle: 'Tradition & Mastery',
        description: 'A solid trajectory guided by the development of modern digital interfaces, clean code, and scalable architecture.'
      },
      {
        id: 2,
        title: 'Low-code & Vibecode',
        subtitle: 'Agile Development',
        description: 'Creation of quick-to-implement, highly efficient solutions using Low-code and Vibecode platforms.'
      },
      {
        id: 3,
        title: 'Product UX/UI',
        subtitle: 'User-Centered Design',
        description: 'Figma prototyping focused on user experience, usability, and strategic design of digital products.'
      },
      {
        id: 4,
        title: 'High Conversion E-commerce',
        subtitle: 'Virtual Stores',
        description: 'Development and customization of robust stores using Nuvemshop, Shopify, and WooCommerce.'
      },
      {
        id: 5,
        title: 'Operational SEO',
        subtitle: 'Digital Visibility',
        description: 'Rigorous technical optimization to ensure ultra-fast loading and excellent search engine ranking.'
      }
    ]
  },
  portfolio: {
    badge: 'My Projects',
    title: 'Recent Projects',
    categories: {
      sistemas: 'Web Systems',
      landing: 'Landing Pages',
      ecommerce: 'E-commerce',
      sites: 'Professional Sites'
    },
    viewProject: 'View Project',
    viewGithub: 'Source Code',
    closeModal: 'Close',
    projects: {
      kanban: {
        title: 'Kanban Pro',
        description: 'A complete Kanban-style task management application, developed with a focus on offline-first experience, real-time synchronization, and team management.'
      },
      saas: {
        title: 'SaaS Analytics Platform',
        description: 'Complete data analytics SaaS platform developed to demonstrate advanced skills in full-stack web development.'
      },
      php: {
        title: 'Modern PHP Reimagined',
        description: 'A visual and practical journey through everything that has transformed PHP in recent years — from the pains of old PHP to the elegance of PHP 8.x.'
      },
      oxm: {
        title: 'OXM Consulting',
        description: '20 years transforming businesses through strategic and personalized financial solutions.'
      },
      solar: {
        title: 'Solar Energy',
        description: 'A fully personalized landing page template for the solar energy sector.'
      },
      foto3d: {
        title: '3D Photography',
        description: 'A fully personalized 3D photography website template built with Three.js.'
      }
    }
  },
  certifications: {
    badge: 'Continuous Learning',
    title: 'Certifications in Progress',
    items: {
      az900: 'Basic cloud concepts, Azure services, workloads, security, and privacy.',
      dp900: 'Core concepts of relational and non-relational data, and data services in Microsoft Azure.',
      ai900: 'Fundamental concepts of machine learning (ML) and artificial intelligence (AI) in Azure.',
      sc900: 'Concepts of security, compliance, and identity (SCI) in Microsoft cloud environments.',
      pl900: 'Business value and capabilities of core Microsoft Power Platform components.',
      ms900: 'Benefits and options of cloud solutions in Microsoft 365, plus security and compliance.',
      testing: 'Principles, terminology, and methodologies of software testing to ensure quality in applications.'
    }
  },
  highlights: {
    badge: 'Premium Selection',
    title: 'Featured Works'
  },
  process: {
    badge: 'Exclusive Journey',
    title: 'How does the process work?',
    steps: [
      { id: 'discovery', title: 'Discovery & Requirements', subtitle: 'Business Understanding', description: 'Initial meeting to understand needs, align expectations, and define the ideal scope for your project.' },
      { id: 'design', title: 'Design & Architecture', subtitle: 'Strategic Planning', description: 'Creation of prototypes (UI/UX), choosing the best technologies, and structuring the system architecture.' },
      { id: 'development', title: 'Development', subtitle: 'Code & Engineering', description: 'Software construction with clean, responsive, and scalable code, applying the best market practices.' },
      { id: 'delivery', title: 'Delivery & Deployment', subtitle: 'Launch to the World', description: 'Rigorous testing, production deployment, and continuous support to ensure stability and success.' }
    ]
  },
  cta: {
    banner: 'Shall we build your next digital project? — Shall we build your next digital project? — ',
    description: 'Get in touch and let\'s talk about how I can help bring your idea to life and turn it into a successful digital platform.',
    btn_whatsapp: 'Chat on WhatsApp',
    wa_message: 'Hello%20Alisson!%20I%20would%20like%20to%20talk%20about%20a%20project.'
  },
  footer: {
    bio: 'Software development and digital interfaces. Transforming ideas into modern, high-performance web platforms.',
    nav_title: 'Navigation',
    nav_links: {
      about: 'About the Developer',
      services: 'Exclusive Services',
      differentials: 'Features',
      portfolio: '3D Portfolio',
      process: 'Process'
    },
    spec_title: 'Specialties',
    spec_items: ['Web Development', 'E-commerce', 'Landing Pages', 'UX/UI Design', 'WordPress', 'System Maintenance'],
    contact_title: 'Contact',
    remote: 'Remote service worldwide',
    rights: 'All rights reserved.',
    back_to_top: 'Back to top'
  }
};

const es = {
  nav: {
    about: 'Sobre Mí',
    services: 'Servicios',
    differentials: 'Diferenciales',
    portfolio: 'Portafolio',
    highlights: 'Destacados',
    certifications: 'Certificaciones',
    process: 'Proceso',
    contact: 'Contacto'
  },
  hero: {
    badge: 'Alisson Aguiar • Desarrollador',
    title1: 'Transformando ideas complejas en ',
    title2: 'interfaces digitales modernas',
    title3: '.',
    subtitle: 'Desarrollador Full Stack y Diseñador Web centrado en alto rendimiento y UX/UI.',
    btnProjects: 'Ver Proyectos',
    btnContact: 'Iniciar Proyecto',
    scrollDown: 'Desliza para explorar',
    cards: {
      cleanCodeTitle: 'Código Limpio y Escalable',
      cleanCodeDesc: 'Desarrollo centrado en la mantenibilidad, alto rendimiento y buenas prácticas de ingeniería de software.',
      architectureTitle: 'Arquitectura Moderna',
      architectureDesc: 'Construcción de aplicaciones robustas utilizando las tecnologías más avanzadas y eficientes del ecosistema.',
      uxuiTitle: 'Enfoque en el Usuario (UX/UI)',
      uxuiDesc: 'Interfaces intuitivas, receptivas y experiencias fluidas diseñadas para involucrar y convertir.',
      valueTitle: 'Entrega de Valor',
      valueDesc: 'Transformando desafíos empresariales complejos en soluciones tecnológicas eficientes e innovadoras.'
    },
    highlights: {
      expTitle: '+3 Años',
      expDesc: 'de Experiencia en ',
      expStrong1: 'Desarrollo Web',
      expDiv: ' / ',
      expStrong2: 'Diseño Web',
      fullStackTitle: 'Full Stack',
      fullStackDesc: 'React, Next.js, TypeScript, JavaScript, Node.js, PHP, y mucho más',
      uxuiTitle: 'Especialista en UX/UI',
      uxuiDesc: 'Enfoque en interfaces intuitivas y de alto rendimiento'
    }
  },
  about: {
    badge: 'Sobre el Desarrollador',
    title: 'El Arte del Código',
    photoBadge: 'Desarrollador Web y Diseñador Web',
    greeting1: 'Mucho gusto, soy ',
    greeting2: 'Alisson Aguiar.',
    description1: 'Soy un Desarrollador Full Stack enfocado en transformar ideas en interfaces digitales modernas. Mi trabajo se centra en el equilibrio perfecto entre código limpio, arquitectura escalable y una sólida experiencia de usuario (UX/UI).',
    description2: 'Actualmente, lidero el desarrollo de proyectos web corporativos, utilizando tecnologías de vanguardia como React, Node.js y WordPress. Mi enfoque constante es entregar sistemas orientados a la alta conversión, con excelente SEO y velocidad de carga superior.',
    specialtiesTitle: 'Mis Especialidades:',
    specFront: 'Front-end: React, Next.js, Vue.js, TypeScript',
    specBack: 'Back-end & CMS: Node.js, PHP, WordPress, Shopify',
    specUI: 'UX/UI: Figma, Prototipado y Diseño Responsivo',
    stat1_label: 'Años de Experiencia',
    stat2_label: 'Proyectos Desarrollados',
    stat3_label: 'Clientes Satisfechos'
  },
  services: {
    badge: 'Experiencias Exclusivas',
    title: 'Servicios y Especialidades',
    talkProject: 'Hablar sobre el Proyecto',
    items: [
      {
        id: 'desenvolvimento-web',
        title: 'Desarrollo Web',
        subtitle: 'Sistemas Personalizados y Escalables',
        description: 'Creación de soluciones a medida con código limpio y arquitectura de alto rendimiento para satisfacer las necesidades específicas de su negocio.',
        tag: 'Full Stack & Code'
      },
      {
        id: 'ecommerce',
        title: 'Comercio Electrónico',
        subtitle: 'Tiendas Virtuales de Alta Conversión',
        description: 'Desarrollo de plataformas robustas utilizando WooCommerce y Shopify, enfocadas en usabilidad y rendimiento para maximizar sus ventas.',
        tag: 'Shopify & WooCommerce'
      },
      {
        id: 'landing-pages',
        title: 'Landing Pages',
        subtitle: 'Diseño Orientado a Resultados',
        description: 'Páginas corporativas e institucionales diseñadas con las mejores prácticas de SEO y un enfoque total en la conversión de leads y clientes.',
        tag: 'Corporate & Institutional'
      },
      {
        id: 'ux-ui',
        title: 'Diseño UX/UI',
        subtitle: 'Interfaces Modernas e Intuitivas',
        description: 'Creación de experiencias digitales atractivas que combinan estética refinada con facilidad de uso, garantizando el mejor viaje del usuario.',
        tag: 'User Experience & Interface'
      },
      {
        id: 'wordpress',
        title: 'Soluciones en WordPress',
        subtitle: 'Flexibilidad y Gestión',
        description: 'Desarrollo de sitios web profesionales con WordPress, integrando plugins, desarrollo PHP personalizado y constructores de páginas avanzados.',
        tag: 'WordPress & Elementor'
      },
      {
        id: 'manutencao',
        title: 'Refactorización de Sistemas',
        subtitle: 'Modernización y Mantenimiento',
        description: 'Análisis y actualización de sistemas corporativos heredados, combinando la refactorización de código con la modernización de la interfaz y el rendimiento.',
        tag: 'Code Optimization'
      }
    ]
  },
  differentials: {
    badge: 'Estándar de Excelencia',
    title: 'Diferenciales Exclusivos',
    items: [
      {
        id: 1,
        title: 'Más de 3 Años de Experiencia',
        subtitle: 'Tradición y Maestría',
        description: 'Una trayectoria sólida guiada por el desarrollo de interfaces digitales modernas, código limpio y arquitectura escalable.'
      },
      {
        id: 2,
        title: 'Low-code y Vibecode',
        subtitle: 'Desarrollo Ágil',
        description: 'Creación de soluciones de rápida implementación y alta eficiencia utilizando plataformas Low-code y Vibecode.'
      },
      {
        id: 3,
        title: 'Product UX/UI',
        subtitle: 'Diseño Centrado en el Usuario',
        description: 'Prototipado en Figma enfocado en la experiencia del usuario, usabilidad y diseño estratégico de productos digitales.'
      },
      {
        id: 4,
        title: 'E-commerce de Alta Conversión',
        subtitle: 'Tiendas Virtuales',
        description: 'Desarrollo y personalización de tiendas robustas utilizando Nuvemshop, Shopify y WooCommerce.'
      },
      {
        id: 5,
        title: 'SEO Operacional',
        subtitle: 'Visibilidad Digital',
        description: 'Optimización técnica rigurosa para garantizar una carga ultrarrápida y un excelente posicionamiento en motores de búsqueda.'
      }
    ]
  },
  portfolio: {
    badge: 'Mis Proyectos',
    title: 'Proyectos Recientes',
    categories: {
      sistemas: 'Sistemas Web',
      landing: 'Landing Pages',
      ecommerce: 'E-commerce',
      sites: 'Sitios Profesionales'
    },
    viewProject: 'Ver Proyecto',
    viewGithub: 'Código Fuente',
    closeModal: 'Cerrar',
    projects: {
      kanban: {
        title: 'Kanban Pro',
        description: 'Una aplicación completa de gestión de tareas estilo Kanban, desarrollada con un enfoque en la experiencia offline-first, sincronización en tiempo real y gestión de equipos.'
      },
      saas: {
        title: 'SaaS Analytics Platform',
        description: 'Completa plataforma SaaS de análisis de datos desarrollada para demostrar habilidades avanzadas en el desarrollo web full-stack.'
      },
      php: {
        title: 'PHP Moderno Reimaginado',
        description: 'Un viaje visual y práctico a través de todo lo que ha transformado a PHP en los últimos años: desde los dolores del antiguo PHP hasta la elegancia de PHP 8.x.'
      },
      oxm: {
        title: 'OXM Consultoría',
        description: '20 años transformando negocios a través de soluciones financieras estratégicas y personalizadas.'
      },
      solar: {
        title: 'Energía Solar',
        description: 'Plantilla de landing page para el área de energía solar, totalmente personalizada.'
      },
      foto3d: {
        title: 'Fotografía 3D',
        description: 'Plantilla de un sitio fotográfico 3D totalmente personalizado con Three.js.'
      }
    }
  },
  certifications: {
    badge: 'Formación Continua',
    title: 'Certificaciones en Curso',
    items: {
      az900: 'Conceptos básicos de la nube, servicios de Azure, cargas de trabajo, seguridad y privacidad.',
      dp900: 'Conceptos básicos de datos relacionales y no relacionales, y servicios de datos en Microsoft Azure.',
      ai900: 'Conceptos fundamentales de aprendizaje automático (ML) e inteligencia artificial (IA) en Azure.',
      sc900: 'Conceptos de seguridad, cumplimiento e identidad (SCI) en entornos de nube de Microsoft.',
      pl900: 'Valor comercial y capacidades de los componentes fundamentales de Microsoft Power Platform.',
      ms900: 'Beneficios y opciones de soluciones en la nube en Microsoft 365, además de seguridad y cumplimiento.',
      testing: 'Principios, terminologías y metodologías de pruebas de software para garantizar la calidad de las aplicaciones.'
    }
  },
  highlights: {
    badge: 'Selección Premium',
    title: 'Trabajos Destacados'
  },
  process: {
    badge: 'Viaje Exclusivo',
    title: '¿Cómo funciona el proceso?',
    steps: [
      { id: 'discovery', title: 'Descubrimiento y Requisitos', subtitle: 'Entendimiento del Negocio', description: 'Reunión inicial para comprender las necesidades, alinear expectativas y definir el alcance ideal para su proyecto.' },
      { id: 'design', title: 'Diseño y Arquitectura', subtitle: 'Planificación Estratégica', description: 'Creación de prototipos (UI/UX), elección de las mejores tecnologías y estructuración de la arquitectura del sistema.' },
      { id: 'development', title: 'Desarrollo', subtitle: 'Código e Ingeniería', description: 'Construcción de software con código limpio, responsivo y escalable, aplicando las mejores prácticas del mercado.' },
      { id: 'delivery', title: 'Entrega y Despliegue', subtitle: 'Lanzamiento al Mundo', description: 'Pruebas rigurosas, despliegue en producción y soporte continuo para garantizar la estabilidad y el éxito.' }
    ]
  },
  cta: {
    banner: '¿Vamos a crear tu próximo proyecto digital? — ¿Vamos a crear tu próximo proyecto digital? — ',
    description: 'Ponte en contacto y hablemos sobre cómo puedo ayudarte a hacer realidad tu idea y convertirla en una plataforma digital de éxito.',
    btn_whatsapp: 'Hablar por WhatsApp',
    wa_message: 'Hola%20Alisson!%20Me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.'
  },
  footer: {
    bio: 'Desarrollo de software e interfaces digitales. Transformando ideas en plataformas web modernas y de alto rendimiento.',
    nav_title: 'Navegación',
    nav_links: {
      about: 'Sobre el Desarrollador',
      services: 'Servicios Exclusivos',
      differentials: 'Diferenciales',
      portfolio: 'Portafolio 3D',
      process: 'Proceso'
    },
    spec_title: 'Especialidades',
    spec_items: ['Desarrollo Web', 'Comercio Electrónico', 'Landing Pages', 'Diseño UX/UI', 'WordPress', 'Mantenimiento de Sistemas'],
    contact_title: 'Atención',
    remote: 'Atención Remota global',
    rights: 'Todos los derechos reservados.',
    back_to_top: 'Volver arriba'
  }
};

const resources = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
