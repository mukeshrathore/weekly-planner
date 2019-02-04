import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireDatabase } from 'angularfire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  basePath = '/stores';
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

  addBill(requestObj) {
    this.db.collection('/bills').add(requestObj);
    console.log('Success: Bill Added');
  }
}
