import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
@Injectable()
export class ComponentLevelService {
  url:string="https://jsonplaceholder.typicode.com/todos"
  constructor(public http: HttpClient) {}
  getTodoAll(): Observable<any> {
      return this.http.get(this.url).pipe( map((response: Response) => {
        return response;
      }),
      catchError(this.handleError))
  }
  getById(id): Promise<any> {
    return this.http.get(this.url +"/"+ id)
    .pipe(map((response: Response) => response.json()))
    .toPromise().catch(this.handleError)
}
  private handleError(error: Response) {
    return throwError(error || "error");
  }
}
