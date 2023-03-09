import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ListCard from "./ListCard";
import AddCocktail from "./Form";
import Header from "./Header";
import "../styles/list.css";

// const backgrounds = {
//   date_night: "black",
//   party: "blue",
//   brunch: "orange",
//   mocktails: "green",
//   form: "pink",
// };

export default function List() {
  const [data, setData] = useState();
  const [occasion, setOccasion] = useState("date_night");

  useEffect(() => {
    if (occasion !== "form") {
      fetch(`https://cheers-api-ga.web.app/collection/${occasion}`)
        // fetch(`http://127.0.0.1:5002/collection/${occasion}`)
        .then((res) => res.json())
        .then(setData)
        .catch(alert);
    }
  }, [occasion]);

  // console.log({ occasion });
  // console.log(!data);
  return (
    <>
      <Navbar className="nav-bar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navigation-buttons">
            <div className="button-style">
              <button onClick={() => setOccasion("date_night")}>
                Date Night
              </button>
              <button onClick={() => setOccasion("party")}>Party</button>
              <button onClick={() => setOccasion("brunch")}>Brunch</button>
              <button onClick={() => setOccasion("mocktails")}>
                Mocktails
              </button>
              <button onClick={() => setOccasion("form")}>Add Cocktail</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section>
        {occasion === "form" ? (
          <AddCocktail />
        ) : (
          <Container fluid className="background">
            <Row className="card-container">
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
