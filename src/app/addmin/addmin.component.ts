import { Component, OnInit } from '@angular/core';
import{AngularFireList} from 'angularfire2/database';
import { EnhancementService } from '../enhancement/sharedEnhancement/enhancement.service';
import{ Enhancement } from '../enhancement/sharedEnhancement/enhancement.model';
import { element } from 'protractor';


@Component({
  selector: 'app-addmin',
  templateUrl: './addmin.component.html',
  styleUrls: ['./addmin.component.css'],
  providers: [ EnhancementService]
})
export class AddminComponent implements OnInit {
  enhList:Enhancement[];

  constructor(private enhancementService : EnhancementService) {
    //this.enhList = this.firebase.list('Enhancement');
   }

  ngOnInit() {

 var x = this.enhancementService.getData();
 x.snapshotChanges().subscribe(item=>{
   this.enhList=[];
   item.forEach(element => {
     var y = element.payload.toJSON();
     y["$key"] =element.key;
     this.enhList.push(y as Enhancement);

     
   })

 });
   
  }
  onItemClick(enh : Enhancement){
    this.enhancementService.enhancementSelect =Object.assign({},enh);

  }


}


