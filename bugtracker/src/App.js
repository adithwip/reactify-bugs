import React, { Component } from 'react';
import Title from './components/Title'
import Form from './components/Form'
import Footer from './components/Footer'
import ListBugs from './components/ListBugs'
import './App.css';

class App extends Component {
  render() {
    return (
			<div className="App">
				<div className="container">
					<Title></Title>
					<Form></Form>
					<hr />
					<ListBugs></ListBugs>
				</div>
				<Footer></Footer>
			</div>
    );
  }
}

export default App;
