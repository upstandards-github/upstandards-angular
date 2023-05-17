import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  userForm = this.fb.group({
    firstname: ['',[Validators.required, Validators.minLength(5)]],
    lastname: ['Bhola'],
    address: this.fb.group({
      state:[''],
      city:['']
    })
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
}
