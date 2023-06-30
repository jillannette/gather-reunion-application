import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const AddPhotoForm = ({ loggedInMember }) => {
  const navigate = useNavigate();
  const params = useParams();

  const [newPhoto, setNewPhoto] = useState({
    image_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name);
    setNewPhoto({
      ...newPhoto,
      [e.target.name]: e.target.value,
    });
  };

  async function addNewPhoto(e) {
    setLoading(true)
    e.preventDefault();
    console.log(newPhoto);
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .post(`http://localhost:5000/api/reunions/${params.year}`, newPhoto, config)
      .then((response) => {
        console.log(response.data);
        navigate(`/reunions/${params.year}`);
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
        <br></br>
        <br></br>
        <Container className="join-border">
          <Form className="form" onSubmit={addNewPhoto}>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Add a photo to this reunion gallery </Form.Label>
              <Form.Control
                type="text"
                placeholder="https://pathtophoto.jpg"
                name="image_url"
                value={newPhoto.image_url}
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

export default AddPhotoForm;
