import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  // fungsi cerdas untuk menangani klik navigasi
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // jika sedang di halaman detail, balik ke beranda dulu
      navigate("/");
      // tunggu sebentar sampai halaman beranda muncul, baru scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // jika sudah di beranda, langsung scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="footer"
      className="footer bottom-0 bg-[#090035] shadow-lg py-6 mt-10"
    >
      <div className="boxfooter max-w-6xl flex flex-col gap-2 mx-auto px-12 max-md:px-6 text-white">
        <div className="flex flex-col gap-1 pb-6">
          <h2 className="text-2xl max-md:text-lg font-semibold tracking-wide">
            Lutfiana Deka Nurhayati
          </h2>
          <p className="text-xs max-md:text-[0.7rem] text-gray-400 leading-relaxed font-medium tracking-wider">
            Frontend & AI Enthusiast
          </p>
          <a
            href="mailto:lutfianadeka00@gmail.com"
            className="text-sm max-md:text-xs text-gray-300 hover:text-white transition-colors duration-300"
          >
            lutfianadeka00@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-3">
          {/* navigasi halaman (opsional, ganti href sesuai id section-mu) */}
          <div className="flex gap-4 text-sm max-md:text-xs font-medium text-gray-300">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="hover:text-indigo-200 transition-all"
            >
              Beranda
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="hover:text-indigo-200 transition-all"
            >
              Tentang Saya
            </a>
            <a
              href="#portofolio"
              onClick={(e) => handleNavClick(e, "portofolio")}
              className="hover:text-indigo-200 transition-all"
            >
              Portofolio
            </a>
            <a
              href="#pengalaman"
              onClick={(e) => handleNavClick(e, "pengalaman")}
              className="hover:text-indigo-200 transition-all"
            >
              Pengalaman
            </a>
            <a
              href="#footer"
              onClick={(e) => handleNavClick(e, "footer")}
              className="hover:text-indigo-200 transition-all"
            >
              Kontak
            </a>
          </div>
        </div>
        {/* garis pembatas tipis */}
        <div className="w-full max-w-6xl h-px bg-white/20 my-2"></div>
        {/* Sosial media */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* copyright */}
          <div className="flex flex-col text-gray-400 text-center md:text-left">
            <h3 className="text-xs max-md:text-[0.7rem]">
              © 2026 Lutfiana Deka. All rights reserved.
            </h3>
            <p className="text-xs max-md:text-[0.7rem] mt-1">Dibuat dengan React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
