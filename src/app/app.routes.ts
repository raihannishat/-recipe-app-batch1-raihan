import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Favourites } from './favourites/favourites';
import { RecipeDetail } from './recipe-detail/recipe-detail';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'favourites', component: Favourites},
    {path: 'recipe/:id', component: RecipeDetail},
];
