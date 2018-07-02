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

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.contactUrl}/${id}`);
  }

  createContact(myContact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, myContact).pipe(
      tap(_ => alert(`Contact added successfully!`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  updateContact(myContact: Contact): Observable<any> {
    return this.http.put(this.contactUrl, myContact).pipe(
      tap(_ => alert(`Contact updated successfully!`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deleteContac(id: number): void {
    // const contact = this.getContact(id);
    // const index = CONTACTS.indexOf(contact);
    // CONTACTS.splice(index, 1);
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
