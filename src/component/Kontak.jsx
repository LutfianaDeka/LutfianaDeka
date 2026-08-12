export default function Kontak() {
  return (
    <section id="kontak" className="kontak max-w-6xl mx-auto max-md:px-6">
      <h2 className="text-xl max-md:text-base font-semibold text-center text-[#090035] pb-8 max-md:pb-4">
        KONTAK
      </h2>

      <div className="text-center">
        <h3 className="text-base max-md:text-sm font-semibold mb-4 max-md:mb-2 text-[#090035]">
          Mari Berkolaborasi!
        </h3>

        <p className="text-sm max-md:text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Saya terbuka untuk peluang kerja, project, dan kolaborasi di bidang
          Frontend Development. Jika Anda memiliki pertanyaan atau ingin
          berdiskusi mengenai project dan teknologi, jangan ragu untuk
          menghubungi saya.
        </p>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-6 text-xl text-[#090035]">
          <a
            className="transition-all duration-300 hover:-translate-y-1 hover:text-indigo-300"
            href="https://github.com/LutfianaDeka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            className="transition-all duration-300 hover:-translate-y-1 hover:text-indigo-300"
            href="https://www.linkedin.com/in/lutfiana-deka17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            className="transition-all duration-300 hover:-translate-y-1 hover:text-indigo-300"
            href="https://www.instagram.com/dekkaee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="transition-all duration-300 hover:-translate-y-1 hover:text-indigo-300"
            href="https://wa.me/6282328531954"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
