import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentStandAloneComponent } from '../student-stand-alone/student-stand-alone.component';
import { StudentComponent } from './student.component';



@NgModule({
  declarations: [StudentComponent],
  imports: [
    StudentStandAloneComponent
  ],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
