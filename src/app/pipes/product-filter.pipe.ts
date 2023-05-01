import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
    name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], searchValue: string): Product[] {
        return products.filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
}
