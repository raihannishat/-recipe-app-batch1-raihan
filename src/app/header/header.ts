import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { IRecipe } from '../models/recipe.model';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private recipeService: RecipeService) {}
  
  get favourites(): IRecipe[] {
    return this.recipeService.getFavourites();
  }
}
