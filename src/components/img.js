import React from "react";
import Pix from "../components/pix";

function Img ({src,alt}){
        return (
            <>
            <div className="imgdiv">

                <img className="imgs" src={src}></img>
            </div>
            </>
        )
    
}
export  default Img;