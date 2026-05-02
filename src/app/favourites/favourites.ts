import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeCard } from '../recipe-card/recipe-card';
import { IRecipe } from '../models/recipe.model';

@Component({
  selector: 'app-favourites',
  imports: [RecipeCard],
  templateUrl: './favourites.html',
  styleUrl: './favourites.scss',
})
export class Favourites {
  constructor(private recipeService: RecipeService) {}
  
  get favourites(): IRecipe[] {
    return this.recipeService.getFavourites();
  }

  isSaved(recipe: IRecipe): boolean {
    return this.recipeService.isInFavourites(recipe.id);
  }

  onSave(recipe: IRecipe): void {
    this.recipeService.addToFavourites(recipe);
  }
}
