var React = require('react');
var ReactRouter = require('react-router-dom');
var api = require('../utils/api.js');

var axios = require('axios');

const key = '0d29fbaa06dcff2656b75d959ff27d9f';






function fetchWeather (zipCode){
var encodedURI = window.encodeURI("http://api.openweathermap.org/data/2.5/weather?zip=67214,us&APPID=0d29fbaa06dcff2656b75d959ff27d9f");
//http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
	
return axios.get(encodedURI)
.then(function (response){
	console.log(response);
	  });
	}
;

fetchWeather(67214);


class App extends React.Component {
	render(){
		return(
			<div>
			<Header />
			<Weather name="Enter a City and State" />
			</div>
			)
	}
}

class Header extends React.Component{
	render(){
		return(
		<div className="headerCon">
		<h2 className='title'> Mini Weather </h2>
		<div  className="header">

		<Input />
		</div>
		</div>
		)
	}
}

class Weather extends React.Component{
	render(){
		return(
			<div className='homePage'>
			<h1 className='title'>{this.props.name}</h1>
			<Input />
			</div>

		)
	}
}

class Input extends React.Component{
	render(){
		return(
			<div>
			<input className='inputBox' type="text" placeholder='City, State' name="city" />
			<button className="grnBtn" name="city">Get Weather</button>
			</div>

		)
	}
}

module.exports = App;