import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {CONTACTS} from './mock-contacts';
import {Observable, of} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactUrl = '/api/Contacts';

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl)
      .pipe(
        catchError(this.handleError('getContacts', []))
      );
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

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
