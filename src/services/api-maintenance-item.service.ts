import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { MaintenanceItem } from 'src/models/maintenanceItem';
import { MaintenanceItemViewModel } from 'src/models/maintenanceItemViewModel';
import { MaintenanceItemEditViewModel } from 'src/models/maintenanceItemEditViewModel';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:44330/api/maintenanceItem';

@Injectable({
  providedIn: 'root'
})
export class ApiMaintenanceItemService {

  constructor(private http: HttpClient) { }

  // getMaintenances(): Observable<Maintenance[]> {
  //   return this.http.get<Maintenance[]>(apiUrl)
  //     .pipe(
  //       tap(itens => console.log('leu as manutenções')),
  //       catchError(this.handleError('getMaintenances', []))
  //     );
  // }

  // GetMaintenanceItems(id: number): Observable<MaintenanceItemViewModel[]> {
  //   const url = `${apiUrl}/MaintenanceItems/${id}`;
  //   return this.http.get<MaintenanceItemViewModel[]>(url)
  //     .pipe(
  //       tap(maintenanceItens => console.log('leu as manutenções do item')),
  //       catchError(this.handleError('GetMaintenanceItems', []))
  //     );
  // }

  getMaintenanceItems(id: number): Observable<MaintenanceItemViewModel> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<MaintenanceItemViewModel>(url).pipe(
      tap(_ => console.log(`leu as manutenções do item com id=${id}`)),
      catchError(this.handleError<MaintenanceItemViewModel>(`getMaintenanceItems id=${id}`))
    );
  }

  getMaintenanceItem(itemId: number, maintenanceId: number): Observable<MaintenanceItemEditViewModel> {
    const url = `${apiUrl}/${itemId}/${maintenanceId}`;
    return this.http.get<MaintenanceItemEditViewModel>(url).pipe(
      tap(_ => console.log(`leu a manutenção de id=${maintenanceId} do item com id=${itemId}`)),
      catchError(this.handleError<MaintenanceItemEditViewModel>(`getMaintenanceItem itemId=${itemId} maintenanceId=${maintenanceId}`))
    );
  }

  addMaintenanceItem(maintenanceItem): Observable<MaintenanceItem> {
    return this.http.post<MaintenanceItem>(apiUrl, maintenanceItem, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((maintenanceItem: MaintenanceItem) => console.log(`adicionou a manutenção do item com w/
                        itemId=${maintenanceItem.itemId} e maintenanceId=${maintenanceItem.maintenanceId}`)),
      catchError(this.handleError<MaintenanceItem>('addMaintenanceItem'))
    );
  }

  updateMaintenanceItem(id, maintenanceItem): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, maintenanceItem, httpOptions).pipe(
      tap(_ => console.log(`atualiza a manutenção do item com
                        itemId=${id} e maintenanceId=${maintenanceItem.maintenanceId}`)),
      catchError(this.handleError<any>('updateMaintenanceItem'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
