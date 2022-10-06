import {Component, Input, OnInit} from '@angular/core';
import {typesOfTransaction} from "../../transactionTypes/transactionTypes";
import {JsonDataService} from "../../json-data.service";

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit{
  @Input() title!: "Income" | "Outcome" | "Investments" | "Loans";
  count: number = 0;
  tab: number = 0;

  constructor(private jsonDataService: JsonDataService) { }

  ngOnInit() {
    this.tab = typesOfTransaction[this.title];
    switch (this.title) {
      case "Income":
        this.count = this.jsonDataService.getTotalByType('income');
        break;
      case "Investments":
        this.count = this.jsonDataService.getTotalByType('investment');
        break;
      case "Outcome":
        this.count = this.jsonDataService.getTotalByType('outcome');
        break;
      case "Loans":
        this.count = this.jsonDataService.getTotalByType('loan');
        break;
      default:
        throw new Error('No such type')
    }
  }
}
