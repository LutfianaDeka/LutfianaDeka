import { useState } from "react";
import "../App.css";
import { AlignJustify } from "lucide-react";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <div className="fixed top-0 z-[9999] bg-[#090035] items-center w-screen px-20 max-md:px-8 border-b border-indigo-200 max-xs:h-10 max-xs:py-2">
        <header className="header flex items-center h-20 max-md:h-16 justify-between">
          <div className="logo cursor-pointer">
            {/* text-[#FF0073] */}
            <h1 className="logoName text-white text-3xl max-md:text-2xl max-md:text-2xl max-xs:text-base font-bold italic">
              this<span className="text-indigo-200">DK</span>
            </h1>
          </div>
          <nav className="navbar font-medium hidden md:flex gap-10 text-xl md:gap-6 text-white ">
            <a
              href="#home"
              className="relative group transition-all duration-300 hover:-translate-y-1"
            >
              <span className="hover:text-indigo-100">Home</span>
              {/* <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] h-[2px] bg-indigo-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span> */}
            </a>
            <a
              href="#about"
              className="relative group transition-all duration-300 hover:-translate-y-1 "
            >
              <span className="hover:text-indigo-100">About</span>
            </a>
            <a
              href="#portofolio"
              className="relative group transition-all duration-300 hover:-translate-y-1"
            >
              <span className="hover:text-indigo-100">Portofolio</span>
            </a>
            <a
              href="#footer"
              className="relative group transition-all duration-300 hover:-translate-y-1"
            >
              <span className="hover:text-indigo-100">Contact</span>
            </a>
          </nav>
          {/* Hamburger Icon */}
          <button onClick={toggleSidebar} className="block md:hidden">
            <AlignJustify color="white" strokeWidth={2} />
          </button>
        </header>
      </div>
      {/* Overlay and Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay: klik di sini akan menutup sidebar */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-[9996]"
            onClick={closeSidebar}
          ></div>

          {/* Sidebar */}
          <div
            className="md:hidden fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-[9998] transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()} // supaya klik dalam sidebar nggak nutup
          >
            <nav className="flex flex-col gap-2 text-base max-xs:text-xs pt-20 max-xs:pt-10 max-md:pt-16 top-0 text-[#090035]">
              <a
                className="px-5 py-2 hover:bg-indigo-900 hover:text-white transition-colors duration-200"
                href=""
                onClick={closeSidebar}
              >
                Home
              </a>
              <a
                className="px-5 py-2 hover:bg-indigo-900 hover:text-white transition-colors duration-200"
                href=""
                onClick={closeSidebar}
              >
                About
              </a>
              <a
                className="px-5 py-2 hover:bg-indigo-900 hover:text-white transition-colors duration-200"
                href=""
                onClick={closeSidebar}
              >
                Portofolio
              </a>
              <a
                className="px-5 py-2 hover:bg-indigo-900 hover:text-white transition-colors duration-200"
                href=""
                onClick={closeSidebar}
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
