import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A simple personal portfolio website made using HTML and CSS.",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page design for a startup company.",
  },
  {
    title: "Calculator App",
    description: "Basic calculator interface using HTML, CSS and JavaScript.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">Projects</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
