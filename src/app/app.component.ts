import { Component } from '@angular/core';
import { Product } from './models/product';
import { products as data } from './data/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Palping Angular';

    products: Product[] = data;
}
