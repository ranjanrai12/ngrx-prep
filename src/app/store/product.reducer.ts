import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import { addProduct, clearProduct, removeProduct, updateAllProduct } from './product.action';
import { Product } from '../model/product.model';

export interface CartItem {
  itemName: string;
  price: string;
  colors: [];
}

export const initialState: AppState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(addProduct, (state, { productList }) => ({
    ...state,
    products: [...state.products, productList],
  })),
  on(removeProduct, (state, { productId }) => ({
    ...state,
    products: [...state.products.filter((item) => item?.productId === productId)?.slice(1)],
  })),
  on(updateAllProduct, (state, { productList }) => ({
    ...state,
    products: productList,
  })),
  on(clearProduct, (state) => initialState),
);
