import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/navigation';
import Recipe from './components/recipe';
import Loading from './components/loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
 
  state =
  {
    reacpes: [],
    recpiname:'',
    loading: false
  }
  searchrecipe = this.searchrecipe.bind(this);
  searchrecipe(e){
    e.preventDefault();
    var recpi_name = e.target.search.value;
    this.setState({ loading:true });
    fetch("https://www.food2fork.com/api/search?key=1cd22f41ed7259e38215b7451c95a4c2&q="+recpi_name+"&count=10")
		.then(res => res.json())
		.then(
        (result) => {
          this.setState({
            reacpes: result.recipes,
            loading:false
          });
        },
      )	

  }
  render() {
    return (
	  <div className="container search_bar">
			<Navigation submitSearch={this.searchrecipe}/>
      <div className="row">
      { this.state.reacpes.map((recipe) => (
        <Recipe recipe_details={recipe} key={ recipe.recipe_id }/>
       ))} 

       {this.state.loading && <Loading/>}  

      </div> 
	  </div>
    );
  }
}

export default App;
