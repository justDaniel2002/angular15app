import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListModule } from './student-list/student-list.module';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentStandAloneComponent } from './student-stand-alone/student-stand-alone.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorFontDirective } from './directive/color-font.directive';
import { ItalicsFontDirective } from './directive/italics-font.directive';
import { MouseHoverDirective } from './directive/mouse-hover.directive';
import {FormsModule} from '@angular/forms';
import { MultiplicationPipe } from './multiplication.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    MultiplicationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentStandAloneComponent,
    BrowserAnimationsModule,
    FormsModule
    // ColorFontDirective,
    // ItalicsFontDirective
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
