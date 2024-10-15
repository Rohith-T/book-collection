import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], args: any): any {
  if (!items) return [];
  if (!args) return items;

  const searchText = args.toLowerCase();

  return items.filter(item => {
    return item.title.toLowerCase().includes(searchText);
  });
}



}
