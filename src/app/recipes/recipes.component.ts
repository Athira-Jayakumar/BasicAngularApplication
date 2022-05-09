import { Component, OnInit } from '@angular/core';
import { recipes } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe!:recipes;

  constructor() { }

  ngOnInit(): void {
  }

}
