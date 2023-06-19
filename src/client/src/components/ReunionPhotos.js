import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import axios from "axios";

const ReunionPhotos = ({ loggedInMember }) => {
  const params = useParams();
  console.log(params);
  console.log(params.year)
  const yearValue = (parseInt(params.year))

  const [selectedReunion, setSelectedReunion] = useState({});
  const [selectedReunionPhotos, setSelectedReunionPhotos] = useState([])
  const [newReunionPhoto, setNewReunionPhoto] = useState({
    reunion: yearValue,
    image_url: '',
    description: '',
  })
  const [error, setError] = useState(null);

  console.log(newReunionPhoto)


  useEffect(() => {
    if (loggedInMember) {
      getPhotos();
    }
  }, [loggedInMember]);

  async function getPhotos() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .get(`http://localhost:5000/api/reunions/${params.year}`, config)
      .then((response) => {
        console.log("selected reunion photos", response.data);
        setSelectedReunion(response.data);
        setSelectedReunionPhotos(response.data.reunionPhotos)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }

  if (error) return "error";

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name);
    setNewReunionPhoto({
      ...newReunionPhoto,
      [e.target.name]: e.target.value,
    });
  };

  console.log(newReunionPhoto)

    async function addReunionPhoto(e) {
      e.preventDefault();
      console.log(newReunionPhoto);
      const config = {
        headers: {
          Authorization: `Bearer ${loggedInMember.token}`,
        },
      };
      axios
        .post(`http://localhost:5000/api/reunions/${params.year}`, newReunionPhoto, config)
        .then((response) => {
          console.log(response.data);
          setNewReunionPhoto(response.data)
          console.log(newReunionPhoto)
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        })
        
    }
  
   
    if (error) return "error";
  

  return (
    <>
      <div>
         <Form className="form" onSubmit={addReunionPhoto}> 
       
          <Form.Group className="mb-3" controlId="addPhotoForm.ControlInput1">
            <Form.Label>
              Add image address to add photos to this reunion
            </Form.Label>
            <Form.Control
              name="image_url"
              type="image_url"
              placeholder="image address"
              value={newReunionPhoto.image_url}
              onChange={handleChange}
            />
            <Form.Control
              name="description"
              type="text"
              placeholder="What's happening in this picture?"
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
      </div>
      <div>
        <h1 className="center-headline">{selectedReunion.year}</h1>
        <p className="center-paragraph">{selectedReunion.description}</p>
        <Form.Group className="mb-3">
          <Link to="/reunions">
            <Button style={{ float: "right" }} variant="warning" type="submit">
              Back to Reunions
            </Button>
          </Link>
        </Form.Group>
      </div>

      {selectedReunionPhotos.map((reunionPhoto) => {
                  return (
                    <Container>
                      <Row>
                     <Col>
                    
                    <Card key={reunionPhoto._id} s={12} md={6} lg={4} xl={3} style={{ width: "15rem" }}>
                  
                      
                        <Card.Img
                          variant="top"
                          src={reunionPhoto.image_url}
                        />
                        <Card.Body className="member-card-body">
                          <Card.Title>{reunionPhoto.description}</Card.Title>
                          
                        </Card.Body>
                </Card>
                </Col>
              </Row>
        
            </Container>
         
        );
      })}
    </>
  );
};

export default ReunionPhotos;
