import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pastitsio',
      'Traditional Pastitsio made with love <3',
      'https://www.thehungrybites.com/wp-content/uploads/2019/01/Pastitsio-greek-pasta-bake-pastichio-feat-2.jpg',
      [
        new Ingredient('Kimas', 5),
        new Ingredient('Makaronia', 3),
        new Ingredient('Besamel', 2),
      ]
    ),
    new Recipe(
      'Mousakas',
      'Traditional Mousakas made with love <3',
      'https://www.mygreekdish.com/wp-content/uploads/2013/05/Moussaka-recipe-Traditional-Greek-Moussaka-with-Eggplants.jpg',
      [
        new Ingredient('Kimas', 5),
        new Ingredient('Laxanika', 6),
        new Ingredient('Besamel', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
