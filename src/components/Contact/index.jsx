export default function Contact() {
  return (
    <>
      <h2>Page de contact</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Mettez votre nom"
          aria-label="Mettez votre nom"
        />
        <input
          type="email"
          name="email"
          placeholder="Mettez votre email"
          aria-label="Mettez votre email"
        />
        <textarea
          name="bio"
          placeholder="Ecrivez votre message ici"
          aria-label="Ecrivez votre message ici"
          rows={10}
        />
        <input type="submit" value="Envoyer le formulaire" />
      </form>
    </>
  );
}
