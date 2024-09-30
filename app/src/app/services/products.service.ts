import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ProductService {
  // inject an httpClient

  public testService(): void {
    alert("testing service");
  }
  // create a test method here
}
