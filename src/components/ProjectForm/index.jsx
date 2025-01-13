import { useState } from "react";

export default function ProjectForm(props) {
  const { projects, setProjects } = props;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  // -1 : aucune saisie n'a été faites
  // 0 : une saisie a été faites, mais pas d'erreur de validation
  // 1 : il y a des erreurs
  const [errors, setErrors] = useState({
    name: -1,
    image: -1,
    description: -1,
  });
  const [isLoading, setIsLoading] = useState(false);

  const sleep = (ms, value) => {
    return new Promise((resolve) => setTimeout(resolve, ms, value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // réinitialiser les erreurs
    const newErrors = { name: 0, image: 0, description: 0 };
    if (name === "") {
      newErrors.name = 1;
    }
    if (image === "") {
      newErrors.image = 1;
    }
    if (description === "") {
      newErrors.description = 1;
    }
    setErrors(() => newErrors);

    // validation front
    if (name === "" || image === "" || description === "") {
      return;
    }

    setIsLoading(() => true);
    await sleep(2000);

    // On créer le nouveau projet
    const newProjects = [...projects];
    newProjects.push({
      id: newProjects.length + 1,
      name,
      description,
      image,
    });
    setProjects(() => newProjects);

    // On vide les précédentes valeur du formulaire
    setName("");
    setImage("");
    setDescription("");

    // On réinitialise complètement les erreurs
    setErrors(() => ({ name: -1, image: -1, description: -1 }));

    setIsLoading(() => false);
  };

  const isInvalidField = (fieldError) => {
    if (fieldError === -1) return;
    return fieldError === 1;
  };

  return (
    <>
      <h3>Création d&apos;un nouvel item de portfolio</h3>
      <form method="post" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Mettez le nom du projet ici"
          aria-label="Mettez le nom du projet ici"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={isInvalidField(errors.name)}
        />
        <input
          type="text"
          name="image"
          placeholder="Mettez l'url de votre image ici"
          aria-label="Mettez l'url de votre image ici"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          aria-invalid={isInvalidField(errors.image)}
        />
        <textarea
          name="description"
          placeholder="Mettez la description ici"
          aria-label="Mettez la description ici"
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-invalid={isInvalidField(errors.description)}
        />
        <input
          type="submit"
          value={
            isLoading ? "Chargement en cours ..." : "Envoyer le formulaire"
          }
        />
      </form>
    </>
  );
}
