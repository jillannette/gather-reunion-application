import React from "react";

import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";

const Memory = ({ memory }) => {
  return (
    <>
      <Container>
        <Card key={memory._id}>
          <Row className="memory-card">
            <Col>
              <Card.Img className="memories-image" src={memory.image_url} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>{memory.subject}</Card.Title>
                <hr></hr>
                <Card.Text>
                  {memory.member?.nameAtGraduation} remembers...{" "}
                </Card.Text>
                <ListGroup>
                  <ListGroup.Item>{memory.text}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <br></br>
        <br></br>
      </Container>
    </>
  );
};

export default Memory;
