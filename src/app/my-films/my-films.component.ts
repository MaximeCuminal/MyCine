import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})
export class MyFilmsComponent implements OnInit {

  constructor() { }

  @Output() onFilmDelete = new EventEmitter<any>();

  @Input() film: any;
  @Input() index: any;

  ngOnInit(): void {
    
  }

  DeleteFilm() {
    this.onFilmDelete.emit();
  }

}
