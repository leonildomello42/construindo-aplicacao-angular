import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  menu: Observable<MenuItem[]>;

  ngOnInit() {

    this.menu = this.restaurantService
    .menuOfRestaurant(this.route.parent.snapshot.params['id']) 
  }

  addMenuItem(item: MenuItem){

    console.log(item)
  }

}
