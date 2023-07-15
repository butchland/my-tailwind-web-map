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
  const headerContent = <header className="h-full">Header</header>;
  const sidebarContent = <div className="w-2/12">Sidebar</div>
  const footerContent = <div className="h-full">Footer</div>
  const rightSidebarContent = <div className=" w-2/12">Right sidebar content</div>
  const boxContent = <div className="absolute rounded-lg px-5 text-base py-4 bottom-8 right-10 w-80 h-20 bg-slate-400" >
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
      className="h-screen bg-slate-300"
    >
      <NavigationControl
         position="top-left"
      />
      {boxContent}
    </SectionedWebMap>
  );
}

export default Index;
