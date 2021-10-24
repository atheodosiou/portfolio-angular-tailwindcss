import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTags'
})
export class GetTagsPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.map(x => {
      return (x.name as string).split(' ').join('_');
    });
  }

}
