import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { BASE_URL } from '../App.js';

const Join = ({ setLoggedInMember }) => {
  const navigate = useNavigate();

  const [newMember, setNewMember] = useState({
    email: "",
    password: "",
    nameAtGraduation: "",
    currentName: "",
    residesIn: '',
    image_url: "",
    bio: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };

  const createMember = async (e) => {
    e.preventDefault();
  
   
    await axios
    
      .post(`${BASE_URL}/api/join`, newMember)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "member",
          JSON.stringify({
            memberId: response.data.member._id,
            token: response.data.token,
          })
        );
        setLoggedInMember({
          memberId: response.data.member._id,
          token: response.data.token,
        });
        navigate("/members");
      })
      
  }



  if (error) return "error";

  return (
    <>
      <div className="join-background">
        <div>
          <h1 className="center-headline">Join Us!</h1>
        </div>
        <br></br>
        <Container className="join-border">
          <br></br>
          <Form className="form" onSubmit={createMember}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
                value={newMember.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Create a password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                name="password"
                value={newMember.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your name when you graduated</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sally Norton"
                name="nameAtGraduation"
                value={newMember.nameAtGraduation}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your current name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sally Edwards"
                name="currentName"
                value={newMember.currentName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Where do you currently live?</Form.Label>
              <Form.Control
                type="text"
                placeholder="City, State"
                name="residesIn"
                value={newMember.residesIn}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>
                Image address (url) for your profile picture
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="https://pathtophoto.jpg"
                name="image_url"
                value={newMember.image_url}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTextArea">
              <Form.Label>
                Tell others what you've been up to since graduation
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="After high school, I...."
                name="bio"
                value={newMember.bio}
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

export default Join;