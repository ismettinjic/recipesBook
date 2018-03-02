import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import{Recipe} from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Router,RouterModule, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',

})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  // Kada se klikne selectedRecipe -u se proslijedi vrijednost koja je bila u RecipeSelectet tj vrijednost recipe 3 tj vrijednos recipe 2
 @Input() selectedRecipe:Recipe;

private recipeIndex:number;
// Definisemo varijablu da pohranimo subscribction
private subscription:Subscription;

  constructor(private sls: ShoppingListService, private router:Router, private route:ActivatedRoute, private recipesService:RecipeService ) { }

  ngOnInit() {

    // ??????????????????????????????????????????????
     this.subscription= this.route.params.subscribe(
        (params:any) =>{
          // Pomocu ovog posljedjujemo id tj param cita link i uzima id iz linka , kojeg dodjeljuje recipeIndex-u
          this.recipeIndex=params['id'];
          // Pomocu ovoga prosljedjuemo u recipesService id tj ono sta zelimo da se otvori u selectedRecipe
          // Ovu vrijenost kupimo iz recipesService.getRecipe  tako sto mu proslijedimo vrijednost koju zelimo da nam se vrati , a ta vrijednos se cita iz linka pomocu komande parmas
          this.selectedRecipe=this.recipesService.getRecipe(this.recipeIndex);
        }

     );
  }
// Pozivamo ShopingList Sevice njegov metod addItems i dodajemo ingediants
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);

  }
  // 
  onEdit(){
    this.router.navigate(['recipes', this.recipeIndex,'edit']);

  }
  onDelete(){
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['recipes']);


  }

}
