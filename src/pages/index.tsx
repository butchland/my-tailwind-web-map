import SectionedWebMap from "../components/SectionedWebMap";

const INITIAL_VIEW_STATE = {
  longitude: 121.141825,
  latitude: 14.126985,
  zoom: 14,
  minZoom: 5,
  maxZoom: 16,
  pitch: 45,
  bearing: 0,
};
const mapboxStyle = "mapbox://styles/mapbox/dark-v10";


function Index() {
  return (
    <SectionedWebMap 
      initialViewState={INITIAL_VIEW_STATE}
      mapboxStyle={mapboxStyle}
    />
  );
}

export default Index;
