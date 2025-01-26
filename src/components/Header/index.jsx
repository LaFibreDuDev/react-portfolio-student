import { NavLink } from "react-router-dom";
import { useUserStore } from "../../store/index.js";

export default function Header() {
  const { username } = useUserStore();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          {username ? (
            <>
              <li>
                <NavLink to="/profile">Bienvenue à toi, {username} !</NavLink>
              </li>
              <li>
                <NavLink to="/logout">Se déconnecter</NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
