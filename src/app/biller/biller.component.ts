import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

interface StoreInterface {
  storeName: string;
  storeId: number;
}

@Component({
  selector: 'app-biller',
  templateUrl: './biller.component.html',
  styleUrls: ['./biller.component.scss'],
  providers: [AngularFirestore]
})
export class BillerComponent implements OnInit {
  stores: Observable<any[]>;
  constructor(db: AngularFirestore) { this.stores = db.collection('stores').valueChanges(); }

  ngOnInit() {
  }

}
