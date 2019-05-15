import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number): any {
    if (!value) {
      return null;
    }
    const actualLimit = (limit) ? limit : 50;
    value = value.replace(/<\/?[^>]+>/ig, " ");
    return value.substr(0, actualLimit) + '...';
  }
}
