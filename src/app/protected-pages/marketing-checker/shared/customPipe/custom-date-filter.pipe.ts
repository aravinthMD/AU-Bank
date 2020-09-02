import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateFilter'
})
export class CustomDateFilterPipe implements PipeTransform {

  transform(dateToBeFiltered: any): any {

    const covertDate = dateToBeFiltered ? dateToBeFiltered : null;

    const LocalConvertedDate = covertDate ? new Date(covertDate).toLocaleDateString('en-GB') : ""; 

    return LocalConvertedDate;
  }



}
