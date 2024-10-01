export interface Product {
  productId: string;
  itemName: string;
  price: string;
  colors: any[];
  image?: string;
  isFavorite?: boolean;
  instanceId?: number;
}
