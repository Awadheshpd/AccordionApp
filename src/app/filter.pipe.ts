import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    const filteredDetails = value.filter(detail => {
      return detail.email.indexOf(searchText) > -1;
    });
    return filteredDetails;
  }

}
