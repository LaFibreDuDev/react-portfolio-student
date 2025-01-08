import { useState } from "react";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const [sentEmail, setSentEmail] = useState(false);
  const form = useRef();

  // https://www.emailjs.com/docs/examples/reactjs/
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_oy0iby8",
        "template_p9s2i9t",
        form.current,
        {
          publicKey: "Wwr5PAmUhBUF67zyt",
        }
      );
      setSentEmail(true);
    } catch (e) {
      console.error("Une erreur est survenue lors de l'envoi", e);
    }
  };

  return (
    <>
      <h2>Page de contact</h2>
      {sentEmail ? (
        <p>Votre message a bien été envoyé</p>
      ) : (
        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Mettez votre nom"
            aria-label="Mettez votre nom"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Mettez votre email"
            aria-label="Mettez votre email"
          />
          <textarea
            name="message"
            placeholder="Ecrivez votre message ici"
            aria-label="Ecrivez votre message ici"
            rows={10}
          />
          <input type="submit" value="Envoyer le formulaire" />
        </form>
      )}
    </>
  );
}
