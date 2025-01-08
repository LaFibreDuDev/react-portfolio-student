export default function Project({
  project,
  setCurrentPage,
  setSelectedProject,
}) {
  return (
    <article>
      <img
        src={project.image}
        alt={`projet ${project.id}`}
        className="project-image"
      />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button
        type="button"
        className="btnCustom"
        onClick={() => {
          setCurrentPage("projects");
          setSelectedProject(project.id);
        }}
      >
        Détail du projet {project.id}
      </button>
    </article>
  );
}
