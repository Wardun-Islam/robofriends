import React from 'react';
import './card.css';

const Card = ({id, name, email})=>{
	return(
		<div className="container">
			<img src={'https://robohash.org/'+id}
			 className="" alt="Robot Friend"
			 title="Photo of Robot Friend"/>
	   		<h1 className="">{name}</h1>
	    	<h2 className="">{email}</h2>
	    </div>
		);
}

export default Card;