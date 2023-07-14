import { NavigationControl } from "react-map-gl";
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
  const boxContent = <div className="absolute rounded-lg px-5 text-base py-4 bottom-48 right-10 w-80 h-80 bg-slate-400" >
                      Map box content
                     </div>
  return (
    <SectionedWebMap 
      initialViewState={INITIAL_VIEW_STATE}
      mapboxStyle={mapboxStyle}
      headerContent={headerContent}
      sidebarContent={sidebarContent}  
      footerContent={footerContent}
      rightSidebarContent={rightSidebarContent}  
      className="bg-slate-500"
    >
      <NavigationControl
         position="top-left"
      />
      {boxContent}
    </SectionedWebMap>
  );
}

export default Index;
