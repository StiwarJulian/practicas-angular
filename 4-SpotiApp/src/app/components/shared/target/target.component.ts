import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: [ './target.component.css' ]
} )
export class TargetComponent {

  @Input() items: any[] = [];

  constructor ( private _router: Router ) {
  }

  viewArtist ( artist: any ) {
    let artistId;

    if ( artist.type === 'artist' ) {
      artistId = artist.id;
    } else {
      artistId = artist.artists[ 0 ].id;
    }

    this._router.navigate( [ '/artist', artistId ] );
  }
}
