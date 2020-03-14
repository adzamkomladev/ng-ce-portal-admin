import { Component, OnInit } from '@angular/core';
import { enterLeaveAnimation } from '../../animations/enter-leave.animation';

type LoginInputState = 'email' | 'password';

@Component({
  selector: 'app-login-form-card',
  templateUrl: './login-form-card.component.html',
  styleUrls: ['./login-form-card.component.scss'],
  animations: [enterLeaveAnimation]
})
export class LoginFormCardComponent implements OnInit {
  currentState: LoginInputState;
  form: { email: string; password: string; };

  constructor() {
    this.form = {
      email: '',
      password: ''
    };

    this.currentState = 'email';
  }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.currentState === 'email') {
      this.currentState = 'password';
    }

  }
}
