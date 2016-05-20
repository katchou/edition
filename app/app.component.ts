import { Component } from '@angular/core';

import { NgForm } from '@angular/common';

import { TraineeComponent } from './component/trainee.component';

import { CompanyComponent } from './component/company.component';

// import { TrainingContract } from './model/TrainingContract';
//
// import { Company } from './model/Company';
//
// import { Trainee } from './model/Trainee';

@Component({
  selector: 'my-app',
  template: `
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-4"><trainee-form></trainee-form></div>
      <div class="col-xs-4"><company-form></company-form></div>
      <div class="col-xs-4">variable-metasyntaxique-2</div>
    </div>
  </div>

  `,
  directives: [
    TraineeComponent,
    CompanyComponent
  ]
})

export class AppComponent {
  // trainingContract: TrainingContract = new TrainingContract();
  // company: Company = new Company();
  // trainee: Trainee = new Trainee();
}
