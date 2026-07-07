export type Language = "pt" | "en";

export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

export const dict = {
  pt: {
    toggleLang: "English",
    role: "Especialista Técnico de TI & Desenvolvedor de Software",
    location: "Sesimbra, Portugal",
    aboutTitle: "Sobre Mim",
    aboutText:
      "Profissional de Tecnologia da Informação com sólida experiência em suporte técnico especializado, administração de redes e desenvolvimento de sistemas. Graduado em Sistemas de Informação, com competências avançadas em infraestrutura (Ubiquiti UniFi, servidores Windows/Linux) e desenvolvimento de software (Java 8, SQL, ecossistema Front-End moderno com React).",
    experienceTitle: "Experiência Profissional",
    educationTitle: "Formação Académica",
    skillsTitle: "Competências Técnicas",
    projectsTitle: "Projetos no GitHub",
    viewProject: "Ver Projeto",
    jobs: [
      {
        company: "Grupo K Rica (Dr. Bernard)",
        role: "Assistente Técnico de TI",
        period: "Fev 2024 - Presente",
        desc: "Administração de redes Ubiquiti UniFi e Azure AD. Gestão de deploys (GitHub/Vercel). Migração web e configuração de sistemas POS/Faturação (Zonesoft, InvoiceXpress).",
      },
      {
        company: "AlcaFoods Limitada",
        role: "Analista Programador",
        period: "Abr 2022 - Ago 2023",
        desc: "Manutenção de sistemas desktop usando Java 8 e Swing. Criação e otimização de scripts SQL em PostgreSQL. Elaboração de documentação técnica.",
      },
      {
        company: "Contar Contabilidade",
        role: "Assistente de TI",
        period: "Ago 2021 - Abr 2022",
        desc: "Suporte L1 de hardware e software. Administração de atualizações de sistemas contábeis e manutenção preventiva de servidores.",
      },
      {
        company: "Atacadão S.A. (Grupo Carrefour)",
        role: "Auxiliar de TI",
        period: "Jan 2019 - Ago 2021",
        desc: "Administração de servidores Windows/Linux. Gestão de ciclo de vida de terminais e diagnóstico de incidentes de rede corporativa.",
      },
    ],
    education: {
      course: "Licenciatura em Sistemas de Informação",
      school: "Universidade Luterana do Brasil (ULBRA)",
      year: "Concluído em 07/2021",
    },
    skills: {
      frontend: "HTML5, CSS3, JavaScript, TypeScript, ReactJS, Tailwind",
      backend: "Java 8, Swing, SQL (PostgreSQL)",
      infra: "Ubiquiti UniFi, Linux/Windows Server, WordPress",
      tools: "Git, GitHub, InvoiceXpress, Google Workspace",
    },
  },
  en: {
    toggleLang: "Português",
    role: "IT Technical Specialist & Software Developer",
    location: "Sesimbra, Portugal",
    aboutTitle: "Summary",
    aboutText:
      "Information Technology professional with solid experience in specialized technical support, network administration, and systems development. Holder of a Bachelor's degree in Information Systems, with advanced skills in infrastructure (Ubiquiti UniFi, Windows/Linux servers) and software development (Java 8, SQL, and modern Front-End ecosystem with React).",
    experienceTitle: "Professional Experience",
    educationTitle: "Education",
    skillsTitle: "Technical Skills",
    projectsTitle: "GitHub Projects",
    viewProject: "View Project",
    jobs: [
      {
        company: "Grupo K Rica (Dr. Bernard)",
        role: "IT Technical Specialist",
        period: "Feb 2024 - Present",
        desc: "Administration of Ubiquiti UniFi and Azure AD networks. Deployment management (GitHub/Vercel). Web migration and POS/Billing configuration.",
      },
      {
        company: "AlcaFoods Limitada",
        role: "Systems Analyst / Software Developer",
        period: "Apr 2022 - Aug 2023",
        desc: "Maintained desktop systems using Java 8 and Swing. Created and optimized SQL scripts in PostgreSQL. Authored technical documentation.",
      },
      {
        company: "Contar Contabilidade",
        role: "IT Assistant",
        period: "Aug 2021 - Apr 2022",
        desc: "L1 hardware/software support. Managed update cycles for critical systems and performed preventive server maintenance.",
      },
      {
        company: "Atacadão S.A. (Carrefour Group)",
        role: "IT Technician",
        period: "Jan 2019 - Aug 2021",
        desc: "Windows/Linux server administration. Managed lifecycle of user terminals and performed network diagnostics.",
      },
    ],
    education: {
      course: "Bachelor of Information Systems",
      school: "Lutheran University of Brazil (ULBRA)",
      year: "Graduated 07/2021",
    },
    skills: {
      frontend: "HTML5, CSS3, JavaScript, TypeScript, ReactJS, Tailwind",
      backend: "Java 8, Swing, SQL (PostgreSQL)",
      infra: "Ubiquiti UniFi, Linux/Windows Server, WordPress",
      tools: "Git, GitHub, InvoiceXpress, Google Workspace",
    },
  },
};
