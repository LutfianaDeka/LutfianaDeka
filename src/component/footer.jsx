import "../App.css";

export default function Footer() {
  return (
    <section
      id="footer"
      className="footer bottom-0 bg-[#090035] shadow-lg py-6 mt-10"
    >
      <div className="boxfooter max-w-6xl flex flex-col gap-2 mx-auto px-12 max-md:px-6 text-white">
        <div className="flex flex-col gap-1 pb-6">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Lutfiana Deka Nurhayati
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed font-medium tracking-wider">
            Frontend & AI Enthusiast
          </p>
          <a
            href="mailto:lutfianadeka00@gmail.com"
            className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
          >
            lutfianadeka00@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-3">
          {/* navigasi halaman (opsional, ganti href sesuai id section-mu) */}
          <div className="flex gap-4 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-white transition-colors">
              Beranda
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              Tentang
            </a>
            <a
              href="#portofolio"
              className="hover:text-white transition-colors"
            >
              Portofolio
            </a>
          </div>
        </div>
        {/* garis pembatas tipis */}
        <div className="w-full max-w-6xl h-px bg-white/20 my-2"></div>
        {/* Sosial media */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* copyright */}
          <div className="flex flex-col text-gray-400 text-center md:text-left">
            <h3 className="text-xs">
              © 2026 Lutfiana Deka. All rights reserved.
            </h3>
            <p className="text-xs mt-1">Dibuat dengan React & Tailwind CSS</p>
          </div>

          {/* sosial media */}
          <div className="flex gap-6 text-xl">
            <a
              className="transition-transform duration-300 hover:-translate-y-1 hover:text-indigo-300"
              href="https://github.com/LutfianaDeka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              className="transition-transform duration-300 hover:-translate-y-1 hover:text-indigo-300"
              href="https://www.linkedin.com/in/lutfiana-deka17" // jangan lupa isi link linkedin-mu
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              className="transition-transform duration-300 hover:-translate-y-1 hover:text-indigo-300"
              href="https://www.instagram.com/dekkaee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              className="transition-transform duration-300 hover:-translate-y-1 hover:text-indigo-300"
              href="https://wa.me/6282328531954"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
