import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent,
        GlobalErrorComponent,
        ProductFilterPipe,
        ModalComponent,
        CreateProductComponent,
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
