import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact/index.jsx";
import DetailProject from "./components/DetailProject/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import Projects from "./components/Projects/index.jsx";
import projectsData from "./data/index.js";
import ProjectForm from "./components/ProjectForm/index.jsx";
import Modale from "./components/Modale/index.jsx";

function App() {
  const [projects, setProjects] = useState(projectsData);

  // Pour indication
  // const pages = ["home", "projects", "contact"];
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(0);

  const [isItemCreating, setIsItemCreating] = useState(false);

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
          <Projects
            projects={projects}
            setCurrentPage={setCurrentPage}
            setSelectedProject={setSelectedProject}
          />
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
