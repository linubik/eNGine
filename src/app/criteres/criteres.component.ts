import {Component, Input, OnInit} from '@angular/core';
import { Critere } from './critere';
import { environment } from '../environment/environment';

/**
 * @title Criteres
 */
@Component({
  selector: 'criteres',
  templateUrl: 'criteres.component.html',
  styleUrls: ['criteres.component.css'],
})
export class CriteresComponent implements OnInit {
  @Input() data : Critere[];

  ngOnInit() {
    this.data = environment.data;
  }
}

