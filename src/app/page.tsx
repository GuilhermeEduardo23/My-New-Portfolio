"use client";

import React, { useState, useEffect } from 'react';

import photo from "../../public/photo.jpg"
import Image from 'next/image';


export default function Portfolio() {
  const [lang, setLang] = useState<Language>('pt');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  const t = dict[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/guilhermeeduardo23/repos?sort=updated');
        const data = await res.json();
        if (Array.isArray(data)) {
          // Filtra forks e pega os 4 primeiros (mais recentes)
          const topRepos = data.filter((r) => !r.fork).slice(0, 4);
          setRepos(topRepos);
        }
      } catch (error) {
        console.error("Erro ao buscar repos:", error);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-[#5C94FC] font-sans pb-20 relative overflow-hidden">
      
      {/* Nuvens decorativas do Mario */}
      <div className="absolute top-10 left-10 w-24 h-8 bg-white rounded-full opacity-80 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hidden md:block" />
      <div className="absolute top-24 right-20 w-32 h-10 bg-white rounded-full opacity-80 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hidden md:block" />
      <div className="absolute top-64 left-1/4 w-20 h-6 bg-white rounded-full opacity-80 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hidden md:block" />

      {/* Header com botão de idioma */}
      <div className="max-w-4xl mx-auto px-4 pt-6 flex justify-end relative z-10">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-[#E52521] text-white px-4 py-2 font-bold rounded border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all active:translate-y-2 active:shadow-none"
        >
          <GlobeIcon className="w-5 h-5 text-white" />
          {t.toggleLang}
        </button>
      </div>

      <main className="max-w-4xl mx-auto px-4 mt-8 relative z-10 flex flex-col gap-8">
        
        {/* SECÇÃO HERO */}
        <section className="bg-[#F8D8A8] border-4 border-black p-6 md:p-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center text-center">
          
          {/* Foto de Perfil com Box Shadow profundo e Border Radius 100% */}
          <div className="relative mb-6">
            <Image
              src={photo}
              width={200} height={200}
              alt="Guilherme Eduardo"
              className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.6),_0_8px_10px_-6px_rgba(0,0,0,0.6)] ring-4 ring-black"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-2">
            Guilherme Eduardo
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 bg-white px-4 py-1 border-2 border-black inline-block transform -skew-x-3">
            {t.role}
          </h2>

          {/* Contactos */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-semibold">
            <a href="mailto:guilhermeeduardoroo@gmail.com" className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors">
              <MailIcon className="w-[18px] h-[18px] text-[#E52521]"/> E-mail
            </a>
            <a href="https://linkedin.com/in/guilherme-eduardo-rodrigues-da-silva" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors">
              <LinkedinIcon className="w-[18px] h-[18px] text-blue-600"/> LinkedIn
            </a>
            <a href="https://guilhermeeduardo23.github.io/My-Profile" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors">
              <GlobeIcon className="w-[18px] h-[18px] text-green-600"/> Portfólio
            </a>
            <div className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              <MapPinIcon className="w-[18px] h-[18px] text-orange-600"/> {t.location}
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              <PhoneIcon className="w-[18px] h-[18px] text-gray-700"/> +351 933 838 876
            </div>
          </div>
        </section>

        {/* SECÇÃO SOBRE MIM */}
        <section className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#00A800] p-2 border-2 border-black">
              <UserIcon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold uppercase">{t.aboutTitle}</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            {t.aboutText}
          </p>
        </section>

        {/* SECÇÃO DE COMPETÊNCIAS */}
        <section className="bg-[#F8D8A8] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-[#C84C0C] p-2 border-2 border-black">
              <WrenchIcon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold uppercase">{t.skillsTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCard icon={<CodeIcon className="w-6 h-6" />} title="Front-End" skills={t.skills.frontend} />
            <SkillCard icon={<ServerIcon className="w-6 h-6" />} title="Back-End & Data" skills={t.skills.backend} />
            <SkillCard icon={<BriefcaseIcon className="w-6 h-6" />} title="Infrastructure" skills={t.skills.infra} />
            <SkillCard icon={<WrenchIcon className="w-6 h-6" />} title="Tools" skills={t.skills.tools} />
          </div>
        </section>

        {/* SECÇÃO EXPERIÊNCIA */}
        <section className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#00A800] p-2 border-2 border-black">
              <BriefcaseIcon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold uppercase">{t.experienceTitle}</h3>
          </div>
          
          <div className="space-y-6">
            {t.jobs.map((job, idx) => (
              <div key={idx} className="border-l-4 border-[#C84C0C] pl-4 relative">
                {/* Marcador de moedas */}
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#F8D8A8] border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
                <h4 className="text-xl font-bold text-black">{job.role}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-gray-600 font-bold mb-2">
                  <span className="text-[#E52521]">{job.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{job.period}</span>
                </div>
                <p className="text-gray-700 font-medium">{job.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECÇÃO FORMAÇÃO */}
        <section className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#E52521] p-2 border-2 border-black">
              <GraduationCapIcon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold uppercase">{t.educationTitle}</h3>
          </div>
          <div className="bg-gray-100 p-4 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <h4 className="text-xl font-bold text-black">{t.education.course}</h4>
            <p className="text-[#00A800] font-bold text-lg">{t.education.school}</p>
            <p className="text-gray-600 font-semibold">{t.education.year}</p>
          </div>
        </section>

        {/* SECÇÃO PROJETOS GITHUB */}
        <section className="bg-[#F8D8A8] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
           <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#000000] p-2 border-2 border-white">
              <GithubIcon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold uppercase">{t.projectsTitle}</h3>
          </div>

          {loadingRepos ? (
            <div className="text-center font-bold animate-pulse">A carregar projetos...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.map(repo => (
                <div key={repo.id} className="bg-white border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex flex-col h-full">
                  <h4 className="text-lg font-bold text-black mb-2">{repo.name}</h4>
                  <p className="text-sm text-gray-700 font-medium mb-4 flex-grow">
                    {repo.description || 'Sem descrição disponível.'}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-bold bg-gray-200 px-2 py-1 border border-black">
                      {repo.language || 'Code'}
                    </span>
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs font-bold bg-[#00A800] text-white px-3 py-1 border-2 border-black hover:bg-green-600 transition-colors"
                    >
                      {t.viewProject}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </main>

      {/* Chão verde do Mario */}
      <div className="absolute bottom-0 w-full h-8 bg-[#00A800] border-t-4 border-black z-0"></div>
    </div>
  );
}


function UserIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string }) {
  return (
    <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col gap-2 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-transform">
      <div className="flex items-center gap-2 text-[#E52521] font-black">
        {icon}
        <span>{title}</span>
      </div>
      <p className="text-gray-800 font-medium">{skills}</p>
    </div>
  );
}