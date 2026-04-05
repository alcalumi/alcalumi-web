export type Lang = "es" | "en";

const translations = {
  nav: {
    services: { es: "Servicios", en: "Services" },
    about: { es: "Sobre mí", en: "About" },
    process: { es: "Proceso", en: "Process" },
    results: { es: "Resultados", en: "Results" },
    contact: { es: "Contacto", en: "Contact" },
    letsTalk: { es: "Hablemos", en: "Let's Talk" },
    toggleMenu: { es: "Abrir menú", en: "Toggle menu" },
  },
  hero: {
    badge: { es: "Consultoría IA", en: "AI Consulting" },
    heading1: { es: "Transforma tu", en: "Transform your" },
    heading2: { es: "negocio con", en: "business with" },
    headingHighlight: { es: "IA", en: "AI" },
    description: {
      es: "Ayudo a las empresas a diseñar, implementar y escalar soluciones de IA que generan resultados reales. De la estrategia a la ejecución, con mentalidad de fundador y experiencia práctica.",
      en: "I help companies design, implement, and scale AI solutions that deliver real results. From strategy to execution, with a founder's mindset and hands-on expertise.",
    },
    cta1: { es: "Iniciar Proyecto", en: "Start a Project" },
    cta2: { es: "Ver Servicios", en: "Explore Services" },
    stat1Value: { es: "10+", en: "10+" },
    stat1Label: { es: "Años en Tech", en: "Years in Tech" },
    stat2Value: { es: "50+", en: "50+" },
    stat2Label: { es: "Proyectos IA Entregados", en: "AI Projects Delivered" },
    stat3Value: { es: "3x", en: "3x" },
    stat3Label: { es: "ROI Medio para Clientes", en: "Avg. ROI for Clients" },
    stat4Value: { es: "100%", en: "100%" },
    stat4Label: { es: "Enfoque Práctico", en: "Hands-on Approach" },
  },
  techLogos: {
    title: { es: "Tecnologías y Partners", en: "Technologies & Partners" },
  },
  services: {
    badge: { es: "Servicios", en: "Services" },
    heading: { es: "Cómo puedo ayudarte", en: "How I can help" },
    description: {
      es: "Consultoría IA de principio a fin — desde identificar las oportunidades adecuadas hasta desplegar soluciones listas para producción.",
      en: "End-to-end AI consulting — from identifying the right opportunities to deploying production-ready solutions.",
    },
    s1Title: { es: "Estrategia IA", en: "AI Strategy" },
    s1Desc: {
      es: "Defino tu hoja de ruta de IA. Evalúo tu negocio, identifico oportunidades de alto impacto y construyo un plan claro para integrar la IA donde más importa.",
      en: "Define your AI roadmap. I assess your business, identify high-impact opportunities, and build a clear plan to integrate AI where it matters most.",
    },
    s1Tags: {
      es: ["Evaluación de Oportunidades", "Diseño de Hoja de Ruta", "Modelado de ROI", "Análisis de Riesgos"],
      en: ["Opportunity Assessment", "Roadmap Design", "ROI Modeling", "Risk Analysis"],
    },
    s2Title: { es: "Implementación IA", en: "AI Implementation" },
    s2Desc: {
      es: "Convierto la estrategia en sistemas funcionales. Diseño y despliego soluciones de IA — desde modelos personalizados hasta integraciones con LLMs — adaptadas a tus flujos de trabajo.",
      en: "Turn strategy into working systems. I architect and deploy AI solutions — from custom models to LLM integrations — tailored to your workflows.",
    },
    s2Tags: {
      es: ["Integración LLM", "Modelos Personalizados", "Automatización", "Pipelines de Datos"],
      en: ["LLM Integration", "Custom Models", "Automation", "Data Pipelines"],
    },
    s3Title: { es: "Formación y Workshops de IA", en: "AI Training & Workshops" },
    s3Desc: {
      es: "Capacita a tu equipo con habilidades prácticas de IA. Workshops diseñados para directivos, equipos de producto e ingenieros — sin relleno, solo resultados.",
      en: "Empower your team with practical AI skills. Hands-on workshops designed for executives, product teams, and engineers — no fluff, just results.",
    },
    s3Tags: {
      es: ["Briefings Ejecutivos", "Workshops de Equipo", "Prompt Engineering", "Alfabetización IA"],
      en: ["Executive Briefings", "Team Workshops", "Prompt Engineering", "AI Literacy"],
    },
    s4Title: { es: "Director de IA Fraccional", en: "Fractional AI Officer" },
    s4Desc: {
      es: "Obtén liderazgo senior en IA sin el compromiso a tiempo completo. Me integro en tu equipo para impulsar iniciativas de IA, mentorizar talento y asegurar un impacto duradero.",
      en: "Get senior AI leadership without the full-time commitment. I embed with your team to drive AI initiatives, mentor talent, and ensure lasting impact.",
    },
    s4Tags: {
      es: ["Liderazgo IA", "Mentoría de Equipos", "Selección de Proveedores", "Gobernanza"],
      en: ["AI Leadership", "Team Mentoring", "Vendor Selection", "Governance"],
    },
  },
  about: {
    badge: { es: "Sobre mí", en: "About" },
    name: { es: "Miguel Cabanes", en: "Miguel Cabanes" },
    p1: {
      es: "Soy consultor de IA y emprendedor con base en Valencia, España. Tras cofundar y escalar empresas tecnológicas, ahora ayudo a negocios a aprovechar la IA para trabajar más inteligente, moverse más rápido y construir ventajas competitivas duraderas.",
      en: "I'm an AI consultant and entrepreneur based in Valencia, Spain. After co-founding and scaling tech companies, I now help businesses harness AI to work smarter, move faster, and build lasting competitive advantages.",
    },
    p2: {
      es: "Mi enfoque es simple: entender tu negocio en profundidad, identificar dónde la IA crea más valor y entregar soluciones que realmente funcionan en el mundo real — no solo en demos.",
      en: "My approach is simple: understand your business deeply, identify where AI creates the most value, and deliver solutions that actually work in the real world — not just in demos.",
    },
    p3: {
      es: "Trabajo con startups, scale-ups y equipos enterprise en toda Europa, aportando una mezcla de profundidad técnica y pragmatismo empresarial que viene de años construyendo productos y liderando equipos.",
      en: "I work with startups, scale-ups, and enterprise teams across Europe, bringing a blend of technical depth and business pragmatism that comes from years of building products and leading teams.",
    },
    h1Title: { es: "Enfoque IA-First", en: "AI-First Approach" },
    h1Text: {
      es: "Cada recomendación se basa en lo que la IA puede realmente ofrecer hoy — no en el hype.",
      en: "Every recommendation is grounded in what AI can actually deliver today — not hype.",
    },
    h2Title: { es: "Experiencia Empresarial", en: "Business Background" },
    h2Text: {
      es: "La experiencia como cofundador significa que entiendo el lado de negocio, no solo la tecnología.",
      en: "Co-founder experience means I understand the business side, not just the tech.",
    },
    h3Title: { es: "Orientado a Resultados", en: "Results-Driven" },
    h3Text: {
      es: "Mido el éxito por resultados de negocio — ingresos, eficiencia, ventaja competitiva.",
      en: "I measure success by business outcomes — revenue, efficiency, competitive advantage.",
    },
    h4Title: { es: "Ejecución Práctica", en: "Hands-On Delivery" },
    h4Text: {
      es: "No solo asesoro — construyo. Presentaciones de estrategia que también vienen con prototipos funcionales.",
      en: "I don't just advise — I build. Strategy decks that also come with working prototypes.",
    },
  },
  process: {
    badge: { es: "Proceso", en: "Process" },
    heading: { es: "Cómo trabajamos juntos", en: "How we work together" },
    description: {
      es: "Una metodología probada que reduce riesgos y acelera el tiempo de obtención de valor.",
      en: "A proven methodology that reduces risk and accelerates time to value.",
    },
    step1Title: { es: "Descubrimiento", en: "Discovery" },
    step1Desc: {
      es: "Inmersión profunda en tu negocio, flujos de trabajo y panorama de datos. Identifico dónde la IA puede crear el mayor impacto y evalúo la preparación técnica.",
      en: "Deep dive into your business, workflows, and data landscape. I identify where AI can create the most impact and assess technical readiness.",
    },
    step1Duration: { es: "1-2 semanas", en: "1-2 weeks" },
    step2Title: { es: "Estrategia", en: "Strategy" },
    step2Desc: {
      es: "Construyo una hoja de ruta clara de IA con casos de uso priorizados, ROI esperado, recomendaciones tecnológicas y un plan de implementación por fases.",
      en: "Build a clear AI roadmap with prioritized use cases, expected ROI, technology recommendations, and a phased implementation plan.",
    },
    step2Duration: { es: "2-3 semanas", en: "2-3 weeks" },
    step3Title: { es: "Construcción", en: "Build" },
    step3Desc: {
      es: "Desarrollo práctico de soluciones de IA. Desde prueba de concepto hasta sistemas listos para producción, con alineación continua con los stakeholders.",
      en: "Hands-on development of AI solutions. From proof-of-concept to production-ready systems, with continuous stakeholder alignment.",
    },
    step3Duration: { es: "4-12 semanas", en: "4-12 weeks" },
    step4Title: { es: "Escalado", en: "Scale" },
    step4Desc: {
      es: "Despliegue, monitorización y optimización. Me aseguro de que tus soluciones de IA generen valor sostenido y ayudo a tu equipo a apropiarse de la tecnología a largo plazo.",
      en: "Deploy, monitor, and optimize. I ensure your AI solutions deliver sustained value and help your team own the technology long-term.",
    },
    step4Duration: { es: "Continuo", en: "Ongoing" },
  },
  results: {
    badge: { es: "Resultados", en: "Results" },
    heading: { es: "Impacto que importa", en: "Impact that matters" },
    description: {
      es: "Resultados reales de proyectos reales. Cada proyecto se mide por el valor de negocio que crea.",
      en: "Real outcomes from real projects. Every engagement is measured by the business value it creates.",
    },
    cs1Category: { es: "Retail", en: "Retail" },
    cs1Title: {
      es: "Inteligencia de Cliente con IA",
      en: "AI-Powered Customer Intelligence",
    },
    cs1Desc: {
      es: "Construí un pipeline de machine learning que analiza patrones de comportamiento del cliente, permitiendo recomendaciones personalizadas que aumentaron la conversión un 35%.",
      en: "Built a machine learning pipeline that analyzes customer behavior patterns, enabling personalized recommendations that increased conversion by 35%.",
    },
    cs1M1Label: { es: "Tasa de Conversión", en: "Conversion Rate" },
    cs1M2Label: { es: "Engagement", en: "Engagement" },
    cs2Category: { es: "Telecomunicaciones", en: "Telecom" },
    cs2Title: {
      es: "Automatización Inteligente de Procesos",
      en: "Intelligent Process Automation",
    },
    cs2Desc: {
      es: "Diseñé y desplegué un sistema de automatización impulsado por IA que redujo el tiempo de procesamiento manual en un 60% mejorando la precisión en todas las operaciones.",
      en: "Designed and deployed an AI-driven automation system that reduced manual processing time by 60% while improving accuracy across operations.",
    },
    cs2M1Label: { es: "Tiempo de Procesamiento", en: "Processing Time" },
    cs2M2Label: { es: "Precisión", en: "Accuracy" },
    cs3Category: { es: "Finanzas", en: "Finance" },
    cs3Title: {
      es: "Plataforma de Analítica Predictiva",
      en: "Predictive Analytics Platform",
    },
    cs3Desc: {
      es: "Creé una solución de analítica predictiva que predice tendencias de mercado con alta precisión, permitiendo decisiones de inversión basadas en datos.",
      en: "Created a predictive analytics solution that forecasts market trends with high accuracy, enabling data-driven investment decisions.",
    },
    cs3M1Label: { es: "ROI", en: "ROI" },
    cs3M2Label: { es: "Precisión de Predicción", en: "Forecast Accuracy" },
  },
  contact: {
    badge: { es: "Contacto", en: "Contact" },
    heading1: { es: "Construyamos", en: "Let's build" },
    heading2: { es: "algo grande", en: "something great" },
    description: {
      es: "¿Listo para explorar cómo la IA puede transformar tu negocio? Cuéntame tu reto y te responderé en menos de 24 horas.",
      en: "Ready to explore how AI can transform your business? Tell me about your challenge and I'll get back to you within 24 hours.",
    },
    emailLabel: { es: "Email", en: "Email" },
    locationLabel: { es: "Ubicación", en: "Location" },
    location: { es: "Valencia, España", en: "Valencia, Spain" },
    nameLabel: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "Tu nombre", en: "Your name" },
    emailFieldLabel: { es: "Email", en: "Email" },
    emailPlaceholder: { es: "tu@empresa.com", en: "you@company.com" },
    companyLabel: { es: "Empresa", en: "Company" },
    companyPlaceholder: { es: "Tu empresa", en: "Your company" },
    messageLabel: { es: "¿Cómo puedo ayudarte?", en: "How can I help?" },
    messagePlaceholder: {
      es: "Cuéntame sobre tu proyecto o reto...",
      en: "Tell me about your project or challenge...",
    },
    submit: { es: "Enviar Mensaje", en: "Send Message" },
    successTitle: { es: "Mensaje Enviado", en: "Message Sent" },
    successText: {
      es: "Te responderé en menos de 24 horas.",
      en: "I'll get back to you within 24 hours.",
    },
  },
  footer: {
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  },
} as const;

export type TranslationKey = keyof typeof translations;

export default translations;
