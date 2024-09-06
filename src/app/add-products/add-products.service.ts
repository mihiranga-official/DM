import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn:'root'

})
export class ProductService{
    apiEndPoint:string='assets/JobCardData.json'
    private https:HttpClient=inject(HttpClient)

    getAllJobCard():Observable<any[]>{
        return this.https.get<any[]>(this.apiEndPoint)
        .pipe(
            tap(dataset=>console.log("JobCardDataSets",dataset))
        )
    }
}