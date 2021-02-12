import { Messaging } from './srp/services/messaging';
import { Order } from './srp/entities/order';
import { Persistency } from './srp/services/persistency';
import { Product } from './srp/entities/product';
import { ShoppingCart } from './srp/entities/shoppingCart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
