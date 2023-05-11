import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'
import { MouseHoverDirective } from '../directive/mouse-hover.directive';

@Component({
  selector: 'app-student-stand-alone',
  standalone: true,
  imports: [CommonModule,MatListModule],
  templateUrl: './student-stand-alone.component.html',
  styleUrls: ['./student-stand-alone.component.css'],
  hostDirectives: [MouseHoverDirective]
})
export class StudentStandAloneComponent {
    items : any[] = ['item1', 'item2'];

    mouseHoverEvent(){
      console.log('mouseHover')
    }
}
