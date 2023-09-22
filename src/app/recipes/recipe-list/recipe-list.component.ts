import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[]
  private recipeChangedSub: Subscription

  constructor(private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
    this.recipeChangedSub = this.recipeService.recipeChanged.subscribe((recipe: Recipe[]) => {
      this.recipes = recipe
    })
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.recipeChangedSub.unsubscribe()
  }
}
