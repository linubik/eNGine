import {Component, Input} from '@angular/core';
import { Critere } from './critere';

/**
 * @title Critere
 */
@Component({
  selector: 'critere',
  templateUrl: 'critere.component.html'
})
export class CritereComponent {
  @Input() data : Critere;

}

