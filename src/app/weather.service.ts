import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { CurrentWeather } from './current-weather';

@Injectable()
export class WeatherService {
	current:CurrentWeather = new CurrentWeather('Kyiv', '-2','50n', 'sunny', '-1', '-5')
  constructor(private http:Http) { }

  weatherNow(){
  	return this.current;
  }

  localWeather(lat:string, lon:string){
  return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2aebbb66f776d3385d1e83159d803ca&units=metric`).map((response:Response) => response.json());
  }

}
