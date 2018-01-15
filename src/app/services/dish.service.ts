import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';

@Injectable()
export class DishService {

  constructor( @Inject('BaseURL') private baseURL: string, private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.baseURL + 'dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(this.baseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(this.baseURL + 'dishes?featured=true').map(response => response[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes().map(dishes => dishes.map(dish => dish.id));
  }

  updateDishComments(id: number, comments: Comment[]): Observable<Dish> {
    return this.http.patch<Dish>(this.baseURL + 'dishes/' + id, { "comments": comments });
  }
}
