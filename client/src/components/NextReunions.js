import React, { useState, useEffect } from "react";
import GreeleyMap from "./GreeleyMap";
import { BASE_URL } from "../App.js";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "../App.css";

const NextReunions = ({ loggedInMember }) => {
  const [nextReunions, setNextReunions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedInMember) {
      getNextReunions();
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInMember]);

  async function getNextReunions() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    await axios
      .get(`${BASE_URL}/api/nextReunions`, config)
      .then((response) => {
        console.log("nextReunions", response.data);
        setNextReunions(response.data.nextReunions);
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

      {nextReunions.map((nextReunion) => {
        return (
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
                      <br></br>
                      <strong>Friday: </strong>&nbsp;&nbsp; Happy Hour at Kenny's 
                      <br></br>
                      <strong>Saturday Aft:</strong>&nbsp;&nbsp; Picnic
                      at Bittersweet Park  
                      <br></br>
                      <strong>Saturday Eve:</strong>&nbsp;&nbsp; Banquet at
                      Kenny's
                    </Card.Text>

                    <Card.Text>
                      <strong>Register for Reunion here:</strong> &nbsp;
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
        );
      })}
    </>
  );
};

export default NextReunions;
