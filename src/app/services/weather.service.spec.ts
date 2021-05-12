import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
// import { mockWeather } from '../test/test.helper';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [WeatherService, HttpClient]
    });
    service = TestBed.inject(WeatherService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get weather for cities', () => {
    service.getCitiesWeather().subscribe(cities =>{
      expect(cities.length).toBeGreaterThan(0);
    })
  })

  it('should get weather forecast for city', () => {
    const mockId = 46376327;
    service.getForecastWeather(mockId).subscribe(forecast =>{
      expect(forecast.length).toBeGreaterThan(0);
    })
  })
});
