import { Store, select } from '@ngrx/store';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { AppState } from '../store/app.state';
import { addProduct, removeProduct } from '../store/product.action';
import { Product } from '../model/product.model';
import { selectProductById } from '../store/product.selector';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() parentValue = '';

  cardItems: Product[] = [
    {
      productId: '123',
      itemName: 'Mens t-shirt',
      price: '$45.99',
      colors: ['#ff1', '#000', '#fb0000', '#ff69b4', '#192a56'],
    },
    {
      productId: '123',
      itemName: 'Mens t-shirt',
      price: '$45.99',
      colors: ['#ff1', '#000', '#fb0000', '#ff69b4', '#192a56'],
    },
  ];

  constructor(private store: Store<AppState>) {}

  addProduct(item: any, index: number) {
    this.store.dispatch(addProduct({ productList: { ...item, isFavorite: true } }));
  }

  removeProduct(item: any) {
    this.store.dispatch(removeProduct({ productId: item.productId }));
  }

  getProduct(productId: string) {
    // this.store.pipe(select(selectProductById))
  }
}
