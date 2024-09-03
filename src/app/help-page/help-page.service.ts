import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpPageService {

  getting: string = 'assets/SampleData.json';
  private httpses: HttpClient = inject(HttpClient)
  getAllSampleDataSets(): Observable<any[]> {
    return this.httpses.get<any[]>(this.getting)
      .pipe(
        tap(dataSets => console.log("jani", dataSets)
        )
      )

  }
}
