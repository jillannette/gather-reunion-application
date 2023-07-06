import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../App.js';
import { Container, Card, Row, Col, Button, ListGroup,  } from "react-bootstrap";

const Memory = ({ memory, loggedInMember }) => {
  
  const navigate = useNavigate();
  const memberId = loggedInMember.memberId;
  console.log(memberId) //ok
  console.log(loggedInMember) //ok
  
  const memoryId = memory._id;
  console.log(memoryId)  //ok

  // const [showAddCommentBox, setShowAddCommentBox] = useState(false);
  const [newComment, setNewComment] = useState({
    member: memberId,
    text: ''
  });
  
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
      
    });
  };
console.log(newComment)
  
  const handleCancel = () => {
    navigate('/memories')
  }

  async function addComment(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .post(`${BASE_URL}/api/memories/${memory}`, newComment, config)
      .then((response) => {
        console.log(response.data);
        setNewComment('')
       
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
  
  }


  if (error) return "error";


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
                {memory.comments.map((comment, index) => {
                  return (
                    <React.Fragment key={index}>
                      <br></br>
                      <ListGroup>
                        <Card.Text>
                          {/* {comment.member.nameAtGraduation} commented...{" "} */}
                        </Card.Text>
                        <ListGroup.Item>{comment.text}</ListGroup.Item>
                      </ListGroup>
                    </React.Fragment>
                  );
                })}
                <br></br>

                {/* {!showAddCommentBox ? (
                  <Button
                    onClick={() => setShowAddCommentBox(true)}
                    variant="warning"
                    type="submit"
                  >
                    Add Comments
                  </Button>
                ) : ( */}
                  <form onSubmit={addComment}>
                    <textarea
                      name="text"
                      value={newComment.text}
                      onChange={handleChange}
                      rows="3"
                    ></textarea>
                    <br></br>
                    <br></br>
                    <Button variant="warning" type="submit">
                      Add Comment
                    </Button>
                    
                    &nbsp;&nbsp;
                    {/* <Button
                      variant="warning"
                      onClick={() => setShowAddCommentBox(false)}
                    >
                      Cancel
                    </Button> */}
                  </form>
                {/* )} */}
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