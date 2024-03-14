import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import { Observable } from 'rxjs';

import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private baseService: BaseService) {}

  public searchByName(name: string): Observable<Character[]> {
    return this.baseService.get<Character[]>(`/character?name=${name}`);
  }
}
