import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firestore-tut',
  templateUrl: './firestore-tut.component.html',
  styleUrls: ['./firestore-tut.component.scss'],
})
export class FirestoreTutComponent implements OnInit {
  form = {
    object: '',
    idValue: '',
  };

  collectionRef: AngularFirestoreCollection<any>;
  constructor(private afs: AngularFirestore) {
    this.collectionRef = this.afs.collection('test');
  }

  add() {
    this.collectionRef.add(JSON.parse(this.form.object));
  }

  delete() {
    this.collectionRef.doc(this.form.idValue).delete();
  }

  set() {
    this.collectionRef.doc(this.form.idValue).set(JSON.parse(this.form.object));
  }
  update() {
    this.collectionRef
      .doc(this.form.idValue)
      .update(JSON.parse(this.form.object));
  }

  getResults: Observable<any>;
  get() {
    this.getResults = this.collectionRef.doc(this.form.idValue).get();
  }
  getAll() {
    this.getResults = this.collectionRef.get();
  }

  snapshotResults: Observable<any>;
  snapshot() {
    this.snapshotResults = this.collectionRef
      .doc(this.form.idValue)
      .snapshotChanges();
  }
  snapshotAll() {
    this.snapshotResults = this.collectionRef.snapshotChanges();
  }

  valueChangesResults: Observable<any>;
  valueChanges() {
    this.valueChangesResults = this.collectionRef
      .doc(this.form.idValue)
      .valueChanges();
  }
  valueChangesAll() {
    this.valueChangesResults = this.collectionRef.valueChanges({
      idField: 'id',
    });
  }

  ngOnInit(): void {}
}
