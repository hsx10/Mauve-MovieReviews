import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { User } from '../../models/user.model';
import { Actor } from '../../models/actor.model';
import { Director } from '../../models/director.model';
import { Genre } from '../../models/genre.model';
import { UserMovieList } from '../../models/usermovielist.model';
import { MovieActor } from '../../models/movieactor.model';
import { MovieGenre } from '../../models/moviegenre.model';
import { MovieDirector } from '../../models/moviedirector.model';

@Injectable({
  providedIn: 'root'
})
export class ServieContactAPIService {
  private url : string = "http://localhost:3000"

  constructor( private _httpClient : HttpClient) { }

  getMovies() : Observable<Movie[]> {
    return this._httpClient.get<Movie[]>(`${this.url}/movies`)
  }

  // il manque le model
  // getReviews() : Observable<Movie[]> {
  //   return this._httpClient.get<Movie[]>(`${this.url}/reviews`)
  // }

  getUsers() : Observable<User[]> {
    return this._httpClient.get<User[]>(`${this.url}/users`)
  }

  getActors() : Observable<Actor[]> {
    return this._httpClient.get<Actor[]>(`${this.url}/actors`)
  }

  getDirectors() : Observable<Director[]> {
    return this._httpClient.get<Director[]>(`${this.url}/directors`)
  }

  getGenres() : Observable<Genre[]> {
    return this._httpClient.get<Genre[]>(`${this.url}/genres`)
  }

  getUserLists() : Observable<UserMovieList[]> {
    return this._httpClient.get<UserMovieList[]>(`${this.url}/Userlists`)
  }

  getmovieActors() : Observable<MovieActor[]> {
    return this._httpClient.get<MovieActor[]>(`${this.url}/movieActors`)
  }

  getmovieGenre() : Observable<MovieGenre[]> {
    return this._httpClient.get<MovieGenre[]>(`${this.url}/movieGenre`)
  }
  
  getmovieDirector() : Observable<MovieDirector[]> {
    return this._httpClient.get<MovieDirector[]>(`${this.url}/movieDirector`)
  }
}
