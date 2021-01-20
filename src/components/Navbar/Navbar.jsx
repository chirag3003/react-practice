import React from "react";
import NavList from "./NavList.jsx";


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg text-white">
            <div className="container">
                <a className="navbar-brand" href="#">Gharana</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavList />
                
                </div>
            </div>
        </nav>

    )
}

export default Navbar;