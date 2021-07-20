import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  rests: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    
    this.restaurantsService.restaurants().subscribe(rests => this.rests = rests)
  }

}
