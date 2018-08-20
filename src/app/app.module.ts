import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';
import {RouterLink} from '@angular/router/src/directives/router_link';
import{AngularFireAuth} from 'angularfire2/auth';


import { AppComponent } from './app.component';


import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import{environment} from '../environments/environment';
import { NavBarComponent } from './employees/nav-bar/nav-bar.component';
//import { LogInComponent } from './log-in/log-in.component';
//import { SignUpComponent } from './sign-up/sign-up.component';
import { EnhancementComponent } from './enhancement/enhancement.component';
//import { PhysicalDepartmentComponent } from './physical-department/physical-department.component';

import { AddminComponent } from './addmin/addmin.component';



@NgModule({
  declarations: [
    AppComponent,
    
    
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    NavBarComponent,
  //  LogInComponent,
    //SignUpComponent,
    EnhancementComponent,
    //ApComponent,
    AddminComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
     /* {
        path:'log-in',
        component:LogInComponent
      },*/
     /* {
        path:'sign-up',
        component:SignUpComponent
      },*/
      {
        path:'enhancement',
        component:EnhancementComponent
      },
     
      /*{
        path:'ap',
        component:ApComponent
      },*/
      {
        path:'ad',
        component:AddminComponent
      }
      

    ])
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
