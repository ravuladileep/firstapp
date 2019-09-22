import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    const currentyear: any = new Date().getFullYear();
    const birthyear: any = new Date(value).getFullYear();
    const myage = currentyear - birthyear;

    return myage;
  }

}
