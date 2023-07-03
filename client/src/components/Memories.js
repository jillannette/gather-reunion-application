import React, { useState, useEffect } from "react";
import Memory from "./Memory";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../App.js";

const Memories = ({ loggedInMember }) => {
  const [memories, setMemories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedInMember) {
      getMemories();
    } else {
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInMember]);

  async function getMemories() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    await axios
      .get(`${BASE_URL}/api/memories`, config)
      .then((response) => {
        console.log("memories", response.data);
        setMemories(response.data.memories);
      })
      .catch((error) => {
        alert("An error has occurred");
        console.error(error);
        setError(error);
      });
  }

  if (error) return "error";

  return (
    <>
      <div>
        <h1 className="reunion-headline">Memories</h1>

        <Link to="/createMemory">
          <Button
            className="nextReunionButton"
            style={{ float: "right" }}
            variant="warning"
            type="submit"
          >
            Add A Memory
          </Button>
        </Link>
      </div>
      <div>
        {memories.map((memory) => {
          return (
            <Memory
              memory={memory}
              loggedInMember={loggedInMember}
              key={memory._id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Memories;
