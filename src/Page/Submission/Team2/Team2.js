// Anthony Ilersich
// Evelyn Law
// Lilian Chen
// Aaron Kong

import React, { Component } from 'react';
import HomePage from "./HomePage.js";
import MethodPage from "./MethodPage.js";
import TeamPage from "./TeamPage.js";
import "./StyleSheet.css";
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import { Jumbotron } from 'reactstrap';

//main component
class Team2 extends Component {
	
	//class constructor
	constructor(props) {
		
		//TODO what is props good for?
		
		//call base constructor
		super();
		
		//initialize state
		this.state = {
			pages: [ HomePage, MethodPage, TeamPage ],
			current: 0
		};
		
		//
		this.gotoPage = this.gotoPage.bind(this);
		this.showHome = this.showHome.bind(this);
		this.showMethod = this.showMethod.bind(this);
		this.showTeam = this.showTeam.bind(this);
		this.getCurrentPage = this.getCurrentPage.bind(this);
	}

	//call this to navigate to the i-th page
	gotoPage(i) {
		
		//create a proxy variable for convenience
		var L = this.state.pages.length;
		
		//record the new index 
		var temp = this.state;
		temp.current = (i % L + L) % L;
		this.setState(temp);
		console.log("hi");
	}
	
	//navigate to the home page
	showHome() {
		this.gotoPage(0);
	}

	//navigate to the method page
	showMethod() {
		this.gotoPage(1);
	}

	//navigate to the team page
	showTeam() {
		this.gotoPage(2);
	}
	
	//used to render the correct page
	getCurrentPage() {
		//return React.createElement(this.state.pages[this.current]);
		if (this.state.current === 0) {
			return (<HomePage />);
		}
		else if (this.state.current === 1) {
			return (<MethodPage />);
		}
		else if (this.state.current === 2) {
			return (<TeamPage />);
		}
	}

	//main render method
	render() {
		console.log("render Team2");
		return (
			<div>
				<div id="main" className='flex-container'>
					<h1>Team 2</h1>
					<button id="homePageLink" onClick={this.showHome}>
						Home
					</button>
					<button href="#null" id="methodPageLink" onClick={this.showMethod}>
						Our&nbsp;Method
					</button>
					<button href="#null" id="teamPageLink" onClick={this.showTeam}>
						Our&nbsp;Team
					</button>
				</div>
				<div id="page">
					{this.getCurrentPage()}
				</div>
			</div>
		)
	}
}

export default Team2;