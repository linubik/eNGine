import { Component, OnInit, Input } from '@angular/core';
import { Critere } from '../criteres/critere';

@Component({
  selector: 'app-dynamic',
  template: `<ng-template [appWidgetHost]="data"></ng-template>`
})
export class DynamicComponent implements OnInit {

  @Input() data: Critere;

  constructor() { }

  ngOnInit() {
  }

}