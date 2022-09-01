import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.sass']
})
export class SearchHeroeComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];
  heroeSelected!: Heroe | undefined;
  errorFind: boolean = false;

  constructor( private heroeService: HeroesService ) { }

  ngOnInit(): void {
  }

  search() {
    this.heroeService.getSugegestions(this.termino.trim()).subscribe(heroes => this.heroes = heroes);
  }

  optSel(event: MatAutocompleteSelectedEvent){
    if (!event.option.value) {
      this.heroeSelected = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroeService.getHeroe(heroe.id!).subscribe(heroe => this.heroeSelected=heroe);
  }
}
