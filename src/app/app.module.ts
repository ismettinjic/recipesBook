import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { APP_ROUTES_PROVIDERS } from './app.routes';
//import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';
import { routing } from './app.routes';
import { RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
 //   ShoppingListComponent,  --> Dodali u shopping list module
 //   ShoppingListAddComponent, --> Dodali u shopping list module
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
   
    //ROUTER_PROVIDERS
  ],
  imports: [
    BrowserModule,
//    FormsModule, --> Dodali u shopping list module
    HttpModule,
    routing,
    RouterModule,
    ReactiveFormsModule,
    ShoppingListModule
  ],
  providers: [RecipeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
