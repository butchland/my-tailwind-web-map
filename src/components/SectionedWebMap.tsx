import BaseWebMap, { BaseWebMapProps } from "./BaseWebMap";


interface SectionedWebMapProps extends BaseWebMapProps {
  className?: string,
  headerContent?: any,
  sidebarContent?: any,
  footerContent?: any,
  rightSidebarContent?:any,
  inMapContent: any,
}

function SectionedWebMap(props:SectionedWebMapProps) {
  const {
    className, 
    headerContent, 
    sidebarContent, 
    footerContent, 
    rightSidebarContent,
    inMapContent 
  } = props
  return (
    <div className={className}>
      <div className="map-header-container">
        {headerContent}
      </div>
      <div className="flex">
        {sidebarContent}
        <div className="map-body relative w-full">
          <BaseWebMap 
            {...props}
          />
          <div className="relative w-full h-full left-0 top-0">
            {inMapContent}
          </div>
        </div>
        {rightSidebarContent}
      </div>
      <div className="map-footer-container">
        {footerContent}
      </div>
    </div>
  );
}

export default SectionedWebMap