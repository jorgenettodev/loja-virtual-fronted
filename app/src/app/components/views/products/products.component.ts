import { Component } from '@angular/core';
import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  // instantiate a service
  constructor(private service: ProductService) {

  }

  public test(): void {
    this.service.getProducts().subscribe(res => console.table(res));
  }
}
