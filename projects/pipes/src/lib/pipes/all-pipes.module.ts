import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetImgPathPipe } from './get-img-path.pipe';



@NgModule({
  declarations: [GetImgPathPipe],
  imports: [
    CommonModule
  ],
  exports: [GetImgPathPipe]
})
export class AllPipesModule { }
