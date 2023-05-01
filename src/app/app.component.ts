import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { products as data } from './data/data';
import { ProductService } from './services/product.service';
import { Observable, tap } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Palping Angular';
    products$: Observable<Product[]>;
    loading = false;

    constructor(private productsService: ProductService) {}

    ngOnInit(): void {
        this.loading = true;
        this.products$ = this.productsService
            .getAll()
            .pipe(tap(() => (this.loading = false)));
    }
}
