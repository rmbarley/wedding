import React from "react"
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4dMZcJRRIkaQI9KLjiJCsUpmZeodDfeY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 42.065, lng: -71.5848 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 42.065, lng: -71.5848 }} />
    )}
  </GoogleMap>
))

export default Map
