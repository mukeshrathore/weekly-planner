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
  // errorLog: string = null;
  dataPath = 'bills'
  bills: Observable<any[]>;
  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private db: AngularFirestore,
    private datePipe: DatePipe
  ) {
    this.bills = db.collection(this.dataPath).valueChanges();
  }

  billMedium = [
    {
      value: 'Bank of America Credit Card',
      viewValue: 'Bank of America Credit Card'
    },
    {
      value: 'Bank Of America Checking Account',
      viewValue: 'Bank Of America Checking Account'
    },
    {
      value: 'Bank of America Debit Card',
      viewValue: 'Bank of America Debit Card'
    },
    {
      value: 'Cash',
      viewValue: 'Cash'
    },
    {
      value: 'Chase Credit Card',
      viewValue: 'Chase Credit Card'
    },
    {
      value: 'Discover Credit Card',
      viewValue: 'Discover Credit Card'
    },
    {
      value: 'Wells Fargo Checking Account',
      viewValue: 'Wells Fargo Checking Account'
    },
    {
      value: 'Wells Fargo Debit Card',
      viewValue: 'Wells Fargo Debit Card'
    }
  ];

  billCategories = [
    {
      value: 'Grocery',
      viewValue: 'Grocery'
    },
    {
      value: 'Gas',
      viewValue: 'Gas'
    },
    {
      value: 'Electricity Bill',
      viewValue: 'Electricity Bill'
    },
    {
      value: 'Utilities Bill',
      viewValue: 'Utilities Bill'
    },
    {
      value: 'Rent',
      viewValue: 'Rent'
    },
    {
      value: 'Car Insurance',
      viewValue: 'Car Insurance'
    },
    {
      value: 'Lycamobile Bill',
      viewValue: 'Lycamobile Bill'
    },
    {
      value: 'Netflix',
      viewValue: 'Netflix'
    },
    {
      value: 'Kodi',
      viewValue: 'Kodi'
    },
    {
      value: 'Ymca Bill',
      viewValue: 'Ymca Bill'
    },
    {
      value: 'Custom',
      viewValue: 'Custom'
    }
  ];

  stores = [
    {
      value: 'Patel Brother',
      viewValue: 'Patel Brother'
    },
    {
      value: 'Walmart',
      viewValue: 'Walmart'
    },
    {
      value: 'Dollar Tree',
      viewValue: 'Dollar Tree'
    },
    {
      value: 'Gabes',
      viewValue: 'Gabes'
    },
    {
      value: 'Around The World',
      viewValue: 'Around The World'
    },
    {
      value: 'Target',
      viewValue: 'Target'
    },
    {
      value: 'Custom',
      viewValue: 'Custom'
    }
  ];

  displayedColumns: string[] = ['billDate', 'billCategory', 'storeName', 'billAmount', 'payMedium', 'action'];

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.billForm = this.fb.group({
      billId: null,
      billDate: new Date(),
      billCategory: null,
      storeName: null,
      billAmount: null,
      payMedium: null
    });
  }

  addBill() {
    // this.errorLog = null;
    // console.log(this.billForm.value);
    // if (this.billForm.valid) {
    // const tempDate = this.billForm.controls.billDate.value;
    // this.billForm.controls.billDate.setValue(this.datePipe.transform(tempDate, 'MM/dd/yyyy'));

    this.db.collection(this.dataPath).get().toPromise().then(data => {
      this.billForm.controls.billId.setValue(data.size);
      this.sharedService.addBill(this.billForm.value);
      this.createForm();
    });

    // this.sharedService.addBill(this.billForm.value);
    // this.createForm();
    // } else {
    //   this.errorLog = 'Please fill all required fields.';
    // }

  }

  deleteItem(selectedRow) {
    console.log(selectedRow);
  }

  /**
   * TO DO :
   * 1. Download csv file
   * 2. upload csv file 
   * 3. delete item
   * 4. edit item
   * 5. add Bill in dialog
   * 6. sorting datatable based on Purchase date
   * 7. show total
   * 8. show month wise datatable with custom pagination
   * 9. add bill id
   */
}
