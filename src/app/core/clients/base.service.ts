import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private readonly baseUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  public get<T>(endpoint: string): Observable<T> {
    return this.http
      .get<ResponseModel<T>>(this.baseUrl + endpoint)
      .pipe(take(1), map(this.extractData<T>));
  }

  private extractData<T>(response: ResponseModel<T>): any {
    return response.results || response || {};
  }
}
