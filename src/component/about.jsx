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
    <section id="about" className="about max-w-6xl mx-auto px-12 max-md:px-6">
      <h2 className="text-xl font-semibold text-center text-[#090035] pb-8">
        ABOUT ME
      </h2>

      {/* --> Layout 2 kolom untuk bio dan skills di layar besar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Kolom 1: Bio (Struktur diperbaiki dengan wrapper div) */}
        <div>
          <h3 className="text-base font-bold mb-4 text-[#090035]">Who I Am</h3>
          <div className="text-sm leading-relaxed text-slate-600 space-y-4">
            <p>
              Hi! I am a final-year Informatics student with a strong interest
              in web development, particularly in frontend, as well as a growing
              enthusiasm for backend and machine learning...
            </p>
            <p>
              During my studies, I have worked on various final projects,
              including UI/UX design, website and landing page development, as
              well as creating applications using the .NET Framework and
              microcontroller based projects. These experiences have broadened
              my understanding of the system development lifecycle from design
              to implementation and continue to motivate me to learn and enhance
              my skills in technology.
            </p>
          </div>
        </div>

        {/* Kolom 2: Skills */}
        <div>
          <h3 className="text-base font-bold text-[#090035] mb-4">My Skill</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="bg-[#090035] text-white px-4 py-2 rounded-full text-sm font-medium 
                             cursor-pointer transition-all duration-300 ease-in-out
                             hover:bg-indigo-900 hover:shadow-lg hover:shadow-indigo-400/50 hover:scale-105"
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
    </section>
  );
}
