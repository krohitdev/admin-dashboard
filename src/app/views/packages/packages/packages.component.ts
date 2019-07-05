import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packageForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.packageForm = this.formBuilder.group({
      package: ['', [Validators.required]],
      item_qty: ['', [Validators.required]],
      item_name: ['', [Validators.required]]
    });
  }
   // convenience getter for easy access to form fields
   get f() { return this.packageForm.controls; }

   Submit(){
    this.submitted = true;

    if (this.packageForm.invalid) {
        return;
    }
     console.log('called');
   }
}
