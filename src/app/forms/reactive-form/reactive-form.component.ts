import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  userForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl('Bhola'),
    address: new FormGroup({
      state: new FormControl(''),
      city: new FormControl(''),
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
