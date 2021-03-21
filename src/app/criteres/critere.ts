import {GenericComponent} from '../generic/generic.component';

interface Combo{
  nom : string;
  valeurs : string[];
  valeurSelectionnee : string;
}

export interface Critere {
  nom : string;
  label : string;
  component: GenericComponent;
  combos ? : Combo[];
}