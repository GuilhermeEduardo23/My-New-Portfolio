import React from "react";
import Image from "next/image";
import photo from "../../public/photo.jpg";
import {
  MailIcon,
  LinkedinIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
} from "./ui/Icons";

interface HeroProps {
  t: {
    role: string;
    location: string;
  };
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="bg-[#F8D8A8] border-4 border-black p-6 md:p-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center text-center">
      {/* Fotografia em Relevo e Redonda (100% border-radius) */}
      <div className="relative mb-6">
        <Image
          src={photo}
          width={200}
          height={200}
          alt="Guilherme Eduardo"
          priority
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
        <a
          href="mailto:guilhermeeduardoroo@gmail.com"
          className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors"
        >
          <MailIcon className="w-[18px] h-[18px] text-[#E52521]" /> E-mail
        </a>
        <a
          href="https://linkedin.com/in/guilherme-eduardo-rodrigues-da-silva"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors"
        >
          <LinkedinIcon className="w-[18px] h-[18px] text-blue-600" /> LinkedIn
        </a>
        <a
          href="https://guilhermeeduardo23.github.io/My-Profile"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors"
        >
          <GlobeIcon className="w-[18px] h-[18px] text-green-600" /> Portfólio
        </a>
        <div className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
          <MapPinIcon className="w-[18px] h-[18px] text-orange-600" />{" "}
          {t.location}
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
          <PhoneIcon className="w-[18px] h-[18px] text-gray-700" /> +351 933 838
          876
        </div>
      </div>
    </section>
  );
}
