import { Component, Input } from '@angular/core';

import { Company } from '../model/Company';

@Component({
  selector: 'company-form',
  templateUrl: './app/template/company-form.html'
})

export class CompanyComponent {
  @Input()
  company: Company;

  submitted = false;
  onSubmit() { this.submitted = true; }
}
