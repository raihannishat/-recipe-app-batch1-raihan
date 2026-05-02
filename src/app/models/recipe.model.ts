export enum Category {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Snacks = 'Snacks',
  Dessert = 'Dessert'
}

export interface IRecipe {
  id: number;
  name: string;
  category: string;
  prepTime: number; // in minutes
  servings: number;
  description: string;
  ingredients: string[];
  image: string; // image file name
}
