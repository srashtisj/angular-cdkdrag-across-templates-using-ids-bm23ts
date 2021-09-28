import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatSidenavModule,
  MatCardModule,
  MatButtonModule,
} from '@angular/material'


const UI_MODULES = [
  DragDropModule,
  MatSidenavModule
]
@NgModule({
  imports: UI_MODULES,
  exports: UI_MODULES
})
export class UiModule { }