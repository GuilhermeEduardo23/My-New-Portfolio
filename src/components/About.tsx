import React from "react";
import { UserIcon } from "./ui/Icons";

interface AboutProps {
  t: {
    aboutTitle: string;
    aboutText: string;
  };
}

{
  /* SECÇÃO SOBRE MIM */
}

export default function About({ t }: AboutProps) {
  return (
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
  );
}
