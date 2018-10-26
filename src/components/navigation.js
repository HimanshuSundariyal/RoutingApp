import React, { Component } from 'react';

const navigation = (props) =>	{
			return (<form className="example" onSubmit={props.submitSearch}>
			<input type="text" placeholder="Search.." name="search"/>
			<button type="submit"><i className="fa fa-search"></i>Search Recipe</button>
			</form>);
	
}
export default navigation;
