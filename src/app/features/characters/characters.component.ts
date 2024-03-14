import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { Character } from '../../core/models/character.model';

import { InputModule } from '../../shared/components/input/input.module';
import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { CardComponent } from '../../shared/components/card/card.component';

import { CharacterService } from '../../core/clients/character.service';
import { FavoritesService } from '../../core/store/favorites.service';
import { CharacterHistoric } from '../../core/models/historic.model';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    EmptyComponent,
    CardComponent,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  public characterForm: FormGroup;

  public characters: Character[] = [];
  public historic: CharacterHistoric[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private characterService: CharacterService,
    private favoriteService: FavoritesService
  ) {
    this.characterForm = this.formBuilder.group({
      name: [''],
    });
  }

  public searchByName(): void {
    const name: string = this.characterForm.value.name;
    if (name === '') {
      this.characters = [];
      return;
    }

    const historic = this.historic.find((x) => x.name === name);
    if (historic) {
      this.characters = historic.characters;
      return;
    }

    this.characterService.searchByName(name).subscribe({
      next: (res: Character[]) => this.processSuccessSearchByName(name, res),
      error: () => (this.characters = []),
    });
  }

  private processSuccessSearchByName(
    name: string,
    characters: Character[]
  ): void {
    const favoritesIds = this.favoriteService.getFavoritesIds();

    characters.map((character) => {
      character.isFavorite = favoritesIds.includes(character.id);
    });
    this.characters = characters;

    this.historic.push({
      name,
      characters,
    });
  }

  public addFavorite(index: number): void {
    const character = this.characters[index];
    this.favoriteService.addFavorite(character);
  }
}
