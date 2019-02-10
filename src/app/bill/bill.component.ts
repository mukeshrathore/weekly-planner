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
  basePath: string = this.sharedService.basePath;
  currentMonth = (Number((new Date()).getMonth() + 1) < 10) ?
    `0${Number((new Date()).getMonth() + 1)}` :
    `${Number((new Date()).getMonth() + 1)}`;
  currentYear = Number((new Date()).getFullYear());
  selectedMonth: string = null;
  bills: any = [];
  billTotal = 0;
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

  displayedColumns: string[] = ['billDate', 'billCategory', 'storeName', 'payMedium', 'billAmount', 'action'];

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private db: AngularFirestore
  ) {

  }

  ngOnInit() {
    this.getSelectedMonth();
    this.getTableData();
    this.createForm();
  }

  getSelectedMonth(state: string = null) {
    switch (state) {
      case 'prev':
        this.currentMonth = (Number(this.currentMonth) - 1) < 10 ?
          `0${(Number(this.currentMonth) - 1)}` : `${(Number(this.currentMonth) - 1)}`;
        this.currentYear = this.currentYear;
        this.getMonthString(this.currentMonth, this.currentYear);
        this.getTableData(`/bills_${this.currentMonth}_${this.currentYear}`);
        break;

      case 'next':
        this.currentMonth = (Number(this.currentMonth) - 1) < 10 ?
          `0${(Number(this.currentMonth) + 1)}` : `${(Number(this.currentMonth) - 1)}`;
        this.currentYear = this.currentYear;
        this.getMonthString(this.currentMonth, this.currentYear);
        this.getTableData(`/bills_${this.currentMonth}_${this.currentYear}`);
        break;

      default:
        this.getMonthString(this.currentMonth, this.currentYear);
        break;
    }

  }

  getMonthString(currentMonth, currentYear) {

    switch (currentMonth) {
      case '01':
        this.selectedMonth = `Jan ${currentYear}`;
        break;

      case '02':
        this.selectedMonth = `Feb ${currentYear}`;
        break;

      case '03':
        this.selectedMonth = `Mar ${currentYear}`;
        break;

      case '04':
        this.selectedMonth = `Apr ${currentYear}`;
        break;

      case '05':
        this.selectedMonth = `May ${currentYear}`;
        break;

      case '06':
        this.selectedMonth = `Jun ${currentYear}`;
        break;

      case '07':
        this.selectedMonth = `Jul ${currentYear}`;
        break;

      case '08':
        this.selectedMonth = `Aug ${currentYear}`;
        break;

      case '09':
        this.selectedMonth = `Sep ${currentYear}`;
        break;

      case '10':
        this.selectedMonth = `Oct ${currentYear}`;
        break;

      case '11':
        this.selectedMonth = `Nov ${currentYear}`;
        break;

      case '12':
        this.selectedMonth = `Dec ${currentYear}`;
        break;

      default:
        break;
    }
  }


  getTableData(billURL = this.basePath) {
    this.bills = [];
    this.dataStore = this.db.collection(billURL, ref => ref.orderBy('billDate')).valueChanges();
    this.dataStore.subscribe(result => {
      this.bills = result.filter(obj => obj.deleteFlag === false);
      this.billTotal = this.bills.map(obj => obj.billAmount).reduce((acc, value) => acc + value, 0);;
    });
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
        this.db.doc(`${billURL}/${id}`).update({ deleteFlag: billValue });
      });
  }

  /**
   * TO DO :
   * 0. use full calender js lib to show data.
   * 1. Download csv file
   * 2. upload csv file 
   * 3. edit item
   * 4. add Bill in dialog
   * 5. delete item == done
   * 6. sorting datatable based on Purchase date ==done
   * 7. show total ==done
   * 8. show month wise datatable with custom pagination ==done
   * 9. add bill id ==done
   * 10. create new collection if not built and save bills based on bill Date ==done
   */
}
