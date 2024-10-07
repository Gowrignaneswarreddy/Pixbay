import React, { useEffect, useState } from "react";
import Img from "./img";
import Navbar1 from "./Navbar1";
function Pix() {
   let [set,setstate]=useState('')
   let  [serch,setserch]=useState([])
    function fun(e){
        let val=setstate(e.target.value)
    }
    useEffect(()=>{
        let api=fetch('https://pixabay.com/api/?key=46193679-17d23e9b240e44f36cc319d65&q=${set}&image_type=photo')
        api.then((x)=>x.json()).then((x)=>{
            let res=setserch(x.hits)
        })
       
    },[set])
       console.log(serch);
       console.log(set);
      
       
            return(
                <>
                <div className="pix">
                <h1>Stunning royalty-free images & royalty-free stock</h1>
                <p>Over 5 million+ high quality stock images, videos and music shared by our talented community.</p>
                <input onChange={fun} type="text" placeholder="Serch for all images in pixabay"></input><h4>All Images<i class="fa-solid fa-chevron-down"></i></h4>
                <h3><i class="fa-solid fa-magnifying-glass"></i></h3>
                </div>
                <Navbar1/>
                <div className='mainimgdiv'>
            {serch.filter((x) => x.tags.toLowerCase().includes(set.toLowerCase())).map((x) => (
                <Img key={x.id} src={x.webformatURL} alt={x.tags} />
            ))}
        </div>
                </>
            )
           
        }
    
    export default  Pix;