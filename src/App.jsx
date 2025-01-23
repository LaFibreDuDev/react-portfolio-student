import { useState, useEffect } from "react";
import "./App.css";
import Contact from "./components/Contact/index.jsx";
import DetailProject from "./components/DetailProject/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import Projects from "./components/Projects/index.jsx";
//import projectsData from "./data/index.js";
import ProjectForm from "./components/ProjectForm/index.jsx";
import Modale from "./components/Modale/index.jsx";
import { sleep } from "./utils";

function App() {
  const [projects, setProjects] = useState(null);

  // Pour indication
  // const pages = ["home", "projects", "contact"];
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isItemCreating, setIsItemCreating] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(() => true);
      await sleep(1000);
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
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === "home" && (
        <>
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
            <Projects
              projects={projects}
              setCurrentPage={setCurrentPage}
              setSelectedProject={setSelectedProject}
            />
          ) : (
            <p>Impossible de charger les données</p>
          )}
        </>
      )}
      {currentPage === "projects" && selectedProject && (
        <DetailProject
          project={projects[selectedProject - 1]}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "contact" && <Contact />}
      <Footer />
    </main>
  );
}

export default App;
