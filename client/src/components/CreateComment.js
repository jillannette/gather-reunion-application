import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button } from "react-bootstrap";
import { BASE_URL } from '../App.js';

import axios from "axios";

const CreateComment = ({ loggedInMember }) => {
  
  const params = useParams();
  const memberId = loggedInMember.memberId;
  const memory = params.id
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState({
    memory: params.id,
    member: memberId,
    text: '',
  });
console.log(params.id)
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate('/memories')
  }

  async function createComment(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`
      },
    };
    
    await axios
    .post(
        `${BASE_URL}/api/memories/${params.id}/comments`,
        newComment, 
        config
      )
      .then((response) => {
        console.log(response);
        navigate('/memories')
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
          <h5 >Add A Comment</h5>
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
              

            </Form.Group>

            <Form.Group className="mb-3">
              <Button variant="warning" type="submit">
              
                Submit
              </Button>
              {error && <p>Unable to add comment</p>} &nbsp;&nbsp;
              <Button onClick={handleCancel} variant="warning" type="button" > Cancel</Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};



export default CreateComment;
