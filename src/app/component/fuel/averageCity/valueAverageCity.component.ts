import { Component, OnInit } from '@angular/core';
import { City } from './city.model';
import { CityService } from './city.service';

@Component({
  selector: 'app-averageCity',
  templateUrl: './ValueAverageCity.component.html',
  styleUrls: ['./ValueAverageCity.component.css']
})
export class ValueAverageCityComponent implements OnInit {

  cities: City[]

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.read().subscribe((cities) => {
      this.cities = cities
    })
  }

}
