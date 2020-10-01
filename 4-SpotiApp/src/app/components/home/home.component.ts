import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
} )
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;
  error:boolean = false;
  message: string;

  constructor ( private _spotifyService: SpotifyService ) {

    this.loading = true;

    this._spotifyService.getNewReleases()
      .subscribe( ( data: any ) => {
        this.newReleases = data;
        this.loading = false;
      }, ( errorService ) => {

        this.loading = false;
        this.error = true;
        this.message = errorService.error.error.message;

      });

  }


}
