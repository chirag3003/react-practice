import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx"
import Category from "./components/Category/Category.jsx"


function Home(props){
    return(
        <div>
            <Navbar />
            <section className="container">
                <Category />
            </section>  
        </div>
    )
}

export default Home;