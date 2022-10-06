import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITransaction, JsonDataService, dataType} from "../../json-data.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, OnDestroy {
  currentTab: number = 0;
  transactionTypeMap: dataType[] = [ "income", "investment", "outcome", "loan" ]
  currentTransactions: ITransaction[] = []
  subscription: Subscription | undefined;

  constructor(private jsonDataService: JsonDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentTransactions = this.jsonDataService.getDataByType("income")
    this.subscription = this.route.queryParams
      .subscribe(params => {
      this.currentTab = Number(params["tab"]);
      this.currentTransactions = this.jsonDataService.getDataByType(this.transactionTypeMap[this.currentTab])
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
