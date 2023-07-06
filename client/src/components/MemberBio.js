import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../App.js";

const MemberBio = ({ loggedInMember }) => {
  const params = useParams();

  const [memberBio, setMemberBio] = useState({
    image_url: "",
    nameAtGraduation: "",
    currentName: "",
    email: "",
    bio: "",
  });

  useEffect(
    () => {
      if (loggedInMember) {
        getMember();
      } else {
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loggedInMember]
  );

  async function getMember() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    await axios
      .get(`${BASE_URL}/api/members/${params.id}`, config)
      .then((response) => {
        console.log("response data", response.data.member); //member
        setMemberBio(response.data.member);
      })
      .catch((error) => {
        alert("An error has occurred");
        console.error(error);
      });
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="bio-col">
            <Card key={memberBio._id} style={{ width: "70rem" }}>
              <Card.Img
                className="bio-image"
                style={{ width: 500, height: 500 }}
                src={memberBio.image_url}
              />

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
