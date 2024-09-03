import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableObjectService {
  baseUrl:string = 'assets/student.json';
  private http:HttpClient = inject(HttpClient);//depedency injection re usebilty of code +
 getAllStudent():Observable<any[]>{
  return this.http.get<any[]>(this.baseUrl)
                  .pipe(
                    tap(data=>console.log("service",data))
                  )
 }

}
