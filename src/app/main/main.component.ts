import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
	selector: 'wa-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	myWeather:CurrentWeather;
	constructor(private ws:WeatherService, private route:ActivatedRoute) { }

	ngOnInit() {
		this.route.data.subscribe(
			(data:{myWeather:CurrentWeather}) => {
				this.myWeather = data.myWeather; 
			}
			)
	}

	onSubmit(weatherForm:NgForm){
		this.ws.anotherCityWeather(weatherForm.value.city).subscribe(
			(data) => {
				console.log(data);
				this.myWeather = new CurrentWeather(data.name,
					data.main.temp,
					data.weather[0].icon,
					data.weather[0].description,
					data.main.temp_max,
					data.main.temp_min);
			}
			)
	}
}
