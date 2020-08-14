import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  folderObjs: any;
  folderObjCopy: any;
  transform(value: any, searchValue): any {
    if (!searchValue) { return value; }
    return value.filter((v) => {
      const txt = JSON.stringify(v);
      return txt.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  }}
