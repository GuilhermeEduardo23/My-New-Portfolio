import React from 'react';
import { GraduationCapIcon } from './ui/Icons';

interface EducationProps {
  t: {
    educationTitle: string;
    education: {
      course: string;
      school: string;
      year: string;
    };
  };
}

export default function Education({ t }: EducationProps) {
  return (
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
  );
}
