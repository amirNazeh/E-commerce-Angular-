import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formats'
})
export class FormatsPipe implements PipeTransform {

  transform(value: any,): unknown {

    // var foo = value.match(new RegExp('.{1,4}', 'g')).join("-");
    // return foo;
    
    var format= value.match(/\d{4}(?=\d{2,3})|\d+/g).join("-")
    return format;


  }





}
