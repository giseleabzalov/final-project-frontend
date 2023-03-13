import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/listcard.css";

export default function ListCard({ cocktail, toggleUpdate, setToggleUpdate }) {
  // const []
  const handleDelete = () => {
    fetch(`https://cheers-api-ga.web.app/collection/${cocktail._id}`, {
      // fetch(`http://127.0.0.1:5002/collection/${cocktail}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => setToggleUpdate(!toggleUpdate))
      .catch(console.error);
  };
  return (
    // <main>
    //   <div className="cocktail-card"></div>

    <Col sm={12} md={6} lg={3}>
      <Card className="card-border">
        <Card.Img variant="top" src={cocktail.image} />
        <Card.Body className="card-body">
          <Accordion className="accordion">
            <Accordion.Item className="accordion-item" eventKey="0">
              <Accordion.Header className="header">
                <h2>{cocktail.name}</h2>
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <Card.Text>
                  <h3>ingredients: </h3>
                  <p>{cocktail.ingredients}</p>
                  <h3>container: </h3>
                  <p>{cocktail.container}</p>
                  <h3>instructions:</h3>
                  <p>{cocktail.instructions}</p>
                  <Button
                    className="delete-button"
                    onClick={handleDelete}
                    // style="bg-light"
                  >
                    <img src="../../trash-icon.webp" />
                  </Button>
                </Card.Text>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Col>
    // </main>
  );
}
