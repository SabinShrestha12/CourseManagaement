import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../../services/api.service';
import {NgToastService} from 'ng-angular-popup'

@Component({
  selector: 'app-dialoguebox',
  templateUrl: './dialoguebox.component.html',
  styleUrls: ['./dialoguebox.component.css'],
})
export class DialogueboxComponent implements OnInit {
  action = 'save';
  add = 'Add Course';

  productForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogref: MatDialogRef<DialogueboxComponent>,
    private toast : NgToastService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });


    //fetching data


    if (this.editData) {
      this.action = 'update';
      this.productForm.controls['title'].setValue(this.editData.title);
      this.productForm.controls['description'].setValue(
        this.editData.description
      );
      this.productForm.controls['price'].setValue(this.editData.price);
    }
  }


  //saving function data

  saveData() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postProduct(this.productForm.value).subscribe({
          next: (response) => {
            console.log(response);
            this.productForm.reset();
            this.dialogref.close('save');
            this.toast.success({
              detail : 'Data Inserted',
              summary : 'Data inserted successfully',
              duration : 5000,
            });
          },
          error: () => {
            this.toast.error({
              detail : 'Data Inserted',
              summary : 'Data inserted successfully',
              duration : 5000,
            });
          },
        });
      }
    }
    else{
      this.updateCourse();
    }
  }

  updateCourse()
  {
    this.api.updateCourse(this.productForm.value,this.editData.course_id).subscribe({
      next : (response)=>
      {
        this.toast.success({
          detail : 'Data updated',
          summary : 'Data updated successfully',
          duration : 5000,
        });
        this.productForm.reset();
        this.dialogref.close('update');
      },
      error : ()=>
      {
          this.toast.error({
            detail : 'Data updation failed',
            summary : 'Data failed to update',
            duration : 5000,
          });
      }
    })
  }
}
