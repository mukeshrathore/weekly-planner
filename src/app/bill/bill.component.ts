import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  billForm: FormGroup;
  constructor(private fb: FormBuilder) { }

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
      billDate: [null, Validators.required],
      // billName: [null, Validators.required],
      billCategory: [null, Validators.required],
      storeName: [null, Validators.required],
      billAmount: [null, Validators.required],
      PayMedium: [null, Validators.required]
    });
  }
  addBill() {

  }
}
