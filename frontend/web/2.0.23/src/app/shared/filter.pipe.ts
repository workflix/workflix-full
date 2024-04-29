import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propProf:string): any[]{
    const result:any =[];
    if(!value || filterString==='' || propProf ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propProf].trim().toLowerCase().includes(filterString.toLocaleLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
