import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Maintenance } from 'src/models/maintenance';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:44330/api/maintenance';

@Injectable({
  providedIn: 'root'
})
export class ApiMaintenanceService {

  constructor(private http: HttpClient) { }

  getMaintenances(): Observable<Maintenance[]> {
    return this.http.get<Maintenance[]>(apiUrl)
      .pipe(
        tap(produtos => console.log('leu as manutenções')),
        catchError(this.handleError('getMaintenances', []))
      );
  }

  getMaintenance(id: number): Observable<Maintenance> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Maintenance>(url).pipe(
      tap(_ => console.log(`leu a manutenção id=${id}`)),
      catchError(this.handleError<Maintenance>(`getMaintenance id=${id}`))
    );
  }

  addMaintenance(maintenance): Observable<Maintenance> {
    return this.http.post<Maintenance>(apiUrl, maintenance, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((maintenance: Maintenance) => console.log(`adicionou a manutenção com w/ id=${maintenance.id}`)),
      catchError(this.handleError<Maintenance>('addMaintenance'))
    );
  }

  updateMaintenance(id, maintenance): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, maintenance, httpOptions).pipe(
      tap(_ => console.log(`atualiza a manutenção com id=${id}`)),
      catchError(this.handleError<any>('updateMaintenance'))
    );
  }

  deleteMaintenance(id): Observable<Maintenance> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Maintenance>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a manutenção com id=${id}`)),
      catchError(this.handleError<Maintenance>('deleteMaintenance'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
