import React, { useState } from "react";
import CreateComment from "./CreateComment";

import { Container, Card, Row, Col, Button, ListGroup } from "react-bootstrap";

const Memory = ({ memory, loggedInMember }) => {
  const [showAddCommentBox, setShowAddCommentBox] = useState(false);
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
                {memory.comments.map((comment) => {
                  return (
                    <>
                      <br></br>
                      <ListGroup>
                        <Card.Text>
                          {comment.nameAtGraduation} commented...{" "}
                        </Card.Text>
                        <ListGroup.Item>{comment.text}</ListGroup.Item>
                      </ListGroup>
                    </>
                  );
                })}
                <br></br>

                {!showAddCommentBox ? (
                  <Button
                    onClick={() => setShowAddCommentBox(true)}
                    variant="warning"
                  >
                    Add Comments
                  </Button>
                ) : (
                  // This requires further development, which I will continue to work on 
                  <CreateComment
                    memory={memory._id}
                    loggedInMember={loggedInMember}
                    memberName={loggedInMember.memberId}
                  />
                )}
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
