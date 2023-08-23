import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { BASE_URL } from "../App.js";
import { Col, Card, Row, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "../App.css";

const NextReunion = ({ loggedInMember }) => {
  const navigate = useNavigate();
  const params = useParams();
  const yearValue = params.year;

  const [nextReunion, setNextReunion] = useState({});
  const [eventMap, setEventMap] = useState({
    center: {
      lat: null,
      lng: null,
    },
    zoom: null,
    containerStyle: {
      height: "",
      weight: "",
    },
    reunion: yearValue,
  });

  const [directionsType, setDirectionsType] = useState("");

  const [startingPointData, setStartingPointData] = useState({
    business: "",
    address: "",
    city: "",
    state: "",
  });

  const [directions, setDirections] = useState({
    start_address: "",
    distance: "",
    duration: "",
    steps: [],
    end_address: "",
  });

  const [showDirections, setShowDirections] = useState(false);

  const [error, setError] = useState(null);

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

  const handleChange = (e) => {
    //Check if startingPointData is as expected
    //console.log("startingPointData", startingPointData);
    setStartingPointData({
      ...startingPointData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setStartingPointData({
      business: "",
      address: "",
      city: "",
      state: "",
    });
    setShowDirections(false);
    setDirectionsType("");
    setDirections({
      start_address: "",
      distance: "",
      duration: "",
      steps: [],
      end_address: "",
    });
  };

  const getDirections = async (e) => {
    // console.log("getDirectionsRoute", getDirections);
    // console.log(startingPointData);
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    const startingPoint =
      directionsType === "business"
        ? `${startingPointData.business},${startingPointData.state}`
        : `${startingPointData.address},${startingPointData.city},${startingPointData.state}`;
    await axios
      .post(
        `${BASE_URL}/api/nextReunions/directions`,
        { startingPoint },
        config
      )
      .then((response) => {
        const directions = response.data.routes[0].legs[0];
        // console.log(directions);
        setDirections(directions);
        setShowDirections(true);
        // console.log(directions);
        // console.log(directions.start_address);
        // console.log(directions.end_address);
        // console.log(directions.duration.text);
        // console.log(directions.distance.text);
        // console.log(directions.steps);
        // const distance = directions.distance.text;
        // console.log(distance);
        // const duration = directions.duration.text;
        // console.log(duration);
        // const drivingInstructions = directions.steps;
        // console.log(drivingInstructions);
        navigate("/nextReunions");
      });
  };

  //COMMENTED OUT UNTIL APP NEEDS TO BE ADDED TO NEXT UPCOMING REUNION
  // async function addMap(e) {
  //   setLoading(true);
  //   e.preventDefault();
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${loggedInMember.token}`,
  //     },
  //   };
  //   axios
  //     .post(`${BASE_URL}/api/nextReunions/map/${params.year}`, eventMap, config)
  //     .then((response) => {
  //       console.log(response.data);
  //       setLoading(false);
  //       setEventMap(response.data);

  //     })
  //     .catch((error) => {
  //       console.error("Error adding map entry:", error);
  //     });
  // };

  async function getNextReunion() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/api/nextReunions`, config)
      .then((response) => {
        // console.log(response.data.nextReunions[0]) //same as 87 OK
        const nextReunion = response.data.nextReunions[0];
        setNextReunion(nextReunion);
        // console.log(nextReunion); //OK
        setEventMap(nextReunion.maps[0]);
        // console.log(eventMap); //OK
        // console.log(eventMap.center);
        // console.log(eventMap.containerStyle);
        // console.log(eventMap.zoom);
      })
      .catch((error) => {
        alert(
          "The next reunion is still being planned - information will be added when available",
          error
        );
        setError(error);
      });
  }

  const handleTypeChange = (e) => {
    setDirectionsType(e.target.value);
    setShowDirections(false);
  };

  return (
    <>
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
              <hr></hr>

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
            <Col className="nextReunion-card-col">
              <Card.Title style={{ display: "flex" }}>
                Get Directions to Reunion
              </Card.Title>
              <hr></hr>
              <Card.Body>
                <label>
                  <strong>Choose Starting Point</strong>
                </label>
                <br></br>
                <select value={directionsType} onChange={handleTypeChange}>
                  <option value="">Choose One</option>
                  <option value="business">By Business Name and State</option>
                  <option value="address">
                    By Street Address, City & State
                  </option>
                </select>
                <Form>
                  {directionsType === "business" && (
                    <>
                      <br></br>
                      <Form.Group controlId="formBasicText">
                        <Form.Label>
                          <strong>Enter Business Name</strong>
                        </Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          type="text"
                          name="business"
                          value={startingPointData.business}
                        />
                      </Form.Group>
                      <br></br>
                      <Form.Group controlId="formBasicText">
                        <Form.Label>
                          <strong>Enter Business State</strong>
                        </Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          type="text"
                          name="state"
                          value={startingPointData.state}
                        />
                      </Form.Group>
                      <br></br>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          getDirections(e);
                        }}
                        variant="warning"
                        type="submit"
                      >
                        Get Directions
                      </Button>
                      &nbsp;&nbsp;
                      <Button onClick={handleReset} variant="warning">
                        Reset
                      </Button>
                    </>
                  )}
                  {directionsType === "address" && (
                    <>
                      <Form>
                        <Form.Group>
                          <br></br>
                          <Form.Label>
                            <strong>Enter Street Address</strong>
                          </Form.Label>
                          <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="address"
                            value={startingPointData.address}
                          />
                        </Form.Group>
                        <br></br>
                        <Form.Group>
                          <Form.Label>
                            <strong>Enter City</strong>
                          </Form.Label>
                          <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="city"
                            value={startingPointData.city}
                          />
                        </Form.Group>
                        <br></br>
                        <Form.Group>
                          <Form.Label>
                            <strong>Enter State</strong>
                          </Form.Label>
                          <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="state"
                            value={startingPointData.state}
                          />
                        </Form.Group>
                        <br></br>
                        <br></br>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            getDirections(e);
                          }}
                          variant="warning"
                          type="submit"
                        >
                          Get Directions
                        </Button>
                        &nbsp;&nbsp;
                        <Button onClick={handleReset} variant="warning">
                          Reset
                        </Button>
                      </Form>
                    </>
                  )}
                </Form>
                <br></br>
                {showDirections && (
                  <Card.Text>
                    <strong>DIRECTIONS:</strong>
                    <br></br>
                    <br></br>
                    <strong>FROM:</strong> {directions.start_address}
                    <br></br>
                    <strong>DISTANCE:</strong> {directions.distance.text}
                    <br></br>
                    <strong>DURATION:</strong> {directions.duration.text}
                    <br></br>
                    <strong>DRIVING INSTRUCTIONS:</strong>
                    <br></br>
                    {directions.steps.map((step) => {
                      const updated = step.html_instructions
                        .replaceAll("<b>", "")
                        .replaceAll("</b>", "")
                        .replaceAll("<wbr/>", "")
                        .replaceAll("<div>", "")
                        .replaceAll("</div>", "")
                        .replaceAll(`<div style="font-size:0.9em">`, "");

                      return <p>{updated}</p>;
                    })}
                    <br></br>
                    <strong>Destination Address:</strong>{" "}
                    {directions.end_address}
                  </Card.Text>
                )}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default NextReunion;
