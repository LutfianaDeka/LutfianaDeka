import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function Pengalaman() {
  const navigate = useNavigate();
  const pengalamanData = [
    {
      title: "Asisten Praktikum",
      institusi: "Universitas Amikom Yogyakarta",
      picture: "/pengalaman/20250430_111225.jpg",
      waktu: "2025",
      description:
        "Membantu mahasiswa memahami konsep dasar pemrograman web menggunakan HTML, CSS, dan JavaScript.",
      dokumentasi: [
        "/pengalaman/20250430_111225.jpg",
        "/pengalaman/20250612_100530.jpg",
        "/pengalaman/20250709_140605.jpg",
        "/pengalaman/20250709_140647.jpg",
      ],
    },
    {
      title: "Peserta Amicta Amikom 2025",
      institusi: "Universitas Amikom Yogyakarta",
      picture: "/pengalaman/20250430_111225.jpg",
      waktu: "2024 - 2025",
      description:
        "Mendampingi mahasiswa dalam praktik analisis data dan pemodelan prediktif menggunakan algoritma machine learning.",
    },
    {
      title: "Praktik Komneg",
      institusi: "Universitas Amikom Yogyakarta",
      picture: "/pengalaman/20250430_111225.jpg",
      waktu: "2024 - 2025",
      description:
        "Mendampingi mahasiswa dalam praktik analisis data dan pemodelan prediktif menggunakan algoritma machine learning.",
    },
    
  ];

  return (
    <section className="pengalaman pb-8">
      <h2 className="text-xl max-md:text-base font-semibold text-center text-[#090035] pb-8">
        PENGALAMAN
      </h2>

      {/* class grid dihapus, diganti dengan pembungkus standar */}
      <div className="boxcontainer max-w-6xl mx-auto px-6 lg:px-12 relative">
        <div className="relative group">
          {/* tombol prev */}
          <button className="custom-prev absolute -left-5 top-[35%] -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-gray-600 hover:text-black [&.swiper-button-disabled]:!hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* implementasi swiper */}
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={24} // 24px = 6rem gap antar slide
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }, // menampilkan 4 kolom laptop
            }}
            className="w-full pb-10"
          >
            {pengalamanData.map((item, index) => (
              <SwiperSlide key={index}>
                {/* group/card untuk grouping box */}
                <div className="flex flex-col group/card cursor-pointer">
                  {/* gambar rasio 4:3 */}
                  <div className="w-full aspect-[4/3] rounded overflow-hidden mb-3 border border-gray-100 shadow-sm relative">
                    <img
                      src={item.picture}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500  hover:shadow-lg hover:scale-105"
                    />
                  </div>

                  {/* area teks */}
                  <div className="flex flex-col">
                    <h3
                      onClick={() =>
                        navigate("/detail-pengalaman", { state: item })
                      }
                      className="text-base max-md:text-sm font-medium text-[#090035] leading-tight mb-1 line-clamp-2 transition-colors duration-300 group-hover/card:text-blue-600"
                    >
                      {item.title}
                    </h3>
                    <span className="text-sm max-md:text-xs text-slate-500 ">
                      {item.waktu} • {item.institusi}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* tombol next */}
          <button className="custom-next absolute -right-5 top-[35%] -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-gray-600 hover:text-black [&.swiper-button-disabled]:!hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
