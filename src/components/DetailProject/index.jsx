export default function DetailProject({ project, setCurrentPage }) {
  return (
    <section>
      <h1>
        Projet numéro {project.id} - {project.name}
      </h1>
      <img src={project.image} alt={project.name} className="project-image" />
      <p>{project.description}</p>
      <button
        className="inlineBlock"
        type="button"
        onClick={() => setCurrentPage("home")}
      >
        Retour sur l&apos;accueil
      </button>
    </section>
  );
}
