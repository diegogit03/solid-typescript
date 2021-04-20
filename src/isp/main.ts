/*
Interface segregation principle
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingCart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/Discount';
import { IndividualCustomer, EnterpriseCustomer } from './classes/Customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Diego', 'Henrique de oliveira Madero', '111.111.111-11')
const enterpriseCustomer = new EnterpriseCustomer('Empresa do diego', '2112412419720417');
const order = new Order(shoppingCart, messaging, persistency, individualCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
