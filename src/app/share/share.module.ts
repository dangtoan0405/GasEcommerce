import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ClickOutsideDirective } from './directive/click-outside.directive';

@NgModule({
  declarations: [ClickOutsideDirective],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, ClickOutsideDirective],
})
export class ShareModule {}
