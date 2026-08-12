// Memindahkan array ke luar komponen untuk kebersihan kode
const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap CSS",
  "React",
  "Figma",
  "Php",
  "MySQL",
  "Python",
  "Git",
  "Machine Learning",
  "C#",
];

export default function About() {
  return (
    // --> Latar belakang gradien yang modern dan lembut
    <section
      id="about"
      className="about max-w-6xl mx-auto px-12 pb-8 max-md:px-6"
    >
      <h2 className="text-xl font-semibold text-center text-[#090035] pb-8 max-md:text-base">
        TENTANG SAYA
      </h2>

      {/* --> Layout 2 kolom untuk bio dan skills di layar besar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Kolom 1: Bio (Struktur diperbaiki dengan wrapper div) */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-[#090035] max-md:text-sm">
            Frontend Developer and Machine learning enthusiast
          </h3>
          <div className="text-sm leading-relaxed text-gray-600 space-y-4 max-md:text-xs">
            <p>
              Saya adalah Fresh Graduate Informatika yang berfokus pada Frontend
              Development. Saya memiliki ketertarikan dalam membangun website
              yang responsif, clean, dan user-friendly menggunakan React.js dan
              Tailwind CSS. Selain frontend development, saya juga antusias
              mempelajari Machine Learning dan Artificial Intelligence
              (AI).{" "}
            </p>
          </div>
        </div>

        {/* Kolom 2: Skills */}
        <div>
          <h3 className="text-base font-semibold text-[#090035] mb-4 max-md:text-sm">
            My Skill
          </h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="bg-[#090035] text-white px-4 py-2 rounded-full text-sm max-md:text-xs font-medium 
                             cursor-pointer transition-all duration-300 ease-in-out
                             hover:bg-white hover:text-[#090035] hover:shadow-lg hover:shadow-indigo-400/50 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
          {/* <p className="mt-6 text-sm italic text-slate-500">
            Now i'm still learning and grow up..
          </p> */}
        </div>
      </div>
    </section>
  );
}
