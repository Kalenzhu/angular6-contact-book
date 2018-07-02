import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from '../contact';
import {MatSlideToggleChange} from '@angular/material';
import {ContactService} from '../contact.service';
import {ThumbnailListComponent} from "../thumbnail-list/thumbnail-list.component";

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() myContact: Contact;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  /**
   * @description Activates or Deactivates a Contact when user toggles button
   * @param {MatSlideToggleChange} event
   */
  toggleActivateContact(event: MatSlideToggleChange): void {
    this.myContact.isActive = event.checked;
    this.contactService.updateContact(this.myContact).subscribe();
  }

  /**
   * @description Deletes a contact for given id and sends reload message to parent
   * @param id - Contact Id
   */
  deleteContact(id) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.sendMessage('reload');
    });
  }

  /**
   * @description Sends message to parent component i.e. to ThumbnailListComponent.
   * In our case it tells the ThumbnailListComponent to reload the data as some of the data has been changed
   * @param {string} msg - Message to be sent to parent component
   */
  sendMessage(msg: string) {
    this.messageEvent.emit(msg);
  }
}
