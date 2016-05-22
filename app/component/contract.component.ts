import { Component } from '@angular/core';

import { TrainingContract } from '../model/TrainingContract';

@Component({
  selector: 'contract-form',
  templateUrl: './app/template/contract-form.html'
})

export class ContractComponent {
  model = new TrainingContract();
  submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
