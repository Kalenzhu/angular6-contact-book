import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {FormControl, Validators} from '@angular/forms';
import {ContactService} from '../contact.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact: Contact = new Contact();
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getContact();
  }

  /**
   * @description It gives the message to be displayed on Email Validation
   * @return {string | string | string}
   */
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  /**
   * @description It fetches the Contact for given Id
   */
  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id).subscribe(contact => this.contact = contact);
  }

  /**
   * @description It calls updateContact() from ContactService to update a contact
   */
  onSubmit(): void {
    this.contactService.updateContact(this.contact).subscribe(() => {
      this.router.navigate(['/thumbnail']);
    });
  }
}
