import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(public fb: FormBuilder) { }
 
  get fname() {
    return this.userForm.get('firstname');
  }

  get emailE() {
    return this.userForm.get('email');
  }

  get getalternateemail() {
    return this.userForm.get('alternatermails') as FormArray;
  }

  userForm = this.fb.group({
    firstname: ['',[Validators.required, Validators.minLength(5)]],
    lastname: ['Bhola'],
    email:['',[Validators.required, Validators.email]],
    address: this.fb.group({
      state:[''],
      city:['']
    }),
    alternatermails: this.fb.array([])
  })

  updateForm() {
    this.userForm.patchValue({
      firstname:'subrat',
      address:{
        state:'Odisha',
        city:'berhampur'
      }
    })
  }

  addAlternateEmails() {
    this.getalternateemail.push(this.fb.control('',[Validators.required,Validators.email]));
  }
}
