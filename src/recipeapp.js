import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import Recipedetails from './components/recipedetails';

class Recipeapp extends Component {
    render(){
        return(
            <Router>
                <div>
                 <Route exact path="/" component={App} />
                 <Route path="/recipedetails/:id" component={Recipedetails} />    
                </div>
            </Router>

        );
    }

}
export default Recipeapp