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
      label: { color: "white", text: "Kenny's Steakhouse"},
      draggable: true
    },
    {
      position: {
        lat: 40.41806,
        lng: -104.73758
      },
      label: { color: "white", text: "Bittersweet Park"},
      draggable: true
    },
    {
      position: {
        lat: 40.39682,
        lng: -104.7526
      },
      label: { color: "white", text: "The GOAT"},
      draggable: true
    },
  ];

  const [activeInfoWindow, setActiveInfoWindow] = useState('');
  const [markers, setMarkers] = useState(initialMarkers);

  const containerStyle = {
    height: "80vh",
    width: "100%",
  };

  const center= {
    lat: 40.407163,
    lng: -104.756334,
  }

  const mapClicked = (event) => {
    console.log(event.latlng.lat(), event.latlng.lng())
  }

  const markerClicked = (marker, index) => {
    setActiveInfoWindow(index)
    console.log(marker, index)
  }

  const markerDragEnd = (event, index) => { 
    console.log(event.latLng.lat())
    console.log(event.latLng.lng())
}

  return (
    <>
      <Container className="nextReunion-container">
        <div className="map">
          <LoadScript googleMapsApiKey="AIzaSyCoRER8befUeFnrPEvaS6W4XMn9UYjQjbU">
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={13}
                onClick={mapClicked}
            >
                {markers.map((marker, index) => (
                  <Marker
                      key={index}
                      position={marker.position}
                      label={marker.label}
                      draggable={marker.draggable}
                      onDragEnd={event => markerDragEnd(event, index)}
                      onClick={event => markerClicked(marker, index)}
                >
                  {
                    (activeInfoWindow === index)
                    &&
                    <InfoWindow position={marker.position}>
                      <b>{marker.position.lat}, {marker.position.lng}</b>
                    </InfoWindow>
                  }
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
