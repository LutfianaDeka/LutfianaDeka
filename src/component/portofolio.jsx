import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Portofolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Cegah scroll saat popup terbuka
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", !!selectedProject);
  }, [selectedProject]);

  const projects = [
    {
      title: "Najma Makeup Landing Page",
      image: "/project/NajmaMakeUp.png",
      desc: "Landing page modern dan responsif untuk brand Najma Makeup, menampilkan layanan MUA dan fashion dengan CTA langsung ke WhatsApp.",
      link: "https://www.makeupnajma.my.id/",
      tool: ["Figma", "HTML", "CSS", "Tailwind CSS", "React"],
    },
    {
      title: "PaduPadan",
      image: "/project/PaduPadan.png",
      desc: "Website mix & match outfit yang memungkinkan pengguna membuat dan mengelola style pribadi, pengguna juga bisa melihat berbagai inspirasi style outfit dari pengguna lain.",
      link: "https://padu-padan-amicta.vercel.app/",
      tool: ["Figma", "HTML", "CSS", "Tailwind CSS", "React", "Supabase"],
    },
    {
      title: "Banana Hehe",
      image: "/project/bananahehe.png",
      desc: "Website toko Banana Hehe untuk penjualan produk olahan pisang.",
      link: "#",
      video: "/project/bananahehe.mp4",
      tool: [
        "PHP",
        "MySQL (phpMyAdmin)",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
      ],
    },
    {
      title: "Mets Prediction",
      image: "/project/mets.png",
      desc: "Aplikasi berbasis web yang membantu pengguna memprediksi risiko sindrom metabolik menggunakan model machine learning. Frontend dibangun dengan React + Tailwind CSS dan di-hosting di Vercel, sedangkan API-nya awalnya di-hosting di Replit (saat ini non-aktif karena batas akun gratis).",
      link: "https://mets-predict.vercel.app/",
      tool: ["React", "Tailwind", "Axios", "Flask", "Replit"],
    },
    {
      title: "podcastQu",
      image: "/project/podcastQu.png",
      desc: "Sebuah UI/UX aplikasi podcast sederhana yang memungkinkan pengguna untuk mendengarkan berbagai episode podcast dengan antarmuka yang menarik",
      link: "https://www.figma.com/design/ggxAebXzyJPOqE0pxczXWD/Mockup-PodcastQ?node-id=0-1&t=h4lzXEVekgfCQO10-1",
      tool: ["Figma"],
    },
    {
      title: "Kos Manajemen",
      image: "/project/kos.png",
      desc: "Aplikasi Sistem Manajemen Kosan yang dilengkapi dengan berbagai fitur, termasuk pengelolaan data kamar, pengelolaan data transaksi, serta proses penyewaan dan pembayaran kamar untuk penyewa. Dengan sistem yang efisien dan user-friendly, pemilik kos dapat dengan mudah mengelola informasi penyewa dan transaksi keuangan, sementara penyewa dapat melakukan pemesanan kamar dan pembayaran secara praktis. ",
      link: "https://www.figma.com/proto/tX3cRhYOrS6pcGmoDIF3li/Desain-KOS-Manajemen?node-id=0-1&t=ub1uBYtQVMlKQdTu-1",
      tool: ["Figma"],
    },
  ];

  return (
    <section className="bg-white py-12 relative ">
      <div className="container mx-auto px-4 relative w-[90vw]">
        <h2 className="text-xl font-bold text-center text-[#090035] mb-8">
          Portofolio
        </h2>

        {/* Navigasi Swiper */}
        <div className="relative flex items-center">
          {/* <div className="swiper-button-prev !text-[#090035] !left-[-40px] absolute top-1/2 -translate-y-1/2 z-10"></div> */}

          {/* <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper w-full"
          > */}
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-gray-300 !opacity-100",
              bulletActiveClass: "!bg-[#090035] !opacity-100",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper w-full t-4"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="box-porto bg-white flex flex-col shadow-lg border border-[#090035]/20 rounded overflow-hidden hover:shadow-xl transition-all duration-300 mb-8">
                  <div className="gmbr relative w-full overflow-hidden p-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-46 object-contain border border-[#090035]/20 rounded"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <h3 className="text-lg max-md:text-sm font-semibold text-[#090035] mb-2">
                      {project.title}
                    </h3>
                    <a
                      onClick={() => setSelectedProject(project)}
                      className="text-sm max-md:text-xs font-medium text-[#090035] hover:underline cursor-pointer mt-4 inline-block"
                    >
                      View Detail Project →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="swiper-button-next !text-[#090035] !right-[-40px] absolute top-1/2 -translate-y-1/2 z-10"></div> */}
        </div>

        {/* Popup Detail Project */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative animate-fadeIn mx-4">
              <button
                className="absolute top-1 right-2 text-xl text-gray-600 hover:text-black"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <div className="mb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-contain rounded border border-[#090035]/20"
                />
                {/* {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    controls
                    className="w-full rounded border border-[#090035]/20"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded border border-[#090035]/20"
                  />
                )} */}
              </div>

              <h3 className="text-lg max-md:text-sm font-semibold text-[#090035] mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 text-sm max-md:text-xs mb-3">
                {selectedProject.desc}
              </p>

              {/* ✅ Daftar Tools */}
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedProject.tool.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#090035]/10 text-[#090035] text-xs max-md:text-[10px] rounded-full border border-[#090035]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {selectedProject.link && selectedProject.link !== "#" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm max-md:text-xs font-medium text-blue-[#090035] hover:underline"
                >
                  Kunjungi Project →
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
