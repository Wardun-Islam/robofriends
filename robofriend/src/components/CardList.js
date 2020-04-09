import React from 'react';
import Card from './Card';
import './card.css'

const CardList = ({robots}) =>{
	// if(true){
	// 	throw new Error('dfsfgd');
	// }

	return (
	<div className="body">
		{
			robots.map((robot, i) =>{
				return <Card key={robot.id} name={robot.name} email={robot.email} id={robot.id}/>
			})
		}
	</div>
	);
}

export default CardList;