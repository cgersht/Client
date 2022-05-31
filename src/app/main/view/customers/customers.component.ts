import { Component, OnInit } from '@angular/core';
import { Customer, Column } from 'types';
import { GetCustomersService } from 'services';
import { Observable, NEVER } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
 customers$: Observable<Customer[]> = NEVER;
 columns: Column[]=[
   {header:'שם', name:'CustomerName'},
   {header:'שם מסד הנתונים', name:'DBName'},
   {header:'מודולים', name:'Modules'},
   {header:'מספר גירסה', name:'VersionID'},
   {header:'ביקור אחרון', name:'LastBackupPath'},
   {header:'שם האתר', name:'SiteName'},
   ]

  constructor(
    private customersService:GetCustomersService
  ) { }

  ngOnInit() {
   this.customers$ = this.customersService.getCustomersList$(); 
   
    
  }

}
