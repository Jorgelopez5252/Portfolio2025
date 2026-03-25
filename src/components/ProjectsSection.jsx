import { ExternalLink, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Responsive Landing Page",
    description:
      "A responsive landing page built with React and Tailwind CSS for a mock VR development company, showcasing modern UI design and seamless performance across all screen sizes.",
    image: "/projects/portfolio_image_4.png",
    tags: ["React", "Tailwind", "Responsive Design"],
    demoUrl: "https://tailwind-react-lp.vercel.app/",
    githubUrl: "https://github.com/Jorgelopez5252/Tailwind-ReactLP",
  },
  {
    id: 2,
    title: "Tetris C #",
    description:
      "A classic Tetris clone built in C# using WPF. Features include piece rotation, line clearing, score tracking, and increasing difficulty over time.",
    image: "/projects/portfolio_image_6.png",
    tags: ["C#", "Game", "CSS"],
    demoUrl: "https://tetris-c-sharp-webpage.vercel.app/",
    githubUrl: "https://github.com/Jorgelopez5252/Tetris-C-Sharp/tree/master",
  },
  {
    id: 3,
    title: "Pokemon World",
    description:
      "Fetch Pokémon data from a public API, using server Components & Client Components with Nextjs 16, Tailwind Css, Typescript, Pokemon Api.",
    image: "/projects/portfolio_image_5.png",
    tags: ["API", "Nextjs", "Typescript"],
    demoUrl: "https://pokemonworld-beryl.vercel.app/",
    githubUrl: "https://github.com/Jorgelopez5252/pokemonworld",
  },
  {
    id: 4,
    title: "The Office Fan Quiz",
    description:
      "A Fun and Engaging Quiz App Built with Vue.js and deployesd on Vercel, testing your knowledge of The Office TV show.",
    image: "/projects/portfolio_image_1.jpeg",
    tags: ["Vue.js", "Trivia/Game", "Javascript"],
    demoUrl: "https://vue-quiz-mauve.vercel.app/",
    githubUrl: "https://github.com/Jorgelopez5252/vue-quiz/tree/main",
  },
  {
    id: 5,
    title: "React Calculator",
    description:
      "A modern, responsive calculator built with React that uses the eval function and state hooks to provide real-time calculation previews for fast and intuitive arithmetic operations",
    image: "/projects/portfolio_image_2.png",
    tags: ["React", "JavaScript", "Responsive"],
    demoUrl: "https://calculator-react-ten-delta.vercel.app/",
    githubUrl: "https://github.com/Jorgelopez5252/calculator-react",
  },
  {
    id: 6,
    title: "React Weather App",
    description:
      "A beautiful , responsive , and modern React JS Weather app. To connect and display data I use React State to manage logic and axios to connect to OpenWeatherMap API. Can be viewed on both mobile and desktop.",
    image: "/projects/portfolio_image_3.png",
    tags: ["React", "JavaScript", "API Integration"],
    demoUrl: "https://react-weather-app-five-wine.vercel.app/",
    githubUrl: "https://github.com/Jorgelopez5252/react-weather-app",
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
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      {/* <span className="text-xs">Demo</span> */}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                      {/* <span className="text-xs">Repo</span> */}

                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Jorgelopez5252"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
