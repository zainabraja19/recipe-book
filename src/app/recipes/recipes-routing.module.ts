import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { NgModule } from "@angular/core";
import { canActivateGuard } from "../auth/auth.guard";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { recipeResolver } from "./recipes-resolver.service";

const routes: Routes = [
    {
        path: '', component: RecipesComponent, canActivate: [canActivateGuard], children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: { recipes: recipeResolver } },
            { path: ':id/edit', component: RecipeEditComponent, resolve: { recipes: recipeResolver } }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule { }