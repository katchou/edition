import { Component } from '@angular/core';

import { NgForm } from '@angular/common';

import { TrainingContract } from './model/TrainingContract';

import { Company } from './model/Company';

import { Trainee } from './model/Trainee';

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
  trainee: Trainee = new Trainee();
}

export class FormComponent {
  model = new Trainee();
  submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
