import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  hitPoint: string = 'assets/DataSet.json';
  private https: HttpClient = inject(HttpClient)
  getAllDataSet(): Observable<any[]> {
    return this.https.get<any[]>(this.hitPoint)
      .pipe(
        tap(data => console.log("abc", data))
      )
  }
}
