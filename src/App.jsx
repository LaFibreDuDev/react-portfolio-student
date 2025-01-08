import "./App.css";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import Projects from "./components/Projects/index.jsx";

function App() {
  const projects = [
    {
      id: 1,
      name: "projet 1",
      description:
        "Un projet de portfolio réalisé avec React, Zustand et React-router-dom",
      image:
        "https://blog-fr.orson.io/wp-content/uploads/2017/08/Template-responsive-design.png",
    },
    {
      id: 2,
      name: "projet 2",
      description:
        "Un projet e-commerce réalisé avec Node, PostGreSQL et express",
      image:
        "https://www.codeur.com/blog/wp-content/uploads/2022/07/4.-PlurielSingulier.jpg",
    },
    {
      id: 3,
      name: "projet 3",
      description: "Un site vitrine réalisé avec Wordpress et PHP",
      image:
        "https://www.livepepper.fr/wp-content/uploads/page/site-vitrine-restaurant-livepepper-academy-1-1024x744.png",
    },
  ];

  return (
    <main className="container">
      <Header />
      <Projects projects={projects} />
      <Footer />
    </main>
  );
}

export default App;
