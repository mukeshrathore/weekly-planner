import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  billForm: FormGroup;
  basePath: string = null;
  bills: any = [];
  dataStore: Observable<any[]>;

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

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private db: AngularFirestore
  ) {
    this.basePath = this.sharedService.basePath;
    this.dataStore = db.collection(this.basePath, ref => ref.orderBy('billDate')).valueChanges();
    this.dataStore.subscribe(result => {
      this.bills = result.filter(obj => obj.deleteFlag === false);
    });
  }

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
      payMedium: null,
      deleteFlag: false
    });
  }

  addBill() {
    const billMonth = (Number((new Date(this.billForm.controls.billDate.value)).getMonth() + 1) < 10) ?
      `0${Number((new Date(this.billForm.controls.billDate.value)).getMonth() + 1)}` :
      `${Number((new Date(this.billForm.controls.billDate.value)).getMonth() + 1)}`;
    const billYear = Number((new Date(this.billForm.controls.billDate.value)).getFullYear());
    const billURL = `/bills_${billMonth}_${billYear}`;
    this.db.collection(this.basePath).get().toPromise().then(data => {
      this.billForm.controls.billId.setValue(data.size);
      this.sharedService.addBill(billURL, this.billForm.value);
      this.createForm();
    });
  }

  deleteItem(selectedRow) {
    console.log(selectedRow);
    // console.log('from db: ', this.db.collection(this.basePath).doc(selectedRow.billId));
    const billMonth = (Number((new Date(selectedRow.billDate.toDate())).getMonth() + 1) < 10) ?
      `0${Number((new Date(selectedRow.billDate.toDate())).getMonth() + 1)}` :
      `${Number((new Date(selectedRow.billDate.toDate())).getMonth() + 1)}`;
    const billYear = Number((new Date(selectedRow.billDate.toDate())).getFullYear());
    const billURL = `/bills_${billMonth}_${billYear}`;
    this.updateDoc(billURL, selectedRow.billId, true);
  }

  updateDoc(billURL: string, billId: number, billValue: boolean) {
    const doc = this.db.collection(billURL, ref => ref.where('billId', '==', billId));
    doc.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))).subscribe((result: any) => {
        const id = result[0].id; // first result of query [0]
        this.db.doc(`${this.basePath}/${id}`).update({ deleteFlag: billValue });
      })
  }

  /**
   * TO DO :
   * 1. Download csv file
   * 2. upload csv file 
   * 3. delete item == done
   * 4. edit item
   * 5. add Bill in dialog
   * 6. sorting datatable based on Purchase date
   * 7. show total
   * 8. show month wise datatable with custom pagination
   * 9. add bill id ==done
   * 10. create new collection if not built and save bills based on bill Date 
   */
}
