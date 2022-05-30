import { Component, OnInit } from '@angular/core';
import { Customer } from 'types';
import { GetCustomersService } from 'services';
import { Observable, NEVER } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
 customers$: Observable<Customer[]> = NEVER;
 columns=[
   {header:'ששם', name:'CustomerName'},
   {header:'זהות', name:'CustomerId'},

   ]

  constructor(
    private customersService:GetCustomersService
  ) { }

  ngOnInit() {
   this.customers$ = this.customersService.getCustomersList$(); 
    
  }

}
