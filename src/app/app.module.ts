import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { UiModule } from './ui.module'
import { CanvasComponent } from './canvas/canvas.component';
import { DrawerComponent } from './drawer/drawer.component';
import { NumberToIterablePipe } from './number-to-iterable.pipe'
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatSidenavModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

//Services
import { DropzonesService } from './dropzones.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    DragDropModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
    // UiModule
    
  ],
  providers: [
    DropzonesService
  ],
  exports: [
    UiModule
  ],
  declarations: [ 
    AppComponent,
    MainContentComponent,
    CanvasComponent,
    DrawerComponent,
    NumberToIterablePipe,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
