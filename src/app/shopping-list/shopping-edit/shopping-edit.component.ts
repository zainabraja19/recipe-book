import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef
  ingredientName: string
  amount: number

  constructor(private shoppingListService: ShoppingListService) { }

  addNewIngredient = () => {
    this.ingredientName = this.nameInputRef.nativeElement.value
    this.amount = this.amountInputRef.nativeElement.value
    console.log(this.nameInputRef, this.amountInputRef)
    const newIngredient = new Ingredient(this.ingredientName, this.amount)
    this.shoppingListService.addNewIngredient(newIngredient)
  }
}
