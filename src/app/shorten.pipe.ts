import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    //return value[0] + value[1];
    //return value.split('', args[0]).join('');
    return value.split('').slice(0, args[0]).join('');
  }

}
