import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/Data.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss'],
})
export class SentimentAnalysisComponent {
  constructor(private dataService: DataService , private router : Router) {}
  service: string = 'Reservation';
  sentimentData : any = [] ;
  serviceListResult : any = [];
  servicesList = ["Forum",
  "Delivery",
  "Order",
  "Reservation",
  "TechnicalProblem",
  "BadSuggestion",
  "CampingCenterRelated",
  "Payment",
  "Other",]

  ngOnInit(): void {
    this.getSentimentalClaims();
    this.getServicesComplains();
  }


  getServicesComplains() {
    this.servicesList.forEach(element => {
      this.dataService.getClaimedServices(element).subscribe((data)=>
      {
        this.serviceListResult.push({key: element, value: data})
      })
    });
  }

  getSentimentalClaims () {
    this.dataService.getSentimentalComplaint().subscribe((data)=>
    {
      this.sentimentData = data ;
      console.log(this.sentimentData);

    })
  }
}
