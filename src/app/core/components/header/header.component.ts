import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoritesService } from '../../store/favorites.service';
import { Character } from '../../models/character.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, AsyncPipe],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public favorites$: Observable<Character[]> = new Observable();

  constructor(private favoriteService: FavoritesService) {}

  ngOnInit(): void {
    this.observeFavoriteCount();
  }

  private observeFavoriteCount(): void {
    this.favorites$ = this.favoriteService.getFavorites();
  }
}
