import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Col, Container, Image, Row, Button, Form } from "react-bootstrap";
import axios from "axios";

const ReunionPhotos = ({ loggedInMember }) => {
  const params = useParams();
  console.log(params);

  const [reunionPhotos, setReunionPhotos] = useState([])
  // const [newPhoto, setNewPhoto] = useState({
  //   image_url: '',
  //   description: '',
  // })
  const [error, setError] = useState(null);

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
        console.log("photos", response.data);
        setReunionPhotos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }

  if (error) return "error";

  


  // async function addNewPhoto(e) {
  //   console.log("e.target.name", e.target.name);
  //     setNewPhoto({
  //       ...newPhoto,
  //       [e.target.name]: e.target.value,
  //     });
  //   };
    

  return (
    <>
    <div>
        
        {/* <Form className="form" onChange={addNewPhoto}> */}
        <Form>
          <Form.Group className="mb-3" controlId="addPhotoForm.ControlInput1">
            <Form.Label>Add image address to add photos to this reunion</Form.Label>
            <Form.Control name='image_url' type="text" placeholder="image address" />
            <Form.Control name='description' type="text" placeholder="What's happening in this picture?" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="warning" type="submit">
                    Add Photo
                  </Button>
               
                  
                </Form.Group>
                </Form>
                </div>
    <div>
           <h1 className="center-headline">{reunionPhotos.year}</h1>    
           <p className="center-paragraph">{reunionPhotos.description}</p>
          <Form.Group className="mb-3">
           <Link to='/reunions'>
                 <Button style={{float: 'right'}} variant="warning" type="submit">
                   Back to Reunions
                </Button>
                 </Link>
                
               </Form.Group>
    </div>
    

    {reunionPhotos.map((reunionPhoto) => {
      return (
    

     
           
      
      
   
       
     
            <Container>
         
        
          <Row>
            <Col xs={6} md={4} lg={3}>
              <Card>
              <Image
                src={reunionPhoto}
                rounded
              />
              </Card>
            </Col>
            </Row>
            </Container>
            
          )
        })
}
</>

      )
}



        

        
         
      
    


export default ReunionPhotos;

