import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Container, Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import axios from "axios";

const Memories = ({ loggedInMember }) => {
 
  const [memories, setMemories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
 

   useEffect(() => {
    if (loggedInMember) {
      getMemories();
      console.log(memories);
    } else {
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
        console.log("memories", response.data);
        const memories = response.data.memories;
        setMemories(response.data.memories);

        console.log('memories',memories);
       
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }

  if (error) return "error";

  const createComment = (memoryId) => {
    navigate(`/memories/${memoryId}/comments`)
  }

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
        {memories.map((memory) => {
          return (
            <Col
              className="memory-col"
              key={memory._id}
              s={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Row>
                <Card style={{ width: "80rem" }}>
                  <Card.Img variant="top" src={memory.image_url} />
                  <Card.Body className="member-card-body">
                    <Card.Text>{memory.subject}</Card.Text>
                    <Card.Text>
                      {memory.member?.nameAtGraduation + " remembers: "}
                    </Card.Text>
                    <ListGroup>
                      <ListGroup.Item>{memory.text}</ListGroup.Item>
                      <ListGroup.Item>{memory.comments.text}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>

                {/* <Card.Text>{memory.comment.memberId?.nameAtGraduation + ' commented: '}</Card.Text> */}

        
                  <Button  onClick={() => createComment(memory._id)} variant="warning" type="submit">
                    Add comments
                  </Button>
              
              </Row>
            </Col>
          );
        })}
      </Container>
    </div>
  );
};

export default Memories;
