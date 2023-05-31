import axios from 'axios';

const fetchApiData = async (page) => {
  try {
    const response = await axios.get(`https://localhost:5000/api/${page}`);
    const data = response.data;
    console.log(data);
  } catch (err) {
    console.log(err)
  }
};

export default fetchApiData;



