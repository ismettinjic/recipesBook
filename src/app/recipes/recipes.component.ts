import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import{Recipe} from './recipe';
import { Routes, RouterModule } from "@angular/router";
@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
 
})
export class RecipesComponent implements OnInit {

  ngOnInit() {
  }
  /* Stari kod bez ruta
  selectedRecipe:Recipe;

  constructor() { }

  ngOnInit() {
  }
*/
}
