import { Component, OnInit } from '@angular/core';
import { InsuranceService } from './../services/insurance.service';
@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {

  constructor(
    public insuranceService: InsuranceService
  ) { }
  items:any;
  
  ngOnInit() {
    this.GetInsuranceList();
  }

  GetInsuranceList(){
    this.insuranceService.GetList().subscribe(data => {
      if(data.statusCode == 200){
        this.items = data.body;
      }
    },
    err => {       
      let error;
      let message;
      error = err.error.body.error.description;
      alert(error);
    }
    );
  }

}
