import { Component, OnInit, Input } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() myContact: Contact;


  constructor() { }

  ngOnInit() {
  }

}
