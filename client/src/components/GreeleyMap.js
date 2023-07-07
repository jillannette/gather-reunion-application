import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

import Container from "react-bootstrap/Container";

const containerStyle = {
  height: "80vh",
  width: "100%",
};

const center = {
  lat: 40.42253,
  lng: -104.73491,
};

const venue = {
  name: "The GOAT",
  location: {
    lat: 40.39682,
    lng: -104.7526,
  },
};

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY


const GreeleyMap = () => {
 
  return (
    <>
      <Container className="nextReunion-container">
        <div className="map">
          <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}
            >
              <Marker
                key={venue.name}
                position={venue.location}
                label={venue.name}
                setVisible="true"
                setShape="MarkerShapeCircle"
                
              />
            </GoogleMap>
          </LoadScript>
        </div>
      </Container>
    </>
  );
};

export default React.memo(GreeleyMap);
