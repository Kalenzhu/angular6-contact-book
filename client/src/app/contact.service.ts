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

  getContact(id: number): Contact {
    return CONTACTS.find(contact => contact.id === id);
  }

  createContact(myContact: Contact): void {
    CONTACTS.push(myContact);
    alert(`Contact added successfully!`);
  }

  updateContact(myContact: Contact): void {
    const contact = this.getContact(myContact.id);
    const index = CONTACTS.indexOf(contact);
    CONTACTS[index] = myContact;
    alert(`Contact updated successfully!`);
  }

  deleteContac(id: number): void {
    const contact = this.getContact(id);
    const index = CONTACTS.indexOf(contact);
    CONTACTS.splice(index, 1);
    alert('Contact Deleted!');
  }
}
