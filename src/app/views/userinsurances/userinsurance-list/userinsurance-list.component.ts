import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-userinsurance-list',
  templateUrl: './userinsurance-list.component.html',
  styleUrls: ['./userinsurance-list.component.css']
})
export class UserinsuranceListComponent implements OnInit {
  items:any;
  showAlerts:boolean=true;
  alerts:[] = [];
  constructor(
    public userService : UserService
  ) { }

  ngOnInit() {
    this.GetInsuranceList();
    setTimeout(()=>{
      this.GetExpireAbleInsurance();
    },3000)
  
  }

  GetInsuranceList(){
    this.userService.GetUserInsuranceList().subscribe(data => {
      if(data.statusCode == 200){
        this.items = data.body;
      }
      let item = [];
      this.items.forEach((obj)=>{
        console.log(obj);

        if(this.checkDate(obj.expireDate)){
          obj['expireIn'] = true;
        }else{
          obj['expireIn'] = false;
        }
      });

      console.log('>>>>',this.items);
    },
    err => {       
      let error;
      let message;
      error = err.error.body.error.description;
      console.log(error);
    }
    );
  }

  GetExpireAbleInsurance(){
    this.userService.GetExpireAbleInsurance().subscribe(data=>{
      console.log(data);
      // data.body.insurance.forEach(element => {
      //   // alert.push({id:element.insuranceId});
      // });
     data.body.insurances.forEach(obj => {
        this.alerts.push({username:obj.userData[0].firstName,insuranceItem: obj.insuranceData[0].insuranceType,date:obj.expireDate});
      });

      this.showAlerts = true;
    },err=>{
      let error;
      let message;
      error = err.error.body.error.description;
      console.log(err);
    }
      )
  }


  checkDate(dateCheck){
    let from = new Date();      

    let newCurDate = new Date();      
    let to = new Date(newCurDate.setDate(newCurDate.getDate() + 7));

    var check = new Date(dateCheck);
    return check > from && check < to;
  }


}
