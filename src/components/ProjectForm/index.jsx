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
    isSubmitted: false,
    fields: {
      name: [],
      image: [],
      description: [],
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const sleep = (ms, value) => {
    return new Promise((resolve) => setTimeout(resolve, ms, value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // réinitialiser les erreurs
    const newErrors = {
      fields: { name: [], image: [], description: [] },
      isSubmitted: true,
    };
    if (name === "") {
      newErrors.fields.name.push("Le champs nom est vide !");
    }
    if (image === "") {
      newErrors.fields.image.push("Le champs image est vide !");
    }
    if (description === "") {
      newErrors.fields.description.push("Le champs description est vide !");
    }
    if (name.length <= 3) {
      newErrors.fields.name.push(
        "Le champs nom doit comporter minimum 3 caractères !"
      );
    }
    setErrors(() => newErrors);

    // validation front (on comptabilise les erreurs)
    if (
      Object.values(newErrors.fields).reduce(
        (acc, curr) => acc + curr.length,
        0
      ) > 0
    ) {
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
    setErrors(() => ({
      fields: { name: [], image: [], description: [] },
      isSubmitted: false,
    }));

    setIsLoading(() => false);
  };

  const isInvalidField = (field) => {
    if (!errors.isSubmitted) return;
    return errors.fields[field].length > 0;
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
          aria-invalid={isInvalidField("name")}
          aria-describedby={isInvalidField("name") && "invalid-helper"}
        />
        {isInvalidField("name") && (
          <small id="invalid-helper">{errors.fields.name[0]}</small>
        )}
        <input
          type="text"
          name="image"
          placeholder="Mettez l'url de votre image ici"
          aria-label="Mettez l'url de votre image ici"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          aria-invalid={isInvalidField("image")}
          aria-describedby={isInvalidField("image") && "invalid-helper"}
        />
        {isInvalidField("image") && (
          <small id="invalid-helper">{errors.fields.image[0]}</small>
        )}
        <textarea
          name="description"
          placeholder="Mettez la description ici"
          aria-label="Mettez la description ici"
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-invalid={isInvalidField("description")}
          aria-describedby={isInvalidField("description") && "invalid-helper"}
        />
        {isInvalidField("description") && (
          <small id="invalid-helper">{errors.fields.description[0]}</small>
        )}
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
