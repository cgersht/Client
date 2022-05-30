import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMenuComponent } from './button-menu.component';
import { AllPipesModule } from 'pipes';




@NgModule({
  declarations: [ButtonMenuComponent],
  imports: [
    CommonModule,
    AllPipesModule
  ],
  exports: [ButtonMenuComponent]
})
export class ButtonMenuModule { }
