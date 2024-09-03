"use client"

import Image from "next/image";
import ReactPannellum, { getConfig } from "react-pannellum";


const hideBtn = () =>{
    console.log("e.target");
}

const PanoramaView = () => {
    const config = {
        preview:"/images/cardetails/tucson/interior/interior_preview.jpg",
        autoLoad:false,
        uiText:{
            loadButtonLabel: `<Image src="/images/btn_start.png" alt="logo" width={50} height={50}/>`,
 
        },
        showZoomCtrl:false,
        doubleClickZoom:true,
        showControls:false
      };

    return (
        <div className="space-y-8">
            
                    <h2 className="text-3xl font-bold text-center">360° Experience</h2>
                    <p className="text-sm text-center">Click and turn : rotate Wheel scroll : Zoom In/Out</p>
            <div >
            <ReactPannellum
          
          id="Panorama"
          sceneId="firstScene"
          imageSource="/images/cardetails/tucson/interior/interior.jpg"
          config={config}
          style={{
            width: "100%",
            height: "425px",
            
          }}
          
        />
            </div>
        </div>
    );
};

export default PanoramaView;