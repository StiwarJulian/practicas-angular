import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class SpotifyService {


  constructor ( private _http: HttpClient ) { }

  getQuery ( query: string ) {
    const url = `https://api.spotify.com/v1/` + query;

    const headers = new HttpHeaders( {
      'Authorization': 'Bearer BQBtRckdGok98IqdWdZueVit9l64qSFmw0LmhgKn37lTtEqVOO_hi5-KRyq3OVSDiFyA34eqKHde2Rvz1cI'
    } );

    return this._http.get( url, { headers } )
  }

  getNewReleases () {

    return this.getQuery( 'browse/new-releases?limit=20' )
      .pipe( map( data => data[ 'albums' ].items ) )

  }


  getArtists ( search: string ) {

    return this.getQuery( `search?q=${ search }&type=artist&limit=15` )
      .pipe( map( data => data[ 'artists' ].items ) );
  }

  getArtist ( id: string ) {

    return this.getQuery( `artists/${ id }` );

  }

  getTopTracks ( id: string ) {

    return this.getQuery( `artists/${ id }/top-tracks?country=us` )
      .pipe( map( data => data[ 'tracks' ] ) );

  }
}
