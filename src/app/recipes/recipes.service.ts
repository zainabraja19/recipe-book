import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe('Burger', 'A big fat burger!', 'https://imgs.search.brave.com/o9Mf1T_niMR9-Inz36z6gvmvB0VK6anVQM68_cOKOkA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MTM1MjQ5NS9waG90/by92ZWdnaWUtYnVy/Z2VyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1DampyWlRx/Z0xpdVZta2d5TmZG/T1ZrbE9IQjgxUmEy/YVdsY2tMOENqV1Yw/PQ', [
            new Ingredient('Potatoes', 1),
            new Ingredient('Buns', 2)
        ]),
        new Recipe('Margherita Pizza', 'Super tasty and cheesy pizza!', 'https://imgs.search.brave.com/xjxLwQOvi7O__wvLBzz_GnYgz2StM3cEvwNszIQ5e0k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/OTU3ODUyNC9waG90/by9waXp6YS1tYXJn/aGFyaXRhLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1NMnJq/Q2pIelJFb2t6RjJf/OWZQeUdCbndfdXMz/eTU2dzJIWXdxRlRO/WTN3PQ', [
            new Ingredient('Cheese', 6),
            new Ingredient('Pizza sauce', 1)
        ]),
    ]

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(id: number) {
        return this.recipes[id]
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) { this.shoppingListService.addIngredients(ingredients) }
}