export default function Header({ setCurrentPage }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button
              type="button"
              className="btnCustom"
              onClick={() => setCurrentPage("home")}
            >
              Accueil
            </button>
          </li>
          <li>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#projects" onClick={() => setCurrentPage("home")}>
              Projets
            </a>
          </li>
          <li>
            <button
              type="button"
              className="btnCustom"
              onClick={() => setCurrentPage("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
