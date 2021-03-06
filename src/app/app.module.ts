import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DemoMaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CriteresComponent } from './criteres/criteres.component';
import { ResultatComponent } from './resultat/resultat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicComponent } from './dynamic/dynamic.component';
import { WidgetHostDirective } from './dynamic/widget-host.directive';
import { PrettyPrintPipe } from './pretty-print.pipe';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, 
    DemoMaterialModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule ],
  declarations: [ 
      AppComponent, 
      ToolbarComponent,
      CriteresComponent,
      ResultatComponent,
      DynamicComponent,
      WidgetHostDirective,
      PrettyPrintPipe
       ],
  exports: [
    WidgetHostDirective
       ],
  bootstrap:    [ AppComponent ],
  entryComponents: []
})
export class AppModule { }
