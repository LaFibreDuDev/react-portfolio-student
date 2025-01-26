import { NavLink } from "react-router-dom";

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
      <NavLink to={`/project/${project.id}`}>
        Détail du projet {project.id}
      </NavLink>
    </article>
  );
}
