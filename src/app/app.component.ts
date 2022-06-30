import { empty } from 'rxjs';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCine';

  @Input() films: any[] = [];

  addFilm(film: any) {
    console.log("Nouveau film :");
    console.log("Titre : "+film.title);
    console.log("Intrigue : "+film.synopsis);
    console.log("Note : "+film.rating);
    console.log("==========");
    this.films.push(film);
  }

  setFilms(filmList: any[]) {
    console.log(filmList);
    this.films = filmList
    console.log("films set");
  }

  removeFilm(index: any) {
    this.films.splice(index, 1);
  }

}
