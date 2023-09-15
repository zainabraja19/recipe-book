import { Component } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe
  showRecipeDetails = (recipe: Recipe) => {
    console.log("herw")
    console.log(recipe)
  }
}
