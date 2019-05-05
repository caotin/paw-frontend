import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../core/model/course';
@Pipe({
  name: 'course',
  pure: false
})
export class CoursePipe implements PipeTransform {

  transform(items: Course[], filter: Course): Course[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Course) => this.applyFilter(item, filter));
  }
  applyFilter(products: Course, filter: Course): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (products[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (products[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }

}
