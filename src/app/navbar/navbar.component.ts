import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { AppState } from '../store/app.state';
import { Store, select } from '@ngrx/store';
import { selectProducts } from '../store/product.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  favoritesProducts: Observable<Array<Product>> = this.store.pipe(select(selectProducts));
  constructor(private store: Store<AppState>) {}
}
