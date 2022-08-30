import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.sass']
})
export class ListHeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
    this.heroeService.getHeroes().subscribe( resp => this.heroes = resp);
  }

}
