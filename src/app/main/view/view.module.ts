import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';

import { MatIconModule, MatTabsModule } from '@angular/material';
import { CustomersModule } from './customers/customers.module';
import { TransportsModule } from './transports/transports.module';
import { OrdersModule } from './orders/orders.module';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
     MatTabsModule,
    MatIconModule,
    CustomersModule,
    TransportsModule,
    OrdersModule
  ],
  exports: [ViewComponent]
})
export class ViewModule { }
