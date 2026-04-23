import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // tambahkan ini
import "../App.css";
import { AlignJustify, X } from "lucide-react"; // kutambahkan ikon X untuk tutup sidebar

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // fungsi cerdas untuk menangani klik navigasi
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeSidebar();

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
    <>
      <div className="fixed top-0 left-0 right-0 z-9999 bg-[var(--blue)] border-b border-indigo-200">
        <header className="header flex max-w-6xl mx-auto items-center h-20 max-md:h-16 justify-between px-6 lg:px-12">
          <div className="logo cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="logoName text-white text-2xl max-md:text-lg font-bold italic">
              this<span className="text-indigo-200">DK</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="navbar font-medium hidden md:flex gap-8 text-white ">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="hover:text-indigo-200 transition-all"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="hover:text-indigo-200 transition-all"
            >
              About
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
              Contact
            </a>
          </nav>

          {/* Hamburger Icon */}
          <button onClick={toggleSidebar} className="block md:hidden">
            {isSidebarOpen ? (
              <X color="white" />
            ) : (
              <AlignJustify color="white" />
            )}
          </button>
        </header>
      </div>

      {/* Overlay & Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-"
            onClick={closeSidebar}
          ></div>
          <div className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-2xl z- transition-all duration-300">
            <nav className="flex flex-col pt-24 text-[var(--blue)] font-semibold">
              <a
                className="px-8 py-4 border-b border-gray-100 hover:bg-indigo-50"
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
              <a
                className="px-8 py-4 border-b border-gray-100 hover:bg-indigo-50"
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
              <a
                className="px-8 py-4 border-b border-gray-100 hover:bg-indigo-50"
                href="#portofolio"
                onClick={(e) => handleNavClick(e, "portofolio")}
              >
                Portofolio
              </a>
              <a
                className="px-8 py-4 border-b border-gray-100 hover:bg-indigo-50"
                href="#pengalaman"
                onClick={(e) => handleNavClick(e, "pengalaman")}
              >
                Pengalaman
              </a>
              <a
                className="px-8 py-4 border-b border-gray-100 hover:bg-indigo-50"
                href="#footer"
                onClick={(e) => handleNavClick(e, "footer")}
              >
                Contact
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
