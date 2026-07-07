import React from "react";
import { GithubIcon } from "./ui/Icons";
import { Repo } from "../constants/translations";

interface GithubProjectsProps {
  t: {
    projectsTitle: string;
    viewProject: string;
  };
  repos: Repo[];
  loadingRepos: boolean;
}

export default function GithubProjects({
  t,
  repos,
  loadingRepos,
}: GithubProjectsProps) {
  return (
    <section className="bg-[#F8D8A8] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#000000] p-2 border-2 border-white">
          <GithubIcon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold uppercase">{t.projectsTitle}</h3>
      </div>

      {loadingRepos ? (
        <div className="text-center font-bold animate-pulse">
          A carregar projetos...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex flex-col h-full"
            >
              <h4 className="text-lg font-bold text-black mb-2">{repo.name}</h4>
              <p className="text-sm text-gray-700 font-medium mb-4 flex-grow">
                {repo.description || "Sem descrição disponível."}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold bg-gray-200 px-2 py-1 border border-black">
                  {repo.language || "Code"}
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
  );
}
