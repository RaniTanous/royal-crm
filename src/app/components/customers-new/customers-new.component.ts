import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss'],
})
export class CustomersNewComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  reset(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customersService.add(this.form);
      this.routerService.navigate(['..'], {
        relativeTo: this.activatedRouteService,
      });
    }
  }

  constructor(
    private customersService: CustomersService,
    private routerService: Router,
    private activatedRouteService: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
