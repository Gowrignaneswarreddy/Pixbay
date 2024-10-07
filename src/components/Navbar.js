import React from "react";
import { Link } from "react-router-dom";


class Navbar  extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <>
                <ul className="navbar">
                    <li id='list1'>pixabay</li>
                    <li id='li2'><p>Explore</p></li>
                    <Link to='/Login'><li id='li4'><p id='user'>Login</p></li></Link>
                    <li id='list5'><p>Upload</p></li>
                </ul>
            </>
        )
    }
}
export  default Navbar;