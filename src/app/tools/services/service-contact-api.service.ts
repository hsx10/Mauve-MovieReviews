import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceContactAPIService {
  private url: string = "http://localhost:3000"

  constructor(private _httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this._httpClient.get<Movie[]>(`${this.url}/movies`)
  }

}
