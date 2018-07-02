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

  /**
   * @description It fetches all the contacts
   */
  getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => this.contactList = contacts);
  }

  /**
   * @description It fetches message from child component
   * If it gets a reload message then it calls getContacts() method to refresh the data
   * @param $event
   */
  receiveMessage($event) {
    if ($event === 'reload') {
      this.getContacts();
    }
  }
}
