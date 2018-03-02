import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { Ingredient } from "../ingredient";
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',

})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[]=[];

  //Ako ni jedan nije selektovan item postavlja se null vrijednost 
selectedItem: Ingredient=null;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items=this.sls.getItems();
  }

  onSelectItem(item: Ingredient){

    this.selectedItem=item;

  }

  onCleared(){
    this.selectedItem=null;
  }

}
