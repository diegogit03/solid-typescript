import { Discount } from './Discount';
import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {

  constructor(private readonly discount: Discount) {}

  private readonly _items: CartItem[] = [];

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  public total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  public totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public clear(): void {
    console.log('O carrinho foi limpo...');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

}
