import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Critere } from '../criteres/critere';
import { CritereComponent } from '../criteres/critere.component';
import { WidgetHostDirective } from './widget-host.directive';

@Component({
  selector: 'app-dynamic',
  template: `<ng-template [appWidgetHost]="data"></ng-template>`
})
export class DynamicComponent implements OnInit {

  @Input() data: Critere;

  @ViewChild(WidgetHostDirective, {static:true}) widgetHostDirective:WidgetHostDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  private injectComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    const componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory) as ComponentRef<CritereComponent>;
    componentRef.instance.data = this.data;
  }

  ngOnInit() {
    console.log('ngInit DynamicComponent');
    this.injectComponent();
    console.log(this.data);
  }

}
