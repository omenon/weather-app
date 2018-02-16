import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {MainComponent} from './main/main.component';
import {ProfileComponent} from './profile/profile.component';
import {ResolveLocationService} from './resolve-location.service';

const WEATHER_ROUTER:Routes = [
	{path: '', component: MainComponent, resolve: {myWeather:ResolveLocationService}},
	{path: 'profile', component: ProfileComponent}
]

export const weatherRouting:ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER)