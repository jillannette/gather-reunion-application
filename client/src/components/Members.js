import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { BASE_URL } from "../App.js";

const Members = ({ loggedInMember }) => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInMember) {
      getMembers();
    } else {
    }
  }, [loggedInMember]);

  async function getMembers() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    await axios
      .get(`${BASE_URL}/api/members`, config)
      .then((response) => {
        console.log("members", response.data);
        setMembers(response.data);
      })
      .catch((error) => {
        alert(
          "   If you are not a member, please sign up to use this site!",
          error
        );
        setError(error);
      });
  }

  if (error) return "error";

  const getMemberBio = (memberId) => {
    navigate(`/members/${memberId}`);
  };

  return (
    <>
      <div>
        <h1 className="center-headline">Class Members</h1>
      </div>

      <div style={{ container: "container-fluid" }}>
        <Container className="members-container">
          <Row>
            {members.map((member) => {
              return (
                <Col key={member._id} s={12} md={6} lg={4} xl={4}>
                  <Card style={{ width: "20rem" }}>
                    <Card.Img
                      className="members-card-image"
                      variant="top"
                      src={member.image_url}
                    />
                    <Card.Body className="member-card-body">
                      <Card.Text style={{ textAlign: "center" }}>
                        {member.currentName}
                      </Card.Text>
                      <Card.Title
                        className="member-subtitles"
                        style={{ textAlign: "center" }}
                      >
                        ({member.nameAtGraduation})
                      </Card.Title>
                      <Card.Title
                        className="member-subtitles"
                        style={{ textAlign: "center" }}
                      >
                        {member.email}
                      </Card.Title>
                      <Card.Title
                        className="member-subtitles"
                        style={{ textAlign: "center" }}
                      >
                        {member.residesIn}
                      </Card.Title>
                    </Card.Body>
                    <Button
                      onClick={() => getMemberBio(member._id)}
                      variant="warning"
                    >
                      View Member Bio
                    </Button>
                  </Card>
                  <br></br>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Members;
