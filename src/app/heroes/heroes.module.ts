import { FormsModule } from '@angular/forms';
import { HeroeRoutingModule } from './heroe-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { SearchHeroeComponent } from './pages/search-heroe/search-heroe.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImgPipePipe } from './pipes/img-pipe.pipe';



@NgModule({
  declarations: [
    AddHeroeComponent,
    SearchHeroeComponent,
    HeroeComponent,
    HomeComponent,
    ListHeroesComponent,
    HeroeCardComponent,
    ImgPipePipe
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class HeroesModule { }
