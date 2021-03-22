import {Component,Input} from '@angular/core';
import {CritereComponent} from '../critere.component';
import {Critere} from '../critere';

/**
 * @title Critere Auto
 */
@Component({
  selector: 'critere-auto',
  templateUrl: 'critere.auto.component.html',
  styleUrls: ['critere.auto.component.css'],
})
export class CritereAutoComponent extends CritereComponent {
  @Input() data: Critere;
}

