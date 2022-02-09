import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  title = "Login Area";
  hide = true;

  profileForm = this.formbuilder.group(
    {
      email : [''],
      password : [''],
    }
  )
  getValue(data:NgForm)
  {
    console.log(data);
  }
}
