import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../models/recipe.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-recipe-card',
  imports: [MatCardModule, MatButtonModule, RouterModule, NgClass, NgStyle],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {
  @Input({required: true}) recipe!: IRecipe;
  @Input() isSaved = false;
  @Output() save = new EventEmitter<IRecipe>();

  onSaveClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.save.emit(this.recipe);
  }
}

