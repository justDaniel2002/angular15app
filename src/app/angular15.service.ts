import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Angular15Service {

  constructor(private http: HttpClient) {}

  DisplayMeg(){
    return 'im angular15 service';
  }

  CallApi(){
    return this.http.get('https://localhost:7180/api/Categories')
  }
}
