import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  onSubmit(form:NgForm) {
    console.log(form);
  }

  onReset(form:NgForm) {
    form.resetForm();
  }
}
