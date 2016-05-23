import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/common';

import { ContractEditorComponent } from './component/contract-editor.component';

import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { ConventionFormationComponent } from './component/convention-formation.component';

import { Company } from './model/Company';

import { ContractService } from './services/contract.service'

@Component({
  selector: 'my-app',
  template: `
  <nav>
    <a [routerLink]="['/contrat']" >Saisie des infos</a>
    <a [routerLink]="['/convention-formation']" target="_blank">Convention de formation</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives: [
    ContractEditorComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [ ContractService ]
})

@Routes([
  {path: '/convention-formation', component: ConventionFormationComponent },
  {path: '/contrat', component: ContractEditorComponent}
])

export class AppComponent implements OnInit {
  constructor(private router: Router, private contractService: ContractService) {}
  ngOnInit() {
    this.router.navigate(['contrat'])
  }
  company: Company = new Company();
  // trainingContract: TrainingContract = new TrainingContract();
  // company: Company = new Company();
  // trainee: Trainee = new Trainee();
}
