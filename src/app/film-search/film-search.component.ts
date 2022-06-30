import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})

export class FilmSearchComponent implements OnInit {

  filmList: any = [];

  private _filmListUrl = 'http://localhost:3000/films/';

  @Output() onSearch = new EventEmitter<any>();


  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._httpClient.get<FilmResponse>(this._filmListUrl)
      .subscribe(filmResponse => {
        this.filmList = filmResponse
        console.log(this.filmList);
        this.sendSearch();
      });
  }


  sendSearch() {
    this.onSearch.emit(this.filmList);
    console.log("sent");
  }

}


export interface FilmResponse {
  films: Array<{
    title: string;
    synopsis: string;
    rating: string;
  }>
}
