import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { DemoMaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DemoMaterialModule ],
  declarations: [ AppComponent, HelloComponent, ToolbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
