import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ItemComputer } from 'src/models/itemComputer';
import { ItemComputerViewModel } from 'src/models/itemComputerViewModel';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:44330/api/itemComputer';

@Injectable({
  providedIn: 'root'
})
export class ApiItemComputerService {

  constructor(private http: HttpClient) { }

  getItemComputers(id: number): Observable<ItemComputerViewModel> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<ItemComputerViewModel>(url).pipe(
      tap(_ => console.log(`leu os itens do computador com id=${id}`)),
      catchError(this.handleError<ItemComputerViewModel>(`getItemComputers id=${id}`))
    );
  }

  // getItemComputer(computerId: number, itemId: number): Observable<MaintenanceItemEditViewModel> {
  //   const url = `${apiUrl}/${itemId}/${maintenanceId}`;
  //   return this.http.get<MaintenanceItemEditViewModel>(url).pipe(
  //     tap(_ => console.log(`leu a manutenção de id=${maintenanceId} do item com id=${itemId}`)),
  //     catchError(this.handleError<MaintenanceItemEditViewModel>(`getMaintenanceItem itemId=${itemId} maintenanceId=${maintenanceId}`))
  //   );
  // }

  addItemComputer(itemComputer): Observable<ItemComputer> {
    return this.http.post<ItemComputer>(apiUrl, itemComputer, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((itemComputer: ItemComputer) => console.log(`adicionou o item do computador com w/
                        computerId=${itemComputer.computerId} e itemId=${itemComputer.itemId}`)),
      catchError(this.handleError<ItemComputer>('addItemComputer'))
    );
  }

  // updateMaintenanceItem(id, maintenanceItem): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, maintenanceItem, httpOptions).pipe(
  //     tap(_ => console.log(`atualiza a manutenção do item com
  //                       itemId=${id} e maintenanceId=${maintenanceItem.maintenanceId}`)),
  //     catchError(this.handleError<any>('updateMaintenanceItem'))
  //   );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
