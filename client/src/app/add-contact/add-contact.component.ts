import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  contact: Contact = new Contact();
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private contactService: ContactService,
              private router: Router) {
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(): void {
    this.contactService.createContact(this.contact);
    this.router.navigate(['/thumbnail']);
  }
}
