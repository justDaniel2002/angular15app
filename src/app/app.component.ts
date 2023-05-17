import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aNguLar15ApP';
  num1 = 21;
  visible = false;
  public color = '';
  link = 'https://www.google.com.vn/'
  colspan = 2

  StudentDetails:any[] = []

  model = {
     name : 'name'
  }

  studentInfo : any = [];

  DOB : Date = new Date('01/19/2002')

  salary : number = 10000

  NumberArray:any[] = [];

  private router : Router = new Router();

  constructor() {
    this.StudentDetails = [
      {
        Name: 'Student1',
        Age: 21,
        Gender: 'Male',
      },

      {
        Name: 'Student2',
        Age: 22,
        Gender: 'Female',
      },

      {
        Name: 'Student3',
        Age: 23,
        Gender: 'Male',
      },

      {
        Name: 'Student4',
        Age: 24,
        Gender: 'Male',
      },
    ]

    this.studentInfo = [
      {name: 'Student1', age: 20, DOB : '10/11/2003'},
      {name: 'Student2', age: 20, DOB : '12/11/2003'},
      {name: 'Student3', age: 20, DOB : '08/07/2003'},
    ]

    this.NumberArray = [
      {num1 : 10, num2 : 20},
      {num1 : 12, num2 : 23},
      {num1 : 45, num2 : 34},
    ]
  }

  ngOnInit() {

  }

  mouseHoverEvent(){
    console.log('mouseHover')
  }

  OnChange(args: any) {
    this.visible = args;
  }

  SelectColor(e:any){
    this.color = e.target.value;
  }

  GetAge(Age:number) 
  {
    let val = Age<23?'under23':'above22'
    switch(val){
      case 'under23':
        return 'green'
      case 'above22':
        return 'red'  
    }

    return ''

  }

  GetCssClass(input:string){
    let classtype
    if(input == "main")
    {
      classtype = {
        'color1':true
      }
    }
    else 
    {
      classtype = {
        'color2':true
      }
    }
    return classtype
  }

  routing(link:string){
    this.router.navigate(['/'+link])
  }

}
