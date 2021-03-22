import {CritereComponent} from './critere.component';

interface Combo{
  nom : string;
  valeurs : string[];
  valeurSelectionnee : string;
}
export interface CritereItem {
    libelle : string;
    type : string;
} 

export interface Critere {
  nom : string;
  label : string;
  component ? : any;
  criteres ? : CritereItem[];
  combos ? : Combo[];
}
