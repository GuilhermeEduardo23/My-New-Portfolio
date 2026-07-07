import React from "react";
import { BriefcaseIcon } from "./ui/Icons";

interface Job {
  company: string;
  role: string;
  period: string;
  desc: string;
}

interface ExperienceProps {
  t: {
    experienceTitle: string;
    jobs: Job[];
  };
}

export default function Experience({ t }: ExperienceProps) {
  return (
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
            {/* Marcador de moeda estilo Super Mario */}
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
  );
}
