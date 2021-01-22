import react from "react";
import "./Category.css";
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


function Category(){
    return(
        <div className="category">
            <div className="category-name">
                <h3>Category Name</h3>
            </div>
            <div className="products-container">
                <IconButton className="btn shadow-none slider-control">
                    <NavigateBeforeIcon style={{fontSize:"2rem"}} />
                </IconButton>
                <IconButton className="btn shadow-none slider-control">
                    <NavigateNextIcon style={{fontSize:"2rem"}} />
                </IconButton>
            </div>

        </div>
    )
}

export default Category;