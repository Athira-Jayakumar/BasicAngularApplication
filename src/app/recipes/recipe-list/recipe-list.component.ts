import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recipes } from '..//recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<recipes>();

  recipes: recipes[] =[
    new recipes('Tasty Chocolate Pancakes Recipe', 'Super Fluffy And Vegan','https://th.bing.com/th/id/R.bd4621ee9020756d40e09a0206170127?rik=sS4P5U%2bGZuxfhw&riu=http%3a%2f%2felleyajoku.com%2fwp-content%2fuploads%2f2020%2f02%2fDelicious-chocolate-pancakes-.jpg&ehk=zxMfi5Qwc4IkAKIWoswzF7SdYJ34ivsq2nsXnkezQf4%3d&risl=&pid=ImgRaw&r=0'),
    new recipes('Gluten free sausage cassoulet recipe',"Debbie And Andrew's Harrogate  Gluten Free Pork Sausages",'https://th.bing.com/th/id/OIP.0WiL-72DhUmVi-xAna5qCQHaJQ?pid=ImgDet&rs=1')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: recipes){
    this.recipeWasSelected.emit(recipe);

  }

  

  }


