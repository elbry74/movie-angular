import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;


  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'Trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
  else  if (this.type === 'Theatres') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
   else if (this.type === 'Popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      console.log(index);
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }
}

