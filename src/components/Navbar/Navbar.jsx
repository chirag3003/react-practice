import React from "react";


function Navbar(props){
    return(
        <nav style={{position:"fixed",top:0,left:0}} className="navbar navbar-light ">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
            </div>
        </nav>

    )
}

export default Navbar;