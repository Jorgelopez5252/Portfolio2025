import { map } from "react";


const projects = [
  {
    id: 1,
    title: "Laptop Project",
    description:
      "A responsive laptop product page built with React and Tailwind CSS.",
    image: "/projects/portfolio_image_1.png",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    demoURl: "#",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "Mobile App Project",
    description:
      "A responsive mobile app landing page built with React and Tailwind CSS.",
    image: "/projects/portfolio_image_2.png",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    demoURl: "#",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "Desktop Project",
    description:
      "A responsive desktop application landing page built with React and Tailwind CSS.",
    image: "/projects/portfolio_image_3.png",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    demoURl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click on any
          project to see more details and the code on GitHub!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.tags.map((tag) => (
                    <span>{tag}</span>
                  ))}
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
