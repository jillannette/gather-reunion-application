import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import axios from "axios";

const Memories = ({ loggedInMember }) => {
  const navigate = useNavigate();

  const [memories, setMemories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedInMember) {
      console.log(loggedInMember);
      getMemories();
      console.log(memories);
    }
  }, [loggedInMember]);

  async function getMemories() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .get("http://localhost:5000/api/memories", config)
      .then((response) => {
        console.log("memories", response.data.memories);
        setMemories(response.data.memories);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);

        setError(error);
      })
      .finally((loading) => {
        console.log("loading data: ", loading);
      });
  }

  if (error) return "error";

  return (
    <div className="member-background">
      <div className="memories">
        <br></br>

        <div>
          <div style={{ float: "right" }}>
            <Link to="/createMemory">
              <Button variant="light" size="lg" className="add-memory-button">
                Add a Memory
              </Button>
            </Link>
          </div>
          <h1 className="center-headline">Memories</h1>
        </div>
        <br></br>
        <br></br>
      </div>

      <Container>
        <Row>
          {memories.map((memory) => {
            return (
              <Col key={memory._id} s={12} md={6} lg={4} xl={3}>
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={memory.image_url} />
                  <Card.Body className='member-card-body'>
                  <Card.Text>{memory.subject}</Card.Text>
                  <Card.Text>{memory.member?.nameAtGraduation + ' remembers: '}</Card.Text>
                  <ListGroup>
                  <ListGroup.Item>{memory.text}</ListGroup.Item>
                  </ListGroup>
                  </Card.Body>
                  
          
            <Button variant="warning" type="submit">
              Add comments
            </Button>
               
                </Card>
                <br></br>
                <br></br>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Memories;
