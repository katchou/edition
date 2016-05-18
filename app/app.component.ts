import { Component } from '@angular/core';

import { TrainingContract } from './model/TrainingContract'

import { Company } from './model/Company'

@Component({
  selector: 'my-app',
  templateUrl: './app/template/convention-formation.html'

})

export class AppComponent {
  trainingContract: TrainingContract = new TrainingContract();
  //   record: 'ZSDF-LOLSAURUS-REX',
  //   numberOfMonth: 6,
  //   startDate: new Date(),
  //   endDate: new Date('2020-01-01')
  // }
  company: Company = new Company();
  //   name: 'LOLCORP',
  //   address: '42 de la corniche',
  //   city: 'MELUUUUUUN',
  //   zipCode: '666',
  //   phoneNumber: 'string',
  //   SIRET: 'THIS IS SIRET',
  //   NAF: 'THIS IS NAF',
  //   email: 'mail@example.com',
  //   representative: 'Jean BOMBEUR'
  // }
}
