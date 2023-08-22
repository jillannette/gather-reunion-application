import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import axios from "axios";
import { BASE_URL } from "../App.js";

const Reunions = ({ loggedInMember }) => {
  const navigate = useNavigate();

  const [reunions, setReunions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedInMember) {
      getReunions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInMember]);

  async function getReunions() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/api/reunions`, config)
      .then((response) => {
        setReunions(response.data.reunions);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);

        setError(error);
      });
  }

  if (error) return "error";

  return (
    <div className="reunions">
     
          
          {//Addint a reunion is a feature that will be enabled once roles are added to app permissions.  
          //Once Add a reunion is enabled, css will be refactored to adjust for the added button
           <div style={{ float: "right" }}>
            <Link to="/createNextReunion">
              <Button variant="light" size="lg" className="add-memory-button">
                Add Upcoming Reunion
              </Button>
            </Link>
          </div>}


          {// COMMENTED OUT UNTIL NEEDED TO ARCHIVE A REUNION AGAIN/////////
          /* <div style={{ float: "right" }}>
            <Link to="/archiveReunion">
              <Button variant="light" size="lg" className="add-memory-button">
                Add Completed Reunion to Page
              </Button>
            </Link>
          </div>} */}
          <br></br>
          <br></br>
       
          

      <div>
        <h1 className="reunion-headline">Reunions</h1>
      </div>

      <Container>
        <Row>
          {reunions.map((reunion) => {
            return (
              <Col key={reunion._id} s={12} md={6} lg={3} xl={4}>
                <Card className="reunion-card" >
                  <Card.Img
                    className="reunion-card-image"
                    variant="top"
                    src={reunion.cover_image_url}
                  />
                  <Card.Body className="reunion-card-body">
                    <Card.Title
                      style={{
                        backgroundColor: "white",
                        display: "flex",
                        fontWeight: "bold",
                      }}
                    >
                      {reunion.year}
                    </Card.Title>
                    <hr></hr>
                    <Card.Text className="reunion-card-text">
                      {reunion.description}
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
