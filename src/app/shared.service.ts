import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireDatabase } from 'angularfire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // tempMonth = Number((new Date()).getMonth() + 1);
  currentMonth = (Number((new Date()).getMonth() + 1) < 10) ?
    `0${Number((new Date()).getMonth() + 1)}` :
    `${Number((new Date()).getMonth() + 1)}`;
  currentYear = Number((new Date()).getFullYear());

  basePath = `/bills_${this.currentMonth}_${this.currentYear}`;
  constructor(
    private db: AngularFirestore,
    // private db: AngularFirestoreModule
  ) { }

  addStore(requestObj) {
    // const obj = this.db.database.ref(this.basePath);
    this.db.collection(this.basePath).add(requestObj);
    // this.db.collection(this.basePath);
    // obj.push(requestObj);
    console.log('Success: Store Added');
  }

  addBill(billURL, requestObj) {
    this.db.collection(billURL).add(requestObj)
      .then(() => {
        console.log('Bill Added Successfully!!');
      })
      .catch((error) => {
        console.error('Error while adding Bill: ', error);
      });
  }
}
