import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }
  getNumberOf(list:any[], critiria:string,value:any){
    let n=0
    for (let index = 0; index < list.length; index++) {
      if (list[index].critiria==value) {
        n++
      }
      
    }
    return n
  }
 
}
