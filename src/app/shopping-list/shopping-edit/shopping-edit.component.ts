import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm
  subscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index
      this.editMode = true
      this.editedItem = this.shoppingListService.getIngredient(index)
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onAddItem = (form: NgForm) => {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
      this.editMode = false
    } else {
      this.shoppingListService.addNewIngredient(newIngredient)
    }
    form.reset()
  }

  onClearForm = () => {
    this.slForm.reset()
    this.editMode = false
  }

  onDeleteIngredient = () => {
    this.onClearForm()
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
