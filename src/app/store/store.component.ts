import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [AngularFirestore]
})
export class StoreComponent implements OnInit {

  stores: Observable<any[]>;
  constructor(db: AngularFirestore) { this.stores = db.collection('stores').valueChanges(); }


  ngOnInit() {
  }

}
