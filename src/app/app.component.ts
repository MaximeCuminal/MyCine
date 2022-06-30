import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCine';

  films: any[] = [];

  addFilm(film: any) {
    console.log("Nouveau film :");
    console.log("Titre : "+film.title);
    console.log("Intrigue : "+film.synopsis);
    console.log("Note : "+film.rating);
    console.log("==========");
    this.films.push(film);
  }

  removeFilm(index: any) {
    this.films.splice(index, 1);
  }

}
