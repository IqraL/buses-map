import React, { useState, useEffect, useRef } from "react";
import { Map, TileLayer, Popup } from "react-leaflet";
import ReactDOM from "react-dom";

const leafletContainer = {
  height: "100vh",
  width: "100vw",
};

const appContainer = {
  display: "grid",
  gridTemplateColumns: "200px 1fr",
};

const CENTER = [52.6, -1.2];
const INITAL_ZOOM = 7;

function App() {
  //which items to display i.e  all, libraires ConservationAreas
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement } = current;
    console.log(leafletElement.getBounds());
  }, [mapRef]);

  return (
    <div className="App" style={appContainer}>
      <Map
        ref={mapRef}
        style={leafletContainer}
        center={CENTER}
        zoom={INITAL_ZOOM}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        <OverLay />
      </Map>
    </div>
  );
}
const controllerStyles = {
  position: "fixed",
  zIndex: "1000",
  top: "0",
  marginTop: "50px",
  marginLeft: "50px",
  backgroundColor: "White",
  borderRadius: "25px",
};
function OverLay() {
  return ReactDOM.createPortal(
    <div style={controllerStyles}>SidePanel</div>,
    document.getElementById("controller")
  );
}

export default App;

/*
http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?date=1527811200&
opacity=0.9&fill_bound=true&appid={api_key}

https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png
https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

*/
