import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { LogoModule } from './logo/logo.module';
import { HttpClientModule } from '@angular/common/http';
import { ButtonMenuModule } from './button-menu/button-menu.module';
import { ButtonMenuComponent } from './button-menu/button-menu.component';




@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    LogoModule,
    ButtonMenuModule,
   HttpClientModule
  ],
  exports : [ MenuComponent ]
})
export class MenuModule { }
