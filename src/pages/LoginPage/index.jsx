import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUserStore } from "../../store";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Soumission du formulaire");
    console.log("login saisi :", email);
    console.log("mot de passe saisi :", password);

    const body = JSON.stringify({
      email: email,
      password: password,
    });

    const response = await fetch(
      "https://backend.lafibredudev.com/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      }
    );
    const data = await response.json();
    if (data?.username && data?.accessToken) {
      console.log("Ok connecté");
      login(data.username, data.accessToken);

      setEmail("");
      setPassword("");

      return navigate("/");
    }
  };

  return (
    <main className="container">
      <Header />
      <h2>Formulaire de login</h2>
      <form method="post" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          name="user_email"
          placeholder="Mettez votre email"
          aria-label="Mettez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="user_password"
          placeholder="Mettez votre mot de passe"
          aria-label="Mettez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
      <Footer />
    </main>
  );
}
