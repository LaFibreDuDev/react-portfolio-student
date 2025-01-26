import { NavLink, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { useEffect } from "react";

export default function DetailProjectPage() {
  const { projectId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(() => true);
      try {
        const response = await fetch(
          `https://backend.lafibredudev.com/projects/${projectId}`
        );
        const data = await response.json();
        console.log(data);
        setProject(data);
      } catch (e) {
        console.log("Impossible de charger les données", e);
      }
      setIsLoading(() => false);
    };
    loadData();
  }, [projectId]);

  return (
    <main className="container">
      <Header />
      {isLoading ? (
        <p>Chargement des items en cours ...</p>
      ) : project ? (
        <>
          <h2>
            Projet numéro {projectId} - {project.name}
          </h2>
          <img
            src={project.image}
            alt={project.name}
            className="project-image"
          />
          <p>{project.description}</p>
          <NavLink to="/">Retour vers l&apos;accueil</NavLink>
        </>
      ) : (
        <p>Impossible de lire les données</p>
      )}
      <Footer />
    </main>
  );
}
