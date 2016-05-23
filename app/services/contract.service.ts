import { Injectable } from '@angular/core';

import { Company } from '../model/Company';

import { Trainee } from '../model/Trainee';

import { TrainingContract } from '../model/TrainingContract';

@Injectable()
export class ContractService {
  private company: Company;
  private trainee: Trainee;
  private contract: TrainingContract;

  getContractData() {
    return { company: this.company, trainee: this.trainee, contract: this.contract }
  }
}
