import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { toSignal } from '@angular/core/rxjs-interop';
import { IRecipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  imports: [MatButtonModule, MatIconModule, MatCardModule, RouterModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss',
})
export class RecipeDetail {
  private paramMap;
  
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.paramMap = toSignal(this.route.paramMap);
  }
  
  get recipe(): IRecipe | undefined {
    const map = this.paramMap ? this.paramMap() : null;
    const id = Number(map?.get('id'));
    return this.recipeService.getRecipeById(id);
  }

  get isSaved(): boolean {
    const rec = this.recipe;
    if (!rec) return false;
    return this.recipeService.isInFavourites(rec.id);
  }

  onSave(): void {
    const rec = this.recipe;
    if (rec) {
      this.recipeService.addToFavourites(rec);
    }
  }
}
