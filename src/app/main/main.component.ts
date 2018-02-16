import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'wa-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	myWeather:CurrentWeather;
	location
  constructor(private ws:WeatherService) { }

  ngOnInit() {
  this.myWeather = this.ws.weatherNow();
  navigator.geolocation.getCurrentPosition((pos) =>{
  	this.location = pos.coords;
  	const lat = this.location.latitude;
  	const lon = this.location.longitude;
  	this.ws.localWeather(lat, lon).subscribe(
  	(date) => {
  		console.log(date);
  		this.myWeather = new CurrentWeather(date.name,
  			date.main.temp,
  			date.weather[0].icon,
  			date.weather[0].description,
  			date.main.temp_max,
  			date.main.temp_min)
  	})
  })
  }

}
