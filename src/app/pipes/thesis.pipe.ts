import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thesis'
})
export class ThesisPipe implements PipeTransform {

  transform(value: any, filter: any): any {
      if(filter){
          return value;
      } else {
          return value.filter(item => item.thesis === true);

      }
      // return null;
    // return null;
  }

}
