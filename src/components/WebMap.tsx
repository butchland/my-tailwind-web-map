import DeckGL from '@deck.gl/react/typed';
import Map from 'react-map-gl'
import '../styles/mapbox-gl.css'
import { useState } from 'react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_API_KEY;
const mapboxStyle = "mapbox://styles/mapbox/dark-v10";
const INITIAL_VIEW_STATE = {
  longitude: 121.141825,
  latitude: 14.126985,
  zoom: 14,
  minZoom: 5,
  maxZoom: 16,
  pitch: 45,
  bearing: 0

}
function WebMap() {
  const handleWebGlInitialize = (gl: WebGLRenderingContext) => {
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
  };
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);
  const handleChangeViewState = (args: { viewState: any }) => {
    const {viewState} = args;
    //console.log(`zoom: ${JSON.stringify(viewState.zoom)}`)
    setViewState(viewState);
  }

  return (
    <DeckGL
      initialViewState={viewState}
      onViewStateChange={handleChangeViewState}
      controller
      onWebGLInitialized={handleWebGlInitialize}
    >
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle={mapboxStyle} 
      />
    </DeckGL>
  );
}

export default WebMap;
