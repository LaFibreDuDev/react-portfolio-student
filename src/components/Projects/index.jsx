import Project from "../Project/index.jsx";

export default function Projects({
  projects,
  setCurrentPage,
  setSelectedProject,
}) {
  return (
    <section id="projects">
      <h1>Mes Projets</h1>
      <div className="projects">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            setCurrentPage={setCurrentPage}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>
    </section>
  );
}
