import { Component, inject, Input, SimpleChanges } from '@angular/core';

import { AsyncPipe, NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { Product } from '../product';
import { catchError, EMPTY } from 'rxjs';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
    selector: 'pm-product-detail',
    templateUrl: './product-detail.component.html',
    standalone: true,
    imports: [AsyncPipe, NgIf, NgFor, CurrencyPipe]
})
export class ProductDetailComponent {

  @Input() productId: number = 0;
  errorMessage = '';
  pageTitle = 'ProductDetail';
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  // Product to display
  product$ = this.productService.product$
    .pipe(
      catchError(err =>{
        this.errorMessage = err;
        return EMPTY;
      }));

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
