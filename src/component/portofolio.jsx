import { useState, useEffect } from "react";

export default function Portofolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // cegah scroll saat popup terbuka
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
      desc: "Aplikasi berbasis web yang dirancang untuk membantu pengguna melakukan deteksi dini terhadap risiko Sindrom Metabolik dengan integrasi model Random Forest",
      link: "https://mets-predict.vercel.app/",
      tool: ["React", "Tailwind", "Axios", "Flask"],
    },
    {
      title: "PodcastQu",
      image: "/project/podcastQu.png",
      desc: "UI/UX Aplikasi Podcast sederhana yang memungkinkan pengguna untuk mendengarkan berbagai episode podcast dengan antarmuka yang menarik",
      link: "https://www.figma.com/design/ggxAebXzyJPOqE0pxczXWD/Mockup-PodcastQ?node-id=0-1&t=h4lzXEVekgfCQO10-1",
      tool: ["Figma"],
    },
    {
      title: "Kos Manajemen",
      image: "/project/kos.png",
      desc: "UI/UX Aplikasi Sistem Manajemen Kosan yang dilengkapi dengan berbagai fitur, termasuk pengelolaan kamar, pengelolaan transaksi, serta proses penyewaan dan pembayaran kamar untuk penyewa. Dengan sistem yang efisien dan user-friendly, pemilik kos dapat dengan mudah mengelola informasi penyewa dan transaksi keuangan, sementara penyewa dapat melakukan pemesanan kamar dan pembayaran secara praktis. ",
      link: "https://www.figma.com/proto/tX3cRhYOrS6pcGmoDIF3li/Desain-KOS-Manajemen?node-id=0-1&t=ub1uBYtQVMlKQdTu-1",
      tool: ["Figma"],
    },
    {
      title: "Tanam",
      image: "/project/tanam.png",
      desc: "UI/UX Aplikasi Investasi Digital untuk memudahkan pengguna dalam berinvestasi dengan fitur-fitur seperti portofolio investasi, simulasi protofolio, analisis pasar, dan rekomendasi investasi yang dipersonalisasi.",
      link: "https://www.figma.com/design/hmkpqLT4uOHzeZe77xgoX8/InvestDigital?node-id=0-1&t=dWuZyfPWsdVQSnrc-1",
      tool: ["Figma"],
    },
    {
      title: "SIMPRO",
      image: "/project/simpro2.png",
      desc: "Sistem Informasi Manajemen Proyek (SIMPRO) adalah aplikasi yang didesain untuk membantu perusahaan atau organisasi dalam manajemen proyek. Manajemen proyek melibatkan perencanaan, pelaksanaan, pemantauan, dan evaluasi kegiatan proyek ",
      link: "https://github.com/LutfianaDeka/UAS-PL-SIMPRO.git",
      tool: [
        "Balsamiq",
        "C#",
        ".Net Framework",
        "Microsoft Access (SQL Query)",
      ],
    },
  ];

  return (
    <section className="portofolio" id="portofolio">
      <h2 className="text-xl max-md:text-base font-semibold text-center text-[#090035] pb-8">
        PORTOFOLIO
      </h2>

      {/*
        - grid-cols-1: di hp tampil 1 kolom ke bawah
        - md:grid-cols-2: di tablet/laptop tampil 2 kolom (2-2)
        - gap-8: jarak antar kartu sebesar 2rem
      */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="box-porto w-full bg-white flex flex-col shadow rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              <div className="gmbr relative overflow-hidden aspect-[17/8] shrink-0 w-full border-b border-[#090035]/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105  transition-transform duration-500  cursor-pointer"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg max-md:text-base font-medium text-[#090035] mb-2 line-clamp-2">
                  {project.title}
                </h3>

                {/* menampilkan sedikit deskripsi agar tidak terlalu kosong */}
                <p className="text-sm max-md:text-xs text-gray-600 mb-4 line-clamp-2">
                  {project.desc}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm max-md:text-xs font-medium text-[#090035] hover:text-blue-700 mt-auto text-left inline-block transition-colors"
                >
                  View Detail Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Detail Project (tetap sama) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative animate-fadeIn mx-4 max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            <div className="mb-4 mt-2">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-contain rounded border border-[#090035]/20"
              />
            </div>

            <h3 className="text-xl max-md:text-base font-semibold text-[#090035] mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 text-sm max-md:text-xs mb-4">
              {selectedProject.desc}
            </p>

            {/* Daftar Tools */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tool.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#090035]/10 text-[#090035] text-xs max-md:text-[0.7rem] font-medium rounded-full border border-[#090035]/30"
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
                className="inline-block mt-2 px-4 py-2 bg-[#090035] text-white text-sm max-md:text-xs font-medium rounded hover:bg-blue-900 transition-colors"
              >
                Kunjungi Website
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
