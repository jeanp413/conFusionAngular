import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';

import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  dishes: Dish[];

  errorMessage: string;

  constructor(private dishService: DishService, @Inject('BaseURL') private baseURL: string) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes, error => this.errorMessage = error);
  }
}
