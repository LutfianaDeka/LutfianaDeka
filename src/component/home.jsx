import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const GLOW_SIZE = 256; // w-64 = 256px

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - GLOW_SIZE / 2,
      y: e.clientY - rect.top - GLOW_SIZE / 2,
    });
  };

  return (
    <div
      className="relative pt-20 bg-[#090035] flex max-md:flex-col items-center justify-center h-screen overflow-hidden transition-all duration-700 "
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glow Effect */}
      <div
        className="absolute w-64 h-64 bg-[#6600ff70] blur-[100px] pointer-events-none transition-opacity duration-300 z-0"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isHovering ? 0.2 : 0,
        }}
      ></div>

      {/* Gambar Profil */}
      <img
        className="h-70 max-md:h-50 z-10 rounded border-2 border-white cursor-pointer max-xs:h-30"
        src="/IMG_2137xx.jpg"
        alt="Profile"
      />

      {/* Teks Intro */}
      <div className="intro text-white mx-10 max-xs:mx-0 z-10 max-md:text-center">
        <p className="text-2xl font-extralight max-md:text-base max-md:pt-8 max-xs:pt-2 max-xs:text-xs cursor-pointer">
          Hello, It's me
        </p>
        <h2 className="text-6xl font-bold pt-6 max-md:pt-4 max-md:text-2xl max-xs:pt-2 max-xs:text-sm cursor-pointer">
          Lutfiana Deka Nurhayati
        </h2>

        {/* Sosmed */}
        <div className="sosmed flex flex-row gap-5 max-md:gap-3 pt-10 max-md:pt-5 max-xs:pt-3 items-center max-md:justify-center ">
          <p className="font-light text-xl max-md:text-base cursor-pointer max-xs:text-xs">
            Follow me
          </p>
          <div className="ikon text-2xl flex gap-3 max-md:gap-2 max-md:text-xl max-xs:text-xs">
            {/* <a
              href="https://instagram.com"
              className="relative group transition-all duration-300 hover:-translate-y-1 hover:text-[#893c4d]"
            >
              <i className="bi bi-instagram"></i>
            </a> */}
            <a
              href="https://github.com/LutfianaDeka"
              className="relative group transition-all duration-300 hover:-translate-y-1 hover:text-indigo-200"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="relative group transition-all duration-300 hover:-translate-y-1 hover:text-indigo-200"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Tombol */}
        <a
          href="/CV - Lutfiana Deka Nurhayati.pdf"
          download="CV - Lutfiana Deka Nurhayati.pdf"
          className="inline-flex items-center justify-center gap-2 mt-6 bg-white text-[#090035] font-semibold py-2 px-6 rounded-full shadow-xl hover:-translate-y-1 hover:bg-indigo-200 transition-all duration-300 max-md:py-1 max-md:px-6 max-md:mt-6 max-xs:text-xs max-xs:mt-4"
        >
          {/* Animasi Lingkaran Glow */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></span>

          {/* Ikon Download */}
          <i className="bi bi-download text-lg transition-transform duration-300 group-hover:-translate-y-1"></i>

          {/* Teks */}
          <span className="relative z-10">Download CV</span>
        </a>
      </div>
    </div>
  );
}
