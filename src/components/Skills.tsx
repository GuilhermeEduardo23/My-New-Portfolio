import React from "react";
import { WrenchIcon, CodeIcon, ServerIcon, BriefcaseIcon } from "./ui/Icons";

interface SkillsProps {
  t: {
    skillsTitle: string;
    skills: {
      frontend: string;
      backend: string;
      infra: string;
      tools: string;
    };
  };
}

export default function Skills({ t }: SkillsProps) {
  return (
    <section className="bg-[#F8D8A8] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#C84C0C] p-2 border-2 border-black">
          <WrenchIcon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold uppercase">{t.skillsTitle}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard
          icon={<CodeIcon className="w-6 h-6" />}
          title="Front-End"
          skills={t.skills.frontend}
        />
        <SkillCard
          icon={<ServerIcon className="w-6 h-6" />}
          title="Back-End & Data"
          skills={t.skills.backend}
        />
        <SkillCard
          icon={<BriefcaseIcon className="w-6 h-6" />}
          title="Infrastructure"
          skills={t.skills.infra}
        />
        <SkillCard
          icon={<WrenchIcon className="w-6 h-6" />}
          title="Tools"
          skills={t.skills.tools}
        />
      </div>
    </section>
  );
}

// Sub-componente utilitário local para não poluir o arquivo principal
function SkillCard({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string;
}) {
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
