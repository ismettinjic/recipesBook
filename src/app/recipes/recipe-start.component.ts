import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-start',
  // Ovo je startna komponenta : za recipe detail tj desnu kolonu stranice
  template: `
  
  <h1>Please select a Recipe</h1>
  `,
  styles: []
})
export class RecipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
