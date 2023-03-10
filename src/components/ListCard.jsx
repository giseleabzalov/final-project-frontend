import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import "../styles/listcard.css";

export default function ListCard({ occasion }) {
  // const handleDelete = () => {
  //   fetch(`https://cheers-api-ga.web.app/collection/${occasion}`, {
  //     // fetch(`http://127.0.0.1:5002/collection/${occasion}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then()
  //     .catch(console.error);
  // };
  return (
    // <main>
    //   <div className="occasion-card"></div>

    <Col sm={12} md={6} lg={3}>
      <Card border="dark" style={{ width: "100%" }}>
        <Card.Img variant="top" src={occasion.image} />
        <Card.Body className="card-body">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="header">
                <h2>{occasion.name}</h2>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Text>
                  <h3>ingredients: </h3>
                  <p>{occasion.ingredients}</p>
                  <h3>container: </h3>
                  <p>{occasion.container}</p>
                  <h3>instructions:</h3>
                  <p>{occasion.instructions}</p>
                  {/* <Button onPress={handleDelete} /> */}
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
