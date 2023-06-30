import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateReunion = ({ loggedInMember }) => {

  const navigate = useNavigate();

  const [newReunion, setNewReunion] = useState({
    cover_image_url: "",
    year: '',
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name);
    setNewReunion({
      ...newReunion,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate('/reunions')
  }

  async function createNewReunion(e) {
    setLoading(true);
    e.preventDefault();
    console.log(newReunion);
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .post("http://localhost:5000/api/reunions", newReunion, config)
      .then((response) => {
        console.log(response.data);
        navigate("/reunions");
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
          <h1 className="center-headline">Add A Reunion</h1>
        </div>
        <div>
        <Container className="login-border">
          <Form className="form" onSubmit={createNewReunion}>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Add reunion cover image </Form.Label>
              <Form.Control
                type='image'
                placeholder="https://pathtophoto.jpg"
                name="cover_image_url"
                value={newReunion.cover_image_url}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Add reunion year </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="year"
                value={newReunion.year}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTextArea">
              <Form.Label>Add a description and highlights of the reunion here</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
                placeholder="This reunion was..."
                name="description"
                value={newReunion.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Button variant="warning" type="submit">
                Submit
              </Button>
                &nbsp;&nbsp&nbsp;
              
              <Button onClick={handleCancel} variant="warning" type="button" > Cancel</Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
      </div>
    </>
  );
};

export default CreateReunion;
