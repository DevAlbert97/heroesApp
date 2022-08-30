import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.sass']
})
export class HeroeComponent implements OnInit {

  constructor(private activadedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activadedRouted.params.subscribe(({id}) => console.log(id));
  }

}
