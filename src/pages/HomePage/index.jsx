import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Modale from "../../components/Modale";
import ProjectForm from "../../components/ProjectForm";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

export default function HomePage() {
  const [projects, setProjects] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isItemCreating, setIsItemCreating] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(() => true);
      try {
        const response = await fetch(
          "https://backend.lafibredudev.com/projects"
        );
        const data = await response.json();
        console.log(data);
        setProjects(data);
      } catch (e) {
        console.log("Impossible de charger les données", e);
      }
      setIsLoading(() => false);
    };
    loadData();
  }, []);

  return (
    <main className="container">
      <Header />
      <button type="button" onClick={() => setIsItemCreating(true)}>
        Ajouter un nouvel item
      </button>
      <Modale
        title="Création d'un nouvel item de portfolio"
        isOpen={isItemCreating}
        setIsOpen={setIsItemCreating}
      >
        <ProjectForm
          projects={projects}
          setProjects={setProjects}
          setIsOpen={setIsItemCreating}
        />
      </Modale>
      {isLoading ? (
        <p>Chargement des items en cours ...</p>
      ) : projects ? (
        <Projects projects={projects} />
      ) : (
        <p>Impossible de charger les données</p>
      )}
      <Footer />
    </main>
  );
}
