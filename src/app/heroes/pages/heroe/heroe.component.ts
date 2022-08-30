import { HeroesService } from './../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.sass']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activadedRouted: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activadedRouted.params.pipe(
      switchMap( ({id}) => this.heroesService.getHeroe(id) ))
      .subscribe(heroe => this.heroe = heroe);
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }

}
