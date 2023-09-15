import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() addIngredient = new EventEmitter<Ingredient>()
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef
  ingredientName: string
  amount: number

  addNewIngredient = () => {
    this.ingredientName = this.nameInputRef.nativeElement.value
    this.amount = this.amountInputRef.nativeElement.value
    console.log(this.nameInputRef, this.amountInputRef)
    this.addIngredient.emit({ name: this.ingredientName, amount: this.amount })
  }
}
