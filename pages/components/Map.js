import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmlzaGlrZXNoMjMiLCJhIjoiY2t2bmo1MGR0MXE4YzJvdGt3NnRhYmd5diJ9.px9c92eZi2QU6ZZ9Xs9Fow";

const Map = (props) => {
  useEffect(() => {
    // initialize map only once
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [75.352478, 19.901054],
      zoom: 4,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: {
          top: 100,
          bottom: 100,
          left: 100,
          right: 100,
        },
        maxZoom: 14,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1 h-1/2
`;
