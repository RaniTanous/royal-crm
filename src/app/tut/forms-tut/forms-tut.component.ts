import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-tut',
  templateUrl: './forms-tut.component.html',
  styleUrls: ['./forms-tut.component.scss'],
})
export class FormsTutComponent implements OnInit {
  value = '';

  constructor() {}
  changeValue() {
    this.value = 'changed';
  }
  log(...rest) {
    console.log(...rest);
  }
  ngOnInit(): void {}
}
