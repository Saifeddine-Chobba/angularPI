import {Component, OnInit} from '@angular/core';
import {Deposit} from "../../../models/deposit";
import {DepositService} from "../../../services/deposit.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent implements OnInit{

  deposits : Deposit[] = [];
  private apiUrl = 'http://localhost:8080/deposits';

  constructor(private depositService : DepositService,
              private router:Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getDeposits();
  }

  getDeposits(): void {
    this.depositService.getAllDeposits().subscribe(
      (deposits) => {
        this.deposits = deposits;
        console.log('Deposits:', deposits);
      },
      (error) => {
        console.error('Error getting deposits:', error);
      }
    );
  }


  viewDeposit(index:number){
    // this.router.navigate(["/dashboard/deposits/"+index])
  }

  goToAddPage(){
    this.router.navigate(["/dashboard/deposits/add"])
  }

  deleteDeposit(id:number): void {
    this.depositService.deleteDeposit(id).subscribe(
      () => {
        console.log('Deposit deleted successfully');
        // Update the list of deposits, if necessary
      },
      (error) => {
        console.error('Error deleting deposit:', error);
      }
    );
  }


}
