import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { CurrentWeather } from './current-weather';

@Injectable()
export class WeatherService {
	myWeather:CurrentWeather;
	Weather:CurrentWeather;
	location
	constructor(private http:Http) { }

	localWeather(){
		return new Promise ((res, rej) => {
			navigator.geolocation.getCurrentPosition((pos) => {
				this.location = pos.coords;
				const lat = this.location.latitude;
				const lon = this.location.longitude;
				return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2aebbb66f776d3385d1e83159d803ca&units=metric`).map((response:Response) => response.json()).toPromise().then(
					(data) => {
						console.log(data);
						this.myWeather = new CurrentWeather(data.name,
							data.main.temp,
							data.weather[0].icon,
							data.weather[0].description,
							data.main.temp_max,
							data.main.temp_min);
						res(this.myWeather);
					})

			})
		})
	}

	anotherCityWeather(city:string){
		return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2aebbb66f776d3385d1e83159d803ca&units=metric`).map((response:Response) => response.json());
	}

	anotherCityWeather2(city:string){
		return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2aebbb66f776d3385d1e83159d803ca&units=metric`).map((response:Response) => response.json());
	}

}
