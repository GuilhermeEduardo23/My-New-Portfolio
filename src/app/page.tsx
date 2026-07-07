"use client";

import React, { useState, useEffect } from "react";
import { dict, Language, Repo } from "../constants/translations";
import { GlobeIcon } from "../components/ui/Icons";

// Importação das secções modulares
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import GithubProjects from "../components/GithubProjects";

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("pt");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  const t = dict[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  // Carrega meus repositórios reais do GitHub
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/guilhermeeduardo23/repos?sort=updated",
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          // Filtra forks e pega os 4 mais recentes
          const topRepos = data.filter((r) => !r.fork).slice(0, 4);
          setRepos(topRepos);
        }
      } catch (error) {
        console.error("Erro ao carregar repositórios do GitHub:", error);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-[#5C94FC] font-sans pb-20 relative overflow-hidden">
      {/* Nuvens decorativas */}
      <div className="absolute top-10 left-10 w-24 h-8 bg-white rounded-full opacity-80 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hidden md:block" />
      <div className="absolute top-24 right-20 w-32 h-10 bg-white rounded-full opacity-80 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hidden md:block" />
      <div className="absolute top-64 left-1/4 w-20 h-6 bg-white rounded-full opacity-80 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hidden md:block" />

      {/* Header com o interruptor de Idioma */}
      <div className="max-w-4xl mx-auto px-4 pt-6 flex justify-end relative z-10">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-[#E52521] text-white px-4 py-2 font-bold rounded border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all active:translate-y-2 active:shadow-none"
        >
          <GlobeIcon className="w-5 h-5 text-white" />
          {t.toggleLang}
        </button>
      </div>

      {/* Grid e Layout Principal da Landing Page */}
      <main className="max-w-4xl mx-auto px-4 mt-8 relative z-10 flex flex-col gap-8">
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Experience t={t} />
        <Education t={t} />
        <GithubProjects t={t} repos={repos} loadingRepos={loadingRepos} />
      </main>

      {/* Chão do Super Mario */}
      <div className="absolute bottom-0 w-full h-8 bg-[#00A800] border-t-4 border-black z-0"></div>
    </div>
  );
}
