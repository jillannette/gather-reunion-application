import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from '../App.js';

const MemberBio = ({ loggedInMember }) => {
  const params = useParams();
  
  const [memberBio, setMemberBio] = useState({
    image_url: "",
    nameAtGraduation: "",
    currentName: "",
    email: "",
    bio: "",
  });

  const [error, setError] = useState(null);
 
  useEffect(() => {
    if (loggedInMember) {
      getMember();
    }
     
  },
  
   // eslint-disable-next-line react-hooks/exhaustive-deps
   [loggedInMember]);

  async function getMember() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/api/members/${params.id}`, config)
      .then((response) => {
        console.log("memberBio", response.data);
        const memberBio = response.data;

        setMemberBio(memberBio);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }

  if (error) return "error";

  return (
    <>
    
     <Container >
        <Row>
          <Col className="bio-col">
            <Card key={memberBio._id} style={{ width: "70rem" }}>
              <Card.Img className="bio-image"  src={memberBio.image_url} />

              <Card.Body className="member-card-body">
                <Card.Title>{memberBio.currentName}</Card.Title>

                <Card.Text>{memberBio.bio}</Card.Text>

            
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MemberBio;
