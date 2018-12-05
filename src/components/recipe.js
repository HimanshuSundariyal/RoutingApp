import React, { Component } from 'react';

const Recipe = (props) =>	{
    var reacipe_path = "/recipedetails/"+props.recipe_details.recipe_id;
			return (
                <div className="col-sm-4 recipe_detail">
                <img src={props.recipe_details.image_url}/>
                <h6>{props.recipe_details.title}</h6>
                <a className="btn btn-primary" href={reacipe_path}>View Details</a>    
                </div>  
            );
}
export default Recipe;
