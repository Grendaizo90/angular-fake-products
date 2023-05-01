import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { Observable, tap } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Palping Angular';
    loading = false;
    products$: Observable<Product[]>;
    term = '';

    constructor(private productsService: ProductService) {}

    ngOnInit(): void {
        this.loading = true;
        this.products$ = this.productsService.getAll().pipe(tap(() => (this.loading = false)));
    }
}
