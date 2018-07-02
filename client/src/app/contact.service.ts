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

  /**
   * @description It fetches all contacts from server
   * @return {Observable<Contact[]>}
   */
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl)
      .pipe(
        catchError(this.handleError('getContacts', []))
      );
  }

  /**
   * @description It fetches a particular Contact from server whose id is passed
   * @param {number} id - id used to find Contact
   * @return {Observable<Contact>}
   */
  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.contactUrl}/${id}`);
  }

  /**
   * @description It creates a new Contact in server
   * @param {Contact} myContact - Contact object which is to be added in DB
   * @return {Observable<Contact>}
   */
  createContact(myContact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, myContact).pipe(
      tap(_ => alert(`Contact added successfully!`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * @description It updates contact in the server
   * @param {Contact} myContact - Contact to be updated
   * @return {Observable<any>}
   */
  updateContact(myContact: Contact): Observable<any> {
    return this.http.put(this.contactUrl, myContact).pipe(
      tap(_ => alert(`Contact updated successfully!`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * @description It deletes a single contact from server
   * @param {number} id - Contact Id which is to be deleted.
   * @return {Observable<any>}
   */
  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.contactUrl}/${id}`).pipe(
      tap(_ => alert('Contact Deleted!')),
      catchError(this.handleError<any>('updateHero'))
    );
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
