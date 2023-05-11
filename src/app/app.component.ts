import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular15App';

  constructor(){

  }

  ngOnInit() {

  }

  mouseHoverEvent(){
    console.log('mouseHover')
  }
}
