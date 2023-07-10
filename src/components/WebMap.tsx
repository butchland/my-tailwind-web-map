import DeckGL from '@deck.gl/react/typed';
import Map from 'react-map-gl'
import '../styles/mapbox-gl.css'
import { type PropsWithChildren, useState } from 'react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_API_KEY;


export interface WebMapProps extends PropsWithChildren {
  initialViewState:any;
  mapboxStyle?: string;
  layers?: any;
}
function WebMap(props:WebMapProps) {
  const {initialViewState, mapboxStyle, layers, children} = props;
  const handleWebGlInitialize = (gl: WebGLRenderingContext) => {
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
  };
  const [viewState, setViewState] = useState(initialViewState);
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
      layers={layers}
      onWebGLInitialized={handleWebGlInitialize}
    >
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle={mapboxStyle} 
      >
        {children}
      </Map>
    </DeckGL>
  );
}

export default WebMap;
