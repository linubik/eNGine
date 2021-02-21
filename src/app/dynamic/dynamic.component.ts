import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Critere } from '../criteres/critere';
import { WidgetHostDirective } from './widget-host.directive';
import { HelloWorldComponent } from '../hello-world/hello-world.component';

@Component({
  selector: 'app-dynamic',
  template: `<ng-template [appWidgetHost]="data"></ng-template>`
})
export class DynamicComponent implements OnInit {

  @Input() data: Critere;

  @ViewChild(WidgetHostDirective, {static:true}) widgetHostDirective:WidgetHostDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  private injectComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HelloWorldComponent);
    const componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = this.data;
  }

  ngOnInit() {
    console.log('ngInit DynamicComponent');
    this.injectComponent();
    console.log(this.data);
  }

}