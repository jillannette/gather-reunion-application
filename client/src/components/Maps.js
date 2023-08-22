// import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import axios from "axios"; // Import axios
// import { BASE_URL } from "../App.js";
// import NextReunions from './NextReunions';

// const Map = ({ loggedInMember }) => {
//   const params = useParams();
//   const yearValue = parseInt(params.year);

//   const [selectedNextReunion, setSelectedNextReunion] = useState({});
//   const [nextReunionMaps, setNextReunionMaps] = useState([]);
//   const [newNextReunionMap, setNewNextReunionMap] = useState({
//     nextReunion: yearValue,
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

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
//   });

//   useEffect(() => {
//     if (loggedInMember) {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${loggedInMember.token}`,
//         },
//       };
//       axios.get(`${BASE_URL}/api/maps/${params.id}`, config)
//         .then((response) => {
//           setMapProps(response.data);
//           setLoading(false); // Set loading to false after getting the response
//         })
//         .catch((error) => {
//           setLoading(false);
//           setError(error.message); // Store the error message for displaying it later
//         });
//     }
//   }, [loggedInMember, params.id]);

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <h1>Error: {error}</h1>;

//   return (
//     <div>
//       {isLoaded ? (
//         <div className="map">
//           <GoogleMap
//             mapContainerStyle={mapProps.containerStyle}
//             center={mapProps.center}
//             zoom={mapProps.zoom}
//           />
//         </div>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   );
// };

// export default React.memo(Map);