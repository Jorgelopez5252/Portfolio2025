const skills = [
  //FE
  { name: "HTML/CSS", level: "95", category: "Frontend" },
  { name: "JavaScript", level: "80", category: "Frontend" },
  { name: "React", level: "70", category: "Frontend" },
  { name: "Tailwind CSS", level: "70", category: "Frontend" },
  { name: "Bootstrap CSS", level: "70", category: "Frontend" },

  //BE
  { name: "Node.js", level: "60", category: "Backend" },
  { name: "Express.js", level: "60", category: "Backend" },
  { name: "MongoDB", level: "60", category: "Backend" },
  { name: "MySQL", level: "70", category: "Backend" },
  { name: "Python", level: "70", category: "Backend" },

  

  //Tools
  { name: "Git/GitHub", level: "80", category: "Tools" },
  { name: "Android Studio", level: "80", category: "Tools" },
  { name: "VS Code", level: "90", category: "Tools" },
  { name: "Figma/Photoshop", level: "40", category: "Tools" },
  { name: "Mendix", level: "80", category: "Tools" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
