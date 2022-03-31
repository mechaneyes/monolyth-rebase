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
  let docoLng = -121.5035745;
  let docoLat = 38.5817533;
  const [lng, setLng] = useState(docoLng);
  const [lat, setLat] = useState(docoLat);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mechaneyes/ckx9kpyvq0bvu15t7ctqe3053", // Monolyth Targets
      //   style: "mapbox://styles/mechaneyes/ckx956wynanke14lgplyljg4u", // Monolyth Blue
      center: [lng, lat],
      pitch: 61,
      bearing: 80,
      zoom: 16,
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
      // ————o Animated Camera Rotation o————
      //
      rotateCamera(110);

      // ————o 3D Buildings o————
      //
      const layers = map.current.getStyle().layers;

      // ————o Remove Text Labels o————
      //
      for (const layer of layers) {
        if (layer.type === "symbol" && layer.layout["text-field"]) {
          //   map.current.removeLayer(layer.id);
        }
      }
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
    const el = document.createElement("div");
    el.className = "marker";
    // new mapboxgl.Marker(el).setLngLat([dwLng, dwLat]).addTo(map.current);
  });

  // ————————————————————————————————————o Camera Rotation -->
  // Camera Rotation -->
  //
  const rotateCamera = (timestamp) => {
    // clamp the rotation between 0 -360 degrees
    // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
    map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
    // Request the next frame of the animation.
    // requestAnimationFrame(rotateCamera);
  };

  // ————————————————————————————————————o Sound Visualization -->
  // Ambient Sound 3D Building Visualization -->
  //
  useEffect(() => {
    if (!map.current) return;
    setTimeout(() => {
      const bins = 16;
      const maxHeight = 200;
      const binWidth = maxHeight / bins;

      // Divide the buildings into 16 bins based on their true height, using a layer filter.
      for (let i = 0; i < bins; i++) {
        map.current.addLayer({
          id: `3d-buildings-${i}`,
          source: "composite",
          "source-layer": "building",
          filter: [
            "all",
            ["==", "extrude", "true"],
            [">", "height", i * binWidth],
            ["<=", "height", (i + 1) * binWidth],
          ],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#03cce4",
            "fill-extrusion-height-transition": {
              duration: 0,
              delay: 0,
            },
            "fill-extrusion-opacity": 1,
          },
        });
      }

      // Older browsers might not implement mediaDevices at all, so we set an empty object first
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }

      // Some browsers partially implement mediaDevices. We can't just assign an object
      // with getUserMedia as it would overwrite existing properties.
      // Here, we will just add the getUserMedia property if it's missing.
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = (constraints) => {
          // First get ahold of the legacy getUserMedia, if present
          const getUserMedia =
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

          // Some browsers just don't implement it - return a rejected promise with an error
          // to keep a consistent interface
          if (!getUserMedia) {
            return Promise.reject(
              new Error("getUserMedia is not implemented in this browser")
            );
          }

          // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
          return new Promise((resolve, reject) => {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          // Set up a Web Audio AudioContext and AnalyzerNode, configured to return the
          // same number of bins of audio frequency data.
          const audioCtx = new (window.AudioContext ||
            window.webkitAudioContext)();

          const analyser = audioCtx.createAnalyser();
          analyser.minDecibels = -77;
          analyser.maxDecibels = -10;
          analyser.smoothingTimeConstant = 0.85;

          const source = audioCtx.createMediaStreamSource(stream);
          source.connect(analyser);

          analyser.fftSize = 2048;

          const dataArray = new Uint8Array(bins);

          function draw(now) {
            analyser.getByteFrequencyData(dataArray);

            // Use that data to drive updates to the fill-extrusion-height property.
            let avg = 0;
            for (let i = 0; i < bins; i++) {
              avg += dataArray[i];
              map.current.setPaintProperty(
                `3d-buildings-${i}`,
                "fill-extrusion-height",
                10 + 4 * i + dataArray[i]
              );
            }
            avg /= bins;

            // Animate the map bearing and light color over time, and make the light more
            // intense when the audio is louder.
            //   map.current.setBearing(now / 300);
            map.current.setBearing(100);
            const hue = (now / 100) % 360;
            const saturation = Math.min(50 + avg / 4, 100);
            map.current.setLight({
              // color: `hsl(${hue},${saturation}%,50%)`,
              // intensity: Math.min(1, (avg / 256) * 10),
            });

            requestAnimationFrame(draw);
          }

          requestAnimationFrame(draw);
        })
        .catch((err) => {
          console.log("The following gUM error occurred:", err);
        });
    }, 500);
  });

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};

export default Map;
