import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ProductDetailService } from './shared/product-detail.service';
import { FormsModule} from "@angular/forms"
import { HttpClientModule } from  "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductDetailComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
