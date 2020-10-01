import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component( {
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
} )
export class ArtistaComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor ( private _router: ActivatedRoute,
    private _spotifyService: SpotifyService ) {

    this.loading = true;

    this._router.params.subscribe( params => {
      this.getArtist( params[ 'id' ] );
      this.getTopTracks( params[ 'id' ] );
    } );
  }

  getArtist ( id: string ) {

    this.loading = true;

    this._spotifyService.getArtist( id ).subscribe( data => {
      this.artist = data;
      this.loading = false;
    } );

  }

  getTopTracks ( id: string ) {
    this._spotifyService.getTopTracks( id ).subscribe( topTracks => {
      console.log( topTracks );
      this.topTracks = topTracks;
    } );
  }

}
