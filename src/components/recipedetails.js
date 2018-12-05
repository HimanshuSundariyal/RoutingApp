import React, { Component } from 'react';
class Recipedetails extends Component {
    
    state={
        recipe_details:[]
    }
    componentWillMount() {
        fetch("https://www.food2fork.com/api/get?key=1cd22f41ed7259e38215b7451c95a4c2&rId="+this.props.match.params.id)
		.then(res => res.json())
		.then(
        (result) => {
          this.setState({
            recipe_details: result.recipe,
          });
        },
      )
    }

    render(){
        return(
           <div className="recipe_details">
		   <p><b>Name:</b>{this.state.recipe_details.title}</p>
		   <img src ={this.state.recipe_details.image_url} />
		   <br/>
		   <p>
		   <a className="btn btn-primary" href="/">Back</a> 
		   </p>	
           </div>
        );

    }
}    

export default Recipedetails;
