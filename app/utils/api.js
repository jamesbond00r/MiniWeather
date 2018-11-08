var axios = require('axios');

const key = '0d29fbaa06dcff2656b75d959ff27d9f';




module.exports = {

fetchWeather: function fetchWeather (zipCode){
var encodedURI = window.encodeURI("http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us&APPID=" + key);
//http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
	
return axios.get(encodedURI)
.then(function (response){
	console.log(response);
	  });
	}
};