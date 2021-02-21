import { Component, OnInit, Input } from '@angular/core';
import { Critere } from '../criteres/critere';

@Component({
  selector: 'app-hello-world',
  template: `<h4>Hello World</h4>
  nom {{data.nom}}
  label {{data.label}}`
})
export class HelloWorldComponent implements OnInit {

@Input() data: Critere;

  constructor() { }

  ngOnInit() {
  }

}