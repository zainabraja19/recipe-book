import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  private igChangedSub: Subscription

  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shopingListService.getIngredients()
    this.igChangedSub = this.shopingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }

  onEditItem(index: number) {
    this.shopingListService.startedEditing.next(index)
  }

  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe()
  }
}
