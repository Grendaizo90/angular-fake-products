import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>('https://fakestoreapi.com/products', {
            params: new HttpParams({
                fromObject: {
                    limit: 5,
                },
            }),
        });
    }
}