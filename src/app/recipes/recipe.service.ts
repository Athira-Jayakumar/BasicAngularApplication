import {  Injectable} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { recipes } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
    //recipeSelected= new Subject<recipes>();
    recipesChanged = new Subject<recipes[]>()

    // private recipes: recipes[] =[
    //     new recipes('Tasty Chocolate Pancakes Recipe', 
    //     'Super Fluffy And Vegan',
    //     'https://th.bing.com/th/id/R.bd4621ee9020756d40e09a0206170127?rik=sS4P5U%2bGZuxfhw&riu=http%3a%2f%2felleyajoku.com%2fwp-content%2fuploads%2f2020%2f02%2fDelicious-chocolate-pancakes-.jpg&ehk=zxMfi5Qwc4IkAKIWoswzF7SdYJ34ivsq2nsXnkezQf4%3d&risl=&pid=ImgRaw&r=0',
    //     [
    //         new Ingredient('Heavy Cream',1),
    //         new Ingredient('Raspberry',8),
    //         new Ingredient('Chocolate (finely chopped)',2),
    //         new Ingredient('cocoa powder',1),
    //         new Ingredient('Butter',1)

    //     ]),
    //     new recipes('Gluten free sausage cassoulet recipe',
    //     "Debbie And Andrew's Harrogate  Gluten Free Pork Sausages",
    //     'https://th.bing.com/th/id/OIP.0WiL-72DhUmVi-xAna5qCQHaJQ?pid=ImgDet&rs=1',
    //     [
    //         new Ingredient('pork sausages',5),
    //         new Ingredient('Brown Onion (diced)',1),
    //         new Ingredient('Carrots (diced)',2), 
    //         new Ingredient('Gluten Free Breadcrumbs',1),
    //         new Ingredient('Sweet Potato (cubed)',1)
    //     ])
    //   ];

    private recipes: recipes[]=[];

      constructor(private slService : ShoppingListService) {}

      setRecipes(recipes: recipes[]){
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index : number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);

      }
      addRecipe(recipe:recipes){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());

      }
      updateRecipe(index: number, newRecipe:recipes){
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
        }
        deleteRecipe(index: number){
            this.recipes.splice(index,1);
            this.recipesChanged.next(this.recipes.slice());
        }
}
