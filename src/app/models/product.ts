export class Product {
  idProduct: number;
  name: string;
  picture: string;
  category: string;
  description : string;
  price: number;
  discountPercent: number;
  available: boolean;
  archived: boolean;
  orders?: any[];
}
