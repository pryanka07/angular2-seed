import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact-component.css']
})

export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  public contacts = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitForm(): void {
    // console.log(this.contactForm.status); 
    // console.log(this.contactForm);

    this.contactForm.value.forEach(data => {
      console.log(data)
      // if (data.email.indexof(this.contactForm.value.email) > -1) {
      //   console.log("true")
      // } else {
      //   console.log("false")
      // }
    });
    // this.contacts.push(this.contactForm.value);
    
    // this.reset();
  }

  reset() {
    this.contactForm.reset();
  }
}

