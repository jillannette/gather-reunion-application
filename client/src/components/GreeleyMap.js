import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, LoadScript } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";

const GreeleyMap = () => {
  const initialMarkers = [
    {
      position: {
        lat: 40.42253,
        lng: -104.73491
      },
      label: { color: "white", text: "1"},
      draggable: false
    },
    {
      position: {
        lat: 40.41806,
        lng: -104.73758
      },
      label: { color: "white", text: "2"},
      draggable: false
    },
    {
      position: {
        lat: 40.39680,
        lng: -104.75258
      },
      label: { color: "white", text: "3"},
      draggable: false
    },
  ];

  const [markers, setMarkers] = useState(initialMarkers);

  const containerStyle = {
    height: "80vh",
    width: "100%",
  };

  const center= {
    lat: 40.407163,
    lng: -104.756334,
  }

// FOR FUTURE DEVELOPMENT PURPOSES
//   const mapClicked = (event) => { 
//     console.log(event.latLng.lat(), event.latLng.lng()) 
// }

// const markerClicked = (marker, index) => {  
//   setActiveInfoWindow(index)
//   console.log(marker, index) 
// }

  return (
    <>
      <Container className="nextReunion-container">
        <div className="map">
          <LoadScript googleMapsApiKey="AIzaSyCoRER8befUeFnrPEvaS6W4XMn9UYjQjbU">
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={13}
                // onClick={mapClicked}
            >
                {markers.map((marker, index) => (
                  <Marker
                      key={index}
                      position={marker.position}
                      label={marker.label}
                      // onClick={event => markerClicked(marker, index)}
                >
                  
                  {  /* //FOR FUTURE DEVELOPMENT PURPOSES 
                    {
                    (activeInfoWindow === index)
                    &&
                    <InfoWindow position={marker.label}>
                      <b>{marker.label.text}</b>
                    </InfoWindow>
                  } */}
                </Marker>
                ))}
              
            </GoogleMap>
          </LoadScript>
        </div>
      </Container>
    </>
  );
};

export default React.memo(GreeleyMap);
