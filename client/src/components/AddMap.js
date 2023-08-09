// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { BASE_URL } from '../App.js';

// const AddMap = ({ loggedInMember }) => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const yearValue = parseInt(params.year);

//   const [selectedNextReunion, setSelectedNextReunion] = useState({})
//   const {eventMap, setEventMap} = useState({
//     reunion: yearValue,
//     center: {
//       lat: null,
//       lng: null,
//     },
//     zoom: null, 
//     containerStyle: {
//       height: '',
//       width: ''
//     }
//   });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

  
//   return (
//     <div>
//       <h2>Add Map</h2>
//       <form onSubmit={handleChange}>
//         <div>
//           <label htmlFor="zoom">Zoom Level:</label>
//           <input
//             type="number"
//             name="zoom"
//             value={eventMap.zoom}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="center">Map Center Latitude and Longitude:</label>
//           <input
//             type="number"
//             name="lat"
//             value={eventMap.center.lat}
//             onChange={handleChange}
//             required
//           />
//            <input
//             type="number"
//             name="lng"
//             value={eventMap.center.lng}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="containerStyle">Map Container Settings</label>
//           <input
//             type="string"
//             name="height"
//             value={eventMap.containerStyle.height}
//             onChange={handleChange}
//             required
//           />
//            <input
//             type="string"
//             name="width"
//             value={eventMap.containerStyle.width}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
        
        
//         <button type="submit">Add Map Entry</button>
//       </form>
//     </div>
//   );
// };

// export default AddMap;



        
   