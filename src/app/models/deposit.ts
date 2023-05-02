import {Product} from "./product";
import {Location} from "./location";

export class Deposit {
  id: number;
  name: string;
  location: Location;
  products: Product[];
  quantities: { [key: number]: number } ;

  constructor() {
    this.products = [];
    this.quantities = {};
  }
}
