import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thesis'
})
export class ThesisPipe implements PipeTransform {

  transform(value: any, filter: any): any {
      if(filter == 'all'){
          return value.filter(item => item.thesis != "price");
      } else if (filter == 'thesis') {
          return value.filter(item => item.thesis === true);
      } else if (filter == "price") {
          return value.filter(item => item.thesis == "price")
      }
      // return null;
    // return null;
  }

}
