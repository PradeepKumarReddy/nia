import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public localStorageItem(id: string): string {
    if (id == "currentUser") {
    	var obj = JSON.parse(localStorage.getItem(id));
      if (obj != null)
    	   return obj.username;
      else
         return "";
    } else {
    	return localStorage.getItem(id);
    }
    
  }
}
