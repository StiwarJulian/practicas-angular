import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
} )
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;
  constructor ( private _spotifyService: SpotifyService ) { }

  searchArtist ( search: string ) {
    this.loading = true;

    this._spotifyService.getArtists( search ).subscribe( ( data: any ) => {
      this.artists = data;
      this.loading = false;
    } );
  }

}
