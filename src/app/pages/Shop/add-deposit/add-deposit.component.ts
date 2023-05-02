import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DepositService} from "../../../services/deposit.service";
import {MapService} from "../../../services/map.service";
import * as tt from "@tomtom-international/web-sdk-maps";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";
import {Deposit} from "../../../models/deposit";

@Component({
  selector: 'app-add-deposit',
  templateUrl: './add-deposit.component.html',
  styleUrls: ['./add-deposit.component.scss']
})
export class AddDepositComponent implements OnInit ,AfterViewInit{
  map : tt.Map;
  allProducts : Product[] ;
  products : number[] = [];
  quantities :number[] = [];
  longitude : number ;
  latitude : number;
  name : string;
  marker : tt.Marker = new tt.Marker();
  i:number = 0;
  constructor(private depositService:DepositService,
              private mapService:MapService,
              private productService:ProductService
              ) {
  }
  ngAfterViewInit(): void {
    this.map = tt.map({
      key: this.mapService.key,
      container: 'map',
    });

    this.map.on('click', this.handleMapClick.bind(this));

    if (document.getElementById('addSelect')) {
      const addSelect = document.getElementById('addSelect') as HTMLSelectElement;
      addSelect.addEventListener('click', () => {
        const container = document.createElement('div');
        container.classList.add('select-container');

        const select = document.createElement('select');
        this.allProducts.forEach((product) => {
          const option = document.createElement('option');
          option.value = product.idProduct.toString();
          option.text = product.name;
          select.id = "prod"+this.i.toString();
          select.add(option);
        });

        const quantitySelect = document.createElement('input');
        quantitySelect.id = "quant"+this.i.toString();

        const addButton = document.createElement('button');
        addButton.innerText = 'Add';
        addButton.classList.add('add');
        addButton.addEventListener('click', () => {
          const productId = parseInt(select.value);
          const quantity = parseInt(quantitySelect.value);
          this.addProduct(productId, quantity);
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
          container.remove();
        });

        container.appendChild(select);
        container.appendChild(quantitySelect);
        container.appendChild(addButton);
        container.appendChild(deleteButton);

        const row = document.getElementById('rowsContainer') as HTMLDivElement;
        row.appendChild(container);

        this.i++;
      });
    }
  }


  addProduct(id:number,quant:number){
    if (id && quant ){
      if (!this.products.includes(id)){
        this.products.push(id);
        this.quantities.push(quant);
        console.log(this.products,this.quantities)
      }
    }


  }
  updateProducts(): void {
    this.products = [];

    for (let index = 0; index < this.i; index++) {
      const select = document.getElementById(`prod${index}`) as HTMLSelectElement;

      if (select) {
        const value  = parseInt(select.value);
        if(!this.products.includes(value)){
          this.products.push(value);
          const quant = document.getElementById(`quant${index}`) as HTMLSelectElement;

          if (quant && this.products.length!=this.quantities.length) {
            const value  = parseInt(quant.value);
            this.quantities.push(value);
          }
        }
      }
    }

    console.log(this.products,this.quantities);
  }


  ngOnInit(): void {
    this.getProoducts()
  }

  getProoducts(){
    this.productService.getAllProducts()
      .subscribe(
        (products: Product[]) => {
          this.allProducts = products;
        },
        (error: any) => {
           console.log(error);
        }
      );
  }

  addDeposit() {
    this.depositService.createDeposit(this.name, this.products, this.quantities, this.longitude, this.latitude)
      .subscribe(
        (deposit) => {
          console.log('Deposit created:', deposit);

        },
        (error) => {
          console.error('Error creating deposit:', error);
        }
      );

  }

  handleMapClick(event: any) {
    const lngLat = event.lngLat;
    this.longitude = lngLat.lng;
    this.latitude = lngLat.lat;
    this.marker = this.mapService.setMarker(this.longitude,this.latitude,this.map)
    console.log(this.longitude,this.latitude)
  }


}
