import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-dialoguebox',
  templateUrl: './dialoguebox.component.html',
  styleUrls: ['./dialoguebox.component.css'],
})
export class DialogueboxComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private api:ApiService) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  add = 'Add Course';


  //saving function data

  saveData()
  {
    if(this.productForm.valid)
    {
      this.api.postProduct(this.productForm.value).subscribe({
        next:(response)=>{
          alert('data inserted successfully');
          this.productForm.reset();
        },
        error:()=>
        {
          alert('404 error');
        }
      })
    }
  }
}
