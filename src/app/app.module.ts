import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent,
        GlobalErrorComponent,
        ProductFilterPipe,
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
