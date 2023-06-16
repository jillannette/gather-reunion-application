import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Comments = ({loggedInMember}) => {

  const params = useParams();

  
  
  const [comments, setComments] = useState([]);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedInMember) {
      getCommentsByMemoryId();
    }
  }, [loggedInMember]);

  async function getCommentsByMemoryId() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    await axios
      .get(`http://localhost:5000/api/memories/${params._id}/comments`, config)
      .then((response) => {
        console.log("comments", response.data);
        const comments = response.data
        setComments(comments)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }
  
  if (error) return "error";
  

  
}

export default Comments;