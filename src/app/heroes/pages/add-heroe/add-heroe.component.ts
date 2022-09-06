import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.sass']
})
export class AddHeroeComponent implements OnInit {

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }
  
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics'
    },
  ]

  constructor(private heroeService: HeroesService,
              private acttivatedRoute: ActivatedRoute, 
              private router: Router,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return;
    }

    this.acttivatedRoute.params.pipe(
      switchMap(({id}) => this.heroeService.getHeroe(id))
      )
      .subscribe( heroe => this.heroe = heroe );
  }

  save() {
    if(this.heroe.superhero.trim().length === 0)
      return;

      if(this.heroe.id){
        //_ Actualizacion de Heroe
        this.heroeService.updateHeroe(this.heroe).subscribe( heroe => this.showSnackBar('Registro actualizado'));
      }else{
      //_ Creacion de Heroe
      this.heroeService.addHeroe(this.heroe).subscribe(heroe => { 
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.showSnackBar('Registro creado');
      });
    }
    
  }

  delete() {

    const dialog = this.dialog.open(ConfirmComponent, {
      data: this.heroe
    });

    dialog.afterClosed().subscribe( (result) => {
      if (result) {
        this.heroeService.deleteHeroe(this.heroe.id!).subscribe(resp => this.router.navigate(['/heroes']));
      }
    });
  }

  showSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'Aceptar', {
      duration: 2500
    })
  }

}
