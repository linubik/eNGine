import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CriteresComponent } from './criteres/criteres.component';
import { CritereAutoComponent} from './criteres/auto/critere.auto.component';
import { CritereHA2Component} from './criteres/ha2/critere.ha2.component';

const routes: Routes = [
  { path: 'criteres', component: CriteresComponent },
  { path: 'criteres/auto', component: CritereAutoComponent },
  { path: 'criteres/ha2', component: CritereHA2Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }