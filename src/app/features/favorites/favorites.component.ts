import { Component, OnInit } from '@angular/core';
import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { Character } from '../../core/models/character.model';
import { FavoritesService } from '../../core/store/favorites.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [EmptyComponent, CardComponent, AsyncPipe],
  providers: [AsyncPipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  public characters$: Observable<Character[]> = new Observable();

  constructor(private favoriteService: FavoritesService) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  private getFavorites(): void {
    this.characters$ = this.favoriteService.getFavorites();
  }

  public removeFromFavorites(index: number): void {
    this.favoriteService.removeWithIndex(index);
  }
}
