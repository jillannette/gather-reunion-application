import React, { useState } from 'react';
import axios from 'axios';
  
const Memories =  () => {


  const [memoriesData, setMemoriesData] = useState([]);
  const token = '{TOKEN}'

  axios.get('https://localhost:5000/api/memories', {
  headers: {
    'Authorization': `${token}`
  }
})
.then((res) => {
  setMemoriesData(res.data)
})
.catch((error) => {
  console.error(error)
})

  return (

    <div className="container" style={{borderBottom: "solid 1px", borderWidth: "1px", 
    paddingBottom: "1rem", textAlign: "center"}}>

    <table>
      <thead>
        <tr>
          <th></th>
          <th>Image</th> 
          <th>Member</th>
          <th>Subject</th>
          <th>Text</th>
        </tr>
      </thead>

      <tbody>

        {memoriesData.map(memory => {
        console.log(memory)
        return (
        <tr key={memory.id}>
          <td><img src={memory.image_url} alt='memory' className="img"></img></td>
          <td>{memory.member}</td>
          <td>{memory.subject}</td>
          <td>{memory.text}</td>
        </tr>

        )
        }
      )}
      </tbody>
    </table>
    </div>

    );
}; 

  export default Memories;

//   import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

  // const navigate = useNavigate();

  // <td><Link to={`/viewComments/${comment.id}`}><button>View Comments</button></Link></td>

    
