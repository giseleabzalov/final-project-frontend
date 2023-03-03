import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ListCard from "./ListCard";

export default function List() {
  const [data, setData] = useState();
  const [collection, setCollection] = useState("brunch");

  useEffect(() => {
    fetch(`https://cheers-api-ga.web.app/${collection}`)
      .then((res) => res.json())
      .then(setData)
      .catch(alert);
  }, [collection]);

  console.log(!data);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="">Cheers</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="date">Date Night</Nav.Link>
              <Nav.Link href="party" onClick={() => setCollection("party")}>
                Party
              </Nav.Link>
              <Nav.Link href="brunch" onClick={() => setCollection("brunch")}>
                Brunch
              </Nav.Link>
              <Nav.Link href="non-alcohol">Non-alcohol</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <section className="brunch-container">
          {!data ? (
            <h2>Loading...</h2>
          ) : (
            data.map((cocktail) => (
              <ListCard key={cocktail._id} brunch={cocktail} />
            ))
          )}
        </section>
      </div>
    </>
  );
}
