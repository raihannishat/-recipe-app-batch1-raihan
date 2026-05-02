import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, IRecipe } from '../models/recipe.model';
import { RecipeCard } from '../recipe-card/recipe-card';
import { MatButtonModule } from '@angular/material/button';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [RecipeCard, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  categories: Category[] = Object.values(Category);
  private queryParamMap;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.queryParamMap = toSignal(this.route.queryParamMap);
  }

  get allRecipes(): IRecipe[] {
    return this.recipeService.getRecipes();
  }

  get filteredRecipes(): IRecipe[] {
    const map = this.queryParamMap ? this.queryParamMap() : null;
    const categoryFilter = map?.get('category');
    
    if (!categoryFilter) {
      return this.allRecipes;
    }
    
    return this.allRecipes.filter(r => r.category === categoryFilter);
  }

  get currentCategory(): string | null {
    const map = this.queryParamMap ? this.queryParamMap() : null;
    return map?.get('category') || null;
  }

  filterByCategory(category: string | null): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: category ? category : null },
      queryParamsHandling: 'merge'
    });
  }

  isSaved(recipe: IRecipe): boolean {
    return this.recipeService.isInFavourites(recipe.id);
  }

  onSave(recipe: IRecipe): void {
    this.recipeService.addToFavourites(recipe);
  }
}
