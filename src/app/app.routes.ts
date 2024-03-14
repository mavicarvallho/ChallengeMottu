import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/characters/characters.component').then(
        (c) => c.CharactersComponent
      ),
  },
  {
    path: 'favoritos',
    loadComponent: () =>
      import('./features/favorites/favorites.component').then(
        (c) => c.FavoritesComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
