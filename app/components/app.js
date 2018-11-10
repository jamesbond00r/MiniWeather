var React = require('react');
var ReactRouter = require('react-router-dom');
//var api = require('../utils/api.js');
var axios = require('axios');




class App extends React.Component {
	constructor(props) {
		super(props);
 	
		this.state = {
			data:[],
			isLoading: false,
			zipCode: 67214,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
		this.setState({zipCode: event.target.value})
		
	}

	handleSubmit(event) {
		console.log(
			this.state.zipCode);

		event.preventDefault();
	}




	


	componentDidMount() {
		this.setState({isLoading: true});

		const key = '0d29fbaa06dcff2656b75d959ff27d9f';
var encodedURI = window.encodeURI("http://api.openweathermap.org/data/2.5/weather?zip="+ this.state.zipCode +",us&units=imperial&APPID=" + key);


		axios.get(encodedURI)
		.then(result => this.setState({
			data: result.data.main.temp,
			isLoading: false
		}))
	
}



	
	render(){
		const {data, isLoading} = this.state;

		if (isLoading) {
			return <p>Loading ...</p>;
		}
		return(
			<div>
				<div className="headerCon">
					<h2 className='title'> Mini Weather </h2>
					<div  className="header">
						<div> 
							<form onSubmit={this.handleSubmit}>
        						<label>
         						 <input className='inputBox' type="text" placeholder='City, State' value={this.state.zipCode} onChange={this.handleChange} />
        						</label>
        					<input className="grnBtn" type="submit" value="Get Weather" />
      							</form>
						</div>
					</div>
				</div>
			
			<div className='homePage'>
				<h1 className='title'>Enter a City and State</h1>
			<div>
				<form onSubmit={this.handleSubmit}>
        			<label>
          			<input className='inputBox' type="text" placeholder='City, State' value={this.state.zipCode} onChange={this.handleChange} />
        			</label>
        			<input className="grnBtn" type="submit" value="Get Weather" />
      			</form>
			</div>
			<p>{this.state.data}</p>

			</div>
			</div>
			)
	}
}

			
			

module.exports = App;

