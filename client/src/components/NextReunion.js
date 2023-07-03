import React, { useState, useEffect } from "react";
import GreeleyMap from "./GreeleyMap";
import { BASE_URL } from "../App.js";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import axios from "axios";

const NextReunion = ({ loggedInMember }) => {
  const [error, setError] = useState(null);
  const [nextReunion, setNextReunion] = useState({});

  useEffect(() => {
    if (loggedInMember) {
      getNextReunion();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInMember]);

  async function getNextReunion() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    await axios
      .get(`${BASE_URL}/api/nextReunion/649b7cc7abf5c7ebfad5eda3`, config)
      .then((response) => {
        console.log("nextReunion", response.data);
        setNextReunion(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }

  if (error) return "error";

  return (
    <>
      <div>
        <h1 className="reunion-headline">2026 Reunion</h1>
      </div>

      <br></br>

      <Container className="nextReunion-container" l={12}>
        <Card key={nextReunion._id}>
          <Row className="nextReunion-card">
            <Col>
              <Card.Body className="nextReunion-card-col">
                <Card.Title style={{ display: "flex" }}>
                  Don't Miss It!
                </Card.Title>
                <hr></hr>
                <Card.Text>
                  WHEN: &nbsp; Tentatively scheduled for {nextReunion.date}
                </Card.Text>
                <Card.Text className="reunion-card-text">
                  WHERE: &nbsp; {nextReunion.location}
                </Card.Text>
                <Card.Text className="reunion-card-text">
                  {nextReunion.description}
                </Card.Text>

                <Card.Text>
                  <br></br>
                  Friday: Happy Hour at Kenny's &nbsp; Saturday Aft: Picnic at
                  Bittersweet Park &nbsp; Saturday Eve: Banquet at Kenny's
                </Card.Text>

                <Card.Text>
                  Register for Reunion here: &nbsp;
                  <a href="https://buy.stripe.com/test_cN27sMefM5Lq0OQeUV">
                    https://buy.stripe.com/test_cN27sMefM5Lq0OQeUV
                  </a>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col className="nextReunion-image-col">
            <Card.Img
              className="nextReunion-image"
              variant="top"
              src={nextReunion.cover_image_url}
                />
                </Col>
              <Col>
              <GreeleyMap />
            </Col>
          </Row>
        </Card>

        <br></br>
      </Container>
    </>
  );
};

export default NextReunion;
