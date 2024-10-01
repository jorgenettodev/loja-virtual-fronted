import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService {
  // inject an httpClient

  constructor(private httpClient: HttpClient) {}

  public testService(): void {
    alert("testing service");
  }
  // create a GET method request
    // do this
      // than do that
  public getProducts(): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/produtos`);
  }

}
