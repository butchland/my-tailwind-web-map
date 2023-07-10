import WebMap from "../components/WebMap";


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
    <div className="relative h-screen">
      <div className="absolute h-10 w-full z-10 bg-white">
        <header className="block">Header</header>
      </div>
      <div className="relative top-0 flex h-full">
        <div className="w-32 mt-10 bg-slate-200">Side</div>
        <div className="relative w-full h-full">
          <WebMap initialViewState={INITIAL_VIEW_STATE} 
                  mapboxStyle={mapboxStyle}/>
        </div>
      </div>
    </div>
  );
}

export default Index;
