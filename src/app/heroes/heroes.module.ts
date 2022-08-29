import { HeroeRoutingModule } from './heroe-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { SearchHeroeComponent } from './pages/search-heroe/search-heroe.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';



@NgModule({
  declarations: [
    AddHeroeComponent,
    SearchHeroeComponent,
    HeroeComponent,
    HomeComponent,
    ListHeroesComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule
  ]
})
export class HeroesModule { }
