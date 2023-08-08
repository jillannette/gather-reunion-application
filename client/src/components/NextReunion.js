import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Link } from 'react-router-dom';
import { BASE_URL } from "../App.js";
import { Col, Card, Row, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "../App.css";

const NextReunion = ({ loggedInMember }) => {

  // const [loading, setLoading] = useState(true);
  const [nextReunion, setNextReunion] = useState({})
  const [maps, setMaps] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedInMember) {
      getNextReunion();
      
          
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInMember]);

  async function getNextReunion() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios.get(`${BASE_URL}/api/nextReunions`, config)
    .then((response) => {
      setNextReunion(response.data.nextReunions[0])
      console.log(nextReunion)
      setMaps(response.data.maps)
      console.log(response.data.nextReunions[0])
    })
    .catch((error) => {
      alert("The next reunion is still being planned - information will be added when available", error);
      setError(error);
    });
  }

 return (
     <>


      <div>
        <h1 className="reunion-headline">You're Invited!</h1>
      </div>

     
          <Container className="nextReunion-container" l={12}>
            <Card key={nextReunion._id}>
              <Row>
                <Col className="nextReunion-card">
                  <Card.Body className="nextReunion-card-col">
                    <Card.Title style={{ display: "flex" }}>
                      Don't Miss It!
                    </Card.Title>
                    <hr></hr>
                    <Card.Text>
                      <strong>WHEN:</strong> &nbsp; Tentatively scheduled for {nextReunion.date}
                    </Card.Text>
                    <Card.Text className="reunion-card-text">
                      <strong>WHERE:</strong> &nbsp; {nextReunion.location}
                    </Card.Text>
                    <Card.Text className="reunion-card-text">
                      {nextReunion.description}
                    </Card.Text>

               

                    <Card.Text>
                      <strong>Register for Reunion here:</strong> &nbsp;
                      <a href="https://buy.stripe.com/test_cN27sMefM5Lq0OQeUV">
                        https://buy.stripe.com/test_cN27sMefM5Lq0OQeUV
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Col>
                </Row>
             </Card>
           </Container>
       
    
          
              
              
  {/* //               <Col className="nextReunion-image-col">
  //                 <Card.Img
  //                   className="nextReunion-image"
  //                   variant="top"
  //                   src={selectedNextReunion.cover_image_url}
  //                 />
  //               </Col>
  //               <Col className="map">
  //                 <Card.Body>
                           
  //                     <GoogleMap
  //                     center={selectedNextReunion.map.center}
  //                     zoom={selectedNextReunion.map.zoom}
  //                     containerStyle={selectedNextReunion.map.containerStyle}
  //                     ></GoogleMap>
  //                 </Card.Body>
  //               </Col> */}
                       
                    
              
         
          </>
  )
  // );
        
      };
  
    
export default NextReunion;

// const handleChange = (e) => {
  //   setNewNextReunionMap({
  //     ...newNextReunionMap,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // console.log(newNextReunionMap);

  // async function addNextReunionMap(e) {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${loggedInMember.token}`,
  //     },
  //   };
  //   axios
  //     .post(`${BASE_URL}/api/reunions/${params.year}`, newNextReunionMap, config)
  //     .then((response) => {
  //       console.log(response.data);
  //       setNewNextReunionMap((prevMaps) => [...prevMaps, newNextReunionMap]);
  //       e.target.value = "";
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setError(error);
  //     });
  // }
  
  // if (error) return "error";
  
  // return (
  //   <>
  //   <div>
   
  //       <Container className="addreunionphoto-container">
  //         <Col>
  //           <br></br>
  //           <Form className="form" onSubmit={addNextReunionMap}>
  //             <Form.Group
  //               className="mb-3"
  //               controlId="addMapLatitudeForm.ControlInput1"
  //             >
  //               <Form.Label>
  //                 Add the latitude of the map location
  //               </Form.Label>
  //               <Form.Control
  //                 className=""
                  
  //                 name="center_lat"
  //                 type="number"
  //                 placeholder="map location latitude"
  //                 value={newNextReunionMap.center.lat}
  //                 onChange={handleChange}
  //               />
  //               <Form.Label>Add the longitude of the map location</Form.Label>
  //               <Form.Control
  //                 name="center_lon"
  //                 type="number"
  //                 placeholder="map location longitude"
  //                 value={newNextReunionMap.center.lng}
  //                 onChange={handleChange}
  //               />
  //                <Form.Label>
  //                 Add the zoom level for the map
  //               </Form.Label>
  //               <Form.Control
  //                 className=""
  //                 name="zoom"
  //                 type="number"
  //                 placeholder="zoom level"
  //                 value={newNextReunionMap.zoom}
  //                 onChange={handleChange}
  //               />
  //                <Form.Label>
  //                 Add container height for map
  //               </Form.Label>
  //               <Form.Control
  //                 className=""
  //                 name="container_height"
  //                 type="string"
  //                 placeholder="container height"
  //                 value={newNextReunionMap.containerStyle.height}
  //                 onChange={handleChange}
  //               />
  //                <Form.Label>
  //                 Add container width for map
  //               </Form.Label>
  //               <Form.Control
  //                 className=""
  //                 name="container_width"
  //                 type="string"
  //                 placeholder="container width"
  //                 value={newNextReunionMap.containerStyle.width}
  //                 onChange={handleChange}
  //               />
  //             </Form.Group>
  //             <Form.Group className="mb-3">
  //               <Button variant="warning" type="submit">
  //                 Create Map
  //               </Button>
  //             </Form.Group>
  //           </Form>
  //         </Col>
  //       </Container>
  //       </div>