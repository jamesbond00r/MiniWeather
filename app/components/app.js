var React = require('react');
var ReactRouter = require('react-router-dom');

class App extends React.Component {
	render(){
		return(
			<div className='homePage'>
			<h1 className='title'>Enter a City and State</h1>
			<input className='inputBox' type="text" placeholder='City, State' name="city" />
			<button className="grnBtn">Get Weather</button>
			</div>
			)
	}
}

module.exports = App;