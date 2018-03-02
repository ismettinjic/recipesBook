import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import{Recipe} from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../recipe.service';
import { Routes, RouterModule } from "@angular/router";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',

})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[];

 // recipeSleceted kao izlazna varijabla koja salje recipe 3 tj recipe 2 koji je smjesten u njega a to sve preko ngFor komande koja iz vektora Recipe izdvaja pojedinacne elemente
  @Output() recipeSelected=new EventEmitter<Recipe>();
  
  
  //recipe=new Recipe('Salata','Opis salete ','https://images.media-allrecipes.com/images/75131.jpg');

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }



onSelected(recipe3:Recipe){
  // Prima recipe2 iz liste recepata i dodjeljuje ga recipe3 varijabli tipa Recipe , koja ga zatim salje u recipeSelected varijablu 
  // KOja je delje povezana preko HTML koda u shopinglist component sa recipe detail tj selected recipe ....
  this.recipeSelected.emit(recipe3);

}
}
