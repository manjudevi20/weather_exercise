import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSequence } from 'protractor';
import { environment } from 'src/environments/environment';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  private selectedCity: any;
  weatherDetails: any[] = [];
  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedCity = this.route.snapshot.paramMap.get(
      environment.urlParams['weatherdetails#']
    )
    if(this.selectedCity){
      this.weatherService.getForecastWeather(this.selectedCity).subscribe(data =>{
        this.weatherDetails = data.list.filter((item: any) => item.dt_txt.includes('09:00:00') );
      })
    }
  }

}
