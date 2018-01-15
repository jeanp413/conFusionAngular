import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Comment } from '../shared/comment';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  newCommentForm: FormGroup;
  formErrors = {
    author: '',
    comment: ''
  };
  validationMessages = {
    author: {
      required: 'Name is required.',
      minlength: 'Name must be at least 2 characters long.',
      maxlength: 'Name cannot be more than 25 characters long.'
    },
    comment: {
      required: 'Comment is required.',
      minlength: 'Comment must be at least 10 characters long.',
      maxlength: 'Comment cannot be more than 250 characters long.'
    }
  };

  errorMessage: string;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private baseURL: string) {
    this.createForm();
  }

  ngOnInit() {
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
      .switchMap((params: Params) => this.dishService.getDish(+params['id']))
      .subscribe(dish => {
        this.dish = dish;
        this.setPrevNext(dish.id);
      },
      error => this.errorMessage = error);
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(index - 1 + this.dishIds.length) % this.dishIds.length];
    this.next = this.dishIds[(index + 1 + this.dishIds.length) % this.dishIds.length];
  }

  goBack() {
    this.location.back();
  }

  createForm() {
    this.newCommentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
      rating: 1
    });

    this.newCommentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.newCommentForm)
      return;

    const form = this.newCommentForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';

      const control = form.get(field);
      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    const newCommentData = this.newCommentForm.value;
    let newComment: Comment = {
      author: newCommentData.author,
      comment: newCommentData.comment,
      rating: newCommentData.rating,
      date: new Date().toISOString()
    };

    this.dishService.updateDishComments(this.dish.id, this.dish.comments.concat([newComment]))
      .subscribe(updatedDish => {
        this.dish = updatedDish;
        console.log(updatedDish);
      });

    this.newCommentForm.reset({
      author: '',
      comment: '',
      rating: 1
    });
  }
}
