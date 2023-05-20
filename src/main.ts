import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { StudentComponent } from './app/student/student.component';
import { ContactUsComponent } from './app/contact-us/contact-us.component';
import { TeacherComponent } from './app/teacher/teacher.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { Angular15Service } from './app/angular15.service';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// const routes: Routes = [
//   {path: '', component:StudentComponent, pathMatch:"full"},
//   {path: 'student',
//    children:[
//     {path:"", component:StudentComponent},
//     {path:"Contactus", component: ContactUsComponent}
//    ]
//   },
//   {path:'Contactus', redirectTo:'student/Contactus', pathMatch:"full"},

//   {path: 'teacher', component:TeacherComponent},
//   {path: '**', component:PageNotFoundComponent},
// ];


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// bootstrapApplication(AppComponent,{

//   providers:[provideRouter(routes), Angular15Service, importProvidersFrom(HttpClientModule)]
// } ).catch(err => console.error(err));