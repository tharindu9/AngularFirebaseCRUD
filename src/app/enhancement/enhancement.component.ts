import { Component, OnInit } from '@angular/core';
import{EnhancementService} from './sharedEnhancement/enhancement.service';
import{AngularFireList, AngularFireDatabaseModule} from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import{Enhancement} from './sharedEnhancement/enhancement.model'


@Component({
  selector: 'app-enhancement',
  templateUrl: './enhancement.component.html',
  styleUrls: ['./enhancement.component.css'],
  providers:[EnhancementService]
})
export class EnhancementComponent implements OnInit {

  

  academicYears = ["1st year","2nd year","3rd year","4th year"];
  semesters = ["1st Semester","2nd Semester"];
  sports = ["Elle","Cricket","Vollyball","Carrom"];
  events = ["Freshers","Inter Faculty","Inter University","World University"];
  eventYears = ["2013","2014 ","2015","2016","2017","2018"];

  sportDetails:{
    sport:string,
    event:string,
    eventYear:string
  }
  //identity<sportDetails>(arg: sportDetails):

  constructor(private enhancementService : EnhancementService ) { }

  ngOnInit() {
    //this.resetEnForm();
  }
  onSubmit(form :NgForm){
    this.enhancementService.insertEnhancement(form.value);

  }
  /*resetEnForm(form?:NgForm){
    if(form != null)
    form.reset();
    this.enhancementService.enhancementSelect={
      //$key:null,
      name:'',
      index:'',
      registation:'',
      courseCode:''

    }
  }*/

  


}
