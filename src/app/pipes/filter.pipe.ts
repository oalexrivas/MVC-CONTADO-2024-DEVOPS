import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase()
    console.log(typeof(searchText));

    return items.filter(item => {
      let dato = item.nombreDoc;
      // console.log(typeof(item.dato));
       return dato.toLocaleLowerCase().includes(searchText);
    });
  }

}
