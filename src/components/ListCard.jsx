import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

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
    <main>
      <div className="occasion-card"></div>

      <Col xs={1} md={2}>
        <Card border="danger" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../public/affogato.png" />
          <Card.Body>
            <Card.Title>
              <h3>{occasion.name}</h3>
            </Card.Title>
            <Card.Text>
              <p>{occasion.ingredients}</p>
              <p>{occasion.container}</p>
              <p>{occasion.instructions}</p>
              {/* <Button onPress={handleDelete} /> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </main>
  );
}
