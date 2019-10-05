import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Computer } from 'src/models/computer';
import { ItemComputer } from 'src/models/itemComputer';
import { ComputerScheduleViewModel } from 'src/models/computerScheduleViewModel';

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

  GetItemComputers(id: number): Observable<ItemComputer[]> {
    const url = `${apiUrl}/ItemComputer/${id}`;
    return this.http.get<ItemComputer[]>(url)
      .pipe(
        tap(itemComputers => console.log('leu os itens do computador')),
        catchError(this.handleError('GetItemComputers', []))
      );
  }

  GetComputerSchedules(id: number): Observable<ComputerScheduleViewModel[]> {
    const url = `${apiUrl}/ComputerSchedule/${id}`;
    return this.http.get<ComputerScheduleViewModel[]>(url)
      .pipe(
        tap(computerScheduleViewModels => console.log('leu a agenda de manutenção de cada item do computador')),
        catchError(this.handleError('GetComputerSchedules', []))
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

  deleteItemComputer(computerId, itemId): Observable<ItemComputer> {
    const url = `${apiUrl}/${computerId}/${itemId}`;

    return this.http.delete<ItemComputer>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o item do computador com computerId=${computerId} e itemId=${itemId}`)),
      catchError(this.handleError<ItemComputer>('deleteItemComputer'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
