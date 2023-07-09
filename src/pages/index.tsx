import WebMap
 from "../components/WebMap";
function Index() {
  return (
    <div className="relative h-screen">
      <div className="absolute h-10 w-full z-10 bg-white">
        <header className="block">Header</header>
      </div>
      <div className="relative h-full">
        <WebMap/>
      </div>
    </div> );
}

export default Index;
