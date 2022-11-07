import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm?: any): any{
  
    if(!searchTerm){
return value;
    }
    return value.filter((userData:any)=>userData.Createdby.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1);



   
    
  
  }

}
