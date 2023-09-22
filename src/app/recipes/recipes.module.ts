import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeStartComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})

export class RecipesModule { }