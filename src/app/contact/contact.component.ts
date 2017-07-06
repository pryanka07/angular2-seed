import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';
// export class Details{
// id:number;
// title:string;
// amount:string;
// }
// const :Details[]=[
// {id:11,title:'abc',amount:2000},
// {id:12,title:'xyz',amount:3000},
//  {id:13,title:'mno',amount:5000}
//  ];


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
    console.log(this.contactForm);
    this.contacts.push(this.contactForm.value);
    this.reset();
console.log(this.contactForm.value); 
  }
  reset() {
    this.contactForm.reset();
  }
}
