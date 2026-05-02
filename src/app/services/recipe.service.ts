import { Injectable } from '@angular/core';
import { IRecipe, Category } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipes: IRecipe[] = [
    {
      id: 1,
      name: 'Pancakes',
      category: Category.Breakfast,
      prepTime: 20,
      servings: 2,
      description: 'Fluffy pancakes with syrup.',
      ingredients: ['Flour', 'Milk', 'Eggs', 'Syrup'],
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80'
    },
    {
      id: 2,
      name: 'Caesar Salad',
      category: Category.Lunch,
      prepTime: 15,
      servings: 1,
      description: 'Classic Caesar salad with croutons.',
      ingredients: ['Lettuce', 'Croutons', 'Parmesan', 'Caesar Dressing'],
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80'
    },
    {
      id: 3,
      name: 'Spaghetti Bolognese',
      category: Category.Dinner,
      prepTime: 45,
      servings: 4,
      description: 'Traditional Italian pasta.',
      ingredients: ['Spaghetti', 'Minced Meat', 'Tomato Sauce', 'Onion'],
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80'
    },
    {
      id: 4,
      name: 'Chips & Guacamole',
      category: Category.Snacks,
      prepTime: 10,
      servings: 3,
      description: 'Perfect party snack.',
      ingredients: ['Tortilla Chips', 'Avocado', 'Lime', 'Salt', 'Onion'],
      image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&q=80'
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      category: Category.Dessert,
      prepTime: 60,
      servings: 8,
      description: 'Rich and moist chocolate cake.',
      ingredients: ['Flour', 'Cocoa Powder', 'Sugar', 'Eggs', 'Butter'],
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
    },
    {
      id: 6,
      name: 'French Toast',
      category: Category.Breakfast,
      prepTime: 15,
      servings: 2,
      description: 'Classic french toast with a hint of cinnamon.',
      ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon', 'Syrup'],
      image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&q=80'
    },
    {
      id: 7,
      name: 'Chicken Wrap',
      category: Category.Lunch,
      prepTime: 20,
      servings: 1,
      description: 'Healthy grilled chicken wrap.',
      ingredients: ['Tortilla', 'Grilled Chicken', 'Lettuce', 'Mayo', 'Tomato'],
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80'
    },
    {
      id: 8,
      name: 'Steak with Mash',
      category: Category.Dinner,
      prepTime: 35,
      servings: 2,
      description: 'Juicy steak with creamy mashed potatoes.',
      ingredients: ['Beef Steak', 'Potatoes', 'Butter', 'Garlic', 'Rosemary'],
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&q=80'
    }
  ];

  public favourites: IRecipe[] = [];

  constructor() { }

  public getRecipes(): IRecipe[] {
    return this.recipes;
  }

  public getRecipeById(id: number): IRecipe | undefined {
    return this.recipes.find(r => r.id === id);
  }

  public addToFavourites(recipe: IRecipe): void {
    if (this.isInFavourites(recipe.id)) {
      this.favourites = this.favourites.filter(f => f.id !== recipe.id);
    } else {
      this.favourites.push(recipe);
    }
  }

  public getFavourites(): IRecipe[] {
    return this.favourites;
  }

  public isInFavourites(id: number): boolean {
    return this.favourites.some(f => f.id === id);
  }
}
