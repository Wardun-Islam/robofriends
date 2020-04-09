import React from'react';

const SearchBox = ({onTextChange}) =>{
	return(
		<div>
			<input type="text" placeholder="Who is your friend?" onChange={onTextChange}/>
		</div>
	);
}

export default SearchBox;