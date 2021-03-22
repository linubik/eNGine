import {CritereAutoComponent} from '../criteres/auto/critere.auto.component';
import {CritereHA2Component} from '../criteres/ha2/critere.ha2.component';

export const environment = {
  production:false,
  data: [
    {
      nom:'CritereAuto',
      label:'AUT',
      component:CritereAutoComponent
    },
    {
      nom:'CritereHA2',
      label:'HA2',
      component:CritereHA2Component
    },
    {
      nom:'Critere3',
      label:'HA3',
      component:CritereHA2Component
    }
  ]
}
