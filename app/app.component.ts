import { Component } from '@angular/core';

import { NgForm } from '@angular/common';

import { TrainingContract } from './model/TrainingContract';

import { Company } from './model/Company';

@Component({
  selector: 'my-app',
  templateUrl: './app/template/convention-formation.html'

})

@Component({
  selector: 'my-form',
  templateUrl: './app/template/contract-form.html'
})

export class AppComponent {
  trainingContract: TrainingContract = new TrainingContract();
  company: Company = new Company();
}
