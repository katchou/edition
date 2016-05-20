import { Component } from '@angular/core';

import { NgForm } from '@angular/common';

import { TrainingContract } from '../model/TrainingContract';

import { Company } from '../model/Company';

import { Trainee } from '../model/Trainee';

@Component({
  selector: 'convention-formation',
  templateUrl: './app/template/convention-formation.html'

})

export class ConventionFormationComponent {
  trainingContract: TrainingContract = new TrainingContract();
  company: Company = new Company();
  trainee: Trainee = new Trainee();
}
