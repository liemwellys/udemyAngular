import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This simply a test', 
      `https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=
      rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=
      format&fit=crop&w=714&q=80`),
    new Recipe('A Test Recipe', 'This simply a test', 
      `https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=
      rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=
      format&fit=crop&w=714&q=80`)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
