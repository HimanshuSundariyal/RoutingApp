import React, { Component } from 'react';

const Recipe = (props) =>	{
			return (
                <div className="col-sm-4 recipe_detail">
                <img src={props.recipe_details.image_url}/>
                <h6>{props.recipe_details.title}</h6>
                <button className="btn btn-primary">View Details</button>    
                </div>  
            );
}
export default Recipe;
