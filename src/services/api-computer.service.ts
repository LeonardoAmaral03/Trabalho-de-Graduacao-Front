import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Computer } from 'src/models/computer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:44330/api/computer';

@Injectable({
  providedIn: 'root'
})
export class ApiComputerService {

  constructor(private http: HttpClient) { }

  getComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(apiUrl)
      .pipe(
        tap(computers => console.log('leu os computadores')),
        catchError(this.handleError('getComputers', []))
      );
  }

  getComputer(id: number): Observable<Computer> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Computer>(url).pipe(
      tap(_ => console.log(`leu o computador id=${id}`)),
      catchError(this.handleError<Computer>(`getComputer id=${id}`))
    );
  }

  addComputer(computer): Observable<Computer> {
    return this.http.post<Computer>(apiUrl, computer, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((computer: Computer) => console.log(`adicionou o computador com w/ id=${computer.id}`)),
      catchError(this.handleError<Computer>('addComputer'))
    );
  }

  updateComputer(id, computer): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, computer, httpOptions).pipe(
      tap(_ => console.log(`atualiza o computador com id=${id}`)),
      catchError(this.handleError<any>('updateComputer'))
    );
  }

  deleteComputer(id): Observable<Computer> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Computer>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o computador com id=${id}`)),
      catchError(this.handleError<Computer>('deleteComputer'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
