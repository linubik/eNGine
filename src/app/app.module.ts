import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { DemoMaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CriteresComponent } from './criteres/criteres.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, 
    DemoMaterialModule,
    AppRoutingModule,
    RouterModule ],
  declarations: [ 
      AppComponent, 
      HelloComponent, 
      ToolbarComponent,
      CriteresComponent
       ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
