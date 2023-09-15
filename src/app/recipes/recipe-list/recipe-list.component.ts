import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'Just a test recipe!', 'https://imgs.search.brave.com/TkvO1B-BGj7DoFPw4lWCtzz6zYWqN8ww-B8yflvQk5I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0aW5nd2VsbC5j/b20vdGhtYi9fNmQz/ZDBXTy1QM0tJQmlF/WkhxSDhWTVdLT0E9/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS9D/bGFzc2ljLUVnZy1T/YWxhZC1kZG1mcy1i/ZWF1dHktMDEtNThj/NzJiYTEwYzQ4NGFl/N2I1MGE4OWVlNTE3/NTlkMDkuanBn'),
    new Recipe('Test', 'Just a test recipe!', 'https://imgs.search.brave.com/TkvO1B-BGj7DoFPw4lWCtzz6zYWqN8ww-B8yflvQk5I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0aW5nd2VsbC5j/b20vdGhtYi9fNmQz/ZDBXTy1QM0tJQmlF/WkhxSDhWTVdLT0E9/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS9D/bGFzc2ljLUVnZy1T/YWxhZC1kZG1mcy1i/ZWF1dHktMDEtNThj/NzJiYTEwYzQ4NGFl/N2I1MGE4OWVlNTE3/NTlkMDkuanBn'),
    new Recipe('Test', 'Just a test recipe!', 'https://imgs.search.brave.com/TkvO1B-BGj7DoFPw4lWCtzz6zYWqN8ww-B8yflvQk5I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0aW5nd2VsbC5j/b20vdGhtYi9fNmQz/ZDBXTy1QM0tJQmlF/WkhxSDhWTVdLT0E9/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS9D/bGFzc2ljLUVnZy1T/YWxhZC1kZG1mcy1i/ZWF1dHktMDEtNThj/NzJiYTEwYzQ4NGFl/N2I1MGE4OWVlNTE3/NTlkMDkuanBn')
  ]
  @Output() showRecipeDetail = new EventEmitter<Recipe>()

  onRecipeSelect = (recipe: Recipe) => {
    console.log("here2", recipe)
    this.showRecipeDetail.emit(recipe)
  }

  ngOnInit() {
  }
}
