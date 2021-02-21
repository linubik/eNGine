import {Component, Input} from '@angular/core';
import { Critere } from './critere';

const DATA = [
  {
    nom:'CritereAuto',
    label:'AUT'
  },
  {
    nom:'CritereHA2',
    label:'HA2'
  }
]

/**
 * @title Criteres
 */
@Component({
  selector: 'criteres',
  templateUrl: 'criteres.component.html',
  styleUrls: ['criteres.component.css'],
})
export class CriteresComponent {
  @Input() data : Critere[];

  ngOnInit() {
    this.data = DATA;
  }
}

