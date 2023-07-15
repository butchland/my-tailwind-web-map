import DeckGL from '@deck.gl/react/typed';
import Map from 'react-map-gl'
import '../styles/mapbox-gl.css'
import { type PropsWithChildren, useState } from 'react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_API_KEY;


export interface BaseWebMapProps extends PropsWithChildren {
  initialViewState:any;
  mapboxStyle?: string;
  layers?: any;
  onChangeViewState?: any;
}
function BaseWebMap(props:BaseWebMapProps) {
  const {initialViewState, mapboxStyle, layers, children, onChangeViewState} = props;
  const handleWebGlInitialize = (gl: WebGLRenderingContext) => {
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
  };

  const handleChangeViewState = (args: { viewState: any }) => {
    const {viewState} = args;
    if (onChangeViewState) {
        onChangeViewState(viewState)
    }
  }

  return (
    <DeckGL
      initialViewState={initialViewState}
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

export default BaseWebMap;
