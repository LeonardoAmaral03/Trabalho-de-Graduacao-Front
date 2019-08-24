import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Item } from 'src/models/item';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:44330/api/item';

@Injectable({
  providedIn: 'root'
})
export class ApiItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(apiUrl)
      .pipe(
        tap(itens => console.log('leu os itens')),
        catchError(this.handleError('getItems', []))
      );
  }

  getItem(id: number): Observable<Item> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => console.log(`leu o item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  addItem(item): Observable<Item> {
    return this.http.post<Item>(apiUrl, item, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((item: Item) => console.log(`adicionou o item com w/ id=${item.id}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  updateItem(id, item): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, item, httpOptions).pipe(
      tap(_ => console.log(`atualiza o item com id=${id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  deleteItem(id): Observable<Item> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o item com id=${id}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
