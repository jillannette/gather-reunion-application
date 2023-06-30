import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from "react-bootstrap";
import { BASE_URL } from '../App.js';

import axios from "axios";

const CreateComment = ({ loggedInMember, memoryId }) => {

  

  const navigate = useNavigate();
  const [newComment, setNewComment] = useState({
    memory: memoryId,
    memberName: '',
    text: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  async function createComment(e) {
    e.preventDefault();
    console.log(newComment, newComment.memberName, loggedInMember, memoryId);
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`
      },
    };
    
    axios
    .post(
        `${BASE_URL}/api/comments/${memoryId}`,
        newComment, // Send only the 'text' property in the request body
        config
      )
      .then((response) => {
        console.log(response.data);
        navigate("/memories");
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
  }
  
  
  
  
  
  
  
 
  

  return ( 
    <>
      <div >
        <div>
          <br></br>
          <h4 >Add A Comment</h4>
        </div>
        <Container >
          <Form className="form" onSubmit={createComment}>
            <Form.Group className="mb-3" controlId="formBasicTextArea">
              <Form.Label>Add your comment here</Form.Label>
              <Form.Control
              as="textarea"
              rows={2}
              type="text"
              placeholder="comment"
              name="text"
              defaultValue={newComment.text}
              onChange={handleChange}
              />
              <Form.Control
              type="text"
              placeholder="your name"
              name="memberName"
              defaultValue={newComment.memberName}
              onChange={handleChange}
              />

  
                
             
            </Form.Group>

            <Form.Group className="mb-3">
              <Button variant="warning" type="submit">
              
                Submit
              </Button>
              {error && <p>Unable to add comment</p>}
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};



export default CreateComment;
