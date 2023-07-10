import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../App.js";

const ReunionPhotos = ({ loggedInMember }) => {
  const params = useParams();
  const yearValue = parseInt(params.year);

  const [selectedReunion, setSelectedReunion] = useState({});
  const [reunionPhotos, setReunionPhotos] = useState([]);
  const [newReunionPhoto, setNewReunionPhoto] = useState({
    reunion: yearValue,
    image_url: "",
    description: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedInMember) {
      getPhotos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInMember]);

  async function getPhotos() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/api/reunions/${params.year}`, config)
      .then((response) => {
        setSelectedReunion(response.data);
        const reunionPhotos = response.data.reunionPhotos;
        setReunionPhotos(reunionPhotos);
      })
      .catch((error) => {
        alert("No photos have been added yet for this reunion", error);
        setError(error);
      });
  }

  if (error) return "error";

  const handleChange = (e) => {
    setNewReunionPhoto({
      ...newReunionPhoto,
      [e.target.name]: e.target.value,
    });
  };

  console.log(newReunionPhoto);

  async function addReunionPhoto(e) {
    // e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .post(`${BASE_URL}/api/reunions/${params.year}`, newReunionPhoto, config)
      .then((response) => {
        console.log(response.data);
        setReunionPhotos((prevPhotos) => [...prevPhotos, newReunionPhoto]);
        e.target.value = "";
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }

  if (error) return "error";

  return (
    <>
      <div >
        <Container className="addreunionphoto-container">
          <Col >
          <br></br>
          <Form className="form" onSubmit={addReunionPhoto}>
            <Form.Group className="mb-3" controlId="addPhotoForm.ControlInput1">
              <Form.Label>
                Add image address to add photos to this reunion
              </Form.Label>
              <Form.Control
                className="addreunionphoto-div"
                key={newReunionPhoto.image_url}
                name="image_url"
                type="text"
                placeholder="image address"
                value={newReunionPhoto.image_url}
                onChange={handleChange}
              />
              <Form.Label>Add photo description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="What's happening in this photo?"
                maxLength={100}
                value={newReunionPhoto.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="warning" type="submit">
                Add Photo
              </Button>
            </Form.Group>
          </Form>
          </Col>
        </Container>
      </div>
      <div>
        <h1 className="center-headline">
          {selectedReunion.year} Photo Gallery
        </h1>

        <Form.Group className="mb-3">
          <Link to="/reunions">
            <Button
              className="reunionPhotos-button"
              style={{ float: "right" }}
              variant="warning"
              type="submit"
            >
              Back to Reunions
            </Button>
          </Link>
        </Form.Group>
      </div>
      <Container className="reunionPhotos-container">
        <Row>
          {reunionPhotos.map((reunionPhoto, index) => {
            return (
              <Col key={index}>
                <Card className='reunionPhotos-card' s={12} md={6} lg={4} xl={4} style={{width: '20rem'}}>
                  <Card.Img
                    className="reunionPhotos-card-image"
                    variant="top"
                    src={reunionPhoto.image_url}
                  />
                  <Card.Body className="reunionPhotos-card-body">
                    <Card.Title>{reunionPhoto.description} </Card.Title>
                  </Card.Body>
                </Card>
                <br></br>
              </Col>
            );
          })}
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default ReunionPhotos;
