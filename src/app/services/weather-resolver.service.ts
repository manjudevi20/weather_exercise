import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherResolverService implements Resolve<any> {

  constructor(private weatherService: WeatherService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.weatherService.getCitiesWeather();
  }
}
