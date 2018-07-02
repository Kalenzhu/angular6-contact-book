import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from "../contact";

@Component({
  selector: 'app-thumbnail-list',
  templateUrl: './thumbnail-list.component.html',
  styleUrls: ['./thumbnail-list.component.scss']
})
export class ThumbnailListComponent implements OnInit {

  contactList: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => this.contactList = contacts);
  }

  receiveMessage($event) {
    if ($event === 'reload') {
      this.getContacts();
    }
  }
}
