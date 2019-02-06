import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  billForm: FormGroup;
  errorLog: string = null;
  bills: Observable<any[]>;
  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private db: AngularFirestore,
    private datePipe: DatePipe
  ) {
    this.bills = db.collection('bills').valueChanges();
  }

  billMedium = [
    {
      value: 'chase_cc',
      viewValue: 'Chase Credit Card'
    },
    {
      value: 'discover_cc',
      viewValue: 'Discover Credit Card'
    },
    {
      value: 'bofa_cc',
      viewValue: 'Bank of America Credit Card'
    },
    {
      value: 'bofa_dc',
      viewValue: 'Bank of America Debit Card'
    },
    {
      value: 'wells_dc',
      viewValue: 'Wells Fargo Debit Card'
    }
  ];

  billCategories = [
    {
      value: 'grocery',
      viewValue: 'Grocery'
    },
    {
      value: 'gas',
      viewValue: 'Gas'
    },
    {
      value: 'other',
      viewValue: 'other'
    },
  ];

  stores = [
    {
      value: 'patel',
      viewValue: 'Patel Brother'
    },
    {
      value: 'walmart',
      viewValue: 'Walmart'
    },
  ];

  displayedColumns: string[] = ['billDate', 'billCategory', 'storeName', 'billAmount', 'payMedium'];

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.billForm = this.fb.group({
      billDate: [new Date(), Validators.required],
      // billName: [null, Validators.required],
      billCategory: ['', Validators.required],
      storeName: ['', Validators.required],
      billAmount: ['', Validators.required],
      payMedium: ['', Validators.required]
    });
  }

  addBill() {
    this.errorLog = null;
    console.log(this.billForm.value);
    // const tempDate = this.billForm.controls.billDate.value;
    // this.billForm.controls.billDate.setValue(this.datePipe.transform(tempDate, 'MM/dd/yyyy'));
    // const requestData = this.billForm.value;
    if (this.billForm.valid) {
      this.sharedService.addBill(this.billForm.value);
      this.billForm.reset();
      this.createForm();
    } else {
      this.errorLog = 'Please fill all required fields.';
    }


    // this.billForm.updateValueAndValidity();

  }
}
