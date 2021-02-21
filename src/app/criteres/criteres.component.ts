import {Component, Input} from '@angular/core';
import { Critere } from './critere';

/**
 * @title Criteres
 */
@Component({
  selector: 'criteres',
  templateUrl: 'criteres.component.html',
  styleUrls: ['criteres.component.css'],
})
export class CriteresComponent {
  @Input() data : Critere;
}

