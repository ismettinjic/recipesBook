import { Injectable } from '@angular/core';
import {Recipe} from './recipe'
import { Ingredient } from '../ingredient';
@Injectable()
export class RecipeService {

  recipes: Recipe[]=[
    new Recipe('Tjestenina-povrce','Opis tjestenina povrce ','https://images.media-allrecipes.com/images/75131.jpg',[
      new Ingredient('Franch Fries',2),
      new Ingredient('Pork meat',1)
    ]),
    new Recipe('Torta','Opis torte ','https://coolinarika.azureedge.net/images/_variations/5/e/5edc00cdc64fe1e3574c7fea46b8c4cd_view_l.jpg?v=0',[
     
    ]),
    new Recipe('Sarma','Opis sarme ','http://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/36/78/69/WdFhNllRAaGaMtC8bTfQ-sarma.jpg',[]),

 ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
  // Odavde se vraca vrijednost ID tj vrijednos u nizu recipes kao recipes[id]; a id dobijamo iz recipe-detail
  getRecipe(id:number){
      return this.recipes[id];
  }
  deleteRecipe(recipe : Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);

  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);

  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)]=newRecipe;

  }

}
