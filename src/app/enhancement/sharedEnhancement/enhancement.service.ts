import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database';

import{Enhancement} from './enhancement.model';

@Injectable()
export class EnhancementService {
  
  //[x: string]: any;
  enhList: AngularFireList<any>;
  enhancementSelect : Enhancement = new Enhancement();
  constructor(private firebase:AngularFireDatabase) { 
  this.enhList = this.firebase.list('Enhancement');
    
    
    
  }

  getData(){
    this.enhList =this.firebase.list('Enhancement');
    return this.enhList;

  }
  insertEnhancement(enhancement:Enhancement){
    
    this.enhList.push({
      name:enhancement.name,
      index:enhancement.index,
      registation:enhancement.registation,
      courseCode:enhancement.courseCode,
      academicYear:enhancement.academicYear,
      semester:enhancement.semester,
      sport:enhancement.sport,
      event:enhancement.event,
      eventYear:enhancement.eventYear
 
    });

    console.log("thaana");
    //console.log(this.viewEnh.name);

    

}
/*viewEnh() {
  const rootRef = this.AngularFireDatabase.database().ref();

  const name = this.rootRef.child('Enhancement').orderByChild('name').equalTo('tharindu rukshan');
  
  /*this.firebase.list('/animals', {
    : {
      orderByChild: 'endangered_family_weight',
      equalTo: 'bird_10_false'
    }
  })
}*/

}
