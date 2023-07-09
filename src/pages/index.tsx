import WebMap
 from "../components/WebMap";
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
        </div>
      </div>
    </div> );
}

export default Index;
