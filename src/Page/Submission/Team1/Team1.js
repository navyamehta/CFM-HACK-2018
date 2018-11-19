// Sherman Grewal
// Oliver Lingertat
// Luncy Cheng
// Navya Mehta

import React, { Component } from 'react';
import StockStats from '../../../Data/stocks';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Jumbotron,Button } from 'reactstrap';
import "./style.css";


var options = {
  chart: {
          zoomType: 'x'
        },
        title: {
          text: 'USD to EUR exchange rate over time'
        },
        subtitle: {
          text: document.ontouchstart === undefined ?
              'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Exchange rate'
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
            },
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            threshold: null
          }
        },
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

class Team1 extends Component {

getClose(stockName) {
  var closeArray = [];
  StockStats[stockName].forEach(
    (day) => {
      var obj = [
        Date.parse(day["Date"]),
        day["Close"]
      ];
      closeArray.push(obj);
    })
    return closeArray;
};

  render() {
    options['series'] = [{
        type: 'area',
        data: this.getClose("ABX.TO")
    }];
    return (
    <div className='container'>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"/>
	<script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"/>
	<link href="style.css" rel="stylesheet"/>
      <h1>Welcome to Team 1's Portfolio!</h1>
      <div class='container2-fluid padding'>
	  	<div class="row padding">
				<div class="col-lg-4">
					<div class="card" >
					<div class="container2">
			            <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/45558016_197398521155129_5335448614086901760_n.jpg?_nc_cat=105&_nc_ht=scontent.fyyz1-1.fna&oh=779585b3f66e7b3621f6e94f7951a2e3&oe=5C68CDFB" 
			            class="image card-img-top"></img>
			            <div class="overlay overlayFade">
			                <div class="text">Sherman Grewal is a first year Computing and Financial Management student at the University of Waterloo. With hEDGE being Sherman’s first official step into the world of finance, Sherman is looking forward to applying his knowledge in computer science to the finance world. Sherman hopes to bring a new aspect to the team with his knowledge in software development and interest in the fintech sector. Sherman enjoys working out and playing basketball during his free time, as well as working on his current software projects.</div>
			            </div>
		       	 	</div>
						<div class="card-body">
							<h4 class="card-title">Sherman Grewal</h4>
							<p class="card-text">First Year Associate</p>
								<div class = "team-social">
									<a href="https://www.linkedin.com/in/sherman-grewal/"><i class="fab fa-linkedin"></i></a>
									<a href="mailto:s.grewal@hedgeconference.ca"><i class="fab fa-google"></i></a>
								</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="card" >
					<div class="container2">
			            <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/45558016_197398521155129_5335448614086901760_n.jpg?_nc_cat=105&_nc_ht=scontent.fyyz1-1.fna&oh=779585b3f66e7b3621f6e94f7951a2e3&oe=5C68CDFB" 
			            class="image card-img-top"></img>
			            <div class="overlay overlayFade">
			                <div class="text">Sherman Grewal is a first year Computing and Financial Management student at the University of Waterloo. With hEDGE being Sherman’s first official step into the world of finance, Sherman is looking forward to applying his knowledge in computer science to the finance world. Sherman hopes to bring a new aspect to the team with his knowledge in software development and interest in the fintech sector. Sherman enjoys working out and playing basketball during his free time, as well as working on his current software projects.</div>
			            </div>
		       	 	</div>
						<div class="card-body">
							<h4 class="card-title">Sherman Grewal</h4>
							<p class="card-text">First Year Associate</p>
								<div class = "team-social">
									<a href="https://www.linkedin.com/in/sherman-grewal/"><i class="fab fa-linkedin"></i></a>
									<a href="mailto:s.grewal@hedgeconference.ca"><i class="fab fa-google"></i></a>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>

      <div class='container2-fluid padding'>
	  	<div class="row padding">
				<div class="col-lg-4">
					<div class="card" >
					<div class="container2">
			            <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/45558016_197398521155129_5335448614086901760_n.jpg?_nc_cat=105&_nc_ht=scontent.fyyz1-1.fna&oh=779585b3f66e7b3621f6e94f7951a2e3&oe=5C68CDFB" 
			            class="image card-img-top"></img>
			            <div class="overlay overlayFade">
			                <div class="text">Sherman Grewal is a first year Computing and Financial Management student at the University of Waterloo. With hEDGE being Sherman’s first official step into the world of finance, Sherman is looking forward to applying his knowledge in computer science to the finance world. Sherman hopes to bring a new aspect to the team with his knowledge in software development and interest in the fintech sector. Sherman enjoys working out and playing basketball during his free time, as well as working on his current software projects.</div>
			            </div>
		       	 	</div>
						<div class="card-body">
							<h4 class="card-title">Sherman Grewal</h4>
							<p class="card-text">First Year Associate</p>
								<div class = "team-social">
									<a href="https://www.linkedin.com/in/sherman-grewal/"><i class="fab fa-linkedin"></i></a>
									<a href="mailto:s.grewal@hedgeconference.ca"><i class="fab fa-google"></i></a>
								</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="card" >
					<div class="container2">
			            <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/45558016_197398521155129_5335448614086901760_n.jpg?_nc_cat=105&_nc_ht=scontent.fyyz1-1.fna&oh=779585b3f66e7b3621f6e94f7951a2e3&oe=5C68CDFB" 
			            class="image card-img-top"></img>
			            <div class="overlay overlayFade">
			                <div class="text">Sherman Grewal is a first year Computing and Financial Management student at the University of Waterloo. With hEDGE being Sherman’s first official step into the world of finance, Sherman is looking forward to applying his knowledge in computer science to the finance world. Sherman hopes to bring a new aspect to the team with his knowledge in software development and interest in the fintech sector. Sherman enjoys working out and playing basketball during his free time, as well as working on his current software projects.</div>
			            </div>
		       	 	</div>
						<div class="card-body">
							<h4 class="card-title">Sherman Grewal</h4>
							<p class="card-text">First Year Associate</p>
								<div class = "team-social">
									<a href="https://www.linkedin.com/in/sherman-grewal/"><i class="fab fa-linkedin"></i></a>
									<a href="mailto:s.grewal@hedgeconference.ca"><i class="fab fa-google"></i></a>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>



        <Jumbotron fluid>
          <div className='container'>
            <h2>Example: NBA </h2>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
            Reference:
            <a href="https://api.highcharts.com/highcharts/series.scatter">Highcharts API</a>
            <a href="https://dynasties.operationsports.com/team-colors.php?sport=nba">Color Link </a>                                                                               
          </div>
        </Jumbotron>
      </div>
    )
  }
}
export default Team1;
