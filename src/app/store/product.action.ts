import { createAction, props } from '@ngrx/store';
import { Product } from '../model/product.model';

export const addProduct = createAction('[PRODUCT] Add product', props<{ productList: Product }>());
export const removeProduct = createAction('[PRODUCT] Remove product', props<{ productId: string }>());
export const updateAllProduct = createAction('[PRODUCT] Update product', props<{ productList: Product[] }>());
export const clearProduct = createAction('[PRODUCT] Clear');
