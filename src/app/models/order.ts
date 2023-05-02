import {Product} from "./product";
import {User} from "./user";
import {paymentMethod} from "./paymentMethod";
import {status} from "./status";
import {Location} from "./location";

export class Ord {
  idOrder: number;
  products: Product[];
  amountsOrdered: number[];
  prices: number[];
  discounts: number[];
  date: string;
  status: status;
  paymentMethod: paymentMethod;
  deliveryTime: string;
  user: User;
  deliveryPerson: User;
  deliveryLocation: Location;

  constructor() {
    this.idOrder = 0;
    this.products = [];
    this.amountsOrdered = [];
    this.prices = [];
    this.discounts = [];
    this.paymentMethod = paymentMethod.Cash;
    this.user = new User();
    this.deliveryPerson = new User();
    this.deliveryLocation = new Location();
  }
}
