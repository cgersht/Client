import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { TableModule } from 'components';



@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports:[CustomersComponent]
})
export class CustomersModule { }
