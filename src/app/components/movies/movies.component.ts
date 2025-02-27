import { Component } from '@angular/core';
import { ServiceContactAPIService } from '../../tools/services/service-contact-api.service';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: false,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  movies: Movie[] = [];
  messageError: string = "";

  constructor(private _serviceContactApi: ServiceContactAPIService, private _router: Router) {

  }

  ngOnInit(): void {
    this._serviceContactApi.getMovies().subscribe({
      next: (data) => {
        console.log(data);
        this.movies = data;
      },
      error: (error) => {
        this.messageError = error.message;
      },
      complete: () => {
        console.log("Récupération des films terminée.");
      }
    });
  }

  goToMovieDetails(idMovie: number): void {
    if (idMovie) {
      //Envoyer l'utilisateur sur la page de détails du film
      console.log(idMovie);
      this._router.navigate(["movie-details", idMovie]);
    }
  }
}
