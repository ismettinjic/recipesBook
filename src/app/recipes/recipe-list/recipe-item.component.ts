import { Component, OnInit,Input } from '@angular/core';
import{Recipe} from '../recipe';
import { Routes, RouterModule } from "@angular/router";

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
 
})
export class RecipeItemComponent implements OnInit {
@Input() recipe:Recipe;
// Prima vrijednost iz html recipe-list fajla
@Input() recipeId:number;
  constructor() { }

  ngOnInit() {
  }

}
