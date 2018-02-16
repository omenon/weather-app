import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { weatherRouting } from './weather.routing';
import { WeatherService } from './weather.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, FormsModule, HttpModule,
    weatherRouting
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
