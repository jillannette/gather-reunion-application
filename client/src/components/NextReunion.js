import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { BASE_URL } from "../App.js";
import { Col, Card, Row, Container, Button } from "react-bootstrap";
import axios from "axios";
import "../App.css";

const NextReunion = ({ loggedInMember }) => {
  const navigate = useNavigate();
  const params = useParams();
  const yearValue = params.year;

  const [nextReunion, setNextReunion] = useState({});
  const [eventMap, setEventMap] = useState({
    center: {
      lat: 40.4225,
      lng: -104.73516,
    },
    zoom: 16,
    containerStyle: {
      height: "80vh",
      weight: "100%",
    },
    reunion: yearValue,
  });
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loggedInMember) {
      getNextReunion();
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInMember]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCoRER8befUeFnrPEvaS6W4XMn9UYjQjbU",
  });
  
  async function addMap(e) {
    setLoading(true);
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .post(`${BASE_URL}/api/nextReunions/${params.year}`, eventMap, config)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setEventMap(response.data);
            
      })
      .catch((error) => {
        console.error("Error adding map entry:", error);
      });
  }

  async function getNextReunion() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/api/nextReunions`, config)
      .then((response) => {
        const nextReunion = response.data.nextReunions[0];
        setNextReunion(nextReunion);
        console.log(nextReunion); //OK
        const eventMap = nextReunion.maps[0];
        console.log(eventMap); //OK
        console.log(eventMap.center);
        console.log(eventMap.containerStyle);
        console.log(eventMap.zoom);
      })
      .catch((error) => {
        alert(
          "The next reunion is still being planned - information will be added when available",
          error
        );
        setError(error);
      });
  }

  return (
    <>
      <div style={{ float: "right" }}>
            {/* <Link to="/createNextReunion"> */}
              <Button variant="light" size="lg" className="add-memory-button">
                Add Event Map
              </Button>
            {/* </Link> */}
          </div>
      <div>
        <h1 className="nextReunion-headline">You're Invited!</h1>
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
                  <strong>WHEN:</strong> &nbsp; Tentatively scheduled for{" "}
                  {nextReunion.date}, {nextReunion.year}
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
                <Card.Img
                    className="reunionPhotos-card-image"
                    variant="top"
                    src={nextReunion.cover_image_url}
                  />
              </Card.Body>
            </Col>

            <Col className="nextReunion-map-col">
              <Card.Title style={{ display: "flex" }}>
                Map of Kenny's Steakhouse, Greeley
              </Card.Title>

              <div>
                {isLoaded ? (
                  <div className="map">
                    <GoogleMap
                      mapContainerStyle={eventMap.containerStyle}
                      center={eventMap.center}
                      zoom={eventMap.zoom}
                    />
                  </div>
                ) : (
                  <h1>Loading...</h1>
                )}
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </>

    //    );
  );
};

export default NextReunion;
