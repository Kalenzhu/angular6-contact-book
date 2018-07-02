import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Contact} from '../contact';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  contact: Contact = new Contact();
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(): void {
    console.log('contact', this.contact);
  }
}
