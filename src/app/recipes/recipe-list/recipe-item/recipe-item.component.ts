import { Component, Input, OnInit } from '@angular/core';


import { recipes } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

   @Input() recipes !: recipes;
   @Input() index !: number;

  ngOnInit() {
  }

 
}
