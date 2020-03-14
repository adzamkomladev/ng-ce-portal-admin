import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { LoginComponent } from './login.component';
import { LoginFormCardComponent } from './components/login-form-card/login-form-card.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginFormCardComponent, LoginComponent],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginModule { }
