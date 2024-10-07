import React from "react";
class Navbar1  extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
                <ul className="nav2">
                    <li className="nav2list" style={{backgroundColor:'#f7f7f7',borderRadius:'10px',padding:'5px',color:'green'}}><i class="fa-solid fa-house"></i><p>Home</p></li>
                    <li className="nav2list"><p className="nav2items"><i class="fa-solid fa-camera"></i></p><p>Photo</p></li>
                    <li className="nav2list"><p className="nav2items"><i class="fa-solid fa-paintbrush"></i></p><p>Illustrations</p></li>
                    <li className="nav2list"><p className="nav2items"><i class="fa-solid fa-pen-nib"></i></p> <p>Vectors</p></li>
                    <li className="nav2list"><p className="nav2items"><i class="fa-solid fa-video"></i></p><p>Videos</p></li>
                    <li className="nav2list"><p className="nav2items"><i class="fa-solid fa-music"></i></p><p>Music</p></li>
                    <li className="nav2list"><p className="nav2items"><i class="fa-solid fa-volume-high"></i></p><p>Sound Effects</p></li>
                    <li className="nav2list"><p className="nav2items" ><i class="fa-solid fa-fire-flame-curved"></i></p><p>Gifs</p></li>
                </ul>
               
            </>
        )
    }
}

export  default Navbar1;