import Project from "../Project/index.jsx";

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <h1>Mes Projets</h1>
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
