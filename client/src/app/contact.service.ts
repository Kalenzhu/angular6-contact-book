import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {CONTACTS} from './mock-contacts';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
  }

  getContacts(): Contact[] {
    return CONTACTS;
  }
}
