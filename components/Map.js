import React from "react";
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter"

function Map({searchResult}) {
  
  

const coordinates = searchResult.map((result) => ({
  longitude: result.long,
  latitude: result.lat,
}));

const center = getCenter(coordinates);


    const [viewport, setViewport] = React.useState({
      width: "100%",
      height: "100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
    });


  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/jahed12/cks67b1h328ol18oyk2b45w77"
        mapboxApiAccessToken = {process.env.mapbox_key}
    {...viewport}
    onViewportChange={nextViewPort => setViewport(nextViewPort)}
/>


    </>
  );
}

export default Map;
