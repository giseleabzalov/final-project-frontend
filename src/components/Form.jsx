import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddCocktail() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [container, setContainer] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState();
  const [occasion, setOccasion] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:5002/collection/${occasion}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
        name,
        container,
        ingredients,
        instructions,
        image,
      }),
    })
      .then((res) => res.json())
      .then()
      .catch(alert);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="">
          <option>Choose Category</option>
          <option value="brunch">Brunch</option>
          <option value="date_night">Date Night</option>
          <option value="mocktails">Mocktails</option>
          <option value="party">Party</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
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
        <Form.Control type="file" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}
