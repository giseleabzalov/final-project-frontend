import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/form.css";

export default function AddCocktail() {
  const [name, setName] = useState("");
  const [container, setContainer] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState();
  const [occasion, setOccasion] = useState("All_Cocktails");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ e });

    fetch(`https://cheers-api-ga.web.app/collection/`, {
      // fetch(`http://127.0.0.1:5002/collection/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        occasion,
        name,
        container,
        ingredients,
        instructions,
        image,
      }),
    })
      .then((res) => res.json())
      .then(setOccasion)
      .catch(alert);
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Occasion</Form.Label>
        <Form.Select
          className="form-select"
          aria-label=""
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option className="choose-category">Choose Category</option>
          <option value="date_night">Date Night</option>
          <option value="party">Party</option>
          <option value="brunch">Brunch</option>
          <option value="mocktails">Mocktails</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="container">
        <Form.Label>Container</Form.Label>
        <Form.Control
          type="text"
          value={container}
          onChange={(e) => setContainer(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ingredients">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="instructions">
        <Form.Label>Instructions</Form.Label>
        <Form.Control
          type="text"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}
