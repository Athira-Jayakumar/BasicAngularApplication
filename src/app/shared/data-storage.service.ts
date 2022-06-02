import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { recipes } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import {  map,tap } from 'rxjs/operators';
import { Authservice } from '../auth/auth.service';


@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private http:HttpClient,private recipeService: RecipeService,private authService : Authservice) {}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://basic-angular-application-default-rtdb.firebaseio.com/recipes.json',recipes)
        .subscribe(response => {
            console.log(response);
        });
    
        
    }
    fetchRecipes() { 
     
        return  this.http
        .get<recipes[]>(
            'https://basic-angular-application-default-rtdb.firebaseio.com/recipes.json',
           )
           .pipe(
       map(recipes => {
        return recipes.map(recipe => {
            return{
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []
            };
        });
    }),
    tap(recipes => {
        this.recipeService.setRecipes(recipes);
    })
  );
 }
}