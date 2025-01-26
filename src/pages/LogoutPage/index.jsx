import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store";

export default function LogoutPage() {
  const { logout } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    const apiLogout = async () => {
      await fetch("https://backend.lafibredudev.com/auth/logout");
      logout();
      return navigate("/");
    };
    apiLogout();
  }, [logout, navigate]);

  return <p>Page de déconnexion</p>;
}
