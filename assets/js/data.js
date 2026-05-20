// Fonte única de dados do site e do terminal.
// Altere aqui para atualizar qualquer conteúdo sem tocar na lógica.

var SiteData = {
  site: {
    name:     'Juan Trentin Telli',
    alias:    'GhostOpcode',
    role:     'Supervisor de Sistemas',
    location: 'Guarapuava, PR · Brasil',
    email:    'juan.trentin.telli@gmail.com',
    linkedin: 'https://www.linkedin.com/in/juan-trentin-092aa61bb/',
    github:   'https://github.com/JuanTrentinTelli?tab=repositories',
    cvPath:   'curriculo/Juan Trentin - CV 2026.pdf',
  },

  commands: {
    whoami: '<span class="t-green">juan trentin telli</span> <span class="t-dim">/</span> <span class="t-accent">ghostopcode</span>\n<span class="t-dim">──────────────────────────────────────</span>\nSupervisor de Sistemas <span class="t-dim">@</span> Plantagro Insumos Agrícolas\nSecurity Researcher <span class="t-dim">·</span> independente\n\nGuarapuava, PR — Brasil\n<span class="t-dim">──────────────────────────────────────</span>\n10 anos em IT: análise de sistemas, ERP corporativo,\ninfraestrutura de rede e pesquisa em segurança ofensiva.',

    skills: '<span class="t-accent">backend</span>\n  python <span class="t-dim">·</span> flask <span class="t-dim">·</span> oracle plsql <span class="t-dim">·</span> delphi/pascal <span class="t-dim">·</span> fastapi\n\n<span class="t-accent">infraestrutura</span>\n  pfsense <span class="t-dim">·</span> linux <span class="t-dim">·</span> oracle db <span class="t-dim">·</span> erp viasoft <span class="t-dim">·</span> power bi\n\n<span class="t-accent">segurança</span>\n  pentest <span class="t-dim">·</span> recon <span class="t-dim">·</span> web exploitation <span class="t-dim">·</span> cvss 3.1 <span class="t-dim">·</span> ptes\n  burpsuite <span class="t-dim">·</span> nmap <span class="t-dim">·</span> metasploit <span class="t-dim">·</span> sycp (cursando)\n\n<span class="t-accent">automação & ia</span>\n  selenium <span class="t-dim">·</span> python scripting <span class="t-dim">·</span> langflow <span class="t-dim">·</span> ollama <span class="t-dim">·</span> mqtt\n\n<span class="t-accent">gestão</span>\n  scrum sfpc <span class="t-dim">·</span> kanban <span class="t-dim">·</span> engenharia de requisitos',

    experience: '<span class="t-accent">2024 — atual</span>\n  <span class="t-white">Supervisor de Sistemas</span> <span class="t-dim">@</span> Plantagro Insumos Agrícolas\n  ERP Viasoft/Agro3C · Oracle DB · pfSense · Flask · Power BI\n\n<span class="t-accent">2022 — 2023</span>\n  <span class="t-white">Analista de Requisitos / Testes</span> <span class="t-dim">@</span> Viasoft\n  Testes funcionais e de regressão · CRM · levantamento de requisitos\n\n<span class="t-accent">2017 — 2022</span>\n  <span class="t-white">Analista de Sistemas</span> <span class="t-dim">@</span> Ellon Tecnologia em Gestão\n  Análise de requisitos · desenvolvimento · implantações ERP\n\n<span class="t-accent">ongoing</span>\n  <span class="t-white">Security Researcher</span> <span class="t-dim">@</span> GhostOpcode <span class="t-dim">(independente)</span>\n  17 vulnerabilidades documentadas · PTES · CVSS 3.1',

    projects: '<span class="t-white">plantagro-dashboard</span>\n  <span class="t-dim">Flask · Oracle · Jinja2 · vanilla JS</span>\n  Dashboard corporativo: Pedidos, Notas, Financeiro.\n\n<span class="t-white">plantagro-daily-notifier</span>\n  <span class="t-dim">Python · Oracle DB · smtplib · WhatsApp API</span>\n  Disparo D-1 automático: CP/CR, pedidos e notas para a diretoria.\n\n<span class="t-white">a.i.l.a.</span>\n  <span class="t-dim">Ollama · FastAPI · Home Assistant · MQTT</span>\n  IA companion 100% offline com STT, TTS e wake word.\n\n<span class="t-white">ghostopcode</span>  <span class="t-danger">[cybersec]</span>\n  <span class="t-dim">Python · Rich · Scapy · Nmap · Nuclei · Jinja2</span>\n  Framework de recon v1.9.0: 19 módulos, session chaining, CVE lookup via NVD.',

    contact: '<span class="t-accent">email</span>     juan.trentin.telli@gmail.com\n<span class="t-accent">linkedin</span>  linkedin.com/in/juan-trentin-092aa61bb\n<span class="t-accent">github</span>    github.com/JuanTrentinTelli?tab=repositories\n<span class="t-accent">location</span>  Guarapuava, PR · Brasil\n<span class="t-accent">status</span>    <span class="t-green">disponível para projetos</span>',

    help: '<span class="t-dim">comandos disponíveis:</span>\n\n  <span class="t-accent">whoami</span>      — identidade e bio\n  <span class="t-accent">skills</span>      — habilidades técnicas\n  <span class="t-accent">experience</span>  — histórico profissional\n  <span class="t-accent">projects</span>    — projetos em destaque\n  <span class="t-accent">contact</span>     — formas de contato\n  <span class="t-accent">theme</span>       — alternar dark / light\n  <span class="t-accent">clear</span>       — limpar terminal\n  <span class="t-accent">help</span>        — este menu\n\n  <span class="t-dim">dica: Tab para autocomplete · ↑↓ para histórico</span>',
  },

  commandNames: ['whoami', 'skills', 'experience', 'projects', 'contact', 'theme', 'help', 'clear'],
};
