import React from 'react';
import { GoogleMap, Marker, LoadScript, useJsApiLoader } from "@react-google-maps/api";


import Container from 'react-bootstrap/Container';



  const mapStyles = {        
    height: "70vh",
    width: "100%"
  };

  const center = {
    lat: 40.42253,
    lng: -104.73491
  };

  const venue = 
    {   
      name: "The GOAT",
      location: { 
        lat: 40.39682,
        lng: -104.75260
      },
    }

 const GreeleyMap = () => {
   
 return (
  <>
  <Container className="nextReunion-container">
  <div className="map">
  <LoadScript googleMapsApiKey = 'AIzaSyC1T3tQzYXuNQCwawIlrc3VBAavoT8cBFA'>
    <GoogleMap
      mapContainerStyle={mapStyles}
      center={center} 
      zoom={13}>
        <Marker key={venue.name} position={venue.location} label={venue.name} visible='true' opacity='1.0'shape="MarkerShapeCircle" />
           
    </GoogleMap>
  </LoadScript>
  </div>
  </Container>
  
  </>
 )
};
 

export default React.memo(GreeleyMap);