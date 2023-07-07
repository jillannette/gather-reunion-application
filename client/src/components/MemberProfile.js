import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../App.js";

const MemberProfile = ({ loggedInMember, handleLogout }) => {
  const navigate = useNavigate();

  const [memberProfile, setMemberProfile] = useState({
    image_url: "",
    nameAtGraduation: "",
    currentName: "",
    email: "",
    bio: "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (loggedInMember) {
      getMember();
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInMember]);
  console.count();

  const handleChange = (e) => {
    setMemberProfile({
      ...memberProfile,
      [e.target.name]: e.target.value,
    });
  };

  const updateMember = (e) => {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .patch(
        `${BASE_URL}/api/members/${loggedInMember.memberId}`,
        memberProfile,
        config
      )
      .then((response) => {
        console.log("memberProfile", response.data);

        setMemberProfile(response.data);
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  console.count();

  const deleteAccount = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .delete(`${BASE_URL}/api/members/${loggedInMember.memberId}`, config)
      .then((response) => {
        console.log("deleted member", response.data);
        handleLogout(loggedInMember.memberId);
        navigate("/");
      });
  };

  async function getMember() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    await axios
      .get(`${BASE_URL}/api/members/${loggedInMember.memberId}`, config)
      .then((response) => {
        console.log("response", response.data.member);
        setMemberProfile(response.data.member);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  return (
    <>
      <Container>
        {loggedInMember && (
          <Row>
            <Col className="profile-col">
              <Card key={memberProfile._id} >
                <Card.Img
                  style={{ width: 300, height: 300 }}
                  className="profile-image"
                  variant="top"
                  src={memberProfile.image_url}
                />

                <Card.Body className="profile-card-body">
                  {!editMode ? (
                    <>
                      <Button
                        variant="warning"
                        onClick={() => setEditMode(true)}
                        className="text-right"
                      >
                        Manage Account
                      </Button>

                      <Card.Title>{memberProfile.currentName}</Card.Title>

                      <Card.Title>{memberProfile.email}</Card.Title>
                      <Card.Title>{memberProfile.residesIn}</Card.Title>
                      <Card.Text>{memberProfile.bio}</Card.Text>
                    </>
                  ) : (
                    <>
                      <br></br>
                      <FormGroup>
                        <Form onSubmit={updateMember}>
                          <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="currentName"
                            value={memberProfile.currentName}
                          />
                          <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="image_url"
                            value={memberProfile.image_url}
                          />
                          <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="email"
                            value={memberProfile.email}
                          />
                          <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="bio"
                            value={memberProfile.bio}
                          />
                          <br></br>
                          <Button variant="warning" type="submit">
                            Update Profile
                          </Button>
                          &nbsp;&nbsp;
                          <Button
                            onClick={() => deleteAccount(memberProfile._id)}
                            variant="warning"
                            type="button"
                          >
                            Delete Account
                          </Button>
                          &nbsp;&nbsp;
                          <Button
                            onClick={() => setEditMode(false)}
                            variant="warning"
                            type="button"
                          >
                            Cancel
                          </Button>
                        </Form>
                      </FormGroup>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default MemberProfile;
