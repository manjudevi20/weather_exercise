import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from '../app/components/home/home.component';
import { WeatherDetailComponent } from 'src/app/components/weather-detail/weather-detail.component';
import { WeatherResolverService } from '../app/services/weather-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { cities: WeatherResolverService}
  },
  {
    path: `weatherDetails/:${environment.urlParams['weatherdetails#']}`,
    component: WeatherDetailComponent
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
