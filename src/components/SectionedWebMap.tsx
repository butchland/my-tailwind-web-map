import clsx from "clsx";
import BaseWebMap, { type BaseWebMapProps } from "./BaseWebMap";

interface SectionedWebMapProps extends BaseWebMapProps {
  headerContent?: any;
  sidebarContent?: any;
  height?: string;
  width?: string;
  headerClassName?: string;
  className?: string;
}
interface SidebarProps {
  className?: string;
  content?: any;
}

  const SideBar = (props:SidebarProps) => {
    const {className, content} = props;
    return (<div className={className}>
          {content}
        </div>)
  }

function SectionedWebMap(props:SectionedWebMapProps) {
  const {
    initialViewState, 
    mapboxStyle, 
    layers, 
    children,
    headerContent,
    sidebarContent,
    height,
    width,
    headerClassName,
    className,
  } = props;
  const headerHeight = "h-[" + height + "]";
  const marginTop = "mt-[" + height + "]";
  const sidebarWidth = "w-["  + width + "]";

  // const sidebarClassName = `${sidebarWidth} ${marginTop} ${className}`
  // const sidebarClassName = "w-32 mt-32 bg-slate-200"
  // console.log(`sidebarClassName: ${sidebarClassName}`);
  return (
    <div className="relative h-screen">
      {/* `absolute ${headerHeight} w-full z-10 ${headerClassName}` */}
      <div className={clsx(headerHeight,"w-full","z-10",headerClassName)}>
        {headerContent}
      </div>
      <div className="relative top-0 flex h-full">
        {/*  className={clsx(sidebarWidth, marginTop, className) */}
        <SideBar
          className={clsx(sidebarWidth, marginTop, className)}
          content={sidebarContent} 
        />
        {/* <div className={sidebarClassName}>
          {sidebarContent}
        </div> */}
        <div className="relative w-full h-full">
          <BaseWebMap 
            initialViewState={initialViewState}
            mapboxStyle={mapboxStyle}
            layers={layers} 
          >
            {children}
          </BaseWebMap>
        </div>
      </div>
    </div>
  );
}

export default SectionedWebMap