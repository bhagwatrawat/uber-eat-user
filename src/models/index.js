// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "PICKED_UP": "PICKED_UP",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "COMPLETED": "COMPLETED"
};

const { Basket, BasketDish, Dish, OrderDish, Order, Restaurant, User } = initSchema(schema);

export {
  Basket,
  BasketDish,
  Dish,
  OrderDish,
  Order,
  Restaurant,
  User,
  OrderStatus
};