import { Component } from '@angular/core';

import { Trainee } from '../model/Trainee';

@Component({
  selector: 'trainee-form',
  templateUrl: './app/template/trainee-form.html'
})

export class TraineeComponent {
  model = new Trainee();
  submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
