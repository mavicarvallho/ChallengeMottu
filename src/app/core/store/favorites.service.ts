import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  public favorites$: BehaviorSubject<Character[]> = new BehaviorSubject<
    Character[]
  >([]);

  public getFavorites(): Observable<Character[]> {
    return this.favorites$.asObservable();
  }

  public addFavorite(character: Character): void {
    const favorites: Character[] = [...this.favorites$.value, character];
    this.favorites$.next(favorites);
  }

  public getFavoritesIds(): number[] {
    const favorites = this.favorites$.value;
    const ids: number[] = [];

    favorites.map((favorite) => {
      ids.push(favorite.id);
    });

    return ids;
  }

  public setValue(characters: Character[]): void {
    this.favorites$.next(characters);
  }

  public removeWithIndex(index: number): void {
    const favorites = this.favorites$.value;
    favorites.splice(index, 1);
    this.setValue(favorites);
  }
}
