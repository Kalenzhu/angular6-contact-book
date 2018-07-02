import {Component, OnInit, Input} from '@angular/core';
import {Contact} from '../contact';
import {MatSlideToggleChange} from '@angular/material';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() myContact: Contact;


  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  toggleAtivateContact(event: MatSlideToggleChange): void {
    console.log('isActive', event.checked);
    // add code to activate or deactivate contact
  }

  deleteContact(id) {
    this.contactService.deleteContac(id);
  }
}
