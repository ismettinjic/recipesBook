import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[]=[];


  constructor() { }

    getItems(){
      return this.items;
    }

    addItems(items: Ingredient[]){
      Array.prototype.push.apply(this.items, items);
    }

    // Ovaj metod uzima item iz shoping list add i dodjeljuje ga nizu tj pusa ga unutar items niza
    addItem(item: Ingredient){
      this.items.push(item);
    }
    // editItem ima dva ulaza old Item i new item
    editItem(oldItem: Ingredient, newItem: Ingredient){
      // Cita vrijednos indexa starog itema i na njegovo mjesto upisuje newItem
      this.items[this.items.indexOf(oldItem)]= newItem;
    }
    deleteItem(item: Ingredient){
      // Metod za brisanje jednog elementa iz niza sa indexom item
      this.items.splice(this.items.indexOf(item), 1);
    }
}
