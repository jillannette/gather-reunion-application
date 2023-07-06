import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../App.js";

const CreateMemory = ({ loggedInMember }) => {
  const navigate = useNavigate();

  const [newMemory, setNewMemory] = useState({
    image_url: "",
    member: "",
    subject: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name);
    setNewMemory({
      ...newMemory,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate("/memories");
  };

  async function createMemory(e) {
    setLoading(true);
    e.preventDefault();
    console.log(newMemory);
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .post(`${BASE_URL}/api/memories`, newMemory, config)
      .then((response) => {
        console.log(response.data);
        navigate("/memories");
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally((loading) => {
        console.log("Loading data: ", loading);
        setLoading(false);
      });
  }

  if (loading) return "loading...";
  if (error) return "error";

  return (
    <>
      <div className="join-background">
        <div>
          <br></br>
          <h1 className="center-headline">Add A Memory</h1>
        </div>
        <Container className="memory-border">
          <Form className="form" onSubmit={createMemory}>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <br></br>
              <Form.Label>Add a photo of your memory </Form.Label>
              <Form.Control
                type="text"
                placeholder="https://pathtophoto.jpg"
                name="image_url"
                value={newMemory.image_url}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Label>Memory Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter memory subject"
                name="subject"
                value={newMemory.subject}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTextArea">
              <Form.Label>Add your memory here</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="I remember when ..."
                name="text"
                value={newMemory.text}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Button variant="warning" type="submit">
                Submit
              </Button>
              &nbsp;&nbsp;
              <Button onClick={handleCancel} variant="warning" type="button">
                {" "}
                Cancel
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default CreateMemory;
