import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dicover'
})
export class DicoverPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
