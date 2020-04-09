import React, {Component} from 'react';
import CardList from '../components/CardList';
import '../components/card.css';
import SearchBox from'../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component{

	constructor(){
		super();
		this.state = {
			robotList: [],
			searchField: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(respond => respond.json())
		.then(robots => this.setState({robotList: robots}))
	}
	render(){
		const {robotList, searchField} = this.state;
		const filterRobotList = robotList.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
		return(
		<div className="upper-body">
			<h1>Robo Friends</h1>
			<SearchBox onTextChange={event => this.setState({searchField: event.target.value})}/>
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filterRobotList}/>
				</ErrorBoundary>
			</Scroll>
    	</div>
		);
	}
}

export default App;