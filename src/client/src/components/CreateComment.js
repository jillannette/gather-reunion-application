import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateComment = ({ loggedInMember }) => {
  const navigate = useNavigate();
  const params = useParams();
  const memberId = loggedInMember.memberId;
    
  const [newComment, setNewComment] = useState({
    memory: params.id,
    member: memberId,
    text: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name);
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  async function createComment(e) {
   
    e.preventDefault();
    console.log(newComment);
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
        
      },
    };
    await axios
      .post(`http://localhost:5000/api/memories/${params.id}/comments`, newComment, config)
      .then((response) => {
        console.log('createComment response',response.data);
        navigate('/memories')
       
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      
  }

 
  if (error) return "error";

  return ( 
    <>
      <div className="join-background">
        <div>
          <br></br>
          <h1 className="center-headline">Add A Comment</h1>
        </div>
        <Container className="memory-border">
          <Form className="form" onSubmit={createComment}>
            <Form.Group className="mb-3" controlId="formBasicTextArea">
              <Form.Label>Add your comment here</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                type="text"
                placeholder="comment"
                name="text"
                value={newComment.text}
                onChange={handleChange}
                
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Button variant="warning" type="submit">
              
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};



export default CreateComment;
