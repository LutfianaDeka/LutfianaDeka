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
      className="about bg-white py-6"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-xl font-bold text-center text-[#090035] pb-6">
          About Me
        </h2>

        {/* --> Layout 2 kolom untuk bio dan skills di layar besar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Kolom 1: Bio (Struktur diperbaiki dengan wrapper div) */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#090035]">
              Who I Am
            </h3>
            <div className="text-sm leading-relaxed text-slate-600 space-y-4">
              <p>
                Hi! I'm an informatics student.. <br /> I enjoy building
                interactive websites, especially on the frontend, and I'm also
                interested in backend development. I enjoy exploring machine
                learning as well.
              </p>
              <p>
                I'm always happy and motivated to learn new things. I enjoy
                taking on challenges in technology development and I enjoy
                creating and improving my ideas.
              </p>
            </div>
          </div>

          {/* Kolom 2: Skills */}
          <div>
            <h3 className="text-base font-bold text-[#090035] mb-4">
              My Skill
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#090035] text-white px-4 py-2 rounded-full text-sm font-medium 
                             cursor-pointer transition-all duration-300 ease-in-out
                             hover:bg-indigo-900 hover:shadow-lg hover:shadow-indigo-400/50 hover:-translate-y-1"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm italic text-slate-500">
              Now i'm still learning and grow up..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
