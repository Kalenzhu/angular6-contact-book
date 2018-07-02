import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  toggleActivateContact(event: MatSlideToggleChange): void {
    this.myContact.isActive = event.checked;
    this.contactService.updateContact(this.myContact).subscribe();
  }

  deleteContact(id) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.sendMessage('reload');
    });
  }

  sendMessage(msg: string) {
    this.messageEvent.emit(msg);
  }
}
