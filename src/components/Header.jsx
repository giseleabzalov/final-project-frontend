import { Row } from "react-bootstrap";

import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header-image"
        src="/cocktail_recipes.jpeg"
        alt="Cheers!"
      />
    </header>
  );
}
