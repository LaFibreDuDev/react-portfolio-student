import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sentEmail, setSentEmail] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      console.log("ton message est bien parti !", name, email, message);
      setSentEmail(true);
    }
  };

  return (
    <>
      <h2>Page de contact</h2>
      {sentEmail ? (
        <p>Votre message a bien été envoyé</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Mettez votre nom"
            aria-label="Mettez votre nom"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Mettez votre email"
            aria-label="Mettez votre email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <textarea
            name="message"
            placeholder="Ecrivez votre message ici"
            aria-label="Ecrivez votre message ici"
            rows={10}
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
          <input type="submit" value="Envoyer le formulaire" />
        </form>
      )}
    </>
  );
}
