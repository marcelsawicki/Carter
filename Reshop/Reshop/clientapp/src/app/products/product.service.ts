import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, filter, map, Observable, of, shareReplay, switchMap, tap, throwError } from 'rxjs';
import { Product } from './product';
import { HttpErrorService } from '../utilities/http-error.service';
import { ReviewService } from '../reviews/review.service';
import { Review } from '../reviews/review';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);
  private reviewService = inject(ReviewService);

  private productSelectedSubject = new BehaviorSubject<number | undefined>(undefined);
  readonly productSelected$ = this.productSelectedSubject.asObservable();

  private products$ = this.http.get<Product[]>(this.productsUrl)
  .pipe(
    tap(p => console.log(JSON.stringify(p))),
    shareReplay(1),
    tap(() => console.log('After shareReply')),
    catchError(err => this.handleError(err))
  );

  products = toSignal(this.products$, { initialValue: [] as Product[]});
  
  getProduct(id: number) {
    const productUrl = this.productsUrl + '/' + id;
    return this.http.get<Product>(productUrl)
    .pipe(
      tap(() => console.log('In http.get by id pipeline')),
      switchMap(product => this.getProductWithReviews(product)),
      catchError(err => this.handleError(err))
    );
  }

  readonly product$ = this.productSelected$
    .pipe(
      filter(Boolean),
      switchMap(id => {
        const productUrl = this.productsUrl + '/' + id;
        return this.http.get<Product>(productUrl)
        .pipe(
          switchMap(product => this.getProductWithReviews(product)),
          catchError(err=> this.handleError(err))
        );
      })     
    );
  
  private getProductWithReviews(product: Product): Observable<Product> {
    if(product.hasReviews) {
      return this.http.get<Review[]>(this.reviewService.getReviewUrl(product.id))
      .pipe(
        map(reviews => ({...product, reviews} as Product))
      )
    } else {
      return of(product);
    }
  }

  // product$ = combineLatest([
  //   this.productSelected$,
  //   this.products$
  //   ])
  //   .pipe(
  //     map(([selectedProductId, products]) => 
  //       products.find(product => product.id === selectedProductId)),
  //     filter(Boolean),
  //     switchMap(product => this.getProductWithReviews(product)),
  //     catchError(err=> this.handleError(err))
  //   );

  productSelected(selectedProductId: number): void {
    this.productSelectedSubject.next(selectedProductId);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const formattedMessage = this.errorService.formatError(err);
    return throwError(() => formattedMessage);
  }

}