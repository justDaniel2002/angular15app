import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Angular15Service {

  constructor() { }

  DisplayMeg(){
    return 'im angular15 service';
  }
}
