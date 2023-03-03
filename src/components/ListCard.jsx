import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function ListCard({ occasion }) {
  return (
    <main>
      <div className="occasion-card"></div>

      <Col xs={1} md={2}>
        <Card border="danger" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./assets/mimosa.jpeg" />
          <Card.Body>
            <Card.Title>
              <h3>{occasion.name}</h3>
            </Card.Title>
            <Card.Text>
              <p>{occasion.ingredients}</p>
              <p>{occasion.container}</p>
              <p>{occasion.instructions}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </main>
  );
}
