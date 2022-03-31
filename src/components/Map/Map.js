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
  const [lng, setLng] = useState(printLng);
  const [lat, setLat] = useState(printLat);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      //   style: "mapbox://styles/mechaneyes/ckb6fbguz4kap1itcbe7p9ykt",
      style: "mapbox://styles/mechaneyes/ckx956wynanke14lgplyljg4u",
      center: [lng, lat],
      pitch: 77,
      bearing: 50,
      zoom: 19,
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
      rotateCamera(0);

      // Add 3d buildings and remove label layers to enhance the map
      const layers = map.current.getStyle().layers;
      for (const layer of layers) {
        if (layer.type === "symbol" && layer.layout["text-field"]) {
          // remove text labels
          map.current.removeLayer(layer.id);
        }
      }

      map.current.addLayer({
        id: "add-3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 15,
        paint: {
          //   "fill-extrusion-color": "#4bdd6f",
          "fill-extrusion-color": "#008fd6",
          // "fill-extrusion-opacity": 0.3,
        //   fog: {
        //     range: [-0.5, 3],
        //     color: "white",
        //     "horizon-blend": 0.1,
        //   },

          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "height"],
          ],
          "fill-extrusion-base": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "min_height"],
          ],
        },
      });
    });
  });

  // Create a new marker.
  useEffect(() => {
    const marker = new mapboxgl.Marker({
      color: "#FFFFFF",
      offset: [0, -50],
    })
      .setLngLat([printLng, printLat])
      .addTo(map.current);
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
