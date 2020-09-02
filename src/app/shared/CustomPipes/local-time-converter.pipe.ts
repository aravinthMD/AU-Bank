import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localTimeConverter'
})
export class LocalTimeConverterPipe implements PipeTransform {

  transform(value: any): any {

    let CustomDate  = value ? value : null;
    const convertedDate =  CustomDate ? new Date(CustomDate).toLocaleDateString() : "";

    return convertedDate;
  }

}
