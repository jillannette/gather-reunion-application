import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";

const Join = ({ setLoggedInMember }) => {
  const navigate = useNavigate();

  const [newMember, setNewMember] = useState({
    email: "",
    password: "",
    nameAtGraduation: "",
    currentName: "",
    image_url: "",
    bio: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };

  async function createMember(e) {
    e.preventDefault();
    console.log(newMember);
    axios
      .post("http://localhost:3000/api/join", newMember)
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
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
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
