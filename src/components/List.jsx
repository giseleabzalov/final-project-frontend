import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ListCard from "./ListCard";
import AddCocktail from "./Form";

export default function List() {
  const [data, setData] = useState();
  const [occasion, setOccasion] = useState("date_night");

  useEffect(() => {
    if (occasion !== "form") {
      // fetch(`https://cheers-api-ga.web.app/collection/${occasion}`)
      fetch(`http://127.0.0.1:5002/collection/${occasion}`)
        .then((res) => res.json())
        .then(setData)
        .catch(alert);
    }
  }, [occasion]);

  // console.log({ occasion });
  // console.log(!data);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="">Cheers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav justify variant="tabs" className="me-auto">
            <button onClick={() => setOccasion("date_night")}>
              Date Night
            </button>
            <button onClick={() => setOccasion("party")}>Party</button>
            <button onClick={() => setOccasion("brunch")}>Brunch</button>
            <button onClick={() => setOccasion("mocktails")}>Mocktails</button>
            <button onClick={() => setOccasion("form")}>Add Cocktail</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section className="occasion-container">
        {occasion === "form" ? (
          <AddCocktail />
        ) : (
          <Container>
            <Row>
              {!data ? (
                <h2>Loading...</h2>
              ) : (
                data.map((cocktail) => (
                  <ListCard key={cocktail._id} occasion={cocktail} />
                ))
              )}
            </Row>
          </Container>
        )}
      </section>
    </>
  );
}
