import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  
})
export class ShoppingListAddComponent implements OnChanges {


// Sa inputom ocekujemo da se podaci proslijede sa neke vanjske componente u nasem slucaju sa shoping list component html-a unutar taga koji poziva shoping list add components
@Input() item:Ingredient;
// Sluzi da se posalje cleard pomocu event emitter metoda
//Ovaj izlaz se slusa unutar shopping list component html unutar taga rb-shopping-list-add
@Output() cleared=new EventEmitter();

isAdd=true;

  constructor(private sls: ShoppingListService) { }

  // Ovo se aktivira kad god se input promjeni
  ngOnChanges(changes){
    // Ako je null znaci da user nije selektovao item from the list
    if(changes.item.currentValue===null){
      this.isAdd=true;
      this.item={name: null, amount: null};
    }else{
      this.isAdd=false;
    }


  }
  
  // Klikom na submite aktivira se ovaj metod
  onSubmit(ingredient: Ingredient){
// Ako vec nesto ima mozemo to editovati
const newIngredient=new Ingredient(ingredient.name,ingredient.amount);
    if(!this.isAdd){
        //Ovaj dio koda sluzi za editovanje , nakon sto editujemo kliknemo na save i nova vrijednost ce se sacuvati
      // prvi clan salje stari item a drugi novi newIngrediant
        this.sls.editItem(this.item, newIngredient);
        // Pozivamo metodu onClear
        this.onClear();
    }
    // else dodajemo novi item koji kreiramo unutar addItem metode tj u niz items 
    // Metod se dodaje nakon ispunjavanja oba polja jer na oba inputa postoji require koji zahtjva da se ipune polja !!!
    else{
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }


  }
// Metod onDelete
    onDelete(){
    // Pozivamo iz shoping list servisa metod deleteItem i prosljedujemo mu broj indexa tj na kojoj se poziciji u nizu nalazi da bi taj metod mogao sa slice da ga ukine ubije
    this.sls.deleteItem(this.item);
    this.onClear();
    }

   onClear(){
     this.isAdd=true;
    this.cleared.emit(null);
   } 
}
