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
    // console.log(data.value.email);
    const email = data.value.email;
    const password = data.value.password;
    this.api.getDetails().subscribe((data) => {
      if (data.email == email && password == data.password) {
        this.router.navigate(['dashboard/add']);
         this.toast.success({
          detail: 'Success Message',
          summary: 'Logged in Successfully',
          duration: 5000,
        });

      } else {
        this.toast.error({
          detail: 'Login Failed',
          summary: 'Invalid credetials',
          duration: 5000,
        });
      }
    });
  }
}
