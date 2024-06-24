import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;
 
    searchTerm = searchTerm.toLowerCase();
    return items.filter(item => {
      return Object.values(item).some(val => {
        if (val !== null && val !== undefined) {
          return val.toString().toLowerCase().includes(searchTerm);
        }
        return false;
      });
    });

  }

}
