import { Component, Input, OnInit ,Output, EventEmitter } from '@angular/core';


import { recipes } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

   @Input() recipes !: recipes;

   @Output() recipeSelected = new EventEmitter<void>();

  constructor() {

  }
 


  ngOnInit() {
  }

   onSelected(){
     this.recipeSelected.emit();

   }
}
