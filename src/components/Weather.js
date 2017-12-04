import React, {Component} from 'react';
import $ from 'jquery';

class Weather extends Component{
  constructor(props) {
    super(props);
    this.state={
      icon: "",
      temp: "",
      temp_min: "",
      temp_max: "",
      desc: ""
    }
  }

  componentDidMount() {
    var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
    $.getJSON(url, (weatherData) =>{
      console.log(weatherData);
      this.setState({
        icon: weatherData.weather[0].icon,
        temp: weatherData.main.temp,
        temp_max: weatherData.main.temp_max,
        temp_min: weatherData.main.temp_min
      })
    });
  }

  render(){
    return(
     <div>
       <h1>Weather App</h1>
       <div>
         <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt=""/>
       </div>
       <div>
         {this.state.temp}
       </div>
       <div>
         {this.state.temp_max}
       </div>
       <div>
         {this.state.temp_min}
       </div>
     </div>
    )
  }
}

export default Weather;