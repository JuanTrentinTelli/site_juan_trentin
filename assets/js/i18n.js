var I18n = {
  en: {
    skip_link: 'Skip to content',

    nav_about: 'about', nav_experience: 'experience', nav_projects: 'projects',
    nav_services: 'services', nav_terminal: 'terminal', nav_contact: 'contact',

    hero_label: '// systems supervisor · security researcher',
    hero_subtitle: 'Building systems that work.<br><span class="accent">Breaking systems that shouldn\'t.</span>',
    hero_paragraph: '10 years in IT building and sustaining corporate systems — ERP, infrastructure and security. I deliver technical results with business awareness and work well both in teams and independently.',
    hero_location: '// Guarapuava, pr  ·  available for projects',
    cta_contact: 'get in touch',
    cta_projects: 'view projects ↓',

    label_about: '01 / about', label_experience: '02 / experience',
    label_projects: '03 / projects', label_services: '04 / services',
    label_terminal: '05 / terminal', label_contact: '06 / contact',
    label_certs: 'certifications',

    about_p1: 'Started as a <strong>Systems Analyst at Ellon Tecnologia</strong>, spending over 5 years implementing and adapting ERPs for clients across different segments. From there I moved to <strong>Viasoft</strong>, working as a requirements and testing analyst — then moved to manage the same stack from the client side, gaining a rare dual perspective.',
    about_p2: 'At Plantagro I was responsible for the entire IT infrastructure — <strong>ERP, Oracle database, firewall and BI</strong> — working closely with management to ensure system availability and security. In parallel, I research offensive security under the name <strong>GhostOpcode</strong>: pentesting, recon, web application exploitation.',
    about_p3: 'I prefer to understand the full system before touching any part of it — the right diagnosis avoids rework and delivers results faster for the business.',

    exp_results_label: 'results',

    plantagro_role: 'Systems Supervisor',
    plantagro_li1: 'Coordinate IT infrastructure, ensuring availability, security and performance of corporate systems.',
    plantagro_li2: 'Develop custom reports in Delphi (Pascal) for strategic management support.',
    plantagro_li3: 'Create and maintain interactive Python dashboards for consolidating business indicators.',
    plantagro_li4: 'Manage pfSense firewall, controlling access, security policies and network integrity.',
    plantagro_li5: 'Manage system users and permissions, ensuring compliance and internal access control.',
    plantagro_r1: 'Built management dashboards in Python that expanded strategic visibility of indicators (sales, inventory, purchasing), strengthening data-driven decision making.',
    plantagro_r2: 'Strengthened corporate network security through firewall management and permission control, elevating access governance and system reliability.',

    viasoft_role: 'Requirements / Test Analyst',
    viasoft_li1: 'Develop and execute functional and regression test cases to improve the CRM.',
    viasoft_li2: 'Gather and document requirements with involved teams, ensuring clarity and traceability.',
    viasoft_li3: 'Validate technical deliveries before deployment, ensuring quality and compliance with business rules.',
    viasoft_li4: 'Support the integration and onboarding of new team members.',
    viasoft_li5: 'Maintain organized technical documentation, promoting transparency and process standardization.',
    viasoft_r1: 'Developed structured test cases that improved CRM quality, reducing failures and strengthening functional validation of deliveries.',
    viasoft_r2: 'Standardized documentation and task traceability, promoting process organization, team integration and better technical communication.',

    ellon_role: 'Systems Analyst',
    ellon_li1: 'Analyze documents and requirements provided by clients for system implementation.',
    ellon_li2: 'Develop and adapt features according to specific business needs.',
    ellon_li3: 'Ensure data integrity and consistency during deployment processes.',
    ellon_li4: 'Identify and fix systemic issues targeting performance and stability improvement.',
    ellon_li5: 'Perform technical validations before feature releases, reducing risks and rework.',
    ellon_r1: 'Implemented features focused on data integrity and performance, raising system reliability for clients.',
    ellon_r2: 'Engaged in critical requirements analysis, reducing rework and strengthening the technical quality of deliveries.',

    proj_sublabel: '// github',
    proj_overlay_artools: 'view live →', proj_overlay_pascoa: 'view live →',
    proj_overlay_colorea: 'view live →', proj_overlay_mesa: 'view live →',
    proj_overlay_galpao: 'view live →',
    proj_live: '↗ live', proj_private: '⊗ private repository',

    tag_corporate: 'corporate', tag_ai: 'local ai', tag_automation: 'automation',
    tag_digital: 'digital product', tag_institutional: 'institutional',

    proj_plantagro_desc: 'Internal dashboard built on the proprietary schema of ERP Viasoft/Agro3C. Modules for Orders, Invoices and Financials with direct reconciliation in Oracle DB. Resolved historical calculation discrepancies in Accounts Payable/Receivable via direct schema investigation — without access to official documentation.',
    proj_aila_desc: '100% offline AI companion assistant. STT, TTS, wake word and persistent memory. Multi-room integration via microphones and LEDs. Running on RTX 5090.',
    proj_ghost_desc: 'Local interactive recon framework (v1.9.0) with Rich UI and 19 modules: DNS, subdomain enum, port scan, dir enum, JS recon, WAF detection, virtual host discovery and packet sniffing. Session chaining between modules and automatic CVE lookup via NVD API. Exports JSON, HTML and session logs.',
    proj_notifier_desc: 'D-1 automation that consolidates Oracle data and dispatches daily reports to management via WhatsApp and email: accounts payable/receivable due that day, orders and invoices issued the previous day. Scheduled, no manual intervention.',
    proj_artools_desc: 'Premium product landing page for the ARTools Precision Pen. Minimalist dark design focused on conversion, with product sections, technical specifications and purchase CTA.',
    proj_pascoa_desc: 'High-conversion landing page for an Easter sales method. Result-oriented copy, VSL video, social proof and urgency. Over 2,000 students captured.',
    proj_colorea_desc: 'Digital product landing page with 20 Christian games to print. Sales funnel with conversion copy, social proof and discount offer. Target: religious families and educators.',
    proj_mesa_desc: 'Spanish-language landing page for a collection of 20 printable biblical games. LATAM sales funnel with urgency, social proof and 87% discount offer. Instant delivery via email.',
    proj_galpao_desc: 'Institutional site for a hunting and shooting club in Guarapuava, PR. Product catalog, client login area, shopping cart and contact section. Dark tactical design with own visual identity.',

    services_title: 'landing pages that <span class="accent">convert</span>',
    services_subtitle: 'From briefing to delivery in up to 10 days. Responsive design, conversion-focused copy and measurable results.',
    service_badge: 'landing page', service_tag_label: 'main service',
    service_desc: 'High-conversion page designed to turn visitors into clients. Every detail — headline, CTA, social proof — crafted for your audience and goal.',
    service_li1: 'Responsive and mobile-first design',
    service_li2: 'Conversion-oriented copy',
    service_li3: 'Form or WhatsApp CTA integrated',
    service_li4: 'Meta Pixel + Google Analytics (optional)',
    service_li5: 'Optimized speed — Core Web Vitals',
    service_li6: 'Up to 2 revision rounds included',
    service_price_label: 'starting at', service_price_note: 'per project',
    service_timeline_label: 'delivery time', service_timeline_value: '7 – 10 days',
    service_whatsapp: 'talk on whatsapp',
    service_bigger: 'Bigger or different project?<br><a href="https://wa.me/5546984156874?text=Ol%C3%A1%20Juan!%20Tenho%20um%20projeto%20e%20quero%20conversar%20sobre%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">Custom quote — no commitment.</a>',

    process1_title: 'briefing',
    process1_desc: 'You tell me the business, the audience and the goal. 30 minutes of conversation defines everything.',
    process2_title: 'design & dev',
    process2_desc: 'Prototype in 48h. I refine with your feedback and develop with clean, fast code.',
    process3_title: 'delivery',
    process3_desc: 'Site live, link in your hands. You refer a contact and the partnership continues.',

    terminal_placeholder: 'type a command...',

    contact_headline: 'Open for infrastructure projects, corporate dashboards, pentesting and security consulting.',
    contact_cv: 'download cv ↓',

    footer_built: 'built with <span class="acc">HTML</span> &middot; <span class="acc">CSS</span> &middot; <span class="acc">JS</span> &nbsp;&middot;&nbsp; no cookies, no tracking',
  },

  es: {
    skip_link: 'Saltar al contenido',

    nav_about: 'sobre', nav_experience: 'experiencia', nav_projects: 'proyectos',
    nav_services: 'servicios', nav_terminal: 'terminal', nav_contact: 'contacto',

    hero_label: '// supervisor de sistemas · investigador de seguridad',
    hero_subtitle: 'Construyo sistemas que funcionan.<br><span class="accent">Rompo los que no deberían.</span>',
    hero_paragraph: '10 años en IT construyendo y sosteniendo sistemas corporativos — ERP, infraestructura y seguridad. Entrego resultados técnicos con visión de negocio y trabajo bien tanto en equipo como de forma autónoma.',
    hero_location: '// Guarapuava, pr  ·  disponible para proyectos',
    cta_contact: 'contactar',
    cta_projects: 'ver proyectos ↓',

    label_about: '01 / sobre', label_experience: '02 / experiencia',
    label_projects: '03 / proyectos', label_services: '04 / servicios',
    label_terminal: '05 / terminal', label_contact: '06 / contacto',
    label_certs: 'certificaciones',

    about_p1: 'Comencé como <strong>Analista de Sistemas en Ellon Tecnologia</strong>, pasando más de 5 años implementando y adaptando ERPs para clientes de diferentes segmentos. De allí pasé a <strong>Viasoft</strong>, donde trabajé como analista de requisitos y pruebas — luego pasé a administrar el mismo stack del lado cliente, adquiriendo una perspectiva doble poco común.',
    about_p2: 'En Plantagro respondí por toda la infraestructura de TI — <strong>ERP, base Oracle, firewall y BI</strong> — trabajando de cerca con la gestión para garantizar disponibilidad y seguridad de los sistemas. En paralelo, investigo seguridad ofensiva bajo el nombre <strong>GhostOpcode</strong>: pentest, recon, explotación de aplicaciones web.',
    about_p3: 'Prefiero entender el sistema completo antes de tocar cualquier parte — el diagnóstico correcto evita retrabajo y entrega resultados más rápido para el negocio.',

    exp_results_label: 'resultados',

    plantagro_role: 'Supervisor de Sistemas',
    plantagro_li1: 'Coordinar la infraestructura de TI, garantizando disponibilidad, seguridad y rendimiento de los sistemas corporativos.',
    plantagro_li2: 'Desarrollar reportes personalizados en Delphi (Pascal) para apoyo estratégico a la gestión.',
    plantagro_li3: 'Crear y mantener dashboards interactivos en Python para consolidación de indicadores empresariales.',
    plantagro_li4: 'Administrar firewall pfSense, controlando accesos, políticas de seguridad e integridad de la red.',
    plantagro_li5: 'Gestionar usuarios y permisos del sistema, asegurando conformidad y control de accesos internos.',
    plantagro_r1: 'Estructuré dashboards gerenciales en Python que ampliaron la visibilidad estratégica de indicadores (ventas, inventario, compras), fortaleciendo la toma de decisiones basada en datos.',
    plantagro_r2: 'Reforcé la seguridad de la red corporativa mediante la gestión de firewall y control de permisos, elevando la gobernanza de accesos y la confiabilidad de los sistemas.',

    viasoft_role: 'Analista de Requisitos / Pruebas',
    viasoft_li1: 'Elaborar y ejecutar casos de prueba funcionales y de regresión para mejorar el CRM.',
    viasoft_li2: 'Relevar y documentar requisitos con las áreas involucradas, garantizando claridad y trazabilidad.',
    viasoft_li3: 'Validar entregas técnicas antes de la implantación, asegurando calidad y adherencia a las reglas de negocio.',
    viasoft_li4: 'Apoyar la integración y orientación de nuevos colaboradores en el equipo.',
    viasoft_li5: 'Mantener documentación técnica organizada, promoviendo transparencia y estandarización de procesos.',
    viasoft_r1: 'Desarrollé casos de prueba estructurados que mejoraron la calidad del CRM, reduciendo fallas y fortaleciendo la validación funcional de las entregas.',
    viasoft_r2: 'Estandaricé documentación y trazabilidad de tareas, promoviendo organización procesal, integración de equipo y mejora en la comunicación técnica.',

    ellon_role: 'Analista de Sistemas',
    ellon_li1: 'Analizar documentos y requisitos de clientes para implementación en el sistema.',
    ellon_li2: 'Desarrollar y adaptar funcionalidades según necesidades específicas del negocio.',
    ellon_li3: 'Garantizar integridad y consistencia de datos durante procesos de implantación.',
    ellon_li4: 'Identificar y corregir fallas sistémicas para mejorar performance y estabilidad.',
    ellon_li5: 'Realizar validaciones técnicas antes del lanzamiento de funcionalidades, reduciendo riesgos y retrabajo.',
    ellon_r1: 'Implementé funcionalidades con foco en integridad de datos y performance, elevando la confiabilidad del sistema para los clientes.',
    ellon_r2: 'Actué en el análisis crítico de requisitos, reduciendo retrabajo y fortaleciendo la calidad técnica de las entregas.',

    proj_sublabel: '// github',
    proj_overlay_artools: 'ver en vivo →', proj_overlay_pascoa: 'ver en vivo →',
    proj_overlay_colorea: 'ver en vivo →', proj_overlay_mesa: 'ver en vivo →',
    proj_overlay_galpao: 'ver en vivo →',
    proj_live: '↗ en vivo', proj_private: '⊗ repositorio privado',

    tag_corporate: 'corporativo', tag_ai: 'ia local', tag_automation: 'automatización',
    tag_digital: 'producto digital', tag_institutional: 'institucional',

    proj_plantagro_desc: 'Dashboard interno construido sobre el schema propietario del ERP Viasoft/Agro3C. Módulos de Pedidos, Facturas y Financiero con reconciliación directa en Oracle DB. Resolvió divergencias históricas de cálculo en Cuentas por Pagar/Cobrar mediante investigación directa del schema — sin acceso a documentación oficial.',
    proj_aila_desc: 'Asistente de IA companion 100% offline. STT, TTS, wake word y memoria persistente. Integración multi-habitación vía micrófonos y LEDs. Corriendo en RTX 5090.',
    proj_ghost_desc: 'Framework de recon interactivo local (v1.9.0) con Rich UI y 19 módulos: DNS, subdomain enum, port scan, dir enum, JS recon, detección WAF, virtual host discovery y packet sniffing. Session chaining entre módulos y CVE lookup automático vía NVD API. Exporta JSON, HTML y logs de sesión.',
    proj_notifier_desc: 'Automatización D-1 que consolida datos de Oracle y envía reportes diarios a la dirección vía WhatsApp y email: cuentas por pagar/cobrar con vencimiento ese día, pedidos y facturas emitidas el día anterior. Programado, sin intervención manual.',
    proj_artools_desc: 'Landing page de producto premium para ARTools Precision Pen. Diseño dark minimalista enfocado en conversión, con secciones de producto, especificaciones técnicas y CTA de compra.',
    proj_pascoa_desc: 'Landing page de alta conversión para método de ventas de Pascua. Copy orientada a resultados, video VSL, prueba social y urgencia. Más de 2.000 alumnos captados.',
    proj_colorea_desc: 'Landing page de producto digital con 20 juegos cristianos para imprimir. Embudo de ventas con copy de conversión, prueba social y oferta con descuento. Público: familias y educadores religiosos.',
    proj_mesa_desc: 'Landing page en español para colección de 20 juegos bíblicos imprimibles. Embudo de ventas LATAM con urgencia, prueba social y oferta con 87% de descuento. Entrega instantánea vía email.',
    proj_galpao_desc: 'Sitio institucional para club de caza y tiro en Guarapuava, PR. Catálogo de productos, área de login para clientes, carrito de compras y sección de contacto. Diseño dark táctico con identidad visual propia.',

    services_title: 'landing pages que <span class="accent">convierten</span>',
    services_subtitle: 'Del briefing a la entrega en hasta 10 días. Diseño responsivo, copy enfocado en conversión y resultado medible.',
    service_badge: 'landing page', service_tag_label: 'servicio principal',
    service_desc: 'Página de alta conversión diseñada para transformar visitantes en clientes. Cada detalle — headline, CTA, prueba social — pensado para tu audiencia y objetivo.',
    service_li1: 'Diseño responsivo y mobile-first',
    service_li2: 'Copy orientado a conversión',
    service_li3: 'Formulario o CTA integrado a WhatsApp',
    service_li4: 'Meta Pixel + Google Analytics (opcional)',
    service_li5: 'Velocidad optimizada — Core Web Vitals',
    service_li6: 'Hasta 2 rondas de revisión incluidas',
    service_price_label: 'desde', service_price_note: 'por proyecto',
    service_timeline_label: 'plazo de entrega', service_timeline_value: '7 – 10 días',
    service_whatsapp: 'hablar en whatsapp',
    service_bigger: '¿Proyecto más grande o diferente?<br><a href="https://wa.me/5546984156874?text=Ol%C3%A1%20Juan!%20Tenho%20um%20projeto%20e%20quero%20conversar%20sobre%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">Cotización personalizada — sin compromiso.</a>',

    process1_title: 'briefing',
    process1_desc: 'Me cuentas el negocio, el público y el objetivo. 30 minutos de conversación define todo.',
    process2_title: 'diseño & dev',
    process2_desc: 'Prototipo en 48h. Refino con tu feedback y desarrollo con código limpio y rápido.',
    process3_title: 'entrega',
    process3_desc: 'Sitio en línea, link en tus manos. Recomiendas a un conocido y la colaboración continúa.',

    terminal_placeholder: 'escribe un comando...',

    contact_headline: 'Abierto para proyectos de infraestructura, dashboards corporativos, pentesting y consultoría en seguridad.',
    contact_cv: 'descargar cv ↓',

    footer_built: 'construido con <span class="acc">HTML</span> &middot; <span class="acc">CSS</span> &middot; <span class="acc">JS</span> &nbsp;&middot;&nbsp; sin cookies, sin tracking',
  },

  pt: {
    skip_link: 'Pular para o conteúdo',

    nav_about: 'sobre', nav_experience: 'experiência', nav_projects: 'projetos',
    nav_services: 'serviços', nav_terminal: 'terminal', nav_contact: 'contato',

    hero_label: '// systems supervisor · security researcher',
    hero_subtitle: 'Construo sistemas que funcionam.<br><span class="accent">Quebro sistemas que não deveriam.</span>',
    hero_paragraph: '10 anos em IT construindo e sustentando sistemas corporativos — ERP, infraestrutura e segurança. Entrego resultado técnico com visão de negócio e trabalho bem tanto em equipe quanto de forma autônoma.',
    hero_location: '// Guarapuava, pr  ·  disponível para projetos',
    cta_contact: 'entrar em contato',
    cta_projects: 'ver projetos ↓',

    label_about: '01 / sobre', label_experience: '02 / experiência',
    label_projects: '03 / projetos', label_services: '04 / serviços',
    label_terminal: '05 / terminal', label_contact: '06 / contato',
    label_certs: 'certificações',

    about_p1: 'Comecei como <strong>Analista de Sistemas na Ellon Tecnologia</strong>, passando mais de 5 anos implementando e adaptando ERPs para clientes de diferentes segmentos. De lá fui para a <strong>Viasoft</strong>, onde atuei como analista de requisitos e testes — e depois passei a administrar a mesma stack do lado cliente, adquirindo uma perspectiva dupla rara.',
    about_p2: 'Na Plantagro respondi por toda a infraestrutura de TI — <strong>ERP, banco Oracle, firewall e BI</strong> — trabalhando próximo à gestão para garantir disponibilidade e segurança dos sistemas. Em paralelo, pesquiso segurança ofensiva sob o nome <strong>GhostOpcode</strong>: pentest, recon, exploração de aplicações web.',
    about_p3: 'Prefiro entender o sistema todo antes de tocar em qualquer parte — diagnóstico correto evita retrabalho e entrega resultado mais rápido para o negócio.',

    exp_results_label: 'resultados',

    plantagro_role: 'Supervisor de Sistemas',
    plantagro_li1: 'Coordenar a infraestrutura de TI, garantindo disponibilidade, segurança e desempenho dos sistemas corporativos.',
    plantagro_li2: 'Desenvolver relatórios personalizados em Delphi (Pascal) para apoio estratégico à gestão.',
    plantagro_li3: 'Criar e manter dashboards interativos em Python para consolidação de indicadores empresariais.',
    plantagro_li4: 'Administrar firewall pfSense, controlando acessos, políticas de segurança e integridade da rede.',
    plantagro_li5: 'Gerenciar usuários e permissões de sistema, assegurando conformidade e controle de acessos internos.',
    plantagro_r1: 'Estruturei dashboards gerenciais em Python que ampliaram a visibilidade estratégica de indicadores (vendas, estoque, compras), fortalecendo a tomada de decisão baseada em dados.',
    plantagro_r2: 'Reforcei a segurança da rede corporativa por meio da gestão de firewall e controle de permissões, elevando a governança de acessos e a confiabilidade dos sistemas.',

    viasoft_role: 'Analista de Requisitos / Testes',
    viasoft_li1: 'Elaborar e executar casos de teste funcionais e de regressão para aprimoramento do CRM.',
    viasoft_li2: 'Levantar e documentar requisitos junto às áreas envolvidas, garantindo clareza e rastreabilidade.',
    viasoft_li3: 'Validar entregas técnicas antes da implantação, assegurando qualidade e aderência às regras de negócio.',
    viasoft_li4: 'Apoiar a integração e orientação de novos colaboradores na equipe.',
    viasoft_li5: 'Manter documentação técnica organizada, promovendo transparência e padronização dos processos.',
    viasoft_r1: 'Desenvolvi casos de teste estruturados que aumentaram a qualidade do CRM, reduzindo falhas e fortalecendo a validação funcional das entregas.',
    viasoft_r2: 'Padronizei documentação e rastreabilidade de tarefas, promovendo organização processual, integração de equipe e melhoria na comunicação técnica.',

    ellon_role: 'Analista de Sistemas',
    ellon_li1: 'Analisar documentos e requisitos fornecidos pelos clientes para implementação no sistema.',
    ellon_li2: 'Desenvolver e adaptar funcionalidades conforme necessidades específicas do negócio.',
    ellon_li3: 'Garantir integridade e consistência dos dados durante processos de implantação.',
    ellon_li4: 'Identificar e corrigir falhas sistêmicas visando melhoria de performance e estabilidade.',
    ellon_li5: 'Realizar validações técnicas antes da liberação de funcionalidades, reduzindo riscos e retrabalho.',
    ellon_r1: 'Implementei funcionalidades com foco em integridade de dados e performance, elevando a confiabilidade do sistema para os clientes.',
    ellon_r2: 'Atuei na análise crítica de requisitos, reduzindo retrabalho e fortalecendo a qualidade técnica das entregas.',

    proj_sublabel: '// github',
    proj_overlay_artools: 'ver ao vivo →', proj_overlay_pascoa: 'ver ao vivo →',
    proj_overlay_colorea: 'ver ao vivo →', proj_overlay_mesa: 'ver ao vivo →',
    proj_overlay_galpao: 'ver ao vivo →',
    proj_live: '↗ ao vivo', proj_private: '⊗ repositório privado',

    tag_corporate: 'corporativo', tag_ai: 'ia local', tag_automation: 'automação',
    tag_digital: 'produto digital', tag_institutional: 'institucional',

    proj_plantagro_desc: 'Dashboard interno construído sobre o schema proprietário do ERP Viasoft/Agro3C. Módulos de Pedidos, Notas Fiscais e Financeiro com reconciliação direta no banco Oracle. Resolveu divergências históricas de cálculo em Contas a Pagar/Receber via investigação direta no schema — sem acesso a documentação oficial.',
    proj_aila_desc: 'Assistente de IA companion 100% offline. STT, TTS, wake word e memória persistente. Integração multi-cômodo via microfones e LEDs. Rodando em RTX 5090.',
    proj_ghost_desc: 'Framework de recon interativo local (v1.9.0) com Rich UI e 19 módulos: DNS, subdomain enum, port scan, dir enum, JS recon, WAF detection, virtual host discovery e packet sniffing. Session chaining entre módulos e CVE lookup automático via NVD API. Exporta JSON, HTML e logs de sessão.',
    proj_notifier_desc: 'Automação D-1 que consolida dados do Oracle e dispara relatórios diários para a diretoria via WhatsApp e e-mail: contas a pagar/receber com vencimento no dia, pedidos e notas emitidas no dia anterior. Scheduleado, sem intervenção manual.',
    proj_artools_desc: 'Landing page de produto premium para a ARTools Precision Pen. Design dark minimalista focado em conversão, com seções de produto, especificações técnicas e CTA de compra.',
    proj_pascoa_desc: 'Landing page de alta conversão para método de vendas de Páscoa. Copy orientada a resultado, vídeo de VSL, prova social e urgência. Mais de 2.000 alunos captados.',
    proj_colorea_desc: 'Landing page de produto digital com 20 jogos cristãos para imprimir. Funil de vendas com copy de conversão, prova social e oferta com desconto. Público-alvo: famílias e educadores religiosos.',
    proj_mesa_desc: 'Landing page em espanhol para coleção de 20 jogos bíblicos imprimíveis. Funil de vendas LATAM com urgência, prova social e oferta com desconto de 87%. Entrega instantânea via e-mail.',
    proj_galpao_desc: 'Site institucional para clube de caça e tiro em Guarapuava, PR. Catálogo de produtos, área de login para clientes, carrinho de compras e seção de contato. Design dark tático com identidade visual própria.',

    services_title: 'landing pages que <span class="accent">vendem</span>',
    services_subtitle: 'Do briefing à entrega em até 10 dias. Design responsivo, copy focado em conversão e resultado mensurável.',
    service_badge: 'landing page', service_tag_label: 'serviço principal',
    service_desc: 'Página de alta conversão desenhada para transformar visitantes em clientes. Cada detalhe — headline, CTA, prova social — pensado para o seu público e objetivo.',
    service_li1: 'Design responsivo e mobile-first',
    service_li2: 'Copy orientado a conversão',
    service_li3: 'Formulário ou CTA integrado ao WhatsApp',
    service_li4: 'Meta Pixel + Google Analytics (opcional)',
    service_li5: 'Velocidade otimizada — Core Web Vitals',
    service_li6: 'Até 2 rodadas de revisão incluídas',
    service_price_label: 'a partir de', service_price_note: 'por projeto',
    service_timeline_label: 'prazo de entrega', service_timeline_value: '7 – 10 dias',
    service_whatsapp: 'falar no whatsapp',
    service_bigger: 'Projeto maior ou diferente?<br><a href="https://wa.me/5546984156874?text=Ol%C3%A1%20Juan!%20Tenho%20um%20projeto%20e%20quero%20conversar%20sobre%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">Orçamento personalizado — sem compromisso.</a>',

    process1_title: 'briefing',
    process1_desc: 'Você me conta o negócio, o público e o objetivo. 30 minutos de conversa definem tudo.',
    process2_title: 'design & dev',
    process2_desc: 'Protótipo em 48h. Refino com seu feedback e desenvolvo com código limpo e rápido.',
    process3_title: 'entrega',
    process3_desc: 'Site no ar, link na sua mão. Você indica para um conhecido e a parceria continua.',

    terminal_placeholder: 'digite um comando...',

    contact_headline: 'Aberto para projetos de infra, dashboards corporativos, pentest e consultoria em segurança.',
    contact_cv: 'download cv ↓',

    footer_built: 'construído com <span class="acc">HTML</span> &middot; <span class="acc">CSS</span> &middot; <span class="acc">JS</span> &nbsp;&middot;&nbsp; sem cookies, sem tracking',
  },
};

function applyTranslations(lang) {
  var t = I18n[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function setLanguage(lang) {
  var targets = document.querySelectorAll('main, .nav-links, .mobile-menu-nav');
  targets.forEach(function (el) {
    el.style.transition = 'opacity 0.15s';
    el.style.opacity = '0.25';
  });

  setTimeout(function () {
    applyTranslations(lang);
    localStorage.setItem('lang', lang);
    updateLangButtons(lang);
    targets.forEach(function (el) { el.style.opacity = '1'; });
  }, 150);
}

function initI18n() {
  var stored = localStorage.getItem('lang');
  var browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  var detected = stored || (browser.startsWith('pt') ? 'pt' : browser.startsWith('es') ? 'es' : 'en');

  applyTranslations(detected);
  updateLangButtons(detected);

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
}
