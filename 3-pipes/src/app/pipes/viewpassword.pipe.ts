import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'viewpassword'
} )
export class ViewpasswordPipe implements PipeTransform {

  transform ( value: string, activar: boolean ): string {

    // if ( activar ) {
    //   return value.toString();

    // } else {
    //   var countCharacter: number = value.length;
    //   var asterisk: string = '';

    //   for ( let i = 0; i < countCharacter; i++ ) {
    //     asterisk += '*';
    //   }
    // }
    //   return asterisk;

    return ( activar ) ? value : '*'.repeat( value.length );
  }

}


