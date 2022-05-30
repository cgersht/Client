import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportsComponent } from './transports.component';



@NgModule({
  declarations: [TransportsComponent],
  imports: [
    CommonModule
  ],
  exports:[TransportsComponent]
})
export class TransportsModule { }
