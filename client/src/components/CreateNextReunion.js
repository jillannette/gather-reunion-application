import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../App.js";

const CreateNextReunion = ({ loggedInMember }) => {
  const navigate = useNavigate();
  const params = useParams();
  const reunionYear = parseInt(params.year);

  const [nextReunion, setNextReunion] = useState({
    cover_image_url: "",
    date: "",
    location: "",
    description: "",
    year: reunionYear,
    maps: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNextReunion({
      ...nextReunion,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate("/reunions");
  };

  async function createNextReunion(e) {
    setLoading(true);
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    axios
      .post(`${BASE_URL}/api/nextReunions`, nextReunion, config)
      .then((response) => {
        setNextReunion(response.data);
        navigate(`/nextReunions`);
      })
      .catch((error) => {
        console.error("error fetching data: ", error);
        setError(error);
      })
      .finally((loading) => {
        console.log("Loading data: ", loading);
        setLoading(false);
      });
  }

  if (loading) return "loading...";
  if (error) return "error";

  return (
    <>
      <div className="join-background">
        <div>
          <br></br>
          <h1 className="center-headline">Add Next Reunion</h1>
        </div>
        <div>
          <Container className="login-border">
            <Form className="form" onSubmit={createNextReunion}>
              <Form.Group
                className="mb-3"
                type="input"
                controlId="formBasicImage"
              >
                <Form.Label>Add reunion cover image </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter photo url here"
                  name="cover_image_url"
                  value={nextReunion.cover_image_url}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                type="input"
                controlId="formBasicYear"
              >
                <Form.Label>Add reunion year </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="YYYY"
                  name="year"
                  value={nextReunion.year}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                type="input"
                controlId="formBasicImage"
              >
                <Form.Label>Add reunion date </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Example: January 1"
                  name="date"
                  value={nextReunion.date}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                type="input"
                controlId="formBasicImage"
              >
                <Form.Label>Add reunion location </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City, State"
                  name="location"
                  value={nextReunion.location}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                type="input"
                controlId="formBasicTextArea"
              >
                <Form.Label>Add comments about the upcoming reunion</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  type="text"
                  placeholder=""
                  name="description"
                  value={nextReunion.description}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Button variant="warning" type="submit">
                  Submit
                </Button>
                &nbsp;&nbsp;
                <Button onClick={handleCancel} variant="warning" type="button">
                  {" "}
                  Cancel
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CreateNextReunion;
