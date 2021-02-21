import { Directive, Input, ViewContainerRef } from '@angular/core';
import { Critere } from '../criteres/critere';

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {

  private data : Critere;

  @Input('appWidgetHost') set appWidgetHost(data : Critere) {
    this.data = data;
  }

  constructor(public viewContainerRef: ViewContainerRef) { }

}