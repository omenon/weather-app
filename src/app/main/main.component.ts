import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

}
