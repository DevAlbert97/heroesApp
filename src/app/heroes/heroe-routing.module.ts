import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { SearchHeroeComponent } from './pages/search-heroe/search-heroe.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'agregar',
        component: AddHeroeComponent
      },
      {
        path: 'editar/:id',
        component: AddHeroeComponent
      },
      {
        path: 'buscar',
        component: SearchHeroeComponent
      },
      {
        path: 'listado',
        component: ListHeroesComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroeRoutingModule { }
