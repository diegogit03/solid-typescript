type CartItem = { name: string, price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

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

  public checkout(): void {
    if(this.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido.');
    this.saveOrder();
    this.clear();
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public sendMessage(msg: string): void {
    console.log(msg);
  }

  public saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  public clear(): void {
    console.log('O carrinho foi limpo...');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9 });
shoppingCart.addItem({ name: 'Lápis', price: 1.99 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
