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
	Weather:CurrentWeather;
	Weather2:CurrentWeather;
	Weather3:CurrentWeather;
	Weather4:CurrentWeather;
	Weather5:CurrentWeather;
	constructor(private ws:WeatherService, private route:ActivatedRoute) { }

	ngOnInit() {
		this.route.data.subscribe(
			(data:{myWeather:CurrentWeather}) => {
				this.myWeather = data.myWeather; 
			}
			)
		 this.Weather = this.ws.anotherCityWeather2();
   	var city = 'London';
   	this.ws.anotherCityWeather2(city).subscribe((date) => { console.log(date);
   		this.Weather = new CurrentWeather(date.name,
   			date.main.temp,
   			date.weather[0].icon,
   			date.weather[0].description,
   			date.main.temp_max,
   			date.main.temp_min)
   	})
		 this.Weather2 = this.ws.anotherCityWeather2();
   	var city = 'Paris';
   	this.ws.anotherCityWeather2(city).subscribe((date) => { console.log(date);
   		this.Weather2 = new CurrentWeather(date.name,
   			date.main.temp,
   			date.weather[0].icon,
   			date.weather[0].description,
   			date.main.temp_max,
   			date.main.temp_min)
   	})
		 this.Weather3 = this.ws.anotherCityWeather2();
   	var city = 'Kiev';
   	this.ws.anotherCityWeather2(city).subscribe((date) => { console.log(date);
   		this.Weather3 = new CurrentWeather(date.name,
   			date.main.temp,
   			date.weather[0].icon,
   			date.weather[0].description,
   			date.main.temp_max,
   			date.main.temp_min)
   	})
		 this.Weather4 = this.ws.anotherCityWeather2();
   	var city = 'Berlin';
   	this.ws.anotherCityWeather2(city).subscribe((date) => { console.log(date);
   		this.Weather4 = new CurrentWeather(date.name,
   			date.main.temp,
   			date.weather[0].icon,
   			date.weather[0].description,
   			date.main.temp_max,
   			date.main.temp_min)
   	})
		 this.Weather5 = this.ws.anotherCityWeather2();
   	var city = 'Minsk';
   	this.ws.anotherCityWeather2(city).subscribe((date) => { console.log(date);
   		this.Weather5 = new CurrentWeather(date.name,
   			date.main.temp,
   			date.weather[0].icon,
   			date.weather[0].description,
   			date.main.temp_max,
   			date.main.temp_min)
   	})
	}
	// sortType(sort:string){
	// 	if (sort === 'cityName') {
	// 		this.CurrentWeather = this.CurrentWeather.sort(this.sortByCityName);
	// 		console.log(this.CurrentWeather);
	// 	}
	// }
	// sortByCityName(c1:CurrentWeather, c2:CurrentWeather){
	// 	if (c1.cityName > c2.cityName) return 1
	// 		else if(c1.cityName === c2.cityName)return 0
	// 			else return -1
	// }
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
