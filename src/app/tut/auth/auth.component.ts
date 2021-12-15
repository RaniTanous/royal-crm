import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  user$;
  constructor(private afa: AngularFireAuth) {
    this.user$ = this.afa.authState;
  }

  form = {
    email: '',
    password: '',
  };

  createUser() {
    this.afa.createUserWithEmailAndPassword(
      this.form.email,
      this.form.password
    );
  }

  login() {
    this.afa.signInWithEmailAndPassword(this.form.email, this.form.password);
  }

  loginWithGooglePop() {
    this.afa.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  loginWithGoogleRedirect() {
    this.afa.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afa.signOut();
  }

  ngOnInit(): void {}
}
