export default function Project({ project }) {
  return (
    <article>
      <img
        src={project.image}
        alt={`projet ${project.id}`}
        className="project-image"
      />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </article>
  );
}
