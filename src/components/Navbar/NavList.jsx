import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function NavList(){
    //My Account Menu Handler
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //End


    return(

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <div>
                <Button 
                    className="btn shadow-none text-white"
                    aria-controls="simple-menu" 
                    aria-haspopup="true" 
                    onClick={handleClick}
                >
                    My Account
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>My Orders</MenuItem>
                    <MenuItem onClick={handleClose}>My Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
            </li>
        </ul>

    )



}

export default NavList;