import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [AngularFirestore]
})
export class StoreComponent implements OnInit {

  storeForm: FormGroup;
  stores: Observable<any[]>;
  constructor(
    private db: AngularFirestore,
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {
    this.stores = db.collection('stores').valueChanges();
  }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.storeForm = this.fb.group({
      storeName: [null, Validators.required],
      storeId: null
    });
  }

  addStore() {
    this.db.collection('/stores').get().toPromise().then(data => {
      this.storeForm.controls.storeId.setValue(data.size);
      this.sharedService.addStore(this.storeForm.value);
    });
  }
}
