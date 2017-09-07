import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], term: any): any {
    // check if term is undefined
    if (term === undefined) {
      return list;
    }
    // return filtered list
    return list.filter(function (item: any) {
      return item.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
