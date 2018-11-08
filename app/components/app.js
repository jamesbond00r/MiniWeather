var React = require('react');
var ReactRouter = require('react-router-dom');



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