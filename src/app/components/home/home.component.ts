import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  cities: any[] = [];
  public errorMessage: string = '';

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.cities = data?.cities?.list;
    },
      (err) => {
       this.errorMessage = 'Error while loading cities List';
    });
  }

}
