import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {}

  title = 'Login to your account';
  hide = true;

  profileForm = this.formbuilder.group({
    email: [''],
    password: [''],
  });
  getValue(data: NgForm) {

    let email = data.value.email;
    let password = data.value.password;

    const email1 = "sabin@gmail.com";
    const pass = 1234;
    if(email===email1 && password==pass)
    {
      this.toast.success({
        detail : "Login Success",
        summary : "Logged in Successfully",
        duration : 5000
      });
      this.router.navigate(['/dashboard/add']);

    }
    else{
      this.toast.error({
        detail : "Invalid Credentials",
        summary : "Invalid Credentials",
        duration : 5000
      })
    }
 }

}
