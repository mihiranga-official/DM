import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


function drt(){

}
@Injectable({
  providedIn: 'root'
})
export class TableObjectService {
  baseUrl:string = 'assets/student.json';//assign the HTTP url path
  private http:HttpClient = inject(HttpClient);//depedency injection re usebilty of code +HttpClient angulr https calling methods

 //method calling for gett  all student data via baseUrl
 getAllStudent():Observable<any[]>{
  return this.http.get<any[]>(this.baseUrl)
                  .pipe(
                    tap(data=>console.log("service",data))
                  )
 }

}
