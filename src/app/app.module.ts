import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { weatherRouting } from './weather.routing';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    weatherRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
