import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ListSchedulesViewModel } from 'src/models/ListSchedulesViewModel';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:44330/api/schedule';

@Injectable({
  providedIn: 'root'
})
export class ApiScheduleService {

  constructor(private http: HttpClient) { }

  getListSchedules(): Observable<ListSchedulesViewModel[]> {
    return this.http.get<ListSchedulesViewModel[]>(apiUrl)
      .pipe(
        tap(listSchedules => console.log('leu as agendas')),
        catchError(this.handleError('getListSchedules', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
