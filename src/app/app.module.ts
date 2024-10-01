import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { productReducer } from './store/product.reducer';
import { WidgetComponent } from './widget/widget.component';
import { HttpClientModule } from '@angular/common/http';

// StoreModule.forRoot({ products: productReducer })
@NgModule({
  declarations: [AppComponent, CardComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, WidgetComponent, HttpClientModule],
  providers: [provideStore(), provideState({ name: 'products', reducer: productReducer })],
  bootstrap: [AppComponent],
})
export class AppModule {}
