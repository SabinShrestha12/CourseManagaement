import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private api :ApiService, private router:Router) { }

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
    // console.log(data.value.email);
    const email = data.value.email;
    const password = data.value.password;
    this.api.getDetails().subscribe((data)=>
    {
     if(data.email==email && password==data.password)
     {

       this.router.navigate(['dashboard']);
    }
     else{
       alert("Invalid Credentials");
     }
    })

  }
}
