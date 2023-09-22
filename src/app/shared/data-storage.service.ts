import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipes.model";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipesService, private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes()
        this.http.put('https://recipe-book-957a3-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response)
        })
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://recipe-book-957a3-default-rtdb.firebaseio.com/recipes.json')
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                    })
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes)
                }))
    }
}