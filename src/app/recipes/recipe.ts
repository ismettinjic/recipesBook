import { Ingredient } from "../ingredient";
export class Recipe {
    //  Definisanje klase !!!
    constructor(public name:string,public description:string, public imagePath:string,public ingredients:Ingredient[]){}
}
