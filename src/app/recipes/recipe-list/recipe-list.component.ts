import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pastitsio',
      'Makaronia, kimas kai besamel',
      'https://www.thehungrybites.com/wp-content/uploads/2019/01/Pastitsio-greek-pasta-bake-pastichio-feat-2.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
