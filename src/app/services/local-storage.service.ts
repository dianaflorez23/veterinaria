import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private v_localStorage! :any;

  constructor() {
    this.v_localStorage = localStorage;
   }

   setItem(nombreItem:string, valorItem: string){
    this.v_localStorage.setItem(nombreItem, valorItem);
   }

   getItem(nombreItem:string){
    return this.v_localStorage.getItem(nombreItem);
   }

}
