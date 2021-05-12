import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private weatherUrl = 'http://api.openweathermap.org/data/2.5/group?id=524901,2968815,2643743,4348460,3169070&appid=3d8b309701a13f65b660fa2c64cdc517';
  getCitiesWeather(): Observable<any> {
    return this.http.get(this.weatherUrl);
  }

  getForecastWeather(id: any): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }
}
