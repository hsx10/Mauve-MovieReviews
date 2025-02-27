import { Component } from '@angular/core';
import { ServiceContactAPIService } from '../../tools/services/service-contact-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

  idMovie!: number;
  movie!: Movie;
  messageError: string = "";
  constructor(private _serviceContactApi: ServiceContactAPIService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    //Récupération de l'id passé en paramètre de la route
    this.idMovie = _activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    if (this.idMovie) {
      this._serviceContactApi.getMovieById(this.idMovie).subscribe({
        next: (data) => {
          this.movie = data;
        },
        error: (error) => {
          this.messageError = error.message;
        },
        complete: () => {
          console.log("Récupération du film terminée.");
        }
      })

    }

  }

  goBackToMovies() {
    //Retourne à la page movies
    this._router.navigate(["movies"]);
  }
}
