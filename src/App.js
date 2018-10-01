import React, { Component } from 'react';
import './App.css';
import TopNavbar from './components/navbar/TopNavbar';
import Notes from './components/notes/Notes';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopNavbar />
				<Notes />
			</div>
		);
	}
}

export default App;
