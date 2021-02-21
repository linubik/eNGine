interface Combo{
  nom : string;
  valeurs : string[];
  valeurSelectionnee : string;
}

export interface Critere {
  nom : string;
  label : string;
  combos ? : Combo[];
}