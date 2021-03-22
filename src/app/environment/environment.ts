import {CritereAutoComponent} from '../criteres/auto/critere.auto.component';

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
      label:'HA2'
    },
    {
      nom:'Critere3',
      label:'HA3'
    }
  ]
}