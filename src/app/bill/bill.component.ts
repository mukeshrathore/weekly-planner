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

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.billForm = this.fb.group({
      billDate: [null, Validators.required],
      billName: [null, Validators.required],
      billCategory:[null, Validators.required],
      storeName: [null, Validators.required],
      billAmount: [null, Validators.required],
      PayMedium: [null, Validators.required]
    })
  }
  addBill() {

  }
}
