import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

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
      .get("http://localhost:5000/api/members", config)
      .then((response) => {
        console.log("members", response.data);
        setMembers(response.data);
           
      })
      .catch((error) => {
        alert("   If you are not a member, please sign up to use this site!", error);
        setError(error);
      });
  }

  if (error) return "error";

  const getMemberBio = (memberId) => {
    navigate(`/members/${memberId}`);
  };

  const updateProfile = (memberId) => {
    navigate(`/members/${memberId}`)
  }

  return (
    <>
      <div className="join-background">
        <div className="members">
          <br></br>

          <div>
            
              <Button onClick={() => updateProfile()} style={{ float: 'right' }}variant="light" size="lg" className="add-memory-button">
                Edit / Delete My Info
              </Button>
          
            <h1 className="center-headline">Members</h1>

            <br></br>
            <br></br>

            <Container>
              <Row>
                {members.map((member) => {
                  return (
                    <Col key={member._id} s={12} md={6} lg={4} xl={3}>
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={`${process.env.PUBLIC_URL}/images/2016.jpg`}
                        />
                        <Card.Body className="member-card-body">
                          <Card.Title>{member.currentName}</Card.Title>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                              ({member.nameAtGraduation})
                            </ListGroup.Item>
                            {/* <ListGroup.Item>City, State</ListGroup.Item> */}
                          </ListGroup>
                        </Card.Body>
                        <Button
                          onClick={() => getMemberBio(member._id)}
                          variant="warning"
                        >
                          Click here to see what I've been up to
                        </Button>
                      </Card>
                      <br></br>
                      <br></br>
                      <br></br>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
