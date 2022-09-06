import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imgPipe'
})
export class ImgPipePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return !heroe.id && !heroe.alt_img
      ? 'assets/no-image.png'
      : heroe.alt_img 
      ? heroe.alt_img
      :`assets/heroes/${heroe.id}.jpg`;
  }
}
