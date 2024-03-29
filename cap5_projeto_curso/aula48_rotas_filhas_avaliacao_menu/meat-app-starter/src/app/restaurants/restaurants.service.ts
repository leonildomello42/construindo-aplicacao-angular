import { from } from "rxjs/observable/from";
import { Restaurant } from "./restaurant/restaurant.model";

//import { ErrorHandler } from '../app.error-handler';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from "app/app.api";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantsService {


  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {

    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError);
  }

  restaurantById(id: String): Observable<Restaurant>{

    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError);
  }
}