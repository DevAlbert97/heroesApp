import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.sass']
})
export class ConfirmComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }

  delete(){
    this.dialogRef.close(true);
  }

  close(){
    this.dialogRef.close();
  }

}
