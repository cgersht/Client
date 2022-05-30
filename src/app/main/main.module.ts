import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MenuModule } from './menu/menu.module';
import { ViewModule } from './view/view.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MenuModule,
    ViewModule
  ],
  exports:[MainComponent]
})
export class MainModule { }
