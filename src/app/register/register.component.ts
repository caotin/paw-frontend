import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  address: string;
  email: string;
  dateofbirth: string;
  facebooklink: string;
  viber: string;
  zalo: string;
  id: string;
  studystate: string;
  certificate: string;
  freetime: string;
  salaryrequirement: string;
  login: string;
  phonenumber: string;
  constructor() { }

  ngOnInit() {
  }

  loging(){}

}
