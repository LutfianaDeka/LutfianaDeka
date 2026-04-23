import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // tambahkan useState di sini

export default function DetailPengalaman() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // mengambil data dari state navigasi
  const data = location.state;

  useEffect(() => {
    // memicu animasi fade-in setelah komponen terpasang
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // proteksi jika data tidak ada
  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="mb-4 text-gray-500 italic">data tidak ditemukan.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-[#090035] text-white rounded-lg hover:bg-opacity-90 transition-all"
        >
          kembali ke beranda
        </button>
      </div>
    );
  }

  return (
    /* pembungkus utama dengan transisi css */
    <div
      className={`max-w-4xl mx-auto px-6 py-24 md:py-32 transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {/* header judul */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#090035] mb-2 leading-tight">
          {data.title}
        </h1>
        <p className="text-gray-500 font-medium">
          {data.waktu} • {data.institusi}
        </p>
      </header>

      {/* foto utama */}
      <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm mb-10 border border-gray-100">
        <img
          src={data.picture}
          alt={data.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* bagian deskripsi */}
      <article className="text-gray-700 leading-relaxed mb-16">
        <h2 className="text-xl font-semibold text-[#090035] mb-4 border-b-2 border-indigo-50 pb-2 inline-block">
          deskripsi kegiatan
        </h2>
        <p className="text-justify text-slate-600">{data.description}</p>
      </article>

      {/* bagian galeri dokumentasi */}
      {data.dokumentasi && data.dokumentasi.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#090035] mb-6">
            galeri dokumentasi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.dokumentasi.map((foto, index) => (
              <div
                key={index}
                className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer group bg-slate-50"
              >
                <img
                  src={foto}
                  alt={`dokumentasi ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
