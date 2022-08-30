import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.sass']
})
export class SearchHeroeComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
