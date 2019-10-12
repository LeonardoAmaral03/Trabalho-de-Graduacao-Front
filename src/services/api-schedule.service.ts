import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ListSchedulesViewModel } from 'src/models/listSchedulesViewModel';

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

  statusAccomplished(updateStatus): Observable<any> {
    const url = `${apiUrl}`;
    return this.http.put(url, updateStatus, httpOptions).pipe(
      tap(_ => console.log(`atualiza o status da manutenção com
                        computerId=${updateStatus.computerId} e itemId=${updateStatus.itemId} e
                        maintenanceId=${updateStatus.maintenanceId} com
                        a data=${updateStatus.maintenanceDate} para Realizada`)),
      catchError(this.handleError<any>('statusAccomplished'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
