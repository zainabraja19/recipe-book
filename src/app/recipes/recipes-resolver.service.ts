import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    ResolveFn
} from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

export const recipeResolver: ResolveFn<Recipe[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const recipes = inject(RecipesService).getRecipes()

    if (recipes.length === 0) {
        return inject(DataStorageService).fetchRecipes()
    } else {
        return recipes;
    }
};