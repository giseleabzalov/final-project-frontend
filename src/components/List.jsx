import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ListCard from "./ListCard";

export default function List() {
  const [data, setData] = useState();
  const [occasion, setOccasion] = useState("Date Night");

  useEffect(() => {
    fetch(`https://cheers-api-ga.web.app/collection/${occasion}`)
      // fetch(`http://127.0.0.1:5002/collection/${occasion}`)
      .then((res) => res.json())
      .then(setData)
      .catch(alert);
  }, [occasion]);

  console.log({ occasion });
  console.log(!data);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="">Cheers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav justify variant="tabs" className="me-auto">
            <button onClick={() => setOccasion("Date Night")}>
              Date Night
            </button>
            <button onClick={() => setOccasion("Party")}>Party</button>
            <button onClick={() => setOccasion("Brunch")}>Brunch</button>
            <button onClick={() => setOccasion("Non-alcohol")}>
              Non-alcohol
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section className="occasion-container">
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
      </section>
    </>
  );
}
