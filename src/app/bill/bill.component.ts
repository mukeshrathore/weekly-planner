import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  billForm: FormGroup;
  bills: Observable<any[]>;
  constructor(private fb: FormBuilder, private sharedService: SharedService, private db: AngularFirestore) {
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

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.billForm = this.fb.group({
      billDate: [new Date(), Validators.required],
      // billName: [null, Validators.required],
      billCategory: [null, Validators.required],
      storeName: [null, Validators.required],
      billAmount: [null, Validators.required],
      payMedium: [null, Validators.required]
    });
  }

  addBill() {
    console.log(this.billForm.value);
    this.sharedService.addBill(this.billForm.value);
    this.billForm.reset();
  }
}
