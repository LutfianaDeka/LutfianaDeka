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
      className="px-10 relative pt-20 bg-[#090035] flex max-md:flex-col max-md:px-10 items-center justify-center h-screen overflow-hidden transition-all duration-700 "
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
      <div className="intro text-white ml-10 max-md:mx-0 z-10 max-md:text-center">
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
          <div className="ikon text-2xl flex gap-3 max-md:gap-2 max-md:text-xl max-xs:text-xs z-20">
            <a
              href="https://github.com/LutfianaDeka"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-indigo-200"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="http://linkedin.com/in/lutfiana-deka17"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-indigo-200"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="btn-download mt-6">
          <a
            href="/CV.pdf"
            download="CV - Lutfiana Deka Nurhayati.pdf"
            className="relative group inline-flex items-center justify-center gap-2 
             bg-white text-[#090035] font-semibold py-2 px-6 rounded-full 
             shadow-xl transition-all duration-300 
             hover:-translate-y-1 hover:bg-indigo-200"
          >
            <i className="bi bi-download relative z-10 text-lg"></i>
            <span className="relative z-10">Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}
