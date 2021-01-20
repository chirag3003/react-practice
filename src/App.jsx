import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from "./Home.jsx"
import "./App.css";



function App(props){
    return(
        
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}


export default App;