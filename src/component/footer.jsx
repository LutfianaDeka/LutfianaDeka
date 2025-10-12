import "../App.css";

export default function Footer() {
  return (
    <>
      <div className="bottom-0 bg-[#090035] border-t border-[#FF0073] h-18 md:h-20">
        <footer className="text-white flex flex-col items-center justify-center h-full gap-1">
          <div className="contact flex gap-2 text-m md:text-xl">
            <a
              className="whatsapp transition-all duration-300 hover:-translate-y-[2px] hover:text-indigo-200"
              href="https://wa.me/6282328531954"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              className="gmail transition-all duration-300 hover:-translate-y-[2px] hover:text-indigo-200"
              href="mailto:lutfianadeka00@gmail.com"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
          <h3 className="text-[8px] md:text-xs">byLutfianaDeka</h3>
        </footer>
      </div>
    </>
  );
}
