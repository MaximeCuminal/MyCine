import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css']
})
export class AddOrEditFilmComponent implements OnInit {

  constructor() { }
  @Output() onFilmCreate = new EventEmitter<any>();


  filmForm = new FormGroup({
    title: new FormControl(),
    synopsis: new FormControl(),
    rating: new FormControl(),
  })

  submitFilm() {
    this.onFilmCreate.emit(
      {
        title: this.filmForm.controls.title.value,
        synopsis: this.filmForm.controls.synopsis.value,
        rating: this.filmForm.controls.rating.value
      });
  }

  ngOnInit(): void {
  }

}
