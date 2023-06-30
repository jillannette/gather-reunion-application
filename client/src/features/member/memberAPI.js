import axios from 'axios';

const BASE_URL = 'http://localhost:5000/members';

export const fetchMembers = (loggedInQuery, biosQuery, memoriesQuery, commentsQuery) => {
  return axios.get(`${BASE_URL}?loggedIn=${loggedInQuery}&?nameAtGraduation=${biosQuery}&memories=${memoriesQuery}&comments=${commentsQuery}`)
};

