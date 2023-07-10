import WebMap
 from "../components/WebMap";
import '../styles/mapbox-gl.css'
const ButtonBar = () => {
  return (
    <div className="flex justify-between h-full">
    <button className="w-8 mapboxgl-ctrl-zoom-in" type="button" aria-label="Zoom in" aria-disabled="false">
      <span className="block w-8 h-full mapboxgl-ctrl-icon" aria-hidden="true" title="Zoom in">
      </span>
    </button>      
    </div>
  );
}
function Index() {
  return (
    <div className="relative h-screen">
      <div className="absolute h-10 w-full z-10 bg-white">
        <header className="block">Header</header>
      </div>
      <div className="relative top-0 flex h-full">
        <div className="w-32 mt-10 bg-slate-200">Side</div>
        <div className="relative w-full h-full">
          <WebMap/>
          <div className="absolute bottom-10 left-4 w-20 h-8 bg-red-400">
            <ButtonBar/>
          </div>
        </div>
      </div>
    </div> );
}

export default Index;
