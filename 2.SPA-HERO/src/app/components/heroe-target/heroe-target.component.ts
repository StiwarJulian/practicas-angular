import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component( {
  selector: 'app-heroe-target',
  templateUrl: './heroe-target.component.html',
  styleUrls: [ './heroe-target.component.css' ]
} )
export class HeroeTargetComponent implements OnInit {

  constructor ( private _router: Router ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  ngOnInit (): void {
  }

  verHeroe () {
    this._router.navigate( [ '/heroe', this.index ] );
    //this.heroeSeleccionado.emit( this.index );
  }
}
