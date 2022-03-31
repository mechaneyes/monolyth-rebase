import React, { useRef, useEffect, useState } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWVjaGFuZXllcyIsImEiOiJ6V2F6bmFNIn0.mauWWMuRub6GkCxkc49sTg";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  let printLng = -121.4885615;
  let printLat = 38.5688497;
  let dwLng = -121.5048399;
  let dwLat = 38.5738173;
  const [lng, setLng] = useState(dwLng);
  const [lat, setLat] = useState(dwLat);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mechaneyes/ckx9kpyvq0bvu15t7ctqe3053", // Monolyth Targets
      //   style: "mapbox://styles/mechaneyes/ckx956wynanke14lgplyljg4u", // Monolyth Blue
      center: [lng, lat],
      pitch: 73,
      bearing: 40,
      zoom: 17.5,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("load", () => {
      // Start the animation.
        rotateCamera(110);

      // ————————————————————————————————————o 3D Buildings -->
      // 3D Buildings -->
      //
      const layers = map.current.getStyle().layers;
      for (const layer of layers) {
        if (layer.type === "symbol" && layer.layout["text-field"]) {
          // remove text labels
          //   map.current.removeLayer(layer.id);
        }
      }

      //   map.current.addLayer({
      //     id: "add-3d-buildings",
      //     source: "composite",
      //     "source-layer": "building",
      //     filter: ["==", "extrude", "true"],
      //     type: "fill-extrusion",
      //     minzoom: 15,
      //     paint: {
      //         // "fill-extrusion-color": "#4bdd6f",
      //         // "fill-extrusion-color": "#008fd6",
      //       // "fill-extrusion-opacity": 0.3,
      //       //   fog: {
      //       //     range: [-0.5, 3],
      //       //     color: "white",
      //       //     "horizon-blend": 0.1,
      //       //   },

      //       // use an 'interpolate' expression to add a smooth transition effect to the
      //       // buildings as the user zooms in
      //     //   "fill-extrusion-height": [
      //     //     "interpolate",
      //     //     ["linear"],
      //     //     ["zoom"],
      //     //     15,
      //     //     0,
      //     //     15.05,
      //     //     ["get", "height"],
      //     //   ],
      //     //   "fill-extrusion-base": [
      //     //     "interpolate",
      //     //     ["linear"],
      //     //     ["zoom"],
      //     //     15,
      //     //     0,
      //     //     15.05,
      //     //     ["get", "min_height"],
      //     //   ],
      //     },
      //   });
    });
  });

  // ————————————————————————————————————o Markers -->
  // Markers -->
  //
  useEffect(() => {
    // Dwellpoint Pin -->
    //
    // const marker = new mapboxgl.Marker({
    //   color: "#FFFFFF",
    //   offset: [0, -20],
    // })
    //   .setLngLat([dwLng, dwLat])
    //   .addTo(map.current);

    // Dwellpoint Marker -->
    //
    // new HTML element for each feature
    const el = document.createElement("div");
    el.className = "marker";
    new mapboxgl.Marker(el).setLngLat([dwLng, dwLat]).addTo(map.current);
  });

  const rotateCamera = (timestamp) => {
    // clamp the rotation between 0 -360 degrees
    // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
    map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
    // Request the next frame of the animation.
    requestAnimationFrame(rotateCamera);
  };

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};

export default Map;
