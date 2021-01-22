import React,{useState} from "react";
import NavList from "./NavList.jsx";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Navbar(){


    let [isClicked,changeClickState] = useState(false);

    function handleClick(){
        changeClickState(!isClicked);

    }

    function NavIcon(){
        if(isClicked){
            return <CloseIcon />
        }
        else{
            return <MenuIcon />
        }
    }

    return(
        <nav className="navbar navbar-expand-lg text-white">
            <div className="container">
                
                <IconButton 
                    className="navbar-toggler shadow-none text-white" 
                    type="button"
                    onClick={handleClick} 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <NavIcon />
                </IconButton>
                <a className="navbar-brand" href="#">Gharana</a>

                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <NavList />
                
                </div>
            </div>
        </nav>

    )
}

export default Navbar;