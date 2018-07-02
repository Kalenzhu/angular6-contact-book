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

  toggleAtivateContact(event: MatSlideToggleChange): void {
    console.log('isActive', event.checked);
    // add code to activate or deactivate contact
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
