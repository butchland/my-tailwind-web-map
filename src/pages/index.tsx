import SectionedWebMap from "../components/SectionedWebMap";
import "../styles/sectioned-webmap.css"

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
  const headerContent = <header className="h-full bg-slate-500">Header</header>;
  const sidebarContent = <div className="bg-slate-500 w-2/12">Sidebar</div>
  const footerContent = <div className="bg-slate-500">Footer</div>
  const rightSidebarContent = <div className=" bg-slate-500 w-2/12">Right sidebar content</div>
  const boxContent = <div className="absolute z-50 rounded-lg px-5 text-base py-4 bottom-48 right-10 w-80 h-80 cursor-pointer bg-slate-400" >
                      Map box content
                     </div>
  
  const navigationControl = (
    <div className="ml-5 mt-4 px-1 mapboxgl-ctrl mapboxgl-ctrl-group w-10">
      <button
        className="mapboxgl-ctrl-zoom-in"
        type="button"
        aria-label="Zoom in"
        aria-disabled="false"
        onClick={() => console.log("zoom in")}
      >
        <span
          className="mapboxgl-ctrl-icon"
          aria-hidden="true"
          title="Zoom in"
        ></span>
      </button>
      <button
        className="mapboxgl-ctrl-zoom-out"
        type="button"
        aria-label="Zoom out"
        aria-disabled="false"
        onClick={() => console.log("zoom out")}
      >
        <span
          className="mapboxgl-ctrl-icon"
          aria-hidden="true"
          title="Zoom out"
        ></span>
      </button>
      <button
        className="mapboxgl-ctrl-compass"
        type="button"
        aria-label="Reset bearing to north"
      >
        <span
          className="mapboxgl-ctrl-icon"
          aria-hidden="true"
          title="Reset bearing to north"
          style={{transform: 'rotate(0deg'}}
        ></span>
      </button>
    </div>
  );
  const inMapContent = <>
      {boxContent}
      {navigationControl}
   </>
  return (
    <SectionedWebMap 
      initialViewState={INITIAL_VIEW_STATE}
      mapboxStyle={mapboxStyle}
      headerContent={headerContent}
      sidebarContent={sidebarContent}  
      footerContent={footerContent}
      rightSidebarContent={rightSidebarContent} 
      inMapContent = {inMapContent} 
      className="bg-slate-500"
    > 
    </SectionedWebMap>
  );
}

export default Index;
