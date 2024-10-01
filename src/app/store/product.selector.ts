import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Product } from '../model/product.model';

export const selectAppState = createFeatureSelector<AppState>('products');
// get all products
// export const selectProducts = createSelector(selectAppState, (state) => state.products);

export const selectProducts = createSelector(selectAppState, (state) => state.products);
// get product by ID
// TODO: Need to COMPLETE why warning coming
export const selectProductById = createSelector(selectProducts, (products: Product[], props: { productId: string }) =>
  products.find((product) => product.productId === props.productId),
);
