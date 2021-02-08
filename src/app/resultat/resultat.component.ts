import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Client {
  numClient: number;
  nom: string;
  prenom: string;
  autre: string;
}

const ELEMENT_DATA: Client[] = [
  {numClient: 1, nom: 'Nom1', prenom: 'PrenomClient1', autre: 'A1'},
  {numClient: 2, nom: 'Nom2', prenom: 'PrenomClient2', autre: 'A2'},
  {numClient: 3, nom: 'Nom3', prenom: 'PrenomClient3', autre: 'A3'},
  {numClient: 4, nom: 'Nom4', prenom: 'PrenomClient4', autre: 'A4'},
  {numClient: 5, nom: 'Nom5', prenom: 'PrenomClient5', autre: 'A5'},
  {numClient: 6, nom: 'Nom6', prenom: 'PrenomClient6', autre: 'A6'},
  {numClient: 7, nom: 'Nom7', prenom: 'PrenomClient7', autre: 'A7'},
  {numClient: 8, nom: 'Nom8', prenom: 'PrenomClient8', autre: 'A8'},
  {numClient: 9, nom: 'Nom9', prenom: 'PrenomClient9', autre: 'A9'},
  {numClient: 10, nom: 'Nom10', prenom: 'PrenomClient10', autre: 'A10'},
  {numClient: 11, nom: 'Nom11', prenom: 'PrenomClient11', autre: 'A11'},
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'resultat',
  styleUrls: ['resultat.component.css'],
  templateUrl: 'resultat.component.html',
})
export class ResultatComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */