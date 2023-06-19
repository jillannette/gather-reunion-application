import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import axios from "axios";

const Reunions = ({ loggedInMember }) => {
  const navigate = useNavigate();

  const [reunions, setReunions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedInMember) {
      getReunions();
      console.log(reunions);
    }
  }, [loggedInMember]);

  async function getReunions() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .get("http://localhost:5000/api/reunions", config)
      .then((response) => {
        console.log("reunions", response.data);
        setReunions(response.data.reunions);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);

        setError(error);
      });
  }

  if (error) return "error";

  return (
    <div className="reunion-background">
      <div className="reunions">
        <br></br>

        <div>
          <div style={{ float: "right" }}>
            <Link to="/createReunion">
              <Button variant="light" size="lg" className="add-memory-button">
                Add a Reunion
              </Button>
            </Link>
          </div>

          <h1 className="center-headline">Reunions</h1>
        </div>
        <br></br>
        <br></br>
      </div>

      <Container>
        <Row>
          {reunions.map((reunion) => {
            return (
              <Col key={reunion._id} s={12} md={6} lg={4} xl={4}>
                <Card className='reunion-card' style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={reunion.cover_image_url} />
                  <Card.Body>
                    <Card.Title>{reunion.year}</Card.Title>
                    <Card.Text>{reunion.description}
                    </Card.Text>
                  </Card.Body>
                  <Button
                    onClick={() => navigate(`/reunions/${reunion.year}`)}
                    variant="warning"
                    type="submit"
                  >
                    View Photo Gallery
                  </Button>
                </Card>
                <br></br>
                <br></br>
                <br></br>
              </Col>
              
            );
          })}
          ;
        </Row>
      </Container>
    </div>
  );
};

export default Reunions;
